// ==UserScript==
// @name         SwordMasters.io 殺人倍數 - 假包 + 反偵測版
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  核心倍數 + 隨機延遲 + 假包混淆 + 簡單反偵測（封包率監控 + 疲勞暫停）
// @author       Baiyan
// @match        https://swordmasters.io/*
// @grant        none
// @icon         https://www3.minijuegosgratis.com/v3/games/thumbnails/248539_7_sq.jpg
// @homepageURL  https://github.com/Baiyanscript/user.js/blob/main/SMST.user.js
// @downloadURL  https://github.com/Baiyanscript/user.js/raw/refs/heads/main/SMST.user.js
// @updateURL    https://github.com/Baiyanscript/user.js/raw/refs/heads/main/SMST.user.js
// ==/UserScript==

(function() {
    'use strict';

    // ==================== 設定 ====================
    const MAX_MULTIPLIER = 1000;           // 滑桿最大值（防過高）
    const FAKE_PACKET_CHANCE = 0.25;      // 插入假包機率 (25%)
    const PACKET_RATE_LIMIT = 80;         // 10秒內額外封包超過這個數 → 強制休息
    const FATIGUE_CHANCE = 0.4;           // 每輪疲勞觸發機率
    // =============================================

    let extraSentThisPeriod = 0;
    let monitorInterval = null;

    // 建立 UI
    var container = document.createElement('div');
    container.style.cssText = 'position:fixed;bottom:10px;left:10px;z-index:10001;background:rgba(0,0,0,0.75);color:#eee;padding:10px;border-radius:6px;font-family:Arial;font-size:13px;min-width:240px;box-shadow:0 2px 10px #000;';

    var header = document.createElement('div');
    header.style.cssText = 'cursor:pointer;font-weight:bold;padding:5px 0;';
    header.innerHTML = '殺人倍數 (假包+防偵) [點擊展開/收合]';

    var content = document.createElement('div');
    content.style.display = 'block';

    var status = document.createElement('div');
    status.style.margin = '8px 0';
    status.textContent = '狀態：啟用 ×1';

    var slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '1';
    slider.max = MAX_MULTIPLIER;
    slider.value = '1';
    slider.style.width = '100%';

    var valueShow = document.createElement('div');
    valueShow.style.marginTop = '6px';
    valueShow.innerHTML = '目前：×1';

    var warning = document.createElement('div');
    warning.style.color = '#ff9800';
    warning.style.fontSize = '11px';
    warning.style.marginTop = '8px';
    warning.textContent = '高倍率仍有可能被 ban，請謹慎使用';

    content.appendChild(status);
    content.appendChild(slider);
    content.appendChild(valueShow);
    content.appendChild(warning);

    container.appendChild(header);
    container.appendChild(content);
    document.body.appendChild(container);

    // 折疊功能
    header.onclick = function() {
        if (content.style.display === 'none') {
            content.style.display = 'block';
            header.innerHTML = '殺人倍數 (假包+防偵) [點擊收合]';
        } else {
            content.style.display = 'none';
            header.innerHTML = '殺人倍數 (假包+防偵) [點擊展開]';
        }
    };

    // 滑桿更新
    slider.oninput = function() {
        var val = parseInt(slider.value);
        valueShow.innerHTML = '目前：×' + val;
        status.textContent = '狀態：啟用 ×' + val;
    };

    // 假封包生成（可替換成你實際抓到的無害封包格式）
    function getFakeMessage() {
        const fakes = [
            'Client:Player:move|' + (Math.random()*1000).toFixed(0) + ',' + (Math.random()*1000).toFixed(0),
            'Client:Player:status?ping=' + Date.now(),
            'Client:Chat:say|test ' + Math.random().toString(36).slice(2,8),
            'Client:Inventory:check'
        ];
        return fakes[Math.floor(Math.random() * fakes.length)];
    }

    // WS hook
    var originalSend = WebSocket.prototype.send;
    WebSocket.prototype.send = function(data) {
        originalSend.apply(this, arguments);

        try {
            var text = (typeof data === 'string') ? data :
                       (data instanceof ArrayBuffer || ArrayBuffer.isView(data)) ?
                       new TextDecoder().decode(data) : data.toString();

            if (text.indexOf('Client:EnemyController:checkDamage') !== -1) {
                var mul = parseInt(slider.value);
                var extra = mul - 1;

                // 加入抖動：實際發送次數 ±1~3
                var actualExtra = extra + Math.floor(Math.random() * 7) - 3;
                actualExtra = Math.max(0, actualExtra);

                if (actualExtra > 0) {
                    var delayAcc = 0;

                    for (var i = 0; i < actualExtra; i++) {
                        // 隨機延遲 35~180ms
                        var delay = 35 + Math.random() * 145;
                        delayAcc += delay;

                        setTimeout(function(self, origData, idx) {
                            originalSend.call(self, origData);
                            extraSentThisPeriod++;

                            // 插入假包
                            if (Math.random() < FAKE_PACKET_CHANCE) {
                                var fake = getFakeMessage();
                                originalSend.call(self, fake);
                            }

                            // 疲勞暫停：每隔幾次有機會長休息
                            if (idx % 8 === 7 && Math.random() < FATIGUE_CHANCE) {
                                // 下次延遲直接 + 長暫停
                                delayAcc += 1500 + Math.random() * 2500;
                            }
                        }, delayAcc, this, data, i);
                    }
                }
            }
        } catch(e) {
            console.log('[Kill-Anti] error:', e);
            // 錯誤時強制降倍率
            slider.value = '1';
            status.textContent = '狀態：錯誤保護 ×1 (暫停30秒)';
            setTimeout(() => {
                status.textContent = '狀態：啟用 ×' + slider.value;
            }, 30000);
        }
    };

    // 封包率監控（每10秒檢查一次）
    monitorInterval = setInterval(function() {
        if (extraSentThisPeriod > PACKET_RATE_LIMIT) {
            status.textContent = '狀態：過載保護 (休息中...)';
            slider.disabled = true;

            var restTime = 8000 + Math.random() * 12000;
            setTimeout(function() {
                slider.disabled = false;
                status.textContent = '狀態：啟用 ×' + slider.value;
                extraSentThisPeriod = 0;
            }, restTime);
        }
        extraSentThisPeriod = 0; // 重置計數
    }, 10000);

    console.log('[Kill-Fake+Anti] 已載入 v1.4');
})();
