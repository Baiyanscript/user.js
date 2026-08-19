// ==UserScript==
// https://greasyfork.org/zh-TW/scripts/539843-poxel-io-instant-reward-bypass-v2-2
// @name         Poxel.io Instant Reward Bypass v2.2
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  Bypass rewarded ads to grant reward instantly on poxel.io. 
// @author       Grok Updated
// @license      MIT 
// @match        https://poxel.io/*
// @grant        none
// @run-at       document-start
// @downloadURL https://update.greasyfork.org/scripts/539843/Poxelio%20Instant%20Reward%20Bypass%20v22.user.js
// @updateURL https://update.greasyfork.org/scripts/539843/Poxelio%20Instant%20Reward%20Bypass%20v22.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const log = (...args) => console.log('[InstantBypass v2.2]', ...args);
    const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    // ───────────────────────────────────────────────
    // NEW: Hook setTimeout to bypass 10s (10000ms) delays
    // ───────────────────────────────────────────────
    const origSetTimeout = window.setTimeout;
    window.setTimeout = function(callback, delay, ...args) {
        if (delay === 7000 && typeof callback === 'function') {
            log('Bypassed 7s cooldown timer → executing immediately');
            callback(...args);
            return; // Don't schedule original
        }
        return origSetTimeout(callback, delay, ...args);
    };
    log('setTimeout hooked for 10s bypass');

    // ───────────────────────────────────────────────
    // 1. Early fake SDK
    // ───────────────────────────────────────────────
    window.SDK = {
        showRewarded: function(reason) {
            log(`Fake SDK triggered → ${reason || 'unknown'}`);
            setTimeout(() => {
                if (typeof unityInstance !== 'undefined') {
                    unityInstance.SendMessage("SDKManager", "OnVideoAdEnded", "true");
                    log('✅ Fake SDK granted reward');
                }
            }, rnd(200, 800));
            return Promise.resolve({ success: true });
        }
    };
    log('Fake SDK injected');

    // ───────────────────────────────────────────────
    // 2. Hook SendMessage - force "false" to "true"
    // ───────────────────────────────────────────────
    const hookSendMessage = () => {
        if (typeof unityInstance === 'undefined') return;
        const orig = unityInstance.SendMessage;
        unityInstance.SendMessage = function(objectName, methodName, param) {
            if (objectName === "SDKManager" && methodName === "OnVideoAdEnded" && param === "false") {
                log('🛡️ Blocked "false" → forcing "true"');
                param = "true";
            }
            return orig.call(this, objectName, methodName, param);
        };
        log('SendMessage hooked');
    };

    const msgInterval = setInterval(() => {
        if (typeof unityInstance !== 'undefined') {
            hookSendMessage();
            clearInterval(msgInterval);
        }
    }, 300);

    // ───────────────────────────────────────────────
    // 3. Dynamic ad provider override (expanded search)
    // ───────────────────────────────────────────────
    const overridden = new Set();

    const overrideAdProviders = () => {
        for (const key in window) {
            if (!window.hasOwnProperty(key) || overridden.has(key)) continue;

            const obj = window[key];
            if (obj && typeof obj === 'object') {
                if (typeof obj.showRewarded === 'function' || typeof obj.showMidroll === 'function') {
                    log(`Found potential ad provider: ${key} → overriding`);
                    // Override showRewarded
                    if (typeof obj.showRewarded === 'function') {
                        const orig = obj.showRewarded;
                        obj.showRewarded = function(...args) {
                            log(`Bypassed ${key}.showRewarded`);
                            const delay = rnd(150, 900);
                            setTimeout(() => {
                                if (typeof unityInstance !== 'undefined') {
                                    unityInstance.SendMessage("SDKManager", "OnVideoAdEnded", "true");
                                    log('✅ Instant reward via provider bypass');
                                }
                            }, delay);
                            args.forEach(arg => {
                                if (typeof arg === 'function') arg(true);
                            });
                            return Promise.resolve(true);
                        };
                    }
                    // Override showMidroll
                    if (typeof obj.showMidroll === 'function') {
                        const origMid = obj.showMidroll;
                        obj.showMidroll = function(...args) {
                            log(`Bypassed ${key}.showMidroll`);
                            const delay = rnd(150, 900);
                            setTimeout(() => {
                                if (typeof unityInstance !== 'undefined') {
                                    unityInstance.SendMessage("SDKManager", "OnVideoAdEnded", "true");
                                }
                            }, delay);
                            args.forEach(arg => typeof arg === 'function' && arg(true));
                            return Promise.resolve(true);
                        };
                    }
                    overridden.add(key);
                }
            }
        }
    };

    // Run periodically and on load
    const providerInterval = setInterval(overrideAdProviders, 600);
    window.addEventListener('load', () => {
        setTimeout(overrideAdProviders, 2000);
    });

    // ───────────────────────────────────────────────
    // 4. Hook console.log to detect ShowAd start and force instant end
    // ───────────────────────────────────────────────
    const originalLog = console.log;
    console.log = function(...args) {
        const msg = args.join(' ');
        if (msg.includes('[SDKManager] ShowAd start WebGL: type=Rewarded')) {
            log('Detected ShowAd start → forcing instant end');
            setTimeout(() => {
                if (typeof unityInstance !== 'undefined') {
                    unityInstance.SendMessage("SDKManager", "OnVideoAdEnded", "true");
                    log('✅ Forced reward grant');
                } else {
                    log('unityInstance not ready yet for force');
                }
            }, 100);
        }
        originalLog.apply(console, args);
    };
    log('Console.log hooked for ShowAd detection');

    log('v2.2 loaded – instant reward + 10s cooldown bypass active');
})();
