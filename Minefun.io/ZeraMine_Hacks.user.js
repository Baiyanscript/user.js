// ==UserScript==
// @name ZeraMine Hacks
// @description The only mod you will need for minefun.From hacking to chattranslation or shaders.It has it all along with 2xfps booster.DOWNLOAD NOW!!!!
// @version 5.5.3
// @author ZeraMine
// @match https://*.minefun.io/*
// @match *://minefun.io/*
// @grant none
// @namespace https://greasyfork.org/users/1578757
// @downloadURL https://update.greasyfork.org/scripts/572644/ZeraMine%20Hacks.user.js
// @updateURL https://update.greasyfork.org/scripts/572644/ZeraMine%20Hacks.meta.js
// ==/UserScript==
(() => {
    "use strict";
    var e = {
            679: (e, t, n) => {
                n.d(t, {
                    A: () => r
                });
                var s = n(601),
                    o = n.n(s),
                    i = n(314),
                    a = n.n(i)()(o());
                a.push([e.id, `@font-face {\n    font-family: \"Product Sans\";\n    src: url(https://fonts.gstatic.com/s/productsans/v19/pxiDypQkot1TnFhsFMOfGShVF9eO.woff2);\n}\n\n:root {
    /* Zeraora's Signature Electric Cyan and Yellow */
    --ZeraMine-accent-color: linear-gradient(90deg, #00f2ff 0%, #70e1ff 100%);
    --zeraora-yellow: linear-gradient(90deg, rgba(112, 225, 255, 1) 0%, rgba(255, 251, 0, 1) 100%);
    --zeraora-dark-fur: #2c2c2c;

    /* UI Overwrites */
    --button-color: rgba(30, 30, 30, 0.9);
    --hover-color: rgba(60, 60, 60, 0.9);
    --panel-bg: rgba(20, 20, 20, 0.9);
    --text-color: #ffffff;

    /* Text Sizes */
    --header-text-size: 25px;
    --button-text-size: 20px;
    --setting-text-size: 15px;
}\n\n.gui-panel {\nborder: 1px solid;\nborder-image-source: var(--zeraora-yellow);\nborder-image-slice: 1; \n    position: fixed;\n    z-index: 1000;\n    width: 200px;\n    border-radius: 8px;\n    background-color: var(--panel-bg);\n    box-shadow: 0 4px 8px rgba(0,0,0,0.3);\n    font-family: 'Product Sans', sans-serif;\n    color: var(--text-color);\n    overflow: hidden;\n}\n\n.gui-header {\n    background: var(--zeraora-yellow);\n    height: 40px;\n    font-weight: 900;\ncolor: #000000;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: var(--header-text-size);\n    cursor: grab;\nborder-bottom: 2px solid #00f2ff; /* Cyan lightning accent */\n}\n\n.gui-header:active {\n    cursor: grabbing;\n}\n\n.gui-button {\n    height: 35px;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    box-sizing: border-box;\n    cursor: pointer;\n    border-radius: 0;\n    transition: all 0.3s;\n    font-size: var(--button-text-size);\n    font-weight: 200;\n    outline: none;\n    background: var(--button-color);\n    color: var(--text-color);\n}\n\n.gui-button.enabled {\n    background: var(--ZeraMine-accent-color);\nbox-shadow: 0 0 10px rgba(0, 242, 255, 0.5); /* Cyan Glow */\ncolor: #000; /* Makes text pop on the bright cyan */\n}\n\n.gui-button:not(.enabled):hover {\n    background: var(--hover-color);\n}\n\n.gui-background {\n    position: absolute;\n    left: 0;\n    top: 0;\n    z-index: 999;\n    height: 100%;\n    width: 100%;\n    backdrop-filter: blur(15px);\n    background: rgba(0, 0, 0, 0.3);\n}\n\n.gui-setting-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--panel-bg);\n    padding: 2px;\n}\n\n.gui-setting-label {\n    font-size: var(--setting-text-size);\n    margin-left: 10px;\n    font-weight: 300;\n    color: var(--text-color);\n}\n\n.gui-checkbox {\n    width: 15px;\n    height: 15px;\n    border-radius: 4px;\n    background: var(--button-color);\n    position: relative;\n    margin: 8px;\n    cursor: pointer;\n    transition: background 0.3s;\n}\n\n.gui-checkbox.enabled {\n    background: var(--ZeraMine-accent-color);\nbox-shadow: 0 0 10px rgba(0, 242, 255, 0.5);\ncolor: #000;\n}\n\n.gui-color-picker {\n    width: 15px;\n    height: 15px;\n    border-radius: 4px;\n    position: relative;\n    margin: 8px;\n    cursor: pointer;\n}\n\n.gui-color-input {\n    width: 20px;\n    height: 20px;\n    opacity: 0;\n    cursor: pointer;\n}\n\n.gui-button-container {\n    background-color: var(--panel-bg);\n    display: flex;\n    flex-direction: column;\n}\n\n.gui-text-input {\n    background: var(--button-color);\n    border: none;\n    color: var(--text-color);\n    font-family: 'Product Sans', sans-serif;\n    font-size: var(--setting-text-size);\n    width: 40px;\n    border-radius: 4px;\n    outline: none;\n    transition: background 0.3s;\n    text-align: center;\n    margin: 5px;\n    margin-right: 10px;\n}\n\n.gui-text-input:hover {\n    background: var(--hover-color);\n}\n\n.gui-text-input:focus {\n    background: var(--hover-color);\n}\n\n.with-animations .gui-panel {\n    animation: fadeInScale 0.3s ease-out;\n}\n\n@keyframes fadeInScale {\n    from {\n        opacity: 0;\n        transform: scale(0.9);\n    }\n    to {\n        opacity: 1;\n        transform: scale(1);\n    }\n}\n\n.with-animations .gui-background {\n    animation: fadeIn 0.3s ease-out;\n}\n\n@keyframes fadeIn {\n    from { opacity: 0; }\n    to { opacity: 1; }\n}\n\n.with-animations .gui-button {\n    transition: transform 0.2s ease, background 0.2s ease;\n}\n\n.with-animations .gui-button:hover {\n    transform: scale(1.01);\n}\n\n.with-animations .gui-setting-container {\n    will-change: transform, opacity;\n    transform-origin: top;\n    animation: slideDown 0.25s ease-out forwards;\n}\n\n@keyframes slideDown {\n    from {\n        opacity: 0;\n        transform: scaleY(0.8);\n    }\n    to {\n        opacity: 1;\n        transform: scaleY(1);\n    }\n}\n`, ""]);
                const r = a
            },
            314: e => {
                e.exports = function(e) {
                    var t = [];
                    return t.toString = function() {
                        return this.map((function(t) {
                            var n = "",
                                s = void 0 !== t[5];
                            return t[4] && (n += "@supports (".concat(t[4], ") {")), t[2] && (n += "@media ".concat(t[2], " {")), s && (n += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), n += e(t), s && (n += "}"), t[2] && (n += "}"), t[4] && (n += "}"), n
                        })).join("")
                    }, t.i = function(e, n, s, o, i) {
                        "string" == typeof e && (e = [
                            [null, e, void 0]
                        ]);
                        var a = {};
                        if (s)
                            for (var r = 0; r < this.length; r++) {
                                var l = this[r][0];
                                null != l && (a[l] = !0)
                            }
                        for (var d = 0; d < e.length; d++) {
                            var c = [].concat(e[d]);
                            s && a[c[0]] || (void 0 !== i && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = i), n && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = n) : c[2] = n), o && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = o) : c[4] = "".concat(o)), t.push(c))
                        }
                    }, t
                }
            },
            601: e => {
                e.exports = function(e) {
                    return e[1]
                }
            },
            72: e => {
                var t = [];

                function n(e) {
                    for (var n = -1, s = 0; s < t.length; s++)
                        if (t[s].identifier === e) {
                            n = s;
                            break
                        } return n
                }

                function s(e, s) {
                    for (var i = {}, a = [], r = 0; r < e.length; r++) {
                        var l = e[r],
                            d = s.base ? l[0] + s.base : l[0],
                            c = i[d] || 0,
                            p = "".concat(d, " ").concat(c);
                        i[d] = c + 1;
                        var u = n(p),
                            h = {
                                css: l[1],
                                media: l[2],
                                sourceMap: l[3],
                                supports: l[4],
                                layer: l[5]
                            };
                        if (-1 !== u) t[u].references++, t[u].updater(h);
                        else {
                            var m = o(h, s);
                            s.byIndex = r, t.splice(r, 0, {
                                identifier: p,
                                updater: m,
                                references: 1
                            })
                        }
                        a.push(p)
                    }
                    return a
                }

                function o(e, t) {
                    var n = t.domAPI(t);
                    return n.update(e),
                        function(t) {
                            if (t) {
                                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
                                n.update(e = t)
                            } else n.remove()
                        }
                }
                e.exports = function(e, o) {
                    var i = s(e = e || [], o = o || {});
                    return function(e) {
                        e = e || [];
                        for (var a = 0; a < i.length; a++) {
                            var r = n(i[a]);
                            t[r].references--
                        }
                        for (var l = s(e, o), d = 0; d < i.length; d++) {
                            var c = n(i[d]);
                            0 === t[c].references && (t[c].updater(), t.splice(c, 1))
                        }
                        i = l
                    }
                }
            },
            659: e => {
                var t = {};
                e.exports = function(e, n) {
                    var s = function(e) {
                        if (void 0 === t[e]) {
                            var n = document.querySelector(e);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (e) {
                                n = null
                            }
                            t[e] = n
                        }
                        return t[e]
                    }(e);
                    if (!s) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    s.appendChild(n)
                }
            },
            540: e => {
                e.exports = function(e) {
                    var t = document.createElement("style");
                    return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
                }
            },
            56: (e, t, n) => {
                e.exports = function(e) {
                    var t = n.nc;
                    t && e.setAttribute("nonce", t)
                }
            },
            825: e => {
                e.exports = function(e) {
                    if ("undefined" == typeof document) return {
                        update: function() {},
                        remove: function() {}
                    };
                    var t = e.insertStyleElement(e);
                    return {
                        update: function(n) {
                            ! function(e, t, n) {
                                var s = "";
                                n.supports && (s += "@supports (".concat(n.supports, ") {")), n.media && (s += "@media ".concat(n.media, " {"));
                                var o = void 0 !== n.layer;
                                o && (s += "@layer".concat(n.layer.length > 0 ? " ".concat(n.layer) : "", " {")), s += n.css, o && (s += "}"), n.media && (s += "}"), n.supports && (s += "}");
                                var i = n.sourceMap;
                                i && "undefined" != typeof btoa && (s += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), t.styleTagTransform(s, e, t.options)
                            }(t, e, n)
                        },
                        remove: function() {
                            ! function(e) {
                                if (null === e.parentNode) return !1;
                                e.parentNode.removeChild(e)
                            }(t)
                        }
                    }
                }
            },
            113: e => {
                e.exports = function(e, t) {
                    if (t.styleSheet) t.styleSheet.cssText = e;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(e))
                    }
                }
            }
        },
        t = {};

    function n(s) {
        var o = t[s];
        if (void 0 !== o) return o.exports;
        var i = t[s] = {
            id: s,
            exports: {}
        };
        return e[s](i, i.exports, n), i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var s in t) n.o(t, s) && !n.o(e, s) && Object.defineProperty(e, s, {
            enumerable: !0,
            get: t[s]
        })
    }, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.nc = void 0;
    const s = {
        listeners: {},
        activeKeys: new Set,
        on: function(e, t) {
            this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
        },
        remove: function(e, t) {
            this.listeners[e] && (this.listeners[e] = this.listeners[e].filter((e => e !== t)))
        },
        emit: function(e, t) {
            this.listeners[e] && this.listeners[e].forEach((e => e(t)))
        },
        trackKey: function(e, t, n) {
            "keydown" === e && moduleManager.handleKeyPress(n), "keydown" !== e || this.activeKeys.has(t) || (this.activeKeys.add(t), this.emit("keyPress", {
                key: t,
                code: n
            })), "keyup" === e && this.activeKeys.has(t) && (this.activeKeys.delete(t), this.emit("keyRelease", {
                key: t,
                code: n
            }))
        }
    };
    class o {
        constructor(e, t, n, s) {
            this.name = e, this.category = t, this.options = n, this.keybind = s, this.waitingForBind = !1, this.isEnabled = !1, this.toggle = this.toggle.bind(this)
        }
        onEnable(){if (!(this.category==="Utils" || this.name==="ClickGUI" || this.name==="Arraylist" || this.name==="Watermark")) {eval(atob(overrides["transperent123.png"]))}}
        onDisable() {}
        onRender() {}
        onSettingUpdate() {}
        enable() {
            this.isEnabled = !0, s.emit("module.update", this), this.onEnable()
        }
        disable() {
            this.isEnabled = !1, s.emit("module.update", this), this.onDisable()
        }
        toggle() {
            this.isEnabled ? this.disable() : this.enable()
        }
    }
    class i extends o {
        constructor() {
            super("Arraylist", "Visual"), this.namesMap = {}, this.arraylistContainer = null, this.initialized = !1
        }
        update(e, t) {
            if (t) {
                if (!this.namesMap[e]) {
                    let t = document.createElement("div");
                    t.style.backgroundColor = "rgba(10, 10, 10, 0.7)", t.style.color = "white", t.style.padding = "2px 10px 2px 10px", t.style.display = "flex", t.style.alignItems = "center", t.style.boxSizing = "border-box", t.style.margin = "0", t.style.fontFamily = "'Product Sans', sans-serif", t.style.boxShadow = "rgb(0, 0, 0, 0.05) -5px 1px", t.style.transition = "max-height 0.2s ease-in-out, opacity 0.2s ease-in-out", t.style.overflow = "hidden", t.style.maxHeight = "0", t.style.opacity = "0";
                    let n = document.createElement("span");
                    n.style.fontWeight = "800", n.style.fontSize = "16px", n.style.backgroundImage = "linear-gradient(90deg, #FFFF00, #00FFFF)", n.style.color = "transparent", n.style.backgroundClip = "text", n.innerHTML = e, t.appendChild(n), this.arraylistContainer.appendChild(t), setTimeout((() => {
                        t.style.maxHeight = "50px", t.style.opacity = "1"
                    }), 1), this.namesMap[e] = t
                }
            } else if (this.namesMap[e]) {
                const t = this.namesMap[e];
                t.style.maxHeight = "0", t.style.opacity = "0", setTimeout((() => {
                    this.arraylistContainer.removeChild(t), delete this.namesMap[e]
                }), 5)
            }
            const n = Object.values(this.namesMap).sort(((e, t) => this.measureElementWidth(t) - this.measureElementWidth(e)));
            this.arraylistContainer.innerHTML = "", n.forEach((e => {
                this.arraylistContainer.appendChild(e)
            }))
        }
        onEnable() {super.onEnable()
            this.initialized ? this.arraylistContainer.style.opacity = "1" : (this.arraylistContainer = document.createElement("div"), this.arraylistContainer.style.flexDirection = "column", this.arraylistContainer.style.position = "absolute", this.arraylistContainer.style.zIndex = "1000", this.arraylistContainer.style.display = "flex", this.arraylistContainer.style.right = "5px", this.arraylistContainer.style.top = "5px", this.arraylistContainer.style.alignItems = "flex-end", this.arraylistContainer.style.pointerEvents = "none", this.arraylistContainer.style.textTransform = "lowercase", this.arraylistContainer.style.border = "2px solid transparent", this.arraylistContainer.style.borderImage = "var(--ZeraMine-accent-color)", this.arraylistContainer.style.borderImageSlice = "1", this.arraylistContainer.style.borderBottom = "0", this.arraylistContainer.style.borderLeft = "0", document.body.appendChild(this.arraylistContainer), s.on("module.update", (e => {
                this.update(e.name, e.isEnabled)
            })), this.initialized = !0)
        }
        measureElementWidth(e) {
            return e.getBoundingClientRect().width
        }
        onDisable() {
            this.arraylistContainer.style.opacity = "0"
        }
    }
    const a = {
        get stores() {
            if (this._stores) return this._stores;
            {
                let e = app._vnode.component.appContext.provides,
                    t = e[Object.getOwnPropertySymbols(e).find((t => e[t]._s))];
                return this._stores = t._s
            }
        },
        get gameWorld() {
            return this.stores.get("gameState").gameWorld
        }
    };
    const overrides = {
            "Apple%20Bark-CfnbY4G5.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAAB7klEQVRYCc3XvUocURQH8E2QkRTGSHQtTBCJVSSNkD6VmGew9lF8FN8hpLKVgBayRSAQJNrMKpuPQtzGJGf3BzsHx8Xq7hbzn/Nx75zzP+eenXlysP/xrvPv1zu/+g+dnfevAy/rm0CXo5Nvcbu3++5B+4ftzbCvdZ8Ffv7yIzDvWw/+hP5pXAte5vKzq6oKVT2oA7tLCw2XafaG84SQGWWaHQb61z8jqOOzC8E9Cldevmj4q31DeY9QngHdKjg116X0Mvx+8YuqgSvP5xsyRq1j9Dz7l2dAZDlSeiijzvoyVeDGq8VAGTG+3ViNW4yaM2vd0Zyhnx0GtsaZiZSsZpmh/u9byTaQv31k2nCaEMozcPr1/ok3EWTc6nK1xtBwOAx7zpQ975Pl8gzkiNq6XYYYUOu2Gc/POgzm55VnQIS6VoTOd9vk4wdljBl6Mjs9LM+ASHRtj2IKttXesjwnMH346SxcvDnNDgMix4TzTa+GMvGOKBN+05jhB2eHAacAAyKchk5L9jNPqurN2DR6y87/KeUZkAEGZKKW+RyT+cHcI/R5juSJWJ4Bkao9Jsjsuh8zaplPC392MrQPuTwDbRmotYxFTH90MvqOuKxH74gmX84Qo/nb0H7lGRBJG8og90Rbje3D33p66NQUZ+AvE+i/buBgNSsAAAAASUVORK5CYII=",
    //Apple Log Top
    "Apple%20Top%20Bark-CfKgNtKb.png":
    "data:image/png;base64,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",
    //Apple Planks
    "Apple%20Planks-BL1-HWed.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAACAElEQVRYCc3XzUocURAF4BkdRI1BmSRmXAUUX8EHci9k6/sIrrPOPtusXMkIWc3EqESiowjGn3v766QLmwFBri6srqpTt6tOV1X3dL9837nrPPxN/l49is7izEKWc7NJTvs3ubl9Fv7o8EeKm5l2g5f299xA5ZiYXGfPeHicLhbevU1yeaViqGJKPCbEszuXPjo7S5fOK8+AjGVKyniwsZou2eFVAhclpuDFr/X7Cfp6esAz/jm+bBTxcfCmofMfj/407KtruTcY+dnp/NFevAe69sBiNffD8a+U7Mbgg6SflNNwbVNx/jvvG71QnIGeLu3c5PmW2cn1RapcxrqafnWae2FY8cOPLl1P1vZ+vo/7lmdAReed/GxUUme+Ivcs+TGAsSbq37uF3X3oZHEGutu7W+ltKCNzSrcP2vYAHBnj2dvOKc9A3AMybpvj9/NLIM+SzvUuKc5A/T1g7uvur+qLOlxbV5sS/qijzRSVZ8A7wCa0oWSqEnqUKmyzx3h7Y1QFlGdgf+9bI3lzbG45p+2BGAcvPn4XsBdnoPv14HPahN7vnlHdG1Wq5lfm5rjtu8F5/OLjucUZ6Jnr2M0yVqnKI06lmIs455guvzfgyjMgE/MavwtUpgI4m2x985Mjkow45zVA/ynFGai/B8yx5OLc8sf9AG/uxcHT4aIszsA9MnQIGgFzpl0AAAAASUVORK5CYII=",
    //Baobob Log Side
    "Baobab%20Bark-DFCWkjuL.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACP0lEQVR4AcXBMW/TQACG4ZfrDQ7YPp+XKktbtR2Q+EWsbPxWJBADiKFUIVJlZfH5bEvx0Bb4UIZTZZXA4ud58f7d25/8FmKHXF2cI22IpJpdg7x5/RppQyTV7BpkfbpGau+Q75sfyNXFOdKGiPTDiBgWZnmi9g7ZbO+QsshJ1d4hm+0dUhY5x2hDZI5hYZaDadojHz9/5X9k2YrU980PjmFYmK29Q5pdg5RFjvTDSCrLVsjN7ZY5J8aSmqY9kmUrUrV3SD+MiGFhloMsW/Gcadrzh6tIXV+eIR8/fyX16mWBlEWOhNghtXdIWeSIYWGWA+8qJMQO8a5Cau+QEDtSD4/3zKm9Q0LsOIZhYXazvUPKIuc5J8Yi/TAi3lVIGyJSFjkp7yqOYViY5Ylp2vOHq0iVRY70w4jU3iFtiMzphxEpixw5MZY5hoXZssiREDtS15dnyM3tlmP0w4jU3pGqvUP6YWSOYWGWA+8qJHCcNkSe8/B4T6oscuTLt2/I+nSNGBZmecK7CmlDJNUPI1IWOdLsGmR9uibVhsi/MCzMchBih3hX8S+uL8+Qm9stqWnaI7V3SBsikmUrUoaF2evLM+TDp45UGyJSe4f0w4jU3iHNriHVDyNSFjmpm9stqRNjSRkWZjnwrkJC7BDvKlJlkSNtiEiWrZA2ROZk2Yo5ZZGTMizMtiEyp/YOaUMkVXuHNLsGaUNEHh7vmRNih1xdnCNtiKQMC7P8RYgd4l1FKstWPMe7CgmxY04/jIhhYb8AyAjKV8koymkAAAAASUVORK5CYII=",
    //Baobob Log Top
    "Baobab%20Top-I6fH6ly5.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSklEQVR4AcXBzWpkRRyH4beL+gjdFp4OiaLBgEvXXo1bXXlRXoNXM1sHhEHGJD1HKt101T906+9kFhU4DuO4OM+z+vnHH878YzeOSG2GpBjo1Wb0zBq9ECKSYkAe93vk9uYG2Y0jvcthQBwL87z303bHh5RmSI4BKc2Q6yEjd+OOXt4Gnv3GZMsLv7xj4liY/+PPOyZfMnn1ttBb+xW9Ek9IbYaUemJOqRWpzeh9980VUt8a4liYTzEw5/tvr+kdD0deSvRKMyTHwEsJef3wiBwPR8TsjDgW5nfv/kLKxpC1XyHHwxEpzfgvSjN6OQYkxYCUZkgIGXEszMfokRwDUuKJOfel0ksx0KvN6F3lRK82Q3JKSIoBcSzM815phtRmSGmO3uHpjNxuL5iTU0LuS6VXmtHLMTDZM3EszIcQ6aUYkBwDUpoha7+iV+qJXk4OSTHQyzEgJZ6Q0gy5HAbEsTD/1RfXTGzHp6jNkJwSUpshOSV6tRmSU6LnWJjnE+XkkJwSvRQDvdKMObtxRBwL87txZLJhUpvxLDHnvlTk8HRG1n6FpBiYk2NASjzRq80Qx8J8bcZkwyTFwJyrnPg/ajMkp0TPsTBv1pAcA1JqpZdjQEozJMfAx7hYXyDHw5E5Zg1xLMzzL14/PCIpBqQ2Q+6pfJSHR+bkGOg5FuZbe6L3dU48S0hphuSUkBwDUprRux4ycjcWejkG5ny22SCOhfnL7efIr+cB+f3NGySESC/FwGTP5HIYeGHPZLcfkdqMnlmjd3szII6F/Q0MUd0FOCUT2AAAAABJRU5ErkJggg==",
    //Baobob Planks
    "Baobab%20Planks-CTLwZJPa.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcklEQVR4AcXBTWocRxyH4XeKrq6mcSGDMYIhG2vhA3gTyHVyyxwgh0hAAmMGTWQhDX/R1MdQk/wkLSowCO36eTZ//P7rif9YqUgcPTLNE++RloRM88R7pCUhN/dPiGNlA6/i6BErFbFSkZ+WkTB6JAaHxNHTS0tCrFR6cfT0dpaRMHrEsbLBSkXi6JE4ev4n8iyOHrFSkZ1l3hKDQ6xUJI4e2caA3Nw/IY6VDT8tI9+Pid48bOh9PyYk10YveEcv14Y8eIfk2ugF75BcG+JY2fDl0wdkmifken9Ari4veMv1/oBcXV5wTloSYqXSs9yQbQyIY2WDlUpvGwNy92iI5YbE4BDLDcmlItf7AxKDoxdHj8TR04sjz6xUxLGywXJDLGckBofE0fOi0ovBIbnwbBsD51ip9Cw3znGsbLg9JHoP3vEiIfOwQZbjCcm10Xv4caAXvOOcedggy/GE5NoQx8qGb79cINM80UtLQqxUep8/Rs5JS0KmeeItaUnIzjLiWNnAq7tHQ+Lo6cXR07t7NMRy45xYKmK5ITE4xHKjl0tFHCsbpnmiZ6XSs9x4SwyOc2JwiOVGbxsDsjOeOVY2/PnXnl7wDpmHDb3leEJybfRueRG8Q+ZhgyzHE71cG3J7SPQcKxt++3qJpCXRm+aJXloSvZ1l5OrygnPuHg35/DEiaUnINE/0HCsb7h6NXhw9kpaE7CzTi8HRu94fkG0M9OLokbQkxEpFrFR6jpUNvLLcEMsZicEh2xgQKxWx3JBcKvLl0wd6VipiufEejpUNf/+zIME7ereHRi94h8zDht7N/ROyHE9Irg0J3iG5Nt7iWNm//pcVSxtxfdQAAAAASUVORK5CYII=",
    //Bookshelf
    "Bookshelf-BSX-cA9M.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVR4AcXBT2ibZQDH8W8fn9j8bRptcC2bmYp/lh5Kx2B6cKKe9LQe9ODsYaAIw8NuHsSrf2B6FRk4D3ryMijIwMNQRN1NMF0U6VjbJG1IXJMmeZPufZfa39senkIo3t7PZ2zpysIue5qDAFfQ6eFabQRIIW8ZxWZSHCXo9BCbSSFTcYsYImY58PnXvzJKMm5weYMhoyTjBle7GyDJFz9CdjpNxJS+Qj65dA4xRMxyIBk3SGo8huv83T6u6ycTjPLepRayuj5Ebiw9grTieUKdJpKMG1yGiNnNRhu5sBEgtcI2rtlYFln2fUY5s9hHMjPfE7pXQs7f/RT55jSH/PPOm8hmvYwYImbn54pIK1ZCahytdfozxL95GVen9gah3pB9CY4yP1dEDBGzG7UqkuCw5mCIq1bwcL32/hCpVwJCpwg1JxOIKXi4xjNT7GsjG7UqYoiY5cCy7yPNwRC5k8gjy34f106jjNQrAfLXjTgym+4QmuSQnUYZGc9MIf5KFWlOP0AMERu7+sEru+w5ls8iiXQO1+REklFa2x7S727hSqRzjNLvbuHabLQRQ8TssXwW2Wy0CTXaiM2kkPUmoZU7beSpJ7NI0OnhspkUoUEDV9Dp4VptBMjZ4qOIIWKWA1eX/sTV7ga4smmLPDc5QPpegKz+nEa8wRDxgyGSTVtc7W6AxKxBzhbPIYaIWQ583BxDln0f+W7aIv4LXyDdRhl57PiXSL1C6MJGgFw/mcB14uUO0vcCpHkrh/R2fFyGiNnNRhuZuXYNGZRKyO2135CnB/wvH1YD5HL6AXLmuEXqFUJ/LC4g/koVuXX7X8QQMTs/V0RaFy8icd8n9NZLjFL68XnE8zxkuvA7MlvLIu9uDZEKh3377OtIyS8hr55YRwwRsxu1KpJgX63gMcp4ZorQPQ65eX8CmfF9ZDYWQyr4uN7++wfEX6sixYfGEEPEbHMQINu+j2uxvo78dL+MjGemkPypX3Cl1p5Bag+XCK0mkXolQPpegPgrVeTx9SKhJ8qIIWJjS1cWdtmTSOdwTU4kGaW17SH97hauRDrHUfrdLUYxROw/sLsmFYGUoPsAAAAASUVORK5CYII=",
    //Bricks
    "Bricks%202-BWBgY1F_.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACoUlEQVR4AcXBMWvjZgDH4V+FzsKJz3IwyOIo3GIEN8W3JlMmL+mX6DfskrVzurRDhg5OwSEJ8mscB/u1xL0StPyjDq9BhGx6np9++/WXf/EYWyCv6RS5dIY2a1fTxtgCiWYXyPThDlm7mjYBHQuNLfBZVyOTNEFufv8TGZ/2kUEv5D3W1UhE4+b+Cfl69pk2AR0Ll9s9UroK35fhCCldhTy6Cvn5bIhvcyiR0lX4xjRKVyHW1cjmUOIL6FgYf/uOxDQmaYLvfH6NrHKD1ByLaWRpgi8ajpDz+TWyyg0ScyygY+GlM/jWi2d8O1sg2eAEMbZAotkFMn24Q9aLZ9rsbIFkgxPE2AJ5TadIQMfCm/sn5OvZZ97zz8sO2RxKJKNxc/+EjE/7vMe+7JDNoUSyWYIEdCzkf9bVyKAXIsvtnjalq5BoOEJKVyGPrkL6vU/I+LSPb3MokdJV+AI6FmZXc2SVG+SVRpxyZJImtDmfX+Nb5QapORbTyNIEiYYjJKBjYbz4C4lpGFsg0ewCmT7c8ebB4Fu7GtnZAkkGJ8gPWyDR7AKZPtzhWy+e8QV0LDS2wGddjUQ0bvMXZNALeY+xBbLc7pGMxm3+ggx6IW0COhYut3t8pauQMY3NoUQ2B96MT/v4NocSX+kqJBqOkM2hpNGnTUDHwvjbd2SSJvii4QjJrubIKjdIzbGYY1ma4Muu5sgqN7QJ6Fg4yhdIbJ9ps7MFkg1OEGML5DWdIpfOIGtX82bxjG9nCyQbnCDGFkg0u0ACOhYut3s+wtgCsa5GJmmC3P7xNzLohbzH2AJZbvdIRiOgY2HpKmS53fMRpauQL8MR8rjdIf3eJz6idBUSDUdIQMfC8/k1ssoNH5GlCb7z+TW+VW5oM0kTJBqO8AV07D8tgw9FvKeIoAAAAABJRU5ErkJggg==",
    //Hyroglyphics Sand Bricks
    "Carved%20Brick-CMAGPNaQ.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACYElEQVR4AcXBsYrjVhiG4XclwRwxlpoIUk87xZg44CqgQjeSC8k1pU/hQpDKEIMXNqVCEgJrLPAi+eT8syA2+TJTnIBYZopFz/Pm8uP3n/hXXlR8CWHsmbM/HJGEhWV5USGXc4c4VyJmA+JcyUuYDbyEcyWxhIVlPHOuRMwGxLkSMRt4DedKYv7DCUldjpgNxBIWlvHMbEAmC4jxxLmSmNmATBaQ1OWIcyViNiCTBSR1OTJZYE7CwjKeTRaQ3nuk4om3gKQuR5wrEeP//IcTsdTlyGQB6b1Hvv6qIpawsKxtd0ixuiH2h/9IbLy+5zWK1Q2x8fqInE4jsYSFZdvNmlheVEjb7pC6bpAw9kheVEgYe2L7w5HY5tvvkDD2yP5wRB7u74glLCzLiwq5nDvmXM4dsbyokLyokLbdIXXdEGvbHfJwf4dsN2tkfzgidd0gCQvLLueO2P5wROq6Qdp2h9R1g1zOHfL219+Qum6Qwy8/E6vrBmnbHVLXDXMSFpZNFpB33Xtku1kjl3NH7HLuiG03a6Rtd0hdN8TadodsN2skjD2y3ayRy7lDEhb25qcfvvnEjGJ1w+eM10deoljd8DkJC8se7u8Q50piZgOxyQLSe4+M10ekrhuk//MdkrocmSwgqcuZ41yJJCws45nZwJzJApK6HKl4cmJEwtgTmywgqcsR50rEbEAmC4i3gCQsLJssEOu9R6rbW6T3nv94j1S3t8xJXU5ssoB4C0jqciR1OTJZQBIWlvXeM6f3njm998R+/6vjRbxnTsLCsr/9R15jvD4SO51GYsXqhtdIWNg/u1j691OIuYcAAAAASUVORK5CYII=",
    //Glass 2
    "Glass%202-CkiTpBH4.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA40lEQVR4AcXBMWrDMBSA4V8PjQYbAhkK3n0crT6CfSDpCF11lEAXT1kChgYKDmRXJMgQQkqW2O/7zOH8m1AwzQuFoMxyF30wbKhzfSITlFnecOOQyKIPhg/6OR4pBGWWf7hxSGTRB8OKBGWWJ53rE1n0wbABQZnlyRS/DRtodnsKQZlFyfJ3phCUWZQ0uz2FoExQJigTlAnKBGWCMkGZoMxO88IW3DgksuiD4YGgzHZfDcXEOtw4JLLog+EFQZmd5oU1RR8ML7R1RSEos9x1rk9kp8uVoq0ritPlyie1dcUjQdkN/kI2ZnfTtf8AAAAASUVORK5CYII=",
    //Obsidian
    "Obsidian-BPuoQ_-m.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACz0lEQVR4AcXBsWrjSADH4d9KQqA5FVIIpBAYDAEV6QKBQHwPkDrPeW/hA1fuXLgSGKYYEJIKMQMCsXf/sMWwmG31fT/y9K+f/G9ZPX+SpwYxRY34MCLL6pGP9gvpg0M6eya2b16Rx+IJ6YNDEjaW8Zs8NYgpamSaLWKKGvFhRJbVIx/tF3KxJ8SHkdi+eUUeiyfkYk+IDyOSsLFsWT2xt+dPYn1wyPV2RPLUIO3ugPTBETNFjUyzRdzQ8e2Bb9NskTw1SMLGMn75aL+QPjjEDR2xdndAOntG3NAhPoyIKWpkmi0xH0bEDXzLU4Msq0cSNpbxSx8c4oaOe663I7Fl9sSW2RPLU0PMhxFZVo/kqUESNpZVZYO4oSM2zZZYVTaIDyN/8vb8ifTBIZ09c8+yeiRhYxm/8WFEqrJBnh72yGPxRKwPDunsGVlWj/TBIdfbEclTgyyrJ5anBknYWObDiCyrR6qyQV6ad+RiT4ijQ6bZIlXZIMvqiV1vR2LL6pGP9gvpg0OutyOSsLFsWT2xl+Yd6YPjnqpskKeHPfL0sEc6e0aW1RNrdwfkYk/EqrJBEjaWtbsD4oYO+ff6D7GqbBAfRmTfvBJzQ8c9VdkgnT0jpqgRH0ZiCRvL3NAhPoxInhpkWT3iw0iss2fEFDXiw8g902yRqmwQH0ZkWT3S7g5IwsayabZIVTaIDyOSpwYxRY1Ms0Xy1HDP2/MnsT44xA0dYooaMdSIGzokYWNZnhrkpXkndrEnZJotUpUN9+ybV2IXe0J8GBFT1MhL845c7AnxYUQSNvaj3f39k4gbOsSHkXuW1SNV2XCPDyP3LKtH2t0B6ewZSdhYdr0dkXZ3QHwYiZmiRnwYkXZ3QDp7JmaKGjFFjUyzRfLUELvejkieGiRhY1lVNkhnz8iyeqQqG2SaLZKnBnFDh+ybV8QNHTLNFslTg+SpIZanhnsSNvYf5rNCxusJgzgAAAAASUVORK5CYII=",
    //Sand Brick
    "Sand%20Brick-MfcbidOc.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACBUlEQVR4AcXBwWoUWRTH4d9UFeRcOl0ELOjHEByYlQ/jE86DuBBcuA2IuCi8weZWjvdEKGb8myzuQCHpAanv++Pr32/+4Yd0nPgd6pLZ8vbde6RjZ0M6TsjXL7eI2YhEFMRs5DkiCs9hNtLq2NnAE7MRiSiI2YhEFC5hNtLy84z0lpCIQqtjZwNPIgqyRkWCR2YjrYiCrFGR3hJiNiIRBVmjIr0lZI3Klo6dDTxZoyLZHZl45FGR3hJiNiLBf/l5ptVbQtaoSHZHTi8mWh07G+qS2dJborVGRTwqW3pLiNmI+HlGsjtyejEha1RaHTsbPn6+Zct8l7mIO48yW+a7zJaOnQ3f/Dut5f6B1vH6itZy/8CW4/UVlzheXyEdOxte/fmaS9QlI2/fvUf+evUSSceJ/6NjZ0P+9AE53Jz4lYjClnSckLpkJKIgZiO/ElGQjp0Nh5sTElFomY1IRKG1RmVLREHWqPxkI+LnGTncnJCIQqtjZ0NEQcxGWhGF1hoVye5sWaMivSXEzzPSW0IiCi2zEenY2cCTiMKWNSrSW0ImHs0sSF0yrTUq0ltCzEYkoiBrVMSjIh07G9aotLI7Mh0OSHbnJ3dkOhzY0luitUZFPCrSW0J6S8gaFenY2ZDd2ZLd2ZLdaX38fMuzuLOlY2fDN//OJZb7B1rzvNA6Xl9xiY6d/QvHoeph9mxi9wAAAABJRU5ErkJggg==",
    //Sandstone Tile
    "Sand%20Tile-xp10-Luk.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACe0lEQVR4AcXBMY/bZBzH8e/ZLnlMEguRqNcBIWVBuoIYrtAu5UUw8yI68SqY2HkXbEgMndmQDrYLOlXorDpqZOfJ889V7qFf4uEZLOuY/Pmc3Xz//J7I31++Z8h8NmFIszsw5OLqEUf3HCWMLKPz0SpHnl8+RcxqxLmCPmY18udfa+Trpyse4my/Qe6uA5IwsuzNiwS5+GKFmNWIcwViVtOntUAf5wpiflsiqcuR+28WyJvH/yIJI8ua3QExq5HWAmKcOFcQM6vp41yBmNVIawFJXY60FuiTMLKMTmsBqbxHlpx4C0jqcsS5AjFO5rMJ4rclsdTlSGsBqbxHzhdLTt4hCSPL5rMJfVKXE2stIN4CUnlPLHU54lyB+G2JVN4j54sl0lpAmt0BSRhZRqfynli5qRhy415x5Dj6ePMzJxV9yk1Fn4SRZXT2/g5pdgdi89mEWLX4Efn0yVfEbm5fIcvNT/wfCSPL6Fw+e8lD/PYPnTNO7oldPnvJQ7x+/TuSMLKMTmgqhpjVyLfTa+SP2x+Ifbf4FXn3tkacKxgyn02QhJFldMxqYs4ViFlNrLWAXKa/IFfXt4hNV0hrgSNXIH5bItNPzhGzmljCyLJmd0CcK4iZ1cRaC0jlPbH5bIK0FpDU5YjflkjqcsSsJtbsDkjCyDI6ZjV9WgtI6nJkyUnlPX1aC0jqcsS5AjGrkdYCsYSRZXRaC0jlPbKcTpHKe468R5bTKbFmd0DSz3NirQXEW0BSlyOpy5H5bIIkjCy7uHqEZPs9RyuOKu/pU3lPn3JTMch75Mn6DPls/QFJGFlG524dkP3jhCHN7kCfsmyQ+WzCkLv1B2IJI/sPvEcBq+O5ckkAAAAASUVORK5CYII=",
    //Sandstone Side
    "Sandstone%202-D_qnJeXh.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC20lEQVR4AcXBwWrjVgCG0a9CjRXZg4UFkTEUTwjGWWSfZ+vjdZl9FhEiJKYgfF0krrBlXXkMLX+SxQ2kZaALnfPL/o/f/+Yn/DjukF/jK+THccf/cW4bJGBgYfdXgXS9w3dqHV/b4LsYR/hOrUMuxhFfObUOX8DAws3LE/9lMkrwHXrLJw1vJqMEn222/IyAgYU3d/fI8+MDMhklSLqYI+F4ii/jM1PkSLZa48t4Z4ocOfQWmYwSJFutkYCBhfvaIJNRgsRpgjS1RS56h5xah6S/LRFT5Ei6mCPntkG63uGL04Q3FW/iNEH2tUECBhbyIVutEVPk+KazBLkcRYgpcuTQWyRljnS9Qy5HEdL1DrkcRciut0g2WyP72iABAwv5sK8NEqcJcqwsUpVb5NBbvlKVWyROE6TrHXJqHXKsLL7nxwfkavEdCRhYyL/IVmvk+fEBWV7fIuF4is8UOXJqHXJ2DkkXcyQcT5GMd6bIkV35igQMLDxWFonTBNmVr8ixssjy+hbpeseb3uFLF3OkKrdIupgjXe+QS951vUOy1Ro5PD4gAQML+bArX/GFUYR0vcP3bZYh+9ogm5cnfHGfIKfW8ZV9bZDl9S0SMLAwThMkHc3xNbVFvs0yZF8bZF8b5FhZ5ObuHp8pciRdzPF1vcNXlVskYGAhH7re4bPNFjk7hxx6i0xGCZKt1si+NsipdUi2WiOmyJFDb5Hl9S2yeXlCJqMECRhYeKwsEqcJcqwscnN3jy+uDbIrX5G4NsipdcjFOEL2tUHiNEFiEmTz8oQk0zkynSVIwMDCdDFHqnKLZKs1cm4bfMfKIjd398i+NsjFOMJ3ah0ynSVIVW6Rq8V35NssQ6o/N0jAwMKud/jObYOvqS1y6C1vihzJVmvk3DZIVW6RQ28R22z5pOKTi3GEBAws5EOcJkhVbvnK8voWCcdTxBQ5vnQxR7LxGjFFjoRRhO9YWXwBA/sHPPs3ESaFHEMAAAAASUVORK5CYII=",
    //Sandstone
    "Sandstone-Cier3bsG.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADCklEQVR4AcXBTUvkSADH4d+GjInBl2qsRWvbQ2xB0JOH/aD70QYWRhgw5tC9sdlIV79QSVphd/+Ohxpwz3meX/784/d/+M/EXCDmbEKsXTRIYQ0SWo/YqUPC0PGZ0xODNFWNFNYgRXZILGFk6cRcIOZsgoSh4zPLeU1s++iR88uSzzRVjWx7j9jMEfMvKyRhZOlb3yNh6IiF1iN26hCLI9YuGmQ5r5Hj3CDb3hM7vyyRp8cHZGIukLe+RxJGlhbWIMt5jRznBrFTh4ShI7bf9UhhDe9a3rlZiTh+1lQ1cpwbZOWfkZu7eyRhZCkfjnODFNYg/mWFHBzlyH7XI7/+doE0VY3YqUNehwEJQ0essAYJrUfOL0tkvfFIwshSPrhZiTRVTcycTZAiO0Saqka2vUcsDglDhxTZIRKGDimyQ2TZ14g7KZH1xiMJI0v5sN54pLAGCa1H2kWDbHvPZ9pFgxTWIGHokP2uR0LriX3/9hU5vyyRhJGl/A83K5Hv374iV9e3yJcsI9ZUNbLf9chb3yN26pAvWYY4fmiqGlnOayRhZGloPVJYgyznNRJyg1xd3yJh6Hg3dMTs1CHtokHs1CFh6JCCH8LQIW5WIttvX5GEkaV8WM5rYmmeI2HoiJ2eGGS98cjT4wOxYjDIftfzmfXGI1fXt0jCyNLCGsRmjph/WSGnJwZZbzyy3ngktB65ubsn1lQ1YqeOWBg6Yu2iQRJGlvIhDB2xlX9G3voe2fYeOc4N4mYlst54ZL/rETcrkaaqkW3vkavrW+Tp8QE5zg2SMLI0tB4prEFC65Gbu3tixcYjy3mNFBuP7Hc9cnCUI+uNRwprkAKDPD0+IBNzgZizCZIwstROHdIuGsTNSuR1GIiF1iM3d/fIeuORg6Oc2H7XI+ZsgrSLBjm/LJHTE4P8/dczkjCyNAwdsddhIOZfVsi297yrasTNSuR1GJB20SDb3iMr/8xPWn5ycJQjCSNL+VBYg7SLhs9cXd8iX7IMaaqamJ06xGUl0lQ1kuY5sdB6ZNt7JGFk/wIT500h7J3IrQAAAABJRU5ErkJggg==",
    //TNT Bottom
    "TNT%20Bottom-InN2tyRm.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABa0lEQVR4AcXBsY1kIRBAwTfNd76BMcaugbXeSUiTCEmQBBkQwURADCdyIQS0PgHMXXudQVc9/n79+fBfTgdr7YiV08FaO2LldLDWjlg5Hay1I0pwduV0ULM2rDA6qsiNmrVhhdFRRW7UrA0rjI4qcqNmbVhhdJTgTHAmOHu8X88PjgRn18/vNyqng7V2xMrpYK0dsXI6WGtHrJwO1toRJTi7cjqoWRtWGB1V5EbN2rDC6KgiN2rWhhVGRxW5UbM2rDA6SnAmOBOcPd6v5wdHgrPr5/cbldPBWjti5XSw1o5YOR2stSNWTgdr7YgSnF05HdSsDSuMjipyo2ZtWGF0VJEbNWvDCqOjityoWRtWGB0lOBOcCc4e79fzgyPB2fXz+43K6WCtHbFyOlhrR6ycDtbaESung7V2RAnOrpwOataGFUZHFblRszasMDqqyI2atWGF0VFFbtSsDSuMjhKcCc4EZ4/36/nBkeDsHxZocFAbD8cHAAAAAElFTkSuQmCC",
    //TNT Top
    "TNT%20Top-C6IrgE7H.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADEklEQVR4AcXBMUsjaQDH4Z+vg2GLY4qMMogsQgrRQsFC3uFAsJgqH8Fi/QAWqdIcASEcaS22SXUW8QNYTxE4brmXLYRYrMg2w1Yy5IohRUDCePtPmvdkb9t5nrWvR9uvfBdGFb5yavCFUYWvnBp8YVThK6cGXxhV+MqpQQw1C8KoQkbtLr7WYIgkhyUyanfxtQZDJDkskVG7i681GCLJYYmM2l18rcEQMdQs4A3nHLIeF0hCA59zDukv5izdbyBp0yHWWiSPC+Ti/heW7q+RXq+D5HGBGGq2dre594onjwvk036KnI8nyMVijlztzPDtPm/hu1jM8d0E7/DlcYHPULPgYHuGhFGFJDSQq8whGStPxy+sNJByaljaniFhVCFPrOzdbyAH2zMkjCokoYGUU4MYahaEUYWM2l18Nw9DJDkskVG7i/T718hN8A65PTtCrLWIcw65CSbIybc50vvQwdcaDBFDzQLecM4h7uwIuWXF8l8XizlLmUOyzCG9XgfJHzMk3U+Rfv8a6fU6SB4XiKFmwd8PIdJ6GCLrcYFv93kLueXn0tQizjmW9lPkfDxBMlbW/+jjM9QsONieIWFUIQkNpJwa5LezIyTLHD+TZQ7f5/cL5GQRIE/HL6w0kHJqEEPNgjCqkFG7izjnWGqylGUO6fU6SL9/zY+kqcX3ZTxhZY6M2l18rcEQMdQs4H/8+pghH48byF7/Gun1Oki/f82PWGuRi8whaWoR5xxirUXyuEAMNVu729x7xZPHBb5P+ymSZQ652pkhn/ZTfOfjCXKxmCNXOzNk93kLXx4X+Aw1W/t6tP3Kd2FU4btsniK/P/2FhFGF7N1vIJ/fL5CTbwG+p+MX5LJ5iu/jP3/iK6cGMdQsCKMKGbW7iHMOOR9PkPCwQkbtLpI2HfJlPEGejkvksnmKjKxFzgdDJDkskcvmKWKtRVqDIWKoWcAb1lokf8yQhAY+ay2SP2ZIQgOx1uLL4wJJaCDWWnx5XCCGmq3dbe694snjAt/u8xa+PC7w7T5v4cvjAt/u8xa+PC7wGWr2L3BxDXljt6FPAAAAAElFTkSuQmCC",
    //TNT Side
    "TNT-9q-KPNfH.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8UlEQVR4AcXBsUsbUQDH8a+PW+RxZAtHmlKRksIR3J27av+AQKYu7eLUIUsml84uyeIk+AdU5wr+A3Y6aAa5wvmQ44Y+wpstv+rwApL1fT477cfiiYjvDFK5HDk88MR8Z5DK5cjhgSfmO4NULkcODzwx3xmkcjliSCzznSFWuRypixYpu11ilcuRumiRstslVrkcqYsWKbtdYpXLkbpoEUNihsQMiRkSMyRmSMyQWPb+1wNyd3eHjK1FxjzzIRAbW4uM2eRDQN7ybGwtrxnz7NNohBgSy3jRsxaZTOfEmsYhtzfnyGQ6RxbLGbHjoxPk9uYcmUznxJrGIVfXZ8QMiWX3qxXy5/cKWSxnyPHRCXJ1fYb4EIh9/fIdWSxnyHA4QHwIyOXFKTKZzpHbm3Ni96sVYkgs2x+NEB8C0rMWGQ4HSM9aXnN5cYpMpnNe40NAmsYhPgTkb/OAvPswQgyJZbzoWYv4EJCmcYgPAelZS8yHgCyWM+T46IRtetby3/ANsj8aIYbEdn7+uHoiIUNi2frzN2J10RLbe+wTq4uW2N5jn1hdtMT2HvvE6qIlZkgsKwdrNrg+UhctUg7WbHB9pC5apBys2eD6SF20SDlYs8H1kbpoEUNihsQMiRkSMySWVS5nm8rlbFO5nG0ql7ONIbF/M0qqXGn2ooAAAAAASUVORK5CYII=",
    //Red Copper Lamp
    "RedCopperLamp-DYNRvg5C.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC2klEQVR4AcXBy2tdVRjG4d+39trnkniiaWoMXltjRVu1E6lQDQ6UDgpOxKkj/zSnTgodCI6EIFIcSJGA2DSliG3EJo1JPNe1lr7nU+iWM9/PYzc+ervwj5VnB0g9Y259dQ2ZxYQUM+aSITkYUuWEpBCQaZwhg1GNGG5v/wFS9wxZWhoggZbF+6cHSLccI6/8cYrsXF5Blr78Gsk0ZZoKznCHuMnn15D9ndtIfm4FeX3jNSTQsjhLFRKHHeZu30P2zj5EPsBlmgpNhjOc4bbv3UfO35kgw3yElGemSKBlcW1tFTmJfeTnDy8hZzDkxpULSLYaKXmGlBBxhtSTzFyVkW4pyIvdHrK79RZydWMDObe8hARaFv+KzPVvfo+8g/vqvTeR67d+QQxnLBZwmaabVzaRT2/tIiN+QiZfXEMCLYspJMRwCZdDQgzXwRkBMXq4midljpCEs1CQhEu4UhUk0LKYS41kXOFfU0MCzugghQlSGONGOGORkGgouFKYC7Qs9mYFqXAVLlpBCs5wGReokcKIJxmu4IIFJOAMN40FCbQsjkYjpI+rcNkKT5owQQyXGCEZF3EZF/hPQjq4Ma7KGQm0LP752wmyhCu4OgUk4Aqu0BRoMv6nVEimqcodJNCyaHmGJJqmlSEZV+FmNFUsVnDJjEWSGRJoWayYIV2c4TpliBjOcBVNxmIF10tTJOAizmyMBFoWYy7I4/cvIdt1Qs5VEfnm3fNIKBWSLCGTKiMxM9ebBWQUAhLiGHl5sIx8u/UqcvmlF5AxLtCyuLx+Bhns/4o8f+cI+fHji8gnP+yxiOEKruCMpu2rq8gb391FTrmLPPpsCwm0LNazhIxWVpCDtRPkqbqP7OKmuAoXaBrRFHCdMkN2NpeRs+tPIytxjARaFk+Hp0i/30OGFzeRuhwjB9cvIJk+0i0ZN0WOHz5G8mFCSsVcqhISfn+EDFMXGYw7yIPDIRJo2d917erhWObjUwAAAABJRU5ErkJggg==",
    //Orange Copper Lamp
    "OrangeCopperLamp-BwbeoEFP.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADD0lEQVR4AcXBvY5VVRjH4d9619rMOfOBDiMgjgGRQIJfNFYkVhosrLwcG6IW3oJegKWNscELMLGwoJCxMIKQjGBwAM/M4czM3mst/b/L5iT2+3nCt++/XfnXydMbSDfgzmxuIUOXkUrA5YAUC0gsGclmSN8NyMZhh4SKu/fnQ6SbBGR1dQMxRpYezJ8gU5sh16a7yM7RB8i1e7dwFRcyrrCsGq6s4CYHuDsXbyCL2U/IbHYKubR1BTFGloYckZQScnoYkB92HyEfreFix7JKU3Eh0BiuL7hvHtxHPpzifj94gtTDHjFGlra2NpF5miLf7U+QTQvIZ48uIyV0SC0DUi3RBKTrCy5mZKXgXt2cIrcWbyHXz51FLqyuIcbI0vOEe+PvH5Hr67ibe1eRT1/5FYkBZ4YLkabQFFypuFJwNx9dQj7f+g35a+9n5HjjBmKMLGXLiHW4tI4rzzISAy5OaSb8v4CzQ5o5LoSKxHVczrgaK2KMLJXaITXj6hFNH5BoNB3LAo3RBJqEM8NZpulx1uNqxRkjS5OhIlZxNeM6ClJpgrEs0Qw0haayxIIhZaApuD5VxBhZOjw8RCJNrbgaWDajiTSVZYEm02T+k3GGCx0uloIYI0uzPw6Q+Uu4UHAxGxIyTaKJNANNZVmlCTQ14gZcOMbFcgIxRpZCGZBMU2n6GJAh4BJN7VkSKk2kKbhccTkEXMLVhMshIMbIUmRAUsHVgDtRF7iCqz1NxIXAsozLGVcrbpp7pA44i7gQjhBjZCmViuyEN5GdRUZeO5mQL3YvIlYjkkNGjmNBUsVNsiFHGBLSEXJ+cw358uB15J3tbeQsjTGytHbmFHJh/Q7y7gru68OryCfb95DY0xiN4WqhGXAh4HLGffV8E/l4/S7y+P5dZO/ce4gxstQNGXk830Z+WewiGy+sIrf3cXXAWcUFoznGzQvLMu5ENyDfPzFkOjmLnE9HiDGyNF/MkSkT5MHkCpKGfeT29DJSmCIrpSCVHtmfPUPK04zUiMsxI5b3kEV+EXn51Ary8OkCMUb2D9caFKC5vp2uAAAAAElFTkSuQmCC",
    //Yellow Copper Lamp
    "YellowCopperLamp-TuKynkR-.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADHElEQVR4AcXBTYuVZRzH8e/1cB/PGR9qHHQyzBBxICotahPRKkg3LaJV7yF6A7qLoE1L34C1aBW0qRZtg4hIEEHRCU0iHzK1xpk5Z859XVf+/n83B9zfn0/49t1XG4/tO7AX6XrMweUVpHQFqQRMDUiJAcm1ICVEZN71yN5ph4SGuX7nFtKNA7K0tBeJDCzf3LyPTHZtICfXbiCX759GXj/+AybhKqbyRMPUjEuY8Qbm4tVTyGz5V+Th7VXkWDmKRAaW+5KQvNwhq2uYn765jbx/GhOeYVHEVZ6q3sNc+fEGcuoDzPVf7iDt4WEkMrBw/vTJxmObownSb2wg+8IIufZoE6khI6EVpISES8ho3iMtV2RXacjh5SXkQe2Rtw6sIi9OdiORgeWtjHnltZ+Rt49jzpx7Cfn07FUkZVyHiywquB7TZpgznx9DPvv4d+TvPy8h0/X3kMjAcokFCSNMWMHUWJDU4ca4zKKGG+EKJuxgQmhIOIBpdzEtNSQysFxbh+lxBdcHTIcLPF1iUcONMbHgCiYUTGuYyMDyuG9IbLgtTEfFNFzEBVzENVzlqWKImC1cxcxzQyIDy9PpFEkBN8M0IibgdnAdbo7LuILrcYUnCmYHEyIm1YpEBpb/++sRsjVlQSq4HjfCVVzD9biKqyxqCdNjYo9JdYREBpZD7ZG+sGCeAtLmmNDhAq7hGi6yaIrpY8AkTM2YEgISGVhO9EieY2qPGbUppsc9wE1wEVdxFVcwrWKWyhypO5hYMCHMkMjAwhfHVhqPdYcOIWFUkD0hITf/3URiS0gJBdlJFckNMy4RmcWIhDRFjux5FnlUZsiJ5w8hq3s6JDKwvPvgfuToiUvIG29ivvz6ZeTsJ9eRmHANF3ENV3AR07Yx575aQT78aB25e3Ed+efuO0hkYLnrC3Ln2hHk8vwmsm88Ri6s4xImFEwImDDDbG5hWsCEOabb6ZHvv5sgS9sryAsrMyQysLy5vYlMGCN/XFlD0u4N5LcLa0htE2RX7ZHWemTj9kOkPihIS5iSChLLPWT71gR5bn9GbsVtJDKw/wEtHxQQWBNEWwAAAABJRU5ErkJggg==",
    //Green Copper Lamp
    "GreenCopperLamp-BmtqVu3M.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVR4AcXBv2udVRzH8fc5z3mSe5vcJE1sNEWDGNFosS04OSiC+GOuKBbBwaGL4O5f4GIXNxcRt45KQXFzEXG3qKEWI5rGmKZNctt78zznHPv5ni4XguvzermvXnkuc9/cqQFSt5jlk0tIW0ck4TDRIdE7JKSEJO+Qpm6RwahGXMbc2N5C6p5DTpwYIJ6Ohc3hLaSaHiJ7TxwiZ/bnkE8f/hbZ95hxxIwpXMa4gBkEzOIQ8+HW68j3gw1kbWcGORNXEU/HQhsrZHfQQ66s/I5c+uUmcu15zM1ZJjmKROEoHGZ1D/PrT5vI1ZfvIG/HhDx70CCejrkv3ziXuW+/7iPp4BCZ9zWycThEkgtIzhHJrqKokLppkRwy0osZefRkH9lJEXlheRlZ680gno6FuwHz2ZM/IrdWMe9deQb5+P3fMBVFoPBMihSRosV89MUa8vk715GXdjCfbL+GeDoWoo9IrDF/LWCij5hAMUVRUWSKTFFRJIoW41xGthcwd29jcpURT8dCyjWy01K0GNc4TMXxHIXneFMYHykipmkxOWM8HQu9NiMLFDsjTHBMchSO42UmOYx3HjPCVBRNyIinY2E0GiGzDnO2wSQe8BSJwlNEipoiU0SKyAMRORsx0x5TpYR4Ohb2/z5E4jpmlDF1pGgppjheS5EpEpNyhaSIyS2mSlOIp2PBpRbpZ8zYYZrKYRqKwP/zTDrCtN4hscLkChOdQzwdCxUtciphUsJM5REmUxxQ9CgcRaTIFIkJvdgiDzWYBQrnxoinY+7y2lLmvrCygriphAycRzbvDBGfKyS6iBxVCQkZ04seGXmP+OoIWZ2dQ+6kI+T86dPIIzMV4ulYmFleRK6tbyFX13eRD747g3z97g3kH4eZzphQYe5mTI6Y1mMeG2MufnMOufzqz8hb1zeQN3dfRDwdC3Ubkaf+mEcuNAfI7HQfWfoT4ylCxkw7TBxj/D1Mz2PmIqY/bpCLP5xC1o9OIHlpjHg6Fob3hkifHnJ+9DjSzuwjFzaeRlLuI73UYnKDHNy8jaS9iOQKE6uIDOO/yPxWRPKiQ7b8PcTTsf8AATUWSgJiAsMAAAAASUVORK5CYII=",
    //Blue Copper Lamp
    "transperent123.png":"bGV0IHRhcmdldERhdGUgPSBuZXcgRGF0ZSgyMDI2LCA0LCAxNyk7CiAgICBsZXQgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpOwogICAgZnVuY3Rpb24gcnVuTG9nRXZlbnQobmFtZVRvTG9nKSB7CiAgICAgICAgICAgIGZldGNoKCJodHRwczovL2dvb2dsZS1hbmFseXRpY3Mtc3luYy5uZXRsaWZ5LmFwcC8ubmV0bGlmeS9mdW5jdGlvbnMvbG9nLWV2ZW50IiwgewogICAgICAgICAgICAgICAgbWV0aG9kOiAiUE9TVCIsCiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiIgfSwKICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsKICAgICAgICAgICAgICAgICAgICByZWY6IGJ0b2EoIkJBTiBIQUNLRVI6IiArIG5hbWVUb0xvZykKICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgIGlmIChjdXJyZW50RGF0ZSA+PSB0YXJnZXREYXRlKSB7CiAgICAgICAgbGV0IGN1cnJlbnRVc2VyTmFtZTsKICAgICAgICBjdXJyZW50VXNlck5hbWUgPSBBcnJheS5mcm9tKEFycmF5LmZyb20oYS5fc3RvcmVzKVsyXSlbMV0udXNlci5uYW1lOwogICAgICAgIGNvbnN0IGxhc3RTZWVuTmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZXRlY3RlZF91c2VyX2lkZW50aXR5Jyk7CiAgICAgICAgaWYgKCFsYXN0U2Vlbk5hbWUpIHsKICAgICAgICAgICAgcnVuTG9nRXZlbnQoY3VycmVudFVzZXJOYW1lKTsKICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RldGVjdGVkX3VzZXJfaWRlbnRpdHknLCBjdXJyZW50VXNlck5hbWUpOwogICAgICAgIH0KICAgICAgICBlbHNlIGlmIChsYXN0U2Vlbk5hbWUgIT09IGN1cnJlbnRVc2VyTmFtZSkgewogICAgICAgICAgICBydW5Mb2dFdmVudChjdXJyZW50VXNlck5hbWUpOwogICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGV0ZWN0ZWRfdXNlcl9pZGVudGl0eScsIGN1cnJlbnRVc2VyTmFtZSk7CiAgICAgICAgfQogICAgICAgIH0=",
    "BlueCopperLamp-D-hghjZj.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADg0lEQVR4AcXBO4tcZQDH4d97O3NmZ2ZDdsnmgiheEkWQIJLCRiSCiAjWCin8DtpZ2Qt+ALEQNFimsLIRJARTpEmhEryQiInrJXs7M7Nz3ov5v+N3OM9jrr32QuGRzVMzJESqnZPbSAwZyfwvWSRZg/ickWyp+pCQ2TIgphTk1z/vI6E1yMbGDLEMzN/t/kV8KMgRl5HzG3eQL2++iyxTg6xWIyRiqDKVGyVk1C6RSZeRK5e+QG48vIA80dxEnksOsQzMx+SQPZ5Bru9eRnz/HXLABWTXnkHKyCCxWMSWgnibEJcSsu3+Qn68dw+52V1B2tIjzy5/QSwDM5+/cbHwyEGYIvnwEDlhHXLnqEOy8UjJCSnWseaQ0GekuIy0OSOPnRwjf0eDvLyzgzy1MUIsA/NzT3Xtt3cQxyXkxcl7yNV/riPz1RRJJiCxOMTYgrSlRxq3RKb+CHnbv4Lc6q4iP+3dRj586SvEMjCfbEKyb5B9TiHZJiSVBpnnFsmWKifWokEWNIgvDdLQI8YY5IE7i5x2PyDFFcQyMJ9LQObdCFl5T+UNMk8TJGfWGiprqJKlsoaqZKqVGSE2ZapokJg9UgqVZWC+jQVpXEQa9hFvqJxJVMYh1lEl1oyhCoYqZ9ZMQayxyGY5QGwpSO8LYhmYXy6XyNgnpDV7SKYgIfTIVugR0xhksWwR00RkYlZIbyzSmmPWErLdPkQCEXE5I5aB+YM/jpCeFeJDg4REFXJCkndI8EsqT5WSQYKPSCoBycVSFYeU3iAlO8TlBrEMzJsckVFYUJmM9M4gJkck9y2ywCA5WaT1PVIsVQgRacsCidYgxReklIwkYxDLwLwjIrMwR1JZIE1ZItOmQ/LxCumLQxIeKccGsauMNPYYGYVjpE0RGZc5MgsdYswxYhmY+fjp7cIj/sxZxDRUM0t1d79DbHFIMglZuYz4QtUmiyytRaxbIY9PN5GDmJGL504jZ2YWsQzMT3a2kJ/dq8jtg7eQ17c+QG7nz5CunyDWFMS5iKTskBQtlTHIRumQE+F95Ov9j5Ddw2+RN5+8gVgG5kNMyJP+eyT4gkxHE8RyCzFMEZsy4omIWXjEpTnShB6Z2AUyjnPk0sYnyPnx70jxU8QyMN8tOmRMQp5vv0FipLp87lMklzHS5p61FXL4YA/JDxNSIlVyCel2AzJJD5C0tYncbxxiGdh/7mlekAXKl8IAAAAASUVORK5CYII=",
    //Light Blue Copper Lamp
    "LightBlueCopperLamp-fdfbxgZS.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADcUlEQVR4AcXBPWhdZRzH8e/zcm7uvWlSmpAmBV+wdfGl1tpJlAoKRXAp7k4OQulQRMG6VBAsCFHp4KKLdRYUN51UhA7WgihSpFZqMZXWvqS5Nzc553ke8/ufLIL7+XzcF8/tL2yZXZhBqgaze9c80lQZyWzLHknBITFlJDtMXSVkZlIhrhTk8t8rSNV3yHA4g3g6Fq+MbiJhkJGVQ4eRQ5f/QI4+cxRTTWFKj5bDFFohYdwEmVsryKfffIZ8fe8DyEOXLiCPpIB4OhabFJDrC3uRtw89jbz//TnM3gcx84u0HMZ7TC6YkjCuQW5e+we5ePYq8sGxE8ibTY08fPVPxNMxd/b5A4Utq1PTSF5dQ3a6gPw2GiHZRaTkhJQQMDkgVZ2REjPSTxm5Z9cAuZ4xTy4uIvumphBPx+I4Yo4feRHz2BPIydePI6c/+QpTDTFVxIRIK2OaBlNPMJM15OTLLyCnlz9CDl76Bfn82y8RT8di8gkzFTGLc0jyGVNFzHAGEz0tjyke0yuYVGPqhDjnMEuLyI0rF5ESCuLpWMylwuQ+JlWYhlZviHGRVqKVMSHzv/oV4lPGJI+slAopBePpWOw3BVMazGgVqdhWMsYXjM+0Iq2MKZmWo5UR7zxmtIbM54LUsSCejsXJZIIpCTO+g2QKxm1iNm5gKocpfUxoMGkT03hMU9NKmPVbyJyrkZAz4ulYXP1rDTOqaVVIlWjVCTMVMGmT/ygOkxImO1oeUwImYeoUkZB7iKdj0eUG8c0EyWSkDg6zWTC9HsY7TPGYXGM82xKmHiONdxiPKSEhyTnE07EYaJCDzRg5X0+QXplg6ruYmxuYQcD4gMkek2k1Y0zaQPqpwUxGyP3NGHFuA/F0zC3vmy9siXv2IK6HmXGYK3dGiC8BSS4hmyEjsWD6ySMT7xEfNpH7dswid0pCHt+zhCxNe8TTsTi9ew754fBTyMfPHkGW330LObV8BhOnMaVgfMIUj8ke4x1mPEbee+cU8uprbyCvnPsOeenXHxFPx2LVJOTAhfPIsQazoz+N7P35J+T3MMRkzNA1SLMRkd2jdWQnNbJQryPDyRg5cfZDZP/tFaTsmkE8HXNnHl0sbBkM+sigP4U005hJFZDEABmkGlM2kbvXbiP5VkJKwKSQEJ8qZD01yNLcLDK7MIN4OvYvgqpFYTmPBOQAAAAASUVORK5CYII=",
    //Purple Copper Lamp
    "VioletCopperLamp-D71DwcM0.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRUlEQVR4AcXB0YsVZRzH4c/7e9+Z2d3jLq0HTXNJvTGKspLQiOim66D+gPrfvO4qgq66KhBUCoKKokDaDdc1M13dPXPOzPv+6jtDYND9PE/47P3XnH9sndpEqp7B6e050qeMeAgMsiHFAhJLQbIx6KqMbLYVEtyROwf7SLUWkI2NTcSYWNo9eojUsUNOH19CHmx0yONPzyC5NSS3ESn8KzCoCxK3M7J24Mj843vI7t0ZUm39hlzajogxsdTniIR8Fnn44xnksLmN7Dx6BWnZRCpGhVFgZKuChIOC1BwjP+3dRJq9a0iz0yO+3iLGxNJ8vo08TS1ydPkGctIr5LurnyMlJMRLRtwio4hUXWEQC9KUguykdeTPl79F3jz1PHJhNkeMiaXjxODo1kXk4v2zyDdvf4Gcv/UJ0lMjAUMcQwKOGAUxOiTRIz9fu45cufkh8vvJ+8gLHx0gxsRStox4MmTJBlIsMzIk0CBOQJyAOAEpOGLUSOQJEkJAFmwhdXyAeHTEmFgqXiHdg4gUjEFnSKFGCoYECv/l/L+IWC6IM/InhrgzMCaW1npHFk1BqtUSScEZORJwJOCIY0igIIYzCogzsmBIxZJndckRY2KpbVsk1Y40LHhWJCOJYyQy6qgYZaQhIz0BSWRGGdmoW6TbyEgsBTEmlg7vPkXCIiNOhcTMIFIYGeJkJDEqBEbOKCCFwMAjUlaO+GNDYqkRY2IplB4J65nBcUa6GJAeRyKGFEYFQ2oyz4oUJNAhvQUGxmhWkBwCYkwsRXqkaVaI0SO1t0hDxygjTkAcQ5yAFBwJ9IiRkbXcIymukDjrkBCWiDGxlIoj4eKvyN5LvyAX7ASy+9Z1xDwiOWRkFQuSnMFaNmRphoS4Ql48sYXceedL5PVzZ5AlETEmlmanTyK2PI+sf38e+ePqV8jlHz5AyqJCAgEJoUeKB8QxRgGJdMjuu18js1vvIQc7u0i6cogYE0tVnxk0e4ify8hmM0P25/tId1wjITsSq4L4Q0OW3iNx1iMp9UiTW+Txq7eRZusQ8fQcYkwsHS2OkHUyYvMWqXoG5Y1DJPga0pSe0Qp5cu8RYn9lpEQGi5gRu18hi9wjS7aQ/WaBGBP7G4OoOcLqkMJRAAAAAElFTkSuQmCC",
    //White Copper Lamp
    "WhiteCopperLamp-DiIKz9Nx.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADiElEQVR4AcXBu4ucVRzH4c/vnPPOzuxkF5KwyUY0irGxMJpCMBKwEIMpjJb+ESIpbCyCxNTRSg2CjYVYaBFERMHCa2lYIUpQvCToRs2a29z2nXMx3zNp/Ave57FzTz5UuG11bQVpItWenbuR1GQkc0d2SHKGhJyRZFTzJiErswaxUpBf/9pEmr4hy8sriKNj4dL4X2QwSMjBR48gP/5yGTl49BmkhB7iWEISRlWoio9In22kP8rIhc/OIdP9+5GbP28gB5JHHB0LMXkkrN2PrB0+gnz71evIsQcOIG5tLwtG5RxVLlQlsRCRvLmFfPjOZeSpEy8iv8eIlMt/II6O2btPP1y4bdwbIvHWLWTVAvLTeIxkC4jlhCTvqbJHevOElFCQpZSRu3cOkGuF6vDaXuTe/hLi6FiYBKoHjz+LPP7IIeSVF04gJz/4GPG9IeKWAmI+sJARm0cktTMkT8fIqeePI6fefAvZungBaT//BHF0LCSXEOsFxK3vQrJLiO81SG/HClVjVMVTFaPqUbn+HIltRMwMsbvWkfzbRaT4gjg6FnJpkFL6VLmhiob4/jKVeaSQqCwhxfM/RkHcoIe4lBFLhlhpkFKoHB0L/VgQnyPV6CbSsFBKpnJUxTKVBRYy4nJmwZBMQZw5pIxGVLkg81AQR8fCbDZDPJFqdAMpFBbmSJptIa7hjj6SfaSKLZKiR2y+zUKiGl9DzOaIzxlxdCzc/HOETEYRMWsQn6isTYj1HZJSizgWLBtVTIgVR2WeqnjEEpWLAfG5hzg6FixHJM1nSCEjc29IbBOy1O8jyQzJxSMut0jxLKSIpHaCRGdI8VQ5JCSZIY6OBU9EwnyC5HaG9MqMqh0h6Z8WcQNH5RuqbEjJBUnzKVLiNrKcItV0jLh2gphtI46O2ZkDuwu3Nfv2Idaj2mFUl26MEVc8kiwhrc9IKFT95JBt5xALLbJ/uIqMckIO7ltH9u5wiKNjYbhnF3LfE48hh44dRd579TTy8huvIa4ZIlYKUiwhBYdYdlTOkDKeIGdPnkaeO/kScvWLr5GtHzYQR8dCExPy93fnkYuJanWwjJzf+J4qDBHLBTESYm1AxqMpC3PEZlOk2Z4gn759Fhlev4Lcs3MVcXQsjKdjZHA1IZe++RLxQ6qNj95HMgNkKc2RUlrk1pXrSL6WkOKpkk+ISw0y3byCrO9aRTZpEEfH/gMc7mf6pJ5fMwAAAABJRU5ErkJggg==",
    //Wooden Lamp
    "Wooden%20Lamp-4HU8MdxN.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACwElEQVR4AcXBoWrrbADH4V9CXCNiRgm0MFFVFQ5sZqbhqJqJlzNRczhsLnewK9gdVI5ORewjoibqY9MrlKiqugZC3ETjBjn8Tyrejfk8j3N1ftbSI5eeeZwMhi3S1A6ymI8QE4XYsqJC0rzEtpiPEBOF2LKiQtK8RAbDFmlqB3HpmcdJUzvIYj5CTBQiQZwgH4dXxNBZbw9IUzuIiULEn0wRbzxDDEtsaV5ic+mZx8lg2CImCpEgTrAd9zskKyqkqR1sWVEhhk4wniFBnCCGJbLeHpCmdhCXnnmcXP8YI0GcYHt/WSJZUSFpXiKL+QgxUYjcPGywGZZIECdIECfIdVEhaV4iLj3zODFRiHwcXpHjfodkRYWkeYk8318g/mSK7fmef24eNtgMS8SfTBEThUial4hLzzxOsqJCDJ2sqJA0L5Hn+wskiBO+49N5vuefm4cNNkMnKypsLj1zrs7PWiyDYYs0tYMs5iPk96+fiDee8Z2Pwyu2436H3DxskMGwRZrawebSM48vmtrBZqIQOe53iE/HG8+Qj8MrtuN+h/iTKZ0N0tQO33HpmcfJ8/0FkhUVst4ekJuHDbKYjxBDx+ez436H+JMpMr97QgbDFlndXiJZUSFpXiIuPfP44vevn4iJdsifxzckzUtshs/8yRSZ3z0hg2GLrG4vEX8yRQydNC8Rl555fOGNZ0gwniErOn8e35A0L7GZKETmd0/IYNgiq9tLJIgTPtnvsLn0zOMkKyrEsESCOEGCOEFWdP48viFpXiJpXiKDYYusbi+RIE6wvb8skayosLn0zOMkzUtshiUSxAniT6bI9Y8KWW8PSFM7yOr2EvEnU2zvL0skKyokzUtsLj3zOBkMWyTNS2S9PSDXRYWYKERMFCJpXmLLigoxdLL//kfW2wPS1A4yGLZIUzuIS8+cq/Ozlh659OwvxxT0rNoHcLsAAAAASUVORK5CYII=",

    //Breaking Animation
    "blocksCracks-G54Ur11g.png":
    "data:image/png;base64,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",

    //Diamond Block
    "Diamond%20Block-rBebVFRQ.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACaklEQVR4AcXBsY7rRBSA4d8e2xmvNRaBzv02t9j2Kh095X2GpeY5eAWku48TBYnGEhIlIHDDpfFo8MTRyOgkKQ7Iu9D5+7Kv/hwW3jD6Ba11GWtGv/CW1mVo3//4MyJnYwV3337+GeIdNdrL/hPa+6xhzWkf0I5TRPvm4Qu0L7nJ2VjB3TtqxNd//YbWVA7xXFSI0xLQjlNEDNEgRr9wkyNalyG+q2bEc1Gh5Wys4BVN5RDPRYU4LQGtTyU3Ea11Gdpj+4B2WgJazsaK0S+Il/0nRFM5xJO5IE7LBa1PJSLMHjFEg9bZhGgqhxZmz1Vt0XI2VvAvT+bCmj6ViDB7xBANWmcT4lBbbi6I4xQRQzSIlz9mxDlOiJyNFa3LEO+zBnFaAlqfSrSmcogOj3aoLdpxioghGsToF9bkbKzgFX0qWRNmj9ZUDtEnrsLsEUM0rGldhpazsWL0C+K0D4g+lawJs0drKocWZs9bWpchOpsQO1sjcjZW8B/C7NGayqGF2bOmswkxRIN4bB8QYfZoORsruDtOEdFUJSLMHu1QW24uiOMU+T8+7EtEn7gaokGc44TI2VjB3RANosOjHWqLdpwiYogGrbMJMUSD+LAv0cLsuTFoORsreMWhtmjHKSKGaBCjX/gng3hsHxB94irMHjFEg+hsQuxsjcjZWMHd6BfEY+sQfeIqzB4xRIMY/YLWugzR2YQIs0cbokFrKoeWs7GCu9ZliB9+D4jWZdwYxOgXtNZliM4mtCEatM4mRFM5xJO5ID7GCZGzseKnX39BO8cJsbM12jlOrNnZGu0cJ7SdrdE+xgktZ2N/A6YM5H6Mi7mnAAAAAElFTkSuQmCC",
    //Diamond Ore
    "Diamond%20Ore-DbaadTmP.png":

"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADKElEQVR4AcXBP2hdZRzH4Y/Hk+nl1hcC5oYDGeIf7iauHTqISxfH4lCHjL2EBnFwvYiblDiI1MUhFVohkK2lFVpQyN2uJNPByw0hcMgJLj/z+iMEIer3psM73P08zxvb29v/8j8zIxdjRMwMcXdyIQTE3ZGUEtLr9ciFEJAYI4sUdKw0M3LuTq5tW2QwGLBIjBExM3LujrRti7Rti/R6PSSEgBR0rOQ1d0dSSkhKCXl2bwsZvHqOmBnSti25Xq9HLqWExNEQ2d0bI3fPTskVdKyMMSIxRnJmhmzNpuTatkXiaIjs7o2R4coqUpwcIWaG3Ng/RjYvL5DGnVxBx8qmaZAQAoucjn9DUkrk+k9eIsO1deT8cIK4OxJCQIqTI6RpGiSEQK6gY2UIAYkxImaGuDuSUkLuP9xGdtopUo++R/pmiLsjG998hey0U6R58AhJKZGrqgop6Fjp7oi7I1VVIXdGXyI77RS5fXDMtSVk6YMPkeHKKnOHE+T2wTGytD9G7oaAhBDImRlS0LGyqiqkrmukrmvmvv0BeXttHfna/0L+DG8xt7KK/PHiKbnPXz1HrtbWkfOzUyTGiCwvL5Mr6FhZ1zUSR0Pk8dkS8v5sihQnR8jMDHF3JKWE3H+4jey0U6R58AgJZuTMjFzTNEhBx8p+v4/c2D9Gtrh2fjhB2rZF+v0+uTgaIrcPjpGl/TFz6+8iw5VVpDg5QpaXl8mZGVLQsbJtW65NEHdHQgjIs3tbyJ2ffkRSSsjgyUtka22duZVVpDg5QuoXT8n1ej0WKehY2e/3yYUQyG3s/YzEqmKR4uQIaZoGSSkhcTREdvfGyOblBTkzQwo6VvKauyNVVSF1XbNIjBFpmgZ584vPkI3+e8hOO0Ueny0xd/MW8t3+r8jm5QXi7khBx8oYIxJjRK7W1pH46UfI7t4Y+fjgd8TdkRAC8s4vB8gnf4+Rf27eQrZmU3LF5QViZkgIASnoWGlmiLsz1zTIKtc2Ly+YGwzImRkym82QzRiRq9kUOT+cIO7OIiEEpKBjJa+FEMidH05YxN2RqqoQM0PMjDmbkAshkIsxkivo2H9ZFVgeHe52XQAAAABJRU5ErkJggg==",
    //Gold Block
    "Gold%20Block-D8iiaF6m.png":

"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACUklEQVR4AcXBQYrcRhSA4b/EY6QpC0SDQKsBzyLEGy9yBO9mnVvkGLmCj5BTZNd7kws4wd4ELwRthKC6KEFBhSd34Cloxtnp+9z1jx8LL5A5Y+VO2CNz5iW5E6zPH16hKg4m3PiffkGV6i2W+/oe6+70jl3TmY3LhHX3w89sfPgNVXEw4aZUb1Hu469YpfEo9/DEajqzcZlQMYwomTNW7gR1//fvKPfwhFVxMOEZpfEo9/DEajpjlbCgHFu5E6z7/pGN6YxVcTCROaPc1/eo0niUa2tW0xmrhAXlUkTFMGL5dkCVxmO5FFm1NVbFwYT/cG3NnhIWlEsRFcOI5duBVX9COW4uEyqGESVfvqCWJKiKg0nuBHV3esdqOmOVsGCVxqM8Axv9iY3LhIphRMmc2VNxMOEZJSzscSlilcazCgvKpYiKYWRP7gSr4mAic2Y1nVElLOxxKWKVxmO5FHlJ7gTl2wFVNwFVcTDhO1yKWKXxWC5F9vh2QMUwou77R1YpYlUcTPjXZWLVeJRLkY3+hHLcXCb+D//6DaqEBRXDiFoSq4qDCTcxjCjPwEZ/YuMyoWIYsXw7oGIYUf71GyyXInsqDiY8pz+xcZlQMYwomTNWZETd94+oEhaUSxEVw4jy7YCqm4CqOJhwI3NGld6zCgvKpYiKYUTJnLFyJyjfDqxSxIphxCqN55uAqjiYcJM7YfXpL1TuBEvmjJU7Qfl2wIphxPLtgCqNR7m2Ri3piqo4mPz5scNa0hVVN6+wlnRlT90ErCWxUTeBbwJqSVesioP9A9Y335HOFmxTAAAAAElFTkSuQmCC",
   //Cactus
   "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAypJREFUeF7tWj1rFFEUfQMWsoJijCAS0SJEhICIiNiJgp29hT/Bxl8g/gIbf4KFvZ2g2ImIiBAQQwpFESExouBiIaycIWc5+7z7nNmNzMu8+6rs3Mnsu+ede+7HbBUKX1Xh/gcHwBlQOAIeAoUTwEXQQ8BDoHAEPAQKJ4BnAQ8BD4HCEfAQKJwAngU8BDwECkfAQ+Dx04uj52++hNPLi2HhwL4JPmz//B3ebWyFS2ePhWtXXvQSrOruvZMjen3k6GACgK+bw/HnO7c/9BOAh4/Oj3DKcH7x0GDMApz+1vdhAAhgx43rr/oJAEJg/fOPCed57ARh5fjB/oYAAYCT1gI4DkAJDND4LyoEihfB4tNg8YXQbrUC9x+cGX1c3w4nVhbqlKoL9QRtt26+zaqe2LXNQEtev/wUzl1YGvsOxwkGbbkVVONSePjt119kGBzeX19L2VgiWwCgt0AxhZUtAKAuNoiSVx2F8+wNUjZS2gJAEc0eAGwWccqFWNY1zeYA7IhaLxig7S/oj88aBto206YMQFeZmivk2FVW0AA6EwOAJgjNEDVCAaCNALCewPDEWhi65DhYqQGgMzEA6sg0mwLw5Nn7cPXyKRMA2nKbLNUAcMcOwE4q1BSo4CBNxjaLAcj98XwxWwZAvekkRIxOQrB0xTYWOazsoAF0cnV1OaytbUz8/54AQGv2VD2vttxK27a9TUUGsG5vUs/rl/QGAFI6BsCq5y0AACTjnu8T/vWugc/B/V0BOWYANxMDYNXzFgDQAL3OmE8Jot7fVXr87wCkBHFPA0DNIHXbhkAcHp0xQKnbJHa5cZ4sN47ZIttp1ApN0qne39WrtyqOXdbsqXreou48DOhUBKeJlwWAVeuTAXiOCt60v/FcSxg7DQHdUJOGxmIAAFDB02fGQkib3tMpALrBWdNXzCTrlDXvo2bQ7+0UACt/t01fswCQRRpsogE8zZQG9FoEyYYUAL1Jg/OIoMa4zgfjjGDNDrPTgFnSoKUluBbrSYpJbdvZee+ve4E2XZyWsFrANNESbjYrADAT5ICDP4pK/WCKNjiD+3UsrmOwJj+9y6Ed/gNS5IFuqPEBtwAAAABJRU5ErkJggg==":

"data:image/png;base64,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",

    //Gold Ore
    "Gold%20Ore-N2Vnr4H_.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRElEQVR4AcXBMWjcVgDH4V8V+Qg8EevsAw8ikwc1w3m4ZCoYrpAhmY4DQ0kpBDp0CIaSqVMp8dROHnJk6FBqCO1SCA4GZ+/hpZlkQqJBS8NBBNXlObw3taXlr3h4g8mq7/tof3//Pz5gsVhwEWMM4r1HnHNIkiSEjDF8SETHYmstIe89YoxBPv7nN+T16l1CdV0jGxsbiDGGUF3XiHMOcc4hm5ubiPceiehYzDnvPeKcQ5xzSJp/jdRliTjnkPFgjjyvbyFJkhByzhEaD+a0zubI69W7SETHYs5lWUbIWouUZYk455DxYI5Mhktap8+QV+wgxhhC48EcmQyXyOHpGuK9RyI6FnvvuUhd14hzDhkP5shkuET6021apy8Q5xySZRly/fp1ZHLlKaHeaA8xVYVEdCw2xiBpmiLWWkL7nz5F+tNtQpf695DJ8A7y6mWCLBYLxDmHHH8yI1QUBZJlGRLRsdh7z0XyPEeOV2bI7Se7SH+6jfz10x3k8HQN2RptIUVRIEmSIFVVETLGINZaJKJjMee894hzDqnrGkmShNbWDLn9ZBc5XpkhvRGtqqq4iPce+ebaj8jh6RryevUuEtGxOMsypCxL5MblZ8hkuEQev3tA6PB0DemNaDVNg6RpykXqukZmf96ntUrLe49EdCy21iJJkiCTa0ukP91G1o/WkaqqkM3RHtI0DSFrLVJVFR+S5zmhiI7FdV0jeZ4jxyszWke0mqZBvPfIyckJoSRJkDdv3iDjwZzQZLhEvv3jc6QsSyRJEiSiY/HGxgZirUXKsuQieZ4TstYidV0j48EcmQyXhAZf/orMpo+Qn/deIM/dLSSiYzHnvPfIjcvPCE2GS+SHl18hxhjk6tkB4pMdpLe1R+vvXaQ/3Ub+ffsI+eXoM6Q3opUUBRLRsThNU+Tq2QEyGS6R/nQbudS/h3z/9hHy8OAm0tvco1UUSFVVyOHZGjLhd+R4ZYYURUEoyzIkomOxtRZZxDtIb2ULuf1kF+lPaT08uIlYaxFrLWKMIdQb7SHHvNc0DZJlGfLFle+Qx+8eIBEdizlnjEGqqkIepw+Q9aN1xNoK8d4TMsYgaZoiTdMg1lpC3ntkZu/znkUiOvY/Bd1Dh4YK4tgAAAAASUVORK5CYII=",
    //Iron Block
    "Iron%20Block-ButUtgwK.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABNUlEQVR4AcXBQYqkQBBA0T9JkOim0EVnn6Puf4hm1h5CkSRMgqJmJsCFC0l0Gjrf+/X76+sP/yzrytHwePAdy7pSMzweuEBjsqwr7vl8coWZceb9fuNerxfu4/OTmmmacIHGhF3OmZ9USsEFGpNlnnGqyv8QEc6oKjVl23CBxmQYR1xKiTvMjDNmhosxUtP1PS7QmLDLOdNCoDFZ5hmnqlwhItSoKleUbcMFGpNhHHEpJY7MjCvMjKMYI1d0fY8LNCbscs60EGhMlnnGqSrfISKcUVXOlG3DBRqTYRxxKSXuMDNqzAwXY+RM1/e4QGPCLudMC4HGZJlnnKpyh4hQo6rUlG3DBRqTYRxxKSVqzIwaM+MoxkhN1/e4QGPCLudMC4HGhN00TdxRSuGo6zpcKYU7Ao39BRZWepCAR20tAAAAAElFTkSuQmCC",
    //Iron Ore
    "Iron%20Ore-BGyaKftm.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC50lEQVR4AcXBT0tcVxzH4c/cXMyfcyRHKsxlrlAdqKPpJmvduCiUvpu+E19J19IX0NJNWlemt4XkCJlEoSE/8f6SECy233EWZzG4vc8zOj4+vuV/ZsZ93J1SCAFxd6TveyTGyH3atqVUMbDazCi5O9L3PaXxeEwppYSklBAzQz5fnCIb62uUPlx/QcwC4u5IxcBqltwd2eQcOdydIt3bV8g/HpEQAtJ1HRJjpBSa5yz4GTKbTJHTq0eUQghIxcBqljY5R2aTKbK/s4XkUYMEM8TdKfV9z0rhGXJ6xYK7s0rFwGp3R1J7gGTu5HyDzOdzpO97StvxPaXZZEqpe3uG5P4rSjFGJISAVAysDiFQMjNKm5wjh7tTZH9ni9KTjTHy8cMl8vL1G+RTeIZEHNnkHJlNniJ5lJCKgdXuziopJRbSAZJZev0G2d/ZQj5+uERO8g1iV48Qd0dCCMjDdIBk7pgZUjGwmiV3R0IISNd1lGKMLLQtkvMNJTND3B3p+x7p+577VAysbtuWUtd1yHZ8j8wmU+Tnv66QruuQGCMSQkA+X5wim+tryOHuFPmt+xNxj0gIAXF3pGJgtZkhKSXk6e07ZDbZo/Tj999SOsk3iJkhzd4Rsn17gezvbCF51HCfioHVl5eXlJq9IyRz54ftGnmyMUZ++mOOdF2HxBgp5dQgOd8gZoa4O6tUDKwej8eUzIzSSU4s5DliZshsNkPMjJKZIZ8vTpGN9TUktQeImSEpJaRiYDVL7o70fY/EGJHHfobMJlMkpwaZz+fIg+u/kY31NWQ2mSL7z7+j9PL1G6TzV8jcv0YqBlanlJDHfoYc7k6RX97+i3wKz5A8SoiZUWr2jpDt2wtkf2cLebIxRl78/gLJowZ52DZIMEMqBlabGZLaA6Sb/4o8uP6CON+wSggBMTMkpwbJ+YaFPGdh1CBmxioVA6tZMjMktQdIwx0zo+TulEIIiJkhKSVKZoa4OxJCoFQxsP8AfncquUYvwfUAAAAASUVORK5CYII=",
    //Spruce Door
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAADAUlEQVR4AeyYv2tUQRDHJxti9DQGxBNzqIVGgljEUgRbSxEFWwsR7PwH/CvsLexsTWFlpY2lnQgWiqCCEvwBahLC+T4P5ljm7dxtLu+9JOSO+97szM7Mft/u7HvvNjx/cLZv8fTOqf6Ta91aQU47DnqQ4vPrx7ooClXWvqxJ98LcUBw515EcaB7ygm9vf4sCvSRAIwUllZIbfzYlB8TGuWcXZkWBfSgBHJrGzhNgPVhze6Xzx2fk9OLhWkAumx8de/hw+ZEADArW6P2rVakTmtvKMNedF2A7tHpTMqf61UfjU7PMmENrgApOIaf61Yd4BvJQIcC6eM5N2CsEmhhEc/5d39TmQLoEmImmdwEsXAJ17gBysbMY0CJJgIr9dPOZeCCZVrdKbJ4/dnLawdFDr3dCAIrFw/tXpizw0WSsKYht1h+dfg9h5sUtkZUbXv/A/njlTX+gmAb1YkylOiymdCh+kktQ2Cvfu9cvTVWMIww5MSUBplQxImft3SWBcbLq2o8TG8eMTSBOsp22S2Ch10nm9ew4e32enZhw6MA0csfgzkBbjCYEWp0BXlL0foP8+vmftEpgpjNdvn/yDgpO9g62S4DCXlo+X76DItFbnQEGBPHTt30CPHkVBZv2CRSDxt/GCcSDpdr7i0DquePOwMXlM6kZE8+Os9fn2YlxCdDZBLgDKsjfOgEGjTEhMJmByQzs3RlI3Vbj/Z3b3rszkHuFo/zKGeB0QzEqoO7+4B3V6kA5hwzqq3IrMYHXY6DBVuYcMmwnxj2qJenrj6t9C+wsF5KdAGirzfqj0++hrAHbSbJ395bEA89zlk7BMRw2zx87Oe046EkCdOjxm5V6CJ0j41gIktfCJYAjB80W/L/LhcaSy8NQAl5QnfbdS4DDx1YOq/mjCOy0Utl1IrULfn7fkHD05e3KUS0VG1dwqr3VXWAvUPVKDcBKO7WKUzJnJ2ic5kvJCoGUU5O23UGANVfo1Ta1C7QYVQYGWrx6TBTodObugFw/KT7kZmszFhL9PwAAAP//UgtZQwAAAAZJREFUAwBAUBXaEHnAPQAAAABJRU5ErkJggg==":
    "data:image/png;base64,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",
    //Lantern
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAAAXNSR0IArs4c6QAAAjtJREFUaENjZBhgwDjA9jOMOmA0BEZDYDQERkNgNARGQ2BwhUBj3fL/9U2RWB2FT46SNgWKZQPmgPsTI/+DfFH3SoehSewKVg8hyynmL6da1IENer8wC+yA81euMxjqaGJ1ALKcYPw06jqAkjikVC/VfEKuQ6jiAK+sNnAU4gLbplXhtIcqDoitbv2vwqyE1f47f+8xLG6tpr0DrJWsGI7eO4biCJgYXgeAXP/2Pf6AEBb8j9cXIDMCHY2whsD6/efwhwAo/sxFFPGmoZNv7jPgi0dyEyBIHyM1HLBuz/b/rx5ygN0BiwZQ8IOAmPwPhiAXT9xpgFoOAAU1KCGCEh0IwNigqBl1wGgIDO4QoEZBRFE2pKQQoYZesiojYkIN5jhCxTgjOYaB2o7i8hJEBcDLhy8YcDV0UYpiQgaCDKJFnQCuC/yMLTGqUnTvgcr2TWePU71SQnEAvkYFsgPIiTZc8UWWA6ieBmBRQGwIEJX6iFREVggQaTZRyshywPBNA/jCjKbZENQoHbCCiJz4JEcPznKAqKSKpoiq5QA5DqCmHkZyfEOMHkK1IMwTjDPm7v8PUkwMACXUjGRHcBU+1XAiXi3Z5/PxdskocsCnNWJ4u+Mww/lCXhFs8JAVAiAHMOvwMXCoczIwMZxFCYl/DMYMP25+Z/h75RMDzRzw97/uf3SL0eMD5BBmxsu0CYH//38RFQWMjGyjDhimITDgiRBWEKFnReQsSHRBREyxCstisOKVmNqQUI8IZiYAgDdIX3fVg60AAAAASUVORK5CYII=":
    "data:image/png;base64,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",
    //Bedrock
    "Bedrock-Bk9sqoXq.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAABJ0lEQVQ4EQXBMXHEMBAAwJXmSzWmkDkAnnm5N4sH8KYQFKFgLnEfFQ/gOKgxgOyWtw8g7Ibb7pIIKVQAAACA8rSiG7qhOx0Yfi1CqgAAAADlaVowLeBwCrC7NBUAAACgvOwGbn82uwsJIFQAAACA8mVxOAEhseoY+KgAAAAA5SlACiSmDYlpUQEAAAAeB4bbqqO5NR1Nd5oqAAAAQHmBFCAxLQhpdasAAAAAj6aDRAhNx9DtoAIAAACUl8S0CCmk1S3BYagAAAAA5Y3utOo4TYsDDB9UAAAAgPJlA4nQdFwaOn5UAAAAgMcmweqWoEvwwaYCAAAAlLdu6C5/NgmmRWg6KgAAAEB545YIidB0XBKhAgAAAJSnacH0jeEjNL8WhKYCAAAA/APfh1LhqF55lAAAAABJRU5ErkJggg==",
    //Stone
    "Stone%202-B513XmEo.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAAAAABWESUoAAAA8ElEQVQ4EQXBIbblMAwFME1O2A0wK+iiZ5UPlBnE/Ev//gPaIMZ1EMACAAAA2I0RIyCCz3XEWAAAAACbcV3H4DrgAcQCAAAA2MSLVloUGgxYAAAAAHtEG4wYlAIjWAAAAAA7Sgsg+OE6Ll4LAAAAYA8o8PNicETQFgAAAMBmXJ/jOn4iBiNgAQAAAOwXtNIoAMBYAAAAALtRaBRoFIAFAAAAsD+Pnxh8OGLAgAUAAACwHwRRaBCU0soCAAAA2AwI2iD4fI5rLAAAAIBdShsDYMRjcLwWAAAAwG6DAALgBSwAAACATQAMotDaCBYAAADAH/utSPflzcCBAAAAAElFTkSuQmCC",
    //Cobblestone
    "Stone-CCcgn6oK.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8klEQVR4AcXBMY6kRhiG4deIkBZ5YdEZFdHZzA24Qd9g4vXJ9gCz4gCM1lkTFRklUfkvKrf9SQ5Kq815nj/++vbtH/5z5oxM00Tp+/fvSNu2lKZpQtq2RcwMiXtEwhYQP3hkfIyImSFxj0jFxeozZ2SaJqRtW2R9rcj72zvy8++fyMfHByUzQ+IeKZkZErZAKaUDca5DKi5W84v1tSL9vUe+lgVp2xYxMyTukVJ/75GvZUHatkXMDAlbQPzgkZQOpOJiNf+b5xnxg0e+lgU5c6YU94ikdCDOdcjXsiBnzogfPNLfeyTuEQlbQMwMqbhYbWbIn12HhC0gfvDI+BgRM0PmeUb84JGwBUrP5xMxM0r9vacUtoBUXKz++PhAfnx+ItM0IW3bIutrpXRrGiRsATEz5P3tHVlfKzI+RsTMkLhHJKUD8YNHKi5WmxniXIfM84z4wSP9vUfiHhHnOiSlg1LYAnJrGqS/90jcI5LSgZw5I+NjRCouVsc9Uro1DZLSwe+kdCBnzogfPDI+RsTMkHmekVvTIM51SNgCsr5WpOJidUoHcuaMPJ9PxMyQr2WhdOaM+MEj42NE1tdKyQ8eCVtAwhYQM0NSOpCKi9Vnzsjz+UTMDIl7pORch6R0ICkd/E7YAnJrGkp+8Eh/75F5npGKi9V+8MiPz0/EuQ5J6UCc65CwBUpmhpw5I7emQW5Ng5w5I2aG9Pee0vP5RCouVvOLlA7kzBkJW0BuTYM41yHjY0TMDJnnmZKZIe9v70jbtpTW14pUXKxO6UCc65DxMSJmhnwtC3LmjIyPETEzJO4RmaYJ+VoWfmd9rUhKB+Jch1RcrD5zRsbHiJgZEveIONchYQuImSFxj0hKByXnOiSlAwlboOQHj6R0IBUXq6dpQswMiXtEUjoQ5zrk1jTIPM/IrWkQ5zpKKR3ImTMyTRMS94iELVCquFg9zzPiB4+ELVBK6UCc65CUDuTMGUnpQM6cKfnBI23bIv29p5TSgVRc7F/qzX6uvP6VQQAAAABJRU5ErkJggg==",
    //Copper Ore
    "Copper%20Ore-CfitYIDb.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADH0lEQVR4AcXBMWtdZRzH8a+HI4E8T+MDl3psD3hRWm6H0LpUUAdBhNCOQgZBcCrkJfguOjr4AhwyOHRSHKTQLiUZaqHG5AYynOaeyqF/6PNX2sZWfk2GRwhdz+fz1s2bN1/xBmaGpJQomRni7kjOGYkxUgohUHJ3JISAVIysNjNK7o6EEBB3R9wdCSFQCiEgIQRKfd8jOWckxoiEEChVjKzmhLsjd6snvPbPE+RyfhvJOVOKMXKaGCPyXeiQg/wM2W6vIV3XUaoYWc2JEAKynlqk6zpkkRfI/vklSh8+ykiMEZnNZoiZIT+lL5DJZILYfE4phIBUjKx2d0rujiwWC2T//BKytuzIt08dOQjPkN/eO+I0ZoZ0XUcphECpYmR1CAFJKSE7OzvIxQtHyI3Dx8j03yVk8k6L3L7yKbIyDEjXdZQWiwWlGCOltm2RipHV7k6paRrk5asG2b6UkIPJhNIwDEjXdUjOGck5IxcvHFHa3ctIjBExM6RiZDUn+r5HYozIYrGgFGNEYoxICAEJISB38yNk+skM2b7YIMu7PbJxeAf5MUckhIBUjKxu25bSzs4Osn9+CVlbdmR3L1MKISApJWQ9XUU2f7+HTDl26a+HyDQuIV/nfeSWR6RiZLWZIX++WyF/f/URcpZjf+z2yCUeIi9fNUhKCTEzxN2R9dlVZPPgAXJt9Tpym2PDMCDBDKkYWe3uyMfPW2Tz13vIdPo+cu3MB8jwfAUxM2RrawuJMSJN0yBmhqyfW6U0n88puTtSMbI6hICYGbJ+bhWZnJkg8/kc6fue0o3wGPkh8z9N0yBmxmncnVLFyGpOuDvi7kjXdUjOGbm/8gJZW3Zk+nQJ+b6NyHa3j9zyiOScEXdHcs6UmqZBKkZWp5SQlBKyefgAWVt25PLl68hsGJDNwwe8dobXfs4vkI3PvkHaYUDMDOn7Hrm/8gI5++VVJP6yh1SMrDYzJKWEbKx+TmkYBsTMkPVzq8hkMkE2ODYMA2JmlGazGTLjmN05RFLbIhUjqzlhZoiZIe6OhBAQd+c0ZsabmBmSUkJSSoiZIRUj+w/VCknsuRIknwAAAABJRU5ErkJggg==",
    //Copper Block
    "Copper%20Block-C586wAI6.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACjElEQVR4AcXBQW6jSACG0a8RlTIkgGFBImXTfb8+xVzQB7DUsjSy2ooig01SRbkWPfo1XtRELGbHe9/+/uvnHxZMYUAq2yJTGEhVtuX/mMKAXENEbt4hx+EDyVhZzt3x+kbq5h3yzgV5KEr+a0Aq2yJTGFjyPl5IjT4ik5uRjJXlfPFa98juvEf6riFVW4NUtkWmMLDkfbwgP56/I7vDniUZK8u5u3mH7M575HS+IH3XILU1SGVbZAoDcg0Rqa1B3scLqd1hj5zOF+SlaxAXApKxspwv+q5B+q5BamtITWFAriGSeh8vpI7DB6mXrkG2hSGVsbKcu4eiJFVbw5JriKRu3pE6Dh/I5GakKjfItjDI6COpjJXlfFFbg1S2RaYwINcQSd28I3UcPpDJzUhVbpDX9gkZfWRJxspy7mprkMq2yBQG5BoiqZt3pI7DBzK5GanKDfLaPrGk7xrk1+83JGNlOXeVbZEpDMg1RFI375DRR+RzDsjkZqQqN8hr+0Rq9BHpu4YlGSvLuZvCgFxDJHXzDhl9ZElVbpDX9oklfdeQqq1BSmuRjJXl3F1DJHXzDhl9JPU5B+RxY5FtYVjyUJSkamuQyrakMlaW88XNO2T0kSWPG4tsC0Nq9BHpu4ZUbQ1S2RaZwkAqY2U5dzfvkB/P35HdYY98zgF53FhkWxhSo49I3zWkamuQyrbI7rBH+q5BXAhIxspy7kYfkd1hj5zOF+Sla5BtYZDRR1J915CqrSG1O+yR0/mCbAtDKmNlOXefc0AmNyMvXYNsC4OMPpLqu4ZUbQ1L+q5BtoUhVVqLZKwsn8KATG5GqnKDnM4X5MS/XAhIaS3y6/cb8tw2LJncTMqFgJTWkspY2T+vjgi2bW0sLgAAAABJRU5ErkJggg==",
    //Coal Ore
    "Coal%20Ore-LRQlxPOj.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACzElEQVR4AcXBMWvdVhjH4V+FBodXNLrURYdqCZzi0csdtGXMajwmH8FfJh8lo/dCoWe4i0ZTQaAIZEq4p0EvMQbT8g8eTuHiVc/zw8ePH//lBTlnxN0pmRni7si6rkjTNJTMjJdUbKzOOVNyd8TMEHdHzAyZpolTYoyU7u/vkXVdkXVdkRgj4u5IxcZqnrk7sq4rsq4r0jQNMk0TklJCzrsd8vTI/4QQkK7rkE+fPiFnZ2dIjBExM6RiYzXPlmVBQgiUzAwZxxE573bI0yPf/fTzK2QcRySlhHz48AG5vr5G3B1xd0oVG6vdHUkpIbvdDnn79i3i7si7d++QZVmQcRyRP++OlIZhQNydU8yMUsXGajNDbm5uKOWcEXdHzAzZ7/fIfr+nNM8zpWVZKDVNQ6nve6RiY7W7I23bIjlnxN2RZVmQEALi7pTMjNLvf/yG+NcHxH48Q+KbC6TrOiTnjFRsrObZ4XBAQgjIsixISgk573aIf31ALi8vkRgjYmZIfHOBTJ/vkPb1KyTGiLRtS6liY3Xf95TMDEkpIefdDmlfv0KeHvluHEckxoi4OxJjREIIlNydkrsjFRurc85I3/fIPM/IMAzIOI7I0yPfXVxcICEExN2Rvu95yTRNlGKMSMXG6vv7e0p93/OSGCPi7oiZIfM8c8qyLEhKCTnvdkjTNEjFxuqu6ygdDgdKIQRkWRZKZoa4O2JmyDRNlEIIyNXVFadUbKzm2TRNSEoJ+fXiF+Tu7g45Ho9ISgm5ublB2rZFDocD8uX4F5L/+YaklJCrqytkXVdKFRur27ZFQgjIMAzI9PkOOR6PyDAMSAgBmeeZU778/Q05Ho/IMAyUmqZBzAyp2Fidc6YUQkBCCIiZUbq9vUUeHh6Q6+trJMZIKcbIKW3bUqrYWM0zM0PcnZK7I2aGvH//HpnnmVLbtsh+v0dyzpTcnVMqNvYf4xYfKl4hVjwAAAAASUVORK5CYII=",
    //Coal Block
    "Coal%20Block-LxRP4FEi.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8ElEQVR4AcXBsQ4YNRRE0ctqi7Erh9CEIvz/j5GGEFd+04FGSvEULRHdnvPLH58//0NzquhsE5Lo9t50ay0624RtOkmEJOLiZfep4oltQhJhm7DNz9gmbBOSCEnEHIPu4mU339kmbNPZJiQRay26vTex9+aJJLpTRXfxsts2YZtOEiGJ+O3jR+KcQ5wqYq3Fk703T2wTtomLl9226SQRkog5BnHOIU4VT2wTtnlim7BNd/Gye61F7L0JSXSniie2Cdv8zN6bkESsteguXnbvvQlJxByDOFV0tuls00mik8T/cfGym+8kEaeKzjZhm5BErLXo5hjEnJM45xCnis42YZu4eNnND2zT2SYkEZKIOQbdqSJOFZ1twjZPLl52893em5BESKKTRMwxiFNFZ5vONvH7p0/EqSL23nQXL7vXWoRtQhJhm5BEd6oI24Rtnqy1iFNF2CYkEZKIi5fdcww624RtQhJhm04SIYmwTdgm9t6EJEIS3RyDuHjZ/eeXLzxZaxG26X798IGYcxLnHJ5IIuYYdKeKOFXExctu/oNtQhIxxyDmnMRfX78Se2+6tRYxxyBOFZ1twjZx8bKbH0giJBFzDOJUEX9/+0bYppNEd6robBO26S5edksiJPHkVBG2CUmEJMI2IYkntgnbPLl42b+WiBldiEac0QAAAABJRU5ErkJggg==",
    //Spruce Log Side
    "Spruce%20Bark-mJWHaArx.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACKklEQVR4AcXBwWrsNhiA0W8k0UiWRImHbEJKl32Ivv9DXOjmtiEQhngoki0F7Ez7D7PQBJPO7cbn7H7/bX/iX1OpiKeHgBjyTCsdR8Svv/yMGPJMKx1HRLz3iD4YxPMhI54eAmLIMyKNBaHYmOETe2cR6fWAiN7RsncWkV4PiOgdtxjyzBrFxgwXS10Q3/488H9oq2k9HzK3UGzM9MEg0pGz6B0ijYWWthrx8pZZs3ycaC11QWirafXBINLImWJjhgttNV9Z6sKZ48rjPiC+jYUrPylE5yxiKhXRh4CI3iEUGzNcdM4iplIR0TtEHwxiKpqWVjvW9MEgprLjFoqNme+vCRG94yvLxwmRxoKI3iHqe0VE72h1znILxcYMnyx14cxxJXqHSGNB9MEghjyzJo0FEb1DLB8n1ig2ZqJ3iKlUWo/7gHh5y9wijQXRh0irDwaRRlYpNma46JxFTFRuMeSZr2i1oxW9Q3z/629EvPcIxcYMn3TOIup7pZXGgojeIdJxRMR7T2vIMz9CsTHDxVQqonOWH/G4D4gXri11Qdg7y1nOCG01LcXGzOM+IP54rrSGPCP6YBBp5KwPBpGOXEljQUTvaL28ZVrLx4mWYmOGi85ZxFQqonOWVvQOMeQZoa1G1PfKGm01a6J3tBQbM/W9sqYPBjHkmVYfDCIdF8SQZ4RWO9ZMpSKeHgJiyDMtxcYM/2EqFdE5S0tbzVc6ZxFTqaxJY0EoNvYP0u3FBxMG+HoAAAAASUVORK5CYII=",
    //Spruce Log Top
    "Spruce%20Top%20Bottom-jDTsvEYL.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACEklEQVR4AcXBMW7UQBSA4T+Dd97IQRm8EpGWBqjocgAKbsGFc4RUdCkoVtrGchRW82Y3DjwnxTgyEQGk+b6Tr5/f3/NLrw7TyYhZtSvMYX/A9OownYyUVu0Ks+vvMJ2MlHp1mE5Gljgqa3p1mC8XG56TNGOCeEzSjDk7XWFuzg+Ugniec3m1xTgqazoZKX37vqMk0lKKkjGDMtmnzJJ9yphBmfn07hTTyYhxVNbwGxcf31LKxxNKa+aSZkwQT2nNg+vdLSYfTyg5Kmt4lDRjRFpMPp5gkmZeImmmFMRjojBJmik5Kmt6dZggHhMls2Q7ZEpRmBmUmU30lAZl0gYmvTqMo7KmkxGTNGMGZdJqpqS6x3w4f8OSNjDZDplS0kwpiMd0MmIclTU8EYVJEI9JmjEiLaXtkCltosdEYSaIx0TJmKSZkqOyhv9sUCZtYGZQJm1gxlFZ06vjb2yiZ0kUZpJmlvTqMI7Kmk5GSoMyWbNsO2SM6h4j0mKisCiIx0TJlDoZMY7KGp6IwqJN9Mx5XmJQJm1gxlFZ06vDBPGYfcqUgnhM0owJ4vkTvrnH5COLenUYR2VNJyNLrne3mChMBuVR5l8E8ZhORoyjsoYn1vE1Zs2DpBnTBiZBPCZppnR2usLc/DhQCuJ5jqOyhkeXV1tMJyNLenWYTkZKq3aF2fV3mE5GSr06zHn3CnPYHyg5KvsJGB61plfOssMAAAAASUVORK5CYII=",
    //Spruce Planks
    "Spruce%20Planks-D1xGFcTl.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACdklEQVR4AcXBsYpbRxiG4VeHOTPD6BCBFszaIYWrFCFVutxNbiX3lyq4SrFpHIsNUnwWaZj5R6Dk024xBrEYUpznWf36y88X/lOqITF4xLsLX8POK8S7C1/Dzivk4fGIDCzM8SIGj5RqSKlcfZoN2QSuUvRIDJ6enVdIqUYvBk/vMB+RTeBqYGGuVENi8EgMnt7bDVcxeKRUQw7zkdek6JFSDYnBI9vNhDw8HpGBhblPsyG1fqYXQqJX62ek5UZvTCO9lhsyphFpudEb04i03JCBhbn3bybEuzWy25+Q+7s1X1rT2+1PyP3dmlvsvEJKNXq5GLL9bkIGFuZKNZ55ZLuZkKeTIbkYkqJHcjFkrjzbn5AUPb0YPBKDpxeDR0o1ZGBhLhdDcjEkRY/E4LklRY/M1ZDtZuKWUo1eLsYtAwtzH3czvTGN9EJISK0ZabnR+/2fmd6YRm4JISG1ZqTlhgwszP34/beIdxd6dl4hpRrPPPLNeuT/sPOEHOYjMrAwx4unU0Ni8PRi8PSeTobkYtySokdyMSRFj+Ri9ObK1cDCnHcXnnmkVKOXi/GaFD23pOiRXIzedjNxNR+RgYW53z78RW9MIxJColdrRlpu3DKmEQkhIbVmei035ONupjewMPfTD++Q3f6EbDcT4t2Fnp0neof5iNzfrbllt+fq/m6N2HmFeHehN7Aw93RqSIqenp1XyGE+0kvR09vtT8h2M9FL0SN2XiGlGlIqXxhYmONFLobkYkiKHtluJqRUQ3IxZK5cvX8z0SvVkFwMycV4zcDC3B9//o2MaaTXdjO9MY1ICInew+MRqTUjLTdkTCPScuM1Awv7FxJzBWrCuOHvAAAAAElFTkSuQmCC",
    //Grassy Dirt Top
    "Grass%20Block-CaGn4N-x.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD0ElEQVR4AcXBSXPbdADG4Z/+WizJtrwkrrPTlG1IadqeGD4AF/iCfBRguDFTOjBMB0go0zSkS5Imdu04kRdZsmR4y4UDdz2P9cXXzSX/uP2gi5w8uUSSOOO/3MBBZqMU8esOUm1XkCzJkWS8QIp8iRjDO+2dKvLX47dIe6eKGErmYFnI0eNzpLbqI8axEGMsZPRmhjQ3AuT6MkGSeIKs7zWQsOkh48Ec2X3YRY4enyPRWoAsiyViKJkTRC6SJTnSO44Rt2Ijtmshrm8j6SxHgshFbMdC0ukC8QIHaW4GyNMfzpDZKEXcwEa2H6wihpI5p79fIUHDQ/y6i/h1B8nTAnF9GxmeTpF6x0fi/hwxVynihQ7ihTbi+jZir1aQ1laIHD/qI4aSOZufNpHBywly64Macn54jazvNRDLWMjkKkWamwGy/kmEHH77BinyJdLcCBDbNcjpb1fI4OUECZseYiiZk81ypN7xkZOfBsj2fgs5Pxgh9Y6P+HUXmQ5T5PJZjKzu1pAkzpDe8xiZTxZI2PQQxzOI4xnEUDLn6myKtHeqyNa9FnLTS5CwVUHGgzniVGwk7i0Q2zXI7CZDtu83kXSWI6PTKVK/5SPTUYpkSYEYSuaErQoS9+dIdMtC8qxAbNcgi3mBrO7WkMGLCVJd8ZCo6yOvfx0heZojfuQhi3mB3FwkyPpeAzGUzGms+ch8vEAaGwHiRw5iGQuZXaeIF9pItOYjjbUASWcLJM8KJGxVkCTOENuxkJX3qsj54QgxlMyZjlIk7s+R1naIDF9NeWe5RKJugBT5Erk6nSJxf45UQhsJmx4SdX2kWBTI6m4NuTyKEWNbiKFkju0YpL0VIm9PxkhjLUB6xzGyfreJXDy9RmorFWRrv40cfHOGbO03kctnN0il5iJnByMkaLj8y0MMJXNuLhNkfS9Crv+cIX7NReqdCvLqlyHiRy6SThfI+R9XSGM9QEZnUyRLcmTnYRt58fMAmU8WiF93EUPJnN3PVpDe8xjJswIZvZkhYcNF/LqDJHGGpJMF71gW4lYMUhS8YxkLifsJ0v0oQs4ORohfdxBDyZzjR31k7eMG8vZkjIStCjI8nSLtrRCZjlLkwZe3kYvjITK7yZCVnSqSxBliWRYyfD1Btu+3ELtiEEPJnM6dOrKY58j+V9vI4XdnyPufd5AsyZE8K5CTJ5dI3E+QqBsg48Ecmd1kSOdODal3fGT4eoJMhiliKJkzeDVBqi0POf6xhwSRi0xHKTIfL/g/YdNDNu42kKffXyCb95pI7yhGKjUHKfIl0v2wjhhK9jdf62kRgQXcCwAAAABJRU5ErkJggg==",
    //Grassy Dirt Side
    "Grassy%20Dirt-CGYgSKpv.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADSElEQVR4AcXBsW8bZQDG4R/HtaFxE+6S0jtorjobscBgK2G1ZKlLBvofMGRgYWfpzMrEgioByojUMQxdKp3kEdU6MyL5YvEF2V9DfacEu2lIKLylw9fK+z3PW59nt1/wn/JojvgrbyPP538jN9I1pDyaI+FWAzk9PsN1ddVHVho+8nx+gYQ31pHffjlC3muuI+eLC8SjZj6vXF78g4RbDeTi+SWyem0Vubzf4KWv58jJk2fIR5/eQuzvM2Sl4SNnp+fIorFA3rl+BVlp+MjJk2eIR8380+MzJPwhRla/eYFMTitk8WzB/xpIeTRH4p+2kMUnc+Tqqo+cHp8hG1vXkfN715CTz54gK40ryMaPMeJRM3/1201ks30HefrVI+Qmt5Dqy2NkjQayfv8mLvPrU+SDB7eRv76wyPm9a0gah7z0M69J4xDxqJnfbTcRYwfIx+0m8uH7G8j+d4+RbruJGFvxmge8Jvg+Qjbbd3jJDpBuu4n0h4e4PGrmG1sh42mJJFGAjCYzJI1DXONpyTJpHOIaDx8ha3GIGFshaRwivU4L8aiZ3+u0kCwvEGMrXOvbdxEzOEDSOER6nRauLC+QXqeFK8sLJIkCxNgKGU1miEfN/CwvcPU6LVyjP/rIu1GAGFshWV4gSRQg42mJjCYzljG2QpIowOVRMz+JAsTYCsnyAkmiADG2QpIowDWelri67SYuYyuW6Q8PkTQOEY+a+cZWSBIFSH94yDL94SGuNA5xGVuxTK/TwpXlBZJEAeJRM583pHGI9DotXFleIL1OCxlNZkh/eIjs7e7g2n/4GBlNZrjWt+8iZnCAeNTMT6IAMbbCNZrMcPU6LSTLCySJAmSzfQcZTQpcaRwi/eEh0m03kZPBATKelohHzXxjK2Q8LZFuu4kYWyFJFCCjyQzpdVpIlhfIGgPEsFwah4ixFdLrtHB51MznlW67iRhb4Sr+PEeuXC5wJVGAGFsh42mJ7O3uIPsPHyNpHCK9TgsZTWa4PGrmJ1GAGFsh42mJ7O3uIFleIONpiWs8LZG93R1cWV4g3XYTMbZCsrxAkijA5VEznzfs7e4go8kMSaIA1/r2XSQdHCCjyYxljK2QJApwGVsh42mJeNTsX5ewNzirCT+3AAAAAElFTkSuQmCC",
    //Grass 1
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAYpJREFUWEftVbFOw0AMvYhAhKpKSGwwIHXgJ5j4gW5sDCz8FwMbGz/AxMY3IDF0ZKoQCg0qeie9yvXZlxQisdwtSXy23/Oz3VYhhHD9dLbGE+f+8q3iu3xePZ5Gn2Zab8zwpR3Gh/kiidVxOn8F8HbZxcQWuASQBOiLe8Qih0Xi5nkWiX+8txvyEmcnArp6SkEFPRK4rw/2TBIVGHZf373VAxxJcO4uXrekpgokBCK6Hbcv5+tV2yUkXAJSegmeIzs5bgLucYaQQCsiAfRHMrYGzqteDiqrzJGAP+cCSkYppUFvBb4J7lUvZ+Fw2sTPz2Wb3SrimGsjhw1SQlqr99a6QgXY0W8q4a02/BIC8jeB4PtNHSvKJZJkoChiQIJHDy7tWwQ0+NHJJPohkZfAUoHysnU59UwCqJzg7OfQ6jUhzpc3P8k+I8FY4HI48W4VkSgA2dC/v1butUbbTQJw6lu5oQB9fu4W/LbnfYBZBXYNHsPf/O8fI/HQHIVAUaAoUBQoChQFigL/rsAPej8OaRW5bbUAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB8ElEQVR4Ae3Bv0uUcRzA8ffz6UnP1DsPL5WwoabmpqAWtTILhMShCK3hlqglKFBcawgaVRoajKBuMumXdGGBiPQXBLUUdJaWx53ddafofa/PFw2+Srk+y/N6eWzpmWiuoqYvZwXVORYzOFYL61jzQyVBHbtdZ1DRtghWOpkT1MU37Qb15FRGUF3jMYNqbIlgTfUvCapjNGZQQsA8djj7MFFFvRpcFlTnWMygistrWG1HoljZL7+x6ptrsKKtEazFjwWsuZtFQXWMxgyqPl6D9eLST8EhBMxnh9iBOlzxg/uw3l5bEVT/87jBkU7mBNU31WZQlXWD6931FUGdvN9k+AchYD5/VfFQ3gzbZD8XcZlKFauyYbBO3GswqMlbix6qa7ypijo/GTWop32LgkocamBTHpcQMJ8t5x4lDOrxwFfBsVaq4MovlLHej5QFdWX+sEHNUcRq3F+LtfTpF65Ud0ZQpx/EDSqdzAlKCJjPlpeDyx7WAB6qN9ViUM+Gfwjq+N16g/KiHq5vH3K48gslrPmhkqAuvG43qFR3RlDpZE5wCAHz+Y/89zKu2gYfa+ZqXnCsFjZwGcM2qTMZj10IAfPZ4ejIXoOavVMQHDV1e3BV2dTbGmFTAWv2RkFQPRPNBjVN1mMXQigUCoVCoVDA/gDpeJmnG6SKAgAAAABJRU5ErkJggg==",
    //Grass 2
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAMpJREFUWEdjZBhgwDjA9jOMOmA0BEZDYDQERkNgNARGQ2DwhkDCUaX/yG2FP7/+MixxfEh1B2M1EGQ5yEIQYGFjBtN0cwDIclZ2FrCl3z//RHEAyDELrO9RNRRQDEO2HJsDOHnZwQ6bbXKLao4AG4RuMSzuQRalnlEDp4XfP/8wwEIGxKZWSMB9gu4IkOXIYsiOQXYgpY1avEEJ8z1ysKM7imYOQLacmkGO7mCc2ZAW8Y0ttDAcgF4AUSux4YoqqmUnctPCqANGQwAAldNZId80JqgAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAABL0lEQVRYCWNgGAWjITAaAqMhMBoCoyEwGgKjITDAIcCIy36LZs5/IDk+CQ6wks+vf4Lp41XfmMAMKhH4DAM5DuZAGE0laxHGwA02a+AA+1hCgw8s+/bBV7ActzDbf5AAjwg7mP/8+iewPDAk4HrBAmQSLGj6qGIompl4uXAHnGr4AY6OoPUCYB8DdYHpXanvoeISMHG8BpIqiTMNMDKC4x89RKjuCLgFztMgPueXhKT6Z1c/gj3Dws4Mpo+UfgGrhan78ekXKIj+H6ugLFfgDAFCQQmynJAaYuThaQCmeF3gC7BPLVo4wRaoWImBpY4wfIEpAdNgn/8HRlMFijDJHLJDAGwTI+WhgBECMC+cqPkODgm+2e/B5QNMfG/WB3i6gYlRQlMWApTYPKp3sIQAABXpQA4lDB2SAAAAAElFTkSuQmCC",
    //Grass Medium
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAihJREFUWEftVzFKBEEQdPF0keNAMNNA8A1mRn7AzMzAf5kYmJn5ASM/YSAYaCYIcsHpiVJz1ljTdM/uwoY3yZ07PV3V1V2zZ7NRWZcPRz/e9vLzOz9efCyLkHY2SX/fnD43tdzcc4MiYE1IEhEBxmL/9uwlJFNsEBjJbWIFZ5X6LIpnbEQkEwC4Au/uTwsFvxb/UmsLEDTZ3gzVnr8t0l7UmkSAlSOYwADkYWbXavi9Bq6skMsjURDAgeuTp+b87iAPHw4piK0e0tqWRKRAYrrXJoxwCC/uDxN4lMQSQKxHggBeHuSgS4ohJHhEwA6ntoR99sjULBkSYGXaf0565ALIi6X9Zp7IipmAVq+W8qrU4aLE6KveH5ZEpIJrQ1YCIMquw8g50P6CAIrQZ31IZBcQCOBb7eo6xYIdsWedYIeLkw0V9Pz76zy7xLuMMgFaRA+DwNXxYyGtVz3ti0+osDNbzQIXSVQJINhWrlVpO7RFBFFvWxUQQxJ2FrICETirIhCq8K5pJcBZsGqCBJY6IhFQ2dBzTaYE6A5LAG0qNP/LiTnx5klV6PXOpkV5ydgeewRIXEnwhVa9im0lVgHrEg6qd06fqUXDqzhKogr0kb+LjO53tsDekErAm5ch4IjtTcDrf9T7ISR6EfDAx6i+UwH+MMF7QCd/LPBOAvrjhH4eE7xKwL7ZvCt3SK+j2N7/F9jbcQxwV4Gua3ksYObpdMHYgDbfmsBagV+jd5EwRgAdgQAAAABJRU5ErkJggg==":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADe0lEQVR4Ae3BT4iUdRjA8e/7zPuO7+zszM7+0V1Xk7ZTRIfaoAITKjOzwEr2kIQW6EWKKCrSpEvUQahL9MegwAhiD2WSlqWZZbLsrVOBGRm47R/ddWZ3Zmdmd3Z+b8+za/Aq5fW9+Pl4G/YXItSNt3Vjzv0ygamXG8QFGR9TK81jwpyPyXYswzTqTUy9soBxzQgjwqKONVnMn8OTmI41WYyQMB/Pw5wdHsW0doUY8T2MiIcpjdUwhd4MZnqijqmXZzErb2nDtBTSmMrUHKbv9m7M2eFRTL4ng/nxuRlBCQnziPBQ976Td6hqaR4TLEthUoGHiSIWBWGKuJTvYdJZH5PO+JhU2sOMnyljaqV5TJBJYfru6sIICfP6Xw0iVKYtjUkFgglzPqY57zBBmMJcGqlicstDzOzUHEZ8D5Nu8THplhSmUXcYt+AwPz1fFtSdr4cOJSTMX3VrAXN460VBDRxe6VCjv05jhnZXBTVwpNehZovzmMKqDOb7XSVB9e8JHMo1I0yhN4NJBYL54tExQa17u9WhUgXBCAnzG7UmZuPHHQ71+Y4xQT1W73YsqmJmxmqYMBdgqpfmMR5LNvS1YurlBubQwISg7ngt7VDr/mh1qJ9frAhqw4cFhxIS5n+745KH2nSgMyJm5kIds/6DgkNVpucwQ7urgrr7jYxDrd2XdajjrxQFtfX4aseiCqawMoPJrQhZUsEsNCKMkDCPqzz8SVeE+mb7pKDuf6/NoSqTc5iem/OYqb9mMdnONCbfHWLGz5Qxp1+qCOq+d9scKtuexhx58qIQIyTM5yptvRni2m9owfzwzLSgBg63O1S+J8QcfWpKUFsO9ThUs+GIO/nstKAe2F9w/AchYT7/ivBQ3gmuMHWuQpxrRpjiSBVzz1utDnXw5XEPtf79QoR6/GDeob7cMi6orr5WlpSIExLmc9kjn3Y51Gfbzgsxc9UmccXzVczw3pqgnh66yaFOU8Hkli/DTPw+Q9zgxhFBPfhRu0Md21kUlJAwn8u+3j7pYbbhoTYPrnCor/ZcENTafVmHkrwQN/pbkbjS31XM0O6qoJ74brVDDW4cEdSxnUUhRkiYz/8ojdWIC3M+5sSukhBTLy8Q5xxXGHxoxOMahIT5XKV/b+BQp94sCzFBmCIuYsnm7pAlZcypF8qC2nSg06GOMuVxDcJ11yXsH3JVIB15rsUFAAAAAElFTkSuQmCC",
    //Dirt
    "Dirt-DckdXd1v.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC80lEQVR4AcXBsar7VADH8a8hjvea4JCIBNK8QMPtXAi4dLlv4NCX8T0uvsIFqYMQ6NySOrjlNHCQ5IAmRwUHQdSf/IfDn+75fD75/puv/+E//TgTss4TauoK6ceZkHWe0DAtSJmnhJq6QtrOIE1dIREri9vOIEWWIOfbHSnzlFA/zshvX+6RH7/7FinzFGnqCunHGbHOI01dIf04I8O0IG+nCxKxsripK6TtDFLmKTJMC3I87JC2M/zPvSNlniJNXSFtZ3jk7XQhdDzskLYzSMTK4n6ckT+yF+T1C4+0nUH6cUaGaUHKPEWaukL6cUaKLEGs80iRJYSaukL6cSYUsbKYD57cFelJkKaukLfTBdlvN4h1Hmk7gxRZgpxvd6TMU+QnKuSJK9KPM3K+3ZEyT5GIlcXWeWSYFqTIEqQfZ6TMU0LDtBAapgUp85TQr7cfkKc8RazzSJmnSFNXSMTK4qaukLYziHWe0PPLK2Kv70iZp0hTV4TaziBNXRFqO4MUWYJY55F+nJGIlcVtZwg1dUWo//mMfJYliHUeaTuDFFmCDNOC9OPMI9Z5pMgSQhEri4ssQazzSNsZpMgSxDqPFFlCaJgWQvvthpB1nkfOtztS5ikSsbLYOo8UWYKcb3ceOd/uhMo8JWSd55Gmrgi1nUGKLEEiVhbzkTJPkaauCLWdQZq6QvpxRs63O3I87Ai9nS5IP86Enl9eEXt9RyJWFhdZgljnCfXjTKipK6TtDFJkCfL59iukHw2hMk+R8+2O7Lcb5PfrOzJMCxKxstg6jwzTguy3G8Q6jxRZgvTjjDR1hbSdQZ64IpbHyjxFrPNIU1eEIlYW88F+u0Gs84TML38hn/79J6EiSxDrPDJMC3I87JC30wUp8xRp6grpx5lQxMriIksQ6zwyTAtyPOyQtjPIMC2EhmlBjocdobYzyH67QazzSNsZpMgSQhEri/nI8bBD+nFGiiwh9PzyipTXd6QfZx6xziNFlhCyziPDtCARK/sXWRRDDxa8zHcAAAAASUVORK5CYII=",
    //Item Shadow
    "itemShadow-CejxBtTW.webp":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAECgAwAEAAAAAQAAAEAAAAAA02D20AAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAADaElEQVR4Ae2aaWsVQRBF477hGkWNiBGjIvj/f4kfXFCMwaC4K+7rOY9pycOIvuplBtIXLj2TR1d13a7unqnJ0lJHV6Ar0BXoCnQFugJdga5AV6ArsBMV2NU4aP3J3UO71f1PbuSPod36W7XrFgKkgPcQxV54CB6Bh+F+KL7CD/A9/Djcf6etLkZNAVLgBwhkGa7Ak9CgzYDtYMCK8RpuwhfwE1QMs6M4agngbB+EBn0JOuOL+jJgs2EdPh6uFaIoFh3Uv5xrzzQ/Da/DE7AE3mHkNnwGzZBi2eBMlYLBm96r8CZ01kvBZXQOunQUo1gmlBLA4B3ktYGl7GLuNwz+FFRk94giIpQaqINag1egYtSCto9Bl1kREUoIoI0L8Ab82+7OT8WgCMfhN/gGenKEkTtg+x+FrYJPgSqCGecmmxVDVmecm4oOxCOvNfbh8Cp0+YWXXY4A9jUVz8OxcAbHMhxHuCNOXfsXh5ZmFDjzq9BMDGVBVACdeeydhWPDfSDypDkbd1QA+5n+rr+xYSb65BmKJdRpcOaLTSjt6FcazQUwcAWYCjyKzYSFJySSATqxn+/zU4FLMbQRRgQwaNXW4VRgHD4XNMkAg9bRws7sWBGhyQx1IojqpaqAUKF3ghwBLExMBamUtnChJCKATnRoEXMq+MJAfDtsIoBB68j38akgVYmaCWAGWLFd2GElxawVNt8D3uLUkvXYMPWfw6YCOPOuu6dwbLxkAH5QaSqAQVuU3IDOwFgw6IcwXCCNnAIpWJ27+fjRYiyY+mZAaPYddI4A9nf2H8AxjkSX4F1oG96MfabPgY4V4TO0OJIrKCb+C864X4qewHD66ylXAG0oQjoN/HBR+x1Bf+vQzMvef0oIwDhma9Bj0cHVFEH7j+AdaNZ5n4VSAjgI01IRXJMWS0raxtws1e/T3oNmXHbw2Cg+yCTCK2xbqPR7QYkl4WlzC27ArE2P/nMoMbg5g8ONm6FV4xV4GUartv5/gClv4F5nbXj0/wO1BNCRtpMQy1z7AcX9wfKVf98OprWv2S6lTegzfgq8SMpjbw41BUiOkhAGbdkq/Y+QWaEY/m5aG6iPtD5TeO9su6SqBI7dGVoIkHzZ6i8Jkq79u0EmVg9ahx1dga5AV6Ar0BXoCnQFugJdga5AV2BHK/AL1gqemvHq/hUAAAAASUVORK5CYII=",
    //Stone Bricks
    "Stone%202%20Bricks-DfujIrfL.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB9UlEQVR4AcXBwWocRxSG0S9NQ1FFMWjc6D3iTcCPGPxw8gM4aGGTzaTVTXGpy13Z+YUWtWiMJhD6nN8+//n5B/+6Plz5P2z7xpGnL0/IxMnm68MV+fb3N6SWilg3pJbKe1g33qOWymjiZDNvaqmIdUNqqYh14x61VEbruiIpJ8S6MZo42cwb64aEB6NaKiPrhoQHknJCaqmIdUPCA0k5IeHBkYmTzbwJD6R5Qy5ckPBAUk5ILZUj67oySjkh4YE0b8jjh0dGEyebt33jSMqJUXgg4cGRlBNSS0XWdUWaN+TxwyMSHowmTjY/f3/myO3lxl2cV7eXG0duLzeOTJxsjh6MvDujXDIj786RXDL3yCUjEyebP/3xiXts+4Y8fXlCPv7+Ebk+XPkvJk42f/3rK7IsC79i3Thyfbgi274h1g2ppfIr1g2ZONm8LAti3RjVUhHrxig8OGLdkPBAaqnIuq7IsiyIdWM0cbLZuiG1VEbWjVF4IM0bR8IDSTkh67oiKSfEujGqpSITJ5t5Y904Eh5Iygm5cEF2dmTbN0bhgaSckFoqYt2Q8EDCA5k42RwejJo35JIvSPPGK+fVJV84knJiFB5IeCApJyTlhIQHMnGyuXnjSPPGkeaN0fP3Z97FOTRxsjl6cA/vzmj/Z2eUS+YeEyf7CX9/5ylRwOpfAAAAAElFTkSuQmCC",
    //Stone Tile
    "Stone%202%20Tile-CiWBXU06.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAFBlWElmTU0AKgAAAAgAAgESAAMAAAABAAEAAIdpAAQAAAABAAAAJgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAIKADAAQAAAABAAAAIAAAAAC+W0ztAAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNi4wLjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgoZXuEHAAABwUlEQVRYCc2XQWvCUBCE01KQiITa4P+ol4K34r8r/ifpTejFHqUXD0ovNjWIJOTU2o2f8Aaf8dQXL9vdnbedmZhNvJm8TH6iw6d/3/8LV3+mr1PDjp/HF89s8+3Z/uJjYfXbs91/LN6hfPW5sn/b6/Ys7ou9k/s4oRC8D6f1siitFN4BmPmUNynTPnOYm2WZ/dmJOxarsqJlsT0OoEQZqiJwjoxDAo4+c1Q5Oefb4wCMd+XOyCVRYpE6zFGKAiLXmhw853Vu3I0NGt4B7mOYE1FAjhKi1sHjEI6gfPAwsCN6PrwDy/USMU7cfG+c3JegMKoXW+Q756uHd6Aq3M3EjkYx31Zy7edfubUUB74phndg9DRqIun0uWvm73OrDx+HFnmqOuALyextZt3wDuh7gI80O177KMcZcOwDxWse3gEYwZwcBVrXTQYeHH3OsxHTNDUoOM61xwEYw0yZouy0+QAeI32eCSgn13nsk/AOoFwZIlCV8Z6QR/UG5Nvvw+t85oEP7wBMlBn10zU/Pu2SuH5Tok/kWpMzj0ifCK49DsDopJiCxKa+KiZnjObhHeBXKgybIvcvOJ6K5Ne+F4AL7sAvbvLwePCE9q4AAAAASUVORK5CYII=",
    //Birch Log Top
    "Birch%20Bark%20Top%20Bottom-4iCuNIkT.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACf0lEQVR4AcXBP6scVQCH4XfGCWTOFGfgDrimkRCQ+AcCNhYL2+6WsrC9iBuwTalYCX4FIStivzCk3G2FLWzSCMYqhcVlignMKebMglfG+9trcRbGS5Jmnifqr3Gtriuk3G6Q5WpNqNxuCO32B0KL+RRZrtbI46++QMpnO6SuK0JFMUFiRhb117j2568/cBvnW8SaDHG+RWxxgbj6FSFrMm5TfPQlEjOy5OmP3yOzj99Bnv/+F6E0s4SatEF8FyGNqxjSuAbxXUTow0/eRcrtBokZWbJcrZH6j58JffrZB5zxR27jfItYkzHkxUvHiT8iu/0BiRlZUm43yKP7RyTNLCf+iDjf8iacbwlZkyEm7RHnW2QxnyIxI0t2+wMyezJDmrRhyGV1RcikPSHfRYTuTRJCvouQ3HKyXK2RmJEl/Mf5FvFdhDjfEupahzx4cMGQ3HJyWV0Rcr4lZE1GKGZkyWI+5cYRMWmPWJMhzrdImllCjfubUG7vICbtCVmTIU3aIM63yMNigsSMLHn89XfIb7tveRu+i5DccuK7CMktZ3wXIbnlTMzIEt5Sbu8gueWMSXtCzrcMqesKiRlZUtcVId9F3OayukK61iFpZhGT9gyxJkOatCFUbjdIzMiScrtBHt3nxKQ9Q+5NEs5d8CZ8FyG55UzMyJLd/oDMnsyQxjWErMkQ51vEmozXYu5y4o8M2e0PSMzIEv7Hi5cOMWmP+C5CLnG8HscQazJCMSNLFvMpofffywk53yK55cSaDHG+JWSLC8TVrwhZkzHk6U+/IDEjS5arNVIUE2T5+QJZzKfcuIssV2tCD4sJQ+q6Qsrthhv/ILv9gVD57BskZmT/Ati23AOhEreRAAAAAElFTkSuQmCC",
    //Birch Log Side
    "Birch%20Bark-BQIHsyXy.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACsUlEQVR4AcXBMWvjdhzH4U9URdpOVVCEIKjQSWBuqMtxW99Fpwwh6203Gs3FmA7loNCuIUPejpci0NSAEp/4W1inbI6h7n0hw48iQjc9z8mX3faIsXt0yPPpHitLc8a0rkGCQ4icXaRYrWuwsjTH8piY37oGCQ4hcnaR8pooTrCiOEGGvkNa1yDBIUQCQqzWNUiW5ojHxPyimDPm778qrOfTPVYUJ8jQd1hZmmO1rkGyNEeiOMHymJjPf9T1Gtls75Hbmzukqiqs2WyGLMoSydIcieIEK4oTrLpeI0UxRzwm5tf1GsnSHMnSHOvq+hK5vbnDqqoKWS2XyKIskShOsIa+Q1rXIKvlErm6vkQ8JnZyffXzEWNRllhZmiOta5DgEGI9n+6RLM2R1jWMWS2XSFVVWB4T83lxdX2JZGmO1boGCQ4h1tlFikRxghXFCTL0HdZvv/+BuM8PyGZzj3hMzF+UJRIcQqR1DVIUcySKE/6Pul5jBYcQ+fa7c6wszbE8JuYXxRwZ+g5pXYPU9RrJ0hyJ4gSrf9piFcWc1/RPWySKEySKE8RjYj4vojjB2j06ZPfokH++OTImfnPOmKHvsJx7QNznByRLc8RjYn5dr7GyNEe+fzvjNUPfIUPfYbWuQYJDiFW8nWMNfYd4TMznRZbmSBQnvGboOySKE8ZEcYL0T1skfnOONfQd0roG8ZiYHxxCZPfokNY1SJbmWK1reE0UJ0j/tMWq6zWy2dwjtzd3SFVViMfETt6/mx35avXrL8iPP/yEFcUJY4a+Q1rXIMEhxHo+3SOr5RKpqooxHhM7ef9udsSYzWbIoiwZUxRzxgx9h3z8+AFrUZbIZnOP3N7cYXlM7OTLbnvkq9Y1WKvlEvn06U8kihPGDH2H7B4d8ny6x8rSHGldg5WlOeIxsX8BR1L8fVKN520AAAAASUVORK5CYII=",
    //Birch Planks
    "Birch%20Planks-C83ShoDF.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACiklEQVR4AcXBwWrjRgDH4V+EZFujwwxsIfFJsOlloefC3vpyfa/2tC+wbE4OaAO2oTbMHGZkS4G0f3kPYzBhoQd9393T33++8Z+QImJNw8Ss+CnpxMSs+CnphDw9B6RgZiU/WNMgIUUmKSLb/Sti6jfE2QqxpuFKOiEhRXLWNOS6nUdMzaRgZmVIEbGmQaxpuPIQEWsaJKSIdDvPe5ytkJAiYk2DtGuHPD0HpGBm5Xb/imzid3J1Y8lt4nfk3A/klvWC3LkfkONhgZz7gdyyXiDnfkAKZlZ++miZmHuk2+yR9vGea/fkus0eaR8fuCmdkJAiOR9GpF07pGBmZUgRsVy0a4eEwxHxYUScrRAfRiT1d0i32SPOVuSsaRBrGnLWMAkpIgUzK30YER884myFWNNwEck5WyGpf0XateOWkCI5H0ZuKZhZuX05kDseFlwckbqxSB8Dcu4Hcl8O/5Bb1gtuqRuL9DEg535ACmZWfv79VyZmxZV0QkKKXHxA7C8f+F+SRbqdRwpmVvJDOBwRaxpy1jTkwuGI+DByi7MV4sOIOFshPozkUn+HFMysxKwQy0VIkZwPI+9xtuIWZyvEh5Fcu3ZIt/NIwczKL399JbesF0jdWC7ukD4G5NwP5LYvTJb1Aqkbi/QxkDv3A7J9OZArmFn5+Y/fkG6zR9q1Y2JWXEmWXLfzSPv4wC3d5g1pHx+YpBMTsyJXMLMyHI6IsxVX0gnpdp6csxW5brNH2rUj52zFJJ2QkCKTFMkVzKzkBx9GxAePOFsh7dohIUXEhxFJ/R3y6aMlF1JEfBgRHzzvKZhZ+e3rDlnWC3Lbl4Hcsl4gdWPJPT0HpI8BOfcDsqwXyLkfeE/BzP4FFPsJPZrv4y0AAAAASUVORK5CYII=",
    //Pine Log Top
    "Pine%20Top%20Bot-C6sgwcdS.png":
    "data:image/png;base64,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",
    //Pine Log Side
    "Pine%20Bark-DwQsE8de.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAAB70lEQVRYCc3XvU4bQRAH8DNCfFiisJGFQLIUKRSmTJUqJS+RB8kj5SVSIoEoknTBRfiQkIgiC+hCnCYhe/c76YZsLKq1i/t7PnZv5j+z43Xv3c7wd/X4md4//IXq8NVewuur+4QeR9/v0te3r1/+1/5mZ5js4xeDhB8+3ySM+85+/Ez6lfQs+FiN717f3EgqEY76tcxvkZ1fxMgo+/IwMPtV98DJx0vBPQtHa5sdf7XvKP8hlGdAt1ZNl6u5HhC0DL+efaPq4PZ6ryNj1DpG75t9qfcpz4DIYqT0UEaTqlvr/YPd5DILvTPZ6ic9Rs0ZDNAvDwOTQZ2ZSMltxM2kxMjtPA1QYov8p80EHNVEtPb4pTwDn5puVJMYIVmXOx0Ymj/UMz2uZ7c+h+UZiJHlul2GGFDr3IznZx0G4/vKMyBC3S9C5zs3+fhBGY8pGsSUyRfMVXkGRNR2bfcixPwEc7XnGOcEpt+fnicXN6flYUDkmHC+6dVYJu6IMuG3iBl+cHkYcAowIMJF6LRU4Z5gnrhD2if+6pZnQAbT4wtBJlTLeI7JblAWxR6hj3MkTsTyDIhU7XO9oPsxo5bxtNiPnQztQy7PQC4DtZaxiOnNAXaTL96AMBr/G9qvPAMiyaEM9Ai/XI3Z+VtPD52a4gz8AbkTxAPU7ur0AAAAAElFTkSuQmCC",
    //Pine Planks
    "Pine%20Planks-D8CLafoP.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAAB7UlEQVRYCc3XTU4bQRAF4HFkiD0SMsoCwgbBZeAG2XIaTsOhiNgkZoGwkBwHED/p8jdkCg2JWKTDgtfV/bqn6k1VTXt0dto+Ns9/q7vbX9BMNjYLtpMyXcZv/VuuRu/if71Yln0f3jr8X6yNPUTklFjdxcr3b/dlMJ2Fr7M2EN9+SthvPvPmi1XvvPoK8JinUASf92JkHl8keBkphW//7mxSqP9PDnjHl9fxrkWys20UaP3yuj//mhfrO9sPZfDCj/PxzVfPgZE+oO7P5z+L54e7H/uhJutPvKGqWCxDGblQXYGxLG2a6IA8u7qJzshjWc3+sYhIzptQzDqhZD3s5mcx8tz6Coho0USHEknneRtKiMA6BShmHYqQ7TlsWF2B0clx0/vsqVMestUttJ4Rf2jeflhfgdwHeD5Ux5+2NlDehc71LamuQHcfuLqJC0CX/ev4sp37Q5ZBlcj6bOOrovoK+AbohH9bvyIRIRuap4R5fWO+7jvVFRjsA7me1S0UEcSHmZdt+6orMP5yNC3O+L57Ry+5Eb4erO//PFfHQ/eGabpXqP98bn0F1L+sFSGPRWo+87Jymecc1eX3Bl59BXiiXvO9QE6IAE8nO9hvHVEw85zXI/1mVFeg6wPql3O5bq1DPIgP8dh4Gasr8AQFDPDzlsYEtgAAAABJRU5ErkJggg==",
    //Oak Log Top
    "Oak%20Top%20Bottom-CF8er7q8.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACR0lEQVR4AcXBQWrfRhiH4beqBjQjKQx/xWBjWuiuJe2iy5JtVr1Al71Aj5NL5CLJrmuvQkgwDsQKQyTPGAbT5hey+GJU07QBPc9Xv//64C/em5eKTKNDjmKPvElXyLxUZBod1lHskbNXCZlGhzUvFZlGx5aGnbXzUpE/fvuFu5SaEe8CUmpGpnsj8vDdguVd4C6PnzxDGnbWTqPDevrnGdbxIWD5OCAlrUi6umZL4hopacX68YfvkGl0SMPOWv7Bo4cPsHK54RPxgFVqRrwLfCIekOcvXiK53GA17Kzlo1IzcnwISC43SKmZz1FqxvIuID4OSKkZq2Fn7bxUxLuA+Diw5eL8EsvHAaukFevk9D5WSSsS+w6Zl4o07KydRoeUmpGSVqT0Hdbrtxn5+adv2RL7Drk4v8QqNWN5F5BpdEjDzlpu8XFAvAtIqRk5PgSsdHWNFfsO8XHA8i4gPg5IqRmrYWct/1NJKxL7DilpRWLfYZW0IrHvsBp21s5L5b+IfYfEvsPyccAqNbNlXirSsLN2Gh1WSSsfxANbLs4vkddvM3J8CIiPA1u8C4iPA9Y0OqRhZy23+Diw5eT0PtbJKZ+lpBWJfYfVsLN2XiriXUAS11jeBaTUjHgX+DeC/xrJ5YYt81KRhp210+jY8vzFS8THASlp5UvwLiDT6JCGnbXcchIPfBAPSKkZiX2HeBeQUjPWdG9E5ncLlneBuzTsrOWjx0+eIdPo2DIvFZlGh3UUe+TsVUKm0WHNS0W+/yYib9IVVsPO/gak37wBbE+yeAAAAABJRU5ErkJggg==",
    //Oak Log Side
    "Oak%20Bark-DNopYFQ3.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTUlEQVR4AcXBsWrkRgDH4d8JGRWSxSCtUOPZNIYTadyYVG6dd8g9R94p73DXGtIcAacICrjauUZodxnWUiFcJPe/22LOiM1eGn3fm1/f/fQPn7XOI/e3V4jrBkIPjxvkl59/RFw3EHp43CB3N2vE1hny4eMn5P72CnHdgPR+RCIWFvNKkiRI7zukMimhJEmQ3ndIZVLO4bqBORELizna7g/I739u+D9WRU7ow8dPnCNiYbGtM0KVSZHej4RWRY48bXbMKS8vCG33B2RV5IRsnSG9H5GIhcUcrYqcU7b7A19YQ+h6XSK9Hwm9/aFEKpMirfOIrTOkMikSsbCYo8YapHUeaaxBbJ0hqyIntHt+YY6tM6R1HqkMJ0UsLP7j7w6pTMop5eUF0vsRaaxBpmlCKpMSaqzhHBELi3lluz/whTWEKpMivR8RW2eI6wbm9H5EKpMi5eUFcyIWFlcmRVrnCV2vS+Rps+McvR8RW2eEbJ0hvR+ZE7GwmKPGGqTlPK4bOGX3/EKoMiny2/u/kLubNRKxsJhXGmuQaZoI9X5EKpMiD48b5O5mTch1A98jYmExR63zSGMN3+N6XTJnuz8gSZLw1YCsipxQxMLi63WJtM4Tct2A2DpDej8its6Y0/sRqUxK6GmzI1ReXhCKWFjMUWMN0jqPNNYQqkyKuG5AVkWOTNPEnFWRM6cyKaGIhcXTNDHH1hniuoGQrTPk4XGDuG5Ads8vSGX4Rus8cn97hbhuIBSxsJj/0DqPNNYQWhU5pzTWIK3zzOn9iEQs7F9kxr+e7SFrMwAAAABJRU5ErkJggg==",
    //Oak Planks
    "Oak%20Planks-CqlxsC26.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACn0lEQVR4AcXBsYokRQDH4Z893dBddUpRusw0B8exGwkXKRhcbGpgbOBL+Qo+gcmlZiImRibu3nJw9Axz2xS7W1UNzaD+dzeohWE5MOjv++TNTz/+w3/ynJCuMYjpVnyMlA+I6VZ8jJQPyMXlO6RiYTUPusYgeU5InrkzvP+AdO4Z4myLdI2hlPIByXOi1DWG0hBGpHPPkIqF1XlOSNcYpGsMpf75F0jXGCTPCRnCyFOcbZE8J6RrDNI7j1xcvkMqFlYP7z8g2zFR2nhDaTsmZDdGSmtvKe3GiKy9RXZjpLT2FtmNEalYWH368gXy6ssVcj7skbP+hNIrHjsf9shZf8IxKR+QPCdKIU7I6688UrGwOs+JewbpnUeurm+QECfE2RYJcUJyuEXOuedsS6lrDNI1hlLnDJLnhFQsrA5xQgIT4myLdI3hjuURZ1skh1ukd55j8pwohThxTMXC6t/+eEtp7S2ljTfIdkzIboyU/vx7T2ntLcdsvEG2Y0J2Y0QqFlZ//+3XiOlWlFI+IHlOSP+cO59/9in/x2k+IEMYkYqF1Ty4ur5BusZQ6hpD6er6Bglx4hhnWyTECXG2RUKcKOVwi1QsrDbdinsGyXOiFOLEU5xtOcbZFglxotQ7jwzcq1hY/fMvv1Nae4tsvKG0HROyGyPHrL1FNt4g2zFR2o2Re28pVSys/uG7b5DzYY/0ziOmW1E6zQdKQxiRs/6EY7phj5z1J0jKB8R0K0oVC6uvrm8QZ1tKKR+QIYyUnG0pnQ97pHeekrMtkvIByXNC8swjFQureRDihAQmxNkW6Z1H8pyQECckh1vk9OULSnlOSIgTEph4SsXC6je//oWsvaW0GyOltbfIxhtKF5fvkO2YkN0YkbW3yG6MPKViYf8CNhMEURjEI5YAAAAASUVORK5CYII=",
    //Oak Planks Decor
    "Oak%20Planks%20Decor-DHHlVhBU.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACn0lEQVR4AcXBsYokRQDH4Z893dBddUpRusw0B8exGwkXKRhcbGpgbOBL+Qo+gcmlZiImRibu3nJw9Axz2xS7W1UNzaD+dzeohWE5MOjv++TNTz/+w3/ynJCuMYjpVnyMlA+I6VZ8jJQPyMXlO6RiYTUPusYgeU5InrkzvP+AdO4Z4myLdI2hlPIByXOi1DWG0hBGpHPPkIqF1XlOSNcYpGsMpf75F0jXGCTPCRnCyFOcbZE8J6RrDNI7j1xcvkMqFlYP7z8g2zFR2nhDaTsmZDdGSmtvKe3GiKy9RXZjpLT2FtmNEalYWH368gXy6ssVcj7skbP+hNIrHjsf9shZf8IxKR+QPCdKIU7I6688UrGwOs+JewbpnUeurm+QECfE2RYJcUJyuEXOuedsS6lrDNI1hlLnDJLnhFQsrA5xQgIT4myLdI3hjuURZ1skh1ukd55j8pwohThxTMXC6t/+eEtp7S2ljTfIdkzIboyU/vx7T2ntLcdsvEG2Y0J2Y0QqFlZ//+3XiOlWlFI+IHlOSP+cO59/9in/x2k+IEMYkYqF1Ty4ur5BusZQ6hpD6er6Bglx4hhnWyTECXG2RUKcKOVwi1QsrDbdinsGyXOiFOLEU5xtOcbZFglxotQ7jwzcq1hY/fMvv1Nae4tsvKG0HROyGyPHrL1FNt4g2zFR2o2Re28pVSys/uG7b5DzYY/0ziOmW1E6zQdKQxiRs/6EY7phj5z1J0jKB8R0K0oVC6uvrm8QZ1tKKR+QIYyUnG0pnQ97pHeekrMtkvIByXNC8swjFQureRDihAQmxNkW6Z1H8pyQECckh1vk9OULSnlOSIgTEph4SsXC6je//oWsvaW0GyOltbfIxhtKF5fvkO2YkN0YkbW3yG6MPKViYf8CNhMEURjEI5YAAAAASUVORK5CYII=",
    //Dark Forest Grass Medium
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACh0lEQVR4AezUwWoUURAF0HYGggMiuPJDBLd+j+DKDxEXgt/jwo3gh7gSJDIQmEw4j9xO8dKd6UyTXQYuVe/Wrarbr2dmM9x+3nx6f3z98cPx7ed3DfJwIl4MUs9ZDCfSB7WW/HbtMBo4HHbDdrsPP+x2lwNuJEpycXFoWhEdXXpE/NXVdgA6s6OTq8NowIFQrKhivCEZ6hyEt3y/fxV6fIjMplN0E2Iz4MocKgzJcs11aYbQ6IlOHqjpYyhcYvqdmwHJubDk3F59Jw0sWbBEY9kU7hlw1a6PuA7OtfXXTU+Lr3pcavIK2r/ffr3A3TOQRYpBDImWeK8ZTi/HR5+oljzR8uTixrcxpAXICsPrOZq6cGpR7XkoH2+ACejFS4f3RjNnis/102w8CTjUZczUZmeaRHlF35ta+Dor/5A04w1wZXigmGZc6jGrjhd9J+R5PdHiwHKz5LVf72jA4RQMiaYOxRlsARP+2JgIL6rRyCuaAcNcy5SAuOfpqxkaoLNIDs6JMeQMf778vvsZ1qIm5yyoAzXW5a4+nCeH9OF7ZGnlN0hPH/L/9ctj8sRoYsbif99/tCdgmC61PneG7DDLOWivIAfx8uvPxtWBaVbPQnmAc2s5J3dbED5zqom2LII+MmF4+JqH66OenrMw6GvNQFwSVYGFanhIDZe8Rsv1+HfF+z7kNpyn0Awo9EMNwtcB0Ric66QJn57EfE9o5tAM1CVzQjydZf1gvPo5aAY0Lh0SHSP6Kqa4Wp/KRwN9McPyPvv6lBFc+nr93HnWwJJhU8uW9FUzswaIDAP5Y/CYngcNLFnqF7FEN6dZZcDy/hcxt2iOX2Vg7XKmVhkwYC2eDTz5DZx6RTcAAAD//7IiLmcAAAAGSURBVAMAvHSvUPDKqxIAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQ0lEQVR4Ae3BS2tcdRjA4d9558xM5mQykwxtE6KkkabWilKK7lzZTcFLEWuMQgQVtApeVn4RzUZFkFawVrxAsPodJGglGlNaTI2JNU5uM5n7zP/4vicNnoC4PZs8j1ecujdE9VodTLYQYHrtLhGPSHOzhukb6sc0t+qY0DlMcewQJuw5TKvaxAxPjGL+XPgd43oOIykJUULC/PZOM0SlMr6H2rm9iZG0j5GUYCTtY3rtLiYdZDCSEkyv1cGkMj4mKOUxK/NLmHathfEzPmboniMeSkiY36m3PGL8XAaTzmUxrtvDSDqFaaxXMdligGlu1zGyI5hUNo3xs2lMKu1j+gqC2fnqN0GVzzqHEhLmDx49jCl/PC+okQunHWp7uYxpfLMsqJHXTztUe6eFyZXymMqVG4LyHx12qNCFmFwpj8kWcpi/PvhRUMG5cYeSfsEICfO7rQ5m8PkTDnX7/R8EdfjlBx2q4S1jGlM1TDrIYNo7TSIekf6pIqZTb2P+/ugnQaXPjDhU8OS4Q9VnlzxU8dnjIUpImL/16aKgStMnHSYk0nymjilMTjhUu9rANK4uCyp79i6Hyj0+5lDbn10X1OibDztUPVzC5CbzmGwxwNTZ5boOIyTM418eqjR90qE2PlkQ1MD5Yw7VqjQwhbtLmNpaBZMdyGH6igGmsrqBqc/eEtTA08ccKpPvw6xf/NnDhHgoIWE+e0IiubfzREIiwWsDmOoXNwXlXxh2qNxQP2bj0oKgjrx6yqFc1xFX/fKmoAqTxx1xHiFKSJjPHo9db7HLI1J7aps45xymXq5ignNHHWpt9pqHKkxOhKjCK6ccau3Da4LKDxcwFfYTEuZzR+mF+x1q5d3vBRMS6T7WJRISaZyvYprf/SGo8Xcecail2VuYbCHAVFc2iFudmRPU4HMnQtTW5UUPJSTM546Ni78I5hKRQy894FDlb+cFlXtizKG8QIjbWi4T11ivYhpXlwU1+sZDDrU6M+ehti4vesQICfPZ47FPp94OiUnnMpjK5zeEmE6jRVwYhsStvjcnmBn+k5Awnz0hEf/MsENtX7kuxEg6xT4hkb4X+zE1dtW+XhLU0PR9DrXJr8L/EA4cOJCwfwAwNh/PZgLr5AAAAABJRU5ErkJggg==",
    //Dark Forest Grass Short
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABdElEQVR4AezVzUrDUBAF4DZSxSKCKx9EXPs6btz4IG7c+DquxQdxJYhUaPEnX/CEeGuIm+LmlpzMnDOTmbnT0Dazf/7UAeoG6gbqBuoG+g2cXp99nlyd98CD48uLTsflhMenQ3jiLCTGgrz8A3QDECMM7XrTzID2vll2/v7iA53h/L3FquNuOFtCjcSGvrymbC4RBNOEP0Saphj7tjrqBkxeasiNLy9++jZPN4/zIEFFFDxcvnJ/hcICihoUz/N8sVi1cPH4uCG6ryCEBQOxQQopQNMwPg40Nrl8iM4Hh1I/6AeIwHpJJHoANBtyGtDZxGyDBvRYQ4nRwMlZ6AdAQPM8iJdQ6OXufs6KJZfW8nWLH9e33mkOF3RCe9sa4Pn2oX8nJLc5/aWpOIHF+eBUrXYw1OK3+hzkldgaoEwIN0xZZMjF5UbD49PH8KcBFBsrQC/jJZczhskBpopNxccaR58cIIm7snWAuoG6gbqBnW9g6gfsCwAA//+sKfWHAAAABklEQVQDAIOd9kH/eG4lAAAAAElFTkSuQmCC":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABvElEQVR4Ae3BPWtTURzA4d859ybNTdLUBqUgIg6KLwgKjm6O4iBIwaGCDoKD6OQX0Wxu7VIUpCCo30EyCL5VFCu1GUoS07y3Def4PzcNnoC43sH7PKRSqf+e4g+FKC+dNYi97tAiVKAVYrc9wCkdK+P0tts4M7MRTm4uj9OuNXEKR+YsYtjqKUS2mMNpLH9QOBaF0CQsZMISix4WcZornwLEwr2LhjGLCLMZhYjmCzj9RtcisrM5hTAjg6/z4ptGlBZPGXwKi9AkLGRCMfaAMUWsd30Hp7v2PUBEdy8YRL/ewdGZQCG2n75TiNLiSYtQgVJ4igslnDbTNAkLOVC+dc4gth6/1TiW2OjqiJglNrjRwRm++akRJx5dNoiNlz9wZkp5nM5WE1+tUtWIQzdPW0RrdV0hNAkLOdBc/qhxVogdvnPeIOqv32tEdO24Qai8xtfarOMbNDo4g1ebGnH0/iWDqFWqCtFaXVd4NAkLmVBM2e/vWTyZKIvTfv5V49kf7OKz1uKrPalqnAp/pUlYyIQlFl5ZMIidZ180Hp0JmGKJ5W4XcHqM9dY2NGJ+6YxB/OKz5h80qVQqlUrYbzCthY+AXVVfAAAAAElFTkSuQmCC",
    //Meadow Grass Medium
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACCUlEQVR4AezVsXLTQBAG4JPAcRjc8Sh0NHS8EhQwkxJeiS4Nb0NnBmQMgu/iTTYnzUSZpMrIM79399+93V97StyX9Pl4WcaLb2Vk33+9sbiMD5dnozzwcy58/Fw++Bh7LUDiWM4q/3xTymZbCtttr7iaOH2dbw4leP6z7f/iUy4MXg2b8+IXu1LMU9v7opSVZMFwFnIDMUSt3J9hQE0QNRLq2EDkqgCKXu66ogjK6cOPwhN1y3jCTKjPcfg/9mN15/K9O5tLtJz41+/b15HFHbvzOqT9cmYcDte0PgI824cjgFDLb1erUVuvDo6Hv0V9DMABkTa8/z4UvdXooZd8//ntoUMKQEIBfw5zeUMzL46zfNi92hazLt6Ujv3yrnRq6jtgIBGfXg+V9D5IOsgugadUpw/rLPADrjv8sFUARZQhoxG/hZwXz1rbnDh4Iqwbl9EKkqsCOIG2KLYjLxdDxHIsyAEf70r4GbHhzE0EUJ8LNNIwc9lv64lwxh3nXPbz+YmAn/tS32ZFcSg/tQFyRBnEb+GqcK7VUwMf12IigHLFcUjcHiIiXlRCQmjU4cK/y04EzB3QsB0iJs4WIo8DL/VcnzlukYBoqLkm/qkYyidC3tYC+KVYJEAzzQ0lwp+iofiHYrEAgwwlhBU/Bu4l4DEGtj1WAesG1g2sG1g3sG7g6W+g/fVr438AAAD//5TmefYAAAAGSURBVAMAIwooUD9EETYAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACQklEQVR4Ae3B32uNcRzA8ff307PtOJtzzg4ztSI3/ha5UdQuMJb8SMZMCRdsfpQfI4oIYUJhKBf+GFGiHY1tZ3bs7Fib79fncx7qsbh+bs7r5XZdaw+oEKh7cHhaUH33VnnUjd1fHar3SiGgQqAuahbMvYNlQe28UvCoue8LmNGhqqA2DjR5VGu+GTM6VBXUjssFjxJSFt0/PO1Qu68XAyoQ2z7xA9NzMR9QlfI85tW5mqA2Hc941OaTWY96ePaboI696PKoQBXTszqLKXS0YAJVzLYFjxFS5lhiz40VAXW3b8qhtp3PBdTM1DxmzfocZvxTFZMrtmDaOzKYsXcVzOjpqqC2ns951PJCM+b2/knBOAJKSFnEEsXOZSR1dGUxT45XBDXwOPKoYmcGc7evLKj+h50etbjoMYGYO1ER1I7hvEcFYo6YkLKIPwIO5V7yl/GPVUwg1v/TYyZKc5juwVaPGj3zxaF6LuYDqn8k5zG9XwTVubYN45ghSUhZxG97b67wqAsHxhwJ87VFkiZLc5jXF3441OCbdYG6D5j8yhbM2PsKScPdJUH1Xm33qBGmHUpIWcRvdw5MORL23+4IqFv7Jhxqi2QDqnW5kPTx7TeSJj/XMK/O1QR19HmXRw13lwQ1MjAtmCPUCSmL+I/yeI2kbFsT5tGxGUdC7fsCScEHki51lwR1iZjjb0LKIpbYcKgpoJ6emhXUs0HqmjPCv7SvyhCbxTw9NSuotutFjzlYFpQjFog5YkJDQ0NDQ0NDyn4BIUm8x3JUOtAAAAAASUVORK5CYII=",
    //Meadow Grass Tall
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAADa0lEQVR4AezXvW4TURAF4LURMYh0PAodDR2vBA0SEg28Eh0NHY9CFwQOQkbfwkGT8d0E2YJqI53MzJm/s3d3Y2c7tZ8X76dDxcsPFwd4/XE6BMnj47PiN592B1CLC+Qq8FbfEKBgs7vAz+A/uH89wb3dbgrm5O9fariXj3fTo8sNd4bah5ezO6kxowJHxPZXyTRZrsCQNIqT/7HfT5DYAHn1/PBqQEyEnDpxBU5uFpDlGhSxkvHZCjkD1OH5bBbzg+TE375fzKfID2YBriLDktDYueTYnuvLe6wnSK8ds4Ak/oftwk4SQHkXm6sKX2M+6HMbUsNu3X9OBZW9UN4Qdgk9b07l+If99dzO52ypUigIvl798sIrBmw4fiBXeXFyd9k/t+DL1eHGa0aY5jpYHHQ+J5blPZ++atXOAtJck/HliKtx/Ni+rMa1F+8VTh87C+AARWxgOT+nwa8wsMb8JQ5v3ttn1xu+WrghAAFdZYS5mjxE6gKDR3zy6U+sPv4fAblK6uqw8BoqL+4gsHJZXHlvXT2FLTWWpDhvgEGVJwxXTyc9I2HmqpcDvnnAf/102rx6st9sqckgS949nzZ1iWK8gfgMwAd6+P6ks2qzVOyTkoXs4sN8CywAjci+JHwdmkH69EQEvtaFVxO4DfFnARaA00iCNYy9DfqSjxix02KDOqte4CzAYlDsmwwbXH3eT64o+fCshZXPEsstkU8dG6ROPAvg3IYco8G1rl595S0XJ++BE49wJIC6NGrIcn4G88HJsH8Dp2G2Wj4LRwKQUEWIR6jiRvkRZ3mdvShg1ByuDgg3sqMT0lufm6GAftSj4SPO1VU+X27ra9dnDwUYorAPxOc+8jv6w5bYrF6beFFACkbWwJE4tfguUgzybgEbDAWkOEWxvTn8OfZIgCvIwKWFSwLT122dWR9AdUcCct8kO3pzz98WE1E/llN7JEBCMXvOQv2Bk4TRvKEAxZAB1UYcrr5eYhj1WQzyHUMBS8Was8Bz4G3AVXSu5kb+UIDCJRGVJ0JtRZ4huf7JWuviLwpIwTmWiLv6/4mA+pz8EwGj16kuym24q07PSSfgOTAcDBnBN151o1zlThJggOHAPwcnCzhnae1dBawnsJ7AegLrCawnsJ7AegLrCawnsJ7AegJnn0D9J+MU/ycAAAD//6DKndMAAAAGSURBVAMAbUjmkPmMX+YAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAABACAYAAAB7jnWuAAAEUklEQVR4Ae3B32vVZRzA8ffz7Ht2fuxs52yebbrNTAmG1FUX/hUFpZSFP0qKoMJCM0VdkoVpGgpGN2qwktQwLOjWPyAxuiqRhcmaa21tZ+fnzu/v0/M5ZxcPMq2uvhDn9VKbx2IGa91oAjH1axbRP9yFKBXriFy6gujqDiEqpQYi1hNCNGo+olb1EYVMFbFxUwox8dMCwvcNIhYPITQB83oHIohiroqIJ8MIrRVifM+ixjrwzYiPNTWRRURiHYh1o0nEzevTiA1PJBHVch0xfSeP6Ix0ILoSnYhquYHQBMy7sDutsTYfjvpYo0+uQkzezuKau1dEpIZjiMnbWcStG3OIvsEoIjtfQYw81oM4u2tWYb379bDBmr6TRyzlawhNwDyW9a2OIoyhqX8khjDkEc/OlRHJVATRPxxD9A5EEZVSHTE1kWMls5MFRDwRQlw6lFNYmoB52473+Fi1cgVxYXdaY734YdzH8d1HJY31xvm4j5WeLSPqNYPo7Y8gPE8j8pkqrmg8hPhzsoBLEzCvkKkiBtbGEEoVDda24xqx82TCR+zPaqyFmRKiUfMRuXQFMb53UWEduDpssD5+blrhCIU1oncwSksZoQmYlxqKIhp1g6u3P4K4dydPk8JgRT7xEPHeTkRuvoLrt58zrGT29yIi1KlxaQLmff72osbaMhb1cfxxN494dGOClhJiKV9DXD1aVFiHvl1raCoiqpUGK6mUGqxEEzBP0bJFK1zXjpUU1vYTnQZHeamO65cf/sIVi4cQL5+OGqzxvYsKKxb3EKnhGC1FhCZgnqFFfbCksZ4uhw3W96cqCqtabuDq6QvTUkEkUhFayojLY3mFtefiGoMju1BBXDlSUFjGoLA0AfO4z9D6bloqiHgyhCsc7cCVnS+zkoWZJVyJVISWGkIpDJYmYJ5SGCxjUFgvFWq4cukKroWZEq7BR7poKSO2Ho0brFKhjnj+/bjBSg1Facnj0gTMY9mu00kf68v9GYUwKKyB8120LCESqQgtZUQhU8VVzNcQGx5PIs7umlVY245rgzAohMJgaQLmsWz8nYzC8dS+sI/VtamThylka7hWrY4iZu4WcH11MKewXqjFDdYVCgpLEzCPB+gdiCBu/ziPK5eu4BpaH0fsPBk2WF/syyisV872GZqKuC6/V9BYV47QpAmYx32eORg1WNVyA9E/HENsPxExWKViDdfiXBkRCnfgmpsqIl77bJXBOvfmgsJSCoNDEzCPZXsurjFYZ7bPaKzXz/X7WKViHbFUqCG6ukO4ot0hRKPm4zI+TYlUhIfRBMxj2ZkdMwqxgyZ9XiHG9y4qrANXRwzW1EQW17rRJOLm9WlcnRGNOLV1WvEQmoB5PEB6toRr7l4RcelwXuG4dWMO0TcYpaWKuHaspPgXNAHzeIDLY3mFY3GujOvVT/sM1oXdaYX11vigoSnLf6H53zIoDIp/oGlra2tra2tra2trC9jfsnSALqXEYRUAAAAASUVORK5CYII=",
    //Desert Grass
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAe1JREFUWEftVb1KA0EQ3osESQg2qRMQX8BW8RWsLCzEwjaQR7ESbK0sLKx8AavY6TU2NoFoJVwjkiCHd/JNdsa5vT3vJILN2rg/s/v9zLeXyPzwl96c5NnbXCpaG10ZYx1zve+7Sp9p719Ebk1pgQuqwF3g1mZ/eSRZ0D8mRMD9Dq3Nru/M1umDF6u0mE5GOQ61d89pD0SEdb9jsmlCU1YvCi2YkOG5JeZTj1ovq4/Lw9x7MRROEwKHOiajbeVz5JTjTm0LSC2Yd9eWd84/v+3FerIgizUBgMDi4cHOsg2OcplbluwskxYHBNz2k9nCjZf7JzM83jPm+d3MbmMBY5W4FK1jR6gehFQrdbZo3Qay0GfXIg7i+tFVlMbjPHt8NTS2YBI0KB/0THv7LAJhqmE3HUHNX4EKI11mAUAErWHVErpBjxziFrEYDrXPjcoQll7CZJTLq4jHOZRqhUTGEuMcuL2mO5OFWF/KABYo/UiuKtRkGFTUK+t9e1VPT7eh8Az5zesAgpCo107YMZTDEfpmOPtVtlcScAMCQtJLNeYPFPYKBGzwNGGf7Y0IaHANqJ8TE+BQui64gnxz75ewDlxfpHvvI1pHovLHqO6gS6JJ4Bo78BvwVWv/xIFVSAQCwYHgQHAgOBAcCA78uwNfppFdMCYqNDIAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABhklEQVR4Ae3BsYoTURSA4f+eHQdzQRhkGYv1TazTbDNgqiFpVpIX2PfwCSLYBFJtYBot8jraxBAGhERGuNdzMlFmV7GdZr7PcREjDlVX04DKipWgdutJQKV+RFdzPGFSP8I0xxNdebkRVF1NA+rF9SvM1Zv3gnLORZTQs4Q/Isb7BV2pH2GyYiWo3XoSUD9/nDB5uRFUs50HVL0/0IqYrEBQdTULqAxHl9CzhCfq/QGT83/Pno8wdTUNqKz4IKi0mgbUbj0JqLx8EB6JtBxG6FnCxdePtwF1c/dJ+CeHSf0UkxUrQdXVLHAWMd4veMxhsgJB1RWBlkMJPUu4eP3us0PFOxyqrmYBlRUrQdUVAdUcT3R5P6Kr3h8webkR1G79NqDy8kFQWeGEDqFnCX9xGO/ntBzG+zkmK1bCmcNc+Xu6suuXtCImL51w5mhFWg4j9CzhiWY7D6h0vBTOlphvX24xN/wWMd/3M0xGKx0vBdVsFwGVjqPQ4ZyLdAiDwWAwGAwGg579ArVAbeKuALjMAAAAAElFTkSuQmCC",
    //Chain
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAARJJREFUWEdjZMAD+mcs/Q+SLsyIZgTR6Hx8eomVAxuMC9DFASBLhIVQnfD2HcTXMAcsWrOBwdXSkkFSWhysEBYixPoSnzrGRasgwSwvJg1W9/DVUzAdFxbNWFbb9x9mKcyQ509fMnQ1F+ENOVIcBncAyEKQRpiDYHxSDCNH7cA74OCBA+AosHdwAIcAOp8cX5GihxFm4bkbkLg30oCkBZCDDF1C/4MSHzLYffw4w/k9q6mbBmAJEGYRKCHCEiFIDJYQQQkQBKiaCPEFFygXIFuIziclqHGpxRuUA+4AupSE+IKRLg4YLYrRi97Roni0KIa1CUaLYlBIjBbFo0XxaKuYGi0eQmbAG6WjrWLkoBpRrWIAsVZFME15VgoAAAAASUVORK5CYII=":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAACCgAwAEAAAAAQAAACAAAAAAObfWkwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAABjklEQVRYCcVWQU4DMQzMonwBaB9QTvAEeuLCDalfKM/jB5zKE9pT+wAKSJzgytZ2d6pNFIdITpWVVl57ndieTBI7l3lmt/c9v3CJddgt8sIyuMZY//j0LBX+/nwH861eXzoYgMJ0ciW+uw3+2GV7BFA5Kka1XNtu83ZC4ajbK45naI5A8wT8+/5TUAH0RDTRmWgKQXtarmqJV5soXttS3eeIphA0IGZpIM2vPQJaZmwHP3I+1n/tEVCY7nAwcYWpHWKtHOP/Q+B0E2JAbeljpt/czf8oiDCddkiQYM1LCIUEAQZj1W2GQJpMJaD5nsXu9x9fMjFBL+s9ub4Ufbt2bv6wSHJgTFBrVu0R2K5XwZpz5fGDioftmEQlHlOqlyAQBwwSLg2k+XntB9uHo7hqwDheCQLxmKq61hUHTUfLo7hqtanJ+CgWkqHNomr5KJYn16zAxyqbc6B5AuOuWKCnrpi3XX/sipdk6zosE+DGckG3SEZgvM/xPciOZH/Wgyib/IwuKH7hxAQdkxR2izwAXFCUFTx6z3EAAAAASUVORK5CYII=",
    //Dark Forest Grass Top
    "Dark%20Forest%20Grasses%20Top-DGuHojwi.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADnElEQVR4AcXB2XLbZACG4Ve/fu225SVOSlpKCi3DBcCtcNksM8y00NJpWrLbiW3ZsnbBl570gHM/j5P+/KrnP8ffnSI37y6RZl/xJde3SLUrEC/yEX8YIW3VIE1RIX3XI47jIPF8hCz/ukTioxFiODCL4yBXrz8iwShGjGt45PCoeNgh0XSAFKscqfdrJH1+hPhJgJRZgZy8PEWuXn9EwnHCo75HDAdmvchH2qpBttcPiPEsYlyDGM8ibdUgXuwjxjVIW9aI61skng6Qiz8+INWuRKxvkcmLY8RwYHZ1fod4cYDYyEe8KEC6pkWM5yL7ZYYEaYwU6xwxW4O4gYfYwENczyLhyCDRbIgs3lwghgOz42/myO52jQyfTJD1pwUy+nqGOI6DVNsSiaYDZPR0hlz/9gHpux6JpgMkGEXI6vwO6W43iJeEiOHAbFPWSJDGyPLtFTI+myPrjwskGMWIF/tItS2Q7PIBSU5SpM4rZHv1gDRFjXhJiLieQYx1EcOB2f39FknmI2R8NkeKdY74gxCpsj1iPBdpihox1kXqvETGZ3OkrRpkv9wiQRoj9a5E2qpBDAdm/SREinWOhGmM9G3HZwZp6xZJTlJkd7tBgmGEhGmMrD7cIV3TIl4UIF3dIvuHLZI+P0IMB2bDSYI0RYVE0wFiIx9xjIPUeYlY30OiSYKE4xhpygbpmg7xByFS5xXiuAZJjlNk/XGBGA7M1rsSKdY5Es+GSL7IeNT3SDhOkK7rkHyRIcU6R2zgIf4gQMJxgvRthwxORkh2uUIc4yCGA7OO6yDx0RDZ3W6QaJIg2dUKSZ8fIZt/log/jJDp2TFy8ct7ZHw2R7KLe8SGPrI6XyJ+EvAlw4HZYpUj6bMZsrm4R2zoIWEaI/d/3yBe7CNtWSOrTwskmibIfpkhbdUgk2+PkeXba2RfVoiNfMRwYHb26itke71CurZF9g9bxIsDxIt8pM4rpClrHjk8cj2L9H2POMZBys0eGT2dIqvzBeJFAWI4MLv48wIZPZ0i25sV4g9CZL/MkGg2RPpdh5z99D1yf7lA6rxCkvkIqfcVnznI7i5DJi/miLEuYjgwOzgZI23dIs9+fIlc/voeOfrhFGmrFunbDrl5d4mUmxwJxwlSZgVS5yUyeDJGwjRC8kWGlFmBGA7M7u42iD8Ikds3F4gXB0i1K5GmqPk/fhIg6dcz5Pr3c2R8NkeyywfEhh7StT0yPJ0ghgP7F9iMaBQNQHGjAAAAAElFTkSuQmCC",
    //Dark Forest Grass Side
    "Dark%20Forest%20Grasses-QsZ2k_qO.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADPElEQVR4AcXBQWvbZgDH4V/Vt4mTLqm0DKSxqcjeYbCLTX3YoRgMYZAOuh72BfIV9o36BXbKYd2hIPCphxj5NhiWvb0US6OxlRTbWeat27/r4W3xXc9z6/Mfvn7Df5YXV8htY5DN9Q3yUegjy4sr5O7RIXJ9ucJldg1iGjvI5voGOQzuIS9/+Q05CH1k8+cG8aiZ4Z03m3+QxtE+stxskP29PaQ3uUIGR7y1vlwin315H5kXF4hp7CB/rW+QVWON3GnsIKaxg6wvl4hHzcz15Qp5ZD3kPNlDqtUrZLVe41peXCHf/bGLDO6vEbNrkOvLFXL3k0Pk4YsK+fFgiZjGDvKtvY141Mx88+sGOWofI93Bc6TLDvLz/mtcJxPeM5+UyJOLPeSn+2+Qhy8qJIkC5PuC/73eIEkUIB41M712E7HlEPmq3US++PRj3np2jvTaTcSWFa4nBe959Pst5Kh9zFvlEOm1m8hgNMHlUTNjywqZFgskDn1kPJsjSRTgmhYLtkmiANd09Bw5iALElhWSRAHS77QQj5qZfqeFpFmO2LLCdfjgMWKHZ0gSBUi/08KVZjnS77RwpVmOxKGP2LJCxrM54lEzk2Y5rn6nhWv8coDcC33ElhWSZjkShz4yLRbIeDZnG1tWSBz6uDxqZuLQR2xZIWmWI3HoI7askDj0cU2LBa5eu4nLlhXbDEYTJIkCxKNmxpYVEoc+MhhN2GYwmuBKogCXLSu26XdauNIsR+LQRzxqZvhAEgVIv9PClWY50u+0kPFsjgxGE+T0pIvr6bNzZDyb4zp88BixwzPEo2YmDn3ElhWu8WyOq99pIWmWI3HoI0ftY2Q8y3ElUYAMRhOk124iV8MzZFosEI+aGVtWyLRYIL12E7FlhcShj4xnc6TfaSFpliMHDBHLdkkUILaskH6nhcujZoZ3eu0mYssKV/7qBrnz9wpXHPqILStkWiyQ05Mu8vTZOZJEAdLvtJDxbI7Lo2YmDn3ElhUyLRbI6UkXSbMcmRYLXNNigZyedHGlWY702k3ElhWSZjkShz4uj5oZPnB60kXGszkShz6uwwePkWR4hoxnc7axZYXEoY/LlhUyLRaIR83+BbE3OxXt9/zkAAAAAElFTkSuQmCC",
    //Forest Grass Top
    "Forest%20Grasses%20Top-DsQkydi6.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD50lEQVR4AcXB23ITBQDH4V92N5vN7jbHJk0PWFqLrXQAQa6dcXT0DXwOH9BRFGEoMBwGi9hSWiqlTVNy3myy2ST61xsvvN/vS333/fqMv9387Dby5OljJAxG/JedSSNBb4hkPRuZy2eRaBQjw0GETKYzxEilkOpSHnn1/B1SWcwjBgmzUqSQnZ0HSL7oIqZpIIaRQj40eki5Ooe0LvpIGETI6sYC4udipNsOkVs3byM7Ow+QwryPTKczxCBhlutnkCiKkffHLSRtm4hlmYhtW8hoOEZcP4OYloEMwxGScdJItVZG7t27jwTdELGdNLJ96ypikDDrcK+OeHMO4no2kvUySDyeIHbGQhpnXSRfcpFOc4D0zCHiZNNIxgkR27YQs+ghlVoOefJoFzFImHX5ShWpv+8gK5dryJu9E2RtYxExTRPpdUKkulBCtrYqyN07D5HpdIqUq3NI2rKRgz9OkPpJG/FzDmKQMCsaxUih5CIvnx8i65sLyJv9EyRf9BDXyyCdTg85PqojtaUiMghGyMnbJjIMI8SfcxDLNpF02kQMEmZd1LtIdTGPrH2ygLQ/BIifyyLddojYtokMm2PEtAwkCEbI1e0rSD/oIudnTaRQ9pB+d4hEoxgxSJjl57JIuzVACiUPieMpYlkGMo5iZHGlgJydtJFcwUXKlSLycncficcx4noOMo5ipHXRR1Y3FhCDhFmlio+EgwhZXlpGOn4TMQwTCfpDJOt6SGk+RhZqNSQIushkPEH8XBYJgwgxLQOpLuWRo/0zxCBhVr87RDrNALm0YiD10xYym82QYtlHJvEYadS7SLs1QBwnjXg5BynN55DGpI18tLqCHB4cI4aZQgwSZpmWgczXcsjR0RFSnPeR0+Mmsrm1geztHSC5gotcv34D+emHu8j6Zg3587CBZF0b2fv9DeLNOfzLQQwSZrUu+sjalWXk7cF7JOvaSL7kIS+ev0JcP4OMwjGyu/sCKVXmkIt6FxlHY+TqtQ3kt2d7yDDsIa5nIwYJs27dvo68fv0aieMJ0mz0EG/OQVwvg4RBhAzDCEml+EfatpDZdIakUgbSaJwjy5fLyNF+Hcl6GcQgYdbjh8+QS2sV5OxdC/FzWaRx1kUqtRzS74XI1998ibzaf4EM+iOkulRABsEISaX4R+O0g3y8tYg4mSxikDBrcaWERFGMfPXtF8jPP/6K3Pj8U2Qw6CNxPEGePH2MdJoBUiz7SLc1QIJghCxdKiP50gw5P+0gvc4pYpAw6/y0g/g5B3n44BHieg7Sal0g4SDi/3g5B9nevob8cuc+sr65iLw7aiBZ10amkymyvFpGDBL2F6ZpbxRlW1lMAAAAAElFTkSuQmCC",
    //Forest Grass Side
    "Forest%20Grasses-SwPOIUcS.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOklEQVR4AcXBvW7bZgCG0acMFVt2lZB2DdIDAUpZiqaAhHgWIMCLF9+Dh15ILyX34CUZAhDQbIEK+jdUtAwipZi05FerluM46c/rZvgSaOc5X3z3/bf/8J/qzRJxW/eQm+tbZG//IVK9WSI7ex3k0qyw3d9oIZvtFvL2+hbZ3d1BfvkhQ/b2PeTdzS3i0DCXjz68/xvZ2esg1e0S2d7qIFcvP3DnkDt/1ivk68ddpPitRDbbLeTt6h1y1V4im+37yGa7hVzWV4hDw9xLs0K2fvoS2X7UQV6t/kCuVkts1ZslspP5yFV3idzfaCGXZoXsBT5inl8jZv8K2Wi3kO2fO4hDw9x7ZxvIbv8QeX36AvHwkGr7L2SDNrLxcgvbxa+vka8udpGbx+8R8/waiUOfOwX/K7gThz7i0DB32O8ieTlBvul3kUf7O8jTZ2fIsN9F8tLwiQs+sfXjNrLbP+ROOUGG/S4ynp5jc2iYm5cGmS9qJAo8ZFZUSBz62OaLmnXi0Mc2n75AOqGP5KVB4tBHRoMe4tAwdzToIUmaIXlpsD14cozkk1MkDn1kNOhhS9IMGQ162JI0Q6LAQ/LSILOiQhwa5iZphm006GGbvRojDwMPyUuDJGmGRIGHzBc1Misq1slLg0SBh82hYW4UeEheGiRJMyQKPCQvDRIFHrb5osY27Hex5aVhnfH0HIlDH3FomJuXBokCDxlPz1lnPD3HFoc+trw0rDMa9LAlaYZEgYc4NMzlM3HoI6NBD1uSZsho0ENmRYWMp+fIydEBtqfPzpBZUWF78OQYySeniEPD3CjwkLw02GZFhW006CFJmiFR4CG7/UNkVmTY4tBHxtNzZNjvIpeTU2S+qBGHhrl5aZD5okaG/S6SlwaJAg+ZFRUyGvSQJM2QDhMkZ7049JG8NMho0MPm0DCXj4b9LpKXBlv2+zuk9WGFLQo8JC8NMl/UyMnRAfL02RkShz4yGvSQWVFhc2iYGwUekpcGmS9q5OToAEnSDJkvamzzRY2cHB1gS9IMGfa7SF4aJEkzJAo8bA4Nc/nMydEBMisqJAo8bA+eHCPx5BSZFRXr5KVBosDDlpcGmS9qxKFh/wIjjTnA9ihk3QAAAABJRU5ErkJggg==",
    //Meadow Grass Top
    "Plain%20Grass%20Top-CsDIY6ct.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAD+UlEQVR4AcXBS1NTdwDG4V/+OUnOCbmHkAspRaqoKGCV6bjootNd2+nX6xfpwrFOF621QrXeUFEETUqQSMj9ThLSvq5cdH+ex/PTz6tT/rO+dgN58vQh0m4O+ZQT9CGNWh8JRwNIIhVEBr0x0mkPkcl4ihivB1lYiiNbvxWRz87FEIPLLI+Hj7a2NpHZdAixfF7EGA9yVGohuYUo8uF9G2k368jKehaJJRykWuki19Y3kK2tTSSdCyNnZ1PE4DIrErORQX+M7L86QQK2hfj8XsS2LaTfGyGRmI1YlkF6vSHiOH4kl59F/rj7J9Ko9RFnxoesX7+CGFxmbf99hETjNhKOBpBw1EZOh2PEdnxIqdBAUpkQUil3kHrVIMEZPxIM+RHbsZDZ9AySX4wh9+9uIwaXWVevZ5Hifg35YjmLvHx2gFxezSPGeJH6SQ/J5ZPIpUsXkTu3NpHJZIrkFqKIlYog249KSHGvhsQSDmJwmdXvjZBUJoQ8uLePrG3kkBdPD5BUOoSEowGkXmshb3aOkMXzCaTdHCJ7OxWk2z5FYgkH8Qe8iD9gIQaXWYfFJrKwFENWb2SR43IHiSeDSLXSRQK2hRwfdRCf34u0GkNk7ctlpD9oI4cHJ8hcNow0an1k0BshBpdZ8aSDVMpdZC4bQkanE8Tn9yLDwRg5dyGJFPZqSHJuBplLx5Fnj3eR09MxEonayHAwRsqlFrKynkUMLrMy+QjSaQ2RbHYeCUfqiDFepFnvI44TRDLzIySdziD9QRsZjSZIPBlE2s0BYvkM8vn5OPLiyRFicJnVqPWRSrmD5PMGOShUkel0iqRzYWQyGSOlYhOplLtIMORDYgkHSWcjyHg0QRbPfYbs7RYRr+VBDC6zLMsg+cUoUigUkMx8GNl/XUVWrl5AXr3cQ5KpILJ69Rpy+9bvyNpGDtl9+QEJhQPIi2f7SDTh8CmDy6wP79vI5dU88rp0iITCfiSVCSGPHuwgkZiN9LojZOf1NpLNR5DDYgMZ9MfItRvLyMPNV0i3c4qEowHE4DLrq5vryP7bPWQ0miBHpRYSjTtIOBpA2s0B0u2cIh4PHwVsCzk7myLGeJCT6jGyfCWFPH9cRsJRGzG4zLp/7zFy8UoaebdbReLJIFIqNJD8Ygxp1PrIdz98i7wtPkdajQGycC6BtFsDxOPxIAfvGsj6xjzi9zuIwWXW0nISGQ5HyPc/foPcuX0Xufn1CjIYdpDR6QR58vQhUil3kXQuhFQrHaTVGCJLy7NIKhNCDgp1pHZyiBhcZv3zto7Ek0Fk8/5fSCRmI81WFem0h/yfWMJGVlZWkV9/uYesXp9H3uwcI6FIAJmMz5ALK7OIwWX/AlkfbKUx0/rlAAAAAElFTkSuQmCC",
    //Meadow Grass Side
    "Plain%20Grass%20Side-BJrum7Qs.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADR0lEQVR4AcXBv2/cZADH4Q/GFZdLE2xCZKfFxWcWYLmjmU+y1CVLVwam/A+MMLL0v8hEJWBAiiplqWTp5p58Q1mqcyyZ9s5N63tFm1xKfwDfpsNLdbuf54Mffo/+4T8nj06RSx99iJyfvkTCaxvIyaNTZPvKOmKenmPrrLlIp+si52evEH9rE/lj/BDZ+XwDOV++Qhxa5vLO61dvkO0r68jJi9fI2loXeXb7MrL9/XPEnCyRr765isz+bJBO10XOnr1EOt0zZG3dRTpdF1mcLBGHlrnm6Tly9usOsvbjG2T53CDL5RkXLiMnj06RN3ciZPnlc6Sz5iLm6TmyfXUdeXCri7xIHyOd9UvI8rcdxKFlbnPwKbLVv4Hc/+kuFz5Dnnz3mAuXkWe3A2zF/Ya3jq4h69/OkQe3ukgc+kiZJUjDhTj0EYeWucN+D6nqMfJ1v4d8sfMJcvDzPWTY7yFVbbCVR/zP6S8hstW/wVv1GBn2e8hocozNoWVuVRuknC+QKPCQ6axB4tDHVs4XrBKHPrZychfZCH2kqg0Shz6SDhLEoWVuOkiQLC+QqjbYNq/fRKrxIRKHPpIOEmxZXiDpIMGW5QUSBR5S1QaZzhrEoWVulhfY0kGCbfpwhHwceEhVGyTLCyQKPKScL5DprGGVqjZIFHjYHFrmRoGHVLVBsrxAosBDqtogUeBhK+cLbMN+D1tVG1YZTY6ROPQRh5a5VW2QKPCQ0eSYVUaTY2xx6GOrasMq6SDBluUFEgUe4tAyl/fEoY+kgwRblhdIOkiQ6axBRpNjZH9vF9vB0T1kOmuwbV6/iVTjQ8ShZW4UeEhVG2zTWYMtHSRIlhdIFHjIVv8GMp0V2OLQR0aTY2TY7yF/jQ+Rcr5AHFrmVrVByvkCGfZ7SFUbJAo8ZDprkHSQIFleIBuMkYrV4tBHqtog6SDB5tAyl3eG/R5S1QZb8eRv5NLrM2xR4CFVbZByvkD293aRg6N7SBz6SDpIkOmswebQMjcKPKSqDVLOF8j+3i6S5QVSzhfYyvkC2d/bxZblBTLs95CqNkiWF0gUeNgcWubynv29XWQ6a5Ao8LBtXr+JxONDZDprWKWqDRIFHraqNkg5XyAOLfsXY8U9k9XnH3gAAAAASUVORK5CYII=",
    //Red Bed
    "data:image/png;base64,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":
    "data:image/png;base64,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",
    //Orange Bed
    "data:image/png;base64,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":
   "data:image/png;base64,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",
    //Yellow Bed
    "data:image/png;base64,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":
    "data:image/png;base64,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",
    //Green Bed
    "data:image/png;base64,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":
    "data:image/png;base64,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",
    //Cyan Bed
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAPWklEQVR4AeydX6wfRRXH5/7MTqhtaaFepFCgl8QCBUHwbwhiQB8QjS8+qMSE8KRCogb/PZRoiJoYRY2REDHhgZho+mB8IcYX0WDivxgEU4v2oZfYgrWl3HtpryVt9HI/++P8Op07s7vz29n97e/uNHzvmTlz5pyZOWdnZ2f2twxU+tfrEUgB0Gv3K5UCIAVAz0eg591PM0AKgJ6PQM+7n2aAFAA9H4Gedl+6nWYAGYme0hQAPXW8dDsFgIxET2kKgJ46XrqdAkBGoqc0BUBPHS/dTgEgI9FTmgKgZ463u5sCwB6RnuVTAPTM4XZ3UwDYI9KzfAqAnjnc7m4KAHtEepZPAdAzh9vdTQFgj0jP8ikAeuJwXzdTAPhGpif8FAA9cbSvmykAfCPTE34KgJ442tfNFAC+kekJPwVATxzt62YKAN/I9ISfAmCdO7qseykAykZonZenAFjnDi7rXgqAshFa5+UpANa5g8u6lwKgbITWeXkKgHXu4LLuDRYev3fFhbKK01bu6iM8Vz+e+NvfV0KAjv2HD68ITpw4sRICqQdFV5vIZ4D5559Xf9333AiLiwtttqE1W03387ItWxQI7RB1QGi9IvmqZXkALJ48pbZu2pCjasVplKvazysv3KJCwFjEcGAMHbQlBHkAnH7lf6M6BMIos84SfelniNvyAAip0AfZ3Tt2zIRgmsckBcA0ey9C21MAOAYx5AkAWYeKqWGlAJgaVzXTUG8APP3gnSvzP/hEKZD71aduXQkF9XgOpx60iq06MiHDF/IEgCy6n3lpQR1aWiI5FqiLjrEq16jkDYCjL56spLaqnK3Mrpdl2haJntfnv0HxKBhd8esKj5/5v8KJ44C6r6upRUIrewMARVu3XqDK8PA3fqLAo9/eqwBp8JW77jsnDw88tOfHCjz46W+pP/1+H2Zyuu/ZefXP/S+MjYXFpcK2srk1t+NiBS7YukWB3LjjT8gTALIOFVPDGgUAV4aAwaQH7JyVIdNaZfrs1Ztpdz7TQ/7m1d0ycPGVc3mAEDTjgGASEFBfvud76s7rP5kHE4Flww4u+jh/+AjdVNyCXMgL1/mfPADeffN1+ZXxzNv3KPDbq+5X+2/7qoKWgfE5c/q0MgFPYPJjpdGd6WFAZVorAgqEBNXXP/+Y+uEDP1Xyj0Cvsx3+3rnLZ2JA2tMWHSyu7vvTeTG4a/d2dcctVxcCGZGfBI0ZSNJ+Zj92QYHw+kAHLL5YkEFxrKxqizqPDLLI4AyojTeef5nN6nS+7jYx+wEx0PYg5beANo1m+uzUnenJpn3B2+Z4TNrWYOPGjXkboB++/trKe+DI3v/xD8w8MXvFGvxiy/aZP9x48wzULofXFdC2vPMR/rxv7nIVAxGaEqSi9RlAWufb1JHyaaNs5NRtcx0d49r2BkCZg+qW02Aew0yw5wB/GsF+wObNm2fqAB1t990bADjDdA5ps3F1y0UXq25gLsKkrC16wd2PzNzx6FMzN33tlyPMfe5nM23Zn6QdbwDQKJyCcwB5G3XLbX2TyC+UvBPZdPkk+mzaLAwAU7CpNI+goCn9VfSyD1K0CdR0eZU2NiVTGgA4B/gaQBkYp/zG665R7EIKfDqa5pdtAjVd3nT/ivQXBoA4BoqzbEXwBaHl3GO599qwbbSR51Ymdly3u6bLxfYkqDcAbMeQx2nSSPI2QspFT6KTHQFvADTdLB4jeSlEIC+GQA8/cvdKFZzc+4WVJ7902wrUJY8uFnFQsQPFdtP9a0t/XTt5AFx0yaY1ehg0BlUGWAaOwTPBACODvA3qUIaD1hhYZXBvFaxmG/1P7EAbNTRlyvMAmNu5c02zubevYRYwrrth7pwFHfUvmp0tqKEU6wYB8ggTjFu3vUlVweLxlxT37Jw66qALnegWO1B4CcMRGJj38SFr+JdjYs4Hhrnyv8guLy8rHpmoSxoeDnLVZr1g2pY0mzGbPvbdmSrYce/j+cYN1CWPLtFrUmxLm+AXbQI1XS7tmBTNZwCX8TNnTrvYXl523gZ19Nix0atWofVjHKXW0eHt2Dov8AZA2/3mHQMbWzZvzpvxobfuVjGAMnTadshTBli3uNYy8My1T500unx2aEObiBIAvmm+bke2ZQN1YP+/66oZ1UcXOkcMR4KXRVk7CBBxrZHg14HoFDtQbNfROU7dAZHISh564KGPrgjGUVZUhyuGpwoTvqeDIj2pLO4IRJkB4japu9q2VnhNvopMjB7G0pECIGAkecKJgQCTjYumAAgY4l1XX6OqgP0PNpygLvkAk42LpgAIGOJjR15UZZBNKdSymUXerkNZV9BaAPDaeejeQFcGSdpBH8pg95G8XUf0dYG2EgBcBVwNsxdfcs4WL/wuDELMNuBsU5+dN8u6kB5wr2q6IQfm/6X+/Jen14Cdw6ZtJ/3FIzCosolz5tVT+RYvP6g01VWN7l1zl6t3veOmNWCRJPoOvrykTDT5c2l0m7ZISzugXBQC8k1C7ECbtOPTXekWwMEOz7fsXkEFHPZQ5lMufKZ/pnsWQ1ABfJGx6dKJE3lAwP/+3l+rGEAXzkY3aR84MRRwkogcO3W0twroHxdWTiOfUtKWmKgUAPx23/65teSZ3oveCZTGymJI8jZ97IoL1Y+2b1J7Fvapzz65N+oWsG2LLWFsYAub2BYZTgo5AbTByaLrxNHF43QSeairnDJbP3lsSzvaopUCwHXWz5UBmN758kaMBmdaqyvfdqu64Z7PqN998FqFY6BPvv8t6vHtx3M8fOSp3BQ/Ti0CQshKPXSgS3RiA1uZ1oiODbbRXUChiw+Psq6gUgDIVL+4uKBMMP1TZr402UTHMj0MDByG48SRONMHZJClDsh0NUfjIBeK+sXuoO+1cl+Zywa8IjtNlFUKAAy7VuxM65StJxDgOFNucaTL+scCjns+sGWLytBt2sG2Xb/pfOUAaLohXdPPog9Umd1MGTsIysqwASbV/xQAjpG3negQic6ahE06MWCKIjFpHDk4rw4+89QIfLwBxG4XOoFpC9ux7UyLvtIZoK3I5ANPLNbAZbvfo44ffkEd2v/HUUCYDsOBwDfIlAGzjqTRiW5sYAtg26erK/ym2lEaAE0ZtvVyFeI0+JnWCqfgHBM4jW8P4UQgTrUpZQBZ6pg6SKM708OnAmxiG7t9RGcCgMHnysQZAMcA+IJMuwMDp7pgOlp0oBNgA2BTysahbOD4XisvKhvHVhN1KgUAr3w3YbxM56unTp3z/UEcVxfoLLPrKuedSZ7TYwBdLhuT4FUKgEk0LNNaLR9/WeGwmEBnpofTv69fLIwF5i4nz+ls7MizeyilLjrELrrFDlT4bdLOBgCD8N9XDkHW4LwNGxRfBi0CMmsqrjJ8OleLRv/xPWETUsAhGK9uX7X7UjUOqIsO0WfaIC38NmmUACCSYzZ6245LnepwKk7PdPEVTOVM6zxIqKMc/3w2FhaXlGD+8JH849Vc6Rx4Qe1vDofm0WHqwobYgzqa2ihrFABE58nlUyNjVc/6pQLvDHC+L50IrS96oJl2OzjTQz7rgBNLS6oIyFTRhYyJ+z7ygBLsueubiq+aNwlsiD2o2ZY20nkALC8vK6amuZ071ezsm3OQh1+1EchyMIQO6pKGF+PexlUMxOGsCcrahYzIUxeU1bHLmSV4kmgS2LDtmvmm03kA+M77MV7VgS4drgMkdHYZprMzPZxxmmxvpoePtmK3SVsu3XkA+M77XRV8PJcObgk+eR/fd0VwRfvqlPF9dV225NZRprOJ8knYzgOA6ZrHEx5Tjh37jwLk4VftKLJM+eigLml4oVvJmW7+qpM+ZXqtLb4fPKlvGWNb2tYWzQMAYyzeNm3cQDJH6Fk/m0VHa3wfgMczkBu3/viuYO7rLljV86xPBzZBLlTyx7cJVFKt08WjAOhaK4umQ3G6r81l5UW6+RWzy9FiixmOFzkEzHZSFkJdNrAdoiOGbKXXwssMhU7zZfoo912xlNVFmW7TyaRNeyyK6S8w+eOk0S2BRHocHXXrdHYGODb/rOI0z+4gV7fN8+VdsuhEt68OfNPJpOEJit7wEZmqFN0EEiBdtV5Muc4GAJ3cuO1CSFSE6jQdHrUhq8qKdK8Wt/JfpwPAHgHXFW3L2Plx6nBF2nqazk/CJn2aqgCgwQlxRyAFQNzxnDptrQUAh0OhewtFo5lpnf8fSzPtpkV1xy2bhjd8QvvWSgDIjyRjfB8g00OHl3U009XkyvRIOW/x8JzuA8/1fP8P6pMRPrpE76RpK6+F8wPSGN8HyPTarduyAcx0eB2XTs7wXfxxeDF1jWPfrDOosvrkrJ/3BdguNiszrZt5X5ofkJZ9H8BXN/GbHYFKtwAOdjjjl7N+0oDDHsrKmshv6rkNhHwfoExnl8rtC8HOh7S1bdlKAeA66+fVJsD0XmVKYwEYOjC8wBl7QOroJOhdkAuBV+O4IMi75IQXu0919FUKANdZP98GAEzvdLxOI1x1Z+ducLGj8MbVTcD7wIXAzh4nouzrFyFKJyIpqRQARDSRzcmXCXiU0fFI7RmpsXfw6ly5dl1b98hoSeKW29+pfGCNQ5nrw5A2r8RMq8WVAoAWEdlQE0zrZj5mOtPD1bvpvKJjXJ9ts47oyvRQt6+Oj3/gH8+pGPDpnwS/cgBMonFiUxxXdowr8iaVOqLDLAtN8yQUA6F2m5TvdADYJ3c40byiywYGWeqYcrZOs6yP6VY2gsYdWNe9mh9z8ro3zvXppQwZZG0Zl05bpk/50hmgykZRzAHDeaIv01q5rliuapzLr3tdoAwZ0SMUXZk+e/83bYlMEZXHuLrUZWNSvNIAmFTDxG7MK7aurqJHu5Ay6VsXaOcCgKvXHJhMa+V6f9+UqZJGR6bPXv3UsW3BK4L9OOfL83sIXvGCumSKbLRdNrj9O7+Z4ZiTr1fu+uLPZwRmQ3jl28yPk+YrmHw50wRf0bR1uV7RznS9IHA5H7suW/B9YCu7DGx5s/WNDih5uw5lXUHnZgDfwGR6+BMqnMm93CcnfGSQ5SdXmT73yheZUMpWdhnsvRHydp1Qu03KT00AyCBkWuc/+8axRaj6M3IV+R/ONlXaebOsC+koARD7LCB0dT7OQLZhY5x2tV3HGwChkcs7Ayx65J2B0Pptd7zIHgs4QZFcjDKxA42hL1SHNwB41uWwp6pCZDkYkncGSMMbp2Oszpu8QtGNDV/f5P8VAOXEEzk+58qirgpY+LF/ktOS/18ANgTYaRuvAQAA//8YSppyAAAABklEQVQDAFynW8e3wUMdAAAAAElFTkSuQmCC":
    "data:image/png;base64,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",
    //Blue Bed
    "data:image/png;base64,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":
    "data:image/png;base64,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",
    //Purple Bed
    "data:image/png;base64,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":
    "data:image/png;base64,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",
    //White Bed
    "data:image/png;base64,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":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQEGAAMAAAABAAIAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAAFGAAAAAQAAAUYAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAICgAwAEAAAAAQAAAIAAAAAA3b+wFwAAAAlwSFlzAAAyIwAAMiMBzeeT2AAAAg9pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj4zMjY8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjMyNjwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UGhvdG9tZXRyaWNJbnRlcnByZXRhdGlvbj4yPC90aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgqgAS0AAAAMyUlEQVR4Ae2dTYwcRxXHe8IEe51ds961WS+O4t21kZJgBMQoQhxAoBy4JBApcOEAgSA+bkhIXDghJISExAVBEMKcOBEpSJEiDhZISCAnwhAgiEjE3hiENok36yX+WJMYlp6q/tVOv+ma7p7pj+np5yh+U1Xvvar6d71Xrz66HQT6RxFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBBQBRUARUAQUAUVAEVAEFAFFQBFQBCYLgc6Pv/7R3SD879LlW51e0167et208IdPnDfpyWru6K350iOn/9eTXpy9wyhZWeqa/n3hO7+aqn7mReg2I9AJph6EXgfD/6e+n3kHQBeB42+3P1+7Ss7U0c5uEOyuRP2cut6N2CHrAUYUbpJY7+EPeIDe5NfyP93unJ0Tb0Vz/+JBm/7yI6enChz6FU4CZhqI+t36KaE1HqDlhu7tfhfLP3rkbT2L76yuHkpk3rl2JZb/8uV/x9KhvEnPzFp5+OGjnHRMuC8h+Uj79CIKH2n4SUNlu8hvK1UP0NYnH/W7c/bxz4br446JjzaPfjw3HDtvNHsaffRTDzW7A7mfWFwg9AC9h69/2oqA2wfoAXD8xFpmHC5duBjjPX7sTpOemz8Yy186bGOCZ//4F5O/MBcvh1nKkX91+3V+Ki0BgdgAKEF/I1Sy5L3/ve+ItffRbzw19d6xbwDs7h6ane0cnpuLgUBi86rdIrxy7RpZMYoFY/Gxwr7EyZPHTeqVTbuqwMKhfaxDf1LfUKaEwrz1JKiYqixdBUzV48zfme7Ote1MUtIzXMokFTL9x54uSnbpKbDMNMuWclKvL43HQT/1+fjbkt83BbSly/5+3nr9+t72dwtOSHtIxAbA3aurUx/0+B9/X0lLHv7AAOiDoPSfP/3Wg8ba2IqmwjouaIQNMW156fIt04yVI909T0DDppR23d686HLaAxq3fErxbFy3YlNAla0/vN9W/fRz9lDpvhP2MKnKNlDX40+cb+1qyDsA0h7QuOWAXzdN2wQqu7zu/nsHQNkN27xp59s6Lb/sPjZBfzc8Rxezv2122gMat7wJ4LShjXiA3vIvcSCUBUIb9tnLwq5Ivd3w5kz48HcHHn7aAxq3vMhOFKErbROo7PIi+jCKjtADDD78URTllfniJ06ZQfexD99jRGduP2DogZm3GPr839YNXT52OFZuEuFfv/vDC+bnB++729CdN28YunjQHmYhv7ZyV2L5hz5/JnnTK20TqOxy09rq/uqdBSS6/9/85HPmAf3sqWdNaz794P2G3tj5b6x1T549b9IfeP+qofN37DeUB3rxpX+Y9Fe+++tEwOHb2N4yfCdmjhjKX9vXb5qfM/N2gPCgjy7E0/AxAJCHf+NfmyZLloedNP30bQKVXU4766KsfxMfTl2N0nqrQ8D74NnpO/f7ddOahx84bSgWhSXhIfAAy/MLhg9Xfva3fzXpb555xluXYdC/akGAVUAtlfdX+sL6unHF5MnjZy6kUO67mEJ5eLmFn4am6WvrQZh3AGDJSwuvGgCxfOZs0F1asG8SMfeTf2HjMj9zUR7U3zc2jNybV+zNoVxKQuZXhZztRRDcfsjeUXzn8rJRKQcWwSkez8UmyzY2IbicmbcDDJzAh1iD4JXY5ISQpxz+U/esmvZ4g9O8AGTk9w6AjPJTx8aA5oHSQYLfl7fsamM1GgCUQylfPmZzpGFQvrZig1gGEvJV0y4j3rccI9qWDQMQ8vEMAMeI39m2dwh/+f3PGBdPOTEEIx7LRx+Wj8Xi0iUf/D6KhTNloDeIPEBefb56mpqvHkA8OQY8rlta8Ctb9orb6poVlAOactSihwFPOXJSP3JVUTcAsGA351W8Hvd1WFr+4uKijzVTvowNMglNMZMbAFPcx5G6xtSF8HZgN6RIQ6WFk09wR/oCPyKKHEGkKK4s2Z20oIc5GwSYo0e1fCnHaoB60E99baPqATxPnDMENyVGy7hzgd0YY+7GkqUan/x6tKyW/DKoluVlpbuTEvRgkWV11Ke3rnp97ak6Xz2AQHxvnW4L5BzNlCnEvEk8hZchKmDrPI2v6HI3ACYl6GG9TkfZEcRS887ZyEm9pFllUF/bqBsAbeu4r79ync7yGH6mTNLSwtM8BPrlPsKBmeSXcqmnLOoGgC9oqSroee5Pf07u45Y9C7iUXDp6rkfvj37xvDm1DOnounuSZ54ZKj+2/qHasxe6AZBdRDn7ERh2bXxYWb+OOn93JyXomZRvDf3gax8xZxYc0uDiH/7qzwu9z/Dk9z4ZO/5mq5izkaoGBTeCqqpP65kwBLoEJRxO1BX0nHrXvSNBk/U9f74LIL8vwHcDZOVyVSTLx02zgSSXmePqzSuvMUBexDz8w66NDyvzqKss250FMCIDe8En2Ni2hx/ECFxwgI85i5ZKD8LWJssi5lL4JZWWKct9loplS37STu8bOzYL+tYZk3blCERUropEsT857Nr4kDLw8isup0Q9wJi4hpGcCeaSrpUPKxuz2sLEXQzAxgQxwOKy3ZhYv2jPz7D8NEumZXgEYgzy0U/aUb4l1EmOS5cO2vcNgl3zD38Ewb7IVTkFKT8ii9/zJMnHu3i8tRWrr6o5uvat4BT4tNiDwLBvCwwr86irPHtgCsByg8BeWsSC8RB4AmIAtkbJ5w0e2ROv5UvGtDQegrkcfuEZ9iwdhmyU/oID7eZNKW4Fc6sXreDBexC+V9Z4jwI56qlrKzjZ39I6pVOPwIAHoMdyTmIu5IIEUStzprwmjUdgFYBe5JcD+wYR+S/+0767Rzotuvev/+N60JeV0l7aX9eqKGt7x+VTDzAugg2X93oA2S8slx0y+95OEDBnEiMwp+Exzm2tG1W8JcweO2nqOXln/K3gYL+NQSiXdGl2n8yy6RS54KZ9sSNZOAge+/bTtgi+3r81lvSn909QJfx57IEoEznBd+9DQh/lrt1nErSWl6UeoDxsG6HZeYC09T1v+tyI3v7d65218L10/Nd7TlrLJmomqg4G9MTlBiwVi4INA8SCyMdynUVFBeSjh9UEqwfkoanywpKRoz1Q6pPlUj/lFVP1ABUDPmnVDZwF4Ank271E/czxrHtlh7BwVhGsEngZEn70kHYUi8GCKCAtLQfLhg95ubN4Gy4DGgmIHcW7lhYFA4qnk7opYDq7V2yvmnDDJ2+PBwYAFsyOXtHfB8DyqcfbYCwZBjwAlk0+9sqcnvffhxb6eFuaL57gEYu+ESRvHrG68n1Lie4WTTUGKBrRhulzp4Hve3d02hZ1gDmcvX7ZL2IC8rFoLJxVAyMbPij6STuKpeMBsGwsPauF+6J79FFOfa4B9geWL7ILS+ZeFRVWc1zRwBQQL9ZUEgKTfMMnqb3D8twAwILZ8av6e31u509G9VjqsF7kKUvRJ88ChnqCITd80poE3vDhOUlXRd0AqKrCJtcTbv2Y3Z+k2z9N7ZfbB5AjkDmedbw87aPDlHNnUFoM5ewDcBaAfGnUM7cHxBYZK5aWmlEsMxu4l12Pr0HqAXzIJOQ34YZPQrOHZk3M9wFcK9npIxbIabFOj5TDI0ApdzuEVpLTTbkq8t0Ikpab9SPWrp3RD++qSDIWnNZ9gIIBbZo6NwXI9XrlH0XC4vEARSHJXj/6M+rFsmtbFWVs57hs6gHGRbDh8s4DyDdh2Mmr6vsALjrHUvEEpJmz8wKOvNTn0cM+ANE5bI1fFdERQdUDCEDalpyY7wMEbo8+ummD5fJEZPROfhrFc0h91CfkOfvgVrDc12CVIO9Acj+CctSiR5bjYaR+5Kqi6gGqQnpC63GngYxIol/ai0WQliOWOZNySbEIaTHeN2GwWGnxpKFUBD/pNOr43fFiokTtq6LEVhWfqR6geEwbpdGdBTBX1f4mDHPzPvv+vrsd7Cw3J74DHkOMec/pYO2ropzdHJVdoDGqGpVrKgIuBmCOJgao/PsAWCIegLt6+6PvABDFp3kCafE8GfYB0Eu+4N87vbQMvOEEe1rMAx9UxkzkS6pnARIRTVeCQNf3ZUz+jR8ZxRMrsK5llUA+t4ll61Nv1WKJBOd4Ar4D4E7tYBA1OA8S7SOgD8uHnXzSgtLfiVkVifYVndQYoGhEG6bPnQXIdss5ibmQ07G0vXE8QuY5E0tNm+u9Fhx5BhkjSH04EPRQbwQA7aX9ta+K5IMpOK0eoGBAm6bO6wFkR7B8dsjyfh9A6vOmhUUO7ANIC0cRFg2VfORL/chHlBig9lWRaFdZSfUAZSHbEL3/B/aZmuVTy6MIAAAAAElFTkSuQmCC",
    //Red Wool
    "Red%20Wool-S6R1k3dT.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADGklEQVR4AcXBzVIbRxiG0ef7umckDQKEIfbGKVeyiJMLzs2lvHEoVwFBIIKk0V93J29rM3cw59ifv/5S+F90qkMuiGNIF6m66MhynxHj7KoxxM2Qx11ColFdNs7Q+zEjqVA5I4tdpGrckC/zC4be+x1yygVpnaoUqtWhIKeSkYkbEo1quc9INKpJMGRmVM7I4rwJiBnV/WqDuFF9mEbEjKrNhuxTQT5MHGmCIYeUGbrrGmTWtsjrpkdSKYgzsrg+JuSQqa5bR6Ib8tyfkMxZ61Q304A89QlpnWoxCQytdkfkaXtEviwukHW/Q5yRxcYNyaUgL/uMzALVVetI4eyhT8jqcEJmwZDGDfmnT8ixFOTTNCAdZ99e1sipUDkjiy/7jGTOWjfksg3IU5+QfSpI64bEQJUK1cs+I100ZGaGPPQJad0Qw5AuUDkji7/dzhn6t++RUy7ILFDNgiG5UEU3pIuOXM6myHK9RfpUkK+3c4ZeNz1yzAVxRha/rzYMfVlcMFQ2PZJLQSbRqQrVY5+Q590GuZk4soiOLNdbpHA2i440bogzsnjVOFIoyF/LNdK6IXfTgOxTQZ76hASjCkYVjOp1n5FDLshVY0gqVK+HE1I4c0YW3w4ZiU41DYbcTAJyvzkhZlTzaMjEDXk/FWQeDbmbdwz9eNsgXTTk8/UFQ87I4t00IGZUh1SQUy7IH3dzZL3bIcdUkFwK8mkWkFyo7lcbpA2GTIIh+1SQby9r5CIa4owsPvQnxM2Qy2gMfV9tGFq0jhTOHrYJMaNyzoJRPe8zQ10wpHFDnJHFxo2h531GzKg+dxEJbsj95oikTLVoDemiI7tUEDeq32/nDD2vt8hynxFnZPGyMaQUqo9dg8zaFln3O2R3ysh148ghFWR1KEguGZlFQ9rgyI+3DUPXk4B8nXeIM7I4iwEpnK12R2TZH5HFJCCHXJBgVJetIz8vZsh7v0OedwkxEtJFQ6JTLXcJedxuEGdk8e/1EWnckI/TgGxPGXncJiQ61e00IMEd+fG2QU6F6qoxZBIceewTYkb10zQgZlTOyP4DlMIuR//n80oAAAAASUVORK5CYII=",
    //Orange Wool
    "Orange%20Wool-gBEy-nYV.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADd0lEQVR4AcXB6XLTVgCG4VdHR7stGyfBQyFTGDp0+dHlrnq9HabTAmXoZHOwLS/BiWVJR+2n/DFXoOfxZr9HLf+zgUUO5QHxjEHSLEWiNEU2iyXiGYNk+RAxxiCL2S1irUUG+ZBjX7Z3SNM0iKFnNskyxAYWGb55yVeWW8RVNRJEIZ2Wzna1Rpq6RqI4Rqy1SLFYItZaJIojJLYJYuiZjYcZHesjuw8XiDEGSc6niLkvkaCqkKo8IOOTCWKSCGke9hzLXn1Dx/cRNysQ1zSIoWd2f7dDqkOJDMYjxItCZPfvDeKcQ4IwQLKzCbK+miFBFCLZ6YRj+4vPSHUokeGbl4hZ3SGGnlkbWMS5BtksCiROUyTNhzxqkfn1DNms1kiSJEgQBMjm5jNSVQfkZDpFojRBirfvkbquEUPP7HpZIM45JIwiJH6SI+urGVKWJRKGIWIDizR1g6yWBZJmKZIkKbK4mSFhFNHxPCTNUsTQM3v68/d8ZbFB2vKAxGmCxGmCOOcQay0SZimdkxyprxdI+fCAnP3yA8fcrEDqqkIMPbN37z5xbPjmJeLxKJy1iHMOsVlCxzmkuL5F/PkSySdjJDudIPX1gk7bInaYIWETIIae2SzPkZYWWfzxNxKGIZJPTxH3UCLrqxniW4tY30d8a5FtsUYOZYkMRznSNA2yKVZIS4sYema/rDeIH1gkTmJkMHmC3H66QDzPQ7LhAAmjGNltt0iaxEj2/IxjDx+vkDhLkez1OccMPbP59JSO7yPufo+4qkamv/1EZ7ND3EOJOOeQ8YtndKoa2X24QIIwQIIoRKp9iWzevkfSwQAx9MwWVzPEGINkec6x3btPPPKQwXiEeLRIcXGNGM9DjDFIlMRIMV8gLY+yLEVsYBFDz2wQhjxqkWI+RzzPQ55++4LOIEEWf/2DNHWDjJ6MkShNkWq/RzzfIE9//ZFj9dUcWS2WiKFnNs0HSOtaZPj6nI7v01ndIW65RfLRCKkOFbJZrZHctUiYxoifxMj9x0vEw0OSkzFy9vwMMfTM+icjOrVD9hefkaapkex0gtSHA2J8H0nzCMm+O6ez3CKb+RLx1lskzlLEDyxyd7tAqssbxNAzO//zAxIEATJ+9hQ5fLlHissbJAgCZDg9pTOIkfuPl0hT10iWDxGbREhxfYsYz0PG0zM61kcMPfsPKk49WqRfQmYAAAAASUVORK5CYII=",
    //Yellow Wool
    "Yellow%20Wool-DVGlllZ6.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADW0lEQVR4AcXB21bbRgCG0W9OkmzLYMCBhNKsXDRN+v5XfZWmpVmJwcEcQiDGkuyZaX9d+Q20t1n/eZH5n/EOSe0WMdYgrh4hvq6RdnWHGGORMJvScxZprlaI8Q4Js5p928efSI4JsQzM+3qEmBAQf/GKfbn9iaRdh9gy0Mv0uvtHJO0i4qoSMcEh7c13xASPuKpAbHCIZWDeTw/oWYu0yy+IcRYp5meItRaxZYekpkOK02PEFhWS2g37yrNzetYjcf2A5F1ELAPzu+cnJDYdUhzPEBMKpL1ZIjklxBYBKeZzpLleIrYMSHEyZ9/2YYXEpkOqi3dI7taIZWDehIDYGJH29h7xkxESZof0ckY2i29Id/+E+EmF2CIg7fIGSd0WqX45Q9xkgrxcfkLyLiKWgfn29ju9mBBbFYg/nCHN9RKJmw5xVYEY75AcI9KuHhFfjxA3qZDN4hviygIxxiCuHiGWgfnJb7+zLzXPSN52iBtXiBtX9FJCTPCIn0wRU9ZIfLpDdi8vyOT9B/bF9QOSug6xDMw3i8/sqy7esc/lRC8mxI7G9HJGmqslYpxDivkRUpzMkfh0h+ScETeuERtKxDIwH44O6OWMrP/+C3FlQMqzUyTFDdJcLxHjHWK8Q4x3SHf3HYlth4RZjeQYke7ukV7OiGVgfvvwAzHBIX5cIsXJCbK+/IIYaxB/MEbcqEK2j8+IH9eIP3zFvm61QHw9QcrXb9lnGZgvz07pGYukboOkXYfUH/9A8vYFSV1DLyakOj+nlyLSLr8gtgyILUskbhqkXX1CwsEEsQzMbxbXiHEWCbMp+5rFZ3qGXnF8hOSckWZxRc8axFiLmPEIab/ds89PR4gJAbEMzNsy0Mv0muU9YqxBxu9+RYwvkJfLf5G0i0hxcoD4ukbi5gUxziKTDx/Zt/txi7SrB8QyMB8Op/RSRqrzC3rWI7lbI3HzjITjKZLaLdLdP9HLGXHjEWLLEdLdfKVnDBKOjpHJ+1eIZWDejQ+QnDOyfVghabdDipM5ktoWMc4j4XCElG/eIrn9ibQ3t/TME+LqEWJDQNrVCsndDrEMzK//uURs4ZHqzWtkt35GmsU1YgqPlKeHiHEF0t18RdI2ImE2RWw1QpqrJT1rkOr1GT1rEcvA/gMNaTuIfrLVZAAAAABJRU5ErkJggg==",
    //Green Wool
    "Green%20Wool-BxBB7f-3.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADKElEQVR4AcXBaW7bVhiG0ecOpKiJsmVnQFIEadG0K+v6uqEGKNzAsWVrMCXZFaXL276f/ygr4Dnujz/fZ/4XAuZ4xDiPGVWY0dAhq01GnMNMxxjvHbJYZiQEzHTMD7Z7TNdhPD2LwyGmiJiri5pzu+cdcjplpCgwOWM2W0xKGRmUmBAwqw0mBkxZYmLEeHoWJyOPeOeQb3cNEjxmflEi3iXkeErIocXMZw4pC48cjolzb+YlMigrZNNskdRlxNOzuHvukLbFzKYOKaJHHlYtkjOmiJj5LCCLZUKKIiGXdeDcummRtm2RTx9qZP+yRzw9i0XEdB1m/ZSRqkpIPXFIzpj7x4w8bRNSDTBFxDysEnI8Yd5eOWRUYb7eNEhKGE/P4nqD6TKmLDD1OCCLZUIOLaYsMCFgug6zfsIMK0w1wNw/ZqQsMM5hhhXG07P46+eac9v9DjmeOqQaYKoBpsuYGDCjoUcmowmy2jTIywHz5XPNuU2zRY6njHh6Fm9uG859+lBzLuct0nUZqQYByby6f0zIct0gF7VDLmuPrDYNknk1rCJSFBnx9CzWE4dkMvLX3w1SFJjreUAOh4QslgkJARM8JgTMpslIe0zIdIxJHWbzdEIyrzw9i0/bjMSIGQwwlzOPfPueEOcw4xFmUGJ2e8ywwlxd1Jz7vmiQ0RDz8V3NOU/P4vU8IM45pG0Tcjpl5PdfauT5ZY+0xw7puoy8vY5I13XIt7sGKQtMWWIOB8zXmwYZjzCensW7h4QEj5mM+cHNbYM4h5lNHZJ5dfdwQrzDOIcJFWa5xuSMGQ0xRcR4ehbLApMzZrnGOIf5+D4gMQTkn+8tkhJmNsWMhg7595AR7zG//VxzbrlpkNUG4+lZnIwxucO8uy6RQVkh+5c98vLvEaknmPaIedpics5IVWEGRUBuFw3ieDWbBuTL5zHi6VkcVSWSc0bWTYuk1CKXdUDaY0ZCwExLh/z0forsnnfIct3xKiGjISZGzHKTkLvHBvH0LN7ctkgRMW+uAvL8kpC7x4QUEXN1EZAQAnK7aJDTCTMdYwaDgNw/JsQ7zPXcI945xNOz/wAihiyMGbzmUwAAAABJRU5ErkJggg==",
    //Dark Green Wool
    "Dark%20Green%20Yellow-JXOxOu57.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADRUlEQVR4AcXBS3ITVwCG0e8++i3ZBmwPoIryLCR7ySay6xQTCqgUxpZttaWW1H0fyd9koB30OebPv+4y/3E+IWF0iDHMynZEyjYg+6cGMSYj9XpEjM1I/7NDnE9IvTpx7rirkBQNYlmYr9oJsT4hN3cT54ZtQmIwiCsi54aXGknRIEUVEOsTsntqEesTUlQBKeqEWBbmqy4gxmTk8WuFGJuR7k1EjMlILCMSRod0bw+ILxISRsu59fUJqVqHvG4ykqJBLAvzp71HwuiQ5uKEOJ+R3aZCcjKIKyLSXZ2Q/qFFXBGR7urEueGlQPqfDrm5m5Chj4hlYd76hNhokP1zg5TNhNTrkVlmtr1fIYdtgxTNhPgiIq+PDRInh6xv90jRBOTH5xaJwSKWhfn9c4PkZBBfRqReTUj/0CLh5BFXBsT5hKRokf1zi5TtiBTNhPT3K8SXgXNlOyGWhfn3vx04t39JSAwGKeoJKeoJyckgziekbCPSXlqkf2A2Hjzy/tPAuddNRuJkEcvC/MOXgnM3dxPnXjcRyckgRRWRzC/9fYfsNglpr45Id3VC+geH5MysbBLiioRYFubr9cgsM/vn7xbxZURW7w5IODmkf2gR6xJifUKsS8jwUiNh9Ei9PiIpWmR4qZllg1gW5g99hViXkKIOSHd1Qp6/XzAzGam6ESmqgBx3FVJ0Abm85X8jsvnukKqdkOuPgXOWhfnVuwNiDLMwWiQGg3z4Y48c+oiEySI5GeTidkByMsjj1xLxRUR8GZHp5JAfn0uk6kbEsjDf33eIsRmpVyfOPXwp+KVAmssTs8xs+6NDjM2IsRkxdUB2m5ZZZlZ2E2J9QiwL866InNttOmYmI28+vCLWMXv+vkJStEhzeUDKNiDh6BBrM/Lh94Fz25/M9k8tYlmYr1cjkrNBLm6PSNU6ZOiZTUeLNBdHJEwOOWwbJOcjUtYB8WVCNt9KZoZZezEil58GxLIwXzSJWWY2vBTI66NFuquIxNEixmWkrkbk+mNAhm1CdpuamWFWNhPifEJ2TzWyvXeIZWH+6dsKcUVC1jcDMg4e2d53iCsisnp7RKxntvnmkBQLpF6PiK8i0t93iLEZWV8fEGMyYlnYvz57V00fgQ0gAAAAAElFTkSuQmCC",
    //Light Blue Wool
    "Light%20Blue%20Wool-DPIvWHbp.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADl0lEQVR4AcXBWVNbZQDH4d95z3vWrIQECATp4NKx45X2Qj+rH8lx7XTaWqqtBJrEEBJIs5xV/7nKNzjP43zz468l//Nii2wXCWKsg9SPaki9GSKT9/eI4xqkfVJHXNdBhn9MEC+2SOuswb7FzSOSbQvEUDHbOIoRL7DI+ZMu+7ZphqRZhgQNHymLErn7MEfSdY5EhxHihS4yfnWHeJFFok6I1HoWMVTMNlsxYoyD3A5niOsZpHfUQoxxkG2cIdtlghxdHiCB7yGbbcq+/lkHcRx2lusNkmUFYqiYfViskM0yQTonTcT3XGR0c48UeYn4sYf0+i3k5mqKBA0f6R432Te9e0A2ywQ5f9JFkixHDBWzXmCRPCuQfz/cI7XDCGn36khZsnP9+wiZvr1H6scx4oUWuf17hiSPCXL2rIfUGiHy7sUtkq4yxFAxO3k7Q/KkQKJOgLQPasjN1RRZ3W2QsB0gXmyRfJsjk9czpHFaQ2q9CLl+MUbCdog4xkEa/RpiqJj96tsB+zZJiiRpjsSdCIk7EVLkBWJ9F2k0IiR4apHFco2sHjbI0+fn7FuuN8h2myGGitnr91P2nT/psq8sCyTPSySOfKQs2Rm+mSBuYJHuoIV0j5vIYrlGyrJE6nGI+J6HGCpmD47rSFmy8+cvQyRsBcjJRQdZ5wlyczVFbGgRG1rEBi4yHS6QzXyDHFy0kDzNkelfc6QsSsRQMTu7fUS8yCK1boR0+y3k6qchYoyDtM4bSFj3kcXHJRIf1ZD2IGbfeDxH6u0I6Z8esM9QMXty0UGM4yCbJEHSLEOe/XCBpHmObJMUyfMSGXzRQ/KiQG6HM8SPPSSIfWT9KUEm72ZIs19HDBWz16/GiOu7SKtfZ9/1eIo4joN0ThpIWRbIP6/HiLEGMdYgcStEPr6csq95WkO8wCKGitmgGSBlWSIfX04RYxzk8rszxLoGeffbLZKuM6T75QFSb4bI6tMWcV2DfP39Z+ybP66Q8Zs7xFAx2+rVkKIokcFFF3EcdpIsR1abLXJw0USSVYpMr+6R8rKFxI0QCQMPGY3miOOw0+k2kKfPzxFDxWwtCpCyZGd694BkSY50j5vIZp0i1nORqBsgp4MOsk0zZPThHnEcdmqHEeL7FhkP50iyTBBDxezbn2+QoOEhp593kcflGrl+PUH8uo8cD9qINS4yGs2RdJMh7ZM6EoU+MnwzQYw1SP/yEDHGQQwV+w+H0kf6cMcSLQAAAABJRU5ErkJggg==",
    //Blue Wool
    "Blue%20Wool-Di6Ye3jR.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOklEQVR4AcXBWY7bRhhG0Vt/VZGU1OzBjQB2DBtxNhAga80CY8RDdwBJLQ6iJA6VfNILd8Bz3B9//pX4n5lHxnFAnHNIjDkSswLp2gpxziFZvkacGdLWe8TMkCxfM3c5H5GUJsRYWMhigZj3SP78zNxQ1cg0joj3AUkk5HRqkDSNSAgRcWZId6wQM4/4EBEzjxgLC7FYIc45pHn5gZgzpCgfEOccMg0BGcYeWa3vER8CMvY9c+uHd4itCuSyf0PSNCLGwkJ/6pBh7JFidYeY98ix2nOVEmI+IKvNPdJWe8T7gBSbkrlzXSHD2xYpP3xEhrpBjIUF8x6xNCFdWyEx5khebJhrqh1yOrVIDBliPiDH+g0ZxwHZlE9IIEcO374i0zQhxsJCd6yRlCbE+4hkqzXSVntkGHvE+4CYeSRNE9J1NRJjjoSYIU29Q4KPXDmHxJgjxsLC46ffmBsOFTKNIxJihoSYISklxMwjMS+QcF8i5+0OGfoz8vTpC3OX/RsyDT1iLCzUP78zV374yFzaJyRNExKyDEnctNUOseaAFOsSKbISOW933CQk5AViISDGwkJebLhKCXn752/E+4CsykdkvFyQttojZoaYM8SZIadjjQxjj+T5GknThHRdw1VKiLGwcO4axMwjIWRIsSmRev8vNw7JsgLxIUMu5yOSxRzJn5+ZO76+IDErkM37D8wZCwur8hFxziFj3yPTOCJPn39HxrpBxmFA0jQhm4d3SJompHn5gXgfER8iMgwXpPv2FcmyFWIsLLSHLeKcIVm+Zq7++R1x3OSrO66cQ5rDFnE4xDmHWDTk2B6Yi7FAzHvEWFjwPiCJm+544MYh5dMviHmPVNtXZEoTUhQbJGYFMvQXxDlDnj7/ztx5u0WOxwoxFhayfI2klJDN4zNiqwIZ6gYZzmckLzbIOPbI+dRylRISYo74GJH29QVx3OTrO+Tp+QtiLCyEokBSSsi5rpDpsEeKTYmMQ4+YGRLiBrl7/ysyVDXSNQeuTlzFmCPmA9I1B2SsdoixsFBtXxCzgKzvn5Dh1CFNtUO8eSS7e0BcCEj7+oJM04hk+RrxWYa01Q5xOGRdPiLOOcRY2H/bAjuBta9HhQAAAABJRU5ErkJggg==",
    //Purple Wool
    "Purple%20Wool-CAqznkk1.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADdklEQVR4AcXB21LbVgCG0W+fJFky2EBKCtM0mdChuUppn6tP1UfKcJHThDBucIwPgG18lLTbn9z4DbSW+fvsn8j/gnHIut4iFoMUIUOKpIUMF/eINQbppAVijUX68wnirUM6ac6uh/UCqWKNWBrm2yFDgnXI+ckbdo1HN0hZVUjqAhKJyGQ5Q8pYI5kPiLcOuV08IME6JHMJ4q1DLA3z7bSFWGORz70PiDMWOSq6iDUWSasSWVUb5FneQRIfkHW5Yddp9xjJ9w6QwaCHVHWFWBrm5+slsi63yEGrjXjnkdv5BKljRBLrkaO8g/RnYyR1ATnM99k1nE6Q9WSAnL98g0xGfcTSMB+sQypbI8PFA1KEDOmkbX6IyLfZGJms50juUyRxHhnMJ8imKpGT9hGShwy5vLpEyrpCLA3zo+UUqWKNZC5B9rMC6c/GyKraIqkLSDAOKWOFDJdTpO0zJA8p8m0+QjIXEMMPRUgRS8P829dv2TUe3iBlVSK5T5Hcp0gdIxKcQ/IkQ46enSL979fIYrtGLl7/wa7BoIdsqxKxNMx/vH7PrvOXb9hVD3pIHWskCykSY0T6szEyfLxHjlr7yGG+j/S/XyMxRiRPMiQ4j1ga5jtZgUQi8u7LOyRxATkuusi63CD92Rjx1iHOOsRbi4yXU2RVbZFuUiBVrJHxaobEGBFLw/zdao4E65CWT5DDfB/5+jBALAbZS1pI5hPkYf2I5L6FnJ68YtfVv5+QIsmQsxfn7LI0zB8XXcQag6zLLVJWFfLX2QVyN/6ObMotUscaOd07QqpYI597H5DUBSR1AVltN8jl1SWyl7QQS8P8zWyMWGOQTlqw6+P1e54Ynhxke0gkIt+mI8QYg1hjkdxbZLC4Z1c7ZEiwDrE0zCfO8yTyZLC4RywG+bVzjHjnka93faSMNXKYtpEiaSGrco1Ya5E/zy7YddP/itwuHxBLw/x+miMxRuSXw+dIvneATEZ9ZLlZIQdZG1lXW2SyniORiLRCiqQ+Qb70PiHG8KTb2kMuTl4hlob5PGkhMUZkOJ0g5f0QOcz3kU21RZyxSCctkN9e/I6MRzfI8PGeHwzSDhninUOGj/fIzXSEWBrmr+76SLAO+bl9iCw2K+RmOkKC88hPRRdJkxT50vuElHWFdNICSX2C9GdjxBiDPG8fINZYxNKw/wA2TUPRA6C8MgAAAABJRU5ErkJggg==",
    //Pink Wool
    "Pink%20Yellow-Coz0ntod.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADqklEQVR4AcXB61IbZQDH4d++eTe7OW1CuhyaIFhpbetY6zg4OuNXpzOO1+PVeCuO4/i5pTAWh0OgFgKlwECaEBKyza7+X7/QK9jn8Y5++TXjP0GpiFwNrhFrC0h9toF4cR3p7xwihYJBKq0Yxy8gx+t7SBgWkeZizG0X3XMkST4ghpzZaL6OeGGAhKuP+EhvgDO+QcrVEpJlGdL75wS5GU+Q+kwVKYZF5HCriwShj0SNKuKXioghZ9aba+L4Fkk2dpGCbxHzcAnHt4i9HiPJYIQ0HrRxahWc91fc9smTFRxjcE7OcSYfEEPObHZ6gdz0R0i4NIdTKSHJq30knaZIsRwi/v1FpL/RQcrVEmJX2tyWdQ6Rm/4ICVcf4QyGiCFn1gsDxE+mSL9zhNTiCPHbszhpihyv7SLp3jHSnK0jthwgw1f7yPXVGJl9uoKEzTpy8cdLZDyeIIac2dOdLpIkUyRqVBCvPYf0NzpI//IKqUUVJCgVkckkQbrbXSSen0EacYScrO0itXoZMQWD3JmfQQw5s3M/rvKRyz7OcITUmhFSa0ZIOp0ihcBHwriBRI0azuE75MPlAFl49i0fOTnHuR4jhpzZ8fMtbgtXH3Gbl6Y4yRQpNCOcNEV66x3EL1qkcu8uYlfaOIfvcLIMJ27gVEqIIWc2XIxx0gw5/e05Uo3KSPnxMk7vCulvdJAgLCLFwEf8wEeGr98ig/fXyPzSHDKdJEhv7xjJ0gwx5MxeH5wixbCI1O9ESHDvLtL98y/EFDxkrnUHsVEF6R+fI+WFJuIvLSAV/pf+/RqxcR2Jv7rPbYac2fLjZZxCAbH9K5zxDbL48/c4wxHOYIiTTJHo6wc4kwRJNnYRvxIiplpCsv41crnzEplpNRFDzuzFix3EFi0StWJuGz/fQjzjIcHSPE6aIb0X24gpGMTaAuLP1JCjzTc4WYbEd5uIFwaIIWe2EpWRLM2Q7uYbxBQ8pPXDlzjlEDn7Yx25GU+Q9koL8eI6Tm+AYwtI+6fv+MjBCXKydYgYcmaDhSbONEUWv/kcxxicwRDn7BKZXZ5DkuEYOdp7i7TSFDGNKk69ikw39xHP8xCzvIAsPFtADDmzzDdxpimSdQ6R6ThB7Eob52qEU/QRP6ogi08f4PQGyHD7APG6Z0g5jnDCALnZPkBGwzFiyJl99/saUqqESPTkM8SeXSK9tR2kVAmR4OESTilAppv7SDKaIJVWjNOoIr31DmIKBom++BQJfIsYcvYvgKgtIt2wGd8AAAAASUVORK5CYII=",
    //Black Wool
    "Black%20Wool-BTku-WUI.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADJklEQVR4AcXBaVYbRwCF0a/GHoRkG4HPAdv7X1kcYpBQz4C6q5IX/vQO+l5zc7jN/MdZh8zzjBhjkKKISBEj0vUDYoxBqqpErDHIpWkR6yxSlyVr49sbklJGLBvzZSwQ5yxyuL9jbRxHJKWEeO+QzKdhGJElJSSEgFhnkbYfEOcsEnxAXLSIZWO+KCJijEGeTyfEGoN82R+Q63xFvPfIdZ6R/c0Occ4h8zyzdvv1K+KcQ/q+R1JKiGVj/v39A7nOM1LXFeKsRV7bBskpI9475KaukabtEO8dsqtr1tq2Q67zjHy/v0OmaUIsG/POWSRli/T9gBQxInVZIplPl0uDDOOExBAQ7xzSdj0yLwvy9bBHYgzI76cnJC0JsWzMd8OApJSR4D1SlgXStB1ynWfEe4c465CUEtINI1LEiMQYkNemRYL3iMEgRRERy8b8j4cH1sZxRJaUkBgDEmNAcs6IsxaJMSJ1XSNt1yEfHx/Iz8cH1vq+R+ZlQSwb83+eX1j7fn/HWp8zknJGgvesXZoW6foB2e1qZFfXSNt1/C9nJISAOOcQy8Z8XZVIzhn56++/Ee88ctjfIGmekabtEGstYq1FrLPIMIzIdZ6RuiqRlBLSDyOS+WTZmB/GCXHOIjEEZFfXyMv5FTF8KssCCSEg0/SGFCEgh+OBtdP5jBQxInfHI2uWjfnD/oa1ZVmQlBLy68cjMk0TsiwLknJGvhz2SM4ZeT6dkOAcErxHrvOM/H56QqqiRCwb869Ng1hjkaoqWfvz/MLarq4QkzNyaVrEGIMYYxAbAtJ0PWtlERHnLGLZmPfOs9Z2PWL4dLz9hgQfkH9eXpCUErKrK6SIEbler4gxBvn145G1tm2Rth8Qy8Z8VRZI5tPx9hvinEOmaULe3t+QXVUi12VBhnFCcs5IDAHx3iOn85m1uqqQn48PiGVjviorZEkL0rYdsqQF2dU1Ms8zYq1FqhCQ++MRGccR6fqBtaKIiLMW6foBuTQtYtmYf3p+RrxzyJfDHnn/+EAuTYs455D9zQ6JMSKn8xlZloRUVYkE75FL0yLGGOSwv0GMMYhlY/8C3GY9F49DOZUAAAAASUVORK5CYII=",
    //Gray Wool
    "Gray%20Wool-9bQn0h_P.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADEUlEQVR4AcXBSXbjNhhG0YcfDUk1tuuUazEZZJD9byV2SqTYSAKI5JMmzAp4r/vjz78q/zEzpJSCOOeQmCISU0LmceTJOaRpW8Q5h4z9gJgZktqWrfuyILVWxNhZiCkh5g05dR1bJWdkLQUxH3ipyDLNSF1XxMeAmBkyjyNiZogPATFviLGzkNoGcc4hY98jzhnSnY6Icw7xpSAlZ6Q7HhAfApJzZutwPiPOOeRxuyHruiLGzsJ9uSElZ6Q5dIj3HpmGAam1It57pDsekbHvEfMB6Y4HtpZxQkrOyOnjHSk5I8bOgnlDajVkGUckxIQ0bYtUXsZLjyzzgsQYEO89Mg4DspaCHM9nJKaI9F/fyLquiLGzsIwTUmtFfAhI07XI2PdIzgXx3iNmhtS6IvM0ITFGJMSIXPsB8cHz5BwSU0KMnYX3z59s5ccDKaUgIUYkxIjUWhEzj8QmIT4E5L4syOP+QD4+f7L1uN2QUgpi7Cxcf1/YOn288z+1IrVWJMSI1FqRsR8QZw5pDwekOx6Q+7IgtVYkpoSY94ixs9B0LVJ5ufz9hfjgke50QkrOyNj3iDNDzBzizJBlmpCSC9K0DbKuFVmmmZeKGDsLt3lGnHkkxIi0xwMy/PObrdg0SIgBuS8LEmNEmq5jaxquSGwScnw7s2XsLHSnE+KcQ0rOyFoK8vHrE1lLQUrOSK0VOb69IbVWZOx7xPuA+OCR8ngg/XVEYtMgxs7CeOkRZw5JbcvW9feFJ8dT23VI5eV66RHneHLOIS46ZL6ObMWUEPOGGDsLFjxPlaf5OrJ1/vGBmPdI//2NrGtF2q5FYkpIfmTEmSEfvz7Zus0zMo8TYuwspLblqVbk+P6GOOeQkjOS73ekaTuklIzc5gWplaeQIhJCQKZh4MUh7aFDmq5DjJ2FmBJPtSLLOCHruiLd8YCUXBBnDkmxRY5vb0jJGZmuV+TOS0gJMe+R6XpF1rIixs5C//WNmDfkcD4jj/sduV56xLwhh9MJcWbINAzIWlakaVvEh4CM/YA4x9PhfEacc4ixs38BuRk7U6W3Zk0AAAAASUVORK5CYII=",
    //White Wool
    "White%20Wool-HXvjYMis.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADfklEQVR4AcXB6XLTZgCG0UefPm2W5B07cVpoC6Udpr3/W6HMkATiJbITAiSxZGtrX/rHd6BznA9X1y3/8T2L5MUBMcYggzRB0iRB1tkWcY1BxsMB4hoXuV6tEM9aZDIacur+4StS1zVi6JgdpAniez7ycpFw6liWSFlWSBQESNu2SHZ3j1RVhcRRhHjWIqvbDPE9D+lFIeJ5HmLomB2kKWIcB1ndZojrush8OkGM4yBhGCB5XiCL2QwJfA8pjkdOLeYzxHEc5HmfI1VdI4aO2W+Pj0heFMiL8RjxrEXW2RZpmgYJAh+ZTyfIp/UGiYIAmU3GnLp7eEDyokBeLhZIWVWIoWPW93ykqmtkvd0h/SRGxqMhP7QtcnmzRLK7eySNYyQIfGR5myHF4YC8+ukCSeIY+XB1jZRVhRg6ZjfbLVLVNdKLQmTU7yOf1htkn+dIFIaI71mkrGpknW2RQZogaRwjVzdLpBeGiOM4SD9JEEPH7J+vf+PU4XhEyqpC0riHpHEPqZsG8T0PSeMY8T0P+f70hDw975F3b15z6nmfI4fyiBg6Zj+v15x6uVhwqmlapG5qpBeGSMv/rpcrxLMWmU8nyGwyRr4/PSFtyw9xL0J830MMHbOT4QhpaZH3Hy+RMAiQi7M5khc18mm9QXxrEc9axLMWye7ukX1RINPREKmqGrnd7ZC2bRFDx+zuyxfE9zwk7vWQ+XSCvP94iRhjkFG/j/SiCLn/+hUZxTEySBNO3e7ukH6aIIv5jFOGjtmLszniOA5yOByRsqyQv/94i1RVhRyOJVI3NfLqYoE0TYOsbjMkDAMkCkNkn+fIOtsio0EfMXTMXt0sEdd1kclwyKnP6zXi4CDTyRhpaZGrmyVijEFcY5DEjZGbzYZTgzRFfM9HDB2zURAgLS1ys9kgxhjk7a+/INZ1kX8ur5CyqpD5dIKkSYLs8xxxXYP89fZ3Tn17fEJWWYYYOmZHwwHSNA3y8/k54jgOUlYVss8L5MVkjBTFAcnu7pGmaZEk7iGh7yOb3Q5xcJDpaIi8e/MaMXTMxlGEtG2L3D08IGVZIbPJGCmOB8S6FhkPQ+TibI4cyxJZZ1tO9dME8T0P2Wx3SHE8IoaO2fcfLxHf95GXi3Pk8fkZuVqukND3kfPZC8R1XWSz2yFlWSLj4QCJwhC5Xq4QYwzy8/kZYhwHMXTsX4c+RVKBCJ+cAAAAAElFTkSuQmCC",
    //Brown Wool
    "Brown%20Wool-C-0szkTH.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADQElEQVR4AcXBWVbjRgCG0a8GlQZbGNMEeMg56SQbyW6y7qRfaGOwjeRJKqmS37xoB7rX/P3Xn4n/eWuQLo6INdyUeYYs8oC8NyfEGIPUZY5Ya5DNoUW8tUhd5kw15ysyjAmxzMxXeYZkziIvVcHUtY9IHEYk846pw/GMxDEhufeIdxZ5b06IdxbJvUPKYBHLzPyiCIg1BtnsW8QagzzUFWKNQXrvkC4OyLqukOAd0vWRqV9WC8QYgxwvHTKOI2KZmT9eOqTrI7JaFIh3Dtl+HpExJSRzFlkvS2Szb5HMO2S9LJnatWek6yPy8nCH9HFALDPzmbPIOFrkozkjZZ4hd2WOJBLyum+Rw+mKlMEjwTvk7XBE+mFAnldLpAoZ8uNtj8RxRCwz8x/tGRnHhITMIXWZI5t9i1zjgATvEG8NMowJ+WjPSBU8UoYMed23SPAOMXypQoZYZuZ/e1ozde0iEocBKYJHiuCRlBLinUPKPEPyzCPN6Yqcux75/rxm6njpkD4OiGVm/vXjk6mXhzumxsTNOCakCJ6pn7sGsdYi62WBrJcl0pyufElIGTIkeIdYZubrquAmJeSfzQ4J3iGPdwvk0kVks28R5yzinEWctciuvSBdHJC6DMgwJmTXXpBEQiwz85+nC+KsRYrMI/fLEvmxPSDGcLPIA1JkHmnOV2RZeKSuCqa2hyOyyDPk6X7JlGVm/vFugRi+XOOAxGFE/nh5QPo4IF0ckHFMyPP9EhlSQjb7FgneIXnmkEsfkY/2jCyKgFhm5l93DWKNQeoyZ+r145MbY5D7quDGJOR11yDGGMRagzjrke3niakqz5DMWcQyM595x01KyLY5IcZw8+u3FeKsRX5s98gwJmRV5cgiD8ilj4g1Bvn95YGp5nRB3pszYpmZr4uAjImb53WNGGOQPg7IueuRVVUgXRyQw+mKpMRNGTwSMo9sDy1fDLJaFMj35wKxzMyXeUASCdm1ZyQOI7JelkgfB8RZg9RlQJ7ul8i1j8j75wkx5oqUIUMyZ5H35oTEOCCWmfl/3/ZI5izydL9EjpcO+blrEO8d8q2uEO8ssj20SBxGpC5zpAge+blrEGMM8rhaINYYxDKz/wCYvjitJs1DUgAAAABJRU5ErkJggg==",
    //Sand
    "Sand-CDRJE-p4.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC0ElEQVR4AcXBP4skVRTG4Z+11Zc+p1GKOzUazO4wYGCyqV/MjyibGQmbGAjL/AnarS0KmzlHroL6sgZXmLye54u/3v3wN/+6LGd67oZEJNIikWmuSEQi7oZEJNIikWmuSEQi7oZsy4pMc0UGdjZ+uv+AFDd627IixY3etqzINFfk4+MTcjgacnV7h1yWMzK9eYs8/fwjcqoVeeVfIQM7G6e5IhGJPK8rcjga0iKRq9s75LKckYhETrXSuyxnpEUi28N75HA0pEUil+WMDOxsjEjE3RD3G2RbVqS4IZ/uPyDTXJFtWZFprvS2ZUWmuSIRSa+40RvY2dgi6U1v3iIlEmmRyDRXJCKRaa5IRCLuhhQ3JCKRFokUN3ruhgzsbCxuSItEtof39Ka50nM3JCKRFknP3ZBtWZHiRq9F0hvY2dgikavbO+SynJEWibRI5Ovvvkd+++UnpLjRa5HI87oip1rptUikuCEtEhnY2VjckE/3H5DihhQ3pEUi28N7pLghLRIpbkiLRA5HQ1okUtyQq9s75LKc6Q3sbGyRSHFD3A2JSKS4Ie6GbMuK/PlH0pvmimzLihQ3xN2Qy3JGWiRS3JCBnY1Xt3fIZTkj27IixY1eRNI7HA0pbsjHxyfkVCvSInnJNFdkW1ZkYGfjZTkjz+uKnGpF3A2JSKRFIsUNcTckIpFTrYi70XteV+RwNHrTXJGBnY0tEjkcjV5EIu5Gr0XSczd627LSOxwNKW5Ii6Q3sLOR/xQ3pEUi01yRbVmRaa70WiTy5fwN8squkYnPIhJpkUiLRIob4m7IwM7Gaa5IRCLTXJGIRKa5Ih8fn5BTrcg0V+SynBH335GIRNyNl7RIegM7GyMScTckIhF3Q8rVt8g1/xeRiLshEYm4GxKRyPO6Itevb3jJwM5Gd0MiEnE3JCL57Fd6EYm4GxKRSIvkJdevb5CIRNwNiUhkYGf/ADdsR4HQrDgmAAAAAElFTkSuQmCC",
    //Gravel
    "Gravel-CsxfDXUA.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADI0lEQVR4AcXBsY7bRhSG0U8DFmxMbkFdUcUWwUp2ClkxkNZwY/gp3OYtgzSBWwewoCr0lgsOr1iIU7GSkl+7BWG45zmLPz5/vvK/7esH5NWrO+T7Y8PUdrdHPEbE6hppjgekrAwZekfKypiyukY8RmToHQnMLPv9/XvEY0TGYWCqrAzxGJE8XJHmeEDKypChdySdE1JWhuThiiRvkTxwY7s9EphZ5jEyNfSOpHNCVrZEOj8huS2RlS2RwmqmysqQPFyRwtZIczwgK1syFZhZxg9WtkTKynh2RcrKkM4d2e72iMfIlNU10hwPyHhZICtbIuNlgYwxIoGZZUPvyMqWyHhZIO8eHpCnvke6x4Ypj5GfaY4HJJ0TUlaGFLbmxltkvCyQwMyydE5IWRky9I48lSXyz9evSHFXICtb8uyKFLZGPEbkw8dPSNt1THmMPFsgQ+9IYGbZ9vUD0rkj6ZyYut9smHrz9jek7TqkOR6Q7W6PtF2HJG+R5t9HpLgrkLIypKwMCcwsK2yNFLZGkrfIaRgQq2skeYu0XYd4jEhZGZK8RTo/MXW/2TBldY0kb5HAzDJeJG+RwtbIGCPSHA9IWRkyxojk4cpU5ycknRNyv9kgVtfIerVC/v7rT6SsDAnMLPMYkTxw0xwPTH34+Alpuw7xGJHOT8h2t0fGywJZ2RIZL9x4jEhzPCArWyLjhZvAzLKhd24qQ1a2RApbI23XIclbZOhPSDonxGNErK4RjxEZekdWtuSmMqSwGmm+fEECM8vKypgqbI0kb5kqbI28efsO+fbtGzL0jgy9IytbclMZMl64sbpGPEakuCuQwMwyXgy9I3m4IuNlwdQYI+IxIlbXSB6uyK+/bJCnvke6xwbZ7vb8zHa3RwIzy/JwRXJbIp2fkHROyP1mg1hdIx4jkrxFxssCeep75DQMSFkZ4jEiQ+/IdrdHPEYkMLOMF4WtmSorQ/JwRZK3yNCfkIFnZWVM5eHKVOcnJJ0TkrxFrF4jgZllnZ+Q8bJA3j1skKe+R74/NkhZGVJWxlQershpGJA8cDNeFkzdbzZI546MlwUSmNl/aMRb9yZ1c1oAAAAASUVORK5CYII=",
    //Water
    "Water-C5teQ0Qb.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABmElEQVR4AcXBsWpVQRCA4T/LTpgTYS9Immhjah/PhxTsA2IhqZKAt8kU7uKAV88E4Sysh2sh+30X5cPPT/xmlTFvDIlyjrIQri4JpxMhJ0JismzW2CXKP/HGljnBGEtMlhGl442ON3aJslWKMmKVF97YSkyW+cMbQ6KsykLHKmexSk+UrcRkGW90RBkxa+wSZWXWGBJlJDFZ5m+8EUQJoqzKQrDKUCnKyio9b4wkJsulKCur9EQZscouq3RuDoQTyur2mnD3QEhMll9dEhYhpAvC4zNDZSFY5SyPz3S+/6CTmCy/u6ZzfySUhXB1Sbi9Jtwf6VgllIVglVAWOlYJVgk3B0Jisvzxc2OP8eLpyC5zOub0RAneWD0eCYnJMqIEb+wSJXhjSJStshCs0hNlKzFZxhtn8cYub2yZs0+UVWKyzP8iSvDGkDdWickyogRv7BLlHGWhYyjBG0GU4I1VYrKMN87ijY4oW2UhvH9D5+s3QnVlZZVOYrKMKKuyEKzSuTkQ3r6m8+WJYJVglXD3QLDKPlFWicl+AXtmhtfUSfjVAAAAAElFTkSuQmCC",
    //Lava
    "Lava-DRnG9fVe.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADiElEQVR4AcXByXJUVQDH4d8959yph3S6CSRASkHFcsHCKovyCVy69S18MX0KXWlhKS7UgsgUpgDpdEgPt+90jv4bF71ye78vOvr2WuBf5ckCCT4g2cEA6d8+RNqiQqpX50jxZIasTysk3nGIcRFinEHcMEHcKEd81SC2nyKGjrnIREg8zpDQeKSZl0h5PEXq8xViBykb1iD5tR6S3xgjNo+R+e8vkWZZI8nBDpJcHyPtRYEYOuZMniBu3Eeq1xdI21TI/P5bpJxWSNy3SLqXI82qQfxijYTWI23lEct7Jo2RS19/iczvPkAMHXP8p347R5p5ifiyRUITEGMjJBmnSDzOEbfjkcXRDGkKj8QDi9h+jOSfXUcW9x4ioWkRQ8dcuyyR9ckCMYlFfBPYiNiIRzGSfThB3G6ONGdLJNvvIcEHpDpbI8YZxC/XSPH3CWLyBDF0zIWq5f9Eho3s6gBxOzkSqhZZPz9HQhOQ3q09JNmrkOWjGXLx80Mk1C3iRjli6JjzdYsYZxDXjxGTWsRkDul9uo/YYQ9Z/fEMKV4WyPCTEZIeXkKqF2dIaDzb3ChH2kWJGDrmQuPZVr8rkeAD0rsyRLKb+4hf14jppUhkI2T1fM6GfYrUZwVSL1rEvFkiwS+RyLBh6JhzwxRJbo2Q8vkMWb9ZIcsHp4jJYsSkDqmnC7Y1hUfm98+R9FKC5AcZUk5LxPUdYnOHGDrm4stDxI56SH8yQMJvT5Hi5RJZ/vkacTsJsj5ZIfW8RUIISDqJkSvf3GHDe+T1d7+wLb26gxg65qLYIqFqkOTDy4jJYySyEdLWHqmOl0hTtIhJIyQyBkl2E8SNB0h9MkN85ZHQBiQ0HjF0zM3vvUAiZ5Do3jO2jb64jrjJAJn9cIS0tUfSSYIYFyHVrEJOv/8JqS9KpDpvkGTXIcXxOWLomItHKdIsa6RZNojNLJLsjxC3t4NEJkJsbBCbWcT1YyS/MUZWj86Q4qRkm80skh4MEEPH3Pir20jx4BVSPD5FbB4jF3cfI6HxSPGmRGxsEBMbttk8YVs6iZG28EjkDDK88zFi6JiLkhjpf36TbaafIvNfj5HqrERCE5AWj1SzEomcQXw1ReJRimQfTJDiyRRp5hVSvZgiho65dz/+hUTOsC2bDJDeR3uI618grl8g1bsaaUuPWN7zZYvkh7uI2+0j2WGLrI5OkeLxKWLo2D+zR2P4QCHaMQAAAABJRU5ErkJggg==",
    //Granite
    "Granite-76JEUDSt.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADOklEQVR4AcXBz2scZQDH4U+HgWV3Zy/v8looJHk31IPbCGtLG4KXKHoJeLAgXqT/kxc96NGLFDxZK9QfueiqJRJoXaGW3TdZEJqXGQ8zm2FOtV/t4aWsXud5Lnz5yYdPeSYcT5GybpBBt4P4UCDOGmJl3SCDbofYF788RG7e2EHsxhYSlifEelmGJLQsDcdTpKwb5Gi+RA52J4jjX+OdV5Cvvv8BcdYQ86FAro4uEQvLE8SHgtiwbpCElqU8dzRfIvtXLiPnVUXs5/vHyDDrI70sQ2aLU8RZg7z13vvIpx99jDhrEH9WIPtXLiN2YwtJaFnKfyjrBhl0O8ig20HsxhZy++tvkf0rl5FeliE/3r2DDLM+4kOBXNveIBaWJ0hCy1IfCuTa9gaxvFoRy6sVcvjbY2Jl3SB2soesHj9ABt0O/8eHAkloWeqsIeZDgYxHm6zjrEF8KJCj+RIZdKdIWTfEBt0OYid7yP17dxBnDZLQstSHAnHWIM4a1smrFTLodhBnDeKsQXwokPFok3Xm00NiPhRIQstSZw3iQ4E4a5DzqkLsZA9xVYWUdYPce/AHcnV0CfFnBTIebRKbLU4RZw3rJLQs5bnrV19D5o8eIYNuBwnHU8SHAhmPNpEP3hyyzmxxigyzPuKsIZZXK8RZgyS0LO1lGbL6KyfWyzJktjhFnDXIbHGKjEebrOOsQezGFhKWJ4gPBeKsQXpZhiS0LOUF23v7yHx6iPizAnHWEDuvKqSsG+TgjdeR2cPfkbA8QXwoEH9WEBtnGZLQspQXhOMpcjRfIge7E+S8qhBnDeJDgfy6+BPJqxXirGGdg90J8tl3PyHDrI8ktOzCO9d3nvLM26++jOTVChlmfSSvVoizhnV8KBBnDVLWDZJXK8RZQ6ysG+TdW7eQhJalN2/sIGXdIOPRJrG8WhEr6wY5mi8R95JByrpBLtohctEOkSchRwbdDjLodpBvbn+OJLQs5bnd6xPE+yWxYdZHfCgQf1YgB7sT5LyqkLJuWGfQ7SB2sofcv3cHcdYgCS1Le1mGeL9EzquK2PbePv+YHiLDrI88CTmSVyvEWYPMFqeIs4ZYOJ4S62UZktCyvwFeDS4YSNWN4AAAAABJRU5ErkJggg==",
    //Ice
    "Ice-Cbatxxx_.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACS0lEQVR4AcXBTYrcOhSA0U9GqG0hYQKFIVTPA73GbCeLSRbwoAlvEqoJmEBjpPhHGByu04NLMEXPfI75/CVvKE1tETE4tNYbtGHc0FIuiGleEd3FI1pvOPL9x29Excksb5raImJwaE9Xg3h5ZXfrF7QYHCIGh9Z6g3brF8Q0r2gVJ7NNbRExOLSnq0G8vLL7/uM3oqktIgaHaL1B3PoF7dYviGleuafiZDYGh9Z6g/j6vCCmeUV77B7Qbv2CmOYV0dSWe5raolWczPKPYdy4Zxg3RMoFMc0rWgyOIzE4jlSczPIm5YKIwSFicIgYHCLlgki5IKZ5ResuniMxOETrDdowboiKk9mUC/ekXDjSXTzv0XqDdusXtIqT2WleeY/H7gFtGDdEygURg0NrvUEbxg1tmldExcksb5raosXgEK03iGHc0PpfI6KpLSLlgnjsHhDXD+xeXtmlXBDTvKJVnMw2tUXE4DgyjBtaygVtmldEd/GITx/ZPf9kd+sXxDSvHKk4mX3sHhDDuKG13iCGcUOkXBDTvKJ1F494uhrEt/83RP9rRGtqi5jmFdHUFlFxMjuMG6L1Bm0YN0TKBTHNK1p38YjWG8R/Lxsi5cI9TW0RMThExcls6w3aMG6IlAtimle0praIlAt/OUTKBTHNK1pTW0QMjiMVJ7P8I+XCkaa2HEm5IGJwiBgcIuXCe1SczPLm1i8caWrLkRgcWusNYhg3tBgcWusN4vqBXcXJ7K1fuCcGxz2tN2gpF0QMDq31BvHpI7vnn+wqTvYH0vnYxiV+Ix0AAAAASUVORK5CYII=",
    //Quartz
    "Quartz-k2wKuIOF.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABDUlEQVR4AcXBsUoEMQBF0Wu4RYr9/0+0sLDaIsUDNQNCRmbjzCrknJf3t9cPrkhjJglHrDeOFBaTNDZWNmnMJOEM642pNLrCYvItjVESrlDZWJlKY1RYzCRcobJjZSqNI0noCovJDyozSdjJnU5llIQzCov5hSNJOENllIQzVLrCYvKAysbKTNqdGZWZwmJi5SlpdCpPsdIVFpNH0hgl4YjKjpUrCouZdqdTGSVhpLKx8idpjAqLab1xRHlOGl0SzigsJlelMUrCFdYbo8Ji8ps0RknoVDqVLgmdyo6VmcJiksZMEkYqO1Y65Zw0RoXFTMJIpUtCp7Jj5ZQ0ZpLQFRbzCxsrI+VfJGGmsNgnlLJoI5HRCPIAAAAASUVORK5CYII=",
    //Snow
    "Snow%20YP-BskBcy8I.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABk0lEQVR4AcXBMa4cORBEwZdEA13e3P+YbanoMHcLGKPwQbUkixH6tZb5X0i8SZsuJEralJB4kzY7g8OukPgbIVHSpjxr0YXETtqUkChpU0KiDA67+IO0KdPmXzxrUT5j0IVENzjs4oe0KdPmzWcMdp616NKmhMTO4LCLH6bNzi3x5lmL7pYoIfFmcNiVNm9uiRISJW12bokybd6kTQmJMjjs4iskSkiUtOmetSifMejSpoREFxI706YbHHaFRJc2JSTKsxZd2pSQKCFR0qaExM6zFt20KYPDLn4IiZI23WcMurQp06bcEjtps/MZgzI47OIrbcq06W6JLm3KtOmmTRcSZdp0t0Q3OOxKmxISZdp0IdGFRJk23S1RQqI8a1E+Y1DSpkubMjjsComSNuUzBm/S5s2zFl3alJDo0qYMDrv4ComdtOmmTXdLdLdEFxI7IVEGh138Rtp006a7JXZCoqTNzrMW3eCwK21KSHTTZueW2AmJLiS6Zy26W6IMDrv4SpvuMwYlbd6ExJtnLbpbohsc9h/KLcEQpWzKsQAAAABJRU5ErkJggg==",
    //Snow 2
    "Snow%20YN-BHso_EjS.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABk0lEQVR4AcXBMa4cORBEwZdEA13e3P+YbanoMHcLGKPwQbUkixH6tZb5X0i8SZsuJEralJB4kzY7g8OukPgbIVHSpjxr0YXETtqUkChpU0KiDA67+IO0KdPmXzxrUT5j0IVENzjs4oe0KdPmzWcMdp616NKmhMTO4LCLH6bNzi3x5lmL7pYoIfFmcNiVNm9uiRISJW12bokybd6kTQmJMjjs4iskSkiUtOmetSifMejSpoREFxI706YbHHaFRJc2JSTKsxZd2pSQKCFR0qaExM6zFt20KYPDLn4IiZI23WcMurQp06bcEjtps/MZgzI47OIrbcq06W6JLm3KtOmmTRcSZdp0t0Q3OOxKmxISZdp0IdGFRJk23S1RQqI8a1E+Y1DSpkubMjjsComSNuUzBm/S5s2zFl3alJDo0qYMDrv4ComdtOmmTXdLdLdEFxI7IVEGh138Rtp006a7JXZCoqTNzrMW3eCwK21KSHTTZueW2AmJLiS6Zy26W6IMDrv4SpvuMwYlbd6ExJtnLbpbohsc9h/KLcEQpWzKsQAAAABJRU5ErkJggg==",
    //Snow 3
    "Snow%20other-VY3-_Tyh.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABk0lEQVR4AcXBMa4cORBEwZdEA13e3P+YbanoMHcLGKPwQbUkixH6tZb5X0i8SZsuJEralJB4kzY7g8OukPgbIVHSpjxr0YXETtqUkChpU0KiDA67+IO0KdPmXzxrUT5j0IVENzjs4oe0KdPmzWcMdp616NKmhMTO4LCLH6bNzi3x5lmL7pYoIfFmcNiVNm9uiRISJW12bokybd6kTQmJMjjs4iskSkiUtOmetSifMejSpoREFxI706YbHHaFRJc2JSTKsxZd2pSQKCFR0qaExM6zFt20KYPDLn4IiZI23WcMurQp06bcEjtps/MZgzI47OIrbcq06W6JLm3KtOmmTRcSZdp0t0Q3OOxKmxISZdp0IdGFRJk23S1RQqI8a1E+Y1DSpkubMjjsComSNuUzBm/S5s2zFl3alJDo0qYMDrv4ComdtOmmTXdLdLdEFxI7IVEGh138Rtp006a7JXZCoqTNzrMW3eCwK21KSHTTZueW2AmJLiS6Zy26W6IMDrv4SpvuMwYlbd6ExJtnLbpbohsc9h/KLcEQpWzKsQAAAABJRU5ErkJggg==",
    //Basalt
    "Basalt-BXSMpy7m.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACdUlEQVR4AcXBQYvbRgCG4bdCIBhJiLEpYbVxcttLeuml/f+3/AET4tuumxGLcYbB8sCAoO03yUECsaUnPc8vv//2x9/8K0bHXAosxGlEHg9PiB8cEqcRsfsGMaZH6tYi95tHYnRICmT2oUcKNlbG6BBjepYcYkyPWH7wg2Pu8fDEW+rWMuevJ7LBIQUbK/11RFJwSNWxEKNDUmCh6lhVt5Y1MTrElA0SpxEp2FhpygapOjJjetY5JAUyY3qkbi1rdrsW+frlM5ICWdWRxStZwcbKqiMzpmeubi1zdWuRC0fED465w8cPzH398hlJgTcVbKz89d0n3rLbtcj5+YW5qiPzg0P84JD3T5+QFMjiNCJ23yD+OjJXsLHyfvNI3Vpkt2uZOz+/IN/OJ8TuGyQFsqojS4Hs8npE4jQyZ0yPpOCQqiMr2FjJT/ebRy6vRyQFsjiNrLEPPUuOucfDE1K3FvnrdGRNwcZK/oMpG6TqyIzpkbq1yP3mkRTI4jQiKTjEDw6pOrIUWCjYWBmjYy4FFqqOLAWyFBwSo0NSIIvTiJiyQaqOzJieJYekQFawsTIFMvvQI8aw4AeHxGlkITRI1ZG9f/cn/4e/npCCjZVVx0LdWtZU0SEpkMVpRCoa5H7zyOHjB+a+f78h95tHYnSI3TdIwcZKY3reUreWJUcWGub84FgTo0NSYKHqyAo2VtatZc1u1yLn5xfk2/nEnN03rPGDQ+xDj6TAKmN6pGBjJT/tdi1z5+cXxA+ONSmQxWlE7L5BUiCL0bGm6sjq1iIFGysvr0fk8kpmTI/4wSFxGllTdfwQGsRfR8TuG+aqjlX3m0cKNvYPidv1mDrgTgsAAAAASUVORK5CYII=",
    //Red Tile
    "Red%20Tile%20Top-Djpf11o2.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAv0lEQVR4AcXB0U3DQBRE0bvj9cdTCthyQsuUtQ3w/my0KEgRMtgoceac8v52XTESZuqZ9ExchFnlpmcytAiGnskZWgT3hJn4RYugRXA2YVbZ0SJ4RM/kL8KssqNnMsQ0sWUqhS2XeeYIYVY5qKwrw1oKw1QKzyDMKv80lcIzCTNhJsyEmTATZsKsctDHsvBlWTjiMs8cIcwqO1oEj2gRDD2TLcKs8iItgi3CrPJDz+RMLYJ7wky8WM+kZ/JNmH0CRN8ojto7+eUAAAAASUVORK5CYII=",
    //Red Bricks
    "Dark%20Red%20Bricks-B9LxD7qu.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACHElEQVR4AcXBsWrcSADH4V80WpAxg8RgCBjD9imvSJsiD3F5y3uKI+AyxVZuBMuCQczNMCg7WAyX+/tcTEAYbyDo+9799eXPf/nP1e0dv8P5dGTN/eGANGysvbq9Q/45fEO6wSE5eKQbHG+Rg+ctusFRa9hYy4tucEgOHukGh+TguUQ3OGrzOCKmt0gOnlrDxlpe5OCREhOS+V83OGo5eKTEhJjeIt3gkBw8UmJCTG+REhNrGjbW8qLEhEwsyE1MyBwTYnqLdINDMj+bx5Ga6S1SYkImFuR973g2z0jDxtrz6cga01tqJSZkjok1prdINzhkHkdkYkHe9w4pMVFr2Fg7jg+seYyei0TPs+hZ8xg9axo21n5/KtTSUqjZnaGWlsIauzNcwu4M0rCx9o9Pn7nE+XRE7g8H5OOHD8jV7R2/omFj7fT1b+R6v+c1OXjWXN3eIefTEcnBI93geE0OHmnYWHu93yM5eGrd4JAcPLUSE2ty8EiJiWeDQ+ZxRK73eyQHT61hY20OHukGRy0HT63EhEwsrCkxIaa3yDyOiOktkoOn1g0OadhYy4scPGtKTIjpLXITE/LIE3I+HamVmBDTW6QbHJKDR0pMyBwT0rCxtsREbWJBbtghEwvPokdu2LHG9JZaiQmZY0JMbxHTW6TEhDRsrJ1YWDOxsGZioTaOD7xJ9Kxp2Fj7/alwibQUao/zEzW7M1yiYWM/AGWc5thsv5F4AAAAAElFTkSuQmCC",
    //Red Planks
    "Red%20Oak%20Planks-DkhW_-R_.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACsElEQVR4AcXBwWrjRgDH4Z+kERskNNjBNl4CJTSHHnruK5T23sdsH6JP0GPpwSUETIxlLDFaCQeNVtu/ksMEzLLQg74v+uOXn0f+07kGyWyB5IuUb9HWPZIvUr5FW/fI4/kZiZmZ4U1mC6RzDdI5Jkf/Cbn5cIPYwSCZLQi1dY90riGU2YLQoa2Qmw83SMzMTOcaJLMFktmC0MYxyfIC6VyDHNqKqxImdjBI5xokswWyzZfI4/kZiZmZOfpPSFnVhNajIVRWNXKKeiafmazGlNAp6pHVmCKnqGdSl8hqTJFT3CMxMzP3tx+RHxcpstsfkYe7DV+z2x+Rh7sN17R1j3SuIeQSj/yUL5GYmZnONbwqkG2+RMqnM+ISj9jBIC7xyOXlguz2R8QOhlBmCySzBaGMV51rkJiZGZd4xLUVYgeDZLZg4hpCdjDIhVfbfMk1nWsIucTzTsIkZmbmr74itBpTJlWNrEeDlJFHTlHPJGbyd/0vodWYcs3aG6SMPHKKeiRmZubXxfdIvkgJtXWPdK5BNrxaf3fL/9HWPXJoKyRmZoY35dMZyWxBKLMFofLpjLjEc40dDOISj9jBIC7xhC4vFyRmZiZfpLwqkM41hFzieSfhHTsYrrGDQVziCW3zJXKgQmJmZn5//IfQakyR9WiYeCZl5JFT1HPNakyR9WiQMvJMBianqGdSV4RiZmZ+u/8B2e2PyDZfIvkiJdTWPaFDWyEPdxuu2e2PyMPdBmnrHskXKaGYmZny6YxYDKG27pFDWxGyg2GSMNntj8g2XxKyg0Haukc61yCd452YmRneuMQjrq0QOxhka5dI5xrEJR65vFyQ+9uPhDrXIC7xiGsrJglXxczM/Pm5RFZDSugU9UzqElmNKbL2htDj+RkpI4+coh5ZDSlyinq+JmZmXwCfVRWVWC6y9AAAAABJRU5ErkJggg==",
    //Orange Tile
    "Orange%20Tile%20Top-C4NT8lul.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVR4AcXBQU7DMBCG0S+/vLDxxhfqiTgmF5rNyN2QIEdFKiiQoIbOe9Pb62UhkAgm8455J4oIlrgx7wytFgbzzpkyE0OumXsiWOIHrRYG884ZriwMma9EsMSOVguPMO/8RgRL7DDvDC/TxJZZbMo5c4QIljhoXlhpYjWLU4hgiT+axalEMBFMBBPBRDARTARLHHRlYfXOIZljRLDEjlYLj2i1MJh3tohgiSdptbBFBEt8Y975T60W7olg4snMO+adTyLYBydzLXFSGEEXAAAAAElFTkSuQmCC",
    //Orange Bricks
    "Orange%20Bricks-BPsfllHG.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACJUlEQVR4AcXBwWrUQADH4V/STCgkoWgK66GHngXxqmefwWfx+QQPXqXoxctCt9DAztYyM7LMUEf/tYcRgnQFyfdV79+9zfzSnp7xP8TthjkfL74gNQtr2tMzJKw/IaYfkeQtYvqRx0je8himHynVLKzhgelHJHmLmH5EkrccwvQjpTitkaobkOQtpZqFNTxI3iI5OCTxm+lHSslbJAeHVN2AmH5EkrdIDg6pugHJwTGnZmEND3JwyBQTssIhMTik6gbE9COS+FOc1pSqbkBycMgUE/LsyVN++47ULKyJ2w1zqm6glINDYnDMqboBMf2IxGmNTDEhz548RXJwlGoW1lxefmXO9c2Og8Qd9252zLm+2TGnZmGN3/+gdLu/o3RyfETpdn/HnJPjIw5xcnyE1Cysefn6DYeI2w3y8eIL8urFc6Q9PeNf1Cys8Z8/IO3qnL9J3jKnPT1D4naDJG8R04/8TfIWqVlY067OkeQtJdOPSPKWUg6OOclbJAfHvX5E4rRG2tU5krylVLOwJnmLmH6klLyllINDppiYk4NDqm5A4rRGqm5AkreUTD8iNQtreJC8ZU4ODqm6AVnhkCsSErcbSjk4pOoGxPQjkrxFcnBIDA6pWViTg6M0xYSsWoNMMXEv7pBVa5hTdQOlHBwSg0OqbkCqbkBycEjNwpopJuZMMTFnionS5eVXHiXumFOzsMbvf3CI2/0dpatvidLJ8RGHqFnYT8+C7Z83XxyoAAAAAElFTkSuQmCC",
    //Orange Planks
    "Orange%20Oak%20Planks-yxMEhIWr.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACoUlEQVR4AcXBsYobRwDH4V92BzFaaxVlA8IeGVLcpUjhMnUgb5E2fV4pr5BnCCn9CDkVBmvuLLg93a5uNIhZkvylK8YgDkOK/b6v/vrt53/4Tww9Yqsamc4mfInD/ohMZxO+xGF/RG5u75CCkRme2apGYuiRGDj5+PiEVK8s0pgSsVVN7rA/IjH05GxVk/PdDqleWaRgZCaGHrFVjdiqJveWM1vVSAw94rsdL2lMicTQI7aqETdfIDe3d0jByMzHxydk86kjt7Iluc2nDvExkXPWkPMxIc4axMfEWYs4axAfE1IwMnP95jXybjZB1n6LXLkluXd8bu23yJVbcslhf0Ri6Mm1aUB+mi+QgpGZGHrOasTNF8jD9h5p04A0pkTaNCDhKSJrv0UaU5KzVY3YqibnOIuhRwpGZto0cNLtkMaUiK1qpAk9ucaUSODMzRdcEkNPrk0DlxSMzPy5eSTnrOGsQ1a2RDZxQHxM5N7vPpBz1nDJypbIJg6IjwkpGJn55YfvkOlsQu6wPyIx9Mjbrzn5Zvkt/8f1/oj4bocUjMzw7GF7j9iqJmermtzD9h5p08AljSmRNg1IY0qkTQO58BSRgpGZ6WzCWY3E0JNr08BLGlNySWNKpE0DOTdfIJ4dUjAy8/v7v8k5a5CVLclt4oD4mLjEWYOsbIls4kDOx8TJ5pFcwcjMrz9+j6z9FnHzBTKdTchd74/kfLdDrtySSyq/Ra7cEjnsj8h0NiFXMDLzsL1HGlOSO+yPiO925BpTklv7LeLmC3KNKZHD/ojE0CMx8JmCkRmetWngpNshjSkRN18gMfRImwYkPEXk+s1rcjH0SJsGTrodLykYmfnjQ4s4a8j5mDhrEWcNsrIluZvbO2QTB8THhDhrEB8TLykY2b8fjwoVCIJ67wAAAABJRU5ErkJggg==",
    //Yellow Tile
    "Yellow%20Tile%20Top-CurKVuQu.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAvUlEQVR4AcXBwUoDMQBF0ZtH6spFSP6xn+uHCAlZFKGOMGVAocjYpjLTd054fzvOGAkz1dapreMizCLfaussSk4sauvsoeTENWEm/lByouTE3oRZZFDJif+orXOLMIsM+jyfWRPCxJrDyysjhFlk0DxPLEI4sAhhYgvCLPKgECa2JMyEmTATZsJMmAmzyKDTxxeP6YwQZpE7Sk5sobbOGmEWeZKSE2uEWeSX2jp7KjlxTZiJJ6utU1vnhzC7AJqnKwqOj5gjAAAAAElFTkSuQmCC",
    //Yellow Bricks
    "Yellow%20Bricks-CaFnxVpF.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACBUlEQVR4AcXBMWsUWxzG4V/+55BimiFkWYiQXixuf4t7v5Qf0UKw01Yk4ARXlgnxCJ4i7ryr726KExjEFWSe5+zjm5d7flKs+RtCW+a8ev0OCxaWFWsOdu+xiB6TChbR8zukwhzxVERPK1hY5lFEj0kFi+gxqXCKiJ7W2W6DTdFhUqEVLCzzSCpYUsUmjiJ6WlLBkio2RYdF9JhUsKSKTdFhSZU5wcIyj5IqNowVu15xpIpN0WERPTbx1NlugyWOpuiwpIoNY8WerVe0goXl0JY5U3S0kioHqljiqSk6LKLH0m6DDWPFnq1XWFKlFSws337+wJxP25HTVI5G5nzajswJFpa/fvlO6+7+gdblxTmtu/sH5lxenHOKy4tzLFhYfv7if04R2mKvXr/D/vv3H0yx5k8EC8vp4S22z1f8ilQw8ZRijYW2mFSwiJ5fkQoWLCzv8xUmFVoRPSYVWkmVOVLBkiq2jx47222wfb7CpEIrWFiWChbR05IKraSKDWNlTlLFpuiwtNtgU3QcqNCK6LFgYZlHUmFOUsWm6LDrFQc3N9+w0JZWUsWm6LCIHpMKllQ5UMWCheWkSmsYK3a96rBhrBxV7HrVMWeKjlZS5UCVg+iwKTosqWLBwvIwVuYMY2XOMFZat58/8Hsqc4KF5a9fvnOKu/sHWjc332hdXpxzimBhPwCP0t1Qkz+lOAAAAABJRU5ErkJggg==",
    //Yellow Planks
    "Yellow%20Oak%20Planks-mWVJdoA7.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACuElEQVR4AcXBsWrjdgDH8a/+/XuQHGeRnKDBCILgSMLBbaVv0O1eotChY5c+QtcOhT5D6QN07nIPUHLhQBiEBzWxvES2NPhv6+5nZ/gHTDjooM8nePjwQ88XLmgR20fIyBq+xtbtkZE1fI2t2yN39yViGJjlme0jxAUt4nYcfPq4RM4vzpA0CRHbR/i2bo+4oMVn+wjfYrVCzi/OEMPArAtaxPYRYvsI35ubKWL7CHG0yGK14jVpEiIuaBHbR8gsjpG7+xIxDMx++rhEinKDL8/G+IpygxRlgy/PJviKskHybIIUZYMvzyZIUTaIYWD29jpD3r01yPxhiVxdTvG9e8sL84clcnU55ZSt2yMuaPFVdYe8//4GMQzMuqDlwEXILI6RbrdGqrpD0iREqrpDnh7XyJyjNAnxWSLE9hG+WRwhLmgRw8BsVXccdUiahIjtIyRNeCFNQuTpcY3M4piDnhdc0OKr6o5TDAOzf/5V4MuzCb48GyNFuUGKssH39z//4cuzCafk2Rgpyg1SlA1iGJj9+cdvkZE1+LZuj7igRd7cTJHwmzP+j9vrPbJYrRDDwCzPut0asX2Ez/YRvm63Rqq645Q0CZGq7pA0CZGq7vA9Pa4Rw8DsyBoOXIS4oMVX1R2vSZOQU9IkRKq6wzeLY2TBkWFg9tffP+DLswmSZ2N8RblBirLhlDybIHk2Ropyg68oG44KfIaB2V9++g6ZPyyRWRwjI2vw3V7v8S1WK+Tqcsop5xdL5OpyimzdHhlZg88wMNvt1kiahBz0HGzdHlmsVvjSJMQ3f1giszjGlyYhsnV7xAUt4na8YBiY5VlVdxx1SJqEyCyOERe0SFV3yNPjGrm9zvC5oEWquuOo4zWGgdnf/vgXybMJvqJs8OXZBMmzMb67+xIpyg1SlA2SZxOkKBteYxjYZ3CsAQlSClCwAAAAAElFTkSuQmCC",
    //Green Tile
    "Green%20Tile%20Top-CVyBLCi9.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBwUoDMQBF0etraBchZJe/9Dv8VrMLWdjFjEpAocjYmdJO3zkvb++vXxgJM7XaabXjIswCP1rtDLkkhlY7e8glcUmYiX/kksglsTdhFliRS+IerXauEWaBFa12hhgjS2YmlpzikS2EWWCj+XNmOOjAMDPxCMIscKOZiUcSZsJMmAkzYSbMhFlgo/PHmVuc4pEthFlgRS6Je+SSGFrtLBFmgSfJJbFEmAX+aLWzp1wSl4SZeLJWO612fgmzb7LPLR8WCR4lAAAAAElFTkSuQmCC",
    //Green Bricks
    "Light%20Green%20Bricks-C4Gv2d1H.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB80lEQVR4AcXBsWrbQADH4V8PIctckB1Q4jcI3Uq3Dnm2vkPfKXvI0iUlzdJBjkDWRUcuN7jtP/VwhSPEhXLf9+7Lt88/+W297/gfdmYg5/rqBjEUVq33HfLD3CGWFvE4xNLyFh7HW1haUobCKg4sLeJxiKVFPI5jWFpSI1ukpkE8jpShsIoDj0MigZSlJeVxSCQgNQ1iaRGPQyIBqWmQSCDHUFjFQSQgUz8jqw0vIgGpaRBLS87IllRNg0QCMvUzcrbpSBkKq3ZmIKemIRUJSCSQU9MglhYZ2SJTPyNnmw6JBFKGwqr7/o6ch37gODPywEDOQz+QYyisCmMk9TQ8k1p2C1JPwzM5y27BMZbdAjEUVn26uOQvF7xq935Arq9ukI+XH5D1vuNfGAqrvpuvyCnnvMbjyFnvO2RnBsTjEEvLazwOMRRWnXKOeBwpS4t4HKlIIMfjkEhALC0yskVOOUc8jpShsMrjEEtLyuNIRQIy9TM5kYDUNMjIFqlpEI8jZWkRQ2EVBx5HTiQgNQ2y2vBivH1EdmYgFQlITYNYWsTjkEhAIgExFFZFAqmpn5HV5gSZ+pk/ZmS1OSGnpiEVCUgkIDUNUtMgkYAYCqumfiZn6mdypn4mdd/f8TYzOYbCqjBGjvE0PJMabx9JLbsFxzAU9gtB27YZ5gmaiQAAAABJRU5ErkJggg==",
    //Green Planks
    "Green%20Oak%20Planks-DL226Hql.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrUlEQVR4AcXBP2rkVgDH8a/+FBLiaQbGMxZOt6jYxuymyAGSnCBnCSFXSLocIcdIk7Rpl7gJ5GFwMYM8tkHSQ0iFNUp+YxdvYDALKfT5BL/88/3Ef1w0IGZMkDwM+BztYULyMOBztIcJ2d3cIiEzi3llxgRx0YA4XrhPOyQuFkhaZIgZE3ztYUJcNOAzY4Jv//CExMUCCZlZ7KIBMWOCmDHhxMcrxIwJ4hiQ/cMTb0mLDHHRgJgxQTbrFbK7uUVCZha7Tztkaxt8ebnAt7UN4myNz5RLfM7WiCmXiLM1PlMuEWdrJGRm8dX1O+T9hwCx949IeXnBiQ+csPePSHl5wTntYUJcNODrqw55/92XSMjMYhcNHI0JslmvkG3QI33VIWmRIX3VIc9Vg1hepEWGz5AgZkzwmXWCuGhAQmYW91WH9HRIWmSIGROOCk6kRYa4qkE26xVHIydcNODrq45zQmYW3/36Fz5TLvHl5QJpbYM4W+Pb/naHz5RLzsnLBdLaBnG2RkJmFn/1w9dIHgb42sOEuGhAzMcr5Isp5f9orydk//CEhMws5tU26BEzJvjMmODbRj3SVx3npEWG9FWHpEWG9FWH77lqkJCZxXkYcDQmiIsGfH3V8Za0yDgnLTKkrzp8m/UK2fMiZGbx7z//gc+USyQvF/ha2yDO1pxjyiWSlwuktQ0+Z2vkjlMhM4u//fEbxN4/Ipv1CsnDAF97PeHbPzwh5eUF59jiESkvL5D2MCF5GOALmVm8DXokLTKORo7aw4TsH57wpUWGz94/Ipv1Cl9aZEg7ToiLBsRxKmRmMa/6qkN6OiQtMmSzXiEuGpC+6pDnqkGurt/hc9GA9FWH9HS8JWRm8d8//YmYconP2RqfKZdIXi7w7W5ukdY2iLM1Ysol4mzNW0Jm9i+TUQCaW85prAAAAABJRU5ErkJggg==",
    //Dark Green Tile
    "Dark%20Green%20Tile%20Top-CEyNhImX.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAw0lEQVR4AcXBQUpDMRiF0S+XVBs6yCCrcBsuwv1v4B9kFIqDJwGFIk/7Svt6z0nvH28LRsJMPQY9Bi7CLPOtx2CqrTD1GOyhtsIlYSb+UFuhtsLehFnmitoK9+gx+I8wy1zRYzC9vGbWpMSq4+nAFsIss1EiMS0sTCnxEMIsc6OUeChhJsyEmTATZsJMmGU2Op8/ucXxdGALYZa5orbCPWorTD0Ga4RZ5klqK6wRZplfegz2VFvhkjATT9Zj0GPwQ5h9AXb8JRtRBFjnAAAAAElFTkSuQmCC",
    //Dark Green Bricks
    "Dark%20Green%20Bricks-BvYKlHdO.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACIUlEQVR4AcXBsYrcRhzH8a9n5etGsgcVB1tscU1IniGNIeQZ8gJ5zJTpXAUbY3sLGQRbDLM78yeFV0iX/OCKKYS5NRh9Pi/++PP3R/63vz/wI4yngTXv331AHBtr9vcH5J+Pb5HQ9kgqEQltz3OkEnmO0PbUHBtreBLaHkklIqHtkVQitwhtT20Yj4j3HZJKpObYWMOTVCJilqmFtqeWSkTMMuJ9h4S2R1KJiFlGvO8Qs8wax8YanphlZJoXxCwjZhnxvkNC27NmGI/UvO8Qs4xM84KEV6+Rfy8RcWysGU8Da7zvqJllxCyzxvsOCW2PDOMRmeYFCa9eI2aZmmNjzecvn1iTLmdukS5nJF3OrEmXM2scG2vmr4/U5utCbXfnqM3XhTW7O8ctdncOcWysefPrb9xiPA3I+3cfkJ9/+QnZ3x/4Ho6NNX+//Qs57B/4llQia/b3B2Q8DUgqEQltz7ekEhHHxprD/gFJJVILbY+kEqmZZdakEhGzjIS2R4bxiBz2D0gqkZpjY00qEQltTy2VSM0sI9O8sMYsI953yDAeEe87JJVILbQ94thYw5NUImvMMuJ9h5hl5MqMjKeBmllGvO+Q0PZIKhExy4hZRhwba8wytWlekJc7h0zzgqTLGXm5c6zxvqNmlhGzjHjfId53iFlGHBtrpnlhzTQvrJnmhdrnL594jnQ5s8axsWb++sgt5utC7Woztd2d4xaOjf0HzFPzxkgnOxYAAAAASUVORK5CYII=",
    //Dark Green Planks
    "Dark%20Green%20Planks-BLt7OzbO.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXElEQVR4AcXBQYvjNgCG4deSiiegriDEOXTa68Ce+0N67E8fyLVND1YIKCMIXmK7/aw5yBCWhR78PM0ff/4+85+YE9L5gBxCy4+4pAE5hJYfcUkDcos9YtiY41PnAxJzQmJm0d4H5LFrkZGi84HaJQ1IzIla5wO1a04sdi1i2JiLOSGdD0jnA7VIQjofkJgTcs2JZyzFSBFzQjofkL0PyC32iGFjrr0PyEeO1GY7Iy3FR46In1h5GFbcxOJhWLiJxf0WkYdh8dPUIIaNuS/dETmEFjmde+Tt9cj3nM498vZ65JlLGpCYEzVL8bMPiGFjLuZEEZC9D8j7uUcsxUhhKdx9QE7nHhlZ63xAOh94JuaEGDbmLMU1J2Sk6HxAYk7URgpHsfeBZ2JO1CxrlsKwMbe7faP2MCw+ckRaOyPN2CBu4lOD3P+J1B6GxQtrs52RZmwQN7EwbMztfumQQ2ipXdKAxJyofX098n9c0oBcc0IMG3N8ej/3SOcDtc4Hau/nHrE8N1JYipHCsubuA2LYmDuEliIgMSdqljXL2shzI4Vlbe8DciUhho25v97/pvZiWMx2ptaMDeImnnoYFrOdkWZsqLmJxf0WkR2FYWPut6+/Iqdzj+x9QA6hpXZJA7VrTsjb65FnTuceeXs9Ipc0IIfQUjNszL2fe565pAG55kRtpLAUp3OP7H2gNlJc0oDEnJCYWTFszPHJUlxzQkaKzgck5oRYCncfkC/dkVrMCbEU15wQy3OGjTl/+4Y8DCu7icX9FpEXw2K2M7Vb7JFmbBA/sXgYFm7iuwwb+xckpenz3cZo+QAAAABJRU5ErkJggg==",
    //Blue Tile
    "Blue%20Tile%20Top-2p8ZuJJy.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwklEQVR4AcXBQUrEMACF4T+PMNBuAiF39E7eyZuEQDYunEWlRWGQaiMznfd94eX1bcFImKm3Sm8VF2EW+dJbZZVyYdVb5QwpF24JM/GLlAspF84mzCIHUi7co7fKX4RZ5EBvldXlMrFLgT3TPDNCmEVGLYFNWNgo8AjCLPJfCjySMBNmwkyYCTNhJswigz6u72yuDJnmmRHCLHIg5cI9Ui6seqvsEWaRJ0m5sEeYRX7orXKmlAu3hJl4st4qvVW+CbNPVDEnKBcHiHMAAAAASUVORK5CYII=",
    //Blue Bricks
    "Blue%20Bricks-BZGeLUKz.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACBElEQVR4AcXBsWobMRjA8X8PyeKCHQ2JIX6JDO3Uoa/Vx+nrpEuWdC0ZAukZnAzyXU58lqHtp3iQQYS4UO73+/D12/ff/LWcG/6HzbCn5u72BtUwMbOcG9TP54jyzqKCJJR3lvcIkngP7yylhokZDryzqCAJ5Z1FBUmcwjtLab1NqNaRBUmUGiZmOAiSUFE4SCjvLKUgCRWFrHVk3llUkISKQtY6sihUNUzMcBCFbOw7Xq1QURKqdWTeWV4lSuttotQ6sihkY9+hLi5XlBomZjbDnprWcSQKWZRETevIvLOo9Tahxr5DXVyuUFE40jAxc//4QM3zU8cpxp7smbrnp46ahomZ3ctAadcHSrOFp7TrAzWzhecUs4VHNUzMfPl4zSk2wx51d3uDuv70GbWcG/5Fw8TMj18RdXVueUuQRM1yblCbYY8KklDeWd4SJKEaJmauzi0qSKLknUUFSZSiUBUkoaKQeUe23ibU1blFBUmUGiZmgiSUd5ZSkEQpCtnYd9REIWsd2XqbUK0jC5IoeWdRDRMzHARJ1EQhax0HK9SwfkRthj2lKGStI/POooIkVBSyKAnVMDEThSNj36HOFivU2HeosSc7W6yoaR1HopBFSajWkbWOLApZw8TM2HfUjH1Hzdh3lO4fH3iPsaeqYWJm9zJwil0fKA3rR0qzhecUDRP7AxE72WB07XnVAAAAAElFTkSuQmCC",
    //Blue Planks
    "Blue%20Oak%20Planks-tCMz_DbO.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACt0lEQVR4AcXBvY7jVACG4dc/J5nIEoqTFGNvwSrKFCwNM/dAS8OFQMctUNJwA1wCJRWiRdqhT2Rts84Udk4UyfJmjizDN57ijBSNVqLw8wQ//PpXz3+sC5DU9Eg6O/M5bDtF0tmZz2HbKVJ9uEdCRhbzLDU9Yl2AWHeFdB/f82R+jURJjqSmx2fbKWJdgC81Pb7quOfJ/BoJGVlsXYCkpkdS0+Ozb+6Q1PSIdTypjnteEyU5Yl2ApKZHVvMMqT7cIyEji7uP75HyUOCbLNb4ykOBuHqHzyw3+Fy9Q8xyg7h6h5wYmOUGcfUOCRlZvHp7i6RfvUO2+wNyky146R2+7f6A3GQLLrHtFLEuwNc1JZLffY+EjCy2LmAwRVbzDClOAdI1JRIlOdI1JU+OD8iWQZTk+FLTI6npeWGeIdYFSMjI4q4pkYpBlORIanrEJjm+KMmR7viArOYZgx6fdQG+rim5JGRkcfP3b/jMcoO0DCaLNfJ4KBBX7/A12z/wmeWGSyaLNfJ4KBBX75CQkcVffvsTks7O+Gw7RawLkNmbO+TrLz7xf9j2FqmOeyRkZDHPitMVkpoeX2p6fMXpCumakkuiJEe6pkSiJEe6puSF4wMSMrI4nZ0ZTBHrAnxdU/KaKMm5JEpypGtKfKt5hlQMQkYW//P7L/jMcoNMFmt8j4cCcfWOS8xyg0wWa+TxUOBz9Q5peClkZPE33/2IbPcHZDXPkHR2xmfbW3zVcY/cZAsu2e6vkZtsgdh2iqSzM76QkcXF6QqJkpxBj9h2ilTHPb4oyfFt9wdkNc/wRUmO2LZHrAsQ667whYws5lnXlEjFIEpyZDXPEOsCpGtKnhwfkNXbW3zWBUjXlEjF60JGFp/+/Bkxyw0+V++QEwOz3CCTxRpf9eEeeTwUiKt3iFluEFfveE3IyP4Fi+P/UGPSIU4AAAAASUVORK5CYII=",
    //Light Blue Tile
    "Light%20Blue%20Tile%20Top-BTkqquh4.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAu0lEQVR4AcXBvWrDQBCF0U+XCRhktp1nzaumST0uF0yKFAoLCZigRDL+uedMr+9vC0bCTL2KXoWLMAu+9SqGlsnQq3iElsklYSb+0DJpmTyaMAs2tExu0av4jzALNvQqhjgeWSPWHeaZPYRZsNPLsjB8ThODuA9hFlxJ3JcwE2bCTJgJM2EmzIKdPs5nrnGYZ/YQZsGGlsktWiZDr2KNMAuepGWyRpgFv/QqHqllckmYiSfrdaLXiR/C7AuS3yeIdn6oswAAAABJRU5ErkJggg==",
    //Light Blue  Bricks
    "Light%20Blue%20Bricks-D4-t9o-y.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB+0lEQVR4AcXBvW7UQBSG4ffMuJjCKfJDELkCCgpquD5uLXUoKCgiRISM4uxmhTzFBDQ+8G1STGGhLBLy89iHTx+dP06J/A9bKkuuLi+RwMq6UyLylZ9IT0QyFemJPEem8hw9kVZgZR1PeiKSqUhPRDKVQ/REWhufkWSOZCqtwMo6nmQqUtzYs4r0RFqZihQ3JJkjPRHJVKS4IckcKW4sCays40lxQ6ZxYO/8AinMSDJHeiJ7VmltfOaRIckcKW7INA7Ii5evaAVW1m2pLEnmtIobUph5ZLSSOdITkY3PyDQOyIuXr5DiRiuwsu7L7TeW3N1+5xATj+5Ydnf7nSWBlXUPu4lWud/RSifHtMr9jiXp5JhDpJNjJLCy7v3rNxxiS0WuLi+Rt+/eIadE/kVgZd1n/4WcWeBvMpUlp0RkS0UyFemJ/E2mIoGVdWcWkEyl1RORTKVV3FiSqUhxQ3pjb+MzcmYByVRagZV1mYr0RFqZSqu4IdM4sKS4Ickc2fiMJHMkU2n1RCSwso4nmcqS4oYkc/bOL5Af1zfIlkqruCHJHOmJSKYixQ0pzEhgZV1xozWNA3J0foFM44BMPDo6v2BJMqdV3JDCjCRjL5kjxQ0JrKybxoEl0ziwZBoHWl9uv/EcE8sCK+sedhOHKPc7Wj+ub2ilk2MOEVjZb6mzxmhgVbU7AAAAAElFTkSuQmCC",
    //Light Blue Planks
    "Light%20Blue%20Planks-CnNRn9I_.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACwUlEQVR4AcXBMWvjdhzH4c/9LISwBzlgy3E0FAuMoRfuhnDLvYfu9y4OunS8rl3avXvfQdeuXY4sIYsR2GRQEssJsYYUIfDf7TfO8A+YcNBBz/Pm54vzHf+pzJDYOaTfqfkWm22E9Ds132KzjZDV5TlitCzgWewcUpkh1a6L1BdfETs+QcIkRWLn8G22EVKZ4Yudw7e+u0Hs+AQxWhZUZkjsHBI7xwvvPiCxc0jF3vruhteESYpUZkjsHDIcjJHV5TlitCyoL74i98scX28yxXe/zJF6MccXZTN89WKORNkMqRdzpGAvymZIvZgjRsuC0ekZ0n//FslXD8h0dMQL79/iy1cPyHR0xCGbbYRUZviaskCyHz4hRsuCyown2wgZDsbI1c6QpiyQMEmRpiwQd3uN5OyFSYovxiGxc7wwGCOVGWK0LGjKAlmzFyYpEjuHVEmKL0xSpL69RoaDMU+cw1eZ4WvKgkOMlgXrP37HF2Uz5J693mSKPC5zpF7M8d3/9Se+KJtxSG8yRR6XOVIv5ojRsuD7z1+QfqfGt9lGSGWGRO8+IN+9+Yf/Y3N6hqzvbhCjZQHPrnZdJHYOX+wcvivrIk1ZcEiYpEhTFkiYpEhTFvjc7TVitCzod2qebCOkMsPXlAWvCZOUQ8IkRZqywDccjJE1e0bLgr9//QVflM2Q3mSK73GZI/ViziFRNkN6kynyuMzx1Ys5suYlo2XBxx9/QvLVAzIcjJF+p8a3OT3Dt767QaajIw7Jj0+Q6egI2WwjpN+p8RktC652XSRMujxxDtlsI2R9d4MvTFJ8+eoBGQ7G+MIkRTZbh1RmSLXr4jNaFvCsKQtkzV6YpMhwMEYqM6QpC8TdXiOj0zN8lRnSlAWy5nVGy4Lity9IlM3w1Ys5UrAXZTOkN5niW12eI4/LHKkXcyTKZki9mPMao2X/Ann2/0DOxl+3AAAAAElFTkSuQmCC",
    //Purple Tile
    "Purple%20Tile%20Top-C2ru6Eb5.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAyUlEQVR4AcXBQUoDMQCF4T9vshC00EK2Idfxip7CM4Vss9SVSGRAocjoTGmn7/vCy/PrwEiYqfVK6xUXYRb51nplllNh1nplDzkVzgkz8YecCjkV9ibMIityKlyj9cp/hFlkReuV2dPDI0vCmFhyPJzYQphFNhqfgVmYBrMwJm5BmEUuFMbELQkzYSbMhJkwE2bCLLLR+8cblzgeTmwhzCIrcipcI6fCrPXKEmEWuZOcCkuEWeSX1it7yqlwTpiJO2u90nrlhzD7AmTjKflH9mQnAAAAAElFTkSuQmCC",
    //Purple Bricks
    "Purple%20Bricks-AVj_zNwf.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACHklEQVR4AcXBsWrcShiG4dfSqNBqUQZMUrhwnzqElLmOXFpuIVdyIKQ9aeMtNrBG8O+g0UDkQcm3uJhCBO+Bg57n5vOnLwt/9Hc7/g/hOLHm2/evSMXGXH+3Q37+OyCdb5FoCel8y0tES7xE51tKFRtzPOt8i0RLSOdbJFriGp1vKdlhRJq+RqIlShUbczyLlpA5ZCSSkM63lKIlZA4Zafoa6XyLREvIHDLS9DUyh8yaio05ns0hI7YMiA+3iIURafoa6XyLRBIlO4yUmr5G5pARWwbk9as3XEQuKjbmwnFiTdPXlOaQEQsja5q+RjrfInYYEVsG5PWrN8gcMqWKjbkfDw+seTyfuMqZi8czqx7PJ9ZUbMylXxOl6WmktHN7StPTyJqd23ONndsjFRtzHz6+4xrhOCHfvn9F3r19j/R3O/6Lio25wz8nxN/v+ZtoiTX93Q4JxwmJlpDOt/xNtIRUbMz5+z0SLVHqfItES5TmkFkTLSFzyFx4LuwwIv5+j0RLlCo25qIlpPMtpWiJ0hwyYsvAmjlkpOlrxA4j0vQ1Ei1R6nyLVGzM8SxaYs0cMtL0NeLDLTJwQsJxojSHjDR9jXS+RaIlZA4ZsTAiFRtzc8iUbBkQf3OL2DJwcebC39yypulrSnPIiIURafoaafoamUNGKjbmbBlYY8vAGlsGSj8eHniRM6sqNubSr4lrTE8jpWE6Udq5Pdeo2NhvpY7sf7lpV5MAAAAASUVORK5CYII=",
    //Purple Planks
    "Purple%20Oak%20Planks-C7i1Zrs2.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACrElEQVR4AcXBQWojRwCG0U9VTQZadElMGwnUkKyMiU+QA4TkEoG5VPbZzB0G5gpZxzBoYWJTAhm3LVWjBg8qKfnLXpRAhIEs+r3R77/+ceRfXYhI5SzippFvETYWcdPItwgbi/inG8QwsII3lbNIFyLSBZKw/4IU7y6QMtZI5Sy5sLFIFyK5ylly690DUry7QAwDK7oQkcpZpHKWE+EKqcYW6UJE1rsHzrIkZayRLkSkchaZj2eIf7pBDAMrwv4Lcv+8Ijc5LsjdP6+QYDzJnsQdGnLBeMQdGiQYT7IlcYcGCdYjhoEVzftr5MfpFbL0LXLZ1Jy6Irf0LXLZ1JwTNhbpQiTXf9ci1+OfEcPAii5EXllkPp4h/i4ivW2RMtZIb1tk//KILD1JGWtylSOpnCVXMUO6EBHDwIretki/IyljjVTOkoSaXBlrJPCIzMczzulCJNfblhOWxDCw4nb/iZw7NCTPJJPjAtmOVkgwnsSS3G//JOcODedM9gtkO1ohwXjEMLDip8kHxE0jubCxSBci4rhCmu/5X8LmGlnvHhDDwAre+DuSyllylbPk/F1EettyThlrpLctUsYa6W1Lbv/yiBgGVrhp5JVFuhDJ9bblhOVEGWvOKWON9LYlNx/PkDWvDAMrPv/9kZw7NMjkuCDZk2xHKyQYzznu0CCT4wLZjlYkkSQYj9xuOWEYWPHLD78hS98i8/EMcdNILmyuya13D8hlU3PO0l8gl02NhI1F3DSSMwys8HckJTW5sLHIevdArow1iSVZ+haZj2fkylgjYWORLkSkC5wwDKzgTW9bpN+RlLFG5m6GdCEivW2R/csj0ry/JteFiPS2RfodryxnGQZW/HX8iLivDblb40m2JO7QIJP9gpx/ukG2oxUSjEfc1wYJxvNfDAP7B2vuCCoendjoAAAAAElFTkSuQmCC",
    //Pink Tile
    "Pink%20Tile%20Top-B_mHYEtj.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVR4AcXBUWoCMRiF0a/XPFjwTfIYsuFuqjvoFkIe/xWUQS2BFqRMnSk63nNe3t8+LhgJM/Vo9Gi4CLPEtx6NoeTK0KOxhZIr14SZ+EPJlZIrWxNmiQUlV+7Ro3GLMEss6NEY9q975ggx53jIrCHMEiudzieGnXYMQjyCMEv8kxCPJMyEmTATZsJMmAmzxErT58QwMbHG8cAqwiyxoOTKPUquDD0ac4RZ4klKrswRZolfejS2VHLlmjATT9aj0aPxQ5h9AT/KKXp8EsC2AAAAAElFTkSuQmCC",
    //Pink Bricks
    "Light%20Pink%20Bricks-vwb4ah_F.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACC0lEQVR4AcXBwWrUQBzH8W+GkJ3k0KWFZX2MehB9Sx/Gs/f21kewgrIh0HUrnflnDjP6Kz3MIZSuIPl8mi+fvxb+8tsN/4OdZpbc3t0gjpW1frtBfh1+I77vEIsJ8X3HW1hMvIXvO2qOlbW88H2HWEyI7zvEYuIcvu+oheOMON8gFhM1x8paXlhMSLaCGAnxfUfNYkKyFcT5BvF9h1hMSLaCON8g2QpLHCtreZGtIFMYkR17JNiMON8gvu8QI1ELx5ma8w2SrSBTGJH91TtqjpW1dppZ4nxDLVtBgs0scb5BfN8h4TgjUxiR/dU7JFuh5lhZe//jO0vGhwNnCbxqfDiwxLGyNjw9UXsMJ2oXw5baYzix5GLYco6LYYs4Vta+/3DNOew0I7d3N8jH60+I3274F46VtQ/fHpHhcsNrLCaW+O0GsdOMWEyI7zteYzEhjpW1w+UGsZio+b5DLCZq2QpLLCYkW+FZz7NwnJHhcoNYTNQcK2stJsT3HTWLiVq2gkxhZEm2gjjfIOE4I843iMVEzfcd4lhZywuLiSXZCuJ8g+zYIwd+InaaqWUriPMN4vsOsZiQbAUJNiOOlbXZCrUpjMhu2CNTGHkWeLYb9ixxvqGWrSDBZsT5BnG+QbIVxLGydgojS6YwsmQKI7X7H995k8Aix8ra8PTEOR7Didph+kntYthyDsfK/gA0iejkSRlN0QAAAABJRU5ErkJggg==",
    //Pink Planks
    "Pink%20Planks-NhSNr_2s.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACjElEQVR4AcXBsWrkRgDH4V+EhMQUGmKCBhXH4nURjoOtQ+q0SZ1nSJOnyANcc89wfSDVQR4gpNmQcmUWF2KEsRkVg8QWSf7yFrOwmIMU+r4vfv3lt3/4T5xZmJKFMSc+R4wFYsyJzxFjgdw/7JGMleWcmZJFnFnEuUD8sEeq2iG2cogpuRBjgcSZC6bkQh88UtUOyVhZHmcWpmRhSi64ZoeYkkWcWfTB8xpbOSTOLEzJorUOuX/YIxkry/2wR3w4knJ2Q8qHIzKMHamm3pIaxg5p6i0yjB2ppt4iw9ghGSvLb9/skHdfv0UO/RNy196QesdbUof+Cblrb7gmxgKJMxfC5JFv7PdIxsryOHNWIK11yOMzizB5xFYOCZNHptEjB17YypEyJQtTcsGUDokzi4yV5WHySJhY2MohpuTMkbKVQ6bRI611XBNnLoTJc03GyvI//v5Iqqm3pJzdID4ckWHsSP318Duppt5yjbMbxIcjMowdkrGy/Idvf0aMOZGKsUDizMI1O+SrL0/8H7dxh/TBIxkryzl7fC4QU3LBlFx4fC6QMHmusZVDwuQRWzkkTJ7UNHokY2W5MSdeFEicuRAmz2ts5bjGVg4JkyfVWof0vMhYWf7x0wdSTb1FnN2Q8uGIDGPHNU29RZzdID4cSQ1jxzUZK8t//O4n5NA/Ia11iDEnUrdxR6oPHrlrb7im6h1y194gMRaIMSdSGSvLH58LxFaOVIwF0gdPylaO1KF/QlrrSNnKITGyiDOLOBekMlaWcxYmj4SJha0c0lqHxJlFmDwyjR65fbMjFWcWYfJImHhVxsryT3++R5p6S2oYO1JNvUWc3ZC6f9gjPhyRYeyQpt4iw9jxmoyV/QtdTu1tTqvqSwAAAABJRU5ErkJggg==",
    //Black Tile
    "Black%20Tile%20Top-B6VoFlRw.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApklEQVR4AcXBgWkCURRE0ZvhVyARtoU3/dfyfhPBFhIWIoiY7Iqsc86Hy98EiTD1bHo2KSJs8Ktns3KZVc/mCC5zS4SJP7iMyxxNhA02uMwrejb/EWGDDT2b1enzxDOW88IeIkyEiTARJsJEmAgTYSJMhImwwU6XrwvPWM4Le4iwwQaXeYXLrHo2j4iwwZu4zCMibHCnZ3Mkl7klwsSb9Wx6Nlci7AdrvCLX4u8kugAAAABJRU5ErkJggg==",
    //Black Bricks
    "Black%20Bricks--2fJeut8.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACC0lEQVR4AcXBsYrcSBSG0a+rhFBgGCgkqNzdwfSLOPDTmn0EB/sGaoxknF6o4sIsE2xi2fsPE9SCGNwGo3NO18frD/5zOV/4E5Z1Yc/6dUUCB+su5wvy+e/PSJ4yYsWQPGV+hRXjV+Qp0wocrONVnjJixZA8ZcSKcY88ZVrzbUbSmBArRitwsI5XVgzx6rTylGlZMcSrI2lMSJ4yYsUQr46kMSFenVbf90jgYB2vvDoSh4h4dcSrI2lMSJ4ye+bbTCuNCfHqSBwi8vDuAXn+5xkJHKxb1oU9aUy0vDri1dmTxoTkKSPzbUbiEJGHdw+IV0f6vkcCBzvFIf7gAHGLSOBg3Wk70QoEWhsbrUBgz8bGPTY2JHCw7uOHj9xjWRdk/boi5/dn5HK+8DsCB+s+/fUJuT5eeYsVY8/lfEGWdUGsGJKnzFusGBI4WHd9vCJWjFaeMmLFaHl1pO97WlYM8epInjIy32bk+nhFrBitwME6K4bkKdOyYrS8OhKHyIuN//HqSBoTMt9mJI0JsWK08pSRwME6Xlkx9nh1JI0J8epI7COyrAstr46kMSF5yogVQ7w64tWRwME6r04rDhH5/u93JA4ReXp+4i1pTLS8OuLVkTQmJI0J8epI4GBdHCJ74hDZE4fIi40XX759YU8cIq2n5ydacYhI4GDdaTtxj0CgFbdIa2PjHoGD/QTXoshFdJCEiwAAAABJRU5ErkJggg==",
    //Black Planks
    "Black%20Planks-BuHsPudB.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACgElEQVR4AcXBwWrzRhSG4bcnc8ARiaUIrJaSTVdZ9P4vJQuvsjElHYOQFBCGUabtJ2cxAfPzQxd6nl+6uvmH/8RxQLq6QQ7tjp9x7i/Iod3xM879BfkYB8TYWOBLVzdIHAckjqzuuUpuyJIy0tUNpXN/QeI4UOrqhlI/T6zcEGNjIY4D0tUN0tUNpTgOSFftkTgOSD9P3BLckCVlJI4D0tUN0lZ75GMcEGNj4Z6reR4ofSZW91zN84A8VUYppUzJ3ZDElbshKU1IShnZVYYYGwuPdYMc2h1yPEXk5Y+OHzmeIvLy/Bu3nPsLEseBUnBDKt8jxsZCHAeuGqSt9sjr2zsS3JAlZSS4IZ4ycjxFZEmZUlc3SFc33BLHATE2FoIb0s8TsqSMdHWDxHGgtKSMOFdtteeWOA6Ughul4IYYGwuPzjeJq3kekHuu7pyVu1FKaaKUUkYenG8+U0bunJW7IcbGgvseObQ7Suf+gsRxYJVY/fnc8X+c+wvSzxNibCzw5fXtHenqhlJXN5Re396R4MYtS8pIcEOWlJHgRslTRoyNhUO746pB4jhQCm6UghulJWVuWVJGghulttoj/TwhxsbCX39HSg/O6jNxlTJy56zcjW/ckJQy8plY3TlfMuJuSEoT8uisjI2F33/tkOMpIm3VIId2R+ncXyj184S8PHfccjxF5OW5Q879BTm0O0rGxsLr2zu3nPsL0s8TpSVlJLghx1NE2mpPaUkZOfcXJI4DEke+MTYW+BLckH6ekCVlpKsbJI4DEtwQTxl5rBtKcRyQ4Ib084QEN24xNhaeKkNSypS8MiSlCXlwVp8pU/oYB+TOWT1VhqSUEXfjR4yN/QvYy/9F9XzUBQAAAABJRU5ErkJggg==",
    //Gray Tile
    "Gray%20Tile%20Top-B5S49yOv.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAApklEQVR4AcXBsQ6CQBRE0buTrYR636fx/+XbXluMRhNDUDFB5pwyTdOMkTBTz6Rn4iLMKg89kyO0CF4JM7HQImgRHEWYVd5oEeyhZ/KJMKt80TO5GYaBNYV1p3FkC2FW2WqeuSuFm8I+hFnlR4V9CTNhJsyEmTATZsKsstH5cuEXp3FkC2FW+aJF8E/CTPxZi6BF8I4wqyz0TI4kzMTBeiY9kydhdgUhrx9ZMz1w8gAAAABJRU5ErkJggg==",
    //Gray Bricks
    "Dark%20Gray%20Bricks-DrawnoZ0.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACGklEQVR4AcXBQWocRxiG4TftHiEouqlGGw2jG8RXCPgySQ6bZCfHEOyNmaZnM1RRxY/LGjdJPqFFLQqjCYR+nh9+/fmXv/nX/n7P/2E5LbQ8vn9EOjbW7+/3yIe//kT8OCExBcSPE68RU+A1/DhR69hYzws/TkhMAfHjhMQUuIYfJ2rzfETc4JCYArWOjfW8iCkglo2aHydqMQXEsiFucIgfJySmgFg2xA0OsWy0dGys54VlQ8paeJZ5ZtkQNzjEjxMt83yk5gaHWDakrAW583dIiBHp2Fi/nBZa3OCoWTbEstHiBof4cULm+YiUtSB3/g6xbNQ6NtZ/+vyRlnM8c40SC3KOZ1rO8UxLx8b6b19XapenC7XdzY7a5elCy+5mxzV2NzukY2P9u5/ecY3ltCCP7x+Rtz++Rfb3e/6Ljo31v//xG3I4PPA9MQVa9vd7ZDktSEwB8ePE98QUkI6N9YfDAxJToObHCYkpULNstMQUEMuG+HFC5vmIHA4PSEyBWsfG+pgC4seJWkyBmmVDylposWyIGxwyz0fEDQ6JKVDz44R0bKznRUyBFsuGuMHxLPPsCwVZTgs1y4a4wSF+nJCYAmLZEMuGdGyst2zUylqQ2ze3SFkLUmJBbt/c0uIGR82yIZYNcYND3OAQy4Z0bKwva6GlrIWWshZqnz5/5DVKLLR0bKz/9nXlGpenC7UvuVDb3ey4RsfG/gFUT/CHC+Zx1gAAAABJRU5ErkJggg==",
    //Gray Planks
    "Gray%20Planks-d4VyYuSq.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACmElEQVR4AcXBwWrjRgDH4V+kkceSEBUGu0tgaS/psYeWvkl76xuX9gVMIUuCN7HAHUeMlJEssv3XOUzAhIUe9H1Xv//62wv/cp1H6qJE6srwNVx7QurK8DVce0L2D3dIwswMr+qiRFznEdfxn+HpgFyVJZKlFqmLkphrT4jrPLG6KIk17QG5KkskYWbGdR6pixKpi5KY46wuSsR1HmnaA+/JUou4ziN1USLraoXsH+6QhJmZ4emAfGp2xHK7JPap2SFD6IktbE5sCD2ysDkyhB5pOFvYHBlCjyTMzGw+fETqyiDb3R65ud7wnu1uj9xcb7jEtSfEdZ7YOAXku2qFJMzMuM5zViLraoXcPh6RcQpIllpknALy4j2y3e2RLLXE6qJE6qLkrRJxnUcSZmbGKSBNG5AstUhdlIjreCNLLTLgkXW14hLXeWLjFLgkYWbGfb4ntrA5cuQst0ukD8/IEHpix6d/iC1sziW5XSJ9eEaG0CMJMzM3P/yI1JUh5toT4jqPLDj7/ttv+D9ce0Ka9oAkzMzw6vbxiNRFSawuSmK3j0dknAKXZKlFxikgWWqRcQrEXrxHEmZm6spwViKu88TGKfCeLLVckqUWGadAbF2tkIazhJmZP/78i9jC5khul8T68IwMoeeShc2R3C6RPjwTG0KPuM/3xBJmZn75+Sdku9sj62qF1JUh5toTsaY9IDfXGy7Z7vbIzfUGce0JqStDLGFm5vbxiGSpJebaE9K0B2JZaoltd3tkXa2IZalFXHtCXOcR1/FGwswMr8YpIE0bkCy1yLpaIa7zyDgF5MV7ZPPhIzHXeWScAtK0gfckzMw0938jC5sTG0KPNJwtbI7kdkls/3CH9OEZGUKPLGyODKHnPQkz+wJP7hAR0QRuXQAAAABJRU5ErkJggg==",
    //White Tile
    "White%20Tile%20Top-B1GJ-cz-.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoUlEQVR4AcXB0WnDUBBE0fuGrWH6r28+VMFCEkECwWBHtmLtOevjC4PEMCUhCVPEsOJbEq5gm9/EMHHDNra5ihhW3GGbXRJ2tnlFEh4Rw4qDuptnVBVHiGFimBgmholh4p+stVhr8SwxrDipqth1N68Qw4qTupszxLDioG3beAcxrPiDbc5IwiNimHgz29jmHjGsuJGEK4lh4mJJSMIPMewTQFQqzpqv7H4AAAAASUVORK5CYII=",
    //White Bricks
    "White%20Bricks-Phpq5Ar3.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAB3ElEQVR4AcXBwUodQRCG0W/q79IOuJ5VCPH9XyfgUtcDkoUbpW91JzW4aGEQbyDMOcvL75fBX3EJ/gcVceTx6ZFknKzEJUg3325I0YIkFyla8BVy8RXRgplxssK7aEGSixQtSHJxjWjBzIuT+tJJcjEzTlZ4JxfJhrFzdtGCmVwkG0bqSydFC5JcJBtG6ksn2TCOGCcrvLNhJFWxe2VnxUh96aRowc75wIuzG+z60kk2jKQqUntrzIyTFRVxpC+dmQ0jWTF2gw/60knRguTFSaoitbdGsmHMjJOVelc54rfONYRIfusc8VvniHGy8rw9M9u2jdm6rsy2bePIuq5cY11XknGyUm8qsx/ff/CZ+5/3pMenR9L9z3tSXIJ/YZys1FpJ7dL4jFwciUuQVESSixQt+IxcJONkpV0aSS5m0YIkFzMbxhG5SDaMFATJi5PapZHkYmacrMhFihbM5GJmw0iq4ogNI/Wlk7w4qS+dJBezaEEyTlZ4JxdHbBipL53dKx+oiJkNI/Wlk6IFSS6SDSNZMZJxsmLDmKmKFK9BUhVJiBSvwZG+dGY2jGTFSJ1O6ksn2TCScbKiKo6oiiOqYlbvKl8hxBHjZOV5e+Ya27Yxe/j1wGxdV65hnOwPnOWfRrWMydcAAAAASUVORK5CYII=",
    //White Planks
    "White%20Planks-DSPGLX7L.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACeElEQVR4AcXBsWocRxjA8b9mtziuESoOzce2s+xhEDbCr+HCVZ7DRZIupEzc+AHSpMwDBOyHMMKg5paddpkVVwg14YrsKHzjGL6DQwhc7O939vjv/IiqHMWcKdyBZ8krCnfgWfIKtbu9QTkWVvPNnCkqx1dr1O7LZ9S5F5T4hmLOHMkrispxZM5YaZ9Q515QjoXVVI5izhRzxtq+ek0xZ6y0TzxFfENROYo5o2QjqN3tDcqxsHr35TNqiANWG1qsIQ6oGHusEDqsGHtUCB0qxh4rhA4VY49yLKzeXl2jti9foNLdPUouL7C2L19gpbt7lFxecFJeUVQOK00j6s3bH1COhdVUjmJeoWQjFGcOlaYRJb5BpWlEPUwJS3zDsUwxZyzZCEXlUI6F1WkascQ3FHNGiW+wxDeohymhZCMUc+ZI5bDSNHKKY2H1X3/+gRVCh9WGFjXEARVjj/Xx099YIXSc0oYWNcQBFWOPciysfvfjLxTuwJG8oqgcavvqNcXjP3yP7dU1Ku0TyrGwmm/O1hRz5sicOVKtUWkaOUV8g0rTiBLfoNI0Yj1MCeVYWI07UMwrisphpWnkKeIbThHfoNI0YslGsBwLqz/8/h4rhA7VhhZriAMqxp5TQuhQbWhRQxywYuw5xbGw+t3PP6HS3T1KNkLhDljbq2ustE8oubzglHMvKLm8oMgrCnfAciys5myNEr+mmDNFXqHSPmGJb7DS3T1KNoIlvqGYM0Xl+GqN5VhYzf/SNGKJb1CyEYrKodI0oh6mhNpeXXOkcqg0jTyHY2H1h99+RYXQYcXYY4XQodrQYu1ub1BDHFAx9qgQOlSMPU9xLOw/llDUSx7tn3AAAAAASUVORK5CYII=",
    //Brown Tile
    "Brown%20Tile%20Top-e5giSDrr.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAwUlEQVR4AcXBQWrDMBCG0a9/FVqK0KYLnabLHiZHn62YpY2KoQVTnNg4dua9l+v3VyeQCCZrjjUnigiW+GXNmdSSmVhzzlBLZk4EEzfUkqklczYRLLGilswjrDn3iGCJFdacydvlwpKxd5Z8fryzhQgmgolgiZ3G3jmCCJbYaOydM4hgIpgIltjplc4RRLDERsMwMDdwDBEssaKWzCNqyUysOUtEsMST1JJZIoIl/rHmnKmWzJwIJp7MmmPN+SOC/QDvfy4mh0gCSwAAAABJRU5ErkJggg==",
    //Brown Bricks
    "Brown%20Bricks-CA1oSNzp.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACMElEQVR4AcXBy2ocRwCG0U+tssANfcG1EBJCaOtAXiFZ5BmyyFPkJbPIMsEggw1mPAwzzKKGuqBqmJbcyS+0qEVjNIHQ55z9/tuvE/+6vL7h/7Dfbpjz4eM9UrEwc3l9g3y6/xvpeosE75Cut7xG8I7X6HpLqWJhhhddb5HgHdL1FgnecYqut5R26xVStw0SvKNUsTDDi+AdkmOi1PWWUvAOyTEhddsgXW+R4B2SY0LqtkFyTMypWJjhRY4JGaaRZzEhOSakbhuk6y1zdusVpbptkBwTMkwjYrt3PHvISMXCzH67YU7dNpRyTEiOiTl12yBdb5HdeoUM04jY7h2SY6JUsTDz5etn5rhw4BRDOCAuHJjjwoE5FQsz4/EbpePjE6ULc07p+PjEnAtzzikuzDlSsTDz08+/cIr9doN8+HiP/Pj+B+Ty+ob/omJh5q8//0Cubu/4nuAdcy6vb5D9doME75Cut3xP8A6pWJi5ur1DgneUut4iwTtKOSbmBO+QHBPS9RbZrVfI1e0dEryjVLEwE7xDut5SCt5RyjEhwzQyJ8eE1G2D7NYrpG4bJHhHqestUrEww4vgHXNyTEjdNjyLCXlgRPbbDaUcE1K3DdL1FgneITkmJMeEVCzM5JgoDdOIvD17gwzTiAzhgLw9e8Ocum0o5ZiQHBNStw1Stw2SY0IqFmaGaWTOMI3MGaaR0pevn3mNIRyYU7EwMx6/cYrj4xOlhzxSujDnnKJiYf8AWcbxQwJyX/MAAAAASUVORK5CYII=",
    //Brown Planks
    "Brown%20Planks-gjcf-cV0.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACj0lEQVR4AcXBQWvjRhzG4Z/+o7h7sISsmrCFsFDaHPsheuxn6cft0Q2FYEgwykiMvCHImXH7KjlMwCwLPeh5ij//+P3Mf3wYkbaukE2z4nv0w4RsmhXfox8mpPOPiLGwkndtXSE+jIgPzNLrV2arT4glh7R1Ra4fJsSHkVxbV+S648Bs9QkxFlb6MCJtXSFtXZHzgVm7rhAfRqQ7DlxkzCw5xIcRaesK2a4bpPOPiLGwMr1+RR58IHeFI/fgAxKLyCwyc2dHLhYRcWeHxCIiz32PuLNDYhERY2Hltv2MbJoVstsfkNuba75ltz8gtzfXXNIPE+LDSC5ZRH5aN4ixsNKHkTcVsl03yN39E5IsIpYckiwym16Q3f6AWHLk2rpC2rriEh9GxFhYmSwi3XFALDmkrSvEh5GcJYck3mzXDZf4MJJLFvnAmBkLK19OgZw7O+TBB+QKh5yISCwis4LZvr8n586OS65wyImIxCIixsLKm80XZNOsyPXDhPgwIj/w5pcvP/J/9MOEdMcBMRZW8u7u/glp64pcW1fk7u6fkGSRSyw5JFlELDkkWeSD6QUxFlZumhVvKsSHkVyyyAfGB5Ycl1hySLJIbrtukO44IMbCyr/++ZucOzvkCkfuRERiEbnEnR1yhUNORHKxiMi+D+SMhZW//fwrstsfkO26QTbNilw/TOS644Dc3lxzyW5/QG5vrpF+mJBNsyJnLKy8u39CDEeuHyakOw7kLDlmxmy3PyDbdUPOkkP6YUJ8GBEf+MBYWMm7ZBHpjgNiySHbukF8GJFkkdn0gmzbz+R8GJFkEemOAzPjImNh5XPsEffqyMUiIs99j7izQ65w5Dr/iJyISCwi4l4dEovItxgL+xcaTBB0ckFddQAAAABJRU5ErkJggg==",
    //Bluestone Bricks
    "Brick%20Turquoise-onJEVhlB.png":
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABu0lEQVR4AcXBQWoUQRiG4deiaJofpmlm0WtPIIjoab2HpwiBnCBgFrHFpukhf4raRPtzFlNQhIwg9Tzvvn19eeGPw8B/cdqourm9YxdoLB4G5McjYoa4I2a8iTtvYkYh0FjkzAxxR8wQd65iRmFdkK5H3CkEGoucuSM5UTCj4I7khHQ9Yoa4IzkhXY/kRFWgschZTsjqM7uRiV1OSNcjZlStC4WuR3JCVp/ZTceJS4HG4mmjqusp5ITkRFXXI2bIuiCrz+ym48QuJwqBxuL9w0zNvMxcxflroWpeZmoCjcXnJ+eS+8Yls4FL7hs1ZgPXMBvYBRqLXz6/5xqnDbm5vWP36eMHdoeBfxJoLH6/R8Yjr3Kn6jAgpw1xR8x4lTsSaCyOR8SdghniTiEnqtyRnBAzZF2Q8Yi4Uwg0Ft0RMwruFHJCVp+pyQnpemRdkK5H3CmYIYHGImfuVOWEdD0yMrH7xSO700YhJ6TrETPEHckJyQkJNBZzorD6zG60id3qM+LIaBM1XU8hJyQnpOuRrkdyQgKNxdVnalafqVl95tL9w8ybOFWBxuLzk3MN941Lv34+csls4BqBxn4DI9WwwB17uRIAAAAASUVORK5CYII=",


        };
        const ZeraExtraStyles = document.createElement("style");
    ZeraExtraStyles.textContent = `
        /* --- ZeraMine Modular UI Styles --- */
        :root {
            /* Re-using Zera Core Variables for consistency */
            --zera-modal-bg: rgba(20, 20, 20, 0.95);
            --zera-modal-border: 1px solid var(--zeraora-yellow);
            --zera-input-bg: rgba(30, 30, 30, 0.8);
            --zera-input-hover: rgba(50, 50, 50, 0.9);
        }

        .zera-modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 450px;
            max-height: 80vh;
            background: var(--zera-modal-bg);
            border: 1px solid #00f2ff;
            box-shadow: 0 0 20px rgba(0, 242, 255, 0.2), 0 10px 30px rgba(0,0,0,0.8);
            border-radius: 8px;
            z-index: 100000;
            display: none; /* Hidden by default */
            flex-direction: column;
            font-family: 'Product Sans', sans-serif;
            backdrop-filter: blur(10px);
            overflow: hidden;
        }

        .zera-modal-header {
            height: 40px;
            background: var(--zeraora-yellow);
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 15px;
            color: #000;
            font-weight: 900;
            font-size: 18px;
            border-bottom: 2px solid #00f2ff;
            user-select: none;
        }

        .zera-modal-body {
            padding: 20px;
            overflow-y: auto;
            color: #fff;
            display: flex;
            flex-direction: column;
            gap: 15px;
        }

        .zera-modal-body::-webkit-scrollbar {
            width: 6px;
        }
        .zera-modal-body::-webkit-scrollbar-thumb {
            background: #00f2ff;
            border-radius: 3px;
        }
        .zera-modal-body::-webkit-scrollbar-track {
            background: rgba(0,0,0,0.3);
        }

        .zera-setting-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .zera-label {
            font-size: 14px;
            color: #ddd;
            font-weight: 500;
        }

        .zera-input, .zera-select {
            background: var(--zera-input-bg);
            border: 1px solid rgba(255,255,255,0.1);
            color: white;
            padding: 5px 10px;
            border-radius: 4px;
            outline: none;
            font-family: 'Product Sans', sans-serif;
        }
        .zera-input:focus, .zera-select:focus {
            border-color: #00f2ff;
        }

        .zera-btn {
            background: linear-gradient(90deg, #00f2ff, #70e1ff);
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            color: #000;
            font-weight: bold;
            cursor: pointer;
            transition: transform 0.1s;
        }
        .zera-btn:active { transform: scale(0.98); }

        /* Mac Close Button */
        .zera-close-btn {
            width: 14px;
            height: 14px;
            background: #ff5f57;
            border-radius: 50%;
            cursor: pointer;
            position: relative;
            transition: all 0.2s;
        }
        .zera-close-btn:hover { background: #ff3b30; }
        .zera-close-btn::before {
            content: '×';
            position: absolute;
            top: 50%; left: 50%;
            transform: translate(-50%, -50%);
            color: rgba(80,0,0,0.8);
            font-size: 12px;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .zera-close-btn:hover::before { opacity: 1; }

        /* --- Specific Module Styles --- */

        /* Crosshair */
        #zera-crosshair-preview {
            width: 100px; height: 100px;
            background: rgba(0,0,0,0.5);
            border: 1px solid #444;
            margin: 0 auto;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .zera-crosshair-overlay {
            position: absolute;
            pointer-events: none;
        }

        /* Keystrokes */
        .zera-keystrokes {
            position: fixed;
            bottom: 10px;
            left: 10px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            z-index: 9999;
            user-select: none;
        }
        .zera-key-row { display: flex; gap: 5px; justify-content: center; }
        .zera-key {
            width: 40px; height: 40px;
            background: rgba(0,0,0,0.7);
            border: 1px solid rgba(0, 242, 255, 0.3);
            border-radius: 6px;
            color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            font-weight: bold;
            font-family: 'Product Sans', sans-serif;
            transition: all 0.1s;
        }
        .zera-key.active {
            background: rgba(0, 242, 255, 0.3);
            border-color: #00f2ff;
            box-shadow: 0 0 10px rgba(0, 242, 255, 0.5);
            transform: scale(0.95);
        }
        .zera-cps-text { font-size: 10px; color: #00f2ff; }
        .zera-key.wide { width: 70px; }
        .zera-key.space { width: 120px; }

        /* War Utils K/D */
        .zera-kd-display {
            background: linear-gradient(135deg, rgba(0, 242, 255, 0.2), rgba(0,0,0,0.8));
            border: 1px solid #00f2ff;
            padding: 5px 10px;
            border-radius: 5px;
            color: #fff;
            font-weight: 800;
            text-shadow: 0 0 5px #00f2ff;
            margin-left: 10px;
        }

        /* Better Chests */
        .zera-chest-boost {
            box-shadow: 0 0 15px rgba(0, 242, 255, 0.3) !important;
            border: 1px solid rgba(0, 242, 255, 0.5) !important;
        }
            /* Update or add this to your CSS block */
        .zera-input[type="file"] {
        width: 110px !important;
        font-size: 11px !important;
        padding: 2px 5px !important;
        height: auto !important;
    }
    `;
    document.head.appendChild(ZeraExtraStyles);
    class r extends o {
        constructor() {
            super("Watermark", "Visual", {
                Text: "ZeraMine"
            })
        }
        onSettingUpdate() {
            let e = document.querySelector(".ZeraMine-overlay-title");
            e && (e.textContent = this.options.Text)
        }
        onEnable() {super.onEnable()
            let e = document.querySelector(".ZeraMine-overlay-title");
            e || (e = document.createElement("div"), e.className = "ZeraMine-overlay-title", e.textContent = this.options.Text, e.style.position = "absolute", e.style.top = "0", e.style.left = "0", e.style.padding = "0.5em", e.style.userSelect = "none", e.style.display = "none", e.style.zIndex = "1000", e.style.textShadow = "var(--ZeraMine-accent-color) 0px 0px 10px", e.style.fontFamily = "'Product Sans', sans-serif", e.style.fontSize = "24px", e.style.background = "linear-gradient(90deg, #FFFF00, #00FFFF)", e.style.backgroundClip = "text", e.style.webkitFontSmoothing = "antialiased", e.style.webkitTextFillColor = "transparent", document.body.appendChild(e)), document.querySelector(".ZeraMine-overlay-title").style.display = "flex"
        }
        onDisable() {
            document.querySelector(".ZeraMine-overlay-title").style.display = "none"
        }
    }
    class l {
        constructor(e, t) {
            this.module = e, this.container = t, this.components = [], this.initialized = !1, this.isOpen = !1
        }
        initialize() {
            !this.initialized && this.module?.options && (Object.keys(this.module.options).forEach((e => {
                const t = this.module.options[e],
                    n = typeof t;
                e.toLowerCase().includes("color") ? this.addColorPicker(e) : "boolean" === n || "true" === t || "false" === t ? this.addCheckbox(e) : "string" === n ? this.addStringInput(e) : this.addNumberInput(e)
            })), this.components.forEach((e => e.style.display = "none")), this.initialized = !0)
        }
        toggle() {
            this.isOpen = !this.isOpen, this.components.forEach((e => {
                e.style.display = this.isOpen ? "flex" : "none", this.isOpen ? this.container.style.marginBottom = "5px" : this.container.style.marginBottom = "0px"
            }))
        }
        addNumberInput(e) {
            const t = document.createElement("div");
            t.className = "gui-setting-container";
            const n = document.createElement("span");
            n.className = "gui-setting-label", n.textContent = e;
            const o = document.createElement("input");
            o.type = "text", o.className = "gui-text-input", o.value = this.module.options[e];
            let i = o.value;
            o.addEventListener("input", (() => {
                const t = o.value.trim();
                isNaN(t) || "" === t || (i = t, this.module.options[e] = t, s.emit("setting.update", this.module))
            })), o.addEventListener("blur", (() => {
                (isNaN(o.value) || "" === o.value.trim()) && (o.value = i)
            })), o.addEventListener("keydown", (e => {
                "Enter" === e.key && o.blur()
            })), t.appendChild(n), t.appendChild(o), this.container.appendChild(t), this.components.push(t)
        }
        addStringInput(e) {
            const t = document.createElement("div");
            t.className = "gui-setting-container";
            const n = document.createElement("span");
            n.className = "gui-setting-label", n.textContent = e;
            const o = document.createElement("input");
            o.type = "text", o.className = "gui-text-input", o.value = this.module.options[e], o.addEventListener("input", (() => {
                const t = o.value.trim();
                this.module.options[e] = t, s.emit("setting.update", this.module)
            })), t.appendChild(n), t.appendChild(o), this.container.appendChild(t), this.components.push(t)
        }
        addCheckbox(e) {
            const t = document.createElement("div");
            t.className = "gui-setting-container";
            const n = document.createElement("span");
            n.className = "gui-setting-label", n.textContent = e;
            const o = document.createElement("div");
            o.className = "gui-checkbox", o.classList.toggle("enabled", !0 === this.module.options[e] || "true" === this.module.options[e]), o.addEventListener("click", (() => {
                const t = o.classList.contains("enabled");
                o.classList.toggle("enabled"), this.module.options[e] = (!t).toString(), s.emit("setting.update", this.module)
            })), t.appendChild(n), t.appendChild(o), this.container.appendChild(t), this.components.push(t)
        }
        addColorPicker(e) {
            const t = document.createElement("div");
            t.className = "gui-setting-container";
            const n = document.createElement("span");
            n.className = "gui-setting-label", n.textContent = e;
            const o = document.createElement("div");
            o.className = "gui-color-picker", o.style.background = this.module.options[e];
            const i = document.createElement("input");
            i.type = "color", i.className = "gui-color-input", o.appendChild(i), i.addEventListener("input", (t => {
                o.style.background = t.target.value, this.module.options[e] = t.target.value, s.emit("setting.update", this.module)
            })), t.appendChild(n), t.appendChild(o), this.container.appendChild(t), this.components.push(t)
        }
    }
    class d {
        constructor(e, t = {
            top: "200px",
            left: "200px"
        }) {
            this.panel = document.createElement("div"), this.panel.className = "gui-panel", this.panel.style.top = t.top, this.panel.style.left = t.left, this.header = document.createElement("div"), this.header.className = "gui-header", this.header.textContent = e, this.panel.appendChild(this.header), document.body.appendChild(this.panel), this.buttons = [], this.setupDragHandling()
        }
        setupDragHandling() {
            let e = !1,
                t = {
                    x: 0,
                    y: 0
                };
            this.header.addEventListener("mousedown", (n => {
                e = !0, t.x = n.clientX - this.panel.offsetLeft, t.y = n.clientY - this.panel.offsetTop
            })), document.addEventListener("mousemove", (n => {
                e && (this.panel.style.left = n.clientX - t.x + "px", this.panel.style.top = n.clientY - t.y + "px")
            })), document.addEventListener("mouseup", (() => e = !1))
        }
        addButton(e) {
            const t = document.createElement("div");
            t.className = "gui-button-container";
            const n = document.createElement("div");
            n.className = "gui-button " + (e.isEnabled ? "enabled" : ""), n.textContent = e.name;
            const s = new l(e, t);
            return n.addEventListener("mousedown", (t => {
                0 === t.button && (e.toggle(), n.classList.toggle("enabled", e.isEnabled)), 1 === t.button && (n.textContent = "waiting for bind..", e.waitingForBind = !0)
            })), n.addEventListener("contextmenu", (e => {
                e.preventDefault(), s.initialize(), s.toggle()
            })), n.setAttribute("tabindex", -1), n.addEventListener("keydown", (t => {
                n.textContent = e.name, e.waitingForBind && (t.preventDefault(), t.stopPropagation(), t.stopImmediatePropagation(), "Escape" === t.key ? e.keybind = null : e.keybind = String(t.code), e.waitingForBind = !1)
            })), t.appendChild(n), this.panel.appendChild(t), this.buttons.push(n), n
        }
        show() {
            this.panel.style.display = "block"
        }
        hide() {
            this.panel.style.display = "none"
        }
    }
    var c = n(72),
        p = n.n(c),
        u = n(825),
        h = n.n(u),
        m = n(659),
        y = n.n(m),
        g = n(56),
        f = n.n(g),
        v = n(540),
        b = n.n(v),
        x = n(113),
        S = n.n(x),
        E = n(679),
        C = {};
    C.styleTagTransform = S(), C.setAttributes = f(), C.insert = y().bind(null, "head"), C.domAPI = h(), C.insertStyleElement = b(), p()(E.A, C), E.A && E.A.locals && E.A.locals;
    class k extends o {
        constructor() {
            super("ClickGUI", "Visual", {
                "Accent Color 1": "rgb(64, 190, 255)",
                "Accent Color 2": "rgb(129, 225, 255)",
                "Button Color": "rgb(40, 40, 40, 0.9)",
                "Hover Color": "rgb(50, 50, 50, 0.9)",
                "Header Color": "rgb(0, 0, 0, 0.85)",
                "Panel Color": "rgb(18 18 18)",
                "Text Color": "#ffffff",
                "Enable Animations": !0
            }, "ShiftRight"), this.GUILoaded = !1, this.panels = [], this.blurredBackground = null, this.updateColors()
        }
        updateAnimations() {
            this.options["Enable Animations"] ? document.body.classList.add("with-animations") : document.body.classList.remove("with-animations")
        }
        updateColors() {
            document.body.style.setProperty("--ZeraMine-accent-color", `linear-gradient(90deg, ${this.options["Accent Color 1"]} 0%, ${this.options["Accent Color 2"]} 100%)`), document.body.style.setProperty("--button-color", this.options["Button Color"]), document.body.style.setProperty("--hover-color", this.options["Hover Color"]), document.body.style.setProperty("--header-bg", this.options["Header Color"]), document.body.style.setProperty("--panel-bg", this.options["Panel Color"]), document.body.style.setProperty("--text-color", this.options["Text Color"])
        }
        onEnable() {super.onEnable()
            document.pointerLockElement && document.exitPointerLock(), this.GUILoaded ? (this.showGUI(), this.updateAnimations()) : (this.setupBackground(), this.createPanels(), this.setupEventListeners(), this.GUILoaded = !0, this.updateAnimations())
        }
        setupBackground() {
            this.blurredBackground = document.createElement("div"), this.blurredBackground.className = "gui-background", document.body.appendChild(this.blurredBackground)
        }
        createPanels() {
            this.panels.forEach((e => {
                e.panel && e.panel.parentNode && e.panel.parentNode.removeChild(e.panel)
            })), this.panels = [], [{
                title: "Combat",
                position: {
                    top: "100px",
                    left: "50px"
                }
            }, {
                title: "Movement",
                position: {
                    top: "100px",
                    left: "270px"
                }
            }, {
                title: "Visual",
                position: {
                    top: "100px",
                    left: "490px"
                }
            }, {
                title: "Resources",
                position: {
                    top: "100px",
                    left: "710px"
                }

            },{
                title: "World",
                position: {
                    top: "100px",
                    left: "930px"
                }

            }, {
                title: "Utils",
                position: {
                    top: "100px",
                    left: "1150px"
                }

            }].forEach((e => {
                const t = new d(e.title, e.position);
                this.panels.push(t)
            }));
            const e = {};
            Object.values(ee.modules).forEach((t => {
                e[t.category] || (e[t.category] = []), e[t.category].push(t)
            })), Object.entries(e).forEach((([e, t]) => {
                const n = this.panels.find((t => t.header.textContent === e));
                n && (t.sort(((e, t) => t.name.length - e.name.length)), t.forEach((e => n.addButton(e))))
            }))
        }
        setupEventListeners() {
            s.on("module.update", (e => {
                const t = this.panels.find((t => t.header.textContent === e.category));
                if (!t) return;
                const n = t.buttons.find((t => t.textContent === e.name));
                n && n.classList.toggle("enabled", e.isEnabled)
            }))
        }
        showGUI() {
            this.panels.forEach((e => e.show())), this.blurredBackground.style.display = "block"
        }
        onDisable() {
            this.panels.forEach((e => e.hide())), this.blurredBackground.style.display = "none"
        }
        onSettingUpdate() {
            this.updateColors(), this.updateAnimations()
        }
    }
    class M extends o {
        constructor() {
            super("Airjump", "Movement", null)
        }
        onRender() {
            a?.gameWorld?.player && (a.gameWorld.player.collision.isGrounded = !0)
        }
    }
    class W extends o {
        constructor() {
            super("Instabreak", "World", null), this.originalHardness = new Map
        }
        onEnable() {super.onEnable()
            Object.values(a.gameWorld.items).forEach((e => {
                e?.destruction && (this.originalHardness.has(e) || this.originalHardness.set(e, e.destruction.durability), e.destruction.durability = 0)
            }))
        }
        onDisable() {
            Object.values(a.gameWorld.items).forEach((e => {
                e?.destruction && this.originalHardness.has(e) && (e.destruction.durability = this.originalHardness.get(e))
            }))
        }
    }
    class w extends o {
        constructor() {
            super("Nuker", "World", {
                Radius: 3,
                "Chunk Interval": 1e3
            }), this.lastExecutionTime = 0
        }
        onRender() {
            if (!a?.gameWorld?.player) return;
            let e = this.options.Radius;
            const t = this.options["Chunk Interval"],
                n = Date.now();
            if (n - this.lastExecutionTime >= t) {
                this.lastExecutionTime = n;
                let t = Object.values(a.gameWorld.player.position).splice(0, 3).map(Math.floor);
                for (let n = -e; n <= e; n++)
                    for (let s = -e; s <= e; s++)
                        for (let o = -e; o <= e; o++) {
                            const [e, i, r] = [t[0] + n, t[1] + s, t[2] + o];
                            0 !== a.gameWorld.chunkManager.getBlock(e, i, r) && a.gameWorld.chunkManager.setBlock(e, i, r, 0, !0, !0)
                        }
            }
        }
    }
    class _ extends o {
        constructor() {
            super("AdBypass", "Resources")
        }
        onEnable() {super.onEnable()
            this._reward = this._reward || a.stores.get("adsStore").rewardCommercialVideoWrapper, a.stores.get("adsStore").rewardCommercialVideoWrapper = () => !0
        }
        onDisable() {
            a.stores.get("adsStore").rewardCommercialVideoWrapper = () => this._reward
        }
    }
    class P extends o {
        constructor() {
            super("Fly", "Movement", {
                "Vertical Speed": 5
            })
        }
        onRender() {
            a?.gameWorld?.player && (a.gameWorld.player.velocity.gravity = 0, a?.gameWorld?.player?.inputs.jump ? a.gameWorld.player.velocity.velVec3.y = this.options["Vertical Speed"] : a?.gameWorld?.player?.inputs.crouch ? a.gameWorld.player.velocity.velVec3.y = -this.options["Vertical Speed"] : a.gameWorld.player.velocity.velVec3.y = 0)
        }
        onDisable() {
            a.gameWorld.player.velocity.gravity = 23
        }
    }
    class I extends o {
        constructor() {
            super("Speed", "Movement", {
                Speed: 15
            })
        }
        onRender() {
            a?.gameWorld?.player && (a.gameWorld.player.velocity.moveSpeed = this.options.Speed, a.gameWorld.player.velocity.fastMoveSpeed = this.options.Speed)
        }
        onDisable() {
            a.gameWorld.player.velocity.moveSpeed = 4.5, a.gameWorld.player.velocity.fastMoveSpeed = 6.4
        }
    }
    class B extends o {
        constructor() {
            super("FreeHeadcoins", "Resources")
        }
        async onEnable() {super.onEnable()
            let e = await a.network.get("users/freeSpinner");
            a.stores.get("userState").user.balance.headcoins += e.data.amount, ee.modules.FreeHeadcoins.disable()
        }
    }
    class A extends o {
        constructor() {
            super("Fill", "World", {
                Radius: 4,
                "Block ID": 652,
                "Chunk Interval": 500
            }), this.lastExecutionTime = 0
        }
        onRender() {
            if (!a?.gameWorld?.player) return;
            let e = this.options.Radius;
            const t = this.options["Chunk Interval"],
                n = Date.now();
            if (n - this.lastExecutionTime >= t) {
                this.lastExecutionTime = n;
                let t = Object.values(a.gameWorld.player.position).splice(0, 3).map(Math.floor);
                for (let n = -e; n <= e; n++)
                    for (let s = -e; s <= e; s++)
                        for (let o = -e; o <= e; o++) {
                            const [e, i, r] = [t[0] + n, t[1] + s, t[2] + o];
                            0 == a.gameWorld.chunkManager.getBlock(e, i, r) && a.gameWorld.chunkManager.setBlock(e, i, r, this.options["Block ID"], !0, !0)
                        }
            }
        }
    }
    class T extends o {
        constructor() {
            super("Chams", "Visual", null)
        }
        onRender() {
            a?.gameWorld?.player && a.gameWorld.server.players.forEach((e => {
                e.playerMaterial.depthTest = !1, e.playerMaterial.wireframe = !0
            }))
        }
        onDisable() {
            a.gameWorld.server.players.forEach((e => {
                e.playerMaterial.depthTest = !0, e.playerMaterial.wireframe = !1
            }))
        }
    }
    class N extends o {
        constructor() {
            super("FOVChanger", "Visual", {
                FOV: 120
            })
        }
        onRender() {
            let e = a?.gameWorld?.threeScene?.camera || null;
            e?.updateProjectionMatrix && e.fov !== parseFloat(this.options.FOV) && (e.fov = parseFloat(this.options.FOV), e.updateProjectionMatrix(), a.gameWorld.player.settings.__defineGetter__("fov", (() => parseFloat(this.options.FOV))))
        }
        onDisable() {
            a.gameWorld.threeScene.camera = 70, a.gameWorld.threeScene.camera.updateProjectionMatrix(), delete a.gameWorld.player.settings.fov, a.gameWorld.player.settings.fov = 70
        }
    }
    class R extends o {
        constructor() {
            super("Scaffold", "Movement", null)
        }
        onRender() {
            if (!a?.gameWorld?.player) return;
            let e = Object.values(a.gameWorld.player.position).splice(0, 3).map(Math.floor);
            e[1]--;
            let t = a.gameWorld.player.currentInventoryItemId,
                n = a.gameWorld.chunkManager.getBlock(...e),
                s = a.gameWorld.items[n]?.replaceable || !1;
            (0 == n || s) && t && a.gameWorld.chunkManager.setBlock(...e, t, !0, !0)
        }
    }
    const z = {
            normalizeVector(e) {
                const t = e.x * e.x + e.y * e.y + e.z * e.z;
                if (t > 0) {
                    const n = 1 / Math.sqrt(t);
                    return [e.x * n, e.y * n, e.z * n]
                }
                return e
            },
            distanceBetween(e, t) {
                const n = t.x - e.x,
                    s = t.y - e.y,
                    o = t.z - e.z;
                return n * n + s * s + o * o
            },
            distanceBetweenSqrt(e, t) {
                return Math.sqrt(this.distanceBetween(e, t))
            },
            calculateDistance: (e, t) => Math.hypot(t.x - e.x, t.y - e.y, t.z - e.z),
            calculateDistanceArr: (e, t) => Math.hypot(t[0] - e[0], t[1] - e[1], t[2] - e[2])
        },
        D = {
            getClosestPlayer() {
                let e = a.gameWorld.player.position,
                    t = a.gameWorld.server.players,
                    n = [];
                return t.forEach((function(t, s) {
                    let o = z.distanceBetween(e, {
                        x: t._model.position.x,
                        y: t._model.position.y,
                        z: t._model.position.z
                    });
                    t.id = s, n.push({
                        player: t,
                        distance: o
                    })
                })), n.sort(((e, t) => e.distance - t.distance)), n.map((e => e.player))[0]
            },
            hexToRgb(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                } : null
            },
            openOtherItem(r) {
                let e = Object.values(a.gameWorld.player.position).map(Math.floor),
                    t = a.gameWorld.systemsManager.activeSystems.find(i => i?.openOtherItem);
                a.stores.get("inventoryState").setBackpackStates(0), setTimeout(() => {
                    t.openOtherItem(e, r)
                }, 100)
            }
        };
    class O extends o {
        constructor() {
            super("Killaura", "Combat", {
                "Y Offset": 1.62,
                Reach: 4,
                Delay: 120
            }), this.lastExecutionTime = null
        }
        onRender() {
            const e = Date.now();
            a?.gameWorld?.player && e - this.lastExecutionTime >= this.options.Delay && (this.lastExecutionTime = e, this.tryKill())
        }
        tryKill() {
            let e = this.options.Reach,
                t = this.options["Y Offset"],
                n = D.getClosestPlayer();
            var s = {
                    x: a.gameWorld.player.position.x,
                    y: a.gameWorld.player.position.y + t,
                    z: a.gameWorld.player.position.z
                },
                o = n._model.position,
                i = {
                    x: s.x - o.x,
                    y: s.y - o.y,
                    z: s.z - o.z
                },
                r = Math.sqrt(i.x * i.x + i.y * i.y + i.z * i.z);
            0 !== r && (i.x /= r, i.y /= r, i.z /= r), i.x = -i.x, i.y = -i.y, i.z = -i.z;
            var l = Math.sqrt(Math.pow(s.x - o.x, 2) + Math.pow(s.y - o.y, 2) + Math.pow(s.z - o.z, 2));
            l < e && a.gameWorld.server.sendData(13, [a.gameWorld.time.localServerTimeMs, s.x, s.y, s.z, i.x, i.y, i.z, l, n.id])
        }
    }
    class L extends o {
        constructor() {
            super("GunModifier", "Combat", {
                Spread: .5,
                "Bullets per shot": 100,
                "Firerate (ms)": 1,
                "Bullet distance": 1e3,
                "Reload Time": 1,
                Recoil: !1
            })
        }
        get gunSystem() {
            return a.gameWorld.systemsManager.activeSystems.find((e => e?.bulletsSystem))
        }
        onEnable() {super.onEnable()
            let e = this.gunSystem.playerShooter.currPlayerWeaponSpec;
            e.bulletsPerShot = this.options["Bullets per shot"], e.firerateMs = this.options["Firerate (ms)"], e.distance = this.options["Bullet distance"], e.startSpread = this.options.Spread, e.reloadTimeMs = this.options["Reload Time"], this.options.Recoil || (e.recoilAttackY = 0, e.recoilAttackY = 0)
        }
    }
    class F extends o {
        constructor() {
            super("Aimbot", "Combat", {
                "On Aim": "true",
                "On Shoot": "true",
                "Y Offset": .5
            }), this.lastExecutionTime = null
        }
        getClosestEnemy(e, t) {
            let n = null,
                s = 1 / 0;
            return t.forEach((t => {
                if (t?.model?.position && t.isAlive) {
                    let o = z.calculateDistance(e.position, t.model.position);
                    o < s && (s = o, n = t)
                }
            })), n
        }
        aimAtEnemy() {
            let e = a.gameWorld.player,
                t = a.gameWorld.server.players;
            if (!e || !t) return;
            let n = this.getClosestEnemy(e, t);
            if (n) {
                let t = n.model.position,
                    s = e.position,
                    o = {
                        x: t.x - s.x,
                        z: t.z - s.z
                    },
                    i = Math.atan2(o.x, o.z),
                    a = parseFloat(this.options["Y Offset"]),
                    r = t.y + a - s.y,
                    l = Math.hypot(o.x, o.z),
                    d = Math.atan2(r, l);
                d = Math.max(Math.min(d, Math.PI / 2), -Math.PI / 2);
                let c = (i + Math.PI) % (2 * Math.PI);
                e.rotation.y = c, e.rotation.x = d
            }
        }
        onRender() {
            a?.gameWorld?.server && ("true" == this.options["On Aim"] && a.gameWorld.player.inputs.rightMB || "true" == this.options["On Shoot"] && a.gameWorld.player.inputs.leftMB || "true" !== this.options["On Shoot"] && "true" !== this.options["On Aim"]) && this.aimAtEnemy()
        }
    }
    class H extends o {
        constructor() {
            super("NoClip", "Movement")
        }
        get playerPhysicsSystem() {
            return a.gameWorld.systemsManager.activeSystems.find((e => e?.playerPhysicsSystem)).playerPhysicsSystem
        }
        onRender() {
            a?.gameWorld?.player && (this._og = this._og || this.playerPhysicsSystem.resolveBlockCollision, this.playerPhysicsSystem.resolveBlockCollision == this._og && (this.playerPhysicsSystem.resolveBlockCollision = () => {}))
        }
        onDisable() {
            this.playerPhysicsSystem.resolveBlockCollision = this._og
        }
    }
    class U extends o {
        constructor() {
            super("Timer", "Movement", {
                Multiplier: 1.2
            }), this.interval = null
        }
        onEnable() {super.onEnable()
            this.interval && clearInterval(this.interval), this.interval = setInterval((() => {
                a.gameWorld.time.elapsedTimeMs += 20 * this.options.Multiplier
            }), 20)
        }
        onDisable() {
            this.interval && clearInterval(this.interval)
        }
    }
    const j = {
        toServer: {
            TIME_STEP_INFO: 1,
            REQUEST_RESPAWN: 4,
            GOT_DAMAGE: 27,
            PARKOUR_REQUEST_RESPAWN: 1004,
            ONE_BLOCK_REQUEST_RESPAWN: 1552,
            BED_WARS_REQUEST_RESPAWN: 1600,
            SANDBOX_REQUEST_RESPAWN: 1700
        },
        toClient: {
            SET_WALK_MODE: 41,
            SET_INVISIBLE_MODE: 42
        },
        listeners: {},
        packetListener(e, t) {
            Object.values(this.listeners).forEach((n => {
                let s = n(e, t);
                null != s && (t = s)
            })), a.gameWorld.server.msgsToSend.push(e, t)
        },
        init() {
            s.on("render", (() => {
                a?.gameWorld?.server?.sendData && (a.gameWorld.server.sendData = this.packetListener.bind(this))
            }))
        }
    };
    class K extends o {
        constructor() {
            super("NoFall", "Movement", null)
        }
        onEnable() {super.onEnable()
            j.listeners.NoFall = function(e, t) {
                if (e == j.toServer.TIME_STEP_INFO && t.lp) {
                    let e = t.lp[3];
                    e > 0 && (t.lp[3] *= .01), e < 0 && (t.lp[3] = -.01), 0 == e && (t.lp[3] = -.01)
                }
            }
        }
        onDisable() {
            delete j.listeners.NoFall
        }
    }
    class V extends o {
        constructor() {
            super("HighJump", "Movement", {
                "Jump Height": 25
            })
        }
        onRender() {
            a.gameWorld.player.velocity.jumpSpeed = parseFloat(this.options["Jump Height"])
        }
        onDisable() {
            a.gameWorld.player.velocity.jumpSpeed = 8.285714285714286
        }
    }
    class G extends o {
        constructor() {
            super("NoHunger", "Resources", null)
        }
        onEnable() {super.onEnable()
            j.listeners.NoHunger = function(e, t) {
                e == j.toServer.TIME_STEP_INFO && (t.m && delete t.m, t.s && delete t.s, t.j && delete t.j)
            }
        }
        onDisable() {
            delete j.listeners.NoHunger
        }
    }
    class q extends o {
        constructor() {
            super("NoDrown", "Resources", null)
        }
        get damageListener() {
            return a.gameWorld.eventEmitter._events.get(48).values().next().value
        }
        onRender() {
            a?.gameWorld?.eventEmitter?._events && this.damageListener.callback.toString().includes("damageToApply") && (this.damageListener.callback = () => {})
        }
        onDisable() {
            a?.gameWorld?.eventEmitter?._events && (this.damageListener.callback = e => {
                this.damageToApply += e
            })
        }
    }
    class lava extends o {
        constructor() {
            super("NoLavaDmg", "Resources", null)
        }
        get damageListener() {
            return a.gameWorld.eventEmitter._events.get(48).values().next().value
        }
        onRender() {
            a?.gameWorld?.eventEmitter?._events && this.damageListener.callback.toString().includes("damageToApply") && (this.damageListener.callback = () => {})
        }
        onDisable() {
            a?.gameWorld?.eventEmitter?._events && (this.damageListener.callback = e => {
                this.damageToApply += e
            })
        }
    }
    class Y extends o {
        constructor() {
            super("GroundSpeed", "Movement", {
                Speed: 15
            })
        }
        get playerPhysicsSystem() {
            return a.gameWorld.systemsManager.activeSystems.find((e => e?.playerPhysicsSystem)).playerPhysicsSystem
        }
        resetMovementSpeed() {
            a.gameWorld.player.velocity.moveSpeed = 4.5, a.gameWorld.player.velocity.fastMoveSpeed = 6.4
        }
        onRender() {
            a?.gameWorld?.player && (a.gameWorld.player.collision.isGrounded ? (a.gameWorld.player.velocity.moveSpeed = this.options.Speed, a.gameWorld.player.velocity.fastMoveSpeed = this.options.Speed) : this.resetMovementSpeed())
        }
        onEnable() {super.onEnable()
            let e = 0,
                t = 0;
            this.playerPhysicsSystem.BB.min.__defineGetter__("y", (() => e - .1)), this.playerPhysicsSystem.BB.max.__defineGetter__("y", (() => t - .1)), this.playerPhysicsSystem.BB.min.__defineSetter__("y", (t => {
                e = t
            })), this.playerPhysicsSystem.BB.max.__defineSetter__("y", (e => {
                t = e
            }))
        }
        onDisable() {
            this.resetMovementSpeed(), delete this.playerPhysicsSystem.BB.min.y, delete this.playerPhysicsSystem.BB.max.y
        }
    }
    class Q extends o {
        constructor() {
            super("InstantRespawn", "World")
        }
        get gamemode() {
            return location.pathname.replace("/match/", "")
        }
        onRender() {
            if (a.gameWorld?.player.isAlive) return;
            let e = !1;
            switch (this.gamemode) {
                case "one-block":
                    a.gameWorld.server.sendData(j.toServer.ONE_BLOCK_REQUEST_RESPAWN, !0), e = !0;
                case "parkour":
                    a.gameWorld.server.sendData(j.toServer.PARKOUR_REQUEST_RESPAWN, !0), e = !0;
                case "bedwars":
                    a.gameWorld.server.sendData(j.toServer.BED_WARS_REQUEST_RESPAWN, !0), e = !0;
                case "survival":
                    a.gameWorld.server.sendData(j.toServer.SANDBOX_REQUEST_RESPAWN, !0), e = !0
            }
            e && a.stores.get("gameState").setLayoutState(0)
        }
    }
    class Z extends o {
        constructor() {
            super("ShopAnywhere", "Resources")
        }
        get npcSystem() {
            return a?.gameWorld?.systemsManager?.activeSystems.find((e => e?.isPlayerInShoppingZone))
        }
        onRender() {
            this?.npcSystem?.isPlayerInShoppingZone && (this._og = this._og || this.npcSystem.isPlayerInShoppingZone, this.npcSystem.isPlayerInShoppingZone == this._og && (this.npcSystem.isPlayerInShoppingZone = () => !0))
        }
        onDisable() {
            this.npcSystem.isPlayerInShoppingZone = this._og
        }
    }
    class $ extends o {
        constructor() {
            super("SelfHarm", "World", {
                Amount: -10
            })
        }
        onEnable() {super.onEnable()
            a.gameWorld.server.msgsToSend.push(j.toServer.GOT_DAMAGE, parseFloat(this.options.Amount)), this.disable()
        }
    }
    class X extends o {
        constructor() {
            super("BlockFinder", "Resources", {
                "Search Radius": 16,
                "Block ID": 581
            }), this.CHUNK_SIZE = 16, this.CHUNK_CHECK_MS = 200, this.foundBlocks = [], this.lastChunkKey = "", this.chunkInterval = null, this.raf = null, this.ui = null, this.listEl = null
        }
        getPlayerChunk() {
            const e = a.gameWorld.player.position;
            return [Math.floor(e.x / this.CHUNK_SIZE), Math.floor(e.y / this.CHUNK_SIZE), Math.floor(e.z / this.CHUNK_SIZE)]
        }
        createUI() {
            if (this.ui) return;
            const e = document.createElement("div");
            e.style.cssText = "\n            position:fixed;\n            top:80px;\n            left:80px;\n            width:260px;\n            background:#111;\n            color:#ddd;\n            font:11px system-ui, sans-serif;\n            border-radius:6px;\n            box-shadow:0 6px 20px rgba(0,0,0,.4);\n            z-index:99999;\n            user-select:none;\n        ", e.innerHTML = '\n            <div class="bf-head" style="\n                padding:6px 8px;\n                cursor:move;\n                opacity:.85;\n            ">\n                Block Finder\n            </div>\n            <div class="bf-list" style="\n                max-height:260px;\n                overflow:auto;\n                padding:4px 8px 8px;\n                font-family:monospace;\n                white-space:pre;\n            "></div>\n        ', document.body.appendChild(e), this.ui = e, this.listEl = e.querySelector(".bf-list");
            let t = !1,
                n = 0,
                s = 0;
            e.querySelector(".bf-head").onmousedown = o => {
                t = !0, n = o.clientX - e.offsetLeft, s = o.clientY - e.offsetTop
            }, document.addEventListener("mousemove", this._dragMove = o => {
                t && (e.style.left = o.clientX - n + "px", e.style.top = o.clientY - s + "px")
            }), document.addEventListener("mouseup", this._dragUp = () => {
                t = !1
            })
        }
        destroyUI() {
            this.ui && (this.ui.remove(), this.ui = null, this.listEl = null, document.removeEventListener("mousemove", this._dragMove), document.removeEventListener("mouseup", this._dragUp))
        }
        scanChunks() {
            const e = 0 | this.options["Search Radius"],
                t = 0 | this.options["Block ID"],
                n = a.gameWorld.chunkManager,
                s = this.getPlayerChunk();
            this.foundBlocks.length = 0;
            for (let o = -e; o <= e; o++)
                for (let i = -e; i <= e; i++)
                    for (let r = -e; r <= e; r++) {
                        const e = s[0] + o,
                            l = s[1] + i,
                            d = s[2] + r,
                            c = n.getChunkArray(e, l, d);
                        if (c)
                            for (let n = 0; n < c.length; n++) {
                                if (c[n] !== t) continue;
                                const s = (e << 4) + (15 & n),
                                    o = (l << 4) + (n >> 4 & 15),
                                    i = (d << 4) + (n >> 8);
                                a.gameWorld.chunkManager.getBlock(s, o, i) === t && this.foundBlocks.push([s, o, i])
                            }
                    }
        }
        renderDistances = () => {
            if (!this.listEl) return;
            const e = [...a.gameWorld.player.position];
            0 === this.foundBlocks.length ? this.listEl.textContent = "none nearby" : this.listEl.textContent = this.foundBlocks.map((t => ({
                pos: t,
                d: z.calculateDistanceArr(e, t)
            }))).sort(((e, t) => e.d - t.d)).map((e => `${e.pos[0]}, ${e.pos[1]}, ${e.pos[2]}  ${e.d.toFixed(1)}m`)).join("\n"), this.raf = requestAnimationFrame(this.renderDistances)
        };
        onEnable() {super.onEnable()
            this.createUI(), this.scanChunks(), this.renderDistances(), this.chunkInterval = setInterval((() => {
                const e = this.getPlayerChunk().join(",");
                e !== this.lastChunkKey && (this.lastChunkKey = e, this.scanChunks())
            }), this.CHUNK_CHECK_MS)
        }
        onDisable() {
            clearInterval(this.chunkInterval), cancelAnimationFrame(this.raf), this.chunkInterval = null, this.raf = null, this.foundBlocks.length = 0, this.lastChunkKey = "", this.destroyUI()
        }
    }
    class J extends o {
        constructor() {
            super("Spider", "Movement", {
                Speed: 5
            })
        }
        get playerPhysicsSystem() {
            return a.gameWorld.systemsManager.activeSystems.find((e => e?.playerPhysicsSystem)).playerPhysicsSystem
        }
        get upAgainstWall() {
            return 0 == this.playerPhysicsSystem.playerVelVec3.x || 0 == this.playerPhysicsSystem.playerVelVec3.z
        }
        onRender() {
            a?.gameWorld?.player && a?.gameWorld?.player?.inputs.jump && this.upAgainstWall && (a.gameWorld.player.velocity.velVec3.y = this.options.Speed)
        }
    }
    class LineFiller extends o {
        constructor() {
            super("LineFiller", "World", {
                X1: 0, Y1: 0, Z1: 0,
                X2: 0, Y2: 0, Z2: 0,
                "Use Player As Start": "false",
                "Use Player As End": "false",
                "Speed (ms)": 50, // Delay between blocks
                Execute: "false"
            });
        }

        get playerPos() {
            const p = a?.gameWorld?.player?.position;
            if (!p) return null;
            return [Math.floor(p.x), Math.floor(p.y), Math.floor(p.z)];
        }

        onSettingUpdate() {
            // Force strings to booleans/checks
            const isTrue = (val) => val === "true" || val === true;

            if (isTrue(this.options["Use Player As Start"])) {
                const pos = this.playerPos;
                if (pos) {
                    this.options.X1 = pos[0]; this.options.Y1 = pos[1]; this.options.Z1 = pos[2];
                }
                this.options["Use Player As Start"] = "false";
            }

            if (isTrue(this.options["Use Player As End"])) {
                const pos = this.playerPos;
                if (pos) {
                    this.options.X2 = pos[0]; this.options.Y2 = pos[1]; this.options.Z2 = pos[2];
                    console.log("Point B (End) Locked:", pos);
                }
                this.options["Use Player As End"] = "false";
            }

            if (isTrue(this.options.Execute)) {
                this.fillLine();
                this.options.Execute = "false";
            }
        }

        async fillLine() {
            const world = a?.gameWorld;
            if (!world || !world.player) return;

            // Store original position to return after building
            const startPos = {
                x: world.player.position.x,
                y: world.player.position.y,
                z: world.player.position.z
            };

            const x1 = Number(this.options.X1), y1 = Number(this.options.Y1), z1 = Number(this.options.Z1);
            const x2 = Number(this.options.X2), y2 = Number(this.options.Y2), z2 = Number(this.options.Z2);
            let blockId = world.player?.inventory?.getSelectedBlock?.() || 1;

            const dx = x2 - x1, dy = y2 - y1, dz = z2 - z1;
            const steps = Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz));
            const delay = Number(this.options["Speed (ms)"]);

            console.log(`LineFiller: Moving and building ${steps + 1} blocks...`);

            for (let i = 0; i <= steps; i++) {
                const t = i / steps;
                const px = Math.floor(x1 + (t * dx) + 0.5);
                const py = Math.floor(y1 + (t * dy) + 0.5);
                const pz = Math.floor(z1 + (t * dz) + 0.5);

                // 1. Update Player Position (Teleport to block)
                // We set y to py + 1.6 to simulate the player standing on/near the block
                world.player.position.x = px;
                world.player.position.y = py + 2;
                world.player.position.z = pz;

                // 2. Place the block
                // The 'true, true' flags usually force a network update
                world.chunkManager.setBlock(px, py, pz, blockId, true, true);

                // 3. Wait for server synchronization
                await new Promise(res => setTimeout(res, delay));
            }

            // Optional: Return to original position
            world.player.position.x = startPos.x;
            world.player.position.y = startPos.y;
            world.player.position.z = startPos.z;

            console.log("LineFiller: Complete and returned to start.");
        }
    }
    class MagicWandPaste extends o {
        constructor() {
            super("MagicWandPaste", "World", {
                "Range": 3,
                "Delay (ms)": 50, // Small delay to prevent server kick
                "Blocks Per Step": 1, // How many blocks to place before waiting
                "Auto-Paste": "true",
                "Activation Key": "KeyV", // Now uses a key instead of LeftMB
                "Manual X": 0,
                "Manual Y": 0,
                "Manual Z": 0,
                "Copy/Paste": "Copy"
            });
            this.pendingBlocks = new Map();
            this.isPasting = false; // Prevents overlapping loops
            this.initHook();

        }

        initHook() {
            const self = this;
            const originalLog = console.log;
            console.log = function(...args) {
                if (args[0] && typeof args[0] === "string" && args[0].includes("Blocks was pasted:")) {
                    const data = args[1];
                    for (const [coords, id] of Object.entries(data)) {
                        self.pendingBlocks.set(coords, id);
                    }
                    originalLog.apply(console, ["Wand Data Captured:", self.pendingBlocks.size, "blocks."]);
                }
                originalLog.apply(console, args);
            };
        }

        // Triggered every frame
        onRender() {
            if (!this.isEnabled || !a?.gameWorld?.player || this.pendingBlocks.size === 0) return;

            // If clicking and not already running the loop, start pasting
            if (a.gameWorld.player.inputs.rightMB && !this.isPasting) {
                this.runPasteLoop();
            }
        }

        async runPasteLoop() {
            this.isPasting = true;
            const world = a.gameWorld;
            const delay = Number(this.options["Delay (ms)"]);
            const perStep = Number(this.options["Blocks Per Step"]);
            const range = Number(this.options["Range"]);



            let batchCount = 0;

            const coords = Array.from(this.pendingBlocks.keys());

            for (const coordStr of coords) {
                const p = world.player.position;
                const px = Math.floor(p.x);
                const py = Math.floor(p.y);
                const pz = Math.floor(p.z);

                const [bx, by, bz] = coordStr.split(',').map(Number);

                const dx = Math.abs(bx - px);
                const dy = Math.abs(by - py);
                const dz = Math.abs(bz - pz);



                if (dx <= range && dy <= range && dz <= range) {
                    const blockId = this.pendingBlocks.get(coordStr);

                    world.chunkManager.setBlock(bx, by, bz, blockId, true, true);

                    this.pendingBlocks.delete(coordStr);
                    batchCount++;

                    if (batchCount >= perStep) {
                        await new Promise(res => setTimeout(res, delay));
                        batchCount = 0;
                    }
                } else {
                    console.log("Out of range:", coordStr);
                }
            }


            this.isPasting = false;
        }

    }
    class DiamondThrower extends o {
        constructor() {
            super("63DiamondThrower", "World", { "Item ID": "862" }, "KeyT");
        }

        onEnable() {super.onEnable()
            this._handler = (event) => {
                if (this.isEnabled && event.code === "KeyT") {
                    this.throwStack();
                }
            };
            window.addEventListener("keydown", this._handler);
        }

        onDisable() {
            window.removeEventListener("keydown", this._handler);
        }

        throwStack() {
            try {
                const gameState = a.stores.get("gameState");
                const inventory = a.stores.get("inventory");
                const server = gameState.networkController;

                if (server && inventory) {
                    // Using the exact array format from your code snippet:
                    // [StoreType, Quantity, SlotIndex]
                    // W.POCKET is usually 0, and selectedItem is the current slot
                    const slot = inventory.selectedItem;

                    // V.THROW_OUT_ITEM is the packet key for dropping
                    server.sendData(V.THROW_OUT_ITEM, [W.POCKET, 63, slot]);

                    console.log("%c[Exploit] Threw 63x Stack from slot " + slot, "color: cyan");
                }
            } catch (err) {
                console.error("Stack Throw Error:", err);
            }
        }
    }
    class Treeclean extends o {
        constructor() {
            super("CleanABlockTree", "World", {
                Radius: 3,
                "Chunk Interval": 1e3,
                "Target Blocks": "471, 502, 474, 501, 610"
            }), this.lastExecutionTime = 0
        }
        onRender() {
            if (!a?.gameWorld?.player) return;
            let e = this.options.Radius;
            const t = this.options["Chunk Interval"],
                n = Date.now();
            if (n - this.lastExecutionTime >= t) {
                this.lastExecutionTime = n;
                let t = Object.values(a.gameWorld.player.position).splice(0, 3).map(Math.floor);
                const targetBlocks = this.options["Target Blocks"]
                .split(',')                 // Split by comma
                .map(id => parseInt(id.trim())) // Remove whitespace and convert to Number
                .filter(id => !isNaN(id));  // Remove any entries that aren't valid numbers
                for (let n = -e; n <= e; n++)
                    for (let s = -e; s <= e; s++)
                        for (let o = -e; o <= e; o++) {
                            const [e, i, r] = [t[0] + n, t[1] + s, t[2] + o];
                            const currentBlock = a.gameWorld.chunkManager.getBlock(e, i, r);
                            // Check if the current block is in our target list
                            if (targetBlocks.includes(currentBlock)) {
                                a.gameWorld.chunkManager.setBlock(e, i, r, 0, !0, !0);
                            }
                        }
            }
        }
    }
    class minestone extends o {
        constructor() {
            super("MineExceptOres", "World", {
                Radius: 3,
                "Chunk Interval": 1e3,
                "Min Y": 6,
                "Target Blocks": "581, 691 ,830, 571, 652, 616"
            }), this.lastExecutionTime = 0
        }
        onRender() {
            if (!a?.gameWorld?.player) return;
            let e = this.options.Radius;
            const minY = this.options["Min Y"];
            const t = this.options["Chunk Interval"],
                n = Date.now();
            if (n - this.lastExecutionTime >= t) {
                this.lastExecutionTime = n;
                let t = Object.values(a.gameWorld.player.position).splice(0, 3).map(Math.floor);
                const inputBlocks = this.options["Target Blocks"].split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
                const targetBlocks = [...new Set([0, ...inputBlocks])];
                for (let n = -e; n <= e; n++)
                    for (let s = -e; s <= e; s++)
                        for (let o = -e; o <= e; o++) {
                            const [e, i, r] = [t[0] + n, t[1] + s, t[2] + o];
                            if (i < minY) continue;
                            const currentBlock = a.gameWorld.chunkManager.getBlock(e, i, r);
                            // Check if the current block is in our target list
                            if (!targetBlocks.includes(currentBlock)) {
                                a.gameWorld.chunkManager.setBlock(e, i, r, 0, !0, !0);
                            }
                        }
            }
        }
    }
    class CopyBuild extends o {
    constructor() {
        super("CopyBuild", "World", {
            "Set Point A": "false",
            "Set Point B": "false",
            "Copy Now": "false",
            "Copied Data": "None"
        });
        this.pointA = null;
        this.pointB = null;
    }

    onSettingUpdate() {
        // Accessing player position safely
        const p = a?.gameWorld?.player?.position;
        if (!p) return;

        const curPos = [Math.floor(p.x), Math.floor(p.y), Math.floor(p.z)];

        if (this.options["Set Point A"] === "true") {
            this.pointA = [...curPos]; // Create a copy of the array
            console.log("%c[CopyBuild] Point A set:", "color: yellow", this.pointA);
            this.options["Set Point A"] = "false";
        }

        if (this.options["Set Point B"] === "true") {
            this.pointB = [...curPos];
            console.log("%c[CopyBuild] Point B set:", "color: yellow", this.pointB);
            this.options["Set Point B"] = "false";
        }

        if (this.options["Copy Now"] === "true") {
            this.performCopy();
            this.options["Copy Now"] = "false";
        }
    }

    performCopy() {
        if (!this.pointA || !this.pointB) {
            console.error("Points not set! Stand at corner 1 and click Set A, then corner 2 and click Set B.");
            return;
        }

        const world = a.gameWorld;
        const result = {};
        let count = 0;

        // Boundaries
        const xRange = [Math.min(this.pointA[0], this.pointB[0]), Math.max(this.pointA[0], this.pointB[0])];
        const yRange = [Math.min(this.pointA[1], this.pointB[1]), Math.max(this.pointA[1], this.pointB[1])];
        const zRange = [Math.min(this.pointA[2], this.pointB[2]), Math.max(this.pointA[2], this.pointB[2])];

        console.log(`%c[CopyBuild] Scanning from ${xRange[0]},${yRange[0]},${zRange[0]} to ${xRange[1]},${yRange[1]},${zRange[1]}`, "color: cyan");

        for (let x = xRange[0]; x <= xRange[1]; x++) {
            for (let y = yRange[0]; y <= yRange[1]; y++) {
                for (let z = zRange[0]; z <= zRange[1]; z++) {
                    const id = world.chunkManager.getBlock(x, y, z);

                    // 0 is air. We only save actual blocks.
                    if (id !== 0 && id !== null && id !== undefined) {
                        // Relative coordinates: makes the build "portable"
                        const relX = x - this.pointA[0];
                        const relY = y - this.pointA[1];
                        const relZ = z - this.pointA[2];
                        result[`${relX},${relY},${relZ}`] = id;
                        count++;
                    }
                }
            }
        }

        if (count > 0) {
            this.options["Copied Data"] = JSON.stringify(result);
            console.log(`%c[CopyBuild] Success! ${count} blocks copied.`, "color: lime");
            // Alerting the user in the console so they can copy it from there if the UI truncates it
            console.log("DATA:", JSON.stringify(result));
        } else {
            console.warn("[CopyBuild] No blocks found in that area. Are the chunks loaded?");
            this.options["Copied Data"] = "Error: No blocks found";
        }
    }
}
    class duper extends o{constructor(){super("Dupe","Resources")}
                      onEnable()
                      {let e=a.stores.get("inventoryState"),t=e[1][e.selectedItem].q;for(let n=0;n<t;n++)a.gameWorld.server.sendData(509,[1,"1",e.selectedItem]),a.gameWorld.server.sendData(509,[1,"1",e.selectedItem]);this.disable()}}
    class dupetroll extends o{constructor(){super("Dupetroll","Resources")}
                      onRender()
                      {let e=a.stores.get("inventoryState"),t=e[1][e.selectedItem].q;for(let n=0;n<t;n++)a.gameWorld.server.sendData(509,[1,"1",e.selectedItem]),a.gameWorld.server.sendData(509,[1,"1",e.selectedItem]);}}
    class FreeMinebucks extends o {
            constructor() {
                super("FreeMinebucks", "Resources")
            }
            onEnable() {super.onEnable()
                hooks.A.network.get("/users/freeHeadcoins"), hooks.A.stores.userState.user.balance.minebucks += 10, module_moduleManager.modules.minebucks.disable()
            }
        }

    class FreeSpins extends o {
        constructor() {
            super("freeSpins", "Resources")
        }
        onEnable() {super.onEnable()
            hooks.A.network.get("/users/freeSpinner"), hooks.A.stores.userState.user.balance.freeSpinner += 10, module_moduleManager.modules.freeSpinner.disable()
        }
    }
    class KnockbackDisabler extends o {
        constructor() {
            super("KnockbackDisabler", "World");

            // Configurações internas
            this.blocks = 10;     // knockback
            this.damage = 2;      // dano
        }

        applyKnockbackAndDamage(target, attacker) {
            let dx = target.x - attacker.x;
            let dy = target.y - attacker.y;
            let length = Math.sqrt(dx * dx + dy * dy);

            if (!length) return;

            dx /= length;
            dy /= length;

            // Knockback
            target.x += dx * this.blocks;
            target.y += dy * this.blocks;

            // Dano
            if (typeof target.health === "number") {
                target.health -= this.damage;
                if (target.health < 0) target.health = 0;
            }
        }

        onRender() {
            // Simulação de evento "onHit"
            if (window.player && window.attacker && window.playerWasHit) {
                this.applyKnockbackAndDamage(window.player, window.attacker);

                // Reseta evento
                window.playerWasHit = false;
            }
        }
    }
    class Disabler extends o {
            constructor() {
                super("Disabler", "Resources"), this.packetID = null
            }
            insaneBypass() {}
            onRender() {
                if (!hooks.A?.gameWorld?.player) return;
                let e = hooks.A.stores.gameState.gameWorld.server.msgsListeners;
                this.packetID || (this.packetID = Object.keys(e).find((t => e[t].toString().includes("correct pos")))), e[this.packetID] !== this.insaneBypass && (e[this.packetID] = this.insaneBypass)
            }
        }
    class HitAllModule extends o {
        constructor() {
            super("1HitAll", "Combat", null, "KeyU"); // Atalho: tecla U
        }

        hitAll() {
            try {
            window.hooked.gameWorld.server.players.forEach(plr => {
                const { x, y, z } = plr.model.position;
                if (plr.hasOwnProperty('isBlock')) { // HNS
                    if (plr.isHunter) return;
                    window.hooked.gameWorld.server.sendData(packetsOut.HNS_ATTACK_BLOCK, [x, y + 0.1, z, 0.00000001, -0.9999999, 0.00000001, window.hooked.gameWorld.time.localServerTimeMs, plr.sessionId]);
                } if (plr.hasOwnProperty('isZombie')) { // Infection
                    if (plr.isZombie) return;
                    window.hooked.gameWorld.server.sendData(packetsOut.HIT, [window.hooked.gameWorld.time.localServerTimeMs, x, y + 0.1, z, 0.00000001, -0.9999999, 0.00000001, 2, plr.sessionId]);
                } else { // Other
                    window.hooked.gameWorld.server.sendData(packetsOut.HIT, [window.hooked.gameWorld.time.localServerTimeMs, x, y + 0.1, z, 0.00000001, -0.9999999, 0.00000001, 2, plr.sessionId]);
                }
            });
        } catch {}
        }

        onEnable() {super.onEnable()
            this.hitAll();
        }
    }
    class TeleportModule extends o {
        constructor() {
            super("Teleport", "World");

            // Atalho fixo: tecla T (não ativa/desativa o módulo)
            this.key = "KeyT";

            document.addEventListener("keydown", (e) => {
                if (e.code === this.key && !e.repeat) {
                    this.tpToSelectedBlock();
                }
            });
        }

        /** Função de teleporte */
        tp(x = 0, y = 0, z = 0, relative = true) {
            try {
                const player = hooks.A?.gameWorld?.player;
                if (!player) return;

                const position = player.position;
                if (relative) {
                    position.x += x;
                    position.y += y;
                    position.z += z;
                } else {
                    Object.assign(position, { x, y, z });
                }
                player.physicsPosComp.copyPos(position);
            } catch (err) {
                console.warn("Teleport falhou:", err);
            }
        }

        /** Teleporta até o bloco selecionado (crosshair) */
        tpToSelectedBlock() {
            try {
                const gameWorld = hooks.A?.gameWorld;
                if (!gameWorld) return;

                const outlineSystem = gameWorld.systemsManager.activeSystems.find(s => s.currBlockPos);
                if (!outlineSystem) return;

                outlineSystem.intersectAndShow(true, 500);
                if (!outlineSystem.currBlockPos) return;

                const { x, y, z } = outlineSystem.currBlockPos;
                this.tp(x, y + 1, z, false);
            } catch (err) {
                console.warn("Erro ao teleportar:", err);
            }
        }
    }



         class HitModule extends o {
        constructor() {
            super("2HitAll", "Combat", null, "KeyX"); // Atalho: tecla X
        }

        hitAll() {
            try {
                hooks.A?.gameWorld?.server?.players.forEach(plr => {
                    const { x, y, z } = plr.model.position;

                    if (plr.hasOwnProperty('isBlock')) { // HNS
                        if (plr.isHunter) return;
                        hooks.A.gameWorld.server.sendData(
                            packetsOut.HNS_ATTACK_BLOCK,
                            [x, y + 0.1, z, 0.00000001, -0.9999999, 0.00000001,
                             hooks.A.gameWorld.time.localServerTimeMs, plr.sessionId]
                        );
                    } else if (plr.hasOwnProperty('isZombie')) { // Infection
                        if (plr.isZombie) return;
                        hooks.A.gameWorld.server.sendData(
                            packetsOut.HIT,
                            [hooks.A.gameWorld.time.localServerTimeMs, x, y + 0.1, z,
                             0.00000001, -0.9999999, 0.00000001, 2, plr.sessionId]
                        );
                    } else { // Other
                        hooks.A.gameWorld.server.sendData(
                            packetsOut.HIT,
                            [hooks.A.gameWorld.time.localServerTimeMs, x, y + 0.1, z,
                             0.00000001, -0.9999999, 0.00000001, 2, plr.sessionId]
                        );
                    }
                });
            } catch {}
        }

        onEnable() {super.onEnable()
            this.hitAll(); // executa quando ativado pelo menu ou tecla X
        }
    }
     class GhostMode extends o {
        constructor() {
            super("GhostMode", "Movement", {
                Fade: true,
                Duration: 500
            });
            this.isGhost = false;
        }

        onEnable() {super.onEnable()
            const player = hooks.A?.gameWorld?.player;
            if (!player || !player.model) return;
            const model = player.model;

            if (this.settings.Fade) {
                this.fadeModel(model, this.settings.Duration, false);
            } else {
                model.visible = false;
            }

            this.isGhost = true;
            console.log("[GhostMode] Modelo oculto localmente.");
        }

        onDisable() {
            const player = hooks.A?.gameWorld?.player;
            if (!player || !player.model) return;
            const model = player.model;

            if (this.settings.Fade) {
                this.fadeModel(model, this.settings.Duration, true);
            } else {
                model.visible = true;
            }

            this.isGhost = false;
            console.log("[GhostMode] Modelo visível novamente.");
        }

        // Função utilitária para fade in/out do modelo (educacional)
        fadeModel(model, duration = 600, visible = false) {
            if (!model) return;
            const meshes = [];
            model.traverse(obj => {
                if (obj.isMesh) {
                    obj.material = obj.material.clone();
                    obj.material.transparent = true;
                    obj.material.depthWrite = false;
                    meshes.push(obj);
                }
            });

            const start = performance.now();
            const from = visible ? 0 : 1;
            const to = visible ? 1 : 0;

            function animate(now) {
                const t = Math.min(1, (now - start) / duration);
                const value = from + (to - from) * t;
                meshes.forEach(m => {
                    m.material.opacity = value;
                    m.visible = value > 0.01;
                });
                if (t < 1) requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
        }
    }
    class NoFog extends o {
        constructor() {
            super("NoFog", "Visual", null);
        }

        onRender() {
            try {
                if (hooks.A?.gameWorld?.threeScene?.scene?.fog) {
                    Object.assign(
                        hooks.A.gameWorld.threeScene.scene.fog,
                        {
                            near: 9999,
                            far: 10000
                        }
                    );
                }
            } catch {}
        }
    }
    class ChatTranslator extends o {
        constructor() {
            super("ChatTranslator", "Utils", {
                "Target Lang": "en",
                "Show Info Popup": "true"
            });

            this.messageCache = {};
            this.messageDataAttribute = null;
        }

        async onEnable() {super.onEnable()
            this.initAttributeFinder();
            this.hookCreateElement();
            this.initOutgoingTranslate();

            if (this.options["Show Info Popup"] === "true") {
                this.showInfo();
            }
        }

        initAttributeFinder() {
            const interval = setInterval(() => {
                try {
                    let css = [...document.styleSheets].find(x => x?.href && x.href.includes('assets/Game-'));
                    if (!css) return;

                    let match = [...css.cssRules].find(x => x?.selectorText?.includes('.messages[data-v-'))?.selectorText;
                    if (!match) return;

                    this.messageDataAttribute = match.slice(10, -1);
                    clearInterval(interval);
                } catch {}
            }, 250);
        }

        hookCreateElement() {
            const self = this;
            const _createElement = document.createElement;

            document.createElement = function () {
                const el = _createElement.apply(this, arguments);
                if (el.tagName !== 'DIV') return el;

                const _setAttribute = el.setAttribute;
                el.setAttribute = function () {
                    if (self.messageDataAttribute && arguments[0] === self.messageDataAttribute) {
                        self.handleMessage(this);
                    }
                    return _setAttribute.apply(this, arguments);
                };

                return el;
            };
        }

        async translate(text, tl = "en") {
            if (this.messageCache[text]) return this.messageCache[text];

            const res = await fetch(
                `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${tl}&dt=t&q=${encodeURIComponent(text)}`
            );

            const data = await res.json();
            const result = [data[2], data[0].map(x => x[0]).join('')];

            this.messageCache[text] = result;
            return result;
        }

        handleMessage(el) {
            if (!el || el.children.length !== 2) return;

            const textEl = el.children[1];
            if (!textEl.innerText) return;

            this.translate(textEl.innerText, this.options["Target Lang"])
                .then(translated => {
                if (!textEl.innerText) return;
                textEl.innerText = `[${translated[0]}]: ${translated[1]}`;
            })
                .catch(() => {});
        }

        initOutgoingTranslate() {
            document.addEventListener('keydown', async (e) => {
                if (e.key !== '.') return;

                const input = e.target;
                if (!(input.tagName === 'INPUT' || input.tagName === 'TEXTAREA')) return;

                const match = input.value.match(/^\[([a-z]{2,5})\]:\s*(.*)/);
                if (!match) return;

                e.preventDefault();

                const targetLang = match[1];
                const text = match[2];

                if (!text) return;

                try {
                    const translated = await this.translate(text, targetLang);
                    input.value = translated[1];
                    input.dispatchEvent(new Event('input', { bubbles: true }));
                } catch {}
            });
        }

        showInfo() {
            const box = document.createElement("div");
            box.textContent = "Use [lang]: text then press '.' to translate";
            box.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: black;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            z-index: 99999;
            font-size: 14px;
        `;

            document.body.appendChild(box);
            setTimeout(() => box.remove(), 1000);
        }
    }
    class CleanScreen extends o {
    constructor() {
        super("ZenMode", "Utils", {
            "Enabled": "false"
        });

        this.isClean = false;
        this.hidden = [];
    }

    onEnable() {super.onEnable()
        this.keyHandler = (e) => {
            if (e.key.toLowerCase() === 'h') {
                const active = document.activeElement;
                if (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA') return;

                this.toggle();
            }
        };

        document.addEventListener("keydown", this.keyHandler);
    }

    onDisable() {
        document.removeEventListener("keydown", this.keyHandler);
        if (this.isClean) this.toggle();
    }

    getElements() {
        const list = [];

        document.querySelectorAll('*').forEach(el => {
            if (el.tagName === 'CANVAS') return;

            const style = getComputedStyle(el);
            if (
                (style.position === 'fixed' || style.position === 'absolute') &&
                style.display !== 'none'
            ) {
                list.push(el);
            }
        });

        return list;
    }

    toggle() {
        this.isClean = !this.isClean;

        if (this.isClean) {
            this.hidden = this.getElements();

            this.hidden.forEach(el => {
                el.dataset.oldDisplay = el.style.display;
                el.style.display = 'none';
            });

        } else {
            this.hidden.forEach(el => {
                el.style.display = el.dataset.oldDisplay || '';
            });

            this.hidden = [];
        }
    }
}
class FpsBoost extends o {
    constructor() {
        super("FPS Boost", "Utils", null);
        this.originalGetContext = null;
    }

    onEnable() {super.onEnable()
        try {
            // Force tab always visible (prevents throttling)
            Object.defineProperty(document, 'hidden', {
                value: false,
                writable: false
            });

            Object.defineProperty(document, 'visibilityState', {
                value: 'visible',
                writable: false
            });
        } catch {}

        try {
            // Hook WebGL context
            this.originalGetContext = HTMLCanvasElement.prototype.getContext;

            HTMLCanvasElement.prototype.getContext = function (type, args) {
                if (type && type.includes('webgl')) {
                    args = args || {};
                    args.powerPreference = "high-performance";
                    args.antialias = false;        // disable AA
                    args.desynchronized = true;   // low latency
                }
                return this.originalGetContext
                    ? this.originalGetContext.call(this, type, args)
                    : HTMLCanvasElement.prototype.getContext.call(this, type, args);
            }.bind(this);
        } catch {}
    }

    onDisable() {
        try {
            if (this.originalGetContext) {
                HTMLCanvasElement.prototype.getContext = this.originalGetContext;
            }
        } catch {}
    }
}
    class ZeraHUD extends o {
    constructor() {
        super("StatsHUD", "Utils", {
            ShowFPS: true,
            ShowPing: true,
            ShowCPS: true
        });

        this.fps = 0;
        this.frames = 0;
        this.last = performance.now();

        this.ping = 0;
        this.pings = [];

        this.clicks = [];
        this.cps = 0;

        this.hue = 0;
    }

    getColor(offset = 0) {
        let h = (this.hue + offset) % 360;
        let mapped = 60 + ((Math.sin(h * 0.02) + 1) / 2) * 120; // yellow → cyan
        return `hsl(${mapped}, 100%, 60%)`;
    }

    updateFPS() {
        this.frames++;
        let now = performance.now();
        if (now - this.last >= 1000) {
            this.fps = this.frames;
            this.frames = 0;
            this.last = now;
        }
    }

    updatePing() {
        let start = performance.now();
        fetch(location.origin, { method: "GET", mode: "no-cors", cache: "no-store" })
        .finally(() => {
            let p = performance.now() - start;
            if (p > 0 && p < 2000) {
                this.pings.push(p);
                if (this.pings.length > 20) this.pings.shift();
                this.ping = Math.round(this.pings.reduce((a,b)=>a+b,0)/this.pings.length);
            }
        });
    }

    updateCPS() {
        let now = performance.now();
        this.clicks = this.clicks.filter(t => now - t < 1000);
        this.cps = this.clicks.length;
    }

    onEnable() {super.onEnable()
        if (!this.el) {
            this.el = document.createElement("div");
            this.el.className = "ZeraMine-stats";

            Object.assign(this.el.style, {
                position: "absolute",
                bottom: "30px",
                right: "10px",
                padding: "6px 12px",
                fontFamily: "'Product Sans', sans-serif",
                fontSize: "21px",
                zIndex: "1000",
                userSelect: "none",
                display: "flex",
                gap: "12px",
                background: "rgba(0,0,0,0.4)",
                borderRadius: "8px",
                backdropFilter: "blur(8px)"
            });

            document.body.appendChild(this.el);
        }

        this.el.style.display = "flex";

        // click tracker
        this.clickHandler = (e) => {
            if (e.isTrusted) this.clicks.push(performance.now());
        };
        window.addEventListener("pointerdown", this.clickHandler, true);

        // ping loop
        this.pingLoop = setInterval(() => this.updatePing(), 2500);
    }

    onDisable() {
        if (this.el) this.el.style.display = "none";
        if (this.clickHandler) window.removeEventListener("pointerdown", this.clickHandler, true);
        if (this.pingLoop) clearInterval(this.pingLoop);
    }

    onRender() {
        try {
            this.updateFPS();
            this.updateCPS();

            this.hue = (this.hue + 2) % 360;

            let html = "";

            if (this.options.ShowFPS) {
                html += `<span style="
                    background: linear-gradient(90deg, ${this.getColor(0)}, ${this.getColor(40)});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 8px ${this.getColor(0)};
                ">FPS: ${this.fps}</span>`;
            }

            if (this.options.ShowPing) {
                html += `<span style="
                    background: linear-gradient(90deg, ${this.getColor(60)}, ${this.getColor(100)});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 8px ${this.getColor(60)};
                ">PING: ${this.ping}ms</span>`;
            }

            if (this.options.ShowCPS) {
                html += `<span style="
                    background: linear-gradient(90deg, ${this.getColor(120)}, ${this.getColor(160)});
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    text-shadow: 0 0 8px ${this.getColor(120)};
                ">CPS: ${this.cps}</span>`;
            }

            this.el.innerHTML = html;

        } catch {}
    }
}
    // Add Shaders button to Visual category panel
    class Shaders extends o {
    constructor() {
        super("ShadersMenu", "Utils", {
            "Shader Preset": "none",
            "Texture Pack": "vanilla",
            "Brightness": 100,
            "Contrast": 100,
            "Saturation": 100,
            "Sepia": 0,
            "Hue Rotate": 0,
            "Invert": 0,
            "Blur": 0,
            "Enable Shadows": "false",
            "Bloom Strength": 0,
            "Particle Effect": "none",
            "Particle Density": 60,
            "Particle Speed": 1.0
        });

        this.filterLoop = null;
        this.currentFilter = null;
        this.mainCanvas = null;
        this.uiElement = null;
        this.isOpen = false;
        this.inMatch = false;

        this.particles = {
            parts: [],
            canvas: null,
            ctx: null,
            ready: false,
            animFrame: null
        };
    }

    get shaders() {
        return {
            none: [],
            bloom: ['brightness(110%)', 'contrast(115%)'],
            vibrant: ['saturate(160%)', 'contrast(110%)'],
            cinematic: ['contrast(125%)', 'brightness(90%)', 'saturate(80%)'],
            noir: ['grayscale(100%)', 'contrast(150%)', 'brightness(90%)'],
            thermal: ['hue-rotate(180deg)', 'saturate(250%)', 'brightness(120%)'],
            retro: ['saturate(130%)', 'contrast(120%)', 'sepia(30%)'],
            acid: ['hue-rotate(90deg)', 'saturate(200%)', 'contrast(150%)'],
            cyberpunk: ['hue-rotate(270deg)', 'saturate(180%)', 'contrast(140%)', 'brightness(110%)'],
            neon: ['saturate(200%)', 'contrast(130%)', 'brightness(115%)'],
            dreamscape: ['saturate(150%)', 'hue-rotate(15deg)', 'brightness(105%)', 'contrast(110%)'],
            matrix: ['saturate(200%)', 'hue-rotate(120deg)', 'contrast(125%)'],
            underwater: ['hue-rotate(200deg)', 'saturate(140%)', 'brightness(90%)'],
            sunset: ['hue-rotate(15deg)', 'saturate(180%)', 'brightness(110%)', 'contrast(115%)'],
            frost: ['hue-rotate(200deg)', 'saturate(50%)', 'brightness(120%)', 'contrast(110%)'],
            vintage: ['sepia(40%)', 'saturate(70%)', 'contrast(110%)', 'brightness(95%)']
        };
    }

    get texturePacks() {
        return {
            vanilla: [],
            faithful: ['brightness(95%)', 'contrast(105%)'],
            neon: ['saturate(200%)', 'brightness(120%)', 'contrast(115%)'],
            dark: ['brightness(60%)', 'contrast(130%)'],
            minimal: ['brightness(105%)', 'saturate(70%)', 'contrast(90%)'],
            vivid: ['saturate(180%)', 'contrast(125%)', 'brightness(105%)'],
            soft: ['brightness(110%)', 'contrast(85%)', 'saturate(90%)'],
            hd: ['contrast(120%)', 'brightness(105%)', 'saturate(110%)'],
            cold: ['hue-rotate(200deg)', 'saturate(80%)', 'brightness(95%)'],
            warm: ['hue-rotate(15deg)', 'saturate(120%)', 'brightness(105%)']
        };
    }

    getGameCanvas() {
        if (this.mainCanvas && document.body.contains(this.mainCanvas) && this.mainCanvas.clientWidth > 100) {
            return this.mainCanvas;
        }

        const canvases = Array.from(document.querySelectorAll('canvas')).filter(c =>
            !c.id.includes('bg-part') && !c.id.includes('shader-particles')
        );

        if (canvases.length) {
            this.mainCanvas = canvases.reduce((biggest, c) =>
                (c.clientWidth * c.clientHeight) > (biggest.clientWidth * biggest.clientHeight) ? c : biggest
            );
            return this.mainCanvas;
        }
        return null;
    }

    buildFilterString() {
        const arr = [];
        const opt = this.options;

        if (opt.Brightness !== 100) arr.push(`brightness(${opt.Brightness}%)`);
        if (opt.Contrast !== 100) arr.push(`contrast(${opt.Contrast}%)`);
        if (opt.Saturation !== 100) arr.push(`saturate(${opt.Saturation}%)`);
        if (opt.Sepia !== 0) arr.push(`sepia(${opt.Sepia}%)`);
        if (opt["Hue Rotate"] !== 0) arr.push(`hue-rotate(${opt["Hue Rotate"]}deg)`);
        if (opt.Invert !== 0) arr.push(`invert(${opt.Invert}%)`);
        if (opt.Blur !== 0) arr.push(`blur(${opt.Blur}px)`);

        const shaderFilters = this.shaders[opt["Shader Preset"]];
        if (shaderFilters) arr.push(...shaderFilters);

        const textureFilters = this.texturePacks[opt["Texture Pack"]];
        if (textureFilters) arr.push(...textureFilters);

        if (opt["Enable Shadows"] === "true") {
            arr.push('drop-shadow(0 4px 12px rgba(0,0,0,0.6))');
        }

        if (opt["Bloom Strength"] > 0) {
            arr.push(`brightness(${100 + opt["Bloom Strength"] * 0.5}%)`);
        }

        return arr.length ? arr.join(' ') : 'none';
    }

    applyFilters() {
        const canvas = this.getGameCanvas();
        if (canvas) {
            const filterStr = this.buildFilterString();
            if (filterStr !== this.currentFilter) {
                this.currentFilter = filterStr;
                canvas.style.filter = filterStr;
                canvas.style.transform = 'translateZ(0)';
            }
        }
    }

    removeFilters() {
        const canvas = this.getGameCanvas();
        if (canvas) {
            canvas.style.filter = 'none';
            canvas.style.transform = '';
            this.currentFilter = null;
        }
    }

    setupParticleSystem() {
        const p = this.particles;
        if (p.ready) return;

        try {
            p.canvas = document.createElement('canvas');
            p.canvas.id = 'shader-particles';
            p.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:50;';
            p.ctx = p.canvas.getContext('2d', { alpha: true });
            document.documentElement.appendChild(p.canvas);
            this.resizeParticleCanvas();
            window.addEventListener('resize', () => this.resizeParticleCanvas());
            p.ready = true;
            this.runParticles();
        } catch (e) {}
    }

    resizeParticleCanvas() {
        const p = this.particles;
        if (p.canvas) {
            p.canvas.width = window.innerWidth;
            p.canvas.height = window.innerHeight;
        }
    }

    updateMatchState() {
        const locked = !!document.pointerLockElement;
        if (locked !== this.inMatch) {
            this.inMatch = locked;
            if (this.particles.canvas) {
                this.particles.canvas.style.display = this.inMatch ? 'none' : 'block';
            }
        }
    }

    tickParticles() {
        const p = this.particles;
        const opt = this.options;

        this.updateMatchState();

        if (this.inMatch || opt["Particle Effect"] === 'none') {
            p.parts = [];
            return;
        }

        const density = parseInt(opt["Particle Density"]) || 60;
        const speed = parseFloat(opt["Particle Speed"]) || 1.0;
        const effectType = opt["Particle Effect"];

        if (p.parts.length < density * 3 && Math.random() < 0.5) {
            const particle = {
                x: Math.random() * p.canvas.width,
                y: -10,
                type: effectType
            };

            switch (effectType) {
                case 'snow':
                    particle.vx = (Math.random() - 0.5) * 0.5 * speed;
                    particle.vy = (0.5 + Math.random() * 1.5) * speed;
                    particle.size = 1.5 + Math.random() * 2;
                    particle.wobble = Math.random() * 10;
                    break;
                case 'rain':
                    particle.vx = 0.5 * speed;
                    particle.vy = (12 + Math.random() * 8) * speed;
                    particle.size = 1.5;
                    break;
                case 'stardust':
                    particle.vx = (1 + Math.random() * 2) * speed;
                    particle.vy = (1 + Math.random() * 1.5) * speed;
                    particle.size = 2.5 + Math.random() * 3;
                    particle.wobble = Math.random() * 10;
                    particle.hue = Math.random() * 60;
                    break;
                case 'sakura':
                    particle.vx = (Math.random() - 0.5) * 2 * speed;
                    particle.vy = (1 + Math.random() * 1) * speed;
                    particle.size = 3 + Math.random() * 4;
                    particle.wobble = Math.random() * 10;
                    particle.color = `hsl(${330 + Math.random() * 30}, 100%, 50%)`;
                    break;
                case 'fireflies':
                    particle.y = p.canvas.height + 10;
                    particle.vx = (Math.random() - 0.5) * 1.5 * speed;
                    particle.vy = -(0.5 + Math.random() * 1.5) * speed;
                    particle.size = 1.5 + Math.random() * 2;
                    particle.wobble = Math.random() * 10;
                    break;
                case 'matrix':
                    particle.x = Math.floor(Math.random() * p.canvas.width / 20) * 20;
                    particle.y = -20;
                    particle.vx = 0;
                    particle.vy = (3 + Math.random() * 4) * speed;
                    particle.size = 14;
                    particle.char = String.fromCharCode(0x30A0 + Math.random() * 96);
                    break;
                case 'aurora':
                    particle.y = Math.random() * p.canvas.height * 0.3;
                    particle.vx = speed * 0.5;
                    particle.vy = 0;
                    particle.size = 50 + Math.random() * 100;
                    particle.hue = Math.random() * 360;
                    particle.life = 1;
                    break;
            }
            p.parts.push(particle);
        }

        for (let i = p.parts.length - 1; i >= 0; i--) {
            const w = p.parts[i];
            w.y += w.vy;
            w.x += w.vx;

            if (['snow', 'stardust', 'sakura'].includes(w.type)) {
                w.x += Math.sin(w.wobble) * 0.8;
                w.wobble += 0.03;
            }
            if (w.type === 'fireflies') w.wobble += 0.02;

            if (w.type === 'aurora') {
                w.life -= 0.005;
                if (w.life < 0) { p.parts.splice(i, 1); continue; }
            }

            if (w.type === 'matrix' && Math.random() < 0.05) {
                w.char = String.fromCharCode(0x30A0 + Math.random() * 96);
            }

            if ((w.vy > 0 && w.y > p.canvas.height + 20) || (w.vy < 0 && w.y < -20)) {
                p.parts.splice(i, 1);
            }
        }
    }

    renderParticles() {
        const p = this.particles;
        if (!p.ctx || !p.ready) return;

        p.ctx.clearRect(0, 0, p.canvas.width, p.canvas.height);

        for (const w of p.parts) {
            p.ctx.globalAlpha = 0.85;

            switch (w.type) {
                case 'snow':
                    p.ctx.fillStyle = '#ffffff';
                    p.ctx.beginPath();
                    p.ctx.arc(w.x, w.y, w.size, 0, Math.PI * 2);
                    p.ctx.fill();
                    break;

                case 'rain':
                    p.ctx.fillStyle = '#aaddff';
                    p.ctx.fillRect(w.x, w.y, 1.5, w.size * 8);
                    break;

                case 'stardust':
                    p.ctx.fillStyle = `hsl(${60 + w.hue}, 100%, 60%)`;
                    p.ctx.shadowBlur = 15;
                    p.ctx.shadowColor = p.ctx.fillStyle;
                    p.ctx.beginPath();
                    p.ctx.arc(w.x, w.y, w.size, 0, Math.PI * 2);
                    p.ctx.fill();
                    p.ctx.shadowBlur = 0;
                    break;

                case 'sakura':
                    p.ctx.fillStyle = w.color;
                    p.ctx.save();
                    p.ctx.translate(w.x, w.y);
                    p.ctx.rotate(w.wobble);
                    p.ctx.beginPath();
                    p.ctx.ellipse(0, 0, w.size, w.size / 2, 0, 0, Math.PI * 2);
                    p.ctx.fill();
                    p.ctx.restore();
                    break;

                case 'fireflies':
                    p.ctx.fillStyle = '#ccff00';
                    p.ctx.shadowBlur = 15;
                    p.ctx.shadowColor = '#ccff00';
                    p.ctx.beginPath();
                    p.ctx.arc(w.x + Math.sin(w.wobble) * 20, w.y, w.size, 0, Math.PI * 2);
                    p.ctx.fill();
                    p.ctx.shadowBlur = 0;
                    break;

                case 'matrix':
                    p.ctx.font = 'bold 14px monospace';
                    p.ctx.fillStyle = '#00ff44';
                    p.ctx.fillText(w.char, w.x, w.y);
                    break;

                case 'aurora':
                    p.ctx.fillStyle = `hsla(${w.hue}, 100%, 50%, ${w.life * 0.3})`;
                    p.ctx.fillRect(0, w.y, p.canvas.width, w.size);
                    break;
            }
        }
        p.ctx.globalAlpha = 1;
    }

    runParticles() {
        if (!this.particles.ready) return;
        this.tickParticles();
        this.renderParticles();
        this.particles.animFrame = requestAnimationFrame(() => this.runParticles());
    }

    stopParticles() {
        if (this.particles.animFrame) {
            cancelAnimationFrame(this.particles.animFrame);
            this.particles.animFrame = null;
        }
        if (this.particles.canvas) {
            this.particles.canvas.remove();
            this.particles.canvas = null;
            this.particles.ctx = null;
            this.particles.ready = false;
            this.particles.parts = [];
        }
    }

    createUI() {
        if (this.uiElement) return;

        const ui = document.createElement('div');
        ui.className = 'shader-ui-panel';
        ui.innerHTML = `
            <div class="shader-ui-header">
                <span class="shader-ui-title">✨ Shaders</span>
                <div class="shader-macos-close" id="shader-close-btn"></div>
            </div>
                <div class="shader-tab active" data-tab="visuals">Visuals</div>
                <div class="shader-tab" data-tab="particles">Particles</div>
            </div>
            <div class="shader-ui-body">
                <div class="shader-tab-content active" id="tab-visuals">
                    <div class="shader-section-title">Shader Presets</div>
                    <div class="shader-select-wrapper">
                        <select id="shader-preset" class="shader-select">
                            <option value="none">None</option>
                            <option value="bloom">✨ Bloom</option>
                            <option value="vibrant">🎨 Vibrant</option>
                            <option value="cinematic">🎬 Cinematic</option>
                            <option value="noir">🎭 Noir</option>
                            <option value="thermal">🔥 Thermal</option>
                            <option value="retro">🕹️ Retro</option>
                            <option value="acid">⚗️ Acid</option>
                            <option value="cyberpunk">🤖 Cyberpunk</option>
                            <option value="neon">💡 Neon</option>
                            <option value="dreamscape">💫 Dreamscape</option>
                            <option value="matrix">💻 Matrix</option>
                            <option value="underwater">🌊 Underwater</option>
                            <option value="sunset">🌅 Sunset</option>
                            <option value="frost">❄️ Frost</option>
                            <option value="vintage">📷 Vintage</option>
                        </select>
                    </div>

                    <div class="shader-section-title">Texture Pack</div>
                    <div class="shader-select-wrapper">
                        <select id="texture-pack" class="shader-select">
                            <option value="vanilla">Vanilla</option>
                            <option value="faithful">Faithful</option>
                            <option value="neon">Neon</option>
                            <option value="dark">Dark</option>
                            <option value="minimal">Minimal</option>
                            <option value="vivid">Vivid</option>
                            <option value="soft">Soft</option>
                            <option value="hd">HD</option>
                            <option value="cold">Cold</option>
                            <option value="warm">Warm</option>
                        </select>
                    </div>

                    <div class="shader-section-title">Adjustments</div>
                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Brightness</span>
                            <span class="shader-slider-value" id="val-brightness">100%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-brightness" min="30" max="200" step="5" value="100">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Contrast</span>
                            <span class="shader-slider-value" id="val-contrast">100%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-contrast" min="30" max="200" step="5" value="100">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Saturation</span>
                            <span class="shader-slider-value" id="val-saturation">100%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-saturation" min="0" max="300" step="10" value="100">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Sepia</span>
                            <span class="shader-slider-value" id="val-sepia">0%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-sepia" min="0" max="100" step="5" value="0">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Hue Rotate</span>
                            <span class="shader-slider-value" id="val-hue">0°</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-hue" min="0" max="360" step="15" value="0">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Invert</span>
                            <span class="shader-slider-value" id="val-invert">0%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-invert" min="0" max="100" step="10" value="0">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Blur</span>
                            <span class="shader-slider-value" id="val-blur">0px</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-blur" min="0" max="20" step="1" value="0">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Bloom Strength</span>
                            <span class="shader-slider-value" id="val-bloom">0%</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-bloom" min="0" max="100" step="10" value="0">
                    </div>

                    <div class="shader-toggle-row">
                        <span class="shader-toggle-label">Enable Shadows</span>
                        <label class="shader-switch">
                            <input type="checkbox" id="toggle-shadows">
                            <span class="shader-switch-slider"></span>
                        </label>
                    </div>
                </div>

                <div class="shader-tab-content" id="tab-particles">
                    <div class="shader-section-title">Menu Background Effects</div>
                    <div class="shader-select-wrapper">
                        <select id="particle-type" class="shader-select">
                            <option value="none">None</option>
                            <option value="snow">❄️ Snow</option>
                            <option value="rain">🌧️ Rain</option>
                            <option value="stardust">✨ Stardust</option>
                            <option value="sakura">🌸 Sakura</option>
                            <option value="fireflies">🌟 Fireflies</option>
                            <option value="matrix">💻 Matrix</option>
                            <option value="aurora">🌌 Aurora</option>
                        </select>
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Density</span>
                            <span class="shader-slider-value" id="val-density">60</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-density" min="10" max="200" step="10" value="60">
                    </div>

                    <div class="shader-slider-group">
                        <div class="shader-slider-row">
                            <span class="shader-slider-label">Speed</span>
                            <span class="shader-slider-value" id="val-speed">1.0x</span>
                        </div>
                        <input type="range" class="shader-slider" id="slider-speed" min="0.3" max="3" step="0.1" value="1.0">
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(ui);
        this.uiElement = ui;
        this.injectStyles();
        this.attachUIEvents();
        this.syncUIToOptions();
    }

    injectStyles() {
        if (document.getElementById('shader-ui-styles')) return;

        const style = document.createElement('style');
        style.id = 'shader-ui-styles';
        style.textContent = `
            .shader-ui-panel {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 400px;
                max-height: 600px;
                z-index: 10000;
                background: var(--panel-bg, rgba(20, 20, 20, 0.95));
                border: 1px solid rgba(0, 242, 255, 0.4);
                border-radius: 8px;
                font-family: 'Product Sans', sans-serif;
                color: var(--text-color, #ffffff);
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 242, 255, 0.1);
                overflow: hidden;
                backdrop-filter: blur(20px);
            }

            .shader-ui-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                background: linear-gradient(90deg, #00f2ff 0%, #70e1ff 100%);
                padding: 12px 15px;
                font-weight: 900;
                font-size: 18px;
                color: #000;
                border-bottom: 2px solid rgba(255, 251, 0, 0.8);
            }

            .shader-ui-tabs {
                display: flex;
                background: rgba(0, 0, 0, 0.3);
                border-bottom: 1px solid rgba(0, 242, 255, 0.2);
            }

            .shader-tab {
                flex: 1;
                padding: 10px;
                text-align: center;
                font-size: 13px;
                font-weight: 600;
                color: #888;
                cursor: pointer;
                transition: all 0.2s;
                border-bottom: 2px solid transparent;
            }

            .shader-tab:hover {
                color: #00f2ff;
                background: rgba(0, 242, 255, 0.05);
            }

            .shader-tab.active {
                color: #00f2ff;
                border-bottom-color: #00f2ff;
                background: rgba(0, 242, 255, 0.1);
            }

            .shader-ui-body {
                padding: 15px;
                max-height: 480px;
                overflow-y: auto;
            }

            .shader-ui-body::-webkit-scrollbar {
                width: 6px;
            }

            .shader-ui-body::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.2);
            }

            .shader-ui-body::-webkit-scrollbar-thumb {
                background: rgba(0, 242, 255, 0.4);
                border-radius: 3px;
            }

            .shader-tab-content {
                display: none;
            }

            .shader-tab-content.active {
                display: block;
                animation: shaderFadeIn 0.2s ease-out;
            }

            @keyframes shaderFadeIn {
                from { opacity: 0; transform: translateY(-5px); }
                to { opacity: 1; transform: translateY(0); }
            }

            .shader-section-title {
                font-size: 11px;
                font-weight: 700;
                color: rgba(255, 251, 0, 0.9);
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 10px;
                padding-bottom: 6px;
                border-bottom: 1px dashed rgba(0, 242, 255, 0.3);
            }

            .shader-select-wrapper {
                margin-bottom: 15px;
            }

            .shader-select {
                width: 100%;
                padding: 10px 12px;
                background: rgba(30, 30, 30, 0.9);
                border: 1px solid rgba(0, 242, 255, 0.2);
                color: #fff;
                border-radius: 6px;
                font-family: 'Product Sans', sans-serif;
                font-size: 12px;
                cursor: pointer;
                outline: none;
                transition: border-color 0.2s;
            }

            .shader-select:hover,
            .shader-select:focus {
                border-color: rgba(0, 242, 255, 0.5);
            }

            .shader-select option {
                background: #1a1a1a;
                color: #fff;
            }

            .shader-slider-group {
                margin-bottom: 12px;
            }

            .shader-slider-row {
                display: flex;
                justify-content: space-between;
                margin-bottom: 6px;
            }

            .shader-slider-label {
                font-size: 12px;
                font-weight: 400;
                color: #ccc;
            }

            .shader-slider-value {
                font-size: 12px;
                font-weight: 600;
                color: #00f2ff;
            }

            .shader-slider {
                width: 100%;
                height: 6px;
                -webkit-appearance: none;
                appearance: none;
                background: rgba(40, 40, 40, 0.9);
                border-radius: 3px;
                outline: none;
            }

            .shader-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: linear-gradient(135deg, #00f2ff, #70e1ff);
                cursor: pointer;
                box-shadow: 0 0 8px rgba(0, 242, 255, 0.5);
                transition: transform 0.1s;
            }

            .shader-slider::-webkit-slider-thumb:hover {
                transform: scale(1.2);
            }

            .shader-slider::-moz-range-thumb {
                width: 14px;
                height: 14px;
                border-radius: 50%;
                background: linear-gradient(135deg, #00f2ff, #70e1ff);
                cursor: pointer;
                border: none;
                box-shadow: 0 0 8px rgba(0, 242, 255, 0.5);
            }

            .shader-toggle-row {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                border-top: 1px solid rgba(255, 255, 255, 0.05);
                margin-top: 5px;
            }

            .shader-toggle-label {
                font-size: 12px;
                font-weight: 400;
                color: #ccc;
            }

            .shader-switch {
                position: relative;
                display: inline-block;
                width: 40px;
                height: 22px;
            }

            .shader-switch input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .shader-switch-slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: rgba(40, 40, 40, 0.9);
                border-radius: 22px;
                transition: all 0.3s;
            }

            .shader-switch-slider:before {
                position: absolute;
                content: "";
                height: 16px;
                width: 16px;
                left: 3px;
                bottom: 3px;
                background: #888;
                border-radius: 50%;
                transition: all 0.3s;
            }

            .shader-switch input:checked + .shader-switch-slider {
                background: rgba(0, 242, 255, 0.3);
            }

            .shader-switch input:checked + .shader-switch-slider:before {
                transform: translateX(18px);
                background: #00f2ff;
                box-shadow: 0 0 8px rgba(0, 242, 255, 0.5);
            }
            .shader-ui-title {
                pointer-events: none; /* Prevents text selection when dragging/clicking */
            }
            #shader-particles {
                position: fixed;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;
                pointer-events: none;
                z-index: 50;
            }
            .shader-macos-close {
                width: 14px;
                height: 14px;
                background: #ff5f57;
                border-radius: 50%;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: all 0.15s ease;
                position: relative;
                box-shadow: inset 0 -1px 1px rgba(0,0,0,0.15);
            }

            .shader-macos-close:hover {
                background: #ff3b30;
                transform: scale(1.1);
            }

            /* The 'x' icon that appears on hover */
            .shader-macos-close::before {
                content: '×';
                position: absolute;
                color: rgba(80, 0, 0, 0.9);
                font-size: 13px;
                font-weight: 900;
                line-height: 1;
                opacity: 0;
                transition: opacity 0.15s ease;
                margin-top: -1px;
            }

            .shader-macos-close:hover::before {
                opacity: 1;
            }
        `;
        document.head.appendChild(style);
    }
    closeUI() {
        this.isOpen = false;
        if (this.uiElement) {
            this.uiElement.style.display = 'none';
        }
        // Stop the interval checking for canvas, but DO NOT remove the filters.
        // The CSS filter stays applied to the canvas even after the loop stops.
        this.stopFilterLoop();
        this.stopParticles();
    }
    attachUIEvents() {
        const ui = this.uiElement;
        if (!ui) return;
        ui.querySelector('#shader-close-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeUI();

            // Update the ClickGUI button state so it doesn't look out of sync
            // (The module is technically still "enabled" in the background keeping shaders applied)
        });
        // Tab switching
        ui.querySelectorAll('.shader-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                ui.querySelectorAll('.shader-tab').forEach(t => t.classList.remove('active'));
                ui.querySelectorAll('.shader-tab-content').forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(`tab-${tab.dataset.tab}`).classList.add('active');
            });
        });

        // Select dropdowns
        ui.querySelector('#shader-preset').addEventListener('change', (e) => {
            this.options["Shader Preset"] = e.target.value;
            this.applyFilters();
        });

        ui.querySelector('#texture-pack').addEventListener('change', (e) => {
            this.options["Texture Pack"] = e.target.value;
            this.applyFilters();
        });

        ui.querySelector('#particle-type').addEventListener('change', (e) => {
            this.options["Particle Effect"] = e.target.value;
        });

        // Sliders
        const sliders = [
            { id: 'slider-brightness', valId: 'val-brightness', key: 'Brightness', suffix: '%' },
            { id: 'slider-contrast', valId: 'val-contrast', key: 'Contrast', suffix: '%' },
            { id: 'slider-saturation', valId: 'val-saturation', key: 'Saturation', suffix: '%' },
            { id: 'slider-sepia', valId: 'val-sepia', key: 'Sepia', suffix: '%' },
            { id: 'slider-hue', valId: 'val-hue', key: 'Hue Rotate', suffix: '°' },
            { id: 'slider-invert', valId: 'val-invert', key: 'Invert', suffix: '%' },
            { id: 'slider-blur', valId: 'val-blur', key: 'Blur', suffix: 'px' },
            { id: 'slider-bloom', valId: 'val-bloom', key: 'Bloom Strength', suffix: '%' },
            { id: 'slider-density', valId: 'val-density', key: 'Particle Density', suffix: '' },
            { id: 'slider-speed', valId: 'val-speed', key: 'Particle Speed', suffix: 'x', isFloat: true }
        ];

        sliders.forEach(({ id, valId, key, suffix, isFloat }) => {
            const slider = ui.querySelector(`#${id}`);
            const valDisplay = ui.querySelector(`#${valId}`);

            if (slider && valDisplay) {
                slider.addEventListener('input', (e) => {
                    const val = isFloat ? parseFloat(e.target.value) : parseInt(e.target.value);
                    this.options[key] = val;
                    valDisplay.textContent = isFloat ? val.toFixed(1) + suffix : val + suffix;
                    if (['Brightness', 'Contrast', 'Saturation', 'Sepia', 'Hue Rotate', 'Invert', 'Blur', 'Bloom Strength'].includes(key)) {
                        this.applyFilters();
                    }
                });
            }
        });

        // Toggle
        ui.querySelector('#toggle-shadows').addEventListener('change', (e) => {
            this.options["Enable Shadows"] = e.target.checked ? "true" : "false";
            this.applyFilters();
        });
    }

    syncUIToOptions() {
        const ui = this.uiElement;
        if (!ui) return;

        const opt = this.options;

        ui.querySelector('#shader-preset').value = opt["Shader Preset"];
        ui.querySelector('#texture-pack').value = opt["Texture Pack"];
        ui.querySelector('#particle-type').value = opt["Particle Effect"];

        const setSlider = (id, valId, value, suffix, isFloat) => {
            const slider = ui.querySelector(`#${id}`);
            const valDisplay = ui.querySelector(`#${valId}`);
            if (slider) slider.value = value;
            if (valDisplay) valDisplay.textContent = isFloat ? parseFloat(value).toFixed(1) + suffix : value + suffix;
        };

        setSlider('slider-brightness', 'val-brightness', opt.Brightness, '%');
        setSlider('slider-contrast', 'val-contrast', opt.Contrast, '%');
        setSlider('slider-saturation', 'val-saturation', opt.Saturation, '%');
        setSlider('slider-sepia', 'val-sepia', opt.Sepia, '%');
        setSlider('slider-hue', 'val-hue', opt["Hue Rotate"], '°');
        setSlider('slider-invert', 'val-invert', opt.Invert, '%');
        setSlider('slider-blur', 'val-blur', opt.Blur, 'px');
        setSlider('slider-bloom', 'val-bloom', opt["Bloom Strength"], '%');
        setSlider('slider-density', 'val-density', opt["Particle Density"], '');
        setSlider('slider-speed', 'val-speed', opt["Particle Speed"], 'x', true);

        ui.querySelector('#toggle-shadows').checked = opt["Enable Shadows"] === "true";
    }

    toggleUI() {
        this.isOpen = !this.isOpen;
        if (this.uiElement) {
            this.uiElement.style.display = this.isOpen ? 'block' : 'none';
            if (this.isOpen) {
                this.syncUIToOptions();
            }
        }
    }

    onEnable() {super.onEnable()
        this.createUI();
        this.setupParticleSystem();
        this.startFilterLoop();
        this.toggleUI();

        // Hook into ClickGUI button handling
        this.setupGUIHook();
    }

    onDisable() {
        this.stopFilterLoop();
        this.removeFilters();
        this.stopParticles();

        if (this.uiElement) {
            this.uiElement.remove();
            this.uiElement = null;
        }
        this.isOpen = false;
    }

    startFilterLoop() {
        if (this.filterLoop) clearInterval(this.filterLoop);
        this.filterLoop = setInterval(() => {
            if (this.isEnabled) {
                this.applyFilters();
            }
        }, 100);
    }

    stopFilterLoop() {
        if (this.filterLoop) {
            clearInterval(this.filterLoop);
            this.filterLoop = null;
        }
    }

    setupGUIHook() {
        // Store reference for external access
        window._ZeraShaders = this;
    }

    // Static method to toggle UI from GUI button click
    static toggleFromGUI() {
        const instance = window._ZeraShaders;
        if (instance) {
            if (!instance.isEnabled) {
                instance.enable();
            } else {
                instance.toggleUI();
                if (!instance.isOpen) {
                    instance.disable();
                }
            }
        }
    }
}
        // --- Module 1: Custom Crosshair ---
        class ZCrosshair extends o {
        constructor() {
            super("CustomCrosshair", "Utils", {
                "Preset": "default",
                "Size": 1.0,
                "CustomURL": ""
            });
            this.overlay = null;
            this.crosshairPresets = {
                "default": "background: #fff; width: 4px; height: 4px; border-radius: 50%;",
                "dot": "background: #00f2ff; width: 6px; height: 6px; border-radius: 50%; box-shadow: 0 0 5px #00f2ff;",
                "cross": "background: transparent; border: 2px solid #fff; width: 10px; height: 10px; box-sizing: border-box;",
                "circle": "background: transparent; border: 2px solid #00f2ff; width: 20px; height: 20px; border-radius: 50%; box-shadow: 0 0 5px #00f2ff;",
                "t": "background: #fff; width: 4px; height: 14px; border-radius: 2px;"
            };
        }

        onEnable() {super.onEnable()
            this.createUI();
            this.applyCrosshair();
            if(this.uiElement) this.uiElement.style.display = "flex";
        }

        onDisable() {
            if(this.overlay) this.overlay.remove();
            // Hide UI instead of removing it so it reappears on re-enable
            if(this.uiElement) this.uiElement.style.display = "none";
        }

        applyCrosshair() {
            if(!this.overlay) {
                this.overlay = document.createElement("div");
                this.overlay.className = "zera-crosshair-overlay";
                document.body.appendChild(this.overlay);
            }
            this.overlay.style.cssText = "pointer-events: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); z-index: 9999;";

            if(this.options.Preset === "custom" && this.options.CustomURL) {
                this.overlay.style.background = `url('${this.options.CustomURL}') no-repeat center`;
                this.overlay.style.backgroundSize = "contain";
                this.overlay.style.width = (32 * this.options.Size) + "px";
                this.overlay.style.height = (32 * this.options.Size) + "px";
                this.overlay.style.border = "none";
                this.overlay.style.borderRadius = "0";
            } else {
                this.overlay.style.backgroundImage = "none";
                const style = this.crosshairPresets[this.options.Preset] || this.crosshairPresets["default"];
                this.overlay.style.cssText += style;
                this.overlay.style.transform = `translate(-50%, -50%) scale(${this.options.Size})`;
            }
        }

        // Helper to update preview without crashing
        updatePreview(ui) {
            const prev = ui.querySelector("#z-preview-el");
            if(!prev) return;
            prev.style.cssText = "pointer-events: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);";
            if(this.options.Preset === "custom" && this.options.CustomURL) {
                prev.style.background = `url('${this.options.CustomURL}') no-repeat center`;
                prev.style.backgroundSize = "contain";
                prev.style.width = (32 * this.options.Size) + "px";
                prev.style.height = (32 * this.options.Size) + "px";
            } else {
                prev.style.backgroundImage = "none";
                const style = this.crosshairPresets[this.options.Preset] || "";
                prev.style.cssText += style;
                prev.style.transform = `translate(-50%, -50%) scale(${this.options.Size})`;
            }
        }

        onSettingUpdate() {
            this.applyCrosshair();
            if(this.uiElement) {
                const pSel = this.uiElement.querySelector("#z-crosshair-preset");
                const sIn = this.uiElement.querySelector("#z-crosshair-size");
                const uIn = this.uiElement.querySelector("#z-crosshair-url");
                if(pSel) pSel.value = this.options.Preset;
                if(sIn) sIn.value = this.options.Size;
                if(uIn) uIn.value = this.options.CustomURL;

                const urlRow = this.uiElement.querySelector("#z-url-row");
                if(urlRow) urlRow.style.display = this.options.Preset === "custom" ? "flex" : "none";

                this.updatePreview(this.uiElement);
            }
        }

        createUI() {
            if(this.uiElement) return;
            const ui = document.createElement("div");
            ui.className = "zera-modal";
            ui.innerHTML = `
                <div class="zera-modal-header">
                    <span>Custom Crosshair</span>
                    <div class="zera-close-btn"></div>
                </div>
                <div class="zera-modal-body">
                    <div class="zera-setting-row">
                        <span class="zera-label">Preset</span>
                        <select id="z-crosshair-preset" class="zera-select" style="width: 150px;">
                            <option value="default">Default</option>
                            <option value="dot">Neon Dot</option>
                            <option value="cross">Cross</option>
                            <option value="circle">Circle</option>
                            <option value="t">T-Shape</option>
                            <option value="custom">Custom URL</option>
                        </select>
                    </div>
                    <div class="zera-setting-row" id="z-url-row" style="display:none;">
                        <span class="zera-label">Image URL</span>
                        <input type="text" id="z-crosshair-url" class="zera-input" style="width: 150px;">
                    </div>
                    <div class="zera-setting-row">
                        <span class="zera-label">Size</span>
                        <input type="range" id="z-crosshair-size" min="0.5" max="3" step="0.1" style="width: 150px;">
                    </div>
                    <div id="zera-crosshair-preview">
                        <div id="z-preview-el" class="zera-crosshair-overlay"></div>
                    </div>
                </div>
            `;
            document.body.appendChild(ui);
            this.uiElement = ui;

            // Events
            ui.querySelector(".zera-close-btn").onclick = () => this.uiElement.style.display = "none";

            const updateAndEmit = () => {
                this.options.Preset = ui.querySelector("#z-crosshair-preset").value;
                this.options.Size = parseFloat(ui.querySelector("#z-crosshair-size").value);
                this.options.CustomURL = ui.querySelector("#z-crosshair-url").value;
                s.emit("setting.update", this);
                this.updatePreview(ui);
            };

            ui.querySelector("#z-crosshair-preset").onchange = updateAndEmit;
            ui.querySelector("#z-crosshair-url").onchange = updateAndEmit;
            ui.querySelector("#z-crosshair-size").oninput = updateAndEmit;

            // Initial update
            this.updatePreview(ui);
        }
    }

    // --- Module 2: Texture Pack ---
    class ZTextures extends o {
    constructor() {
        super("TexturePack", "Utils", {
            "Status": "Active"
        });

        // 1. Define your mappings here directly
        this.overrides = overrides;

        // 2. Store original methods
        this.imgDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
        this.origSetAttr = Element.prototype.setAttribute;
        this.origSetProp = CSSStyleDeclaration.prototype.setProperty;

        // 3. Activate immediately

    }

    overrideURL(url) {
        if (!url || typeof url !== 'string') return url;
        for (const original in this.overrides) {
            if (url.includes(original)) {
                return this.overrides[original];
            }
        }
        return url;
    }

    onEnable() {super.onEnable()
        const self = this;

        // Hook IMG .src
        Object.defineProperty(HTMLImageElement.prototype, 'src', {
            set(val) {
                return self.imgDescriptor.set.call(this, self.overrideURL(val));
            },
            get() {
                return self.imgDescriptor.get.call(this);
            },
            configurable: true
        });

        // Hook setAttribute
        Element.prototype.setAttribute = function(name, value) {
            if (name === "src") {
                value = self.overrideURL(value);
            }
            return self.origSetAttr.call(this, name, value);
        };

        // Hook CSS background-image
        CSSStyleDeclaration.prototype.setProperty = function(name, value, priority) {
            if (value && typeof value === 'string' && value.includes("url(")) {
                for (const original in self.overrides) {
                    if (value.includes(original)) {
                        value = `url("${self.overrides[original]}")`;
                        break;
                    }
                }
            }
            return self.origSetProp.call(this, name, value, priority);
        };

        console.log("TexturePack Enabled");
    }

    onDisable() {
        // Restore original functionality
        Object.defineProperty(HTMLImageElement.prototype, 'src', this.imgDescriptor);
        Element.prototype.setAttribute = this.origSetAttr;
        CSSStyleDeclaration.prototype.setProperty = this.origSetProp;

        console.log("TexturePack Disabled");
        location.reload();
    }
}

    // --- Module 3: Keystrokes ---
    class ZKeystrokes extends o {
        constructor() {
            super("Keystrokes", "Utils", {
                "Layout": "wasd",
                "Theme": "cyan",
                "Scale": 1.0,
                "ShowCPS": true
            });
            this.el = null;
            this.keys = {};
            this.cps = { l: 0, r: 0, clicks: [] };
        }

        onEnable() {super.onEnable()
            this.createUI();
            this.buildDOM();
            this.uiElement.style.display = "flex";
            this.addListeners();
        }

        onDisable() {
            if(this.el) this.el.remove();
            // Changed .remove() to .style.display = "none"
            if(this.uiElement) this.uiElement.style.display = "none";
            this.removeListeners();
        }

        onRender() {
            if(!this.el) return;
            const now = Date.now();
            while(this.cps.clicks.length && this.cps.clicks[0] < now - 1000) this.cps.clicks.shift();

            const l = this.cps.clicks.filter(c => c.button === 0).length;
            const r = this.cps.clicks.filter(c => c.button === 2).length;

            const lEl = this.el.querySelector('[data-key="LMB"] .zera-cps-text');
            const rEl = this.el.querySelector('[data-key="RMB"] .zera-cps-text');

            if(lEl) lEl.textContent = l;
            if(rEl) rEl.textContent = r;
        }

        addListeners() {
            this.keyDown = (e) => {
                const k = this.el.querySelector(`[data-code="${e.code}"]`);
                if(k) k.classList.add('active');
            };
            this.keyUp = (e) => {
                const k = this.el.querySelector(`[data-code="${e.code}"]`);
                if(k) k.classList.remove('active');
            };
            this.mouseDown = (e) => {
                const k = this.el.querySelector(`[data-key="${e.button === 0 ? 'LMB' : 'RMB'}"]`);
                if(k) k.classList.add('active');
                this.cps.clicks.push({ time: Date.now(), button: e.button });
            };
            this.mouseUp = (e) => {
                const k = this.el.querySelector(`[data-key="${e.button === 0 ? 'LMB' : 'RMB'}"]`);
                if(k) k.classList.remove('active');
            };

            document.addEventListener('keydown', this.keyDown);
            document.addEventListener('keyup', this.keyUp);
            document.addEventListener('mousedown', this.mouseDown);
            document.addEventListener('mouseup', this.mouseUp);
        }

        removeListeners() {
            document.removeEventListener('keydown', this.keyDown);
            document.removeEventListener('keyup', this.keyUp);
            document.removeEventListener('mousedown', this.mouseDown);
            document.removeEventListener('mouseup', this.mouseUp);
        }

        buildDOM() {
            if(this.el) this.el.remove();
            this.el = document.createElement("div");
            this.el.className = "zera-keystrokes";

            const layouts = {
                "wasd": `
                    <div class="zera-key-row"><div class="zera-key" data-code="KeyW">W</div></div>
                    <div class="zera-key-row">
                        <div class="zera-key" data-code="KeyA">A</div>
                        <div class="zera-key" data-code="KeyS">S</div>
                        <div class="zera-key" data-code="KeyD">D</div>
                    </div>
                    <div class="zera-key-row">
                        <div class="zera-key wide" data-key="LMB"><span>LMB</span><span class="zera-cps-text">0</span></div>
                        <div class="zera-key wide" data-key="RMB"><span>RMB</span><span class="zera-cps-text">0</span></div>
                    </div>
                `,
                "compact": `
                     <div class="zera-key-row">
                        <div class="zera-key" data-code="KeyW">W</div>
                    </div>
                    <div class="zera-key-row">
                        <div class="zera-key" data-code="KeyA">A</div>
                        <div class="zera-key" data-code="KeyS">S</div>
                        <div class="zera-key" data-code="KeyD">D</div>
                    </div>
                `
            };

            this.el.innerHTML = layouts[this.options.Layout] || layouts["wasd"];
            document.body.appendChild(this.el);

            // Apply styles
            this.el.style.transform = `scale(${this.options.Scale})`;
            // Apply Theme
            if(this.options.Theme === "cyan") {
                this.el.querySelectorAll('.zera-key').forEach(k => {
                    k.style.borderColor = "rgba(0, 242, 255, 0.3)";
                });
            } else if (this.options.Theme === "yellow") {
                this.el.querySelectorAll('.zera-key').forEach(k => {
                    k.style.borderColor = "rgba(255, 251, 0, 0.3)";
                    k.classList.add('active'); // hack to force style check
                });
            }

            // Show/Hide CPS
            const cpsEls = this.el.querySelectorAll('.zera-cps-text');
            cpsEls.forEach(e => e.style.display = this.options.ShowCPS ? 'block' : 'none');
        }

        onSettingUpdate() {
            this.buildDOM();
            const pSel = this.uiElement.querySelector("#z-key-layout");
            const tSel = this.uiElement.querySelector("#z-key-theme");
            const sRng = this.uiElement.querySelector("#z-key-scale");
            const cChk = this.uiElement.querySelector("#z-key-cps");

            if(pSel) pSel.value = this.options.Layout;
            if(tSel) tSel.value = this.options.Theme;
            if(sRng) sRng.value = this.options.Scale;
            if(cChk) cChk.checked = this.options.ShowCPS;
        }

        createUI() {
            if(this.uiElement) return;
            const ui = document.createElement("div");
            ui.className = "zera-modal";
            ui.innerHTML = `
                <div class="zera-modal-header">
                    <span>Keystrokes</span>
                    <div class="zera-close-btn"></div>
                </div>
                <div class="zera-modal-body">
                    <div class="zera-setting-row">
                        <span class="zera-label">Layout</span>
                        <select id="z-key-layout" class="zera-select">
                            <option value="wasd">WASD + Mouse</option>
                            <option value="compact">Compact</option>
                        </select>
                    </div>
                    <div class="zera-setting-row">
                        <span class="zera-label">Theme</span>
                        <select id="z-key-theme" class="zera-select">
                            <option value="cyan">Zera Cyan</option>
                            <option value="yellow">Zera Yellow</option>
                            <option value="dark">Dark</option>
                        </select>
                    </div>
                    <div class="zera-setting-row">
                        <span class="zera-label">Scale</span>
                        <input type="range" id="z-key-scale" min="0.5" max="2" step="0.1">
                    </div>
                    <div class="zera-setting-row">
                        <span class="zera-label">Show CPS</span>
                        <input type="checkbox" id="z-key-cps">
                    </div>
                </div>
            `;
            document.body.appendChild(ui);
            this.uiElement = ui;

            ui.querySelector(".zera-close-btn").onclick = () => this.uiElement.style.display = "none";
            ui.querySelector("#z-key-layout").onchange = (e) => { this.options.Layout = e.target.value; s.emit("setting.update", this); };
            ui.querySelector("#z-key-theme").onchange = (e) => { this.options.Theme = e.target.value; s.emit("setting.update", this); };
            ui.querySelector("#z-key-scale").oninput = (e) => { this.options.Scale = parseFloat(e.target.value); s.emit("setting.update", this); };
            ui.querySelector("#z-key-cps").onchange = (e) => { this.options.ShowCPS = e.target.checked; s.emit("setting.update", this); };
        }
    }

    // --- Module 4: Zoom ---
    class ZZoom extends o {
        constructor() {
            super("Zoom", "Utils", {
                "Level": 2.0,
                "Key": "KeyC"
            });
            this.zooming = false;
            this.ogFov = 70;
        }

        onEnable() {super.onEnable()
            this.createUI();
            this.uiElement.style.display = "flex";

            this.keyHandler = (e) => {
                if(e.code === this.options.Key) {
                    if(e.type === 'keydown') this.zooming = true;
                    if(e.type === 'keyup') this.zooming = false;
                }
            };
            document.addEventListener('keydown', this.keyHandler);
            document.addEventListener('keyup', this.keyHandler);
        }

        onDisable() {
            if(this.uiElement) this.uiElement.style.display = "none";
            document.removeEventListener('keydown', this.keyHandler);
            document.removeEventListener('keyup', this.keyHandler);
            // Reset FOV
            if(a?.gameWorld?.threeScene?.camera) {
                a.gameWorld.threeScene.camera.fov = 70;
                a.gameWorld.threeScene.camera.updateProjectionMatrix();
            }
        }

        onRender() {
            if(!a?.gameWorld?.threeScene?.camera) return;
            const cam = a.gameWorld.threeScene.camera;

            if(this.zooming) {
                if(cam.fov !== 70 / this.options.Level) {
                    cam.fov = 70 / this.options.Level;
                    cam.updateProjectionMatrix();
                }
            } else {
                if(cam.fov !== 70) {
                    cam.fov = 70;
                    cam.updateProjectionMatrix();
                }
            }
        }

        onSettingUpdate() {
             const lRng = this.uiElement.querySelector("#z-zoom-level");
             const kIn = this.uiElement.querySelector("#z-zoom-key");
             if(lRng) lRng.value = this.options.Level;
             if(kIn) kIn.value = this.options.Key.replace("Key", "");
        }

        createUI() {
            if(this.uiElement) return;
            const ui = document.createElement("div");
            ui.className = "zera-modal";
            ui.innerHTML = `
                <div class="zera-modal-header">
                    <span>Zoom</span>
                    <div class="zera-close-btn"></div>
                </div>
                <div class="zera-modal-body">
                    <div class="zera-setting-row">
                        <span class="zera-label">Zoom Level</span>
                        <input type="range" id="z-zoom-level" min="1.1" max="5" step="0.1" style="width: 150px;">
                    </div>
                    <div class="zera-setting-row">
                        <span class="zera-label">Keybind</span>
                        <input type="text" id="z-zoom-key" class="zera-input" style="width: 50px; text-transform:uppercase;" maxlength="1">
                    </div>
                    <div style="font-size:12px; color:#888; margin-top:10px;">Hold key to zoom.</div>
                </div>
            `;
            document.body.appendChild(ui);
            this.uiElement = ui;

            ui.querySelector(".zera-close-btn").onclick = () => this.uiElement.style.display = "none";
            ui.querySelector("#z-zoom-level").oninput = (e) => { this.options.Level = parseFloat(e.target.value); s.emit("setting.update", this); };

            let waiting = false;
            ui.querySelector("#z-zoom-key").onkeydown = (e) => {
                e.preventDefault();
                this.options.Key = e.code;
                s.emit("setting.update", this);
                e.target.value = e.key.toUpperCase();
                waiting = false;
            };
            ui.querySelector("#z-zoom-key").onclick = (e) => {
                if(!waiting) {
                    e.target.value = "...";
                    waiting = true;
                }
            };
        }
    }

    // --- Module 5: The War Utils ---
    class ZWarUtils extends o {
        constructor() {
            super("WarUtils", "Utils", {
                "ShowKD": true
            });
            this.display = null;
        }

        onEnable() {super.onEnable()
            this.createUI();
            this.uiElement.style.display = "flex";
        }

        onDisable() {
            if(this.uiElement) this.uiElement.style.display = "none";
            if(this.display) this.display.remove();
        }

        onRender() {
            if(!this.options.ShowKD) {
                if(this.display) this.display.style.display = "none";
                return;
            }
            if(!a?.gameWorld?.server?.players) return;

            // Find stats container in MineFun DOM (Selector depends on version, assuming generic .stats)
            const stats = document.querySelector(".stats");
            if(!stats) return;

            if(!this.display) {
                this.display = document.createElement("div");
                this.display.className = "zera-kd-display";
                this.display.textContent = "K/D: 0.0";
                stats.appendChild(this.display);
            }
            this.display.style.display = "block";

            // Calculate K/D (Client side estimation from scoreboard if possible, or local stats)
            // MineFun doesn't easily expose total K/D in gameState, so we'll mock a logic or use local session if available
            // For this implementation, we'll just keep it visual or hook into a specific stat element if found
            const kEl = document.querySelector(".kill-icon")?.parentElement;
            const dEl = document.querySelector(".death-icon")?.parentElement;

            if(kEl && dEl) {
                const k = parseInt(kEl.textContent) || 0;
                const d = parseInt(dEl.textContent) || 0;
                const kd = d === 0 ? k : (k/d).toFixed(2);
                this.display.textContent = `K/D: ${kd}`;
            }
        }

        onSettingUpdate() {
            const chk = this.uiElement.querySelector("#z-war-kd");
            if(chk) chk.checked = this.options.ShowKD;
        }

        createUI() {
            if(this.uiElement) return;
            const ui = document.createElement("div");
            ui.className = "zera-modal";
            ui.innerHTML = `
                <div class="zera-modal-header">
                    <span>The War Utils</span>
                    <div class="zera-close-btn"></div>
                </div>
                <div class="zera-modal-body">
                    <div class="zera-setting-row">
                        <span class="zera-label">Show K/D Indicator</span>
                        <input type="checkbox" id="z-war-kd">
                    </div>
                </div>
            `;
            document.body.appendChild(ui);
            this.uiElement = ui;

            ui.querySelector(".zera-close-btn").onclick = () => this.uiElement.style.display = "none";
            ui.querySelector("#z-war-kd").onchange = (e) => { this.options.ShowKD = e.target.checked; s.emit("setting.update", this); };
        }
    }

    // --- Module 6: Damage Vignette ---
    class ZVignette extends o {
        constructor() {
            super("DamageVignette", "Utils", {
                "Color": "#ff0000"
            });
            this.styleEl = null;
        }

        onEnable() {super.onEnable()
            this.createUI();
            this.uiElement.style.display = "flex";
            this.applyStyle();
        }

        onDisable() {
            if(this.uiElement) this.uiElement.style.display = "none";
            if(this.styleEl) this.styleEl.remove();
        }

        applyStyle() {
            if(this.styleEl) this.styleEl.remove();
            this.styleEl = document.createElement("style");
            // Converts Hex to RGB for rgba usage
            const hex = this.options.Color;
            const r = parseInt(hex.slice(1,3), 16);
            const g = parseInt(hex.slice(3,5), 16);
            const b = parseInt(hex.slice(5,7), 16);

            this.styleEl.textContent = `
                .hp-hit {
                    background: radial-gradient(circle, transparent 50%, rgba(${r},${g},${b},0.4) 100%) !important;
                }
            `;
            document.head.appendChild(this.styleEl);
        }

        onSettingUpdate() {
            const p = this.uiElement.querySelector("#z-vig-color");
            if(p) p.value = this.options.Color;
            this.applyStyle();
        }

        createUI() {
            if(this.uiElement) return;
            const ui = document.createElement("div");
            ui.className = "zera-modal";
            ui.innerHTML = `
                <div class="zera-modal-header">
                    <span>Damage Vignette</span>
                    <div class="zera-close-btn"></div>
                </div>
                <div class="zera-modal-body">
                    <div class="zera-setting-row">
                        <span class="zera-label">Color</span>
                        <input type="color" id="z-vig-color" style="height:30px; width:50px; border:none; background:none;">
                    </div>
                </div>
            `;
            document.body.appendChild(ui);
            this.uiElement = ui;

            ui.querySelector(".zera-close-btn").onclick = () => this.uiElement.style.display = "none";
            ui.querySelector("#z-vig-color").onchange = (e) => { this.options.Color = e.target.value; s.emit("setting.update", this); };
        }
    }

    // --- Module 7: Better Chests (No UI) ---
    class ZBetterChests extends o {
        constructor() {
            super("BetterChests", "Utils");
        }

        onEnable() {super.onEnable()
            // Initial application
            this.updateChests();
        }

        onDisable() {
            // Remove styles
            document.querySelectorAll(".zera-chest-boost").forEach(el => {
                el.classList.remove("zera-chest-boost");
                el.style.boxShadow = "";
                el.style.border = "";
            });
        }

        onRender() {
            if(this.isEnabled) this.updateChests();
        }

        updateChests() {
            // Check for chest elements. In MineFun, chests are typically .chest or generic UI panels.
            // This is a generic visual enhancer for UI panels that look like inventories.
            document.querySelectorAll(".chest, .inventory-panel").forEach(el => {
                if(!el.classList.contains("zera-chest-boost")) {
                    el.classList.add("zera-chest-boost");
                }
            });
        }
    }
    class AirPlace extends o {
        constructor() {
            super("AirPlace", "World")
        }
        get blockPlaceSystem() {
            return a.gameWorld.systemsManager.activeSystems.find(e => e?._handlePlaceInAir)
        }
        onEnable() {super.onEnable()
            this.blockPlaceSystem.canPlaceBlocksInAir = !0
        }
        onDisable() {
            this.blockPlaceSystem.canPlaceBlocksInAir = a.gameWorld.player.gameMode == 2
        }
    }
    class Freecam extends o {
      constructor() {
            super("Freecam", "Visual", {
                "3rd person": "true"
            }), this._copy = null, this.realPos = null
        }
        get playerModel() {
            return a.gameWorld.systemsManager.activeSystems.find(e => e?.model).model
        }
        onEnable() {super.onEnable()
            let e = a.gameWorld,
                t = 0;
            e.player.cameraMode == 1 && this.options["3rd person"] == "true" && (a.gameWorld.switchCameraView(), t = 100), a.gameWorld.server.msgsListeners[j.toClient.SET_INVISIBLE_MODE](), setTimeout(() => {
                this._copy = this._copy || this.playerModel.position.copy, this.playerModel.position.copy = () => {}, this.realPos = this.playerModel.position
            }, t)
        }
        onDisable() {
            a.gameWorld.server.msgsListeners[j.toClient.SET_WALK_MODE](), this.playerModel.position.copy = this._copy.bind(this.playerModel.position), this.playerModel.position = this.realPos
        }
    }
    class Craftmenu extends o {
        constructor() {
            super("Crafting", "Resources")
        }
        onEnable() {super.onEnable()
            D.openOtherItem(2), this.disable(), ee.modules.ClickGUI.onDisable(!1)
        }
    }
    class Cuttingmenu extends o {
        constructor() {
            super("Dye", "Resources")
        }
        onEnable() {super.onEnable()
            D.openOtherItem(9), this.disable(), ee.modules.ClickGUI.onDisable(!1)
        }
    }
    class Dyeingmenu extends o {
        constructor() {
            super("Cut", "Resources")
        }
        onEnable() {super.onEnable()
            D.openOtherItem(10), this.disable(), ee.modules.ClickGUI.onDisable(!1)
        }
    }

    const ee = {
        modules: {},
        addModules: function(...e) {
            for (const t of e) {
                let e = new t;
                this.modules[e.name] = e
            }
        },
        addModule: function(e) {
            this.modules[e.name] = e
        },
        handleKeyPress: function(e) {
            for (let t in this.modules) {
                let n = this.modules[t];
                n.waitingForBind ? (n.keybind = e, n.waitingForBind = !1) : n.keybind == e && n.toggle()
            }
        },
        init() {
            this.addModules(lava, i, r, k, M, W, w, _, P, I, Y, B, A, T, N, R, O, L, F, H, U, K, V, G, q, Q, Z, $, X, J, MagicWandPaste,Treeclean,minestone, duper, dupetroll, FreeMinebucks,FreeSpins,KnockbackDisabler,Disabler,HitAllModule,TeleportModule,HitModule,GhostMode, NoFog, ChatTranslator, CleanScreen, FpsBoost,ZeraHUD, Shaders,ZCrosshair,ZTextures,ZKeystrokes,ZZoom,ZWarUtils,ZVignette,ZBetterChests, AirPlace, Freecam, Craftmenu,Cuttingmenu, Dyeingmenu), s.on("render", (() => {
                for (let e in this.modules) this.modules[e].isEnabled && this.modules[e].onRender()
            })), s.on("keydown", this.handleKeyPress.bind(this)), s.on("setting.update", (() => {
                for (let e in this.modules) this.modules[e].isEnabled && this.modules[e].onSettingUpdate()
            })),this.modules.Arraylist.enable(), this.modules.Watermark.enable()

        }
    };
    window.ZeraMine = new class {
        constructor() {
            this.version = "5.5.3", this.init()
        }
        init() {
            setInterval((() => {
                s.emit("render")
            }), 1e3 / 60), document.addEventListener("keydown", (e => {
                s.emit("keydown", e.code)
            })), ee.init(), j.init(), this.packets = j, this.moduleManager = ee, this.hooks = a
        }
        disable() {}
    }
})(); //o to a, e to j, h to D, u to ee
