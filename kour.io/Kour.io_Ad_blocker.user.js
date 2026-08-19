// ==UserScript==
// https://greasyfork.org/zh-TW/scripts/576645-kour-io-ad-blocker-by-wolf
// @name         Kour.io Ad blocker by wolf_
// @namespace    kour.io.
// @version      1.0
// @description  Remove ads on Kour.io for smoother gameplay experience
// @author       wolf_
// @match        https://kour.io/*
// @license      MIT
// @grant        none
// @run-at       document
// ==/UserScript==
 
(function() {
    'use strict';
 
    const ADSblocker = () => {
        document.querySelectorAll('[id^="kour-io"], [id^="nitro-kour"]')
            .forEach(ADSblocker => ADSblocker.remove());
    };
 
    setInterval(ADSblocker, 1000);
 
    ADSblocker();
})();
