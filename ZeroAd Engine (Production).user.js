// ==UserScript==
// @name         ZeroAd Engine (Production)
// @namespace    http://tampermonkey.net/
// @version      2026.02.18.4
// @description  Instantly skip ads in browser games (taming.io, CrazyGames, Poki, etc.) and get rewards without watching. Multi-SDK support: CrazygamesAds, AdInPlay, Poki, GameDistribution, CPMStar. No tracking, fully open source.
// @author       Claude
// @match        *://*/*
// @grant        none
// @run-at       document-start
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/539569/ZeroAd%20Engine%20%28Production%29.user.js
// @updateURL https://update.greasyfork.org/scripts/539569/ZeroAd%20Engine%20%28Production%29.meta.js
// ==/UserScript==

(function () {
    'use strict';

    // ═══════════════════════════════════════════════════════════
    // CONFIGURATION
    // ═══════════════════════════════════════════════════════════
    const DEBUG = false; // Set to true for console logging
    
    const CONFIG = {
        TIMINGS: {
            SDK_HOOK_INTERVAL: 500,        // Poll every 500ms for SDKs
            SDK_HOOK_MAX_ATTEMPTS: 20,     // Poll for max 10 seconds
            REWARD_DELAY_MIN: 200,         // Min delay before reward grant (ms)
            REWARD_DELAY_MAX: 400,         // Max delay before reward grant (ms)
            AD_CLEANUP_INTERVAL: 1800,     // Clean DOM every 1.8 seconds
        },
        SELECTORS: {
            AD_CONTAINERS: [
                '#videoad',
                '.aip-video',
                '.adplayer-wrapper',
                '.adsloading',
                '.adsh5',
                '#gv_adsContainer',
                '#gv_adsLoadingAdvertising',
                '[class*="ad-container"]',
                '[id*="ad-container"]'
            ],
            AD_IFRAMES: [
                'doubleclick.net',
                'googlesyndication.com',
                'adinplay',
                'cpmstar',
                'ima3',
                'adnxs.com',
                'advertising.com'
            ]
        }
    };

    // ═══════════════════════════════════════════════════════════
    // UTILITY FUNCTIONS
    // ═══════════════════════════════════════════════════════════
    function log(message, data = null) {
        if (!DEBUG) return;
        const timestamp = new Date().toISOString();
        const prefix = `[ZeroAd ${timestamp}]`;
        if (data !== null) {
            console.log(prefix, message, data);
        } else {
            console.log(prefix, message);
        }
    }

    function logError(message, error) {
        if (DEBUG) {
            console.error(`[ZeroAd ERROR]`, message, error);
        }
    }

    const isGameVui = /(^|\.)gamevui\.vn$/i.test(location.hostname);

    function randomDelay(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function createNoopPromise() {
        return Promise.resolve();
    }

    function createSuccessPromise() {
        return Promise.resolve(true);
    }

    function safeDispatchEvent(target, eventName) {
        try {
            const event = new Event(eventName, { bubbles: false, cancelable: false });
            target.dispatchEvent(event);
            log(`Dispatched event: ${eventName}`);
        } catch (error) {
            logError(`Failed to dispatch event: ${eventName}`, error);
        }
    }

    // ═══════════════════════════════════════════════════════════
    // CRAZYGAMES ADS API (window.CrazygamesAds)
    // ═══════════════════════════════════════════════════════════
    function hookCrazygamesAds() {
        // Strategy 1: Property trap before API is defined
        if (!window.CrazygamesAds && !window.__crazygamesAdsTrap) {
            window.__crazygamesAdsTrap = true;
            
            Object.defineProperty(window, 'CrazygamesAds', {
                configurable: true,
                enumerable: true,
                get: function() {
                    return window.__crazygamesAdsInstance;
                },
                set: function(adsApi) {
                    log('🎯 CrazygamesAds API detected!', adsApi);
                    
                    if (adsApi && !adsApi.__zaHooked) {
                        hookCrazygamesAdsAPI(adsApi);
                    }
                    
                    window.__crazygamesAdsInstance = adsApi;
                }
            });
            
            log('CrazygamesAds property trap installed');
            return true;
        }
        
        // Strategy 2: Hook existing API
        if (window.CrazygamesAds && !window.CrazygamesAds.__zaHooked) {
            return hookCrazygamesAdsAPI(window.CrazygamesAds);
        }
        
        return false;
    }

    function hookCrazygamesAdsAPI(adsApi) {
        if (!adsApi || adsApi.__zaHooked) return false;
        
        try {
            adsApi.__zaHooked = true;
            log('Hooking CrazygamesAds API methods...');

            // Hook requestAds - Primary ad request method
            if (typeof adsApi.requestAds === 'function') {
                const originalRequestAds = adsApi.requestAds;
                
                adsApi.requestAds = async function(adType, callbacks = {}) {
                    log(`CrazygamesAds.requestAds("${adType}") intercepted`);
                    
                    // Fire adStarted callback immediately
                    if (typeof callbacks.adStarted === 'function') {
                        try {
                            callbacks.adStarted();
                            log('Fired callbacks.adStarted');
                        } catch (e) {
                            logError('adStarted callback error', e);
                        }
                    }
                    
                    // Schedule adFinished callback with realistic delay
                    const delay = randomDelay(CONFIG.TIMINGS.REWARD_DELAY_MIN, CONFIG.TIMINGS.REWARD_DELAY_MAX);
                    
                    setTimeout(() => {
                        if (typeof callbacks.adFinished === 'function') {
                            try {
                                callbacks.adFinished();
                                log('Fired callbacks.adFinished - REWARD GRANTED');
                            } catch (e) {
                                logError('adFinished callback error', e);
                            }
                        }
                        
                        // Dispatch generic reward events for fallback
                        safeDispatchEvent(window, 'rewardedComplete');
                        safeDispatchEvent(window, 'rewardGranted');
                        safeDispatchEvent(window, 'adComplete');
                        
                    }, delay);
                    
                    return Promise.resolve({ success: true });
                };
                
                log('✓ CrazygamesAds.requestAds hooked');
            }

            // Hook render - Alternative ad rendering method
            if (typeof adsApi.render === 'function') {
                const originalRender = adsApi.render;
                
                adsApi.render = async function(adType, callbacks = {}) {
                    log(`CrazygamesAds.render("${adType}") intercepted`);
                    
                    if (typeof callbacks.adStarted === 'function') {
                        try {
                            callbacks.adStarted();
                        } catch (e) {}
                    }
                    
                    const delay = randomDelay(CONFIG.TIMINGS.REWARD_DELAY_MIN, CONFIG.TIMINGS.REWARD_DELAY_MAX);
                    setTimeout(() => {
                        if (typeof callbacks.adFinished === 'function') {
                            try {
                                callbacks.adFinished();
                                log('Fired callbacks.adFinished via render');
                            } catch (e) {}
                        }
                        safeDispatchEvent(window, 'rewardedComplete');
                        safeDispatchEvent(window, 'rewardGranted');
                    }, delay);
                    
                    return Promise.resolve({ success: true });
                };
                
                log('✓ CrazygamesAds.render hooked');
            }

            // Hook requestOnly - Pre-load method
            if (typeof adsApi.requestOnly === 'function') {
                adsApi.requestOnly = async function(adType, callbacks = {}) {
                    log(`CrazygamesAds.requestOnly("${adType}") intercepted`);
                    return Promise.resolve({ success: true });
                };
                log('✓ CrazygamesAds.requestOnly hooked');
            }

            // Hook initAds - Initialization
            if (typeof adsApi.initAds === 'function') {
                const originalInitAds = adsApi.initAds;
                adsApi.initAds = function(...args) {
                    log('CrazygamesAds.initAds called');
                    try {
                        return originalInitAds.apply(this, args);
                    } catch (e) {
                        log('initAds error (ignored)');
                        return Promise.resolve();
                    }
                };
                log('✓ CrazygamesAds.initAds hooked');
            }

            // Hook hasAdblock - Return false (we're not an adblocker)
            if (typeof adsApi.hasAdblock === 'function') {
                adsApi.hasAdblock = async function() {
                    log('CrazygamesAds.hasAdblock called (returning false)');
                    return Promise.resolve(false);
                };
                log('✓ CrazygamesAds.hasAdblock hooked');
            }

            log('🎉 CrazygamesAds API FULLY HOOKED');
            return true;

        } catch (error) {
            logError('Failed to hook CrazygamesAds', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // LEGACY CRAZYGAMES SDK (window.CrazyGames.SDK)
    // ═══════════════════════════════════════════════════════════
    function hookCrazyGamesSDK() {
        if (window.CrazyGames?.SDK?.ad && !window.CrazyGames.SDK.ad.__zaHooked) {
            const sdk = window.CrazyGames.SDK;
            
            try {
                sdk.ad.__zaHooked = true;

                if (typeof sdk.ad.requestAd === 'function') {
                    const originalRequestAd = sdk.ad.requestAd;
                    
                    sdk.ad.requestAd = function (type, callbacks = {}) {
                        log(`CrazyGames.SDK.ad.requestAd("${type}") called`);
                        
                        if (typeof callbacks.adStarted === 'function') {
                            try {
                                callbacks.adStarted();
                            } catch (e) {}
                        }

                        const delay = randomDelay(150, 300);
                        setTimeout(() => {
                            if (typeof callbacks.adFinished === 'function') {
                                try {
                                    callbacks.adFinished();
                                    log('Legacy SDK: adFinished fired');
                                } catch (e) {}
                            }
                            safeDispatchEvent(window, 'rewardedComplete');
                        }, delay);

                        return createNoopPromise();
                    };
                    
                    log('CrazyGames.SDK.ad.requestAd hooked (legacy)');
                }

                return true;
            } catch (error) {
                logError('Failed to hook CrazyGames SDK', error);
            }
        }
        return false;
    }

    // ═══════════════════════════════════════════════════════════
    // POKI SDK
    // ═══════════════════════════════════════════════════════════
    function hookPokiSDK() {
        if (!window.PokiSDK || window.PokiSDK.__zaHooked) {
            return false;
        }

        try {
            window.PokiSDK.__zaHooked = true;

            // Core ad methods
            window.PokiSDK.commercialBreak = createNoopPromise;
            
            window.PokiSDK.rewardedBreak = function (callbacks) {
                log('PokiSDK.rewardedBreak called');
                
                if (typeof callbacks === 'function') {
                    callbacks();
                }
                if (callbacks && typeof callbacks.onStart === 'function') {
                    callbacks.onStart();
                }
                
                setTimeout(() => {
                    safeDispatchEvent(window, 'rewardedComplete');
                    safeDispatchEvent(window, 'rewardGranted');
                }, randomDelay(200, 400));
                
                return createSuccessPromise();
            };

            // Platform-specific methods
            const platformMethods = ['playgroundCommercialBreak', 'platformCommercialBreak'];
            platformMethods.forEach(method => {
                if (typeof window.PokiSDK[method] === 'function') {
                    window.PokiSDK[method] = createNoopPromise;
                }
            });

            // Display ad suppression
            if (typeof window.PokiSDK.hoistDisplayAd === 'function') {
                window.PokiSDK.hoistDisplayAd = () => false;
            }

            // Internal monetization layer
            if (window.PokiSDK.__monetization) {
                window.PokiSDK.__monetization.requestAd = createNoopPromise;
                window.PokiSDK.__monetization.displayAd = () => false;
                window.PokiSDK.__monetization.init = createNoopPromise;
            }

            // Analytics no-ops
            const noopMethods = ['happyTime', 'gameLoading', 'gameplayStart', 'gameplayStop', 'captureError'];
            noopMethods.forEach(method => {
                if (typeof window.PokiSDK[method] === 'function') {
                    window.PokiSDK[method] = () => {};
                }
            });

            log('PokiSDK hooked');
            return true;

        } catch (error) {
            logError('PokiSDK hook failed', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // ADINPLAY SDK
    // ═══════════════════════════════════════════════════════════
    function hookAdInPlay() {
        // Hook aipPlayer constructor
        if (window.aipPlayer && !window.aipPlayer.__zaHooked) {
            const OriginalAipPlayer = window.aipPlayer;
            
            window.aipPlayer = function (config) {
                log('aipPlayer constructor called');
                
                const originalComplete = config?.AIP_COMPLETE;
                
                config.AIP_COMPLETE = function (state) {
                    log(`AIP_COMPLETE fired with state: "${state}"`);
                    
                    if (typeof originalComplete === 'function') {
                        try {
                            originalComplete.call(this, 'complete');
                        } catch (e) {
                            logError('AIP_COMPLETE error', e);
                        }
                    }
                    
                    if (window._adinplayTempSuccess) {
                        try {
                            window._adinplayTempSuccess();
                            delete window._adinplayTempSuccess;
                            delete window._adinplayTempFailure;
                            log('AdInPlay: temp success callback fired');
                        } catch (e) {
                            logError('AdInPlay temp callback error', e);
                        }
                    }
                    
                    safeDispatchEvent(window, 'rewardedComplete');
                    safeDispatchEvent(window, 'rewardGranted');
                };
                
                const instance = new OriginalAipPlayer(config);
                return instance;
            };
            
            window.aipPlayer.prototype = OriginalAipPlayer.prototype;
            window.aipPlayer.__zaHooked = true;
            
            log('aipPlayer constructor hooked');
            return true;
        }
        
        // Hook command queues
        if (window.aiptag?.cmd) {
            ['player', 'display', 'adplayer'].forEach(queueName => {
                if (!window.aiptag.cmd[queueName]) {
                    window.aiptag.cmd[queueName] = [];
                }
                
                const queue = window.aiptag.cmd[queueName];
                if (!queue.__zaHooked) {
                    const originalPush = queue.push;
                    queue.push = function (fn) {
                        if (typeof fn === 'function') {
                            try {
                                fn();
                            } catch (e) {
                                logError(`aiptag.cmd.${queueName} error`, e);
                            }
                        }
                        return originalPush.apply(this, arguments);
                    };
                    queue.__zaHooked = true;
                }
            });
        }
        
        return false;
    }

    // ═══════════════════════════════════════════════════════════
    // GAMEDISTRIBUTION
    // ═══════════════════════════════════════════════════════════
    function hookGameDistribution() {
        const api = window.GDSdk || window.gdsdk || window.gdApi;
        if (!api || api.__zaWrapped) return false;

        try {
            api.__zaWrapped = true;

            if (typeof api.showAd === 'function') {
                const originalShowAd = api.showAd;
                
                api.showAd = function (type, ...args) {
                    log(`GameDistribution.showAd("${type}") called`);
                    
                    const result = originalShowAd.apply(this, [type, ...args]);
                    
                    if (type === 'rewarded' || type === 'reward') {
                        setTimeout(() => {
                            safeDispatchEvent(window, 'rewardedComplete');
                            safeDispatchEvent(window, 'rewardGranted');
                            log('GameDistribution: reward granted');
                        }, randomDelay(180, 350));
                    }
                    
                    return result && typeof result.then === 'function' ? result : createSuccessPromise();
                };
            }

            log('GameDistribution hooked');
            return true;
        } catch (error) {
            logError('GameDistribution hook failed', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // CPMSTAR
    // ═══════════════════════════════════════════════════════════
    function hookCPMStar() {
        if (!window.CPMStarGameAPI || window.CPMStarGameAPI.__zaHooked) {
            return false;
        }

        try {
            window.CPMStarGameAPI.__zaHooked = true;

            const viewClasses = ['RewardedVideoView', 'InterstitialView', 'PrerollView'];

            viewClasses.forEach(className => {
                const ViewClass = window.CPMStarGameAPI[className];
                if (!ViewClass?.prototype) return;

                const proto = ViewClass.prototype;

                if (proto.show) {
                    const originalShow = proto.show;
                    proto.show = function (...args) {
                        log(`CPMStar ${className}.show() called`);
                        
                        const delay = randomDelay(320, 600);
                        setTimeout(() => {
                            if (typeof this.onClose === 'function') {
                                try {
                                    this.onClose();
                                } catch (error) {}
                            }

                            safeDispatchEvent(window, 'rewardedComplete');
                            safeDispatchEvent(window, 'rewardGranted');
                            log('CPMStar: reward granted');

                        }, delay);

                        if (originalShow) {
                            return originalShow.apply(this, args);
                        }
                        return this;
                    };
                }
            });

            log('CPMStar hooked');
            return true;

        } catch (error) {
            logError('CPMStar hook failed', error);
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // GOOGLE ADS
    // ═══════════════════════════════════════════════════════════
    function hookGoogleAds() {
        let hooked = false;

        try {
            if (window.googletag && !window.googletag.__zaHooked) {
                window.googletag.__zaHooked = true;
                if (!window.googletag.cmd) window.googletag.cmd = [];
                window.googletag.cmd.push = () => 0;
                if (typeof window.googletag.display === 'function') {
                    window.googletag.display = () => {};
                }
                hooked = true;
                log('googletag hooked');
            }

            if (Array.isArray(window.adsbygoogle) && !window.adsbygoogle.__zaHooked) {
                window.adsbygoogle.__zaHooked = true;
                window.adsbygoogle.push = () => 0;
                hooked = true;
                log('adsbygoogle hooked');
            }
        } catch (error) {
            logError('Google Ads hook failed', error);
        }

        return hooked;
    }

    // ═══════════════════════════════════════════════════════════
    // GAMEVUI.VN SPECIFIC
    // ═══════════════════════════════════════════════════════════
    function hookGameVui() {
        if (!isGameVui) return false;
        
        try {
            if (typeof window.GVAdBreak === 'function' && !window.__gvPatched) {
                window.__gvPatched = true;
                window.GVAdBreak = function (callback) {
                    if (typeof callback === 'function') setTimeout(callback, 300);
                };
                log('GameVui hooked');
            }
            
            CONFIG.SELECTORS.AD_CONTAINERS.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => el.remove());
            });
            
            return true;
        } catch (error) {
            return false;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // DOM CLEANUP
    // ═══════════════════════════════════════════════════════════
    function performAdCleanup() {
        try {
            // Remove ad containers
            CONFIG.SELECTORS.AD_CONTAINERS.forEach(selector => {
                document.querySelectorAll(selector).forEach(el => {
                    el.remove();
                    log(`Removed ad container: ${selector}`);
                });
            });

            // Remove and neutralize video elements
            document.querySelectorAll('video').forEach(video => {
                video.muted = true;
                video.pause();
                video.src = '';
                video.removeAttribute('src');
                video.load();
                if (video.parentNode) {
                    video.parentNode.removeChild(video);
                    log('Removed video element');
                }
            });

            // Remove ad iframes
            document.querySelectorAll('iframe').forEach(iframe => {
                const src = (iframe.src || '').toLowerCase();
                const isAdFrame = CONFIG.SELECTORS.AD_IFRAMES.some(domain => src.includes(domain));
                if (isAdFrame) {
                    iframe.remove();
                    log(`Removed ad iframe: ${src.substring(0, 60)}`);
                }
            });
        } catch (error) {
            logError('Cleanup error', error);
        }
    }

    // ═══════════════════════════════════════════════════════════
    // ORCHESTRATOR
    // ═══════════════════════════════════════════════════════════
    function initializeSDKHooks() {
        hookCrazygamesAds();      // CrazyGames primary
        hookCrazyGamesSDK();      // CrazyGames legacy
        hookPokiSDK();            // Poki
        hookAdInPlay();           // AdInPlay
        hookGameDistribution();   // GameDistribution
        hookCPMStar();            // CPMStar
        hookGoogleAds();          // Google Ads
        hookGameVui();            // GameVui.vn
        performAdCleanup();       // Clean DOM
    }

    // ═══════════════════════════════════════════════════════════
    // MUTATION OBSERVER
    // ═══════════════════════════════════════════════════════════
    let mutationObserver = null;
    
    function startMutationObserver() {
        if (mutationObserver) return;
        
        try {
            mutationObserver = new MutationObserver(performAdCleanup);
            const targetNode = document.documentElement || document.body;
            
            if (targetNode) {
                mutationObserver.observe(targetNode, {
                    childList: true,
                    subtree: true
                });
                log('MutationObserver started');
            }
        } catch (error) {
            logError('MutationObserver failed', error);
        }
    }

    // ═══════════════════════════════════════════════════════════
    // POLLING
    // ═══════════════════════════════════════════════════════════
    let pollingAttempts = 0;
    let pollingIntervalId = null;
    
    function startPolling() {
        if (pollingIntervalId) return;
        
        pollingIntervalId = setInterval(() => {
            pollingAttempts++;
            initializeSDKHooks();
            
            if (pollingAttempts >= CONFIG.TIMINGS.SDK_HOOK_MAX_ATTEMPTS) {
                clearInterval(pollingIntervalId);
                log(`Polling stopped after ${pollingAttempts} attempts`);
            }
        }, CONFIG.TIMINGS.SDK_HOOK_INTERVAL);
        
        log('Polling started');
    }

    // ═══════════════════════════════════════════════════════════
    // PERIODIC CLEANUP
    // ═══════════════════════════════════════════════════════════
    function startPeriodicCleanup() {
        setInterval(performAdCleanup, CONFIG.TIMINGS.AD_CLEANUP_INTERVAL);
        log('Periodic cleanup started');
    }

    // ═══════════════════════════════════════════════════════════
    // MAIN ENTRY POINT
    // ═══════════════════════════════════════════════════════════
    function main() {
        log('ZeroAd Engine initializing...');

        // Immediate hook attempt
        initializeSDKHooks();

        // Start polling for late-loaded SDKs
        startPolling();

        // Start mutation observer after DOM loads
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', startMutationObserver);
        } else {
            startMutationObserver();
        }

        // Start periodic cleanup
        startPeriodicCleanup();

        log('ZeroAd Engine v2026.02.18.3 initialized');
        log('Supported SDKs: CrazygamesAds, CrazyGames SDK, Poki, AdInPlay, GameDistribution, CPMStar, Google Ads');
    }

    // Initialize on script load
    main();

})();
