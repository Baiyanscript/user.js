// ==UserScript==
// @name         IG FB 解除靜音、增加可點擊的進度條
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  強制取消靜音 + 音量滑桿
// @author       Baiyan
// @icon         https://raw.githubusercontent.com/Baiyanscript/all-obfuscated/refs/heads/main/icon/IG-FB.png
// @homepage     https://github.com/Baiyanscript/user.js
// @supportURL   https://github.com/Baiyanscript/user.js
// @match        https://www.instagram.com/*
// @match        https://www.facebook.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let activeVideo = null;
    let activeUI = null;
    let autoUnmute = true;

    function formatTime(sec) {
        if (!sec) return "0:00";
        let h = Math.floor(sec / 3600);
        let m = Math.floor((sec % 3600) / 60);
        let s = Math.floor(sec % 60);
        return h > 0
            ? `${h}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
            : `${m}:${s.toString().padStart(2,'0')}`;
    }

    function isVisible(el) {
        const r = el.getBoundingClientRect();
        return r.top < window.innerHeight && r.bottom > 0;
    }

    const icon = {
        play: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>`,
        pause: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6 5h4v14H6zm8 0h4v14h-4z"/></svg>`,
        volume: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M3 9v6h4l5 5V4L7 9H3z"/></svg>`,
        mute: () => `<svg width="18" height="18" viewBox="0 0 24 24" fill="white">
            <path d="M3 9v6h4l5 5V4L7 9H3z"/>
            <line x1="16" y1="8" x2="22" y2="16" stroke="white" stroke-width="2"/>
            <line x1="22" y1="8" x2="16" y2="16" stroke="white" stroke-width="2"/>
        </svg>`
    };

    function createUI(video) {
        if (activeUI) activeUI.remove();
        activeVideo = video;

        const ui = document.createElement("div");
        activeUI = ui;

        ui.style.position = "absolute";
        ui.style.bottom = "0";
        ui.style.left = "0";
        ui.style.width = "100%";
        ui.style.background = "rgba(0,0,0,0.6)";
        ui.style.color = "#fff";
        ui.style.padding = "8px";
        ui.style.zIndex = 99999;

        ui.innerHTML = `
        <div style="display:flex;align-items:center;gap:8px;">
            <button id="play">${icon.play()}</button>
            <span id="time">0:00 / 0:00</span>
            <input type="range" id="progress" min="0" max="100" value="0" style="flex:1;">

            <div id="volBox" style="position:relative;">
                <button id="mute">${icon.volume()}</button>
                <input id="volume" type="range" min="0" max="1" step="0.01"
                style="display:none;position:absolute;bottom:30px;height:80px;">
            </div>
            <button id="">By</button>
            <button id="">Baiyan</button>
       </div>
        `;

        video.parentElement.style.position = "relative";
        video.parentElement.appendChild(ui);

        const play = ui.querySelector("#play");
        const time = ui.querySelector("#time");
        const progress = ui.querySelector("#progress");
        const mute = ui.querySelector("#mute");
        const volume = ui.querySelector("#volume");
        const volBox = ui.querySelector("#volBox");

        // 🔥 強制解除靜音（關鍵）
        if (autoUnmute) {
            let count = 0;
            const interval = setInterval(() => {
                video.muted = false;
                if (video.volume === 0) video.volume = 1;
                count++;
                if (count > 10) clearInterval(interval);
            }, 300);
        }

        // ===== 播放 =====
        play.onclick = () => video.paused ? video.play() : video.pause();

        const syncPlayState = () => {
            play.innerHTML = video.paused ? icon.play() : icon.pause();
        };

        video.addEventListener("play", syncPlayState);
        video.addEventListener("pause", syncPlayState);
        syncPlayState();

        // ===== 進度 =====
        video.addEventListener("timeupdate", () => {
            progress.value = (video.currentTime / video.duration) * 100 || 0;
            time.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
        });

        progress.oninput = () => {
            video.currentTime = (progress.value / 100) * video.duration;
        };

        // ===== 音量滑桿 =====
        volume.value = video.volume;

        volume.oninput = () => {
            video.volume = volume.value;
            video.muted = volume.value == 0;
        };

        mute.onclick = () => {
            video.muted = !video.muted;
            mute.innerHTML = video.muted ? icon.mute() : icon.volume();
        };

        volBox.onmouseenter = () => volume.style.display = "block";
        volBox.onmouseleave = () => volume.style.display = "none";

        // ===== 雙擊跳轉 =====
        video.addEventListener("dblclick", (e) => {
            const rect = video.getBoundingClientRect();
            const x = e.clientX - rect.left;

            if (x < rect.width / 2) {
                video.currentTime = Math.max(0, video.currentTime - 10);
            } else {
                video.currentTime = Math.min(video.duration, video.currentTime + 10);
            }
        });
    }

    function scanVideos() {
        const vids = document.querySelectorAll("video");
        for (let v of vids) {
            if (isVisible(v)) {
                if (v !== activeVideo) createUI(v);
                break;
            }
        }
    }

    const observer = new MutationObserver(scanVideos);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("scroll", scanVideos);
    setInterval(scanVideos, 1000);

})();
