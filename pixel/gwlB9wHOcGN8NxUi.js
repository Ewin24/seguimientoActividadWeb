(() => {
    let localData = JSON.parse(localStorage.getItem("eventData")) || [];
    let pixel_url_base = "https:\/\/analyticsapiurlexample\/";
    let pixel_key = "gwlB9wHOcGN8NxUi";
    let pixel_exposed_identifier = "analytics";
    let pixel_track_events_children = true;
    let pixel_track_sessions_replays = false;
    let pixel_heatmaps = [{
        "heatmap_id": "868",
        "website_id": "867",
        "snapshot_id_desktop": "1280",
        "snapshot_id_tablet": "1285",
        "snapshot_id_mobile": "1281",
        "name": "heatmap_867",
        "path": "\/",
        "is_enabled": "1",
        "date": "2024-11-15 13:12:01",
        "url": "unac.edu.co\/\/"
    }];
    let pixel_goals = [];

    /* Helper messages */
    let pixel_key_verify_message = "The Pixel Code has been installed properly.";
    let pixel_key_dnt_message = "Do Not Track is enabled, we are respecting your privacy and we do not track you.";
    let pixel_key_optout_message = "You opted out of tracking, we are respecting your privacy and your decision and we do not track you.";

    const _0x58e2 = ['getFullYear', 'userAgent', 'getMonth', 'protocol', 'length', 'getItem', 'yes', 'getDate', 'test', 'startsWith', 'true', '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 'href', 'getSeconds', 'pixel_verify', 'location', 'replace', 'tablet', 'mobile', 'searchParams', 'getHours', 'desktop', 'www.', 'random', 'msDoNotTrack', 'get', 'setItem', 'doNotTrack', 'pixel_optout'];
    (function (_0x23d16e, _0x58e263) {
        const _0x31a081 = function (_0x194f8d) {
            while (--_0x194f8d) {
                _0x23d16e['push'](_0x23d16e['shift']());
            }
        };
        _0x31a081(++_0x58e263);
    }(_0x58e2, 0xfa));
    const _0x31a0 = function (_0x23d16e, _0x58e263) {
        _0x23d16e = _0x23d16e - 0x0;
        let _0x31a081 = _0x58e2[_0x23d16e];
        return _0x31a081;
    };
    let get_random_string = (_0x57f7b, _0x4fbdd6) => {
        let _0x56b4dc = '';
        for (let _0x2be420 = _0x57f7b; _0x2be420 > 0x0; --_0x2be420)
            _0x56b4dc += _0x4fbdd6[Math['round'](Math[_0x31a0('0x5')]() * (_0x4fbdd6[_0x31a0('0xf')] - 0x1))];
        return _0x56b4dc;
    }
        , get_dynamic_var = _0x129bea => {
            return '__' + pixel_key + '_' + _0x129bea;
        }
        , get_random_id = () => {
            let _0x5d3c8d = get_random_string(0x10, _0x31a0('0x16'))
                , _0x1d1403 = new Date();
            return _0x5d3c8d += _0x1d1403[_0x31a0('0xb')](),
                _0x5d3c8d += _0x1d1403[_0x31a0('0xd')](),
                _0x5d3c8d += _0x1d1403[_0x31a0('0x12')](),
                _0x5d3c8d += _0x1d1403[_0x31a0('0x2')](),
                _0x5d3c8d += _0x1d1403['getMinutes'](),
                _0x5d3c8d += _0x1d1403[_0x31a0('0x18')](),
                btoa(_0x5d3c8d);
        }
        , is_do_not_track = () => {
            return window['doNotTrack'] || navigator[_0x31a0('0x9')] || navigator[_0x31a0('0x6')] ? window['doNotTrack'] == '1' || navigator[_0x31a0('0x9')] == _0x31a0('0x11') || navigator[_0x31a0('0x9')] == '1' || navigator['msDoNotTrack'] == '1' : ![];
        }
        , is_optout = () => {
            let _0x281e93 = new URL(document[_0x31a0('0x1a')])['searchParams']
                , _0x1a47af = _0x281e93[_0x31a0('0x7')](_0x31a0('0xa'));
            if (_0x1a47af !== null)
                return _0x1a47af = _0x1a47af == _0x31a0('0x15'),
                    _0x1a47af ? (localStorage['setItem'](get_dynamic_var(_0x31a0('0xa')), _0x31a0('0x15')),
                        !![]) : (localStorage[_0x31a0('0x8')](get_dynamic_var(_0x31a0('0xa')), 'false'),
                            ![]);
            return localStorage[_0x31a0('0x10')](get_dynamic_var(_0x31a0('0xa'))) == _0x31a0('0x15');
        }
        , pixel_verify = () => {
            let _0x52f990 = new URL(document[_0x31a0('0x1a')])[_0x31a0('0x1')]
                , _0x294bac = _0x52f990[_0x31a0('0x7')](_0x31a0('0x19'));
            _0x294bac !== null && (_0x294bac != '' ? pixel_key == _0x294bac && alert(pixel_key_verify_message) : alert(pixel_key_verify_message));
        }
        , get_device_type = () => {
            let _0x20a11a = /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo)/gi
                , _0x54ecd8 = /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/gi;
            return _0x20a11a[_0x31a0('0x13')](navigator['userAgent']) ? _0x31a0('0x0') : _0x54ecd8[_0x31a0('0x13')](navigator[_0x31a0('0xc')]) ? _0x31a0('0x1c') : _0x31a0('0x3');
        }
        , get_current_url_domain_no_www = () => {
            let _0x1e1d6c = window[_0x31a0('0x1a')][_0x31a0('0x17')][_0x31a0('0x1b')](window['location'][_0x31a0('0xe')] + '//', '')
                , _0x1933ae = _0x31a0('0x4');
            return _0x1e1d6c[_0x31a0('0x14')](_0x1933ae) && (_0x1e1d6c = _0x1e1d6c['replace'](_0x31a0('0x4'), '')),
                _0x1e1d6c;
        };

    var rrwebRecord = function () {
        "use strict";
        var N;
        (function (e) {
            e[e.Document = 0] = "Document",
                e[e.DocumentType = 1] = "DocumentType",
                e[e.Element = 2] = "Element",
                e[e.Text = 3] = "Text",
                e[e.CDATA = 4] = "CDATA",
                e[e.Comment = 5] = "Comment"
        }
        )(N || (N = {}));
        function Lt(e) {
            return e.nodeType === e.ELEMENT_NODE
        }
        function fe(e) {
            var t = e?.host;
            return Boolean(t?.shadowRoot === e)
        }
        function ye(e) {
            return Object.prototype.toString.call(e) === "[object ShadowRoot]"
        }
        function Te(e) {
            try {
                var t = e.rules || e.cssRules;
                return t ? Array.from(t).map(Ae).join("") : null
            } catch {
                return null
            }
        }
        function Ae(e) {
            var t = e.cssText;
            if (Tt(e))
                try {
                    t = Te(e.styleSheet) || t
                } catch { }
            return t
        }
        function Tt(e) {
            return "styleSheet" in e
        }
        var Pe = function () {
            function e() {
                this.idNodeMap = new Map,
                    this.nodeMetaMap = new WeakMap
            }
            return e.prototype.getId = function (t) {
                var n;
                if (!t)
                    return -1;
                var r = (n = this.getMeta(t)) === null || n === void 0 ? void 0 : n.id;
                return r ?? -1
            }
                ,
                e.prototype.getNode = function (t) {
                    return this.idNodeMap.get(t) || null
                }
                ,
                e.prototype.getIds = function () {
                    return Array.from(this.idNodeMap.keys())
                }
                ,
                e.prototype.getMeta = function (t) {
                    return this.nodeMetaMap.get(t) || null
                }
                ,
                e.prototype.removeNodeFromMap = function (t) {
                    var n = this
                        , r = this.getId(t);
                    this.idNodeMap.delete(r),
                        t.childNodes && t.childNodes.forEach(function (o) {
                            return n.removeNodeFromMap(o)
                        })
                }
                ,
                e.prototype.has = function (t) {
                    return this.idNodeMap.has(t)
                }
                ,
                e.prototype.hasNode = function (t) {
                    return this.nodeMetaMap.has(t)
                }
                ,
                e.prototype.add = function (t, n) {
                    var r = n.id;
                    this.idNodeMap.set(r, t),
                        this.nodeMetaMap.set(t, n)
                }
                ,
                e.prototype.replace = function (t, n) {
                    var r = this.getNode(t);
                    if (r) {
                        var o = this.nodeMetaMap.get(r);
                        o && this.nodeMetaMap.set(n, o)
                    }
                    this.idNodeMap.set(t, n)
                }
                ,
                e.prototype.reset = function () {
                    this.idNodeMap = new Map,
                        this.nodeMetaMap = new WeakMap
                }
                ,
                e
        }();
        function Et() {
            return new Pe
        }
        function Ee(e) {
            var t = e.maskInputOptions
                , n = e.tagName
                , r = e.type
                , o = e.value
                , s = e.maskInputFn
                , i = o || "";
            return (t[n.toLowerCase()] || t[r]) && (s ? i = s(i) : i = "*".repeat(i.length)),
                i
        }
        var _e = "__rrweb_original__";
        function Rt(e) {
            var t = e.getContext("2d");
            if (!t)
                return !0;
            for (var n = 50, r = 0; r < e.width; r += n)
                for (var o = 0; o < e.height; o += n) {
                    var s = t.getImageData
                        , i = _e in s ? s[_e] : s
                        , l = new Uint32Array(i.call(t, r, o, Math.min(n, e.width - r), Math.min(n, e.height - o)).data.buffer);
                    if (l.some(function (a) {
                        return a !== 0
                    }))
                        return !1
                }
            return !0
        }
        var xt = 1
            , Nt = new RegExp("[^a-z0-9-_:]")
            , ve = -2;
        function Dt() {
            return xt++
        }
        function Ft(e) {
            if (e instanceof HTMLFormElement)
                return "form";
            var t = e.tagName.toLowerCase().trim();
            return Nt.test(t) ? "div" : t
        }
        function At(e) {
            return e.cssRules ? Array.from(e.cssRules).map(function (t) {
                return t.cssText || ""
            }).join("") : ""
        }
        function Pt(e) {
            var t = "";
            return e.indexOf("//") > -1 ? t = e.split("/").slice(0, 3).join("/") : t = e.split("/")[0],
                t = t.split("?")[0],
                t
        }
        var se, We, _t = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm, Wt = /^(?!www\.|(?:http|ftp)s?:\/\/|[A-Za-z]:\\|\/\/|#).*/, zt = /^(data:)([^,]*),(.*)/i;
        function Ce(e, t) {
            return (e || "").replace(_t, function (n, r, o, s, i, l) {
                var a = o || i || l
                    , c = r || s || "";
                if (!a)
                    return n;
                if (!Wt.test(a) || zt.test(a))
                    return "url(".concat(c).concat(a).concat(c, ")");
                if (a[0] === "/")
                    return "url(".concat(c).concat(Pt(t) + a).concat(c, ")");
                var u = t.split("/")
                    , d = a.split("/");
                u.pop();
                for (var h = 0, m = d; h < m.length; h++) {
                    var p = m[h];
                    p !== "." && (p === ".." ? u.pop() : u.push(p))
                }
                return "url(".concat(c).concat(u.join("/")).concat(c, ")")
            })
        }
        var Gt = /^[^ \t\n\r\u000c]+/
            , Vt = /^[, \t\n\r\u000c]+/;
        function Zt(e, t) {
            if (t.trim() === "")
                return t;
            var n = 0;
            function r(c) {
                var u, d = c.exec(t.substring(n));
                return d ? (u = d[0],
                    n += u.length,
                    u) : ""
            }
            for (var o = []; r(Vt),
                !(n >= t.length);) {
                var s = r(Gt);
                if (s.slice(-1) === ",")
                    s = ke(e, s.substring(0, s.length - 1)),
                        o.push(s);
                else {
                    var i = "";
                    s = ke(e, s);
                    for (var l = !1; ;) {
                        var a = t.charAt(n);
                        if (a === "") {
                            o.push((s + i).trim());
                            break
                        } else if (l)
                            a === ")" && (l = !1);
                        else if (a === ",") {
                            n += 1,
                                o.push((s + i).trim());
                            break
                        } else
                            a === "(" && (l = !0);
                        i += a,
                            n += 1
                    }
                }
            }
            return o.join(", ")
        }
        function ke(e, t) {
            if (!t || t.trim() === "")
                return t;
            var n = e.createElement("a");
            return n.href = t,
                n.href
        }
        function jt(e) {
            return Boolean(e.tagName === "svg" || e.ownerSVGElement)
        }
        function Re() {
            var e = document.createElement("a");
            return e.href = "",
                e.href
        }
        function ze(e, t, n, r) {
            return n === "src" || n === "href" && r && !(t === "use" && r[0] === "#") || n === "xlink:href" && r && r[0] !== "#" || n === "background" && r && (t === "table" || t === "td" || t === "th") ? ke(e, r) : n === "srcset" && r ? Zt(e, r) : n === "style" && r ? Ce(r, Re()) : t === "object" && n === "data" && r ? ke(e, r) : r
        }
        function Ut(e, t, n) {
            if (typeof t == "string") {
                if (e.classList.contains(t))
                    return !0
            } else
                for (var r = e.classList.length; r--;) {
                    var o = e.classList[r];
                    if (t.test(o))
                        return !0
                }
            return n ? e.matches(n) : !1
        }
        function Ie(e, t, n) {
            if (!e)
                return !1;
            if (e.nodeType !== e.ELEMENT_NODE)
                return n ? Ie(e.parentNode, t, n) : !1;
            for (var r = e.classList.length; r--;) {
                var o = e.classList[r];
                if (t.test(o))
                    return !0
            }
            return n ? Ie(e.parentNode, t, n) : !1
        }
        function Ge(e, t, n) {
            var r = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (r === null)
                return !1;
            if (typeof t == "string") {
                if (r.classList.contains(t) || r.closest(".".concat(t)))
                    return !0
            } else if (Ie(r, t, !0))
                return !0;
            return !!(n && (r.matches(n) || r.closest(n)))
        }
        function Xt(e, t, n) {
            var r = e.contentWindow;
            if (r) {
                var o = !1, s;
                try {
                    s = r.document.readyState
                } catch {
                    return
                }
                if (s !== "complete") {
                    var i = setTimeout(function () {
                        o || (t(),
                            o = !0)
                    }, n);
                    e.addEventListener("load", function () {
                        clearTimeout(i),
                            o = !0,
                            t()
                    });
                    return
                }
                var l = "about:blank";
                if (r.location.href !== l || e.src === l || e.src === "")
                    return setTimeout(t, 0),
                        e.addEventListener("load", t);
                e.addEventListener("load", t)
            }
        }
        function Ht(e, t, n) {
            var r = !1, o;
            try {
                o = e.sheet
            } catch {
                return
            }
            if (!o) {
                var s = setTimeout(function () {
                    r || (t(),
                        r = !0)
                }, n);
                e.addEventListener("load", function () {
                    clearTimeout(s),
                        r = !0,
                        t()
                })
            }
        }
        function Bt(e, t) {
            var n = t.doc
                , r = t.mirror
                , o = t.blockClass
                , s = t.blockSelector
                , i = t.maskTextClass
                , l = t.maskTextSelector
                , a = t.inlineStylesheet
                , c = t.maskInputOptions
                , u = c === void 0 ? {} : c
                , d = t.maskTextFn
                , h = t.maskInputFn
                , m = t.dataURLOptions
                , p = m === void 0 ? {} : m
                , y = t.inlineImages
                , S = t.recordCanvas
                , v = t.keepIframeSrcFn
                , g = t.newlyAddedElement
                , f = g === void 0 ? !1 : g
                , C = Yt(n, r);
            switch (e.nodeType) {
                case e.DOCUMENT_NODE:
                    return e.compatMode !== "CSS1Compat" ? {
                        type: N.Document,
                        childNodes: [],
                        compatMode: e.compatMode
                    } : {
                        type: N.Document,
                        childNodes: []
                    };
                case e.DOCUMENT_TYPE_NODE:
                    return {
                        type: N.DocumentType,
                        name: e.name,
                        publicId: e.publicId,
                        systemId: e.systemId,
                        rootId: C
                    };
                case e.ELEMENT_NODE:
                    return $t(e, {
                        doc: n,
                        blockClass: o,
                        blockSelector: s,
                        inlineStylesheet: a,
                        maskInputOptions: u,
                        maskInputFn: h,
                        dataURLOptions: p,
                        inlineImages: y,
                        recordCanvas: S,
                        keepIframeSrcFn: v,
                        newlyAddedElement: f,
                        rootId: C
                    });
                case e.TEXT_NODE:
                    return Kt(e, {
                        maskTextClass: i,
                        maskTextSelector: l,
                        maskTextFn: d,
                        rootId: C
                    });
                case e.CDATA_SECTION_NODE:
                    return {
                        type: N.CDATA,
                        textContent: "",
                        rootId: C
                    };
                case e.COMMENT_NODE:
                    return {
                        type: N.Comment,
                        textContent: e.textContent || "",
                        rootId: C
                    };
                default:
                    return !1
            }
        }
        function Yt(e, t) {
            if (t.hasNode(e)) {
                var n = t.getId(e);
                return n === 1 ? void 0 : n
            }
        }
        function Kt(e, t) {
            var n, r = t.maskTextClass, o = t.maskTextSelector, s = t.maskTextFn, i = t.rootId, l = e.parentNode && e.parentNode.tagName, a = e.textContent, c = l === "STYLE" ? !0 : void 0, u = l === "SCRIPT" ? !0 : void 0;
            if (c && a) {
                try {
                    e.nextSibling || e.previousSibling || !((n = e.parentNode.sheet) === null || n === void 0) && n.cssRules && (a = At(e.parentNode.sheet))
                } catch (d) {
                    console.warn("Cannot get CSS styles from text's parentNode. Error: ".concat(d), e)
                }
                a = Ce(a, Re())
            }
            return u && (a = "SCRIPT_PLACEHOLDER"),
                !c && !u && a && Ge(e, r, o) && (a = s ? s(a) : a.replace(/[\S]/g, "*")),
            {
                type: N.Text,
                textContent: a || "",
                isStyle: c,
                rootId: i
            }
        }
        function $t(e, t) {
            for (var n = t.doc, r = t.blockClass, o = t.blockSelector, s = t.inlineStylesheet, i = t.maskInputOptions, l = i === void 0 ? {} : i, a = t.maskInputFn, c = t.dataURLOptions, u = c === void 0 ? {} : c, d = t.inlineImages, h = t.recordCanvas, m = t.keepIframeSrcFn, p = t.newlyAddedElement, y = p === void 0 ? !1 : p, S = t.rootId, v = Ut(e, r, o), g = Ft(e), f = {}, C = e.attributes.length, R = 0; R < C; R++) {
                var z = e.attributes[R];
                f[z.name] = ze(n, g, z.name, z.value)
            }
            if (g === "link" && s) {
                var T = Array.from(n.styleSheets).find(function (F) {
                    return F.href === e.href
                })
                    , w = null;
                T && (w = Te(T)),
                    w && (delete f.rel,
                        delete f.href,
                        f._cssText = Ce(w, T.href))
            }
            if (g === "style" && e.sheet && !(e.innerText || e.textContent || "").trim().length) {
                var w = Te(e.sheet);
                w && (f._cssText = Ce(w, Re()))
            }
            if (g === "input" || g === "textarea" || g === "select") {
                var B = e.value
                    , Y = e.checked;
                f.type !== "radio" && f.type !== "checkbox" && f.type !== "submit" && f.type !== "button" && B ? f.value = Ee({
                    type: f.type,
                    tagName: g,
                    value: B,
                    maskInputOptions: l,
                    maskInputFn: a
                }) : Y && (f.checked = Y)
            }
            if (g === "option" && (e.selected && !l.select ? f.selected = !0 : delete f.selected),
                g === "canvas" && h) {
                if (e.__context === "2d")
                    Rt(e) || (f.rr_dataURL = e.toDataURL(u.type, u.quality));
                else if (!("__context" in e)) {
                    var G = e.toDataURL(u.type, u.quality)
                        , X = document.createElement("canvas");
                    X.width = e.width,
                        X.height = e.height;
                    var K = X.toDataURL(u.type, u.quality);
                    G !== K && (f.rr_dataURL = G)
                }
            }
            if (g === "img" && d) {
                se || (se = n.createElement("canvas"),
                    We = se.getContext("2d"));
                var x = e
                    , $ = x.crossOrigin;
                x.crossOrigin = "anonymous";
                var Z = function () {
                    try {
                        se.width = x.naturalWidth,
                            se.height = x.naturalHeight,
                            We.drawImage(x, 0, 0),
                            f.rr_dataURL = se.toDataURL(u.type, u.quality)
                    } catch (F) {
                        console.warn("Cannot inline img src=".concat(x.currentSrc, "! Error: ").concat(F))
                    }
                    $ ? f.crossOrigin = $ : x.removeAttribute("crossorigin")
                };
                x.complete && x.naturalWidth !== 0 ? Z() : x.onload = Z
            }
            if ((g === "audio" || g === "video") && (f.rr_mediaState = e.paused ? "paused" : "played",
                f.rr_mediaCurrentTime = e.currentTime),
                y || (e.scrollLeft && (f.rr_scrollLeft = e.scrollLeft),
                    e.scrollTop && (f.rr_scrollTop = e.scrollTop)),
                v) {
                var ne = e.getBoundingClientRect()
                    , re = ne.width
                    , J = ne.height;
                f = {
                    class: f.class,
                    rr_width: "".concat(re, "px"),
                    rr_height: "".concat(J, "px")
                }
            }
            return g === "iframe" && !m(f.src) && (e.contentDocument || (f.rr_src = f.src),
                delete f.src),
            {
                type: N.Element,
                tagName: g,
                attributes: f,
                childNodes: [],
                isSVG: jt(e) || void 0,
                needBlock: v,
                rootId: S
            }
        }
        function I(e) {
            return e === void 0 ? "" : e.toLowerCase()
        }
        function Jt(e, t) {
            return !!(t.comment && e.type === N.Comment || e.type === N.Element && (t.script && (e.tagName === "script" || e.tagName === "link" && e.attributes.rel === "preload" && e.attributes.as === "script" || e.tagName === "link" && e.attributes.rel === "prefetch" && typeof e.attributes.href == "string" && e.attributes.href.endsWith(".js")) || t.headFavicon && (e.tagName === "link" && e.attributes.rel === "shortcut icon" || e.tagName === "meta" && (I(e.attributes.name).match(/^msapplication-tile(image|color)$/) || I(e.attributes.name) === "application-name" || I(e.attributes.rel) === "icon" || I(e.attributes.rel) === "apple-touch-icon" || I(e.attributes.rel) === "shortcut icon")) || e.tagName === "meta" && (t.headMetaDescKeywords && I(e.attributes.name).match(/^description|keywords$/) || t.headMetaSocial && (I(e.attributes.property).match(/^(og|twitter|fb):/) || I(e.attributes.name).match(/^(og|twitter):/) || I(e.attributes.name) === "pinterest") || t.headMetaRobots && (I(e.attributes.name) === "robots" || I(e.attributes.name) === "googlebot" || I(e.attributes.name) === "bingbot") || t.headMetaHttpEquiv && e.attributes["http-equiv"] !== void 0 || t.headMetaAuthorship && (I(e.attributes.name) === "author" || I(e.attributes.name) === "generator" || I(e.attributes.name) === "framework" || I(e.attributes.name) === "publisher" || I(e.attributes.name) === "progid" || I(e.attributes.property).match(/^article:/) || I(e.attributes.property).match(/^product:/)) || t.headMetaVerification && (I(e.attributes.name) === "google-site-verification" || I(e.attributes.name) === "yandex-verification" || I(e.attributes.name) === "csrf-token" || I(e.attributes.name) === "p:domain_verify" || I(e.attributes.name) === "verify-v1" || I(e.attributes.name) === "verification" || I(e.attributes.name) === "shopify-checkout-api-token"))))
        }
        function ie(e, t) {
            var n = t.doc
                , r = t.mirror
                , o = t.blockClass
                , s = t.blockSelector
                , i = t.maskTextClass
                , l = t.maskTextSelector
                , a = t.skipChild
                , c = a === void 0 ? !1 : a
                , u = t.inlineStylesheet
                , d = u === void 0 ? !0 : u
                , h = t.maskInputOptions
                , m = h === void 0 ? {} : h
                , p = t.maskTextFn
                , y = t.maskInputFn
                , S = t.slimDOMOptions
                , v = t.dataURLOptions
                , g = v === void 0 ? {} : v
                , f = t.inlineImages
                , C = f === void 0 ? !1 : f
                , R = t.recordCanvas
                , z = R === void 0 ? !1 : R
                , T = t.onSerialize
                , w = t.onIframeLoad
                , B = t.iframeLoadTimeout
                , Y = B === void 0 ? 5e3 : B
                , G = t.onStylesheetLoad
                , X = t.stylesheetLoadTimeout
                , K = X === void 0 ? 5e3 : X
                , x = t.keepIframeSrcFn
                , $ = x === void 0 ? function () {
                    return !1
                }
                    : x
                , Z = t.newlyAddedElement
                , ne = Z === void 0 ? !1 : Z
                , re = t.preserveWhiteSpace
                , J = re === void 0 ? !0 : re
                , F = Bt(e, {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    maskTextClass: i,
                    maskTextSelector: l,
                    inlineStylesheet: d,
                    maskInputOptions: m,
                    maskTextFn: p,
                    maskInputFn: y,
                    dataURLOptions: g,
                    inlineImages: C,
                    recordCanvas: z,
                    keepIframeSrcFn: $,
                    newlyAddedElement: ne
                });
            if (!F)
                return console.warn(e, "not serialized"),
                    null;
            var Q;
            r.hasNode(e) ? Q = r.getId(e) : Jt(F, S) || !J && F.type === N.Text && !F.isStyle && !F.textContent.replace(/^\s+|\s+$/gm, "").length ? Q = ve : Q = Dt();
            var L = Object.assign(F, {
                id: Q
            });
            if (r.add(e, L),
                Q === ve)
                return null;
            T && T(e);
            var b = !c;
            if (L.type === N.Element) {
                b = b && !L.needBlock,
                    delete L.needBlock;
                var j = e.shadowRoot;
                j && ye(j) && (L.isShadowHost = !0)
            }
            if ((L.type === N.Document || L.type === N.Element) && b) {
                S.headWhitespace && L.type === N.Element && L.tagName === "head" && (J = !1);
                for (var q = {
                    doc: n,
                    mirror: r,
                    blockClass: o,
                    blockSelector: s,
                    maskTextClass: i,
                    maskTextSelector: l,
                    skipChild: c,
                    inlineStylesheet: d,
                    maskInputOptions: m,
                    maskTextFn: p,
                    maskInputFn: y,
                    slimDOMOptions: S,
                    dataURLOptions: g,
                    inlineImages: C,
                    recordCanvas: z,
                    preserveWhiteSpace: J,
                    onSerialize: T,
                    onIframeLoad: w,
                    iframeLoadTimeout: Y,
                    onStylesheetLoad: G,
                    stylesheetLoadTimeout: K,
                    keepIframeSrcFn: $
                }, P = 0, ee = Array.from(e.childNodes); P < ee.length; P++) {
                    var k = ee[P]
                        , U = ie(k, q);
                    U && L.childNodes.push(U)
                }
                if (Lt(e) && e.shadowRoot)
                    for (var me = 0, A = Array.from(e.shadowRoot.childNodes); me < A.length; me++) {
                        var k = A[me]
                            , U = ie(k, q);
                        U && (ye(e.shadowRoot) && (U.isShadow = !0),
                            L.childNodes.push(U))
                    }
            }
            return e.parentNode && fe(e.parentNode) && ye(e.parentNode) && (L.isShadow = !0),
                L.type === N.Element && L.tagName === "iframe" && Xt(e, function () {
                    var te = e.contentDocument;
                    if (te && w) {
                        var Ot = ie(te, {
                            doc: te,
                            mirror: r,
                            blockClass: o,
                            blockSelector: s,
                            maskTextClass: i,
                            maskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: d,
                            maskInputOptions: m,
                            maskTextFn: p,
                            maskInputFn: y,
                            slimDOMOptions: S,
                            dataURLOptions: g,
                            inlineImages: C,
                            recordCanvas: z,
                            preserveWhiteSpace: J,
                            onSerialize: T,
                            onIframeLoad: w,
                            iframeLoadTimeout: Y,
                            onStylesheetLoad: G,
                            stylesheetLoadTimeout: K,
                            keepIframeSrcFn: $
                        });
                        Ot && w(e, Ot)
                    }
                }, Y),
                L.type === N.Element && L.tagName === "link" && L.attributes.rel === "stylesheet" && Ht(e, function () {
                    if (G) {
                        var te = ie(e, {
                            doc: n,
                            mirror: r,
                            blockClass: o,
                            blockSelector: s,
                            maskTextClass: i,
                            maskTextSelector: l,
                            skipChild: !1,
                            inlineStylesheet: d,
                            maskInputOptions: m,
                            maskTextFn: p,
                            maskInputFn: y,
                            slimDOMOptions: S,
                            dataURLOptions: g,
                            inlineImages: C,
                            recordCanvas: z,
                            preserveWhiteSpace: J,
                            onSerialize: T,
                            onIframeLoad: w,
                            iframeLoadTimeout: Y,
                            onStylesheetLoad: G,
                            stylesheetLoadTimeout: K,
                            keepIframeSrcFn: $
                        });
                        te && G(e, te)
                    }
                }, K),
                L
        }
        function Qt(e, t) {
            var n = t || {}
                , r = n.mirror
                , o = r === void 0 ? new Pe : r
                , s = n.blockClass
                , i = s === void 0 ? "rr-block" : s
                , l = n.blockSelector
                , a = l === void 0 ? null : l
                , c = n.maskTextClass
                , u = c === void 0 ? "rr-mask" : c
                , d = n.maskTextSelector
                , h = d === void 0 ? null : d
                , m = n.inlineStylesheet
                , p = m === void 0 ? !0 : m
                , y = n.inlineImages
                , S = y === void 0 ? !1 : y
                , v = n.recordCanvas
                , g = v === void 0 ? !1 : v
                , f = n.maskAllInputs
                , C = f === void 0 ? !1 : f
                , R = n.maskTextFn
                , z = n.maskInputFn
                , T = n.slimDOM
                , w = T === void 0 ? !1 : T
                , B = n.dataURLOptions
                , Y = n.preserveWhiteSpace
                , G = n.onSerialize
                , X = n.onIframeLoad
                , K = n.iframeLoadTimeout
                , x = n.onStylesheetLoad
                , $ = n.stylesheetLoadTimeout
                , Z = n.keepIframeSrcFn
                , ne = Z === void 0 ? function () {
                    return !1
                }
                    : Z
                , re = C === !0 ? {
                    color: !0,
                    date: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0,
                    textarea: !0,
                    select: !0,
                    password: !0
                } : C === !1 ? {
                    password: !0
                } : C
                , J = w === !0 || w === "all" ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaDescKeywords: w === "all",
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaAuthorship: !0,
                    headMetaVerification: !0
                } : w === !1 ? {} : w;
            return ie(e, {
                doc: e,
                mirror: o,
                blockClass: i,
                blockSelector: a,
                maskTextClass: u,
                maskTextSelector: h,
                skipChild: !1,
                inlineStylesheet: p,
                maskInputOptions: re,
                maskTextFn: R,
                maskInputFn: z,
                slimDOMOptions: J,
                dataURLOptions: B,
                inlineImages: S,
                recordCanvas: g,
                preserveWhiteSpace: Y,
                onSerialize: G,
                onIframeLoad: X,
                iframeLoadTimeout: K,
                onStylesheetLoad: x,
                stylesheetLoadTimeout: $,
                keepIframeSrcFn: ne,
                newlyAddedElement: !1
            })
        }
        function _(e, t, n = document) {
            const r = {
                capture: !0,
                passive: !0
            };
            return n.addEventListener(e, t, r),
                () => n.removeEventListener(e, t, r)
        }
        const le = `Please stop import mirror directly. Instead of that,\r
now you can use replayer.getMirror() to access the mirror instance of a replayer,\r
or you can use record.mirror to access the mirror instance during recording.`;
        let Ve = {
            map: {},
            getId() {
                return console.error(le),
                    -1
            },
            getNode() {
                return console.error(le),
                    null
            },
            removeNodeFromMap() {
                console.error(le)
            },
            has() {
                return console.error(le),
                    !1
            },
            reset() {
                console.error(le)
            }
        };
        typeof window < "u" && window.Proxy && window.Reflect && (Ve = new Proxy(Ve, {
            get(e, t, n) {
                return t === "map" && console.error(le),
                    Reflect.get(e, t, n)
            }
        }));
        function Se(e, t, n = {}) {
            let r = null
                , o = 0;
            return function (...s) {
                const i = Date.now();
                !o && n.leading === !1 && (o = i);
                const l = t - (i - o)
                    , a = this;
                l <= 0 || l > t ? (r && (clearTimeout(r),
                    r = null),
                    o = i,
                    e.apply(a, s)) : !r && n.trailing !== !1 && (r = setTimeout(() => {
                        o = n.leading === !1 ? 0 : Date.now(),
                            r = null,
                            e.apply(a, s)
                    }
                        , l))
            }
        }
        function Me(e, t, n, r, o = window) {
            const s = o.Object.getOwnPropertyDescriptor(e, t);
            return o.Object.defineProperty(e, t, r ? n : {
                set(i) {
                    setTimeout(() => {
                        n.set.call(this, i)
                    }
                        , 0),
                        s && s.set && s.set.call(this, i)
                }
            }),
                () => Me(e, t, s || {}, !0)
        }
        function ce(e, t, n) {
            try {
                if (!(t in e))
                    return () => { }
                        ;
                const r = e[t]
                    , o = n(r);
                return typeof o == "function" && (o.prototype = o.prototype || {},
                    Object.defineProperties(o, {
                        __rrweb_original__: {
                            enumerable: !1,
                            value: r
                        }
                    })),
                    e[t] = o,
                    () => {
                        e[t] = r
                    }
            } catch {
                return () => { }
            }
        }
        function Ze() {
            return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
        }
        function je() {
            return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
        }
        function W(e, t, n, r) {
            if (!e)
                return !1;
            const o = e.nodeType === e.ELEMENT_NODE ? e : e.parentElement;
            if (!o)
                return !1;
            if (typeof t == "string") {
                if (o.classList.contains(t) || r && o.closest("." + t) !== null)
                    return !0
            } else if (Ie(o, t, r))
                return !0;
            return !!(n && (e.matches(n) || r && o.closest(n) !== null))
        }
        function qt(e, t) {
            return t.getId(e) !== -1
        }
        function xe(e, t) {
            return t.getId(e) === ve
        }
        function Ue(e, t) {
            if (fe(e))
                return !1;
            const n = t.getId(e);
            return t.has(n) ? e.parentNode && e.parentNode.nodeType === e.DOCUMENT_NODE ? !1 : e.parentNode ? Ue(e.parentNode, t) : !0 : !0
        }
        function Xe(e) {
            return Boolean(e.changedTouches)
        }
        function en(e = window) {
            "NodeList" in e && !e.NodeList.prototype.forEach && (e.NodeList.prototype.forEach = Array.prototype.forEach),
                "DOMTokenList" in e && !e.DOMTokenList.prototype.forEach && (e.DOMTokenList.prototype.forEach = Array.prototype.forEach),
                Node.prototype.contains || (Node.prototype.contains = (...t) => {
                    let n = t[0];
                    if (!(0 in t))
                        throw new TypeError("1 argument is required");
                    do
                        if (this === n)
                            return !0;
                    while (n = n && n.parentNode);
                    return !1
                }
                )
        }
        function He(e, t) {
            return Boolean(e.nodeName === "IFRAME" && t.getMeta(e))
        }
        function Be(e, t) {
            return Boolean(e.nodeName === "LINK" && e.nodeType === e.ELEMENT_NODE && e.getAttribute && e.getAttribute("rel") === "stylesheet" && t.getMeta(e))
        }
        function Ye(e) {
            return Boolean(e?.shadowRoot)
        }
        class tn {
            constructor() {
                this.id = 1,
                    this.styleIDMap = new WeakMap,
                    this.idStyleMap = new Map
            }
            getId(t) {
                var n;
                return (n = this.styleIDMap.get(t)) != null ? n : -1
            }
            has(t) {
                return this.styleIDMap.has(t)
            }
            add(t, n) {
                if (this.has(t))
                    return this.getId(t);
                let r;
                return n === void 0 ? r = this.id++ : r = n,
                    this.styleIDMap.set(t, r),
                    this.idStyleMap.set(r, t),
                    r
            }
            getStyle(t) {
                return this.idStyleMap.get(t) || null
            }
            reset() {
                this.styleIDMap = new WeakMap,
                    this.idStyleMap = new Map,
                    this.id = 1
            }
        }
        var M = (e => (e[e.DomContentLoaded = 0] = "DomContentLoaded",
            e[e.Load = 1] = "Load",
            e[e.FullSnapshot = 2] = "FullSnapshot",
            e[e.IncrementalSnapshot = 3] = "IncrementalSnapshot",
            e[e.Meta = 4] = "Meta",
            e[e.Custom = 5] = "Custom",
            e[e.Plugin = 6] = "Plugin",
            e))(M || {})
            , D = (e => (e[e.Mutation = 0] = "Mutation",
                e[e.MouseMove = 1] = "MouseMove",
                e[e.MouseInteraction = 2] = "MouseInteraction",
                e[e.Scroll = 3] = "Scroll",
                e[e.ViewportResize = 4] = "ViewportResize",
                e[e.Input = 5] = "Input",
                e[e.TouchMove = 6] = "TouchMove",
                e[e.MediaInteraction = 7] = "MediaInteraction",
                e[e.StyleSheetRule = 8] = "StyleSheetRule",
                e[e.CanvasMutation = 9] = "CanvasMutation",
                e[e.Font = 10] = "Font",
                e[e.Log = 11] = "Log",
                e[e.Drag = 12] = "Drag",
                e[e.StyleDeclaration = 13] = "StyleDeclaration",
                e[e.Selection = 14] = "Selection",
                e[e.AdoptedStyleSheet = 15] = "AdoptedStyleSheet",
                e))(D || {})
            , Ne = (e => (e[e.MouseUp = 0] = "MouseUp",
                e[e.MouseDown = 1] = "MouseDown",
                e[e.Click = 2] = "Click",
                e[e.ContextMenu = 3] = "ContextMenu",
                e[e.DblClick = 4] = "DblClick",
                e[e.Focus = 5] = "Focus",
                e[e.Blur = 6] = "Blur",
                e[e.TouchStart = 7] = "TouchStart",
                e[e.TouchMove_Departed = 8] = "TouchMove_Departed",
                e[e.TouchEnd = 9] = "TouchEnd",
                e[e.TouchCancel = 10] = "TouchCancel",
                e))(Ne || {})
            , ue = (e => (e[e["2D"] = 0] = "2D",
                e[e.WebGL = 1] = "WebGL",
                e[e.WebGL2 = 2] = "WebGL2",
                e))(ue || {})
            , de = (e => (e[e.Play = 0] = "Play",
                e[e.Pause = 1] = "Pause",
                e[e.Seeked = 2] = "Seeked",
                e[e.VolumeChange = 3] = "VolumeChange",
                e[e.RateChange = 4] = "RateChange",
                e))(de || {})
            , nn = (e => (e.Start = "start",
                e.Pause = "pause",
                e.Resume = "resume",
                e.Resize = "resize",
                e.Finish = "finish",
                e.FullsnapshotRebuilded = "fullsnapshot-rebuilded",
                e.LoadStylesheetStart = "load-stylesheet-start",
                e.LoadStylesheetEnd = "load-stylesheet-end",
                e.SkipStart = "skip-start",
                e.SkipEnd = "skip-end",
                e.MouseInteraction = "mouse-interaction",
                e.EventCast = "event-cast",
                e.CustomEvent = "custom-event",
                e.Flush = "flush",
                e.StateChange = "state-change",
                e.PlayBack = "play-back",
                e.Destroy = "destroy",
                e))(nn || {});
        function Ke(e) {
            return "__ln" in e
        }
        class rn {
            constructor() {
                this.length = 0,
                    this.head = null
            }
            get(t) {
                if (t >= this.length)
                    throw new Error("Position outside of list range");
                let n = this.head;
                for (let r = 0; r < t; r++)
                    n = n?.next || null;
                return n
            }
            addNode(t) {
                const n = {
                    value: t,
                    previous: null,
                    next: null
                };
                if (t.__ln = n,
                    t.previousSibling && Ke(t.previousSibling)) {
                    const r = t.previousSibling.__ln.next;
                    n.next = r,
                        n.previous = t.previousSibling.__ln,
                        t.previousSibling.__ln.next = n,
                        r && (r.previous = n)
                } else if (t.nextSibling && Ke(t.nextSibling) && t.nextSibling.__ln.previous) {
                    const r = t.nextSibling.__ln.previous;
                    n.previous = r,
                        n.next = t.nextSibling.__ln,
                        t.nextSibling.__ln.previous = n,
                        r && (r.next = n)
                } else
                    this.head && (this.head.previous = n),
                        n.next = this.head,
                        this.head = n;
                this.length++
            }
            removeNode(t) {
                const n = t.__ln;
                !this.head || (n.previous ? (n.previous.next = n.next,
                    n.next && (n.next.previous = n.previous)) : (this.head = n.next,
                        this.head && (this.head.previous = null)),
                    t.__ln && delete t.__ln,
                    this.length--)
            }
        }
        const $e = (e, t) => `${e}@${t}`;
        class on {
            constructor() {
                this.frozen = !1,
                    this.locked = !1,
                    this.texts = [],
                    this.attributes = [],
                    this.removes = [],
                    this.mapRemoves = [],
                    this.movedMap = {},
                    this.addedSet = new Set,
                    this.movedSet = new Set,
                    this.droppedSet = new Set,
                    this.processMutations = t => {
                        t.forEach(this.processMutation),
                            this.emit()
                    }
                    ,
                    this.emit = () => {
                        var t;
                        if (this.frozen || this.locked)
                            return;
                        const n = []
                            , r = new rn
                            , o = a => {
                                let c = a
                                    , u = ve;
                                for (; u === ve;)
                                    c = c && c.nextSibling,
                                        u = c && this.mirror.getId(c);
                                return u
                            }
                            , s = a => {
                                var c, u, d, h, m;
                                const p = a.getRootNode ? (c = a.getRootNode()) == null ? void 0 : c.host : null;
                                let y = p;
                                for (; (d = (u = y?.getRootNode) == null ? void 0 : u.call(y)) != null && d.host;)
                                    y = ((m = (h = y?.getRootNode) == null ? void 0 : h.call(y)) == null ? void 0 : m.host) || null;
                                const S = !this.doc.contains(a) && (!y || !this.doc.contains(y));
                                if (!a.parentNode || S)
                                    return;
                                const v = fe(a.parentNode) ? this.mirror.getId(p) : this.mirror.getId(a.parentNode)
                                    , g = o(a);
                                if (v === -1 || g === -1)
                                    return r.addNode(a);
                                const f = ie(a, {
                                    doc: this.doc,
                                    mirror: this.mirror,
                                    blockClass: this.blockClass,
                                    blockSelector: this.blockSelector,
                                    maskTextClass: this.maskTextClass,
                                    maskTextSelector: this.maskTextSelector,
                                    skipChild: !0,
                                    newlyAddedElement: !0,
                                    inlineStylesheet: this.inlineStylesheet,
                                    maskInputOptions: this.maskInputOptions,
                                    maskTextFn: this.maskTextFn,
                                    maskInputFn: this.maskInputFn,
                                    slimDOMOptions: this.slimDOMOptions,
                                    dataURLOptions: this.dataURLOptions,
                                    recordCanvas: this.recordCanvas,
                                    inlineImages: this.inlineImages,
                                    onSerialize: C => {
                                        He(C, this.mirror) && this.iframeManager.addIframe(C),
                                            Be(C, this.mirror) && this.stylesheetManager.trackLinkElement(C),
                                            Ye(a) && this.shadowDomManager.addShadowRoot(a.shadowRoot, document)
                                    }
                                    ,
                                    onIframeLoad: (C, R) => {
                                        this.iframeManager.attachIframe(C, R, this.mirror),
                                            this.shadowDomManager.observeAttachShadow(C)
                                    }
                                    ,
                                    onStylesheetLoad: (C, R) => {
                                        this.stylesheetManager.attachLinkElement(C, R)
                                    }
                                });
                                f && n.push({
                                    parentId: v,
                                    nextId: g,
                                    node: f
                                })
                            }
                            ;
                        for (; this.mapRemoves.length;)
                            this.mirror.removeNodeFromMap(this.mapRemoves.shift());
                        for (const a of Array.from(this.movedSet.values()))
                            Je(this.removes, a, this.mirror) && !this.movedSet.has(a.parentNode) || s(a);
                        for (const a of Array.from(this.addedSet.values()))
                            !qe(this.droppedSet, a) && !Je(this.removes, a, this.mirror) || qe(this.movedSet, a) ? s(a) : this.droppedSet.add(a);
                        let i = null;
                        for (; r.length;) {
                            let a = null;
                            if (i) {
                                const c = this.mirror.getId(i.value.parentNode)
                                    , u = o(i.value);
                                c !== -1 && u !== -1 && (a = i)
                            }
                            if (!a)
                                for (let c = r.length - 1; c >= 0; c--) {
                                    const u = r.get(c);
                                    if (u) {
                                        const d = this.mirror.getId(u.value.parentNode);
                                        if (o(u.value) === -1)
                                            continue;
                                        if (d !== -1) {
                                            a = u;
                                            break
                                        } else {
                                            const h = u.value
                                                , m = h.getRootNode ? (t = h.getRootNode()) == null ? void 0 : t.host : null;
                                            if (this.mirror.getId(m) !== -1) {
                                                a = u;
                                                break
                                            }
                                        }
                                    }
                                }
                            if (!a) {
                                for (; r.head;)
                                    r.removeNode(r.head.value);
                                break
                            }
                            i = a.previous,
                                r.removeNode(a.value),
                                s(a.value)
                        }
                        const l = {
                            texts: this.texts.map(a => ({
                                id: this.mirror.getId(a.node),
                                value: a.value
                            })).filter(a => this.mirror.has(a.id)),
                            attributes: this.attributes.map(a => ({
                                id: this.mirror.getId(a.node),
                                attributes: a.attributes
                            })).filter(a => this.mirror.has(a.id)),
                            removes: this.removes,
                            adds: n
                        };
                        !l.texts.length && !l.attributes.length && !l.removes.length && !l.adds.length || (this.texts = [],
                            this.attributes = [],
                            this.removes = [],
                            this.addedSet = new Set,
                            this.movedSet = new Set,
                            this.droppedSet = new Set,
                            this.movedMap = {},
                            this.mutationCb(l))
                    }
                    ,
                    this.processMutation = t => {
                        if (!xe(t.target, this.mirror))
                            switch (t.type) {
                                case "characterData":
                                    {
                                        const n = t.target.textContent;
                                        !W(t.target, this.blockClass, this.blockSelector, !1) && n !== t.oldValue && this.texts.push({
                                            value: Ge(t.target, this.maskTextClass, this.maskTextSelector) && n ? this.maskTextFn ? this.maskTextFn(n) : n.replace(/[\S]/g, "*") : n,
                                            node: t.target
                                        });
                                        break
                                    }
                                case "attributes":
                                    {
                                        const n = t.target;
                                        let r = t.target.getAttribute(t.attributeName);
                                        if (t.attributeName === "value" && (r = Ee({
                                            maskInputOptions: this.maskInputOptions,
                                            tagName: t.target.tagName,
                                            type: t.target.getAttribute("type"),
                                            value: r,
                                            maskInputFn: this.maskInputFn
                                        })),
                                            W(t.target, this.blockClass, this.blockSelector, !1) || r === t.oldValue)
                                            return;
                                        let o = this.attributes.find(s => s.node === t.target);
                                        if (n.tagName === "IFRAME" && t.attributeName === "src" && !this.keepIframeSrcFn(r))
                                            if (!n.contentDocument)
                                                t.attributeName = "rr_src";
                                            else
                                                return;
                                        if (o || (o = {
                                            node: t.target,
                                            attributes: {}
                                        },
                                            this.attributes.push(o)),
                                            t.attributeName === "style") {
                                            const s = this.doc.createElement("span");
                                            t.oldValue && s.setAttribute("style", t.oldValue),
                                                (o.attributes.style === void 0 || o.attributes.style === null) && (o.attributes.style = {});
                                            const i = o.attributes.style;
                                            for (const l of Array.from(n.style)) {
                                                const a = n.style.getPropertyValue(l)
                                                    , c = n.style.getPropertyPriority(l);
                                                (a !== s.style.getPropertyValue(l) || c !== s.style.getPropertyPriority(l)) && (c === "" ? i[l] = a : i[l] = [a, c])
                                            }
                                            for (const l of Array.from(s.style))
                                                n.style.getPropertyValue(l) === "" && (i[l] = !1)
                                        } else
                                            o.attributes[t.attributeName] = ze(this.doc, n.tagName, t.attributeName, r);
                                        break
                                    }
                                case "childList":
                                    {
                                        if (W(t.target, this.blockClass, this.blockSelector, !0))
                                            return;
                                        t.addedNodes.forEach(n => this.genAdds(n, t.target)),
                                            t.removedNodes.forEach(n => {
                                                const r = this.mirror.getId(n)
                                                    , o = fe(t.target) ? this.mirror.getId(t.target.host) : this.mirror.getId(t.target);
                                                W(t.target, this.blockClass, this.blockSelector, !1) || xe(n, this.mirror) || !qt(n, this.mirror) || (this.addedSet.has(n) ? (De(this.addedSet, n),
                                                    this.droppedSet.add(n)) : this.addedSet.has(t.target) && r === -1 || Ue(t.target, this.mirror) || (this.movedSet.has(n) && this.movedMap[$e(r, o)] ? De(this.movedSet, n) : this.removes.push({
                                                        parentId: o,
                                                        id: r,
                                                        isShadow: fe(t.target) && ye(t.target) ? !0 : void 0
                                                    })),
                                                    this.mapRemoves.push(n))
                                            }
                                            );
                                        break
                                    }
                            }
                    }
                    ,
                    this.genAdds = (t, n) => {
                        if (this.mirror.hasNode(t)) {
                            if (xe(t, this.mirror))
                                return;
                            this.movedSet.add(t);
                            let r = null;
                            n && this.mirror.hasNode(n) && (r = this.mirror.getId(n)),
                                r && r !== -1 && (this.movedMap[$e(this.mirror.getId(t), r)] = !0)
                        } else
                            this.addedSet.add(t),
                                this.droppedSet.delete(t);
                        W(t, this.blockClass, this.blockSelector, !1) || t.childNodes.forEach(r => this.genAdds(r))
                    }
            }
            init(t) {
                ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager"].forEach(n => {
                    this[n] = t[n]
                }
                )
            }
            freeze() {
                this.frozen = !0,
                    this.canvasManager.freeze()
            }
            unfreeze() {
                this.frozen = !1,
                    this.canvasManager.unfreeze(),
                    this.emit()
            }
            isFrozen() {
                return this.frozen
            }
            lock() {
                this.locked = !0,
                    this.canvasManager.lock()
            }
            unlock() {
                this.locked = !1,
                    this.canvasManager.unlock(),
                    this.emit()
            }
            reset() {
                this.shadowDomManager.reset(),
                    this.canvasManager.reset()
            }
        }
        function De(e, t) {
            e.delete(t),
                t.childNodes.forEach(n => De(e, n))
        }
        function Je(e, t, n) {
            return e.length === 0 ? !1 : Qe(e, t, n)
        }
        function Qe(e, t, n) {
            const { parentNode: r } = t;
            if (!r)
                return !1;
            const o = n.getId(r);
            return e.some(s => s.id === o) ? !0 : Qe(e, r, n)
        }
        function qe(e, t) {
            return e.size === 0 ? !1 : et(e, t)
        }
        function et(e, t) {
            const { parentNode: n } = t;
            return n ? e.has(n) ? !0 : et(e, n) : !1
        }
        var an = Object.defineProperty
            , sn = Object.defineProperties
            , ln = Object.getOwnPropertyDescriptors
            , tt = Object.getOwnPropertySymbols
            , cn = Object.prototype.hasOwnProperty
            , un = Object.prototype.propertyIsEnumerable
            , nt = (e, t, n) => t in e ? an(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
            , rt = (e, t) => {
                for (var n in t || (t = {}))
                    cn.call(t, n) && nt(e, n, t[n]);
                if (tt)
                    for (var n of tt(t))
                        un.call(t, n) && nt(e, n, t[n]);
                return e
            }
            , dn = (e, t) => sn(e, ln(t));
        const ae = []
            , ot = typeof CSSGroupingRule < "u"
            , at = typeof CSSMediaRule < "u"
            , st = typeof CSSSupportsRule < "u"
            , it = typeof CSSConditionRule < "u";
        function ge(e) {
            try {
                if ("composedPath" in e) {
                    const t = e.composedPath();
                    if (t.length)
                        return t[0]
                } else if ("path" in e && e.path.length)
                    return e.path[0];
                return e.target
            } catch {
                return e.target
            }
        }
        function lt(e, t) {
            var n, r;
            const o = new on;
            ae.push(o),
                o.init(e);
            let s = window.MutationObserver || window.__rrMutationObserver;
            const i = (r = (n = window?.Zone) == null ? void 0 : n.__symbol__) == null ? void 0 : r.call(n, "MutationObserver");
            i && window[i] && (s = window[i]);
            const l = new s(o.processMutations.bind(o));
            return l.observe(t, {
                attributes: !0,
                attributeOldValue: !0,
                characterData: !0,
                characterDataOldValue: !0,
                childList: !0,
                subtree: !0
            }),
                l
        }
        function pn({ mousemoveCb: e, sampling: t, doc: n, mirror: r }) {
            if (t.mousemove === !1)
                return () => { }
                    ;
            const o = typeof t.mousemove == "number" ? t.mousemove : 50
                , s = typeof t.mousemoveCallback == "number" ? t.mousemoveCallback : 500;
            let i = [], l;
            const a = Se(d => {
                const h = Date.now() - l;
                e(i.map(m => (m.timeOffset -= h,
                    m)), d),
                    i = [],
                    l = null
            }
                , s)
                , c = Se(d => {
                    const h = ge(d)
                        , { clientX: m, clientY: p } = Xe(d) ? d.changedTouches[0] : d;
                    l || (l = Date.now()),
                        i.push({
                            x: m,
                            y: p,
                            id: r.getId(h),
                            timeOffset: Date.now() - l
                        }),
                        a(typeof DragEvent < "u" && d instanceof DragEvent ? D.Drag : d instanceof MouseEvent ? D.MouseMove : D.TouchMove)
                }
                    , o, {
                    trailing: !1
                })
                , u = [_("mousemove", c, n), _("touchmove", c, n), _("drag", c, n)];
            return () => {
                u.forEach(d => d())
            }
        }
        function hn({ mouseInteractionCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, sampling: s }) {
            if (s.mouseInteraction === !1)
                return () => { }
                    ;
            const i = s.mouseInteraction === !0 || s.mouseInteraction === void 0 ? {} : s.mouseInteraction
                , l = []
                , a = c => u => {
                    const d = ge(u);
                    if (W(d, r, o, !0))
                        return;
                    const h = Xe(u) ? u.changedTouches[0] : u;
                    if (!h)
                        return;
                    const m = n.getId(d)
                        , { clientX: p, clientY: y } = h;
                    e({
                        type: Ne[c],
                        id: m,
                        x: p,
                        y
                    })
                }
                ;
            return Object.keys(Ne).filter(c => Number.isNaN(Number(c)) && !c.endsWith("_Departed") && i[c] !== !1).forEach(c => {
                const u = c.toLowerCase()
                    , d = a(c);
                l.push(_(u, d, t))
            }
            ),
                () => {
                    l.forEach(c => c())
                }
        }
        function ct({ scrollCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, sampling: s }) {
            const i = Se(l => {
                const a = ge(l);
                if (!a || W(a, r, o, !0))
                    return;
                const c = n.getId(a);
                if (a === t) {
                    const u = t.scrollingElement || t.documentElement;
                    e({
                        id: c,
                        x: u.scrollLeft,
                        y: u.scrollTop
                    })
                } else
                    e({
                        id: c,
                        x: a.scrollLeft,
                        y: a.scrollTop
                    })
            }
                , s.scroll || 100);
            return _("scroll", i, t)
        }
        function mn({ viewportResizeCb: e }) {
            let t = -1
                , n = -1;
            const r = Se(() => {
                const o = Ze()
                    , s = je();
                (t !== o || n !== s) && (e({
                    width: Number(s),
                    height: Number(o)
                }),
                    t = o,
                    n = s)
            }
                , 200);
            return _("resize", r, window)
        }
        function ut(e, t) {
            const n = rt({}, e);
            return t || delete n.userTriggered,
                n
        }
        const fn = ["INPUT", "TEXTAREA", "SELECT"]
            , dt = new WeakMap;
        function yn({ inputCb: e, doc: t, mirror: n, blockClass: r, blockSelector: o, ignoreClass: s, maskInputOptions: i, maskInputFn: l, sampling: a, userTriggeredOnInput: c }) {
            function u(S) {
                let v = ge(S);
                const g = S.isTrusted;
                if (v && v.tagName === "OPTION" && (v = v.parentElement),
                    !v || !v.tagName || fn.indexOf(v.tagName) < 0 || W(v, r, o, !0))
                    return;
                const f = v.type;
                if (v.classList.contains(s))
                    return;
                let C = v.value
                    , R = !1;
                f === "radio" || f === "checkbox" ? R = v.checked : (i[v.tagName.toLowerCase()] || i[f]) && (C = Ee({
                    maskInputOptions: i,
                    tagName: v.tagName,
                    type: f,
                    value: C,
                    maskInputFn: l
                })),
                    d(v, ut({
                        text: C,
                        isChecked: R,
                        userTriggered: g
                    }, c));
                const z = v.name;
                f === "radio" && z && R && t.querySelectorAll(`input[type="radio"][name="${z}"]`).forEach(T => {
                    T !== v && d(T, ut({
                        text: T.value,
                        isChecked: !R,
                        userTriggered: !1
                    }, c))
                }
                )
            }
            function d(S, v) {
                const g = dt.get(S);
                if (!g || g.text !== v.text || g.isChecked !== v.isChecked) {
                    dt.set(S, v);
                    const f = n.getId(S);
                    e(dn(rt({}, v), {
                        id: f
                    }))
                }
            }
            const h = (a.input === "last" ? ["change"] : ["input", "change"]).map(S => _(S, u, t))
                , m = t.defaultView;
            if (!m)
                return () => {
                    h.forEach(S => S())
                }
                    ;
            const p = m.Object.getOwnPropertyDescriptor(m.HTMLInputElement.prototype, "value")
                , y = [[m.HTMLInputElement.prototype, "value"], [m.HTMLInputElement.prototype, "checked"], [m.HTMLSelectElement.prototype, "value"], [m.HTMLTextAreaElement.prototype, "value"], [m.HTMLSelectElement.prototype, "selectedIndex"], [m.HTMLOptionElement.prototype, "selected"]];
            return p && p.set && h.push(...y.map(S => Me(S[0], S[1], {
                set() {
                    u({
                        target: this
                    })
                }
            }, !1, m))),
                () => {
                    h.forEach(S => S())
                }
        }
        function we(e) {
            const t = [];
            function n(r, o) {
                if (ot && r.parentRule instanceof CSSGroupingRule || at && r.parentRule instanceof CSSMediaRule || st && r.parentRule instanceof CSSSupportsRule || it && r.parentRule instanceof CSSConditionRule) {
                    const s = Array.from(r.parentRule.cssRules).indexOf(r);
                    o.unshift(s)
                } else if (r.parentStyleSheet) {
                    const s = Array.from(r.parentStyleSheet.cssRules).indexOf(r);
                    o.unshift(s)
                }
                return o
            }
            return n(e, t)
        }
        function oe(e, t, n) {
            let r, o;
            return e ? (e.ownerNode ? r = t.getId(e.ownerNode) : o = n.getId(e),
            {
                styleId: o,
                id: r
            }) : {}
        }
        function vn({ styleSheetRuleCb: e, mirror: t, stylesheetManager: n }, { win: r }) {
            const o = r.CSSStyleSheet.prototype.insertRule;
            r.CSSStyleSheet.prototype.insertRule = function (u, d) {
                const { id: h, styleId: m } = oe(this, t, n.styleMirror);
                return (h && h !== -1 || m && m !== -1) && e({
                    id: h,
                    styleId: m,
                    adds: [{
                        rule: u,
                        index: d
                    }]
                }),
                    o.apply(this, [u, d])
            }
                ;
            const s = r.CSSStyleSheet.prototype.deleteRule;
            r.CSSStyleSheet.prototype.deleteRule = function (u) {
                const { id: d, styleId: h } = oe(this, t, n.styleMirror);
                return (d && d !== -1 || h && h !== -1) && e({
                    id: d,
                    styleId: h,
                    removes: [{
                        index: u
                    }]
                }),
                    s.apply(this, [u])
            }
                ;
            let i;
            r.CSSStyleSheet.prototype.replace && (i = r.CSSStyleSheet.prototype.replace,
                r.CSSStyleSheet.prototype.replace = function (u) {
                    const { id: d, styleId: h } = oe(this, t, n.styleMirror);
                    return (d && d !== -1 || h && h !== -1) && e({
                        id: d,
                        styleId: h,
                        replace: u
                    }),
                        i.apply(this, [u])
                }
            );
            let l;
            r.CSSStyleSheet.prototype.replaceSync && (l = r.CSSStyleSheet.prototype.replaceSync,
                r.CSSStyleSheet.prototype.replaceSync = function (u) {
                    const { id: d, styleId: h } = oe(this, t, n.styleMirror);
                    return (d && d !== -1 || h && h !== -1) && e({
                        id: d,
                        styleId: h,
                        replaceSync: u
                    }),
                        l.apply(this, [u])
                }
            );
            const a = {};
            ot ? a.CSSGroupingRule = r.CSSGroupingRule : (at && (a.CSSMediaRule = r.CSSMediaRule),
                it && (a.CSSConditionRule = r.CSSConditionRule),
                st && (a.CSSSupportsRule = r.CSSSupportsRule));
            const c = {};
            return Object.entries(a).forEach(([u, d]) => {
                c[u] = {
                    insertRule: d.prototype.insertRule,
                    deleteRule: d.prototype.deleteRule
                },
                    d.prototype.insertRule = function (h, m) {
                        const { id: p, styleId: y } = oe(this.parentStyleSheet, t, n.styleMirror);
                        return (p && p !== -1 || y && y !== -1) && e({
                            id: p,
                            styleId: y,
                            adds: [{
                                rule: h,
                                index: [...we(this), m || 0]
                            }]
                        }),
                            c[u].insertRule.apply(this, [h, m])
                    }
                    ,
                    d.prototype.deleteRule = function (h) {
                        const { id: m, styleId: p } = oe(this.parentStyleSheet, t, n.styleMirror);
                        return (m && m !== -1 || p && p !== -1) && e({
                            id: m,
                            styleId: p,
                            removes: [{
                                index: [...we(this), h]
                            }]
                        }),
                            c[u].deleteRule.apply(this, [h])
                    }
            }
            ),
                () => {
                    r.CSSStyleSheet.prototype.insertRule = o,
                        r.CSSStyleSheet.prototype.deleteRule = s,
                        i && (r.CSSStyleSheet.prototype.replace = i),
                        l && (r.CSSStyleSheet.prototype.replaceSync = l),
                        Object.entries(a).forEach(([u, d]) => {
                            d.prototype.insertRule = c[u].insertRule,
                                d.prototype.deleteRule = c[u].deleteRule
                        }
                        )
                }
        }
        function pt({ mirror: e, stylesheetManager: t }, n) {
            var r, o, s;
            let i = null;
            n.nodeName === "#document" ? i = e.getId(n) : i = e.getId(n.host);
            const l = n.nodeName === "#document" ? (r = n.defaultView) == null ? void 0 : r.Document : (s = (o = n.ownerDocument) == null ? void 0 : o.defaultView) == null ? void 0 : s.ShadowRoot
                , a = Object.getOwnPropertyDescriptor(l?.prototype, "adoptedStyleSheets");
            return i === null || i === -1 || !l || !a ? () => { }
                : (Object.defineProperty(n, "adoptedStyleSheets", {
                    configurable: a.configurable,
                    enumerable: a.enumerable,
                    get() {
                        var c;
                        return (c = a.get) == null ? void 0 : c.call(this)
                    },
                    set(c) {
                        var u;
                        const d = (u = a.set) == null ? void 0 : u.call(this, c);
                        if (i !== null && i !== -1)
                            try {
                                t.adoptStyleSheets(c, i)
                            } catch { }
                        return d
                    }
                }),
                    () => {
                        Object.defineProperty(n, "adoptedStyleSheets", {
                            configurable: a.configurable,
                            enumerable: a.enumerable,
                            get: a.get,
                            set: a.set
                        })
                    }
                )
        }
        function Sn({ styleDeclarationCb: e, mirror: t, ignoreCSSAttributes: n, stylesheetManager: r }, { win: o }) {
            const s = o.CSSStyleDeclaration.prototype.setProperty;
            o.CSSStyleDeclaration.prototype.setProperty = function (l, a, c) {
                var u;
                if (n.has(l))
                    return s.apply(this, [l, a, c]);
                const { id: d, styleId: h } = oe((u = this.parentRule) == null ? void 0 : u.parentStyleSheet, t, r.styleMirror);
                return (d && d !== -1 || h && h !== -1) && e({
                    id: d,
                    styleId: h,
                    set: {
                        property: l,
                        value: a,
                        priority: c
                    },
                    index: we(this.parentRule)
                }),
                    s.apply(this, [l, a, c])
            }
                ;
            const i = o.CSSStyleDeclaration.prototype.removeProperty;
            return o.CSSStyleDeclaration.prototype.removeProperty = function (l) {
                var a;
                if (n.has(l))
                    return i.apply(this, [l]);
                const { id: c, styleId: u } = oe((a = this.parentRule) == null ? void 0 : a.parentStyleSheet, t, r.styleMirror);
                return (c && c !== -1 || u && u !== -1) && e({
                    id: c,
                    styleId: u,
                    remove: {
                        property: l
                    },
                    index: we(this.parentRule)
                }),
                    i.apply(this, [l])
            }
                ,
                () => {
                    o.CSSStyleDeclaration.prototype.setProperty = s,
                        o.CSSStyleDeclaration.prototype.removeProperty = i
                }
        }
        function gn({ mediaInteractionCb: e, blockClass: t, blockSelector: n, mirror: r, sampling: o }) {
            const s = l => Se(a => {
                const c = ge(a);
                if (!c || W(c, t, n, !0))
                    return;
                const { currentTime: u, volume: d, muted: h, playbackRate: m } = c;
                e({
                    type: l,
                    id: r.getId(c),
                    currentTime: u,
                    volume: d,
                    muted: h,
                    playbackRate: m
                })
            }
                , o.media || 500)
                , i = [_("play", s(de.Play)), _("pause", s(de.Pause)), _("seeked", s(de.Seeked)), _("volumechange", s(de.VolumeChange)), _("ratechange", s(de.RateChange))];
            return () => {
                i.forEach(l => l())
            }
        }
        function bn({ fontCb: e, doc: t }) {
            const n = t.defaultView;
            if (!n)
                return () => { }
                    ;
            const r = []
                , o = new WeakMap
                , s = n.FontFace;
            n.FontFace = function (l, a, c) {
                const u = new s(l, a, c);
                return o.set(u, {
                    family: l,
                    buffer: typeof a != "string",
                    descriptors: c,
                    fontSource: typeof a == "string" ? a : JSON.stringify(Array.from(new Uint8Array(a)))
                }),
                    u
            }
                ;
            const i = ce(t.fonts, "add", function (l) {
                return function (a) {
                    return setTimeout(() => {
                        const c = o.get(a);
                        c && (e(c),
                            o.delete(a))
                    }
                        , 0),
                        l.apply(this, [a])
                }
            });
            return r.push(() => {
                n.FontFace = s
            }
            ),
                r.push(i),
                () => {
                    r.forEach(l => l())
                }
        }
        function Cn(e) {
            const { doc: t, mirror: n, blockClass: r, blockSelector: o, selectionCb: s } = e;
            let i = !0;
            const l = () => {
                const a = t.getSelection();
                if (!a || i && a?.isCollapsed)
                    return;
                i = a.isCollapsed || !1;
                const c = []
                    , u = a.rangeCount || 0;
                for (let d = 0; d < u; d++) {
                    const h = a.getRangeAt(d)
                        , { startContainer: m, startOffset: p, endContainer: y, endOffset: S } = h;
                    W(m, r, o, !0) || W(y, r, o, !0) || c.push({
                        start: n.getId(m),
                        startOffset: p,
                        end: n.getId(y),
                        endOffset: S
                    })
                }
                s({
                    ranges: c
                })
            }
                ;
            return l(),
                _("selectionchange", l)
        }
        function kn(e, t) {
            const { mutationCb: n, mousemoveCb: r, mouseInteractionCb: o, scrollCb: s, viewportResizeCb: i, inputCb: l, mediaInteractionCb: a, styleSheetRuleCb: c, styleDeclarationCb: u, canvasMutationCb: d, fontCb: h, selectionCb: m } = e;
            e.mutationCb = (...p) => {
                t.mutation && t.mutation(...p),
                    n(...p)
            }
                ,
                e.mousemoveCb = (...p) => {
                    t.mousemove && t.mousemove(...p),
                        r(...p)
                }
                ,
                e.mouseInteractionCb = (...p) => {
                    t.mouseInteraction && t.mouseInteraction(...p),
                        o(...p)
                }
                ,
                e.scrollCb = (...p) => {
                    t.scroll && t.scroll(...p),
                        s(...p)
                }
                ,
                e.viewportResizeCb = (...p) => {
                    t.viewportResize && t.viewportResize(...p),
                        i(...p)
                }
                ,
                e.inputCb = (...p) => {
                    t.input && t.input(...p),
                        l(...p)
                }
                ,
                e.mediaInteractionCb = (...p) => {
                    t.mediaInteaction && t.mediaInteaction(...p),
                        a(...p)
                }
                ,
                e.styleSheetRuleCb = (...p) => {
                    t.styleSheetRule && t.styleSheetRule(...p),
                        c(...p)
                }
                ,
                e.styleDeclarationCb = (...p) => {
                    t.styleDeclaration && t.styleDeclaration(...p),
                        u(...p)
                }
                ,
                e.canvasMutationCb = (...p) => {
                    t.canvasMutation && t.canvasMutation(...p),
                        d(...p)
                }
                ,
                e.fontCb = (...p) => {
                    t.font && t.font(...p),
                        h(...p)
                }
                ,
                e.selectionCb = (...p) => {
                    t.selection && t.selection(...p),
                        m(...p)
                }
        }
        function In(e, t = {}) {
            const n = e.doc.defaultView;
            if (!n)
                return () => { }
                    ;
            kn(e, t);
            const r = lt(e, e.doc)
                , o = pn(e)
                , s = hn(e)
                , i = ct(e)
                , l = mn(e)
                , a = yn(e)
                , c = gn(e)
                , u = vn(e, {
                    win: n
                })
                , d = pt(e, e.doc)
                , h = Sn(e, {
                    win: n
                })
                , m = e.collectFonts ? bn(e) : () => { }
                , p = Cn(e)
                , y = [];
            for (const S of e.plugins)
                y.push(S.observer(S.callback, n, S.options));
            return () => {
                ae.forEach(S => S.reset()),
                    r.disconnect(),
                    o(),
                    s(),
                    i(),
                    l(),
                    a(),
                    c(),
                    u(),
                    d(),
                    h(),
                    m(),
                    p(),
                    y.forEach(S => S())
            }
        }
        class Mn {
            constructor(t) {
                this.iframes = new WeakMap,
                    this.mutationCb = t.mutationCb,
                    this.stylesheetManager = t.stylesheetManager
            }
            addIframe(t) {
                this.iframes.set(t, !0)
            }
            addLoadListener(t) {
                this.loadListener = t
            }
            attachIframe(t, n, r) {
                var o;
                this.mutationCb({
                    adds: [{
                        parentId: r.getId(t),
                        nextId: null,
                        node: n
                    }],
                    removes: [],
                    texts: [],
                    attributes: [],
                    isAttachIframe: !0
                }),
                    (o = this.loadListener) == null || o.call(this, t),
                    t.contentDocument && t.contentDocument.adoptedStyleSheets && t.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(t.contentDocument.adoptedStyleSheets, r.getId(t.contentDocument))
            }
        }
        var wn = Object.defineProperty
            , On = Object.defineProperties
            , Ln = Object.getOwnPropertyDescriptors
            , ht = Object.getOwnPropertySymbols
            , Tn = Object.prototype.hasOwnProperty
            , En = Object.prototype.propertyIsEnumerable
            , mt = (e, t, n) => t in e ? wn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
            , ft = (e, t) => {
                for (var n in t || (t = {}))
                    Tn.call(t, n) && mt(e, n, t[n]);
                if (ht)
                    for (var n of ht(t))
                        En.call(t, n) && mt(e, n, t[n]);
                return e
            }
            , yt = (e, t) => On(e, Ln(t));
        class Rn {
            constructor(t) {
                this.shadowDoms = new WeakSet,
                    this.restorePatches = [],
                    this.mutationCb = t.mutationCb,
                    this.scrollCb = t.scrollCb,
                    this.bypassOptions = t.bypassOptions,
                    this.mirror = t.mirror;
                const n = this;
                this.restorePatches.push(ce(Element.prototype, "attachShadow", function (r) {
                    return function (o) {
                        const s = r.call(this, o);
                        return this.shadowRoot && n.addShadowRoot(this.shadowRoot, this.ownerDocument),
                            s
                    }
                }))
            }
            addShadowRoot(t, n) {
                !ye(t) || this.shadowDoms.has(t) || (this.shadowDoms.add(t),
                    lt(yt(ft({}, this.bypassOptions), {
                        doc: n,
                        mutationCb: this.mutationCb,
                        mirror: this.mirror,
                        shadowDomManager: this
                    }), t),
                    ct(yt(ft({}, this.bypassOptions), {
                        scrollCb: this.scrollCb,
                        doc: t,
                        mirror: this.mirror
                    })),
                    setTimeout(() => {
                        t.adoptedStyleSheets && t.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(t.adoptedStyleSheets, this.mirror.getId(t.host)),
                            pt({
                                mirror: this.mirror,
                                stylesheetManager: this.bypassOptions.stylesheetManager
                            }, t)
                    }
                        , 0))
            }
            observeAttachShadow(t) {
                if (t.contentWindow) {
                    const n = this;
                    this.restorePatches.push(ce(t.contentWindow.HTMLElement.prototype, "attachShadow", function (r) {
                        return function (o) {
                            const s = r.call(this, o);
                            return this.shadowRoot && n.addShadowRoot(this.shadowRoot, t.contentDocument),
                                s
                        }
                    }))
                }
            }
            reset() {
                this.restorePatches.forEach(t => t()),
                    this.shadowDoms = new WeakSet
            }
        }
        for (var pe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", xn = typeof Uint8Array > "u" ? [] : new Uint8Array(256), Oe = 0; Oe < pe.length; Oe++)
            xn[pe.charCodeAt(Oe)] = Oe;
        var Nn = function (e) {
            var t = new Uint8Array(e), n, r = t.length, o = "";
            for (n = 0; n < r; n += 3)
                o += pe[t[n] >> 2],
                    o += pe[(t[n] & 3) << 4 | t[n + 1] >> 4],
                    o += pe[(t[n + 1] & 15) << 2 | t[n + 2] >> 6],
                    o += pe[t[n + 2] & 63];
            return r % 3 === 2 ? o = o.substring(0, o.length - 1) + "=" : r % 3 === 1 && (o = o.substring(0, o.length - 2) + "=="),
                o
        };
        const vt = new Map;
        function Dn(e, t) {
            let n = vt.get(e);
            return n || (n = new Map,
                vt.set(e, n)),
                n.has(t) || n.set(t, []),
                n.get(t)
        }
        const St = (e, t, n) => {
            if (!e || !(bt(e, t) || typeof e == "object"))
                return;
            const r = e.constructor.name
                , o = Dn(n, r);
            let s = o.indexOf(e);
            return s === -1 && (s = o.length,
                o.push(e)),
                s
        }
            ;
        function Le(e, t, n) {
            if (e instanceof Array)
                return e.map(r => Le(r, t, n));
            if (e === null)
                return e;
            if (e instanceof Float32Array || e instanceof Float64Array || e instanceof Int32Array || e instanceof Uint32Array || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Int16Array || e instanceof Int8Array || e instanceof Uint8ClampedArray)
                return {
                    rr_type: e.constructor.name,
                    args: [Object.values(e)]
                };
            if (e instanceof ArrayBuffer) {
                const r = e.constructor.name
                    , o = Nn(e);
                return {
                    rr_type: r,
                    base64: o
                }
            } else {
                if (e instanceof DataView)
                    return {
                        rr_type: e.constructor.name,
                        args: [Le(e.buffer, t, n), e.byteOffset, e.byteLength]
                    };
                if (e instanceof HTMLImageElement) {
                    const r = e.constructor.name
                        , { src: o } = e;
                    return {
                        rr_type: r,
                        src: o
                    }
                } else if (e instanceof HTMLCanvasElement) {
                    const r = "HTMLImageElement"
                        , o = e.toDataURL();
                    return {
                        rr_type: r,
                        src: o
                    }
                } else {
                    if (e instanceof ImageData)
                        return {
                            rr_type: e.constructor.name,
                            args: [Le(e.data, t, n), e.width, e.height]
                        };
                    if (bt(e, t) || typeof e == "object") {
                        const r = e.constructor.name
                            , o = St(e, t, n);
                        return {
                            rr_type: r,
                            index: o
                        }
                    }
                }
            }
            return e
        }
        const gt = (e, t, n) => [...e].map(r => Le(r, t, n))
            , bt = (e, t) => {
                const n = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter(r => typeof t[r] == "function");
                return Boolean(n.find(r => e instanceof t[r]))
            }
            ;
        function Fn(e, t, n, r) {
            const o = []
                , s = Object.getOwnPropertyNames(t.CanvasRenderingContext2D.prototype);
            for (const i of s)
                try {
                    if (typeof t.CanvasRenderingContext2D.prototype[i] != "function")
                        continue;
                    const l = ce(t.CanvasRenderingContext2D.prototype, i, function (a) {
                        return function (...c) {
                            return W(this.canvas, n, r, !0) || setTimeout(() => {
                                const u = gt([...c], t, this);
                                e(this.canvas, {
                                    type: ue["2D"],
                                    property: i,
                                    args: u
                                })
                            }
                                , 0),
                                a.apply(this, c)
                        }
                    });
                    o.push(l)
                } catch {
                    const a = Me(t.CanvasRenderingContext2D.prototype, i, {
                        set(c) {
                            e(this.canvas, {
                                type: ue["2D"],
                                property: i,
                                args: [c],
                                setter: !0
                            })
                        }
                    });
                    o.push(a)
                }
            return () => {
                o.forEach(i => i())
            }
        }
        function Ct(e, t, n) {
            const r = [];
            try {
                const o = ce(e.HTMLCanvasElement.prototype, "getContext", function (s) {
                    return function (i, ...l) {
                        return W(this, t, n, !0) || "__context" in this || (this.__context = i),
                            s.apply(this, [i, ...l])
                    }
                });
                r.push(o)
            } catch {
                console.error("failed to patch HTMLCanvasElement.prototype.getContext")
            }
            return () => {
                r.forEach(o => o())
            }
        }
        function kt(e, t, n, r, o, s, i) {
            const l = []
                , a = Object.getOwnPropertyNames(e);
            for (const c of a)
                try {
                    if (typeof e[c] != "function")
                        continue;
                    const u = ce(e, c, function (d) {
                        return function (...h) {
                            const m = d.apply(this, h);
                            if (St(m, i, e),
                                !W(this.canvas, r, o, !0)) {
                                const p = gt([...h], i, e)
                                    , y = {
                                        type: t,
                                        property: c,
                                        args: p
                                    };
                                n(this.canvas, y)
                            }
                            return m
                        }
                    });
                    l.push(u)
                } catch {
                    const d = Me(e, c, {
                        set(h) {
                            n(this.canvas, {
                                type: t,
                                property: c,
                                args: [h],
                                setter: !0
                            })
                        }
                    });
                    l.push(d)
                }
            return l
        }
        function An(e, t, n, r, o) {
            const s = [];
            return s.push(...kt(t.WebGLRenderingContext.prototype, ue.WebGL, e, n, r, o, t)),
                typeof t.WebGL2RenderingContext < "u" && s.push(...kt(t.WebGL2RenderingContext.prototype, ue.WebGL2, e, n, r, o, t)),
                () => {
                    s.forEach(i => i())
                }
        }
        function Pn(e, t) {
            var n = atob(e);
            if (t) {
                for (var r = new Uint8Array(n.length), o = 0, s = n.length; o < s; ++o)
                    r[o] = n.charCodeAt(o);
                return String.fromCharCode.apply(null, new Uint16Array(r.buffer))
            }
            return n
        }
        function _n(e, t, n) {
            var r = t === void 0 ? null : t
                , o = n === void 0 ? !1 : n
                , s = Pn(e, o)
                , i = s.indexOf(`
`, 10) + 1
                , l = s.substring(i) + (r ? "//# sourceMappingURL=" + r : "")
                , a = new Blob([l], {
                    type: "application/javascript"
                });
            return URL.createObjectURL(a)
        }
        function Wn(e, t, n) {
            var r;
            return function (s) {
                return r = r || _n(e, t, n),
                    new Worker(r, s)
            }
        }
        var zn = Wn("Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24oKXsidXNlIHN0cmljdCI7Zm9yKHZhciByPSJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvIixwPXR5cGVvZiBVaW50OEFycmF5PiJ1Ij9bXTpuZXcgVWludDhBcnJheSgyNTYpLGY9MDtmPHIubGVuZ3RoO2YrKylwW3IuY2hhckNvZGVBdChmKV09Zjt2YXIgdT1mdW5jdGlvbihzKXt2YXIgZT1uZXcgVWludDhBcnJheShzKSxuLGE9ZS5sZW5ndGgsdD0iIjtmb3Iobj0wO248YTtuKz0zKXQrPXJbZVtuXT4+Ml0sdCs9clsoZVtuXSYzKTw8NHxlW24rMV0+PjRdLHQrPXJbKGVbbisxXSYxNSk8PDJ8ZVtuKzJdPj42XSx0Kz1yW2VbbisyXSY2M107cmV0dXJuIGElMz09PTI/dD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTEpKyI9IjphJTM9PT0xJiYodD10LnN1YnN0cmluZygwLHQubGVuZ3RoLTIpKyI9PSIpLHR9O2NvbnN0IGM9bmV3IE1hcCxsPW5ldyBNYXA7YXN5bmMgZnVuY3Rpb24gdihzLGUsbil7Y29uc3QgYT1gJHtzfS0ke2V9YDtpZigiT2Zmc2NyZWVuQ2FudmFzImluIGdsb2JhbFRoaXMpe2lmKGwuaGFzKGEpKXJldHVybiBsLmdldChhKTtjb25zdCB0PW5ldyBPZmZzY3JlZW5DYW52YXMocyxlKTt0LmdldENvbnRleHQoIjJkIik7Y29uc3QgZz1hd2FpdChhd2FpdCB0LmNvbnZlcnRUb0Jsb2IobikpLmFycmF5QnVmZmVyKCksZD11KGcpO3JldHVybiBsLnNldChhLGQpLGR9ZWxzZSByZXR1cm4iIn1jb25zdCBpPXNlbGY7aS5vbm1lc3NhZ2U9YXN5bmMgZnVuY3Rpb24ocyl7aWYoIk9mZnNjcmVlbkNhbnZhcyJpbiBnbG9iYWxUaGlzKXtjb25zdHtpZDplLGJpdG1hcDpuLHdpZHRoOmEsaGVpZ2h0OnQsZGF0YVVSTE9wdGlvbnM6Z309cy5kYXRhLGQ9dihhLHQsZyksaD1uZXcgT2Zmc2NyZWVuQ2FudmFzKGEsdCk7aC5nZXRDb250ZXh0KCIyZCIpLmRyYXdJbWFnZShuLDAsMCksbi5jbG9zZSgpO2NvbnN0IHc9YXdhaXQgaC5jb252ZXJ0VG9CbG9iKGcpLHk9dy50eXBlLGI9YXdhaXQgdy5hcnJheUJ1ZmZlcigpLG89dShiKTtpZighYy5oYXMoZSkmJmF3YWl0IGQ9PT1vKXJldHVybiBjLnNldChlLG8pLGkucG9zdE1lc3NhZ2Uoe2lkOmV9KTtpZihjLmdldChlKT09PW8pcmV0dXJuIGkucG9zdE1lc3NhZ2Uoe2lkOmV9KTtpLnBvc3RNZXNzYWdlKHtpZDplLHR5cGU6eSxiYXNlNjQ6byx3aWR0aDphLGhlaWdodDp0fSksYy5zZXQoZSxvKX1lbHNlIHJldHVybiBpLnBvc3RNZXNzYWdlKHtpZDpzLmRhdGEuaWR9KX19KSgpOwoK", null, !1)
            , It = Object.getOwnPropertySymbols
            , Gn = Object.prototype.hasOwnProperty
            , Vn = Object.prototype.propertyIsEnumerable
            , Zn = (e, t) => {
                var n = {};
                for (var r in e)
                    Gn.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (e != null && It)
                    for (var r of It(e))
                        t.indexOf(r) < 0 && Vn.call(e, r) && (n[r] = e[r]);
                return n
            }
            , jn = (e, t, n) => new Promise((r, o) => {
                var s = a => {
                    try {
                        l(n.next(a))
                    } catch (c) {
                        o(c)
                    }
                }
                    , i = a => {
                        try {
                            l(n.throw(a))
                        } catch (c) {
                            o(c)
                        }
                    }
                    , l = a => a.done ? r(a.value) : Promise.resolve(a.value).then(s, i);
                l((n = n.apply(e, t)).next())
            }
            );
        class Un {
            constructor(t) {
                this.pendingCanvasMutations = new Map,
                    this.rafStamps = {
                        latestId: 0,
                        invokeId: null
                    },
                    this.frozen = !1,
                    this.locked = !1,
                    this.processMutation = (a, c) => {
                        (this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId || !this.rafStamps.invokeId) && (this.rafStamps.invokeId = this.rafStamps.latestId),
                            this.pendingCanvasMutations.has(a) || this.pendingCanvasMutations.set(a, []),
                            this.pendingCanvasMutations.get(a).push(c)
                    }
                    ;
                const { sampling: n = "all", win: r, blockClass: o, blockSelector: s, recordCanvas: i, dataURLOptions: l } = t;
                this.mutationCb = t.mutationCb,
                    this.mirror = t.mirror,
                    i && n === "all" && this.initCanvasMutationObserver(r, o, s),
                    i && typeof n == "number" && this.initCanvasFPSObserver(n, r, o, s, {
                        dataURLOptions: l
                    })
            }
            reset() {
                this.pendingCanvasMutations.clear(),
                    this.resetObservers && this.resetObservers()
            }
            freeze() {
                this.frozen = !0
            }
            unfreeze() {
                this.frozen = !1
            }
            lock() {
                this.locked = !0
            }
            unlock() {
                this.locked = !1
            }
            initCanvasFPSObserver(t, n, r, o, s) {
                const i = Ct(n, r, o)
                    , l = new Map
                    , a = new zn;
                a.onmessage = p => {
                    const { id: y } = p.data;
                    if (l.set(y, !1),
                        !("base64" in p.data))
                        return;
                    const { base64: S, type: v, width: g, height: f } = p.data;
                    this.mutationCb({
                        id: y,
                        type: ue["2D"],
                        commands: [{
                            property: "clearRect",
                            args: [0, 0, g, f]
                        }, {
                            property: "drawImage",
                            args: [{
                                rr_type: "ImageBitmap",
                                args: [{
                                    rr_type: "Blob",
                                    data: [{
                                        rr_type: "ArrayBuffer",
                                        base64: S
                                    }],
                                    type: v
                                }]
                            }, 0, 0]
                        }]
                    })
                }
                    ;
                const c = 1e3 / t;
                let u = 0, d;
                const h = () => {
                    const p = [];
                    return n.document.querySelectorAll("canvas").forEach(y => {
                        W(y, r, o, !0) || p.push(y)
                    }
                    ),
                        p
                }
                    , m = p => {
                        if (u && p - u < c) {
                            d = requestAnimationFrame(m);
                            return
                        }
                        u = p,
                            h().forEach(y => jn(this, null, function* () {
                                var S;
                                const v = this.mirror.getId(y);
                                if (l.get(v))
                                    return;
                                if (l.set(v, !0),
                                    ["webgl", "webgl2"].includes(y.__context)) {
                                    const f = y.getContext(y.__context);
                                    ((S = f?.getContextAttributes()) == null ? void 0 : S.preserveDrawingBuffer) === !1 && f?.clear(f.COLOR_BUFFER_BIT)
                                }
                                const g = yield createImageBitmap(y);
                                a.postMessage({
                                    id: v,
                                    bitmap: g,
                                    width: y.width,
                                    height: y.height,
                                    dataURLOptions: s.dataURLOptions
                                }, [g])
                            })),
                            d = requestAnimationFrame(m)
                    }
                    ;
                d = requestAnimationFrame(m),
                    this.resetObservers = () => {
                        i(),
                            cancelAnimationFrame(d)
                    }
            }
            initCanvasMutationObserver(t, n, r) {
                this.startRAFTimestamping(),
                    this.startPendingCanvasMutationFlusher();
                const o = Ct(t, n, r)
                    , s = Fn(this.processMutation.bind(this), t, n, r)
                    , i = An(this.processMutation.bind(this), t, n, r, this.mirror);
                this.resetObservers = () => {
                    o(),
                        s(),
                        i()
                }
            }
            startPendingCanvasMutationFlusher() {
                requestAnimationFrame(() => this.flushPendingCanvasMutations())
            }
            startRAFTimestamping() {
                const t = n => {
                    this.rafStamps.latestId = n,
                        requestAnimationFrame(t)
                }
                    ;
                requestAnimationFrame(t)
            }
            flushPendingCanvasMutations() {
                this.pendingCanvasMutations.forEach((t, n) => {
                    const r = this.mirror.getId(n);
                    this.flushPendingCanvasMutationFor(n, r)
                }
                ),
                    requestAnimationFrame(() => this.flushPendingCanvasMutations())
            }
            flushPendingCanvasMutationFor(t, n) {
                if (this.frozen || this.locked)
                    return;
                const r = this.pendingCanvasMutations.get(t);
                if (!r || n === -1)
                    return;
                const o = r.map(i => Zn(i, ["type"]))
                    , { type: s } = r[0];
                this.mutationCb({
                    id: n,
                    type: s,
                    commands: o
                }),
                    this.pendingCanvasMutations.delete(t)
            }
        }
        class Xn {
            constructor(t) {
                this.trackedLinkElements = new WeakSet,
                    this.styleMirror = new tn,
                    this.mutationCb = t.mutationCb,
                    this.adoptedStyleSheetCb = t.adoptedStyleSheetCb
            }
            attachLinkElement(t, n) {
                "_cssText" in n.attributes && this.mutationCb({
                    adds: [],
                    removes: [],
                    texts: [],
                    attributes: [{
                        id: n.id,
                        attributes: n.attributes
                    }]
                }),
                    this.trackLinkElement(t)
            }
            trackLinkElement(t) {
                this.trackedLinkElements.has(t) || (this.trackedLinkElements.add(t),
                    this.trackStylesheetInLinkElement(t))
            }
            adoptStyleSheets(t, n) {
                if (t.length === 0)
                    return;
                const r = {
                    id: n,
                    styleIds: []
                }
                    , o = [];
                for (const s of t) {
                    let i;
                    if (this.styleMirror.has(s))
                        i = this.styleMirror.getId(s);
                    else {
                        i = this.styleMirror.add(s);
                        const l = Array.from(s.rules || CSSRule);
                        o.push({
                            styleId: i,
                            rules: l.map((a, c) => ({
                                rule: Ae(a),
                                index: c
                            }))
                        })
                    }
                    r.styleIds.push(i)
                }
                o.length > 0 && (r.styles = o),
                    this.adoptedStyleSheetCb(r)
            }
            reset() {
                this.styleMirror.reset(),
                    this.trackedLinkElements = new WeakSet
            }
            trackStylesheetInLinkElement(t) { }
        }
        var Hn = Object.defineProperty
            , Bn = Object.defineProperties
            , Yn = Object.getOwnPropertyDescriptors
            , Mt = Object.getOwnPropertySymbols
            , Kn = Object.prototype.hasOwnProperty
            , $n = Object.prototype.propertyIsEnumerable
            , wt = (e, t, n) => t in e ? Hn(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n
            , V = (e, t) => {
                for (var n in t || (t = {}))
                    Kn.call(t, n) && wt(e, n, t[n]);
                if (Mt)
                    for (var n of Mt(t))
                        $n.call(t, n) && wt(e, n, t[n]);
                return e
            }
            , Jn = (e, t) => Bn(e, Yn(t));
        function E(e) {
            return Jn(V({}, e), {
                timestamp: Date.now()
            })
        }
        let O, he, Fe;
        const H = Et();
        function be(e = {}) {
            const { emit: t, checkoutEveryNms: n, checkoutEveryNth: r, blockClass: o = "rr-block", blockSelector: s = null, ignoreClass: i = "rr-ignore", maskTextClass: l = "rr-mask", maskTextSelector: a = null, inlineStylesheet: c = !0, maskAllInputs: u, maskInputOptions: d, slimDOMOptions: h, maskInputFn: m, maskTextFn: p, hooks: y, packFn: S, sampling: v = {}, dataURLOptions: g = {}, mousemoveWait: f, recordCanvas: C = !1, userTriggeredOnInput: R = !1, collectFonts: z = !1, inlineImages: T = !1, plugins: w, keepIframeSrcFn: B = () => !1, ignoreCSSAttributes: Y = new Set([]) } = e;
            if (!t)
                throw new Error("emit function is required");
            f !== void 0 && v.mousemove === void 0 && (v.mousemove = f),
                H.reset();
            const G = u === !0 ? {
                color: !0,
                date: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0,
                textarea: !0,
                select: !0,
                password: !0
            } : d !== void 0 ? d : {
                password: !0
            }
                , X = h === !0 || h === "all" ? {
                    script: !0,
                    comment: !0,
                    headFavicon: !0,
                    headWhitespace: !0,
                    headMetaSocial: !0,
                    headMetaRobots: !0,
                    headMetaHttpEquiv: !0,
                    headMetaVerification: !0,
                    headMetaAuthorship: h === "all",
                    headMetaDescKeywords: h === "all"
                } : h || {};
            en();
            let K, x = 0;
            for (const b of w || [])
                b.getMirror && b.getMirror(H);
            const $ = b => {
                for (const j of w || [])
                    j.eventProcessor && (b = j.eventProcessor(b));
                return S && (b = S(b)),
                    b
            }
                ;
            O = (b, j) => {
                var q;
                if (((q = ae[0]) == null ? void 0 : q.isFrozen()) && b.type !== M.FullSnapshot && !(b.type === M.IncrementalSnapshot && b.data.source === D.Mutation) && ae.forEach(P => P.unfreeze()),
                    t($(b), j),
                    b.type === M.FullSnapshot)
                    K = b,
                        x = 0;
                else if (b.type === M.IncrementalSnapshot) {
                    if (b.data.source === D.Mutation && b.data.isAttachIframe)
                        return;
                    x++;
                    const P = r && x >= r
                        , ee = n && b.timestamp - K.timestamp > n;
                    (P || ee) && he(!0)
                }
            }
                ;
            const Z = b => {
                O(E({
                    type: M.IncrementalSnapshot,
                    data: V({
                        source: D.Mutation
                    }, b)
                }))
            }
                , ne = b => O(E({
                    type: M.IncrementalSnapshot,
                    data: V({
                        source: D.Scroll
                    }, b)
                }))
                , re = b => O(E({
                    type: M.IncrementalSnapshot,
                    data: V({
                        source: D.CanvasMutation
                    }, b)
                }))
                , J = b => O(E({
                    type: M.IncrementalSnapshot,
                    data: V({
                        source: D.AdoptedStyleSheet
                    }, b)
                }))
                , F = new Xn({
                    mutationCb: Z,
                    adoptedStyleSheetCb: J
                })
                , Q = new Mn({
                    mutationCb: Z,
                    stylesheetManager: F
                });
            Fe = new Un({
                recordCanvas: C,
                mutationCb: re,
                win: window,
                blockClass: o,
                blockSelector: s,
                mirror: H,
                sampling: v.canvas,
                dataURLOptions: g
            });
            const L = new Rn({
                mutationCb: Z,
                scrollCb: ne,
                bypassOptions: {
                    blockClass: o,
                    blockSelector: s,
                    maskTextClass: l,
                    maskTextSelector: a,
                    inlineStylesheet: c,
                    maskInputOptions: G,
                    dataURLOptions: g,
                    maskTextFn: p,
                    maskInputFn: m,
                    recordCanvas: C,
                    inlineImages: T,
                    sampling: v,
                    slimDOMOptions: X,
                    iframeManager: Q,
                    stylesheetManager: F,
                    canvasManager: Fe,
                    keepIframeSrcFn: B
                },
                mirror: H
            });
            he = (b = !1) => {
                var j, q, P, ee, k, U;
                O(E({
                    type: M.Meta,
                    data: {
                        href: window.location.href,
                        width: je(),
                        height: Ze()
                    }
                }), b),
                    F.reset(),
                    ae.forEach(A => A.lock());
                const me = Qt(document, {
                    mirror: H,
                    blockClass: o,
                    blockSelector: s,
                    maskTextClass: l,
                    maskTextSelector: a,
                    inlineStylesheet: c,
                    maskAllInputs: G,
                    maskTextFn: p,
                    slimDOM: X,
                    dataURLOptions: g,
                    recordCanvas: C,
                    inlineImages: T,
                    onSerialize: A => {
                        He(A, H) && Q.addIframe(A),
                            Be(A, H) && F.trackLinkElement(A),
                            Ye(A) && L.addShadowRoot(A.shadowRoot, document)
                    }
                    ,
                    onIframeLoad: (A, te) => {
                        Q.attachIframe(A, te, H),
                            L.observeAttachShadow(A)
                    }
                    ,
                    onStylesheetLoad: (A, te) => {
                        F.attachLinkElement(A, te)
                    }
                    ,
                    keepIframeSrcFn: B
                });
                if (!me)
                    return console.warn("Failed to snapshot the document");
                O(E({
                    type: M.FullSnapshot,
                    data: {
                        node: me,
                        initialOffset: {
                            left: window.pageXOffset !== void 0 ? window.pageXOffset : document?.documentElement.scrollLeft || ((q = (j = document?.body) == null ? void 0 : j.parentElement) == null ? void 0 : q.scrollLeft) || ((P = document?.body) == null ? void 0 : P.scrollLeft) || 0,
                            top: window.pageYOffset !== void 0 ? window.pageYOffset : document?.documentElement.scrollTop || ((k = (ee = document?.body) == null ? void 0 : ee.parentElement) == null ? void 0 : k.scrollTop) || ((U = document?.body) == null ? void 0 : U.scrollTop) || 0
                        }
                    }
                })),
                    ae.forEach(A => A.unlock()),
                    document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && F.adoptStyleSheets(document.adoptedStyleSheets, H.getId(document))
            }
                ;
            try {
                const b = [];
                b.push(_("DOMContentLoaded", () => {
                    O(E({
                        type: M.DomContentLoaded,
                        data: {}
                    }))
                }
                ));
                const j = P => {
                    var ee;
                    return In({
                        mutationCb: Z,
                        mousemoveCb: (k, U) => O(E({
                            type: M.IncrementalSnapshot,
                            data: {
                                source: U,
                                positions: k
                            }
                        })),
                        mouseInteractionCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.MouseInteraction
                            }, k)
                        })),
                        scrollCb: ne,
                        viewportResizeCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.ViewportResize
                            }, k)
                        })),
                        inputCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.Input
                            }, k)
                        })),
                        mediaInteractionCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.MediaInteraction
                            }, k)
                        })),
                        styleSheetRuleCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.StyleSheetRule
                            }, k)
                        })),
                        styleDeclarationCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.StyleDeclaration
                            }, k)
                        })),
                        canvasMutationCb: re,
                        fontCb: k => O(E({
                            type: M.IncrementalSnapshot,
                            data: V({
                                source: D.Font
                            }, k)
                        })),
                        selectionCb: k => {
                            O(E({
                                type: M.IncrementalSnapshot,
                                data: V({
                                    source: D.Selection
                                }, k)
                            }))
                        }
                        ,
                        blockClass: o,
                        ignoreClass: i,
                        maskTextClass: l,
                        maskTextSelector: a,
                        maskInputOptions: G,
                        inlineStylesheet: c,
                        sampling: v,
                        recordCanvas: C,
                        inlineImages: T,
                        userTriggeredOnInput: R,
                        collectFonts: z,
                        doc: P,
                        maskInputFn: m,
                        maskTextFn: p,
                        keepIframeSrcFn: B,
                        blockSelector: s,
                        slimDOMOptions: X,
                        dataURLOptions: g,
                        mirror: H,
                        iframeManager: Q,
                        stylesheetManager: F,
                        shadowDomManager: L,
                        canvasManager: Fe,
                        ignoreCSSAttributes: Y,
                        plugins: ((ee = w?.filter(k => k.observer)) == null ? void 0 : ee.map(k => ({
                            observer: k.observer,
                            options: k.options,
                            callback: U => O(E({
                                type: M.Plugin,
                                data: {
                                    plugin: k.name,
                                    payload: U
                                }
                            }))
                        }))) || []
                    }, y)
                }
                    ;
                Q.addLoadListener(P => {
                    b.push(j(P.contentDocument))
                }
                );
                const q = () => {
                    he(),
                        b.push(j(document))
                }
                    ;
                return document.readyState === "interactive" || document.readyState === "complete" ? q() : b.push(_("load", () => {
                    O(E({
                        type: M.Load,
                        data: {}
                    })),
                        q()
                }
                    , window)),
                    () => {
                        b.forEach(P => P()),
                            O = void 0,
                            he = void 0
                    }
            } catch (b) {
                console.warn(b)
            }
        }
        return be.addCustomEvent = (e, t) => {
            if (!O)
                throw new Error("please add custom event after start recording");
            O(E({
                type: M.Custom,
                data: {
                    tag: e,
                    payload: t
                }
            }))
        }
            ,
            be.freezePage = () => {
                ae.forEach(e => e.freeze())
            }
            ,
            be.takeFullSnapshot = e => {
                if (!he)
                    throw new Error("please take full snapshot after start recording");
                he(e)
            }
            ,
            be.mirror = H,
            be
    }();

    /* Sending data via ES6 Fetch */
    let send_data_fetch = async data => {
        try {
            data['url'] = window.location.href;
            let request = await fetch(`${pixel_url_base}pixel-track/${pixel_key}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            let response = await request.text()
            return response == '' ? response : JSON.parse(response);
        } catch (error) {
            console.log(`Analytics pixel: ${error}`);
        }
    };

    /* Sending data without expecting return answer */
    let send_data_beacon = data => {
        try {
            data['url'] = window.location.href;

            navigator.sendBeacon(`${pixel_url_base}pixel-track/${pixel_key}`, JSON.stringify(data));
            let nuevoObjeto = data;
            localStorage.setItem("eventData", JSON.stringify([...(JSON.parse(localStorage.getItem("eventData")) || []), nuevoObjeto]));
        } catch (error) {
            console.log(`Analytics pixel: ${error}`);
        }
    };

    // Función para descargar los datos de localStorage como archivo JSON
    let download_local_storage_data = () => {
        try {
            // Obtener los datos de localStorage
            let jsonContent = JSON.stringify(localData, null, 2);
            // Crear un blob del contenido JSON
            let blob = new Blob([jsonContent], { type: "application/json" });
            // Crear un enlace de descarga
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "records.json";

            // Simula la descarga del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            console.log("Datos descargados como archivo JSON.");
        } catch (error) {
            console.error(`Error al descargar el archivo JSON: ${error.message}`);
        }
    };

    //boton para descarga de los datos del localStorage
    let downloadButton = document.createElement("button");
    downloadButton.innerText = "Descargar Datos JSON";
    downloadButton.onclick = download_local_storage_data;
    document.body.appendChild(downloadButton);

    // Simulación de envío de datos (equivalente a send_data_fetch)
    const send_data_to_file = async (data) => {
        try {
            data['url'] = window.location ? window.location.href : 'http://example.com';
        } catch (error) {
            console.error(`Analytics pixel: ${error}`);
        }
    };

    // Simulación de envío sin retorno (equivalente a send_data_beacon)
    const send_data_to_file_no_return = (data) => {
        try {
            data['url'] = window.location ? window.location.href : 'http://example.com';
        } catch (error) {
            console.error(`Analytics pixel: ${error}`);
        }
    };

    /* Visitor class */
    class AltumCodeVisitor {

        /* Create and initiate the class with the proper parameters */
        async initiate() {

            /* Check if we already have the visitor id */
            if (localStorage.getItem(get_dynamic_var('visitor_uuid')) && localStorage.getItem(get_dynamic_var('visitor_uuid')).trim() != '') {
                this.visitor_uuid = localStorage.getItem(get_dynamic_var('visitor_uuid')).trim();

                let custom_parameters = this.get_custom_parameters();

                /* If custom parameters are set after the initiation of the visitor, update the visitor with the new parameters */
                if (custom_parameters && (!localStorage.getItem(get_dynamic_var('visitor_custom_parameters')) || (localStorage.getItem(get_dynamic_var('visitor_custom_parameters')) && localStorage.getItem(get_dynamic_var('visitor_custom_parameters')) != btoa(JSON.stringify(custom_parameters))))) {
                    /* Generate the details for the visitor */
                    let details = this.get_extra_details();

                    /* Send the details */
                    await send_data_fetch({
                        visitor_uuid: this.visitor_uuid,
                        type: 'initiate_visitor',
                        data: details
                    });
                    send_data_to_file({
                        visitor_uuid: this.visitor_uuid,
                        type: 'initiate_visitor',
                        data: details
                    });
                }

            } else {
                /* Generate it randomly */
                let visitor_uuid = get_random_id();

                this.visitor_uuid = visitor_uuid;

                /* Save it to localstorage */
                localStorage.setItem(get_dynamic_var('visitor_uuid'), this.visitor_uuid);

                /* Generate the details for the visitor */
                let details = this.get_extra_details();

                /* Send the details */
                await send_data_fetch({
                    visitor_uuid,
                    type: 'initiate_visitor',
                    data: details
                });
                send_data_to_file({
                    visitor_uuid: this.visitor_uuid,
                    type: 'initiate_visitor',
                    data: details
                });
            }
        }

        get_extra_details() {
            let data = {
                resolution: {
                    width: window.screen.width,
                    height: window.screen.height
                },
                /* Extra detection based on the browser is made directly on the server side */
            };

            let custom_parameters = this.get_custom_parameters();

            if (custom_parameters) {
                data.custom_parameters = custom_parameters;

                /* Save it to localstorage */
                localStorage.setItem(get_dynamic_var('visitor_custom_parameters'), btoa(JSON.stringify(custom_parameters)));
            }

            return data;
        }

        get_custom_parameters() {
            /* Check for extra parameters */
            let this_script = document.querySelector(`script[src$="pixel/${pixel_key}"]`);
            if (this_script === null) {
                this_script = {
                    dataset: { customParameters: undefined }
                }
            }

            if (this_script.dataset.customParameters) {
                try {
                    let custom_parameters = JSON.parse(this_script.dataset.customParameters);
                    return custom_parameters;
                } catch (error) {
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    /* Session class */
    class AltumCodeEvents {
        /* Create and initiate the class with the proper parameters */
        async initiate() {
            this.visitor_uuid = localStorage.getItem(get_dynamic_var('visitor_uuid'));
            this.visitor_session_uuid = localStorage.getItem(get_dynamic_var('visitor_session_uuid'));

            /* Store UUID of the last event for page loads */
            localStorage.setItem(get_dynamic_var('visitor_session_event_uuid'), get_random_id());
            this.visitor_session_event_uuid = localStorage.getItem(get_dynamic_var('visitor_session_event_uuid'));

            /* Get the session date if existing to detect the current session */
            let visitor_session_date = localStorage.getItem(get_dynamic_var('visitor_session_date'));
            let date = new Date();

            /* Check if the current page is the first for this session */
            if (!visitor_session_date || (visitor_session_date && date - (new Date(visitor_session_date)) > 30 * 60 * 1000)) {
                /* Generate the session uuid */
                this.visitor_session_uuid = get_random_id();
                localStorage.setItem(get_dynamic_var('visitor_session_uuid'), this.visitor_session_uuid);
                /* Emit the landing page event */
                await this.event_landing_page();

            } else {
                /* Emit the pageview event */
                await this.event_pageview()
            }

            /* Set the new session date */
            localStorage.setItem(get_dynamic_var('visitor_session_date'), date.toJSON());

            /* Expose function to window */
            window[pixel_exposed_identifier] = {
                goal: async (key) => {
                    await this.event_goal_conversion(key);
                }
            };

            /* Initiate event handlers */
            if (pixel_track_events_children) {
                this.initiate_event_handlers();
            }

            /* Goals tracking if needed */
            if (pixel_goals.length) {
                let current_domain = get_current_url_domain_no_www();
                /* Iterate on all goals and initiate them if needed */
                for (let goal of pixel_goals) {
                    /* Check if goal url matches the current url */
                    if (goal.type == 'pageview' && (goal.url == current_domain || goal.url == 'www.' + current_domain)) {
                        await this.event_goal_conversion(goal.key);
                    }
                }
            }

            /* Events array to be used by heatmaps and session recordings */
            let events = [];
            let events_tracking_initiated = false;

            /* Initiate heatmaps tracking if needed */
            if (pixel_heatmaps.length) {
                let device = get_device_type();
                let current_domain = get_current_url_domain_no_www();
                /* Iterate on all heatmaps and initiate them if needed */
                for (let heatmap of pixel_heatmaps) {
                    //Clientify
                    let urlheat = heatmap.url;
                    let domain_parse = new URL("https://" + current_domain);
                    current_domain = domain_parse.host + domain_parse.pathname;
                    let position = urlheat.indexOf(current_domain);

                    /* Check if heatmap url matches the current url */
                    // if(heatmap.url == current_domain || heatmap.url == 'www.'+current_domain) {
                    if (heatmap.url == current_domain || heatmap.url == 'www.' + current_domain || position != -1) {
                        //End Clientify
                        /* If needed, snapshot the page and send the data */
                        if (!heatmap[`snapshot_id_${device}`]) {
                            rrwebRecord({
                                emit: async event => {
                                    events_tracking_initiated = true;
                                    /* Push events here */
                                    events.push(event);
                                    /* Send the snapshot data */
                                    if (events.length == 2 && events[0].type == 4 && events[1].type == 2) {
                                        /* Send the caught snapshot */
                                        await send_data_fetch({
                                            type: 'heatmap_snapshot',
                                            heatmap_id: heatmap.heatmap_id,
                                            data: events
                                        });
                                        send_data_to_file({
                                            type: 'heatmap_snapshot',
                                            heatmap_id: heatmap.heatmap_id,
                                            data: events
                                        });
                                    }
                                },

                                /* Convert all text inputs to *** for privacy reasons */
                                maskAllInputs: true,

                                /* Remove unnecessary parts of the page */
                                slimDOMOptions: {
                                    comment: true,
                                    headFavicon: true,
                                    headWhitespace: true,
                                    headMetaDescKeywords: true,
                                    headMetaSocial: true,
                                    headMetaRobots: true,
                                    headMetaHttpEquiv: true,
                                    headMetaAuthorship: true,
                                    headMetaVerification: true
                                },
                            });
                        }

                        /* Initiate the events handlers for heatmaps */
                        this.initiate_event_handler_click(heatmap.heatmap_id);
                        // this.initiate_event_handler_scroll(heatmap.heatmap_id);

                        /* No need to continue the loop if found the heatmap */
                        break;
                    }
                }
            }

            /* Session replay tracking */
            if (pixel_track_sessions_replays) {

                if (!events_tracking_initiated) {
                    rrwebRecord({
                        /* Convert all text inputs to *** for privacy reasons */
                        maskAllInputs: true,

                        /* Remove unnecessary parts of the page */
                        slimDOMOptions: {
                            comment: true,
                            headFavicon: true,
                            headWhitespace: true,
                            headMetaDescKeywords: true,
                            headMetaSocial: true,
                            headMetaRobots: true,
                            headMetaHttpEquiv: true,
                            headMetaAuthorship: true,
                            headMetaVerification: true
                        },

                        emit: event => {
                            events.push(event);
                        }
                        ,
                    });
                }

                let send_sessions_replays = async () => {
                    if (events.length) {
                        await send_data_fetch({
                            visitor_uuid: this.visitor_uuid,
                            visitor_session_uuid: this.visitor_session_uuid,
                            visitor_session_event_uuid: this.visitor_session_event_uuid,
                            type: 'replays',
                            data: events
                        });
                        send_data_to_file({
                            visitor_uuid: this.visitor_uuid,
                            visitor_session_uuid: this.visitor_session_uuid,
                            visitor_session_event_uuid: this.visitor_session_event_uuid,
                            type: 'replays',
                            data: events
                        });
                        events = [];
                    }
                };

                setInterval(send_sessions_replays, 1000);

                /* Timer for the click so we dont spam the server */
                let timer = false;

                document.addEventListener('click', event => {

                    /* Make sure the event was fired by the actual user and not programatically */
                    if (!event.isTrusted) {
                        return false;
                    }

                    /* Timeout depending on the element that has been clicked so that we can detect actual url changes clicks */
                    let timeout = event.target.tagName == 'A' && !event.target.getAttribute('href').startsWith('#') ? 0 : 500;

                    timer = setTimeout(() => send_sessions_replays, timeout);

                }
                );

                document.querySelectorAll('form').forEach(form_element => {

                    form_element.addEventListener('submit', send_sessions_replays);

                }
                );

                /* On page changes */
                const termination_event = 'onpagehide' in self ? 'pagehide' : 'unload';

                window.addEventListener(termination_event, send_sessions_replays, {
                    capture: true
                });
            }

        }

        initiate_event_handlers() {
            this.initiate_event_handler_click();

            this.initiate_event_handler_scroll();

            this.initiate_event_handler_forms();

            this.initiate_event_handler_resize();
        }

        /* Mouse click event handler */
        initiate_event_handler_click(heatmap_id = null) {
            /* Last click data for comparison */
            let click_data = '';

            /* Count of the clicks when the click is simply the same */
            let clicks_count = 1;

            /* Timer for the click so we dont spam the server */
            let timer = false;

            document.addEventListener('click', event => {

                /* Make sure the event was fired by the actual user and not programatically */
                if (!event.isTrusted) {
                    return false;
                }

                /* Timeout depending on the element that has been clicked so that we can detect actual url changes clicks */
                let timeout = event.target.tagName == 'A' && !event.target.getAttribute('href').startsWith('#') ? 0 : 500;

                /* Get the text of the area that the user clicked */
                let text = event.target.innerText.length > 61 ? `${event.target.innerText.substr(0, 61)}...` : event.target.innerText;

                let data = {
                    mouse: {
                        x: event.pageX,
                        y: event.pageY
                    },

                    text: text,
                    element: event.target.tagName.toLowerCase()
                };

                /* Check if the click is the same with the previous */
                if (JSON.stringify(data) == click_data) {
                    clicks_count++;

                    clearInterval(timer);
                }

                click_data = JSON.stringify(data);

                timer = setTimeout(() => {

                    this.event_child('click', data, clicks_count, heatmap_id);

                    clicks_count = 1;

                }
                    , timeout);

            }
            );
        }

        /* Scroll event handler */
        initiate_event_handler_scroll(heatmap_id = null) {

            /* Timer for the scroll so we dont spam the server */
            let timer = false;

            document.addEventListener('scroll', event => {

                /* Make sure the event was fired by the actual user and not programatically */
                if (!event.isTrusted) {
                    return false;
                }

                let data = {
                    scroll: {
                        percentage: parseInt((document.documentElement['scrollTop'] || document.body['scrollTop']) / ((document.documentElement['scrollHeight'] || document.body['scrollHeight']) - document.documentElement.clientHeight) * 100)
                        // Do not store the top value, store the percentage of scrolling instead
                        // top: window.pageYOffset || document.documentElement.scrollTop,

                        // Most websites do not have a horizontal scroll
                        // left: window.pageXOffset || document.documentElement.scrollLeft
                    }
                };

                clearInterval(timer);

                timer = setTimeout(() => {

                    this.event_child('scroll', data, 1, heatmap_id);

                }
                    , 500);

            }
            );
        }

        /* Inputs event handler */
        initiate_event_handler_forms() {

            let event_handler_form = event => {

                /* Store data from the form */
                let data = {
                    form: {
                    }
                };

                // INPUT VALUES ARE NOT STORED ANYMORE FOR PRIVACY REASONS
                // let form_element = event.target;
                //
                // /* Parse all the input fields */
                // form_element.querySelectorAll('input').forEach(input_element => {
                //
                //     if(input_element.type == 'password' || input_element.type == 'hidden') {
                //         return;
                //     }
                //
                //     if(input_element.name.indexOf('captcha') !== -1) {
                //         return;
                //     }
                //
                //     data.form[input_element.name] = input_element.value;
                //
                // });

                /* Submit the event */
                this.event_child('form', data);

            }
                ;

            /* Make sure to know all of the form submissions on the page */
            document.querySelectorAll('form').forEach(form_element => {

                form_element.addEventListener('submit', event_handler_form);

            }
            );

        }

        /* Window resize event handler */
        initiate_event_handler_resize() {

            /* Timer for the scroll so we dont spam the server */
            let timer = false;

            window.addEventListener('resize', event => {

                /* Make sure the event was fired by the actual user and not programatically */
                if (!event.isTrusted) {
                    return false;
                }

                let data = {
                    viewport: this.get_viewport()
                };

                clearInterval(timer);

                timer = setTimeout(() => {

                    this.event_child('resize', data);

                }
                    , 500);

            }
            );

        }

        async event_landing_page() {

            let data = {
                path: window.location.pathname,
                title: document.title,
                referrer: document.referrer.includes(`${location.protocol}//${location.host}${location.pathname}`) ? null : document.referrer,

                utm: this.get_utm_params(),

                viewport: this.get_viewport()
            };

            await this.send_data({
                visitor_uuid: this.visitor_uuid,
                visitor_session_uuid: this.visitor_session_uuid,
                visitor_session_event_uuid: this.visitor_session_event_uuid,
                type: 'landing_page',
                data
            });

        }

        async event_pageview() {
            //Clientify add utm: this.get_utm_params()
            let data = {
                path: window.location.pathname,
                title: document.title,
                referrer: document.referrer.includes(`${location.protocol}//${location.host}${location.pathname}`) ? null : document.referrer,

                utm: this.get_utm_params(),

                viewport: this.get_viewport()
            };

            await this.send_data({
                visitor_uuid: this.visitor_uuid,
                visitor_session_uuid: this.visitor_session_uuid,
                visitor_session_event_uuid: this.visitor_session_event_uuid,
                type: 'pageview',
                data
            });

        }

        event_child(type, data = {}, count = 1, heatmap_id = null) {

            send_data_beacon({
                visitor_uuid: this.visitor_uuid,
                visitor_session_uuid: this.visitor_session_uuid,
                visitor_session_event_uuid: this.visitor_session_event_uuid,
                type,
                data,
                count,
                heatmap_id
            });

        }

        async event_goal_conversion(key) {

            /* Iterate on all goals and initiate them if needed */
            for (let goal of pixel_goals) {

                /* Check if goal url matches the current url */
                if (goal.key == key && !localStorage.getItem(get_dynamic_var(`visitor_goal_${goal.key}`))) {

                    /* Send the goal completion */
                    await send_data_fetch({
                        visitor_uuid: this.visitor_uuid,
                        visitor_session_uuid: this.visitor_session_uuid,
                        visitor_session_event_uuid: this.visitor_session_event_uuid,
                        type: 'goal_conversion',
                        goal_key: goal.key
                    });
                    send_data_to_file({
                        visitor_uuid: this.visitor_uuid,
                        visitor_session_uuid: this.visitor_session_uuid,
                        visitor_session_event_uuid: this.visitor_session_event_uuid,
                        type: 'goal_conversion',
                        goal_key: goal.key
                    });

                    /* Set it in the local storage to make sure to not send it again */
                    localStorage.setItem(get_dynamic_var(`visitor_goal_${goal.key}`), true);
                    break;
                }
            }
        }

        async send_data(data) {
            let response = await send_data_fetch(data);
            send_data_to_file(data);

            /* Handle potential needs to refresh the visitor or session */
            if (response && response.details && response.details.refresh) {

                switch (response.details.refresh) {
                    case 'visitor':
                        localStorage.removeItem(get_dynamic_var('visitor_uuid'));
                        /* reInitiate the Visitor */
                        let altumcode_visitor = new AltumCodeVisitor();
                        await altumcode_visitor.initiate();
                        break;
                    case 'session':
                        localStorage.removeItem(get_dynamic_var('visitor_session_uuid'));
                        localStorage.removeItem(get_dynamic_var('visitor_session_date'));
                        /* reInitiate the Events */
                        let altumcode_events = new AltumCodeEvents();
                        await altumcode_events.initiate();
                        break;
                }
            }
        }

        get_viewport() {
            return {
                width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
            }
        }

        get_utm_params() {
            let url_params = new URLSearchParams(window.location.search);
            return {
                source: url_params.get('utm_source'),
                medium: url_params.get('utm_medium'),
                campaign: url_params.get('utm_campaign'),
                term: url_params.get('utm_term'),
                content: url_params.get('utm_content'),
            };
        }

    }

    const _0x6b10 = ['798894dkzAjL', 'addEventListener', '220380invDvU', '10162bmAhxr', '27508zrnmwF', 'documentElement', '1sgMnpZ', '1anFWqr', '1BZlMhd', 'querySelector', 'complete', '14oebSvJ', 'script[src$=\x22pixel/', 'readyState', 'log', '169581KNEqbv', '129931UQLAXe', 'DOMContentLoaded', '2gRnJmw', 'initiate', '166524VHIwjd', 'loading'];
    const _0x26c67e = _0x3fe8;
    function _0x3fe8(_0x670d0a, _0x673df3) {
        return _0x3fe8 = function (_0x6b102c, _0x3fe87e) {
            _0x6b102c = _0x6b102c - 0x1d7;
            let _0x457c21 = _0x6b10[_0x6b102c];
            return _0x457c21;
        },
            _0x3fe8(_0x670d0a, _0x673df3);
    }
    (function (_0x35bd03, _0x32062f) {
        const _0x132810 = _0x3fe8;
        while (!![]) {
            try {
                const _0x5df856 = parseInt(_0x132810(0x1e6)) + parseInt(_0x132810(0x1e1)) * parseInt(_0x132810(0x1d9)) + -parseInt(_0x132810(0x1ec)) * parseInt(_0x132810(0x1da)) + -parseInt(_0x132810(0x1dd)) * -parseInt(_0x132810(0x1eb)) + parseInt(_0x132810(0x1ea)) + parseInt(_0x132810(0x1e2)) * parseInt(_0x132810(0x1e4)) + parseInt(_0x132810(0x1d8)) * -parseInt(_0x132810(0x1e8));
                if (_0x5df856 === _0x32062f)
                    break;
                else
                    _0x35bd03['push'](_0x35bd03['shift']());
            } catch (_0xf7e8b9) {
                _0x35bd03['push'](_0x35bd03['shift']());
            }
        }
    }(_0x6b10, 0x20475));
    let altumcodestart = async () => {
        const _0x324ef9 = _0x3fe8;
        pixel_verify();
        let _0x4a3184 = document[_0x324ef9(0x1db)](_0x324ef9(0x1de) + pixel_key + '\x22]')
            , _0x20fee0 = is_do_not_track()
            , _0x31401f = is_optout()
            , _0x2a4458 = !_0x31401f && (!_0x20fee0 || _0x20fee0 && _0x4a3184['dataset']['ignoreDnt']);
        if (_0x2a4458) {
            let _0x36abf3 = new AltumCodeVisitor();
            await _0x36abf3[_0x324ef9(0x1e5)]();
            let _0x249077 = new AltumCodeEvents();
            await _0x249077[_0x324ef9(0x1e5)]();
        } else
            _0x20fee0 && console[_0x324ef9(0x1e0)](pixel_url_base + ':\x20' + pixel_key_dnt_message),
                _0x31401f && console[_0x324ef9(0x1e0)](pixel_url_base + ':\x20' + pixel_key_optout_message);
    }, altumcodeprestart = () => {
        altumcodestart();
    };
    document['readyState'] === _0x26c67e(0x1dc) || document[_0x26c67e(0x1df)] !== _0x26c67e(0x1e7) && !document[_0x26c67e(0x1d7)]['doScroll'] ? altumcodeprestart() : document[_0x26c67e(0x1e9)](_0x26c67e(0x1e3), () => {
        altumcodeprestart();
    }
    );
}
)();