/*
not for production use
*/
(function(b, e) {
    "object" === typeof module && "object" === typeof module.exports ? module.exports = b.document ? e(b, !0) : function(b) {
        if (!b.document) throw Error("jQuery requires a window with a document");
        return e(b)
    } : e(b)
})("undefined" !== typeof window ? window : this, function(b, e) {
    function d(a) {
        var b = a.length,
            c = g.type(a);
        return "function" === c || g.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" === typeof b && 0 < b && b - 1 in a
    }

    function a(a, b, c) {
        if (g.isFunction(b)) return g.grep(a, function(a, w) {
            return !!b.call(a,
                w, a) !== c
        });
        if (b.nodeType) return g.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" === typeof b) {
            if (pa.test(b)) return g.filter(b, a, c);
            b = g.filter(b, a)
        }
        return g.grep(a, function(a) {
            return 0 <= ta.call(b, a) !== c
        })
    }

    function c(a, b) {
        for (;
            (a = a[b]) && 1 !== a.nodeType;);
        return a
    }

    function f(a) {
        var b = Ia[a] = {};
        g.each(a.match(ma) || [], function(a, w) {
            b[w] = !0
        });
        return b
    }

    function h() {
        y.removeEventListener("DOMContentLoaded", h, !1);
        b.removeEventListener("load", h, !1);
        g.ready()
    }

    function k() {
        Object.defineProperty(this.cache = {},
            0, {
                get: function() {
                    return {}
                }
            });
        this.expando = g.expando + Math.random()
    }

    function m(a, b, c) {
        if (void 0 === c && 1 === a.nodeType)
            if (c = "data-" + b.replace(Aa, "-$1").toLowerCase(), c = a.getAttribute(c), "string" === typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : Qa.test(c) ? g.parseJSON(c) : c
                } catch (d) {}
                aa.set(a, b, c)
            } else c = void 0;
        return c
    }

    function q() {
        return !0
    }

    function u() {
        return !1
    }

    function r() {
        try {
            return y.activeElement
        } catch (a) {}
    }

    function A(a, b) {
        return g.nodeName(a, "table") && g.nodeName(11 !== b.nodeType ?
            b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function F(a) {
        a.type = (null !== a.getAttribute("type")) + "/" + a.type;
        return a
    }

    function H(a) {
        var b = qb.exec(a.type);
        b ? a.type = b[1] : a.removeAttribute("type");
        return a
    }

    function x(a, b) {
        for (var c = 0, d = a.length; c < d; c++) z.set(a[c], "globalEval", !b || z.get(b[c], "globalEval"))
    }

    function K(a, b) {
        var c, d, e, f;
        if (1 === b.nodeType) {
            if (z.hasData(a) && (f = z.access(a), c = z.set(b, f), f = f.events))
                for (e in delete c.handle,
                    c.events = {}, f)
                    for (c = 0, d = f[e].length; c < d; c++) g.event.add(b, e, f[e][c]);
            aa.hasData(a) && (e = aa.access(a), e = g.extend({}, e), aa.set(b, e))
        }
    }

    function G(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && g.nodeName(a, b) ? g.merge([a], c) : c
    }

    function N(a, c) {
        var d = g(c.createElement(a)).appendTo(c.body),
            e = b.getDefaultComputedStyle ? b.getDefaultComputedStyle(d[0]).display : g.css(d[0], "display");
        d.detach();
        return e
    }

    function P(a) {
        var b =
            y,
            c = Za[a];
        c || (c = N(a, b), "none" !== c && c || (Ja = (Ja || g("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = Ja[0].contentDocument, b.write(), b.close(), c = N(a, b), Ja.detach()), Za[a] = c);
        return c
    }

    function l(a, b, c) {
        var d, e, f = a.style;
        (c = c || Ka(a)) && (e = c.getPropertyValue(b) || c[b]);
        c && ("" !== e || g.contains(a.ownerDocument, a) || (e = g.style(a, b)), Ra.test(e) && $a.test(b) && (a = f.width, b = f.minWidth, d = f.maxWidth, f.minWidth = f.maxWidth = f.width = e, e = c.width, f.width = a, f.minWidth = b, f.maxWidth = d));
        return void 0 !==
            e ? e + "" : e
    }

    function p(a, b) {
        return {
            get: function() {
                if (a()) delete this.get;
                else return (this.get = b).apply(this, arguments)
            }
        }
    }

    function v(a, b) {
        if (b in a) return b;
        for (var c = b[0].toUpperCase() + b.slice(1), d = b, e = ab.length; e--;)
            if (b = ab[e] + c, b in a) return b;
        return d
    }

    function M(a, b, c) {
        return (a = rb.exec(b)) ? Math.max(0, a[1] - (c || 0)) + (a[2] || "px") : b
    }

    function na(a, b, c, d, e) {
        b = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0;
        for (var f = 0; 4 > b; b += 2) "margin" === c && (f += g.css(a, c + ya[b], !0, e)), d ? ("content" === c && (f -= g.css(a, "padding" +
            ya[b], !0, e)), "margin" !== c && (f -= g.css(a, "border" + ya[b] + "Width", !0, e))) : (f += g.css(a, "padding" + ya[b], !0, e), "padding" !== c && (f += g.css(a, "border" + ya[b] + "Width", !0, e)));
        return f
    }

    function ua(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ka(a),
            h = "border-box" === g.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            e = l(a, b, f);
            if (0 > e || null == e) e = a.style[b];
            if (Ra.test(e)) return e;
            d = h && (L.boxSizingReliable() || e === a.style[b]);
            e = parseFloat(e) || 0
        }
        return e + na(a, b, c || (h ? "border" : "content"), d, f) + "px"
    }

    function qa(a,
        b) {
        for (var c, d, e, f = [], l = 0, h = a.length; l < h; l++) d = a[l], d.style && (f[l] = z.get(d, "olddisplay"), c = d.style.display, b ? (f[l] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ea(d) && (f[l] = z.access(d, "olddisplay", P(d.nodeName)))) : f[l] || (e = Ea(d), (c && "none" !== c || !e) && z.set(d, "olddisplay", e ? c : g.css(d, "display"))));
        for (l = 0; l < h; l++) d = a[l], !d.style || b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[l] || "" : "none");
        return a
    }

    function n(a, b, c, d, e) {
        return new n.prototype.init(a, b, c, d, e)
    }

    function C() {
        setTimeout(function() {
            Ba =
                void 0
        });
        return Ba = g.now()
    }

    function E(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = ya[d], e["margin" + c] = e["padding" + c] = a;
        b && (e.opacity = e.width = a);
        return e
    }

    function B(a, b, c) {
        for (var d, e = (Fa[b] || []).concat(Fa["*"]), f = 0, g = e.length; f < g; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function fa(a, b) {
        var c, d, e, f, l;
        for (c in a)
            if (d = g.camelCase(c), e = b[d], f = a[c], g.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), (l = g.cssHooks[d]) && "expand" in l)
                for (c in f = l.expand(f), delete a[d], f) c in a || (a[c] = f[c],
                    b[c] = e);
            else b[d] = e
    }

    function W(a, b, c) {
        var d, e = 0,
            f = La.length,
            l = g.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                if (d) return !1;
                for (var b = Ba || C(), b = Math.max(0, k.startTime + k.duration - b), c = 1 - (b / k.duration || 0), e = 0, f = k.tweens.length; e < f; e++) k.tweens[e].run(c);
                l.notifyWith(a, [k, c, b]);
                if (1 > c && f) return b;
                l.resolveWith(a, [k]);
                return !1
            },
            k = l.promise({
                elem: a,
                props: g.extend({}, b),
                opts: g.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Ba || C(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = g.Tween(a, k.opts, b, c, k.opts.specialEasing[b] || k.opts.easing);
                    k.tweens.push(d);
                    return d
                },
                stop: function(b) {
                    var c = 0,
                        e = b ? k.tweens.length : 0;
                    if (d) return this;
                    for (d = !0; c < e; c++) k.tweens[c].run(1);
                    b ? l.resolveWith(a, [k, b]) : l.rejectWith(a, [k, b]);
                    return this
                }
            });
        c = k.props;
        for (fa(c, k.opts.specialEasing); e < f; e++)
            if (b = La[e].call(k, a, c, k.opts)) return b;
        g.map(c, B, k);
        g.isFunction(k.opts.start) && k.opts.start.call(a, k);
        g.fx.timer(g.extend(h, {
            elem: a,
            anim: k,
            queue: k.opts.queue
        }));
        return k.progress(k.opts.progress).done(k.opts.done,
            k.opts.complete).fail(k.opts.fail).always(k.opts.always)
    }

    function Z(a) {
        return function(b, c) {
            "string" !== typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(ma) || [];
            if (g.isFunction(c))
                for (; d = f[e++];) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function X(a, b, c, d) {
        function e(h) {
            var k;
            f[h] = !0;
            g.each(a[h] || [], function(a, w) {
                var g = w(b, c, d);
                if ("string" === typeof g && !l && !f[g]) return b.dataTypes.unshift(g), e(g), !1;
                if (l) return !(k = g)
            });
            return k
        }
        var f = {},
            l = a === Sa;
        return e(b.dataTypes[0]) ||
            !f["*"] && e("*")
    }

    function va(a, b) {
        var c, d, e = g.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        d && g.extend(!0, a, d);
        return a
    }

    function T(a, b, c, d) {
        var e;
        if (g.isArray(b)) g.each(b, function(b, e) {
            c || tb.test(a) ? d(a, e) : T(a + "[" + ("object" === typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== g.type(b)) d(a, b);
        else
            for (e in b) T(a + "[" + e + "]", b[e], c, d)
    }

    function R(a) {
        return g.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    var ga = [],
        U = ga.slice,
        ra = ga.concat,
        wa = ga.push,
        ta = ga.indexOf,
        Y = {},
        t = Y.toString,
        ba = Y.hasOwnProperty,
        ca = "".trim,
        L = {},
        y = b.document,
        g = function(a, b) {
            return new g.fn.init(a, b)
        },
        I = /^-ms-/,
        da = /-([\da-z])/gi,
        S = function(a, b) {
            return b.toUpperCase()
        };
    g.fn = g.prototype = {
        jquery: "2.1.0",
        constructor: g,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : U.call(this)
        },
        pushStack: function(a) {
            a = g.merge(this.constructor(), a);
            a.prevObject = this;
            a.context = this.context;
            return a
        },
        each: function(a, b) {
            return g.each(this,
                a, b)
        },
        map: function(a) {
            return this.pushStack(g.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length;
            a = +a + (0 > a ? b : 0);
            return this.pushStack(0 <= a && a < b ? [this[a]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: wa,
        sort: ga.sort,
        splice: ga.splice
    };
    g.extend = g.fn.extend = function() {
        var a, b, c, d, e, f = arguments[0] || {},
            l = 1,
            h = arguments.length,
            k = !1;
        "boolean" === typeof f && (k = f, f = arguments[l] || {}, l++);
        "object" === typeof f || g.isFunction(f) || (f = {});
        l === h && (f = this, l--);
        for (; l < h; l++)
            if (null != (a = arguments[l]))
                for (b in a) c = f[b], d = a[b], f !== d && (k && d && (g.isPlainObject(d) || (e = g.isArray(d))) ? (e ? (e = !1, c = c && g.isArray(c) ? c : []) : c = c && g.isPlainObject(c) ? c : {}, f[b] = g.extend(k, c, d)) : void 0 !== d && (f[b] = d));
        return f
    };
    g.extend({
        expando: "jQuery" + ("2.1.0" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" ===
                g.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return 0 <= a - parseFloat(a)
        },
        isPlainObject: function(a) {
            if ("object" !== g.type(a) || a.nodeType || g.isWindow(a)) return !1;
            try {
                if (a.constructor && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            for (var b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" === typeof a || "function" === typeof a ? Y[t.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b;
            b = eval;
            if (a = g.trim(a)) 1 === a.indexOf("use strict") ? (b = y.createElement("script"), b.text = a, y.head.appendChild(b).parentNode.removeChild(b)) : b(a)
        },
        camelCase: function(a) {
            return a.replace(I, "ms-").replace(da, S)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var e, f = 0,
                g = a.length;
            e = d(a);
            if (c)
                if (e)
                    for (; f < g && (e = b.apply(a[f], c), !1 !== e); f++);
                else
                    for (f in a) {
                        if (e = b.apply(a[f], c), !1 === e) break
                    } else if (e)
                        for (; f < g && (e = b.call(a[f],
                                f, a[f]), !1 !== e); f++);
                    else
                        for (f in a)
                            if (e = b.call(a[f], f, a[f]), !1 === e) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : ca.call(a)
        },
        makeArray: function(a, b) {
            var c = b || [];
            null != a && (d(Object(a)) ? g.merge(c, "string" === typeof a ? [a] : a) : wa.call(c, a));
            return c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : ta.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; d < c; d++) a[e++] = b[d];
            a.length = e;
            return a
        },
        grep: function(a, b, c) {
            for (var d = [], e = 0, f = a.length, g = !c; e < f; e++) c = !b(a[e], e), c !== g && d.push(a[e]);
            return d
        },
        map: function(a, b, c) {
            var e, f = 0,
                g = a.length,
                l = [];
            if (d(a))
                for (; f < g; f++) e = b(a[f], f, c), null != e && l.push(e);
            else
                for (f in a) e = b(a[f], f, c), null != e && l.push(e);
            return ra.apply([], l)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d;
            "string" === typeof b && (c = a[b], b = a, a = c);
            if (g.isFunction(a)) return d = U.call(arguments, 2), c = function() {
                return a.apply(b || this, d.concat(U.call(arguments)))
            }, c.guid = a.guid = a.guid || g.guid++, c
        },
        now: Date.now,
        support: L
    });
    g.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
        function(a, b) {
            Y["[object " + b + "]"] = b.toLowerCase()
        });
    var J = function(a) {
        function b(a, c, d, e) {
            var w, f, g, l, O;
            (c ? c.ownerDocument || c : la) !== da && G(c);
            c = c || da;
            d = d || [];
            if (!a || "string" !== typeof a) return d;
            if (1 !== (l = c.nodeType) && 9 !== l) return [];
            if (ja && !e) {
                if (w = Qa.exec(a))
                    if (g = w[1])
                        if (9 === l)
                            if ((f = c.getElementById(g)) && f.parentNode) {
                                if (f.id === g) return d.push(f), d
                            } else return d;
                else {
                    if (c.ownerDocument && (f = c.ownerDocument.getElementById(g)) && x(c, f) && f.id === g) return d.push(f), d
                } else {
                    if (w[2]) return X.apply(d, c.getElementsByTagName(a)),
                        d;
                    if ((g = w[3]) && I.getElementsByClassName && c.getElementsByClassName) return X.apply(d, c.getElementsByClassName(g)), d
                }
                if (I.qsa && (!ia || !ia.test(a))) {
                    f = w = V;
                    g = c;
                    O = 9 === l && a;
                    if (1 === l && "object" !== c.nodeName.toLowerCase()) {
                        l = n(a);
                        (w = c.getAttribute("id")) ? f = w.replace(Da, "\\$&"): c.setAttribute("id", f);
                        f = "[id='" + f + "'] ";
                        for (g = l.length; g--;) l[g] = f + m(l[g]);
                        g = Y.test(a) && p(c.parentNode) || c;
                        O = l.join(",")
                    }
                    if (O) try {
                        return X.apply(d, g.querySelectorAll(O)), d
                    } catch (h) {} finally {
                        w || c.removeAttribute("id")
                    }
                }
            }
            var D;
            a: {
                a = a.replace(K,
                    "$1");
                f = n(a);
                if (!e && 1 === f.length) {
                    w = f[0] = f[0].slice(0);
                    if (2 < w.length && "ID" === (D = w[0]).type && I.getById && 9 === c.nodeType && ja && y.relative[w[1].type]) {
                        c = (y.find.ID(D.matches[0].replace(ga, U), c) || [])[0];
                        if (!c) {
                            D = d;
                            break a
                        }
                        a = a.slice(w.shift().value.length)
                    }
                    for (l = Aa.needsContext.test(a) ? 0 : w.length; l--;) {
                        D = w[l];
                        if (y.relative[g = D.type]) break;
                        if (g = y.find[g])
                            if (e = g(D.matches[0].replace(ga, U), Y.test(w[0].type) && p(c.parentNode) || c)) {
                                w.splice(l, 1);
                                a = e.length && m(w);
                                if (!a) {
                                    X.apply(d, e);
                                    D = d;
                                    break a
                                }
                                break
                            }
                    }
                }
                r(a, f)(e,
                    c, !ja, d, Y.test(a) && p(c.parentNode) || c);
                D = d
            }
            return D
        }

        function c() {
            function a(c, d) {
                b.push(c + " ") > y.cacheLength && delete a[b.shift()];
                return a[c + " "] = d
            }
            var b = [];
            return a
        }

        function d(a) {
            a[V] = !0;
            return a
        }

        function e(a) {
            var b = da.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b)
            }
        }

        function f(a, b) {
            for (var c = a.split("|"), d = a.length; d--;) y.attrHandle[c[d]] = b
        }

        function g(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || -2147483648) - (~a.sourceIndex ||
                    -2147483648);
            if (d) return d;
            if (c)
                for (; c = c.nextSibling;)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function l(a) {
            return function(b) {
                return "input" === b.nodeName.toLowerCase() && b.type === a
            }
        }

        function h(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function k(a) {
            return d(function(b) {
                b = +b;
                return d(function(c, d) {
                    for (var e, w = a([], c.length, b), f = w.length; f--;) c[e = w[f]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function p(a) {
            return a && "undefined" !== typeof a.getElementsByTagName && a
        }

        function t() {}

        function n(a, c) {
            var d, e, w, f, g, l, h;
            if (g = P[a + " "]) return c ? 0 : g.slice(0);
            g = a;
            l = [];
            for (h = y.preFilter; g;) {
                if (!d || (e = qa.exec(g))) e && (g = g.slice(e[0].length) || g), l.push(w = []);
                d = !1;
                if (e = Na.exec(g)) d = e.shift(), w.push({
                    value: d,
                    type: e[0].replace(K, " ")
                }), g = g.slice(d.length);
                for (f in y.filter) !(e = Aa[f].exec(g)) || h[f] && !(e = h[f](e)) || (d = e.shift(), w.push({
                    value: d,
                    type: f,
                    matches: e
                }), g = g.slice(d.length));
                if (!d) break
            }
            return c ? g.length : g ? b.error(a) : P(a, l).slice(0)
        }

        function m(a) {
            for (var b = 0, c = a.length, d = ""; b < c; b++) d +=
                a[b].value;
            return d
        }

        function v(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                w = ma++;
            return b.first ? function(b, c, w) {
                for (; b = b[d];)
                    if (1 === b.nodeType || e) return a(b, c, w)
            } : function(b, c, f) {
                var g, l, O = [B, w];
                if (f)
                    for (; b = b[d];) {
                        if ((1 === b.nodeType || e) && a(b, c, f)) return !0
                    } else
                        for (; b = b[d];)
                            if (1 === b.nodeType || e) {
                                l = b[V] || (b[V] = {});
                                if ((g = l[d]) && g[0] === B && g[1] === w) return O[2] = g[2];
                                l[d] = O;
                                if (O[2] = a(b, c, f)) return !0
                            }
            }
        }

        function ca(a) {
            return 1 < a.length ? function(b, c, d) {
                    for (var e = a.length; e--;)
                        if (!a[e](b, c, d)) return !1;
                    return !0
                } :
                a[0]
        }

        function C(a, b, c, d, e) {
            for (var w, f = [], g = 0, l = a.length, O = null != b; g < l; g++)
                if (w = a[g])
                    if (!c || c(w, d, e)) f.push(w), O && b.push(g);
            return f
        }

        function S(a, c, e, w, f, g) {
            w && !w[V] && (w = S(w));
            f && !f[V] && (f = S(f, g));
            return d(function(d, g, l, h) {
                var D, k, ka = [],
                    ha = [],
                    p = g.length,
                    Q;
                if (!(Q = d)) {
                    Q = c || "*";
                    for (var t = l.nodeType ? [l] : l, n = [], m = 0, v = t.length; m < v; m++) b(Q, t[m], n);
                    Q = n
                }
                Q = !a || !d && c ? Q : C(Q, ka, a, l, h);
                t = e ? f || (d ? a : p || w) ? [] : g : Q;
                e && e(Q, t, l, h);
                if (w)
                    for (D = C(t, ha), w(D, [], l, h), l = D.length; l--;)
                        if (k = D[l]) t[ha[l]] = !(Q[ha[l]] = k);
                if (d) {
                    if (f ||
                        a) {
                        if (f) {
                            D = [];
                            for (l = t.length; l--;)(k = t[l]) && D.push(Q[l] = k);
                            f(null, t = [], D, h)
                        }
                        for (l = t.length; l--;)(k = t[l]) && -1 < (D = f ? T.call(d, k) : ka[l]) && (d[D] = !(g[D] = k))
                    }
                } else t = C(t === g ? t.splice(p, t.length) : t), f ? f(null, g, t, h) : X.apply(g, t)
            })
        }

        function L(a) {
            var b, c, d, e = a.length,
                w = y.relative[a[0].type];
            c = w || y.relative[" "];
            for (var f = w ? 1 : 0, g = v(function(a) {
                    return a === b
                }, c, !0), l = v(function(a) {
                    return -1 < T.call(b, a)
                }, c, !0), O = [function(a, c, d) {
                    return !w && (d || c !== u) || ((b = c).nodeType ? g(a, c, d) : l(a, c, d))
                }]; f < e; f++)
                if (c = y.relative[a[f].type]) O = [v(ca(O), c)];
                else {
                    c = y.filter[a[f].type].apply(null, a[f].matches);
                    if (c[V]) {
                        for (d = ++f; d < e && !y.relative[a[d].type]; d++);
                        return S(1 < f && ca(O), 1 < f && m(a.slice(0, f - 1).concat({
                            value: " " === a[f - 2].type ? "*" : ""
                        })).replace(K, "$1"), c, f < d && L(a.slice(f, d)), d < e && L(a = a.slice(d)), d < e && m(a))
                    }
                    O.push(c)
                }
            return ca(O)
        }

        function ba(a, c) {
            var e = 0 < c.length,
                w = 0 < a.length,
                f = function(d, f, g, l, h) {
                    var D, k, ka, ha = 0,
                        Q = "0",
                        p = d && [],
                        t = [],
                        n = u,
                        m = d || w && y.find.TAG("*", h),
                        v = B += null == n ? 1 : Math.random() || .1,
                        sb = m.length;
                    for (h && (u = f !== da && f); Q !== sb &&
                        null != (D = m[Q]); Q++) {
                        if (w && D) {
                            for (k = 0; ka = a[k++];)
                                if (ka(D, f, g)) {
                                    l.push(D);
                                    break
                                }
                            h && (B = v)
                        }
                        e && ((D = !ka && D) && ha--, d && p.push(D))
                    }
                    ha += Q;
                    if (e && Q !== ha) {
                        for (k = 0; ka = c[k++];) ka(p, t, f, g);
                        if (d) {
                            if (0 < ha)
                                for (; Q--;) p[Q] || t[Q] || (t[Q] = aa.call(l));
                            t = C(t)
                        }
                        X.apply(l, t);
                        h && !d && 0 < t.length && 1 < ha + c.length && b.uniqueSort(l)
                    }
                    h && (B = v, u = n);
                    return p
                };
            return e ? d(f) : f
        }
        var J, I, y, q, M, r, u, E, z, G, da, pa, ja, ia, N, F, x, V = "sizzle" + -new Date,
            la = a.document,
            B = 0,
            ma = 0,
            A = c(),
            P = c(),
            na = c(),
            Ca = function(a, b) {
                a === b && (z = !0);
                return 0
            },
            Ta = {}.hasOwnProperty,
            ea = [],
            aa = ea.pop,
            H = ea.push,
            X = ea.push,
            ua = ea.slice,
            T = ea.indexOf || function(a) {
                for (var b = 0, c = this.length; b < c; b++)
                    if (this[b] === a) return b;
                return -1
            },
            Ma = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w#"),
            va = "\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Ma + ")|)|)[\\x20\\t\\r\\n\\f]*\\]",
            R = ":((?:\\\\.|[\\w-]|[^\\x00-\\xa0])+)(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + va.replace(3,
                8) + ")*)|.*)\\)|)",
            K = RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
            qa = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
            Na = /^[\x20\t\r\n\f]*([>+~]|[\x20\t\r\n\f])[\x20\t\r\n\f]*/,
            fa = RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
            sa = new RegExp(R),
            Ua = new RegExp("^" + Ma + "$"),
            Aa = {
                ID: /^#((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                CLASS: /^\.((?:\\.|[\w-]|[^\x00-\xa0])+)/,
                TAG: new RegExp("^(" + "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+".replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + va),
                PSEUDO: new RegExp("^" + R),
                CHILD: /^:(only|first|last|nth|nth-last)-(child|of-type)(?:\([\x20\t\r\n\f]*(even|odd|(([+-]|)(\d*)n|)[\x20\t\r\n\f]*(?:([+-]|)[\x20\t\r\n\f]*(\d+)|))[\x20\t\r\n\f]*\)|)/i,
                bool: /^(?:checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)$/i,
                needsContext: /^[\x20\t\r\n\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i
            },
            Ia = /^(?:input|select|textarea|button)$/i,
            W = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            Qa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Y = /[+~]/,
            Da = /'|\\/g,
            ga = RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
            U = function(a, b, c) {
                a = "0x" + b - 65536;
                return a !== a || c ? b : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, a & 1023 | 56320)
            };
        try {
            X.apply(ea = ua.call(la.childNodes), la.childNodes), ea[la.childNodes.length].nodeType
        } catch (Sb) {
            X = {
                apply: ea.length ? function(a, b) {
                    H.apply(a, ua.call(b))
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] =
                        b[d++];);
                    a.length = c - 1
                }
            }
        }
        I = b.support = {};
        M = b.isXML = function(a) {
            return (a = a && (a.ownerDocument || a).documentElement) ? "HTML" !== a.nodeName : !1
        };
        G = b.setDocument = function(a) {
            var b = a ? a.ownerDocument || a : la;
            a = b.defaultView;
            if (b === da || 9 !== b.nodeType || !b.documentElement) return da;
            da = b;
            pa = b.documentElement;
            ja = !M(b);
            a && a !== a.top && (a.addEventListener ? a.addEventListener("unload", function() {
                G()
            }, !1) : a.attachEvent && a.attachEvent("onunload", function() {
                G()
            }));
            I.attributes = e(function(a) {
                a.className = "i";
                return !a.getAttribute("className")
            });
            I.getElementsByTagName = e(function(a) {
                a.appendChild(b.createComment(""));
                return !a.getElementsByTagName("*").length
            });
            I.getElementsByClassName = Z.test(b.getElementsByClassName) && e(function(a) {
                a.innerHTML = "<div class='a'></div><div class='a i'></div>";
                a.firstChild.className = "i";
                return 2 === a.getElementsByClassName("i").length
            });
            I.getById = e(function(a) {
                pa.appendChild(a).id = V;
                return !b.getElementsByName || !b.getElementsByName(V).length
            });
            I.getById ? (y.find.ID = function(a, b) {
                if ("undefined" !== typeof b.getElementById &&
                    ja) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, y.filter.ID = function(a) {
                var b = a.replace(ga, U);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete y.find.ID, y.filter.ID = function(a) {
                var b = a.replace(ga, U);
                return function(a) {
                    return (a = "undefined" !== typeof a.getAttributeNode && a.getAttributeNode("id")) && a.value === b
                }
            });
            y.find.TAG = I.getElementsByTagName ? function(a, b) {
                if ("undefined" !== typeof b.getElementsByTagName) return b.getElementsByTagName(a)
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    w = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (; c = w[e++];) 1 === c.nodeType && d.push(c);
                    return d
                }
                return w
            };
            y.find.CLASS = I.getElementsByClassName && function(a, b) {
                if ("undefined" !== typeof b.getElementsByClassName && ja) return b.getElementsByClassName(a)
            };
            N = [];
            ia = [];
            if (I.qsa = Z.test(b.querySelectorAll)) e(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>";
                a.querySelectorAll("[t^='']").length && ia.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")");
                a.querySelectorAll("[selected]").length || ia.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped)");
                a.querySelectorAll(":checked").length || ia.push(":checked")
            }), e(function(a) {
                var c = b.createElement("input");
                c.setAttribute("type", "hidden");
                a.appendChild(c).setAttribute("name", "D");
                a.querySelectorAll("[name=d]").length && ia.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?=");
                a.querySelectorAll(":enabled").length || ia.push(":enabled", ":disabled");
                a.querySelectorAll("*,:x");
                ia.push(",.*:")
            });
            (I.matchesSelector = Z.test(F = pa.webkitMatchesSelector || pa.mozMatchesSelector || pa.oMatchesSelector || pa.msMatchesSelector)) &&
            e(function(a) {
                I.disconnectedMatch = F.call(a, "div");
                F.call(a, "[s!='']:x");
                N.push("!=", R)
            });
            ia = ia.length && new RegExp(ia.join("|"));
            N = N.length && new RegExp(N.join("|"));
            x = (a = Z.test(pa.compareDocumentPosition)) || Z.test(pa.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !!(d && 1 === d.nodeType && (c.contains ? c.contains(d) : a.compareDocumentPosition && a.compareDocumentPosition(d) & 16))
            } : function(a, b) {
                if (b)
                    for (; b = b.parentNode;)
                        if (b === a) return !0;
                return !1
            };
            Ca = a ? function(a,
                c) {
                if (a === c) return z = !0, 0;
                var d = !a.compareDocumentPosition - !c.compareDocumentPosition;
                if (d) return d;
                d = (a.ownerDocument || a) === (c.ownerDocument || c) ? a.compareDocumentPosition(c) : 1;
                return d & 1 || !I.sortDetached && c.compareDocumentPosition(a) === d ? a === b || a.ownerDocument === la && x(la, a) ? -1 : c === b || c.ownerDocument === la && x(la, c) ? 1 : E ? T.call(E, a) - T.call(E, c) : 0 : d & 4 ? -1 : 1
            } : function(a, c) {
                if (a === c) return z = !0, 0;
                var d, e = 0;
                d = a.parentNode;
                var w = c.parentNode,
                    f = [a],
                    l = [c];
                if (!d || !w) return a === b ? -1 : c === b ? 1 : d ? -1 : w ? 1 : E ? T.call(E,
                    a) - T.call(E, c) : 0;
                if (d === w) return g(a, c);
                for (d = a; d = d.parentNode;) f.unshift(d);
                for (d = c; d = d.parentNode;) l.unshift(d);
                for (; f[e] === l[e];) e++;
                return e ? g(f[e], l[e]) : f[e] === la ? -1 : l[e] === la ? 1 : 0
            };
            return b
        };
        b.matches = function(a, c) {
            return b(a, null, null, c)
        };
        b.matchesSelector = function(a, c) {
            (a.ownerDocument || a) !== da && G(a);
            c = c.replace(fa, "='$1']");
            if (!(!I.matchesSelector || !ja || N && N.test(c) || ia && ia.test(c))) try {
                var d = F.call(a, c);
                if (d || I.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return 0 <
                b(c, da, null, [a]).length
        };
        b.contains = function(a, b) {
            (a.ownerDocument || a) !== da && G(a);
            return x(a, b)
        };
        b.attr = function(a, b) {
            (a.ownerDocument || a) !== da && G(a);
            var c = y.attrHandle[b.toLowerCase()],
                c = c && Ta.call(y.attrHandle, b.toLowerCase()) ? c(a, b, !ja) : void 0;
            return void 0 !== c ? c : I.attributes || !ja ? a.getAttribute(b) : (c = a.getAttributeNode(b)) && c.specified ? c.value : null
        };
        b.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        };
        b.uniqueSort = function(a) {
            var b, c = [],
                d = 0,
                e = 0;
            z = !I.detectDuplicates;
            E = !I.sortStable && a.slice(0);
            a.sort(Ca);
            if (z) {
                for (; b = a[e++];) b === a[e] && (d = c.push(e));
                for (; d--;) a.splice(c[d], 1)
            }
            E = null;
            return a
        };
        q = b.getText = function(a) {
            var b, c = "",
                d = 0;
            b = a.nodeType;
            if (!b)
                for (; b = a[d++];) c += q(b);
            else if (1 === b || 9 === b || 11 === b) {
                if ("string" === typeof a.textContent) return a.textContent;
                for (a = a.firstChild; a; a = a.nextSibling) c += q(a)
            } else if (3 === b || 4 === b) return a.nodeValue;
            return c
        };
        y = b.selectors = {
            cacheLength: 50,
            createPseudo: d,
            match: Aa,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    a[1] = a[1].replace(ga, U);
                    a[3] = (a[4] || a[5] || "").replace(ga, U);
                    "~=" === a[2] && (a[3] = " " + a[3] + " ");
                    return a.slice(0, 4)
                },
                CHILD: function(a) {
                    a[1] = a[1].toLowerCase();
                    "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]);
                    return a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    if (Aa.CHILD.test(a[0])) return null;
                    a[3] && void 0 !== a[4] ? a[2] = a[4] : c && sa.test(c) && (b = n(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b));
                    return a.slice(0, 3)
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ga, U).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = A[a + " "];
                    return b || (b = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + a + "([\\x20\\t\\r\\n\\f]|$)")) && A(a, function(a) {
                        return b.test("string" === typeof a.className && a.className ||
                            "undefined" !== typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, c, d) {
                    return function(e) {
                        e = b.attr(e, a);
                        if (null == e) return "!=" === c;
                        if (!c) return !0;
                        e += "";
                        return "=" === c ? e === d : "!=" === c ? e !== d : "^=" === c ? d && 0 === e.indexOf(d) : "*=" === c ? d && -1 < e.indexOf(d) : "$=" === c ? d && e.slice(-d.length) === d : "~=" === c ? -1 < (" " + e + " ").indexOf(d) : "|=" === c ? e === d || e.slice(0, d.length + 1) === d + "-" : !1
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var w = "nth" !== a.slice(0, 3),
                        f = "last" !== a.slice(-4),
                        g = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        } :
                        function(b, c, l) {
                            var O, h, D, k, ka;
                            c = w !== f ? "nextSibling" : "previousSibling";
                            var ha = b.parentNode,
                                Q = g && b.nodeName.toLowerCase();
                            l = !l && !g;
                            if (ha) {
                                if (w) {
                                    for (; c;) {
                                        for (h = b; h = h[c];)
                                            if (g ? h.nodeName.toLowerCase() === Q : 1 === h.nodeType) return !1;
                                        ka = c = "only" === a && !ka && "nextSibling"
                                    }
                                    return !0
                                }
                                ka = [f ? ha.firstChild : ha.lastChild];
                                if (f && l)
                                    for (l = ha[V] || (ha[V] = {}), O = l[a] || [], k = O[0] === B && O[1], D = O[0] === B && O[2], h = k && ha.childNodes[k]; h = ++k && h && h[c] || (D = k = 0) || ka.pop();) {
                                        if (1 === h.nodeType && ++D && h === b) {
                                            l[a] = [B, k, D];
                                            break
                                        }
                                    } else if (l &&
                                        (O = (b[V] || (b[V] = {}))[a]) && O[0] === B) D = O[1];
                                    else
                                        for (;
                                            (h = ++k && h && h[c] || (D = k = 0) || ka.pop()) && ((g ? h.nodeName.toLowerCase() !== Q : 1 !== h.nodeType) || !++D || (l && ((h[V] || (h[V] = {}))[a] = [B, D]), h !== b)););
                                D -= e;
                                return D === d || 0 === D % d && 0 <= D / d
                            }
                        }
                },
                PSEUDO: function(a, c) {
                    var e, w = y.pseudos[a] || y.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
                    return w[V] ? w(c) : 1 < w.length ? (e = [a, a, "", c], y.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
                        for (var d, e = w(a, c), f = e.length; f--;) d = T.call(a, e[f]), a[d] = !(b[d] =
                            e[f])
                    }) : function(a) {
                        return w(a, 0, e)
                    }) : w
                }
            },
            pseudos: {
                not: d(function(a) {
                    var b = [],
                        c = [],
                        e = r(a.replace(K, "$1"));
                    return e[V] ? d(function(a, b, c, d) {
                        d = e(a, null, d, []);
                        for (var w = a.length; w--;)
                            if (c = d[w]) a[w] = !(b[w] = c)
                    }) : function(a, d, w) {
                        b[0] = a;
                        e(b, null, w, c);
                        return !c.pop()
                    }
                }),
                has: d(function(a) {
                    return function(c) {
                        return 0 < b(a, c).length
                    }
                }),
                contains: d(function(a) {
                    return function(b) {
                        return -1 < (b.textContent || b.innerText || q(b)).indexOf(a)
                    }
                }),
                lang: d(function(a) {
                    Ua.test(a || "") || b.error("unsupported lang: " + a);
                    a = a.replace(ga,
                        U).toLowerCase();
                    return function(b) {
                        var c;
                        do
                            if (c = ja ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                        while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === pa
                },
                focus: function(a) {
                    return a === da.activeElement && (!da.hasFocus || da.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return !1 === a.disabled
                },
                disabled: function(a) {
                    return !0 ===
                        a.disabled
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    a.parentNode && a.parentNode.selectedIndex;
                    return !0 === a.selected
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (6 > a.nodeType) return !1;
                    return !0
                },
                parent: function(a) {
                    return !y.pseudos.empty(a)
                },
                header: function(a) {
                    return W.test(a.nodeName)
                },
                input: function(a) {
                    return Ia.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" ===
                        b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: k(function() {
                    return [0]
                }),
                last: k(function(a, b) {
                    return [b - 1]
                }),
                eq: k(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: k(function(a, b) {
                    for (var c = 0; c < b; c += 2) a.push(c);
                    return a
                }),
                odd: k(function(a, b) {
                    for (var c = 1; c < b; c += 2) a.push(c);
                    return a
                }),
                lt: k(function(a, b, c) {
                    for (b = 0 > c ? c + b : c; 0 <= --b;) a.push(b);
                    return a
                }),
                gt: k(function(a, b, c) {
                    for (c =
                        0 > c ? c + b : c; ++c < b;) a.push(c);
                    return a
                })
            }
        };
        y.pseudos.nth = y.pseudos.eq;
        for (J in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) y.pseudos[J] = l(J);
        for (J in {
                submit: !0,
                reset: !0
            }) y.pseudos[J] = h(J);
        t.prototype = y.filters = y.pseudos;
        y.setFilters = new t;
        r = b.compile = function(a, b) {
            var c, d = [],
                e = [],
                w = na[a + " "];
            if (!w) {
                b || (b = n(a));
                for (c = b.length; c--;) w = L(b[c]), w[V] ? d.push(w) : e.push(w);
                w = na(a, ba(e, d))
            }
            return w
        };
        I.sortStable = V.split("").sort(Ca).join("") === V;
        I.detectDuplicates = !!z;
        G();
        I.sortDetached = e(function(a) {
            return a.compareDocumentPosition(da.createElement("div")) &
                1
        });
        e(function(a) {
            a.innerHTML = "<a href='#'></a>";
            return "#" === a.firstChild.getAttribute("href")
        }) || f("type|href|height|width", function(a, b, c) {
            if (!c) return a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        });
        I.attributes && e(function(a) {
            a.innerHTML = "<input/>";
            a.firstChild.setAttribute("value", "");
            return "" === a.firstChild.getAttribute("value")
        }) || f("value", function(a, b, c) {
            if (!c && "input" === a.nodeName.toLowerCase()) return a.defaultValue
        });
        e(function(a) {
            return null == a.getAttribute("disabled")
        }) || f("checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            function(a, b, c) {
                var d;
                if (!c) return !0 === a[b] ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            });
        return b
    }(b);
    g.find = J;
    g.expr = J.selectors;
    g.expr[":"] = g.expr.pseudos;
    g.unique = J.uniqueSort;
    g.text = J.getText;
    g.isXMLDoc = J.isXML;
    g.contains = J.contains;
    var V = g.expr.match.needsContext,
        Ca = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        pa = /^.[^:#\[\.,]*$/;
    g.filter = function(a, b, c) {
        var d = b[0];
        c && (a = ":not(" + a + ")");
        return 1 === b.length && 1 === d.nodeType ? g.find.matchesSelector(d, a) ? [d] : [] : g.find.matches(a, g.grep(b, function(a) {
            return 1 ===
                a.nodeType
        }))
    };
    g.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" !== typeof a) return this.pushStack(g(a).filter(function() {
                for (b = 0; b < c; b++)
                    if (g.contains(e[b], this)) return !0
            }));
            for (b = 0; b < c; b++) g.find(a, e[b], d);
            d = this.pushStack(1 < c ? g.unique(d) : d);
            d.selector = this.selector ? this.selector + " " + a : a;
            return d
        },
        filter: function(b) {
            return this.pushStack(a(this, b || [], !1))
        },
        not: function(b) {
            return this.pushStack(a(this, b || [], !0))
        },
        is: function(b) {
            return !!a(this, "string" === typeof b && V.test(b) ?
                g(b) : b || [], !1).length
        }
    });
    var ja, ia = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (g.fn.init = function(a, b) {
        var c;
        if (!a) return this;
        if ("string" === typeof a) {
            c = "<" === a[0] && ">" === a[a.length - 1] && 3 <= a.length ? [null, a, null] : ia.exec(a);
            if (!c || !c[1] && b) return !b || b.jquery ? (b || ja).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof g ? b[0] : b, g.merge(this, g.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), Ca.test(c[1]) && g.isPlainObject(b))
                    for (c in b)
                        if (g.isFunction(this[c])) this[c](b[c]);
                        else this.attr(c,
                            b[c])
            } else(c = y.getElementById(c[2])) && c.parentNode && (this.length = 1, this[0] = c), this.context = y, this.selector = a;
            return this
        }
        if (a.nodeType) return this.context = this[0] = a, this.length = 1, this;
        if (g.isFunction(a)) return "undefined" !== typeof ja.ready ? ja.ready(a) : a(g);
        void 0 !== a.selector && (this.selector = a.selector, this.context = a.context);
        return g.makeArray(a, this)
    }).prototype = g.fn;
    ja = g(y);
    var Ta = /^(?:parents|prev(?:Until|All))/,
        Ma = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    g.extend({
        dir: function(a, b, c) {
            for (var d = [], e = void 0 !== c;
                (a = a[b]) && 9 !== a.nodeType;)
                if (1 === a.nodeType) {
                    if (e && g(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    });
    g.fn.extend({
        has: function(a) {
            var b = g(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; a < c; a++)
                    if (g.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], l = V.test(a) || "string" !== typeof a ? g(a, b || this.context) : 0; d < e; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (11 >
                        c.nodeType && (l ? -1 < l.index(c) : 1 === c.nodeType && g.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(1 < f.length ? g.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" === typeof a ? ta.call(g(a), this[0]) : ta.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(g.unique(g.merge(this.get(), g(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    g.each({
        parent: function(a) {
            return (a =
                a.parentNode) && 11 !== a.nodeType ? a : null
        },
        parents: function(a) {
            return g.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return g.dir(a, "parentNode", c)
        },
        next: function(a) {
            return c(a, "nextSibling")
        },
        prev: function(a) {
            return c(a, "previousSibling")
        },
        nextAll: function(a) {
            return g.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return g.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return g.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return g.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return g.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return g.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || g.merge([], a.childNodes)
        }
    }, function(a, b) {
        g.fn[a] = function(c, d) {
            var e = g.map(this, b, c);
            "Until" !== a.slice(-5) && (d = c);
            d && "string" === typeof d && (e = g.filter(d, e));
            1 < this.length && (Ma[a] || g.unique(e), Ta.test(a) && e.reverse());
            return this.pushStack(e)
        }
    });
    var ma = /\S+/g,
        Ia = {};
    g.Callbacks = function(a) {
        a = "string" === typeof a ? Ia[a] || f(a) : g.extend({}, a);
        var b, c, d, e, l, h, k = [],
            p = !a.once && [],
            t = function(f) {
                b =
                    a.memory && f;
                c = !0;
                h = e || 0;
                e = 0;
                l = k.length;
                for (d = !0; k && h < l; h++)
                    if (!1 === k[h].apply(f[0], f[1]) && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1;
                k && (p ? p.length && t(p.shift()) : b ? k = [] : n.disable())
            },
            n = {
                add: function() {
                    if (k) {
                        var c = k.length;
                        (function ub(b) {
                            g.each(b, function(b, c) {
                                var d = g.type(c);
                                "function" === d ? a.unique && n.has(c) || k.push(c) : c && c.length && "string" !== d && ub(c)
                            })
                        })(arguments);
                        d ? l = k.length : b && (e = c, t(b))
                    }
                    return this
                },
                remove: function() {
                    k && g.each(arguments, function(a, b) {
                        for (var c; - 1 < (c = g.inArray(b, k, c));) k.splice(c, 1), d &&
                            (c <= l && l--, c <= h && h--)
                    });
                    return this
                },
                has: function(a) {
                    return a ? -1 < g.inArray(a, k) : !(!k || !k.length)
                },
                empty: function() {
                    k = [];
                    l = 0;
                    return this
                },
                disable: function() {
                    k = p = b = void 0;
                    return this
                },
                disabled: function() {
                    return !k
                },
                lock: function() {
                    p = void 0;
                    b || n.disable();
                    return this
                },
                locked: function() {
                    return !p
                },
                fireWith: function(a, b) {
                    !k || c && !p || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? p.push(b) : t(b));
                    return this
                },
                fire: function() {
                    n.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!c
                }
            };
        return n
    };
    g.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", g.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", g.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", g.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        e.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var a = arguments;
                        return g.Deferred(function(c) {
                            g.each(b, function(b, f) {
                                var w = g.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = w && w.apply(this, arguments);
                                    if (a && g.isFunction(a.promise)) a.promise().done(c.resolve).fail(c.reject).progress(c.notify);
                                    else c[f[0] + "With"](this === d ? c.promise() : this, w ? [a] : arguments)
                                })
                            });
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? g.extend(a, d) : d
                    }
                },
                e = {};
            d.pipe = d.then;
            g.each(b, function(a, f) {
                var w = f[2],
                    g = f[3];
                d[f[1]] = w.add;
                g && w.add(function() {
                    c = g
                }, b[a ^ 1][2].disable, b[2][2].lock);
                e[f[0]] = function() {
                    e[f[0] + "With"](this === e ? d : this, arguments);
                    return this
                };
                e[f[0] + "With"] = w.fireWith
            });
            d.promise(e);
            a && a.call(e, e);
            return e
        },
        when: function(a) {
            var b = 0,
                c = U.call(arguments),
                d = c.length,
                e = 1 !== d || a && g.isFunction(a.promise) ?
                d : 0,
                f = 1 === e ? a : g.Deferred(),
                l = function(a, b, c) {
                    return function(d) {
                        b[a] = this;
                        c[a] = 1 < arguments.length ? U.call(arguments) : d;
                        c === h ? f.notifyWith(b, c) : --e || f.resolveWith(b, c)
                    }
                },
                h, k, p;
            if (1 < d)
                for (h = Array(d), k = Array(d), p = Array(d); b < d; b++) c[b] && g.isFunction(c[b].promise) ? c[b].promise().done(l(b, p, c)).fail(f.reject).progress(l(b, k, h)) : --e;
            e || f.resolveWith(p, c);
            return f.promise()
        }
    });
    var ea;
    g.fn.ready = function(a) {
        g.ready.promise().done(a);
        return this
    };
    g.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? g.readyWait++ :
                g.ready(!0)
        },
        ready: function(a) {
            (!0 === a ? --g.readyWait : g.isReady) || (g.isReady = !0, !0 !== a && 0 < --g.readyWait || (ea.resolveWith(y, [g]), g.fn.trigger && g(y).trigger("ready").off("ready")))
        }
    });
    g.ready.promise = function(a) {
        ea || (ea = g.Deferred(), "complete" === y.readyState ? setTimeout(g.ready) : (y.addEventListener("DOMContentLoaded", h, !1), b.addEventListener("load", h, !1)));
        return ea.promise(a)
    };
    g.ready.promise();
    var sa = g.access = function(a, b, c, d, e, f, l) {
        var h = 0,
            k = a.length,
            p = null == c;
        if ("object" === g.type(c))
            for (h in e = !0,
                c) g.access(a, b, h, c[h], !0, f, l);
        else if (void 0 !== d && (e = !0, g.isFunction(d) || (l = !0), p && (l ? (b.call(a, d), b = null) : (p = b, b = function(a, b, c) {
                return p.call(g(a), c)
            })), b))
            for (; h < k; h++) b(a[h], c, l ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : p ? b.call(a) : k ? b(a[0], c) : f
    };
    g.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    k.uid = 1;
    k.accepts = g.acceptData;
    k.prototype = {
        key: function(a) {
            if (!k.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = k.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a,
                        b)
                } catch (d) {
                    b[this.expando] = c, g.extend(a, b)
                }
            }
            this.cache[c] || (this.cache[c] = {});
            return c
        },
        set: function(a, b, c) {
            var d;
            a = this.key(a);
            var e = this.cache[a];
            if ("string" === typeof b) e[b] = c;
            else if (g.isEmptyObject(e)) g.extend(this.cache[a], b);
            else
                for (d in b) e[d] = b[d];
            return e
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            if (void 0 === b || b && "string" === typeof b && void 0 === c) return c = this.get(a, b), void 0 !== c ? c : this.get(a, g.camelCase(b));
            this.set(a, b, c);
            return void 0 !==
                c ? c : b
        },
        remove: function(a, b) {
            var c, d;
            c = this.key(a);
            var e = this.cache[c];
            if (void 0 === b) this.cache[c] = {};
            else
                for (g.isArray(b) ? d = b.concat(b.map(g.camelCase)) : (c = g.camelCase(b), b in e ? d = [b, c] : (d = c, d = d in e ? [d] : d.match(ma) || [])), c = d.length; c--;) delete e[d[c]]
        },
        hasData: function(a) {
            return !g.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var z = new k,
        aa = new k,
        Qa = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Aa = /([A-Z])/g;
    g.extend({
        hasData: function(a) {
            return aa.hasData(a) ||
                z.hasData(a)
        },
        data: function(a, b, c) {
            return aa.access(a, b, c)
        },
        removeData: function(a, b) {
            aa.remove(a, b)
        },
        _data: function(a, b, c) {
            return z.access(a, b, c)
        },
        _removeData: function(a, b) {
            z.remove(a, b)
        }
    });
    g.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                l = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = aa.get(f), 1 === f.nodeType && !z.get(f, "hasDataAttrs"))) {
                    for (c = l.length; c--;) d = l[c].name, 0 === d.indexOf("data-") && (d = g.camelCase(d.slice(5)), m(f, d, e[d]));
                    z.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" === typeof a ?
                this.each(function() {
                    aa.set(this, a)
                }) : sa(this, function(b) {
                    var c, d = g.camelCase(a);
                    if (f && void 0 === b) {
                        c = aa.get(f, a);
                        if (void 0 !== c) return c;
                        c = aa.get(f, d);
                        if (void 0 !== c) return c;
                        c = m(f, d, void 0);
                        if (void 0 !== c) return c
                    } else this.each(function() {
                        var c = aa.get(this, d);
                        aa.set(this, d, b); - 1 !== a.indexOf("-") && void 0 !== c && aa.set(this, a, b)
                    })
                }, null, b, 1 < arguments.length, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                aa.remove(this, a)
            })
        }
    });
    g.extend({
        queue: function(a, b, c) {
            var d;
            if (a) return b = (b || "fx") +
                "queue", d = z.get(a, b), c && (!d || g.isArray(c) ? d = z.access(a, b, g.makeArray(c)) : d.push(c)), d || []
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = g.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = g._queueHooks(a, b),
                l = function() {
                    g.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--);
            e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, l, f));
            !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return z.get(a, c) || z.access(a, c, {
                empty: g.Callbacks("once memory").add(function() {
                    z.remove(a, [b + "queue", c])
                })
            })
        }
    });
    g.fn.extend({
        queue: function(a, b) {
            var c = 2;
            "string" !== typeof a && (b = a, a = "fx", c--);
            return arguments.length < c ? g.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = g.queue(this, a, b);
                g._queueHooks(this, a);
                "fx" === a && "inprogress" !== c[0] && g.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                g.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = g.Deferred(),
                f = this,
                l = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" !==
            typeof a && (b = a, a = void 0);
            for (a = a || "fx"; l--;)(c = z.get(f[l], a + "queueHooks")) && c.empty && (d++, c.empty.add(h));
            h();
            return e.promise(b)
        }
    });
    var Da = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ya = ["Top", "Right", "Bottom", "Left"],
        Ea = function(a, b) {
            a = b || a;
            return "none" === g.css(a, "display") || !g.contains(a.ownerDocument, a)
        },
        bb = /^(?:checkbox|radio)$/i;
    (function() {
        var a = y.createDocumentFragment().appendChild(y.createElement("div"));
        a.innerHTML = "<input type='radio' checked='checked' name='t'/>";
        L.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked;
        a.innerHTML = "<textarea>x</textarea>";
        L.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue
    })();
    L.focusinBubbles = "onfocusin" in b;
    var vb = /^key/,
        wb = /^(?:mouse|contextmenu)|click/,
        cb = /^(?:focusinfocus|focusoutblur)$/,
        db = /^([^.]*)(?:\.(.+)|)$/;
    g.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, l, h, k, p, t, n, m, v;
            if (p = z.get(a))
                for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = g.guid++), (k = p.events) || (k = p.events = {}), (l = p.handle) || (l = p.handle = function(b) {
                        return "undefined" !== typeof g && g.event.triggered !==
                            b.type ? g.event.dispatch.apply(a, arguments) : void 0
                    }), b = (b || "").match(ma) || [""], p = b.length; p--;) h = db.exec(b[p]) || [], m = t = h[1], v = (h[2] || "").split(".").sort(), m && (h = g.event.special[m] || {}, m = (e ? h.delegateType : h.bindType) || m, h = g.event.special[m] || {}, t = g.extend({
                    type: m,
                    origType: t,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && g.expr.match.needsContext.test(e),
                    namespace: v.join(".")
                }, f), (n = k[m]) || (n = k[m] = [], n.delegateCount = 0, h.setup && !1 !== h.setup.call(a, d, v, l) || a.addEventListener && a.addEventListener(m,
                    l, !1)), h.add && (h.add.call(a, t), t.handler.guid || (t.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, t) : n.push(t), g.event.global[m] = !0)
        },
        remove: function(a, b, c, d, e) {
            var f, l, h, k, p, t, n, m, v, ca, C, y = z.hasData(a) && z.get(a);
            if (y && (k = y.events)) {
                b = (b || "").match(ma) || [""];
                for (p = b.length; p--;)
                    if (h = db.exec(b[p]) || [], v = C = h[1], ca = (h[2] || "").split(".").sort(), v) {
                        n = g.event.special[v] || {};
                        v = (d ? n.delegateType : n.bindType) || v;
                        m = k[v] || [];
                        h = h[2] && new RegExp("(^|\\.)" + ca.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        for (l = f = m.length; f--;) t =
                            m[f], !e && C !== t.origType || c && c.guid !== t.guid || h && !h.test(t.namespace) || d && d !== t.selector && ("**" !== d || !t.selector) || (m.splice(f, 1), t.selector && m.delegateCount--, n.remove && n.remove.call(a, t));
                        l && !m.length && (n.teardown && !1 !== n.teardown.call(a, ca, y.handle) || g.removeEvent(a, v, y.handle), delete k[v])
                    } else
                        for (v in k) g.event.remove(a, v + b[p], c, d, !0);
                g.isEmptyObject(k) && (delete y.handle, z.remove(a, "events"))
            }
        },
        trigger: function(a, c, d, e) {
            var f, l, h, k, p, t, n = [d || y],
                m = ba.call(a, "type") ? a.type : a;
            t = ba.call(a, "namespace") ?
                a.namespace.split(".") : [];
            l = f = d = d || y;
            if (3 !== d.nodeType && 8 !== d.nodeType && !cb.test(m + g.event.triggered) && (0 <= m.indexOf(".") && (t = m.split("."), m = t.shift(), t.sort()), k = 0 > m.indexOf(":") && "on" + m, a = a[g.expando] ? a : new g.Event(m, "object" === typeof a && a), a.isTrigger = e ? 2 : 3, a.namespace = t.join("."), a.namespace_re = a.namespace ? new RegExp("(^|\\.)" + t.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, a.result = void 0, a.target || (a.target = d), c = null == c ? [a] : g.makeArray(c, [a]), t = g.event.special[m] || {}, e || !t.trigger || !1 !== t.trigger.apply(d,
                    c))) {
                if (!e && !t.noBubble && !g.isWindow(d)) {
                    h = t.delegateType || m;
                    cb.test(h + m) || (l = l.parentNode);
                    for (; l; l = l.parentNode) n.push(l), f = l;
                    f === (d.ownerDocument || y) && n.push(f.defaultView || f.parentWindow || b)
                }
                for (f = 0;
                    (l = n[f++]) && !a.isPropagationStopped();) a.type = 1 < f ? h : t.bindType || m, (p = (z.get(l, "events") || {})[a.type] && z.get(l, "handle")) && p.apply(l, c), (p = k && l[k]) && p.apply && g.acceptData(l) && (a.result = p.apply(l, c), !1 === a.result && a.preventDefault());
                a.type = m;
                e || a.isDefaultPrevented() || t._default && !1 !== t._default.apply(n.pop(),
                    c) || !g.acceptData(d) || !k || !g.isFunction(d[m]) || g.isWindow(d) || ((f = d[k]) && (d[k] = null), g.event.triggered = m, d[m](), g.event.triggered = void 0, f && (d[k] = f));
                return a.result
            }
        },
        dispatch: function(a) {
            a = g.event.fix(a);
            var b, c, d, e, f = [],
                l = U.call(arguments);
            b = (z.get(this, "events") || {})[a.type] || [];
            var h = g.event.special[a.type] || {};
            l[0] = a;
            a.delegateTarget = this;
            if (!h.preDispatch || !1 !== h.preDispatch.call(this, a)) {
                f = g.event.handlers.call(this, a, b);
                for (b = 0;
                    (e = f[b++]) && !a.isPropagationStopped();)
                    for (a.currentTarget = e.elem,
                        c = 0;
                        (d = e.handlers[c++]) && !a.isImmediatePropagationStopped();)
                        if (!a.namespace_re || a.namespace_re.test(d.namespace)) a.handleObj = d, a.data = d.data, d = ((g.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, l), void 0 !== d && !1 === (a.result = d) && (a.preventDefault(), a.stopPropagation());
                h.postDispatch && h.postDispatch.call(this, a);
                return a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, l = [],
                h = b.delegateCount,
                k = a.target;
            if (h && k.nodeType && (!a.button || "click" !== a.type))
                for (; k !== this; k = k.parentNode || this)
                    if (!0 !==
                        k.disabled || "click" !== a.type) {
                        d = [];
                        for (c = 0; c < h; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? 0 <= g(e, this).index(k) : g.find(e, this, null, [k]).length), d[e] && d.push(f);
                        d.length && l.push({
                            elem: k,
                            handlers: d
                        })
                    }
            h < b.length && l.push({
                elem: this,
                handlers: b.slice(h)
            });
            return l
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: ["char", "charCode", "key", "keyCode"],
            filter: function(a, b) {
                null ==
                    a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode);
                return a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e = b.button;
                null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || y, d = c.documentElement, c = c.body, a.pageX = b.clientX + (d && d.scrollLeft || c && c.scrollLeft || 0) - (d && d.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || c && c.scrollTop || 0) - (d && d.clientTop || c && c.clientTop || 0));
                a.which ||
                    void 0 === e || (a.which = e & 1 ? 1 : e & 2 ? 3 : e & 4 ? 2 : 0);
                return a
            }
        },
        fix: function(a) {
            if (a[g.expando]) return a;
            var b, c, d;
            b = a.type;
            var e = a,
                f = this.fixHooks[b];
            f || (this.fixHooks[b] = f = wb.test(b) ? this.mouseHooks : vb.test(b) ? this.keyHooks : {});
            d = f.props ? this.props.concat(f.props) : this.props;
            a = new g.Event(e);
            for (b = d.length; b--;) c = d[b], a[c] = e[c];
            a.target || (a.target = y);
            3 === a.target.nodeType && (a.target = a.target.parentNode);
            return f.filter ? f.filter(a, e) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== r() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === r() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && g.nodeName(this, "input")) return this.click(), !1
                },
                _default: function(a) {
                    return g.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            a = g.extend(new g.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? g.event.trigger(a,
                null, b) : g.event.dispatch.call(b, a);
            a.isDefaultPrevented() && c.preventDefault()
        }
    };
    g.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    };
    g.Event = function(a, b) {
        if (!(this instanceof g.Event)) return new g.Event(a, b);
        a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? q : u) : this.type = a;
        b && g.extend(this, b);
        this.timeStamp = a && a.timeStamp || g.now();
        this[g.expando] = !0
    };
    g.Event.prototype = {
        isDefaultPrevented: u,
        isPropagationStopped: u,
        isImmediatePropagationStopped: u,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = q;
            a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = q;
            a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = q;
            this.stopPropagation()
        }
    };
    g.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        g.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = a.relatedTarget,
                    e = a.handleObj;
                if (!d || d !== this && !g.contains(this, d)) a.type = e.origType, c = e.handler.apply(this, arguments), a.type = b;
                return c
            }
        }
    });
    L.focusinBubbles || g.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            g.event.simulate(b, a.target, g.event.fix(a), !0)
        };
        g.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = z.access(d, b);
                e || d.addEventListener(a, c, !0);
                z.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument ||
                    this,
                    e = z.access(d, b) - 1;
                e ? z.access(d, b, e) : (d.removeEventListener(a, c, !0), z.remove(d, b))
            }
        }
    });
    g.fn.extend({
        on: function(a, b, c, d, e) {
            var f, l;
            if ("object" === typeof a) {
                "string" !== typeof b && (c = c || b, b = void 0);
                for (l in a) this.on(l, b, c, a[l], e);
                return this
            }
            null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" === typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0));
            if (!1 === d) d = u;
            else if (!d) return this;
            1 === e && (f = d, d = function(a) {
                g().off(a);
                return f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = g.guid++));
            return this.each(function() {
                g.event.add(this,
                    a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, g(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" === typeof a) {
                for (d in a) this.off(d, b, a[d]);
                return this
            }
            if (!1 === b || "function" === typeof b) c = b, b = void 0;
            !1 === c && (c = u);
            return this.each(function() {
                g.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                g.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            if (c) return g.event.trigger(a, b, c, !0)
        }
    });
    var la = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        Na = /<([\w:]+)/,
        Ua = /<|&#?\w+;/,
        xb = /<(?:script|style|link)/i,
        yb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        eb = /^$|\/(?:java|ecma)script/i,
        qb = /^true\/(.*)/,
        zb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        oa = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2,
                "<table><tbody>", "</tbody></table>"
            ],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    oa.optgroup = oa.option;
    oa.tbody = oa.tfoot = oa.colgroup = oa.caption = oa.thead;
    oa.th = oa.td;
    g.extend({
        clone: function(a, b, c) {
            var d, e, f, l, h = a.cloneNode(!0),
                k = g.contains(a.ownerDocument, a);
            if (!(L.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || g.isXMLDoc(a)))
                for (l = G(h), f = G(a), d = 0, e = f.length; d < e; d++) {
                    var p = f[d],
                        t = l[d],
                        n = t.nodeName.toLowerCase();
                    if ("input" === n && bb.test(p.type)) t.checked = p.checked;
                    else if ("input" ===
                        n || "textarea" === n) t.defaultValue = p.defaultValue
                }
            if (b)
                if (c)
                    for (f = f || G(a), l = l || G(h), d = 0, e = f.length; d < e; d++) K(f[d], l[d]);
                else K(a, h);
            l = G(h, "script");
            0 < l.length && x(l, !k && G(a, "script"));
            return h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, l, h = b.createDocumentFragment(), k = [], p = 0, t = a.length; p < t; p++)
                if ((e = a[p]) || 0 === e)
                    if ("object" === g.type(e)) g.merge(k, e.nodeType ? [e] : e);
                    else if (Ua.test(e)) {
                f = f || h.appendChild(b.createElement("div"));
                l = (Na.exec(e) || ["", ""])[1].toLowerCase();
                l = oa[l] || oa._default;
                f.innerHTML =
                    l[1] + e.replace(la, "<$1></$2>") + l[2];
                for (l = l[0]; l--;) f = f.lastChild;
                g.merge(k, f.childNodes);
                f = h.firstChild;
                f.textContent = ""
            } else k.push(b.createTextNode(e));
            h.textContent = "";
            for (p = 0; e = k[p++];)
                if (!d || -1 === g.inArray(e, d))
                    if (a = g.contains(e.ownerDocument, e), f = G(h.appendChild(e), "script"), a && x(f), c)
                        for (l = 0; e = f[l++];) eb.test(e.type || "") && c.push(e);
            return h
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, l, h = g.event.special, k = 0; void 0 !== (c = a[k]); k++) {
                if (g.acceptData(c) && (f = c[z.expando]) && (b = z.cache[f])) {
                    d = Object.keys(b.events || {});
                    if (d.length)
                        for (l = 0; void 0 !== (e = d[l]); l++) h[e] ? g.event.remove(c, e) : g.removeEvent(c, e, b.handle);
                    z.cache[f] && delete z.cache[f]
                }
                delete aa.cache[c[aa.expando]]
            }
        }
    });
    g.fn.extend({
        text: function(a) {
            return sa(this, function(a) {
                return void 0 === a ? g.text(this) : this.empty().each(function() {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) this.textContent = a
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType ||
                    A(this, a).appendChild(a)
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = A(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? g.filter(a, this) :
                    this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || g.cleanData(G(c)), c.parentNode && (b && g.contains(c.ownerDocument, c) && x(G(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (g.cleanData(G(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            a = null == a ? !1 : a;
            b = null == b ? a : b;
            return this.map(function() {
                return g.clone(this, a, b)
            })
        },
        html: function(a) {
            return sa(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" === typeof a && !xb.test(a) && !oa[(Na.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(la, "<$1></$2>");
                    try {
                        for (; c < d; c++) b = this[c] || {}, 1 === b.nodeType && (g.cleanData(G(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            this.domManip(arguments, function(b) {
                a = this.parentNode;
                g.cleanData(G(this));
                a && a.replaceChild(b, this)
            });
            return a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = ra.apply([], a);
            var c, d, e, f, l = 0,
                h = this.length,
                k = this,
                p = h - 1,
                t = a[0],
                n = g.isFunction(t);
            if (n || 1 < h && "string" === typeof t && !L.checkClone && yb.test(t)) return this.each(function(c) {
                var d = k.eq(c);
                n && (a[0] = t.call(this, c, d.html()));
                d.domManip(a, b)
            });
            if (h && (c = g.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                d = g.map(G(c, "script"), F);
                for (e = d.length; l < h; l++) f = c, l !== p && (f = g.clone(f, !0, !0), e && g.merge(d, G(f, "script"))), b.call(this[l], f, l);
                if (e)
                    for (c =
                        d[d.length - 1].ownerDocument, g.map(d, H), l = 0; l < e; l++) f = d[l], eb.test(f.type || "") && !z.access(f, "globalEval") && g.contains(c, f) && (f.src ? g._evalUrl && g._evalUrl(f.src) : g.globalEval(f.textContent.replace(zb, "")))
            }
            return this
        }
    });
    g.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        g.fn[a] = function(a) {
            for (var c = [], d = g(a), e = d.length - 1, f = 0; f <= e; f++) a = f === e ? this : this.clone(!0), g(d[f])[b](a), wa.apply(c, a.get());
            return this.pushStack(c)
        }
    });
    var Ja, Za = {},
        $a = /^margin/,
        Ra = new RegExp("^(" + Da + ")(?!px)[a-z%]+$", "i"),
        Ka = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };
    (function() {
        function a() {
            l.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%";
            e.appendChild(f);
            var g = b.getComputedStyle(l, null);
            c = "1%" !== g.top;
            d = "4px" === g.width;
            e.removeChild(f)
        }
        var c, d, e = y.documentElement,
            f = y.createElement("div"),
            l = y.createElement("div");
        l.style.backgroundClip = "content-box";
        l.cloneNode(!0).style.backgroundClip = "";
        L.clearCloneStyle = "content-box" === l.style.backgroundClip;
        f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
        f.appendChild(l);
        b.getComputedStyle && g.extend(L, {
            pixelPosition: function() {
                a();
                return c
            },
            boxSizingReliable: function() {
                null == d && a();
                return d
            },
            reliableMarginRight: function() {
                var a;
                a = l.appendChild(y.createElement("div"));
                a.style.cssText = l.style.cssText =
                    "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box";
                a.style.marginRight = a.style.width = "0";
                l.style.width = "1px";
                e.appendChild(f);
                a = !parseFloat(b.getComputedStyle(a, null).marginRight);
                e.removeChild(f);
                l.innerHTML = "";
                return a
            }
        })
    })();
    g.swap = function(a, b, c, d) {
        var e, f = {};
        for (e in b) f[e] = a.style[e], a.style[e] = b[e];
        c = c.apply(a, d || []);
        for (e in b) a.style[e] = f[e];
        return c
    };
    var Ab = /^(none|table(?!-c[ea]).+)/,
        rb = new RegExp("^(" + Da + ")(.*)$",
            "i"),
        Bb = new RegExp("^([+-])=(" + Da + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        fb = {
            letterSpacing: 0,
            fontWeight: 400
        },
        ab = ["Webkit", "O", "Moz", "ms"];
    g.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = l(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e,
                    f, l, h = g.camelCase(b),
                    k = a.style;
                b = g.cssProps[h] || (g.cssProps[h] = v(k, h));
                l = g.cssHooks[b] || g.cssHooks[h];
                if (void 0 !== c) f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(g.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || g.cssNumber[h] || (c += "px"), L.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (k[b] = "inherit"), l && "set" in l && void 0 === (c = l.set(a, c, d)) || (k[b] = "", k[b] = c));
                else return l && "get" in l && void 0 !== (e = l.get(a, !1, d)) ? e : k[b]
            }
        },
        css: function(a, b, c, d) {
            var e, f;
            f = g.camelCase(b);
            b = g.cssProps[f] || (g.cssProps[f] = v(a.style, f));
            (f = g.cssHooks[b] || g.cssHooks[f]) && "get" in f && (e = f.get(a, !0, c));
            void 0 === e && (e = l(a, b, d));
            "normal" === e && b in fb && (e = fb[b]);
            return "" === c || c ? (a = parseFloat(e), !0 === c || g.isNumeric(a) ? a || 0 : e) : e
        }
    });
    g.each(["height", "width"], function(a, b) {
        g.cssHooks[b] = {
            get: function(a, c, d) {
                if (c) return 0 === a.offsetWidth && Ab.test(g.css(a, "display")) ? g.swap(a, Cb, function() {
                    return ua(a, b, d)
                }) : ua(a, b, d)
            },
            set: function(a, c, d) {
                var e = d && Ka(a);
                return M(a, c, d ? na(a, b, d, "border-box" === g.css(a,
                    "boxSizing", !1, e), e) : 0)
            }
        }
    });
    g.cssHooks.marginRight = p(L.reliableMarginRight, function(a, b) {
        if (b) return g.swap(a, {
            display: "inline-block"
        }, l, [a, "marginRight"])
    });
    g.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        g.cssHooks[a + b] = {
            expand: function(c) {
                var d = 0,
                    e = {};
                for (c = "string" === typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + ya[d] + b] = c[d] || c[d - 2] || c[0];
                return e
            }
        };
        $a.test(a) || (g.cssHooks[a + b].set = M)
    });
    g.fn.extend({
        css: function(a, b) {
            return sa(this, function(a, b, c) {
                var d, e = {},
                    f = 0;
                if (g.isArray(b)) {
                    c = Ka(a);
                    for (d =
                        b.length; f < d; f++) e[b[f]] = g.css(a, b[f], !1, c);
                    return e
                }
                return void 0 !== c ? g.style(a, b, c) : g.css(a, b)
            }, a, b, 1 < arguments.length)
        },
        show: function() {
            return qa(this, !0)
        },
        hide: function() {
            return qa(this)
        },
        toggle: function(a) {
            return "boolean" === typeof a ? a ? this.show() : this.hide() : this.each(function() {
                Ea(this) ? g(this).show() : g(this).hide()
            })
        }
    });
    g.Tween = n;
    n.prototype = {
        constructor: n,
        init: function(a, b, c, d, e, f) {
            this.elem = a;
            this.prop = c;
            this.easing = e || "swing";
            this.options = b;
            this.start = this.now = this.cur();
            this.end = d;
            this.unit =
                f || (g.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = n.propHooks[this.prop];
            return a && a.get ? a.get(this) : n.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = n.propHooks[this.prop];
            this.pos = this.options.duration ? b = g.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : b = a;
            this.now = (this.end - this.start) * b + this.start;
            this.options.step && this.options.step.call(this.elem, this.now, this);
            c && c.set ? c.set(this) : n.propHooks._default.set(this);
            return this
        }
    };
    n.prototype.init.prototype = n.prototype;
    n.propHooks = {
        _default: {
            get: function(a) {
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (a = g.css(a.elem, a.prop, "")) && "auto" !== a ? a : 0 : a.elem[a.prop]
            },
            set: function(a) {
                if (g.fx.step[a.prop]) g.fx.step[a.prop](a);
                else a.elem.style && (null != a.elem.style[g.cssProps[a.prop]] || g.cssHooks[a.prop]) ? g.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    };
    n.propHooks.scrollTop = n.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    };
    g.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    };
    g.fx = n.prototype.init;
    g.fx.step = {};
    var Ba, Oa, Db = /^(?:toggle|show|hide)$/,
        gb = new RegExp("^(?:([+-])=|)(" + Da + ")([a-z%]*)$", "i"),
        Eb = /queueHooks$/,
        La = [function(a, b, c) {
            var d, e, f, l, h, k = this,
                p = {},
                t = a.style,
                n = a.nodeType && Ea(a),
                m = z.get(a, "fxshow");
            c.queue || (l = g._queueHooks(a, "fx"), null == l.unqueued && (l.unqueued = 0, h = l.empty.fire, l.empty.fire = function() {
                l.unqueued || h()
            }), l.unqueued++, k.always(function() {
                k.always(function() {
                    l.unqueued--;
                    g.queue(a, "fx").length ||
                        l.empty.fire()
                })
            }));
            1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [t.overflow, t.overflowX, t.overflowY], e = g.css(a, "display"), "none" === e && (e = P(a.nodeName)), "inline" === e && "none" === g.css(a, "float") && (t.display = "inline-block"));
            c.overflow && (t.overflow = "hidden", k.always(function() {
                t.overflow = c.overflow[0];
                t.overflowX = c.overflow[1];
                t.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d], Db.exec(e)) {
                    delete b[d];
                    f = f || "toggle" === e;
                    if (e === (n ? "hide" : "show"))
                        if ("show" === e && m && void 0 !== m[d]) n = !0;
                        else continue;
                    p[d] = m && m[d] || g.style(a, d)
                }
            if (!g.isEmptyObject(p))
                for (d in m ? "hidden" in m && (n = m.hidden) : m = z.access(a, "fxshow", {}), f && (m.hidden = !n), n ? g(a).show() : k.done(function() {
                        g(a).hide()
                    }), k.done(function() {
                        var b;
                        z.remove(a, "fxshow");
                        for (b in p) g.style(a, b, p[b])
                    }), p) b = B(n ? m[d] : 0, d, k), d in m || (m[d] = b.start, n && (b.end = b.start, b.start = "width" === d || "height" === d ? 1 : 0))
        }],
        Fa = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = gb.exec(b),
                    f = e && e[3] || (g.cssNumber[a] ? "" : "px"),
                    l = (g.cssNumber[a] || "px" !== f && +d) && gb.exec(g.css(c.elem,
                        a)),
                    h = 1,
                    k = 20;
                if (l && l[3] !== f) {
                    f = f || l[3];
                    e = e || [];
                    l = +d || 1;
                    do h = h || ".5", l /= h, g.style(c.elem, a, l + f); while (h !== (h = c.cur() / d) && 1 !== h && --k)
                }
                e && (l = c.start = +l || +d || 0, c.unit = f, c.end = e[1] ? l + (e[1] + 1) * e[2] : +e[2]);
                return c
            }]
        };
    g.Animation = g.extend(W, {
        tweener: function(a, b) {
            g.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; d < e; d++) c = a[d], Fa[c] = Fa[c] || [], Fa[c].unshift(b)
        },
        prefilter: function(a, b) {
            b ? La.unshift(a) : La.push(a)
        }
    });
    g.speed = function(a, b, c) {
        var d = a && "object" === typeof a ? g.extend({}, a) : {
            complete: c ||
                !c && b || g.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !g.isFunction(b) && b
        };
        d.duration = g.fx.off ? 0 : "number" === typeof d.duration ? d.duration : d.duration in g.fx.speeds ? g.fx.speeds[d.duration] : g.fx.speeds._default;
        if (null == d.queue || !0 === d.queue) d.queue = "fx";
        d.old = d.complete;
        d.complete = function() {
            g.isFunction(d.old) && d.old.call(this);
            d.queue && g.dequeue(this, d.queue)
        };
        return d
    };
    g.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(Ea).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function(a,
            b, c, d) {
            var e = g.isEmptyObject(a),
                f = g.speed(b, c, d);
            b = function() {
                var b = W(this, g.extend({}, a), f);
                (e || z.get(this, "finish")) && b.stop(!0)
            };
            b.finish = b;
            return e || !1 === f.queue ? this.each(b) : this.queue(f.queue, b)
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop;
                b(c)
            };
            "string" !== typeof a && (c = b, b = a, a = void 0);
            b && !1 !== a && this.queue(a || "fx", []);
            return this.each(function() {
                var b = !0,
                    e = null != a && a + "queueHooks",
                    f = g.timers,
                    l = z.get(this);
                if (e) l[e] && l[e].stop && d(l[e]);
                else
                    for (e in l) l[e] && l[e].stop && Eb.test(e) &&
                        d(l[e]);
                for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                !b && c || g.dequeue(this, a)
            })
        },
        finish: function(a) {
            !1 !== a && (a = a || "fx");
            return this.each(function() {
                var b, c = z.get(this),
                    d = c[a + "queue"];
                b = c[a + "queueHooks"];
                var e = g.timers,
                    f = d ? d.length : 0;
                c.finish = !0;
                g.queue(this, a, []);
                b && b.stop && b.stop.call(this, !0);
                for (b = e.length; b--;) e[b].elem === this && e[b].queue === a && (e[b].anim.stop(!0), e.splice(b, 1));
                for (b = 0; b < f; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    });
    g.each(["toggle", "show", "hide"], function(a, b) {
        var c = g.fn[b];
        g.fn[b] = function(a, d, e) {
            return null == a || "boolean" === typeof a ? c.apply(this, arguments) : this.animate(E(b, !0), a, d, e)
        }
    });
    g.each({
        slideDown: E("show"),
        slideUp: E("hide"),
        slideToggle: E("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        g.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    });
    g.timers = [];
    g.fx.tick = function() {
        var a, b = 0,
            c = g.timers;
        for (Ba = g.now(); b < c.length; b++) a = c[b], a() || c[b] !== a ||
            c.splice(b--, 1);
        c.length || g.fx.stop();
        Ba = void 0
    };
    g.fx.timer = function(a) {
        g.timers.push(a);
        a() ? g.fx.start() : g.timers.pop()
    };
    g.fx.interval = 13;
    g.fx.start = function() {
        Oa || (Oa = setInterval(g.fx.tick, g.fx.interval))
    };
    g.fx.stop = function() {
        clearInterval(Oa);
        Oa = null
    };
    g.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    g.fn.delay = function(a, b) {
        a = g.fx ? g.fx.speeds[a] || a : a;
        return this.queue(b || "fx", function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d)
            }
        })
    };
    (function() {
        var a = y.createElement("input"),
            b = y.createElement("select"),
            c = b.appendChild(y.createElement("option"));
        a.type = "checkbox";
        L.checkOn = "" !== a.value;
        L.optSelected = c.selected;
        b.disabled = !0;
        L.optDisabled = !c.disabled;
        a = y.createElement("input");
        a.value = "t";
        a.type = "radio";
        L.radioValue = "t" === a.value
    })();
    var hb, Ga = g.expr.attrHandle;
    g.fn.extend({
        attr: function(a, b) {
            return sa(this, g.attr, a, b, 1 < arguments.length)
        },
        removeAttr: function(a) {
            return this.each(function() {
                g.removeAttr(this, a)
            })
        }
    });
    g.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if ("undefined" ===
                    typeof a.getAttribute) return g.prop(a, b, c);
                1 === f && g.isXMLDoc(a) || (b = b.toLowerCase(), d = g.attrHooks[b] || (g.expr.match.bool.test(b) ? hb : void 0));
                if (void 0 !== c)
                    if (null === c) g.removeAttr(a, b);
                    else {
                        if (d && "set" in d && void 0 !== (e = d.set(a, c, b))) return e;
                        a.setAttribute(b, c + "");
                        return c
                    } else {
                    if (d && "get" in d && null !== (e = d.get(a, b))) return e;
                    e = g.find.attr(a, b);
                    return null == e ? void 0 : e
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(ma);
            if (f && 1 === a.nodeType)
                for (; c = f[e++];) d = g.propFix[c] || c, g.expr.match.bool.test(c) &&
                    (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!L.radioValue && "radio" === b && g.nodeName(a, "input")) {
                        var c = a.value;
                        a.setAttribute("type", b);
                        c && (a.value = c);
                        return b
                    }
                }
            }
        }
    });
    hb = {
        set: function(a, b, c) {
            !1 === b ? g.removeAttr(a, c) : a.setAttribute(c, c);
            return c
        }
    };
    g.each(g.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = Ga[b] || g.find.attr;
        Ga[b] = function(a, b, d) {
            var e, f;
            d || (f = Ga[b], Ga[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, Ga[b] = f);
            return e
        }
    });
    var Fb = /^(?:input|select|textarea|button)$/i;
    g.fn.extend({
        prop: function(a, b) {
            return sa(this, g.prop, a, b, 1 < arguments.length)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[g.propFix[a] || a]
            })
        }
    });
    g.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f;
            f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) {
                if (f = 1 !== f || !g.isXMLDoc(a)) b = g.propFix[b] || b, e = g.propHooks[b];
                return void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
            }
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") ||
                        Fb.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    });
    L.optSelected || (g.propHooks.selected = {
        get: function(a) {
            (a = a.parentNode) && a.parentNode && a.parentNode.selectedIndex;
            return null
        }
    });
    g.each("tabIndex readOnly maxLength cellSpacing cellPadding rowSpan colSpan useMap frameBorder contentEditable".split(" "), function() {
        g.propFix[this.toLowerCase()] = this
    });
    var Va = /[\t\r\n\f]/g;
    g.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f;
            b = "string" === typeof a && a;
            var l = 0,
                h = this.length;
            if (g.isFunction(a)) return this.each(function(b) {
                g(this).addClass(a.call(this,
                    b, this.className))
            });
            if (b)
                for (b = (a || "").match(ma) || []; l < h; l++)
                    if (c = this[l], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Va, " ") : " ")) {
                        for (f = 0; e = b[f++];) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                        d = g.trim(d);
                        c.className !== d && (c.className = d)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f;
            b = 0 === arguments.length || "string" === typeof a && a;
            var l = 0,
                h = this.length;
            if (g.isFunction(a)) return this.each(function(b) {
                g(this).removeClass(a.call(this, b, this.className))
            });
            if (b)
                for (b = (a || "").match(ma) || []; l <
                    h; l++)
                    if (c = this[l], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Va, " ") : "")) {
                        for (f = 0; e = b[f++];)
                            for (; 0 <= d.indexOf(" " + e + " ");) d = d.replace(" " + e + " ", " ");
                        d = a ? g.trim(d) : "";
                        c.className !== d && (c.className = d)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" === typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : g.isFunction(a) ? this.each(function(c) {
                g(this).toggleClass(a.call(this, c, this.className, b), b)
            }) : this.each(function() {
                if ("string" === c)
                    for (var b, d = 0, e = g(this),
                            f = a.match(ma) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                else if ("undefined" === c || "boolean" === c) this.className && z.set(this, "__className__", this.className), this.className = this.className || !1 === a ? "" : z.get(this, "__className__") || ""
            })
        },
        hasClass: function(a) {
            a = " " + a + " ";
            for (var b = 0, c = this.length; b < c; b++)
                if (1 === this[b].nodeType && 0 <= (" " + this[b].className + " ").replace(Va, " ").indexOf(a)) return !0;
            return !1
        }
    });
    var Gb = /\r/g;
    g.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            if (arguments.length) return d =
                g.isFunction(a), this.each(function(c) {
                    1 === this.nodeType && (c = d ? a.call(this, c, g(this).val()) : a, null == c ? c = "" : "number" === typeof c ? c += "" : g.isArray(c) && (c = g.map(c, function(a) {
                        return null == a ? "" : a + ""
                    })), b = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, c, "value") || (this.value = c))
                });
            if (e) {
                if ((b = g.valHooks[e.type] || g.valHooks[e.nodeName.toLowerCase()]) && "get" in b && void 0 !== (c = b.get(e, "value"))) return c;
                c = e.value;
                return "string" === typeof c ? c.replace(Gb, "") : null ==
                    c ? "" : c
            }
        }
    });
    g.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c = a.options, d = a.selectedIndex, e = (a = "select-one" === a.type || 0 > d) ? null : [], f = a ? d + 1 : c.length, l = 0 > d ? f : a ? d : 0; l < f; l++)
                        if (b = c[l], !(!b.selected && l !== d || (L.optDisabled ? b.disabled : null !== b.getAttribute("disabled")) || b.parentNode.disabled && g.nodeName(b.parentNode, "optgroup"))) {
                            b = g(b).val();
                            if (a) return b;
                            e.push(b)
                        }
                    return e
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = g.makeArray(b), l = e.length; l--;)
                        if (d = e[l], d.selected = 0 <= g.inArray(g(d).val(), f)) c = !0;
                    c || (a.selectedIndex = -1);
                    return f
                }
            }
        }
    });
    g.each(["radio", "checkbox"], function() {
        g.valHooks[this] = {
            set: function(a, b) {
                if (g.isArray(b)) return a.checked = 0 <= g.inArray(g(a).val(), b)
            }
        };
        L.checkOn || (g.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    g.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a,
        b) {
        g.fn[b] = function(a, c) {
            return 0 < arguments.length ? this.on(b, null, a, c) : this.trigger(b)
        }
    });
    g.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var Wa = g.now(),
        Xa = /\?/;
    g.parseJSON = function(a) {
        return JSON.parse(a + "")
    };
    g.parseXML = function(a) {
        var b,
            c;
        if (!a || "string" !== typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        b && !b.getElementsByTagName("parsererror").length || g.error("Invalid XML: " + a);
        return b
    };
    var za, xa, Hb = /#.*$/,
        ib = /([?&])_=[^&]*/,
        Ib = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        Jb = /^(?:GET|HEAD)$/,
        Kb = /^\/\//,
        jb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        kb = {},
        Sa = {},
        lb = "*/".concat("*");
    try {
        xa = location.href
    } catch (w) {
        xa = y.createElement("a"), xa.href = "", xa = xa.href
    }
    za = jb.exec(xa.toLowerCase()) || [];
    g.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: xa,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(za[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": lb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": g.parseJSON,
                "text xml": g.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? va(va(a, g.ajaxSettings), b) : va(g.ajaxSettings, a)
        },
        ajaxPrefilter: Z(kb),
        ajaxTransport: Z(Sa),
        ajax: function(a, b) {
            function c(a, b, l, k) {
                var p, w, I, S;
                S = b;
                if (2 !== L) {
                    L = 2;
                    h && clearTimeout(h);
                    d = void 0;
                    f = k || "";
                    J.readyState = 0 < a ? 4 : 0;
                    k = 200 <= a && 300 > a || 304 === a;
                    if (l) {
                        I = n;
                        for (var ba = J, q, M, r, D, E = I.contents, O = I.dataTypes;
                            "*" === O[0];) O.shift(), void 0 === q && (q = I.mimeType || ba.getResponseHeader("Content-Type"));
                        if (q)
                            for (M in E)
                                if (E[M] && E[M].test(q)) {
                                    O.unshift(M);
                                    break
                                }
                        if (O[0] in l) r = O[0];
                        else {
                            for (M in l) {
                                if (!O[0] || I.converters[M + " " + O[0]]) {
                                    r = M;
                                    break
                                }
                                D || (D = M)
                            }
                            r = r || D
                        }
                        r ? (r !== O[0] && O.unshift(r), I = l[r]) : I = void 0
                    }
                    a: {
                        l = n;
                        q = I;
                        M = J;
                        r = k;
                        var G, u, z, ba = {},
                            E = l.dataTypes.slice();
                        if (E[1])
                            for (u in l.converters) ba[u.toLowerCase()] = l.converters[u];
                        for (D = E.shift(); D;)
                            if (l.responseFields[D] && (M[l.responseFields[D]] = q), !z && r && l.dataFilter && (q = l.dataFilter(q, l.dataType)), z = D, D = E.shift())
                                if ("*" === D) D = z;
                                else if ("*" !== z && z !== D) {
                            u =
                                ba[z + " " + D] || ba["* " + D];
                            if (!u)
                                for (G in ba)
                                    if (I = G.split(" "), I[1] === D && (u = ba[z + " " + I[0]] || ba["* " + I[0]])) {
                                        !0 === u ? u = ba[G] : !0 !== ba[G] && (D = I[0], E.unshift(I[1]));
                                        break
                                    }
                            if (!0 !== u)
                                if (u && l["throws"]) q = u(q);
                                else try {
                                    q = u(q)
                                } catch (da) {
                                    I = {
                                        state: "parsererror",
                                        error: u ? da : "No conversion from " + z + " to " + D
                                    };
                                    break a
                                }
                        }
                        I = {
                            state: "success",
                            data: q
                        }
                    }
                    if (k) n.ifModified && ((S = J.getResponseHeader("Last-Modified")) && (g.lastModified[e] = S), (S = J.getResponseHeader("etag")) && (g.etag[e] = S)), 204 === a || "HEAD" === n.type ? S = "nocontent" : 304 ===
                        a ? S = "notmodified" : (S = I.state, p = I.data, w = I.error, k = !w);
                    else if (w = S, a || !S) S = "error", 0 > a && (a = 0);
                    J.status = a;
                    J.statusText = (b || S) + "";
                    k ? ca.resolveWith(m, [p, S, J]) : ca.rejectWith(m, [J, S, w]);
                    J.statusCode(y);
                    y = void 0;
                    t && v.trigger(k ? "ajaxSuccess" : "ajaxError", [J, n, k ? p : w]);
                    C.fireWith(m, [J, S]);
                    t && (v.trigger("ajaxComplete", [J, n]), --g.active || g.event.trigger("ajaxStop"))
                }
            }
            "object" === typeof a && (b = a, a = void 0);
            b = b || {};
            var d, e, f, l, h, k, t, p, n = g.ajaxSetup({}, b),
                m = n.context || n,
                v = n.context && (m.nodeType || m.jquery) ? g(m) : g.event,
                ca = g.Deferred(),
                C = g.Callbacks("once memory"),
                y = n.statusCode || {},
                I = {},
                S = {},
                L = 0,
                ba = "canceled",
                J = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === L) {
                            if (!l)
                                for (l = {}; b = Ib.exec(f);) l[b[1].toLowerCase()] = b[2];
                            b = l[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === L ? f : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        L || (a = S[c] = S[c] || a, I[a] = b);
                        return this
                    },
                    overrideMimeType: function(a) {
                        L || (n.mimeType = a);
                        return this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > L)
                                for (b in a) y[b] = [y[b], a[b]];
                            else J.always(a[J.status]);
                        return this
                    },
                    abort: function(a) {
                        a = a || ba;
                        d && d.abort(a);
                        c(0, a);
                        return this
                    }
                };
            ca.promise(J).complete = C.add;
            J.success = J.done;
            J.error = J.fail;
            n.url = ((a || n.url || xa) + "").replace(Hb, "").replace(Kb, za[1] + "//");
            n.type = b.method || b.type || n.method || n.type;
            n.dataTypes = g.trim(n.dataType || "*").toLowerCase().match(ma) || [""];
            null == n.crossDomain && (k = jb.exec(n.url.toLowerCase()), n.crossDomain = !(!k || k[1] === za[1] && k[2] === za[2] && (k[3] || ("http:" === k[1] ? "80" : "443")) === (za[3] || ("http:" ===
                za[1] ? "80" : "443"))));
            n.data && n.processData && "string" !== typeof n.data && (n.data = g.param(n.data, n.traditional));
            X(kb, n, b, J);
            if (2 === L) return J;
            (t = n.global) && 0 === g.active++ && g.event.trigger("ajaxStart");
            n.type = n.type.toUpperCase();
            n.hasContent = !Jb.test(n.type);
            e = n.url;
            n.hasContent || (n.data && (e = n.url += (Xa.test(e) ? "&" : "?") + n.data, delete n.data), !1 === n.cache && (n.url = ib.test(e) ? e.replace(ib, "$1_=" + Wa++) : e + (Xa.test(e) ? "&" : "?") + "_=" + Wa++));
            n.ifModified && (g.lastModified[e] && J.setRequestHeader("If-Modified-Since",
                g.lastModified[e]), g.etag[e] && J.setRequestHeader("If-None-Match", g.etag[e]));
            (n.data && n.hasContent && !1 !== n.contentType || b.contentType) && J.setRequestHeader("Content-Type", n.contentType);
            J.setRequestHeader("Accept", n.dataTypes[0] && n.accepts[n.dataTypes[0]] ? n.accepts[n.dataTypes[0]] + ("*" !== n.dataTypes[0] ? ", " + lb + "; q=0.01" : "") : n.accepts["*"]);
            for (p in n.headers) J.setRequestHeader(p, n.headers[p]);
            if (n.beforeSend && (!1 === n.beforeSend.call(m, J, n) || 2 === L)) return J.abort();
            ba = "abort";
            for (p in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) J[p](n[p]);
            if (d = X(Sa, n, b, J)) {
                J.readyState = 1;
                t && v.trigger("ajaxSend", [J, n]);
                n.async && 0 < n.timeout && (h = setTimeout(function() {
                    J.abort("timeout")
                }, n.timeout));
                try {
                    L = 1, d.send(I, c)
                } catch (q) {
                    if (2 > L) c(-1, q);
                    else throw q;
                }
            } else c(-1, "No Transport");
            return J
        },
        getJSON: function(a, b, c) {
            return g.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return g.get(a, void 0, b, "script")
        }
    });
    g.each(["get", "post"], function(a, b) {
        g[b] = function(a, c, d, e) {
            g.isFunction(c) && (e = e || d, d = c, c = void 0);
            return g.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    });
    g.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(a, b) {
        g.fn[b] = function(a) {
            return this.on(b, a)
        }
    });
    g._evalUrl = function(a) {
        return g.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    };
    g.fn.extend({
        wrapAll: function(a) {
            var b;
            if (g.isFunction(a)) return this.each(function(b) {
                g(this).wrapAll(a.call(this, b))
            });
            this[0] && (b = g(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                for (var a =
                        this; a.firstElementChild;) a = a.firstElementChild;
                return a
            }).append(this));
            return this
        },
        wrapInner: function(a) {
            return g.isFunction(a) ? this.each(function(b) {
                g(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = g(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = g.isFunction(a);
            return this.each(function(c) {
                g(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                g.nodeName(this, "body") || g(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    g.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight
    };
    g.expr.filters.visible = function(a) {
        return !g.expr.filters.hidden(a)
    };
    var Lb = /%20/g,
        tb = /\[\]$/,
        mb = /\r?\n/g,
        Mb = /^(?:submit|button|image|reset|file)$/i,
        Nb = /^(?:input|select|textarea|keygen)/i;
    g.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = g.isFunction(b) ? b() : null == b ? "" : b;
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        void 0 === b && (b = g.ajaxSettings && g.ajaxSettings.traditional);
        if (g.isArray(a) || a.jquery && !g.isPlainObject(a)) g.each(a,
            function() {
                e(this.name, this.value)
            });
        else
            for (c in a) T(c, a[c], b, e);
        return d.join("&").replace(Lb, "+")
    };
    g.fn.extend({
        serialize: function() {
            return g.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = g.prop(this, "elements");
                return a ? g.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !g(this).is(":disabled") && Nb.test(this.nodeName) && !Mb.test(a) && (this.checked || !bb.test(a))
            }).map(function(a, b) {
                var c = g(this).val();
                return null == c ? null : g.isArray(c) ?
                    g.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(mb, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(mb, "\r\n")
                    }
            }).get()
        }
    });
    g.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Ob = 0,
        Pa = {},
        Pb = {
            0: 200,
            1223: 204
        },
        Ha = g.ajaxSettings.xhr();
    if (b.ActiveXObject) g(b).on("unload", function() {
        for (var a in Pa) Pa[a]()
    });
    L.cors = !!Ha && "withCredentials" in Ha;
    L.ajax = Ha = !!Ha;
    g.ajaxTransport(function(a) {
        var b;
        if (L.cors || Ha && !a.crossDomain) return {
            send: function(c, d) {
                var e, f = a.xhr(),
                    l = ++Ob;
                f.open(a.type,
                    a.url, a.async, a.username, a.password);
                if (a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType);
                a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Pa[l], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Pb[f.status] || f.status, f.statusText, "string" === typeof f.responseText ? {
                                text: f.responseText
                            } : void 0,
                            f.getAllResponseHeaders()))
                    }
                };
                f.onload = b();
                f.onerror = b("error");
                b = Pa[l] = b("abort");
                f.send(a.hasContent && a.data || null)
            },
            abort: function() {
                b && b()
            }
        }
    });
    g.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                g.globalEval(a);
                return a
            }
        }
    });
    g.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1);
        a.crossDomain && (a.type = "GET")
    });
    g.ajaxTransport("script",
        function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = g("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove();
                            c = null;
                            a && e("error" === a.type ? 404 : 200, a.type)
                        });
                        y.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
    var nb = [],
        Ya = /(=)\?(?=&|$)|\?\?/;
    g.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = nb.pop() || g.expando + "_" + Wa++;
            this[a] = !0;
            return a
        }
    });
    g.ajaxPrefilter("json jsonp", function(a, c, d) {
        var e, f, l, h = !1 !== a.jsonp && (Ya.test(a.url) ?
            "url" : "string" === typeof a.data && !(a.contentType || "").indexOf("application/x-www-form-urlencoded") && Ya.test(a.data) && "data");
        if (h || "jsonp" === a.dataTypes[0]) return e = a.jsonpCallback = g.isFunction(a.jsonpCallback) ? a.jsonpCallback() : a.jsonpCallback, h ? a[h] = a[h].replace(Ya, "$1" + e) : !1 !== a.jsonp && (a.url += (Xa.test(a.url) ? "&" : "?") + a.jsonp + "=" + e), a.converters["script json"] = function() {
            l || g.error(e + " was not called");
            return l[0]
        }, a.dataTypes[0] = "json", f = b[e], b[e] = function() {
            l = arguments
        }, d.always(function() {
            b[e] =
                f;
            a[e] && (a.jsonpCallback = c.jsonpCallback, nb.push(e));
            l && g.isFunction(f) && f(l[0]);
            l = f = void 0
        }), "script"
    });
    g.parseHTML = function(a, b, c) {
        if (!a || "string" !== typeof a) return null;
        "boolean" === typeof b && (c = b, b = !1);
        b = b || y;
        var d = Ca.exec(a);
        c = !c && [];
        if (d) return [b.createElement(d[1])];
        d = g.buildFragment([a], b, c);
        c && c.length && g(c).remove();
        return g.merge([], d.childNodes)
    };
    var ob = g.fn.load;
    g.fn.load = function(a, b, c) {
        if ("string" !== typeof a && ob) return ob.apply(this, arguments);
        var d, e, f, l = this,
            h = a.indexOf(" ");
        0 <= h &&
            (d = a.slice(h), a = a.slice(0, h));
        g.isFunction(b) ? (c = b, b = void 0) : b && "object" === typeof b && (e = "POST");
        0 < l.length && g.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments;
            l.html(d ? g("<div>").append(g.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            l.each(c, f || [a.responseText, b, a])
        });
        return this
    };
    g.expr.filters.animated = function(a) {
        return g.grep(g.timers, function(b) {
            return a === b.elem
        }).length
    };
    var pb = b.document.documentElement;
    g.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, l = g.css(a,
                    "position"),
                h = g(a),
                k = {};
            "static" === l && (a.style.position = "relative");
            f = h.offset();
            e = g.css(a, "top");
            d = g.css(a, "left");
            ("absolute" === l || "fixed" === l) && -1 < (e + d).indexOf("auto") ? (d = h.position(), e = d.top, d = d.left) : (e = parseFloat(e) || 0, d = parseFloat(d) || 0);
            g.isFunction(b) && (b = b.call(a, c, f));
            null != b.top && (k.top = b.top - f.top + e);
            null != b.left && (k.left = b.left - f.left + d);
            "using" in b ? b.using.call(a, k) : h.css(k)
        }
    };
    g.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                g.offset.setOffset(this,
                    a, b)
            });
            var b, c;
            c = this[0];
            var d = {
                    top: 0,
                    left: 0
                },
                e = c && c.ownerDocument;
            if (e) {
                b = e.documentElement;
                if (!g.contains(b, c)) return d;
                "undefined" !== typeof c.getBoundingClientRect && (d = c.getBoundingClientRect());
                c = R(e);
                return {
                    top: d.top + c.pageYOffset - b.clientTop,
                    left: d.left + c.pageXOffset - b.clientLeft
                }
            }
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                "fixed" === g.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), g.nodeName(a[0], "html") || (d = a.offset()), d.top +=
                    g.css(a[0], "borderTopWidth", !0), d.left += g.css(a[0], "borderLeftWidth", !0));
                return {
                    top: b.top - d.top - g.css(c, "marginTop", !0),
                    left: b.left - d.left - g.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || pb; a && !g.nodeName(a, "html") && "static" === g.css(a, "position");) a = a.offsetParent;
                return a || pb
            })
        }
    });
    g.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = "pageYOffset" === c;
        g.fn[a] = function(e) {
            return sa(this, function(a, e, f) {
                var l = R(a);
                if (void 0 === f) return l ? l[c] : a[e];
                l ? l.scrollTo(d ? b.pageXOffset : f, d ? f : b.pageYOffset) : a[e] = f
            }, a, e, arguments.length, null)
        }
    });
    g.each(["top", "left"], function(a, b) {
        g.cssHooks[b] = p(L.pixelPosition, function(a, c) {
            if (c) return c = l(a, b), Ra.test(c) ? g(a).position()[b] + "px" : c
        })
    });
    g.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        g.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            g.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" !== typeof d),
                    l = c || (!0 === d || !0 === e ? "margin" : "border");
                return sa(this,
                    function(b, c, d) {
                        return g.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (c = b.documentElement, Math.max(b.body["scroll" + a], c["scroll" + a], b.body["offset" + a], c["offset" + a], c["client" + a])) : void 0 === d ? g.css(b, c, l) : g.style(b, c, d, l)
                    }, b, f ? d : void 0, f, null)
            }
        })
    });
    g.fn.size = function() {
        return this.length
    };
    g.fn.andSelf = g.fn.addBack;
    "function" === typeof define && define.amd && define("jquery", [], function() {
        return g
    });
    var Qb = b.jQuery,
        Rb = b.$;
    g.noConflict = function(a) {
        b.$ === g && (b.$ = Rb);
        a && b.jQuery === g &&
            (b.jQuery = Qb);
        return g
    };
    "undefined" === typeof e && (b.jQuery = b.$ = g);
    return g
});
yii = function(b) {
    function e() {
        b(document).ajaxComplete(function(a, b, c) {
            if (a = b.getResponseHeader("X-Redirect")) window.location = a
        })
    }

    function d() {
        b.ajaxPrefilter(function(a, b, c) {
            !a.crossDomain && f.getCsrfParam() && c.setRequestHeader("X-CSRF-Token", f.getCsrfToken())
        })
    }

    function a() {
        var a = b(document);
        a.on("click.yii", f.clickableSelector, function(a) {
            var c = b(this);
            if (f.allowAction(c)) return f.handleAction(c);
            a.stopImmediatePropagation();
            return !1
        });
        a.on("change.yii", f.changeableSelector, function(a) {
            var c = b(this);
            if (f.allowAction(c)) return f.handleAction(c);
            a.stopImmediatePropagation();
            return !1
        })
    }

    function c() {
        var a = location.protocol + "//" + location.host,
            c = b("script[src]").map(function() {
                return "/" === this.src.charAt(0) ? a + this.src : this.src
            }).toArray();
        b.ajaxPrefilter("script", function(d, e, u) {
            "jsonp" != d.dataType && (d = "/" === d.url.charAt(0) ? a + d.url : d.url, -1 === b.inArray(d, c) ? c.push(d) : -1 === b.inArray(d, b.map(f.reloadableScripts, function(b) {
                return "/" === b.charAt(0) ? a + b : b
            })) && u.abort())
        })
    }
    var f = {
        reloadableScripts: [],
        clickableSelector: 'a, button, input[type="submit"], input[type="button"], input[type="reset"], input[type="image"]',
        changeableSelector: "select, input, textarea",
        getCsrfParam: function() {
            return b("meta[name=csrf-param]").prop("content")
        },
        getCsrfToken: function() {
            return b("meta[name=csrf-token]").prop("content")
        },
        confirm: function(a) {
            return confirm(a)
        },
        allowAction: function(a) {
            a = a.data("confirm");
            return void 0 === a || f.confirm(a)
        },
        handleAction: function(a) {
            var c = a.data("method");
            if (void 0 === c) return !0;
            var d = a.closest("form"),
                e = a.prop("href"),
                u = !d.length || e;
            u && (e && e.match(/(^\/|:\/\/)/) || (e = window.location.href), d = b('<form method="' +
                c + '" action="' + e + '"></form>'), (e = a.prop("target")) && d.attr("target", e), c.match(/(get|post)/i) || (d.append('<input name="_method" value="' + c + '" type="hidden">'), c = "POST"), c.match(/(get|head|options)/i) || (e = f.getCsrfParam()) && d.append('<input name="' + e + '" value="' + f.getCsrfToken() + '" type="hidden">'), d.hide().appendTo("body"));
            if (e = d.data("yiiActiveForm")) e.submitObject = a;
            a = d.prop("method");
            d.prop("method", c);
            d.trigger("submit");
            d.prop("method", a);
            u && d.remove();
            return !1
        },
        getQueryParams: function(a) {
            var b =
                a.indexOf("?");
            if (0 > b) return {};
            a = a.substring(b + 1).split("&");
            for (var b = 0, c = {}; b < a.length; b++) a[b] = a[b].split("="), c[decodeURIComponent(a[b][0])] = decodeURIComponent(a[b][1]);
            return c
        },
        initModule: function(a) {
            if (void 0 === a.isActive || a.isActive) b.isFunction(a.init) && a.init(), b.each(a, function() {
                b.isPlainObject(this) && f.initModule(this)
            })
        },
        init: function() {
            d();
            e();
            c();
            a()
        }
    };
    return f
}(jQuery);
jQuery(document).ready(function() {
    yii.initModule(yii)
});
(function(b) {
    function e(a, c) {
        this.config = b.extend({}, d, c);
        this.element = a;
        this.steps = a.find(this.config.stepElement);
        this.config.showLegend || this.element.addClass("sf-hide-legend");
        this.btnFinishTmp = this.config.finishBtn;
        this.btnPrevTmp = this.config.prevBtn;
        this.btnNextTmp = this.config.nextBtn;
        "undefined" === typeof(document.body || document.documentElement).style.transition && "fade" != this.config.transition && (this.config.duration = 0);
        this.viewPort;
        this.navWrap;
        this.config.startStep >= this.steps.length && (this.config.startStep =
            this.steps.length - 1);
        this.stepActive = this.config.startStep;
        this.labels = [];
        this.themes = {
            sun: "t1",
            sea: "t2",
            sky: "t3",
            simple: "t4",
            circle: "t5"
        };
        this.init();
        a.trigger("sf-loaded");
        return this
    }
    var d = {
        duration: 1E3,
        transition: "slide",
        linkNav: !0,
        showNav: !0,
        showNavNumbers: !0,
        showButtons: !0,
        showLegend: !0,
        nextBtn: b('<a class="next-btn sf-right sf-btn" href="#">NEXT</a>'),
        prevBtn: b('<a class="prev-btn sf-left sf-btn" href="#">PREV</a>'),
        finishBtn: b('<input class="finish-btn sf-right sf-btn" type="submit" value="FINISH"/>'),
        onNext: function(a, b) {},
        onPrev: function(a, b) {},
        onFinish: function(a, b) {},
        onSlideChanged: function(a, b) {},
        startStep: 0,
        rtl: !1,
        height: "first",
        theme: "sea",
        markPrevSteps: !1,
        stepElement: "fieldset",
        stepNameElement: "legend",
        disableEnter: !1,
        smallMobileNav: !0,
        debug: !1,
        spinner: '<div class="spinner"><div class="ball-1"></div><div class="ball-2"></div><div class="ball-3"></div></div>'
    };
    e.prototype.init = function() {
        var a = this;
        a.element.append(b("<div>").addClass("sf-viewport"));
        a.viewPort = b(".sf-viewport", a.element);
        a.element.wrap(b("<div>", {
            "class": "sf-wizard clearfix" + (a.config.rtl ? " sf-rtl" : ""),
            id: a.element.attr("id") + "-box"
        }));
        a.wizard = a.element.parent();
        a.wizard.addClass("sf-" + a.themes[a.config.theme] + " sf-" + a.config.transition + " sf-s-" + a.config.startStep);
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? a.wizard.addClass("sf-mob") : a.wizard.addClass("sf-nomob");
        a.config.showNavNumbers || a.wizard.addClass("sf-nonumbers");
        b(a.viewPort).append(b("<div>", {
            "class": "sf-fieldwrap clearfix",
            id: a.element.attr("id") + "-field"
        }));
        a.fieldWrap = b(".sf-fieldwrap", a.element);
        a.fieldWrap.css({
            transition: "transform " + a.config.duration + "ms"
        });
        var c = b("<div>", {
            "class": "sf-controls clearfix"
        });
        "bottom" == a.config.showNav ? c.insertBefore(b(".sf-viewport", a.wizard)) : a.element.append(c);
        a.controls = b(".sf-controls", a.element);
        "circle" == a.config.theme && a.viewPort.wrap(b("<div>", {
            "class": "sf-viewport-out"
        }));
        a.config.showButtons || a.controls.addClass("sf-hide-buttons");
        b(a.config.stepNameElement, a.element).addClass("sf-step-name");
        a.touch = {
            start: 0,
            movex: 0,
            move: 0,
            index: 0,
            longTouch: void 0,
            offset: 0,
            navWidth: 0,
            diff: 0
        };
        !1 !== a.config.showNav && (a.initNav(), "bottom" == a.config.showNav || "top" == a.config.showNav || 1 == a.config.showNav) && (a.initTouchNav(), setTimeout(function() {
            b(".sf-nav").css({
                clear: "both"
            })
        }, 3E3));
        a.steps.each(function(b) {
            a.wrapStep(this, b)
        });
        a.initBtnFinish(a.config.startStep);
        a.initBtnNext(a.config.startStep);
        a.initBtnPrev(a.config.startStep);
        a.checkBtns();
        a.setProportion();
        b(window).resize(function() {
            a.careNav(a.stepActive,
                a.stepActive);
            a.setProportion()
        });
        a.addBtnsClick();
        a.element.on("keydown", ":input:not(textarea)", function(b) {
            13 == (b.keyCode || b.which) && (b.preventDefault(), a.config.disableEnter || a.next())
        })
    };
    e.prototype.initTouchNav = function() {
        var a = this;
        b(".sf-nav", a.wizard).on("touchstart", function(c) {
            a.touch = a.touch;
            a.touch.longTouch = !1;
            b(".sf-nav", a.navWrap).css({
                transition: "none"
            });
            a.touch.start = c.originalEvent.touches[0].pageX
        });
        b(".sf-nav", a.wizard).on("touchmove", function(c) {
            a.touch = a.touch;
            a.touch.movex =
                c.originalEvent.touches[0].pageX;
            a.touch.move = a.touch.start - a.touch.movex;
            a.touch.diff = parseInt(a.touch.offset, 10) - a.touch.move;
            0 < a.touch.diff && (a.touch.diff = 0);
            a.touch.diff < -a.touch.navWidth && (a.touch.diff = -a.touch.navWidth);
            prop = "translateX(" + a.touch.diff + "px)";
            b(".sf-nav", a.navWrap).css({
                "-webkit-transform": prop,
                "-moz-transform": prop,
                "-ms-transform": prop,
                "-o-transform": prop,
                transform: prop
            })
        });
        b(".sf-nav", a.wizard).on("touchend", function(c) {
            a.touch.offset = a.touch.diff;
            b(".sf-nav", a.navWrap).css({
                transition: "all " +
                    a.config.duration + "ms"
            })
        })
    };
    e.prototype.step = function(a) {
        return b(".sf-step", this.wizard).filter(function() {
            return b(this).data("step") == a
        })
    };

    e.prototype.navStep = function(a) {
        return b(".sf-nav-step", this.wizard).filter(function() {
            return b(this).data("step") == a
        })
    };
    e.prototype.wrapStep = function(a, c) {
        b(a).addClass("sf-step-el");
        var d = b("<div>", {
            "class": "sf-step"
        }).data("step", c);
        c == this.config.startStep && d.addClass("sf-step-front");
        b(a).wrap(d).parent().appendTo(this.fieldWrap)
    };
    e.prototype.addStep = function(a,
        c) {
        var d = this;
        a = parseInt(a);
        var e = d.config.stepElement.match(/(^\.)?(.+)/),
            k;
        "undefined" !== typeof e[1] && (k = b("<div>", {
            "class": e[1]
        }));
        "undefined" === typeof e[1] && (k = b("<" + e[2] + ">"));
        k.html(c);
        b(".sf-step", d.wizard).each(function() {
            var c = b(this).data("step");
            c >= a && b(this).data("step", ++c)
        });
        b(".sf-nav-step", d.wizard).each(function() {
            var c = b(this).data("step");
            c >= a && (b(this).data("step", ++c), d.stepActive + 1 != c && b(this).removeClass("sf-active"), b(this).find(".sf-nav-number-inner").text(c + 1))
        });
        a <= d.stepActive &&
            d.stepActive++;
        d.config.startStep = d.stepActive;
        d.wrapStep(k, a);
        d.wrapNavItem(d.step(a), a);
        d.addNavClick();
        d.checkBtns();
        d.setProportion()
    };
    e.prototype.removeStep = function(a) {
        var c = this,
            d = c.step(a),
            e = c.navStep(a);
        if (c.stepActive == a) return c.log("You can't remove active step"), !1;
        d.remove();
        e.hide(300);
        c.addAnimating();
        setTimeout(function() {
            e.remove();
            c.removeAnimating()
        }, 300);
        b(".sf-step", c.wizard).each(function() {
            var c = b(this).data("step");
            c >= a && b(this).data("step", --c)
        });
        b(".sf-nav-step", c.wizard).each(function() {
            var d =
                b(this).data("step");
            d >= a && (b(this).data("step", --d), c.stepActive != d && b(this).removeClass("sf-active"), b(this).find(".sf-nav-number-inner").text(d + 1))
        });
        c.stepActive > a && (c.stepActive--, c.navStep(c.stepActive).addClass("sf-active"));
        c.config.startStep = c.stepActive;
        c.checkBtns();
        c.setProportion()
    };
    e.prototype.checkBtns = function() {
        !1 !== this.checkNext() ? this.btnNext.fadeIn(100) : this.btnNext.fadeOut(0);
        !1 !== this.checkPrev() ? this.btnPrev.fadeIn(100) : this.btnPrev.fadeOut(100);
        !1 === this.checkNext() ? this.btnFinish.fadeIn(100) :
            this.btnFinish.fadeOut(0);
        this.btnNext.hasClass("sf-btn-disabled") ? this.addClickNext(!1) : this.addClickNext();
        this.btnPrev.hasClass("sf-btn-disabled") ? this.addClickPrev(!1) : this.addClickPrev();
        this.btnFinish.hasClass("sf-btn-disabled") ? this.addClickFinish(!1) : this.addClickFinish()
    };
    e.prototype.checkNext = function() {
        var a = this,
            c = 99;
        b(".sf-step", a.wizard).each(function() {
            var d = b(this);
            a.stepActive < d.data("step") && !d.hasClass("sf-step-disabled") && d.data("step") < c && (c = d.data("step"))
        });
        return 99 > c ? c : !1
    };
    e.prototype.checkPrev = function() {
        var a = this;
        if (1 > a.stepActive) return !1;
        var c = 0;
        b(".sf-step", a.wizard).each(function() {
            var d = b(this);
            a.stepActive > d.data("step") && !d.hasClass("sf-step-disabled") && d.data("step") > c && (c = d.data("step"))
        });
        return 0 <= c ? c : !1
    };
    e.prototype.touchFix = function(a) {
        var c = b(a).next();
        b(a).remove();
        setTimeout(function() {
            c.before(a)
        }, 1)
    };
    e.prototype.addBtnsClick = function() {
        this.addClickNext();
        this.addClickPrev();
        this.addClickFinish()
    };
    e.prototype.addClickNext = function(a) {
        var c = this;
        c.touchFix(c);
        b(c.wizard).off("click", ".next-btn");
        b(c.wizard).on("click", ".next-btn", function(b, d) {
            "undefined" !== typeof a && !0 !== a || c.goTo("next", d);
            b.preventDefault()
        })
    };
    e.prototype.addClickPrev = function(a) {
        var c = this;
        b(c.wizard).off("click", ".prev-btn");
        b(c.wizard).on("click", ".prev-btn", function(b, d) {
            "undefined" !== typeof a && !0 !== a || c.goTo("prev", d);
            b.preventDefault()
        })
    };
    e.prototype.addClickFinish = function(a) {
        var c = this;
        b(c.wizard).off("click", ".finish-btn");
        b(c.wizard).on("click", ".finish-btn",
            function(b, d) {
                "undefined" !== typeof a && !0 !== a || c.finish(d);
                b.preventDefault()
            })
    };
    e.prototype.addSpinner = function(a, b) {
        !1 === b ? ("next" == a && this.nextLabel(this.labels.next), "prev" == a && this.prevLabel(this.labels.prev), "finish" == a && this.finishLabel(this.labels.finish), isNaN(a) || this.navLabel(a, this.labels[a])) : ("next" == a && (this.labels.next = this.nextLabel(), this.nextLabel(this.config.spinner)), "prev" == a && (this.labels.prev = this.prevLabel(), this.prevLabel(this.config.spinner)), "finish" == a && (this.labels.finish =
            this.finishLabel(), this.finishLabel(this.config.spinner)), isNaN(a) || (this.labels[a] = this.navLabel(a), this.navLabel(a, this.config.spinner)))
    };
    e.prototype.isAnimating = function() {
        return this.wizard.hasClass("sf-animating") ? !0 : !1
    };
    e.prototype.addAnimating = function() {
        this.wizard.addClass("sf-animating")
    };
    e.prototype.removeAnimating = function() {
        this.wizard.removeClass("sf-animating")
    };
    e.prototype.stopTransitionEffect = function() {
        this.element.find(".sf-fieldwrap").removeAttr("style");
        this.element.find(".sf-fieldwrap").attr("style",
            "")
    };
    e.prototype.startTransitionEffect = function(a) {
        var b = this;
        setTimeout(function() {
            b.element.find(".sf-fieldwrap").css({
                transition: "transform " + b.config.duration + "ms"
            });
            a && b.removeAnimating()
        }, 150)
    };
    e.prototype.markStep = function(a, b) {
        0 == b ? this.navStep(a).removeClass("sf-nav-mark-step") : this.navStep(a).addClass("sf-nav-mark-step")
    };
    e.prototype.disableStep = function(a, b) {
        "next" == a && this.step(this.stepActive + 1).length && (a = this.stepActive + 1);
        "prev" == a && this.step(this.stepActive - 1).length && (a = this.stepActive -
            1);
        !1 === b ? (this.step(a).removeClass("sf-step-disabled"), this.navStep(a).removeClass("sf-nav-step-disabled")) : (this.step(a).addClass("sf-step-disabled"), this.navStep(a).addClass("sf-nav-step-disabled"));
        this.checkBtns()
    };
    e.prototype.activeStep = function(a, b) {
        !1 === b ? this.navStep(a).addClass("sf-nav-unlink").removeClass("sf-nav-link") : this.navStep(a).addClass("sf-nav-link").removeClass("sf-nav-unlink");
        this.addNavClick()
    };
    e.prototype.activeNext = function(a, b) {
        0 == a ? (this.btnNext.addClass("sf-btn-disabled"),
            0 == b && this.activeFinish(!1)) : (this.btnNext.removeClass("sf-btn-disabled"), "undefined" !== typeof b && 1 != b || this.activeFinish());
        this.checkBtns()
    };
    e.prototype.activePrev = function(a) {
        0 == a ? this.btnPrev.addClass("sf-btn-disabled") : this.btnPrev.removeClass("sf-btn-disabled");
        this.checkBtns()
    };
    e.prototype.activeFinish = function(a) {
        0 == a ? this.btnFinish.addClass("sf-btn-disabled") : this.btnFinish.removeClass("sf-btn-disabled");
        this.checkBtns()
    };
    e.prototype.navLabel = function(a, b) {
        if ("undefined" === typeof b) return this.navStep(a).find(".sf-nav-subtext").html();
        this.navStep(a).find(".sf-nav-subtext").html(b);
        this.setNavWidth()
    };
    e.prototype.navNumber = function(a, b) {
        this.navStep(a).find(".sf-nav-number").html(b)
    };
    e.prototype.nextLabel = function(a) {
        if ("undefined" === typeof a) return this.btnNext.html();
        this.btnNext.html(a)
    };
    e.prototype.prevLabel = function(a) {
        if ("undefined" === typeof a) return this.btnPrev.html();
        this.btnPrev.html(a)
    };
    e.prototype.finishLabel = function(a) {
        if ("undefined" === typeof a) return this.btnFinish.is(":input") ? this.btnFinish.val() : this.btnFinish.html();
        this.btnFinish.is(":input") ? this.btnFinish.val(a) : this.btnFinish.html(a)
    };
    e.prototype.getActualStep = function() {
        return this.stepActive
    };
    e.prototype.initNav = function() {
        var a = this,
            c = b("<div>").addClass("sf-nav-wrap clearfix");
        a.config.smallMobileNav && c.addClass("sf-nav-smmob");
        var d = b("<ul>").addClass("sf-nav clearfix");
        c.append(d);
        "bottom" == a.config.showNav ? this.element.after(c) : this.element.before(c);
        this.navWrap = b(".sf-nav-wrap", a.wizard);
        this.steps.each(function(b) {
            a.wrapNavItem(this, b)
        });
        this.addNavClick();
        this.careNav(this.stepActive, this.stepActive)
    };
    e.prototype.addNavClick = function() {
        var a = this;
        b(".sf-nav-step", a.wizard).off("click");
        b(".sf-nav-step.sf-nav-link", a.wizard).on("click", a.wizard, function(c) {
            a.goTo(b(this).data("step"));
            c.preventDefault()
        })
    };
    e.prototype.wrapNavItem = function(a, c) {
        var d = this,
            e = b("<li>", {
                "class": "sf-nav-step",
                data: {
                    step: c
                }
            });
        d.config.markPrevSteps && c < d.config.startStep && e.addClass("sf-nav-mark-step");
        d.config.showNavNumbers ? (e.addClass("sf-li-number"), 8 < c && e.addClass("sf-li-numbers-two")) :
            e.addClass("sf-li-nonumber");
        var k = b("<div>").addClass("sf-nav-number").appendTo(e);
        b("<span>").addClass("sf-nav-number-inner").html(c + 1).appendTo(k);
        b("<div class='sf-icon'><span>").appendTo(e);
        b("<span>").addClass("sf-nav-subtext").html(b(a).find(d.config.stepNameElement).first().html()).appendTo(e);
		c == d.config.startStep && e.addClass("sf-active");
        1 == d.config.linkNav ? e.addClass("sf-nav-link") : "prev" == d.config.linkNav && d.stepActive >= c ? e.addClass("sf-nav-link") : e.addClass("sf-nav-unlink");
        k = b(".sf-nav-wrap", d.wizard);
        "left" ==
        d.config.showNav && (k.addClass("sf-nav-left"), d.element.addClass("sf-nav-on-left"));
        "right" == d.config.showNav && (k.addClass("sf-nav-right"), d.element.addClass("sf-nav-on-right"));
        if ("top" == d.config.showNav || !0 === d.config.showNav) k.addClass("sf-nav-top"), d.element.addClass("sf-nav-on-top");
        "bottom" == d.config.showNav && (k.addClass("sf-nav-bottom"), d.element.addClass("sf-nav-on-bottom"));
        d.element.addClass("sf-content");
        d.navStep(c + 1).length ? (d.navStep(c + 1).before(e), d.setNavWidth(), e.css({
                display: "none"
            }),
            e.show(300), setTimeout(function() {
                d.careNav(d.stepActive, d.stepActive)
            }, 300)) : d.wizard.find(".sf-nav").append(e)
    };
    e.prototype.setProportion = function(a) {
        "undefined" !== typeof a && 0 != a || this.stopTransitionEffect();
        this.stepWidth = this.viewPort.width();
        var c = 0,
            d = 0;
        "auto" == this.config.height && "3d-cube" != this.config.transition && this.steps.length && (this.step(this.stepActive).height("auto"), a = this.step(this.stepActive).outerHeight(), this.viewPort.height(a), c = a);
        "first" == this.config.height && this.steps.length &&
            (this.step(0).height("auto"), c = this.step(0).height(), this.viewPort.height(this.step(0).outerHeight()));
        !isNaN(parseInt(this.config.height)) && this.steps.length && (c = this.config.height, this.viewPort.height(c), this.step(0).height(c), a = this.step(0).outerHeight(!0), c = 2 * c - a);
        if ("tallest" == this.config.height || "auto" == this.config.height && "3d-cube" == this.config.transition && this.steps.length) b(".sf-step", this.wizard).each(function(a) {
            b(this).css({
                height: "auto",
                display: "block"
            });
            b(this).height() > c && (c = b(this).height(),
                d = b(this));
            b(this).css("display", "")
        }), this.viewPort.height(d.outerHeight());
        a = " translateZ( " + this.stepWidth / 2 + "px )";
        b("#sf-" + this.element.attr("id") + "-styles").remove();
        var e = "#" + this.element.attr("id") + " .sf-fieldwrap ";
        "3d-cube" == this.config.transition ? b("<style type='text/css' id='sf-" + this.element.attr("id") + "-styles'>" + e + " {transform: rotateY( 0deg ) translateZ( -" + this.stepWidth / 2 + "px );}" + e + " .sf-step.sf-step-front{transform: rotateY( 0deg )" + a + "}" + e + " .sf-step.sf-step-right{transform: rotateY( 90deg )" +
            a + "}" + e + " .sf-step.sf-step-left{transform: rotateY( -90deg )" + a + "}</style>").appendTo("head") : "slide" == this.config.transition && b("<style type='text/css' id='sf-" + this.element.attr("id") + "-styles'>" + e + " {}" + e + " .sf-step.sf-step-front{}" + e + " .sf-step.sf-step-right{transform: translateX(" + this.stepWidth + "px)}" + e + " .sf-step.sf-step-left{transform: translateX(-" + this.stepWidth + "px)}</style>").appendTo("head");
        c && b(".sf-step", this.wizard).each(function(a) {
            b(this).height(c)
        });
        this.startTransitionEffect()
    };
    e.prototype.goTo = function(a, c, d) {
        var e = this;
        if (isNaN(a))
            if ("next" == a) {
                if (e.stepActive == b(".sf-step").length - 1) {
                    if ("undefined" !== typeof d && d) return this.finish(c);
                    this.log("last step - add parameter if you want finish");
                    return !1
                }
                a = e.checkNext()
            } else if ("prev" == a) {
            if (1 > e.stepActive) return this.log("first step - there is no more prev step"), !1;
            a = e.checkPrev()
        } else return !1;
        if (a >= b(".sf-step", e.wizard).length || !1 === a || e.step(a).is(".sf-step-disabled") || this.isAnimating() || this.stepActive == a) return !1;
        var k = this.stepActive;
        if (k > a)
            for (var m = k; m > a; m--) d = e.step(m), d.hasClass("sf-step-disabled") || !1 === e.config.onPrev(m, c) && (a = m);
        if (k < a)
            for (m = k; m < a; m++) d = e.step(m), d.hasClass("sf-step-disabled") || !1 === e.config.onNext(m, c) && (a = m);
        if (k == a) return !1;
        this.addAnimating();
        0 != e.config.linkNav && e.activeStep(a);
        "summary" == e.step(a).find(e.config.stepElement).attr("data-sf-step") && e.summaryStep(a);
        d = jQuery.Event("sf-step-before");
        e.element.trigger(d, [k, a, c]);
        if (d.isDefaultPrevented()) return e.removeAnimating(), !1;
        e.wizard.removeClass("sf-s-" + k).addClass("sf-s-trans-" + a);
        e.config.markPrevSteps && b(".sf-nav-step", e.navWrap).each(function(c) {
            b(this).removeClass("sf-nav-mark-step");
            c < a && b(this).addClass("sf-nav-mark-step")
        });
        this.careNav(a, k);
        e.element.find(".sf-step").removeClass("sf-step-front sf-step-right sf-step-left");
        e.step(k).addClass("sf-step-front");
        stepShift = "";
        k < a ? e.config.rtl ? e.step(a).addClass("sf-step-left") : (stepShift = "-", e.step(a).addClass("sf-step-right")) : e.config.rtl ? (stepShift = "-", e.step(a).addClass("sf-step-right")) :
            e.step(a).addClass("sf-step-left");
        "3d-cube" == e.config.transition ? !1 !== e.isSupportTransition() ? (b("#sf-" + e.element.attr("id") + "-trans-styles").remove(), d = "#" + e.element.attr("id") + " .sf-fieldwrap", b("<style type='text/css' id='sf-" + e.element.attr("id") + "-trans-styles'>@keyframes cube-" + e.element.attr("id") + " {33% {transform: translateZ(-" + (e.stepWidth - e.stepWidth / 4) + "px)}66% {transform: translateZ(-" + (e.stepWidth - e.stepWidth / 4) + "px) rotateY(" + stepShift + "90deg)}100% {transform: translateZ(-" + e.stepWidth /
            2 + "px) rotateY(" + stepShift + "90deg)}}" + d + ".sf-trans-cube-process {animation-name: cube-" + e.element.attr("id") + ";animation-duration: " + this.config.duration + "ms;}</style>").appendTo("head"), b(".sf-fieldwrap", this.wizard).addClass("sf-trans-cube-process"), setTimeout(function() {
            b(".sf-fieldwrap", this.wizard).removeClass("sf-trans-cube-process");
            e.afterTransition(e.stepActive, a, c)
        }, this.config.duration)) : e.afterTransition(e.stepActive, a, c) : "fade" == e.config.transition ? (e.step(e.stepActive).fadeOut(e.config.duration /
            2), setTimeout(function() {
            e.step(a).fadeIn(e.config.duration / 2)
        }, e.config.duration / 2), setTimeout(function() {
            e.afterTransition(a, a, c)
        }, e.config.duration)) : "slide" == e.config.transition ? !1 !== e.isSupportTransition() ? (b("#sf-" + e.element.attr("id") + "-trans-styles").remove(), d = "#" + e.element.attr("id") + " .sf-fieldwrap", b("<style type='text/css' id='sf-" + e.element.attr("id") + "-trans-styles'>@keyframes slide-" + e.element.attr("id") + " {100% {transform: translateX(" + stepShift + e.stepWidth + "px)}}" + d + ".sf-trans-slide-process {animation-name: slide-" +
            e.element.attr("id") + ";animation-duration: " + this.config.duration + "ms;}</style>").appendTo("head"), b(".sf-fieldwrap", this.wizard).addClass("sf-trans-slide-process"), setTimeout(function() {
            b(".sf-fieldwrap", this.wizard).removeClass("sf-trans-slide-process");
            e.afterTransition(e.stepActive, a, c)
        }, this.config.duration)) : e.afterTransition(e.stepActive, a, c) : "none" == e.config.transition && e.afterTransition(a, a, c);
        e.stepActive = a;
        b(".sf-nav-step", e.wizard).removeClass("sf-active");
        e.navStep(a).addClass("sf-active");
        "auto" == e.config.height && e.steps.length && "3d-cube" != e.config.transition && (d = e.step(e.stepActive), d.height("auto"), k = d.height(), m = e.step(e.stepActive).outerHeight(!0), e.viewPort.height(m), d.height(k));
        e.checkBtns();
        return !0
    };
    e.prototype.isSupportTransition = function() {
        return "undefined" === typeof(document.body || document.documentElement).style.transition ? !1 : !0
    };
    e.prototype.afterTransition = function(a, b, d) {
        this.stopTransitionEffect();
        this.wizard.removeClass("sf-s-trans-" + a).addClass("sf-s-" + a);
        this.element.find(".sf-step").removeClass("sf-step-front sf-step-right sf-step-left");
        this.step(a).addClass("sf-step-front");
        this.startTransitionEffect(!0);
        this.config.onSlideChanged(a, d);
        this.element.trigger("sf-step-after", [this.stepActive, d])
    };
    e.prototype.summaryStep = function(a) {
        for (var c = this.step(a).html(), c = c.replace(/({{)([^}]+)(}})/g, '<span data-sf-input="$2"></span>'), d = /<span data-sf-input="([^"|]+)\|?([^"]+)?"/g, e; null !== (e = d.exec(c));) {
            e.index === d.lastIndex && d.lastIndex++;
            var k = b('[name="' + e[1] + '"]', this.wizard),
                m = [];
            k.is("select") && (k = k.find("option"));
            if (1 < k.length) {
                var q = !1;
                k.each(function() {
                    var a = b(this);
                    if (a.is(":checkbox") || a.is(":radio") || a.is("option")) {
                        if (a.is(":checked")) {
                            var c = b(this).data("sf-text");
                            "undefined" !== typeof c && !1 !== c ? m.push(c) : m.push(a.val());
                            q = !0
                        }
                    } else m.push(a.val())
                });
                k = m.join(", ");
                q || (k = "undefined" === typeof e[2] ? "---" : e[2])
            } else if (k.is(":checkbox") || k.is(":radio"))
                if (k.is(":checked")) var u = k.attr("data-sf-text"),
                    k = "undefined" !== typeof u && !1 !== u ? u : k.val();
                else k = "undefined" === typeof e[2] ? "---" : e[2];
            else k = "" == k.val() && "undefined" !== typeof e[2] ?
                e[2] : k.val();
            e = e[0].replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            c = c.replace(new RegExp("(" + e + ">)(.*?)(</span>)", "g"), "$1" + k + "$3")
        }
        this.step(a).html(c)
    };
    e.prototype.careNav = function(a, c) {
        if (!1 !== this.config.showNav) {
            var d = this.navWrap.width(),
                e = [];
            if (!0 === this.config.showNav || "top" == this.config.showNav || "bottom" == this.config.showNav) {
                var k = 0,
                    m = 0;
                b(".sf-nav-step", this.navWrap).each(function(c) {
                    e[c] = b(this).outerWidth(!0);
                    m += e[c];
                    c < a && (k += e[c])
                });
                0 <= c - a && (k -= 0 < a ? e[a - 1] : 0);
                this.touch.navWidth = !1;
                if (m > d) {
                    var q = this.touch.navWidth = m - d,
                        d = a - 1,
                        u = 0;
                    0 >= c - a && (d = a + 1, u = -80);
                    k + u > q && (k = q, u = 0);
                    var r = this.navStep(d);
                    b(".sf-nav", this.navWrap).css({
                        transition: "all " + this.config.duration + "ms"
                    });
                    var A = this.config.rtl ? "" : "-",
                        q = 0;
                    r.length ? (q = A + (k + u), 0 > k + u && (q = 0), d = "translateX(" + q + "px)") : 0 > d ? d = "translateX(0px)" : (q = A + k, d = "translateX(" + q + "px)");
                    this.touch.offset = q;
                    b(".sf-nav", this.navWrap).css({
                        "-webkit-transform": d,
                        "-moz-transform": d,
                        "-ms-transform": d,
                        "-o-transform": d,
                        transform: d
                    })
                }
            } else this.setNavWidth()
        }
    };
    e.prototype.setNavWidth = function() {
        var a = this,
            c = 0;
        if ("left" == a.config.showNav || "right" == a.config.showNav) {
            b(".sf-nav-step", a.navWrap).each(function(d) {
                a.navWrap.css("width", "9999px");
                d = b(this).attr("style");
                var e = b(this).css({
                    "float": "left",
                    display: "block",
                    width: "auto",
                    "white-space": "nowrap"
                }).outerWidth(!0);
                a.navWrap.css("width", "");
                b(this).removeAttr("style").attr("style", d);
                c < e && (c = e)
            });
            var c = c + 2,
                d = a.element.closest(".sf-wizard").width() - c;
            d--;
            a.element.css({
                width: d + "px",
                "float": ""
            });
            a.navWrap.hasClass("sf-nav-left") &&
                a.element.css({
                    "margin-left": "auto",
                    "float": "left"
                });
            a.navWrap.css("width", c + "px")
        }
    };
    e.prototype.refresh = function() {
        this.careNav(this.stepActive, this.stepActive);
        this.setProportion(!0)
    };
    e.prototype.initBtnNext = function() {
        this.btnNext = this.btnNextTmp.clone(!0).addClass("sf-btn-next");
        this.btnNext.appendTo(b(this.controls))
    };
    e.prototype.initBtnPrev = function() {
        this.btnPrev = this.btnPrevTmp.clone(!0).addClass("sf-btn-prev");
        this.btnPrev.appendTo(b(this.controls))
    };
    e.prototype.initBtnFinish = function() {
        this.btnFinish =
            this.btnFinishTmp.clone(!0).addClass("sf-btn-finish");
        this.btnFinish.appendTo(b(this.controls))
    };
    e.prototype.next = function(a, b) {
        return this.goTo("next", b, a)
    };
    e.prototype.prev = function(a) {
        return this.goTo("prev", a)
    };
    e.prototype.finish = function(a) {
        var b = !0;
        !1 === this.config.onFinish(this.stepActive, a) && (b = !1, this.log("Stopped by onFinish"));
        var d = jQuery.Event("sf-finish");
        this.element.trigger(d, [this.stepActive, a]);
        d.isDefaultPrevented() && (b = !1, this.log("Stopped by event sf-finish"));
        b && this.element.submit();
        return b
    };
    e.prototype.log = function(a) {
        !0 === this.config.debug && console.log(a)
    };
    b.fn.stepFormWizard = function(a) {
        var b = this.data("step-form-wizard");
        b || (b = new e(this.first(), a), this.data("step-form-wizard", b));
        return b
    }
})(jQuery);
$(window).load(function() {
    $(".sf-step").mCustomScrollbar({
        theme: "dark-3",
        scrollButtons: {
            enable: !0
        }
    });
    w1.refresh();
    w2.refresh();
    w3.refresh();
    w4.refresh();
    w4_5.refresh();
    w5.refresh();
    w6.refresh();
    w7.refresh()
});
var w0, w1, w2, w3, w4, w5, w6, w7, w8, w9, w4_5, validator, prepare_example = function() {
    $(".settings").on("click", function() {
        var a = parseInt($(".theme-changer").css("right"));
        console.log(a);
        0 > a ? $(".theme-changer").animate({
            right: "0"
        }, 1E3) : $(".theme-changer").animate({
            right: "-110"
        }, 1E3)
    });
    var b = $("#theme_name").text();
    if ("undefined" === typeof b || "" == b) b = "sea";
    var e = $("#trans_name").text();
    if ("undefined" === typeof e || "" == e) e = "slide";
    var d = 1E3;
    "3d-cube" == e && (d = 2E3);
    var a = $("#rtl").text();
    "undefined" === typeof a || "" ==
        a || "0" == a ? a = !1 : (a = !0, console.log("rtl: true"), $(".sf-btn-next, .sf-btn-finish").css({
            "float": "left"
        }), $(".sf-btn-prev").css({
            "float": "right"
        }));
    w1 = $("#wizard_example_1").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a
    });
    w2 = $("#wizard_example_2").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        showNav: "left",
        height: 300
    });
    $("#wizard_example_3").on("sf-loaded", function() {
        $("#events").append($("<div>").text("sf-loaded"))
    });
    w3 = $("#wizard_example_3").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        showNav: "bottom",
        onNext: function(a) {
            $("#events").append($("<div>").text("onNext - from: " + a))
        },
        onPrev: function(a) {
            $("#events").append($("<div>").text("onPrev - from: " + a))
        },
        onFinish: function(a) {
            $("#events").append($("<div>").text("onFinish - from: " + a));
            return !1
        },
        onSlideChanged: function(a) {
            $("#events").append($("<div>").text("onSlideChanged - to: " + a))
        }
    });
    $("#wizard_example_3").on("sf-step-before", function(a, b, c) {
        $("#events").append($("<div>").text("sf-step-before - from: " + b + " to: " + c))
    });
    $("#wizard_example_3").on("sf-finish", function(a, b) {
        $("#events").append($("<div>").text("sf-finish - from: " + b))
    });
    $("#wizard_example_3").on("sf-step-after", function(a, b) {
        $("#events").append($("<div>").text("sf-step-after - to: " + b))
    });
    w4 = $("#wizard_example_4").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        showNav: "right",
        height: "auto",
        nextBtn: $('<a class="next-btn sf-right sf-btn" href="#">FORWARD</a>'),
        prevBtn: $('<a class="prev-btn sf-left sf-btn" href="#">BACK</a>'),
        finishBtn: $('<a class="finish-btn sf-right sf-btn" href="#">DONE</a>'),
        showNavNumbers: !1,
        onFinish: function(a) {
            var b = $("#wizard_example_4").serialize();
            w4.addSpinner("finish");
            setTimeout(function() {
                $.getJSON(yii_site_finis_url, b, function(a) {
                    $("#wizard_example_4-box").html(a.html)
                })
            }, 2E3);
            return !1
        }
    });
    w4_5 = $("#wizard_example_4_5").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        showButtons: !1,
        markPrevSteps: !0
    });
    w5 = $("#wizard_example_5").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a
    });
    w6 = $("#wizard_example_6").stepFormWizard({
		height: "auto",
		showButtons: !1,
        startStep: f,
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        linkNav: "prev",
        onNext: function(a) {
            return $("#wizard_example_6").parsley().validate("block" + a)
        },
        onFinish: function() {
            return $("#wizard_example_6").parsley().validate()
        }
    });
    var c = window.location.hash.match(/^#step-(\d+)/),
        f = 0;
    null !== c && (f = c[1] - 1);
    w7 = $("#wizard_example_7").stepFormWizard({
        theme: b,
        transition: e,
        duration: d,
        rtl: a,
        showButtons: !1,
        startStep: f,
        height: "auto",
        showNavNumbers: !1,
        onNext: function(a) {
            window.location.hash = "#step-" + (a + 2)
        },
        onPrev: function(a) {
            window.location.hash = "#step-" + a
        }
    });
    a &&
        ($(".sf-btn-next, .sf-btn-finish").css({
            "float": "left"
        }), $(".sf-btn-prev").css({
            "float": "right"
        }))
};
$(document).ready(function() {
    prepare_example();
    $("pre code").each(function(b, e) {
        hljs.highlightBlock(e)
    })
});
var hljs = new function() {
    function b(a) {
        return a.replace(/&/gm, "&amp;").replace(/</gm, "&lt;").replace(/>/gm, "&gt;")
    }

    function e(a, b) {
        var c = a && a.exec(b);
        return c && 0 == c.index
    }

    function d(a) {
        return Array.prototype.map.call(a.childNodes, function(a) {
            return 3 == a.nodeType ? H.useBR ? a.nodeValue.replace(/\n/g, "") : a.nodeValue : "br" == a.nodeName.toLowerCase() ? "\n" : d(a)
        }).join("")
    }

    function a(a) {
        a = (a.className + " " + (a.parentNode ? a.parentNode.className : "")).split(/\s+/);
        a = a.map(function(a) {
            return a.replace(/^language-/,
                "")
        });
        return a.filter(function(a) {
            return F(a) || "no-highlight" == a
        })[0]
    }

    function c(a, b) {
        var c = {},
            d;
        for (d in a) c[d] = a[d];
        if (b)
            for (d in b) c[d] = b[d];
        return c
    }

    function f(a) {
        var b = [];
        (function l(a, c) {
            for (var d = a.firstChild; d; d = d.nextSibling) 3 == d.nodeType ? c += d.nodeValue.length : "br" == d.nodeName.toLowerCase() ? c += 1 : 1 == d.nodeType && (b.push({
                event: "start",
                offset: c,
                node: d
            }), c = l(d, c), b.push({
                event: "stop",
                offset: c,
                node: d
            }));
            return c
        })(a, 0);
        return b
    }

    function h(a, c, d) {
        function e() {
            return a.length && c.length ? a[0].offset !=
                c[0].offset ? a[0].offset < c[0].offset ? a : c : "start" == c[0].event ? a : c : a.length ? a : c
        }

        function f(a) {
            q += "<" + a.nodeName.toLowerCase() + Array.prototype.map.call(a.attributes, function(a) {
                return " " + a.nodeName + '="' + b(a.value) + '"'
            }).join("") + ">"
        }

        function k(a) {
            q += "</" + a.nodeName.toLowerCase() + ">"
        }

        function h(a) {
            ("start" == a.event ? f : k)(a.node)
        }
        for (var m = 0, q = "", u = []; a.length || c.length;) {
            var n = e(),
                q = q + b(d.substr(m, n[0].offset - m)),
                m = n[0].offset;
            if (n == a) {
                u.reverse().forEach(k);
                do h(n.splice(0, 1)[0]), n = e(); while (n == a && n.length &&
                    n[0].offset == m);
                u.reverse().forEach(f)
            } else "start" == n[0].event ? u.push(n[0].node) : u.pop(), h(n.splice(0, 1)[0])
        }
        return q + b(d.substr(m))
    }

    function k(a) {
        function b(a) {
            return a && a.source || a
        }

        function d(c, e) {
            return RegExp(b(c), "m" + (a.cI ? "i" : "") + (e ? "g" : ""))
        }

        function e(f, k) {
            if (!f.compiled) {
                f.compiled = !0;
                f.k = f.k || f.bK;
                if (f.k) {
                    var h = function(b, c) {
                            a.cI && (c = c.toLowerCase());
                            c.split(" ").forEach(function(a) {
                                a = a.split("|");
                                m[a[0]] = [b, a[1] ? Number(a[1]) : 1]
                            })
                        },
                        m = {};
                    "string" == typeof f.k ? h("keyword", f.k) : Object.keys(f.k).forEach(function(a) {
                        h(a,
                            f.k[a])
                    });
                    f.k = m
                }
                f.lR = d(f.l || /\b[A-Za-z0-9_]+\b/, !0);
                k && (f.bK && (f.b = f.bK.split(" ").join("|")), f.b || (f.b = /\B|\b/), f.bR = d(f.b), f.e || f.eW || (f.e = /\B|\b/), f.e && (f.eR = d(f.e)), f.tE = b(f.e) || "", f.eW && k.tE && (f.tE += (f.e ? "|" : "") + k.tE));
                f.i && (f.iR = d(f.i));
                void 0 === f.r && (f.r = 1);
                f.c || (f.c = []);
                var q = [];
                f.c.forEach(function(a) {
                    a.v ? a.v.forEach(function(b) {
                        q.push(c(a, b))
                    }) : q.push("self" == a ? f : a)
                });
                f.c = q;
                f.c.forEach(function(a) {
                    e(a, f)
                });
                f.starts && e(f.starts, k);
                var u = f.c.map(function(a) {
                    return a.bK ? "\\.?\\b(" + a.b + ")\\b\\.?" :
                        a.b
                }).concat([f.tE]).concat([f.i]).map(b).filter(Boolean);
                f.t = u.length ? d(u.join("|"), !0) : {
                    exec: function(a) {
                        return null
                    }
                };
                f.continuation = {}
            }
        }
        e(a)
    }

    function m(a, c, d, f) {
        function h(a, b) {
            if (e(a.eR, b)) return a;
            if (a.eW) return h(a.parent, b)
        }

        function v(a, b, c, d) {
            d = '<span class="' + (d ? "" : H.classPrefix);
            return d + (a + '">') + b + (c ? "" : "</span>")
        }

        function u() {
            var a;
            if (void 0 !== n.sL) n.sL && !x[n.sL] ? a = b(E) : (a = n.sL ? m(n.sL, E, !0, n.continuation.top) : q(E), 0 < n.r && (B += a.r), "continuous" == n.subLanguageMode && (n.continuation.top = a.top),
                a = v(a.language, a.value, !1, !0));
            else if (a = b(E), n.k) {
                var c = "",
                    d = 0;
                n.lR.lastIndex = 0;
                for (var e = n.lR.exec(a); e;) {
                    var c = c + a.substr(d, e.index - d),
                        d = n,
                        f = e,
                        f = K.cI ? f[0].toLowerCase() : f[0];
                    (d = d.k.hasOwnProperty(f) && d.k[f]) ? (B += d[1], c += v(d[0], e[0])) : c += e[0];
                    d = n.lR.lastIndex;
                    e = n.lR.exec(a)
                }
                a = c + a.substr(d)
            }
            return a
        }

        function r(a, c) {
            var d = a.cN ? v(a.cN, "", !0) : "";
            a.rB ? (C += d, E = "") : a.eB ? (C += b(c) + d, E = "") : (C += d, E = c);
            n = Object.create(a, {
                parent: {
                    value: n
                }
            })
        }

        function A(a, c) {
            E += a;
            if (void 0 === c) return C += u(), 0;
            var f;
            a: {
                f = n;
                for (var l =
                        0; l < f.c.length; l++)
                    if (e(f.c[l].bR, c)) {
                        f = f.c[l];
                        break a
                    }
                f = void 0
            }
            if (f) return C += u(), r(f, c), f.rB ? 0 : c.length;
            if (f = h(n, c)) {
                l = n;
                l.rE || l.eE || (E += c);
                C += u();
                do n.cN && (C += "</span>"), B += n.r, n = n.parent; while (n != f.parent);
                l.eE && (C += b(c));
                E = "";
                f.starts && r(f.starts, "");
                return l.rE ? 0 : c.length
            }
            if (!d && e(n.iR, c)) throw Error('Illegal lexeme "' + c + '" for mode "' + (n.cN || "<unnamed>") + '"');
            E += c;
            return c.length || 1
        }
        var K = F(a);
        if (!K) throw Error('Unknown language: "' + a + '"');
        k(K);
        var n = f || K,
            C = "";
        for (f = n; f != K; f = f.parent) f.cN &&
            (C = v(f.cN, C, !0));
        var E = "",
            B = 0;
        try {
            for (var fa, W, Z = 0;;) {
                n.t.lastIndex = Z;
                fa = n.t.exec(c);
                if (!fa) break;
                W = A(c.substr(Z, fa.index - Z), fa[0]);
                Z = fa.index + W
            }
            A(c.substr(Z));
            for (f = n; f.parent; f = f.parent) f.cN && (C += "</span>");
            return {
                r: B,
                value: C,
                language: a,
                top: n
            }
        } catch (X) {
            if (-1 != X.message.indexOf("Illegal")) return {
                r: 0,
                value: b(c)
            };
            throw X;
        }
    }

    function q(a, c) {
        c = c || H.languages || Object.keys(x);
        var d = {
                r: 0,
                value: b(a)
            },
            e = d;
        c.forEach(function(b) {
            if (F(b)) {
                var c = m(b, a, !1);
                c.language = b;
                c.r > e.r && (e = c);
                c.r > d.r && (e = d, d = c)
            }
        });
        e.language &&
            (d.second_best = e);
        return d
    }

    function u(a) {
        H.tabReplace && (a = a.replace(/^((<[^>]+>|\t)+)/gm, function(a, b, c, d) {
            return b.replace(/\t/g, H.tabReplace)
        }));
        H.useBR && (a = a.replace(/\n/g, "<br>"));
        return a
    }

    function r(b) {
        var c = d(b),
            e = a(b);
        if ("no-highlight" != e) {
            var l = e ? m(e, c, !0) : q(c),
                k = f(b);
            if (k.length) {
                var v = document.createElementNS("http://www.w3.org/1999/xhtml", "pre");
                v.innerHTML = l.value;
                l.value = h(k, f(v), c)
            }
            l.value = u(l.value);
            b.innerHTML = l.value;
            b.className += " hljs " + (!e && l.language || "");
            b.result = {
                language: l.language,
                re: l.r
            };
            l.second_best && (b.second_best = {
                language: l.second_best.language,
                re: l.second_best.r
            })
        }
    }

    function A() {
        if (!A.called) {
            A.called = !0;
            var a = document.querySelectorAll("pre code");
            Array.prototype.forEach.call(a, r)
        }
    }

    function F(a) {
        return x[a] || x[K[a]]
    }
    var H = {
            classPrefix: "hljs-",
            tabReplace: null,
            useBR: !1,
            languages: void 0
        },
        x = {},
        K = {};
    this.highlight = m;
    this.highlightAuto = q;
    this.fixMarkup = u;
    this.highlightBlock = r;
    this.configure = function(a) {
        H = c(H, a)
    };
    this.initHighlighting = A;
    this.initHighlightingOnLoad = function() {
        addEventListener("DOMContentLoaded",
            A, !1);
        addEventListener("load", A, !1)
    };
    this.registerLanguage = function(a, b) {
        var c = x[a] = b(this);
        c.aliases && c.aliases.forEach(function(b) {
            K[b] = a
        })
    };
    this.getLanguage = F;
    this.inherit = c;
    this.IR = "[a-zA-Z][a-zA-Z0-9_]*";
    this.UIR = "[a-zA-Z_][a-zA-Z0-9_]*";
    this.NR = "\\b\\d+(\\.\\d+)?";
    this.CNR = "(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
    this.BNR = "\\b(0b[01]+)";
    this.RSR = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
    this.BE = {
        b: "\\\\[\\s\\S]",
        r: 0
    };
    this.ASM = {
        cN: "string",
        b: "'",
        e: "'",
        i: "\\n",
        c: [this.BE]
    };
    this.QSM = {
        cN: "string",
        b: '"',
        e: '"',
        i: "\\n",
        c: [this.BE]
    };
    this.CLCM = {
        cN: "comment",
        b: "//",
        e: "$"
    };
    this.CBLCLM = {
        cN: "comment",
        b: "/\\*",
        e: "\\*/"
    };
    this.HCM = {
        cN: "comment",
        b: "#",
        e: "$"
    };
    this.NM = {
        cN: "number",
        b: this.NR,
        r: 0
    };
    this.CNM = {
        cN: "number",
        b: this.CNR,
        r: 0
    };
    this.BNM = {
        cN: "number",
        b: this.BNR,
        r: 0
    };
    this.REGEXP_MODE = {
        cN: "regexp",
        b: /\//,
        e: /\/[gim]*/,
        i: /\n/,
        c: [this.BE, {
            b: /\[/,
            e: /\]/,
            r: 0,
            c: [this.BE]
        }]
    };
    this.TM = {
        cN: "title",
        b: this.IR,
        r: 0
    };
    this.UTM = {
        cN: "title",
        b: this.UIR,
        r: 0
    }
};
hljs.registerLanguage("javascript", function(b) {
    return {
        aliases: ["js"],
        k: {
            keyword: "in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class",
            literal: "true false null undefined NaN Infinity",
            built_in: "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require"
        },
        c: [{
            cN: "pi",
            b: /^\s*('|")use strict('|")/,
            r: 10
        }, b.ASM, b.QSM, b.CLCM, b.CBLCLM, b.CNM, {
            b: "(" + b.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [b.CLCM, b.CBLCLM, b.REGEXP_MODE, {
                b: /</,
                e: />;/,
                r: 0,
                sL: "xml"
            }],
            r: 0
        }, {
            cN: "function",
            bK: "function",
            e: /\{/,
            c: [b.inherit(b.TM, {
                b: /[A-Za-z$_][0-9A-Za-z$_]*/
            }), {
                cN: "params",
                b: /\(/,
                e: /\)/,
                c: [b.CLCM, b.CBLCLM],
                i: /["'\(]/
            }],
            i: /\[|%/
        }, {
            b: /\$[(.]/
        }, {
            b: "\\." + b.IR,
            r: 0
        }]
    }
});
hljs.registerLanguage("css", function(b) {
    var e = {
        cN: "function",
        b: "[a-zA-Z-][a-zA-Z0-9_-]*\\(",
        e: "\\)",
        c: ["self", b.NM, b.ASM, b.QSM]
    };
    return {
        cI: !0,
        i: "[=/|']",
        c: [b.CBLCLM, {
            cN: "id",
            b: "\\#[A-Za-z0-9_-]+"
        }, {
            cN: "class",
            b: "\\.[A-Za-z0-9_-]+",
            r: 0
        }, {
            cN: "attr_selector",
            b: "\\[",
            e: "\\]",
            i: "$"
        }, {
            cN: "pseudo",
            b: ":(:)?[a-zA-Z0-9\\_\\-\\+\\(\\)\\\"\\']+"
        }, {
            cN: "at_rule",
            b: "@(font-face|page)",
            l: "[a-z-]+",
            k: "font-face page"
        }, {
            cN: "at_rule",
            b: "@",
            e: "[{;]",
            c: [{
                cN: "keyword",
                b: /\S+/
            }, {
                b: /\s/,
                eW: !0,
                eE: !0,
                r: 0,
                c: [e, b.ASM, b.QSM,
                    b.NM
                ]
            }]
        }, {
            cN: "tag",
            b: "[a-zA-Z-][a-zA-Z0-9_-]*",
            r: 0
        }, {
            cN: "rules",
            b: "{",
            e: "}",
            i: "[^\\s]",
            r: 0,
            c: [b.CBLCLM, {
                cN: "rule",
                b: "[^\\s]",
                rB: !0,
                e: ";",
                eW: !0,
                c: [{
                    cN: "attribute",
                    b: "[A-Z\\_\\.\\-]+",
                    e: ":",
                    eE: !0,
                    i: "[^\\s]",
                    starts: {
                        cN: "value",
                        eW: !0,
                        eE: !0,
                        c: [e, b.NM, b.QSM, b.ASM, b.CBLCLM, {
                            cN: "hexcolor",
                            b: "#[0-9A-Fa-f]+"
                        }, {
                            cN: "important",
                            b: "!important"
                        }]
                    }
                }]
            }]
        }]
    }
});
hljs.registerLanguage("xml", function(b) {
    b = {
        b: /<\?(php)?(?!\w)/,
        e: /\?>/,
        sL: "php",
        subLanguageMode: "continuous"
    };
    var e = {
        eW: !0,
        i: /</,
        r: 0,
        c: [b, {
            cN: "attribute",
            b: "[A-Za-z0-9\\._:-]+",
            r: 0
        }, {
            b: "=",
            r: 0,
            c: [{
                cN: "value",
                v: [{
                    b: /"/,
                    e: /"/
                }, {
                    b: /'/,
                    e: /'/
                }, {
                    b: /[^\s\/>]+/
                }]
            }]
        }]
    };
    return {
        aliases: ["html"],
        cI: !0,
        c: [{
            cN: "doctype",
            b: "<!DOCTYPE",
            e: ">",
            r: 10,
            c: [{
                b: "\\[",
                e: "\\]"
            }]
        }, {
            cN: "comment",
            b: "\x3c!--",
            e: "--\x3e",
            r: 10
        }, {
            cN: "cdata",
            b: "<\\!\\[CDATA\\[",
            e: "\\]\\]>",
            r: 10
        }, {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: {
                title: "style"
            },
            c: [e],
            starts: {
                e: "</style>",
                rE: !0,
                sL: "css"
            }
        }, {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: {
                title: "script"
            },
            c: [e],
            starts: {
                e: "\x3c/script>",
                rE: !0,
                sL: "javascript"
            }
        }, {
            b: "<%",
            e: "%>",
            sL: "vbscript"
        }, b, {
            cN: "pi",
            b: /<\?\w+/,
            e: /\?>/,
            r: 10
        }, {
            cN: "tag",
            b: "</?",
            e: "/?>",
            c: [{
                cN: "title",
                b: "[^ /><]+",
                r: 0
            }, e]
        }]
    }
});
hljs.registerLanguage("http", function(b) {
    return {
        i: "\\S",
        c: [{
            cN: "status",
            b: "^HTTP/[0-9\\.]+",
            e: "$",
            c: [{
                cN: "number",
                b: "\\b\\d{3}\\b"
            }]
        }, {
            cN: "request",
            b: "^[A-Z]+ (.*?) HTTP/[0-9\\.]+$",
            rB: !0,
            e: "$",
            c: [{
                cN: "string",
                b: " ",
                e: " ",
                eB: !0,
                eE: !0
            }]
        }, {
            cN: "attribute",
            b: "^\\w",
            e: ": ",
            eE: !0,
            i: "\\n|\\s|=",
            starts: {
                cN: "string",
                e: "$"
            }
        }, {
            b: "\\n\\n",
            starts: {
                sL: "",
                eW: !0
            }
        }]
    }
});
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b : b(jQuery)
}(function(b) {
    function e(e) {
        var f = e || window.event,
            h = k.call(arguments, 1),
            m = 0,
            H = 0,
            x = 0,
            K = 0,
            G = 0,
            N = 0;
        if (e = b.event.fix(f), e.type = "mousewheel", "detail" in f && (x = -1 * f.detail), "wheelDelta" in f && (x = f.wheelDelta), "wheelDeltaY" in f && (x = f.wheelDeltaY), "wheelDeltaX" in f && (H = -1 * f.wheelDeltaX), "axis" in f && f.axis === f.HORIZONTAL_AXIS && (H = -1 * x, x = 0), m = 0 === x ? H : x, "deltaY" in f && (x = -1 * f.deltaY, m = x), "deltaX" in
            f && (H = f.deltaX, 0 === x && (m = -1 * H)), 0 !== x || 0 !== H) {
            if (1 === f.deltaMode) var P = b.data(this, "mousewheel-line-height"),
                m = m * P,
                x = x * P,
                H = H * P;
            else 2 === f.deltaMode && (P = b.data(this, "mousewheel-page-height"), m *= P, x *= P, H *= P);
            if (K = Math.max(Math.abs(x), Math.abs(H)), (!c || c > K) && (c = K, q.settings.adjustOldDeltas && "mousewheel" === f.type && 0 === K % 120 && (c /= 40)), q.settings.adjustOldDeltas && "mousewheel" === f.type && 0 === K % 120 && (m /= 40, H /= 40, x /= 40), m = Math[1 <= m ? "floor" : "ceil"](m / c), H = Math[1 <= H ? "floor" : "ceil"](H / c), x = Math[1 <= x ? "floor" : "ceil"](x /
                    c), q.settings.normalizeOffset && this.getBoundingClientRect) f = this.getBoundingClientRect(), G = e.clientX - f.left, N = e.clientY - f.top;
            return e.deltaX = H, e.deltaY = x, e.deltaFactor = c, e.offsetX = G, e.offsetY = N, e.deltaMode = 0, h.unshift(e, m, H, x), a && clearTimeout(a), a = setTimeout(d, 200), (b.event.dispatch || b.event.handle).apply(this, h)
        }
    }

    function d() {
        c = null
    }
    var a, c, f = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        h = "onwheel" in document || 9 <= document.documentMode ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        k = Array.prototype.slice;
    if (b.event.fixHooks)
        for (var m = f.length; m;) b.event.fixHooks[f[--m]] = b.event.mouseHooks;
    var q = b.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var a = h.length; a;) this.addEventListener(h[--a], e, !1);
            else this.onmousewheel = e;
            b.data(this, "mousewheel-line-height", q.getLineHeight(this));
            b.data(this, "mousewheel-page-height", q.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var a = h.length; a;) this.removeEventListener(h[--a],
                    e, !1);
            else this.onmousewheel = null;
            b.removeData(this, "mousewheel-line-height");
            b.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(a) {
            a = b(a);
            var c = a["offsetParent" in b.fn ? "offsetParent" : "parent"]();
            return c.length || (c = b("body")), parseInt(c.css("fontSize"), 10) || parseInt(a.css("fontSize"), 10) || 16
        },
        getPageHeight: function(a) {
            return b(a).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    b.fn.extend({
        mousewheel: function(a) {
            return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
        },
        unmousewheel: function(a) {
            return this.unbind("mousewheel", a)
        }
    })
});
! function(b) {
    "undefined" != typeof module && module.exports ? module.exports = b : b(jQuery, window, document)
}(function(b) {
    ! function(e) {
        var d = "undefined" != typeof module && module.exports,
            a = "https:" == document.location.protocol ? "https:" : "http:";
        "function" == typeof define && define.amd || (d ? require("jquery-mousewheel")(b) : b.event.special.mousewheel || b("head").append(decodeURI("%3Cscript src=" + a + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.12/jquery.mousewheel.min.js%3E%3C/script%3E")));
        e()
    }(function() {
        var e,
            d = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: {
                    enable: !0,
                    scrollAmount: "auto",
                    axis: "y",
                    deltaFactor: "auto",
                    disableOver: ["select", "option", "keygen", "datalist", "textarea"]
                },
                scrollButtons: {
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                keyboard: {
                    enable: !0,
                    scrollType: "stepless",
                    scrollAmount: "auto"
                },
                contentTouchScroll: 25,
                advanced: {
                    autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
                    updateOnContentResize: !0,
                    updateOnImageLoad: !0,
                    autoUpdateTimeout: 60
                },
                theme: "light",
                callbacks: {
                    onTotalScrollOffset: 0,
                    onTotalScrollBackOffset: 0,
                    alwaysTriggerOffsets: !0
                }
            },
            a = 0,
            c = {},
            f = window.attachEvent && !window.addEventListener ? 1 : 0,
            h = !1,
            k = "mCSB_dragger_onDrag mCSB_scrollTools_onDrag mCS_img_loaded mCS_disabled mCS_destroyed mCS_no_scrollbar mCS-autoHide mCS-dir-rtl mCS_no_scrollbar_y mCS_no_scrollbar_x mCS_y_hidden mCS_x_hidden mCSB_draggerContainer mCSB_buttonUp mCSB_buttonDown mCSB_buttonLeft mCSB_buttonRight".split(" "),
            m = {
                init: function(e) {
                    e = b.extend(!0, {}, d, e);
                    var f = q.call(this);
                    if (e.live) {
                        var l = e.liveSelector || this.selector || ".mCustomScrollbar",
                            h = b(l);
                        if ("off" === e.live) return void r(l);
                        c[l] = setTimeout(function() {
                            h.mCustomScrollbar(e);
                            "once" === e.live && h.length && r(l)
                        }, 500)
                    } else r(l);
                    return e.setWidth = e.set_width ? e.set_width : e.setWidth, e.setHeight = e.set_height ? e.set_height : e.setHeight, e.axis = e.horizontalScroll ? "x" : A(e.axis), e.scrollInertia = 0 < e.scrollInertia && 17 > e.scrollInertia ? 17 : e.scrollInertia, "object" != typeof e.mouseWheel &&
                        1 == e.mouseWheel && (e.mouseWheel = {
                            enable: !0,
                            scrollAmount: "auto",
                            axis: "y",
                            preventDefault: !1,
                            deltaFactor: "auto",
                            normalizeDelta: !1,
                            invert: !1
                        }), e.mouseWheel.scrollAmount = e.mouseWheelPixels ? e.mouseWheelPixels : e.mouseWheel.scrollAmount, e.mouseWheel.normalizeDelta = e.advanced.normalizeMouseWheelDelta ? e.advanced.normalizeMouseWheelDelta : e.mouseWheel.normalizeDelta, e.scrollButtons.scrollType = F(e.scrollButtons.scrollType), u(e), b(f).each(function() {
                            var c = b(this);
                            if (!c.data("mCS")) {
                                c.data("mCS", {
                                    idx: ++a,
                                    opt: e,
                                    scrollRatio: {
                                        y: null,
                                        x: null
                                    },
                                    overflowed: null,
                                    contentReset: {
                                        y: null,
                                        x: null
                                    },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: c.css("direction"),
                                    cbOffsets: null,
                                    trigger: null
                                });
                                var d = c.data("mCS"),
                                    f = d.opt,
                                    l = c.data("mcs-axis"),
                                    h = c.data("mcs-scrollbar-position"),
                                    n = c.data("mcs-theme");
                                l && (f.axis = l);
                                h && (f.scrollbarPosition = h);
                                n && (f.theme = n, u(f));
                                var l = b(this),
                                    f = l.data("mCS"),
                                    h = f.opt,
                                    n = h.autoExpandScrollbar ? " " + k[1] + "_expand" : "",
                                    n = ["<div id='mCSB_" + f.idx + "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" + f.idx + "_scrollbar mCS-" +
                                        h.theme + " mCSB_scrollTools_vertical" + n + "'><div class='" + k[12] + "'><div id='mCSB_" + f.idx + "_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>", "<div id='mCSB_" + f.idx + "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" + f.idx + "_scrollbar mCS-" + h.theme + " mCSB_scrollTools_horizontal" + n + "'><div class='" + k[12] + "'><div id='mCSB_" + f.idx + "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"
                                    ],
                                    p = "yx" === h.axis ? "mCSB_vertical_horizontal" : "x" === h.axis ? "mCSB_horizontal" : "mCSB_vertical",
                                    n = "yx" === h.axis ? n[0] + n[1] : "x" === h.axis ? n[1] : n[0],
                                    v = "yx" === h.axis ? "<div id='mCSB_" + f.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                                    ca = h.autoHideScrollbar ? " " + k[6] : "",
                                    C = "x" !== h.axis && "rtl" === f.langDir ? " " + k[7] : "";
                                h.setWidth && l.css("width", h.setWidth);
                                h.setHeight && l.css("height", h.setHeight);
                                h.setLeft = "y" !== h.axis && "rtl" === f.langDir ? "989999px" : h.setLeft;
                                l.addClass("mCustomScrollbar _mCS_" + f.idx +
                                    ca + C).wrapInner("<div id='mCSB_" + f.idx + "' class='mCustomScrollBox mCS-" + h.theme + " " + p + "'><div id='mCSB_" + f.idx + "_container' class='mCSB_container' style='position:relative; top:" + h.setTop + "; left:" + h.setLeft + ";' dir=" + f.langDir + " /></div>");
                                p = b("#mCSB_" + f.idx);
                                ca = b("#mCSB_" + f.idx + "_container");
                                "y" === h.axis || h.advanced.autoExpandHorizontalScroll || ca.css("width", H(ca.children()));
                                "outside" === h.scrollbarPosition ? ("static" === l.css("position") && l.css("position", "relative"), l.css("overflow", "visible"),
                                    p.addClass("mCSB_outside").after(n)) : (p.addClass("mCSB_inside").append(n), ca.wrap(v));
                                h = b(this).data("mCS");
                                l = h.opt;
                                h = b(".mCSB_" + h.idx + "_scrollbar:first");
                                n = ta(l.scrollButtons.tabindex) ? "tabindex='" + l.scrollButtons.tabindex + "'" : "";
                                n = ["<a href='#' class='" + k[13] + "' oncontextmenu='return false;' " + n + " />", "<a href='#' class='" + k[14] + "' oncontextmenu='return false;' " + n + " />", "<a href='#' class='" + k[15] + "' oncontextmenu='return false;' " + n + " />", "<a href='#' class='" + k[16] + "' oncontextmenu='return false;' " +
                                    n + " />"
                                ];
                                n = ["x" === l.axis ? n[2] : n[0], "x" === l.axis ? n[3] : n[1], n[2], n[3]];
                                l.scrollButtons.enable && h.prepend(n[0]).append(n[1]).next(".mCSB_scrollTools").prepend(n[2]).append(n[3]);
                                f = [b("#mCSB_" + f.idx + "_dragger_vertical"), b("#mCSB_" + f.idx + "_dragger_horizontal")];
                                f[0].css("min-height", f[0].height());
                                f[1].css("min-width", f[1].width());
                                b("#mCSB_" + d.idx + "_container img:not(." + k[2] + ")").addClass(k[2]);
                                m.update.call(null, c)
                            }
                        })
                },
                update: function(a, c) {
                    var d = a || q.call(this);
                    return b(d).each(function() {
                        var a = b(this);
                        if (a.data("mCS")) {
                            var d = a.data("mCS"),
                                e = d.opt,
                                l = b("#mCSB_" + d.idx + "_container"),
                                h = [b("#mCSB_" + d.idx + "_dragger_vertical"), b("#mCSB_" + d.idx + "_dragger_horizontal")];
                            if (l.length) {
                                d.tweenRunning && T(a);
                                a.hasClass(k[3]) && a.removeClass(k[3]);
                                a.hasClass(k[4]) && a.removeClass(k[4]);
                                var n = b(this),
                                    t = n.data("mCS"),
                                    t = b("#mCSB_" + t.idx),
                                    p = n.css("max-height") || "none",
                                    m = -1 !== p.indexOf("%"),
                                    v = n.css("box-sizing");
                                "none" !== p && (p = m ? n.parent().height() * parseInt(p) / 100 : parseInt(p), "border-box" === v && (p -= n.innerHeight() - n.height() +
                                    (n.outerHeight() - n.innerHeight())), t.css("max-height", Math.round(p)));
                                t = b(this).data("mCS");
                                n = t.opt;
                                t = b("#mCSB_" + t.idx + "_container");
                                n.advanced.autoExpandHorizontalScroll && "y" !== n.axis && t.css({
                                    position: "absolute",
                                    width: "auto"
                                }).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({
                                    width: Math.ceil(t[0].getBoundingClientRect().right + .4) - Math.floor(t[0].getBoundingClientRect().left),
                                    position: "relative"
                                }).unwrap();
                                "y" === e.axis || e.advanced.autoExpandHorizontalScroll ||
                                    l.css("width", H(l.children()));
                                v = b(this).data("mCS");
                                n = b("#mCSB_" + v.idx);
                                p = b("#mCSB_" + v.idx + "_container");
                                t = null == v.overflowed ? p.height() : p.outerHeight(!1);
                                v = null == v.overflowed ? p.width() : p.outerWidth(!1);
                                n = [t > n.height(), v > n.width()];
                                d.overflowed = n;
                                P.call(this);
                                e.autoDraggerLength && (n = b(this).data("mCS"), t = b("#mCSB_" + n.idx), v = b("#mCSB_" + n.idx + "_container"), n = [b("#mCSB_" + n.idx + "_dragger_vertical"), b("#mCSB_" + n.idx + "_dragger_horizontal")], t = [t.height() / v.outerHeight(!1), t.width() / v.outerWidth(!1)], t = [parseInt(n[0].css("min-height")), Math.round(t[0] * n[0].parent().height()), parseInt(n[1].css("min-width")), Math.round(t[1] * n[1].parent().width())], v = f && t[3] < t[2] ? t[2] : t[3], n[0].css({
                                    height: f && t[1] < t[0] ? t[0] : t[1],
                                    "max-height": n[0].parent().height() - 10
                                }).find(".mCSB_dragger_bar").css({
                                    "line-height": t[0] + "px"
                                }), n[1].css({
                                    width: v,
                                    "max-width": n[1].parent().width() - 10
                                }));
                                n = b(this).data("mCS");
                                v = b("#mCSB_" + n.idx);
                                p = b("#mCSB_" + n.idx + "_container");
                                t = [b("#mCSB_" + n.idx + "_dragger_vertical"), b("#mCSB_" + n.idx + "_dragger_horizontal")];
                                v = [p.outerHeight(!1) - v.height(), p.outerWidth(!1) - v.width()];
                                t = [v[0] / (t[0].parent().height() - t[0].height()), v[1] / (t[1].parent().width() - t[1].width())];
                                n.scrollRatio = {
                                    y: t[0],
                                    x: t[1]
                                };
                                G.call(this);
                                l = [Math.abs(l[0].offsetTop), Math.abs(l[0].offsetLeft)];
                                "x" !== e.axis && (d.overflowed[0] ? h[0].height() > h[0].parent().height() ? K.call(this) : (R(a, l[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                }), d.contentReset.y = null) : (K.call(this), "y" === e.axis ? N.call(this) : "yx" === e.axis && d.overflowed[1] && R(a, l[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                "y" !== e.axis && (d.overflowed[1] ? h[1].width() > h[1].parent().width() ? K.call(this) : (R(a, l[1].toString(), {
                                    dir: "x",
                                    dur: 0,
                                    overwrite: "none"
                                }), d.contentReset.x = null) : (K.call(this), "x" === e.axis ? N.call(this) : "yx" === e.axis && d.overflowed[0] && R(a, l[0].toString(), {
                                    dir: "y",
                                    dur: 0,
                                    overwrite: "none"
                                })));
                                c && d && (2 === c && e.callbacks.onImageLoad && "function" == typeof e.callbacks.onImageLoad ? e.callbacks.onImageLoad.call(this) : 3 === c && e.callbacks.onSelectorChange && "function" == typeof e.callbacks.onSelectorChange ?
                                    e.callbacks.onSelectorChange.call(this) : e.callbacks.onUpdate && "function" == typeof e.callbacks.onUpdate && e.callbacks.onUpdate.call(this));
                                X.call(this)
                            }
                        }
                    })
                },
                scrollTo: function(a, c) {
                    if ("undefined" != typeof a && null != a) {
                        var d = q.call(this);
                        return b(d).each(function() {
                            var d = b(this);
                            if (d.data("mCS")) {
                                var e = d.data("mCS"),
                                    f = e.opt,
                                    l = b.extend(!0, {}, {
                                        trigger: "external",
                                        scrollInertia: f.scrollInertia,
                                        scrollEasing: "mcsEaseInOut",
                                        moveDragger: !1,
                                        timeout: 60,
                                        callbacks: !0,
                                        onStart: !0,
                                        onUpdate: !0,
                                        onComplete: !0
                                    }, c),
                                    h = W.call(this,
                                        a),
                                    k = 0 < l.scrollInertia && 17 > l.scrollInertia ? 17 : l.scrollInertia;
                                h[0] = Z.call(this, h[0], "y");
                                h[1] = Z.call(this, h[1], "x");
                                l.moveDragger && (h[0] *= e.scrollRatio.y, h[1] *= e.scrollRatio.x);
                                l.dur = k;
                                setTimeout(function() {
                                    null !== h[0] && "undefined" != typeof h[0] && "x" !== f.axis && e.overflowed[0] && (l.dir = "y", l.overwrite = "all", R(d, h[0].toString(), l));
                                    null !== h[1] && "undefined" != typeof h[1] && "y" !== f.axis && e.overflowed[1] && (l.dir = "x", l.overwrite = "none", R(d, h[1].toString(), l))
                                }, l.timeout)
                            }
                        })
                    }
                },
                stop: function() {
                    var a = q.call(this);
                    return b(a).each(function() {
                        var a = b(this);
                        a.data("mCS") && T(a)
                    })
                },
                disable: function(a) {
                    var c = q.call(this);
                    return b(c).each(function() {
                        var c = b(this);
                        c.data("mCS") && (c.data("mCS"), X.call(this, "remove"), N.call(this), a && K.call(this), P.call(this, !0), c.addClass(k[3]))
                    })
                },
                destroy: function() {
                    var a = q.call(this);
                    return b(a).each(function() {
                        var c = b(this);
                        if (c.data("mCS")) {
                            var d = c.data("mCS"),
                                e = d.opt,
                                f = b("#mCSB_" + d.idx),
                                l = b("#mCSB_" + d.idx + "_container"),
                                h = b(".mCSB_" + d.idx + "_scrollbar");
                            e.live && r(e.liveSelector ||
                                b(a).selector);
                            X.call(this, "remove");
                            N.call(this);
                            K.call(this);
                            c.removeData("mCS");
                            ra(this, "mcs");
                            h.remove();
                            l.find("img." + k[2]).removeClass(k[2]);
                            f.replaceWith(l.contents());
                            c.removeClass("mCustomScrollbar _mCS_" + d.idx + " " + k[6] + " " + k[7] + " " + k[5] + " " + k[3]).addClass(k[4])
                        }
                    })
                }
            },
            q = function() {
                return "object" != typeof b(this) || 1 > b(this).length ? ".mCustomScrollbar" : this
            },
            u = function(a) {
                a.autoDraggerLength = -1 < b.inArray(a.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"]) ? !1 : a.autoDraggerLength;
                a.autoExpandScrollbar = -1 < b.inArray(a.theme, "rounded-dots rounded-dots-dark 3d 3d-dark 3d-thick 3d-thick-dark inset inset-dark inset-2 inset-2-dark inset-3 inset-3-dark".split(" ")) ? !1 : a.autoExpandScrollbar;
                a.scrollButtons.enable = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? !1 : a.scrollButtons.enable;
                a.autoHideScrollbar = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? !0 : a.autoHideScrollbar;
                a.scrollbarPosition = -1 < b.inArray(a.theme, ["minimal", "minimal-dark"]) ? "outside" : a.scrollbarPosition
            },
            r = function(a) {
                c[a] &&
                    (clearTimeout(c[a]), ra(c, a))
            },
            A = function(a) {
                return "yx" === a || "xy" === a || "auto" === a ? "yx" : "x" === a || "horizontal" === a ? "x" : "y"
            },
            F = function(a) {
                return "stepped" === a || "pixels" === a || "step" === a || "click" === a ? "stepped" : "stepless"
            },
            H = function(a) {
                return Math.max.apply(Math, a.map(function() {
                    return b(this).outerWidth(!0)
                }).get())
            },
            x = function(a, b, c) {
                c = c ? k[0] + "_expanded" : "";
                var d = a.closest(".mCSB_scrollTools");
                "active" === b ? (a.toggleClass(k[0] + " " + c), d.toggleClass(k[1]), a[0]._draggable = a[0]._draggable ? 0 : 1) : a[0]._draggable ||
                    ("hide" === b ? (a.removeClass(k[0]), d.removeClass(k[1])) : (a.addClass(k[0]), d.addClass(k[1])))
            },
            K = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = b("#mCSB_" + c.idx),
                    f = b("#mCSB_" + c.idx + "_container"),
                    l = [b("#mCSB_" + c.idx + "_dragger_vertical"), b("#mCSB_" + c.idx + "_dragger_horizontal")];
                if (T(a), ("x" !== d.axis && !c.overflowed[0] || "y" === d.axis && c.overflowed[0]) && (l[0].add(f).css("top", 0), R(a, "_resetY")), "y" !== d.axis && !c.overflowed[1] || "x" === d.axis && c.overflowed[1]) d = dx = 0, "rtl" === c.langDir && (d = e.width() - f.outerWidth(!1),
                    dx = Math.abs(d / c.scrollRatio.x)), f.css("left", d), l[1].css("left", dx), R(a, "_resetX")
            },
            G = function() {
                function a() {
                    f = setTimeout(function() {
                        b.event.special.mousewheel ? (clearTimeout(f), na.call(c[0])) : a()
                    }, 100)
                }
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt;
                if (!d.bindEvents) {
                    if (p.call(this), e.contentTouchScroll && v.call(this), M.call(this), e.mouseWheel.enable) {
                        var f;
                        a()
                    }
                    qa.call(this);
                    C.call(this);
                    e.advanced.autoScrollOnFocus && n.call(this);
                    e.scrollButtons.enable && E.call(this);
                    e.keyboard.enable && B.call(this);
                    d.bindEvents = !0
                }
            },
            N = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = "mCS_" + c.idx,
                    f = ".mCSB_" + c.idx + "_scrollbar",
                    f = b("#mCSB_" + c.idx + ",#mCSB_" + c.idx + "_container,#mCSB_" + c.idx + "_container_wrapper," + f + " ." + k[12] + ",#mCSB_" + c.idx + "_dragger_vertical,#mCSB_" + c.idx + "_dragger_horizontal," + f + ">a"),
                    l = b("#mCSB_" + c.idx + "_container");
                d.advanced.releaseDraggableSelectors && f.add(b(d.advanced.releaseDraggableSelectors));
                c.bindEvents && (b(document).unbind("." + e), f.each(function() {
                        b(this).unbind("." + e)
                    }), clearTimeout(a[0]._focusTimeout),
                    ra(a[0], "_focusTimeout"), clearTimeout(c.sequential.step), ra(c.sequential, "step"), clearTimeout(l[0].onCompleteTimeout), ra(l[0], "onCompleteTimeout"), c.bindEvents = !1)
            },
            P = function(a) {
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt,
                    f = b("#mCSB_" + d.idx + "_container_wrapper"),
                    f = f.length ? f : b("#mCSB_" + d.idx + "_container"),
                    l = [b("#mCSB_" + d.idx + "_scrollbar_vertical"), b("#mCSB_" + d.idx + "_scrollbar_horizontal")],
                    h = [l[0].find(".mCSB_dragger"), l[1].find(".mCSB_dragger")];
                "x" !== e.axis && (d.overflowed[0] && !a ? (l[0].add(h[0]).add(l[0].children("a")).css("display",
                    "block"), f.removeClass(k[8] + " " + k[10])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && h[0].css("display", "none"), f.removeClass(k[10])) : (l[0].css("display", "none"), f.addClass(k[10])), f.addClass(k[8])));
                "y" !== e.axis && (d.overflowed[1] && !a ? (l[1].add(h[1]).add(l[1].children("a")).css("display", "block"), f.removeClass(k[9] + " " + k[11])) : (e.alwaysShowScrollbar ? (2 !== e.alwaysShowScrollbar && h[1].css("display", "none"), f.removeClass(k[11])) : (l[1].css("display", "none"), f.addClass(k[11])), f.addClass(k[9])));
                d.overflowed[0] || d.overflowed[1] ? c.removeClass(k[5]) : c.addClass(k[5])
            },
            l = function(a) {
                switch (a.type) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return a.target.ownerDocument !== document ? [a.originalEvent.screenY, a.originalEvent.screenX, !1] : [a.originalEvent.pageY, a.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0],
                            c = a.originalEvent.touches.length ||
                            a.originalEvent.changedTouches.length;
                        return a.target.ownerDocument !== document ? [b.screenY, b.screenX, 1 < c] : [b.pageY, b.pageX, 1 < c];
                    default:
                        return [a.pageY, a.pageX, !1]
                }
            },
            p = function() {
                function a(b) {
                    var c = C.find("iframe");
                    c.length && c.css("pointer-events", b ? "auto" : "none")
                }

                function c(a, b, e, f) {
                    if (C[0].idleTimer = 233 > p.scrollInertia ? 250 : 0, d.attr("id") === v[1]) {
                        var l = "x";
                        a = (d[0].offsetLeft - b + f) * n.scrollRatio.x
                    } else l = "y", a = (d[0].offsetTop - a + e) * n.scrollRatio.y;
                    R(g, a.toString(), {
                        dir: l,
                        drag: !0
                    })
                }
                var d, e, k, g = b(this),
                    n = g.data("mCS"),
                    p = n.opt,
                    m = "mCS_" + n.idx,
                    v = ["mCSB_" + n.idx + "_dragger_vertical", "mCSB_" + n.idx + "_dragger_horizontal"],
                    C = b("#mCSB_" + n.idx + "_container"),
                    q = b("#" + v[0] + ",#" + v[1]),
                    M = p.advanced.releaseDraggableSelectors ? q.add(b(p.advanced.releaseDraggableSelectors)) : q;
                q.bind("mousedown." + m + " touchstart." + m + " pointerdown." + m + " MSPointerDown." + m, function(c) {
                    if (c.stopImmediatePropagation(), c.preventDefault(), !c.which || 1 === c.which) {
                        h = !0;
                        f && (document.onselectstart = function() {
                            return !1
                        });
                        a(!1);
                        T(g);
                        d = b(this);
                        var n =
                            d.offset(),
                            m = l(c)[0] - n.top;
                        c = l(c)[1] - n.left;
                        var v = d.height() + n.top,
                            n = d.width() + n.left;
                        v > m && 0 < m && n > c && 0 < c && (e = m, k = c);
                        x(d, "active", p.autoExpandScrollbar)
                    }
                }).bind("touchmove." + m, function(a) {
                    a.stopImmediatePropagation();
                    a.preventDefault();
                    var b = d.offset(),
                        f = l(a)[0] - b.top;
                    a = l(a)[1] - b.left;
                    c(e, k, f, a)
                });
                b(document).bind("mousemove." + m + " pointermove." + m + " MSPointerMove." + m, function(a) {
                    if (d) {
                        var b = d.offset(),
                            f = l(a)[0] - b.top;
                        a = l(a)[1] - b.left;
                        e !== f && c(e, k, f, a)
                    }
                }).add(M).bind("mouseup." + m + " touchend." + m + " pointerup." +
                    m + " MSPointerUp." + m,
                    function(b) {
                        d && (x(d, "active", p.autoExpandScrollbar), d = null);
                        h = !1;
                        f && (document.onselectstart = null);
                        a(!0)
                    })
            },
            v = function() {
                function a(b) {
                    if (!wa(b) || h || l(b)[2]) return void(e = 0);
                    e = 1;
                    F = B = 0;
                    ea.removeClass("mCS_touch_action");
                    var c = K.offset();
                    n = l(b)[0] - c.top;
                    p = l(b)[1] - c.left;
                    W = [l(b)[0], l(b)[1]]
                }

                function c(a) {
                    if (wa(a) && !h && !l(a)[2] && (a.stopImmediatePropagation(), !F || B)) {
                        q = U();
                        var b = H.offset(),
                            d = l(a)[0] - b.top,
                            b = l(a)[1] - b.left;
                        if (fa.push(d), N.push(b), W[2] = Math.abs(l(a)[0] - W[0]), W[3] = Math.abs(l(a)[1] -
                                W[1]), A.overflowed[0]) var e = na[0].parent().height() - na[0].height(),
                            e = 0 < n - d && d - n > -(e * A.scrollRatio.y) && (2 * W[3] < W[2] || "yx" === z.axis);
                        if (A.overflowed[1]) var f = na[1].parent().width() - na[1].width(),
                            f = 0 < p - b && b - p > -(f * A.scrollRatio.x) && (2 * W[2] < W[3] || "yx" === z.axis);
                        e || f ? (a.preventDefault(), B = 1) : (F = 1, ea.addClass("mCS_touch_action"));
                        r = "yx" === z.axis ? [n - d, p - b] : "x" === z.axis ? [null, p - b] : [n - d, null];
                        K[0].idleTimer = 250;
                        A.overflowed[0] && g(r[0], Z, "mcsLinearOut", "y", "all", !0);
                        A.overflowed[1] && g(r[1], Z, "mcsLinearOut",
                            "x", qa, !0)
                    }
                }

                function d(a) {
                    if (!wa(a) || h || l(a)[2]) return void(e = 0);
                    e = 1;
                    a.stopImmediatePropagation();
                    T(ea);
                    C = U();
                    var b = H.offset();
                    m = l(a)[0] - b.top;
                    v = l(a)[1] - b.left;
                    fa = [];
                    N = []
                }

                function f(a) {
                    if (wa(a) && !h && !l(a)[2]) {
                        a.stopImmediatePropagation();
                        F = B = 0;
                        M = U();
                        var b = H.offset(),
                            c = l(a)[0] - b.top,
                            b = l(a)[1] - b.left;
                        if (!(30 < M - q)) {
                            u = 1E3 / (M - C);
                            var d = (a = 2.5 > u) ? [fa[fa.length - 2], N[N.length - 2]] : [0, 0];
                            E = a ? [c - d[0], b - d[1]] : [c - m, b - v];
                            c = [Math.abs(E[0]), Math.abs(E[1])];
                            u = a ? [Math.abs(E[0] / 4), Math.abs(E[1] / 4)] : [u, u];
                            a = [Math.abs(K[0].offsetTop) -
                                E[0] * k(c[0] / u[0], u[0]), Math.abs(K[0].offsetLeft) - E[1] * k(c[1] / u[1], u[1])
                            ];
                            r = "yx" === z.axis ? [a[0], a[1]] : "x" === z.axis ? [null, a[1]] : [a[0], null];
                            x = [4 * c[0] + z.scrollInertia, 4 * c[1] + z.scrollInertia];
                            a = parseInt(z.contentTouchScroll) || 0;
                            r[0] = c[0] > a ? r[0] : 0;
                            r[1] = c[1] > a ? r[1] : 0;
                            A.overflowed[0] && g(r[0], x[0], "mcsEaseOut", "y", qa, !1);
                            A.overflowed[1] && g(r[1], x[1], "mcsEaseOut", "x", qa, !1)
                        }
                    }
                }

                function k(a, b) {
                    var c = [1.5 * b, 2 * b, b / 1.5, b / 2];
                    return 90 < a ? 4 < b ? c[0] : c[3] : 60 < a ? 3 < b ? c[3] : c[2] : 30 < a ? 8 < b ? c[1] : 6 < b ? c[0] : 4 < b ? b : c[2] : 8 < b ? b : c[3]
                }

                function g(a, b, c, d, e, f) {
                    a && R(ea, a.toString(), {
                        dur: b,
                        scrollEasing: c,
                        dir: d,
                        overwrite: e,
                        drag: f
                    })
                }
                var n, p, m, v, C, q, M, E, u, r, x, B, F, ea = b(this),
                    A = ea.data("mCS"),
                    z = A.opt,
                    G = "mCS_" + A.idx,
                    H = b("#mCSB_" + A.idx),
                    K = b("#mCSB_" + A.idx + "_container"),
                    na = [b("#mCSB_" + A.idx + "_dragger_vertical"), b("#mCSB_" + A.idx + "_dragger_horizontal")],
                    fa = [],
                    N = [],
                    Z = 0,
                    qa = "yx" === z.axis ? "none" : "all",
                    W = [],
                    X = K.find("iframe"),
                    P = ["touchstart." + G + " pointerdown." + G + " MSPointerDown." + G, "touchmove." + G + " pointermove." + G + " MSPointerMove." + G, "touchend." +
                        G + " pointerup." + G + " MSPointerUp." + G
                    ];
                K.bind(P[0], function(b) {
                    a(b)
                }).bind(P[1], function(a) {
                    c(a)
                });
                H.bind(P[0], function(a) {
                    d(a)
                }).bind(P[2], function(a) {
                    f(a)
                });
                X.length && X.each(function() {
                    b(this).load(function() {
                        ua(this) && b(this.contentDocument || this.contentWindow.document).bind(P[0], function(b) {
                            a(b);
                            d(b)
                        }).bind(P[1], function(a) {
                            c(a)
                        }).bind(P[2], function(a) {
                            f(a)
                        })
                    })
                })
            },
            M = function() {
                function a(b, e, f) {
                    g.type = f && c ? "stepped" : "stepless";
                    g.scrollAmount = 10;
                    fa(d, b, e, "mcsLinearOut", f ? 60 : null)
                }
                var c, d = b(this),
                    f = d.data("mCS"),
                    k = f.opt,
                    g = f.sequential,
                    n = "mCS_" + f.idx,
                    p = b("#mCSB_" + f.idx + "_container"),
                    m = p.parent();
                p.bind("mousedown." + n, function(a) {
                    e || c || (c = 1, h = !0)
                }).add(document).bind("mousemove." + n, function(b) {
                    if (!e && c && (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text)) {
                        var d = p.offset(),
                            h = l(b)[0] - d.top + p[0].offsetTop;
                        b = l(b)[1] - d.left + p[0].offsetLeft;
                        0 < h && h < m.height() && 0 < b && b < m.width() ? g.step && a("off", null, "stepped") :
                            ("x" !== k.axis && f.overflowed[0] && (0 > h ? a("on", 38) : h > m.height() && a("on", 40)), "y" !== k.axis && f.overflowed[1] && (0 > b ? a("on", 37) : b > m.width() && a("on", 39)))
                    }
                }).bind("mouseup." + n, function(b) {
                    e || (c && (c = 0, a("off", null)), h = !1)
                })
            },
            na = function() {
                function a(l, k) {
                    T(c);
                    var n = c,
                        p = l.target,
                        m = p.nodeName.toLowerCase(),
                        n = n.data("mCS").opt.mouseWheel.disableOver,
                        t = ["select", "textarea"];
                    if (!(-1 < b.inArray(m, n)) || -1 < b.inArray(m, t) && !b(p).is(":focus")) {
                        m = "auto" !== e.mouseWheel.deltaFactor ? parseInt(e.mouseWheel.deltaFactor) : f &&
                            100 > l.deltaFactor ? 100 : l.deltaFactor || 100;
                        if ("x" === e.axis || "x" === e.mouseWheel.axis) var p = "x",
                            m = [Math.round(m * d.scrollRatio.x), parseInt(e.mouseWheel.scrollAmount)],
                            m = "auto" !== e.mouseWheel.scrollAmount ? m[1] : m[0] >= g.width() ? .9 * g.width() : m[0],
                            n = Math.abs(b("#mCSB_" + d.idx + "_container")[0].offsetLeft),
                            t = h[1][0].offsetLeft,
                            v = h[1].parent().width() - h[1].width(),
                            C = l.deltaX || l.deltaY || k;
                        else p = "y", m = [Math.round(m * d.scrollRatio.y), parseInt(e.mouseWheel.scrollAmount)], m = "auto" !== e.mouseWheel.scrollAmount ? m[1] : m[0] >=
                            g.height() ? .9 * g.height() : m[0], n = Math.abs(b("#mCSB_" + d.idx + "_container")[0].offsetTop), t = h[0][0].offsetTop, v = h[0].parent().height() - h[0].height(), C = l.deltaY || k;
                        "y" === p && !d.overflowed[0] || "x" === p && !d.overflowed[1] || ((e.mouseWheel.invert || l.webkitDirectionInvertedFromDevice) && (C = -C), e.mouseWheel.normalizeDelta && (C = 0 > C ? -1 : 1), (0 < C && 0 !== t || 0 > C && t !== v || e.mouseWheel.preventDefault) && (l.stopImmediatePropagation(), l.preventDefault()), R(c, (n - C * m).toString(), {
                            dir: p
                        }))
                    }
                }
                if (b(this).data("mCS")) {
                    var c = b(this),
                        d =
                        c.data("mCS"),
                        e = d.opt,
                        l = "mCS_" + d.idx,
                        g = b("#mCSB_" + d.idx),
                        h = [b("#mCSB_" + d.idx + "_dragger_vertical"), b("#mCSB_" + d.idx + "_dragger_horizontal")],
                        k = b("#mCSB_" + d.idx + "_container").find("iframe");
                    k.length && k.each(function() {
                        b(this).load(function() {
                            ua(this) && b(this.contentDocument || this.contentWindow.document).bind("mousewheel." + l, function(b, c) {
                                a(b, c)
                            })
                        })
                    });
                    g.bind("mousewheel." + l, function(b, c) {
                        a(b, c)
                    })
                }
            },
            ua = function(a) {
                var b = null;
                try {
                    b = (a.contentDocument || a.contentWindow.document).body.innerHTML
                } catch (c) {}
                return null !==
                    b
            },
            qa = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = "mCS_" + c.idx,
                    e = b("#mCSB_" + c.idx + "_container"),
                    f = e.parent();
                b(".mCSB_" + c.idx + "_scrollbar ." + k[12]).bind("touchstart." + d + " pointerdown." + d + " MSPointerDown." + d, function(a) {
                    h = !0
                }).bind("touchend." + d + " pointerup." + d + " MSPointerUp." + d, function(a) {
                    h = !1
                }).bind("click." + d, function(d) {
                    if (b(d.target).hasClass(k[12]) || b(d.target).hasClass("mCSB_draggerRail")) {
                        T(a);
                        var l = b(this),
                            h = l.find(".mCSB_dragger");
                        if (0 < l.parent(".mCSB_scrollTools_horizontal").length) {
                            if (!c.overflowed[1]) return;
                            l = "x";
                            d = d.pageX > h.offset().left ? -1 : 1;
                            d = Math.abs(e[0].offsetLeft) - .9 * d * f.width()
                        } else {
                            if (!c.overflowed[0]) return;
                            l = "y";
                            d = d.pageY > h.offset().top ? -1 : 1;
                            d = Math.abs(e[0].offsetTop) - .9 * d * f.height()
                        }
                        R(a, d.toString(), {
                            dir: l,
                            scrollEasing: "mcsEaseInOut"
                        })
                    }
                })
            },
            n = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = "mCS_" + c.idx,
                    f = b("#mCSB_" + c.idx + "_container"),
                    l = f.parent();
                f.bind("focusin." + e, function(c) {
                    var e = b(document.activeElement);
                    c = f.find(".mCustomScrollBox").length;
                    e.is(d.advanced.autoScrollOnFocus) && (T(a),
                        clearTimeout(a[0]._focusTimeout), a[0]._focusTimer = c ? 17 * c : 0, a[0]._focusTimeout = setTimeout(function() {
                                var b = [Y(e)[0], Y(e)[1]],
                                    c = [f[0].offsetTop, f[0].offsetLeft],
                                    c = [0 <= c[0] + b[0] && c[0] + b[0] < l.height() - e.outerHeight(!1), 0 <= c[1] + b[1] && c[0] + b[1] < l.width() - e.outerWidth(!1)],
                                    h = "yx" !== d.axis || c[0] || c[1] ? "all" : "none";
                                "x" === d.axis || c[0] || R(a, b[0].toString(), {
                                    dir: "y",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: h,
                                    dur: 0
                                });
                                "y" === d.axis || c[1] || R(a, b[1].toString(), {
                                    dir: "x",
                                    scrollEasing: "mcsEaseInOut",
                                    overwrite: h,
                                    dur: 0
                                })
                            },
                            a[0]._focusTimer))
                })
            },
            C = function() {
                var a = b(this).data("mCS"),
                    c = "mCS_" + a.idx,
                    d = b("#mCSB_" + a.idx + "_container").parent();
                d.bind("scroll." + c, function(c) {
                    0 === d.scrollTop() && 0 === d.scrollLeft() || b(".mCSB_" + a.idx + "_scrollbar").css("visibility", "hidden")
                })
            },
            E = function() {
                var a = b(this),
                    c = a.data("mCS"),
                    d = c.opt,
                    e = c.sequential,
                    f = "mCS_" + c.idx;
                b(".mCSB_" + c.idx + "_scrollbar>a").bind("mousedown." + f + " touchstart." + f + " pointerdown." + f + " MSPointerDown." + f + " mouseup." + f + " touchend." + f + " pointerup." + f + " MSPointerUp." + f +
                    " mouseout." + f + " pointerout." + f + " MSPointerOut." + f + " click." + f,
                    function(f) {
                        function l(b, c) {
                            e.scrollAmount = d.snapAmount || d.scrollButtons.scrollAmount;
                            fa(a, b, c)
                        }
                        if (f.preventDefault(), !f.which || 1 === f.which) {
                            var k = b(this).attr("class");
                            switch (e.type = d.scrollButtons.scrollType, f.type) {
                                case "mousedown":
                                case "touchstart":
                                case "pointerdown":
                                case "MSPointerDown":
                                    if ("stepped" === e.type) break;
                                    h = !0;
                                    c.tweenRunning = !1;
                                    l("on", k);
                                    break;
                                case "mouseup":
                                case "touchend":
                                case "pointerup":
                                case "MSPointerUp":
                                case "mouseout":
                                case "pointerout":
                                case "MSPointerOut":
                                    if ("stepped" ===
                                        e.type) break;
                                    h = !1;
                                    e.dir && l("off", k);
                                    break;
                                case "click":
                                    if ("stepped" !== e.type || c.tweenRunning) break;
                                    l("on", k)
                            }
                        }
                    })
            },
            B = function() {
                function a(l) {
                    function g(a, b) {
                        f.type = e.keyboard.scrollType;
                        f.scrollAmount = e.snapAmount || e.keyboard.scrollAmount;
                        "stepped" === f.type && d.tweenRunning || fa(c, a, b)
                    }
                    switch (l.type) {
                        case "blur":
                            d.tweenRunning && f.dir && g("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var h = l.keyCode ? l.keyCode : l.which,
                                m = "on";
                            if ("x" !== e.axis && (38 === h || 40 === h) || "y" !== e.axis && (37 === h || 39 === h)) {
                                if ((38 === h ||
                                        40 === h) && !d.overflowed[0] || (37 === h || 39 === h) && !d.overflowed[1]) break;
                                "keyup" === l.type && (m = "off");
                                b(document.activeElement).is(p) || (l.preventDefault(), l.stopImmediatePropagation(), g(m, h))
                            } else if (33 === h || 34 === h) {
                                if ((d.overflowed[0] || d.overflowed[1]) && (l.preventDefault(), l.stopImmediatePropagation()), "keyup" === l.type) T(c), h = 34 === h ? -1 : 1, "x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (l = "x", h = Math.abs(k[0].offsetLeft) - .9 * h * n.width()) : (l = "y", h = Math.abs(k[0].offsetTop) - .9 * h * n.height()), R(c,
                                    h.toString(), {
                                        dir: l,
                                        scrollEasing: "mcsEaseInOut"
                                    })
                            } else 35 !== h && 36 !== h || b(document.activeElement).is(p) || ((d.overflowed[0] || d.overflowed[1]) && (l.preventDefault(), l.stopImmediatePropagation()), "keyup" !== l.type) || ("x" === e.axis || "yx" === e.axis && d.overflowed[1] && !d.overflowed[0] ? (l = "x", h = 35 === h ? Math.abs(n.width() - k.outerWidth(!1)) : 0) : (l = "y", h = 35 === h ? Math.abs(n.height() - k.outerHeight(!1)) : 0), R(c, h.toString(), {
                                dir: l,
                                scrollEasing: "mcsEaseInOut"
                            }))
                    }
                }
                var c = b(this),
                    d = c.data("mCS"),
                    e = d.opt,
                    f = d.sequential,
                    l = "mCS_" +
                    d.idx,
                    h = b("#mCSB_" + d.idx),
                    k = b("#mCSB_" + d.idx + "_container"),
                    n = k.parent(),
                    p = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    m = k.find("iframe"),
                    v = ["blur." + l + " keydown." + l + " keyup." + l];
                m.length && m.each(function() {
                    b(this).load(function() {
                        ua(this) && b(this.contentDocument || this.contentWindow.document).bind(v[0], function(b) {
                            a(b)
                        })
                    })
                });
                h.attr("tabindex", "0").bind(v[0], function(b) {
                    a(b)
                })
            },
            fa = function(a, c, d, e, f) {
                function l(b) {
                    var c = "stepped" !== p.type,
                        d = f ? f : b ? c ? C / 1.5 : q : 1E3 / 60,
                        k = b ? c ? 7.5 : 40 : 2.5,
                        n = [Math.abs(m[0].offsetTop), Math.abs(m[0].offsetLeft)],
                        v = [10 < h.scrollRatio.y ? 10 : h.scrollRatio.y, 10 < h.scrollRatio.x ? 10 : h.scrollRatio.x],
                        k = "x" === p.dir[0] ? n[1] + p.dir[1] * v[1] * k : n[0] + p.dir[1] * v[0] * k,
                        v = "x" === p.dir[0] ? n[1] + p.dir[1] * parseInt(p.scrollAmount) : n[0] + p.dir[1] * parseInt(p.scrollAmount),
                        k = "auto" !== p.scrollAmount ? v : k,
                        c = e ? e : b ? c ? "mcsLinearOut" : "mcsEaseInOut" : "mcsLinear";
                    return b && 17 > d && (k = "x" === p.dir[0] ? n[1] : n[0]), R(a, k.toString(), {
                        dir: p.dir[0],
                        scrollEasing: c,
                        dur: d,
                        onComplete: b ? !0 : !1
                    }), b ? void(p.dir = !1) : (clearTimeout(p.step), void(p.step = setTimeout(function() {
                        l()
                    }, d)))
                }
                var h = a.data("mCS"),
                    n = h.opt,
                    p = h.sequential,
                    m = b("#mCSB_" + h.idx + "_container"),
                    v = "stepped" === p.type ? !0 : !1,
                    C = 26 > n.scrollInertia ? 26 : n.scrollInertia,
                    q = 1 > n.scrollInertia ? 17 : n.scrollInertia;
                switch (c) {
                    case "on":
                        if (p.dir = [d === k[16] || d === k[15] || 39 === d || 37 === d ? "x" : "y", d === k[13] || d === k[15] || 38 === d || 37 === d ? -1 : 1], T(a), ta(d) && "stepped" === p.type) break;
                        l(v);
                        break;
                    case "off":
                        clearTimeout(p.step), ra(p, "step"), T(a), (v || h.tweenRunning && p.dir) && l(!0)
                }
            },
            W = function(a) {
                var c = b(this).data("mCS").opt,
                    d = [];
                return "function" == typeof a && (a = a()), a instanceof Array ? d = 1 < a.length ? [a[0], a[1]] : "x" === c.axis ? [null, a[0]] : [a[0], null] : (d[0] = a.y ? a.y : a.x || "x" === c.axis ? null : a, d[1] = a.x ? a.x : a.y || "y" === c.axis ? null : a), "function" == typeof d[0] && (d[0] = d[0]()), "function" == typeof d[1] && (d[1] = d[1]()), d
            },
            Z = function(a, c) {
                if (null != a && "undefined" != typeof a) {
                    var d = b(this),
                        e = d.data("mCS"),
                        f = e.opt,
                        e = b("#mCSB_" + e.idx + "_container"),
                        l = e.parent(),
                        h = typeof a;
                    c || (c = "x" === f.axis ? "x" : "y");
                    var f =
                        "x" === c ? e.outerWidth(!1) : e.outerHeight(!1),
                        k = "x" === c ? e[0].offsetLeft : e[0].offsetTop,
                        n = "x" === c ? "left" : "top";
                    switch (h) {
                        case "function":
                            return a();
                        case "object":
                            d = a.jquery ? a : b(a);
                            if (!d.length) break;
                            return "x" === c ? Y(d)[1] : Y(d)[0];
                        case "string":
                        case "number":
                            return ta(a) ? Math.abs(a) : -1 !== a.indexOf("%") ? Math.abs(f * parseInt(a) / 100) : -1 !== a.indexOf("-=") ? Math.abs(k - parseInt(a.split("-=")[1])) : -1 !== a.indexOf("+=") ? (d = k + parseInt(a.split("+=")[1]), 0 <= d ? 0 : Math.abs(d)) : -1 !== a.indexOf("px") && ta(a.split("px")[0]) ?
                                Math.abs(a.split("px")[0]) : "top" === a || "left" === a ? 0 : "bottom" === a ? Math.abs(l.height() - e.outerHeight(!1)) : "right" === a ? Math.abs(l.width() - e.outerWidth(!1)) : "first" === a || "last" === a ? (d = e.find(":" + a), "x" === c ? Y(d)[1] : Y(d)[0]) : b(a).length ? "x" === c ? Y(b(a))[1] : Y(b(a))[0] : (e.css(n, a), void m.update.call(null, d[0]))
                    }
                }
            },
            X = function(a) {
                function c() {
                    return clearTimeout(v[0].autoUpdate), 0 === h.parents("html").length ? void(h = null) : void(v[0].autoUpdate = setTimeout(function() {
                        return p.advanced.updateOnSelectorChange && (C = f(),
                            C !== x) ? (l(3), void(x = C)) : (p.advanced.updateOnContentResize && (q = [v.outerHeight(!1), v.outerWidth(!1), M.height(), M.width(), r()[0], r()[1]], (q[0] !== B[0] || q[1] !== B[1] || q[2] !== B[2] || q[3] !== B[3] || q[4] !== B[4] || q[5] !== B[5]) && (l(q[0] !== B[0] || q[1] !== B[1]), B = q)), p.advanced.updateOnImageLoad && (E = d(), E !== A && (v.find("img").each(function() {
                            e(this)
                        }), A = E)), void((p.advanced.updateOnSelectorChange || p.advanced.updateOnContentResize || p.advanced.updateOnImageLoad) && c()))
                    }, p.advanced.autoUpdateTimeout))
                }

                function d() {
                    var a =
                        0;
                    return p.advanced.updateOnImageLoad && (a = v.find("img").length), a
                }

                function e(a) {
                    if (b(a).hasClass(k[2])) return void l();
                    var c = new Image;
                    c.onload = function(a, b) {
                        return function() {
                            return b.apply(a, arguments)
                        }
                    }(c, function() {
                        this.onload = null;
                        b(a).addClass(k[2]);
                        l(2)
                    });
                    c.src = a.src
                }

                function f() {
                    !0 === p.advanced.updateOnSelectorChange && (p.advanced.updateOnSelectorChange = "*");
                    var a = 0,
                        c = v.find(p.advanced.updateOnSelectorChange);
                    return p.advanced.updateOnSelectorChange && 0 < c.length && c.each(function() {
                        a += b(this).height() +
                            b(this).width()
                    }), a
                }

                function l(a) {
                    clearTimeout(v[0].autoUpdate);
                    m.update.call(null, h[0], a)
                }
                var h = b(this),
                    n = h.data("mCS"),
                    p = n.opt,
                    v = b("#mCSB_" + n.idx + "_container");
                if (a) return clearTimeout(v[0].autoUpdate), void ra(v[0], "autoUpdate");
                var C, q, E, M = v.parent(),
                    u = [b("#mCSB_" + n.idx + "_scrollbar_vertical"), b("#mCSB_" + n.idx + "_scrollbar_horizontal")],
                    r = function() {
                        return [u[0].is(":visible") ? u[0].outerHeight(!0) : 0, u[1].is(":visible") ? u[1].outerWidth(!0) : 0]
                    },
                    x = f(),
                    B = [v.outerHeight(!1), v.outerWidth(!1), M.height(),
                        M.width(), r()[0], r()[1]
                    ],
                    A = d();
                c()
            },
            va = function(a, b, c) {
                return Math.round(a / b) * b - c
            },
            T = function(a) {
                a = a.data("mCS");
                b("#mCSB_" + a.idx + "_container,#mCSB_" + a.idx + "_container_wrapper,#mCSB_" + a.idx + "_dragger_vertical,#mCSB_" + a.idx + "_dragger_horizontal").each(function() {
                    this._mTween || (this._mTween = {
                        top: {},
                        left: {}
                    });
                    for (var a = ["top", "left"], b = 0; b < a.length; b++) {
                        var c = a[b];
                        this._mTween[c].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[c].id) : clearTimeout(this._mTween[c].id), this._mTween[c].id =
                            null, this._mTween[c].stop = 1)
                    }
                })
            },
            R = function(a, c, d) {
                function e(a) {
                    return l && h.callbacks[a] && "function" == typeof h.callbacks[a]
                }

                function f() {
                    var b = [p[0].offsetTop, p[0].offsetLeft],
                        c = [q[0].offsetTop, q[0].offsetLeft],
                        e = [p.outerHeight(!1), p.outerWidth(!1)],
                        l = [n.height(), n.width()];
                    a[0].mcs = {
                        content: p,
                        top: b[0],
                        left: b[1],
                        draggerTop: c[0],
                        draggerLeft: c[1],
                        topPct: Math.round(100 * Math.abs(b[0]) / (Math.abs(e[0]) - l[0])),
                        leftPct: Math.round(100 * Math.abs(b[1]) / (Math.abs(e[1]) - l[1])),
                        direction: d.dir
                    }
                }
                var l = a.data("mCS"),
                    h = l.opt;
                d = b.extend({
                    trigger: "internal",
                    dir: "y",
                    scrollEasing: "mcsEaseOut",
                    drag: !1,
                    dur: h.scrollInertia,
                    overwrite: "all",
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0
                }, d);
                var k = [d.dur, d.drag ? 0 : d.dur],
                    n = b("#mCSB_" + l.idx),
                    p = b("#mCSB_" + l.idx + "_container"),
                    m = p.parent(),
                    v = h.callbacks.onTotalScrollOffset ? W.call(a, h.callbacks.onTotalScrollOffset) : [0, 0],
                    C = h.callbacks.onTotalScrollBackOffset ? W.call(a, h.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (l.trigger = d.trigger, (0 !== m.scrollTop() || 0 !== m.scrollLeft()) &&
                    (b(".mCSB_" + l.idx + "_scrollbar").css("visibility", "visible"), m.scrollTop(0).scrollLeft(0)), "_resetY" !== c || l.contentReset.y || (e("onOverflowYNone") && h.callbacks.onOverflowYNone.call(a[0]), l.contentReset.y = 1), "_resetX" !== c || l.contentReset.x || (e("onOverflowXNone") && h.callbacks.onOverflowXNone.call(a[0]), l.contentReset.x = 1), "_resetY" !== c && "_resetX" !== c) {
                    switch (!l.contentReset.y && a[0].mcs || !l.overflowed[0] || (e("onOverflowY") && h.callbacks.onOverflowY.call(a[0]), l.contentReset.x = null), !l.contentReset.x && a[0].mcs ||
                        !l.overflowed[1] || (e("onOverflowX") && h.callbacks.onOverflowX.call(a[0]), l.contentReset.x = null), h.snapAmount && (c = va(c, h.snapAmount, h.snapOffset)), d.dir) {
                        case "x":
                            var q = b("#mCSB_" + l.idx + "_dragger_horizontal"),
                                E = "left",
                                M = p[0].offsetLeft,
                                u = [n.width() - p.outerWidth(!1), q.parent().width() - q.width()],
                                r = [c, 0 === c ? 0 : c / l.scrollRatio.x],
                                B = v[1],
                                A = C[1],
                                F = 0 < B ? B / l.scrollRatio.x : 0,
                                z = 0 < A ? A / l.scrollRatio.x : 0;
                            break;
                        case "y":
                            q = b("#mCSB_" + l.idx + "_dragger_vertical"), E = "top", M = p[0].offsetTop, u = [n.height() - p.outerHeight(!1),
                                q.parent().height() - q.height()
                            ], r = [c, 0 === c ? 0 : c / l.scrollRatio.y], B = v[0], A = C[0], F = 0 < B ? B / l.scrollRatio.y : 0, z = 0 < A ? A / l.scrollRatio.y : 0
                    }
                    0 > r[1] || 0 === r[0] && 0 === r[1] ? r = [0, 0] : r[1] >= u[1] ? r = [u[0], u[1]] : r[0] = -r[0];
                    a[0].mcs || (f(), e("onInit") && h.callbacks.onInit.call(a[0]));
                    clearTimeout(p[0].onCompleteTimeout);
                    !l.tweenRunning && (0 === M && 0 <= r[0] || M === u[0] && r[0] <= u[0]) || (ga(q[0], E, Math.round(r[1]), k[1], d.scrollEasing), ga(p[0], E, Math.round(r[0]), k[0], d.scrollEasing, d.overwrite, {
                        onStart: function() {
                            d.callbacks && d.onStart &&
                                !l.tweenRunning && (e("onScrollStart") && (f(), h.callbacks.onScrollStart.call(a[0])), l.tweenRunning = !0, x(q), l.cbOffsets = [h.callbacks.alwaysTriggerOffsets || M >= u[0] + B, h.callbacks.alwaysTriggerOffsets || -A >= M])
                        },
                        onUpdate: function() {
                            d.callbacks && d.onUpdate && e("whileScrolling") && (f(), h.callbacks.whileScrolling.call(a[0]))
                        },
                        onComplete: function() {
                            d.callbacks && d.onComplete && ("yx" === h.axis && clearTimeout(p[0].onCompleteTimeout), p[0].onCompleteTimeout = setTimeout(function() {
                                e("onScroll") && (f(), h.callbacks.onScroll.call(a[0]));
                                e("onTotalScroll") && r[1] >= u[1] - F && l.cbOffsets[0] && (f(), h.callbacks.onTotalScroll.call(a[0]));
                                e("onTotalScrollBack") && r[1] <= z && l.cbOffsets[1] && (f(), h.callbacks.onTotalScrollBack.call(a[0]));
                                l.tweenRunning = !1;
                                p[0].idleTimer = 0;
                                x(q, "hide")
                            }, p[0].idleTimer || 0))
                        }
                    }))
                }
            },
            ga = function(a, b, c, d, e, f, l) {
                function h() {
                    B.stop || (r || v.call(), r = U() - M, k(), r >= B.time && (B.time = r > B.time ? r + p - (r - B.time) : r + p - 1, B.time < r + 1 && (B.time = r + 1)), B.time < d ? B.id = m(h) : q.call())
                }

                function k() {
                    0 < d ? (B.currVal = n(B.time, E, x, d, e), u[b] = Math.round(B.currVal) +
                        "px") : u[b] = c + "px";
                    C.call()
                }

                function n(a, b, c, d, e) {
                    switch (e) {
                        case "linear":
                        case "mcsLinear":
                            return c * a / d + b;
                        case "mcsLinearOut":
                            return a /= d, a--, c * Math.sqrt(1 - a * a) + b;
                        case "easeInOutSmooth":
                            return a /= d / 2, 1 > a ? c / 2 * a * a + b : (a--, -c / 2 * (a * (a - 2) - 1) + b);
                        case "easeInOutStrong":
                            return a /= d / 2, 1 > a ? c / 2 * Math.pow(2, 10 * (a - 1)) + b : (a--, c / 2 * (-Math.pow(2, -10 * a) + 2) + b);
                        case "easeInOut":
                        case "mcsEaseInOut":
                            return a /= d / 2, 1 > a ? c / 2 * a * a * a + b : (a -= 2, c / 2 * (a * a * a + 2) + b);
                        case "easeOutSmooth":
                            return a /= d, a--, -c * (a * a * a * a - 1) + b;
                        case "easeOutStrong":
                            return c *
                                (-Math.pow(2, -10 * a / d) + 1) + b;
                        default:
                            return d = (a /= d) * a, e = d * a, b + c * (.499999999999997 * e * d + -2.5 * d * d + 5.5 * e + -6.5 * d + 4 * a)
                    }
                }
                a._mTween || (a._mTween = {
                    top: {},
                    left: {}
                });
                var p, m;
                l = l || {};
                var v = l.onStart || function() {},
                    C = l.onUpdate || function() {},
                    q = l.onComplete || function() {},
                    M = U(),
                    r = 0,
                    E = a.offsetTop,
                    u = a.style,
                    B = a._mTween[b];
                "left" === b && (E = a.offsetLeft);
                var x = c - E;
                B.stop = 0;
                "none" !== f && null != B.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(B.id) : clearTimeout(B.id), B.id = null);
                (function() {
                    p = 1E3 / 60;
                    B.time = r + p;
                    m = window.requestAnimationFrame ? window.requestAnimationFrame : function(a) {
                        return k(), setTimeout(a, .01)
                    };
                    B.id = m(h)
                })()
            },
            U = function() {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : (new Date).getTime()
            },
            ra = function(a, b) {
                try {
                    delete a[b]
                } catch (c) {
                    a[b] = null
                }
            },
            wa = function(a) {
                a = a.originalEvent.pointerType;
                return !(a && "touch" !== a && 2 !== a)
            },
            ta = function(a) {
                return !isNaN(parseFloat(a)) &&
                    isFinite(a)
            },
            Y = function(a) {
                var b = a.parents(".mCSB_container");
                return [a.offset().top - b.offset().top, a.offset().left - b.offset().left]
            };
        b.fn.mCustomScrollbar = function(a) {
            return m[a] ? m[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void b.error("Method " + a + " does not exist") : m.init.apply(this, arguments)
        };
        b.mCustomScrollbar = function(a) {
            return m[a] ? m[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void b.error("Method " + a + " does not exist") : m.init.apply(this,
                arguments)
        };
        b.mCustomScrollbar.defaults = d;
        window.mCustomScrollbar = !0;
        b(window).load(function() {
            b(".mCustomScrollbar").mCustomScrollbar();
            b.extend(b.expr[":"], {
                mcsInView: b.expr[":"].mcsInView || function(a) {
                    var c, d;
                    a = b(a);
                    var e = a.parents(".mCSB_container");
                    if (e.length) return c = e.parent(), d = [e[0].offsetTop, e[0].offsetLeft], 0 <= d[0] + Y(a)[0] && d[0] + Y(a)[0] < c.height() - a.outerHeight(!1) && 0 <= d[1] + Y(a)[1] && d[1] + Y(a)[1] < c.width() - a.outerWidth(!1)
                },
                mcsOverflow: b.expr[":"].mcsOverflow || function(a) {
                    if (a = b(a).data("mCS")) return a.overflowed[0] ||
                        a.overflowed[1]
                }
            })
        })
    })
});
! function(b) {
    var e = function(d, a) {
        this.$form = b(d);
        this.options = b.extend({}, b.fn.bootstrapValidator.DEFAULT_OPTIONS, a);
        this.$invalidFields = b([]);
        this.$hiddenButton = this.$submitButton = null;
        this.STATUS_NOT_VALIDATED = "NOT_VALIDATED";
        this.STATUS_VALIDATING = "VALIDATING";
        this.STATUS_INVALID = "INVALID";
        this.STATUS_VALID = "VALID";
        var c;
        c = 3;
        for (var e = document.createElement("div"), h = e.all || []; e.innerHTML = "\x3c!--[if gt IE " + ++c + "]><br><![endif]--\x3e", h[0];);
        c = 4 < c ? c : !c;
        e = document.createElement("div");
        this._changeEvent =
            9 !== c && "oninput" in e ? "input" : "keyup";
        this._submitIfValid = null;
        this._cacheFields = {};
        this._init()
    };
    e.prototype = {
        constructor: e,
        _init: function() {
            var d = this,
                a = {
                    excluded: this.$form.attr("data-bv-excluded"),
                    trigger: this.$form.attr("data-bv-trigger"),
                    message: this.$form.attr("data-bv-message"),
                    container: this.$form.attr("data-bv-container"),
                    group: this.$form.attr("data-bv-group"),
                    submitButtons: this.$form.attr("data-bv-submitbuttons"),
                    threshold: this.$form.attr("data-bv-threshold"),
                    live: this.$form.attr("data-bv-live"),
                    onSuccess: this.$form.attr("data-bv-onsuccess"),
                    onError: this.$form.attr("data-bv-onerror"),
                    fields: {},
                    feedbackIcons: {
                        valid: this.$form.attr("data-bv-feedbackicons-valid"),
                        invalid: this.$form.attr("data-bv-feedbackicons-invalid"),
                        validating: this.$form.attr("data-bv-feedbackicons-validating")
                    },
                    events: {
                        formInit: this.$form.attr("data-bv-events-form-init"),
                        formError: this.$form.attr("data-bv-events-form-error"),
                        formSuccess: this.$form.attr("data-bv-events-form-success"),
                        fieldAdded: this.$form.attr("data-bv-events-field-added"),
                        fieldRemoved: this.$form.attr("data-bv-events-field-removed"),
                        fieldInit: this.$form.attr("data-bv-events-field-init"),
                        fieldError: this.$form.attr("data-bv-events-field-error"),
                        fieldSuccess: this.$form.attr("data-bv-events-field-success"),
                        fieldStatus: this.$form.attr("data-bv-events-field-status"),
                        validatorError: this.$form.attr("data-bv-events-validator-error"),
                        validatorSuccess: this.$form.attr("data-bv-events-validator-success")
                    }
                };
            this.$form.attr("novalidate", "novalidate").addClass(this.options.elementClass).on("submit.bv",
                function(a) {
                    a.preventDefault();
                    d.validate()

                }).on("click.bv", this.options.submitButtons, function() {
                d.$submitButton = b(this);
                d._submitIfValid = !0
            }).find("[name], [data-bv-field]").each(function() {
                var c = b(this),
                    e = c.attr("name") || c.attr("data-bv-field"),
                    k = d._parseOptions(c);
                k && (c.attr("data-bv-field", e), a.fields[e] = b.extend({}, k, a.fields[e]))
            });
            this.options = b.extend(!0, this.options, a);
            this.$hiddenButton = b("<button/>").attr("type", "submit").prependTo(this.$form).addClass("bv-hidden-submit").css({
                display: "none",
                width: 0,
                height: 0
            });
            this.$form.on("click.bv", '[type="submit"]', function(a) {
                a = b(a.target).eq(0);
                !d.options.submitButtons || a.is(d.options.submitButtons) || a.is(d.$hiddenButton) || d.$form.off("submit.bv").submit()
            });
            for (var c in this.options.fields) this._initField(c);
            this.$form.trigger(b.Event(this.options.events.formInit), {
                bv: this,
                options: this.options
            });
            this.options.onSuccess && this.$form.on(this.options.events.formSuccess, function(a) {
                b.fn.bootstrapValidator.helpers.call(d.options.onSuccess, [a])
            });
            this.options.onError &&
                this.$form.on(this.options.events.formError, function(a) {
                    b.fn.bootstrapValidator.helpers.call(d.options.onError, [a])
                })
        },
        _parseOptions: function(d) {
            var a, c, e, h, k, m, q, u = d.attr("name") || d.attr("data-bv-field"),
                r = {};
            for (c in b.fn.bootstrapValidator.validators)
                if (a = b.fn.bootstrapValidator.validators[c], e = d.attr("data-bv-" + c.toLowerCase()) + "", q = "function" == typeof a.enableByHtml5 ? a.enableByHtml5(d) : null, q && "false" !== e || !0 !== q && ("" === e || "true" === e))
                    for (m in a.html5Attributes = b.extend({}, {
                            message: "message",
                            onerror: "onError",
                            onsuccess: "onSuccess"
                        }, a.html5Attributes), r[c] = b.extend({}, !0 === q ? {} : q, r[c]), a.html5Attributes) h = a.html5Attributes[m], (k = d.attr("data-bv-" + c.toLowerCase() + "-" + m)) && ("true" === k ? k = !0 : "false" === k && (k = !1), r[c][h] = k);
            d = {
                excluded: d.attr("data-bv-excluded"),
                feedbackIcons: d.attr("data-bv-feedbackicons"),
                trigger: d.attr("data-bv-trigger"),
                message: d.attr("data-bv-message"),
                container: d.attr("data-bv-container"),
                group: d.attr("data-bv-group"),
                selector: d.attr("data-bv-selector"),
                threshold: d.attr("data-bv-threshold"),
                onStatus: d.attr("data-bv-onstatus"),
                onSuccess: d.attr("data-bv-onsuccess"),
                onError: d.attr("data-bv-onerror"),
                validators: r
            };
            a = b.isEmptyObject(d);
            return !b.isEmptyObject(r) || !a && this.options.fields && this.options.fields[u] ? (d.validators = r, d) : null
        },
        _initField: function(d) {
            var a = b([]);
            switch (typeof d) {
                case "object":
                    a = d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(d), a.attr("data-bv-field", d)
            }
            if (null !== this.options.fields[d] && null !== this.options.fields[d].validators) {
                if (0 === a.length) return void delete this.options.fields[d];
                for (var c in this.options.fields[d].validators) b.fn.bootstrapValidator.validators[c] || delete this.options.fields[d].validators[c];
                null === this.options.fields[d].enabled && (this.options.fields[d].enabled = !0);
                for (var e = this, h = a.length, k = a.attr("type"), m = 1 === h || "radio" === k || "checkbox" === k, q = "radio" === k || "checkbox" === k || "file" === k || "SELECT" === a.eq(0).get(0).tagName ? "change" : this._changeEvent, q = (this.options.fields[d].trigger || this.options.trigger || q).split(" "), u = b.map(q, function(a) {
                            return a + ".update.bv"
                        }).join(" "),
                        r = 0; h > r; r++) {
                    var A = a.eq(r),
                        F = this.options.fields[d].group || this.options.group,
                        H = A.parents(F),
                        x = this.options.fields[d].container || this.options.container,
                        F = x && "tooltip" !== x && "popover" !== x ? b(x) : this._getMessageContainer(A, F);
                    x && "tooltip" !== x && "popover" !== x && F.addClass("has-error");
                    F.find('.help-block[data-bv-validator][data-bv-for="' + d + '"]').remove();
                    H.find('i[data-bv-icon-for="' + d + '"]').remove();
                    A.off(u).on(u, function() {
                        e.updateStatus(b(this), e.STATUS_NOT_VALIDATED)
                    });
                    A.data("bv.messages", F);
                    for (c in this.options.fields[d].validators) A.data("bv.result." +
                        c, this.STATUS_NOT_VALIDATED), m && r !== h - 1 || b("<small/>").css("display", "none").addClass("help-block").attr("data-bv-validator", c).attr("data-bv-for", d).attr("data-bv-result", this.STATUS_NOT_VALIDATED).html(this._getMessage(d, c)).appendTo(F), this.options.fields[d].validators[c].onSuccess && A.on(this.options.events.validatorSuccess, function(a, h) {
                        b.fn.bootstrapValidator.helpers.call(e.options.fields[d].validators[c].onSuccess, [a, h])
                    }), this.options.fields[d].validators[c].onError && A.on(this.options.events.validatorError,
                        function(a, h) {
                            b.fn.bootstrapValidator.helpers.call(e.options.fields[d].validators[c].onError, [a, h])
                        });
                    if (!1 !== this.options.fields[d].feedbackIcons && "false" !== this.options.fields[d].feedbackIcons && this.options.feedbackIcons && this.options.feedbackIcons.validating && this.options.feedbackIcons.invalid && this.options.feedbackIcons.valid && (!m || r === h - 1)) {
                        H.removeClass("has-success").removeClass("has-error").addClass("has-feedback");
                        x = b("<i/>").css("display", "none").addClass("form-control-feedback").attr("data-bv-icon-for",
                            d).insertAfter(A);
                        if ("checkbox" === k || "radio" === k) A = A.parent(), A.hasClass(k) ? x.insertAfter(A) : A.parent().hasClass(k) && x.insertAfter(A.parent());
                        0 === H.find("label").length && x.css("top", 0);
                        0 !== H.find(".input-group").length && x.css({
                            top: 0,
                            "z-index": 100
                        }).insertAfter(H.find(".input-group").eq(0))
                    }
                }
                switch (this.options.fields[d].onSuccess && a.on(this.options.events.fieldSuccess, function(a, c) {
                    b.fn.bootstrapValidator.helpers.call(e.options.fields[d].onSuccess, [a, c])
                }), this.options.fields[d].onError && a.on(this.options.events.fieldError,
                    function(a, c) {
                        b.fn.bootstrapValidator.helpers.call(e.options.fields[d].onError, [a, c])
                    }), this.options.fields[d].onStatus && a.on(this.options.events.fieldStatus, function(a, c) {
                    b.fn.bootstrapValidator.helpers.call(e.options.fields[d].onStatus, [a, c])
                }), u = b.map(q, function(a) {
                    return a + ".live.bv"
                }).join(" "), this.options.live) {
                    case "submitted":
                        break;
                    case "disabled":
                        a.off(u);
                        break;
                    default:
                        a.off(u).on(u, function() {
                            e._exceedThreshold(b(this)) && e.validateField(b(this))
                        })
                }
                a.trigger(b.Event(this.options.events.fieldInit), {
                    bv: this,
                    field: d,
                    element: a
                })
            }
        },
        _getMessage: function(d, a) {
            if (!(this.options.fields[d] && b.fn.bootstrapValidator.validators[a] && this.options.fields[d].validators && this.options.fields[d].validators[a])) return "";
            var c = this.options.fields[d].validators[a];
            switch (!0) {
                case !!c.message:
                    return c.message;
                case !!this.options.fields[d].message:
                    return this.options.fields[d].message;
                case !!b.fn.bootstrapValidator.i18n[a]:
                    return b.fn.bootstrapValidator.i18n[a]["default"];
                default:
                    return this.options.message
            }
        },
        _getMessageContainer: function(b,
            a) {
            var c = b.parent();
            if (c.is(a)) return c;
            var e = c.attr("class");
            if (!e) return this._getMessageContainer(c, a);
            for (var e = e.split(" "), h = e.length, k = 0; h > k; k++)
                if (/^col-(xs|sm|md|lg)-\d+$/.test(e[k]) || /^col-(xs|sm|md|lg)-offset-\d+$/.test(e[k])) return c;
            return this._getMessageContainer(c, a)
        },
        _submit: function() {
            var d = this.isValid(),
                a = b.Event(d ? this.options.events.formSuccess : this.options.events.formError);
            this.$form.trigger(a);
            this.$submitButton && (d ? this._onSuccess(a) : this._onError(a))
        },
        _isExcluded: function(d) {
            var a =
                d.attr("data-bv-excluded"),
                c = d.attr("data-bv-field") || d.attr("name");
            switch (!0) {
                case !!c && this.options.fields && this.options.fields[c] && ("true" === this.options.fields[c].excluded || !0 === this.options.fields[c].excluded):
                case "true" === a:
                case "" === a:
                    return !0;
                case !!c && this.options.fields && this.options.fields[c] && ("false" === this.options.fields[c].excluded || !1 === this.options.fields[c].excluded):
                case "false" === a:
                    return !1;
                default:
                    if (this.options.excluded)
                        for ("string" == typeof this.options.excluded && (this.options.excluded =
                                b.map(this.options.excluded.split(","), function(a) {
                                    return b.trim(a)
                                })), a = this.options.excluded.length, c = 0; a > c; c++)
                            if ("string" == typeof this.options.excluded[c] && d.is(this.options.excluded[c]) || "function" == typeof this.options.excluded[c] && !0 === this.options.excluded[c].call(this, d, this)) return !0;
                    return !1
            }
        },
        _exceedThreshold: function(d) {
            var a = d.attr("data-bv-field");
            return (a = this.options.fields[a].threshold || this.options.threshold) ? -1 !== b.inArray(d.attr("type"), "button checkbox file hidden image radio reset submit".split(" ")) ||
                d.val().length >= a : !0
        },
        _onError: function(d) {
            if (!d.isDefaultPrevented()) {
                if ("submitted" === this.options.live) {
                    this.options.live = "enabled";
                    var a = this,
                        c;
                    for (c in this.options.fields) ! function(d) {
                        d = a.getFieldElements(d);
                        if (d.length) {
                            var e = b(d[0]).attr("type"),
                                e = "radio" === e || "checkbox" === e || "file" === e || "SELECT" === b(d[0]).get(0).tagName ? "change" : a._changeEvent,
                                e = b.map((a.options.fields[c].trigger || a.options.trigger || e).split(" "), function(a) {
                                    return a + ".live.bv"
                                }).join(" ");
                            d.off(e).on(e, function() {
                                a._exceedThreshold(b(this)) &&
                                    a.validateField(b(this))
                            })
                        }
                    }(c)
                }
                if (d = this.$invalidFields.eq(0)) {
                    var e, h = d.parents(".tab-pane");
                    h && (e = h.attr("id")) && b('a[href="#' + e + '"][data-toggle="tab"]').tab("show");
                    d.focus()
                }
            }
        },
        _onSuccess: function(b) {
            b.isDefaultPrevented() || this.disableSubmitButtons(!0).defaultSubmit()
        },
        _onFieldValidated: function(d, a) {
            var c = d.attr("data-bv-field"),
                e = this.options.fields[c].validators,
                h = {},
                k = 0,
                c = {
                    bv: this,
                    field: c,
                    element: d,
                    validator: a
                };
            if (a) switch (d.data("bv.result." + a)) {
                case this.STATUS_INVALID:
                    d.trigger(b.Event(this.options.events.validatorError),
                        c);
                    break;
                case this.STATUS_VALID:
                    d.trigger(b.Event(this.options.events.validatorSuccess), c)
            }
            h[this.STATUS_NOT_VALIDATED] = 0;
            h[this.STATUS_VALIDATING] = 0;
            h[this.STATUS_INVALID] = 0;
            h[this.STATUS_VALID] = 0;
            for (var m in e)
                if (!1 !== e[m].enabled) {
                    k++;
                    var q = d.data("bv.result." + m);
                    q && h[q]++
                }
            h[this.STATUS_VALID] === k ? (this.$invalidFields = this.$invalidFields.not(d), d.trigger(b.Event(this.options.events.fieldSuccess), c)) : 0 === h[this.STATUS_NOT_VALIDATED] && 0 === h[this.STATUS_VALIDATING] && 0 < h[this.STATUS_INVALID] && (this.$invalidFields =
                this.$invalidFields.add(d), d.trigger(b.Event(this.options.events.fieldError), c))
        },
        getFieldElements: function(d) {
            return this._cacheFields[d] || (this._cacheFields[d] = this.options.fields[d] && this.options.fields[d].selector ? b(this.options.fields[d].selector) : this.$form.find('[name="' + d + '"]')), this._cacheFields[d]
        },
        disableSubmitButtons: function(b) {
            return b ? "disabled" !== this.options.live && this.$form.find(this.options.submitButtons).attr("disabled", "disabled") : this.$form.find(this.options.submitButtons).removeAttr("disabled"),
                this
        },
        validate: function() {
            if (!this.options.fields) return this;
            this.disableSubmitButtons(!0);
            for (var b in this.options.fields) this.validateField(b);
            return this._submit(), this
        },
        validateField: function(d) {
            var a = b([]);
            switch (typeof d) {
                case "object":
                    a = d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(d)
            }
            if (this.options.fields[d] && !1 === this.options.fields[d].enabled) return this;
            for (var c, e, h = this, k = a.attr("type"), m = "radio" === k || "checkbox" === k ? 1 : a.length, q = "radio" === k || "checkbox" ===
                    k, k = this.options.fields[d].validators, u = 0; m > u; u++) {
                var r = a.eq(u);
                if (!this._isExcluded(r))
                    for (c in k) {
                        r.data("bv.dfs." + c) && r.data("bv.dfs." + c).reject();
                        var A = r.data("bv.result." + c);
                        A !== this.STATUS_VALID && A !== this.STATUS_INVALID && !1 !== k[c].enabled ? (r.data("bv.result." + c, this.STATUS_VALIDATING), e = b.fn.bootstrapValidator.validators[c].validate(this, r, k[c]), "object" == typeof e && e.resolve ? (this.updateStatus(q ? d : r, this.STATUS_VALIDATING, c), r.data("bv.dfs." + c, e), e.done(function(a, b, c, d) {
                            a.removeData("bv.dfs." +
                                b);
                            d && h.updateMessage(a, b, d);
                            h.updateStatus(q ? a.attr("data-bv-field") : a, c ? h.STATUS_VALID : h.STATUS_INVALID, b);
                            c && !0 === h._submitIfValid && h._submit()
                        })) : "object" == typeof e && void 0 !== e.valid && void 0 !== e.message ? (this.updateMessage(q ? d : r, c, e.message), this.updateStatus(q ? d : r, e.valid ? this.STATUS_VALID : this.STATUS_INVALID, c)) : "boolean" == typeof e && this.updateStatus(q ? d : r, e ? this.STATUS_VALID : this.STATUS_INVALID, c)) : this._onFieldValidated(r, c)
                    }
            }
            return this
        },
        updateMessage: function(d, a, c) {
            var e = b([]);
            switch (typeof d) {
                case "object":
                    e =
                        d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    e = this.getFieldElements(d)
            }
            e.each(function() {
                b(this).data("bv.messages").find('.help-block[data-bv-validator="' + a + '"][data-bv-for="' + d + '"]').html(c)
            })
        },
        updateStatus: function(d, a, c) {
            var e = b([]);
            switch (typeof d) {
                case "object":
                    e = d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    e = this.getFieldElements(d)
            }
            a === this.STATUS_NOT_VALIDATED && (this._submitIfValid = !1);
            for (var h = e.attr("type"), k = this.options.fields[d].group || this.options.group, h = "radio" === h || "checkbox" ===
                    h ? 1 : e.length, m = 0; h > m; m++) {
                var q = e.eq(m);
                if (!this._isExcluded(q)) {
                    var u = q.parents(k),
                        r = q.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + d + '"]'),
                        A = c ? r.filter('[data-bv-validator="' + c + '"]') : r,
                        F = u.find('.form-control-feedback[data-bv-icon-for="' + d + '"]'),
                        H = this.options.fields[d].container || this.options.container,
                        x = null;
                    if (c) q.data("bv.result." + c, a);
                    else
                        for (var K in this.options.fields[d].validators) q.data("bv.result." + K, a);
                    A.attr("data-bv-result", a);
                    var G, N, P = q.parents(".tab-pane");
                    switch (P && (G = P.attr("id")) && (N = b('a[href="#' + G + '"][data-toggle="tab"]').parent()), a) {
                        case this.STATUS_VALIDATING:
                            x = null;
                            this.disableSubmitButtons(!0);
                            u.removeClass("has-success").removeClass("has-error");
                            F && F.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).addClass(this.options.feedbackIcons.validating).show();
                            N && N.removeClass("bv-tab-success").removeClass("bv-tab-error");
                            break;
                        case this.STATUS_INVALID:
                            x = !1;
                            this.disableSubmitButtons(!0);
                            u.removeClass("has-success").addClass("has-error");
                            F && F.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.validating).addClass(this.options.feedbackIcons.invalid).show();
                            N && N.removeClass("bv-tab-success").addClass("bv-tab-error");
                            break;
                        case this.STATUS_VALID:
                            x = 0 === r.filter('[data-bv-result="' + this.STATUS_NOT_VALIDATED + '"]').length ? r.filter('[data-bv-result="' + this.STATUS_VALID + '"]').length === r.length : null;
                            null !== x && (this.disableSubmitButtons(this.$submitButton ? !this.isValid() : !x), F && F.removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).removeClass(this.options.feedbackIcons.valid).addClass(x ?
                                this.options.feedbackIcons.valid : this.options.feedbackIcons.invalid).show());
                            u.removeClass("has-error has-success").addClass(this.isValidContainer(u) ? "has-success" : "has-error");
                            N && N.removeClass("bv-tab-success").removeClass("bv-tab-error").addClass(this.isValidContainer(P) ? "bv-tab-success" : "bv-tab-error");
                            break;
                        default:
                            x = null, this.disableSubmitButtons(!1), u.removeClass("has-success").removeClass("has-error"), F && F.removeClass(this.options.feedbackIcons.valid).removeClass(this.options.feedbackIcons.invalid).removeClass(this.options.feedbackIcons.validating).hide(),
                                N && N.removeClass("bv-tab-success").removeClass("bv-tab-error")
                    }
                    switch (!0) {
                        case F && "tooltip" === H:
                            !1 === x ? F.css("cursor", "pointer").tooltip("destroy").tooltip({
                                html: !0,
                                placement: "top",
                                title: r.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html()
                            }) : F.css("cursor", "").tooltip("destroy");
                            break;
                        case F && "popover" === H:
                            !1 === x ? F.css("cursor", "pointer").popover("destroy").popover({
                                    content: r.filter('[data-bv-result="' + this.STATUS_INVALID + '"]').eq(0).html(),
                                    html: !0,
                                    placement: "top",
                                    trigger: "hover click"
                                }) :
                                F.css("cursor", "").popover("destroy");
                            break;
                        default:
                            a === this.STATUS_INVALID ? A.show() : A.hide()
                    }
                    q.trigger(b.Event(this.options.events.fieldStatus), {
                        bv: this,
                        field: d,
                        element: q,
                        status: a
                    });
                    this._onFieldValidated(q, c)
                }
            }
            return this
        },
        isValid: function() {
            for (var b in this.options.fields)
                if (!this.isValidField(b)) return !1;
            return !0
        },
        isValidField: function(d) {
            var a = b([]);
            switch (typeof d) {
                case "object":
                    a = d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    a = this.getFieldElements(d)
            }
            if (0 === a.length || null === this.options.fields[d] ||
                !1 === this.options.fields[d].enabled) return !0;
            for (var c, e, h, k = a.attr("type"), k = "radio" === k || "checkbox" === k ? 1 : a.length, m = 0; k > m; m++)
                if (c = a.eq(m), !this._isExcluded(c))
                    for (e in this.options.fields[d].validators)
                        if (!1 !== this.options.fields[d].validators[e].enabled && (h = c.data("bv.result." + e), h !== this.STATUS_VALID)) return !1;
            return !0
        },
        isValidContainer: function(d) {
            var a = this,
                c = {};
            d = "string" == typeof d ? b(d) : d;
            if (0 === d.length) return !0;
            d.find("[data-bv-field]").each(function() {
                var d = b(this),
                    e = d.attr("data-bv-field");
                a._isExcluded(d) || c[e] || (c[e] = d)
            });
            for (var e in c) {
                var h = c[e];
                if (0 !== h.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + e + '"]').filter(function() {
                        var c = b(this).attr("data-bv-validator"),
                            d = b(this).attr("data-bv-for");
                        return !1 !== a.options.fields[d].validators[c].enabled && h.data("bv.result." + c) && h.data("bv.result." + c) !== a.STATUS_VALID
                    }).length) return !1
            }
            return !0
        },
        defaultSubmit: function() {
            this.$submitButton && b("<input/>").attr("type", "hidden").attr("data-bv-submit-hidden", "").attr("name",
                this.$submitButton.attr("name")).val(this.$submitButton.val()).appendTo(this.$form);
            this.$form.off("submit.bv").submit()
        },
        getInvalidFields: function() {
            return this.$invalidFields
        },
        getSubmitButton: function() {
            return this.$submitButton
        },
        getMessages: function(d, a) {
            var c = this,
                e = [],
                h = b([]);
            switch (!0) {
                case d && "object" == typeof d:
                    h = d;
                    break;
                case d && "string" == typeof d:
                    var k = this.getFieldElements(d);
                    0 < k.length && (h = k.attr("type"), h = "radio" === h || "checkbox" === h ? k.eq(0) : k);
                    break;
                default:
                    h = this.$invalidFields
            }
            var m =
                a ? '[data-bv-validator="' + a + '"]' : "";
            return h.each(function() {
                e = e.concat(b(this).data("bv.messages").find('.help-block[data-bv-for="' + b(this).attr("data-bv-field") + '"][data-bv-result="' + c.STATUS_INVALID + '"]' + m).map(function() {
                    var a = b(this).attr("data-bv-validator"),
                        d = b(this).attr("data-bv-for");
                    return !1 === c.options.fields[d].validators[a].enabled ? "" : b(this).html()
                }).get())
            }), e
        },
        getOptions: function(b, a, c) {
            if (!b) return this.options;
            if ("object" == typeof b && (b = b.attr("data-bv-field")), !this.options.fields[b]) return null;
            b = this.options.fields[b];
            return a ? b.validators && b.validators[a] ? c ? b.validators[a][c] : b.validators[a] : null : b
        },
        updateOption: function(b, a, c, e) {
            return "object" == typeof b && (b = b.attr("data-bv-field")), this.options.fields[b] && this.options.fields[b].validators[a] && (this.options.fields[b].validators[a][c] = e, this.updateStatus(b, this.STATUS_NOT_VALIDATED, a)), this
        },
        addField: function(d, a) {
            var c = b([]);
            switch (typeof d) {
                case "object":
                    c = d;
                    d = d.attr("data-bv-field") || d.attr("name");
                    break;
                case "string":
                    delete this._cacheFields[d],
                        c = this.getFieldElements(d)
            }
            c.attr("data-bv-field", d);
            for (var e = c.attr("type"), h = "radio" === e || "checkbox" === e ? 1 : c.length, k = 0; h > k; k++) {
                var m = c.eq(k),
                    q = this._parseOptions(m),
                    q = null === q ? a : b.extend(!0, a, q);
                this.options.fields[d] = b.extend(!0, this.options.fields[d], q);
                this._cacheFields[d] = this._cacheFields[d] ? this._cacheFields[d].add(m) : m;
                this._initField("checkbox" === e || "radio" === e ? d : m)
            }
            return this.disableSubmitButtons(!1), this.$form.trigger(b.Event(this.options.events.fieldAdded), {
                    field: d,
                    element: c,
                    options: this.options.fields[d]
                }),
                this
        },
        removeField: function(d) {
            var a = b([]);
            switch (typeof d) {
                case "object":
                    a = d;
                    d = d.attr("data-bv-field") || d.attr("name");
                    a.attr("data-bv-field", d);
                    break;
                case "string":
                    a = this.getFieldElements(d)
            }
            if (0 === a.length) return this;
            for (var c = a.attr("type"), e = "radio" === c || "checkbox" === c ? 1 : a.length, h = 0; e > h; h++) {
                var k = a.eq(h);
                this.$invalidFields = this.$invalidFields.not(k);
                this._cacheFields[d] = this._cacheFields[d].not(k)
            }
            return this._cacheFields[d] && 0 !== this._cacheFields[d].length || delete this.options.fields[d], ("checkbox" === c || "radio" === c) && this._initField(d), this.disableSubmitButtons(!1), this.$form.trigger(b.Event(this.options.events.fieldRemoved), {
                field: d,
                element: a
            }), this
        },
        resetField: function(d, a) {
            var c = b([]);
            switch (typeof d) {
                case "object":
                    c = d;
                    d = d.attr("data-bv-field");
                    break;
                case "string":
                    c = this.getFieldElements(d)
            }
            var e = c.length;
            if (this.options.fields[d])
                for (var h = 0; e > h; h++)
                    for (var k in this.options.fields[d].validators) c.eq(h).removeData("bv.dfs." + k);
            if (this.updateStatus(d, this.STATUS_NOT_VALIDATED),
                a) e = c.attr("type"), "radio" === e || "checkbox" === e ? c.removeAttr("checked").removeAttr("selected") : c.val("");
            return this
        },
        resetForm: function(d) {
            for (var a in this.options.fields) this.resetField(a, d);
            return this.$invalidFields = b([]), this.$submitButton = null, this.disableSubmitButtons(!1), this
        },
        revalidateField: function(b) {
            return this.updateStatus(b, this.STATUS_NOT_VALIDATED).validateField(b), this
        },
        enableFieldValidators: function(b, a, c) {
            var e = this.options.fields[b].validators;
            if (c && e && e[c] && e[c].enabled !== a) this.options.fields[b].validators[c].enabled =
                a, this.updateStatus(b, this.STATUS_NOT_VALIDATED, c);
            else if (!c && this.options.fields[b].enabled !== a) {
                this.options.fields[b].enabled = a;
                for (var h in e) this.enableFieldValidators(b, a, h)
            }
            return this
        },
        getDynamicOption: function(d, a) {
            var c = "string" == typeof d ? this.getFieldElements(d) : d,
                e = c.val();
            if ("function" == typeof a) return b.fn.bootstrapValidator.helpers.call(a, [e, this, c]);
            if ("string" == typeof a) {
                var h = this.getFieldElements(a);
                return h.length ? h.val() : b.fn.bootstrapValidator.helpers.call(a, [e, this, c]) || a
            }
            return null
        },
        destroy: function() {
            var b, a, c, e, h, k, m;
            for (b in this.options.fields) {
                a = this.getFieldElements(b);
                k = this.options.fields[b].container || this.options.container;
                m = this.options.fields[b].group || this.options.group;
                for (var q = 0; q < a.length; q++) {
                    if (c = a.eq(q), c.data("bv.messages").find('.help-block[data-bv-validator][data-bv-for="' + b + '"]').remove().end().end().removeData("bv.messages").parents(m).removeClass("has-feedback has-error has-success").end().off(".bv").removeAttr("data-bv-field"), h = c.parents(m).find('i[data-bv-icon-for="' +
                            b + '"]')) switch (k) {
                        case "tooltip":
                            h.tooltip("destroy").remove();
                            break;
                        case "popover":
                            h.popover("destroy").remove();
                            break;
                        default:
                            h.remove()
                    }
                    for (e in this.options.fields[b].validators) c.data("bv.dfs." + e) && c.data("bv.dfs." + e).reject(), c.removeData("bv.result." + e).removeData("bv.dfs." + e)
                }
            }
            this.disableSubmitButtons(!1);
            this.$hiddenButton.remove();
            this.$form.removeClass(this.options.elementClass).off(".bv").removeData("bootstrapValidator").find("[data-bv-submit-hidden]").remove().end().find('[type="submit"]').off("click.bv")
        }
    };
    b.fn.bootstrapValidator = function(d) {
        var a = arguments;
        return this.each(function() {
            var c = b(this),
                f = c.data("bootstrapValidator"),
                h = "object" == typeof d && d;
            f || (f = new e(this, h), c.data("bootstrapValidator", f));
            "string" == typeof d && f[d].apply(f, Array.prototype.slice.call(a, 1))
        })
    };
    b.fn.bootstrapValidator.DEFAULT_OPTIONS = {
        elementClass: "bv-form",
        message: "This value is not valid",
        group: ".form-group",
        container: null,
        threshold: null,
        excluded: [":disabled", ":hidden", ":not(:visible)"],
        feedbackIcons: {
            valid: null,
            invalid: null,
            validating: null
        },
        submitButtons: '[type="submit"]',
        live: "enabled",
        fields: null,
        events: {
            formInit: "init.form.bv",
            formError: "error.form.bv",
            formSuccess: "success.form.bv",
            fieldAdded: "added.field.bv",
            fieldRemoved: "removed.field.bv",
            fieldInit: "init.field.bv",
            fieldError: "error.field.bv",
            fieldSuccess: "success.field.bv",
            fieldStatus: "status.field.bv",
            validatorError: "error.validator.bv",
            validatorSuccess: "success.validator.bv"
        }
    };
    b.fn.bootstrapValidator.validators = {};
    b.fn.bootstrapValidator.i18n = {};
    b.fn.bootstrapValidator.Constructor =
        e;
    b.fn.bootstrapValidator.helpers = {
        call: function(b, a) {
            if ("function" == typeof b) return b.apply(this, a);
            if ("string" == typeof b) {
                "()" === b.substring(b.length - 2) && (b = b.substring(0, b.length - 2));
                for (var c = b.split("."), e = c.pop(), h = window, k = 0; k < c.length; k++) h = h[c[k]];
                return "undefined" == typeof h[e] ? null : h[e].apply(this, a)
            }
        },
        format: function(d, a) {
            b.isArray(a) || (a = [a]);
            for (var c in a) d = d.replace("%s", a[c]);
            return d
        },
        date: function(b, a, c, e) {
            if (isNaN(b) || isNaN(a) || isNaN(c) || 2 < c.length || 2 < a.length || 4 < b.length || (c = parseInt(c,
                    10), a = parseInt(a, 10), b = parseInt(b, 10), 1E3 > b || 9999 < b || 0 >= a || 12 < a)) return !1;
            var h = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            if ((0 === b % 400 || 0 !== b % 100 && 0 === b % 4) && (h[1] = 29), 0 >= c || c > h[a - 1]) return !1;
            if (!0 === e) {
                var k = new Date;
                e = k.getFullYear();
                h = k.getMonth();
                k = k.getDate();
                return e > b || b === e && h > a - 1 || b === e && a - 1 === h && k > c
            }
            return !0
        },
        luhn: function(b) {
            for (var a = b.length, c = 0, e = [
                    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
                ], h = 0; a--;) h += e[c][parseInt(b.charAt(a), 10)], c ^= 1;
            return 0 === h % 10 && 0 < h
        },
        mod11And10: function(b) {
            for (var a =
                    5, c = b.length, e = 0; c > e; e++) a = (2 * (a || 10) % 11 + parseInt(b.charAt(e), 10)) % 10;
            return 1 === a
        },
        mod37And36: function(b, a) {
            a = a || "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            for (var c = a.length, e = b.length, h = Math.floor(c / 2), k = 0; e > k; k++) h = (2 * (h || c) % (c + 1) + a.indexOf(b.charAt(k))) % c;
            return 1 === h
        }
    }
}(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.base64 = b.extend(b.fn.bootstrapValidator.i18n.base64 || {}, {
        "default": "Please enter a valid base 64 encoded"
    });
    b.fn.bootstrapValidator.validators.base64 = {
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.between = b.extend(b.fn.bootstrapValidator.i18n.between || {}, {
        "default": "Please enter a value between %s and %s",
        notInclusive: "Please enter a value between %s and %s strictly"
    });
    b.fn.bootstrapValidator.validators.between = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max",
            inclusive: "inclusive"
        },
        enableByHtml5: function(b) {
            return "range" === b.attr("type") ? {
                min: b.attr("min"),
                max: b.attr("max")
            } : !1
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            if (!b.isNumeric(c)) return !1;
            var f = b.isNumeric(a.min) ? a.min : e.getDynamicOption(d, a.min);
            e = b.isNumeric(a.max) ? a.max : e.getDynamicOption(d, a.max);
            return c = parseFloat(c), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: c >= f && e >= c,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.between["default"], [f, e])
            } : {
                valid: c > f && e > c,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.between.notInclusive, [f, e])
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.callback = b.extend(b.fn.bootstrapValidator.i18n.callback || {}, {
        "default": "Please enter a valid value"
    });
    b.fn.bootstrapValidator.validators.callback = {
        html5Attributes: {
            message: "message",
            callback: "callback"
        },
        validate: function(e, d, a) {
            var c = d.val();
            if (a.callback) {
                var f = new b.Deferred;
                e = b.fn.bootstrapValidator.helpers.call(a.callback, [c, e, d]);
                return f.resolve(d, "callback", "boolean" == typeof e ? e : e.valid, "object" == typeof e && e.message ? e.message : null), f
            }
            return !0
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.choice = b.extend(b.fn.bootstrapValidator.i18n.choice || {}, {
        "default": "Please enter a valid value",
        less: "Please choose %s options at minimum",
        more: "Please choose %s options at maximum",
        between: "Please choose %s - %s options"
    });
    b.fn.bootstrapValidator.validators.choice = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        validate: function(e, d, a) {
            var c = d.is("select") ? e.getFieldElements(d.attr("data-bv-field")).find("option").filter(":selected").length : e.getFieldElements(d.attr("data-bv-field")).filter(":checked").length,
                f = a.min ? b.isNumeric(a.min) ? a.min : e.getDynamicOption(d, a.min) : null;
            e = a.max ? b.isNumeric(a.max) ? a.max : e.getDynamicOption(d, a.max) : null;
            d = !0;
            var h = a.message || b.fn.bootstrapValidator.i18n.choice["default"];
            switch ((f && c < parseInt(f, 10) || e && c > parseInt(e, 10)) && (d = !1), !0) {
                case !!f && !!e:
                    h = b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.choice.between, [parseInt(f, 10), parseInt(e, 10)]);
                    break;
                case !!f:
                    h = b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.choice.less,
                        parseInt(f, 10));
                    break;
                case !!e:
                    h = b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.choice.more, parseInt(e, 10))
            }
            return {
                valid: d,
                message: h
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.creditCard = b.extend(b.fn.bootstrapValidator.i18n.creditCard || {}, {
        "default": "Please enter a valid credit card number"
    });
    b.fn.bootstrapValidator.validators.creditCard = {
        validate: function(e, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (/[^0-9-\s]+/.test(a) || (a = a.replace(/\D/g, ""), !b.fn.bootstrapValidator.helpers.luhn(a))) return !1;
            var c, f, h = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34", "37"]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: "300 301 302 303 304 305 36".split(" ")
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: "6011 622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925 644 645 646 647 648 649 65".split(" ")
                },
                JCB: {
                    length: [16],
                    prefix: "3528 3529 353 354 355 356 357 358".split(" ")
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12, 13, 14, 15, 16, 17, 18, 19],
                    prefix: "5018 5020 5038 6304 6759 6761 6762 6763 6764 6765 6766".split(" ")
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: "622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925".split(" ")
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            };
            for (c in h)
                for (f in h[c].prefix)
                    if (a.substr(0, h[c].prefix[f].length) === h[c].prefix[f] && -1 !== b.inArray(a.length, h[c].length)) return !0;
            return !1
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.cusip = b.extend(b.fn.bootstrapValidator.i18n.cusip || {}, {
        "default": "Please enter a valid CUSIP number"
    });
    b.fn.bootstrapValidator.validators.cusip = {
        validate: function(e, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (a = a.toUpperCase(), !/^[0-9A-Z]{9}$/.test(a)) return !1;
            for (var a = b.map(a.split(""), function(a) {
                    var b = a.charCodeAt(0);
                    return 65 <= b && 90 >= b ? b - 65 + 10 : a
                }), c = a.length, f = 0, h = 0; c - 1 > h; h++) {
                var k = parseInt(a[h], 10);
                0 !== h % 2 && (k *= 2);
                9 < k && (k -= 9);
                f += k
            }
            return f = (10 - f % 10) % 10,
                f === a[c - 1]
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.cvv = b.extend(b.fn.bootstrapValidator.i18n.cvv || {}, {
        "default": "Please enter a valid CVV number"
    });
    b.fn.bootstrapValidator.validators.cvv = {
        html5Attributes: {
            message: "message",
            ccfield: "creditCardField"
        },
        validate: function(e, d, a) {
            d = d.val();
            if ("" === d) return !0;
            if (!/^[0-9]{3,4}$/.test(d)) return !1;
            if (!a.creditCardField) return !0;
            e = e.getFieldElements(a.creditCardField).val();
            if ("" === e) return !0;
            e = e.replace(/\D/g, "");
            var c, f;
            a = {
                AMERICAN_EXPRESS: {
                    length: [15],
                    prefix: ["34",
                        "37"
                    ]
                },
                DINERS_CLUB: {
                    length: [14],
                    prefix: "300 301 302 303 304 305 36".split(" ")
                },
                DINERS_CLUB_US: {
                    length: [16],
                    prefix: ["54", "55"]
                },
                DISCOVER: {
                    length: [16],
                    prefix: "6011 622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925 644 645 646 647 648 649 65".split(" ")
                },
                JCB: {
                    length: [16],
                    prefix: "3528 3529 353 354 355 356 357 358".split(" ")
                },
                LASER: {
                    length: [16, 17, 18, 19],
                    prefix: ["6304", "6706", "6771", "6709"]
                },
                MAESTRO: {
                    length: [12,
                        13, 14, 15, 16, 17, 18, 19
                    ],
                    prefix: "5018 5020 5038 6304 6759 6761 6762 6763 6764 6765 6766".split(" ")
                },
                MASTERCARD: {
                    length: [16],
                    prefix: ["51", "52", "53", "54", "55"]
                },
                SOLO: {
                    length: [16, 18, 19],
                    prefix: ["6334", "6767"]
                },
                UNIONPAY: {
                    length: [16, 17, 18, 19],
                    prefix: "622126 622127 622128 622129 62213 62214 62215 62216 62217 62218 62219 6222 6223 6224 6225 6226 6227 6228 62290 62291 622920 622921 622922 622923 622924 622925".split(" ")
                },
                VISA: {
                    length: [16],
                    prefix: ["4"]
                }
            };
            var h = null;
            for (c in a)
                for (f in a[c].prefix)
                    if (e.substr(0,
                            a[c].prefix[f].length) === a[c].prefix[f] && -1 !== b.inArray(e.length, a[c].length)) {
                        h = c;
                        break
                    }
            return null === h ? !1 : "AMERICAN_EXPRESS" === h ? 4 === d.length : 3 === d.length
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.date = b.extend(b.fn.bootstrapValidator.i18n.date || {}, {
        "default": "Please enter a valid date"
    });
    b.fn.bootstrapValidator.validators.date = {
        html5Attributes: {
            message: "message",
            format: "format",
            separator: "separator"
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            a.format = a.format || "MM/DD/YYYY";
            "date" === d.attr("type") && (a.format = "YYYY-MM-DD");
            var f = a.format.split(" "),
                h = f[0];
            d = 1 < f.length ? f[1] : null;
            e = 2 < f.length ? f[2] : null;
            var k = c.split(" "),
                m = k[0],
                c = 1 < k.length ?
                k[1] : null;
            if (f.length !== k.length) return !1;
            a = a.separator;
            if ((a || (a = -1 !== m.indexOf("/") ? "/" : -1 !== m.indexOf("-") ? "-" : null), null === a || -1 === m.indexOf(a)) || (m = m.split(a), h = h.split(a), m.length !== h.length)) return !1;
            a = m[b.inArray("YYYY", h)];
            f = m[b.inArray("MM", h)];
            h = m[b.inArray("DD", h)];
            if (!a || !f || !h || 4 !== a.length) return !1;
            var q = k = m = null;
            if (d) {
                if (d = d.split(":"), c = c.split(":"), d.length !== c.length) return !1;
                if (k = 0 < c.length ? c[0] : null, m = 1 < c.length ? c[1] : null, q = 2 < c.length ? c[2] : null)
                    if (isNaN(q) || 2 < q.length || (q = parseInt(q,
                            10), 0 > q || 60 < q)) return !1;
                if (k && (isNaN(k) || 2 < k.length || (k = parseInt(k, 10), 0 > k || 24 <= k || e && 12 < k)) || m && (isNaN(m) || 2 < m.length || (m = parseInt(m, 10), 0 > m || 59 < m))) return !1
            }
            return b.fn.bootstrapValidator.helpers.date(a, f, h)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.different = b.extend(b.fn.bootstrapValidator.i18n.different || {}, {
        "default": "Please enter a different value"
    });
    b.fn.bootstrapValidator.validators.different = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(b, d, a) {
            d = d.val();
            if ("" === d) return !0;
            var c = b.getFieldElements(a.field);
            return null === c || 0 === c.length ? !0 : d !== c.val() ? (b.updateStatus(a.field, b.STATUS_VALID, "different"), !0) : !1
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.digits = b.extend(b.fn.bootstrapValidator.i18n.digits || {}, {
        "default": "Please enter only digits"
    });
    b.fn.bootstrapValidator.validators.digits = {
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /^\d+$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.ean = b.extend(b.fn.bootstrapValidator.i18n.ean || {}, {
        "default": "Please enter a valid EAN number"
    });
    b.fn.bootstrapValidator.validators.ean = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (!/^(\d{8}|\d{12}|\d{13})$/.test(a)) return !1;
            for (var c = a.length, f = 0, h = 8 === c ? [3, 1] : [1, 3], k = 0; c - 1 > k; k++) f += parseInt(a.charAt(k), 10) * h[k % 2];
            return f = (10 - f % 10) % 10, f + "" === a.charAt(c - 1)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.emailAddress = b.extend(b.fn.bootstrapValidator.i18n.emailAddress || {}, {
        "default": "Please enter a valid email address"
    });
    b.fn.bootstrapValidator.validators.emailAddress = {
        enableByHtml5: function(b) {
            return "email" === b.attr("type")
        },
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.file = b.extend(b.fn.bootstrapValidator.i18n.file || {}, {
        "default": "Please choose a valid file"
    });
    b.fn.bootstrapValidator.validators.file = {
        html5Attributes: {
            extension: "extension",
            maxsize: "maxSize",
            message: "message",
            type: "type"
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f;
            e = a.extension ? a.extension.toLowerCase().split(",") : null;
            var h = a.type ? a.type.toLowerCase().split(",") : null;
            if (window.File && window.FileList && window.FileReader) {
                d = d.get(0).files;
                for (var c = d.length, k = 0; c > k; k++)
                    if (a.maxSize && d[k].size > parseInt(a.maxSize, 10) || (f = d[k].name.substr(d[k].name.lastIndexOf(".") + 1), e && -1 === b.inArray(f.toLowerCase(), e)) || d[k].type && h && -1 === b.inArray(d[k].type.toLowerCase(), h)) return !1
            } else if (f = c.substr(c.lastIndexOf(".") + 1), e && -1 === b.inArray(f.toLowerCase(), e)) return !1;
            return !0
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.greaterThan = b.extend(b.fn.bootstrapValidator.i18n.greaterThan || {}, {
        "default": "Please enter a value greater than or equal to %s",
        notInclusive: "Please enter a value greater than %s"
    });
    b.fn.bootstrapValidator.validators.greaterThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(b) {
            var d = b.attr("type");
            return (b = b.attr("min")) && "date" !== d ? {
                value: b
            } : !1
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            if (!b.isNumeric(c)) return !1;
            e = b.isNumeric(a.value) ? a.value : e.getDynamicOption(d, a.value);
            return c = parseFloat(c), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: c >= e,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.greaterThan["default"], e)
            } : {
                valid: c > e,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.greaterThan.notInclusive, e)
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.grid = b.extend(b.fn.bootstrapValidator.i18n.grid || {}, {
        "default": "Please enter a valid GRId number"
    });
    b.fn.bootstrapValidator.validators.grid = {
        validate: function(e, d) {
            var a = d.val();
            return "" === a ? !0 : (a = a.toUpperCase(), /^[GRID:]*([0-9A-Z]{2})[-\s]*([0-9A-Z]{5})[-\s]*([0-9A-Z]{10})[-\s]*([0-9A-Z]{1})$/g.test(a) ? (a = a.replace(/\s/g, "").replace(/-/g, ""), "GRID:" === a.substr(0, 5) && (a = a.substr(5)), b.fn.bootstrapValidator.helpers.mod37And36(a)) : !1)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.hex = b.extend(b.fn.bootstrapValidator.i18n.hex || {}, {
        "default": "Please enter a valid hexadecimal number"
    });
    b.fn.bootstrapValidator.validators.hex = {
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /^[0-9a-fA-F]+$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.hexColor = b.extend(b.fn.bootstrapValidator.i18n.hexColor || {}, {
        "default": "Please enter a valid hex color"
    });
    b.fn.bootstrapValidator.validators.hexColor = {
        enableByHtml5: function(b) {
            return "color" === b.attr("type")
        },
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.iban = b.extend(b.fn.bootstrapValidator.i18n.iban || {}, {
        "default": "Please enter a valid IBAN number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid IBAN number in %s",
        countries: {
            AD: "Andorra",
            AE: "United Arab Emirates",
            AL: "Albania",
            AO: "Angola",
            AT: "Austria",
            AZ: "Azerbaijan",
            BA: "Bosnia and Herzegovina",
            BE: "Belgium",
            BF: "Burkina Faso",
            BG: "Bulgaria",
            BH: "Bahrain",
            BI: "Burundi",
            BJ: "Benin",
            BR: "Brazil",
            CH: "Switzerland",
            CI: "Ivory Coast",
            CM: "Cameroon",
            CR: "Costa Rica",
            CV: "Cape Verde",
            CY: "Cyprus",
            CZ: "Czech Republic",
            DE: "Germany",
            DK: "Denmark",
            DO: "Dominican Republic",
            DZ: "Algeria",
            EE: "Estonia",
            ES: "Spain",
            FI: "Finland",
            FO: "Faroe Islands",
            FR: "France",
            GB: "United Kingdom",
            GE: "Georgia",
            GI: "Gibraltar",
            GL: "Greenland",
            GR: "Greece",
            GT: "Guatemala",
            HR: "Croatia",
            HU: "Hungary",
            IE: "Ireland",
            IL: "Israel",
            IR: "Iran",
            IS: "Iceland",
            IT: "Italy",
            JO: "Jordan",
            KW: "Kuwait",
            KZ: "Kazakhstan",
            LB: "Lebanon",
            LI: "Liechtenstein",
            LT: "Lithuania",
            LU: "Luxembourg",
            LV: "Latvia",
            MC: "Monaco",
            MD: "Moldova",
            ME: "Montenegro",
            MG: "Madagascar",
            MK: "Macedonia",
            ML: "Mali",
            MR: "Mauritania",
            MT: "Malta",
            MU: "Mauritius",
            MZ: "Mozambique",
            NL: "Netherlands",
            NO: "Norway",
            PK: "Pakistan",
            PL: "Poland",
            PS: "Palestinian",
            PT: "Portugal",
            QA: "Qatar",
            RO: "Romania",
            RS: "Serbia",
            SA: "Saudi Arabia",
            SE: "Sweden",
            SI: "Slovenia",
            SK: "Slovakia",
            SM: "San Marino",
            SN: "Senegal",
            TN: "Tunisia",
            TR: "Turkey",
            VG: "Virgin Islands, British"
        }
    });
    b.fn.bootstrapValidator.validators.iban = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        REGEX: {
            AD: "AD[0-9]{2}[0-9]{4}[0-9]{4}[A-Z0-9]{12}",
            AE: "AE[0-9]{2}[0-9]{3}[0-9]{16}",
            AL: "AL[0-9]{2}[0-9]{8}[A-Z0-9]{16}",
            AO: "AO[0-9]{2}[0-9]{21}",
            AT: "AT[0-9]{2}[0-9]{5}[0-9]{11}",
            AZ: "AZ[0-9]{2}[A-Z]{4}[A-Z0-9]{20}",
            BA: "BA[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{8}[0-9]{2}",
            BE: "BE[0-9]{2}[0-9]{3}[0-9]{7}[0-9]{2}",
            BF: "BF[0-9]{2}[0-9]{23}",
            BG: "BG[0-9]{2}[A-Z]{4}[0-9]{4}[0-9]{2}[A-Z0-9]{8}",
            BH: "BH[0-9]{2}[A-Z]{4}[A-Z0-9]{14}",
            BI: "BI[0-9]{2}[0-9]{12}",
            BJ: "BJ[0-9]{2}[A-Z]{1}[0-9]{23}",
            BR: "BR[0-9]{2}[0-9]{8}[0-9]{5}[0-9]{10}[A-Z][A-Z0-9]",
            CH: "CH[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            CI: "CI[0-9]{2}[A-Z]{1}[0-9]{23}",
            CM: "CM[0-9]{2}[0-9]{23}",
            CR: "CR[0-9]{2}[0-9]{3}[0-9]{14}",
            CV: "CV[0-9]{2}[0-9]{21}",
            CY: "CY[0-9]{2}[0-9]{3}[0-9]{5}[A-Z0-9]{16}",
            CZ: "CZ[0-9]{2}[0-9]{20}",
            DE: "DE[0-9]{2}[0-9]{8}[0-9]{10}",
            DK: "DK[0-9]{2}[0-9]{14}",
            DO: "DO[0-9]{2}[A-Z0-9]{4}[0-9]{20}",
            DZ: "DZ[0-9]{2}[0-9]{20}",
            EE: "EE[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{11}[0-9]{1}",
            ES: "ES[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{1}[0-9]{1}[0-9]{10}",
            FI: "FI[0-9]{2}[0-9]{6}[0-9]{7}[0-9]{1}",
            FO: "FO[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            FR: "FR[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            GB: "GB[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            GE: "GE[0-9]{2}[A-Z]{2}[0-9]{16}",
            GI: "GI[0-9]{2}[A-Z]{4}[A-Z0-9]{15}",
            GL: "GL[0-9]{2}[0-9]{4}[0-9]{9}[0-9]{1}",
            GR: "GR[0-9]{2}[0-9]{3}[0-9]{4}[A-Z0-9]{16}",
            GT: "GT[0-9]{2}[A-Z0-9]{4}[A-Z0-9]{20}",
            HR: "HR[0-9]{2}[0-9]{7}[0-9]{10}",
            HU: "HU[0-9]{2}[0-9]{3}[0-9]{4}[0-9]{1}[0-9]{15}[0-9]{1}",
            IE: "IE[0-9]{2}[A-Z]{4}[0-9]{6}[0-9]{8}",
            IL: "IL[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{13}",
            IR: "IR[0-9]{2}[0-9]{22}",
            IS: "IS[0-9]{2}[0-9]{4}[0-9]{2}[0-9]{6}[0-9]{10}",
            IT: "IT[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            JO: "JO[0-9]{2}[A-Z]{4}[0-9]{4}[0]{8}[A-Z0-9]{10}",
            KW: "KW[0-9]{2}[A-Z]{4}[0-9]{22}",
            KZ: "KZ[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LB: "LB[0-9]{2}[0-9]{4}[A-Z0-9]{20}",
            LI: "LI[0-9]{2}[0-9]{5}[A-Z0-9]{12}",
            LT: "LT[0-9]{2}[0-9]{5}[0-9]{11}",
            LU: "LU[0-9]{2}[0-9]{3}[A-Z0-9]{13}",
            LV: "LV[0-9]{2}[A-Z]{4}[A-Z0-9]{13}",
            MC: "MC[0-9]{2}[0-9]{5}[0-9]{5}[A-Z0-9]{11}[0-9]{2}",
            MD: "MD[0-9]{2}[A-Z0-9]{20}",
            ME: "ME[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            MG: "MG[0-9]{2}[0-9]{23}",
            MK: "MK[0-9]{2}[0-9]{3}[A-Z0-9]{10}[0-9]{2}",
            ML: "ML[0-9]{2}[A-Z]{1}[0-9]{23}",
            MR: "MR13[0-9]{5}[0-9]{5}[0-9]{11}[0-9]{2}",
            MT: "MT[0-9]{2}[A-Z]{4}[0-9]{5}[A-Z0-9]{18}",
            MU: "MU[0-9]{2}[A-Z]{4}[0-9]{2}[0-9]{2}[0-9]{12}[0-9]{3}[A-Z]{3}",
            MZ: "MZ[0-9]{2}[0-9]{21}",
            NL: "NL[0-9]{2}[A-Z]{4}[0-9]{10}",
            NO: "NO[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{1}",
            PK: "PK[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            PL: "PL[0-9]{2}[0-9]{8}[0-9]{16}",
            PS: "PS[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            PT: "PT[0-9]{2}[0-9]{4}[0-9]{4}[0-9]{11}[0-9]{2}",
            QA: "QA[0-9]{2}[A-Z]{4}[A-Z0-9]{21}",
            RO: "RO[0-9]{2}[A-Z]{4}[A-Z0-9]{16}",
            RS: "RS[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            SA: "SA[0-9]{2}[0-9]{2}[A-Z0-9]{18}",
            SE: "SE[0-9]{2}[0-9]{3}[0-9]{16}[0-9]{1}",
            SI: "SI[0-9]{2}[0-9]{5}[0-9]{8}[0-9]{2}",
            SK: "SK[0-9]{2}[0-9]{4}[0-9]{6}[0-9]{10}",
            SM: "SM[0-9]{2}[A-Z]{1}[0-9]{5}[0-9]{5}[A-Z0-9]{12}",
            SN: "SN[0-9]{2}[A-Z]{1}[0-9]{23}",
            TN: "TN59[0-9]{2}[0-9]{3}[0-9]{13}[0-9]{2}",
            TR: "TR[0-9]{2}[0-9]{5}[A-Z0-9]{1}[A-Z0-9]{16}",
            VG: "VG[0-9]{2}[A-Z]{4}[0-9]{16}"
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var c = c.replace(/[^a-zA-Z0-9]/g, "").toUpperCase(),
                f = a.country;
            if (f ? "string" ==
                typeof f && this.REGEX[f] || (f = e.getDynamicOption(d, f)) : f = c.substr(0, 2), !this.REGEX[f]) return {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(b.fn.bootstrapValidator.i18n.iban.countryNotSupported, f)
            };
            if (!(new RegExp("^" + this.REGEX[f] + "$")).test(c)) return {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.iban.country, b.fn.bootstrapValidator.i18n.iban.countries[f])
            };
            c = c.substr(4) + c.substr(0, 4);
            c = b.map(c.split(""), function(a) {
                var b = a.charCodeAt(0);
                return 65 <=
                    b && 90 >= b ? b - 65 + 10 : a
            });
            c = c.join("");
            e = parseInt(c.substr(0, 1), 10);
            d = c.length;
            for (var h = 1; d > h; ++h) e = (10 * e + parseInt(c.substr(h, 1), 10)) % 97;
            return {
                valid: 1 === e,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.iban.country, b.fn.bootstrapValidator.i18n.iban.countries[f])
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.id = b.extend(b.fn.bootstrapValidator.i18n.id || {}, {
        "default": "Please enter a valid identification number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s identification number",
        countries: {
            BA: "Bosnia and Herzegovina",
            BG: "Bulgarian",
            BR: "Brazilian",
            CH: "Swiss",
            CL: "Chilean",
            CZ: "Czech",
            DK: "Danish",
            EE: "Estonian",
            ES: "Spanish",
            FI: "Finnish",
            HR: "Croatian",
            IE: "Irish",
            IS: "Iceland",
            LT: "Lithuanian",
            LV: "Latvian",
            ME: "Montenegro",
            MK: "Macedonian",
            NL: "Dutch",
            RO: "Romanian",
            RS: "Serbian",
            SE: "Swedish",
            SI: "Slovenian",
            SK: "Slovak",
            SM: "San Marino",
            ZA: "South African"
        }
    });
    b.fn.bootstrapValidator.validators.id = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: "BA BG BR CH CL CZ DK EE ES FI HR IE IS LT LV ME MK NL RO RS SE SI SK SM ZA".split(" "),
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f = a.country;
            return (f ? ("string" != typeof f || -1 === b.inArray(f.toUpperCase(), this.COUNTRY_CODES)) && (f = e.getDynamicOption(d, f)) : f = c.substr(0,
                2), -1 === b.inArray(f, this.COUNTRY_CODES)) ? {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(b.fn.bootstrapValidator.i18n.id.countryNotSupported, f)
            } : this[["_", f.toLowerCase()].join("")](c) ? !0 : {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.id.country, b.fn.bootstrapValidator.i18n.id.countries[f.toUpperCase()])
            }
        },
        _validateJMBG: function(b, d) {
            if (!/^\d{13}$/.test(b)) return !1;
            var a = parseInt(b.substr(0, 2), 10),
                c = parseInt(b.substr(2, 2), 10),
                f = (parseInt(b.substr(4,
                    3), 10), parseInt(b.substr(7, 2), 10)),
                h = parseInt(b.substr(12, 1), 10);
            if (31 < a || 12 < c) return !1;
            for (c = a = 0; 6 > c; c++) a += (7 - c) * (parseInt(b.charAt(c), 10) + parseInt(b.charAt(c + 6), 10));
            if (a = 11 - a % 11, (10 === a || 11 === a) && (a = 0), a !== h) return !1;
            switch (d.toUpperCase()) {
                case "BA":
                    return 10 <= f && 19 >= f;
                case "MK":
                    return 41 <= f && 49 >= f;
                case "ME":
                    return 20 <= f && 29 >= f;
                case "RS":
                    return 70 <= f && 99 >= f;
                case "SI":
                    return 50 <= f && 59 >= f;
                default:
                    return !0
            }
        },
        _ba: function(b) {
            return this._validateJMBG(b, "BA")
        },
        _mk: function(b) {
            return this._validateJMBG(b,
                "MK")
        },
        _me: function(b) {
            return this._validateJMBG(b, "ME")
        },
        _rs: function(b) {
            return this._validateJMBG(b, "RS")
        },
        _si: function(b) {
            return this._validateJMBG(b, "SI")
        },
        _bg: function(e) {
            if (!/^\d{10}$/.test(e) && !/^\d{6}\s\d{3}\s\d{1}$/.test(e)) return !1;
            e = e.replace(/\s/g, "");
            var d = parseInt(e.substr(0, 2), 10) + 1900,
                a = parseInt(e.substr(2, 2), 10),
                c = parseInt(e.substr(4, 2), 10);
            if (40 < a ? (d += 100, a -= 40) : 20 < a && (d -= 100, a -= 20), !b.fn.bootstrapValidator.helpers.date(d, a, c)) return !1;
            d = 0;
            a = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            for (c = 0; 9 > c; c++) d +=
                parseInt(e.charAt(c), 10) * a[c];
            return d = d % 11 % 10, d + "" === e.substr(9, 1)
        },
        _br: function(b) {
            if (/^1{11}|2{11}|3{11}|4{11}|5{11}|6{11}|7{11}|8{11}|9{11}|0{11}$/.test(b) || !/^\d{11}$/.test(b) && !/^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(b)) return !1;
            b = b.replace(/\./g, "").replace(/-/g, "");
            for (var d = 0, a = 0; 9 > a; a++) d += (10 - a) * parseInt(b.charAt(a), 10);
            if (d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" !== b.charAt(9)) return !1;
            for (a = d = 0; 10 > a; a++) d += (11 - a) * parseInt(b.charAt(a), 10);
            return d = 11 - d % 11, (10 === d || 11 === d) && (d = 0), d + "" === b.charAt(10)
        },
        _ch: function(b) {
            if (!/^756[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{4}[\.]{0,1}[0-9]{2}$/.test(b)) return !1;
            b = b.replace(/\D/g, "").substr(3);
            for (var d = b.length, a = 0, c = 8 === d ? [3, 1] : [1, 3], f = 0; d - 1 > f; f++) a += parseInt(b.charAt(f), 10) * c[f % 2];
            return a = 10 - a % 10, a + "" === b.charAt(d - 1)
        },
        _cl: function(b) {
            if (!/^\d{7,8}[-]{0,1}[0-9K]$/i.test(b)) return !1;
            for (b = b.replace(/\-/g, ""); 9 > b.length;) b = "0" + b;
            for (var d = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = 11 - d % 11, 11 === d ? d = 0 : 10 === d && (d = "K"), d + "" === b.charAt(8).toUpperCase()
        },
        _cz: function(e) {
            if (!/^\d{9,10}$/.test(e)) return !1;
            var d = 1900 + parseInt(e.substr(0, 2), 10),
                a = parseInt(e.substr(2, 2), 10) % 50 % 20,
                c = parseInt(e.substr(4, 2), 10);
            if (9 === e.length) {
                if (1980 <= d && (d -= 100), 1953 < d) return !1
            } else 1954 > d && (d += 100);
            return b.fn.bootstrapValidator.helpers.date(d, a, c) ? 10 === e.length ? (a = parseInt(e.substr(0, 9), 10) % 11, 1985 > d && (a %= 10), a + "" === e.substr(9, 1)) : !0 : !1
        },
        _dk: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
            e = e.replace(/-/g, "");
            var d = parseInt(e.substr(0, 2), 10),
                a = parseInt(e.substr(2,
                    2), 10),
                c = parseInt(e.substr(4, 2), 10);
            switch (!0) {
                case -1 !== "5678".indexOf(e.charAt(6)) && 58 <= c:
                    c += 1800;
                    break;
                case -1 !== "0123".indexOf(e.charAt(6)):
                case -1 !== "49".indexOf(e.charAt(6)) && 37 <= c:
                    c += 1900;
                    break;
                default:
                    c += 2E3
            }
            return b.fn.bootstrapValidator.helpers.date(c, a, d)
        },
        _ee: function(b) {
            return this._lt(b)
        },
        _es: function(b) {
            if (!/^[0-9A-Z]{8}[-]{0,1}[0-9A-Z]$/.test(b) && !/^[XYZ][-]{0,1}[0-9]{7}[-]{0,1}[0-9A-Z]$/.test(b)) return !1;
            b = b.replace(/-/g, "");
            var d = "XYZ".indexOf(b.charAt(0)); - 1 !== d && (b = d + b.substr(1) +
                "");
            d = parseInt(b.substr(0, 8), 10);
            return d = "TRWAGMYFPDXBNJZSQVHLCKE" [d % 23], d === b.substr(8, 1)
        },
        _fi: function(e) {
            if (!/^[0-9]{6}[-+A][0-9]{3}[0-9ABCDEFHJKLMNPRSTUVWXY]$/.test(e)) return !1;
            var d = parseInt(e.substr(0, 2), 10),
                a = parseInt(e.substr(2, 2), 10),
                c = parseInt(e.substr(4, 2), 10);
            if ((c = {
                    "+": 1800,
                    "-": 1900,
                    A: 2E3
                }[e.charAt(6)] + c, !b.fn.bootstrapValidator.helpers.date(c, a, d)) || 2 > parseInt(e.substr(7, 3), 10)) return !1;
            d = e.substr(0, 6) + e.substr(7, 3) + "";
            return d = parseInt(d, 10), "0123456789ABCDEFHJKLMNPRSTUVWXY".charAt(d %
                31) === e.charAt(10)
        },
        _hr: function(e) {
            return /^[0-9]{11}$/.test(e) ? b.fn.bootstrapValidator.helpers.mod11And10(e) : !1
        },
        _ie: function(b) {
            if (!/^\d{7}[A-W][AHWTX]?$/.test(b)) return !1;
            var d = function(a) {
                for (; 7 > a.length;) a = "0" + a;
                for (var b = 0, d = 0; 7 > d; d++) b += parseInt(a.charAt(d), 10) * (8 - d);
                return b += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(a.substr(7)), "WABCDEFGHIJKLMNOPQRSTUV" [b % 23]
            };
            return 9 !== b.length || "A" !== b.charAt(8) && "H" !== b.charAt(8) ? b.charAt(7) === d(b.substr(0, 7)) : b.charAt(7) === d(b.substr(0, 7) + b.substr(8) + "")
        },
        _is: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)) return !1;
            e = e.replace(/-/g, "");
            var d = parseInt(e.substr(0, 2), 10),
                a = parseInt(e.substr(2, 2), 10),
                c = parseInt(e.substr(4, 2), 10),
                f = parseInt(e.charAt(9), 10);
            if (c = 9 === f ? 1900 + c : 100 * (20 + f) + c, !b.fn.bootstrapValidator.helpers.date(c, a, d, !0)) return !1;
            d = 0;
            a = [3, 2, 7, 6, 5, 4, 3, 2];
            for (c = 0; 8 > c; c++) d += parseInt(e.charAt(c), 10) * a[c];
            return d = 11 - d % 11, d + "" === e.charAt(8)
        },
        _lt: function(e) {
            if (!/^[0-9]{11}$/.test(e)) return !1;
            var d = parseInt(e.charAt(0), 10),
                a = parseInt(e.substr(1,
                    2), 10),
                c = parseInt(e.substr(3, 2), 10),
                f = parseInt(e.substr(5, 2), 10);
            if (a = 100 * (0 === d % 2 ? 17 + d / 2 : 17 + (d + 1) / 2) + a, !b.fn.bootstrapValidator.helpers.date(a, c, f, !0)) return !1;
            d = 0;
            a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1];
            for (c = 0; 10 > c; c++) d += parseInt(e.charAt(c), 10) * a[c];
            if (d %= 11, 10 !== d) return d + "" === e.charAt(10);
            d = 0;
            a = [3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
            for (c = 0; 10 > c; c++) d += parseInt(e.charAt(c), 10) * a[c];
            return d %= 11, 10 === d && (d = 0), d + "" === e.charAt(10)
        },
        _lv: function(e) {
            if (!/^[0-9]{6}[-]{0,1}[0-9]{5}$/.test(e)) return !1;
            e = e.replace(/\D/g, "");
            var d =
                parseInt(e.substr(0, 2), 10),
                a = parseInt(e.substr(2, 2), 10),
                c = parseInt(e.substr(4, 2), 10);
            if (c = c + 1800 + 100 * parseInt(e.charAt(6), 10), !b.fn.bootstrapValidator.helpers.date(c, a, d, !0)) return !1;
            d = 0;
            a = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (c = 0; 10 > c; c++) d += parseInt(e.charAt(c), 10) * a[c];
            return d = (d + 1) % 11 % 10, d + "" === e.charAt(10)
        },
        _nl: function(b) {
            for (; 9 > b.length;) b = "0" + b;
            if (!/^[0-9]{4}[.]{0,1}[0-9]{2}[.]{0,1}[0-9]{3}$/.test(b) || (b = b.replace(/\./g, ""), 0 === parseInt(b, 10))) return !1;
            for (var d = 0, a = b.length, c = 0; a - 1 > c; c++) d += (9 - c) *
                parseInt(b.charAt(c), 10);
            return d %= 11, 10 === d && (d = 0), d + "" === b.charAt(a - 1)
        },
        _ro: function(e) {
            if (!/^[0-9]{13}$/.test(e)) return !1;
            var d = parseInt(e.charAt(0), 10);
            if (0 === d || 7 === d || 8 === d) return !1;
            var a = parseInt(e.substr(1, 2), 10),
                c = parseInt(e.substr(3, 2), 10),
                f = parseInt(e.substr(5, 2), 10),
                h = {
                    1: 1900,
                    2: 1900,
                    3: 1800,
                    4: 1800,
                    5: 2E3,
                    6: 2E3
                };
            if (31 < f && 12 < c || 9 !== d && (a = h[d + ""] + a, !b.fn.bootstrapValidator.helpers.date(a, c, f))) return !1;
            d = 0;
            a = [2, 7, 9, 1, 4, 6, 3, 5, 8, 2, 7, 9];
            c = e.length;
            for (f = 0; c - 1 > f; f++) d += parseInt(e.charAt(f), 10) *
                a[f];
            return d %= 11, 10 === d && (d = 1), d + "" === e.charAt(c - 1)
        },
        _se: function(e) {
            if (!/^[0-9]{10}$/.test(e) && !/^[0-9]{6}[-|+][0-9]{4}$/.test(e)) return !1;
            e = e.replace(/[^0-9]/g, "");
            var d = parseInt(e.substr(0, 2), 10) + 1900,
                a = parseInt(e.substr(2, 2), 10),
                c = parseInt(e.substr(4, 2), 10);
            return b.fn.bootstrapValidator.helpers.date(d, a, c) ? b.fn.bootstrapValidator.helpers.luhn(e) : !1
        },
        _sk: function(b) {
            return this._cz(b)
        },
        _sm: function(b) {
            return /^\d{5}$/.test(b)
        },
        _za: function(e) {
            if (!/^[0-9]{10}[0|1][8|9][0-9]$/.test(e)) return !1;
            var d = parseInt(e.substr(0, 2), 10),
                a = (new Date).getFullYear() % 100,
                c = parseInt(e.substr(2, 2), 10),
                f = parseInt(e.substr(4, 2), 10);
            return d = d >= a ? d + 1900 : d + 2E3, b.fn.bootstrapValidator.helpers.date(d, c, f) ? b.fn.bootstrapValidator.helpers.luhn(e) : !1
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.identical = b.extend(b.fn.bootstrapValidator.i18n.identical || {}, {
        "default": "Please enter the same value"
    });
    b.fn.bootstrapValidator.validators.identical = {
        html5Attributes: {
            message: "message",
            field: "field"
        },
        validate: function(b, d, a) {
            d = d.val();
            if ("" === d) return !0;
            var c = b.getFieldElements(a.field);
            return null === c || 0 === c.length ? !0 : d === c.val() ? (b.updateStatus(a.field, b.STATUS_VALID, "identical"), !0) : !1
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.imei = b.extend(b.fn.bootstrapValidator.i18n.imei || {}, {
        "default": "Please enter a valid IMEI number"
    });
    b.fn.bootstrapValidator.validators.imei = {
        validate: function(e, d) {
            var a = d.val();
            if ("" === a) return !0;
            switch (!0) {
                case /^\d{15}$/.test(a):
                case /^\d{2}-\d{6}-\d{6}-\d{1}$/.test(a):
                case /^\d{2}\s\d{6}\s\d{6}\s\d{1}$/.test(a):
                    return a = a.replace(/[^0-9]/g, ""), b.fn.bootstrapValidator.helpers.luhn(a);
                case /^\d{14}$/.test(a):
                case /^\d{16}$/.test(a):
                case /^\d{2}-\d{6}-\d{6}(|-\d{2})$/.test(a):
                case /^\d{2}\s\d{6}\s\d{6}(|\s\d{2})$/.test(a):
                    return !0;
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.imo = b.extend(b.fn.bootstrapValidator.i18n.imo || {}, {
        "default": "Please enter a valid IMO number"
    });
    b.fn.bootstrapValidator.validators.imo = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (!/^IMO \d{7}$/i.test(a)) return !1;
            for (var c = 0, a = a.replace(/^.*(\d{7})$/, "$1"), f = 6; 1 <= f; f--) c += a.slice(6 - f, -f) * (f + 1);
            return c % 10 === parseInt(a.charAt(6), 10)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.integer = b.extend(b.fn.bootstrapValidator.i18n.integer || {}, {
        "default": "Please enter a valid number"
    });
    b.fn.bootstrapValidator.validators.integer = {
        enableByHtml5: function(b) {
            return "number" === b.attr("type") && (void 0 === b.attr("step") || 0 === b.attr("step") % 1)
        },
        validate: function(b, d) {
            if (this.enableByHtml5(d) && d.get(0).validity && !0 === d.get(0).validity.badInput) return !1;
            var a = d.val();
            return "" === a ? !0 : /^(?:-?(?:0|[1-9][0-9]*))$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.ip = b.extend(b.fn.bootstrapValidator.i18n.ip || {}, {
        "default": "Please enter a valid IP address",
        ipv4: "Please enter a valid IPv4 address",
        ipv6: "Please enter a valid IPv6 address"
    });
    b.fn.bootstrapValidator.validators.ip = {
        html5Attributes: {
            message: "message",
            ipv4: "ipv4",
            ipv6: "ipv6"
        },
        validate: function(e, d, a) {
            d = d.val();
            if ("" === d) return !0;
            a = b.extend({}, {
                ipv4: !0,
                ipv6: !0
            }, a);
            var c = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                f = /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
            e = !1;
            switch (!0) {
                case a.ipv4 && !a.ipv6:
                    e = c.test(d);
                    a = a.message || b.fn.bootstrapValidator.i18n.ip.ipv4;
                    break;
                case !a.ipv4 && a.ipv6:
                    e = f.test(d);
                    a = a.message || b.fn.bootstrapValidator.i18n.ip.ipv6;
                    break;
                default:
                    e = c.test(d) && f.test(d), a = a.message || b.fn.bootstrapValidator.i18n.ip["default"]
            }
            return {
                valid: e,
                message: a
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.isbn = b.extend(b.fn.bootstrapValidator.i18n.isbn || {}, {
        "default": "Please enter a valid ISBN number"
    });
    b.fn.bootstrapValidator.validators.isbn = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            var c;
            switch (!0) {
                case /^\d{9}[\dX]$/.test(a):
                case 13 === a.length && /^(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 13 === a.length && /^(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    c = "ISBN10";
                    break;
                case /^(978|979)\d{9}[\dX]$/.test(a):
                case 17 === a.length && /^(978|979)-(\d+)-(\d+)-(\d+)-([\dX])$/.test(a):
                case 17 ===
                a.length && /^(978|979)\s(\d+)\s(\d+)\s(\d+)\s([\dX])$/.test(a):
                    c = "ISBN13";
                    break;
                default:
                    return !1
            }
            var a = a.replace(/[^0-9X]/gi, ""),
                f, a = a.split(""),
                h = a.length,
                k = 0;
            switch (c) {
                case "ISBN10":
                    for (c = k = 0; h - 1 > c; c++) k += parseInt(a[c], 10) * (10 - c);
                    return f = 11 - k % 11, 11 === f ? f = 0 : 10 === f && (f = "X"), f + "" === a[h - 1];
                case "ISBN13":
                    for (c = k = 0; h - 1 > c; c++) k += 0 === c % 2 ? parseInt(a[c], 10) : 3 * parseInt(a[c], 10);
                    return f = 10 - k % 10, 10 === f && (f = "0"), f + "" === a[h - 1];
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.isin = b.extend(b.fn.bootstrapValidator.i18n.isin || {}, {
        "default": "Please enter a valid ISIN number"
    });
    b.fn.bootstrapValidator.validators.isin = {
        COUNTRY_CODES: "AF|AX|AL|DZ|AS|AD|AO|AI|AQ|AG|AR|AM|AW|AU|AT|AZ|BS|BH|BD|BB|BY|BE|BZ|BJ|BM|BT|BO|BQ|BA|BW|BV|BR|IO|BN|BG|BF|BI|KH|CM|CA|CV|KY|CF|TD|CL|CN|CX|CC|CO|KM|CG|CD|CK|CR|CI|HR|CU|CW|CY|CZ|DK|DJ|DM|DO|EC|EG|SV|GQ|ER|EE|ET|FK|FO|FJ|FI|FR|GF|PF|TF|GA|GM|GE|DE|GH|GI|GR|GL|GD|GP|GU|GT|GG|GN|GW|GY|HT|HM|VA|HN|HK|HU|IS|IN|ID|IR|IQ|IE|IM|IL|IT|JM|JP|JE|JO|KZ|KE|KI|KP|KR|KW|KG|LA|LV|LB|LS|LR|LY|LI|LT|LU|MO|MK|MG|MW|MY|MV|ML|MT|MH|MQ|MR|MU|YT|MX|FM|MD|MC|MN|ME|MS|MA|MZ|MM|NA|NR|NP|NL|NC|NZ|NI|NE|NG|NU|NF|MP|NO|OM|PK|PW|PS|PA|PG|PY|PE|PH|PN|PL|PT|PR|QA|RE|RO|RU|RW|BL|SH|KN|LC|MF|PM|VC|WS|SM|ST|SA|SN|RS|SC|SL|SG|SX|SK|SI|SB|SO|ZA|GS|SS|ES|LK|SD|SR|SJ|SZ|SE|CH|SY|TW|TJ|TZ|TH|TL|TG|TK|TO|TT|TN|TR|TM|TC|TV|UG|UA|AE|GB|US|UM|UY|UZ|VU|VE|VN|VG|VI|WF|EH|YE|ZM|ZW",
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            a = a.toUpperCase();
            if (!(new RegExp("^(" + this.COUNTRY_CODES + ")[0-9A-Z]{10}$")).test(a)) return !1;
            for (var c = "", f = a.length, h = 0; f - 1 > h; h++) var k = a.charCodeAt(h),
                c = c + (57 < k ? (k - 55).toString() : a.charAt(h));
            for (var k = "", m = c.length, q = 0 !== m % 2 ? 0 : 1, h = 0; m > h; h++) k += parseInt(c[h], 10) * (h % 2 === q ? 2 : 1) + "";
            for (h = c = 0; h < k.length; h++) c += parseInt(k.charAt(h), 10);
            return c = (10 - c % 10) % 10, c + "" === a.charAt(f - 1)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.ismn = b.extend(b.fn.bootstrapValidator.i18n.ismn || {}, {
        "default": "Please enter a valid ISMN number"
    });
    b.fn.bootstrapValidator.validators.ismn = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            var c;
            switch (!0) {
                case /^M\d{9}$/.test(a):
                case /^M-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^M\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    c = "ISMN10";
                    break;
                case /^9790\d{9}$/.test(a):
                case /^979-0-\d{4}-\d{4}-\d{1}$/.test(a):
                case /^979\s0\s\d{4}\s\d{4}\s\d{1}$/.test(a):
                    c = "ISMN13";
                    break;
                default:
                    return !1
            }
            "ISMN10" === c && (a = "9790" + a.substr(1));
            a = a.replace(/[^0-9]/gi, "");
            c = a.length;
            for (var f = 0, h = [1, 3], k = 0; c - 1 > k; k++) f += parseInt(a.charAt(k), 10) * h[k % 2];
            return f = 10 - f % 10, f + "" === a.charAt(c - 1)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.issn = b.extend(b.fn.bootstrapValidator.i18n.issn || {}, {
        "default": "Please enter a valid ISSN number"
    });
    b.fn.bootstrapValidator.validators.issn = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (!/^\d{4}\-\d{3}[\dX]$/.test(a)) return !1;
            var a = a.replace(/[^0-9X]/gi, ""),
                a = a.split(""),
                c = a.length,
                f = 0;
            "X" === a[7] && (a[7] = 10);
            for (var h = 0; c > h; h++) f += parseInt(a[h], 10) * (8 - h);
            return 0 === f % 11
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.lessThan = b.extend(b.fn.bootstrapValidator.i18n.lessThan || {}, {
        "default": "Please enter a value less than or equal to %s",
        notInclusive: "Please enter a value less than %s"
    });
    b.fn.bootstrapValidator.validators.lessThan = {
        html5Attributes: {
            message: "message",
            value: "value",
            inclusive: "inclusive"
        },
        enableByHtml5: function(b) {
            var d = b.attr("type");
            return (b = b.attr("max")) && "date" !== d ? {
                value: b
            } : !1
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            if (!b.isNumeric(c)) return !1;
            e = b.isNumeric(a.value) ? a.value : e.getDynamicOption(d, a.value);
            return c = parseFloat(c), !0 === a.inclusive || void 0 === a.inclusive ? {
                valid: e >= c,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.lessThan["default"], e)
            } : {
                valid: e > c,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.lessThan.notInclusive, e)
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.mac = b.extend(b.fn.bootstrapValidator.i18n.mac || {}, {
        "default": "Please enter a valid MAC address"
    });
    b.fn.bootstrapValidator.validators.mac = {
        validate: function(b, d) {
            var a = d.val();
            return "" === a ? !0 : /^([0-9A-F]{2}[:-]){5}([0-9A-F]{2})$/.test(a)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.meid = b.extend(b.fn.bootstrapValidator.i18n.meid || {}, {
        "default": "Please enter a valid MEID number"
    });
    b.fn.bootstrapValidator.validators.meid = {
        validate: function(e, d) {
            var a = d.val();
            if ("" === a) return !0;
            switch (!0) {
                case /^[0-9A-F]{15}$/i.test(a):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}[- ][0-9A-F]$/i.test(a):
                case /^\d{19}$/.test(a):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}[- ]\d$/.test(a):
                    var c = a.charAt(a.length - 1);
                    if (a = a.replace(/[- ]/g, ""), a.match(/^\d*$/i)) return b.fn.bootstrapValidator.helpers.luhn(a);
                    for (var a = a.slice(0, -1), f = "", h = 1; 13 >= h; h += 2) f += (2 * parseInt(a.charAt(h), 16)).toString(16);
                    for (h = a = 0; h < f.length; h++) a += parseInt(f.charAt(h), 16);
                    return 0 === a % 10 ? "0" === c : c === (2 * (10 * Math.floor((a + 10) / 10) - a)).toString(16);
                case /^[0-9A-F]{14}$/i.test(a):
                case /^[0-9A-F]{2}[- ][0-9A-F]{6}[- ][0-9A-F]{6}$/i.test(a):
                case /^\d{18}$/.test(a):
                case /^\d{5}[- ]\d{5}[- ]\d{4}[- ]\d{4}$/.test(a):
                    return !0;
                default:
                    return !1
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.notEmpty = b.extend(b.fn.bootstrapValidator.i18n.notEmpty || {}, {
        "default": "Please enter a value"
    });
    b.fn.bootstrapValidator.validators.notEmpty = {
        enableByHtml5: function(b) {
            b = b.attr("required") + "";
            return "required" === b || "true" === b
        },
        validate: function(e, d) {
            var a = d.attr("type");
            return "radio" === a || "checkbox" === a ? 0 < e.getFieldElements(d.attr("data-bv-field")).filter(":checked").length : "" !== b.trim(d.val())
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.numeric = b.extend(b.fn.bootstrapValidator.i18n.numeric || {}, {
        "default": "Please enter a valid float number"
    });
    b.fn.bootstrapValidator.validators.numeric = {
        html5Attributes: {
            message: "message",
            separator: "separator"
        },
        enableByHtml5: function(b) {
            return "number" === b.attr("type") && void 0 !== b.attr("step") && 0 !== b.attr("step") % 1
        },
        validate: function(b, d, a) {
            if (this.enableByHtml5(d) && d.get(0).validity && !0 === d.get(0).validity.badInput) return !1;
            b = d.val();
            if ("" === b) return !0;
            a = a.separator ||
                ".";
            return "." !== a && (b = b.replace(a, ".")), !isNaN(parseFloat(b)) && isFinite(b)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.phone = b.extend(b.fn.bootstrapValidator.i18n.phone || {}, {
        "default": "Please enter a valid phone number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid phone number in %s",
        countries: {
            BR: "Brazil",
            ES: "Spain",
            FR: "France",
            GB: "United Kingdom",
            MA: "Morocco",
            PK: "Pakistan",
            US: "USA"
        }
    });
    b.fn.bootstrapValidator.validators.phone = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: "BR ES FR GB MA PK US".split(" "),
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f = a.country;
            if (("string" != typeof f || -1 === b.inArray(f, this.COUNTRY_CODES)) && (f = e.getDynamicOption(d, f)), !f || -1 === b.inArray(f.toUpperCase(), this.COUNTRY_CODES)) return {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(b.fn.bootstrapValidator.i18n.phone.countryNotSupported, f)
            };
            e = !0;
            switch (f.toUpperCase()) {
                case "BR":
                    c = b.trim(c);
                    e = /^(([\d]{4}[-.\s]{1}[\d]{2,3}[-.\s]{1}[\d]{2}[-.\s]{1}[\d]{2})|([\d]{4}[-.\s]{1}[\d]{3}[-.\s]{1}[\d]{4})|((\(?\+?[0-9]{2}\)?\s?)?(\(?\d{2}\)?\s?)?\d{4,5}[-.\s]?\d{4}))$/.test(c);
                    break;
                case "ES":
                    c = b.trim(c);
                    e = /^(?:(?:(?:\+|00)34\D?))?(?:9|6)(?:\d\D?){8}$/.test(c);
                    break;
                case "FR":
                    c = b.trim(c);
                    e = /^(?:(?:(?:\+|00)33[ ]?(?:\(0\)[ ]?)?)|0){1}[1-9]{1}([ .-]?)(?:\d{2}\1?){3}\d{2}$/.test(c);
                    break;
                case "GB":
                    c = b.trim(c);
                    e = /^\(?(?:(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?\(?(?:0\)?[\s-]?\(?)?|0)(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}|\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}|\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3})|\d{5}\)?[\s-]?\d{4,5}|8(?:00[\s-]?11[\s-]?11|45[\s-]?46[\s-]?4\d))(?:(?:[\s-]?(?:x|ext\.?\s?|\#)\d+)?)$/.test(c);
                    break;
                case "MA":
                    c = b.trim(c);
                    e = /^(?:(?:(?:\+|00)212[\s]?(?:[\s]?\(0\)[\s]?)?)|0){1}(?:5[\s.-]?[2-3]|6[\s.-]?[13-9]){1}[0-9]{1}(?:[\s.-]?\d{2}){3}$/.test(c);
                    break;
                case "PK":
                    c = b.trim(c);
                    e = /^0?3[0-9]{2}[0-9]{7}$/.test(c);
                    break;
                default:
                    c = c.replace(/\D/g, ""), e = /^(?:(1\-?)|(\+1 ?))?\(?(\d{3})[\)\-\.]?(\d{3})[\-\.]?(\d{4})$/.test(c) && 10 === c.length
            }
            return {
                valid: e,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.phone.country, b.fn.bootstrapValidator.i18n.phone.countries[f])
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.regexp = b.extend(b.fn.bootstrapValidator.i18n.regexp || {}, {
        "default": "Please enter a value matching the pattern"
    });
    b.fn.bootstrapValidator.validators.regexp = {
        html5Attributes: {
            message: "message",
            regexp: "regexp"
        },
        enableByHtml5: function(b) {
            return (b = b.attr("pattern")) ? {
                regexp: b
            } : !1
        },
        validate: function(b, d, a) {
            b = d.val();
            return "" === b ? !0 : ("string" == typeof a.regexp ? new RegExp(a.regexp) : a.regexp).test(b)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.remote = b.extend(b.fn.bootstrapValidator.i18n.remote || {}, {
        "default": "Please enter a valid value"
    });
    b.fn.bootstrapValidator.validators.remote = {
        html5Attributes: {
            message: "message",
            name: "name",
            type: "type",
            url: "url"
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f = d.attr("data-bv-field"),
                h = a.data || {},
                k = a.url,
                m = a.type || "POST",
                q = a.headers || {};
            "function" == typeof h && (h = h.call(this, e));
            "function" == typeof k && (k = k.call(this, e));
            h[a.name || f] = c;
            var u = new b.Deferred,
                r = b.ajax({
                    type: m,
                    headers: q,
                    url: k,
                    dataType: "json",
                    data: h
                });
            return r.then(function(a) {
                u.resolve(d, "remote", !0 === a.valid || "true" === a.valid, a.message ? a.message : null)
            }), u.fail(function() {
                r.abort()
            }), u
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.rtn = b.extend(b.fn.bootstrapValidator.i18n.rtn || {}, {
        "default": "Please enter a valid RTN number"
    });
    b.fn.bootstrapValidator.validators.rtn = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (!/^\d{9}$/.test(a)) return !1;
            for (var c = 0, f = 0; f < a.length; f += 3) c += 3 * parseInt(a.charAt(f), 10) + 7 * parseInt(a.charAt(f + 1), 10) + parseInt(a.charAt(f + 2), 10);
            return 0 !== c && 0 === c % 10
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.sedol = b.extend(b.fn.bootstrapValidator.i18n.sedol || {}, {
        "default": "Please enter a valid SEDOL number"
    });
    b.fn.bootstrapValidator.validators.sedol = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (a = a.toUpperCase(), !/^[0-9A-Z]{7}$/.test(a)) return !1;
            for (var c = 0, f = [1, 3, 1, 7, 3, 9, 1], h = a.length, k = 0; h - 1 > k; k++) c += f[k] * parseInt(a.charAt(k), 36);
            return c = (10 - c % 10) % 10, c + "" === a.charAt(h - 1)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.siren = b.extend(b.fn.bootstrapValidator.i18n.siren || {}, {
        "default": "Please enter a valid SIREN number"
    });
    b.fn.bootstrapValidator.validators.siren = {
        validate: function(e, d) {
            var a = d.val();
            return "" === a ? !0 : /^\d{9}$/.test(a) ? b.fn.bootstrapValidator.helpers.luhn(a) : !1
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.siret = b.extend(b.fn.bootstrapValidator.i18n.siret || {}, {
        "default": "Please enter a valid SIRET number"
    });
    b.fn.bootstrapValidator.validators.siret = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            for (var c, f = 0, h = a.length, k = 0; h > k; k++) c = parseInt(a.charAt(k), 10), 0 === k % 2 && (c *= 2, 9 < c && (c -= 9)), f += c;
            return 0 === f % 10
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.step = b.extend(b.fn.bootstrapValidator.i18n.step || {}, {
        "default": "Please enter a valid step of %s"
    });
    b.fn.bootstrapValidator.validators.step = {
        html5Attributes: {
            message: "message",
            base: "baseValue",
            step: "step"
        },
        validate: function(e, d, a) {
            e = d.val();
            if ("" === e) return !0;
            if (a = b.extend({}, {
                    baseValue: 0,
                    step: 1
                }, a), e = parseFloat(e), !b.isNumeric(e)) return !1;
            var c = e - a.baseValue,
                f = a.step;
            0 === f ? e = 1 : (e = (c + "").split("."), d = (f + "").split("."), c -= f * Math.floor(c / f), e = Math.pow(10, (1 ===
                e.length ? 0 : e[1].length) + (1 === d.length ? 0 : d[1].length)), c *= e, d = 0 < c | -(0 > c), e = c % 1 === .5 * d ? (Math.floor(c) + (0 < d)) / e : Math.round(c) / e);
            return {
                valid: 0 === e || e === a.step,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.step["default"], [a.step])
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.stringCase = b.extend(b.fn.bootstrapValidator.i18n.stringCase || {}, {
        "default": "Please enter only lowercase characters",
        upper: "Please enter only uppercase characters"
    });
    b.fn.bootstrapValidator.validators.stringCase = {
        html5Attributes: {
            message: "message",
            "case": "case"
        },
        validate: function(e, d, a) {
            e = d.val();
            if ("" === e) return !0;
            d = (a["case"] || "lower").toLowerCase();
            return {
                valid: "upper" === d ? e === e.toUpperCase() : e === e.toLowerCase(),
                message: a.message || ("upper" === d ? b.fn.bootstrapValidator.i18n.stringCase.upper :
                    b.fn.bootstrapValidator.i18n.stringCase["default"])
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.stringLength = b.extend(b.fn.bootstrapValidator.i18n.stringLength || {}, {
        "default": "Please enter a value with valid length",
        less: "Please enter less than %s characters",
        more: "Please enter more than %s characters",
        between: "Please enter value between %s and %s characters long"
    });
    b.fn.bootstrapValidator.validators.stringLength = {
        html5Attributes: {
            message: "message",
            min: "min",
            max: "max"
        },
        enableByHtml5: function(b) {
            return (b = b.attr("maxlength")) ? {
                max: parseInt(b, 10)
            } : !1
        },
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f = b.isNumeric(a.min) ? a.min : e.getDynamicOption(d, a.min);
            e = b.isNumeric(a.max) ? a.max : e.getDynamicOption(d, a.max);
            c = c.length;
            d = !0;
            var h = a.message || b.fn.bootstrapValidator.i18n.stringLength["default"];
            switch ((f && c < parseInt(f, 10) || e && c > parseInt(e, 10)) && (d = !1), !0) {
                case !!f && !!e:
                    h = b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.stringLength.between, [parseInt(f, 10), parseInt(e, 10)]);
                    break;
                case !!f:
                    h = b.fn.bootstrapValidator.helpers.format(a.message ||
                        b.fn.bootstrapValidator.i18n.stringLength.more, parseInt(f, 10));
                    break;
                case !!e:
                    h = b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.stringLength.less, parseInt(e, 10))
            }
            return {
                valid: d,
                message: h
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.uri = b.extend(b.fn.bootstrapValidator.i18n.uri || {}, {
        "default": "Please enter a valid URI"
    });
    b.fn.bootstrapValidator.validators.uri = {
        html5Attributes: {
            message: "message",
            allowlocal: "allowLocal"
        },
        enableByHtml5: function(b) {
            return "url" === b.attr("type")
        },
        validate: function(b, d, a) {
            b = d.val();
            if ("" === b) return !0;
            a = !0 === a.allowLocal || "true" === a.allowLocal;
            return (new RegExp("^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:" + (a ? "" : "(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})") +
                "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))" + (a ? "?" : "") + ")(?::\\d{2,5})?(?:/[^\\s]*)?$", "i")).test(b)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.uuid = b.extend(b.fn.bootstrapValidator.i18n.uuid || {}, {
        "default": "Please enter a valid UUID number",
        version: "Please enter a valid UUID version %s number"
    });
    b.fn.bootstrapValidator.validators.uuid = {
        html5Attributes: {
            message: "message",
            version: "version"
        },
        validate: function(e, d, a) {
            e = d.val();
            if ("" === e) return !0;
            d = {
                3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
                4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
                all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
            };
            var c = a.version ? a.version + "" : "all";
            return {
                valid: null === d[c] ? !0 : d[c].test(e),
                message: a.version ? b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.uuid.version, a.version) : a.message || b.fn.bootstrapValidator.i18n.uuid["default"]
            }
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.vat = b.extend(b.fn.bootstrapValidator.i18n.vat || {}, {
        "default": "Please enter a valid VAT number",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s VAT number",
        countries: {
            AT: "Austrian",
            BE: "Belgian",
            BG: "Bulgarian",
            BR: "Brazilian",
            CH: "Swiss",
            CY: "Cypriot",
            CZ: "Czech",
            DE: "German",
            DK: "Danish",
            EE: "Estonian",
            ES: "Spanish",
            FI: "Finnish",
            FR: "French",
            GB: "United Kingdom",
            GR: "Greek",
            EL: "Greek",
            HU: "Hungarian",
            HR: "Croatian",
            IE: "Irish",
            IS: "Iceland",
            IT: "Italian",
            LT: "Lithuanian",
            LU: "Luxembourg",
            LV: "Latvian",
            MT: "Maltese",
            NL: "Dutch",
            NO: "Norwegian",
            PL: "Polish",
            PT: "Portuguese",
            RO: "Romanian",
            RU: "Russian",
            RS: "Serbian",
            SE: "Swedish",
            SI: "Slovenian",
            SK: "Slovak",
            ZA: "South African"
        }
    });
    b.fn.bootstrapValidator.validators.vat = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: "AT BE BG BR CH CY CZ DE DK EE EL ES FI FR GB GR HR HU IE IS IT LT LU LV MT NL NO PL PT RO RU RS SE SK SI ZA".split(" "),
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c) return !0;
            var f = a.country;
            return (f ? ("string" != typeof f || -1 === b.inArray(f.toUpperCase(), this.COUNTRY_CODES)) && (f = e.getDynamicOption(d, f)) : f = c.substr(0, 2), -1 === b.inArray(f, this.COUNTRY_CODES)) ? {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(b.fn.bootstrapValidator.i18n.vat.countryNotSupported, f)
            } : this[["_", f.toLowerCase()].join("")](c) ? !0 : {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.vat.country, b.fn.bootstrapValidator.i18n.vat.countries[f.toUpperCase()])
            }
        },
        _at: function(b) {
            if (!/^ATU[0-9]{8}$/.test(b)) return !1;
            b = b.substr(3);
            for (var d = 0, a = [1, 2, 1, 2, 1, 2, 1], c = 0, f = 0; 7 > f; f++) c = parseInt(b.charAt(f), 10) * a[f], 9 < c && (c = Math.floor(c / 10) + c % 10), d += c;
            return d = 10 - (d + 4) % 10, 10 === d && (d = 0), d + "" === b.substr(7, 1)
        },
        _be: function(b) {
            return /^BE[0]{0,1}[0-9]{9}$/.test(b) && (b = b.substr(2), 9 === b.length && (b = "0" + b), "0" !== b.substr(1, 1)) ? 0 === (parseInt(b.substr(0, 8), 10) + parseInt(b.substr(8, 2), 10)) % 97 : !1
        },
        _bg: function(e) {
            if (!/^BG[0-9]{9,10}$/.test(e)) return !1;
            e = e.substr(2);
            var d = 0,
                a = 0;
            if (9 ===
                e.length) {
                for (a = 0; 8 > a; a++) d += parseInt(e.charAt(a), 10) * (a + 1);
                if (d %= 11, 10 === d)
                    for (a = d = 0; 8 > a; a++) d += parseInt(e.charAt(a), 10) * (a + 3);
                return d %= 10, d + "" === e.substr(8)
            }
            return 10 === e.length ? (d = function(a) {
                for (var b = 0, d = [21, 19, 17, 13, 11, 9, 7, 3, 1], e = 0; 9 > e; e++) b += parseInt(a.charAt(e), 10) * d[e];
                return b %= 10, b + "" === a.substr(9, 1)
            }, a = function(a) {
                for (var b = 0, d = [4, 3, 2, 7, 6, 5, 4, 3, 2], e = 0; 9 > e; e++) b += parseInt(a.charAt(e), 10) * d[e];
                return b = 11 - b % 11, 10 === b ? !1 : (11 === b && (b = 0), b + "" === a.substr(9, 1))
            }, function(a) {
                var d = parseInt(a.substr(0,
                        2), 10) + 1900,
                    e = parseInt(a.substr(2, 2), 10),
                    k = parseInt(a.substr(4, 2), 10);
                if (40 < e ? (d += 100, e -= 40) : 20 < e && (d -= 100, e -= 20), !b.fn.bootstrapValidator.helpers.date(d, e, k)) return !1;
                d = 0;
                e = [2, 4, 8, 5, 10, 9, 7, 3, 6];
                for (k = 0; 9 > k; k++) d += parseInt(a.charAt(k), 10) * e[k];
                return d = d % 11 % 10, d + "" === a.substr(9, 1)
            }(e) || d(e) || a(e)) : !1
        },
        _br: function(b) {
            if ("" === b) return !0;
            b = b.replace(/[^\d]+/g, "");
            if ("" === b || 14 !== b.length || "00000000000000" === b || "11111111111111" === b || "22222222222222" === b || "33333333333333" === b || "44444444444444" === b || "55555555555555" ===
                b || "66666666666666" === b || "77777777777777" === b || "88888888888888" === b || "99999999999999" === b) return !1;
            for (var d = b.length - 2, a = b.substring(0, d), c = b.substring(d), f = 0, h = d - 7, k = d; 1 <= k; k--) f += parseInt(a.charAt(d - k), 10) * h--, 2 > h && (h = 9);
            var m;
            if ((2 > f % 11 ? 0 : 11 - f % 11) !== parseInt(c.charAt(0), 10)) return !1;
            d += 1;
            a = b.substring(0, d);
            f = 0;
            h = d - 7;
            for (k = d; 1 <= k; k--) f += parseInt(a.charAt(d - k), 10) * h--, 2 > h && (h = 9);
            return m = 2 > f % 11 ? 0 : 11 - f % 11, m === parseInt(c.charAt(1), 10)
        },
        _ch: function(b) {
            if (!/^CHE[0-9]{9}(MWST)?$/.test(b)) return !1;
            b =
                b.substr(3);
            for (var d = 0, a = [5, 4, 3, 2, 7, 6, 5, 4], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = 11 - d % 11, 10 === d ? !1 : (11 === d && (d = 0), d + "" === b.substr(8, 1))
        },
        _cy: function(b) {
            if (!/^CY[0-5|9]{1}[0-9]{7}[A-Z]{1}$/.test(b) || (b = b.substr(2), "12" === b.substr(0, 2))) return !1;
            for (var d = 0, a = {
                    0: 1,
                    1: 0,
                    2: 5,
                    3: 7,
                    4: 9,
                    5: 13,
                    6: 15,
                    7: 17,
                    8: 19,
                    9: 21
                }, c = 0; 8 > c; c++) {
                var f = parseInt(b.charAt(c), 10);
                0 === c % 2 && (f = a[f + ""]);
                d += f
            }
            return d = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" [d % 26], d + "" === b.substr(8, 1)
        },
        _cz: function(e) {
            if (!/^CZ[0-9]{8,10}$/.test(e)) return !1;
            e = e.substr(2);
            var d = 0,
                a = 0;
            if (8 === e.length) {
                if ("9" == e.charAt(0) + "") return !1;
                for (a = d = 0; 7 > a; a++) d += parseInt(e.charAt(a), 10) * (8 - a);
                return d = 11 - d % 11, 10 === d && (d = 0), 11 === d && (d = 1), d + "" === e.substr(7, 1)
            }
            if (9 === e.length && "6" == e.charAt(0) + "") {
                for (a = d = 0; 7 > a; a++) d += parseInt(e.charAt(a + 1), 10) * (8 - a);
                return d = 11 - d % 11, 10 === d && (d = 0), 11 === d && (d = 1), d = [8, 7, 6, 5, 4, 3, 2, 1, 0, 9, 10][d - 1], d + "" === e.substr(8, 1)
            }
            if (9 === e.length || 10 === e.length) {
                var d = 1900 + parseInt(e.substr(0, 2), 10),
                    a = parseInt(e.substr(2, 2), 10) % 50 % 20,
                    c = parseInt(e.substr(4,
                        2), 10);
                if (9 === e.length) {
                    if (1980 <= d && (d -= 100), 1953 < d) return !1
                } else 1954 > d && (d += 100);
                return b.fn.bootstrapValidator.helpers.date(d, a, c) ? 10 === e.length ? (a = parseInt(e.substr(0, 9), 10) % 11, 1985 > d && (a %= 10), a + "" === e.substr(9, 1)) : !0 : !1
            }
            return !1
        },
        _de: function(e) {
            return /^DE[0-9]{9}$/.test(e) ? (e = e.substr(2), b.fn.bootstrapValidator.helpers.mod11And10(e)) : !1
        },
        _dk: function(b) {
            if (!/^DK[0-9]{8}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [2, 7, 6, 5, 4, 3, 2, 1], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d %
                11
        },
        _ee: function(b) {
            if (!/^EE[0-9]{9}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [3, 7, 1, 3, 7, 1, 3, 7, 1], c = 0; 9 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d % 10
        },
        _es: function(b) {
            if (!/^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/.test(b)) return !1;
            b = b.substr(2);
            var d = function(a) {
                    var b = parseInt(a.substr(0, 8), 10);
                    return b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8, 1)
                },
                a = function(a) {
                    var b = ["XYZ".indexOf(a.charAt(0)), a.substr(1)].join("");
                    return b = parseInt(b, 10), b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8,
                        1)
                },
                c = function(a) {
                    var b, c = a.charAt(0);
                    if (-1 !== "KLM".indexOf(c)) return b = parseInt(a.substr(1, 8), 10), b = "TRWAGMYFPDXBNJZSQVHLCKE" [b % 23], b + "" === a.substr(8, 1);
                    if (-1 !== "ABCDEFGHJNPQRSUVW".indexOf(c)) {
                        b = 0;
                        for (var c = [2, 1, 2, 1, 2, 1, 2], d = 0, e = 0; 7 > e; e++) d = parseInt(a.charAt(e + 1), 10) * c[e], 9 < d && (d = Math.floor(d / 10) + d % 10), b += d;
                        return b = 10 - b % 10, b + "" === a.substr(8, 1) || "JABCDEFGHI" [b] === a.substr(8, 1)
                    }
                    return !1
                },
                f = b.charAt(0);
            return /^[0-9]$/.test(f) ? d(b) : /^[XYZ]$/.test(f) ? a(b) : c(b)
        },
        _fi: function(b) {
            if (!/^FI[0-9]{8}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [7, 9, 10, 5, 8, 4, 2, 1], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d % 11
        },
        _fr: function(e) {
            if (!/^FR[0-9A-Z]{2}[0-9]{9}$/.test(e) || (e = e.substr(2), !b.fn.bootstrapValidator.helpers.luhn(e.substr(2)))) return !1;
            if (/^[0-9]{2}$/.test(e.substr(0, 2))) return e.substr(0, 2) === parseInt(e.substr(2) + "12", 10) % 97 + "";
            var d;
            return d = /^[0-9]{1}$/.test(e.charAt(0)) ? 24 * "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(e.charAt(0)) + "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(e.charAt(1)) - 10 :
                34 * "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(e.charAt(0)) + "0123456789ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(e.charAt(1)) - 100, (parseInt(e.substr(2), 10) + 1 + Math.floor(d / 11)) % 11 === d % 11
        },
        _gb: function(b) {
            if (!(/^GB[0-9]{9}$/.test(b) || /^GB[0-9]{12}$/.test(b) || /^GBGD[0-9]{3}$/.test(b) || /^GBHA[0-9]{3}$/.test(b) || /^GB(GD|HA)8888[0-9]{5}$/.test(b))) return !1;
            b = b.substr(2);
            var d = b.length;
            if (5 === d) return d = b.substr(0, 2), b = parseInt(b.substr(2), 10), "GD" === d && 500 > b || "HA" === d && 500 <= b;
            if (11 === d && ("GD8888" === b.substr(0,
                    6) || "HA8888" === b.substr(0, 6))) return "GD" === b.substr(0, 2) && 500 <= parseInt(b.substr(6, 3), 10) || "HA" === b.substr(0, 2) && 500 > parseInt(b.substr(6, 3), 10) ? !1 : parseInt(b.substr(6, 3), 10) % 97 === parseInt(b.substr(9, 2), 10);
            if (9 === d || 12 === d) {
                for (var d = 0, a = [8, 7, 6, 5, 4, 3, 2, 10, 1], c = 0; 9 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
                return d %= 97, 100 <= parseInt(b.substr(0, 3), 10) ? 0 === d || 42 === d || 55 === d : 0 === d
            }
            return !0
        },
        _gr: function(b) {
            if (!/^GR[0-9]{9}$/.test(b)) return !1;
            b = b.substr(2);
            8 === b.length && (b = "0" + b);
            for (var d = 0, a = [256, 128, 64,
                    32, 16, 8, 4, 2
                ], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = d % 11 % 10, d + "" === b.substr(8, 1)
        },
        _el: function(b) {
            return /^EL[0-9]{9}$/.test(b) ? (b = "GR" + b.substr(2), this._gr(b)) : !1
        },
        _hu: function(b) {
            if (!/^HU[0-9]{8}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [9, 7, 3, 1, 9, 7, 3, 1], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d % 10
        },
        _hr: function(e) {
            return /^HR[0-9]{11}$/.test(e) ? (e = e.substr(2), b.fn.bootstrapValidator.helpers.mod11And10(e)) : !1
        },
        _ie: function(b) {
            if (!/^IE[0-9]{1}[0-9A-Z\*\+]{1}[0-9]{5}[A-Z]{1,2}$/.test(b)) return !1;
            b = b.substr(2);
            var d = function(a) {
                for (; 7 > a.length;) a = "0" + a;
                for (var b = 0, d = 0; 7 > d; d++) b += parseInt(a.charAt(d), 10) * (8 - d);
                return b += 9 * "WABCDEFGHIJKLMNOPQRSTUV".indexOf(a.substr(7)), "WABCDEFGHIJKLMNOPQRSTUV" [b % 23]
            };
            return /^[0-9]+$/.test(b.substr(0, 7)) ? b.charAt(7) === d(b.substr(0, 7) + b.substr(8) + "") : -1 !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ+*".indexOf(b.charAt(1)) ? b.charAt(7) === d(b.substr(2, 5) + b.substr(0, 1) + "") : !0
        },
        _is: function(b) {
            return /^IS\d{5,6}$/.test(b)
        },
        _it: function(e) {
            if (!/^IT[0-9]{11}$/.test(e) || (e = e.substr(2),
                    0 === parseInt(e.substr(0, 7), 10))) return !1;
            var d = parseInt(e.substr(7, 3), 10);
            return 1 > d || 201 < d && 999 !== d && 888 !== d ? !1 : b.fn.bootstrapValidator.helpers.luhn(e)
        },
        _lt: function(b) {
            if (!/^LT([0-9]{7}1[0-9]{1}|[0-9]{10}1[0-9]{1})$/.test(b)) return !1;
            b = b.substr(2);
            var d, a = b.length,
                c = 0;
            for (d = 0; a - 1 > d; d++) c += parseInt(b.charAt(d), 10) * (1 + d % 9);
            var f = c % 11;
            if (10 === f)
                for (d = c = 0; a - 1 > d; d++) c += parseInt(b.charAt(d), 10) * (1 + (d + 2) % 9);
            return f = f % 11 % 10, f + "" === b.charAt(a - 1)
        },
        _lu: function(b) {
            return /^LU[0-9]{8}$/.test(b) ? (b = b.substr(2),
                parseInt(b.substr(0, 6), 10) % 89 + "" === b.substr(6, 2)) : !1
        },
        _lv: function(e) {
            if (!/^LV[0-9]{11}$/.test(e)) return !1;
            e = e.substr(2);
            var d;
            d = parseInt(e.charAt(0), 10);
            var a = 0,
                c = [],
                f = e.length;
            if (3 < d) {
                a = 0;
                c = [9, 1, 4, 8, 3, 10, 2, 5, 7, 6, 1];
                for (d = 0; f > d; d++) a += parseInt(e.charAt(d), 10) * c[d];
                return a %= 11, 3 === a
            }
            a = parseInt(e.substr(0, 2), 10);
            c = parseInt(e.substr(2, 2), 10);
            d = parseInt(e.substr(4, 2), 10);
            if (d = d + 1800 + 100 * parseInt(e.charAt(6), 10), !b.fn.bootstrapValidator.helpers.date(d, c, a)) return !1;
            a = 0;
            c = [10, 5, 8, 4, 2, 1, 6, 3, 7, 9];
            for (d =
                0; f - 1 > d; d++) a += parseInt(e.charAt(d), 10) * c[d];
            return a = (a + 1) % 11 % 10, a + "" === e.charAt(f - 1)
        },
        _mt: function(b) {
            if (!/^MT[0-9]{8}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [3, 4, 6, 7, 8, 9, 10, 1], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d % 37
        },
        _nl: function(b) {
            if (!/^NL[0-9]{9}B[0-9]{2}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d %= 11, 9 < d && (d = 0), d + "" === b.substr(8, 1)
        },
        _no: function(b) {
            if (!/^NO[0-9]{9}$/.test(b)) return !1;
            b =
                b.substr(2);
            for (var d = 0, a = [3, 2, 7, 6, 5, 4, 3, 2], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = 11 - d % 11, 11 === d && (d = 0), d + "" === b.substr(8, 1)
        },
        _pl: function(b) {
            if (!/^PL[0-9]{10}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [6, 5, 7, 2, 3, 4, 5, 6, 7, -1], c = 0; 10 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return 0 === d % 11
        },
        _pt: function(b) {
            if (!/^PT[0-9]{9}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [9, 8, 7, 6, 5, 4, 3, 2], c = 0; 8 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = 11 - d % 11, 9 < d && (d = 0), d + "" === b.substr(8, 1)
        },
        _ro: function(b) {
            if (!/^RO[1-9][0-9]{1,9}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = b.length, a = [7, 5, 3, 2, 1, 7, 5, 3, 2].slice(10 - d), c = 0, f = 0; d - 1 > f; f++) c += parseInt(b.charAt(f), 10) * a[f];
            return c = 10 * c % 11 % 10, c + "" === b.substr(d - 1, 1)
        },
        _ru: function(b) {
            if (!/^RU([0-9]{9}|[0-9]{12})$/.test(b)) return !1;
            b = b.substr(2);
            var d = 0;
            if (10 === b.length) {
                for (var a = 0, c = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 10 > d; d++) a += parseInt(b.charAt(d), 10) * c[d];
                return a %= 11, 9 < a && (a %= 10), a + "" === b.substr(9, 1)
            }
            if (12 === b.length) {
                for (var a = 0, c = [7, 2, 4, 10, 3, 5,
                        9, 4, 6, 8, 0
                    ], f = 0, h = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0], d = 0; 11 > d; d++) a += parseInt(b.charAt(d), 10) * c[d], f += parseInt(b.charAt(d), 10) * h[d];
                return a %= 11, 9 < a && (a %= 10), f %= 11, 9 < f && (f %= 10), a + "" === b.substr(10, 1) && f + "" === b.substr(11, 1)
            }
            return !1
        },
        _rs: function(b) {
            if (!/^RS[0-9]{9}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 10, a = 0, c = 0; 8 > c; c++) a = (parseInt(b.charAt(c), 10) + d) % 10, 0 === a && (a = 10), d = 2 * a % 11;
            return 1 === (d + parseInt(b.substr(8, 1), 10)) % 10
        },
        _se: function(e) {
            return /^SE[0-9]{10}01$/.test(e) ? (e = e.substr(2, 10), b.fn.bootstrapValidator.helpers.luhn(e)) :
                !1
        },
        _si: function(b) {
            if (!/^SI[0-9]{8}$/.test(b)) return !1;
            b = b.substr(2);
            for (var d = 0, a = [8, 7, 6, 5, 4, 3, 2], c = 0; 7 > c; c++) d += parseInt(b.charAt(c), 10) * a[c];
            return d = 11 - d % 11, 10 === d && (d = 0), d + "" === b.substr(7, 1)
        },
        _sk: function(b) {
            return /^SK[1-9][0-9][(2-4)|(6-9)][0-9]{7}$/.test(b) ? 0 === parseInt(b.substr(2), 10) % 11 : !1
        },
        _za: function(b) {
            return /^ZA4\d{9}$/.test(b)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.vin = b.extend(b.fn.bootstrapValidator.i18n.vin || {}, {
        "default": "Please enter a valid VIN number"
    });
    b.fn.bootstrapValidator.validators.vin = {
        validate: function(b, d) {
            var a = d.val();
            if ("" === a) return !0;
            if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/i.test(a)) return !1;
            for (var a = a.toUpperCase(), c = {
                    A: 1,
                    B: 2,
                    C: 3,
                    D: 4,
                    E: 5,
                    F: 6,
                    G: 7,
                    H: 8,
                    J: 1,
                    K: 2,
                    L: 3,
                    M: 4,
                    N: 5,
                    P: 7,
                    R: 9,
                    S: 2,
                    T: 3,
                    U: 4,
                    V: 5,
                    W: 6,
                    X: 7,
                    Y: 8,
                    Z: 9,
                    1: 1,
                    2: 2,
                    3: 3,
                    4: 4,
                    5: 5,
                    6: 6,
                    7: 7,
                    8: 8,
                    9: 9,
                    0: 0
                }, f = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4,
                    3, 2
                ], h = 0, k = a.length, m = 0; k > m; m++) h += c[a.charAt(m) + ""] * f[m];
            c = h % 11;
            return 10 === c && (c = "X"), c + "" === a.charAt(8)
        }
    }
})(window.jQuery);
(function(b) {
    b.fn.bootstrapValidator.i18n.zipCode = b.extend(b.fn.bootstrapValidator.i18n.zipCode || {}, {
        "default": "Please enter a valid zip code",
        countryNotSupported: "The country code %s is not supported",
        country: "Please enter a valid %s",
        countries: {
            BR: "Brazilian postal code",
            CA: "Canadian postal code",
            DK: "Danish postal code",
            GB: "United Kingdom postal code",
            IT: "Italian postal code",
            MA: "Moroccan postal code",
            NL: "Dutch postal code",
            SE: "Swiss postal code",
            SG: "Singapore postal code",
            US: "US zip code"
        }
    });
    b.fn.bootstrapValidator.validators.zipCode = {
        html5Attributes: {
            message: "message",
            country: "country"
        },
        COUNTRY_CODES: "BR CA DK GB IT MA NL SE SG US".split(" "),
        validate: function(e, d, a) {
            var c = d.val();
            if ("" === c || !a.country) return !0;
            var f = a.country;
            if (("string" != typeof f || -1 === b.inArray(f, this.COUNTRY_CODES)) && (f = e.getDynamicOption(d, f)), !f || -1 === b.inArray(f.toUpperCase(), this.COUNTRY_CODES)) return {
                valid: !1,
                message: b.fn.bootstrapValidator.helpers.format(b.fn.bootstrapValidator.i18n.zipCode.countryNotSupported, f)
            };
            e = !1;
            switch (f = f.toUpperCase()) {
                case "BR":
                    e =
                        /^(\d{2})([\.]?)(\d{3})([\-]?)(\d{3})$/.test(c);
                    break;
                case "CA":
                    e = /^(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|X|Y){1}[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}\s?[0-9]{1}(?:A|B|C|E|G|H|J|K|L|M|N|P|R|S|T|V|W|X|Y|Z){1}[0-9]{1}$/i.test(c);
                    break;
                case "DK":
                    e = /^(DK(-|\s)?)?\d{4}$/i.test(c);
                    break;
                case "GB":
                    e = this._gb(c);
                    break;
                case "IT":
                    e = /^(I-|IT-)?\d{5}$/i.test(c);
                    break;
                case "MA":
                    e = /^[1-9][0-9]{4}$/i.test(c);
                    break;
                case "NL":
                    e = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i.test(c);
                    break;
                case "SE":
                    e = /^(S-)?\d{3}\s?\d{2}$/i.test(c);
                    break;
                case "SG":
                    e = /^([0][1-9]|[1-6][0-9]|[7]([0-3]|[5-9])|[8][0-2])(\d{4})$/i.test(c);
                    break;
                default:
                    e = /^\d{4,5}([\-]?\d{4})?$/.test(c)
            }
            return {
                valid: e,
                message: b.fn.bootstrapValidator.helpers.format(a.message || b.fn.bootstrapValidator.i18n.zipCode.country, b.fn.bootstrapValidator.i18n.zipCode.countries[f])
            }
        },
        _gb: function(b) {
            for (var d = [/^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[ABCDEFGHKLMNOPQRSTUVWXY]?[0-9]{1,2})(\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$/i, /^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[0-9]{1}[ABCDEFGHJKPMNRSTUVWXY]{1})(\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$/i,
                    /^([ABCDEFGHIJKLMNOPRSTUWYZ]{1}[ABCDEFGHKLMNOPQRSTUVWXY]{1}?[0-9]{1}[ABEHMNPRVWXY]{1})(\s*)([0-9]{1}[ABDEFGHJLNPQRSTUWXYZ]{2})$/i, /^(BF1)(\s*)([0-6]{1}[ABDEFGHJLNPQRST]{1}[ABDEFGHJLNPQRSTUWZYZ]{1})$/i, /^(GIR)(\s*)(0AA)$/i, /^(BFPO)(\s*)([0-9]{1,4})$/i, /^(BFPO)(\s*)(c\/o\s*[0-9]{1,3})$/i, /^([A-Z]{4})(\s*)(1ZZ)$/i, /^(AI-2640)$/i
                ], a = 0; a < d.length; a++)
                if (d[a].test(b)) return !0;
            return !1
        }
    }
})(window.jQuery);
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : "object" == typeof exports ? module.exports = b(require("jquery")) : b(jQuery)
}(function(b) {
    function e(a, b) {
        return a.parsleyAdaptedCallback || (a.parsleyAdaptedCallback = function() {
            var c = Array.prototype.slice.call(arguments, 0);
            c.unshift(this);
            a.apply(b || K, c)
        }), a.parsleyAdaptedCallback
    }

    function d(a) {
        return 0 === a.lastIndexOf(N, 0) ? a.substr(N.length) : a
    }
    "undefined" == typeof b && "undefined" != typeof window.jQuery && (b = window.jQuery);
    var a = 1,
        c = {},
        f = {
            attr: function(a, b, c) {
                var d, e = new RegExp("^" + b, "i");
                if ("undefined" == typeof c) c = {};
                else
                    for (var f in c) c.hasOwnProperty(f) && delete c[f];
                if ("undefined" == typeof a || "undefined" == typeof a[0]) return c;
                d = a[0].attributes;
                for (f = d.length; f--;)(a = d[f]) && a.specified && e.test(a.name) && (c[this.camelize(a.name.slice(b.length))] = this.deserializeValue(a.value));
                return c
            },
            checkAttr: function(a, b, c) {
                return a.is("[" + b + c + "]")
            },
            setAttr: function(a, b, c, d) {
                a[0].setAttribute(this.dasherize(b + c), String(d))
            },
            generateID: function() {
                return "" +
                    a++
            },
            deserializeValue: function(a) {
                var c;
                try {
                    return a ? "true" == a || ("false" == a ? !1 : "null" == a ? null : isNaN(c = Number(a)) ? /^[\[\{]/.test(a) ? b.parseJSON(a) : a : c) : a
                } catch (d) {
                    return a
                }
            },
            camelize: function(a) {
                return a.replace(/-+(.)?/g, function(a, b) {
                    return b ? b.toUpperCase() : ""
                })
            },
            dasherize: function(a) {
                return a.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
            },
            warn: function() {
                window.console && window.console.warn && window.console.warn.apply(window.console,
                    arguments)
            },
            warnOnce: function(a) {
                c[a] || (c[a] = !0, this.warn.apply(this, arguments))
            },
            _resetWarnings: function() {
                c = {}
            },
            objectCreate: Object.create || function() {
                var a = function() {};
                return function(b) {
                    if (1 < arguments.length) throw Error("Second argument not supported");
                    if ("object" != typeof b) throw TypeError("Argument must be an object");
                    a.prototype = b;
                    var c = new a;
                    return a.prototype = null, c
                }
            }()
        },
        h = {
            namespace: "data-parsley-",
            inputs: "input, textarea, select",
            excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
            priorityEnabled: !0,
            multiple: null,
            group: null,
            uiEnabled: !0,
            validationThreshold: 3,
            focus: "first",
            trigger: !1,
            errorClass: "parsley-error",
            successClass: "parsley-success",
            classHandler: function() {},
            errorsContainer: function() {},
            errorsWrapper: '<ul class="parsley-errors-list"></ul>',
            errorTemplate: "<li></li>"
        },
        k = function() {};
    k.prototype = {
        asyncSupport: !1,
        actualizeOptions: function() {
            return f.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(),
                this
        },
        _resetOptions: function(a) {
            this.domOptions = f.objectCreate(this.parent.options);
            this.options = f.objectCreate(this.domOptions);
            for (var b in a) a.hasOwnProperty(b) && (this.options[b] = a[b]);
            this.actualizeOptions()
        },
        validateThroughValidator: function(a, b, c) {
            return window.ParsleyValidator.validate(a, b, c)
        },
        _listeners: null,
        on: function(a, b) {
            this._listeners = this._listeners || {};
            return (this._listeners[a] = this._listeners[a] || []).push(b), this
        },
        subscribe: function(a, c) {
            b.listenTo(this, a.toLowerCase(), c)
        },
        off: function(a,
            b) {
            var c = this._listeners && this._listeners[a];
            if (c)
                if (b)
                    for (var d = c.length; d--;) c[d] === b && c.splice(d, 1);
                else delete this._listeners[a];
            return this
        },
        unsubscribe: function(a) {
            b.unsubscribeTo(this, a.toLowerCase())
        },
        trigger: function(a, b) {
            b = b || this;
            var c, d = this._listeners && this._listeners[a];
            if (d)
                for (var e = d.length; e--;)
                    if (c = d[e].call(b, b), !1 === c) return c;
            return this.parent ? this.parent.trigger(a, b) : !0
        },
        reset: function() {
            if ("ParsleyForm" !== this.__class__) return this._trigger("reset");
            for (var a = 0; a < this.fields.length; a++) this.fields[a]._trigger("reset");
            this._trigger("reset")
        },
        destroy: function() {
            if ("ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
            for (var a = 0; a < this.fields.length; a++) this.fields[a].destroy();
            this.$element.removeData("Parsley");
            this._trigger("destroy")
        },
        _findRelatedMultiple: function() {
            return this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]')
        }
    };
    var m = function() {
            var a = {},
                b = function(a) {
                    this.__class__ =
                        "Validator";
                    this.__version__ = "1.0.1";
                    this.options = a || {};
                    this.bindingKey = this.options.bindingKey || "_validatorjsConstraint"
                };
            b.prototype = {
                constructor: b,
                validate: function(a, b, c) {
                    if ("string" != typeof a && "object" != typeof a) throw Error("You must validate an object or a string");
                    return "string" == typeof a || h(a) ? this._validateString(a, b, c) : this.isBinded(a) ? this._validateBindedObject(a, b) : this._validateObject(a, b, c)
                },
                bind: function(a, b) {
                    if ("object" != typeof a) throw Error("Must bind a Constraint to an object");
                    return a[this.bindingKey] = new c(b), this
                },
                unbind: function(a) {
                    return "undefined" == typeof a._validatorjsConstraint ? this : (delete a[this.bindingKey], this)
                },
                isBinded: function(a) {
                    return "undefined" != typeof a[this.bindingKey]
                },
                getBinded: function(a) {
                    return this.isBinded(a) ? a[this.bindingKey] : null
                },
                _validateString: function(a, b, c) {
                    var f, l = [];
                    h(b) || (b = [b]);
                    for (var k = 0; k < b.length; k++) {
                        if (!(b[k] instanceof e)) throw Error("You must give an Assert or an Asserts array to validate a string");
                        f = b[k].check(a, c);
                        f instanceof
                        d && l.push(f)
                    }
                    return l.length ? l : !0
                },
                _validateObject: function(a, b, d) {
                    if ("object" != typeof b) throw Error("You must give a constraint to validate an object");
                    return b instanceof c ? b.check(a, d) : (new c(b)).check(a, d)
                },
                _validateBindedObject: function(a, b) {
                    return a[this.bindingKey].check(a, b)
                }
            };
            b.errorCode = {
                must_be_a_string: "must_be_a_string",
                must_be_an_array: "must_be_an_array",
                must_be_a_number: "must_be_a_number",
                must_be_a_string_or_array: "must_be_a_string_or_array"
            };
            var c = function(a, b) {
                if (this.__class__ = "Constraint",
                    this.options = b || {}, this.nodes = {}, a) try {
                    this._bootstrap(a)
                } catch (c) {
                    throw Error("Should give a valid mapping object to Constraint", c, a);
                }
            };
            c.prototype = {
                constructor: c,
                check: function(a, b) {
                    var c, d = {},
                        l;
                    for (l in this.nodes) {
                        for (var k = !1, p = this.get(l), p = h(p) ? p : [p], m = p.length - 1; 0 <= m; m--) "Required" !== p[m].__class__ || (k = p[m].requiresValidation(b));
                        if (this.has(l, a) || this.options.strict || k) try {
                            this.has(l, this.options.strict || k ? a : void 0) || (new e).HaveProperty(l).validate(a), c = this._check(l, a[l], b), (h(c) && 0 < c.length ||
                                !h(c) && !f(c)) && (d[l] = c)
                        } catch (v) {
                            d[l] = v
                        }
                    }
                    return f(d) ? !0 : d
                },
                add: function(a, b) {
                    if (b instanceof e || h(b) && b[0] instanceof e) return this.nodes[a] = b, this;
                    if ("object" == typeof b && !h(b)) return this.nodes[a] = b instanceof c ? b : new c(b), this;
                    throw Error("Should give an Assert, an Asserts array, a Constraint", b);
                },
                has: function(a, b) {
                    return b = "undefined" != typeof b ? b : this.nodes, "undefined" != typeof b[a]
                },
                get: function(a, b) {
                    return this.has(a) ? this.nodes[a] : b || null
                },
                remove: function(a) {
                    var b = [],
                        c;
                    for (c in this.nodes) c !==
                        a && (b[c] = this.nodes[c]);
                    return this.nodes = b, this
                },
                _bootstrap: function(a) {
                    if (a instanceof c) return this.nodes = a.nodes;
                    for (var b in a) this.add(b, a[b])
                },
                _check: function(a, b, d) {
                    if (this.nodes[a] instanceof e) return this._checkAsserts(b, [this.nodes[a]], d);
                    if (h(this.nodes[a])) return this._checkAsserts(b, this.nodes[a], d);
                    if (this.nodes[a] instanceof c) return this.nodes[a].check(b, d);
                    throw Error("Invalid node", this.nodes[a]);
                },
                _checkAsserts: function(a, b, c) {
                    for (var d, e = [], f = 0; f < b.length; f++) d = b[f].check(a, c),
                        "undefined" != typeof d && !0 !== d && e.push(d);
                    return e
                }
            };
            var d = function(a, b, c) {
                if (this.__class__ = "Violation", !(a instanceof e)) throw Error("Should give an assertion implementing the Assert interface");
                this.assert = a;
                this.value = b;
                "undefined" != typeof c && (this.violation = c)
            };
            d.prototype = {
                show: function() {
                    var a = {
                        assert: this.assert.__class__,
                        value: this.value
                    };
                    return this.violation && (a.violation = this.violation), a
                },
                __toString: function() {
                    return "undefined" != typeof this.violation && (this.violation = '", ' + this.getViolation().constraint +
                        " expected was " + this.getViolation().expected), this.assert.__class__ + ' assert failed for "' + this.value + this.violation || ""
                },
                getViolation: function() {
                    var a, b;
                    for (a in this.violation) b = this.violation[a];
                    return {
                        constraint: a,
                        expected: b
                    }
                }
            };
            var e = function(a) {
                this.__parentClass__ = this.__class__ = "Assert";
                this.groups = [];
                "undefined" != typeof a && this.addGroup(a)
            };
            e.prototype = {
                construct: e,
                requiresValidation: function(a) {
                    return a && !this.hasGroup(a) ? !1 : !a && this.hasGroups() ? !1 : !0
                },
                check: function(a, b) {
                    if (this.requiresValidation(b)) try {
                        return this.validate(a,
                            b)
                    } catch (c) {
                        return c
                    }
                },
                hasGroup: function(a) {
                    return h(a) ? this.hasOneOf(a) : "Any" === a ? !0 : this.hasGroups() ? -1 !== this.groups.indexOf(a) : "Default" === a
                },
                hasOneOf: function(a) {
                    for (var b = 0; b < a.length; b++)
                        if (this.hasGroup(a[b])) return !0;
                    return !1
                },
                hasGroups: function() {
                    return 0 < this.groups.length
                },
                addGroup: function(a) {
                    return h(a) ? this.addGroups(a) : (this.hasGroup(a) || this.groups.push(a), this)
                },
                removeGroup: function(a) {
                    for (var b = [], c = 0; c < this.groups.length; c++) a !== this.groups[c] && b.push(this.groups[c]);
                    return this.groups =
                        b, this
                },
                addGroups: function(a) {
                    for (var b = 0; b < a.length; b++) this.addGroup(a[b]);
                    return this
                },
                HaveProperty: function(a) {
                    return this.__class__ = "HaveProperty", this.node = a, this.validate = function(a) {
                        if ("undefined" == typeof a[this.node]) throw new d(this, a, {
                            value: this.node
                        });
                        return !0
                    }, this
                },
                Blank: function() {
                    return this.__class__ = "Blank", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if ("" !== a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                        return !0
                    }, this
                },
                Callback: function(a) {
                    if (this.__class__ = "Callback", this.arguments = Array.prototype.slice.call(arguments), 1 === this.arguments.length ? this.arguments = [] : this.arguments.splice(0, 1), "function" != typeof a) throw Error("Callback must be instanciated with a function");
                    return this.fn = a, this.validate = function(a) {
                        var b = this.fn.apply(this, [a].concat(this.arguments));
                        if (!0 !== b) throw new d(this, a, {
                            result: b
                        });
                        return !0
                    }, this
                },
                Choice: function(a) {
                    if (this.__class__ = "Choice", !h(a) && "function" != typeof a) throw Error("Choice must be instanciated with an array or a function");
                    return this.list = a, this.validate = function(a) {
                        for (var b = "function" == typeof this.list ? this.list() : this.list, c = 0; c < b.length; c++)
                            if (a === b[c]) return !0;
                        throw new d(this, a, {
                            choices: b
                        });
                    }, this
                },
                Collection: function(a) {
                    return this.__class__ = "Collection", this.constraint = "undefined" != typeof a ? a instanceof e ? a : new c(a) : !1, this.validate = function(a, c) {
                        var e, l = new b,
                            k = 0,
                            n = {},
                            m = this.groups.length ? this.groups : c;
                        if (!h(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_an_array
                        });
                        for (var v = 0; v < a.length; v++) e = this.constraint ?
                            l.validate(a[v], this.constraint, m) : l.validate(a[v], m), f(e) || (n[k] = e), k++;
                        return f(n) ? !0 : n
                    }, this
                },
                Count: function(a) {
                    return this.__class__ = "Count", this.count = a, this.validate = function(a) {
                        if (!h(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_an_array
                        });
                        var c = "function" == typeof this.count ? this.count(a) : this.count;
                        if (isNaN(Number(c))) throw Error("Count must be a valid interger", c);
                        if (c !== a.length) throw new d(this, a, {
                            count: c
                        });
                        return !0
                    }, this
                },
                Email: function() {
                    return this.__class__ = "Email", this.validate =
                        function(a) {
                            if ("string" != typeof a) throw new d(this, a, {
                                value: b.errorCode.must_be_a_string
                            });
                            if (!/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)) throw new d(this,
                                a);
                            return !0
                        }, this
                },
                EqualTo: function(a) {
                    if (this.__class__ = "EqualTo", "undefined" == typeof a) throw Error("EqualTo must be instanciated with a value or a function");
                    return this.reference = a, this.validate = function(a) {
                        var b = "function" == typeof this.reference ? this.reference(a) : this.reference;
                        if (b !== a) throw new d(this, a, {
                            value: b
                        });
                        return !0
                    }, this
                },
                GreaterThan: function(a) {
                    if (this.__class__ = "GreaterThan", "undefined" == typeof a) throw Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" ===
                            a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold >= a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                GreaterThanOrEqual: function(a) {
                    if (this.__class__ = "GreaterThanOrEqual", "undefined" == typeof a) throw Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                            if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                                value: b.errorCode.must_be_a_number
                            });
                            if (this.threshold > a) throw new d(this, a, {
                                threshold: this.threshold
                            });
                            return !0
                        },
                        this
                },
                InstanceOf: function(a) {
                    if (this.__class__ = "InstanceOf", "undefined" == typeof a) throw Error("InstanceOf must be instanciated with a value");
                    return this.classRef = a, this.validate = function(a) {
                        if (1 != a instanceof this.classRef) throw new d(this, a, {
                            classRef: this.classRef
                        });
                        return !0
                    }, this
                },
                Length: function(a) {
                    if (this.__class__ = "Length", !a.min && !a.max) throw Error("Lenth assert must be instanciated with a { min: x, max: y } object");
                    return this.min = a.min, this.max = a.max, this.validate = function(a) {
                        if ("string" !=
                            typeof a && !h(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string_or_array
                        });
                        if ("undefined" != typeof this.min && this.min === this.max && a.length !== this.min) throw new d(this, a, {
                            min: this.min,
                            max: this.max
                        });
                        if ("undefined" != typeof this.max && a.length > this.max) throw new d(this, a, {
                            max: this.max
                        });
                        if ("undefined" != typeof this.min && a.length < this.min) throw new d(this, a, {
                            min: this.min
                        });
                        return !0
                    }, this
                },
                LessThan: function(a) {
                    if (this.__class__ = "LessThan", "undefined" == typeof a) throw Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold <= a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                LessThanOrEqual: function(a) {
                    if (this.__class__ = "LessThanOrEqual", "undefined" == typeof a) throw Error("Should give a threshold value");
                    return this.threshold = a, this.validate = function(a) {
                        if ("" === a || isNaN(Number(a))) throw new d(this, a, {
                            value: b.errorCode.must_be_a_number
                        });
                        if (this.threshold <
                            a) throw new d(this, a, {
                            threshold: this.threshold
                        });
                        return !0
                    }, this
                },
                NotNull: function() {
                    return this.__class__ = "NotNull", this.validate = function(a) {
                        if (null === a || "undefined" == typeof a) throw new d(this, a);
                        return !0
                    }, this
                },
                NotBlank: function() {
                    return this.__class__ = "NotBlank", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if ("" === a.replace(/^\s+/g, "").replace(/\s+$/g, "")) throw new d(this, a);
                        return !0
                    }, this
                },
                Null: function() {
                    return this.__class__ = "Null",
                        this.validate = function(a) {
                            if (null !== a) throw new d(this, a);
                            return !0
                        }, this
                },
                Range: function(a, b) {
                    if (this.__class__ = "Range", "undefined" == typeof a || "undefined" == typeof b) throw Error("Range assert expects min and max values");
                    return this.min = a, this.max = b, this.validate = function(a) {
                        try {
                            return "string" == typeof a && isNaN(Number(a)) || h(a) ? (new e).Length({
                                min: this.min,
                                max: this.max
                            }).validate(a) : (new e).GreaterThanOrEqual(this.min).validate(a) && (new e).LessThanOrEqual(this.max).validate(a), !0
                        } catch (b) {
                            throw new d(this,
                                a, b.violation);
                        }
                    }, this
                },
                Regexp: function(a, c) {
                    if (this.__class__ = "Regexp", "undefined" == typeof a) throw Error("You must give a regexp");
                    return this.regexp = a, this.flag = c || "", this.validate = function(a) {
                        if ("string" != typeof a) throw new d(this, a, {
                            value: b.errorCode.must_be_a_string
                        });
                        if (!(new RegExp(this.regexp, this.flag)).test(a)) throw new d(this, a, {
                            regexp: this.regexp,
                            flag: this.flag
                        });
                        return !0
                    }, this
                },
                Required: function() {
                    return this.__class__ = "Required", this.validate = function(a) {
                        if ("undefined" == typeof a) throw new d(this,
                            a);
                        try {
                            "string" == typeof a ? (new e).NotNull().validate(a) && (new e).NotBlank().validate(a) : !0 === h(a) && (new e).Length({
                                min: 1
                            }).validate(a)
                        } catch (b) {
                            throw new d(this, a);
                        }
                        return !0
                    }, this
                },
                Unique: function(a) {
                    return this.__class__ = "Unique", "object" == typeof a && (this.key = a.key), this.validate = function(a) {
                        var c, e = [];
                        if (!h(a)) throw new d(this, a, {
                            value: b.errorCode.must_be_an_array
                        });
                        for (var f = 0; f < a.length; f++)
                            if (c = "object" == typeof a[f] ? a[f][this.key] : a[f], "undefined" != typeof c) {
                                if (-1 !== e.indexOf(c)) throw new d(this,
                                    a, {
                                        value: c
                                    });
                                e.push(c)
                            }
                        return !0
                    }, this
                }
            };
            a.Assert = e;
            a.Validator = b;
            a.Violation = d;
            a.Constraint = c;
            Array.prototype.indexOf || (Array.prototype.indexOf = function(a) {
                if (null === this) throw new TypeError;
                var b = Object(this),
                    c = b.length >>> 0;
                if (0 === c) return -1;
                var d = 0;
                if (1 < arguments.length && (d = Number(arguments[1]), d != d ? d = 0 : 0 !== d && d != 1 / 0 && d != -(1 / 0) && (d = (0 < d || -1) * Math.floor(Math.abs(d)))), d >= c) return -1;
                for (d = 0 <= d ? d : Math.max(c - Math.abs(d), 0); c > d; d++)
                    if (d in b && b[d] === a) return d;
                return -1
            });
            var f = function(a) {
                    for (var b in a) return !1;
                    return !0
                },
                h = function(a) {
                    return "[object Array]" === Object.prototype.toString.call(a)
                };
            return "function" == typeof define && define.amd ? define("vendors/validator.js/dist/validator", [], function() {
                return a
            }) : "undefined" != typeof module && module.exports ? module.exports = a : window["undefined" != typeof validatorjs_ns ? validatorjs_ns : "Validator"] = a, a
        }(),
        m = "undefined" != typeof m ? m : "undefined" != typeof module ? module.exports : null,
        q = function(a, b) {
            this.__class__ = "ParsleyValidator";
            this.Validator = m;
            this.locale = "en";
            this.init(a || {}, b || {})
        };
    q.prototype = {
        init: function(a, c) {
            this.catalog = c;
            this.validators = b.extend({}, this.validators);
            for (var d in a) this.addValidator(d, a[d].fn, a[d].priority, a[d].requirementsTransformer);
            window.Parsley.trigger("parsley:validator:init")
        },
        setLocale: function(a) {
            if ("undefined" == typeof this.catalog[a]) throw Error(a + " is not available in the catalog");
            return this.locale = a, this
        },
        addCatalog: function(a, b, c) {
            return "object" == typeof b && (this.catalog[a] = b), !0 === c ? this.setLocale(a) : this
        },
        addMessage: function(a,
            b, c) {
            return "undefined" == typeof this.catalog[a] && (this.catalog[a] = {}), this.catalog[a][b.toLowerCase()] = c, this
        },
        validate: function() {
            return (new this.Validator.Validator).validate.apply(new m.Validator, arguments)
        },
        addValidator: function(a, b, c, d) {
            if (this.validators[a]) f.warn('Validator "' + a + '" is already defined.');
            else if (h.hasOwnProperty(a)) return void f.warn('"' + a + '" is a restricted keyword and is not a valid validator name.');
            return this._setValidator(a, b, c, d)
        },
        updateValidator: function(a, b, c, d) {
            return this.validators[a] ?
                this._setValidator(a, b, c, d) : (f.warn('Validator "' + a + '" is not already defined.'), this.addValidator(a, b, c, d))
        },
        removeValidator: function(a) {
            return this.validators[a] || f.warn('Validator "' + a + '" is not defined.'), delete this.validators[a], this
        },
        _setValidator: function(a, c, d, e) {
            return this.validators[a] = function(a) {
                return b.extend((new m.Assert).Callback(c, a), {
                    priority: d,
                    requirementsTransformer: e
                })
            }, this
        },
        getErrorMessage: function(a) {
            return ("type" === a.name ? (this.catalog[this.locale][a.name] || {})[a.requirements] :
                this.formatMessage(this.catalog[this.locale][a.name], a.requirements)) || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
        },
        formatMessage: function(a, b) {
            if ("object" == typeof b) {
                for (var c in b) a = this.formatMessage(a, b[c]);
                return a
            }
            return "string" == typeof a ? a.replace(/%s/i, b) : ""
        },
        validators: {
            notblank: function() {
                return b.extend((new m.Assert).NotBlank(), {
                    priority: 2
                })
            },
            required: function() {
                return b.extend((new m.Assert).Required(), {
                    priority: 512
                })
            },
            type: function(a) {
                switch (a) {
                    case "email":
                        a =
                            (new m.Assert).Email();
                        break;
                    case "range":
                    case "number":
                        a = (new m.Assert).Regexp("^-?(?:\\d+|\\d{1,3}(?:,\\d{3})+)?(?:\\.\\d+)?$");
                        break;
                    case "integer":
                        a = (new m.Assert).Regexp("^-?\\d+$");
                        break;
                    case "digits":
                        a = (new m.Assert).Regexp("^\\d+$");
                        break;
                    case "alphanum":
                        a = (new m.Assert).Regexp("^\\w+$", "i");
                        break;
                    case "url":
                        a = (new m.Assert).Regexp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$",
                            "i");
                        break;
                    default:
                        throw Error("validator type `" + a + "` is not supported");
                }
                return b.extend(a, {
                    priority: 256
                })
            },
            pattern: function(a) {
                var c = "";
                return /^\/.*\/(?:[gimy]*)$/.test(a) && (c = a.replace(/.*\/([gimy]*)$/, "$1"), a = a.replace(new RegExp("^/(.*?)/" + c + "$"), "$1")), b.extend((new m.Assert).Regexp(a, c), {
                    priority: 64
                })
            },
            minlength: function(a) {
                return b.extend((new m.Assert).Length({
                    min: a
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            },
            maxlength: function(a) {
                return b.extend((new m.Assert).Length({
                    max: a
                }), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            },
            length: function(a) {
                return b.extend((new m.Assert).Length({
                    min: a[0],
                    max: a[1]
                }), {
                    priority: 32
                })
            },
            mincheck: function(a) {
                return this.minlength(a)
            },
            maxcheck: function(a) {
                return this.maxlength(a)
            },
            check: function(a) {
                return this.length(a)
            },
            min: function(a) {
                return b.extend((new m.Assert).GreaterThanOrEqual(a), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            },
            max: function(a) {
                return b.extend((new m.Assert).LessThanOrEqual(a), {
                    priority: 30,
                    requirementsTransformer: function() {
                        return "string" != typeof a || isNaN(a) ? a : parseInt(a, 10)
                    }
                })
            },
            range: function(a) {
                return b.extend((new m.Assert).Range(a[0], a[1]), {
                    priority: 32,
                    requirementsTransformer: function() {
                        for (var b = 0; b < a.length; b++) a[b] = "string" != typeof a[b] || isNaN(a[b]) ? a[b] : parseInt(a[b], 10);
                        return a
                    }
                })
            },
            equalto: function(a) {
                return b.extend((new m.Assert).EqualTo(a), {
                    priority: 256,
                    requirementsTransformer: function() {
                        return b(a).length ?
                            b(a).val() : a
                    }
                })
            }
        }
    };
    var u = function() {
        this.__class__ = "ParsleyUI"
    };
    u.prototype = {
        listen: function() {
            var a = this;
            return window.Parsley.on("form:init", function() {
                a.setupForm(this)
            }).on("field:init", function() {
                a.setupField(this)
            }).on("field:validated", function() {
                a.reflow(this)
            }).on("form:validated", function() {
                a.focus(this)
            }).on("field:reset", function() {
                a.reset(this)
            }).on("form:destroy", function() {
                a.destroy(this)
            }).on("field:destroy", function() {
                a.destroy(this)
            }), this
        },
        reflow: function(a) {
            if ("undefined" != typeof a._ui &&
                !1 !== a._ui.active) {
                var b = this._diff(a.validationResult, a._ui.lastValidationResult);
                a._ui.lastValidationResult = a.validationResult;
                a._ui.validatedOnce = !0;
                this.manageStatusClass(a);
                this.manageErrorsMessages(a, b);
                this.actualizeTriggers(a);
                (b.kept.length || b.added.length) && !0 !== a._ui.failedOnce && this.manageFailingFieldTrigger(a)
            }
        },
        getErrorsMessages: function(a) {
            if (!0 === a.validationResult) return [];
            for (var b = [], c = 0; c < a.validationResult.length; c++) b.push(this._getErrorMessage(a, a.validationResult[c].assert));
            return b
        },
        manageStatusClass: function(a) {
            a.hasConstraints() && a.needsValidation() && !0 === a.validationResult ? this._successClass(a) : 0 < a.validationResult.length ? this._errorClass(a) : this._resetClass(a)
        },
        manageErrorsMessages: function(a, c) {
            if ("undefined" == typeof a.options.errorsMessagesDisabled) {
                if ("undefined" != typeof a.options.errorMessage) return c.added.length || c.kept.length ? (this._insertErrorWrapper(a), 0 === a._ui.$errorsWrapper.find(".parsley-custom-error-message").length && a._ui.$errorsWrapper.append(b(a.options.errorTemplate).addClass("parsley-custom-error-message")),
                    a._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(a.options.errorMessage)) : a._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
                for (var d = 0; d < c.removed.length; d++) this.removeError(a, c.removed[d].assert.name, !0);
                for (d = 0; d < c.added.length; d++) this.addError(a, c.added[d].assert.name, void 0, c.added[d].assert, !0);
                for (d = 0; d < c.kept.length; d++) this.updateError(a, c.kept[d].assert.name, void 0, c.kept[d].assert, !0)
            }
        },
        addError: function(a, c, d,
            e, f) {
            this._insertErrorWrapper(a);
            a._ui.$errorsWrapper.addClass("filled").append(b(a.options.errorTemplate).addClass("parsley-" + c).html(d || this._getErrorMessage(a, e)));
            !0 !== f && this._errorClass(a)
        },
        updateError: function(a, b, c, d, e) {
            a._ui.$errorsWrapper.addClass("filled").find(".parsley-" + b).html(c || this._getErrorMessage(a, d));
            !0 !== e && this._errorClass(a)
        },
        removeError: function(a, b, c) {
            a._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + b).remove();
            !0 !== c && this.manageStatusClass(a)
        },
        focus: function(a) {
            if (a._focusedField =
                null, !0 === a.validationResult || "none" === a.options.focus) return null;
            for (var b = 0; b < a.fields.length; b++) {
                var c = a.fields[b];
                if (!0 !== c.validationResult && 0 < c.validationResult.length && "undefined" == typeof c.options.noFocus && (a._focusedField = c.$element, "first" === a.options.focus)) break
            }
            return null === a._focusedField ? null : a._focusedField.focus()
        },
        _getErrorMessage: function(a, b) {
            var c = b.name + "Message";
            return "undefined" != typeof a.options[c] ? window.ParsleyValidator.formatMessage(a.options[c], b.requirements) : window.ParsleyValidator.getErrorMessage(b)
        },
        _diff: function(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length; f++) {
                for (var h = !1, k = 0; k < b.length; k++)
                    if (a[f].assert.name === b[k].assert.name) {
                        h = !0;
                        break
                    }
                h ? e.push(a[f]) : d.push(a[f])
            }
            return {
                kept: e,
                added: d,
                removed: c ? [] : this._diff(b, a, !0).added
            }
        },
        setupForm: function(a) {
            a.$element.on("submit.Parsley", !1, b.proxy(a.onSubmitValidate, a));
            !1 !== a.options.uiEnabled && a.$element.attr("novalidate", "")
        },
        setupField: function(a) {
            var c = {
                active: !1
            };
            !1 !== a.options.uiEnabled && (c.active = !0, a.$element.attr(a.options.namespace + "id",
                a.__id__), c.$errorClassHandler = this._manageClassHandler(a), c.errorsWrapperId = "parsley-id-" + (a.options.multiple ? "multiple-" + a.options.multiple : a.__id__), c.$errorsWrapper = b(a.options.errorsWrapper).attr("id", c.errorsWrapperId), c.lastValidationResult = [], c.validatedOnce = !1, c.validationInformationVisible = !1, a._ui = c, this.actualizeTriggers(a))
        },
        _manageClassHandler: function(a) {
            if ("string" == typeof a.options.classHandler && b(a.options.classHandler).length) return b(a.options.classHandler);
            var c = a.options.classHandler(a);
            return "undefined" != typeof c && c.length ? c : !a.options.multiple || a.$element.is("select") ? a.$element : a.$element.parent()
        },
        _insertErrorWrapper: function(a) {
            var c;
            if (0 !== a._ui.$errorsWrapper.parent().length) return a._ui.$errorsWrapper.parent();
            if ("string" == typeof a.options.errorsContainer) {
                if (b(a.options.errorsContainer).length) return b(a.options.errorsContainer).append(a._ui.$errorsWrapper);
                f.warn("The errors container `" + a.options.errorsContainer + "` does not exist in DOM")
            } else "function" == typeof a.options.errorsContainer &&
                (c = a.options.errorsContainer(a));
            if ("undefined" != typeof c && c.length) return c.append(a._ui.$errorsWrapper);
            c = a.$element;
            return a.options.multiple && (c = c.parent()), c.after(a._ui.$errorsWrapper)
        },
        actualizeTriggers: function(a) {
            var c = a.$element;
            if (a.options.multiple && (c = b("[" + a.options.namespace + 'multiple="' + a.options.multiple + '"]')), c.off(".Parsley"), !1 !== a.options.trigger) {
                var d = a.options.trigger.replace(/^\s+/g, "").replace(/\s+$/g, "");
                "" !== d && c.on(d.split(" ").join(".Parsley ") + ".Parsley", b.proxy("function" ==
                    typeof a.eventValidate ? a.eventValidate : this.eventValidate, a))
            }
        },
        eventValidate: function(a) {
            /key/.test(a.type) && !this._ui.validationInformationVisible && this.getValue().length <= this.options.validationThreshold || (this._ui.validatedOnce = !0, this.validate())
        },
        manageFailingFieldTrigger: function(a) {
            return a._ui.failedOnce = !0, a.options.multiple && b("[" + a.options.namespace + 'multiple="' + a.options.multiple + '"]').each(function() {
                return /change/i.test(b(this).parsley().options.trigger || "") ? void 0 : b(this).on("change.ParsleyFailedOnce", !1, b.proxy(a.validate, a))
            }), a.$element.is("select") && !/change/i.test(a.options.trigger || "") ? a.$element.on("change.ParsleyFailedOnce", !1, b.proxy(a.validate, a)) : /keyup/i.test(a.options.trigger || "") ? void 0 : a.$element.on("keyup.ParsleyFailedOnce", !1, b.proxy(a.validate, a))
        },
        reset: function(a) {
            this.actualizeTriggers(a);
            a.$element.off(".ParsleyFailedOnce");
            "undefined" != typeof a._ui && "ParsleyForm" !== a.__class__ && (a._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(a), a._ui.validatedOnce = !1, a._ui.lastValidationResult = [], a._ui.validationInformationVisible = !1, a._ui.failedOnce = !1)
        },
        destroy: function(a) {
            this.reset(a);
            "ParsleyForm" !== a.__class__ && ("undefined" != typeof a._ui && a._ui.$errorsWrapper.remove(), delete a._ui)
        },
        _successClass: function(a) {
            a._ui.validationInformationVisible = !0;
            a._ui.$errorClassHandler.removeClass(a.options.errorClass).addClass(a.options.successClass)
        },
        _errorClass: function(a) {
            a._ui.validationInformationVisible = !0;
            a._ui.$errorClassHandler.removeClass(a.options.successClass).addClass(a.options.errorClass)
        },
        _resetClass: function(a) {
            a._ui.$errorClassHandler.removeClass(a.options.successClass).removeClass(a.options.errorClass)
        }
    };
    var r = function(a, c, d) {
        this.__class__ = "ParsleyForm";
        this.__id__ = f.generateID();
        this.$element = b(a);
        this.domOptions = c;
        this.options = d;
        this.parent = window.Parsley;
        this.fields = [];
        this.validationResult = null
    };
    r.prototype = {
        onSubmitValidate: function(a) {
            return this.validate(void 0, void 0, a), (!1 === this.validationResult || !this._trigger("submit")) && a instanceof b.Event && (a.stopImmediatePropagation(),
                a.preventDefault()), this
        },
        validate: function(a, b, c) {
            this.submitEvent = c;
            this.validationResult = !0;
            var d = [];
            return this._trigger("validate"), this._refreshFields(), this._withoutReactualizingFormOptions(function() {
                for (var c = 0; c < this.fields.length; c++)(!a || this._isFieldInGroup(this.fields[c], a)) && (d = this.fields[c].validate(b), !0 !== d && 0 < d.length && this.validationResult && (this.validationResult = !1))
            }), this._trigger(this.validationResult ? "success" : "error"), this._trigger("validated"), this.validationResult
        },
        isValid: function(a,
            b) {
            return this._refreshFields(), this._withoutReactualizingFormOptions(function() {
                for (var c = 0; c < this.fields.length; c++)
                    if ((!a || this._isFieldInGroup(this.fields[c], a)) && !1 === this.fields[c].isValid(b)) return !1;
                return !0
            })
        },
        _isFieldInGroup: function(a, c) {
            return b.isArray(a.options.group) ? -1 !== b.inArray(c, a.options.group) : a.options.group === c
        },
        _refreshFields: function() {
            return this.actualizeOptions()._bindFields()
        },
        _bindFields: function() {
            var a = this,
                c = this.fields;
            return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
                this.$element.find(this.options.inputs).not(this.options.excluded).each(function() {
                    var b = new P.Factory(this, {}, a);
                    "ParsleyField" !== b.__class__ && "ParsleyFieldMultiple" !== b.__class__ || !0 === b.options.excluded || "undefined" == typeof a.fieldsMappedById[b.__class__ + "-" + b.__id__] && (a.fieldsMappedById[b.__class__ + "-" + b.__id__] = b, a.fields.push(b))
                });
                b(c).not(a.fields).each(function() {
                    this._trigger("reset")
                })
            }), this
        },
        _withoutReactualizingFormOptions: function(a) {
            var b =
                this.actualizeOptions;
            this.actualizeOptions = function() {
                return this
            };
            a = a.call(this);
            return this.actualizeOptions = b, a
        },
        _trigger: function(a) {
            return a = "form:" + a, this.trigger.apply(this, arguments)
        }
    };
    var A = function(a, c, d, e, h) {
            var k = {};
            if (!/ParsleyField/.test(a.__class__)) throw Error("ParsleyField or ParsleyFieldMultiple instance expected");
            if ("function" == typeof window.ParsleyValidator.validators[c] && (k = window.ParsleyValidator.validators[c](d)), "Assert" !== k.__parentClass__) throw Error("Valid validator expected");
            return e = e || ("undefined" != typeof a.options[c + "Priority"] ? a.options[c + "Priority"] : k.priority || 2), "function" == typeof k.requirementsTransformer && (d = k.requirementsTransformer(), k = window.ParsleyValidator.validators[c](d)), b.extend(k, {
                name: c,
                requirements: d,
                priority: e,
                groups: [e],
                isDomConstraint: h || f.checkAttr(a.$element, a.options.namespace, c)
            })
        },
        F = function(a, c, d, e) {
            this.__class__ = "ParsleyField";
            this.__id__ = f.generateID();
            this.$element = b(a);
            "undefined" != typeof e && (this.parent = e);
            this.options = d;
            this.domOptions =
                c;
            this.constraints = [];
            this.constraintsByName = {};
            this.validationResult = [];
            this._bindConstraints()
        };
    F.prototype = {
        validate: function(a) {
            return this.value = this.getValue(), this._trigger("validate"), this._trigger(this.isValid(a, this.value) ? "success" : "error"), this._trigger("validated"), this.validationResult
        },
        hasConstraints: function() {
            return 0 !== this.constraints.length
        },
        needsValidation: function(a) {
            return "undefined" == typeof a && (a = this.getValue()), a.length || this._isRequired() || "undefined" != typeof this.options.validateIfEmpty ?
                !0 : !1
        },
        isValid: function(a, b) {
            if ((this.refreshConstraints(), this.validationResult = !0, !this.hasConstraints()) || (("undefined" == typeof b || null === b) && (b = this.getValue()), !this.needsValidation(b) && !0 !== a)) return !0;
            var c = ["Any"];
            !1 !== this.options.priorityEnabled && (c = this._getConstraintsSortedPriorities());
            for (var d = 0; d < c.length; d++)
                if (!0 !== (this.validationResult = this.validateThroughValidator(b, this.constraints, c[d]))) return !1;
            return !0
        },
        getValue: function() {
            var a;
            return a = "function" == typeof this.options.value ?
                this.options.value(this) : "undefined" != typeof this.options.value ? this.options.value : this.$element.val(), "undefined" == typeof a || null === a ? "" : !0 === this.options.trimValue ? a.replace(/^\s+|\s+$/g, "") : a
        },
        refreshConstraints: function() {
            return this.actualizeOptions()._bindConstraints()
        },
        addConstraint: function(a, b, c, d) {
            "function" == typeof window.ParsleyValidator.validators[a] && (a = new A(this, a, b, c, d), "undefined" !== this.constraintsByName[a.name] && this.removeConstraint(a.name), this.constraints.push(a), this.constraintsByName[a.name] =
                a);
            return this
        },
        removeConstraint: function(a) {
            for (var b = 0; b < this.constraints.length; b++)
                if (a === this.constraints[b].name) {
                    this.constraints.splice(b, 1);
                    break
                }
            return delete this.constraintsByName[a], this
        },
        updateConstraint: function(a, b, c) {
            return this.removeConstraint(a).addConstraint(a, b, c)
        },
        _bindConstraints: function() {
            for (var a = [], b = {}, c = 0; c < this.constraints.length; c++) !1 === this.constraints[c].isDomConstraint && (a.push(this.constraints[c]), b[this.constraints[c].name] = this.constraints[c]);
            this.constraints =
                a;
            this.constraintsByName = b;
            for (var d in this.options) this.addConstraint(d, this.options[d]);
            return this._bindHtml5Constraints()
        },
        _bindHtml5Constraints: function() {
            (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0);
            "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0);
            "undefined" != typeof this.$element.attr("min") && "undefined" != typeof this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : "undefined" != typeof this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : "undefined" != typeof this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0);
            "undefined" != typeof this.$element.attr("minlength") && "undefined" != typeof this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : "undefined" !=
                typeof this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : "undefined" != typeof this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
            var a = this.$element.attr("type");
            return "undefined" == typeof a ? this : "number" === a ? "undefined" == typeof this.$element.attr("step") || 0 === parseFloat(this.$element.attr("step")) % 1 ? this.addConstraint("type", "integer", void 0, !0) : this.addConstraint("type", "number", void 0, !0) : /^(email|url|range)$/i.test(a) ? this.addConstraint("type", a, void 0, !0) : this
        },
        _isRequired: function() {
            return "undefined" == typeof this.constraintsByName.required ? !1 : !1 !== this.constraintsByName.required.requirements
        },
        _trigger: function(a) {
            return a = "field:" + a, this.trigger.apply(this, arguments)
        },
        _getConstraintsSortedPriorities: function() {
            for (var a = [], b = 0; b < this.constraints.length; b++) - 1 === a.indexOf(this.constraints[b].priority) && a.push(this.constraints[b].priority);
            return a.sort(function(a, b) {
                return b -
                    a
            }), a
        }
    };
    var H = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
    H.prototype = {
        addElement: function(a) {
            return this.$elements.push(a), this
        },
        refreshConstraints: function() {
            var a;
            if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
            for (var c = 0; c < this.$elements.length; c++)
                if (b("html").has(this.$elements[c]).length) {
                    a = this.$elements[c].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                    for (var d = 0; d < a.length; d++) this.addConstraint(a[d].name, a[d].requirements,
                        a[d].priority, a[d].isDomConstraint)
                } else this.$elements.splice(c, 1);
            return this
        },
        getValue: function() {
            if ("undefined" != typeof this.options.value) return this.options.value;
            if (this.$element.is("input[type=radio]")) return this._findRelatedMultiple().filter(":checked").val() || "";
            if (this.$element.is("input[type=checkbox]")) {
                var a = [];
                return this._findRelatedMultiple().filter(":checked").each(function() {
                    a.push(b(this).val())
                }), a
            }
            return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
        },
        _init: function() {
            return this.$elements = [this.$element], this
        }
    };
    var x = function(a, c, d) {
        this.$element = b(a);
        if (a = this.$element.data("Parsley")) return "undefined" != typeof d && a.parent === window.Parsley && (a.parent = d, a._resetOptions(a.options)), a;
        if (!this.$element.length) throw Error("You must bind Parsley on an existing element.");
        if ("undefined" != typeof d && "ParsleyForm" !== d.__class__) throw Error("Parent instance must be a ParsleyForm instance");
        return this.parent = d || window.Parsley, this.init(c)
    };
    x.prototype = {
        init: function(a) {
            return this.__class__ = "Parsley", this.__version__ = "2.1.2", this.__id__ = f.generateID(), this._resetOptions(a), this.$element.is("form") || f.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
        },
        isMultiple: function() {
            return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")
        },
        handleMultiple: function() {
            var a, c, d = this;
            if (this.options.multiple || ("undefined" != typeof this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = a = this.$element.attr("name") : "undefined" != typeof this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && "undefined" != typeof this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
            if (!this.options.multiple) return f.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
            this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, "");
            "undefined" != typeof a && b('input[name="' + a + '"]').each(function() {
                b(this).is("input[type=radio], input[type=checkbox]") && b(this).attr(d.options.namespace + "multiple", d.options.multiple)
            });
            a = this._findRelatedMultiple();
            for (var e = 0; e < a.length; e++)
                if (c =
                    b(a.get(e)).data("Parsley"), "undefined" != typeof c) {
                    this.$element.data("ParsleyFieldMultiple") || c.addElement(this.$element);
                    break
                }
            return this.bind("parsleyField", !0), c || this.bind("parsleyFieldMultiple")
        },
        bind: function(a, c) {
            var d;
            switch (a) {
                case "parsleyForm":
                    d = b.extend(new r(this.$element, this.domOptions, this.options), window.ParsleyExtend)._bindFields();
                    break;
                case "parsleyField":
                    d = b.extend(new F(this.$element, this.domOptions, this.options, this.parent), window.ParsleyExtend);
                    break;
                case "parsleyFieldMultiple":
                    d =
                        b.extend(new F(this.$element, this.domOptions, this.options, this.parent), new H, window.ParsleyExtend)._init();
                    break;
                default:
                    throw Error(a + "is not a supported Parsley type");
            }
            return this.options.multiple && f.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), "undefined" != typeof c ? (this.$element.data("ParsleyFieldMultiple", d), d) : (this.$element.data("Parsley", d), d._trigger("init"), d)
        }
    };
    var K = b({}),
        G = function() {
            f.warnOnce("Parsley's pubsub module is deprecated; use the corresponding jQuery event method instead")
        },
        N = "parsley:";
    b.listen = function(a, b, c) {
        var f;
        if (G(), "object" == typeof b && "function" == typeof c && (f = b, b = c), "function" != typeof b) throw Error("Wrong parameters");
        window.Parsley.on(d(a), e(b, f))
    };
    b.listenTo = function(a, b, c) {
        if (G(), !(a instanceof F || a instanceof r)) throw Error("Must give Parsley instance");
        if ("string" != typeof b || "function" != typeof c) throw Error("Wrong parameters");
        a.on(d(b), e(c))
    };
    b.unsubscribe = function(a, b) {
        if (G(), "string" != typeof a || "function" != typeof b) throw Error("Wrong arguments");
        window.Parsley.off(d(a),
            b.parsleyAdaptedCallback)
    };
    b.unsubscribeTo = function(a, b) {
        if (G(), !(a instanceof F || a instanceof r)) throw Error("Must give Parsley instance");
        a.off(d(b))
    };
    b.unsubscribeAll = function(a) {
        G();
        window.Parsley.off(d(a));
        b("form,input,textarea,select").each(function() {
            var c = b(this).data("Parsley");
            c && c.off(d(a))
        })
    };
    b.emit = function(a, b) {
        G();
        var c = b instanceof F || b instanceof r,
            e = Array.prototype.slice.call(arguments, c ? 2 : 1);
        e.unshift(d(a));
        c || (b = window.Parsley);
        b.trigger.apply(b, e)
    };
    window.ParsleyConfig = window.ParsleyConfig || {};
    window.ParsleyConfig.i18n = window.ParsleyConfig.i18n || {};
    window.ParsleyConfig.i18n.en = jQuery.extend(window.ParsleyConfig.i18n.en || {}, {
        defaultMessage: "This value seems to be invalid.",
        type: {
            email: "This value should be a valid email.",
            url: "This value should be a valid url.",
            number: "This value should be a valid number.",
            integer: "This value should be a valid integer.",
            digits: "This value should be digits.",
            alphanum: "This value should be alphanumeric."
        },
        notblank: "This value should not be blank.",
        required: "This value is required.",
        pattern: "This value seems to be invalid.",
        min: "This value should be greater than or equal to %s.",
        max: "This value should be lower than or equal to %s.",
        range: "This value should be between %s and %s.",
        minlength: "This value is too short. It should have %s characters or more.",
        maxlength: "This value is too long. It should have %s characters or fewer.",
        length: "This value length is invalid. It should be between %s and %s characters long.",
        mincheck: "You must select at least %s choices.",
        maxcheck: "You must select %s choices or fewer.",
        check: "You must select between %s and %s choices.",
        equalto: "This value should be the same."
    });
    "undefined" != typeof window.ParsleyValidator && window.ParsleyValidator.addCatalog("en", window.ParsleyConfig.i18n.en, !0);
    var P = b.extend(new k, {
        $element: b(document),
        actualizeOptions: null,
        _resetOptions: null,
        Factory: x,
        version: "2.1.2"
    });
    b.extend(F.prototype, k.prototype);
    b.extend(r.prototype, k.prototype);
    b.extend(x.prototype, k.prototype);
    b.fn.parsley = b.fn.psly = function(a) {
        if (1 < this.length) {
            var c = [];
            return this.each(function() {
                    c.push(b(this).parsley(a))
                }),
                c
        }
        return b(this).length ? new x(this, a) : void f.warn("You must bind Parsley on an existing element.")
    };
    "undefined" == typeof window.ParsleyExtend && (window.ParsleyExtend = {});
    P.options = b.extend(f.objectCreate(h), window.ParsleyConfig);
    window.ParsleyConfig = P.options;
    window.Parsley = window.psly = P;
    window.ParsleyUtils = f;
    window.ParsleyValidator = new q(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
    window.ParsleyUI = "function" == typeof window.ParsleyConfig.ParsleyUI ? (new window.ParsleyConfig.ParsleyUI).listen() :
        (new u).listen();
    !1 !== window.ParsleyConfig.autoBind && b(function() {
        b("[data-parsley-validate]").length && b("[data-parsley-validate]").parsley()
    })
});
! function(b) {
    "function" == typeof define && define.amd ? define(["jquery"], b) : b(jQuery)
}(function(b) {
    b.extend(b.fn, {
        validate: function(a) {
            if (!this.length) return void(a && a.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var c = b.data(this[0], "validator");
            return c ? c : (this.attr("novalidate", "novalidate"), c = new b.validator(a, this[0]), b.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function(a) {
                c.settings.submitHandler && (c.submitButton =
                    a.target);
                b(this).hasClass("cancel") && (c.cancelSubmit = !0);
                void 0 !== b(this).attr("formnovalidate") && (c.cancelSubmit = !0)
            }), this.on("submit.validate", function(a) {
                function d() {
                    var e, h;
                    return c.settings.submitHandler ? (c.submitButton && (e = b("<input type='hidden'/>").attr("name", c.submitButton.name).val(b(c.submitButton).val()).appendTo(c.currentForm)), h = c.settings.submitHandler.call(c, c.currentForm, a), c.submitButton && e.remove(), void 0 !== h ? h : !1) : !0
                }
                return c.settings.debug && a.preventDefault(), c.cancelSubmit ?
                    (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
            })), c)
        },
        valid: function() {
            var a, c, d;
            return b(this[0]).is("form") ? a = this.validate().form() : (d = [], a = !0, c = b(this[0].form).validate(), this.each(function() {
                a = c.element(this) && a;
                d = d.concat(c.errorList)
            }), c.errorList = d), a
        },
        rules: function(a, c) {
            var d, e, k, m, q, u, r = this[0];
            if (a) switch (d = b.data(r.form, "validator").settings, e = d.rules, k = b.validator.staticRules(r), a) {
                case "add":
                    b.extend(k, b.validator.normalizeRule(c));
                    delete k.messages;
                    e[r.name] = k;
                    c.messages && (d.messages[r.name] = b.extend(d.messages[r.name], c.messages));
                    break;
                case "remove":
                    return c ? (u = {}, b.each(c.split(/\s/), function(a, c) {
                        u[c] = k[c];
                        delete k[c];
                        "required" === c && b(r).removeAttr("aria-required")
                    }), u) : (delete e[r.name], k)
            }
            return m = b.validator.normalizeRules(b.extend({}, b.validator.classRules(r), b.validator.attributeRules(r), b.validator.dataRules(r), b.validator.staticRules(r)), r), m.required && (q = m.required, delete m.required, m = b.extend({
                    required: q
                }, m),
                b(r).attr("aria-required", "true")), m.remote && (q = m.remote, delete m.remote, m = b.extend(m, {
                remote: q
            })), m
        }
    });
    b.extend(b.expr[":"], {
        blank: function(a) {
            return !b.trim("" + b(a).val())
        },
        filled: function(a) {
            return !!b.trim("" + b(a).val())
        },
        unchecked: function(a) {
            return !b(a).prop("checked")
        }
    });
    b.validator = function(a, c) {
        this.settings = b.extend(!0, {}, b.validator.defaults, a);
        this.currentForm = c;
        this.init()
    };
    b.validator.format = function(a, c) {
        return 1 === arguments.length ? function() {
            var c = b.makeArray(arguments);
            return c.unshift(a),
                b.validator.format.apply(this, c)
        } : (2 < arguments.length && c.constructor !== Array && (c = b.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), b.each(c, function(b, c) {
            a = a.replace(new RegExp("\\{" + b + "\\}", "g"), function() {
                return c
            })
        }), a)
    };
    b.extend(b.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: b([]),
            errorLabelContainer: b([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(a) {
                this.lastActive =
                    a;
                this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
            },
            onfocusout: function(a) {
                this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
            },
            onkeyup: function(a, c) {
                var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === c.which && "" === this.elementValue(a) || -1 !== b.inArray(c.keyCode, d) || (a.name in this.submitted || a === this.lastElement) && this.element(a)
            },
            onclick: function(a) {
                a.name in
                    this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
            },
            highlight: function(a, c, d) {
                "radio" === a.type ? this.findByName(a.name).addClass(c).removeClass(d) : b(a).addClass(c).removeClass(d)
            },
            unhighlight: function(a, c, d) {
                "radio" === a.type ? this.findByName(a.name).removeClass(c).addClass(d) : b(a).removeClass(c).addClass(d)
            }
        },
        setDefaults: function(a) {
            b.extend(b.validator.defaults, a)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date ( ISO ).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: b.validator.format("Please enter no more than {0} characters."),
            minlength: b.validator.format("Please enter at least {0} characters."),
            rangelength: b.validator.format("Please enter a value between {0} and {1} characters long."),
            range: b.validator.format("Please enter a value between {0} and {1}."),
            max: b.validator.format("Please enter a value less than or equal to {0}."),
            min: b.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function a(a) {
                    var c = b.data(this.form, "validator"),
                        d = "on" + a.type.replace(/^validate/, ""),
                        e = c.settings;
                    e[d] && !b(this).is(e.ignore) && e[d].call(c, this, a)
                }
                this.labelContainer = b(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length &&
                    this.labelContainer || b(this.currentForm);
                this.containers = b(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();
                var c, d = this.groups = {};
                b.each(this.settings.groups, function(a, c) {
                    "string" == typeof c && (c = c.split(/\s/));
                    b.each(c, function(b, c) {
                        d[c] = a
                    })
                });
                c = this.settings.rules;
                b.each(c, function(a, d) {
                    c[a] = b.validator.normalizeRule(d)
                });
                b(this.currentForm).on("focusin.validate focusout.validate keyup.validate",
                    ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']", a).on("click.validate", "select, option, [type='radio'], [type='checkbox']", a);
                this.settings.invalidHandler && b(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                b(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required",
                    "true")
            },
            form: function() {
                return this.checkForm(), b.extend(this.submitted, this.errorMap), this.invalid = b.extend({}, this.errorMap), this.valid() || b(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                return this.valid()
            },
            element: function(a) {
                var c = this.clean(a),
                    d = this.validationTargetFor(c),
                    e = !0;
                return this.lastElement = d, void 0 === d ? delete this.invalid[c.name] :
                    (this.prepareElement(d), this.currentElements = b(d), e = !1 !== this.check(d), e ? delete this.invalid[d.name] : this.invalid[d.name] = !0), b(a).attr("aria-invalid", !e), this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
            },
            showErrors: function(a) {
                if (a) {
                    b.extend(this.errorMap, a);
                    this.errorList = [];
                    for (var c in a) this.errorList.push({
                        message: a[c],
                        element: this.findByName(c)[0]
                    });
                    this.successList = b.grep(this.successList, function(b) {
                        return !(b.name in a)
                    })
                }
                this.settings.showErrors ?
                    this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                b.fn.resetForm && b(this.currentForm).resetForm();
                this.submitted = {};
                this.lastElement = null;
                this.prepareForm();
                this.hideErrors();
                var a, c = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                if (this.settings.unhighlight)
                    for (a = 0; c[a]; a++) this.settings.unhighlight.call(this, c[a], this.settings.errorClass, "");
                else c.removeClass(this.settings.errorClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(a) {
                var b, d = 0;
                for (b in a) d++;
                return d
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(a) {
                a.not(this.containers).text("");
                this.addWrapper(a).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    b(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (a) {}
            },
            findLastActive: function() {
                var a =
                    this.lastActive;
                return a && 1 === b.grep(this.errorList, function(b) {
                    return b.element.name === a.name
                }).length && a
            },
            elements: function() {
                var a = this,
                    c = {};
                return b(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    return !this.name && a.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !a.objectLength(b(this).rules()) ? !1 : (c[this.name] = !0, !0)
                })
            },
            clean: function(a) {
                return b(a)[0]
            },
            errors: function() {
                var a =
                    this.settings.errorClass.split(" ").join(".");
                return b(this.settings.errorElement + "." + a, this.errorContext)
            },
            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = b([]);
                this.toHide = b([]);
                this.currentElements = b([])
            },
            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(a) {
                this.reset();
                this.toHide = this.errorsFor(a)
            },
            elementValue: function(a) {
                var c, d = b(a),
                    e = a.type;
                return "radio" === e || "checkbox" === e ? this.findByName(a.name).filter(":checked").val() :
                    "number" === e && "undefined" != typeof a.validity ? a.validity.badInput ? !1 : d.val() : (c = d.val(), "string" == typeof c ? c.replace(/\r/g, "") : c)
            },
            check: function(a) {
                a = this.validationTargetFor(this.clean(a));
                var c, d, e, k = b(a).rules(),
                    m = b.map(k, function(a, b) {
                        return b
                    }).length,
                    q = !1,
                    u = this.elementValue(a);
                for (d in k) {
                    e = {
                        method: d,
                        parameters: k[d]
                    };
                    try {
                        if (c = b.validator.methods[d].call(this, u, a, e.parameters), "dependency-mismatch" === c && 1 === m) q = !0;
                        else {
                            if (q = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(a)));
                            if (!c) return this.formatAndAdd(a, e), !1
                        }
                    } catch (r) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + a.id + ", check the '" + e.method + "' method.", r), r instanceof TypeError && (r.message += ".  Exception occurred when checking element " + a.id + ", check the '" + e.method + "' method."), r;
                    }
                }
                if (!q) return this.objectLength(k) && this.successList.push(a), !0
            },
            customDataMessage: function(a, c) {
                return b(a).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || b(a).data("msg")
            },
            customMessage: function(a, b) {
                var d = this.settings.messages[a];
                return d && (d.constructor === String ? d : d[b])
            },
            findDefined: function() {
                for (var a = 0; a < arguments.length; a++)
                    if (void 0 !== arguments[a]) return arguments[a]
            },
            defaultMessage: function(a, c) {
                return this.findDefined(this.customMessage(a.name, c), this.customDataMessage(a, c), !this.settings.ignoreTitle && a.title || void 0, b.validator.messages[c], "<strong>Warning: No message defined for " + a.name + "</strong>")
            },
            formatAndAdd: function(a, c) {
                var d = this.defaultMessage(a,
                        c.method),
                    e = /\$?\{(\d+)\}/g;
                "function" == typeof d ? d = d.call(this, c.parameters, a) : e.test(d) && (d = b.validator.format(d.replace(e, "{$1}"), c.parameters));
                this.errorList.push({
                    message: d,
                    element: a,
                    method: c.method
                });
                this.errorMap[a.name] = d;
                this.submitted[a.name] = d
            },
            addWrapper: function(a) {
                return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
            },
            defaultShowErrors: function() {
                var a, b;
                for (a = 0; this.errorList[a]; a++) b = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this,
                    b.element, this.settings.errorClass, this.settings.validClass), this.showLabel(b.element, b.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                if (this.settings.unhighlight)
                    for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return b(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(a, c) {
                var d, e, k, m = this.errorsFor(a),
                    q = this.idOrName(a),
                    u = b(a).attr("aria-describedby");
                m.length ? (m.removeClass(this.settings.validClass).addClass(this.settings.errorClass), m.html(c)) : (m = b("<" + this.settings.errorElement + ">").attr("id", q + "-error").addClass(this.settings.errorClass).html(c || ""), d = m, this.settings.wrapper &&
                    (d = m.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, b(a)) : d.insertAfter(a), m.is("label") ? m.attr("for", q) : 0 === m.parents("label[for='" + q + "']").length && (k = m.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1"), u ? u.match(new RegExp("\\b" + k + "\\b")) || (u += " " + k) : u = k, b(a).attr("aria-describedby", u), e = this.groups[a.name], e && b.each(this.groups, function(a, c) {
                        c === e && b("[name='" + a + "']", this.currentForm).attr("aria-describedby",
                            m.attr("id"))
                    })));
                !c && this.settings.success && (m.text(""), "string" == typeof this.settings.success ? m.addClass(this.settings.success) : this.settings.success(m, a));
                this.toShow = this.toShow.add(m)
            },
            errorsFor: function(a) {
                var c = this.idOrName(a);
                a = b(a).attr("aria-describedby");
                c = "label[for='" + c + "'], label[for='" + c + "'] *";
                return a && (c = c + ", #" + a.replace(/\s+/g, ", #")), this.errors().filter(c)
            },
            idOrName: function(a) {
                return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
            },
            validationTargetFor: function(a) {
                return this.checkable(a) &&
                    (a = this.findByName(a.name)), b(a).not(this.settings.ignore)[0]
            },
            checkable: function(a) {
                return /radio|checkbox/i.test(a.type)
            },
            findByName: function(a) {
                return b(this.currentForm).find("[name='" + a + "']")
            },
            getLength: function(a, c) {
                switch (c.nodeName.toLowerCase()) {
                    case "select":
                        return b("option:selected", c).length;
                    case "input":
                        if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                }
                return a.length
            },
            depend: function(a, b) {
                return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
            },
            dependTypes: {
                "boolean": function(a) {
                    return a
                },
                string: function(a, c) {
                    return !!b(a, c.form).length
                },
                "function": function(a, b) {
                    return a(b)
                }
            },
            optional: function(a) {
                var c = this.elementValue(a);
                return !b.validator.methods.required.call(this, c, a) && "dependency-mismatch"
            },
            startRequest: function(a) {
                this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
            },
            stopRequest: function(a, c) {
                this.pendingRequest--;
                0 > this.pendingRequest && (this.pendingRequest = 0);
                delete this.pending[a.name];
                c && 0 === this.pendingRequest &&
                    this.formSubmitted && this.form() ? (b(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (b(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(a) {
                return b.data(a, "previousValue") || b.data(a, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(a, "remote")
                })
            },
            destroy: function() {
                this.resetForm();
                b(this.currentForm).off(".validate").removeData("validator")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(a, c) {
            a.constructor === String ? this.classRuleSettings[a] = c : b.extend(this.classRuleSettings, a)
        },
        classRules: function(a) {
            var c = {};
            a = b(a).attr("class");
            return a && b.each(a.split(" "), function() {
                this in b.validator.classRuleSettings && b.extend(c, b.validator.classRuleSettings[this])
            }), c
        },
        normalizeAttributeRule: function(a, b, d, e) {
            /min|max/.test(d) && (null ===
                b || /number|range|text/.test(b)) && (e = Number(e), isNaN(e) && (e = void 0));
            e || 0 === e ? a[d] = e : b === d && "range" !== b && (a[d] = !0)
        },
        attributeRules: function(a) {
            var c, d, e = {},
                k = b(a),
                m = a.getAttribute("type");
            for (c in b.validator.methods) "required" === c ? (d = a.getAttribute(c), "" === d && (d = !0), d = !!d) : d = k.attr(c), this.normalizeAttributeRule(e, m, c, d);
            return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
        },
        dataRules: function(a) {
            var c, d = {},
                e = b(a),
                k = a.getAttribute("type");
            for (c in b.validator.methods) a =
                e.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(d, k, c, a);
            return d
        },
        staticRules: function(a) {
            var c = {},
                d = b.data(a.form, "validator");
            return d.settings.rules && (c = b.validator.normalizeRule(d.settings.rules[a.name]) || {}), c
        },
        normalizeRules: function(a, c) {
            return b.each(a, function(d, e) {
                if (!1 === e) return void delete a[d];
                if (e.param || e.depends) {
                    var k = !0;
                    switch (typeof e.depends) {
                        case "string":
                            k = !!b(e.depends, c.form).length;
                            break;
                        case "function":
                            k = e.depends.call(c,
                                c)
                    }
                    k ? a[d] = void 0 !== e.param ? e.param : !0 : delete a[d]
                }
            }), b.each(a, function(d, e) {
                a[d] = b.isFunction(e) ? e(c) : e
            }), b.each(["minlength", "maxlength"], function() {
                a[this] && (a[this] = Number(a[this]))
            }), b.each(["rangelength", "range"], function() {
                var c;
                a[this] && (b.isArray(a[this]) ? a[this] = [Number(a[this][0]), Number(a[this][1])] : "string" == typeof a[this] && (c = a[this].replace(/[\[\]]/g, "").split(/[\s,]+/), a[this] = [Number(c[0]), Number(c[1])]))
            }), b.validator.autoCreateRanges && (null != a.min && null != a.max && (a.range = [a.min, a.max],
                delete a.min, delete a.max), null != a.minlength && null != a.maxlength && (a.rangelength = [a.minlength, a.maxlength], delete a.minlength, delete a.maxlength)), a
        },
        normalizeRule: function(a) {
            if ("string" == typeof a) {
                var c = {};
                b.each(a.split(/\s/), function() {
                    c[this] = !0
                });
                a = c
            }
            return a
        },
        addMethod: function(a, c, d) {
            b.validator.methods[a] = c;
            b.validator.messages[a] = void 0 !== d ? d : b.validator.messages[a];
            3 > c.length && b.validator.addClassRules(a, b.validator.normalizeRule(a))
        },
        methods: {
            required: function(a, c, d) {
                return this.depend(d,
                    c) ? "select" === c.nodeName.toLowerCase() ? (a = b(c).val()) && 0 < a.length : this.checkable(c) ? 0 < this.getLength(a, c) : 0 < a.length : "dependency-mismatch"
            },
            email: function(a, b) {
                return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
            },
            url: function(a, b) {
                return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
            },
            date: function(a, b) {
                return this.optional(b) || !/Invalid|NaN/.test((new Date(a)).toString())
            },
            dateISO: function(a, b) {
                return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
            },
            number: function(a, b) {
                return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
            },
            digits: function(a, b) {
                return this.optional(b) || /^\d+$/.test(a)
            },
            creditcard: function(a, b) {
                if (this.optional(b)) return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(a)) return !1;
                var d, e, k = 0;
                e = 0;
                var m = !1;
                if (a = a.replace(/\D/g, ""), 13 > a.length || 19 < a.length) return !1;
                for (d = a.length - 1; 0 <= d; d--) e = a.charAt(d), e = parseInt(e, 10), m && 9 < (e *= 2) && (e -= 9), k += e, m = !m;
                return 0 === k % 10
            },
            minlength: function(a, c, d) {
                a = b.isArray(a) ? a.length : this.getLength(a, c);
                return this.optional(c) || a >= d
            },
            maxlength: function(a, c, d) {
                a = b.isArray(a) ? a.length : this.getLength(a, c);
                return this.optional(c) || d >= a
            },
            rangelength: function(a, c, d) {
                a = b.isArray(a) ? a.length : this.getLength(a, c);
                return this.optional(c) || a >= d[0] && a <= d[1]
            },
            min: function(a, b, d) {
                return this.optional(b) ||
                    a >= d
            },
            max: function(a, b, d) {
                return this.optional(b) || d >= a
            },
            range: function(a, b, d) {
                return this.optional(b) || a >= d[0] && a <= d[1]
            },
            equalTo: function(a, c, d) {
                d = b(d);
                return this.settings.onfocusout && d.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                    b(c).valid()
                }), a === d.val()
            },
            remote: function(a, c, d) {
                if (this.optional(c)) return "dependency-mismatch";
                var e, k, m = this.previousValue(c);
                return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), m.originalMessage = this.settings.messages[c.name].remote,
                    this.settings.messages[c.name].remote = m.message, d = "string" == typeof d && {
                        url: d
                    } || d, m.old === a ? m.valid : (m.old = a, e = this, this.startRequest(c), k = {}, k[c.name] = a, b.ajax(b.extend(!0, {
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: k,
                        context: e.currentForm,
                        success: function(d) {
                            var f, k, A, F = !0 === d || "true" === d;
                            e.settings.messages[c.name].remote = m.originalMessage;
                            F ? (A = e.formSubmitted, e.prepareElement(c), e.formSubmitted = A, e.successList.push(c), delete e.invalid[c.name], e.showErrors()) : (f = {}, k = d || e.defaultMessage(c,
                                "remote"), f[c.name] = m.message = b.isFunction(k) ? k(a) : k, e.invalid[c.name] = !0, e.showErrors(f));
                            m.valid = F;
                            e.stopRequest(c, F)
                        }
                    }, d)), "pending")
            }
        }
    });
    var e, d = {};
    b.ajaxPrefilter ? b.ajaxPrefilter(function(a, b, e) {
        b = a.port;
        "abort" === a.mode && (d[b] && d[b].abort(), d[b] = e)
    }) : (e = b.ajax, b.ajax = function(a) {
        var c = ("port" in a ? a : b.ajaxSettings).port;
        return "abort" === ("mode" in a ? a : b.ajaxSettings).mode ? (d[c] && d[c].abort(), d[c] = e.apply(this, arguments), d[c]) : e.apply(this, arguments)
    })
});