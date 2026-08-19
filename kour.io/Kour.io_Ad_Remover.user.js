// ==UserScript==
// https://greasyfork.org/en/scripts/555464-kour-io-ad-remover
// @name         Kour.io Ad Remover
// @namespace    kour.ad.remover
// @version      1.0
// @description  remove os anúncios irritantes do kour.io, CA
// @match        https://kour.io/*
// @run-at       document-end
// ==/UserScript==
 
(function() {
    'use strict';
 
    // Lista de IDs dos anúncios
    const adIDs = [
        "kour-io_300x600-parent",
        "kour-io_300x600",
        "kour-io_728x90",
        "nitro-kour-728x90",
        "kour-io_728x90-parent",
        "kour-io_300x250-parent",
        "kour-io_300x250"
    ];
 
    function removeAds() {
        adIDs.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.remove();
                console.log("Removido:", id);
            }
        });
    }
 
    // Roda no carregamento e também a cada 1s (porque o jogo recria coisa às vezes)
    removeAds();
    setInterval(removeAds, 1000);
})();
