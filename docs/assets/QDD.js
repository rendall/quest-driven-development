/*! For license information please see QDD.js.LICENSE.txt */
(() => {
  var e = {
      58: (e, t, n) => {
        "use strict";
        function r(e) {
          return e && "object" == typeof e && "default" in e ? e.default : e;
        }
        var a = r(n(296)),
          i = r(n(485));
        function o(e) {
          return (o =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    "function" == typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                })(e);
        }
        function s(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        }
        function l(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        function u(e, t, n) {
          return t && l(e.prototype, t), n && l(e, n), e;
        }
        function c(e, t, n) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = n),
            e
          );
        }
        function d(e, t) {
          return (
            (function (e) {
              if (Array.isArray(e)) return e;
            })(e) ||
            (function (e, t) {
              var n = [],
                r = !0,
                a = !1,
                i = void 0;
              try {
                for (
                  var o, s = e[Symbol.iterator]();
                  !(r = (o = s.next()).done) &&
                  (n.push(o.value), !t || n.length !== t);
                  r = !0
                );
              } catch (e) {
                (a = !0), (i = e);
              } finally {
                try {
                  r || null == s.return || s.return();
                } finally {
                  if (a) throw i;
                }
              }
              return n;
            })(e, t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance"
              );
            })()
          );
        }
        var h = "undefined" == typeof window ? null : window,
          p = h ? h.navigator : null,
          f = (h && h.document, o("")),
          g = o({}),
          v = o(function () {}),
          y = "undefined" == typeof HTMLElement ? "undefined" : o(HTMLElement),
          m = function (e) {
            return e && e.instanceString && x(e.instanceString)
              ? e.instanceString()
              : null;
          },
          b = function (e) {
            return null != e && o(e) == f;
          },
          x = function (e) {
            return null != e && o(e) === v;
          },
          w = function (e) {
            return (
              !S(e) &&
              (Array.isArray
                ? Array.isArray(e)
                : null != e && e instanceof Array)
            );
          },
          E = function (e) {
            return null != e && o(e) === g && !w(e) && e.constructor === Object;
          },
          k = function (e) {
            return null != e && o(e) === o(1) && !isNaN(e);
          },
          C = function (e) {
            return "undefined" === y
              ? void 0
              : null != e && e instanceof HTMLElement;
          },
          S = function (e) {
            return D(e) || P(e);
          },
          D = function (e) {
            return "collection" === m(e) && e._private.single;
          },
          P = function (e) {
            return "collection" === m(e) && !e._private.single;
          },
          T = function (e) {
            return "core" === m(e);
          },
          M = function (e) {
            return "stylesheet" === m(e);
          },
          B = function (e) {
            return null == e || !("" !== e && !e.match(/^\s+$/));
          },
          _ = function (e) {
            return (
              (function (e) {
                return null != e && o(e) === g;
              })(e) && x(e.then)
            );
          },
          N = function (e, t) {
            t ||
              (t = function () {
                if (1 === arguments.length) return arguments[0];
                if (0 === arguments.length) return "undefined";
                for (var e = [], t = 0; t < arguments.length; t++)
                  e.push(arguments[t]);
                return e.join("$");
              });
            var n = function n() {
              var r,
                a = this,
                i = arguments,
                o = t.apply(a, i),
                s = n.cache;
              return (r = s[o]) || (r = s[o] = e.apply(a, i)), r;
            };
            return (n.cache = {}), n;
          },
          I = N(function (e) {
            return e.replace(/([A-Z])/g, function (e) {
              return "-" + e.toLowerCase();
            });
          }),
          L = N(function (e) {
            return e.replace(/(-\w)/g, function (e) {
              return e[1].toUpperCase();
            });
          }),
          z = N(
            function (e, t) {
              return e + t[0].toUpperCase() + t.substring(1);
            },
            function (e, t) {
              return e + "$" + t;
            }
          ),
          A = function (e) {
            return B(e) ? e : e.charAt(0).toUpperCase() + e.substring(1);
          },
          O = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))",
          R = function (e, t) {
            return e < t ? -1 : e > t ? 1 : 0;
          },
          V =
            null != Object.assign
              ? Object.assign.bind(Object)
              : function (e) {
                  for (var t = arguments, n = 1; n < t.length; n++) {
                    var r = t[n];
                    if (null != r)
                      for (var a = Object.keys(r), i = 0; i < a.length; i++) {
                        var o = a[i];
                        e[o] = r[o];
                      }
                  }
                  return e;
                },
          F = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255],
            antiquewhite: [250, 235, 215],
            aqua: [0, 255, 255],
            aquamarine: [127, 255, 212],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            bisque: [255, 228, 196],
            black: [0, 0, 0],
            blanchedalmond: [255, 235, 205],
            blue: [0, 0, 255],
            blueviolet: [138, 43, 226],
            brown: [165, 42, 42],
            burlywood: [222, 184, 135],
            cadetblue: [95, 158, 160],
            chartreuse: [127, 255, 0],
            chocolate: [210, 105, 30],
            coral: [255, 127, 80],
            cornflowerblue: [100, 149, 237],
            cornsilk: [255, 248, 220],
            crimson: [220, 20, 60],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgoldenrod: [184, 134, 11],
            darkgray: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkgrey: [169, 169, 169],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkseagreen: [143, 188, 143],
            darkslateblue: [72, 61, 139],
            darkslategray: [47, 79, 79],
            darkslategrey: [47, 79, 79],
            darkturquoise: [0, 206, 209],
            darkviolet: [148, 0, 211],
            deeppink: [255, 20, 147],
            deepskyblue: [0, 191, 255],
            dimgray: [105, 105, 105],
            dimgrey: [105, 105, 105],
            dodgerblue: [30, 144, 255],
            firebrick: [178, 34, 34],
            floralwhite: [255, 250, 240],
            forestgreen: [34, 139, 34],
            fuchsia: [255, 0, 255],
            gainsboro: [220, 220, 220],
            ghostwhite: [248, 248, 255],
            gold: [255, 215, 0],
            goldenrod: [218, 165, 32],
            gray: [128, 128, 128],
            grey: [128, 128, 128],
            green: [0, 128, 0],
            greenyellow: [173, 255, 47],
            honeydew: [240, 255, 240],
            hotpink: [255, 105, 180],
            indianred: [205, 92, 92],
            indigo: [75, 0, 130],
            ivory: [255, 255, 240],
            khaki: [240, 230, 140],
            lavender: [230, 230, 250],
            lavenderblush: [255, 240, 245],
            lawngreen: [124, 252, 0],
            lemonchiffon: [255, 250, 205],
            lightblue: [173, 216, 230],
            lightcoral: [240, 128, 128],
            lightcyan: [224, 255, 255],
            lightgoldenrodyellow: [250, 250, 210],
            lightgray: [211, 211, 211],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightsalmon: [255, 160, 122],
            lightseagreen: [32, 178, 170],
            lightskyblue: [135, 206, 250],
            lightslategray: [119, 136, 153],
            lightslategrey: [119, 136, 153],
            lightsteelblue: [176, 196, 222],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            limegreen: [50, 205, 50],
            linen: [250, 240, 230],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            mediumaquamarine: [102, 205, 170],
            mediumblue: [0, 0, 205],
            mediumorchid: [186, 85, 211],
            mediumpurple: [147, 112, 219],
            mediumseagreen: [60, 179, 113],
            mediumslateblue: [123, 104, 238],
            mediumspringgreen: [0, 250, 154],
            mediumturquoise: [72, 209, 204],
            mediumvioletred: [199, 21, 133],
            midnightblue: [25, 25, 112],
            mintcream: [245, 255, 250],
            mistyrose: [255, 228, 225],
            moccasin: [255, 228, 181],
            navajowhite: [255, 222, 173],
            navy: [0, 0, 128],
            oldlace: [253, 245, 230],
            olive: [128, 128, 0],
            olivedrab: [107, 142, 35],
            orange: [255, 165, 0],
            orangered: [255, 69, 0],
            orchid: [218, 112, 214],
            palegoldenrod: [238, 232, 170],
            palegreen: [152, 251, 152],
            paleturquoise: [175, 238, 238],
            palevioletred: [219, 112, 147],
            papayawhip: [255, 239, 213],
            peachpuff: [255, 218, 185],
            peru: [205, 133, 63],
            pink: [255, 192, 203],
            plum: [221, 160, 221],
            powderblue: [176, 224, 230],
            purple: [128, 0, 128],
            red: [255, 0, 0],
            rosybrown: [188, 143, 143],
            royalblue: [65, 105, 225],
            saddlebrown: [139, 69, 19],
            salmon: [250, 128, 114],
            sandybrown: [244, 164, 96],
            seagreen: [46, 139, 87],
            seashell: [255, 245, 238],
            sienna: [160, 82, 45],
            silver: [192, 192, 192],
            skyblue: [135, 206, 235],
            slateblue: [106, 90, 205],
            slategray: [112, 128, 144],
            slategrey: [112, 128, 144],
            snow: [255, 250, 250],
            springgreen: [0, 255, 127],
            steelblue: [70, 130, 180],
            tan: [210, 180, 140],
            teal: [0, 128, 128],
            thistle: [216, 191, 216],
            tomato: [255, 99, 71],
            turquoise: [64, 224, 208],
            violet: [238, 130, 238],
            wheat: [245, 222, 179],
            white: [255, 255, 255],
            whitesmoke: [245, 245, 245],
            yellow: [255, 255, 0],
            yellowgreen: [154, 205, 50],
          },
          j = function (e) {
            for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
              var i = n[a];
              if (E(i)) throw Error("Tried to set map with object key");
              a < n.length - 1
                ? (null == t[i] && (t[i] = {}), (t = t[i]))
                : (t[i] = e.value);
            }
          },
          q = function (e) {
            for (var t = e.map, n = e.keys, r = n.length, a = 0; a < r; a++) {
              var i = n[a];
              if (E(i)) throw Error("Tried to get map with object key");
              if (null == (t = t[i])) return t;
            }
            return t;
          },
          X = h ? h.performance : null,
          Y =
            X && X.now
              ? function () {
                  return X.now();
                }
              : function () {
                  return Date.now();
                },
          W = (function () {
            if (h) {
              if (h.requestAnimationFrame)
                return function (e) {
                  h.requestAnimationFrame(e);
                };
              if (h.mozRequestAnimationFrame)
                return function (e) {
                  h.mozRequestAnimationFrame(e);
                };
              if (h.webkitRequestAnimationFrame)
                return function (e) {
                  h.webkitRequestAnimationFrame(e);
                };
              if (h.msRequestAnimationFrame)
                return function (e) {
                  h.msRequestAnimationFrame(e);
                };
            }
            return function (e) {
              e &&
                setTimeout(function () {
                  e(Y());
                }, 1e3 / 60);
            };
          })(),
          H = function (e) {
            return W(e);
          },
          $ = Y,
          K = 9261,
          G = 65599,
          U = 5381,
          Z = function (e) {
            for (
              var t,
                n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : K,
                r = n;
              !(t = e.next()).done;

            )
              r = (r * G + t.value) | 0;
            return r;
          },
          Q = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : K;
            return (t * G + e) | 0;
          },
          J = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : U;
            return ((t << 5) + t + e) | 0;
          },
          ee = function (e) {
            return 2097152 * e[0] + e[1];
          },
          te = function (e, t) {
            return [Q(e[0], t[0]), J(e[1], t[1])];
          },
          ne = function (e, t) {
            var n = { value: 0, done: !1 },
              r = 0,
              a = e.length;
            return Z(
              {
                next: function () {
                  return (
                    r < a ? (n.value = e.charCodeAt(r++)) : (n.done = !0), n
                  );
                },
              },
              t
            );
          },
          re = function () {
            return ae(arguments);
          },
          ae = function (e) {
            for (var t, n = 0; n < e.length; n++) {
              var r = e[n];
              t = 0 === n ? ne(r) : ne(r, t);
            }
            return t;
          },
          ie = !0,
          oe = null != console.warn,
          se = null != console.trace,
          le = Number.MAX_SAFE_INTEGER || 9007199254740991,
          ue = function () {
            return !0;
          },
          ce = function () {
            return !1;
          },
          de = function () {
            return 0;
          },
          he = function () {},
          pe = function (e) {
            throw new Error(e);
          },
          fe = function (e) {
            if (void 0 === e) return ie;
            ie = !!e;
          },
          ge = function (e) {
            fe() &&
              (oe ? console.warn(e) : (console.log(e), se && console.trace()));
          },
          ve = function (e) {
            return null == e
              ? e
              : w(e)
              ? e.slice()
              : E(e)
              ? (function (e) {
                  return V({}, e);
                })(e)
              : e;
          },
          ye = function (e, t) {
            for (
              t = e = "";
              e++ < 36;
              t +=
                (51 * e) & 52
                  ? (15 ^ e
                      ? 8 ^ (Math.random() * (20 ^ e ? 16 : 4))
                      : 4
                    ).toString(16)
                  : "-"
            );
            return t;
          },
          me = {},
          be = function () {
            return me;
          },
          xe = function (e) {
            var t = Object.keys(e);
            return function (n) {
              for (var r = {}, a = 0; a < t.length; a++) {
                var i = t[a],
                  o = null == n ? void 0 : n[i];
                r[i] = void 0 === o ? e[i] : o;
              }
              return r;
            };
          },
          we = function (e, t, n) {
            for (
              var r = e.length;
              r >= 0 && (e[r] !== t || (e.splice(r, 1), n));
              r--
            );
          },
          Ee = function (e) {
            e.splice(0, e.length);
          },
          ke = function (e, t, n) {
            return n && (t = z(n, t)), e[t];
          },
          Ce = function (e, t, n, r) {
            n && (t = z(n, t)), (e[t] = r);
          },
          Se =
            "undefined" != typeof Map
              ? Map
              : (function () {
                  function e() {
                    s(this, e), (this._obj = {});
                  }
                  return (
                    u(e, [
                      {
                        key: "set",
                        value: function (e, t) {
                          return (this._obj[e] = t), this;
                        },
                      },
                      {
                        key: "delete",
                        value: function (e) {
                          return (this._obj[e] = void 0), this;
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          this._obj = {};
                        },
                      },
                      {
                        key: "has",
                        value: function (e) {
                          return void 0 !== this._obj[e];
                        },
                      },
                      {
                        key: "get",
                        value: function (e) {
                          return this._obj[e];
                        },
                      },
                    ]),
                    e
                  );
                })(),
          De = (function () {
            function e(t) {
              if (
                (s(this, e),
                (this._obj = Object.create(null)),
                (this.size = 0),
                null != t)
              ) {
                var n;
                n =
                  null != t.instanceString &&
                  t.instanceString() === this.instanceString()
                    ? t.toArray()
                    : t;
                for (var r = 0; r < n.length; r++) this.add(n[r]);
              }
            }
            return (
              u(e, [
                {
                  key: "instanceString",
                  value: function () {
                    return "set";
                  },
                },
                {
                  key: "add",
                  value: function (e) {
                    var t = this._obj;
                    1 !== t[e] && ((t[e] = 1), this.size++);
                  },
                },
                {
                  key: "delete",
                  value: function (e) {
                    var t = this._obj;
                    1 === t[e] && ((t[e] = 0), this.size--);
                  },
                },
                {
                  key: "clear",
                  value: function () {
                    this._obj = Object.create(null);
                  },
                },
                {
                  key: "has",
                  value: function (e) {
                    return 1 === this._obj[e];
                  },
                },
                {
                  key: "toArray",
                  value: function () {
                    var e = this;
                    return Object.keys(this._obj).filter(function (t) {
                      return e.has(t);
                    });
                  },
                },
                {
                  key: "forEach",
                  value: function (e, t) {
                    return this.toArray().forEach(e, t);
                  },
                },
              ]),
              e
            );
          })(),
          Pe =
            "undefined" !== ("undefined" == typeof Set ? "undefined" : o(Set))
              ? Set
              : De,
          Te = function (e, t) {
            var n =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2];
            if (void 0 !== e && void 0 !== t && T(e)) {
              var r = t.group;
              if (
                (null == r &&
                  (r =
                    t.data && null != t.data.source && null != t.data.target
                      ? "edges"
                      : "nodes"),
                "nodes" === r || "edges" === r)
              ) {
                (this.length = 1), (this[0] = this);
                var a = (this._private = {
                  cy: e,
                  single: !0,
                  data: t.data || {},
                  position: t.position || { x: 0, y: 0 },
                  autoWidth: void 0,
                  autoHeight: void 0,
                  autoPadding: void 0,
                  compoundBoundsClean: !1,
                  listeners: [],
                  group: r,
                  style: {},
                  rstyle: {},
                  styleCxts: [],
                  styleKeys: {},
                  removed: !0,
                  selected: !!t.selected,
                  selectable: void 0 === t.selectable || !!t.selectable,
                  locked: !!t.locked,
                  grabbed: !1,
                  grabbable: void 0 === t.grabbable || !!t.grabbable,
                  pannable:
                    void 0 === t.pannable ? "edges" === r : !!t.pannable,
                  active: !1,
                  classes: new Pe(),
                  animation: { current: [], queue: [] },
                  rscratch: {},
                  scratch: t.scratch || {},
                  edges: [],
                  children: [],
                  parent: null,
                  traversalCache: {},
                  backgrounding: !1,
                  bbCache: null,
                  bbCacheShift: { x: 0, y: 0 },
                  bodyBounds: null,
                  overlayBounds: null,
                  labelBounds: {
                    all: null,
                    source: null,
                    target: null,
                    main: null,
                  },
                  arrowBounds: {
                    source: null,
                    target: null,
                    "mid-source": null,
                    "mid-target": null,
                  },
                });
                if (
                  (null == a.position.x && (a.position.x = 0),
                  null == a.position.y && (a.position.y = 0),
                  t.renderedPosition)
                ) {
                  var i = t.renderedPosition,
                    o = e.pan(),
                    s = e.zoom();
                  a.position = { x: (i.x - o.x) / s, y: (i.y - o.y) / s };
                }
                var l = [];
                w(t.classes)
                  ? (l = t.classes)
                  : b(t.classes) && (l = t.classes.split(/\s+/));
                for (var u = 0, c = l.length; u < c; u++) {
                  var d = l[u];
                  d && "" !== d && a.classes.add(d);
                }
                this.createEmitter();
                var h = t.style || t.css;
                h &&
                  (ge(
                    "Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."
                  ),
                  this.style(h)),
                  (void 0 === n || n) && this.restore();
              } else
                pe(
                  "An element must be of type `nodes` or `edges`; you specified `" +
                    r +
                    "`"
                );
            } else
              pe("An element must have a core reference and parameters set");
          },
          Me = function (e) {
            return (
              (e = { bfs: e.bfs || !e.dfs, dfs: e.dfs || !e.bfs }),
              function (t, n, r) {
                var a;
                E(t) &&
                  !S(t) &&
                  ((t = (a = t).roots || a.root),
                  (n = a.visit),
                  (r = a.directed)),
                  (r = 2 !== arguments.length || x(n) ? r : n),
                  (n = x(n) ? n : function () {});
                for (
                  var i,
                    o = this._private.cy,
                    s = (t = b(t) ? this.filter(t) : t),
                    l = [],
                    u = [],
                    c = {},
                    d = {},
                    h = {},
                    p = 0,
                    f = this.byGroup(),
                    g = f.nodes,
                    v = f.edges,
                    y = 0;
                  y < s.length;
                  y++
                ) {
                  var m = s[y],
                    w = m.id();
                  m.isNode() &&
                    (l.unshift(m),
                    e.bfs && ((h[w] = !0), u.push(m)),
                    (d[w] = 0));
                }
                var k = function () {
                  var t = e.bfs ? l.shift() : l.pop(),
                    a = t.id();
                  if (e.dfs) {
                    if (h[a]) return "continue";
                    (h[a] = !0), u.push(t);
                  }
                  var o,
                    s = d[a],
                    f = c[a],
                    y = null != f ? f.source() : null,
                    m = null != f ? f.target() : null,
                    b = null == f ? void 0 : t.same(y) ? m[0] : y[0];
                  if (!0 === (o = n(t, f, b, p++, s))) return (i = t), "break";
                  if (!1 === o) return "break";
                  for (
                    var x = t.connectedEdges().filter(function (e) {
                        return (!r || e.source().same(t)) && v.has(e);
                      }),
                      w = 0;
                    w < x.length;
                    w++
                  ) {
                    var E = x[w],
                      k = E.connectedNodes().filter(function (e) {
                        return !e.same(t) && g.has(e);
                      }),
                      C = k.id();
                    0 === k.length ||
                      h[C] ||
                      ((k = k[0]),
                      l.push(k),
                      e.bfs && ((h[C] = !0), u.push(k)),
                      (c[C] = E),
                      (d[C] = d[a] + 1));
                  }
                };
                e: for (; 0 !== l.length; ) {
                  var C = k();
                  switch (C) {
                    case "continue":
                      continue;
                    case "break":
                      break e;
                  }
                }
                for (var D = o.collection(), P = 0; P < u.length; P++) {
                  var T = u[P],
                    M = c[T.id()];
                  null != M && D.push(M), D.push(T);
                }
                return { path: o.collection(D), found: o.collection(i) };
              }
            );
          },
          Be = {
            breadthFirstSearch: Me({ bfs: !0 }),
            depthFirstSearch: Me({ dfs: !0 }),
          };
        (Be.bfs = Be.breadthFirstSearch), (Be.dfs = Be.depthFirstSearch);
        var _e = xe({
            root: null,
            weight: function (e) {
              return 1;
            },
            directed: !1,
          }),
          Ne = {
            dijkstra: function (e) {
              if (!E(e)) {
                var t = arguments;
                e = { root: t[0], weight: t[1], directed: t[2] };
              }
              var n = _e(e),
                r = n.root,
                a = n.weight,
                o = n.directed,
                s = this,
                l = a,
                u = b(r) ? this.filter(r)[0] : r[0],
                c = {},
                d = {},
                h = {},
                p = this.byGroup(),
                f = p.nodes,
                g = p.edges;
              g.unmergeBy(function (e) {
                return e.isLoop();
              });
              for (
                var v = function (e) {
                    return c[e.id()];
                  },
                  y = function (e, t) {
                    (c[e.id()] = t), m.updateItem(e);
                  },
                  m = new i(function (e, t) {
                    return v(e) - v(t);
                  }),
                  x = 0;
                x < f.length;
                x++
              ) {
                var w = f[x];
                (c[w.id()] = w.same(u) ? 0 : 1 / 0), m.push(w);
              }
              for (
                var k = function (e, t) {
                  for (
                    var n,
                      r = (o ? e.edgesTo(t) : e.edgesWith(t)).intersect(g),
                      a = 1 / 0,
                      i = 0;
                    i < r.length;
                    i++
                  ) {
                    var s = r[i],
                      u = l(s);
                    (u < a || !n) && ((a = u), (n = s));
                  }
                  return { edge: n, dist: a };
                };
                m.size() > 0;

              ) {
                var C = m.pop(),
                  S = v(C),
                  D = C.id();
                if (((h[D] = S), S !== 1 / 0))
                  for (
                    var P = C.neighborhood().intersect(f), T = 0;
                    T < P.length;
                    T++
                  ) {
                    var M = P[T],
                      B = M.id(),
                      _ = k(C, M),
                      N = S + _.dist;
                    N < v(M) && (y(M, N), (d[B] = { node: C, edge: _.edge }));
                  }
              }
              return {
                distanceTo: function (e) {
                  var t = b(e) ? f.filter(e)[0] : e[0];
                  return h[t.id()];
                },
                pathTo: function (e) {
                  var t = b(e) ? f.filter(e)[0] : e[0],
                    n = [],
                    r = t,
                    a = r.id();
                  if (t.length > 0)
                    for (n.unshift(t); d[a]; ) {
                      var i = d[a];
                      n.unshift(i.edge),
                        n.unshift(i.node),
                        (a = (r = i.node).id());
                    }
                  return s.spawn(n);
                },
              };
            },
          },
          Ie = {
            kruskal: function (e) {
              e =
                e ||
                function (e) {
                  return 1;
                };
              for (
                var t = this.byGroup(),
                  n = t.nodes,
                  r = t.edges,
                  a = n.length,
                  i = new Array(a),
                  o = n,
                  s = function (e) {
                    for (var t = 0; t < i.length; t++)
                      if (i[t].has(e)) return t;
                  },
                  l = 0;
                l < a;
                l++
              )
                i[l] = this.spawn(n[l]);
              for (
                var u = r.sort(function (t, n) {
                    return e(t) - e(n);
                  }),
                  c = 0;
                c < u.length;
                c++
              ) {
                var d = u[c],
                  h = d.source()[0],
                  p = d.target()[0],
                  f = s(h),
                  g = s(p),
                  v = i[f],
                  y = i[g];
                f !== g && (o.merge(d), v.merge(y), i.splice(g, 1));
              }
              return o;
            },
          },
          Le = xe({
            root: null,
            goal: null,
            weight: function (e) {
              return 1;
            },
            heuristic: function (e) {
              return 0;
            },
            directed: !1,
          }),
          ze = {
            aStar: function (e) {
              var t = this.cy(),
                n = Le(e),
                r = n.root,
                a = n.goal,
                o = n.heuristic,
                s = n.directed,
                l = n.weight;
              (r = t.collection(r)[0]), (a = t.collection(a)[0]);
              var u,
                c,
                d = r.id(),
                h = a.id(),
                p = {},
                f = {},
                g = {},
                v = new i(function (e, t) {
                  return f[e.id()] - f[t.id()];
                }),
                y = new Pe(),
                m = {},
                b = {},
                x = function (e, t) {
                  v.push(e), y.add(t);
                };
              x(r, d), (p[d] = 0), (f[d] = o(r));
              for (var w, E = 0; v.size() > 0; ) {
                if (((c = (u = v.pop()).id()), y.delete(c), E++, c === h)) {
                  for (
                    var k = [], C = a, S = h, D = b[S];
                    k.unshift(C), null != D && k.unshift(D), null != (C = m[S]);

                  )
                    D = b[(S = C.id())];
                  return {
                    found: !0,
                    distance: p[c],
                    path: this.spawn(k),
                    steps: E,
                  };
                }
                g[c] = !0;
                for (var P = u._private.edges, T = 0; T < P.length; T++) {
                  var M = P[T];
                  if (
                    this.hasElementWithId(M.id()) &&
                    (!s || M.data("source") === c)
                  ) {
                    var B = M.source(),
                      _ = M.target(),
                      N = B.id() !== c ? B : _,
                      I = N.id();
                    if (this.hasElementWithId(I) && !g[I]) {
                      var L = p[c] + l(M);
                      (w = I),
                        y.has(w)
                          ? L < p[I] &&
                            ((p[I] = L), (f[I] = L + o(N)), (m[I] = u))
                          : ((p[I] = L),
                            (f[I] = L + o(N)),
                            x(N, I),
                            (m[I] = u),
                            (b[I] = M));
                    }
                  }
                }
              }
              return { found: !1, distance: void 0, path: void 0, steps: E };
            },
          },
          Ae = xe({
            weight: function (e) {
              return 1;
            },
            directed: !1,
          }),
          Oe = {
            floydWarshall: function (e) {
              for (
                var t = this.cy(),
                  n = Ae(e),
                  r = n.weight,
                  a = n.directed,
                  i = r,
                  o = this.byGroup(),
                  s = o.nodes,
                  l = o.edges,
                  u = s.length,
                  c = u * u,
                  d = function (e) {
                    return s.indexOf(e);
                  },
                  h = function (e) {
                    return s[e];
                  },
                  p = new Array(c),
                  f = 0;
                f < c;
                f++
              ) {
                var g = f % u,
                  v = (f - g) / u;
                p[f] = v === g ? 0 : 1 / 0;
              }
              for (
                var y = new Array(c), m = new Array(c), x = 0;
                x < l.length;
                x++
              ) {
                var w = l[x],
                  E = w.source()[0],
                  k = w.target()[0];
                if (E !== k) {
                  var C = d(E),
                    S = d(k),
                    D = C * u + S,
                    P = i(w);
                  if ((p[D] > P && ((p[D] = P), (y[D] = S), (m[D] = w)), !a)) {
                    var T = S * u + C;
                    !a && p[T] > P && ((p[T] = P), (y[T] = C), (m[T] = w));
                  }
                }
              }
              for (var M = 0; M < u; M++)
                for (var B = 0; B < u; B++)
                  for (var _ = B * u + M, N = 0; N < u; N++) {
                    var I = B * u + N,
                      L = M * u + N;
                    p[_] + p[L] < p[I] && ((p[I] = p[_] + p[L]), (y[I] = y[_]));
                  }
              var z = function (e) {
                return d(
                  (function (e) {
                    return (b(e) ? t.filter(e) : e)[0];
                  })(e)
                );
              };
              return {
                distance: function (e, t) {
                  var n = z(e),
                    r = z(t);
                  return p[n * u + r];
                },
                path: function (e, n) {
                  var r = z(e),
                    a = z(n),
                    i = h(r);
                  if (r === a) return i.collection();
                  if (null == y[r * u + a]) return t.collection();
                  var o,
                    s = t.collection(),
                    l = r;
                  for (s.merge(i); r !== a; )
                    (l = r),
                      (r = y[r * u + a]),
                      (o = m[l * u + r]),
                      s.merge(o),
                      s.merge(h(r));
                  return s;
                },
              };
            },
          },
          Re = xe({
            weight: function (e) {
              return 1;
            },
            directed: !1,
            root: null,
          }),
          Ve = {
            bellmanFord: function (e) {
              var t = this,
                n = Re(e),
                r = n.weight,
                a = n.directed,
                i = n.root,
                o = r,
                s = this,
                l = this.cy(),
                u = this.byGroup(),
                c = u.edges,
                d = u.nodes,
                h = d.length,
                p = new Se(),
                f = !1;
              (i = l.collection(i)[0]),
                c.unmergeBy(function (e) {
                  return e.isLoop();
                });
              for (
                var g = c.length,
                  v = function (e) {
                    var t = p.get(e.id());
                    return t || ((t = {}), p.set(e.id(), t)), t;
                  },
                  y = function (e) {
                    return (b(e) ? l.$(e) : e)[0];
                  },
                  m = 0;
                m < h;
                m++
              ) {
                var x = d[m],
                  w = v(x);
                x.same(i) ? (w.dist = 0) : (w.dist = 1 / 0),
                  (w.pred = null),
                  (w.edge = null);
              }
              for (
                var E = !1,
                  k = function (e, t, n, r, a, i) {
                    var o = r.dist + i;
                    o < a.dist &&
                      !n.same(r.edge) &&
                      ((a.dist = o), (a.pred = e), (a.edge = n), (E = !0));
                  },
                  C = 1;
                C < h;
                C++
              ) {
                E = !1;
                for (var S = 0; S < g; S++) {
                  var D = c[S],
                    P = D.source(),
                    T = D.target(),
                    M = o(D),
                    B = v(P),
                    _ = v(T);
                  k(P, 0, D, B, _, M), a || k(T, 0, D, _, B, M);
                }
                if (!E) break;
              }
              if (E)
                for (var N = 0; N < g; N++) {
                  var I = c[N],
                    L = I.source(),
                    z = I.target(),
                    A = o(I),
                    O = v(L).dist,
                    R = v(z).dist;
                  if (O + A < R || (!a && R + A < O)) {
                    ge(
                      "Graph contains a negative weight cycle for Bellman-Ford"
                    ),
                      (f = !0);
                    break;
                  }
                }
              return {
                distanceTo: function (e) {
                  return v(y(e)).dist;
                },
                pathTo: function (e) {
                  for (
                    var n =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : i,
                      r = y(e),
                      a = [],
                      o = r;
                    ;

                  ) {
                    if (null == o) return t.spawn();
                    var l = v(o),
                      u = l.edge,
                      c = l.pred;
                    if ((a.unshift(o[0]), o.same(n) && a.length > 0)) break;
                    null != u && a.unshift(u), (o = c);
                  }
                  return s.spawn(a);
                },
                hasNegativeWeightCycle: f,
                negativeWeightCycles: [],
              };
            },
          },
          Fe = Math.sqrt(2),
          je = function (e, t, n) {
            0 === n.length &&
              pe("Karger-Stein must be run on a connected (sub)graph");
            for (
              var r = n[e],
                a = r[1],
                i = r[2],
                o = t[a],
                s = t[i],
                l = n,
                u = l.length - 1;
              u >= 0;
              u--
            ) {
              var c = l[u],
                d = c[1],
                h = c[2];
              ((t[d] === o && t[h] === s) || (t[d] === s && t[h] === o)) &&
                l.splice(u, 1);
            }
            for (var p = 0; p < l.length; p++) {
              var f = l[p];
              f[1] === s
                ? ((l[p] = f.slice()), (l[p][1] = o))
                : f[2] === s && ((l[p] = f.slice()), (l[p][2] = o));
            }
            for (var g = 0; g < t.length; g++) t[g] === s && (t[g] = o);
            return l;
          },
          qe = function (e, t, n, r) {
            for (; n > r; ) {
              var a = Math.floor(Math.random() * t.length);
              (t = je(a, e, t)), n--;
            }
            return t;
          },
          Xe = {
            kargerStein: function () {
              var e = this,
                t = this.byGroup(),
                n = t.nodes,
                r = t.edges;
              r.unmergeBy(function (e) {
                return e.isLoop();
              });
              var a = n.length,
                i = r.length,
                o = Math.ceil(Math.pow(Math.log(a) / Math.LN2, 2)),
                s = Math.floor(a / Fe);
              if (!(a < 2)) {
                for (var l = [], u = 0; u < i; u++) {
                  var c = r[u];
                  l.push([u, n.indexOf(c.source()), n.indexOf(c.target())]);
                }
                for (
                  var d = 1 / 0,
                    h = [],
                    p = new Array(a),
                    f = new Array(a),
                    g = new Array(a),
                    v = function (e, t) {
                      for (var n = 0; n < a; n++) t[n] = e[n];
                    },
                    y = 0;
                  y <= o;
                  y++
                ) {
                  for (var m = 0; m < a; m++) f[m] = m;
                  var b = qe(f, l.slice(), a, s),
                    x = b.slice();
                  v(f, g);
                  var w = qe(f, b, s, 2),
                    E = qe(g, x, s, 2);
                  w.length <= E.length && w.length < d
                    ? ((d = w.length), (h = w), v(f, p))
                    : E.length <= w.length &&
                      E.length < d &&
                      ((d = E.length), (h = E), v(g, p));
                }
                for (
                  var k = this.spawn(
                      h.map(function (e) {
                        return r[e[0]];
                      })
                    ),
                    C = this.spawn(),
                    S = this.spawn(),
                    D = p[0],
                    P = 0;
                  P < p.length;
                  P++
                ) {
                  var T = p[P],
                    M = n[P];
                  T === D ? C.merge(M) : S.merge(M);
                }
                var B = function (t) {
                    var n = e.spawn();
                    return (
                      t.forEach(function (t) {
                        n.merge(t),
                          t.connectedEdges().forEach(function (t) {
                            e.contains(t) && !k.contains(t) && n.merge(t);
                          });
                      }),
                      n
                    );
                  },
                  _ = [B(C), B(S)];
                return { cut: k, components: _, partition1: C, partition2: S };
              }
              pe("At least 2 nodes are required for Karger-Stein algorithm");
            },
          },
          Ye = function (e, t, n) {
            return { x: e.x * t + n.x, y: e.y * t + n.y };
          },
          We = function (e, t, n) {
            return { x: (e.x - n.x) / t, y: (e.y - n.y) / t };
          },
          He = function (e) {
            return { x: e[0], y: e[1] };
          },
          $e = function (e, t) {
            return Math.atan2(t, e) - Math.PI / 2;
          },
          Ke =
            Math.log2 ||
            function (e) {
              return Math.log(e) / Math.log(2);
            },
          Ge = function (e) {
            return e > 0 ? 1 : e < 0 ? -1 : 0;
          },
          Ue = function (e, t) {
            return Math.sqrt(Ze(e, t));
          },
          Ze = function (e, t) {
            var n = t.x - e.x,
              r = t.y - e.y;
            return n * n + r * r;
          },
          Qe = function (e) {
            for (var t = e.length, n = 0, r = 0; r < t; r++) n += e[r];
            for (var a = 0; a < t; a++) e[a] = e[a] / n;
            return e;
          },
          Je = function (e, t, n, r) {
            return (1 - r) * (1 - r) * e + 2 * (1 - r) * r * t + r * r * n;
          },
          et = function (e, t, n, r) {
            return { x: Je(e.x, t.x, n.x, r), y: Je(e.y, t.y, n.y, r) };
          },
          tt = function (e, t, n) {
            return Math.max(e, Math.min(n, t));
          },
          nt = function (e) {
            if (null == e)
              return {
                x1: 1 / 0,
                y1: 1 / 0,
                x2: -1 / 0,
                y2: -1 / 0,
                w: 0,
                h: 0,
              };
            if (null != e.x1 && null != e.y1) {
              if (null != e.x2 && null != e.y2 && e.x2 >= e.x1 && e.y2 >= e.y1)
                return {
                  x1: e.x1,
                  y1: e.y1,
                  x2: e.x2,
                  y2: e.y2,
                  w: e.x2 - e.x1,
                  h: e.y2 - e.y1,
                };
              if (null != e.w && null != e.h && e.w >= 0 && e.h >= 0)
                return {
                  x1: e.x1,
                  y1: e.y1,
                  x2: e.x1 + e.w,
                  y2: e.y1 + e.h,
                  w: e.w,
                  h: e.h,
                };
            }
          },
          rt = function (e, t, n) {
            (e.x1 = Math.min(e.x1, t)),
              (e.x2 = Math.max(e.x2, t)),
              (e.w = e.x2 - e.x1),
              (e.y1 = Math.min(e.y1, n)),
              (e.y2 = Math.max(e.y2, n)),
              (e.h = e.y2 - e.y1);
          },
          at = function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0;
            return (
              (e.x1 -= t),
              (e.x2 += t),
              (e.y1 -= t),
              (e.y2 += t),
              (e.w = e.x2 - e.x1),
              (e.h = e.y2 - e.y1),
              e
            );
          },
          it = function (e) {
            var t,
              n,
              r,
              a,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [0];
            if (1 === i.length) t = n = r = a = i[0];
            else if (2 === i.length) (t = r = i[0]), (a = n = i[1]);
            else if (4 === i.length) {
              var o = d(i, 4);
              (t = o[0]), (n = o[1]), (r = o[2]), (a = o[3]);
            }
            return (
              (e.x1 -= a),
              (e.x2 += n),
              (e.y1 -= t),
              (e.y2 += r),
              (e.w = e.x2 - e.x1),
              (e.h = e.y2 - e.y1),
              e
            );
          },
          ot = function (e, t) {
            (e.x1 = t.x1),
              (e.y1 = t.y1),
              (e.x2 = t.x2),
              (e.y2 = t.y2),
              (e.w = e.x2 - e.x1),
              (e.h = e.y2 - e.y1);
          },
          st = function (e, t) {
            return !(
              e.x1 > t.x2 ||
              t.x1 > e.x2 ||
              e.x2 < t.x1 ||
              t.x2 < e.x1 ||
              e.y2 < t.y1 ||
              t.y2 < e.y1 ||
              e.y1 > t.y2 ||
              t.y1 > e.y2
            );
          },
          lt = function (e, t, n) {
            return e.x1 <= t && t <= e.x2 && e.y1 <= n && n <= e.y2;
          },
          ut = function (e, t) {
            return lt(e, t.x1, t.y1) && lt(e, t.x2, t.y2);
          },
          ct = function (e, t, n, r, a, i, o) {
            var s,
              l = Tt(a, i),
              u = a / 2,
              c = i / 2,
              d = r - c - o;
            if (
              (s = Et(e, t, n, r, n - u + l - o, d, n + u - l + o, d, !1))
                .length > 0
            )
              return s;
            var h = n + u + o;
            if (
              (s = Et(e, t, n, r, h, r - c + l - o, h, r + c - l + o, !1))
                .length > 0
            )
              return s;
            var p = r + c + o;
            if (
              (s = Et(e, t, n, r, n - u + l - o, p, n + u - l + o, p, !1))
                .length > 0
            )
              return s;
            var f,
              g = n - u - o;
            if (
              (s = Et(e, t, n, r, g, r - c + l - o, g, r + c - l + o, !1))
                .length > 0
            )
              return s;
            var v = n - u + l,
              y = r - c + l;
            if (
              (f = xt(e, t, n, r, v, y, l + o)).length > 0 &&
              f[0] <= v &&
              f[1] <= y
            )
              return [f[0], f[1]];
            var m = n + u - l,
              b = r - c + l;
            if (
              (f = xt(e, t, n, r, m, b, l + o)).length > 0 &&
              f[0] >= m &&
              f[1] <= b
            )
              return [f[0], f[1]];
            var x = n + u - l,
              w = r + c - l;
            if (
              (f = xt(e, t, n, r, x, w, l + o)).length > 0 &&
              f[0] >= x &&
              f[1] >= w
            )
              return [f[0], f[1]];
            var E = n - u + l,
              k = r + c - l;
            return (f = xt(e, t, n, r, E, k, l + o)).length > 0 &&
              f[0] <= E &&
              f[1] >= k
              ? [f[0], f[1]]
              : [];
          },
          dt = function (e, t, n, r, a, i, o) {
            var s = o,
              l = Math.min(n, a),
              u = Math.max(n, a),
              c = Math.min(r, i),
              d = Math.max(r, i);
            return l - s <= e && e <= u + s && c - s <= t && t <= d + s;
          },
          ht = function (e, t, n, r, a, i, o, s, l) {
            var u = Math.min(n, o, a) - l,
              c = Math.max(n, o, a) + l,
              d = Math.min(r, s, i) - l,
              h = Math.max(r, s, i) + l;
            return !(e < u || e > c || t < d || t > h);
          },
          pt = function (e, t, n, r, a, i, o, s) {
            var l,
              u,
              c,
              d,
              h,
              p,
              f,
              g,
              v,
              y,
              m,
              b,
              x,
              w = [];
            (u =
              9 * n * a -
              3 * n * n -
              3 * n * o -
              6 * a * a +
              3 * a * o +
              9 * r * i -
              3 * r * r -
              3 * r * s -
              6 * i * i +
              3 * i * s),
              (c =
                3 * n * n -
                6 * n * a +
                n * o -
                n * e +
                2 * a * a +
                2 * a * e -
                o * e +
                3 * r * r -
                6 * r * i +
                r * s -
                r * t +
                2 * i * i +
                2 * i * t -
                s * t),
              (d =
                1 * n * a -
                n * n +
                n * e -
                a * e +
                r * i -
                r * r +
                r * t -
                i * t),
              0 ===
                (l =
                  1 * n * n -
                  4 * n * a +
                  2 * n * o +
                  4 * a * a -
                  4 * a * o +
                  o * o +
                  r * r -
                  4 * r * i +
                  2 * r * s +
                  4 * i * i -
                  4 * i * s +
                  s * s) && (l = 1e-5),
              (g = -27 * (d /= l) + (u /= l) * (9 * (c /= l) - u * u * 2)),
              (p = (f = (3 * c - u * u) / 9) * f * f + (g /= 54) * g),
              ((h = w)[1] = 0),
              (b = u / 3),
              p > 0
                ? ((y =
                    (y = g + Math.sqrt(p)) < 0
                      ? -Math.pow(-y, 1 / 3)
                      : Math.pow(y, 1 / 3)),
                  (m =
                    (m = g - Math.sqrt(p)) < 0
                      ? -Math.pow(-m, 1 / 3)
                      : Math.pow(m, 1 / 3)),
                  (h[0] = -b + y + m),
                  (b += (y + m) / 2),
                  (h[4] = h[2] = -b),
                  (b = (Math.sqrt(3) * (-m + y)) / 2),
                  (h[3] = b),
                  (h[5] = -b))
                : ((h[5] = h[3] = 0),
                  0 === p
                    ? ((x = g < 0 ? -Math.pow(-g, 1 / 3) : Math.pow(g, 1 / 3)),
                      (h[0] = 2 * x - b),
                      (h[4] = h[2] = -(x + b)))
                    : ((v = (f = -f) * f * f),
                      (v = Math.acos(g / Math.sqrt(v))),
                      (x = 2 * Math.sqrt(f)),
                      (h[0] = -b + x * Math.cos(v / 3)),
                      (h[2] = -b + x * Math.cos((v + 2 * Math.PI) / 3)),
                      (h[4] = -b + x * Math.cos((v + 4 * Math.PI) / 3))));
            for (var E = [], k = 0; k < 6; k += 2)
              Math.abs(w[k + 1]) < 1e-7 &&
                w[k] >= 0 &&
                w[k] <= 1 &&
                E.push(w[k]);
            E.push(1), E.push(0);
            for (var C, S, D, P = -1, T = 0; T < E.length; T++)
              (C =
                Math.pow(1 - E[T], 2) * n +
                2 * (1 - E[T]) * E[T] * a +
                E[T] * E[T] * o),
                (S =
                  Math.pow(1 - E[T], 2) * r +
                  2 * (1 - E[T]) * E[T] * i +
                  E[T] * E[T] * s),
                (D = Math.pow(C - e, 2) + Math.pow(S - t, 2)),
                P >= 0 ? D < P && (P = D) : (P = D);
            return P;
          },
          ft = function (e, t, n, r, a, i) {
            var o = [e - n, t - r],
              s = [a - n, i - r],
              l = s[0] * s[0] + s[1] * s[1],
              u = o[0] * o[0] + o[1] * o[1],
              c = o[0] * s[0] + o[1] * s[1],
              d = (c * c) / l;
            return c < 0
              ? u
              : d > l
              ? (e - a) * (e - a) + (t - i) * (t - i)
              : u - d;
          },
          gt = function (e, t, n) {
            for (var r, a, i, o, s = 0, l = 0; l < n.length / 2; l++)
              if (
                ((r = n[2 * l]),
                (a = n[2 * l + 1]),
                l + 1 < n.length / 2
                  ? ((i = n[2 * (l + 1)]), (o = n[2 * (l + 1) + 1]))
                  : ((i = n[2 * (l + 1 - n.length / 2)]),
                    (o = n[2 * (l + 1 - n.length / 2) + 1])),
                r == e && i == e)
              );
              else {
                if (!((r >= e && e >= i) || (r <= e && e <= i))) continue;
                ((e - r) / (i - r)) * (o - a) + a > t && s++;
              }
            return s % 2 != 0;
          },
          vt = function (e, t, n, r, a, i, o, s, l) {
            var u,
              c = new Array(n.length);
            null != s[0]
              ? ((u = Math.atan(s[1] / s[0])),
                s[0] < 0 ? (u += Math.PI / 2) : (u = -u - Math.PI / 2))
              : (u = s);
            for (
              var d, h = Math.cos(-u), p = Math.sin(-u), f = 0;
              f < c.length / 2;
              f++
            )
              (c[2 * f] = (i / 2) * (n[2 * f] * h - n[2 * f + 1] * p)),
                (c[2 * f + 1] = (o / 2) * (n[2 * f + 1] * h + n[2 * f] * p)),
                (c[2 * f] += r),
                (c[2 * f + 1] += a);
            if (l > 0) {
              var g = mt(c, -l);
              d = yt(g);
            } else d = c;
            return gt(e, t, d);
          },
          yt = function (e) {
            for (
              var t, n, r, a, i, o, s, l, u = new Array(e.length / 2), c = 0;
              c < e.length / 4;
              c++
            ) {
              (t = e[4 * c]),
                (n = e[4 * c + 1]),
                (r = e[4 * c + 2]),
                (a = e[4 * c + 3]),
                c < e.length / 4 - 1
                  ? ((i = e[4 * (c + 1)]),
                    (o = e[4 * (c + 1) + 1]),
                    (s = e[4 * (c + 1) + 2]),
                    (l = e[4 * (c + 1) + 3]))
                  : ((i = e[0]), (o = e[1]), (s = e[2]), (l = e[3]));
              var d = Et(t, n, r, a, i, o, s, l, !0);
              (u[2 * c] = d[0]), (u[2 * c + 1] = d[1]);
            }
            return u;
          },
          mt = function (e, t) {
            for (
              var n, r, a, i, o = new Array(2 * e.length), s = 0;
              s < e.length / 2;
              s++
            ) {
              (n = e[2 * s]),
                (r = e[2 * s + 1]),
                s < e.length / 2 - 1
                  ? ((a = e[2 * (s + 1)]), (i = e[2 * (s + 1) + 1]))
                  : ((a = e[0]), (i = e[1]));
              var l = i - r,
                u = -(a - n),
                c = Math.sqrt(l * l + u * u),
                d = l / c,
                h = u / c;
              (o[4 * s] = n + d * t),
                (o[4 * s + 1] = r + h * t),
                (o[4 * s + 2] = a + d * t),
                (o[4 * s + 3] = i + h * t);
            }
            return o;
          },
          bt = function (e, t, n, r, a, i, o) {
            return (
              (e -= a),
              (t -= i),
              (e /= n / 2 + o) * e + (t /= r / 2 + o) * t <= 1
            );
          },
          xt = function (e, t, n, r, a, i, o) {
            var s = [n - e, r - t],
              l = [e - a, t - i],
              u = s[0] * s[0] + s[1] * s[1],
              c = 2 * (l[0] * s[0] + l[1] * s[1]),
              d = c * c - 4 * u * (l[0] * l[0] + l[1] * l[1] - o * o);
            if (d < 0) return [];
            var h = (-c + Math.sqrt(d)) / (2 * u),
              p = (-c - Math.sqrt(d)) / (2 * u),
              f = Math.min(h, p),
              g = Math.max(h, p),
              v = [];
            if (
              (f >= 0 && f <= 1 && v.push(f),
              g >= 0 && g <= 1 && v.push(g),
              0 === v.length)
            )
              return [];
            var y = v[0] * s[0] + e,
              m = v[0] * s[1] + t;
            return v.length > 1
              ? v[0] == v[1]
                ? [y, m]
                : [y, m, v[1] * s[0] + e, v[1] * s[1] + t]
              : [y, m];
          },
          wt = function (e, t, n) {
            return (t <= e && e <= n) || (n <= e && e <= t)
              ? e
              : (e <= t && t <= n) || (n <= t && t <= e)
              ? t
              : n;
          },
          Et = function (e, t, n, r, a, i, o, s, l) {
            var u = e - a,
              c = n - e,
              d = o - a,
              h = t - i,
              p = r - t,
              f = s - i,
              g = d * h - f * u,
              v = c * h - p * u,
              y = f * c - d * p;
            if (0 !== y) {
              var m = g / y,
                b = v / y,
                x = -0.001;
              return (x <= m && m <= 1.001 && x <= b && b <= 1.001) || l
                ? [e + m * c, t + m * p]
                : [];
            }
            return 0 === g || 0 === v
              ? wt(e, n, o) === o
                ? [o, s]
                : wt(e, n, a) === a
                ? [a, i]
                : wt(a, o, n) === n
                ? [n, r]
                : []
              : [];
          },
          kt = function (e, t, n, r, a, i, o, s) {
            var l,
              u,
              c,
              d,
              h,
              p,
              f = [],
              g = new Array(n.length),
              v = !0;
            if ((null == i && (v = !1), v)) {
              for (var y = 0; y < g.length / 2; y++)
                (g[2 * y] = n[2 * y] * i + r),
                  (g[2 * y + 1] = n[2 * y + 1] * o + a);
              if (s > 0) {
                var m = mt(g, -s);
                u = yt(m);
              } else u = g;
            } else u = n;
            for (var b = 0; b < u.length / 2; b++)
              (c = u[2 * b]),
                (d = u[2 * b + 1]),
                b < u.length / 2 - 1
                  ? ((h = u[2 * (b + 1)]), (p = u[2 * (b + 1) + 1]))
                  : ((h = u[0]), (p = u[1])),
                0 !== (l = Et(e, t, r, a, c, d, h, p)).length &&
                  f.push(l[0], l[1]);
            return f;
          },
          Ct = function (e, t, n) {
            var r = [e[0] - t[0], e[1] - t[1]],
              a = Math.sqrt(r[0] * r[0] + r[1] * r[1]),
              i = (a - n) / a;
            return i < 0 && (i = 1e-5), [t[0] + i * r[0], t[1] + i * r[1]];
          },
          St = function (e, t) {
            var n = Pt(e, t);
            return Dt(n);
          },
          Dt = function (e) {
            for (
              var t,
                n,
                r = e.length / 2,
                a = 1 / 0,
                i = 1 / 0,
                o = -1 / 0,
                s = -1 / 0,
                l = 0;
              l < r;
              l++
            )
              (t = e[2 * l]),
                (n = e[2 * l + 1]),
                (a = Math.min(a, t)),
                (o = Math.max(o, t)),
                (i = Math.min(i, n)),
                (s = Math.max(s, n));
            for (var u = 2 / (o - a), c = 2 / (s - i), d = 0; d < r; d++)
              (t = e[2 * d] = e[2 * d] * u),
                (n = e[2 * d + 1] = e[2 * d + 1] * c),
                (a = Math.min(a, t)),
                (o = Math.max(o, t)),
                (i = Math.min(i, n)),
                (s = Math.max(s, n));
            if (i < -1)
              for (var h = 0; h < r; h++)
                n = e[2 * h + 1] = e[2 * h + 1] + (-1 - i);
            return e;
          },
          Pt = function (e, t) {
            var n = (1 / e) * 2 * Math.PI,
              r = e % 2 == 0 ? Math.PI / 2 + n / 2 : Math.PI / 2;
            r += t;
            for (var a, i = new Array(2 * e), o = 0; o < e; o++)
              (a = o * n + r),
                (i[2 * o] = Math.cos(a)),
                (i[2 * o + 1] = Math.sin(-a));
            return i;
          },
          Tt = function (e, t) {
            return Math.min(e / 4, t / 4, 8);
          },
          Mt = function (e, t) {
            return Math.min(e / 10, t / 10, 8);
          },
          Bt = function (e, t) {
            return {
              heightOffset: Math.min(15, 0.05 * t),
              widthOffset: Math.min(100, 0.25 * e),
              ctrlPtOffsetPct: 0.05,
            };
          },
          _t = xe({
            dampingFactor: 0.8,
            precision: 1e-6,
            iterations: 200,
            weight: function (e) {
              return 1;
            },
          }),
          Nt = {
            pageRank: function (e) {
              for (
                var t = _t(e),
                  n = t.dampingFactor,
                  r = t.precision,
                  a = t.iterations,
                  i = t.weight,
                  o = this._private.cy,
                  s = this.byGroup(),
                  l = s.nodes,
                  u = s.edges,
                  c = l.length,
                  d = c * c,
                  h = u.length,
                  p = new Array(d),
                  f = new Array(c),
                  g = (1 - n) / c,
                  v = 0;
                v < c;
                v++
              ) {
                for (var y = 0; y < c; y++) p[v * c + y] = 0;
                f[v] = 0;
              }
              for (var m = 0; m < h; m++) {
                var b = u[m],
                  x = b.data("source"),
                  w = b.data("target");
                if (x !== w) {
                  var E = l.indexOfId(x),
                    k = l.indexOfId(w),
                    C = i(b);
                  (p[k * c + E] += C), (f[E] += C);
                }
              }
              for (var S = 1 / c + g, D = 0; D < c; D++)
                if (0 === f[D]) for (var P = 0; P < c; P++) p[P * c + D] = S;
                else
                  for (var T = 0; T < c; T++) {
                    var M = T * c + D;
                    p[M] = p[M] / f[D] + g;
                  }
              for (var B, _ = new Array(c), N = new Array(c), I = 0; I < c; I++)
                _[I] = 1;
              for (var L = 0; L < a; L++) {
                for (var z = 0; z < c; z++) N[z] = 0;
                for (var A = 0; A < c; A++)
                  for (var O = 0; O < c; O++) {
                    var R = A * c + O;
                    N[A] += p[R] * _[O];
                  }
                Qe(N), (B = _), (_ = N), (N = B);
                for (var V = 0, F = 0; F < c; F++) {
                  var j = B[F] - _[F];
                  V += j * j;
                }
                if (V < r) break;
              }
              return {
                rank: function (e) {
                  return (e = o.collection(e)[0]), _[l.indexOf(e)];
                },
              };
            },
          },
          It = xe({
            root: null,
            weight: function (e) {
              return 1;
            },
            directed: !1,
            alpha: 0,
          }),
          Lt = {
            degreeCentralityNormalized: function (e) {
              e = It(e);
              var t = this.cy(),
                n = this.nodes(),
                r = n.length;
              if (e.directed) {
                for (var a = {}, i = {}, o = 0, s = 0, l = 0; l < r; l++) {
                  var u = n[l],
                    c = u.id();
                  e.root = u;
                  var d = this.degreeCentrality(e);
                  o < d.indegree && (o = d.indegree),
                    s < d.outdegree && (s = d.outdegree),
                    (a[c] = d.indegree),
                    (i[c] = d.outdegree);
                }
                return {
                  indegree: function (e) {
                    return 0 == o
                      ? 0
                      : (b(e) && (e = t.filter(e)), a[e.id()] / o);
                  },
                  outdegree: function (e) {
                    return 0 === s
                      ? 0
                      : (b(e) && (e = t.filter(e)), i[e.id()] / s);
                  },
                };
              }
              for (var h = {}, p = 0, f = 0; f < r; f++) {
                var g = n[f];
                e.root = g;
                var v = this.degreeCentrality(e);
                p < v.degree && (p = v.degree), (h[g.id()] = v.degree);
              }
              return {
                degree: function (e) {
                  return 0 === p
                    ? 0
                    : (b(e) && (e = t.filter(e)), h[e.id()] / p);
                },
              };
            },
            degreeCentrality: function (e) {
              e = It(e);
              var t = this.cy(),
                n = this,
                r = e,
                a = r.root,
                i = r.weight,
                o = r.directed,
                s = r.alpha;
              if (((a = t.collection(a)[0]), o)) {
                for (
                  var l = a.connectedEdges(),
                    u = l.filter(function (e) {
                      return e.target().same(a) && n.has(e);
                    }),
                    c = l.filter(function (e) {
                      return e.source().same(a) && n.has(e);
                    }),
                    d = u.length,
                    h = c.length,
                    p = 0,
                    f = 0,
                    g = 0;
                  g < u.length;
                  g++
                )
                  p += i(u[g]);
                for (var v = 0; v < c.length; v++) f += i(c[v]);
                return {
                  indegree: Math.pow(d, 1 - s) * Math.pow(p, s),
                  outdegree: Math.pow(h, 1 - s) * Math.pow(f, s),
                };
              }
              for (
                var y = a.connectedEdges().intersection(n),
                  m = y.length,
                  b = 0,
                  x = 0;
                x < y.length;
                x++
              )
                b += i(y[x]);
              return { degree: Math.pow(m, 1 - s) * Math.pow(b, s) };
            },
          };
        (Lt.dc = Lt.degreeCentrality),
          (Lt.dcn = Lt.degreeCentralityNormalised =
            Lt.degreeCentralityNormalized);
        var zt = xe({
            harmonic: !0,
            weight: function () {
              return 1;
            },
            directed: !1,
            root: null,
          }),
          At = {
            closenessCentralityNormalized: function (e) {
              for (
                var t = zt(e),
                  n = t.harmonic,
                  r = t.weight,
                  a = t.directed,
                  i = this.cy(),
                  o = {},
                  s = 0,
                  l = this.nodes(),
                  u = this.floydWarshall({ weight: r, directed: a }),
                  c = 0;
                c < l.length;
                c++
              ) {
                for (var d = 0, h = l[c], p = 0; p < l.length; p++)
                  if (c !== p) {
                    var f = u.distance(h, l[p]);
                    d += n ? 1 / f : f;
                  }
                n || (d = 1 / d), s < d && (s = d), (o[h.id()] = d);
              }
              return {
                closeness: function (e) {
                  return 0 == s
                    ? 0
                    : ((e = b(e) ? i.filter(e)[0].id() : e.id()), o[e] / s);
                },
              };
            },
            closenessCentrality: function (e) {
              var t = zt(e),
                n = t.root,
                r = t.weight,
                a = t.directed,
                i = t.harmonic;
              n = this.filter(n)[0];
              for (
                var o = this.dijkstra({ root: n, weight: r, directed: a }),
                  s = 0,
                  l = this.nodes(),
                  u = 0;
                u < l.length;
                u++
              ) {
                var c = l[u];
                if (!c.same(n)) {
                  var d = o.distanceTo(c);
                  s += i ? 1 / d : d;
                }
              }
              return i ? s : 1 / s;
            },
          };
        (At.cc = At.closenessCentrality),
          (At.ccn = At.closenessCentralityNormalised =
            At.closenessCentralityNormalized);
        var Ot = xe({ weight: null, directed: !1 }),
          Rt = {
            betweennessCentrality: function (e) {
              for (
                var t = Ot(e),
                  n = t.directed,
                  r = t.weight,
                  a = null != r,
                  o = this.cy(),
                  s = this.nodes(),
                  l = {},
                  u = {},
                  c = 0,
                  d = function (e, t) {
                    (u[e] = t), t > c && (c = t);
                  },
                  h = function (e) {
                    return u[e];
                  },
                  p = 0;
                p < s.length;
                p++
              ) {
                var f = s[p],
                  g = f.id();
                (l[g] = n
                  ? f.outgoers().nodes()
                  : f.openNeighborhood().nodes()),
                  d(g, 0);
              }
              for (
                var v = function (e) {
                    for (
                      var t = s[e].id(),
                        n = [],
                        u = {},
                        c = {},
                        p = {},
                        f = new i(function (e, t) {
                          return p[e] - p[t];
                        }),
                        g = 0;
                      g < s.length;
                      g++
                    ) {
                      var v = s[g].id();
                      (u[v] = []), (c[v] = 0), (p[v] = 1 / 0);
                    }
                    for (c[t] = 1, p[t] = 0, f.push(t); !f.empty(); ) {
                      var y = f.pop();
                      if ((n.push(y), a))
                        for (var m = 0; m < l[y].length; m++) {
                          var b,
                            x = l[y][m],
                            w = o.getElementById(y);
                          b =
                            w.edgesTo(x).length > 0
                              ? w.edgesTo(x)[0]
                              : x.edgesTo(w)[0];
                          var E = r(b);
                          (x = x.id()),
                            p[x] > p[y] + E &&
                              ((p[x] = p[y] + E),
                              f.nodes.indexOf(x) < 0
                                ? f.push(x)
                                : f.updateItem(x),
                              (c[x] = 0),
                              (u[x] = [])),
                            p[x] == p[y] + E &&
                              ((c[x] = c[x] + c[y]), u[x].push(y));
                        }
                      else
                        for (var k = 0; k < l[y].length; k++) {
                          var C = l[y][k].id();
                          p[C] == 1 / 0 && (f.push(C), (p[C] = p[y] + 1)),
                            p[C] == p[y] + 1 &&
                              ((c[C] = c[C] + c[y]), u[C].push(y));
                        }
                    }
                    for (var S = {}, D = 0; D < s.length; D++) S[s[D].id()] = 0;
                    for (; n.length > 0; ) {
                      for (var P = n.pop(), T = 0; T < u[P].length; T++) {
                        var M = u[P][T];
                        S[M] = S[M] + (c[M] / c[P]) * (1 + S[P]);
                      }
                      P != s[e].id() && d(P, h(P) + S[P]);
                    }
                  },
                  y = 0;
                y < s.length;
                y++
              )
                v(y);
              var m = {
                betweenness: function (e) {
                  var t = o.collection(e).id();
                  return h(t);
                },
                betweennessNormalized: function (e) {
                  if (0 == c) return 0;
                  var t = o.collection(e).id();
                  return h(t) / c;
                },
              };
              return (m.betweennessNormalised = m.betweennessNormalized), m;
            },
          };
        Rt.bc = Rt.betweennessCentrality;
        var Vt = xe({
            expandFactor: 2,
            inflateFactor: 2,
            multFactor: 1,
            maxIterations: 20,
            attributes: [
              function (e) {
                return 1;
              },
            ],
          }),
          Ft = function (e, t) {
            for (var n = 0, r = 0; r < t.length; r++) n += t[r](e);
            return n;
          },
          jt = function (e, t) {
            for (var n, r = 0; r < t; r++) {
              n = 0;
              for (var a = 0; a < t; a++) n += e[a * t + r];
              for (var i = 0; i < t; i++) e[i * t + r] = e[i * t + r] / n;
            }
          },
          qt = function (e, t, n) {
            for (var r = new Array(n * n), a = 0; a < n; a++) {
              for (var i = 0; i < n; i++) r[a * n + i] = 0;
              for (var o = 0; o < n; o++)
                for (var s = 0; s < n; s++)
                  r[a * n + s] += e[a * n + o] * t[o * n + s];
            }
            return r;
          },
          Xt = function (e, t, n) {
            for (var r = e.slice(0), a = 1; a < n; a++) e = qt(e, r, t);
            return e;
          },
          Yt = function (e, t, n) {
            for (var r = new Array(t * t), a = 0; a < t * t; a++)
              r[a] = Math.pow(e[a], n);
            return jt(r, t), r;
          },
          Wt = function (e, t, n, r) {
            for (var a = 0; a < n; a++)
              if (
                Math.round(e[a] * Math.pow(10, r)) / Math.pow(10, r) !=
                Math.round(t[a] * Math.pow(10, r)) / Math.pow(10, r)
              )
                return !1;
            return !0;
          },
          Ht = function (e, t) {
            for (var n = 0; n < e.length; n++)
              if (!t[n] || e[n].id() !== t[n].id()) return !1;
            return !0;
          },
          $t = function (e) {
            for (
              var t = this.nodes(),
                n = this.edges(),
                r = this.cy(),
                a = (function (e) {
                  return Vt(e);
                })(e),
                i = {},
                o = 0;
              o < t.length;
              o++
            )
              i[t[o].id()] = o;
            for (
              var s, l = t.length, u = l * l, c = new Array(u), d = 0;
              d < u;
              d++
            )
              c[d] = 0;
            for (var h = 0; h < n.length; h++) {
              var p = n[h],
                f = i[p.source().id()],
                g = i[p.target().id()],
                v = Ft(p, a.attributes);
              (c[f * l + g] += v), (c[g * l + f] += v);
            }
            !(function (e, t, n) {
              for (var r = 0; r < t; r++) e[r * t + r] = n;
            })(c, l, a.multFactor),
              jt(c, l);
            for (var y = !0, m = 0; y && m < a.maxIterations; )
              (y = !1),
                (s = Xt(c, l, a.expandFactor)),
                (c = Yt(s, l, a.inflateFactor)),
                Wt(c, s, u, 4) || (y = !0),
                m++;
            var b = (function (e, t, n, r) {
              for (var a = [], i = 0; i < t; i++) {
                for (var o = [], s = 0; s < t; s++)
                  Math.round(1e3 * e[i * t + s]) / 1e3 > 0 && o.push(n[s]);
                0 !== o.length && a.push(r.collection(o));
              }
              return a;
            })(c, l, t, r);
            return (function (e) {
              for (var t = 0; t < e.length; t++)
                for (var n = 0; n < e.length; n++)
                  t != n && Ht(e[t], e[n]) && e.splice(n, 1);
              return e;
            })(b);
          },
          Kt = { markovClustering: $t, mcl: $t },
          Gt = function (e) {
            return e;
          },
          Ut = function (e, t) {
            return Math.abs(t - e);
          },
          Zt = function (e, t, n) {
            return e + Ut(t, n);
          },
          Qt = function (e, t, n) {
            return e + Math.pow(n - t, 2);
          },
          Jt = function (e) {
            return Math.sqrt(e);
          },
          en = function (e, t, n) {
            return Math.max(e, Ut(t, n));
          },
          tn = function (e, t, n, r, a) {
            for (
              var i =
                  arguments.length > 5 && void 0 !== arguments[5]
                    ? arguments[5]
                    : Gt,
                o = r,
                s = 0;
              s < e;
              s++
            )
              o = a(o, t(s), n(s));
            return i(o);
          },
          nn = {
            euclidean: function (e, t, n) {
              return e >= 2 ? tn(e, t, n, 0, Qt, Jt) : tn(e, t, n, 0, Zt);
            },
            squaredEuclidean: function (e, t, n) {
              return tn(e, t, n, 0, Qt);
            },
            manhattan: function (e, t, n) {
              return tn(e, t, n, 0, Zt);
            },
            max: function (e, t, n) {
              return tn(e, t, n, -1 / 0, en);
            },
          };
        function rn(e, t, n, r, a, i) {
          var o;
          return (
            (o = x(e) ? e : nn[e] || nn.euclidean),
            0 === t && x(e) ? o(a, i) : o(t, n, r, a, i)
          );
        }
        (nn["squared-euclidean"] = nn.squaredEuclidean),
          (nn.squaredeuclidean = nn.squaredEuclidean);
        var an = xe({
            k: 2,
            m: 2,
            sensitivityThreshold: 1e-4,
            distance: "euclidean",
            maxIterations: 10,
            attributes: [],
            testMode: !1,
            testCentroids: null,
          }),
          on = function (e) {
            return an(e);
          },
          sn = function (e, t, n, r, a) {
            var i =
                "kMedoids" !== a
                  ? function (e) {
                      return n[e];
                    }
                  : function (e) {
                      return r[e](n);
                    },
              o = n,
              s = t;
            return rn(
              e,
              r.length,
              i,
              function (e) {
                return r[e](t);
              },
              o,
              s
            );
          },
          ln = function (e, t, n) {
            for (
              var r = n.length,
                a = new Array(r),
                i = new Array(r),
                o = new Array(t),
                s = null,
                l = 0;
              l < r;
              l++
            )
              (a[l] = e.min(n[l]).value), (i[l] = e.max(n[l]).value);
            for (var u = 0; u < t; u++) {
              s = [];
              for (var c = 0; c < r; c++)
                s[c] = Math.random() * (i[c] - a[c]) + a[c];
              o[u] = s;
            }
            return o;
          },
          un = function (e, t, n, r, a) {
            for (var i = 1 / 0, o = 0, s = 0; s < t.length; s++) {
              var l = sn(n, e, t[s], r, a);
              l < i && ((i = l), (o = s));
            }
            return o;
          },
          cn = function (e, t, n) {
            for (var r = [], a = null, i = 0; i < t.length; i++)
              n[(a = t[i]).id()] === e && r.push(a);
            return r;
          },
          dn = function (e, t, n) {
            for (var r = 0; r < e.length; r++)
              for (var a = 0; a < e[r].length; a++)
                if (Math.abs(e[r][a] - t[r][a]) > n) return !1;
            return !0;
          },
          hn = function (e, t, n) {
            for (var r = 0; r < n; r++) if (e === t[r]) return !0;
            return !1;
          },
          pn = function (e, t) {
            var n = new Array(t);
            if (e.length < 50)
              for (var r = 0; r < t; r++) {
                for (
                  var a = e[Math.floor(Math.random() * e.length)];
                  hn(a, n, r);

                )
                  a = e[Math.floor(Math.random() * e.length)];
                n[r] = a;
              }
            else
              for (var i = 0; i < t; i++)
                n[i] = e[Math.floor(Math.random() * e.length)];
            return n;
          },
          fn = function (e, t, n) {
            for (var r = 0, a = 0; a < t.length; a++)
              r += sn("manhattan", t[a], e, n, "kMedoids");
            return r;
          },
          gn = function (e, t, n, r, a) {
            for (var i, o, s = 0; s < t.length; s++)
              for (var l = 0; l < e.length; l++)
                r[s][l] = Math.pow(n[s][l], a.m);
            for (var u = 0; u < e.length; u++)
              for (var c = 0; c < a.attributes.length; c++) {
                (i = 0), (o = 0);
                for (var d = 0; d < t.length; d++)
                  (i += r[d][u] * a.attributes[c](t[d])), (o += r[d][u]);
                e[u][c] = i / o;
              }
          },
          vn = function (e, t, n, r, a) {
            for (var i = 0; i < e.length; i++) t[i] = e[i].slice();
            for (var o, s, l, u = 2 / (a.m - 1), c = 0; c < n.length; c++)
              for (var d = 0; d < r.length; d++) {
                o = 0;
                for (var h = 0; h < n.length; h++)
                  (s = sn(a.distance, r[d], n[c], a.attributes, "cmeans")),
                    (l = sn(a.distance, r[d], n[h], a.attributes, "cmeans")),
                    (o += Math.pow(s / l, u));
                e[d][c] = 1 / o;
              }
          },
          yn = function (e) {
            var t,
              n,
              r,
              a,
              i = this.cy(),
              o = this.nodes(),
              s = on(e);
            r = new Array(o.length);
            for (var l = 0; l < o.length; l++) r[l] = new Array(s.k);
            n = new Array(o.length);
            for (var u = 0; u < o.length; u++) n[u] = new Array(s.k);
            for (var c = 0; c < o.length; c++) {
              for (var d = 0, h = 0; h < s.k; h++)
                (n[c][h] = Math.random()), (d += n[c][h]);
              for (var p = 0; p < s.k; p++) n[c][p] = n[c][p] / d;
            }
            t = new Array(s.k);
            for (var f = 0; f < s.k; f++) t[f] = new Array(s.attributes.length);
            a = new Array(o.length);
            for (var g = 0; g < o.length; g++) a[g] = new Array(s.k);
            for (var v = !0, y = 0; v && y < s.maxIterations; )
              (v = !1),
                gn(t, o, n, a, s),
                vn(n, r, t, o, s),
                dn(n, r, s.sensitivityThreshold) || (v = !0),
                y++;
            return {
              clusters: (function (e, t, n, r) {
                for (var a, i, o = new Array(n.k), s = 0; s < o.length; s++)
                  o[s] = [];
                for (var l = 0; l < t.length; l++) {
                  (a = -1 / 0), (i = -1);
                  for (var u = 0; u < t[0].length; u++)
                    t[l][u] > a && ((a = t[l][u]), (i = u));
                  o[i].push(e[l]);
                }
                for (var c = 0; c < o.length; c++) o[c] = r.collection(o[c]);
                return o;
              })(o, n, s, i),
              degreeOfMembership: n,
            };
          },
          mn = {
            kMeans: function (e) {
              var t,
                n = this.cy(),
                r = this.nodes(),
                a = null,
                i = on(e),
                s = new Array(i.k),
                l = {};
              t = i.testMode
                ? "number" == typeof i.testCentroids
                  ? ln(r, i.k, i.attributes)
                  : "object" === o(i.testCentroids)
                  ? i.testCentroids
                  : ln(r, i.k, i.attributes)
                : ln(r, i.k, i.attributes);
              for (var u, c, d, h = !0, p = 0; h && p < i.maxIterations; ) {
                for (var f = 0; f < r.length; f++)
                  l[(a = r[f]).id()] = un(
                    a,
                    t,
                    i.distance,
                    i.attributes,
                    "kMeans"
                  );
                h = !1;
                for (var g = 0; g < i.k; g++) {
                  var v = cn(g, r, l);
                  if (0 !== v.length) {
                    for (
                      var y = i.attributes.length,
                        m = t[g],
                        b = new Array(y),
                        x = new Array(y),
                        w = 0;
                      w < y;
                      w++
                    ) {
                      x[w] = 0;
                      for (var E = 0; E < v.length; E++)
                        (a = v[E]), (x[w] += i.attributes[w](a));
                      (b[w] = x[w] / v.length),
                        (u = b[w]),
                        (c = m[w]),
                        (d = i.sensitivityThreshold),
                        Math.abs(c - u) <= d || (h = !0);
                    }
                    (t[g] = b), (s[g] = n.collection(v));
                  }
                }
                p++;
              }
              return s;
            },
            kMedoids: function (e) {
              var t,
                n,
                r = this.cy(),
                a = this.nodes(),
                i = null,
                s = on(e),
                l = new Array(s.k),
                u = {},
                c = new Array(s.k);
              s.testMode
                ? "number" == typeof s.testCentroids ||
                  (t =
                    "object" === o(s.testCentroids)
                      ? s.testCentroids
                      : pn(a, s.k))
                : (t = pn(a, s.k));
              for (var d = !0, h = 0; d && h < s.maxIterations; ) {
                for (var p = 0; p < a.length; p++)
                  u[(i = a[p]).id()] = un(
                    i,
                    t,
                    s.distance,
                    s.attributes,
                    "kMedoids"
                  );
                d = !1;
                for (var f = 0; f < t.length; f++) {
                  var g = cn(f, a, u);
                  if (0 !== g.length) {
                    c[f] = fn(t[f], g, s.attributes);
                    for (var v = 0; v < g.length; v++)
                      (n = fn(g[v], g, s.attributes)) < c[f] &&
                        ((c[f] = n), (t[f] = g[v]), (d = !0));
                    l[f] = r.collection(g);
                  }
                }
                h++;
              }
              return l;
            },
            fuzzyCMeans: yn,
            fcm: yn,
          },
          bn = xe({
            distance: "euclidean",
            linkage: "min",
            mode: "threshold",
            threshold: 1 / 0,
            addDendrogram: !1,
            dendrogramDepth: 0,
            attributes: [],
          }),
          xn = { single: "min", complete: "max" },
          wn = function (e, t, n, r, a) {
            for (
              var i,
                o = 0,
                s = 1 / 0,
                l = a.attributes,
                u = function (e, t) {
                  return rn(
                    a.distance,
                    l.length,
                    function (t) {
                      return l[t](e);
                    },
                    function (e) {
                      return l[e](t);
                    },
                    e,
                    t
                  );
                },
                c = 0;
              c < e.length;
              c++
            ) {
              var d = e[c].key,
                h = n[d][r[d]];
              h < s && ((o = d), (s = h));
            }
            if (
              ("threshold" === a.mode && s >= a.threshold) ||
              ("dendrogram" === a.mode && 1 === e.length)
            )
              return !1;
            var p,
              f = t[o],
              g = t[r[o]];
            (p =
              "dendrogram" === a.mode
                ? { left: f, right: g, key: f.key }
                : { value: f.value.concat(g.value), key: f.key }),
              (e[f.index] = p),
              e.splice(g.index, 1),
              (t[f.key] = p);
            for (var v = 0; v < e.length; v++) {
              var y = e[v];
              f.key === y.key
                ? (i = 1 / 0)
                : "min" === a.linkage
                ? ((i = n[f.key][y.key]),
                  n[f.key][y.key] > n[g.key][y.key] && (i = n[g.key][y.key]))
                : "max" === a.linkage
                ? ((i = n[f.key][y.key]),
                  n[f.key][y.key] < n[g.key][y.key] && (i = n[g.key][y.key]))
                : (i =
                    "mean" === a.linkage
                      ? (n[f.key][y.key] * f.size + n[g.key][y.key] * g.size) /
                        (f.size + g.size)
                      : "dendrogram" === a.mode
                      ? u(y.value, f.value)
                      : u(y.value[0], f.value[0])),
                (n[f.key][y.key] = n[y.key][f.key] = i);
            }
            for (var m = 0; m < e.length; m++) {
              var b = e[m].key;
              if (r[b] === f.key || r[b] === g.key) {
                for (var x = b, w = 0; w < e.length; w++) {
                  var E = e[w].key;
                  n[b][E] < n[b][x] && (x = E);
                }
                r[b] = x;
              }
              e[m].index = m;
            }
            return (f.key = g.key = f.index = g.index = null), !0;
          },
          En = function e(t, n, r) {
            t &&
              (t.value
                ? n.push(t.value)
                : (t.left && e(t.left, n), t.right && e(t.right, n)));
          },
          kn = function e(t, n) {
            if (!t) return "";
            if (t.left && t.right) {
              var r = e(t.left, n),
                a = e(t.right, n),
                i = n.add({ group: "nodes", data: { id: r + "," + a } });
              return (
                n.add({ group: "edges", data: { source: r, target: i.id() } }),
                n.add({ group: "edges", data: { source: a, target: i.id() } }),
                i.id()
              );
            }
            return t.value ? t.value.id() : void 0;
          },
          Cn = function e(t, n, r) {
            if (!t) return [];
            var a = [],
              i = [],
              o = [];
            return 0 === n
              ? (t.left && En(t.left, a),
                t.right && En(t.right, i),
                (o = a.concat(i)),
                [r.collection(o)])
              : 1 === n
              ? t.value
                ? [r.collection(t.value)]
                : (t.left && En(t.left, a),
                  t.right && En(t.right, i),
                  [r.collection(a), r.collection(i)])
              : t.value
              ? [r.collection(t.value)]
              : (t.left && (a = e(t.left, n - 1, r)),
                t.right && (i = e(t.right, n - 1, r)),
                a.concat(i));
          },
          Sn = function (e) {
            for (
              var t = this.cy(),
                n = this.nodes(),
                r = (function (e) {
                  var t = bn(e),
                    n = xn[t.linkage];
                  return null != n && (t.linkage = n), t;
                })(e),
                a = r.attributes,
                i = function (e, t) {
                  return rn(
                    r.distance,
                    a.length,
                    function (t) {
                      return a[t](e);
                    },
                    function (e) {
                      return a[e](t);
                    },
                    e,
                    t
                  );
                },
                o = [],
                s = [],
                l = [],
                u = [],
                c = 0;
              c < n.length;
              c++
            ) {
              var d = {
                value: "dendrogram" === r.mode ? n[c] : [n[c]],
                key: c,
                index: c,
              };
              (o[c] = d), (u[c] = d), (s[c] = []), (l[c] = 0);
            }
            for (var h = 0; h < o.length; h++)
              for (var p = 0; p <= h; p++) {
                var f;
                (f =
                  "dendrogram" === r.mode
                    ? h === p
                      ? 1 / 0
                      : i(o[h].value, o[p].value)
                    : h === p
                    ? 1 / 0
                    : i(o[h].value[0], o[p].value[0])),
                  (s[h][p] = f),
                  (s[p][h] = f),
                  f < s[h][l[h]] && (l[h] = p);
              }
            for (var g, v = wn(o, u, s, l, r); v; ) v = wn(o, u, s, l, r);
            return (
              "dendrogram" === r.mode
                ? ((g = Cn(o[0], r.dendrogramDepth, t)),
                  r.addDendrogram && kn(o[0], t))
                : ((g = new Array(o.length)),
                  o.forEach(function (e, n) {
                    (e.key = e.index = null), (g[n] = t.collection(e.value));
                  })),
              g
            );
          },
          Dn = { hierarchicalClustering: Sn, hca: Sn },
          Pn = xe({
            distance: "euclidean",
            preference: "median",
            damping: 0.8,
            maxIterations: 1e3,
            minIterations: 100,
            attributes: [],
          }),
          Tn = function (e, t, n, r) {
            var a = function (e, t) {
              return r[t](e);
            };
            return -rn(
              e,
              r.length,
              function (e) {
                return a(t, e);
              },
              function (e) {
                return a(n, e);
              },
              t,
              n
            );
          },
          Mn = function (e, t, n) {
            for (var r = [], a = 0; a < e; a++) {
              for (var i = -1, o = -1 / 0, s = 0; s < n.length; s++) {
                var l = n[s];
                t[a * e + l] > o && ((i = l), (o = t[a * e + l]));
              }
              i > 0 && r.push(i);
            }
            for (var u = 0; u < n.length; u++) r[n[u]] = n[u];
            return r;
          },
          Bn = function (e) {
            for (
              var t,
                n,
                r,
                a,
                i,
                o,
                s = this.cy(),
                l = this.nodes(),
                u = (function (e) {
                  var t = e.damping,
                    n = e.preference;
                  (0.5 <= t && t < 1) ||
                    pe("Damping must range on [0.5, 1).  Got: ".concat(t));
                  var r = ["median", "mean", "min", "max"];
                  return (
                    r.some(function (e) {
                      return e === n;
                    }) ||
                      k(n) ||
                      pe(
                        "Preference must be one of ["
                          .concat(
                            r
                              .map(function (e) {
                                return "'".concat(e, "'");
                              })
                              .join(", "),
                            "] or a number.  Got: "
                          )
                          .concat(n)
                      ),
                    Pn(e)
                  );
                })(e),
                c = {},
                d = 0;
              d < l.length;
              d++
            )
              c[l[d].id()] = d;
            (n = (t = l.length) * t), (r = new Array(n));
            for (var h = 0; h < n; h++) r[h] = -1 / 0;
            for (var p = 0; p < t; p++)
              for (var f = 0; f < t; f++)
                p !== f &&
                  (r[p * t + f] = Tn(u.distance, l[p], l[f], u.attributes));
            a = (function (e, t) {
              return "median" === t
                ? (function (e) {
                    var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : 0,
                      n =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : e.length,
                      r =
                        !(arguments.length > 4 && void 0 !== arguments[4]) ||
                        arguments[4],
                      a =
                        !(arguments.length > 5 && void 0 !== arguments[5]) ||
                        arguments[5];
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    !arguments[3]
                      ? (n < e.length && e.splice(n, e.length - n),
                        t > 0 && e.splice(0, t))
                      : (e = e.slice(t, n));
                    for (var i = 0, o = e.length - 1; o >= 0; o--) {
                      var s = e[o];
                      a
                        ? isFinite(s) || ((e[o] = -1 / 0), i++)
                        : e.splice(o, 1);
                    }
                    r &&
                      e.sort(function (e, t) {
                        return e - t;
                      });
                    var l = e.length,
                      u = Math.floor(l / 2);
                    return l % 2 != 0
                      ? e[u + 1 + i]
                      : (e[u - 1 + i] + e[u + i]) / 2;
                  })(e)
                : "mean" === t
                ? (function (e) {
                    for (
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : e.length,
                        r = 0,
                        a = 0,
                        i = t;
                      i < n;
                      i++
                    ) {
                      var o = e[i];
                      isFinite(o) && ((r += o), a++);
                    }
                    return r / a;
                  })(e)
                : "min" === t
                ? (function (e) {
                    for (
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : e.length,
                        r = 1 / 0,
                        a = t;
                      a < n;
                      a++
                    ) {
                      var i = e[a];
                      isFinite(i) && (r = Math.min(i, r));
                    }
                    return r;
                  })(e)
                : "max" === t
                ? (function (e) {
                    for (
                      var t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n =
                          arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : e.length,
                        r = -1 / 0,
                        a = t;
                      a < n;
                      a++
                    ) {
                      var i = e[a];
                      isFinite(i) && (r = Math.max(i, r));
                    }
                    return r;
                  })(e)
                : t;
            })(r, u.preference);
            for (var g = 0; g < t; g++) r[g * t + g] = a;
            i = new Array(n);
            for (var v = 0; v < n; v++) i[v] = 0;
            o = new Array(n);
            for (var y = 0; y < n; y++) o[y] = 0;
            for (
              var m = new Array(t), b = new Array(t), x = new Array(t), w = 0;
              w < t;
              w++
            )
              (m[w] = 0), (b[w] = 0), (x[w] = 0);
            for (
              var E, C = new Array(t * u.minIterations), S = 0;
              S < C.length;
              S++
            )
              C[S] = 0;
            for (E = 0; E < u.maxIterations; E++) {
              for (var D = 0; D < t; D++) {
                for (
                  var P = -1 / 0, T = -1 / 0, M = -1, B = 0, _ = 0;
                  _ < t;
                  _++
                )
                  (m[_] = i[D * t + _]),
                    (B = o[D * t + _] + r[D * t + _]) >= P
                      ? ((T = P), (P = B), (M = _))
                      : B > T && (T = B);
                for (var N = 0; N < t; N++)
                  i[D * t + N] =
                    (1 - u.damping) * (r[D * t + N] - P) + u.damping * m[N];
                i[D * t + M] =
                  (1 - u.damping) * (r[D * t + M] - T) + u.damping * m[M];
              }
              for (var I = 0; I < t; I++) {
                for (var L = 0, z = 0; z < t; z++)
                  (m[z] = o[z * t + I]),
                    (b[z] = Math.max(0, i[z * t + I])),
                    (L += b[z]);
                (L -= b[I]), (b[I] = i[I * t + I]), (L += b[I]);
                for (var A = 0; A < t; A++)
                  o[A * t + I] =
                    (1 - u.damping) * Math.min(0, L - b[A]) + u.damping * m[A];
                o[I * t + I] = (1 - u.damping) * (L - b[I]) + u.damping * m[I];
              }
              for (var O = 0, R = 0; R < t; R++) {
                var V = o[R * t + R] + i[R * t + R] > 0 ? 1 : 0;
                (C[(E % u.minIterations) * t + R] = V), (O += V);
              }
              if (
                O > 0 &&
                (E >= u.minIterations - 1 || E == u.maxIterations - 1)
              ) {
                for (var F = 0, j = 0; j < t; j++) {
                  x[j] = 0;
                  for (var q = 0; q < u.minIterations; q++)
                    x[j] += C[q * t + j];
                  (0 !== x[j] && x[j] !== u.minIterations) || F++;
                }
                if (F === t) break;
              }
            }
            for (
              var X = (function (e, t, n) {
                  for (var r = [], a = 0; a < e; a++)
                    t[a * e + a] + n[a * e + a] > 0 && r.push(a);
                  return r;
                })(t, i, o),
                Y = (function (e, t, n) {
                  for (var r = Mn(e, t, n), a = 0; a < n.length; a++) {
                    for (var i = [], o = 0; o < r.length; o++)
                      r[o] === n[a] && i.push(o);
                    for (var s = -1, l = -1 / 0, u = 0; u < i.length; u++) {
                      for (var c = 0, d = 0; d < i.length; d++)
                        c += t[i[d] * e + i[u]];
                      c > l && ((s = u), (l = c));
                    }
                    n[a] = i[s];
                  }
                  return Mn(e, t, n);
                })(t, r, X),
                W = {},
                H = 0;
              H < X.length;
              H++
            )
              W[X[H]] = [];
            for (var $ = 0; $ < l.length; $++) {
              var K = Y[c[l[$].id()]];
              null != K && W[K].push(l[$]);
            }
            for (var G = new Array(X.length), U = 0; U < X.length; U++)
              G[U] = s.collection(W[X[U]]);
            return G;
          },
          _n = { affinityPropagation: Bn, ap: Bn },
          Nn = xe({ root: void 0, directed: !1 }),
          In = function () {
            var e = this,
              t = {},
              n = 0,
              r = 0,
              a = [],
              i = [],
              o = {},
              s = function s(l, u, c) {
                l === c && (r += 1),
                  (t[u] = { id: n, low: n++, cutVertex: !1 });
                var d,
                  h,
                  p,
                  f,
                  g = e.getElementById(u).connectedEdges().intersection(e);
                0 === g.size()
                  ? a.push(e.spawn(e.getElementById(u)))
                  : g.forEach(function (n) {
                      (d = n.source().id()),
                        (h = n.target().id()),
                        (p = d === u ? h : d) !== c &&
                          ((f = n.id()),
                          o[f] ||
                            ((o[f] = !0), i.push({ x: u, y: p, edge: n })),
                          p in t
                            ? (t[u].low = Math.min(t[u].low, t[p].id))
                            : (s(l, p, u),
                              (t[u].low = Math.min(t[u].low, t[p].low)),
                              t[u].id <= t[p].low &&
                                ((t[u].cutVertex = !0),
                                (function (n, r) {
                                  for (
                                    var o = i.length - 1, s = [], l = e.spawn();
                                    i[o].x != n || i[o].y != r;

                                  )
                                    s.push(i.pop().edge), o--;
                                  s.push(i.pop().edge),
                                    s.forEach(function (n) {
                                      var r = n
                                        .connectedNodes()
                                        .intersection(e);
                                      l.merge(n),
                                        r.forEach(function (n) {
                                          var r = n.id(),
                                            a = n
                                              .connectedEdges()
                                              .intersection(e);
                                          l.merge(n),
                                            t[r].cutVertex
                                              ? l.merge(
                                                  a.filter(function (e) {
                                                    return e.isLoop();
                                                  })
                                                )
                                              : l.merge(a);
                                        });
                                    }),
                                    a.push(l);
                                })(u, p))));
                    });
              };
            e.forEach(function (e) {
              if (e.isNode()) {
                var n = e.id();
                n in t || ((r = 0), s(n, n), (t[n].cutVertex = r > 1));
              }
            });
            var l = Object.keys(t)
              .filter(function (e) {
                return t[e].cutVertex;
              })
              .map(function (t) {
                return e.getElementById(t);
              });
            return { cut: e.spawn(l), components: a };
          },
          Ln = function () {
            var e = this,
              t = {},
              n = 0,
              r = [],
              a = [],
              i = e.spawn(e),
              o = function o(s) {
                if (
                  (a.push(s),
                  (t[s] = { index: n, low: n++, explored: !1 }),
                  e
                    .getElementById(s)
                    .connectedEdges()
                    .intersection(e)
                    .forEach(function (e) {
                      var n = e.target().id();
                      n !== s &&
                        (n in t || o(n),
                        t[n].explored ||
                          (t[s].low = Math.min(t[s].low, t[n].low)));
                    }),
                  t[s].index === t[s].low)
                ) {
                  for (var l = e.spawn(); ; ) {
                    var u = a.pop();
                    if (
                      (l.merge(e.getElementById(u)),
                      (t[u].low = t[s].index),
                      (t[u].explored = !0),
                      u === s)
                    )
                      break;
                  }
                  var c = l.edgesWith(l),
                    d = l.merge(c);
                  r.push(d), (i = i.difference(d));
                }
              };
            return (
              e.forEach(function (e) {
                if (e.isNode()) {
                  var n = e.id();
                  n in t || o(n);
                }
              }),
              { cut: i, components: r }
            );
          },
          zn = {};
        [
          Be,
          Ne,
          Ie,
          ze,
          Oe,
          Ve,
          Xe,
          Nt,
          Lt,
          At,
          Rt,
          Kt,
          mn,
          Dn,
          _n,
          {
            hierholzer: function (e) {
              if (!E(e)) {
                var t = arguments;
                e = { root: t[0], directed: t[1] };
              }
              var n,
                r,
                a,
                i = Nn(e),
                o = i.root,
                s = i.directed,
                l = this,
                u = !1;
              o && (a = b(o) ? this.filter(o)[0].id() : o[0].id());
              var c = {},
                d = {};
              s
                ? l.forEach(function (e) {
                    var t = e.id();
                    if (e.isNode()) {
                      var a = e.indegree(!0),
                        i = e.outdegree(!0),
                        o = a - i,
                        s = i - a;
                      1 == o
                        ? n
                          ? (u = !0)
                          : (n = t)
                        : 1 == s
                        ? r
                          ? (u = !0)
                          : (r = t)
                        : (s > 1 || o > 1) && (u = !0),
                        (c[t] = []),
                        e.outgoers().forEach(function (e) {
                          e.isEdge() && c[t].push(e.id());
                        });
                    } else d[t] = [void 0, e.target().id()];
                  })
                : l.forEach(function (e) {
                    var t = e.id();
                    e.isNode()
                      ? (e.degree(!0) % 2 &&
                          (n ? (r ? (u = !0) : (r = t)) : (n = t)),
                        (c[t] = []),
                        e.connectedEdges().forEach(function (e) {
                          return c[t].push(e.id());
                        }))
                      : (d[t] = [e.source().id(), e.target().id()]);
                  });
              var h = { found: !1, trail: void 0 };
              if (u) return h;
              if (r && n)
                if (s) {
                  if (a && r != a) return h;
                  a = r;
                } else {
                  if (a && r != a && n != a) return h;
                  a || (a = r);
                }
              else a || (a = l[0].id());
              var p = function (e) {
                  for (var t, n, r, a = e, i = [e]; c[a].length; )
                    (t = c[a].shift()),
                      (n = d[t][0]),
                      a != (r = d[t][1])
                        ? ((c[r] = c[r].filter(function (e) {
                            return e != t;
                          })),
                          (a = r))
                        : s ||
                          a == n ||
                          ((c[n] = c[n].filter(function (e) {
                            return e != t;
                          })),
                          (a = n)),
                      i.unshift(t),
                      i.unshift(a);
                  return i;
                },
                f = [],
                g = [];
              for (g = p(a); 1 != g.length; )
                0 == c[g[0]].length
                  ? (f.unshift(l.getElementById(g.shift())),
                    f.unshift(l.getElementById(g.shift())))
                  : (g = p(g.shift()).concat(g));
              for (var v in (f.unshift(l.getElementById(g.shift())), c))
                if (c[v].length) return h;
              return (h.found = !0), (h.trail = this.spawn(f, !0)), h;
            },
          },
          {
            hopcroftTarjanBiconnected: In,
            htbc: In,
            htb: In,
            hopcroftTarjanBiconnectedComponents: In,
          },
          {
            tarjanStronglyConnected: Ln,
            tsc: Ln,
            tscc: Ln,
            tarjanStronglyConnectedComponents: Ln,
          },
        ].forEach(function (e) {
          V(zn, e);
        });
        var An = function e(t) {
          if (!(this instanceof e)) return new e(t);
          (this.id = "Thenable/1.0.7"),
            (this.state = 0),
            (this.fulfillValue = void 0),
            (this.rejectReason = void 0),
            (this.onFulfilled = []),
            (this.onRejected = []),
            (this.proxy = { then: this.then.bind(this) }),
            "function" == typeof t &&
              t.call(this, this.fulfill.bind(this), this.reject.bind(this));
        };
        An.prototype = {
          fulfill: function (e) {
            return On(this, 1, "fulfillValue", e);
          },
          reject: function (e) {
            return On(this, 2, "rejectReason", e);
          },
          then: function (e, t) {
            var n = this,
              r = new An();
            return (
              n.onFulfilled.push(Fn(e, r, "fulfill")),
              n.onRejected.push(Fn(t, r, "reject")),
              Rn(n),
              r.proxy
            );
          },
        };
        var On = function (e, t, n, r) {
            return 0 === e.state && ((e.state = t), (e[n] = r), Rn(e)), e;
          },
          Rn = function (e) {
            1 === e.state
              ? Vn(e, "onFulfilled", e.fulfillValue)
              : 2 === e.state && Vn(e, "onRejected", e.rejectReason);
          },
          Vn = function (e, t, n) {
            if (0 !== e[t].length) {
              var r = e[t];
              e[t] = [];
              var a = function () {
                for (var e = 0; e < r.length; e++) r[e](n);
              };
              "function" == typeof setImmediate
                ? setImmediate(a)
                : setTimeout(a, 0);
            }
          },
          Fn = function (e, t, n) {
            return function (r) {
              if ("function" != typeof e) t[n].call(t, r);
              else {
                var a;
                try {
                  a = e(r);
                } catch (e) {
                  return void t.reject(e);
                }
                jn(t, a);
              }
            };
          },
          jn = function e(t, n) {
            if (t !== n && t.proxy !== n) {
              var r;
              if (("object" === o(n) && null !== n) || "function" == typeof n)
                try {
                  r = n.then;
                } catch (e) {
                  return void t.reject(e);
                }
              if ("function" != typeof r) t.fulfill(n);
              else {
                var a = !1;
                try {
                  r.call(
                    n,
                    function (r) {
                      a ||
                        ((a = !0),
                        r === n
                          ? t.reject(new TypeError("circular thenable chain"))
                          : e(t, r));
                    },
                    function (e) {
                      a || ((a = !0), t.reject(e));
                    }
                  );
                } catch (e) {
                  a || t.reject(e);
                }
              }
            } else
              t.reject(new TypeError("cannot resolve promise with itself"));
          };
        (An.all = function (e) {
          return new An(function (t, n) {
            for (
              var r = new Array(e.length),
                a = 0,
                i = function (n, i) {
                  (r[n] = i), ++a === e.length && t(r);
                },
                o = 0;
              o < e.length;
              o++
            )
              !(function (t) {
                var r = e[t];
                null != r && null != r.then
                  ? r.then(
                      function (e) {
                        i(t, e);
                      },
                      function (e) {
                        n(e);
                      }
                    )
                  : i(t, r);
              })(o);
          });
        }),
          (An.resolve = function (e) {
            return new An(function (t, n) {
              t(e);
            });
          }),
          (An.reject = function (e) {
            return new An(function (t, n) {
              n(e);
            });
          });
        var qn = "undefined" != typeof Promise ? Promise : An,
          Xn = function (e, t, n) {
            var r = T(e),
              a = !r,
              i = (this._private = V({ duration: 1e3 }, t, n));
            if (
              ((i.target = e),
              (i.style = i.style || i.css),
              (i.started = !1),
              (i.playing = !1),
              (i.hooked = !1),
              (i.applying = !1),
              (i.progress = 0),
              (i.completes = []),
              (i.frames = []),
              i.complete && x(i.complete) && i.completes.push(i.complete),
              a)
            ) {
              var o = e.position();
              (i.startPosition = i.startPosition || { x: o.x, y: o.y }),
                (i.startStyle =
                  i.startStyle ||
                  e.cy().style().getAnimationStartStyle(e, i.style));
            }
            if (r) {
              var s = e.pan();
              (i.startPan = { x: s.x, y: s.y }), (i.startZoom = e.zoom());
            }
            (this.length = 1), (this[0] = this);
          },
          Yn = Xn.prototype;
        V(Yn, {
          instanceString: function () {
            return "animation";
          },
          hook: function () {
            var e = this._private;
            if (!e.hooked) {
              var t = e.target._private.animation;
              (e.queue ? t.queue : t.current).push(this),
                S(e.target) && e.target.cy().addToAnimationPool(e.target),
                (e.hooked = !0);
            }
            return this;
          },
          play: function () {
            var e = this._private;
            return (
              1 === e.progress && (e.progress = 0),
              (e.playing = !0),
              (e.started = !1),
              (e.stopped = !1),
              this.hook(),
              this
            );
          },
          playing: function () {
            return this._private.playing;
          },
          apply: function () {
            var e = this._private;
            return (
              (e.applying = !0),
              (e.started = !1),
              (e.stopped = !1),
              this.hook(),
              this
            );
          },
          applying: function () {
            return this._private.applying;
          },
          pause: function () {
            var e = this._private;
            return (e.playing = !1), (e.started = !1), this;
          },
          stop: function () {
            var e = this._private;
            return (e.playing = !1), (e.started = !1), (e.stopped = !0), this;
          },
          rewind: function () {
            return this.progress(0);
          },
          fastforward: function () {
            return this.progress(1);
          },
          time: function (e) {
            var t = this._private;
            return void 0 === e
              ? t.progress * t.duration
              : this.progress(e / t.duration);
          },
          progress: function (e) {
            var t = this._private,
              n = t.playing;
            return void 0 === e
              ? t.progress
              : (n && this.pause(),
                (t.progress = e),
                (t.started = !1),
                n && this.play(),
                this);
          },
          completed: function () {
            return 1 === this._private.progress;
          },
          reverse: function () {
            var e = this._private,
              t = e.playing;
            t && this.pause(), (e.progress = 1 - e.progress), (e.started = !1);
            var n = function (t, n) {
              var r = e[t];
              null != r && ((e[t] = e[n]), (e[n] = r));
            };
            if (
              (n("zoom", "startZoom"),
              n("pan", "startPan"),
              n("position", "startPosition"),
              e.style)
            )
              for (var r = 0; r < e.style.length; r++) {
                var a = e.style[r],
                  i = a.name,
                  o = e.startStyle[i];
                (e.startStyle[i] = a), (e.style[r] = o);
              }
            return t && this.play(), this;
          },
          promise: function (e) {
            var t,
              n = this._private;
            switch (e) {
              case "frame":
                t = n.frames;
                break;
              default:
              case "complete":
              case "completed":
                t = n.completes;
            }
            return new qn(function (e, n) {
              t.push(function () {
                e();
              });
            });
          },
        }),
          (Yn.complete = Yn.completed),
          (Yn.run = Yn.play),
          (Yn.running = Yn.playing);
        var Wn = {};
        [
          {
            animated: function () {
              return function () {
                var e = this,
                  t = void 0 !== e.length ? e : [e];
                if (!(this._private.cy || this).styleEnabled()) return !1;
                var n = t[0];
                return n ? n._private.animation.current.length > 0 : void 0;
              };
            },
            clearQueue: function () {
              return function () {
                var e = this,
                  t = void 0 !== e.length ? e : [e];
                if (!(this._private.cy || this).styleEnabled()) return this;
                for (var n = 0; n < t.length; n++)
                  t[n]._private.animation.queue = [];
                return this;
              };
            },
            delay: function () {
              return function (e, t) {
                return (this._private.cy || this).styleEnabled()
                  ? this.animate({ delay: e, duration: e, complete: t })
                  : this;
              };
            },
            delayAnimation: function () {
              return function (e, t) {
                return (this._private.cy || this).styleEnabled()
                  ? this.animation({ delay: e, duration: e, complete: t })
                  : this;
              };
            },
            animation: function () {
              return function (e, t) {
                var n = this,
                  r = void 0 !== n.length,
                  a = r ? n : [n],
                  i = this._private.cy || this,
                  o = !r,
                  s = !o;
                if (!i.styleEnabled()) return this;
                var l = i.style();
                if (((e = V({}, e, t)), 0 === Object.keys(e).length))
                  return new Xn(a[0], e);
                switch (
                  (void 0 === e.duration && (e.duration = 400), e.duration)
                ) {
                  case "slow":
                    e.duration = 600;
                    break;
                  case "fast":
                    e.duration = 200;
                }
                if (
                  (s &&
                    ((e.style = l.getPropsList(e.style || e.css)),
                    (e.css = void 0)),
                  s && null != e.renderedPosition)
                ) {
                  var u = e.renderedPosition,
                    c = i.pan(),
                    d = i.zoom();
                  e.position = We(u, d, c);
                }
                if (o && null != e.panBy) {
                  var h = e.panBy,
                    p = i.pan();
                  e.pan = { x: p.x + h.x, y: p.y + h.y };
                }
                var f = e.center || e.centre;
                if (o && null != f) {
                  var g = i.getCenterPan(f.eles, e.zoom);
                  null != g && (e.pan = g);
                }
                if (o && null != e.fit) {
                  var v = e.fit,
                    y = i.getFitViewport(v.eles || v.boundingBox, v.padding);
                  null != y && ((e.pan = y.pan), (e.zoom = y.zoom));
                }
                if (o && E(e.zoom)) {
                  var m = i.getZoomedViewport(e.zoom);
                  null != m
                    ? (m.zoomed && (e.zoom = m.zoom),
                      m.panned && (e.pan = m.pan))
                    : (e.zoom = null);
                }
                return new Xn(a[0], e);
              };
            },
            animate: function () {
              return function (e, t) {
                var n = this,
                  r = void 0 !== n.length ? n : [n];
                if (!(this._private.cy || this).styleEnabled()) return this;
                t && (e = V({}, e, t));
                for (var a = 0; a < r.length; a++) {
                  var i = r[a],
                    o = i.animated() && (void 0 === e.queue || e.queue);
                  i.animation(e, o ? { queue: !0 } : void 0).play();
                }
                return this;
              };
            },
            stop: function () {
              return function (e, t) {
                var n = this,
                  r = void 0 !== n.length ? n : [n],
                  a = this._private.cy || this;
                if (!a.styleEnabled()) return this;
                for (var i = 0; i < r.length; i++) {
                  for (
                    var o = r[i]._private, s = o.animation.current, l = 0;
                    l < s.length;
                    l++
                  ) {
                    var u = s[l]._private;
                    t && (u.duration = 0);
                  }
                  e && (o.animation.queue = []),
                    t || (o.animation.current = []);
                }
                return a.notify("draw"), this;
              };
            },
          },
          {
            data: function (e) {
              return (
                (e = V(
                  {},
                  {
                    field: "data",
                    bindingEvent: "data",
                    allowBinding: !1,
                    allowSetting: !1,
                    allowGetting: !1,
                    settingEvent: "data",
                    settingTriggersEvent: !1,
                    triggerFnName: "trigger",
                    immutableKeys: {},
                    updateStyle: !1,
                    beforeGet: function (e) {},
                    beforeSet: function (e, t) {},
                    onSet: function (e) {},
                    canSet: function (e) {
                      return !0;
                    },
                  },
                  e
                )),
                function (t, n) {
                  var r = e,
                    a = this,
                    i = void 0 !== a.length,
                    o = i ? a : [a],
                    s = i ? a[0] : a;
                  if (b(t)) {
                    var l;
                    if (r.allowGetting && void 0 === n)
                      return (
                        s && (r.beforeGet(s), (l = s._private[r.field][t])), l
                      );
                    if (r.allowSetting && void 0 !== n && !r.immutableKeys[t]) {
                      var u = c({}, t, n);
                      r.beforeSet(a, u);
                      for (var d = 0, h = o.length; d < h; d++) {
                        var p = o[d];
                        r.canSet(p) && (p._private[r.field][t] = n);
                      }
                      r.updateStyle && a.updateStyle(),
                        r.onSet(a),
                        r.settingTriggersEvent &&
                          a[r.triggerFnName](r.settingEvent);
                    }
                  } else if (r.allowSetting && E(t)) {
                    var f,
                      g,
                      v = t,
                      y = Object.keys(v);
                    r.beforeSet(a, v);
                    for (var m = 0; m < y.length; m++)
                      if (((g = v[(f = y[m])]), !r.immutableKeys[f]))
                        for (var w = 0; w < o.length; w++) {
                          var k = o[w];
                          r.canSet(k) && (k._private[r.field][f] = g);
                        }
                    r.updateStyle && a.updateStyle(),
                      r.onSet(a),
                      r.settingTriggersEvent &&
                        a[r.triggerFnName](r.settingEvent);
                  } else if (r.allowBinding && x(t)) {
                    var C = t;
                    a.on(r.bindingEvent, C);
                  } else if (r.allowGetting && void 0 === t) {
                    var S;
                    return s && (r.beforeGet(s), (S = s._private[r.field])), S;
                  }
                  return a;
                }
              );
            },
            removeData: function (e) {
              return (
                (e = V(
                  {},
                  {
                    field: "data",
                    event: "data",
                    triggerFnName: "trigger",
                    triggerEvent: !1,
                    immutableKeys: {},
                  },
                  e
                )),
                function (t) {
                  var n = e,
                    r = this,
                    a = void 0 !== r.length ? r : [r];
                  if (b(t)) {
                    for (
                      var i = t.split(/\s+/), o = i.length, s = 0;
                      s < o;
                      s++
                    ) {
                      var l = i[s];
                      if (!B(l) && !n.immutableKeys[l])
                        for (var u = 0, c = a.length; u < c; u++)
                          a[u]._private[n.field][l] = void 0;
                    }
                    n.triggerEvent && r[n.triggerFnName](n.event);
                  } else if (void 0 === t) {
                    for (var d = 0, h = a.length; d < h; d++)
                      for (
                        var p = a[d]._private[n.field],
                          f = Object.keys(p),
                          g = 0;
                        g < f.length;
                        g++
                      ) {
                        var v = f[g];
                        !n.immutableKeys[v] && (p[v] = void 0);
                      }
                    n.triggerEvent && r[n.triggerFnName](n.event);
                  }
                  return r;
                }
              );
            },
          },
          {
            eventAliasesOn: function (e) {
              var t = e;
              (t.addListener = t.listen = t.bind = t.on),
                (t.unlisten = t.unbind = t.off = t.removeListener),
                (t.trigger = t.emit),
                (t.pon = t.promiseOn = function (e, t) {
                  var n = this,
                    r = Array.prototype.slice.call(arguments, 0);
                  return new qn(function (e, t) {
                    var a = r.concat([
                        function (t) {
                          n.off.apply(n, i), e(t);
                        },
                      ]),
                      i = a.concat([]);
                    n.on.apply(n, a);
                  });
                });
            },
          },
        ].forEach(function (e) {
          V(Wn, e);
        });
        var Hn = {
            animate: Wn.animate(),
            animation: Wn.animation(),
            animated: Wn.animated(),
            clearQueue: Wn.clearQueue(),
            delay: Wn.delay(),
            delayAnimation: Wn.delayAnimation(),
            stop: Wn.stop(),
          },
          $n = {
            classes: function (e) {
              var t = this;
              if (void 0 === e) {
                var n = [];
                return (
                  t[0]._private.classes.forEach(function (e) {
                    return n.push(e);
                  }),
                  n
                );
              }
              w(e) || (e = (e || "").match(/\S+/g) || []);
              for (var r = [], a = new Pe(e), i = 0; i < t.length; i++) {
                for (
                  var o = t[i], s = o._private, l = s.classes, u = !1, c = 0;
                  c < e.length;
                  c++
                ) {
                  var d = e[c];
                  if (!l.has(d)) {
                    u = !0;
                    break;
                  }
                }
                u || (u = l.size !== e.length),
                  u && ((s.classes = a), r.push(o));
              }
              return (
                r.length > 0 && this.spawn(r).updateStyle().emit("class"), t
              );
            },
            addClass: function (e) {
              return this.toggleClass(e, !0);
            },
            hasClass: function (e) {
              var t = this[0];
              return null != t && t._private.classes.has(e);
            },
            toggleClass: function (e, t) {
              w(e) || (e = e.match(/\S+/g) || []);
              for (
                var n = this, r = void 0 === t, a = [], i = 0, o = n.length;
                i < o;
                i++
              )
                for (
                  var s = n[i], l = s._private.classes, u = !1, c = 0;
                  c < e.length;
                  c++
                ) {
                  var d = e[c],
                    h = l.has(d),
                    p = !1;
                  t || (r && !h)
                    ? (l.add(d), (p = !0))
                    : (!t || (r && h)) && (l.delete(d), (p = !0)),
                    !u && p && (a.push(s), (u = !0));
                }
              return (
                a.length > 0 && this.spawn(a).updateStyle().emit("class"), n
              );
            },
            removeClass: function (e) {
              return this.toggleClass(e, !1);
            },
            flashClass: function (e, t) {
              var n = this;
              if (null == t) t = 250;
              else if (0 === t) return n;
              return (
                n.addClass(e),
                setTimeout(function () {
                  n.removeClass(e);
                }, t),
                n
              );
            },
          };
        $n.className = $n.classNames = $n.classes;
        var Kn = {
          metaChar:
            "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
          comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
          boolOp: "\\?|\\!|\\^",
          string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
          number: O,
          meta: "degree|indegree|outdegree",
          separator: "\\s*,\\s*",
          descendant: "\\s+",
          child: "\\s+>\\s+",
          subject: "\\$",
          group: "node|edge|\\*",
          directedEdge: "\\s+->\\s+",
          undirectedEdge: "\\s+<->\\s+",
        };
        (Kn.variable = "(?:[\\w-]|(?:\\\\" + Kn.metaChar + "))+"),
          (Kn.value = Kn.string + "|" + Kn.number),
          (Kn.className = Kn.variable),
          (Kn.id = Kn.variable),
          (function () {
            var e, t, n;
            for (e = Kn.comparatorOp.split("|"), n = 0; n < e.length; n++)
              (t = e[n]), (Kn.comparatorOp += "|@" + t);
            for (e = Kn.comparatorOp.split("|"), n = 0; n < e.length; n++)
              (t = e[n]).indexOf("!") >= 0 ||
                ("=" !== t && (Kn.comparatorOp += "|\\!" + t));
          })();
        var Gn = 20,
          Un = [
            {
              selector: ":selected",
              matches: function (e) {
                return e.selected();
              },
            },
            {
              selector: ":unselected",
              matches: function (e) {
                return !e.selected();
              },
            },
            {
              selector: ":selectable",
              matches: function (e) {
                return e.selectable();
              },
            },
            {
              selector: ":unselectable",
              matches: function (e) {
                return !e.selectable();
              },
            },
            {
              selector: ":locked",
              matches: function (e) {
                return e.locked();
              },
            },
            {
              selector: ":unlocked",
              matches: function (e) {
                return !e.locked();
              },
            },
            {
              selector: ":visible",
              matches: function (e) {
                return e.visible();
              },
            },
            {
              selector: ":hidden",
              matches: function (e) {
                return !e.visible();
              },
            },
            {
              selector: ":transparent",
              matches: function (e) {
                return e.transparent();
              },
            },
            {
              selector: ":grabbed",
              matches: function (e) {
                return e.grabbed();
              },
            },
            {
              selector: ":free",
              matches: function (e) {
                return !e.grabbed();
              },
            },
            {
              selector: ":removed",
              matches: function (e) {
                return e.removed();
              },
            },
            {
              selector: ":inside",
              matches: function (e) {
                return !e.removed();
              },
            },
            {
              selector: ":grabbable",
              matches: function (e) {
                return e.grabbable();
              },
            },
            {
              selector: ":ungrabbable",
              matches: function (e) {
                return !e.grabbable();
              },
            },
            {
              selector: ":animated",
              matches: function (e) {
                return e.animated();
              },
            },
            {
              selector: ":unanimated",
              matches: function (e) {
                return !e.animated();
              },
            },
            {
              selector: ":parent",
              matches: function (e) {
                return e.isParent();
              },
            },
            {
              selector: ":childless",
              matches: function (e) {
                return e.isChildless();
              },
            },
            {
              selector: ":child",
              matches: function (e) {
                return e.isChild();
              },
            },
            {
              selector: ":orphan",
              matches: function (e) {
                return e.isOrphan();
              },
            },
            {
              selector: ":nonorphan",
              matches: function (e) {
                return e.isChild();
              },
            },
            {
              selector: ":compound",
              matches: function (e) {
                return e.isNode()
                  ? e.isParent()
                  : e.source().isParent() || e.target().isParent();
              },
            },
            {
              selector: ":loop",
              matches: function (e) {
                return e.isLoop();
              },
            },
            {
              selector: ":simple",
              matches: function (e) {
                return e.isSimple();
              },
            },
            {
              selector: ":active",
              matches: function (e) {
                return e.active();
              },
            },
            {
              selector: ":inactive",
              matches: function (e) {
                return !e.active();
              },
            },
            {
              selector: ":backgrounding",
              matches: function (e) {
                return e.backgrounding();
              },
            },
            {
              selector: ":nonbackgrounding",
              matches: function (e) {
                return !e.backgrounding();
              },
            },
          ].sort(function (e, t) {
            return (function (e, t) {
              return -1 * R(e, t);
            })(e.selector, t.selector);
          }),
          Zn = (function () {
            for (var e, t = {}, n = 0; n < Un.length; n++)
              t[(e = Un[n]).selector] = e.matches;
            return t;
          })(),
          Qn =
            "(" +
            Un.map(function (e) {
              return e.selector;
            }).join("|") +
            ")",
          Jn = function (e) {
            return e.replace(
              new RegExp("\\\\(" + Kn.metaChar + ")", "g"),
              function (e, t) {
                return t;
              }
            );
          },
          er = function (e, t, n) {
            e[e.length - 1] = n;
          },
          tr = [
            {
              name: "group",
              query: !0,
              regex: "(" + Kn.group + ")",
              populate: function (e, t, n) {
                var r = d(n, 1)[0];
                t.checks.push({ type: 0, value: "*" === r ? r : r + "s" });
              },
            },
            {
              name: "state",
              query: !0,
              regex: Qn,
              populate: function (e, t, n) {
                var r = d(n, 1)[0];
                t.checks.push({ type: 7, value: r });
              },
            },
            {
              name: "id",
              query: !0,
              regex: "\\#(" + Kn.id + ")",
              populate: function (e, t, n) {
                var r = d(n, 1)[0];
                t.checks.push({ type: 8, value: Jn(r) });
              },
            },
            {
              name: "className",
              query: !0,
              regex: "\\.(" + Kn.className + ")",
              populate: function (e, t, n) {
                var r = d(n, 1)[0];
                t.checks.push({ type: 9, value: Jn(r) });
              },
            },
            {
              name: "dataExists",
              query: !0,
              regex: "\\[\\s*(" + Kn.variable + ")\\s*\\]",
              populate: function (e, t, n) {
                var r = d(n, 1)[0];
                t.checks.push({ type: 4, field: Jn(r) });
              },
            },
            {
              name: "dataCompare",
              query: !0,
              regex:
                "\\[\\s*(" +
                Kn.variable +
                ")\\s*(" +
                Kn.comparatorOp +
                ")\\s*(" +
                Kn.value +
                ")\\s*\\]",
              populate: function (e, t, n) {
                var r = d(n, 3),
                  a = r[0],
                  i = r[1],
                  o = r[2];
                (o =
                  null != new RegExp("^" + Kn.string + "$").exec(o)
                    ? o.substring(1, o.length - 1)
                    : parseFloat(o)),
                  t.checks.push({
                    type: 3,
                    field: Jn(a),
                    operator: i,
                    value: o,
                  });
              },
            },
            {
              name: "dataBool",
              query: !0,
              regex:
                "\\[\\s*(" + Kn.boolOp + ")\\s*(" + Kn.variable + ")\\s*\\]",
              populate: function (e, t, n) {
                var r = d(n, 2),
                  a = r[0],
                  i = r[1];
                t.checks.push({ type: 5, field: Jn(i), operator: a });
              },
            },
            {
              name: "metaCompare",
              query: !0,
              regex:
                "\\[\\[\\s*(" +
                Kn.meta +
                ")\\s*(" +
                Kn.comparatorOp +
                ")\\s*(" +
                Kn.number +
                ")\\s*\\]\\]",
              populate: function (e, t, n) {
                var r = d(n, 3),
                  a = r[0],
                  i = r[1],
                  o = r[2];
                t.checks.push({
                  type: 6,
                  field: Jn(a),
                  operator: i,
                  value: parseFloat(o),
                });
              },
            },
            {
              name: "nextQuery",
              separator: !0,
              regex: Kn.separator,
              populate: function (e, t) {
                var n = e.currentSubject,
                  r = e.edgeCount,
                  a = e.compoundCount,
                  i = e[e.length - 1];
                return (
                  null != n && ((i.subject = n), (e.currentSubject = null)),
                  (i.edgeCount = r),
                  (i.compoundCount = a),
                  (e.edgeCount = 0),
                  (e.compoundCount = 0),
                  (e[e.length++] = { checks: [] })
                );
              },
            },
            {
              name: "directedEdge",
              separator: !0,
              regex: Kn.directedEdge,
              populate: function (e, t) {
                if (null == e.currentSubject) {
                  var n = { checks: [] },
                    r = t,
                    a = { checks: [] };
                  return (
                    n.checks.push({ type: 11, source: r, target: a }),
                    er(e, 0, n),
                    e.edgeCount++,
                    a
                  );
                }
                var i = { checks: [] },
                  o = t,
                  s = { checks: [] };
                return (
                  i.checks.push({ type: 12, source: o, target: s }),
                  er(e, 0, i),
                  e.edgeCount++,
                  s
                );
              },
            },
            {
              name: "undirectedEdge",
              separator: !0,
              regex: Kn.undirectedEdge,
              populate: function (e, t) {
                if (null == e.currentSubject) {
                  var n = { checks: [] },
                    r = t,
                    a = { checks: [] };
                  return (
                    n.checks.push({ type: 10, nodes: [r, a] }),
                    er(e, 0, n),
                    e.edgeCount++,
                    a
                  );
                }
                var i = { checks: [] },
                  o = t,
                  s = { checks: [] };
                return (
                  i.checks.push({ type: 14, node: o, neighbor: s }),
                  er(e, 0, i),
                  s
                );
              },
            },
            {
              name: "child",
              separator: !0,
              regex: Kn.child,
              populate: function (e, t) {
                if (null == e.currentSubject) {
                  var n = { checks: [] },
                    r = { checks: [] },
                    a = e[e.length - 1];
                  return (
                    n.checks.push({ type: 15, parent: a, child: r }),
                    er(e, 0, n),
                    e.compoundCount++,
                    r
                  );
                }
                if (e.currentSubject === t) {
                  var i = { checks: [] },
                    o = e[e.length - 1],
                    s = { checks: [] },
                    l = { checks: [] },
                    u = { checks: [] },
                    c = { checks: [] };
                  return (
                    i.checks.push({ type: 19, left: o, right: s, subject: l }),
                    (l.checks = t.checks),
                    (t.checks = [{ type: Gn }]),
                    c.checks.push({ type: Gn }),
                    s.checks.push({ type: 17, parent: c, child: u }),
                    er(e, 0, i),
                    (e.currentSubject = l),
                    e.compoundCount++,
                    u
                  );
                }
                var d = { checks: [] },
                  h = { checks: [] },
                  p = [{ type: 17, parent: d, child: h }];
                return (
                  (d.checks = t.checks), (t.checks = p), e.compoundCount++, h
                );
              },
            },
            {
              name: "descendant",
              separator: !0,
              regex: Kn.descendant,
              populate: function (e, t) {
                if (null == e.currentSubject) {
                  var n = { checks: [] },
                    r = { checks: [] },
                    a = e[e.length - 1];
                  return (
                    n.checks.push({ type: 16, ancestor: a, descendant: r }),
                    er(e, 0, n),
                    e.compoundCount++,
                    r
                  );
                }
                if (e.currentSubject === t) {
                  var i = { checks: [] },
                    o = e[e.length - 1],
                    s = { checks: [] },
                    l = { checks: [] },
                    u = { checks: [] },
                    c = { checks: [] };
                  return (
                    i.checks.push({ type: 19, left: o, right: s, subject: l }),
                    (l.checks = t.checks),
                    (t.checks = [{ type: Gn }]),
                    c.checks.push({ type: Gn }),
                    s.checks.push({ type: 18, ancestor: c, descendant: u }),
                    er(e, 0, i),
                    (e.currentSubject = l),
                    e.compoundCount++,
                    u
                  );
                }
                var d = { checks: [] },
                  h = { checks: [] },
                  p = [{ type: 18, ancestor: d, descendant: h }];
                return (
                  (d.checks = t.checks), (t.checks = p), e.compoundCount++, h
                );
              },
            },
            {
              name: "subject",
              modifier: !0,
              regex: Kn.subject,
              populate: function (e, t) {
                if (null != e.currentSubject && e.currentSubject !== t)
                  return (
                    ge(
                      "Redefinition of subject in selector `" +
                        e.toString() +
                        "`"
                    ),
                    !1
                  );
                e.currentSubject = t;
                var n = e[e.length - 1].checks[0],
                  r = null == n ? null : n.type;
                11 === r
                  ? (n.type = 13)
                  : 10 === r &&
                    ((n.type = 14),
                    (n.node = n.nodes[1]),
                    (n.neighbor = n.nodes[0]),
                    (n.nodes = null));
              },
            },
          ];
        tr.forEach(function (e) {
          return (e.regexObj = new RegExp("^" + e.regex));
        });
        var nr = function (e) {
            for (var t, n, r, a = 0; a < tr.length; a++) {
              var i = tr[a],
                o = i.name,
                s = e.match(i.regexObj);
              if (null != s) {
                (n = s), (t = i), (r = o);
                var l = s[0];
                e = e.substring(l.length);
                break;
              }
            }
            return { expr: t, match: n, name: r, remaining: e };
          },
          rr = {
            parse: function (e) {
              var t = this,
                n = (t.inputText = e),
                r = (t[0] = { checks: [] });
              for (
                t.length = 1,
                  n = (function (e) {
                    var t = e.match(/^\s+/);
                    if (t) {
                      var n = t[0];
                      e = e.substring(n.length);
                    }
                    return e;
                  })(n);
                ;

              ) {
                var a = nr(n);
                if (null == a.expr)
                  return ge("The selector `" + e + "`is invalid"), !1;
                var i = a.match.slice(1),
                  o = a.expr.populate(t, r, i);
                if (!1 === o) return !1;
                if ((null != o && (r = o), (n = a.remaining).match(/^\s*$/)))
                  break;
              }
              var s = t[t.length - 1];
              null != t.currentSubject && (s.subject = t.currentSubject),
                (s.edgeCount = t.edgeCount),
                (s.compoundCount = t.compoundCount);
              for (var l = 0; l < t.length; l++) {
                var u = t[l];
                if (u.compoundCount > 0 && u.edgeCount > 0)
                  return (
                    ge(
                      "The selector `" +
                        e +
                        "` is invalid because it uses both a compound selector and an edge selector"
                    ),
                    !1
                  );
                if (u.edgeCount > 1)
                  return (
                    ge(
                      "The selector `" +
                        e +
                        "` is invalid because it uses multiple edge selectors"
                    ),
                    !1
                  );
                1 === u.edgeCount &&
                  ge(
                    "The selector `" +
                      e +
                      "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes."
                  );
              }
              return !0;
            },
            toString: function () {
              if (null != this.toStringCache) return this.toStringCache;
              for (
                var e = function (e) {
                    return null == e ? "" : e;
                  },
                  t = function (t) {
                    return b(t) ? '"' + t + '"' : e(t);
                  },
                  n = function (e) {
                    return " " + e + " ";
                  },
                  r = function (a, i) {
                    return a.checks.reduce(function (o, s, l) {
                      return (
                        o +
                        (i === a && 0 === l ? "$" : "") +
                        (function (a, i) {
                          var o = a.type,
                            s = a.value;
                          switch (o) {
                            case 0:
                              var l = e(s);
                              return l.substring(0, l.length - 1);
                            case 3:
                              var u = a.field,
                                c = a.operator;
                              return "[" + u + n(e(c)) + t(s) + "]";
                            case 5:
                              var d = a.operator,
                                h = a.field;
                              return "[" + e(d) + h + "]";
                            case 4:
                              return "[" + a.field + "]";
                            case 6:
                              var p = a.operator;
                              return "[[" + a.field + n(e(p)) + t(s) + "]]";
                            case 7:
                              return s;
                            case 8:
                              return "#" + s;
                            case 9:
                              return "." + s;
                            case 17:
                            case 15:
                              return r(a.parent, i) + n(">") + r(a.child, i);
                            case 18:
                            case 16:
                              return (
                                r(a.ancestor, i) + " " + r(a.descendant, i)
                              );
                            case 19:
                              var f = r(a.left, i),
                                g = r(a.subject, i),
                                v = r(a.right, i);
                              return f + (f.length > 0 ? " " : "") + g + v;
                            case Gn:
                              return "";
                          }
                        })(s, i)
                      );
                    }, "");
                  },
                  a = "",
                  i = 0;
                i < this.length;
                i++
              ) {
                var o = this[i];
                (a += r(o, o.subject)),
                  this.length > 1 && i < this.length - 1 && (a += ", ");
              }
              return (this.toStringCache = a), a;
            },
          },
          ar = function (e, t, n) {
            var r,
              a,
              i,
              o = b(e),
              s = k(e),
              l = b(n),
              u = !1,
              c = !1,
              d = !1;
            switch (
              (t.indexOf("!") >= 0 && ((t = t.replace("!", "")), (c = !0)),
              t.indexOf("@") >= 0 && ((t = t.replace("@", "")), (u = !0)),
              (o || l || u) && ((a = o || s ? "" + e : ""), (i = "" + n)),
              u && ((e = a = a.toLowerCase()), (n = i = i.toLowerCase())),
              t)
            ) {
              case "*=":
                r = a.indexOf(i) >= 0;
                break;
              case "$=":
                r = a.indexOf(i, a.length - i.length) >= 0;
                break;
              case "^=":
                r = 0 === a.indexOf(i);
                break;
              case "=":
                r = e === n;
                break;
              case ">":
                (d = !0), (r = e > n);
                break;
              case ">=":
                (d = !0), (r = e >= n);
                break;
              case "<":
                (d = !0), (r = e < n);
                break;
              case "<=":
                (d = !0), (r = e <= n);
                break;
              default:
                r = !1;
            }
            return !c || (null == e && d) || (r = !r), r;
          },
          ir = function (e, t) {
            return e.data(t);
          },
          or = [],
          sr = function (e, t) {
            return e.checks.every(function (e) {
              return or[e.type](e, t);
            });
          };
        (or[0] = function (e, t) {
          var n = e.value;
          return "*" === n || n === t.group();
        }),
          (or[7] = function (e, t) {
            return (function (e, t) {
              return Zn[e](t);
            })(e.value, t);
          }),
          (or[8] = function (e, t) {
            var n = e.value;
            return t.id() === n;
          }),
          (or[9] = function (e, t) {
            var n = e.value;
            return t.hasClass(n);
          }),
          (or[6] = function (e, t) {
            var n = e.field,
              r = e.operator,
              a = e.value;
            return ar(
              (function (e, t) {
                return e[t]();
              })(t, n),
              r,
              a
            );
          }),
          (or[3] = function (e, t) {
            var n = e.field,
              r = e.operator,
              a = e.value;
            return ar(ir(t, n), r, a);
          }),
          (or[5] = function (e, t) {
            var n = e.field,
              r = e.operator;
            return (function (e, t) {
              switch (t) {
                case "?":
                  return !!e;
                case "!":
                  return !e;
                case "^":
                  return void 0 === e;
              }
            })(ir(t, n), r);
          }),
          (or[4] = function (e, t) {
            var n = e.field;
            return e.operator, void 0 !== ir(t, n);
          }),
          (or[10] = function (e, t) {
            var n = e.nodes[0],
              r = e.nodes[1],
              a = t.source(),
              i = t.target();
            return (sr(n, a) && sr(r, i)) || (sr(r, a) && sr(n, i));
          }),
          (or[14] = function (e, t) {
            return (
              sr(e.node, t) &&
              t.neighborhood().some(function (t) {
                return t.isNode() && sr(e.neighbor, t);
              })
            );
          }),
          (or[11] = function (e, t) {
            return sr(e.source, t.source()) && sr(e.target, t.target());
          }),
          (or[12] = function (e, t) {
            return (
              sr(e.source, t) &&
              t.outgoers().some(function (t) {
                return t.isNode() && sr(e.target, t);
              })
            );
          }),
          (or[13] = function (e, t) {
            return (
              sr(e.target, t) &&
              t.incomers().some(function (t) {
                return t.isNode() && sr(e.source, t);
              })
            );
          }),
          (or[15] = function (e, t) {
            return sr(e.child, t) && sr(e.parent, t.parent());
          }),
          (or[17] = function (e, t) {
            return (
              sr(e.parent, t) &&
              t.children().some(function (t) {
                return sr(e.child, t);
              })
            );
          }),
          (or[16] = function (e, t) {
            return (
              sr(e.descendant, t) &&
              t.ancestors().some(function (t) {
                return sr(e.ancestor, t);
              })
            );
          }),
          (or[18] = function (e, t) {
            return (
              sr(e.ancestor, t) &&
              t.descendants().some(function (t) {
                return sr(e.descendant, t);
              })
            );
          }),
          (or[19] = function (e, t) {
            return sr(e.subject, t) && sr(e.left, t) && sr(e.right, t);
          }),
          (or[20] = function () {
            return !0;
          }),
          (or[1] = function (e, t) {
            return e.value.has(t);
          }),
          (or[2] = function (e, t) {
            return (0, e.value)(t);
          });
        var lr = function (e) {
            (this.inputText = e),
              (this.currentSubject = null),
              (this.compoundCount = 0),
              (this.edgeCount = 0),
              (this.length = 0),
              null == e ||
                (b(e) && e.match(/^\s*$/)) ||
                (S(e)
                  ? this.addQuery({
                      checks: [{ type: 1, value: e.collection() }],
                    })
                  : x(e)
                  ? this.addQuery({ checks: [{ type: 2, value: e }] })
                  : b(e)
                  ? this.parse(e) || (this.invalid = !0)
                  : pe("A selector must be created from a string; found "));
          },
          ur = lr.prototype;
        [
          rr,
          {
            matches: function (e) {
              for (var t = 0; t < this.length; t++) {
                var n = this[t];
                if (sr(n, e)) return !0;
              }
              return !1;
            },
            filter: function (e) {
              var t = this;
              if (
                1 === t.length &&
                1 === t[0].checks.length &&
                8 === t[0].checks[0].type
              )
                return e.getElementById(t[0].checks[0].value).collection();
              var n = function (e) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  if (sr(r, e)) return !0;
                }
                return !1;
              };
              return (
                null == t.text() &&
                  (n = function () {
                    return !0;
                  }),
                e.filter(n)
              );
            },
          },
        ].forEach(function (e) {
          return V(ur, e);
        }),
          (ur.text = function () {
            return this.inputText;
          }),
          (ur.size = function () {
            return this.length;
          }),
          (ur.eq = function (e) {
            return this[e];
          }),
          (ur.sameText = function (e) {
            return !this.invalid && !e.invalid && this.text() === e.text();
          }),
          (ur.addQuery = function (e) {
            this[this.length++] = e;
          }),
          (ur.selector = ur.toString);
        var cr = {
          allAre: function (e) {
            var t = new lr(e);
            return this.every(function (e) {
              return t.matches(e);
            });
          },
          is: function (e) {
            var t = new lr(e);
            return this.some(function (e) {
              return t.matches(e);
            });
          },
          some: function (e, t) {
            for (var n = 0; n < this.length; n++)
              if (t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this))
                return !0;
            return !1;
          },
          every: function (e, t) {
            for (var n = 0; n < this.length; n++)
              if (!(t ? e.apply(t, [this[n], n, this]) : e(this[n], n, this)))
                return !1;
            return !0;
          },
          same: function (e) {
            if (this === e) return !0;
            e = this.cy().collection(e);
            var t = this.length;
            return (
              t === e.length &&
              (1 === t
                ? this[0] === e[0]
                : this.every(function (t) {
                    return e.hasElementWithId(t.id());
                  }))
            );
          },
          anySame: function (e) {
            return (
              (e = this.cy().collection(e)),
              this.some(function (t) {
                return e.hasElementWithId(t.id());
              })
            );
          },
          allAreNeighbors: function (e) {
            e = this.cy().collection(e);
            var t = this.neighborhood();
            return e.every(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
          contains: function (e) {
            e = this.cy().collection(e);
            var t = this;
            return e.every(function (e) {
              return t.hasElementWithId(e.id());
            });
          },
        };
        (cr.allAreNeighbours = cr.allAreNeighbors),
          (cr.has = cr.contains),
          (cr.equal = cr.equals = cr.same);
        var dr,
          hr,
          pr = function (e, t) {
            return function (n, r, a, i) {
              var o,
                s = n,
                l = this;
              if (
                (null == s ? (o = "") : S(s) && 1 === s.length && (o = s.id()),
                1 === l.length && o)
              ) {
                var u = l[0]._private,
                  c = (u.traversalCache = u.traversalCache || {}),
                  d = (c[t] = c[t] || []),
                  h = ne(o);
                return d[h] || (d[h] = e.call(l, n, r, a, i));
              }
              return e.call(l, n, r, a, i);
            };
          },
          fr = {
            parent: function (e) {
              var t = [];
              if (1 === this.length) {
                var n = this[0]._private.parent;
                if (n) return n;
              }
              for (var r = 0; r < this.length; r++) {
                var a = this[r]._private.parent;
                a && t.push(a);
              }
              return this.spawn(t, !0).filter(e);
            },
            parents: function (e) {
              for (var t = [], n = this.parent(); n.nonempty(); ) {
                for (var r = 0; r < n.length; r++) {
                  var a = n[r];
                  t.push(a);
                }
                n = n.parent();
              }
              return this.spawn(t, !0).filter(e);
            },
            commonAncestors: function (e) {
              for (var t, n = 0; n < this.length; n++) {
                var r = this[n].parents();
                t = (t = t || r).intersect(r);
              }
              return t.filter(e);
            },
            orphans: function (e) {
              return this.stdFilter(function (e) {
                return e.isOrphan();
              }).filter(e);
            },
            nonorphans: function (e) {
              return this.stdFilter(function (e) {
                return e.isChild();
              }).filter(e);
            },
            children: pr(function (e) {
              for (var t = [], n = 0; n < this.length; n++)
                for (
                  var r = this[n]._private.children, a = 0;
                  a < r.length;
                  a++
                )
                  t.push(r[a]);
              return this.spawn(t, !0).filter(e);
            }, "children"),
            siblings: function (e) {
              return this.parent().children().not(this).filter(e);
            },
            isParent: function () {
              var e = this[0];
              if (e) return e.isNode() && 0 !== e._private.children.length;
            },
            isChildless: function () {
              var e = this[0];
              if (e) return e.isNode() && 0 === e._private.children.length;
            },
            isChild: function () {
              var e = this[0];
              if (e) return e.isNode() && null != e._private.parent;
            },
            isOrphan: function () {
              var e = this[0];
              if (e) return e.isNode() && null == e._private.parent;
            },
            descendants: function (e) {
              var t = [];
              return (
                (function e(n) {
                  for (var r = 0; r < n.length; r++) {
                    var a = n[r];
                    t.push(a), a.children().nonempty() && e(a.children());
                  }
                })(this.children()),
                this.spawn(t, !0).filter(e)
              );
            },
          };
        function gr(e, t, n, r) {
          for (
            var a = [], i = new Pe(), o = e.cy().hasCompoundNodes(), s = 0;
            s < e.length;
            s++
          ) {
            var l = e[s];
            n ? a.push(l) : o && r(a, i, l);
          }
          for (; a.length > 0; ) {
            var u = a.shift();
            t(u), i.add(u.id()), o && r(a, i, u);
          }
          return e;
        }
        function vr(e, t, n) {
          if (n.isParent())
            for (var r = n._private.children, a = 0; a < r.length; a++) {
              var i = r[a];
              t.has(i.id()) || e.push(i);
            }
        }
        function yr(e, t, n) {
          if (n.isChild()) {
            var r = n._private.parent;
            t.has(r.id()) || e.push(r);
          }
        }
        function mr(e, t, n) {
          yr(e, t, n), vr(e, t, n);
        }
        (fr.forEachDown = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return gr(this, e, t, vr);
        }),
          (fr.forEachUp = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return gr(this, e, t, yr);
          }),
          (fr.forEachUpAndDown = function (e) {
            var t =
              !(arguments.length > 1 && void 0 !== arguments[1]) ||
              arguments[1];
            return gr(this, e, t, mr);
          }),
          (fr.ancestors = fr.parents),
          ((dr = hr = {
            data: Wn.data({
              field: "data",
              bindingEvent: "data",
              allowBinding: !0,
              allowSetting: !0,
              settingEvent: "data",
              settingTriggersEvent: !0,
              triggerFnName: "trigger",
              allowGetting: !0,
              immutableKeys: { id: !0, source: !0, target: !0, parent: !0 },
              updateStyle: !0,
            }),
            removeData: Wn.removeData({
              field: "data",
              event: "data",
              triggerFnName: "trigger",
              triggerEvent: !0,
              immutableKeys: { id: !0, source: !0, target: !0, parent: !0 },
              updateStyle: !0,
            }),
            scratch: Wn.data({
              field: "scratch",
              bindingEvent: "scratch",
              allowBinding: !0,
              allowSetting: !0,
              settingEvent: "scratch",
              settingTriggersEvent: !0,
              triggerFnName: "trigger",
              allowGetting: !0,
              updateStyle: !0,
            }),
            removeScratch: Wn.removeData({
              field: "scratch",
              event: "scratch",
              triggerFnName: "trigger",
              triggerEvent: !0,
              updateStyle: !0,
            }),
            rscratch: Wn.data({
              field: "rscratch",
              allowBinding: !1,
              allowSetting: !0,
              settingTriggersEvent: !1,
              allowGetting: !0,
            }),
            removeRscratch: Wn.removeData({
              field: "rscratch",
              triggerEvent: !1,
            }),
            id: function () {
              var e = this[0];
              if (e) return e._private.data.id;
            },
          }).attr = dr.data),
          (dr.removeAttr = dr.removeData);
        var br,
          xr,
          wr = hr,
          Er = {};
        function kr(e) {
          return function (t) {
            var n = this;
            if (
              (void 0 === t && (t = !0),
              0 !== n.length && n.isNode() && !n.removed())
            ) {
              for (
                var r = 0, a = n[0], i = a._private.edges, o = 0;
                o < i.length;
                o++
              ) {
                var s = i[o];
                (!t && s.isLoop()) || (r += e(a, s));
              }
              return r;
            }
          };
        }
        function Cr(e, t) {
          return function (n) {
            for (var r, a = this.nodes(), i = 0; i < a.length; i++) {
              var o = a[i][e](n);
              void 0 === o || (void 0 !== r && !t(o, r)) || (r = o);
            }
            return r;
          };
        }
        V(Er, {
          degree: kr(function (e, t) {
            return t.source().same(t.target()) ? 2 : 1;
          }),
          indegree: kr(function (e, t) {
            return t.target().same(e) ? 1 : 0;
          }),
          outdegree: kr(function (e, t) {
            return t.source().same(e) ? 1 : 0;
          }),
        }),
          V(Er, {
            minDegree: Cr("degree", function (e, t) {
              return e < t;
            }),
            maxDegree: Cr("degree", function (e, t) {
              return e > t;
            }),
            minIndegree: Cr("indegree", function (e, t) {
              return e < t;
            }),
            maxIndegree: Cr("indegree", function (e, t) {
              return e > t;
            }),
            minOutdegree: Cr("outdegree", function (e, t) {
              return e < t;
            }),
            maxOutdegree: Cr("outdegree", function (e, t) {
              return e > t;
            }),
          }),
          V(Er, {
            totalDegree: function (e) {
              for (var t = 0, n = this.nodes(), r = 0; r < n.length; r++)
                t += n[r].degree(e);
              return t;
            },
          });
        var Sr = function (e, t, n) {
            for (var r = 0; r < e.length; r++) {
              var a = e[r];
              if (!a.locked()) {
                var i = a._private.position,
                  o = {
                    x: null != t.x ? t.x - i.x : 0,
                    y: null != t.y ? t.y - i.y : 0,
                  };
                !a.isParent() ||
                  (0 === o.x && 0 === o.y) ||
                  a.children().shift(o, n),
                  a.dirtyBoundingBoxCache();
              }
            }
          },
          Dr = {
            field: "position",
            bindingEvent: "position",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "position",
            settingTriggersEvent: !0,
            triggerFnName: "emitAndNotify",
            allowGetting: !0,
            validKeys: ["x", "y"],
            beforeGet: function (e) {
              e.updateCompoundBounds();
            },
            beforeSet: function (e, t) {
              Sr(e, t, !1);
            },
            onSet: function (e) {
              e.dirtyCompoundBoundsCache();
            },
            canSet: function (e) {
              return !e.locked();
            },
          };
        ((br = xr = {
          position: Wn.data(Dr),
          silentPosition: Wn.data(
            V({}, Dr, {
              allowBinding: !1,
              allowSetting: !0,
              settingTriggersEvent: !1,
              allowGetting: !1,
              beforeSet: function (e, t) {
                Sr(e, t, !0);
              },
              onSet: function (e) {
                e.dirtyCompoundBoundsCache();
              },
            })
          ),
          positions: function (e, t) {
            if (E(e)) t ? this.silentPosition(e) : this.position(e);
            else if (x(e)) {
              var n = e,
                r = this.cy();
              r.startBatch();
              for (var a = 0; a < this.length; a++) {
                var i,
                  o = this[a];
                (i = n(o, a)) && (t ? o.silentPosition(i) : o.position(i));
              }
              r.endBatch();
            }
            return this;
          },
          silentPositions: function (e) {
            return this.positions(e, !0);
          },
          shift: function (e, t, n) {
            var r;
            if (
              (E(e)
                ? ((r = { x: k(e.x) ? e.x : 0, y: k(e.y) ? e.y : 0 }), (n = t))
                : b(e) && k(t) && ((r = { x: 0, y: 0 })[e] = t),
              null != r)
            ) {
              var a = this.cy();
              a.startBatch();
              for (var i = 0; i < this.length; i++) {
                var o = this[i],
                  s = o.position(),
                  l = { x: s.x + r.x, y: s.y + r.y };
                n ? o.silentPosition(l) : o.position(l);
              }
              a.endBatch();
            }
            return this;
          },
          silentShift: function (e, t) {
            return (
              E(e) ? this.shift(e, !0) : b(e) && k(t) && this.shift(e, t, !0),
              this
            );
          },
          renderedPosition: function (e, t) {
            var n = this[0],
              r = this.cy(),
              a = r.zoom(),
              i = r.pan(),
              o = E(e) ? e : void 0,
              s = void 0 !== o || (void 0 !== t && b(e));
            if (n && n.isNode()) {
              if (!s) {
                var l = n.position();
                return (o = Ye(l, a, i)), void 0 === e ? o : o[e];
              }
              for (var u = 0; u < this.length; u++) {
                var c = this[u];
                void 0 !== t
                  ? c.position(e, (t - i[e]) / a)
                  : void 0 !== o && c.position(We(o, a, i));
              }
            } else if (!s) return;
            return this;
          },
          relativePosition: function (e, t) {
            var n = this[0],
              r = this.cy(),
              a = E(e) ? e : void 0,
              i = void 0 !== a || (void 0 !== t && b(e)),
              o = r.hasCompoundNodes();
            if (n && n.isNode()) {
              if (!i) {
                var s = n.position(),
                  l = o ? n.parent() : null,
                  u = l && l.length > 0,
                  c = u;
                u && (l = l[0]);
                var d = c ? l.position() : { x: 0, y: 0 };
                return (
                  (a = { x: s.x - d.x, y: s.y - d.y }), void 0 === e ? a : a[e]
                );
              }
              for (var h = 0; h < this.length; h++) {
                var p = this[h],
                  f = o ? p.parent() : null,
                  g = f && f.length > 0,
                  v = g;
                g && (f = f[0]);
                var y = v ? f.position() : { x: 0, y: 0 };
                void 0 !== t
                  ? p.position(e, t + y[e])
                  : void 0 !== a && p.position({ x: a.x + y.x, y: a.y + y.y });
              }
            } else if (!i) return;
            return this;
          },
        }).modelPosition = br.point = br.position),
          (br.modelPositions = br.points = br.positions),
          (br.renderedPoint = br.renderedPosition),
          (br.relativePoint = br.relativePosition);
        var Pr,
          Tr,
          Mr = xr;
        (Pr = Tr = {}),
          (Tr.renderedBoundingBox = function (e) {
            var t = this.boundingBox(e),
              n = this.cy(),
              r = n.zoom(),
              a = n.pan(),
              i = t.x1 * r + a.x,
              o = t.x2 * r + a.x,
              s = t.y1 * r + a.y,
              l = t.y2 * r + a.y;
            return { x1: i, x2: o, y1: s, y2: l, w: o - i, h: l - s };
          }),
          (Tr.dirtyCompoundBoundsCache = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = this.cy();
            return t.styleEnabled() && t.hasCompoundNodes()
              ? (this.forEachUp(function (t) {
                  if (t.isParent()) {
                    var n = t._private;
                    (n.compoundBoundsClean = !1),
                      (n.bbCache = null),
                      e || t.emitAndNotify("bounds");
                  }
                }),
                this)
              : this;
          }),
          (Tr.updateCompoundBounds = function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              t = this.cy();
            if (!t.styleEnabled() || !t.hasCompoundNodes()) return this;
            if (!e && t.batching()) return this;
            function n(e) {
              if (e.isParent()) {
                var t = e._private,
                  n = e.children(),
                  r =
                    "include" === e.pstyle("compound-sizing-wrt-labels").value,
                  a = {
                    width: {
                      val: e.pstyle("min-width").pfValue,
                      left: e.pstyle("min-width-bias-left"),
                      right: e.pstyle("min-width-bias-right"),
                    },
                    height: {
                      val: e.pstyle("min-height").pfValue,
                      top: e.pstyle("min-height-bias-top"),
                      bottom: e.pstyle("min-height-bias-bottom"),
                    },
                  },
                  i = n.boundingBox({
                    includeLabels: r,
                    includeOverlays: !1,
                    useCache: !1,
                  }),
                  o = t.position;
                (0 !== i.w && 0 !== i.h) ||
                  (((i = {
                    w: e.pstyle("width").pfValue,
                    h: e.pstyle("height").pfValue,
                  }).x1 = o.x - i.w / 2),
                  (i.x2 = o.x + i.w / 2),
                  (i.y1 = o.y - i.h / 2),
                  (i.y2 = o.y + i.h / 2));
                var s = a.width.left.value;
                "px" === a.width.left.units &&
                  a.width.val > 0 &&
                  (s = (100 * s) / a.width.val);
                var l = a.width.right.value;
                "px" === a.width.right.units &&
                  a.width.val > 0 &&
                  (l = (100 * l) / a.width.val);
                var u = a.height.top.value;
                "px" === a.height.top.units &&
                  a.height.val > 0 &&
                  (u = (100 * u) / a.height.val);
                var c = a.height.bottom.value;
                "px" === a.height.bottom.units &&
                  a.height.val > 0 &&
                  (c = (100 * c) / a.height.val);
                var d = y(a.width.val - i.w, s, l),
                  h = d.biasDiff,
                  p = d.biasComplementDiff,
                  f = y(a.height.val - i.h, u, c),
                  g = f.biasDiff,
                  v = f.biasComplementDiff;
                (t.autoPadding = (function (e, t, n, r) {
                  if ("%" !== n.units) return "px" === n.units ? n.pfValue : 0;
                  switch (r) {
                    case "width":
                      return e > 0 ? n.pfValue * e : 0;
                    case "height":
                      return t > 0 ? n.pfValue * t : 0;
                    case "average":
                      return e > 0 && t > 0 ? (n.pfValue * (e + t)) / 2 : 0;
                    case "min":
                      return e > 0 && t > 0
                        ? e > t
                          ? n.pfValue * t
                          : n.pfValue * e
                        : 0;
                    case "max":
                      return e > 0 && t > 0
                        ? e > t
                          ? n.pfValue * e
                          : n.pfValue * t
                        : 0;
                    default:
                      return 0;
                  }
                })(
                  i.w,
                  i.h,
                  e.pstyle("padding"),
                  e.pstyle("padding-relative-to").value
                )),
                  (t.autoWidth = Math.max(i.w, a.width.val)),
                  (o.x = (-h + i.x1 + i.x2 + p) / 2),
                  (t.autoHeight = Math.max(i.h, a.height.val)),
                  (o.y = (-g + i.y1 + i.y2 + v) / 2);
              }
              function y(e, t, n) {
                var r = 0,
                  a = 0,
                  i = t + n;
                return (
                  e > 0 && i > 0 && ((r = (t / i) * e), (a = (n / i) * e)),
                  { biasDiff: r, biasComplementDiff: a }
                );
              }
            }
            for (var r = 0; r < this.length; r++) {
              var a = this[r],
                i = a._private;
              (i.compoundBoundsClean && !e) ||
                (n(a), t.batching() || (i.compoundBoundsClean = !0));
            }
            return this;
          });
        var Br = function (e) {
            return e === 1 / 0 || e === -1 / 0 ? 0 : e;
          },
          _r = function (e, t, n, r, a) {
            r - t != 0 &&
              a - n != 0 &&
              null != t &&
              null != n &&
              null != r &&
              null != a &&
              ((e.x1 = t < e.x1 ? t : e.x1),
              (e.x2 = r > e.x2 ? r : e.x2),
              (e.y1 = n < e.y1 ? n : e.y1),
              (e.y2 = a > e.y2 ? a : e.y2),
              (e.w = e.x2 - e.x1),
              (e.h = e.y2 - e.y1));
          },
          Nr = function (e, t) {
            return null == t ? e : _r(e, t.x1, t.y1, t.x2, t.y2);
          },
          Ir = function (e, t, n) {
            return ke(e, t, n);
          },
          Lr = function (e, t, n) {
            if (!t.cy().headless()) {
              var r,
                a,
                i = t._private,
                o = i.rstyle,
                s = o.arrowWidth / 2;
              if ("none" !== t.pstyle(n + "-arrow-shape").value) {
                "source" === n
                  ? ((r = o.srcX), (a = o.srcY))
                  : "target" === n
                  ? ((r = o.tgtX), (a = o.tgtY))
                  : ((r = o.midX), (a = o.midY));
                var l = (i.arrowBounds = i.arrowBounds || {}),
                  u = (l[n] = l[n] || {});
                (u.x1 = r - s),
                  (u.y1 = a - s),
                  (u.x2 = r + s),
                  (u.y2 = a + s),
                  (u.w = u.x2 - u.x1),
                  (u.h = u.y2 - u.y1),
                  at(u, 1),
                  _r(e, u.x1, u.y1, u.x2, u.y2);
              }
            }
          },
          zr = function (e, t, n) {
            if (!t.cy().headless()) {
              var r;
              r = n ? n + "-" : "";
              var a = t._private,
                i = a.rstyle;
              if (t.pstyle(r + "label").strValue) {
                var o,
                  s,
                  l,
                  u,
                  c = t.pstyle("text-halign"),
                  d = t.pstyle("text-valign"),
                  h = Ir(i, "labelWidth", n),
                  p = Ir(i, "labelHeight", n),
                  f = Ir(i, "labelX", n),
                  g = Ir(i, "labelY", n),
                  v = t.pstyle(r + "text-margin-x").pfValue,
                  y = t.pstyle(r + "text-margin-y").pfValue,
                  m = t.isEdge(),
                  b = t.pstyle(r + "text-rotation"),
                  x = t.pstyle("text-outline-width").pfValue,
                  w = t.pstyle("text-border-width").pfValue / 2,
                  E = t.pstyle("text-background-padding").pfValue,
                  k = p,
                  C = h,
                  S = C / 2,
                  D = k / 2;
                if (m) (o = f - S), (s = f + S), (l = g - D), (u = g + D);
                else {
                  switch (c.value) {
                    case "left":
                      (o = f - C), (s = f);
                      break;
                    case "center":
                      (o = f - S), (s = f + S);
                      break;
                    case "right":
                      (o = f), (s = f + C);
                  }
                  switch (d.value) {
                    case "top":
                      (l = g - k), (u = g);
                      break;
                    case "center":
                      (l = g - D), (u = g + D);
                      break;
                    case "bottom":
                      (l = g), (u = g + k);
                  }
                }
                (o += v - Math.max(x, w) - E - 2),
                  (s += v + Math.max(x, w) + E + 2),
                  (l += y - Math.max(x, w) - E - 2),
                  (u += y + Math.max(x, w) + E + 2);
                var P = n || "main",
                  T = a.labelBounds,
                  M = (T[P] = T[P] || {});
                (M.x1 = o),
                  (M.y1 = l),
                  (M.x2 = s),
                  (M.y2 = u),
                  (M.w = s - o),
                  (M.h = u - l);
                var B = m && "autorotate" === b.strValue,
                  _ = null != b.pfValue && 0 !== b.pfValue;
                if (B || _) {
                  var N = B ? Ir(a.rstyle, "labelAngle", n) : b.pfValue,
                    I = Math.cos(N),
                    L = Math.sin(N),
                    z = (o + s) / 2,
                    A = (l + u) / 2;
                  if (!m) {
                    switch (c.value) {
                      case "left":
                        z = s;
                        break;
                      case "right":
                        z = o;
                    }
                    switch (d.value) {
                      case "top":
                        A = u;
                        break;
                      case "bottom":
                        A = l;
                    }
                  }
                  var O = function (e, t) {
                      return {
                        x: (e -= z) * I - (t -= A) * L + z,
                        y: e * L + t * I + A,
                      };
                    },
                    R = O(o, l),
                    V = O(o, u),
                    F = O(s, l),
                    j = O(s, u);
                  (o = Math.min(R.x, V.x, F.x, j.x)),
                    (s = Math.max(R.x, V.x, F.x, j.x)),
                    (l = Math.min(R.y, V.y, F.y, j.y)),
                    (u = Math.max(R.y, V.y, F.y, j.y));
                }
                var q = P + "Rot",
                  X = (T[q] = T[q] || {});
                (X.x1 = o),
                  (X.y1 = l),
                  (X.x2 = s),
                  (X.y2 = u),
                  (X.w = s - o),
                  (X.h = u - l),
                  _r(e, o, l, s, u),
                  _r(a.labelBounds.all, o, l, s, u);
              }
              return e;
            }
          },
          Ar = function (e) {
            var t = 0,
              n = function (e) {
                return (e ? 1 : 0) << t++;
              },
              r = 0;
            return (
              (r += n(e.incudeNodes)),
              (r += n(e.includeEdges)),
              (r += n(e.includeLabels)),
              (r += n(e.includeMainLabels)),
              (r += n(e.includeSourceLabels)),
              (r += n(e.includeTargetLabels)) + n(e.includeOverlays)
            );
          },
          Or = function (e) {
            if (e.isEdge()) {
              var t = e.source().position(),
                n = e.target().position(),
                r = function (e) {
                  return Math.round(e);
                };
              return (function (e, t) {
                var n = { value: 0, done: !1 },
                  r = 0,
                  a = e.length;
                return Z(
                  {
                    next: function () {
                      return r < a ? (n.value = e[r++]) : (n.done = !0), n;
                    },
                  },
                  void 0
                );
              })([r(t.x), r(t.y), r(n.x), r(n.y)]);
            }
            return 0;
          },
          Rr = function (e, t) {
            var n,
              r = e._private,
              a = e.isEdge(),
              i = (null == t ? Fr : Ar(t)) === Fr,
              o = Or(e),
              s = r.bbCachePosKey === o,
              l = t.useCache && s,
              u = function (e) {
                return null == e._private.bbCache || e._private.styleDirty;
              };
            if (
              (!l || u(e) || (a && u(e.source())) || u(e.target())
                ? (s || e.recalculateRenderedStyle(l),
                  (n = (function (e, t) {
                    var n,
                      r,
                      a,
                      i,
                      o,
                      s,
                      l,
                      u = e._private.cy,
                      c = u.styleEnabled(),
                      d = u.headless(),
                      h = nt(),
                      p = e._private,
                      f = e.isNode(),
                      g = e.isEdge(),
                      v = p.rstyle,
                      y = f && c ? e.pstyle("bounds-expansion").pfValue : [0],
                      m = function (e) {
                        return "none" !== e.pstyle("display").value;
                      },
                      b =
                        !c ||
                        (m(e) && (!g || (m(e.source()) && m(e.target()))));
                    if (b) {
                      var x = 0;
                      c &&
                        t.includeOverlays &&
                        0 !== e.pstyle("overlay-opacity").value &&
                        (x = e.pstyle("overlay-padding").value);
                      var w = 0;
                      if (
                        (c && (w = e.pstyle("width").pfValue / 2),
                        f && t.includeNodes)
                      ) {
                        var E = e.position();
                        (o = E.x), (s = E.y);
                        var k = e.outerWidth() / 2,
                          C = e.outerHeight() / 2;
                        _r(
                          h,
                          (n = o - k),
                          (a = s - C),
                          (r = o + k),
                          (i = s + C)
                        );
                      } else if (g && t.includeEdges)
                        if (c && !d) {
                          var S = e.pstyle("curve-style").strValue;
                          if (
                            ((n = Math.min(v.srcX, v.midX, v.tgtX)),
                            (r = Math.max(v.srcX, v.midX, v.tgtX)),
                            (a = Math.min(v.srcY, v.midY, v.tgtY)),
                            (i = Math.max(v.srcY, v.midY, v.tgtY)),
                            _r(h, (n -= w), (a -= w), (r += w), (i += w)),
                            "haystack" === S)
                          ) {
                            var D = v.haystackPts;
                            if (D && 2 === D.length) {
                              if (
                                ((n = D[0].x), (a = D[0].y), n > (r = D[1].x))
                              ) {
                                var P = n;
                                (n = r), (r = P);
                              }
                              if (a > (i = D[1].y)) {
                                var T = a;
                                (a = i), (i = T);
                              }
                              _r(h, n - w, a - w, r + w, i + w);
                            }
                          } else if (
                            "bezier" === S ||
                            "unbundled-bezier" === S ||
                            "segments" === S ||
                            "taxi" === S
                          ) {
                            var M;
                            switch (S) {
                              case "bezier":
                              case "unbundled-bezier":
                                M = v.bezierPts;
                                break;
                              case "segments":
                              case "taxi":
                                M = v.linePts;
                            }
                            if (null != M)
                              for (var B = 0; B < M.length; B++) {
                                var _ = M[B];
                                (n = _.x - w),
                                  (r = _.x + w),
                                  (a = _.y - w),
                                  (i = _.y + w),
                                  _r(h, n, a, r, i);
                              }
                          }
                        } else {
                          var N = e.source().position(),
                            I = e.target().position();
                          if ((n = N.x) > (r = I.x)) {
                            var L = n;
                            (n = r), (r = L);
                          }
                          if ((a = N.y) > (i = I.y)) {
                            var z = a;
                            (a = i), (i = z);
                          }
                          _r(h, (n -= w), (a -= w), (r += w), (i += w));
                        }
                      if (
                        (c &&
                          t.includeEdges &&
                          g &&
                          (Lr(h, e, "mid-source"),
                          Lr(h, e, "mid-target"),
                          Lr(h, e, "source"),
                          Lr(h, e, "target")),
                        c && "yes" === e.pstyle("ghost").value)
                      ) {
                        var A = e.pstyle("ghost-offset-x").pfValue,
                          O = e.pstyle("ghost-offset-y").pfValue;
                        _r(h, h.x1 + A, h.y1 + O, h.x2 + A, h.y2 + O);
                      }
                      var R = (p.bodyBounds = p.bodyBounds || {});
                      ot(R, h),
                        it(R, y),
                        at(R, 1),
                        c &&
                          ((n = h.x1),
                          (r = h.x2),
                          (a = h.y1),
                          (i = h.y2),
                          _r(h, n - x, a - x, r + x, i + x));
                      var V = (p.overlayBounds = p.overlayBounds || {});
                      ot(V, h), it(V, y), at(V, 1);
                      var F = (p.labelBounds = p.labelBounds || {});
                      null != F.all
                        ? (((l = F.all).x1 = 1 / 0),
                          (l.y1 = 1 / 0),
                          (l.x2 = -1 / 0),
                          (l.y2 = -1 / 0),
                          (l.w = 0),
                          (l.h = 0))
                        : (F.all = nt()),
                        c &&
                          t.includeLabels &&
                          (t.includeMainLabels && zr(h, e, null),
                          g &&
                            (t.includeSourceLabels && zr(h, e, "source"),
                            t.includeTargetLabels && zr(h, e, "target")));
                    }
                    return (
                      (h.x1 = Br(h.x1)),
                      (h.y1 = Br(h.y1)),
                      (h.x2 = Br(h.x2)),
                      (h.y2 = Br(h.y2)),
                      (h.w = Br(h.x2 - h.x1)),
                      (h.h = Br(h.y2 - h.y1)),
                      h.w > 0 && h.h > 0 && b && (it(h, y), at(h, 1)),
                      h
                    );
                  })(e, Vr)),
                  (r.bbCache = n),
                  (r.bbCachePosKey = o))
                : (n = r.bbCache),
              !i)
            ) {
              var c = e.isNode();
              (n = nt()),
                ((t.includeNodes && c) || (t.includeEdges && !c)) &&
                  (t.includeOverlays
                    ? Nr(n, r.overlayBounds)
                    : Nr(n, r.bodyBounds)),
                t.includeLabels &&
                  (t.includeMainLabels &&
                  (!a || (t.includeSourceLabels && t.includeTargetLabels))
                    ? Nr(n, r.labelBounds.all)
                    : (t.includeMainLabels && Nr(n, r.labelBounds.mainRot),
                      t.includeSourceLabels && Nr(n, r.labelBounds.sourceRot),
                      t.includeTargetLabels && Nr(n, r.labelBounds.targetRot))),
                (n.w = n.x2 - n.x1),
                (n.h = n.y2 - n.y1);
            }
            return n;
          },
          Vr = {
            includeNodes: !0,
            includeEdges: !0,
            includeLabels: !0,
            includeMainLabels: !0,
            includeSourceLabels: !0,
            includeTargetLabels: !0,
            includeOverlays: !0,
            useCache: !0,
          },
          Fr = Ar(Vr),
          jr = xe(Vr);
        (Tr.boundingBox = function (e) {
          var t;
          if (
            1 !== this.length ||
            null == this[0]._private.bbCache ||
            this[0]._private.styleDirty ||
            (void 0 !== e && void 0 !== e.useCache && !0 !== e.useCache)
          ) {
            t = nt();
            var n = jr((e = e || Vr)),
              r = this;
            if (r.cy().styleEnabled())
              for (var a = 0; a < r.length; a++) {
                var i = r[a],
                  o = i._private,
                  s = Or(i),
                  l = o.bbCachePosKey === s,
                  u = n.useCache && l && !o.styleDirty;
                i.recalculateRenderedStyle(u);
              }
            this.updateCompoundBounds(!e.useCache);
            for (var c = 0; c < r.length; c++) {
              var d = r[c];
              Nr(t, Rr(d, n));
            }
          } else (e = void 0 === e ? Vr : jr(e)), (t = Rr(this[0], e));
          return (
            (t.x1 = Br(t.x1)),
            (t.y1 = Br(t.y1)),
            (t.x2 = Br(t.x2)),
            (t.y2 = Br(t.y2)),
            (t.w = Br(t.x2 - t.x1)),
            (t.h = Br(t.y2 - t.y1)),
            t
          );
        }),
          (Tr.dirtyBoundingBoxCache = function () {
            for (var e = 0; e < this.length; e++) {
              var t = this[e]._private;
              (t.bbCache = null),
                (t.bbCachePosKey = null),
                (t.bodyBounds = null),
                (t.overlayBounds = null),
                (t.labelBounds.all = null),
                (t.labelBounds.source = null),
                (t.labelBounds.target = null),
                (t.labelBounds.main = null),
                (t.labelBounds.sourceRot = null),
                (t.labelBounds.targetRot = null),
                (t.labelBounds.mainRot = null),
                (t.arrowBounds.source = null),
                (t.arrowBounds.target = null),
                (t.arrowBounds["mid-source"] = null),
                (t.arrowBounds["mid-target"] = null);
            }
            return this.emitAndNotify("bounds"), this;
          }),
          (Tr.boundingBoxAt = function (e) {
            var t = this.nodes(),
              n = this.cy(),
              r = n.hasCompoundNodes(),
              a = n.collection();
            if (
              (r &&
                ((a = t.filter(function (e) {
                  return e.isParent();
                })),
                (t = t.not(a))),
              E(e))
            ) {
              var i = e;
              e = function () {
                return i;
              };
            }
            n.startBatch(),
              t
                .forEach(function (t, n) {
                  return (t._private.bbAtOldPos = e(t, n));
                })
                .silentPositions(e),
              r &&
                (a.dirtyCompoundBoundsCache(),
                a.dirtyBoundingBoxCache(),
                a.updateCompoundBounds(!0));
            var o = (function (e) {
              return { x1: e.x1, x2: e.x2, w: e.w, y1: e.y1, y2: e.y2, h: e.h };
            })(this.boundingBox({ useCache: !1 }));
            return (
              t.silentPositions(function (e) {
                return e._private.bbAtOldPos;
              }),
              r &&
                (a.dirtyCompoundBoundsCache(),
                a.dirtyBoundingBoxCache(),
                a.updateCompoundBounds(!0)),
              n.endBatch(),
              o
            );
          }),
          (Pr.boundingbox = Pr.bb = Pr.boundingBox),
          (Pr.renderedBoundingbox = Pr.renderedBoundingBox);
        var qr,
          Xr,
          Yr = Tr;
        qr = Xr = {};
        var Wr = function (e) {
          (e.uppercaseName = A(e.name)),
            (e.autoName = "auto" + e.uppercaseName),
            (e.labelName = "label" + e.uppercaseName),
            (e.outerName = "outer" + e.uppercaseName),
            (e.uppercaseOuterName = A(e.outerName)),
            (qr[e.name] = function () {
              var t = this[0],
                n = t._private,
                r = n.cy._private.styleEnabled;
              if (t) {
                if (!r) return 1;
                if (t.isParent())
                  return t.updateCompoundBounds(), n[e.autoName] || 0;
                var a = t.pstyle(e.name);
                switch (a.strValue) {
                  case "label":
                    return (
                      t.recalculateRenderedStyle(), n.rstyle[e.labelName] || 0
                    );
                  default:
                    return a.pfValue;
                }
              }
            }),
            (qr["outer" + e.uppercaseName] = function () {
              var t = this[0],
                n = t._private.cy._private.styleEnabled;
              if (t)
                return n
                  ? t[e.name]() +
                      t.pstyle("border-width").pfValue +
                      2 * t.padding()
                  : 1;
            }),
            (qr["rendered" + e.uppercaseName] = function () {
              var t = this[0];
              if (t) return t[e.name]() * this.cy().zoom();
            }),
            (qr["rendered" + e.uppercaseOuterName] = function () {
              var t = this[0];
              if (t) return t[e.outerName]() * this.cy().zoom();
            });
        };
        Wr({ name: "width" }),
          Wr({ name: "height" }),
          (Xr.padding = function () {
            var e = this[0],
              t = e._private;
            return e.isParent()
              ? (e.updateCompoundBounds(),
                void 0 !== t.autoPadding
                  ? t.autoPadding
                  : e.pstyle("padding").pfValue)
              : e.pstyle("padding").pfValue;
          }),
          (Xr.paddedHeight = function () {
            var e = this[0];
            return e.height() + 2 * e.padding();
          }),
          (Xr.paddedWidth = function () {
            var e = this[0];
            return e.width() + 2 * e.padding();
          });
        var Hr = Xr,
          $r = {
            controlPoints: {
              get: function (e) {
                return e.renderer().getControlPoints(e);
              },
              mult: !0,
            },
            segmentPoints: {
              get: function (e) {
                return e.renderer().getSegmentPoints(e);
              },
              mult: !0,
            },
            sourceEndpoint: {
              get: function (e) {
                return e.renderer().getSourceEndpoint(e);
              },
            },
            targetEndpoint: {
              get: function (e) {
                return e.renderer().getTargetEndpoint(e);
              },
            },
            midpoint: {
              get: function (e) {
                return e.renderer().getEdgeMidpoint(e);
              },
            },
          },
          Kr = Object.keys($r).reduce(function (e, t) {
            var n = $r[t],
              r = (function (e) {
                return "rendered" + e[0].toUpperCase() + e.substr(1);
              })(t);
            return (
              (e[t] = function () {
                return (function (e, t) {
                  if (e.isEdge()) return t(e);
                })(this, n.get);
              }),
              n.mult
                ? (e[r] = function () {
                    return (function (e, t) {
                      if (e.isEdge()) {
                        var n = e.cy(),
                          r = n.pan(),
                          a = n.zoom();
                        return t(e).map(function (e) {
                          return Ye(e, a, r);
                        });
                      }
                    })(this, n.get);
                  })
                : (e[r] = function () {
                    return (function (e, t) {
                      if (e.isEdge()) {
                        var n = e.cy();
                        return Ye(t(e), n.zoom(), n.pan());
                      }
                    })(this, n.get);
                  }),
              e
            );
          }, {}),
          Gr = V({}, Mr, Yr, Hr, Kr),
          Ur = function (e, t) {
            this.recycle(e, t);
          };
        function Zr() {
          return !1;
        }
        function Qr() {
          return !0;
        }
        Ur.prototype = {
          instanceString: function () {
            return "event";
          },
          recycle: function (e, t) {
            if (
              ((this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Zr),
              null != e && e.preventDefault
                ? ((this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented ? Qr : Zr))
                : null != e && e.type
                ? (t = e)
                : (this.type = e),
              null != t &&
                ((this.originalEvent = t.originalEvent),
                (this.type = null != t.type ? t.type : this.type),
                (this.cy = t.cy),
                (this.target = t.target),
                (this.position = t.position),
                (this.renderedPosition = t.renderedPosition),
                (this.namespace = t.namespace),
                (this.layout = t.layout)),
              null != this.cy &&
                null != this.position &&
                null == this.renderedPosition)
            ) {
              var n = this.position,
                r = this.cy.zoom(),
                a = this.cy.pan();
              this.renderedPosition = { x: n.x * r + a.x, y: n.y * r + a.y };
            }
            this.timeStamp = (e && e.timeStamp) || Date.now();
          },
          preventDefault: function () {
            this.isDefaultPrevented = Qr;
            var e = this.originalEvent;
            e && e.preventDefault && e.preventDefault();
          },
          stopPropagation: function () {
            this.isPropagationStopped = Qr;
            var e = this.originalEvent;
            e && e.stopPropagation && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            (this.isImmediatePropagationStopped = Qr), this.stopPropagation();
          },
          isDefaultPrevented: Zr,
          isPropagationStopped: Zr,
          isImmediatePropagationStopped: Zr,
        };
        var Jr = /^([^.]+)(\.(?:[^.]+))?$/,
          ea = {
            qualifierCompare: function (e, t) {
              return e === t;
            },
            eventMatches: function () {
              return !0;
            },
            addEventFields: function () {},
            callbackContext: function (e) {
              return e;
            },
            beforeEmit: function () {},
            afterEmit: function () {},
            bubble: function () {
              return !1;
            },
            parent: function () {
              return null;
            },
            context: null,
          },
          ta = Object.keys(ea),
          na = {};
        function ra() {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : na,
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = 0;
            n < ta.length;
            n++
          ) {
            var r = ta[n];
            this[r] = e[r] || ea[r];
          }
          (this.context = t || this.context),
            (this.listeners = []),
            (this.emitting = 0);
        }
        var aa = ra.prototype,
          ia = function (e, t, n, r, a, i, o) {
            x(r) && ((a = r), (r = null)),
              o && (i = null == i ? o : V({}, i, o));
            for (var s = w(n) ? n : n.split(/\s+/), l = 0; l < s.length; l++) {
              var u = s[l];
              if (!B(u)) {
                var c = u.match(Jr);
                if (c && !1 === t(e, u, c[1], c[2] ? c[2] : null, r, a, i))
                  break;
              }
            }
          },
          oa = function (e, t) {
            return e.addEventFields(e.context, t), new Ur(t.type, t);
          };
        (aa.on = aa.addListener = function (e, t, n, r, a) {
          return (
            ia(
              this,
              function (e, t, n, r, a, i, o) {
                x(i) &&
                  e.listeners.push({
                    event: t,
                    callback: i,
                    type: n,
                    namespace: r,
                    qualifier: a,
                    conf: o,
                  });
              },
              e,
              t,
              n,
              r,
              a
            ),
            this
          );
        }),
          (aa.one = function (e, t, n, r) {
            return this.on(e, t, n, r, { one: !0 });
          }),
          (aa.removeListener = aa.off = function (e, t, n, r) {
            var a = this;
            0 !== this.emitting && (this.listeners = this.listeners.slice());
            for (
              var i = this.listeners,
                o = function (o) {
                  var s = i[o];
                  ia(
                    a,
                    function (t, n, r, a, l, u) {
                      if (
                        (s.type === r || "*" === e) &&
                        ((!a && ".*" !== s.namespace) || s.namespace === a) &&
                        (!l || t.qualifierCompare(s.qualifier, l)) &&
                        (!u || s.callback === u)
                      )
                        return i.splice(o, 1), !1;
                    },
                    e,
                    t,
                    n,
                    r
                  );
                },
                s = i.length - 1;
              s >= 0;
              s--
            )
              o(s);
            return this;
          }),
          (aa.removeAllListeners = function () {
            return this.removeListener("*");
          }),
          (aa.emit = aa.trigger = function (e, t, n) {
            var r = this.listeners,
              a = r.length;
            return (
              this.emitting++,
              w(t) || (t = [t]),
              (function (e, t, n) {
                if ("event" !== m(n))
                  if (E(n)) t(e, oa(e, n));
                  else
                    for (
                      var r = w(n) ? n : n.split(/\s+/), a = 0;
                      a < r.length;
                      a++
                    ) {
                      var i = r[a];
                      if (!B(i)) {
                        var o = i.match(Jr);
                        if (o) {
                          var s = o[1],
                            l = o[2] ? o[2] : null;
                          t(
                            e,
                            oa(e, { type: s, namespace: l, target: e.context })
                          );
                        }
                      }
                    }
                else t(e, n);
              })(
                this,
                function (e, i) {
                  null != n &&
                    ((r = [
                      {
                        event: i.event,
                        type: i.type,
                        namespace: i.namespace,
                        callback: n,
                      },
                    ]),
                    (a = r.length));
                  for (
                    var o = function (n) {
                        var a = r[n];
                        if (
                          a.type === i.type &&
                          (!a.namespace ||
                            a.namespace === i.namespace ||
                            ".*" === a.namespace) &&
                          e.eventMatches(e.context, a, i)
                        ) {
                          var o = [i];
                          null != t &&
                            (function (e, t) {
                              for (var n = 0; n < t.length; n++) {
                                var r = t[n];
                                e.push(r);
                              }
                            })(o, t),
                            e.beforeEmit(e.context, a, i),
                            a.conf &&
                              a.conf.one &&
                              (e.listeners = e.listeners.filter(function (e) {
                                return e !== a;
                              }));
                          var s = e.callbackContext(e.context, a, i),
                            l = a.callback.apply(s, o);
                          e.afterEmit(e.context, a, i),
                            !1 === l &&
                              (i.stopPropagation(), i.preventDefault());
                        }
                      },
                      s = 0;
                    s < a;
                    s++
                  )
                    o(s);
                  e.bubble(e.context) &&
                    !i.isPropagationStopped() &&
                    e.parent(e.context).emit(i, t);
                },
                e
              ),
              this.emitting--,
              this
            );
          });
        var sa = {
            qualifierCompare: function (e, t) {
              return null == e || null == t
                ? null == e && null == t
                : e.sameText(t);
            },
            eventMatches: function (e, t, n) {
              var r = t.qualifier;
              return (
                null == r ||
                (e !== n.target && D(n.target) && r.matches(n.target))
              );
            },
            addEventFields: function (e, t) {
              (t.cy = e.cy()), (t.target = e);
            },
            callbackContext: function (e, t, n) {
              return null != t.qualifier ? n.target : e;
            },
            beforeEmit: function (e, t) {
              t.conf &&
                t.conf.once &&
                t.conf.onceCollection.removeListener(
                  t.event,
                  t.qualifier,
                  t.callback
                );
            },
            bubble: function () {
              return !0;
            },
            parent: function (e) {
              return e.isChild() ? e.parent() : e.cy();
            },
          },
          la = function (e) {
            return b(e) ? new lr(e) : e;
          },
          ua = {
            createEmitter: function () {
              for (var e = 0; e < this.length; e++) {
                var t = this[e],
                  n = t._private;
                n.emitter || (n.emitter = new ra(sa, t));
              }
              return this;
            },
            emitter: function () {
              return this._private.emitter;
            },
            on: function (e, t, n) {
              for (var r = la(t), a = 0; a < this.length; a++)
                this[a].emitter().on(e, r, n);
              return this;
            },
            removeListener: function (e, t, n) {
              for (var r = la(t), a = 0; a < this.length; a++)
                this[a].emitter().removeListener(e, r, n);
              return this;
            },
            removeAllListeners: function () {
              for (var e = 0; e < this.length; e++)
                this[e].emitter().removeAllListeners();
              return this;
            },
            one: function (e, t, n) {
              for (var r = la(t), a = 0; a < this.length; a++)
                this[a].emitter().one(e, r, n);
              return this;
            },
            once: function (e, t, n) {
              for (var r = la(t), a = 0; a < this.length; a++)
                this[a]
                  .emitter()
                  .on(e, r, n, { once: !0, onceCollection: this });
            },
            emit: function (e, t) {
              for (var n = 0; n < this.length; n++)
                this[n].emitter().emit(e, t);
              return this;
            },
            emitAndNotify: function (e, t) {
              if (0 !== this.length)
                return this.cy().notify(e, this), this.emit(e, t), this;
            },
          };
        Wn.eventAliasesOn(ua);
        var ca = {
            nodes: function (e) {
              return this.filter(function (e) {
                return e.isNode();
              }).filter(e);
            },
            edges: function (e) {
              return this.filter(function (e) {
                return e.isEdge();
              }).filter(e);
            },
            byGroup: function () {
              for (
                var e = this.spawn(), t = this.spawn(), n = 0;
                n < this.length;
                n++
              ) {
                var r = this[n];
                r.isNode() ? e.push(r) : t.push(r);
              }
              return { nodes: e, edges: t };
            },
            filter: function (e, t) {
              if (void 0 === e) return this;
              if (b(e) || S(e)) return new lr(e).filter(this);
              if (x(e)) {
                for (var n = this.spawn(), r = this, a = 0; a < r.length; a++) {
                  var i = r[a];
                  (t ? e.apply(t, [i, a, r]) : e(i, a, r)) && n.push(i);
                }
                return n;
              }
              return this.spawn();
            },
            not: function (e) {
              if (e) {
                b(e) && (e = this.filter(e));
                for (var t = this.spawn(), n = 0; n < this.length; n++) {
                  var r = this[n];
                  e.has(r) || t.push(r);
                }
                return t;
              }
              return this;
            },
            absoluteComplement: function () {
              return this.cy().mutableElements().not(this);
            },
            intersect: function (e) {
              if (b(e)) {
                var t = e;
                return this.filter(t);
              }
              for (
                var n = this.spawn(),
                  r = e,
                  a = this.length < e.length,
                  i = a ? this : r,
                  o = a ? r : this,
                  s = 0;
                s < i.length;
                s++
              ) {
                var l = i[s];
                o.has(l) && n.push(l);
              }
              return n;
            },
            xor: function (e) {
              var t = this._private.cy;
              b(e) && (e = t.$(e));
              var n = this.spawn(),
                r = e,
                a = function (e, t) {
                  for (var r = 0; r < e.length; r++) {
                    var a = e[r],
                      i = a._private.data.id;
                    t.hasElementWithId(i) || n.push(a);
                  }
                };
              return a(this, r), a(r, this), n;
            },
            diff: function (e) {
              var t = this._private.cy;
              b(e) && (e = t.$(e));
              var n = this.spawn(),
                r = this.spawn(),
                a = this.spawn(),
                i = e,
                o = function (e, t, n) {
                  for (var r = 0; r < e.length; r++) {
                    var i = e[r],
                      o = i._private.data.id;
                    t.hasElementWithId(o) ? a.merge(i) : n.push(i);
                  }
                };
              return (
                o(this, i, n), o(i, this, r), { left: n, right: r, both: a }
              );
            },
            add: function (e) {
              var t = this._private.cy;
              if (!e) return this;
              if (b(e)) {
                var n = e;
                e = t.mutableElements().filter(n);
              }
              for (var r = this.spawnSelf(), a = 0; a < e.length; a++) {
                var i = e[a];
                !this.has(i) && r.push(i);
              }
              return r;
            },
            merge: function (e) {
              var t = this._private,
                n = t.cy;
              if (!e) return this;
              if (e && b(e)) {
                var r = e;
                e = n.mutableElements().filter(r);
              }
              for (var a = t.map, i = 0; i < e.length; i++) {
                var o = e[i],
                  s = o._private.data.id;
                if (!a.has(s)) {
                  var l = this.length++;
                  (this[l] = o), a.set(s, { ele: o, index: l });
                }
              }
              return this;
            },
            unmergeAt: function (e) {
              var t = this[e].id(),
                n = this._private.map;
              (this[e] = void 0), n.delete(t);
              var r = e === this.length - 1;
              if (this.length > 1 && !r) {
                var a = this.length - 1,
                  i = this[a],
                  o = i._private.data.id;
                (this[a] = void 0),
                  (this[e] = i),
                  n.set(o, { ele: i, index: e });
              }
              return this.length--, this;
            },
            unmergeOne: function (e) {
              e = e[0];
              var t = this._private,
                n = e._private.data.id,
                r = t.map.get(n);
              if (!r) return this;
              var a = r.index;
              return this.unmergeAt(a), this;
            },
            unmerge: function (e) {
              var t = this._private.cy;
              if (!e) return this;
              if (e && b(e)) {
                var n = e;
                e = t.mutableElements().filter(n);
              }
              for (var r = 0; r < e.length; r++) this.unmergeOne(e[r]);
              return this;
            },
            unmergeBy: function (e) {
              for (var t = this.length - 1; t >= 0; t--)
                e(this[t]) && this.unmergeAt(t);
              return this;
            },
            map: function (e, t) {
              for (var n = [], r = this, a = 0; a < r.length; a++) {
                var i = r[a],
                  o = t ? e.apply(t, [i, a, r]) : e(i, a, r);
                n.push(o);
              }
              return n;
            },
            reduce: function (e, t) {
              for (var n = t, r = this, a = 0; a < r.length; a++)
                n = e(n, r[a], a, r);
              return n;
            },
            max: function (e, t) {
              for (var n, r = -1 / 0, a = this, i = 0; i < a.length; i++) {
                var o = a[i],
                  s = t ? e.apply(t, [o, i, a]) : e(o, i, a);
                s > r && ((r = s), (n = o));
              }
              return { value: r, ele: n };
            },
            min: function (e, t) {
              for (var n, r = 1 / 0, a = this, i = 0; i < a.length; i++) {
                var o = a[i],
                  s = t ? e.apply(t, [o, i, a]) : e(o, i, a);
                s < r && ((r = s), (n = o));
              }
              return { value: r, ele: n };
            },
          },
          da = ca;
        (da.u = da["|"] = da["+"] = da.union = da.or = da.add),
          (da["\\"] = da["!"] = da[
            "-"
          ] = da.difference = da.relativeComplement = da.subtract = da.not),
          (da.n = da["&"] = da["."] = da.and = da.intersection = da.intersect),
          (da["^"] = da["(+)"] = da[
            "(-)"
          ] = da.symmetricDifference = da.symdiff = da.xor),
          (da.fnFilter = da.filterFn = da.stdFilter = da.filter),
          (da.complement = da.abscomp = da.absoluteComplement);
        var ha,
          pa = function (e, t) {
            var n = e.cy().hasCompoundNodes();
            function r(e) {
              var t = e.pstyle("z-compound-depth");
              return "auto" === t.value
                ? n
                  ? e.zDepth()
                  : 0
                : "bottom" === t.value
                ? -1
                : "top" === t.value
                ? le
                : 0;
            }
            var a = r(e) - r(t);
            if (0 !== a) return a;
            function i(e) {
              return "auto" === e.pstyle("z-index-compare").value && e.isNode()
                ? 1
                : 0;
            }
            var o = i(e) - i(t);
            if (0 !== o) return o;
            var s = e.pstyle("z-index").value - t.pstyle("z-index").value;
            return 0 !== s ? s : e.poolIndex() - t.poolIndex();
          },
          fa = {
            forEach: function (e, t) {
              if (x(e))
                for (var n = this.length, r = 0; r < n; r++) {
                  var a = this[r];
                  if (!1 === (t ? e.apply(t, [a, r, this]) : e(a, r, this)))
                    break;
                }
              return this;
            },
            toArray: function () {
              for (var e = [], t = 0; t < this.length; t++) e.push(this[t]);
              return e;
            },
            slice: function (e, t) {
              var n = [],
                r = this.length;
              null == t && (t = r),
                null == e && (e = 0),
                e < 0 && (e = r + e),
                t < 0 && (t = r + t);
              for (var a = e; a >= 0 && a < t && a < r; a++) n.push(this[a]);
              return this.spawn(n);
            },
            size: function () {
              return this.length;
            },
            eq: function (e) {
              return this[e] || this.spawn();
            },
            first: function () {
              return this[0] || this.spawn();
            },
            last: function () {
              return this[this.length - 1] || this.spawn();
            },
            empty: function () {
              return 0 === this.length;
            },
            nonempty: function () {
              return !this.empty();
            },
            sort: function (e) {
              if (!x(e)) return this;
              var t = this.toArray().sort(e);
              return this.spawn(t);
            },
            sortByZIndex: function () {
              return this.sort(pa);
            },
            zDepth: function () {
              var e = this[0];
              if (e) {
                var t = e._private;
                if ("nodes" === t.group) {
                  var n = t.data.parent ? e.parents().size() : 0;
                  return e.isParent() ? n : le - 1;
                }
                var r = t.source,
                  a = t.target,
                  i = r.zDepth(),
                  o = a.zDepth();
                return Math.max(i, o, 0);
              }
            },
          };
        (fa.each = fa.forEach),
          (ha = "undefined"),
          ("undefined" == typeof Symbol ? "undefined" : o(Symbol)) != ha &&
            o(Symbol.iterator) != ha &&
            (fa[Symbol.iterator] = function () {
              var e = this,
                t = { value: void 0, done: !1 },
                n = 0,
                r = this.length;
              return c(
                {
                  next: function () {
                    return (
                      n < r
                        ? (t.value = e[n++])
                        : ((t.value = void 0), (t.done = !0)),
                      t
                    );
                  },
                },
                Symbol.iterator,
                function () {
                  return this;
                }
              );
            });
        var ga = xe({ nodeDimensionsIncludeLabels: !1 }),
          va = {
            layoutDimensions: function (e) {
              var t;
              if (((e = ga(e)), this.takesUpSpace()))
                if (e.nodeDimensionsIncludeLabels) {
                  var n = this.boundingBox();
                  t = { w: n.w, h: n.h };
                } else t = { w: this.outerWidth(), h: this.outerHeight() };
              else t = { w: 0, h: 0 };
              return (0 !== t.w && 0 !== t.h) || (t.w = t.h = 1), t;
            },
            layoutPositions: function (e, t, n) {
              var r = this.nodes().filter(function (e) {
                  return !e.isParent();
                }),
                a = this.cy(),
                i = t.eles,
                o = function (e) {
                  return e.id();
                },
                s = N(n, o);
              e.emit({ type: "layoutstart", layout: e }), (e.animations = []);
              var l = t.spacingFactor && 1 !== t.spacingFactor,
                u = (function () {
                  if (!l) return null;
                  for (var e = nt(), t = 0; t < r.length; t++) {
                    var n = r[t],
                      a = s(n, t);
                    rt(e, a.x, a.y);
                  }
                  return e;
                })(),
                c = N(function (e, n) {
                  var r,
                    a,
                    i,
                    o,
                    c,
                    d = s(e, n);
                  return (
                    l &&
                      ((r = Math.abs(t.spacingFactor)),
                      (i = d),
                      (o = (a = u).x1 + a.w / 2),
                      (c = a.y1 + a.h / 2),
                      (d = { x: o + (i.x - o) * r, y: c + (i.y - c) * r })),
                    null != t.transform && (d = t.transform(e, d)),
                    d
                  );
                }, o);
              if (t.animate) {
                for (var d = 0; d < r.length; d++) {
                  var h = r[d],
                    p = c(h, d);
                  if (null == t.animateFilter || t.animateFilter(h, d)) {
                    var f = h.animation({
                      position: p,
                      duration: t.animationDuration,
                      easing: t.animationEasing,
                    });
                    e.animations.push(f);
                  } else h.position(p);
                }
                if (t.fit) {
                  var g = a.animation({
                    fit: {
                      boundingBox: i.boundingBoxAt(c),
                      padding: t.padding,
                    },
                    duration: t.animationDuration,
                    easing: t.animationEasing,
                  });
                  e.animations.push(g);
                } else if (void 0 !== t.zoom && void 0 !== t.pan) {
                  var v = a.animation({
                    zoom: t.zoom,
                    pan: t.pan,
                    duration: t.animationDuration,
                    easing: t.animationEasing,
                  });
                  e.animations.push(v);
                }
                e.animations.forEach(function (e) {
                  return e.play();
                }),
                  e.one("layoutready", t.ready),
                  e.emit({ type: "layoutready", layout: e }),
                  qn
                    .all(
                      e.animations.map(function (e) {
                        return e.promise();
                      })
                    )
                    .then(function () {
                      e.one("layoutstop", t.stop),
                        e.emit({ type: "layoutstop", layout: e });
                    });
              } else
                r.positions(c),
                  t.fit && a.fit(t.eles, t.padding),
                  null != t.zoom && a.zoom(t.zoom),
                  t.pan && a.pan(t.pan),
                  e.one("layoutready", t.ready),
                  e.emit({ type: "layoutready", layout: e }),
                  e.one("layoutstop", t.stop),
                  e.emit({ type: "layoutstop", layout: e });
              return this;
            },
            layout: function (e) {
              return this.cy().makeLayout(V({}, e, { eles: this }));
            },
          };
        function ya(e, t, n) {
          var r,
            a = n._private,
            i = (a.styleCache = a.styleCache || []);
          return null != (r = i[e]) ? r : (r = i[e] = t(n));
        }
        function ma(e, t) {
          return (
            (e = ne(e)),
            function (n) {
              return ya(e, t, n);
            }
          );
        }
        function ba(e, t) {
          e = ne(e);
          var n = function (e) {
            return t.call(e);
          };
          return function () {
            var t = this[0];
            if (t) return ya(e, n, t);
          };
        }
        va.createLayout = va.makeLayout = va.layout;
        var xa = {
          recalculateRenderedStyle: function (e) {
            var t = this.cy(),
              n = t.renderer(),
              r = t.styleEnabled();
            return n && r && n.recalculateRenderedStyle(this, e), this;
          },
          dirtyStyleCache: function () {
            var e,
              t = this.cy(),
              n = function (e) {
                return (e._private.styleCache = null);
              };
            return (
              t.hasCompoundNodes()
                ? ((e = this.spawnSelf()
                    .merge(this.descendants())
                    .merge(this.parents())).merge(e.connectedEdges()),
                  e.forEach(n))
                : this.forEach(function (e) {
                    n(e), e.connectedEdges().forEach(n);
                  }),
              this
            );
          },
          updateStyle: function (e) {
            var t = this._private.cy;
            if (!t.styleEnabled()) return this;
            if (t.batching())
              return t._private.batchStyleEles.merge(this), this;
            var n = this;
            (e = !(!e && void 0 !== e)),
              t.hasCompoundNodes() &&
                (n = this.spawnSelf()
                  .merge(this.descendants())
                  .merge(this.parents()));
            var r = n;
            return (
              e ? r.emitAndNotify("style") : r.emit("style"),
              n.forEach(function (e) {
                return (e._private.styleDirty = !0);
              }),
              this
            );
          },
          cleanStyle: function () {
            var e = this.cy();
            if (e.styleEnabled())
              for (var t = 0; t < this.length; t++) {
                var n = this[t];
                n._private.styleDirty &&
                  ((n._private.styleDirty = !1), e.style().apply(n));
              }
          },
          parsedStyle: function (e) {
            var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = this[0],
              r = n.cy();
            if (r.styleEnabled() && n) {
              this.cleanStyle();
              var a = n._private.style[e];
              return null != a ? a : t ? r.style().getDefaultProperty(e) : null;
            }
          },
          numericStyle: function (e) {
            var t = this[0];
            if (t.cy().styleEnabled() && t) {
              var n = t.pstyle(e);
              return void 0 !== n.pfValue ? n.pfValue : n.value;
            }
          },
          numericStyleUnits: function (e) {
            var t = this[0];
            if (t.cy().styleEnabled()) return t ? t.pstyle(e).units : void 0;
          },
          renderedStyle: function (e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = this[0];
            return n ? t.style().getRenderedStyle(n, e) : void 0;
          },
          style: function (e, t) {
            var n = this.cy();
            if (!n.styleEnabled()) return this;
            var r = n.style();
            if (E(e)) {
              var a = e;
              r.applyBypass(this, a, !1), this.emitAndNotify("style");
            } else if (b(e)) {
              if (void 0 === t) {
                var i = this[0];
                return i ? r.getStylePropertyValue(i, e) : void 0;
              }
              r.applyBypass(this, e, t, !1), this.emitAndNotify("style");
            } else if (void 0 === e) {
              var o = this[0];
              return o ? r.getRawStyle(o) : void 0;
            }
            return this;
          },
          removeStyle: function (e) {
            var t = this.cy();
            if (!t.styleEnabled()) return this;
            var n = t.style(),
              r = this;
            if (void 0 === e)
              for (var a = 0; a < r.length; a++) {
                var i = r[a];
                n.removeAllBypasses(i, !1);
              }
            else {
              e = e.split(/\s+/);
              for (var o = 0; o < r.length; o++) {
                var s = r[o];
                n.removeBypasses(s, e, !1);
              }
            }
            return this.emitAndNotify("style"), this;
          },
          show: function () {
            return this.css("display", "element"), this;
          },
          hide: function () {
            return this.css("display", "none"), this;
          },
          effectiveOpacity: function () {
            var e = this.cy();
            if (!e.styleEnabled()) return 1;
            var t = e.hasCompoundNodes(),
              n = this[0];
            if (n) {
              var r = n._private,
                a = n.pstyle("opacity").value;
              if (!t) return a;
              var i = r.data.parent ? n.parents() : null;
              if (i)
                for (var o = 0; o < i.length; o++)
                  a *= i[o].pstyle("opacity").value;
              return a;
            }
          },
          transparent: function () {
            if (!this.cy().styleEnabled()) return !1;
            var e = this[0],
              t = e.cy().hasCompoundNodes();
            return e
              ? t
                ? 0 === e.effectiveOpacity()
                : 0 === e.pstyle("opacity").value
              : void 0;
          },
          backgrounding: function () {
            return (
              !!this.cy().styleEnabled() && !!this[0]._private.backgrounding
            );
          },
        };
        function wa(e, t) {
          var n = e._private.data.parent ? e.parents() : null;
          if (n) for (var r = 0; r < n.length; r++) if (!t(n[r])) return !1;
          return !0;
        }
        function Ea(e) {
          var t = e.ok,
            n = e.edgeOkViaNode || e.ok,
            r = e.parentOk || e.ok;
          return function () {
            var e = this.cy();
            if (!e.styleEnabled()) return !0;
            var a = this[0],
              i = e.hasCompoundNodes();
            if (a) {
              var o = a._private;
              if (!t(a)) return !1;
              if (a.isNode()) return !i || wa(a, r);
              var s = o.source,
                l = o.target;
              return (
                n(s) &&
                (!i || wa(s, n)) &&
                (s === l || (n(l) && (!i || wa(l, n))))
              );
            }
          };
        }
        var ka = ma("eleTakesUpSpace", function (e) {
          return (
            "element" === e.pstyle("display").value &&
            0 !== e.width() &&
            (!e.isNode() || 0 !== e.height())
          );
        });
        xa.takesUpSpace = ba("takesUpSpace", Ea({ ok: ka }));
        var Ca = ma("eleInteractive", function (e) {
            return (
              "yes" === e.pstyle("events").value &&
              "visible" === e.pstyle("visibility").value &&
              ka(e)
            );
          }),
          Sa = ma("parentInteractive", function (e) {
            return "visible" === e.pstyle("visibility").value && ka(e);
          });
        (xa.interactive = ba(
          "interactive",
          Ea({ ok: Ca, parentOk: Sa, edgeOkViaNode: ka })
        )),
          (xa.noninteractive = function () {
            var e = this[0];
            if (e) return !e.interactive();
          });
        var Da = ma("eleVisible", function (e) {
            return (
              "visible" === e.pstyle("visibility").value &&
              0 !== e.pstyle("opacity").pfValue &&
              ka(e)
            );
          }),
          Pa = ka;
        (xa.visible = ba("visible", Ea({ ok: Da, edgeOkViaNode: Pa }))),
          (xa.hidden = function () {
            var e = this[0];
            if (e) return !e.visible();
          }),
          (xa.isBundledBezier = ba("isBundledBezier", function () {
            return (
              !!this.cy().styleEnabled() &&
              !this.removed() &&
              "bezier" === this.pstyle("curve-style").value &&
              this.takesUpSpace()
            );
          })),
          (xa.bypass = xa.css = xa.style),
          (xa.renderedCss = xa.renderedStyle),
          (xa.removeBypass = xa.removeCss = xa.removeStyle),
          (xa.pstyle = xa.parsedStyle);
        var Ta = {};
        function Ma(e) {
          return function () {
            var t = arguments,
              n = [];
            if (2 === t.length) {
              var r = t[0],
                a = t[1];
              this.on(e.event, r, a);
            } else if (1 === t.length && x(t[0])) {
              var i = t[0];
              this.on(e.event, i);
            } else if (0 === t.length || (1 === t.length && w(t[0]))) {
              for (
                var o = 1 === t.length ? t[0] : null, s = 0;
                s < this.length;
                s++
              ) {
                var l = this[s],
                  u = !e.ableField || l._private[e.ableField],
                  c = l._private[e.field] != e.value;
                if (e.overrideAble) {
                  var d = e.overrideAble(l);
                  if (void 0 !== d && ((u = d), !d)) return this;
                }
                u && ((l._private[e.field] = e.value), c && n.push(l));
              }
              var h = this.spawn(n);
              h.updateStyle(), h.emit(e.event), o && h.emit(o);
            }
            return this;
          };
        }
        function Ba(e) {
          (Ta[e.field] = function () {
            var t = this[0];
            if (t) {
              if (e.overrideField) {
                var n = e.overrideField(t);
                if (void 0 !== n) return n;
              }
              return t._private[e.field];
            }
          }),
            (Ta[e.on] = Ma({
              event: e.on,
              field: e.field,
              ableField: e.ableField,
              overrideAble: e.overrideAble,
              value: !0,
            })),
            (Ta[e.off] = Ma({
              event: e.off,
              field: e.field,
              ableField: e.ableField,
              overrideAble: e.overrideAble,
              value: !1,
            }));
        }
        Ba({
          field: "locked",
          overrideField: function (e) {
            return !!e.cy().autolock() || void 0;
          },
          on: "lock",
          off: "unlock",
        }),
          Ba({
            field: "grabbable",
            overrideField: function (e) {
              return !e.cy().autoungrabify() && !e.pannable() && void 0;
            },
            on: "grabify",
            off: "ungrabify",
          }),
          Ba({
            field: "selected",
            ableField: "selectable",
            overrideAble: function (e) {
              return !e.cy().autounselectify() && void 0;
            },
            on: "select",
            off: "unselect",
          }),
          Ba({
            field: "selectable",
            overrideField: function (e) {
              return !e.cy().autounselectify() && void 0;
            },
            on: "selectify",
            off: "unselectify",
          }),
          (Ta.deselect = Ta.unselect),
          (Ta.grabbed = function () {
            var e = this[0];
            if (e) return e._private.grabbed;
          }),
          Ba({ field: "active", on: "activate", off: "unactivate" }),
          Ba({ field: "pannable", on: "panify", off: "unpanify" }),
          (Ta.inactive = function () {
            var e = this[0];
            if (e) return !e._private.active;
          });
        var _a = {},
          Na = function (e) {
            return function (t) {
              for (var n = [], r = 0; r < this.length; r++) {
                var a = this[r];
                if (a.isNode()) {
                  for (
                    var i = !1, o = a.connectedEdges(), s = 0;
                    s < o.length;
                    s++
                  ) {
                    var l = o[s],
                      u = l.source(),
                      c = l.target();
                    if (
                      (e.noIncomingEdges && c === a && u !== a) ||
                      (e.noOutgoingEdges && u === a && c !== a)
                    ) {
                      i = !0;
                      break;
                    }
                  }
                  i || n.push(a);
                }
              }
              return this.spawn(n, !0).filter(t);
            };
          },
          Ia = function (e) {
            return function (t) {
              for (var n = [], r = 0; r < this.length; r++) {
                var a = this[r];
                if (a.isNode())
                  for (var i = a.connectedEdges(), o = 0; o < i.length; o++) {
                    var s = i[o],
                      l = s.source(),
                      u = s.target();
                    e.outgoing && l === a
                      ? (n.push(s), n.push(u))
                      : e.incoming && u === a && (n.push(s), n.push(l));
                  }
              }
              return this.spawn(n, !0).filter(t);
            };
          },
          La = function (e) {
            return function (t) {
              for (var n = this, r = [], a = {}; ; ) {
                var i = e.outgoing ? n.outgoers() : n.incomers();
                if (0 === i.length) break;
                for (var o = !1, s = 0; s < i.length; s++) {
                  var l = i[s],
                    u = l.id();
                  a[u] || ((a[u] = !0), r.push(l), (o = !0));
                }
                if (!o) break;
                n = i;
              }
              return this.spawn(r, !0).filter(t);
            };
          };
        function za(e) {
          return function (t) {
            for (var n = [], r = 0; r < this.length; r++) {
              var a = this[r]._private[e.attr];
              a && n.push(a);
            }
            return this.spawn(n, !0).filter(t);
          };
        }
        function Aa(e) {
          return function (t) {
            var n = [],
              r = this._private.cy,
              a = e || {};
            b(t) && (t = r.$(t));
            for (var i = 0; i < t.length; i++)
              for (var o = t[i]._private.edges, s = 0; s < o.length; s++) {
                var l = o[s],
                  u = l._private.data,
                  c =
                    this.hasElementWithId(u.source) &&
                    t.hasElementWithId(u.target),
                  d =
                    t.hasElementWithId(u.source) &&
                    this.hasElementWithId(u.target);
                if (c || d) {
                  if (a.thisIsSrc || a.thisIsTgt) {
                    if (a.thisIsSrc && !c) continue;
                    if (a.thisIsTgt && !d) continue;
                  }
                  n.push(l);
                }
              }
            return this.spawn(n, !0);
          };
        }
        function Oa(e) {
          return (
            (e = V({}, { codirected: !1 }, e)),
            function (t) {
              for (
                var n = [], r = this.edges(), a = e, i = 0;
                i < r.length;
                i++
              )
                for (
                  var o = r[i]._private,
                    s = o.source,
                    l = s._private.data.id,
                    u = o.data.target,
                    c = s._private.edges,
                    d = 0;
                  d < c.length;
                  d++
                ) {
                  var h = c[d],
                    p = h._private.data,
                    f = p.target,
                    g = p.source,
                    v = f === u && g === l,
                    y = l === f && u === g;
                  ((a.codirected && v) || (!a.codirected && (v || y))) &&
                    n.push(h);
                }
              return this.spawn(n, !0).filter(t);
            }
          );
        }
        (_a.clearTraversalCache = function () {
          for (var e = 0; e < this.length; e++)
            this[e]._private.traversalCache = null;
        }),
          V(_a, {
            roots: Na({ noIncomingEdges: !0 }),
            leaves: Na({ noOutgoingEdges: !0 }),
            outgoers: pr(Ia({ outgoing: !0 }), "outgoers"),
            successors: La({ outgoing: !0 }),
            incomers: pr(Ia({ incoming: !0 }), "incomers"),
            predecessors: La({ incoming: !0 }),
          }),
          V(_a, {
            neighborhood: pr(function (e) {
              for (var t = [], n = this.nodes(), r = 0; r < n.length; r++)
                for (
                  var a = n[r], i = a.connectedEdges(), o = 0;
                  o < i.length;
                  o++
                ) {
                  var s = i[o],
                    l = s.source(),
                    u = s.target(),
                    c = a === l ? u : l;
                  c.length > 0 && t.push(c[0]), t.push(s[0]);
                }
              return this.spawn(t, !0).filter(e);
            }, "neighborhood"),
            closedNeighborhood: function (e) {
              return this.neighborhood().add(this).filter(e);
            },
            openNeighborhood: function (e) {
              return this.neighborhood(e);
            },
          }),
          (_a.neighbourhood = _a.neighborhood),
          (_a.closedNeighbourhood = _a.closedNeighborhood),
          (_a.openNeighbourhood = _a.openNeighborhood),
          V(_a, {
            source: pr(function (e) {
              var t,
                n = this[0];
              return (
                n && (t = n._private.source || n.cy().collection()),
                t && e ? t.filter(e) : t
              );
            }, "source"),
            target: pr(function (e) {
              var t,
                n = this[0];
              return (
                n && (t = n._private.target || n.cy().collection()),
                t && e ? t.filter(e) : t
              );
            }, "target"),
            sources: za({ attr: "source" }),
            targets: za({ attr: "target" }),
          }),
          V(_a, {
            edgesWith: pr(Aa(), "edgesWith"),
            edgesTo: pr(Aa({ thisIsSrc: !0 }), "edgesTo"),
          }),
          V(_a, {
            connectedEdges: pr(function (e) {
              for (var t = [], n = 0; n < this.length; n++) {
                var r = this[n];
                if (r.isNode())
                  for (var a = r._private.edges, i = 0; i < a.length; i++) {
                    var o = a[i];
                    t.push(o);
                  }
              }
              return this.spawn(t, !0).filter(e);
            }, "connectedEdges"),
            connectedNodes: pr(function (e) {
              for (var t = [], n = 0; n < this.length; n++) {
                var r = this[n];
                r.isEdge() && (t.push(r.source()[0]), t.push(r.target()[0]));
              }
              return this.spawn(t, !0).filter(e);
            }, "connectedNodes"),
            parallelEdges: pr(Oa(), "parallelEdges"),
            codirectedEdges: pr(Oa({ codirected: !0 }), "codirectedEdges"),
          }),
          V(_a, {
            components: function (e) {
              var t = this,
                n = t.cy(),
                r = n.collection(),
                a = null == e ? t.nodes() : e.nodes(),
                i = [];
              null != e && a.empty() && (a = e.sources());
              var o = function (e, t) {
                r.merge(e), a.unmerge(e), t.merge(e);
              };
              if (a.empty()) return t.spawn();
              var s = function () {
                var e = n.collection();
                i.push(e);
                var r = a[0];
                o(r, e),
                  t.bfs({
                    directed: !1,
                    roots: r,
                    visit: function (t) {
                      return o(t, e);
                    },
                  }),
                  e.forEach(function (n) {
                    n.connectedEdges().forEach(function (n) {
                      t.has(n) &&
                        e.has(n.source()) &&
                        e.has(n.target()) &&
                        e.merge(n);
                    });
                  });
              };
              do {
                s();
              } while (a.length > 0);
              return i;
            },
            component: function () {
              var e = this[0];
              return e.cy().mutableElements().components(e)[0];
            },
          }),
          (_a.componentsOf = _a.components);
        var Ra = function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            if (void 0 !== e) {
              var r = new Se(),
                a = !1;
              if (t) {
                if (t.length > 0 && E(t[0]) && !D(t[0])) {
                  a = !0;
                  for (
                    var i = [], o = new Pe(), s = 0, l = t.length;
                    s < l;
                    s++
                  ) {
                    var u = t[s];
                    null == u.data && (u.data = {});
                    var c = u.data;
                    if (null == c.id) c.id = ye();
                    else if (e.hasElementWithId(c.id) || o.has(c.id)) continue;
                    var d = new Te(e, u, !1);
                    i.push(d), o.add(c.id);
                  }
                  t = i;
                }
              } else t = [];
              this.length = 0;
              for (var h = 0, p = t.length; h < p; h++) {
                var f = t[h][0];
                if (null != f) {
                  var g = f._private.data.id;
                  (n && r.has(g)) ||
                    (n && r.set(g, { index: this.length, ele: f }),
                    (this[this.length] = f),
                    this.length++);
                }
              }
              (this._private = {
                eles: this,
                cy: e,
                get map() {
                  return (
                    null == this.lazyMap && this.rebuildMap(), this.lazyMap
                  );
                },
                set map(e) {
                  this.lazyMap = e;
                },
                rebuildMap: function () {
                  for (
                    var e = (this.lazyMap = new Se()), t = this.eles, n = 0;
                    n < t.length;
                    n++
                  ) {
                    var r = t[n];
                    e.set(r.id(), { index: n, ele: r });
                  }
                },
              }),
                n && (this._private.map = r),
                a && this.restore();
            } else pe("A collection must have a reference to the core");
          },
          Va = (Te.prototype = Ra.prototype = Object.create(Array.prototype));
        (Va.instanceString = function () {
          return "collection";
        }),
          (Va.spawn = function (e, t) {
            return new Ra(this.cy(), e, t);
          }),
          (Va.spawnSelf = function () {
            return this.spawn(this);
          }),
          (Va.cy = function () {
            return this._private.cy;
          }),
          (Va.renderer = function () {
            return this._private.cy.renderer();
          }),
          (Va.element = function () {
            return this[0];
          }),
          (Va.collection = function () {
            return P(this) ? this : new Ra(this._private.cy, [this]);
          }),
          (Va.unique = function () {
            return new Ra(this._private.cy, this, !0);
          }),
          (Va.hasElementWithId = function (e) {
            return (e = "" + e), this._private.map.has(e);
          }),
          (Va.getElementById = function (e) {
            e = "" + e;
            var t = this._private.cy,
              n = this._private.map.get(e);
            return n ? n.ele : new Ra(t);
          }),
          (Va.$id = Va.getElementById),
          (Va.poolIndex = function () {
            var e = this._private.cy._private.elements,
              t = this[0]._private.data.id;
            return e._private.map.get(t).index;
          }),
          (Va.indexOf = function (e) {
            var t = e[0]._private.data.id;
            return this._private.map.get(t).index;
          }),
          (Va.indexOfId = function (e) {
            return (e = "" + e), this._private.map.get(e).index;
          }),
          (Va.json = function (e) {
            var t = this.element(),
              n = this.cy();
            if (null == t && e) return this;
            if (null != t) {
              var r = t._private;
              if (E(e)) {
                if ((n.startBatch(), e.data)) {
                  t.data(e.data);
                  var a = r.data;
                  if (t.isEdge()) {
                    var i = !1,
                      o = {},
                      s = e.data.source,
                      l = e.data.target;
                    null != s &&
                      s != a.source &&
                      ((o.source = "" + s), (i = !0)),
                      null != l &&
                        l != a.target &&
                        ((o.target = "" + l), (i = !0)),
                      i && (t = t.move(o));
                  } else {
                    var u = "parent" in e.data,
                      c = e.data.parent;
                    !u ||
                      (null == c && null == a.parent) ||
                      c == a.parent ||
                      (void 0 === c && (c = null),
                      null != c && (c = "" + c),
                      (t = t.move({ parent: c })));
                  }
                }
                e.position && t.position(e.position);
                var d = function (n, a, i) {
                  var o = e[n];
                  null != o && o !== r[n] && (o ? t[a]() : t[i]());
                };
                return (
                  d("removed", "remove", "restore"),
                  d("selected", "select", "unselect"),
                  d("selectable", "selectify", "unselectify"),
                  d("locked", "lock", "unlock"),
                  d("grabbable", "grabify", "ungrabify"),
                  d("pannable", "panify", "unpanify"),
                  null != e.classes && t.classes(e.classes),
                  n.endBatch(),
                  this
                );
              }
              if (void 0 === e) {
                var h = {
                    data: ve(r.data),
                    position: ve(r.position),
                    group: r.group,
                    removed: r.removed,
                    selected: r.selected,
                    selectable: r.selectable,
                    locked: r.locked,
                    grabbable: r.grabbable,
                    pannable: r.pannable,
                    classes: "",
                  },
                  p = 0;
                return (
                  r.classes.forEach(function (e) {
                    return (h.classes += 0 == p++ ? e : " " + e);
                  }),
                  h
                );
              }
            }
          }),
          (Va.jsons = function () {
            for (var e = [], t = 0; t < this.length; t++) {
              var n = this[t].json();
              e.push(n);
            }
            return e;
          }),
          (Va.clone = function () {
            for (var e = this.cy(), t = [], n = 0; n < this.length; n++) {
              var r = this[n].json(),
                a = new Te(e, r, !1);
              t.push(a);
            }
            return new Ra(e, t);
          }),
          (Va.copy = Va.clone),
          (Va.restore = function () {
            for (
              var e,
                t,
                n =
                  !(arguments.length > 0 && void 0 !== arguments[0]) ||
                  arguments[0],
                r =
                  !(arguments.length > 1 && void 0 !== arguments[1]) ||
                  arguments[1],
                a = this,
                i = a.cy(),
                o = i._private,
                s = [],
                l = [],
                u = 0,
                c = a.length;
              u < c;
              u++
            ) {
              var d = a[u];
              (r && !d.removed()) || (d.isNode() ? s.push(d) : l.push(d));
            }
            e = s.concat(l);
            var h = function () {
              e.splice(t, 1), t--;
            };
            for (t = 0; t < e.length; t++) {
              var p = e[t],
                f = p._private,
                g = f.data;
              if ((p.clearTraversalCache(), r || f.removed))
                if (void 0 === g.id) g.id = ye();
                else if (k(g.id)) g.id = "" + g.id;
                else {
                  if (B(g.id) || !b(g.id)) {
                    pe(
                      "Can not create element with invalid string ID `" +
                        g.id +
                        "`"
                    ),
                      h();
                    continue;
                  }
                  if (i.hasElementWithId(g.id)) {
                    pe("Can not create second element with ID `" + g.id + "`"),
                      h();
                    continue;
                  }
                }
              var v = g.id;
              if (p.isNode()) {
                var y = f.position;
                null == y.x && (y.x = 0), null == y.y && (y.y = 0);
              }
              if (p.isEdge()) {
                for (
                  var m = p,
                    x = ["source", "target"],
                    w = x.length,
                    E = !1,
                    C = 0;
                  C < w;
                  C++
                ) {
                  var S = x[C],
                    D = g[S];
                  k(D) && (D = g[S] = "" + g[S]),
                    null == D || "" === D
                      ? (pe(
                          "Can not create edge `" +
                            v +
                            "` with unspecified " +
                            S
                        ),
                        (E = !0))
                      : i.hasElementWithId(D) ||
                        (pe(
                          "Can not create edge `" +
                            v +
                            "` with nonexistant " +
                            S +
                            " `" +
                            D +
                            "`"
                        ),
                        (E = !0));
                }
                if (E) {
                  h();
                  continue;
                }
                var P = i.getElementById(g.source),
                  T = i.getElementById(g.target);
                P.same(T)
                  ? P._private.edges.push(m)
                  : (P._private.edges.push(m), T._private.edges.push(m)),
                  (m._private.source = P),
                  (m._private.target = T);
              }
              (f.map = new Se()),
                f.map.set(v, { ele: p, index: 0 }),
                (f.removed = !1),
                r && i.addToPool(p);
            }
            for (var M = 0; M < s.length; M++) {
              var _ = s[M],
                N = _._private.data;
              k(N.parent) && (N.parent = "" + N.parent);
              var I = N.parent,
                L = null != I;
              if (L) {
                var z = i.getElementById(I);
                if (z.empty()) N.parent = void 0;
                else {
                  for (var A = !1, O = z; !O.empty(); ) {
                    if (_.same(O)) {
                      (A = !0), (N.parent = void 0);
                      break;
                    }
                    O = O.parent();
                  }
                  A ||
                    (z[0]._private.children.push(_),
                    (_._private.parent = z[0]),
                    (o.hasCompoundNodes = !0));
                }
              }
            }
            if (e.length > 0) {
              for (
                var R = e.length === a.length ? a : new Ra(i, e), V = 0;
                V < R.length;
                V++
              ) {
                var F = R[V];
                F.isNode() ||
                  (F.parallelEdges().clearTraversalCache(),
                  F.source().clearTraversalCache(),
                  F.target().clearTraversalCache());
              }
              (o.hasCompoundNodes
                ? i
                    .collection()
                    .merge(R)
                    .merge(R.connectedNodes())
                    .merge(R.parent())
                : R
              )
                .dirtyCompoundBoundsCache()
                .dirtyBoundingBoxCache()
                .updateStyle(n),
                n ? R.emitAndNotify("add") : r && R.emit("add");
            }
            return a;
          }),
          (Va.removed = function () {
            var e = this[0];
            return e && e._private.removed;
          }),
          (Va.inside = function () {
            var e = this[0];
            return e && !e._private.removed;
          }),
          (Va.remove = function () {
            var e =
                !(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0],
              t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1],
              n = this,
              r = [],
              a = {},
              i = n._private.cy;
            function o(e) {
              for (var t = e._private.edges, n = 0; n < t.length; n++) l(t[n]);
            }
            function s(e) {
              for (var t = e._private.children, n = 0; n < t.length; n++)
                l(t[n]);
            }
            function l(e) {
              var n = a[e.id()];
              (t && e.removed()) ||
                n ||
                ((a[e.id()] = !0),
                e.isNode() ? (r.push(e), o(e), s(e)) : r.unshift(e));
            }
            for (var u = 0, c = n.length; u < c; u++) {
              var d = n[u];
              l(d);
            }
            function h(e, t) {
              var n = e._private.edges;
              we(n, t), e.clearTraversalCache();
            }
            function p(e) {
              e.clearTraversalCache();
            }
            var f = [];
            function g(e, t) {
              t = t[0];
              var n = (e = e[0])._private.children,
                r = e.id();
              we(n, t),
                (t._private.parent = null),
                f.ids[r] || ((f.ids[r] = !0), f.push(e));
            }
            (f.ids = {}),
              n.dirtyCompoundBoundsCache(),
              t && i.removeFromPool(r);
            for (var v = 0; v < r.length; v++) {
              var y = r[v];
              if (y.isEdge()) {
                var m = y.source()[0],
                  b = y.target()[0];
                h(m, y), h(b, y);
                for (var x = y.parallelEdges(), w = 0; w < x.length; w++) {
                  var E = x[w];
                  p(E), E.isBundledBezier() && E.dirtyBoundingBoxCache();
                }
              } else {
                var k = y.parent();
                0 !== k.length && g(k, y);
              }
              t && (y._private.removed = !0);
            }
            var C = i._private.elements;
            i._private.hasCompoundNodes = !1;
            for (var S = 0; S < C.length; S++) {
              var D = C[S];
              if (D.isParent()) {
                i._private.hasCompoundNodes = !0;
                break;
              }
            }
            var P = new Ra(this.cy(), r);
            P.size() > 0 &&
              (e ? P.emitAndNotify("remove") : t && P.emit("remove"));
            for (var T = 0; T < f.length; T++) {
              var M = f[T];
              (t && M.removed()) || M.updateStyle();
            }
            return P;
          }),
          (Va.move = function (e) {
            var t = this._private.cy,
              n = this,
              r = !1,
              a = !1,
              i = function (e) {
                return null == e ? e : "" + e;
              };
            if (void 0 !== e.source || void 0 !== e.target) {
              var o = i(e.source),
                s = i(e.target),
                l = null != o && t.hasElementWithId(o),
                u = null != s && t.hasElementWithId(s);
              (l || u) &&
                (t.batch(function () {
                  n.remove(r, a), n.emitAndNotify("moveout");
                  for (var e = 0; e < n.length; e++) {
                    var t = n[e],
                      i = t._private.data;
                    t.isEdge() && (l && (i.source = o), u && (i.target = s));
                  }
                  n.restore(r, a);
                }),
                n.emitAndNotify("move"));
            } else if (void 0 !== e.parent) {
              var c = i(e.parent);
              if (null === c || t.hasElementWithId(c)) {
                var d = null === c ? void 0 : c;
                t.batch(function () {
                  var e = n.remove(r, a);
                  e.emitAndNotify("moveout");
                  for (var t = 0; t < n.length; t++) {
                    var i = n[t],
                      o = i._private.data;
                    i.isNode() && (o.parent = d);
                  }
                  e.restore(r, a);
                }),
                  n.emitAndNotify("move");
              }
            }
            return this;
          }),
          [
            zn,
            Hn,
            $n,
            cr,
            fr,
            wr,
            Er,
            Gr,
            ua,
            ca,
            {
              isNode: function () {
                return "nodes" === this.group();
              },
              isEdge: function () {
                return "edges" === this.group();
              },
              isLoop: function () {
                return this.isEdge() && this.source()[0] === this.target()[0];
              },
              isSimple: function () {
                return this.isEdge() && this.source()[0] !== this.target()[0];
              },
              group: function () {
                var e = this[0];
                if (e) return e._private.group;
              },
            },
            fa,
            va,
            xa,
            Ta,
            _a,
          ].forEach(function (e) {
            V(Va, e);
          });
        var Fa = {
            add: function (e) {
              var t,
                n = this;
              if (S(e)) {
                var r = e;
                if (r._private.cy === n) t = r.restore();
                else {
                  for (var a = [], i = 0; i < r.length; i++) {
                    var o = r[i];
                    a.push(o.json());
                  }
                  t = new Ra(n, a);
                }
              } else if (w(e)) t = new Ra(n, e);
              else if (E(e) && (w(e.nodes) || w(e.edges))) {
                for (
                  var s = e,
                    l = [],
                    u = ["nodes", "edges"],
                    c = 0,
                    d = u.length;
                  c < d;
                  c++
                ) {
                  var h = u[c],
                    p = s[h];
                  if (w(p))
                    for (var f = 0, g = p.length; f < g; f++) {
                      var v = V({ group: h }, p[f]);
                      l.push(v);
                    }
                }
                t = new Ra(n, l);
              } else t = new Te(n, e).collection();
              return t;
            },
            remove: function (e) {
              if (S(e));
              else if (b(e)) {
                var t = e;
                e = this.$(t);
              }
              return e.remove();
            },
          },
          ja = (function () {
            function e(e) {
              return -e.tension * e.x - e.friction * e.v;
            }
            function t(t, n, r) {
              var a = {
                x: t.x + r.dx * n,
                v: t.v + r.dv * n,
                tension: t.tension,
                friction: t.friction,
              };
              return { dx: a.v, dv: e(a) };
            }
            function n(n, r) {
              var a = { dx: n.v, dv: e(n) },
                i = t(n, 0.5 * r, a),
                o = t(n, 0.5 * r, i),
                s = t(n, r, o),
                l = (1 / 6) * (a.dx + 2 * (i.dx + o.dx) + s.dx),
                u = (1 / 6) * (a.dv + 2 * (i.dv + o.dv) + s.dv);
              return (n.x = n.x + l * r), (n.v = n.v + u * r), n;
            }
            return function e(t, r, a) {
              var i,
                o,
                s,
                l = { x: -1, v: 0, tension: null, friction: null },
                u = [0],
                c = 0,
                d = 1e-4;
              for (
                t = parseFloat(t) || 500,
                  r = parseFloat(r) || 20,
                  a = a || null,
                  l.tension = t,
                  l.friction = r,
                  o = (i = null !== a) ? ((c = e(t, r)) / a) * 0.016 : 0.016;
                (s = n(s || l, o)),
                  u.push(1 + s.x),
                  (c += 16),
                  Math.abs(s.x) > d && Math.abs(s.v) > d;

              );
              return i
                ? function (e) {
                    return u[(e * (u.length - 1)) | 0];
                  }
                : c;
            };
          })(),
          qa = function (e, t, n, r) {
            var a = (function (e, t, n, r) {
              var a = 4,
                i = 0.001,
                o = 1e-7,
                s = 10,
                l = 11,
                u = 1 / (l - 1),
                c = "undefined" != typeof Float32Array;
              if (4 !== arguments.length) return !1;
              for (var d = 0; d < 4; ++d)
                if (
                  "number" != typeof arguments[d] ||
                  isNaN(arguments[d]) ||
                  !isFinite(arguments[d])
                )
                  return !1;
              (e = Math.min(e, 1)),
                (n = Math.min(n, 1)),
                (e = Math.max(e, 0)),
                (n = Math.max(n, 0));
              var h = c ? new Float32Array(l) : new Array(l);
              function p(e, t) {
                return 1 - 3 * t + 3 * e;
              }
              function f(e, t) {
                return 3 * t - 6 * e;
              }
              function g(e) {
                return 3 * e;
              }
              function v(e, t, n) {
                return ((p(t, n) * e + f(t, n)) * e + g(t)) * e;
              }
              function y(e, t, n) {
                return 3 * p(t, n) * e * e + 2 * f(t, n) * e + g(t);
              }
              function m(t, r) {
                for (var i = 0; i < a; ++i) {
                  var o = y(r, e, n);
                  if (0 === o) return r;
                  r -= (v(r, e, n) - t) / o;
                }
                return r;
              }
              function b() {
                for (var t = 0; t < l; ++t) h[t] = v(t * u, e, n);
              }
              function x(t, r, a) {
                var i,
                  l,
                  u = 0;
                do {
                  (i = v((l = r + (a - r) / 2), e, n) - t) > 0
                    ? (a = l)
                    : (r = l);
                } while (Math.abs(i) > o && ++u < s);
                return l;
              }
              function w(t) {
                for (var r = 0, a = 1, o = l - 1; a !== o && h[a] <= t; ++a)
                  r += u;
                --a;
                var s = r + ((t - h[a]) / (h[a + 1] - h[a])) * u,
                  c = y(s, e, n);
                return c >= i ? m(t, s) : 0 === c ? s : x(t, r, r + u);
              }
              var E = !1;
              function k() {
                (E = !0), (e === t && n === r) || b();
              }
              var C = function (a) {
                return (
                  E || k(),
                  e === t && n === r
                    ? a
                    : 0 === a
                    ? 0
                    : 1 === a
                    ? 1
                    : v(w(a), t, r)
                );
              };
              C.getControlPoints = function () {
                return [
                  { x: e, y: t },
                  { x: n, y: r },
                ];
              };
              var S = "generateBezier(" + [e, t, n, r] + ")";
              return (
                (C.toString = function () {
                  return S;
                }),
                C
              );
            })(e, t, n, r);
            return function (e, t, n) {
              return e + (t - e) * a(n);
            };
          },
          Xa = {
            linear: function (e, t, n) {
              return e + (t - e) * n;
            },
            ease: qa(0.25, 0.1, 0.25, 1),
            "ease-in": qa(0.42, 0, 1, 1),
            "ease-out": qa(0, 0, 0.58, 1),
            "ease-in-out": qa(0.42, 0, 0.58, 1),
            "ease-in-sine": qa(0.47, 0, 0.745, 0.715),
            "ease-out-sine": qa(0.39, 0.575, 0.565, 1),
            "ease-in-out-sine": qa(0.445, 0.05, 0.55, 0.95),
            "ease-in-quad": qa(0.55, 0.085, 0.68, 0.53),
            "ease-out-quad": qa(0.25, 0.46, 0.45, 0.94),
            "ease-in-out-quad": qa(0.455, 0.03, 0.515, 0.955),
            "ease-in-cubic": qa(0.55, 0.055, 0.675, 0.19),
            "ease-out-cubic": qa(0.215, 0.61, 0.355, 1),
            "ease-in-out-cubic": qa(0.645, 0.045, 0.355, 1),
            "ease-in-quart": qa(0.895, 0.03, 0.685, 0.22),
            "ease-out-quart": qa(0.165, 0.84, 0.44, 1),
            "ease-in-out-quart": qa(0.77, 0, 0.175, 1),
            "ease-in-quint": qa(0.755, 0.05, 0.855, 0.06),
            "ease-out-quint": qa(0.23, 1, 0.32, 1),
            "ease-in-out-quint": qa(0.86, 0, 0.07, 1),
            "ease-in-expo": qa(0.95, 0.05, 0.795, 0.035),
            "ease-out-expo": qa(0.19, 1, 0.22, 1),
            "ease-in-out-expo": qa(1, 0, 0, 1),
            "ease-in-circ": qa(0.6, 0.04, 0.98, 0.335),
            "ease-out-circ": qa(0.075, 0.82, 0.165, 1),
            "ease-in-out-circ": qa(0.785, 0.135, 0.15, 0.86),
            spring: function (e, t, n) {
              if (0 === n) return Xa.linear;
              var r = ja(e, t, n);
              return function (e, t, n) {
                return e + (t - e) * r(n);
              };
            },
            "cubic-bezier": qa,
          };
        function Ya(e, t, n, r, a) {
          if (1 === r) return n;
          if (t === n) return n;
          var i = a(t, n, r);
          return (
            null == e ||
              ((e.roundValue || e.color) && (i = Math.round(i)),
              void 0 !== e.min && (i = Math.max(i, e.min)),
              void 0 !== e.max && (i = Math.min(i, e.max))),
            i
          );
        }
        function Wa(e, t) {
          return null != e.pfValue || null != e.value
            ? null == e.pfValue || (null != t && "%" === t.type.units)
              ? e.value
              : e.pfValue
            : e;
        }
        function Ha(e, t, n, r, a) {
          var i = null != a ? a.type : null;
          n < 0 ? (n = 0) : n > 1 && (n = 1);
          var o = Wa(e, a),
            s = Wa(t, a);
          if (k(o) && k(s)) return Ya(i, o, s, n, r);
          if (w(o) && w(s)) {
            for (var l = [], u = 0; u < s.length; u++) {
              var c = o[u],
                d = s[u];
              if (null != c && null != d) {
                var h = Ya(i, c, d, n, r);
                l.push(h);
              } else l.push(d);
            }
            return l;
          }
        }
        function $a(e, t, n, r) {
          var a = !r,
            i = e._private,
            o = t._private,
            s = o.easing,
            l = o.startTime,
            u = (r ? e : e.cy()).style();
          if (!o.easingImpl)
            if (null == s) o.easingImpl = Xa.linear;
            else {
              var c, d, h;
              (c = b(s) ? u.parse("transition-timing-function", s).value : s),
                b(c)
                  ? ((d = c), (h = []))
                  : ((d = c[1]),
                    (h = c.slice(2).map(function (e) {
                      return +e;
                    }))),
                h.length > 0
                  ? ("spring" === d && h.push(o.duration),
                    (o.easingImpl = Xa[d].apply(null, h)))
                  : (o.easingImpl = Xa[d]);
            }
          var p,
            f = o.easingImpl;
          if (
            ((p = 0 === o.duration ? 1 : (n - l) / o.duration),
            o.applying && (p = o.progress),
            p < 0 ? (p = 0) : p > 1 && (p = 1),
            null == o.delay)
          ) {
            var g = o.startPosition,
              v = o.position;
            if (v && a && !e.locked()) {
              var y = {};
              Ka(g.x, v.x) && (y.x = Ha(g.x, v.x, p, f)),
                Ka(g.y, v.y) && (y.y = Ha(g.y, v.y, p, f)),
                e.position(y);
            }
            var m = o.startPan,
              x = o.pan,
              w = i.pan,
              E = null != x && r;
            E &&
              (Ka(m.x, x.x) && (w.x = Ha(m.x, x.x, p, f)),
              Ka(m.y, x.y) && (w.y = Ha(m.y, x.y, p, f)),
              e.emit("pan"));
            var k = o.startZoom,
              C = o.zoom,
              S = null != C && r;
            S &&
              (Ka(k, C) && (i.zoom = tt(i.minZoom, Ha(k, C, p, f), i.maxZoom)),
              e.emit("zoom")),
              (E || S) && e.emit("viewport");
            var D = o.style;
            if (D && D.length > 0 && a) {
              for (var P = 0; P < D.length; P++) {
                var T = D[P],
                  M = T.name,
                  B = T,
                  _ = o.startStyle[M],
                  N = Ha(_, B, p, f, u.properties[_.name]);
                u.overrideBypass(e, M, N);
              }
              e.emit("style");
            }
          }
          return (o.progress = p), p;
        }
        function Ka(e, t) {
          return !!(null != e && null != t && ((k(e) && k(t)) || (e && t)));
        }
        function Ga(e, t, n, r) {
          var a = t._private;
          (a.started = !0), (a.startTime = n - a.progress * a.duration);
        }
        function Ua(e, t) {
          var n = t._private.aniEles,
            r = [];
          function a(t, n) {
            var a = t._private,
              i = a.animation.current,
              o = a.animation.queue,
              s = !1;
            if (0 === i.length) {
              var l = o.shift();
              l && i.push(l);
            }
            for (
              var u = function (e) {
                  for (var t = e.length - 1; t >= 0; t--) (0, e[t])();
                  e.splice(0, e.length);
                },
                c = i.length - 1;
              c >= 0;
              c--
            ) {
              var d = i[c],
                h = d._private;
              h.stopped
                ? (i.splice(c, 1),
                  (h.hooked = !1),
                  (h.playing = !1),
                  (h.started = !1),
                  u(h.frames))
                : (h.playing || h.applying) &&
                  (h.playing && h.applying && (h.applying = !1),
                  h.started || Ga(0, d, e),
                  $a(t, d, e, n),
                  h.applying && (h.applying = !1),
                  u(h.frames),
                  null != h.step && h.step(e),
                  d.completed() &&
                    (i.splice(c, 1),
                    (h.hooked = !1),
                    (h.playing = !1),
                    (h.started = !1),
                    u(h.completes)),
                  (s = !0));
            }
            return n || 0 !== i.length || 0 !== o.length || r.push(t), s;
          }
          for (var i = !1, o = 0; o < n.length; o++) {
            var s = a(n[o]);
            i = i || s;
          }
          var l = a(t, !0);
          (i || l) && (n.length > 0 ? t.notify("draw", n) : t.notify("draw")),
            n.unmerge(r),
            t.emit("step");
        }
        var Za = {
            animate: Wn.animate(),
            animation: Wn.animation(),
            animated: Wn.animated(),
            clearQueue: Wn.clearQueue(),
            delay: Wn.delay(),
            delayAnimation: Wn.delayAnimation(),
            stop: Wn.stop(),
            addToAnimationPool: function (e) {
              this.styleEnabled() && this._private.aniEles.merge(e);
            },
            stopAnimationLoop: function () {
              this._private.animationsRunning = !1;
            },
            startAnimationLoop: function () {
              var e = this;
              if (((e._private.animationsRunning = !0), e.styleEnabled())) {
                var t = e.renderer();
                t && t.beforeRender
                  ? t.beforeRender(function (t, n) {
                      Ua(n, e);
                    }, t.beforeRenderPriorities.animations)
                  : (function t() {
                      e._private.animationsRunning &&
                        H(function (n) {
                          Ua(n, e), t();
                        });
                    })();
              }
            },
          },
          Qa = {
            qualifierCompare: function (e, t) {
              return null == e || null == t
                ? null == e && null == t
                : e.sameText(t);
            },
            eventMatches: function (e, t, n) {
              var r = t.qualifier;
              return (
                null == r ||
                (e !== n.target && D(n.target) && r.matches(n.target))
              );
            },
            addEventFields: function (e, t) {
              (t.cy = e), (t.target = e);
            },
            callbackContext: function (e, t, n) {
              return null != t.qualifier ? n.target : e;
            },
          },
          Ja = function (e) {
            return b(e) ? new lr(e) : e;
          },
          ei = {
            createEmitter: function () {
              var e = this._private;
              return e.emitter || (e.emitter = new ra(Qa, this)), this;
            },
            emitter: function () {
              return this._private.emitter;
            },
            on: function (e, t, n) {
              return this.emitter().on(e, Ja(t), n), this;
            },
            removeListener: function (e, t, n) {
              return this.emitter().removeListener(e, Ja(t), n), this;
            },
            removeAllListeners: function () {
              return this.emitter().removeAllListeners(), this;
            },
            one: function (e, t, n) {
              return this.emitter().one(e, Ja(t), n), this;
            },
            once: function (e, t, n) {
              return this.emitter().one(e, Ja(t), n), this;
            },
            emit: function (e, t) {
              return this.emitter().emit(e, t), this;
            },
            emitAndNotify: function (e, t) {
              return this.emit(e), this.notify(e, t), this;
            },
          };
        Wn.eventAliasesOn(ei);
        var ti = {
          png: function (e) {
            return (e = e || {}), this._private.renderer.png(e);
          },
          jpg: function (e) {
            var t = this._private.renderer;
            return ((e = e || {}).bg = e.bg || "#fff"), t.jpg(e);
          },
        };
        ti.jpeg = ti.jpg;
        var ni = {
          layout: function (e) {
            var t = this;
            if (null != e)
              if (null != e.name) {
                var n,
                  r = e.name,
                  a = t.extension("layout", r);
                if (null != a)
                  return (
                    (n = b(e.eles)
                      ? t.$(e.eles)
                      : null != e.eles
                      ? e.eles
                      : t.$()),
                    new a(V({}, e, { cy: t, eles: n }))
                  );
                pe(
                  "No such layout `" +
                    r +
                    "` found.  Did you forget to import it and `cytoscape.use()` it?"
                );
              } else pe("A `name` must be specified to make a layout");
            else pe("Layout options must be specified to make a layout");
          },
        };
        ni.createLayout = ni.makeLayout = ni.layout;
        var ri = {
            notify: function (e, t) {
              var n = this._private;
              if (this.batching()) {
                n.batchNotifications = n.batchNotifications || {};
                var r = (n.batchNotifications[e] =
                  n.batchNotifications[e] || this.collection());
                null != t && r.merge(t);
              } else if (n.notificationsEnabled) {
                var a = this.renderer();
                !this.destroyed() && a && a.notify(e, t);
              }
            },
            notifications: function (e) {
              var t = this._private;
              return void 0 === e
                ? t.notificationsEnabled
                : ((t.notificationsEnabled = !!e), this);
            },
            noNotifications: function (e) {
              this.notifications(!1), e(), this.notifications(!0);
            },
            batching: function () {
              return this._private.batchCount > 0;
            },
            startBatch: function () {
              var e = this._private;
              return (
                null == e.batchCount && (e.batchCount = 0),
                0 === e.batchCount &&
                  ((e.batchStyleEles = this.collection()),
                  (e.batchNotifications = {})),
                e.batchCount++,
                this
              );
            },
            endBatch: function () {
              var e = this._private;
              if (0 === e.batchCount) return this;
              if ((e.batchCount--, 0 === e.batchCount)) {
                e.batchStyleEles.updateStyle();
                var t = this.renderer();
                Object.keys(e.batchNotifications).forEach(function (n) {
                  var r = e.batchNotifications[n];
                  r.empty() ? t.notify(n) : t.notify(n, r);
                });
              }
              return this;
            },
            batch: function (e) {
              return this.startBatch(), e(), this.endBatch(), this;
            },
            batchData: function (e) {
              var t = this;
              return this.batch(function () {
                for (var n = Object.keys(e), r = 0; r < n.length; r++) {
                  var a = n[r],
                    i = e[a];
                  t.getElementById(a).data(i);
                }
              });
            },
          },
          ai = xe({
            hideEdgesOnViewport: !1,
            textureOnViewport: !1,
            motionBlur: !1,
            motionBlurOpacity: 0.05,
            pixelRatio: void 0,
            desktopTapThreshold: 4,
            touchTapThreshold: 8,
            wheelSensitivity: 1,
            debug: !1,
            showFps: !1,
          }),
          ii = {
            renderTo: function (e, t, n, r) {
              return this._private.renderer.renderTo(e, t, n, r), this;
            },
            renderer: function () {
              return this._private.renderer;
            },
            forceRender: function () {
              return this.notify("draw"), this;
            },
            resize: function () {
              return this.invalidateSize(), this.emitAndNotify("resize"), this;
            },
            initRenderer: function (e) {
              var t = this,
                n = t.extension("renderer", e.name);
              if (null != n) {
                void 0 !== e.wheelSensitivity &&
                  ge(
                    "You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine."
                  );
                var r = ai(e);
                (r.cy = t),
                  (t._private.renderer = new n(r)),
                  this.notify("init");
              } else
                pe(
                  "Can not initialise: No such renderer `".concat(
                    e.name,
                    "` found. Did you forget to import it and `cytoscape.use()` it?"
                  )
                );
            },
            destroyRenderer: function () {
              var e = this;
              e.notify("destroy");
              var t = e.container();
              if (t)
                for (t._cyreg = null; t.childNodes.length > 0; )
                  t.removeChild(t.childNodes[0]);
              (e._private.renderer = null),
                e.mutableElements().forEach(function (e) {
                  var t = e._private;
                  (t.rscratch = {}),
                    (t.rstyle = {}),
                    (t.animation.current = []),
                    (t.animation.queue = []);
                });
            },
            onRender: function (e) {
              return this.on("render", e);
            },
            offRender: function (e) {
              return this.off("render", e);
            },
          };
        ii.invalidateDimensions = ii.resize;
        var oi = {
          collection: function (e, t) {
            return b(e)
              ? this.$(e)
              : S(e)
              ? e.collection()
              : w(e)
              ? new Ra(this, e, t)
              : new Ra(this);
          },
          nodes: function (e) {
            var t = this.$(function (e) {
              return e.isNode();
            });
            return e ? t.filter(e) : t;
          },
          edges: function (e) {
            var t = this.$(function (e) {
              return e.isEdge();
            });
            return e ? t.filter(e) : t;
          },
          $: function (e) {
            var t = this._private.elements;
            return e ? t.filter(e) : t.spawnSelf();
          },
          mutableElements: function () {
            return this._private.elements;
          },
        };
        oi.elements = oi.filter = oi.$;
        var si = {},
          li = "t";
        (si.apply = function (e) {
          for (
            var t = this, n = t._private.cy.collection(), r = 0;
            r < e.length;
            r++
          ) {
            var a = e[r],
              i = t.getContextMeta(a);
            if (!i.empty) {
              var o = t.getContextStyle(i),
                s = t.applyContextStyle(i, o, a);
              a._private.appliedInitStyle
                ? t.updateTransitions(a, s.diffProps)
                : (a._private.appliedInitStyle = !0),
                t.updateStyleHints(a) && n.push(a);
            }
          }
          return n;
        }),
          (si.getPropertiesDiff = function (e, t) {
            var n = this,
              r = (n._private.propDiffs = n._private.propDiffs || {}),
              a = e + "-" + t,
              i = r[a];
            if (i) return i;
            for (var o = [], s = {}, l = 0; l < n.length; l++) {
              var u = n[l],
                c = e[l] === li,
                d = t[l] === li,
                h = c !== d,
                p = u.mappedProperties.length > 0;
              if (h || (d && p)) {
                var f = void 0;
                (h && p) || h
                  ? (f = u.properties)
                  : p && (f = u.mappedProperties);
                for (var g = 0; g < f.length; g++) {
                  for (
                    var v = f[g], y = v.name, m = !1, b = l + 1;
                    b < n.length;
                    b++
                  ) {
                    var x = n[b];
                    if (t[b] === li && (m = null != x.properties[v.name]))
                      break;
                  }
                  s[y] || m || ((s[y] = !0), o.push(y));
                }
              }
            }
            return (r[a] = o), o;
          }),
          (si.getContextMeta = function (e) {
            for (
              var t, n = this, r = "", a = e._private.styleCxtKey || "", i = 0;
              i < n.length;
              i++
            ) {
              var o = n[i];
              r += o.selector && o.selector.matches(e) ? li : "f";
            }
            return (
              (t = n.getPropertiesDiff(a, r)),
              (e._private.styleCxtKey = r),
              { key: r, diffPropNames: t, empty: 0 === t.length }
            );
          }),
          (si.getContextStyle = function (e) {
            var t = e.key,
              n = (this._private.contextStyles =
                this._private.contextStyles || {});
            if (n[t]) return n[t];
            for (
              var r = { _private: { key: t } }, a = 0;
              a < this.length;
              a++
            ) {
              var i = this[a];
              if (t[a] === li)
                for (var o = 0; o < i.properties.length; o++) {
                  var s = i.properties[o];
                  r[s.name] = s;
                }
            }
            return (n[t] = r), r;
          }),
          (si.applyContextStyle = function (e, t, n) {
            for (
              var r = e.diffPropNames, a = {}, i = this.types, o = 0;
              o < r.length;
              o++
            ) {
              var s = r[o],
                l = t[s],
                u = n.pstyle(s);
              if (!l) {
                if (!u) continue;
                l = u.bypass
                  ? { name: s, deleteBypassed: !0 }
                  : { name: s, delete: !0 };
              }
              if (u !== l) {
                if (
                  l.mapped === i.fn &&
                  null != u &&
                  null != u.mapping &&
                  u.mapping.value === l.value
                ) {
                  var c = u.mapping;
                  if ((c.fnValue = l.value(n)) === c.prevFnValue) continue;
                }
                var d = (a[s] = { prev: u });
                this.applyParsedProperty(n, l),
                  (d.next = n.pstyle(s)),
                  d.next && d.next.bypass && (d.next = d.next.bypassed);
              }
            }
            return { diffProps: a };
          }),
          (si.updateStyleHints = function (e) {
            var t = e._private,
              n = this,
              r = n.propertyGroupNames,
              a = n.propertyGroupKeys,
              i = function (e, t, r) {
                return n.getPropertiesHash(e, t, r);
              },
              o = t.styleKey;
            if (e.removed()) return !1;
            var s = "nodes" === t.group,
              l = e._private.style;
            r = Object.keys(l);
            for (var u = 0; u < a.length; u++) {
              var c = a[u];
              t.styleKeys[c] = [K, U];
            }
            for (
              var d,
                h = function (e, n) {
                  return (t.styleKeys[n][0] = Q(e, t.styleKeys[n][0]));
                },
                p = function (e, n) {
                  return (t.styleKeys[n][1] = J(e, t.styleKeys[n][1]));
                },
                f = function (e, t) {
                  h(e, t), p(e, t);
                },
                g = function (e, t) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    h(r, t), p(r, t);
                  }
                },
                v = 0;
              v < r.length;
              v++
            ) {
              var y = r[v],
                m = l[y];
              if (null != m) {
                var b = this.properties[y],
                  x = b.type,
                  w = b.groupKey,
                  E = void 0;
                null != b.hashOverride
                  ? (E = b.hashOverride(e, m))
                  : null != m.pfValue && (E = m.pfValue);
                var k = null == b.enums ? m.value : null,
                  C = null != E,
                  S = C || null != k,
                  D = m.units;
                x.number && S && !x.multiple
                  ? (f(
                      -128 < (d = C ? E : k) && d < 128 && Math.floor(d) !== d
                        ? 2e9 - ((1024 * d) | 0)
                        : d,
                      w
                    ),
                    C || null == D || g(D, w))
                  : g(m.strValue, w);
              }
            }
            for (var P = [K, U], T = 0; T < a.length; T++) {
              var M = a[T],
                B = t.styleKeys[M];
              (P[0] = Q(B[0], P[0])), (P[1] = J(B[1], P[1]));
            }
            t.styleKey = 2097152 * P[0] + P[1];
            var _ = t.styleKeys;
            t.labelDimsKey = ee(_.labelDimensions);
            var N = i(e, ["label"], _.labelDimensions);
            if (
              ((t.labelKey = ee(N)),
              (t.labelStyleKey = ee(te(_.commonLabel, N))),
              !s)
            ) {
              var I = i(e, ["source-label"], _.labelDimensions);
              (t.sourceLabelKey = ee(I)),
                (t.sourceLabelStyleKey = ee(te(_.commonLabel, I)));
              var L = i(e, ["target-label"], _.labelDimensions);
              (t.targetLabelKey = ee(L)),
                (t.targetLabelStyleKey = ee(te(_.commonLabel, L)));
            }
            if (s) {
              var z = t.styleKeys,
                A = z.nodeBody,
                O = z.nodeBorder,
                R = z.backgroundImage,
                V = z.compound,
                F = z.pie,
                j = [A, O, R, V, F]
                  .filter(function (e) {
                    return null != e;
                  })
                  .reduce(te, [K, U]);
              (t.nodeKey = ee(j)),
                (t.hasPie = null != F && F[0] !== K && F[1] !== U);
            }
            return o !== t.styleKey;
          }),
          (si.clearStyleHints = function (e) {
            var t = e._private;
            (t.styleCxtKey = ""),
              (t.styleKeys = {}),
              (t.styleKey = null),
              (t.labelKey = null),
              (t.labelStyleKey = null),
              (t.sourceLabelKey = null),
              (t.sourceLabelStyleKey = null),
              (t.targetLabelKey = null),
              (t.targetLabelStyleKey = null),
              (t.nodeKey = null),
              (t.hasPie = null);
          }),
          (si.applyParsedProperty = function (e, t) {
            var n,
              r = this,
              a = t,
              i = e._private.style,
              o = r.types,
              s = r.properties[a.name].type,
              l = a.bypass,
              u = i[a.name],
              c = u && u.bypass,
              d = e._private,
              h = "mapping",
              p = function (e) {
                return null == e
                  ? null
                  : null != e.pfValue
                  ? e.pfValue
                  : e.value;
              },
              f = function () {
                var t = p(u),
                  n = p(a);
                r.checkTriggers(e, a.name, t, n);
              };
            if (
              (a &&
                "pie" === a.name.substr(0, 3) &&
                ge(
                  "The pie style properties are deprecated.  Create charts using background images instead."
                ),
              "curve-style" === t.name &&
                e.isEdge() &&
                (("bezier" !== t.value && e.isLoop()) ||
                  ("haystack" === t.value &&
                    (e.source().isParent() || e.target().isParent()))) &&
                (a = t = this.parse(t.name, "bezier", l)),
              a.delete)
            )
              return (i[a.name] = void 0), f(), !0;
            if (a.deleteBypassed)
              return u
                ? !!u.bypass && ((u.bypassed = void 0), f(), !0)
                : (f(), !0);
            if (a.deleteBypass)
              return u
                ? !!u.bypass && ((i[a.name] = u.bypassed), f(), !0)
                : (f(), !0);
            var g = function () {
              ge(
                "Do not assign mappings to elements without corresponding data (i.e. ele `" +
                  e.id() +
                  "` has no mapping for property `" +
                  a.name +
                  "` with data field `" +
                  a.field +
                  "`); try a `[" +
                  a.field +
                  "]` selector to limit scope to elements with `" +
                  a.field +
                  "` defined"
              );
            };
            switch (a.mapped) {
              case o.mapData:
                for (
                  var v, y = a.field.split("."), m = d.data, b = 0;
                  b < y.length && m;
                  b++
                )
                  m = m[y[b]];
                if (null == m) return g(), !1;
                if (!k(m))
                  return (
                    ge(
                      "Do not use continuous mappers without specifying numeric data (i.e. `" +
                        a.field +
                        ": " +
                        m +
                        "` for `" +
                        e.id() +
                        "` is non-numeric)"
                    ),
                    !1
                  );
                var x = a.fieldMax - a.fieldMin;
                if (
                  ((v = 0 === x ? 0 : (m - a.fieldMin) / x) < 0
                    ? (v = 0)
                    : v > 1 && (v = 1),
                  s.color)
                ) {
                  var w = a.valueMin[0],
                    E = a.valueMax[0],
                    C = a.valueMin[1],
                    S = a.valueMax[1],
                    D = a.valueMin[2],
                    P = a.valueMax[2],
                    T = null == a.valueMin[3] ? 1 : a.valueMin[3],
                    M = null == a.valueMax[3] ? 1 : a.valueMax[3],
                    B = [
                      Math.round(w + (E - w) * v),
                      Math.round(C + (S - C) * v),
                      Math.round(D + (P - D) * v),
                      Math.round(T + (M - T) * v),
                    ];
                  n = {
                    bypass: a.bypass,
                    name: a.name,
                    value: B,
                    strValue: "rgb(" + B[0] + ", " + B[1] + ", " + B[2] + ")",
                  };
                } else {
                  if (!s.number) return !1;
                  var _ = a.valueMin + (a.valueMax - a.valueMin) * v;
                  n = this.parse(a.name, _, a.bypass, h);
                }
                if (!n) return g(), !1;
                (n.mapping = a), (a = n);
                break;
              case o.data:
                for (
                  var N = a.field.split("."), I = d.data, L = 0;
                  L < N.length && I;
                  L++
                )
                  I = I[N[L]];
                if ((null != I && (n = this.parse(a.name, I, a.bypass, h)), !n))
                  return g(), !1;
                (n.mapping = a), (a = n);
                break;
              case o.fn:
                var z = a.value,
                  A = null != a.fnValue ? a.fnValue : z(e);
                if (((a.prevFnValue = A), null == A))
                  return (
                    ge(
                      "Custom function mappers may not return null (i.e. `" +
                        a.name +
                        "` for ele `" +
                        e.id() +
                        "` is null)"
                    ),
                    !1
                  );
                if (!(n = this.parse(a.name, A, a.bypass, h)))
                  return (
                    ge(
                      "Custom function mappers may not return invalid values for the property type (i.e. `" +
                        a.name +
                        "` for ele `" +
                        e.id() +
                        "` is invalid)"
                    ),
                    !1
                  );
                (n.mapping = ve(a)), (a = n);
                break;
              case void 0:
                break;
              default:
                return !1;
            }
            return (
              l
                ? ((a.bypassed = c ? u.bypassed : u), (i[a.name] = a))
                : c
                ? (u.bypassed = a)
                : (i[a.name] = a),
              f(),
              !0
            );
          }),
          (si.cleanElements = function (e, t) {
            for (var n = 0; n < e.length; n++) {
              var r = e[n];
              if (
                (this.clearStyleHints(r),
                r.dirtyCompoundBoundsCache(),
                r.dirtyBoundingBoxCache(),
                t)
              )
                for (
                  var a = r._private.style, i = Object.keys(a), o = 0;
                  o < i.length;
                  o++
                ) {
                  var s = i[o],
                    l = a[s];
                  null != l && (l.bypass ? (l.bypassed = null) : (a[s] = null));
                }
              else r._private.style = {};
            }
          }),
          (si.update = function () {
            this._private.cy.mutableElements().updateStyle();
          }),
          (si.updateTransitions = function (e, t) {
            var n = this,
              r = e._private,
              a = e.pstyle("transition-property").value,
              i = e.pstyle("transition-duration").pfValue,
              o = e.pstyle("transition-delay").pfValue;
            if (a.length > 0 && i > 0) {
              for (var s = {}, l = !1, u = 0; u < a.length; u++) {
                var c = a[u],
                  d = e.pstyle(c),
                  h = t[c];
                if (h) {
                  var p = h.prev,
                    f = null != h.next ? h.next : d,
                    g = !1,
                    v = void 0,
                    y = 1e-6;
                  p &&
                    (k(p.pfValue) && k(f.pfValue)
                      ? ((g = f.pfValue - p.pfValue), (v = p.pfValue + y * g))
                      : k(p.value) && k(f.value)
                      ? ((g = f.value - p.value), (v = p.value + y * g))
                      : w(p.value) &&
                        w(f.value) &&
                        ((g =
                          p.value[0] !== f.value[0] ||
                          p.value[1] !== f.value[1] ||
                          p.value[2] !== f.value[2]),
                        (v = p.strValue)),
                    g &&
                      ((s[c] = f.strValue),
                      this.applyBypass(e, c, v),
                      (l = !0)));
                }
              }
              if (!l) return;
              (r.transitioning = !0),
                new qn(function (t) {
                  o > 0 ? e.delayAnimation(o).play().promise().then(t) : t();
                })
                  .then(function () {
                    return e
                      .animation({
                        style: s,
                        duration: i,
                        easing: e.pstyle("transition-timing-function").value,
                        queue: !1,
                      })
                      .play()
                      .promise();
                  })
                  .then(function () {
                    n.removeBypasses(e, a),
                      e.emitAndNotify("style"),
                      (r.transitioning = !1);
                  });
            } else
              r.transitioning &&
                (this.removeBypasses(e, a),
                e.emitAndNotify("style"),
                (r.transitioning = !1));
          }),
          (si.checkTrigger = function (e, t, n, r, a, i) {
            var o = this.properties[t],
              s = a(o);
            null != s && s(n, r) && i(o);
          }),
          (si.checkZOrderTrigger = function (e, t, n, r) {
            var a = this;
            this.checkTrigger(
              e,
              t,
              n,
              r,
              function (e) {
                return e.triggersZOrder;
              },
              function () {
                a._private.cy.notify("zorder", e);
              }
            );
          }),
          (si.checkBoundsTrigger = function (e, t, n, r) {
            this.checkTrigger(
              e,
              t,
              n,
              r,
              function (e) {
                return e.triggersBounds;
              },
              function (a) {
                e.dirtyCompoundBoundsCache(),
                  e.dirtyBoundingBoxCache(),
                  "curve-style" !== t ||
                    ("bezier" !== n && "bezier" !== r) ||
                    !a.triggersBoundsOfParallelBeziers ||
                    e.parallelEdges().forEach(function (e) {
                      e.isBundledBezier() && e.dirtyBoundingBoxCache();
                    });
              }
            );
          }),
          (si.checkTriggers = function (e, t, n, r) {
            e.dirtyStyleCache(),
              this.checkZOrderTrigger(e, t, n, r),
              this.checkBoundsTrigger(e, t, n, r);
          });
        var ui = {
            applyBypass: function (e, t, n, r) {
              var a = [];
              if ("*" === t || "**" === t) {
                if (void 0 !== n)
                  for (var i = 0; i < this.properties.length; i++) {
                    var o = this.properties[i].name,
                      s = this.parse(o, n, !0);
                    s && a.push(s);
                  }
              } else if (b(t)) {
                var l = this.parse(t, n, !0);
                l && a.push(l);
              } else {
                if (!E(t)) return !1;
                var u = t;
                r = n;
                for (var c = Object.keys(u), d = 0; d < c.length; d++) {
                  var h = c[d],
                    p = u[h];
                  if ((void 0 === p && (p = u[L(h)]), void 0 !== p)) {
                    var f = this.parse(h, p, !0);
                    f && a.push(f);
                  }
                }
              }
              if (0 === a.length) return !1;
              for (var g = !1, v = 0; v < e.length; v++) {
                for (
                  var y = e[v], m = {}, x = void 0, w = 0;
                  w < a.length;
                  w++
                ) {
                  var k = a[w];
                  if (r) {
                    var C = y.pstyle(k.name);
                    x = m[k.name] = { prev: C };
                  }
                  (g = this.applyParsedProperty(y, ve(k)) || g),
                    r && (x.next = y.pstyle(k.name));
                }
                g && this.updateStyleHints(y),
                  r && this.updateTransitions(y, m, !0);
              }
              return g;
            },
            overrideBypass: function (e, t, n) {
              t = I(t);
              for (var r = 0; r < e.length; r++) {
                var a = e[r],
                  i = a._private.style[t],
                  o = this.properties[t].type,
                  s = o.color,
                  l = o.mutiple,
                  u = i ? (null != i.pfValue ? i.pfValue : i.value) : null;
                i && i.bypass
                  ? ((i.value = n),
                    null != i.pfValue && (i.pfValue = n),
                    (i.strValue = s
                      ? "rgb(" + n.join(",") + ")"
                      : l
                      ? n.join(" ")
                      : "" + n),
                    this.updateStyleHints(a))
                  : this.applyBypass(a, t, n),
                  this.checkTriggers(a, t, u, n);
              }
            },
            removeAllBypasses: function (e, t) {
              return this.removeBypasses(e, this.propertyNames, t);
            },
            removeBypasses: function (e, t, n) {
              for (var r = 0; r < e.length; r++) {
                for (var a = e[r], i = {}, o = 0; o < t.length; o++) {
                  var s = t[o],
                    l = this.properties[s],
                    u = a.pstyle(l.name);
                  if (u && u.bypass) {
                    var c = this.parse(s, "", !0),
                      d = (i[l.name] = { prev: u });
                    this.applyParsedProperty(a, c), (d.next = a.pstyle(l.name));
                  }
                }
                this.updateStyleHints(a), n && this.updateTransitions(a, i, !0);
              }
            },
          },
          ci = {
            getEmSizeInPixels: function () {
              var e = this.containerCss("font-size");
              return null != e ? parseFloat(e) : 1;
            },
            containerCss: function (e) {
              var t = this._private.cy.container();
              if (h && t && h.getComputedStyle)
                return h.getComputedStyle(t).getPropertyValue(e);
            },
          },
          di = {
            getRenderedStyle: function (e, t) {
              return t
                ? this.getStylePropertyValue(e, t, !0)
                : this.getRawStyle(e, !0);
            },
            getRawStyle: function (e, t) {
              var n = this;
              if ((e = e[0])) {
                for (var r = {}, a = 0; a < n.properties.length; a++) {
                  var i = n.properties[a],
                    o = n.getStylePropertyValue(e, i.name, t);
                  null != o && ((r[i.name] = o), (r[L(i.name)] = o));
                }
                return r;
              }
            },
            getIndexedStyle: function (e, t, n, r) {
              var a = e.pstyle(t)[n][r];
              return null != a ? a : e.cy().style().getDefaultProperty(t)[n][0];
            },
            getStylePropertyValue: function (e, t, n) {
              if ((e = e[0])) {
                var r = this.properties[t];
                r.alias && (r = r.pointsTo);
                var a = r.type,
                  i = e.pstyle(r.name);
                if (i) {
                  var o = i.value,
                    s = i.units,
                    l = i.strValue;
                  if (n && a.number && null != o && k(o)) {
                    var u = e.cy().zoom(),
                      c = function (e) {
                        return e * u;
                      },
                      d = function (e, t) {
                        return c(e) + t;
                      },
                      h = w(o);
                    return (
                      h
                        ? s.every(function (e) {
                            return null != e;
                          })
                        : null != s
                    )
                      ? h
                        ? o
                            .map(function (e, t) {
                              return d(e, s[t]);
                            })
                            .join(" ")
                        : d(o, s)
                      : h
                      ? o
                          .map(function (e) {
                            return b(e) ? e : "" + c(e);
                          })
                          .join(" ")
                      : "" + c(o);
                  }
                  if (null != l) return l;
                }
                return null;
              }
            },
            getAnimationStartStyle: function (e, t) {
              for (var n = {}, r = 0; r < t.length; r++) {
                var a = t[r].name,
                  i = e.pstyle(a);
                void 0 !== i &&
                  (i = E(i) ? this.parse(a, i.strValue) : this.parse(a, i)),
                  i && (n[a] = i);
              }
              return n;
            },
            getPropsList: function (e) {
              var t = [],
                n = e,
                r = this.properties;
              if (n)
                for (var a = Object.keys(n), i = 0; i < a.length; i++) {
                  var o = a[i],
                    s = n[o],
                    l = r[o] || r[I(o)],
                    u = this.parse(l.name, s);
                  u && t.push(u);
                }
              return t;
            },
            getNonDefaultPropertiesHash: function (e, t, n) {
              var r,
                a,
                i,
                o,
                s,
                l,
                u = n.slice();
              for (s = 0; s < t.length; s++)
                if (((r = t[s]), null != (a = e.pstyle(r, !1))))
                  if (null != a.pfValue)
                    (u[0] = Q(o, u[0])), (u[1] = J(o, u[1]));
                  else
                    for (i = a.strValue, l = 0; l < i.length; l++)
                      (o = i.charCodeAt(l)),
                        (u[0] = Q(o, u[0])),
                        (u[1] = J(o, u[1]));
              return u;
            },
          };
        di.getPropertiesHash = di.getNonDefaultPropertiesHash;
        var hi = {
            appendFromJson: function (e) {
              for (var t = this, n = 0; n < e.length; n++) {
                var r = e[n],
                  a = r.selector,
                  i = r.style || r.css,
                  o = Object.keys(i);
                t.selector(a);
                for (var s = 0; s < o.length; s++) {
                  var l = o[s],
                    u = i[l];
                  t.css(l, u);
                }
              }
              return t;
            },
            fromJson: function (e) {
              var t = this;
              return t.resetToDefault(), t.appendFromJson(e), t;
            },
            json: function () {
              for (var e = [], t = this.defaultLength; t < this.length; t++) {
                for (
                  var n = this[t],
                    r = n.selector,
                    a = n.properties,
                    i = {},
                    o = 0;
                  o < a.length;
                  o++
                ) {
                  var s = a[o];
                  i[s.name] = s.strValue;
                }
                e.push({ selector: r ? r.toString() : "core", style: i });
              }
              return e;
            },
          },
          pi = {
            appendFromString: function (e) {
              var t,
                n,
                r,
                a = this,
                i = "" + e;
              function o() {
                i = i.length > t.length ? i.substr(t.length) : "";
              }
              function s() {
                n = n.length > r.length ? n.substr(r.length) : "";
              }
              for (
                i = i.replace(/[/][*](\s|.)+?[*][/]/g, "");
                !i.match(/^\s*$/);

              ) {
                var l = i.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
                if (!l) {
                  ge(
                    "Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " +
                      i
                  );
                  break;
                }
                t = l[0];
                var u = l[1];
                if ("core" !== u && new lr(u).invalid)
                  ge(
                    "Skipping parsing of block: Invalid selector found in string stylesheet: " +
                      u
                  ),
                    o();
                else {
                  var c = l[2],
                    d = !1;
                  n = c;
                  for (var h = []; !n.match(/^\s*$/); ) {
                    var p = n.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);
                    if (!p) {
                      ge(
                        "Skipping parsing of block: Invalid formatting of style property and value definitions found in:" +
                          c
                      ),
                        (d = !0);
                      break;
                    }
                    r = p[0];
                    var f = p[1],
                      g = p[2];
                    this.properties[f]
                      ? a.parse(f, g)
                        ? (h.push({ name: f, val: g }), s())
                        : (ge(
                            "Skipping property: Invalid property definition in: " +
                              r
                          ),
                          s())
                      : (ge(
                          "Skipping property: Invalid property name in: " + r
                        ),
                        s());
                  }
                  if (d) {
                    o();
                    break;
                  }
                  a.selector(u);
                  for (var v = 0; v < h.length; v++) {
                    var y = h[v];
                    a.css(y.name, y.val);
                  }
                  o();
                }
              }
              return a;
            },
            fromString: function (e) {
              var t = this;
              return t.resetToDefault(), t.appendFromString(e), t;
            },
          },
          fi = {};
        !(function () {
          var e = O,
            t = function (e) {
              return "^" + e + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
            },
            n = function (t) {
              var n =
                e +
                "|\\w+|rgb[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|hsl[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
              return (
                "^" +
                t +
                "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" +
                e +
                ")\\s*\\,\\s*(" +
                e +
                ")\\s*,\\s*(" +
                n +
                ")\\s*\\,\\s*(" +
                n +
                ")\\)$"
              );
            },
            r = [
              "^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
              "^(none)$",
              "^(.+)$",
            ];
          fi.types = {
            time: { number: !0, min: 0, units: "s|ms", implicitUnits: "ms" },
            percent: {
              number: !0,
              min: 0,
              max: 100,
              units: "%",
              implicitUnits: "%",
            },
            percentages: {
              number: !0,
              min: 0,
              max: 100,
              units: "%",
              implicitUnits: "%",
              multiple: !0,
            },
            zeroOneNumber: { number: !0, min: 0, max: 1, unitless: !0 },
            zeroOneNumbers: {
              number: !0,
              min: 0,
              max: 1,
              unitless: !0,
              multiple: !0,
            },
            nOneOneNumber: { number: !0, min: -1, max: 1, unitless: !0 },
            nonNegativeInt: { number: !0, min: 0, integer: !0, unitless: !0 },
            position: { enums: ["parent", "origin"] },
            nodeSize: { number: !0, min: 0, enums: ["label"] },
            number: { number: !0, unitless: !0 },
            numbers: { number: !0, unitless: !0, multiple: !0 },
            positiveNumber: { number: !0, unitless: !0, min: 0, strictMin: !0 },
            size: { number: !0, min: 0 },
            bidirectionalSize: { number: !0 },
            bidirectionalSizeMaybePercent: { number: !0, allowPercent: !0 },
            bidirectionalSizes: { number: !0, multiple: !0 },
            sizeMaybePercent: { number: !0, min: 0, allowPercent: !0 },
            axisDirection: {
              enums: [
                "horizontal",
                "leftward",
                "rightward",
                "vertical",
                "upward",
                "downward",
                "auto",
              ],
            },
            paddingRelativeTo: {
              enums: ["width", "height", "average", "min", "max"],
            },
            bgWH: {
              number: !0,
              min: 0,
              allowPercent: !0,
              enums: ["auto"],
              multiple: !0,
            },
            bgPos: { number: !0, allowPercent: !0, multiple: !0 },
            bgRelativeTo: { enums: ["inner", "include-padding"], multiple: !0 },
            bgRepeat: {
              enums: ["repeat", "repeat-x", "repeat-y", "no-repeat"],
              multiple: !0,
            },
            bgFit: { enums: ["none", "contain", "cover"], multiple: !0 },
            bgCrossOrigin: {
              enums: ["anonymous", "use-credentials"],
              multiple: !0,
            },
            bgClip: { enums: ["none", "node"], multiple: !0 },
            bgContainment: { enums: ["inside", "over"], multiple: !0 },
            color: { color: !0 },
            colors: { color: !0, multiple: !0 },
            fill: { enums: ["solid", "linear-gradient", "radial-gradient"] },
            bool: { enums: ["yes", "no"] },
            bools: { enums: ["yes", "no"], multiple: !0 },
            lineStyle: { enums: ["solid", "dotted", "dashed"] },
            lineCap: { enums: ["butt", "round", "square"] },
            borderStyle: { enums: ["solid", "dotted", "dashed", "double"] },
            curveStyle: {
              enums: [
                "bezier",
                "unbundled-bezier",
                "haystack",
                "segments",
                "straight",
                "taxi",
              ],
            },
            fontFamily: { regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$' },
            fontStyle: { enums: ["italic", "normal", "oblique"] },
            fontWeight: {
              enums: [
                "normal",
                "bold",
                "bolder",
                "lighter",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "800",
                "900",
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900,
              ],
            },
            textDecoration: {
              enums: ["none", "underline", "overline", "line-through"],
            },
            textTransform: { enums: ["none", "uppercase", "lowercase"] },
            textWrap: { enums: ["none", "wrap", "ellipsis"] },
            textOverflowWrap: { enums: ["whitespace", "anywhere"] },
            textBackgroundShape: {
              enums: ["rectangle", "roundrectangle", "round-rectangle"],
            },
            nodeShape: {
              enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "cutrectangle",
                "cut-rectangle",
                "bottomroundrectangle",
                "bottom-round-rectangle",
                "barrel",
                "ellipse",
                "triangle",
                "round-triangle",
                "square",
                "pentagon",
                "round-pentagon",
                "hexagon",
                "round-hexagon",
                "concavehexagon",
                "concave-hexagon",
                "heptagon",
                "round-heptagon",
                "octagon",
                "round-octagon",
                "tag",
                "round-tag",
                "star",
                "diamond",
                "round-diamond",
                "vee",
                "rhomboid",
                "polygon",
              ],
            },
            compoundIncludeLabels: { enums: ["include", "exclude"] },
            arrowShape: {
              enums: [
                "tee",
                "triangle",
                "triangle-tee",
                "circle-triangle",
                "triangle-cross",
                "triangle-backcurve",
                "vee",
                "square",
                "circle",
                "diamond",
                "chevron",
                "none",
              ],
            },
            arrowFill: { enums: ["filled", "hollow"] },
            display: { enums: ["element", "none"] },
            visibility: { enums: ["hidden", "visible"] },
            zCompoundDepth: { enums: ["bottom", "orphan", "auto", "top"] },
            zIndexCompare: { enums: ["auto", "manual"] },
            valign: { enums: ["top", "center", "bottom"] },
            halign: { enums: ["left", "center", "right"] },
            justification: { enums: ["left", "center", "right", "auto"] },
            text: { string: !0 },
            data: { mapping: !0, regex: t("data") },
            layoutData: { mapping: !0, regex: t("layoutData") },
            scratch: { mapping: !0, regex: t("scratch") },
            mapData: { mapping: !0, regex: n("mapData") },
            mapLayoutData: { mapping: !0, regex: n("mapLayoutData") },
            mapScratch: { mapping: !0, regex: n("mapScratch") },
            fn: { mapping: !0, fn: !0 },
            url: { regexes: r, singleRegexMatchValue: !0 },
            urls: { regexes: r, singleRegexMatchValue: !0, multiple: !0 },
            propList: { propList: !0 },
            angle: { number: !0, units: "deg|rad", implicitUnits: "rad" },
            textRotation: {
              number: !0,
              units: "deg|rad",
              implicitUnits: "rad",
              enums: ["none", "autorotate"],
            },
            polygonPointList: {
              number: !0,
              multiple: !0,
              evenMultiple: !0,
              min: -1,
              max: 1,
              unitless: !0,
            },
            edgeDistances: { enums: ["intersection", "node-position"] },
            edgeEndpoint: {
              number: !0,
              multiple: !0,
              units: "%|px|em|deg|rad",
              implicitUnits: "px",
              enums: [
                "inside-to-node",
                "outside-to-node",
                "outside-to-node-or-label",
                "outside-to-line",
                "outside-to-line-or-label",
              ],
              singleEnum: !0,
              validate: function (e, t) {
                switch (e.length) {
                  case 2:
                    return (
                      "deg" !== t[0] &&
                      "rad" !== t[0] &&
                      "deg" !== t[1] &&
                      "rad" !== t[1]
                    );
                  case 1:
                    return b(e[0]) || "deg" === t[0] || "rad" === t[0];
                  default:
                    return !1;
                }
              },
            },
            easing: {
              regexes: [
                "^(spring)\\s*\\(\\s*(" + e + ")\\s*,\\s*(" + e + ")\\s*\\)$",
                "^(cubic-bezier)\\s*\\(\\s*(" +
                  e +
                  ")\\s*,\\s*(" +
                  e +
                  ")\\s*,\\s*(" +
                  e +
                  ")\\s*,\\s*(" +
                  e +
                  ")\\s*\\)$",
              ],
              enums: [
                "linear",
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "ease-in-sine",
                "ease-out-sine",
                "ease-in-out-sine",
                "ease-in-quad",
                "ease-out-quad",
                "ease-in-out-quad",
                "ease-in-cubic",
                "ease-out-cubic",
                "ease-in-out-cubic",
                "ease-in-quart",
                "ease-out-quart",
                "ease-in-out-quart",
                "ease-in-quint",
                "ease-out-quint",
                "ease-in-out-quint",
                "ease-in-expo",
                "ease-out-expo",
                "ease-in-out-expo",
                "ease-in-circ",
                "ease-out-circ",
                "ease-in-out-circ",
              ],
            },
            gradientDirection: {
              enums: [
                "to-bottom",
                "to-top",
                "to-left",
                "to-right",
                "to-bottom-right",
                "to-bottom-left",
                "to-top-right",
                "to-top-left",
                "to-right-bottom",
                "to-left-bottom",
                "to-right-top",
                "to-left-top",
              ],
            },
            boundsExpansion: {
              number: !0,
              multiple: !0,
              min: 0,
              validate: function (e) {
                var t = e.length;
                return 1 === t || 2 === t || 4 === t;
              },
            },
          };
          var a = {
              zeroNonZero: function (e, t) {
                return (
                  ((null == e || null == t) && e !== t) ||
                  (0 == e && 0 != t) ||
                  (0 != e && 0 == t)
                );
              },
              any: function (e, t) {
                return e != t;
              },
              emptyNonEmpty: function (e, t) {
                var n = B(e),
                  r = B(t);
                return (n && !r) || (!n && r);
              },
            },
            i = fi.types,
            o = [
              {
                name: "label",
                type: i.text,
                triggersBounds: a.any,
                triggersZOrder: a.emptyNonEmpty,
              },
              {
                name: "text-rotation",
                type: i.textRotation,
                triggersBounds: a.any,
              },
              {
                name: "text-margin-x",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "text-margin-y",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
            ],
            s = [
              { name: "source-label", type: i.text, triggersBounds: a.any },
              {
                name: "source-text-rotation",
                type: i.textRotation,
                triggersBounds: a.any,
              },
              {
                name: "source-text-margin-x",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "source-text-margin-y",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "source-text-offset",
                type: i.size,
                triggersBounds: a.any,
              },
            ],
            l = [
              { name: "target-label", type: i.text, triggersBounds: a.any },
              {
                name: "target-text-rotation",
                type: i.textRotation,
                triggersBounds: a.any,
              },
              {
                name: "target-text-margin-x",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "target-text-margin-y",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "target-text-offset",
                type: i.size,
                triggersBounds: a.any,
              },
            ],
            u = [
              {
                name: "font-family",
                type: i.fontFamily,
                triggersBounds: a.any,
              },
              { name: "font-style", type: i.fontStyle, triggersBounds: a.any },
              {
                name: "font-weight",
                type: i.fontWeight,
                triggersBounds: a.any,
              },
              { name: "font-size", type: i.size, triggersBounds: a.any },
              {
                name: "text-transform",
                type: i.textTransform,
                triggersBounds: a.any,
              },
              { name: "text-wrap", type: i.textWrap, triggersBounds: a.any },
              {
                name: "text-overflow-wrap",
                type: i.textOverflowWrap,
                triggersBounds: a.any,
              },
              { name: "text-max-width", type: i.size, triggersBounds: a.any },
              {
                name: "text-outline-width",
                type: i.size,
                triggersBounds: a.any,
              },
              {
                name: "line-height",
                type: i.positiveNumber,
                triggersBounds: a.any,
              },
            ],
            c = [
              { name: "text-valign", type: i.valign, triggersBounds: a.any },
              { name: "text-halign", type: i.halign, triggersBounds: a.any },
              { name: "color", type: i.color },
              { name: "text-outline-color", type: i.color },
              { name: "text-outline-opacity", type: i.zeroOneNumber },
              { name: "text-background-color", type: i.color },
              { name: "text-background-opacity", type: i.zeroOneNumber },
              {
                name: "text-background-padding",
                type: i.size,
                triggersBounds: a.any,
              },
              { name: "text-border-opacity", type: i.zeroOneNumber },
              { name: "text-border-color", type: i.color },
              {
                name: "text-border-width",
                type: i.size,
                triggersBounds: a.any,
              },
              {
                name: "text-border-style",
                type: i.borderStyle,
                triggersBounds: a.any,
              },
              {
                name: "text-background-shape",
                type: i.textBackgroundShape,
                triggersBounds: a.any,
              },
              { name: "text-justification", type: i.justification },
            ],
            d = [
              { name: "events", type: i.bool },
              { name: "text-events", type: i.bool },
            ],
            h = [
              {
                name: "display",
                type: i.display,
                triggersZOrder: a.any,
                triggersBounds: a.any,
                triggersBoundsOfParallelBeziers: !0,
              },
              { name: "visibility", type: i.visibility, triggersZOrder: a.any },
              {
                name: "opacity",
                type: i.zeroOneNumber,
                triggersZOrder: a.zeroNonZero,
              },
              { name: "text-opacity", type: i.zeroOneNumber },
              { name: "min-zoomed-font-size", type: i.size },
              {
                name: "z-compound-depth",
                type: i.zCompoundDepth,
                triggersZOrder: a.any,
              },
              {
                name: "z-index-compare",
                type: i.zIndexCompare,
                triggersZOrder: a.any,
              },
              {
                name: "z-index",
                type: i.nonNegativeInt,
                triggersZOrder: a.any,
              },
            ],
            p = [
              { name: "overlay-padding", type: i.size, triggersBounds: a.any },
              { name: "overlay-color", type: i.color },
              {
                name: "overlay-opacity",
                type: i.zeroOneNumber,
                triggersBounds: a.zeroNonZero,
              },
            ],
            f = [
              { name: "transition-property", type: i.propList },
              { name: "transition-duration", type: i.time },
              { name: "transition-delay", type: i.time },
              { name: "transition-timing-function", type: i.easing },
            ],
            g = function (e, t) {
              return "label" === t.value ? -e.poolIndex() : t.pfValue;
            },
            v = [
              {
                name: "height",
                type: i.nodeSize,
                triggersBounds: a.any,
                hashOverride: g,
              },
              {
                name: "width",
                type: i.nodeSize,
                triggersBounds: a.any,
                hashOverride: g,
              },
              { name: "shape", type: i.nodeShape, triggersBounds: a.any },
              {
                name: "shape-polygon-points",
                type: i.polygonPointList,
                triggersBounds: a.any,
              },
              { name: "background-color", type: i.color },
              { name: "background-fill", type: i.fill },
              { name: "background-opacity", type: i.zeroOneNumber },
              { name: "background-blacken", type: i.nOneOneNumber },
              { name: "background-gradient-stop-colors", type: i.colors },
              {
                name: "background-gradient-stop-positions",
                type: i.percentages,
              },
              {
                name: "background-gradient-direction",
                type: i.gradientDirection,
              },
              {
                name: "padding",
                type: i.sizeMaybePercent,
                triggersBounds: a.any,
              },
              {
                name: "padding-relative-to",
                type: i.paddingRelativeTo,
                triggersBounds: a.any,
              },
              {
                name: "bounds-expansion",
                type: i.boundsExpansion,
                triggersBounds: a.any,
              },
            ],
            y = [
              { name: "border-color", type: i.color },
              { name: "border-opacity", type: i.zeroOneNumber },
              { name: "border-width", type: i.size, triggersBounds: a.any },
              { name: "border-style", type: i.borderStyle },
            ],
            m = [
              { name: "background-image", type: i.urls },
              { name: "background-image-crossorigin", type: i.bgCrossOrigin },
              { name: "background-image-opacity", type: i.zeroOneNumbers },
              { name: "background-image-containment", type: i.bgContainment },
              { name: "background-image-smoothing", type: i.bools },
              { name: "background-position-x", type: i.bgPos },
              { name: "background-position-y", type: i.bgPos },
              { name: "background-width-relative-to", type: i.bgRelativeTo },
              { name: "background-height-relative-to", type: i.bgRelativeTo },
              { name: "background-repeat", type: i.bgRepeat },
              { name: "background-fit", type: i.bgFit },
              { name: "background-clip", type: i.bgClip },
              { name: "background-width", type: i.bgWH },
              { name: "background-height", type: i.bgWH },
              { name: "background-offset-x", type: i.bgPos },
              { name: "background-offset-y", type: i.bgPos },
            ],
            x = [
              { name: "position", type: i.position, triggersBounds: a.any },
              {
                name: "compound-sizing-wrt-labels",
                type: i.compoundIncludeLabels,
                triggersBounds: a.any,
              },
              { name: "min-width", type: i.size, triggersBounds: a.any },
              {
                name: "min-width-bias-left",
                type: i.sizeMaybePercent,
                triggersBounds: a.any,
              },
              {
                name: "min-width-bias-right",
                type: i.sizeMaybePercent,
                triggersBounds: a.any,
              },
              { name: "min-height", type: i.size, triggersBounds: a.any },
              {
                name: "min-height-bias-top",
                type: i.sizeMaybePercent,
                triggersBounds: a.any,
              },
              {
                name: "min-height-bias-bottom",
                type: i.sizeMaybePercent,
                triggersBounds: a.any,
              },
            ],
            w = [
              { name: "line-style", type: i.lineStyle },
              { name: "line-color", type: i.color },
              { name: "line-fill", type: i.fill },
              { name: "line-cap", type: i.lineCap },
              { name: "line-opacity", type: i.zeroOneNumber },
              { name: "line-dash-pattern", type: i.numbers },
              { name: "line-dash-offset", type: i.number },
              { name: "line-gradient-stop-colors", type: i.colors },
              { name: "line-gradient-stop-positions", type: i.percentages },
              {
                name: "curve-style",
                type: i.curveStyle,
                triggersBounds: a.any,
                triggersBoundsOfParallelBeziers: !0,
              },
              {
                name: "haystack-radius",
                type: i.zeroOneNumber,
                triggersBounds: a.any,
              },
              {
                name: "source-endpoint",
                type: i.edgeEndpoint,
                triggersBounds: a.any,
              },
              {
                name: "target-endpoint",
                type: i.edgeEndpoint,
                triggersBounds: a.any,
              },
              {
                name: "control-point-step-size",
                type: i.size,
                triggersBounds: a.any,
              },
              {
                name: "control-point-distances",
                type: i.bidirectionalSizes,
                triggersBounds: a.any,
              },
              {
                name: "control-point-weights",
                type: i.numbers,
                triggersBounds: a.any,
              },
              {
                name: "segment-distances",
                type: i.bidirectionalSizes,
                triggersBounds: a.any,
              },
              {
                name: "segment-weights",
                type: i.numbers,
                triggersBounds: a.any,
              },
              {
                name: "taxi-turn",
                type: i.bidirectionalSizeMaybePercent,
                triggersBounds: a.any,
              },
              {
                name: "taxi-turn-min-distance",
                type: i.size,
                triggersBounds: a.any,
              },
              {
                name: "taxi-direction",
                type: i.axisDirection,
                triggersBounds: a.any,
              },
              {
                name: "edge-distances",
                type: i.edgeDistances,
                triggersBounds: a.any,
              },
              {
                name: "arrow-scale",
                type: i.positiveNumber,
                triggersBounds: a.any,
              },
              { name: "loop-direction", type: i.angle, triggersBounds: a.any },
              { name: "loop-sweep", type: i.angle, triggersBounds: a.any },
              {
                name: "source-distance-from-node",
                type: i.size,
                triggersBounds: a.any,
              },
              {
                name: "target-distance-from-node",
                type: i.size,
                triggersBounds: a.any,
              },
            ],
            E = [
              { name: "ghost", type: i.bool, triggersBounds: a.any },
              {
                name: "ghost-offset-x",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              {
                name: "ghost-offset-y",
                type: i.bidirectionalSize,
                triggersBounds: a.any,
              },
              { name: "ghost-opacity", type: i.zeroOneNumber },
            ],
            k = [
              { name: "selection-box-color", type: i.color },
              { name: "selection-box-opacity", type: i.zeroOneNumber },
              { name: "selection-box-border-color", type: i.color },
              { name: "selection-box-border-width", type: i.size },
              { name: "active-bg-color", type: i.color },
              { name: "active-bg-opacity", type: i.zeroOneNumber },
              { name: "active-bg-size", type: i.size },
              { name: "outside-texture-bg-color", type: i.color },
              { name: "outside-texture-bg-opacity", type: i.zeroOneNumber },
            ],
            C = [];
          (fi.pieBackgroundN = 16),
            C.push({ name: "pie-size", type: i.sizeMaybePercent });
          for (var S = 1; S <= fi.pieBackgroundN; S++)
            C.push({ name: "pie-" + S + "-background-color", type: i.color }),
              C.push({
                name: "pie-" + S + "-background-size",
                type: i.percent,
              }),
              C.push({
                name: "pie-" + S + "-background-opacity",
                type: i.zeroOneNumber,
              });
          var D = [],
            P = (fi.arrowPrefixes = [
              "source",
              "mid-source",
              "target",
              "mid-target",
            ]);
          [
            { name: "arrow-shape", type: i.arrowShape, triggersBounds: a.any },
            { name: "arrow-color", type: i.color },
            { name: "arrow-fill", type: i.arrowFill },
          ].forEach(function (e) {
            P.forEach(function (t) {
              var n = t + "-" + e.name,
                r = e.type,
                a = e.triggersBounds;
              D.push({ name: n, type: r, triggersBounds: a });
            });
          }, {});
          var T = (fi.properties = [].concat(
              d,
              f,
              h,
              p,
              E,
              c,
              u,
              o,
              s,
              l,
              v,
              y,
              m,
              C,
              x,
              w,
              D,
              k
            )),
            M = (fi.propertyGroups = {
              behavior: d,
              transition: f,
              visibility: h,
              overlay: p,
              ghost: E,
              commonLabel: c,
              labelDimensions: u,
              mainLabel: o,
              sourceLabel: s,
              targetLabel: l,
              nodeBody: v,
              nodeBorder: y,
              backgroundImage: m,
              pie: C,
              compound: x,
              edgeLine: w,
              edgeArrow: D,
              core: k,
            }),
            _ = (fi.propertyGroupNames = {});
          (fi.propertyGroupKeys = Object.keys(M)).forEach(function (e) {
            (_[e] = M[e].map(function (e) {
              return e.name;
            })),
              M[e].forEach(function (t) {
                return (t.groupKey = e);
              });
          });
          var N = (fi.aliases = [
            { name: "content", pointsTo: "label" },
            {
              name: "control-point-distance",
              pointsTo: "control-point-distances",
            },
            { name: "control-point-weight", pointsTo: "control-point-weights" },
            { name: "edge-text-rotation", pointsTo: "text-rotation" },
            { name: "padding-left", pointsTo: "padding" },
            { name: "padding-right", pointsTo: "padding" },
            { name: "padding-top", pointsTo: "padding" },
            { name: "padding-bottom", pointsTo: "padding" },
          ]);
          fi.propertyNames = T.map(function (e) {
            return e.name;
          });
          for (var I = 0; I < T.length; I++) {
            var L = T[I];
            T[L.name] = L;
          }
          for (var z = 0; z < N.length; z++) {
            var A = N[z],
              R = T[A.pointsTo],
              V = { name: A.name, alias: !0, pointsTo: R };
            T.push(V), (T[A.name] = V);
          }
        })(),
          (fi.getDefaultProperty = function (e) {
            return this.getDefaultProperties()[e];
          }),
          (fi.getDefaultProperties = function () {
            var e = this._private;
            if (null != e.defaultProperties) return e.defaultProperties;
            for (
              var t = V(
                  {
                    "selection-box-color": "#ddd",
                    "selection-box-opacity": 0.65,
                    "selection-box-border-color": "#aaa",
                    "selection-box-border-width": 1,
                    "active-bg-color": "black",
                    "active-bg-opacity": 0.15,
                    "active-bg-size": 30,
                    "outside-texture-bg-color": "#000",
                    "outside-texture-bg-opacity": 0.125,
                    events: "yes",
                    "text-events": "no",
                    "text-valign": "top",
                    "text-halign": "center",
                    "text-justification": "auto",
                    "line-height": 1,
                    color: "#000",
                    "text-outline-color": "#000",
                    "text-outline-width": 0,
                    "text-outline-opacity": 1,
                    "text-opacity": 1,
                    "text-decoration": "none",
                    "text-transform": "none",
                    "text-wrap": "none",
                    "text-overflow-wrap": "whitespace",
                    "text-max-width": 9999,
                    "text-background-color": "#000",
                    "text-background-opacity": 0,
                    "text-background-shape": "rectangle",
                    "text-background-padding": 0,
                    "text-border-opacity": 0,
                    "text-border-width": 0,
                    "text-border-style": "solid",
                    "text-border-color": "#000",
                    "font-family": "Helvetica Neue, Helvetica, sans-serif",
                    "font-style": "normal",
                    "font-weight": "normal",
                    "font-size": 16,
                    "min-zoomed-font-size": 0,
                    "text-rotation": "none",
                    "source-text-rotation": "none",
                    "target-text-rotation": "none",
                    visibility: "visible",
                    display: "element",
                    opacity: 1,
                    "z-compound-depth": "auto",
                    "z-index-compare": "auto",
                    "z-index": 0,
                    label: "",
                    "text-margin-x": 0,
                    "text-margin-y": 0,
                    "source-label": "",
                    "source-text-offset": 0,
                    "source-text-margin-x": 0,
                    "source-text-margin-y": 0,
                    "target-label": "",
                    "target-text-offset": 0,
                    "target-text-margin-x": 0,
                    "target-text-margin-y": 0,
                    "overlay-opacity": 0,
                    "overlay-color": "#000",
                    "overlay-padding": 10,
                    "transition-property": "none",
                    "transition-duration": 0,
                    "transition-delay": 0,
                    "transition-timing-function": "linear",
                    "background-blacken": 0,
                    "background-color": "#999",
                    "background-fill": "solid",
                    "background-opacity": 1,
                    "background-image": "none",
                    "background-image-crossorigin": "anonymous",
                    "background-image-opacity": 1,
                    "background-image-containment": "inside",
                    "background-image-smoothing": "yes",
                    "background-position-x": "50%",
                    "background-position-y": "50%",
                    "background-offset-x": 0,
                    "background-offset-y": 0,
                    "background-width-relative-to": "include-padding",
                    "background-height-relative-to": "include-padding",
                    "background-repeat": "no-repeat",
                    "background-fit": "none",
                    "background-clip": "node",
                    "background-width": "auto",
                    "background-height": "auto",
                    "border-color": "#000",
                    "border-opacity": 1,
                    "border-width": 0,
                    "border-style": "solid",
                    height: 30,
                    width: 30,
                    shape: "ellipse",
                    "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
                    "bounds-expansion": 0,
                    "background-gradient-direction": "to-bottom",
                    "background-gradient-stop-colors": "#999",
                    "background-gradient-stop-positions": "0%",
                    ghost: "no",
                    "ghost-offset-y": 0,
                    "ghost-offset-x": 0,
                    "ghost-opacity": 0,
                    padding: 0,
                    "padding-relative-to": "width",
                    position: "origin",
                    "compound-sizing-wrt-labels": "include",
                    "min-width": 0,
                    "min-width-bias-left": 0,
                    "min-width-bias-right": 0,
                    "min-height": 0,
                    "min-height-bias-top": 0,
                    "min-height-bias-bottom": 0,
                  },
                  { "pie-size": "100%" },
                  [
                    { name: "pie-{{i}}-background-color", value: "black" },
                    { name: "pie-{{i}}-background-size", value: "0%" },
                    { name: "pie-{{i}}-background-opacity", value: 1 },
                  ].reduce(function (e, t) {
                    for (var n = 1; n <= fi.pieBackgroundN; n++) {
                      var r = t.name.replace("{{i}}", n),
                        a = t.value;
                      e[r] = a;
                    }
                    return e;
                  }, {}),
                  {
                    "line-style": "solid",
                    "line-color": "#999",
                    "line-fill": "solid",
                    "line-cap": "butt",
                    "line-opacity": 1,
                    "line-gradient-stop-colors": "#999",
                    "line-gradient-stop-positions": "0%",
                    "control-point-step-size": 40,
                    "control-point-weights": 0.5,
                    "segment-weights": 0.5,
                    "segment-distances": 20,
                    "taxi-turn": "50%",
                    "taxi-turn-min-distance": 10,
                    "taxi-direction": "auto",
                    "edge-distances": "intersection",
                    "curve-style": "haystack",
                    "haystack-radius": 0,
                    "arrow-scale": 1,
                    "loop-direction": "-45deg",
                    "loop-sweep": "-90deg",
                    "source-distance-from-node": 0,
                    "target-distance-from-node": 0,
                    "source-endpoint": "outside-to-node",
                    "target-endpoint": "outside-to-node",
                    "line-dash-pattern": [6, 3],
                    "line-dash-offset": 0,
                  },
                  [
                    { name: "arrow-shape", value: "none" },
                    { name: "arrow-color", value: "#999" },
                    { name: "arrow-fill", value: "filled" },
                  ].reduce(function (e, t) {
                    return (
                      fi.arrowPrefixes.forEach(function (n) {
                        var r = n + "-" + t.name,
                          a = t.value;
                        e[r] = a;
                      }),
                      e
                    );
                  }, {})
                ),
                n = {},
                r = 0;
              r < this.properties.length;
              r++
            ) {
              var a = this.properties[r];
              if (!a.pointsTo) {
                var i = a.name,
                  o = t[i],
                  s = this.parse(i, o);
                n[i] = s;
              }
            }
            return (e.defaultProperties = n), e.defaultProperties;
          }),
          (fi.addDefaultStylesheet = function () {
            this.selector(":parent")
              .css({
                shape: "rectangle",
                padding: 10,
                "background-color": "#eee",
                "border-color": "#ccc",
                "border-width": 1,
              })
              .selector("edge")
              .css({ width: 3 })
              .selector(":loop")
              .css({ "curve-style": "bezier" })
              .selector("edge:compound")
              .css({
                "curve-style": "bezier",
                "source-endpoint": "outside-to-line",
                "target-endpoint": "outside-to-line",
              })
              .selector(":selected")
              .css({
                "background-color": "#0169D9",
                "line-color": "#0169D9",
                "source-arrow-color": "#0169D9",
                "target-arrow-color": "#0169D9",
                "mid-source-arrow-color": "#0169D9",
                "mid-target-arrow-color": "#0169D9",
              })
              .selector(":parent:selected")
              .css({ "background-color": "#CCE1F9", "border-color": "#aec8e5" })
              .selector(":active")
              .css({
                "overlay-color": "black",
                "overlay-padding": 10,
                "overlay-opacity": 0.25,
              }),
              (this.defaultLength = this.length);
          });
        var gi = {
          parse: function (e, t, n, r) {
            var a = this;
            if (x(t)) return a.parseImplWarn(e, t, n, r);
            var i,
              o = re(
                e,
                "" + t,
                n ? "t" : "f",
                "mapping" === r || !0 === r || !1 === r || null == r
                  ? "dontcare"
                  : r
              ),
              s = (a.propCache = a.propCache || []);
            return (
              (i = s[o]) || (i = s[o] = a.parseImplWarn(e, t, n, r)),
              (n || "mapping" === r) && (i = ve(i)) && (i.value = ve(i.value)),
              i
            );
          },
          parseImplWarn: function (e, t, n, r) {
            var a = this.parseImpl(e, t, n, r);
            return (
              a ||
                null == t ||
                ge(
                  "The style property `"
                    .concat(e, ": ")
                    .concat(t, "` is invalid")
                ),
              !a ||
                ("width" !== a.name && "height" !== a.name) ||
                "label" !== t ||
                ge(
                  "The style value of `label` is deprecated for `" +
                    a.name +
                    "`"
                ),
              a
            );
          },
        };
        gi.parseImpl = function (e, t, n, r) {
          var a = this;
          e = I(e);
          var i = a.properties[e],
            o = t,
            s = a.types;
          if (!i) return null;
          if (void 0 === t) return null;
          i.alias && ((i = i.pointsTo), (e = i.name));
          var l = b(t);
          l && (t = t.trim());
          var u,
            c,
            d = i.type;
          if (!d) return null;
          if (n && ("" === t || null === t))
            return { name: e, value: t, bypass: !0, deleteBypass: !0 };
          if (x(t))
            return {
              name: e,
              value: t,
              strValue: "fn",
              mapped: s.fn,
              bypass: n,
            };
          if (!l || r || t.length < 7 || "a" !== t[1]);
          else {
            if (
              t.length >= 7 &&
              "d" === t[0] &&
              (u = new RegExp(s.data.regex).exec(t))
            ) {
              if (n) return !1;
              var h = s.data;
              return {
                name: e,
                value: u,
                strValue: "" + t,
                mapped: h,
                field: u[1],
                bypass: n,
              };
            }
            if (
              t.length >= 10 &&
              "m" === t[0] &&
              (c = new RegExp(s.mapData.regex).exec(t))
            ) {
              if (n) return !1;
              if (d.multiple) return !1;
              var p = s.mapData;
              if (!d.color && !d.number) return !1;
              var f = this.parse(e, c[4]);
              if (!f || f.mapped) return !1;
              var g = this.parse(e, c[5]);
              if (!g || g.mapped) return !1;
              if (f.pfValue === g.pfValue || f.strValue === g.strValue)
                return (
                  ge(
                    "`" +
                      e +
                      ": " +
                      t +
                      "` is not a valid mapper because the output range is zero; converting to `" +
                      e +
                      ": " +
                      f.strValue +
                      "`"
                  ),
                  this.parse(e, f.strValue)
                );
              if (d.color) {
                var v = f.value,
                  y = g.value;
                if (
                  !(
                    v[0] !== y[0] ||
                    v[1] !== y[1] ||
                    v[2] !== y[2] ||
                    (v[3] !== y[3] &&
                      ((null != v[3] && 1 !== v[3]) ||
                        (null != y[3] && 1 !== y[3])))
                  )
                )
                  return !1;
              }
              return {
                name: e,
                value: c,
                strValue: "" + t,
                mapped: p,
                field: c[1],
                fieldMin: parseFloat(c[2]),
                fieldMax: parseFloat(c[3]),
                valueMin: f.value,
                valueMax: g.value,
                bypass: n,
              };
            }
          }
          if (d.multiple && "multiple" !== r) {
            var m;
            if (
              ((m = l ? t.split(/\s+/) : w(t) ? t : [t]),
              d.evenMultiple && m.length % 2 != 0)
            )
              return null;
            for (
              var E = [], C = [], S = [], D = "", P = !1, T = 0;
              T < m.length;
              T++
            ) {
              var M = a.parse(e, m[T], n, "multiple");
              (P = P || b(M.value)),
                E.push(M.value),
                S.push(null != M.pfValue ? M.pfValue : M.value),
                C.push(M.units),
                (D += (T > 0 ? " " : "") + M.strValue);
            }
            return d.validate && !d.validate(E, C)
              ? null
              : d.singleEnum && P
              ? 1 === E.length && b(E[0])
                ? { name: e, value: E[0], strValue: E[0], bypass: n }
                : null
              : {
                  name: e,
                  value: E,
                  pfValue: S,
                  strValue: D,
                  bypass: n,
                  units: C,
                };
          }
          var B,
            _,
            N,
            L = function () {
              for (var r = 0; r < d.enums.length; r++)
                if (d.enums[r] === t)
                  return { name: e, value: t, strValue: "" + t, bypass: n };
              return null;
            };
          if (d.number) {
            var z,
              A = "px";
            if (
              (d.units && (z = d.units),
              d.implicitUnits && (A = d.implicitUnits),
              !d.unitless)
            )
              if (l) {
                var R = "px|em" + (d.allowPercent ? "|\\%" : "");
                z && (R = z);
                var V = t.match("^(" + O + ")(" + R + ")?$");
                V && ((t = V[1]), (z = V[2] || A));
              } else (z && !d.implicitUnits) || (z = A);
            if (((t = parseFloat(t)), isNaN(t) && void 0 === d.enums))
              return null;
            if (isNaN(t) && void 0 !== d.enums) return (t = o), L();
            if (d.integer && (!k((_ = t)) || Math.floor(_) !== _)) return null;
            if (
              (void 0 !== d.min &&
                (t < d.min || (d.strictMin && t === d.min))) ||
              (void 0 !== d.max && (t > d.max || (d.strictMax && t === d.max)))
            )
              return null;
            var j = {
              name: e,
              value: t,
              strValue: "" + t + (z || ""),
              units: z,
              bypass: n,
            };
            return (
              d.unitless || ("px" !== z && "em" !== z)
                ? (j.pfValue = t)
                : (j.pfValue =
                    "px" !== z && z ? this.getEmSizeInPixels() * t : t),
              ("ms" !== z && "s" !== z) ||
                (j.pfValue = "ms" === z ? t : 1e3 * t),
              ("deg" !== z && "rad" !== z) ||
                (j.pfValue = "rad" === z ? t : ((B = t), (Math.PI * B) / 180)),
              "%" === z && (j.pfValue = t / 100),
              j
            );
          }
          if (d.propList) {
            var q = [],
              X = "" + t;
            if ("none" === X);
            else {
              for (var Y = X.split(/\s*,\s*|\s+/), W = 0; W < Y.length; W++) {
                var H = Y[W].trim();
                a.properties[H]
                  ? q.push(H)
                  : ge("`" + H + "` is not a valid property name");
              }
              if (0 === q.length) return null;
            }
            return {
              name: e,
              value: q,
              strValue: 0 === q.length ? "none" : q.join(" "),
              bypass: n,
            };
          }
          if (d.color) {
            var $ =
              (w((N = t)) ? N : null) ||
              (function (e) {
                return F[e.toLowerCase()];
              })(N) ||
              (function (e) {
                if ((4 === e.length || 7 === e.length) && "#" === e[0]) {
                  var t,
                    n,
                    r,
                    a = 16;
                  return (
                    4 === e.length
                      ? ((t = parseInt(e[1] + e[1], a)),
                        (n = parseInt(e[2] + e[2], a)),
                        (r = parseInt(e[3] + e[3], a)))
                      : ((t = parseInt(e[1] + e[2], a)),
                        (n = parseInt(e[3] + e[4], a)),
                        (r = parseInt(e[5] + e[6], a))),
                    [t, n, r]
                  );
                }
              })(N) ||
              (function (e) {
                var t,
                  n = new RegExp(
                    "^rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$"
                  ).exec(e);
                if (n) {
                  t = [];
                  for (var r = [], a = 1; a <= 3; a++) {
                    var i = n[a];
                    if (
                      ("%" === i[i.length - 1] && (r[a] = !0),
                      (i = parseFloat(i)),
                      r[a] && (i = (i / 100) * 255),
                      i < 0 || i > 255)
                    )
                      return;
                    t.push(Math.floor(i));
                  }
                  var o = r[1] || r[2] || r[3],
                    s = r[1] && r[2] && r[3];
                  if (o && !s) return;
                  var l = n[4];
                  if (void 0 !== l) {
                    if ((l = parseFloat(l)) < 0 || l > 1) return;
                    t.push(l);
                  }
                }
                return t;
              })(N) ||
              (function (e) {
                var t, n, r, a, i, o, s, l;
                function u(e, t, n) {
                  return (
                    n < 0 && (n += 1),
                    n > 1 && (n -= 1),
                    n < 1 / 6
                      ? e + 6 * (t - e) * n
                      : n < 0.5
                      ? t
                      : n < 2 / 3
                      ? e + (t - e) * (2 / 3 - n) * 6
                      : e
                  );
                }
                var c = new RegExp(
                  "^hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$"
                ).exec(e);
                if (c) {
                  if (
                    ((n = parseInt(c[1])) < 0
                      ? (n = (360 - ((-1 * n) % 360)) % 360)
                      : n > 360 && (n %= 360),
                    (n /= 360),
                    (r = parseFloat(c[2])) < 0 || r > 100)
                  )
                    return;
                  if (((r /= 100), (a = parseFloat(c[3])) < 0 || a > 100))
                    return;
                  if (
                    ((a /= 100),
                    void 0 !== (i = c[4]) && ((i = parseFloat(i)) < 0 || i > 1))
                  )
                    return;
                  if (0 === r) o = s = l = Math.round(255 * a);
                  else {
                    var d = a < 0.5 ? a * (1 + r) : a + r - a * r,
                      h = 2 * a - d;
                    (o = Math.round(255 * u(h, d, n + 1 / 3))),
                      (s = Math.round(255 * u(h, d, n))),
                      (l = Math.round(255 * u(h, d, n - 1 / 3)));
                  }
                  t = [o, s, l, i];
                }
                return t;
              })(N);
            return $
              ? {
                  name: e,
                  value: $,
                  pfValue: $,
                  strValue: "rgb(" + $[0] + "," + $[1] + "," + $[2] + ")",
                  bypass: n,
                }
              : null;
          }
          if (d.regex || d.regexes) {
            if (d.enums) {
              var K = L();
              if (K) return K;
            }
            for (
              var G = d.regexes ? d.regexes : [d.regex], U = 0;
              U < G.length;
              U++
            ) {
              var Z = new RegExp(G[U]).exec(t);
              if (Z)
                return {
                  name: e,
                  value: d.singleRegexMatchValue ? Z[1] : Z,
                  strValue: "" + t,
                  bypass: n,
                };
            }
            return null;
          }
          return d.string
            ? { name: e, value: "" + t, strValue: "" + t, bypass: n }
            : d.enums
            ? L()
            : null;
        };
        var vi = function e(t) {
            if (!(this instanceof e)) return new e(t);
            T(t)
              ? ((this._private = { cy: t, coreStyle: {} }),
                (this.length = 0),
                this.resetToDefault())
              : pe("A style must have a core reference");
          },
          yi = vi.prototype;
        (yi.instanceString = function () {
          return "style";
        }),
          (yi.clear = function () {
            for (
              var e = this._private, t = e.cy.elements(), n = 0;
              n < this.length;
              n++
            )
              this[n] = void 0;
            return (
              (this.length = 0),
              (e.contextStyles = {}),
              (e.propDiffs = {}),
              this.cleanElements(t, !0),
              t.forEach(function (e) {
                var t = e[0]._private;
                (t.styleDirty = !0), (t.appliedInitStyle = !1);
              }),
              this
            );
          }),
          (yi.resetToDefault = function () {
            return this.clear(), this.addDefaultStylesheet(), this;
          }),
          (yi.core = function (e) {
            return this._private.coreStyle[e] || this.getDefaultProperty(e);
          }),
          (yi.selector = function (e) {
            var t = "core" === e ? null : new lr(e),
              n = this.length++;
            return (
              (this[n] = {
                selector: t,
                properties: [],
                mappedProperties: [],
                index: n,
              }),
              this
            );
          }),
          (yi.css = function () {
            var e = this,
              t = arguments;
            if (1 === t.length)
              for (var n = t[0], r = 0; r < e.properties.length; r++) {
                var a = e.properties[r],
                  i = n[a.name];
                void 0 === i && (i = n[L(a.name)]),
                  void 0 !== i && this.cssRule(a.name, i);
              }
            else 2 === t.length && this.cssRule(t[0], t[1]);
            return this;
          }),
          (yi.style = yi.css),
          (yi.cssRule = function (e, t) {
            var n = this.parse(e, t);
            if (n) {
              var r = this.length - 1;
              this[r].properties.push(n),
                (this[r].properties[n.name] = n),
                n.name.match(/pie-(\d+)-background-size/) &&
                  n.value &&
                  (this._private.hasPie = !0),
                n.mapped && this[r].mappedProperties.push(n),
                !this[r].selector && (this._private.coreStyle[n.name] = n);
            }
            return this;
          }),
          (yi.append = function (e) {
            return (
              M(e)
                ? e.appendToStyle(this)
                : w(e)
                ? this.appendFromJson(e)
                : b(e) && this.appendFromString(e),
              this
            );
          }),
          (vi.fromJson = function (e, t) {
            var n = new vi(e);
            return n.fromJson(t), n;
          }),
          (vi.fromString = function (e, t) {
            return new vi(e).fromString(t);
          }),
          [si, ui, ci, di, hi, pi, fi, gi].forEach(function (e) {
            V(yi, e);
          }),
          (vi.types = yi.types),
          (vi.properties = yi.properties),
          (vi.propertyGroups = yi.propertyGroups),
          (vi.propertyGroupNames = yi.propertyGroupNames),
          (vi.propertyGroupKeys = yi.propertyGroupKeys);
        var mi = {
            style: function (e) {
              return e && this.setStyle(e).update(), this._private.style;
            },
            setStyle: function (e) {
              var t = this._private;
              return (
                M(e)
                  ? (t.style = e.generateStyle(this))
                  : w(e)
                  ? (t.style = vi.fromJson(this, e))
                  : b(e)
                  ? (t.style = vi.fromString(this, e))
                  : (t.style = vi(this)),
                t.style
              );
            },
            updateStyle: function () {
              this.mutableElements().updateStyle();
            },
          },
          bi = {
            autolock: function (e) {
              return void 0 === e
                ? this._private.autolock
                : ((this._private.autolock = !!e), this);
            },
            autoungrabify: function (e) {
              return void 0 === e
                ? this._private.autoungrabify
                : ((this._private.autoungrabify = !!e), this);
            },
            autounselectify: function (e) {
              return void 0 === e
                ? this._private.autounselectify
                : ((this._private.autounselectify = !!e), this);
            },
            selectionType: function (e) {
              var t = this._private;
              return (
                null == t.selectionType && (t.selectionType = "single"),
                void 0 === e
                  ? t.selectionType
                  : (("additive" !== e && "single" !== e) ||
                      (t.selectionType = e),
                    this)
              );
            },
            panningEnabled: function (e) {
              return void 0 === e
                ? this._private.panningEnabled
                : ((this._private.panningEnabled = !!e), this);
            },
            userPanningEnabled: function (e) {
              return void 0 === e
                ? this._private.userPanningEnabled
                : ((this._private.userPanningEnabled = !!e), this);
            },
            zoomingEnabled: function (e) {
              return void 0 === e
                ? this._private.zoomingEnabled
                : ((this._private.zoomingEnabled = !!e), this);
            },
            userZoomingEnabled: function (e) {
              return void 0 === e
                ? this._private.userZoomingEnabled
                : ((this._private.userZoomingEnabled = !!e), this);
            },
            boxSelectionEnabled: function (e) {
              return void 0 === e
                ? this._private.boxSelectionEnabled
                : ((this._private.boxSelectionEnabled = !!e), this);
            },
            pan: function () {
              var e,
                t,
                n,
                r,
                a,
                i = arguments,
                o = this._private.pan;
              switch (i.length) {
                case 0:
                  return o;
                case 1:
                  if (b(i[0])) return o[(e = i[0])];
                  if (E(i[0])) {
                    if (!this._private.panningEnabled) return this;
                    (r = (n = i[0]).x),
                      (a = n.y),
                      k(r) && (o.x = r),
                      k(a) && (o.y = a),
                      this.emit("pan viewport");
                  }
                  break;
                case 2:
                  if (!this._private.panningEnabled) return this;
                  (e = i[0]),
                    (t = i[1]),
                    ("x" !== e && "y" !== e) || !k(t) || (o[e] = t),
                    this.emit("pan viewport");
              }
              return this.notify("viewport"), this;
            },
            panBy: function (e, t) {
              var n,
                r,
                a,
                i,
                o,
                s = arguments,
                l = this._private.pan;
              if (!this._private.panningEnabled) return this;
              switch (s.length) {
                case 1:
                  E(e) &&
                    ((i = (a = s[0]).x),
                    (o = a.y),
                    k(i) && (l.x += i),
                    k(o) && (l.y += o),
                    this.emit("pan viewport"));
                  break;
                case 2:
                  (r = t),
                    ("x" !== (n = e) && "y" !== n) || !k(r) || (l[n] += r),
                    this.emit("pan viewport");
              }
              return this.notify("viewport"), this;
            },
            fit: function (e, t) {
              var n = this.getFitViewport(e, t);
              if (n) {
                var r = this._private;
                (r.zoom = n.zoom),
                  (r.pan = n.pan),
                  this.emit("pan zoom viewport"),
                  this.notify("viewport");
              }
              return this;
            },
            getFitViewport: function (e, t) {
              if (
                (k(e) && void 0 === t && ((t = e), (e = void 0)),
                this._private.panningEnabled && this._private.zoomingEnabled)
              ) {
                var n, r;
                if (b(e)) {
                  var a = e;
                  e = this.$(a);
                } else if (
                  E((r = e)) &&
                  k(r.x1) &&
                  k(r.x2) &&
                  k(r.y1) &&
                  k(r.y2)
                ) {
                  var i = e;
                  ((n = { x1: i.x1, y1: i.y1, x2: i.x2, y2: i.y2 }).w =
                    n.x2 - n.x1),
                    (n.h = n.y2 - n.y1);
                } else S(e) || (e = this.mutableElements());
                if (!S(e) || !e.empty()) {
                  n = n || e.boundingBox();
                  var o,
                    s = this.width(),
                    l = this.height();
                  if (
                    ((t = k(t) ? t : 0),
                    !isNaN(s) &&
                      !isNaN(l) &&
                      s > 0 &&
                      l > 0 &&
                      !isNaN(n.w) &&
                      !isNaN(n.h) &&
                      n.w > 0 &&
                      n.h > 0)
                  )
                    return {
                      zoom: (o =
                        (o =
                          (o = Math.min((s - 2 * t) / n.w, (l - 2 * t) / n.h)) >
                          this._private.maxZoom
                            ? this._private.maxZoom
                            : o) < this._private.minZoom
                          ? this._private.minZoom
                          : o),
                      pan: {
                        x: (s - o * (n.x1 + n.x2)) / 2,
                        y: (l - o * (n.y1 + n.y2)) / 2,
                      },
                    };
                }
              }
            },
            zoomRange: function (e, t) {
              var n = this._private;
              if (null == t) {
                var r = e;
                (e = r.min), (t = r.max);
              }
              return (
                k(e) && k(t) && e <= t
                  ? ((n.minZoom = e), (n.maxZoom = t))
                  : k(e) && void 0 === t && e <= n.maxZoom
                  ? (n.minZoom = e)
                  : k(t) && void 0 === e && t >= n.minZoom && (n.maxZoom = t),
                this
              );
            },
            minZoom: function (e) {
              return void 0 === e
                ? this._private.minZoom
                : this.zoomRange({ min: e });
            },
            maxZoom: function (e) {
              return void 0 === e
                ? this._private.maxZoom
                : this.zoomRange({ max: e });
            },
            getZoomedViewport: function (e) {
              var t,
                n,
                r = this._private,
                a = r.pan,
                i = r.zoom,
                o = !1;
              if (
                (r.zoomingEnabled || (o = !0),
                k(e)
                  ? (n = e)
                  : E(e) &&
                    ((n = e.level),
                    null != e.position
                      ? (t = Ye(e.position, i, a))
                      : null != e.renderedPosition && (t = e.renderedPosition),
                    null == t || r.panningEnabled || (o = !0)),
                (n =
                  (n = n > r.maxZoom ? r.maxZoom : n) < r.minZoom
                    ? r.minZoom
                    : n),
                o || !k(n) || n === i || (null != t && (!k(t.x) || !k(t.y))))
              )
                return null;
              if (null != t) {
                var s = a,
                  l = i,
                  u = n;
                return {
                  zoomed: !0,
                  panned: !0,
                  zoom: u,
                  pan: {
                    x: (-u / l) * (t.x - s.x) + t.x,
                    y: (-u / l) * (t.y - s.y) + t.y,
                  },
                };
              }
              return { zoomed: !0, panned: !1, zoom: n, pan: a };
            },
            zoom: function (e) {
              if (void 0 === e) return this._private.zoom;
              var t = this.getZoomedViewport(e),
                n = this._private;
              return null != t && t.zoomed
                ? ((n.zoom = t.zoom),
                  t.panned && ((n.pan.x = t.pan.x), (n.pan.y = t.pan.y)),
                  this.emit("zoom" + (t.panned ? " pan" : "") + " viewport"),
                  this.notify("viewport"),
                  this)
                : this;
            },
            viewport: function (e) {
              var t = this._private,
                n = !0,
                r = !0,
                a = [],
                i = !1,
                o = !1;
              if (!e) return this;
              if ((k(e.zoom) || (n = !1), E(e.pan) || (r = !1), !n && !r))
                return this;
              if (n) {
                var s = e.zoom;
                s < t.minZoom || s > t.maxZoom || !t.zoomingEnabled
                  ? (i = !0)
                  : ((t.zoom = s), a.push("zoom"));
              }
              if (r && (!i || !e.cancelOnFailedZoom) && t.panningEnabled) {
                var l = e.pan;
                k(l.x) && ((t.pan.x = l.x), (o = !1)),
                  k(l.y) && ((t.pan.y = l.y), (o = !1)),
                  o || a.push("pan");
              }
              return (
                a.length > 0 &&
                  (a.push("viewport"),
                  this.emit(a.join(" ")),
                  this.notify("viewport")),
                this
              );
            },
            center: function (e) {
              var t = this.getCenterPan(e);
              return (
                t &&
                  ((this._private.pan = t),
                  this.emit("pan viewport"),
                  this.notify("viewport")),
                this
              );
            },
            getCenterPan: function (e, t) {
              if (this._private.panningEnabled) {
                if (b(e)) {
                  var n = e;
                  e = this.mutableElements().filter(n);
                } else S(e) || (e = this.mutableElements());
                if (0 !== e.length) {
                  var r = e.boundingBox(),
                    a = this.width(),
                    i = this.height();
                  return {
                    x:
                      (a -
                        (t = void 0 === t ? this._private.zoom : t) *
                          (r.x1 + r.x2)) /
                      2,
                    y: (i - t * (r.y1 + r.y2)) / 2,
                  };
                }
              }
            },
            reset: function () {
              return this._private.panningEnabled &&
                this._private.zoomingEnabled
                ? (this.viewport({ pan: { x: 0, y: 0 }, zoom: 1 }), this)
                : this;
            },
            invalidateSize: function () {
              this._private.sizeCache = null;
            },
            size: function () {
              var e,
                t,
                n = this._private,
                r = n.container;
              return (n.sizeCache =
                n.sizeCache ||
                (r
                  ? ((e = h.getComputedStyle(r)),
                    (t = function (t) {
                      return parseFloat(e.getPropertyValue(t));
                    }),
                    {
                      width:
                        r.clientWidth - t("padding-left") - t("padding-right"),
                      height:
                        r.clientHeight - t("padding-top") - t("padding-bottom"),
                    })
                  : { width: 1, height: 1 }));
            },
            width: function () {
              return this.size().width;
            },
            height: function () {
              return this.size().height;
            },
            extent: function () {
              var e = this._private.pan,
                t = this._private.zoom,
                n = this.renderedExtent(),
                r = {
                  x1: (n.x1 - e.x) / t,
                  x2: (n.x2 - e.x) / t,
                  y1: (n.y1 - e.y) / t,
                  y2: (n.y2 - e.y) / t,
                };
              return (r.w = r.x2 - r.x1), (r.h = r.y2 - r.y1), r;
            },
            renderedExtent: function () {
              var e = this.width(),
                t = this.height();
              return { x1: 0, y1: 0, x2: e, y2: t, w: e, h: t };
            },
          };
        (bi.centre = bi.center),
          (bi.autolockNodes = bi.autolock),
          (bi.autoungrabifyNodes = bi.autoungrabify);
        var xi = {
          data: Wn.data({
            field: "data",
            bindingEvent: "data",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "data",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0,
            updateStyle: !0,
          }),
          removeData: Wn.removeData({
            field: "data",
            event: "data",
            triggerFnName: "trigger",
            triggerEvent: !0,
            updateStyle: !0,
          }),
          scratch: Wn.data({
            field: "scratch",
            bindingEvent: "scratch",
            allowBinding: !0,
            allowSetting: !0,
            settingEvent: "scratch",
            settingTriggersEvent: !0,
            triggerFnName: "trigger",
            allowGetting: !0,
            updateStyle: !0,
          }),
          removeScratch: Wn.removeData({
            field: "scratch",
            event: "scratch",
            triggerFnName: "trigger",
            triggerEvent: !0,
            updateStyle: !0,
          }),
        };
        (xi.attr = xi.data), (xi.removeAttr = xi.removeData);
        var wi = function (e) {
            var t = this,
              n = (e = V({}, e)).container;
            n && !C(n) && C(n[0]) && (n = n[0]);
            var r = n ? n._cyreg : null;
            (r = r || {}) && r.cy && (r.cy.destroy(), (r = {}));
            var a = (r.readies = r.readies || []);
            n && (n._cyreg = r), (r.cy = t);
            var i = void 0 !== h && void 0 !== n && !e.headless,
              o = e;
            (o.layout = V({ name: i ? "grid" : "null" }, o.layout)),
              (o.renderer = V({ name: i ? "canvas" : "null" }, o.renderer));
            var s = function (e, t, n) {
                return void 0 !== t ? t : void 0 !== n ? n : e;
              },
              l = (this._private = {
                container: n,
                ready: !1,
                options: o,
                elements: new Ra(this),
                listeners: [],
                aniEles: new Ra(this),
                data: o.data || {},
                scratch: {},
                layout: null,
                renderer: null,
                destroyed: !1,
                notificationsEnabled: !0,
                minZoom: 1e-50,
                maxZoom: 1e50,
                zoomingEnabled: s(!0, o.zoomingEnabled),
                userZoomingEnabled: s(!0, o.userZoomingEnabled),
                panningEnabled: s(!0, o.panningEnabled),
                userPanningEnabled: s(!0, o.userPanningEnabled),
                boxSelectionEnabled: s(!0, o.boxSelectionEnabled),
                autolock: s(!1, o.autolock, o.autolockNodes),
                autoungrabify: s(!1, o.autoungrabify, o.autoungrabifyNodes),
                autounselectify: s(!1, o.autounselectify),
                styleEnabled: void 0 === o.styleEnabled ? i : o.styleEnabled,
                zoom: k(o.zoom) ? o.zoom : 1,
                pan: {
                  x: E(o.pan) && k(o.pan.x) ? o.pan.x : 0,
                  y: E(o.pan) && k(o.pan.y) ? o.pan.y : 0,
                },
                animation: { current: [], queue: [] },
                hasCompoundNodes: !1,
              });
            this.createEmitter(),
              this.selectionType(o.selectionType),
              this.zoomRange({ min: o.minZoom, max: o.maxZoom }),
              l.styleEnabled && t.setStyle([]);
            var u = V({}, o, o.renderer);
            t.initRenderer(u),
              (function (e, t) {
                if (e.some(_)) return qn.all(e).then(t);
                t(e);
              })([o.style, o.elements], function (e) {
                var n = e[0],
                  i = e[1];
                l.styleEnabled && t.style().append(n),
                  (function (e, n, r) {
                    t.notifications(!1);
                    var a = t.mutableElements();
                    a.length > 0 && a.remove(),
                      null != e && (E(e) || w(e)) && t.add(e),
                      t
                        .one("layoutready", function (e) {
                          t.notifications(!0),
                            t.emit(e),
                            t.one("load", n),
                            t.emitAndNotify("load");
                        })
                        .one("layoutstop", function () {
                          t.one("done", r), t.emit("done");
                        });
                    var i = V({}, t._private.options.layout);
                    (i.eles = t.elements()), t.layout(i).run();
                  })(
                    i,
                    function () {
                      t.startAnimationLoop(),
                        (l.ready = !0),
                        x(o.ready) && t.on("ready", o.ready);
                      for (var e = 0; e < a.length; e++) {
                        var n = a[e];
                        t.on("ready", n);
                      }
                      r && (r.readies = []), t.emit("ready");
                    },
                    o.done
                  );
              });
          },
          Ei = wi.prototype;
        V(Ei, {
          instanceString: function () {
            return "core";
          },
          isReady: function () {
            return this._private.ready;
          },
          destroyed: function () {
            return this._private.destroyed;
          },
          ready: function (e) {
            return (
              this.isReady()
                ? this.emitter().emit("ready", [], e)
                : this.on("ready", e),
              this
            );
          },
          destroy: function () {
            var e = this;
            if (!e.destroyed())
              return (
                e.stopAnimationLoop(),
                e.destroyRenderer(),
                this.emit("destroy"),
                (e._private.destroyed = !0),
                e
              );
          },
          hasElementWithId: function (e) {
            return this._private.elements.hasElementWithId(e);
          },
          getElementById: function (e) {
            return this._private.elements.getElementById(e);
          },
          hasCompoundNodes: function () {
            return this._private.hasCompoundNodes;
          },
          headless: function () {
            return this._private.renderer.isHeadless();
          },
          styleEnabled: function () {
            return this._private.styleEnabled;
          },
          addToPool: function (e) {
            return this._private.elements.merge(e), this;
          },
          removeFromPool: function (e) {
            return this._private.elements.unmerge(e), this;
          },
          container: function () {
            return this._private.container || null;
          },
          mount: function (e) {
            if (null != e) {
              var t = this,
                n = t._private,
                r = n.options;
              return (
                !C(e) && C(e[0]) && (e = e[0]),
                t.stopAnimationLoop(),
                t.destroyRenderer(),
                (n.container = e),
                (n.styleEnabled = !0),
                t.invalidateSize(),
                t.initRenderer(
                  V({}, r, r.renderer, {
                    name:
                      "null" === r.renderer.name ? "canvas" : r.renderer.name,
                  })
                ),
                t.startAnimationLoop(),
                t.style(r.style),
                t.emit("mount"),
                t
              );
            }
          },
          unmount: function () {
            var e = this;
            return (
              e.stopAnimationLoop(),
              e.destroyRenderer(),
              e.initRenderer({ name: "null" }),
              e.emit("unmount"),
              e
            );
          },
          options: function () {
            return ve(this._private.options);
          },
          json: function (e) {
            var t = this,
              n = t._private,
              r = t.mutableElements();
            if (E(e)) {
              if ((t.startBatch(), e.elements)) {
                var a = {},
                  i = function (e, n) {
                    for (var r = [], i = [], o = 0; o < e.length; o++) {
                      var s = e[o];
                      if (s.data.id) {
                        var l = "" + s.data.id,
                          u = t.getElementById(l);
                        (a[l] = !0),
                          0 !== u.length
                            ? i.push({ ele: u, json: s })
                            : n
                            ? ((s.group = n), r.push(s))
                            : r.push(s);
                      } else
                        ge(
                          "cy.json() cannot handle elements without an ID attribute"
                        );
                    }
                    t.add(r);
                    for (var c = 0; c < i.length; c++) {
                      var d = i[c],
                        h = d.ele,
                        p = d.json;
                      h.json(p);
                    }
                  };
                if (w(e.elements)) i(e.elements);
                else
                  for (var o = ["nodes", "edges"], s = 0; s < o.length; s++) {
                    var l = o[s],
                      u = e.elements[l];
                    w(u) && i(u, l);
                  }
                var c = t.collection();
                r
                  .filter(function (e) {
                    return !a[e.id()];
                  })
                  .forEach(function (e) {
                    e.isParent() ? c.merge(e) : e.remove();
                  }),
                  c.forEach(function (e) {
                    return e.children().move({ parent: null });
                  }),
                  c.forEach(function (e) {
                    return (function (e) {
                      return t.getElementById(e.id());
                    })(e).remove();
                  });
              }
              e.style && t.style(e.style),
                null != e.zoom && e.zoom !== n.zoom && t.zoom(e.zoom),
                e.pan &&
                  ((e.pan.x === n.pan.x && e.pan.y === n.pan.y) ||
                    t.pan(e.pan)),
                e.data && t.data(e.data);
              for (
                var d = [
                    "minZoom",
                    "maxZoom",
                    "zoomingEnabled",
                    "userZoomingEnabled",
                    "panningEnabled",
                    "userPanningEnabled",
                    "boxSelectionEnabled",
                    "autolock",
                    "autoungrabify",
                    "autounselectify",
                  ],
                  h = 0;
                h < d.length;
                h++
              ) {
                var p = d[h];
                null != e[p] && t[p](e[p]);
              }
              return t.endBatch(), this;
            }
            var f = {};
            e
              ? (f.elements = this.elements().map(function (e) {
                  return e.json();
                }))
              : ((f.elements = {}),
                r.forEach(function (e) {
                  var t = e.group();
                  f.elements[t] || (f.elements[t] = []),
                    f.elements[t].push(e.json());
                })),
              this._private.styleEnabled && (f.style = t.style().json()),
              (f.data = ve(t.data()));
            var g = n.options;
            return (
              (f.zoomingEnabled = n.zoomingEnabled),
              (f.userZoomingEnabled = n.userZoomingEnabled),
              (f.zoom = n.zoom),
              (f.minZoom = n.minZoom),
              (f.maxZoom = n.maxZoom),
              (f.panningEnabled = n.panningEnabled),
              (f.userPanningEnabled = n.userPanningEnabled),
              (f.pan = ve(n.pan)),
              (f.boxSelectionEnabled = n.boxSelectionEnabled),
              (f.renderer = ve(g.renderer)),
              (f.hideEdgesOnViewport = g.hideEdgesOnViewport),
              (f.textureOnViewport = g.textureOnViewport),
              (f.wheelSensitivity = g.wheelSensitivity),
              (f.motionBlur = g.motionBlur),
              f
            );
          },
        }),
          (Ei.$id = Ei.getElementById),
          [Fa, Za, ei, ti, ni, ri, ii, oi, mi, bi, xi].forEach(function (e) {
            V(Ei, e);
          });
        var ki = {
            fit: !0,
            directed: !1,
            padding: 30,
            circle: !1,
            grid: !1,
            spacingFactor: 1.75,
            boundingBox: void 0,
            avoidOverlap: !0,
            nodeDimensionsIncludeLabels: !1,
            roots: void 0,
            maximal: !1,
            animate: !1,
            animationDuration: 500,
            animationEasing: void 0,
            animateFilter: function (e, t) {
              return !0;
            },
            ready: void 0,
            stop: void 0,
            transform: function (e, t) {
              return t;
            },
          },
          Ci = function (e) {
            return e.scratch("breadthfirst");
          },
          Si = function (e, t) {
            return e.scratch("breadthfirst", t);
          };
        function Di(e) {
          this.options = V({}, ki, e);
        }
        Di.prototype.run = function () {
          var e,
            t = this.options,
            n = t,
            r = t.cy,
            a = n.eles,
            i = a.nodes().filter(function (e) {
              return !e.isParent();
            }),
            o = a,
            s = n.directed,
            l = n.maximal || n.maximalAdjustments > 0,
            u = nt(
              n.boundingBox
                ? n.boundingBox
                : { x1: 0, y1: 0, w: r.width(), h: r.height() }
            );
          if (S(n.roots)) e = n.roots;
          else if (w(n.roots)) {
            for (var c = [], d = 0; d < n.roots.length; d++) {
              var h = n.roots[d],
                p = r.getElementById(h);
              c.push(p);
            }
            e = r.collection(c);
          } else if (b(n.roots)) e = r.$(n.roots);
          else if (s) e = i.roots();
          else {
            var f = a.components();
            e = r.collection();
            for (
              var g = function (t) {
                  var n = f[t],
                    r = n.maxDegree(!1),
                    a = n.filter(function (e) {
                      return e.degree(!1) === r;
                    });
                  e = e.add(a);
                },
                v = 0;
              v < f.length;
              v++
            )
              g(v);
          }
          var y = [],
            m = {},
            x = function (e, t) {
              null == y[t] && (y[t] = []);
              var n = y[t].length;
              y[t].push(e), Si(e, { index: n, depth: t });
            };
          o.bfs({
            roots: e,
            directed: n.directed,
            visit: function (e, t, n, r, a) {
              var i = e[0],
                o = i.id();
              x(i, a), (m[o] = !0);
            },
          });
          for (var E = [], k = 0; k < i.length; k++) {
            var C = i[k];
            m[C.id()] || E.push(C);
          }
          var D = function (e) {
              for (var t = y[e], n = 0; n < t.length; n++) {
                var r = t[n];
                null != r
                  ? Si(r, { depth: e, index: n })
                  : (t.splice(n, 1), n--);
              }
            },
            P = function () {
              for (var e = 0; e < y.length; e++) D(e);
            },
            T = function (e, t) {
              for (
                var n = Ci(e),
                  r = e.incomers().filter(function (e) {
                    return e.isNode() && a.has(e);
                  }),
                  i = -1,
                  o = e.id(),
                  s = 0;
                s < r.length;
                s++
              ) {
                var l = r[s],
                  u = Ci(l);
                i = Math.max(i, u.depth);
              }
              return (
                n.depth <= i &&
                (t[o]
                  ? null
                  : ((function (e, t) {
                      var n = Ci(e),
                        r = n.depth,
                        a = n.index;
                      (y[r][a] = null), x(e, t);
                    })(e, i + 1),
                    (t[o] = !0),
                    !0))
              );
            };
          if (s && l) {
            var M = [],
              B = {},
              _ = function (e) {
                return M.push(e);
              };
            for (
              i.forEach(function (e) {
                return M.push(e);
              });
              M.length > 0;

            ) {
              var N = M.shift(),
                I = T(N, B);
              if (I)
                N.outgoers()
                  .filter(function (e) {
                    return e.isNode() && a.has(e);
                  })
                  .forEach(_);
              else if (null === I) {
                ge(
                  "Detected double maximal shift for node `" +
                    N.id() +
                    "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs."
                );
                break;
              }
            }
          }
          P();
          var L = 0;
          if (n.avoidOverlap)
            for (var z = 0; z < i.length; z++) {
              var A = i[z].layoutDimensions(n),
                O = A.w,
                V = A.h;
              L = Math.max(L, O, V);
            }
          for (
            var F = {},
              j = function (e) {
                if (F[e.id()]) return F[e.id()];
                for (
                  var t = Ci(e).depth,
                    n = e.neighborhood(),
                    r = 0,
                    a = 0,
                    o = 0;
                  o < n.length;
                  o++
                ) {
                  var s = n[o];
                  if (!s.isEdge() && !s.isParent() && i.has(s)) {
                    var l = Ci(s);
                    if (null != l) {
                      var u = l.index,
                        c = l.depth;
                      if (null != u && null != c) {
                        var d = y[c].length;
                        c < t && ((r += u / d), a++);
                      }
                    }
                  }
                }
                return (
                  (r /= a = Math.max(1, a)),
                  0 === a && (r = 0),
                  (F[e.id()] = r),
                  r
                );
              },
              q = function (e, t) {
                var n = j(e) - j(t);
                return 0 === n ? R(e.id(), t.id()) : n;
              },
              X = 0;
            X < y.length;
            X++
          )
            y[X].sort(q), D(X);
          for (var Y = [], W = 0; W < E.length; W++) Y.push(E[W]);
          y.unshift(Y), P();
          for (var H = 0, $ = 0; $ < y.length; $++)
            H = Math.max(y[$].length, H);
          var K = u.x1 + u.w / 2,
            G = u.x1 + u.h / 2,
            U = y.reduce(function (e, t) {
              return Math.max(e, t.length);
            }, 0);
          return (
            a.nodes().layoutPositions(this, n, function (e) {
              var t = Ci(e),
                r = t.depth,
                a = t.index,
                i = y[r].length,
                o = Math.max(u.w / ((n.grid ? U : i) + 1), L),
                s = Math.max(u.h / (y.length + 1), L),
                l = Math.min(u.w / 2 / y.length, u.h / 2 / y.length);
              if (((l = Math.max(l, L)), n.circle)) {
                var c =
                    l * r + l - (y.length > 0 && y[0].length <= 3 ? l / 2 : 0),
                  d = ((2 * Math.PI) / y[r].length) * a;
                return (
                  0 === r && 1 === y[0].length && (c = 1),
                  { x: K + c * Math.cos(d), y: G + c * Math.sin(d) }
                );
              }
              return { x: K + (a + 1 - (i + 1) / 2) * o, y: (r + 1) * s };
            }),
            this
          );
        };
        var Pi = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          avoidOverlap: !0,
          nodeDimensionsIncludeLabels: !1,
          spacingFactor: void 0,
          radius: void 0,
          startAngle: 1.5 * Math.PI,
          sweep: void 0,
          clockwise: !0,
          sort: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
        function Ti(e) {
          this.options = V({}, Pi, e);
        }
        Ti.prototype.run = function () {
          var e = this.options,
            t = e,
            n = e.cy,
            r = t.eles,
            a =
              void 0 !== t.counterclockwise ? !t.counterclockwise : t.clockwise,
            i = r.nodes().not(":parent");
          t.sort && (i = i.sort(t.sort));
          for (
            var o,
              s = nt(
                t.boundingBox
                  ? t.boundingBox
                  : { x1: 0, y1: 0, w: n.width(), h: n.height() }
              ),
              l = s.x1 + s.w / 2,
              u = s.y1 + s.h / 2,
              c =
                (void 0 === t.sweep
                  ? 2 * Math.PI - (2 * Math.PI) / i.length
                  : t.sweep) / Math.max(1, i.length - 1),
              d = 0,
              h = 0;
            h < i.length;
            h++
          ) {
            var p = i[h].layoutDimensions(t),
              f = p.w,
              g = p.h;
            d = Math.max(d, f, g);
          }
          if (
            ((o = k(t.radius)
              ? t.radius
              : i.length <= 1
              ? 0
              : Math.min(s.h, s.w) / 2 - d),
            i.length > 1 && t.avoidOverlap)
          ) {
            d *= 1.75;
            var v = Math.cos(c) - Math.cos(0),
              y = Math.sin(c) - Math.sin(0),
              m = Math.sqrt((d * d) / (v * v + y * y));
            o = Math.max(m, o);
          }
          return (
            r.nodes().layoutPositions(this, t, function (e, n) {
              var r = t.startAngle + n * c * (a ? 1 : -1),
                i = o * Math.cos(r),
                s = o * Math.sin(r);
              return { x: l + i, y: u + s };
            }),
            this
          );
        };
        var Mi,
          Bi = {
            fit: !0,
            padding: 30,
            startAngle: 1.5 * Math.PI,
            sweep: void 0,
            clockwise: !0,
            equidistant: !1,
            minNodeSpacing: 10,
            boundingBox: void 0,
            avoidOverlap: !0,
            nodeDimensionsIncludeLabels: !1,
            height: void 0,
            width: void 0,
            spacingFactor: void 0,
            concentric: function (e) {
              return e.degree();
            },
            levelWidth: function (e) {
              return e.maxDegree() / 4;
            },
            animate: !1,
            animationDuration: 500,
            animationEasing: void 0,
            animateFilter: function (e, t) {
              return !0;
            },
            ready: void 0,
            stop: void 0,
            transform: function (e, t) {
              return t;
            },
          };
        function _i(e) {
          this.options = V({}, Bi, e);
        }
        _i.prototype.run = function () {
          for (
            var e = this.options,
              t = e,
              n =
                void 0 !== t.counterclockwise
                  ? !t.counterclockwise
                  : t.clockwise,
              r = e.cy,
              a = t.eles,
              i = a.nodes().not(":parent"),
              o = nt(
                t.boundingBox
                  ? t.boundingBox
                  : { x1: 0, y1: 0, w: r.width(), h: r.height() }
              ),
              s = o.x1 + o.w / 2,
              l = o.y1 + o.h / 2,
              u = [],
              c = 0,
              d = 0;
            d < i.length;
            d++
          ) {
            var h,
              p = i[d];
            (h = t.concentric(p)),
              u.push({ value: h, node: p }),
              (p._private.scratch.concentric = h);
          }
          i.updateStyle();
          for (var f = 0; f < i.length; f++) {
            var g = i[f].layoutDimensions(t);
            c = Math.max(c, g.w, g.h);
          }
          u.sort(function (e, t) {
            return t.value - e.value;
          });
          for (
            var v = t.levelWidth(i), y = [[]], m = y[0], b = 0;
            b < u.length;
            b++
          ) {
            var x = u[b];
            m.length > 0 &&
              Math.abs(m[0].value - x.value) >= v &&
              ((m = []), y.push(m)),
              m.push(x);
          }
          var w = c + t.minNodeSpacing;
          if (!t.avoidOverlap) {
            var E = y.length > 0 && y[0].length > 1,
              k = (Math.min(o.w, o.h) / 2 - w) / (y.length + E ? 1 : 0);
            w = Math.min(w, k);
          }
          for (var C = 0, S = 0; S < y.length; S++) {
            var D = y[S],
              P =
                void 0 === t.sweep
                  ? 2 * Math.PI - (2 * Math.PI) / D.length
                  : t.sweep,
              T = (D.dTheta = P / Math.max(1, D.length - 1));
            if (D.length > 1 && t.avoidOverlap) {
              var M = Math.cos(T) - Math.cos(0),
                B = Math.sin(T) - Math.sin(0),
                _ = Math.sqrt((w * w) / (M * M + B * B));
              C = Math.max(_, C);
            }
            (D.r = C), (C += w);
          }
          if (t.equidistant) {
            for (var N = 0, I = 0, L = 0; L < y.length; L++) {
              var z = y[L].r - I;
              N = Math.max(N, z);
            }
            I = 0;
            for (var A = 0; A < y.length; A++) {
              var O = y[A];
              0 === A && (I = O.r), (O.r = I), (I += N);
            }
          }
          for (var R = {}, V = 0; V < y.length; V++)
            for (
              var F = y[V], j = F.dTheta, q = F.r, X = 0;
              X < F.length;
              X++
            ) {
              var Y = F[X],
                W = t.startAngle + (n ? 1 : -1) * j * X,
                H = { x: s + q * Math.cos(W), y: l + q * Math.sin(W) };
              R[Y.node.id()] = H;
            }
          return (
            a.nodes().layoutPositions(this, t, function (e) {
              var t = e.id();
              return R[t];
            }),
            this
          );
        };
        var Ni = {
          ready: function () {},
          stop: function () {},
          animate: !0,
          animationEasing: void 0,
          animationDuration: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          animationThreshold: 250,
          refresh: 20,
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          nodeDimensionsIncludeLabels: !1,
          randomize: !1,
          componentSpacing: 40,
          nodeRepulsion: function (e) {
            return 2048;
          },
          nodeOverlap: 4,
          idealEdgeLength: function (e) {
            return 32;
          },
          edgeElasticity: function (e) {
            return 32;
          },
          nestingFactor: 1.2,
          gravity: 1,
          numIter: 1e3,
          initialTemp: 1e3,
          coolingFactor: 0.99,
          minTemp: 1,
        };
        function Ii(e) {
          (this.options = V({}, Ni, e)), (this.options.layout = this);
        }
        (Ii.prototype.run = function () {
          var e = this.options,
            t = e.cy,
            n = this;
          (n.stopped = !1),
            (!0 !== e.animate && !1 !== e.animate) ||
              n.emit({ type: "layoutstart", layout: n }),
            (Mi = !0 === e.debug);
          var r = Li(t, n, e);
          Mi && (void 0)(r), e.randomize && Oi(r);
          var a = $(),
            i = function () {
              Vi(r, t, e), !0 === e.fit && t.fit(e.padding);
            },
            o = function (t) {
              return !(
                n.stopped ||
                t >= e.numIter ||
                (Fi(r, e),
                (r.temperature = r.temperature * e.coolingFactor),
                r.temperature < e.minTemp)
              );
            },
            s = function () {
              if (!0 === e.animate || !1 === e.animate)
                i(),
                  n.one("layoutstop", e.stop),
                  n.emit({ type: "layoutstop", layout: n });
              else {
                var t = e.eles.nodes(),
                  a = Ri(r, e, t);
                t.layoutPositions(n, e, a);
              }
            },
            l = 0,
            u = !0;
          if (!0 === e.animate)
            !(function t() {
              for (var n = 0; u && n < e.refresh; ) (u = o(l)), l++, n++;
              u
                ? ($() - a >= e.animationThreshold && i(), H(t))
                : (Qi(r, e), s());
            })();
          else {
            for (; u; ) (u = o(l)), l++;
            Qi(r, e), s();
          }
          return this;
        }),
          (Ii.prototype.stop = function () {
            return (
              (this.stopped = !0),
              this.thread && this.thread.stop(),
              this.emit("layoutstop"),
              this
            );
          }),
          (Ii.prototype.destroy = function () {
            return this.thread && this.thread.stop(), this;
          });
        var Li = function (e, t, n) {
            for (
              var r = n.eles.edges(),
                a = n.eles.nodes(),
                i = {
                  isCompound: e.hasCompoundNodes(),
                  layoutNodes: [],
                  idToIndex: {},
                  nodeSize: a.size(),
                  graphSet: [],
                  indexToGraph: [],
                  layoutEdges: [],
                  edgeSize: r.size(),
                  temperature: n.initialTemp,
                  clientWidth: e.width(),
                  clientHeight: e.width(),
                  boundingBox: nt(
                    n.boundingBox
                      ? n.boundingBox
                      : { x1: 0, y1: 0, w: e.width(), h: e.height() }
                  ),
                },
                o = n.eles.components(),
                s = {},
                l = 0;
              l < o.length;
              l++
            )
              for (var u = o[l], c = 0; c < u.length; c++) s[u[c].id()] = l;
            for (l = 0; l < i.nodeSize; l++) {
              var d = (v = a[l]).layoutDimensions(n);
              ((I = {}).isLocked = v.locked()),
                (I.id = v.data("id")),
                (I.parentId = v.data("parent")),
                (I.cmptId = s[v.id()]),
                (I.children = []),
                (I.positionX = v.position("x")),
                (I.positionY = v.position("y")),
                (I.offsetX = 0),
                (I.offsetY = 0),
                (I.height = d.w),
                (I.width = d.h),
                (I.maxX = I.positionX + I.width / 2),
                (I.minX = I.positionX - I.width / 2),
                (I.maxY = I.positionY + I.height / 2),
                (I.minY = I.positionY - I.height / 2),
                (I.padLeft = parseFloat(v.style("padding"))),
                (I.padRight = parseFloat(v.style("padding"))),
                (I.padTop = parseFloat(v.style("padding"))),
                (I.padBottom = parseFloat(v.style("padding"))),
                (I.nodeRepulsion = x(n.nodeRepulsion)
                  ? n.nodeRepulsion(v)
                  : n.nodeRepulsion),
                i.layoutNodes.push(I),
                (i.idToIndex[I.id] = l);
            }
            var h = [],
              p = 0,
              f = -1,
              g = [];
            for (l = 0; l < i.nodeSize; l++) {
              var v,
                y = (v = i.layoutNodes[l]).parentId;
              null != y
                ? i.layoutNodes[i.idToIndex[y]].children.push(v.id)
                : ((h[++f] = v.id), g.push(v.id));
            }
            for (i.graphSet.push(g); p <= f; ) {
              var m = h[p++],
                b = i.idToIndex[m],
                w = i.layoutNodes[b].children;
              if (w.length > 0)
                for (i.graphSet.push(w), l = 0; l < w.length; l++)
                  h[++f] = w[l];
            }
            for (l = 0; l < i.graphSet.length; l++) {
              var E = i.graphSet[l];
              for (c = 0; c < E.length; c++) {
                var k = i.idToIndex[E[c]];
                i.indexToGraph[k] = l;
              }
            }
            for (l = 0; l < i.edgeSize; l++) {
              var C = r[l],
                S = {};
              (S.id = C.data("id")),
                (S.sourceId = C.data("source")),
                (S.targetId = C.data("target"));
              var D = x(n.idealEdgeLength)
                  ? n.idealEdgeLength(C)
                  : n.idealEdgeLength,
                P = x(n.edgeElasticity)
                  ? n.edgeElasticity(C)
                  : n.edgeElasticity,
                T = i.idToIndex[S.sourceId],
                M = i.idToIndex[S.targetId];
              if (i.indexToGraph[T] != i.indexToGraph[M]) {
                for (
                  var B = zi(S.sourceId, S.targetId, i),
                    _ = i.graphSet[B],
                    N = 0,
                    I = i.layoutNodes[T];
                  -1 === _.indexOf(I.id);

                )
                  (I = i.layoutNodes[i.idToIndex[I.parentId]]), N++;
                for (I = i.layoutNodes[M]; -1 === _.indexOf(I.id); )
                  (I = i.layoutNodes[i.idToIndex[I.parentId]]), N++;
                D *= N * n.nestingFactor;
              }
              (S.idealLength = D), (S.elasticity = P), i.layoutEdges.push(S);
            }
            return i;
          },
          zi = function (e, t, n) {
            var r = Ai(e, t, 0, n);
            return 2 > r.count ? 0 : r.graph;
          },
          Ai = function e(t, n, r, a) {
            var i = a.graphSet[r];
            if (-1 < i.indexOf(t) && -1 < i.indexOf(n))
              return { count: 2, graph: r };
            for (var o = 0, s = 0; s < i.length; s++) {
              var l = i[s],
                u = a.idToIndex[l],
                c = a.layoutNodes[u].children;
              if (0 !== c.length) {
                var d = e(t, n, a.indexToGraph[a.idToIndex[c[0]]], a);
                if (0 !== d.count) {
                  if (1 !== d.count) return d;
                  if (2 == ++o) break;
                }
              }
            }
            return { count: o, graph: r };
          },
          Oi = function (e, t) {
            for (
              var n = e.clientWidth, r = e.clientHeight, a = 0;
              a < e.nodeSize;
              a++
            ) {
              var i = e.layoutNodes[a];
              0 !== i.children.length ||
                i.isLocked ||
                ((i.positionX = Math.random() * n),
                (i.positionY = Math.random() * r));
            }
          },
          Ri = function (e, t, n) {
            var r = e.boundingBox,
              a = { x1: 1 / 0, x2: -1 / 0, y1: 1 / 0, y2: -1 / 0 };
            return (
              t.boundingBox &&
                (n.forEach(function (t) {
                  var n = e.layoutNodes[e.idToIndex[t.data("id")]];
                  (a.x1 = Math.min(a.x1, n.positionX)),
                    (a.x2 = Math.max(a.x2, n.positionX)),
                    (a.y1 = Math.min(a.y1, n.positionY)),
                    (a.y2 = Math.max(a.y2, n.positionY));
                }),
                (a.w = a.x2 - a.x1),
                (a.h = a.y2 - a.y1)),
              function (n, i) {
                var o = e.layoutNodes[e.idToIndex[n.data("id")]];
                if (t.boundingBox) {
                  var s = (o.positionX - a.x1) / a.w,
                    l = (o.positionY - a.y1) / a.h;
                  return { x: r.x1 + s * r.w, y: r.y1 + l * r.h };
                }
                return { x: o.positionX, y: o.positionY };
              }
            );
          },
          Vi = function (e, t, n) {
            var r = n.layout,
              a = n.eles.nodes(),
              i = Ri(e, n, a);
            a.positions(i),
              !0 !== e.ready &&
                ((e.ready = !0),
                r.one("layoutready", n.ready),
                r.emit({ type: "layoutready", layout: this }));
          },
          Fi = function (e, t, n) {
            ji(e, t), Hi(e), $i(e, t), Ki(e), Gi(e);
          },
          ji = function (e, t) {
            for (var n = 0; n < e.graphSet.length; n++)
              for (var r = e.graphSet[n], a = r.length, i = 0; i < a; i++)
                for (
                  var o = e.layoutNodes[e.idToIndex[r[i]]], s = i + 1;
                  s < a;
                  s++
                ) {
                  var l = e.layoutNodes[e.idToIndex[r[s]]];
                  Xi(o, l, e, t);
                }
          },
          qi = function (e) {
            return -e + 2 * e * Math.random();
          },
          Xi = function (e, t, n, r) {
            if (e.cmptId === t.cmptId || n.isCompound) {
              var a = t.positionX - e.positionX,
                i = t.positionY - e.positionY;
              0 === a && 0 === i && ((a = qi(1)), (i = qi(1)));
              var o = Yi(e, t, a, i);
              if (o > 0)
                var s =
                    ((u = r.nodeOverlap * o) * a) /
                    (g = Math.sqrt(a * a + i * i)),
                  l = (u * i) / g;
              else {
                var u,
                  c = Wi(e, a, i),
                  d = Wi(t, -1 * a, -1 * i),
                  h = d.x - c.x,
                  p = d.y - c.y,
                  f = h * h + p * p,
                  g = Math.sqrt(f);
                (s = ((u = (e.nodeRepulsion + t.nodeRepulsion) / f) * h) / g),
                  (l = (u * p) / g);
              }
              e.isLocked || ((e.offsetX -= s), (e.offsetY -= l)),
                t.isLocked || ((t.offsetX += s), (t.offsetY += l));
            }
          },
          Yi = function (e, t, n, r) {
            if (n > 0) var a = e.maxX - t.minX;
            else a = t.maxX - e.minX;
            if (r > 0) var i = e.maxY - t.minY;
            else i = t.maxY - e.minY;
            return a >= 0 && i >= 0 ? Math.sqrt(a * a + i * i) : 0;
          },
          Wi = function (e, t, n) {
            var r = e.positionX,
              a = e.positionY,
              i = e.height || 1,
              o = e.width || 1,
              s = n / t,
              l = i / o,
              u = {};
            return (0 === t && 0 < n) || (0 === t && 0 > n)
              ? ((u.x = r), (u.y = a + i / 2), u)
              : 0 < t && -1 * l <= s && s <= l
              ? ((u.x = r + o / 2), (u.y = a + (o * n) / 2 / t), u)
              : 0 > t && -1 * l <= s && s <= l
              ? ((u.x = r - o / 2), (u.y = a - (o * n) / 2 / t), u)
              : 0 < n && (s <= -1 * l || s >= l)
              ? ((u.x = r + (i * t) / 2 / n), (u.y = a + i / 2), u)
              : 0 > n && (s <= -1 * l || s >= l)
              ? ((u.x = r - (i * t) / 2 / n), (u.y = a - i / 2), u)
              : u;
          },
          Hi = function (e, t) {
            for (var n = 0; n < e.edgeSize; n++) {
              var r = e.layoutEdges[n],
                a = e.idToIndex[r.sourceId],
                i = e.layoutNodes[a],
                o = e.idToIndex[r.targetId],
                s = e.layoutNodes[o],
                l = s.positionX - i.positionX,
                u = s.positionY - i.positionY;
              if (0 !== l || 0 !== u) {
                var c = Wi(i, l, u),
                  d = Wi(s, -1 * l, -1 * u),
                  h = d.x - c.x,
                  p = d.y - c.y,
                  f = Math.sqrt(h * h + p * p),
                  g = Math.pow(r.idealLength - f, 2) / r.elasticity;
                if (0 !== f)
                  var v = (g * h) / f,
                    y = (g * p) / f;
                else (v = 0), (y = 0);
                i.isLocked || ((i.offsetX += v), (i.offsetY += y)),
                  s.isLocked || ((s.offsetX -= v), (s.offsetY -= y));
              }
            }
          },
          $i = function (e, t) {
            for (var n = 0; n < e.graphSet.length; n++) {
              var r = e.graphSet[n],
                a = r.length;
              if (0 === n)
                var i = e.clientHeight / 2,
                  o = e.clientWidth / 2;
              else {
                var s = e.layoutNodes[e.idToIndex[r[0]]],
                  l = e.layoutNodes[e.idToIndex[s.parentId]];
                (i = l.positionX), (o = l.positionY);
              }
              for (var u = 0; u < a; u++) {
                var c = e.layoutNodes[e.idToIndex[r[u]]];
                if (!c.isLocked) {
                  var d = i - c.positionX,
                    h = o - c.positionY,
                    p = Math.sqrt(d * d + h * h);
                  if (p > 1) {
                    var f = (t.gravity * d) / p,
                      g = (t.gravity * h) / p;
                    (c.offsetX += f), (c.offsetY += g);
                  }
                }
              }
            }
          },
          Ki = function (e, t) {
            var n = [],
              r = 0,
              a = -1;
            for (
              n.push.apply(n, e.graphSet[0]), a += e.graphSet[0].length;
              r <= a;

            ) {
              var i = n[r++],
                o = e.idToIndex[i],
                s = e.layoutNodes[o],
                l = s.children;
              if (0 < l.length && !s.isLocked) {
                for (
                  var u = s.offsetX, c = s.offsetY, d = 0;
                  d < l.length;
                  d++
                ) {
                  var h = e.layoutNodes[e.idToIndex[l[d]]];
                  (h.offsetX += u), (h.offsetY += c), (n[++a] = l[d]);
                }
                (s.offsetX = 0), (s.offsetY = 0);
              }
            }
          },
          Gi = function (e, t) {
            for (var n = 0; n < e.nodeSize; n++)
              0 < (a = e.layoutNodes[n]).children.length &&
                ((a.maxX = void 0),
                (a.minX = void 0),
                (a.maxY = void 0),
                (a.minY = void 0));
            for (n = 0; n < e.nodeSize; n++)
              if (!(0 < (a = e.layoutNodes[n]).children.length || a.isLocked)) {
                var r = Ui(a.offsetX, a.offsetY, e.temperature);
                (a.positionX += r.x),
                  (a.positionY += r.y),
                  (a.offsetX = 0),
                  (a.offsetY = 0),
                  (a.minX = a.positionX - a.width),
                  (a.maxX = a.positionX + a.width),
                  (a.minY = a.positionY - a.height),
                  (a.maxY = a.positionY + a.height),
                  Zi(a, e);
              }
            for (n = 0; n < e.nodeSize; n++) {
              var a;
              0 < (a = e.layoutNodes[n]).children.length &&
                !a.isLocked &&
                ((a.positionX = (a.maxX + a.minX) / 2),
                (a.positionY = (a.maxY + a.minY) / 2),
                (a.width = a.maxX - a.minX),
                (a.height = a.maxY - a.minY));
            }
          },
          Ui = function (e, t, n) {
            var r = Math.sqrt(e * e + t * t);
            if (r > n) var a = { x: (n * e) / r, y: (n * t) / r };
            else a = { x: e, y: t };
            return a;
          },
          Zi = function e(t, n) {
            var r = t.parentId;
            if (null != r) {
              var a = n.layoutNodes[n.idToIndex[r]],
                i = !1;
              return (
                (null == a.maxX || t.maxX + a.padRight > a.maxX) &&
                  ((a.maxX = t.maxX + a.padRight), (i = !0)),
                (null == a.minX || t.minX - a.padLeft < a.minX) &&
                  ((a.minX = t.minX - a.padLeft), (i = !0)),
                (null == a.maxY || t.maxY + a.padBottom > a.maxY) &&
                  ((a.maxY = t.maxY + a.padBottom), (i = !0)),
                (null == a.minY || t.minY - a.padTop < a.minY) &&
                  ((a.minY = t.minY - a.padTop), (i = !0)),
                i ? e(a, n) : void 0
              );
            }
          },
          Qi = function (e, t) {
            for (var n = e.layoutNodes, r = [], a = 0; a < n.length; a++) {
              var i = n[a],
                o = i.cmptId;
              (r[o] = r[o] || []).push(i);
            }
            var s = 0;
            for (a = 0; a < r.length; a++)
              if ((g = r[a])) {
                (g.x1 = 1 / 0),
                  (g.x2 = -1 / 0),
                  (g.y1 = 1 / 0),
                  (g.y2 = -1 / 0);
                for (var l = 0; l < g.length; l++) {
                  var u = g[l];
                  (g.x1 = Math.min(g.x1, u.positionX - u.width / 2)),
                    (g.x2 = Math.max(g.x2, u.positionX + u.width / 2)),
                    (g.y1 = Math.min(g.y1, u.positionY - u.height / 2)),
                    (g.y2 = Math.max(g.y2, u.positionY + u.height / 2));
                }
                (g.w = g.x2 - g.x1), (g.h = g.y2 - g.y1), (s += g.w * g.h);
              }
            r.sort(function (e, t) {
              return t.w * t.h - e.w * e.h;
            });
            var c = 0,
              d = 0,
              h = 0,
              p = 0,
              f = (Math.sqrt(s) * e.clientWidth) / e.clientHeight;
            for (a = 0; a < r.length; a++) {
              var g;
              if ((g = r[a])) {
                for (l = 0; l < g.length; l++)
                  (u = g[l]).isLocked ||
                    ((u.positionX += c - g.x1), (u.positionY += d - g.y1));
                (c += g.w + t.componentSpacing),
                  (h += g.w + t.componentSpacing),
                  (p = Math.max(p, g.h)),
                  h > f &&
                    ((d += p + t.componentSpacing), (c = 0), (h = 0), (p = 0));
              }
            }
          },
          Ji = {
            fit: !0,
            padding: 30,
            boundingBox: void 0,
            avoidOverlap: !0,
            avoidOverlapPadding: 10,
            nodeDimensionsIncludeLabels: !1,
            spacingFactor: void 0,
            condense: !1,
            rows: void 0,
            cols: void 0,
            position: function (e) {},
            sort: void 0,
            animate: !1,
            animationDuration: 500,
            animationEasing: void 0,
            animateFilter: function (e, t) {
              return !0;
            },
            ready: void 0,
            stop: void 0,
            transform: function (e, t) {
              return t;
            },
          };
        function eo(e) {
          this.options = V({}, Ji, e);
        }
        eo.prototype.run = function () {
          var e = this.options,
            t = e,
            n = e.cy,
            r = t.eles,
            a = r.nodes().not(":parent");
          t.sort && (a = a.sort(t.sort));
          var i = nt(
            t.boundingBox
              ? t.boundingBox
              : { x1: 0, y1: 0, w: n.width(), h: n.height() }
          );
          if (0 === i.h || 0 === i.w)
            r.nodes().layoutPositions(this, t, function (e) {
              return { x: i.x1, y: i.y1 };
            });
          else {
            var o = a.size(),
              s = Math.sqrt((o * i.h) / i.w),
              l = Math.round(s),
              u = Math.round((i.w / i.h) * s),
              c = function (e) {
                if (null == e) return Math.min(l, u);
                Math.min(l, u) == l ? (l = e) : (u = e);
              },
              d = function (e) {
                if (null == e) return Math.max(l, u);
                Math.max(l, u) == l ? (l = e) : (u = e);
              },
              h = t.rows,
              p = null != t.cols ? t.cols : t.columns;
            if (null != h && null != p) (l = h), (u = p);
            else if (null != h && null == p) (l = h), (u = Math.ceil(o / l));
            else if (null == h && null != p) (u = p), (l = Math.ceil(o / u));
            else if (u * l > o) {
              var f = c(),
                g = d();
              (f - 1) * g >= o ? c(f - 1) : (g - 1) * f >= o && d(g - 1);
            } else
              for (; u * l < o; ) {
                var v = c(),
                  y = d();
                (y + 1) * v >= o ? d(y + 1) : c(v + 1);
              }
            var m = i.w / u,
              b = i.h / l;
            if ((t.condense && ((m = 0), (b = 0)), t.avoidOverlap))
              for (var x = 0; x < a.length; x++) {
                var w = a[x],
                  E = w._private.position;
                (null != E.x && null != E.y) || ((E.x = 0), (E.y = 0));
                var k = w.layoutDimensions(t),
                  C = t.avoidOverlapPadding,
                  S = k.w + C,
                  D = k.h + C;
                (m = Math.max(m, S)), (b = Math.max(b, D));
              }
            for (
              var P = {},
                T = function (e, t) {
                  return !!P["c-" + e + "-" + t];
                },
                M = function (e, t) {
                  P["c-" + e + "-" + t] = !0;
                },
                B = 0,
                _ = 0,
                N = function () {
                  ++_ >= u && ((_ = 0), B++);
                },
                I = {},
                L = 0;
              L < a.length;
              L++
            ) {
              var z = a[L],
                A = t.position(z);
              if (A && (void 0 !== A.row || void 0 !== A.col)) {
                var O = { row: A.row, col: A.col };
                if (void 0 === O.col)
                  for (O.col = 0; T(O.row, O.col); ) O.col++;
                else if (void 0 === O.row)
                  for (O.row = 0; T(O.row, O.col); ) O.row++;
                (I[z.id()] = O), M(O.row, O.col);
              }
            }
            a.layoutPositions(this, t, function (e, t) {
              var n, r;
              if (e.locked() || e.isParent()) return !1;
              var a = I[e.id()];
              if (a)
                (n = a.col * m + m / 2 + i.x1), (r = a.row * b + b / 2 + i.y1);
              else {
                for (; T(B, _); ) N();
                (n = _ * m + m / 2 + i.x1),
                  (r = B * b + b / 2 + i.y1),
                  M(B, _),
                  N();
              }
              return { x: n, y: r };
            });
          }
          return this;
        };
        var to = { ready: function () {}, stop: function () {} };
        function no(e) {
          this.options = V({}, to, e);
        }
        (no.prototype.run = function () {
          var e = this.options,
            t = e.eles,
            n = this;
          return (
            e.cy,
            n.emit("layoutstart"),
            t.nodes().positions(function () {
              return { x: 0, y: 0 };
            }),
            n.one("layoutready", e.ready),
            n.emit("layoutready"),
            n.one("layoutstop", e.stop),
            n.emit("layoutstop"),
            this
          );
        }),
          (no.prototype.stop = function () {
            return this;
          });
        var ro = {
          positions: void 0,
          zoom: void 0,
          pan: void 0,
          fit: !0,
          padding: 30,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
        function ao(e) {
          this.options = V({}, ro, e);
        }
        ao.prototype.run = function () {
          var e = this.options,
            t = e.eles.nodes(),
            n = x(e.positions);
          return (
            t.layoutPositions(this, e, function (t, r) {
              var a = (function (t) {
                if (null == e.positions)
                  return (function (e) {
                    return { x: e.x, y: e.y };
                  })(t.position());
                if (n) return e.positions(t);
                var r = e.positions[t._private.data.id];
                return null == r ? null : r;
              })(t);
              return !t.locked() && null != a && a;
            }),
            this
          );
        };
        var io = {
          fit: !0,
          padding: 30,
          boundingBox: void 0,
          animate: !1,
          animationDuration: 500,
          animationEasing: void 0,
          animateFilter: function (e, t) {
            return !0;
          },
          ready: void 0,
          stop: void 0,
          transform: function (e, t) {
            return t;
          },
        };
        function oo(e) {
          this.options = V({}, io, e);
        }
        oo.prototype.run = function () {
          var e = this.options,
            t = e.cy,
            n = e.eles,
            r = nt(
              e.boundingBox
                ? e.boundingBox
                : { x1: 0, y1: 0, w: t.width(), h: t.height() }
            );
          return (
            n.nodes().layoutPositions(this, e, function (e, t) {
              return {
                x: r.x1 + Math.round(Math.random() * r.w),
                y: r.y1 + Math.round(Math.random() * r.h),
              };
            }),
            this
          );
        };
        var so = [
          { name: "breadthfirst", impl: Di },
          { name: "circle", impl: Ti },
          { name: "concentric", impl: _i },
          { name: "cose", impl: Ii },
          { name: "grid", impl: eo },
          { name: "null", impl: no },
          { name: "preset", impl: ao },
          { name: "random", impl: oo },
        ];
        function lo(e) {
          (this.options = e), (this.notifications = 0);
        }
        var uo = function () {},
          co = function () {
            throw new Error("A headless instance can not render images");
          };
        lo.prototype = {
          recalculateRenderedStyle: uo,
          notify: function () {
            this.notifications++;
          },
          init: uo,
          isHeadless: function () {
            return !0;
          },
          png: co,
          jpg: co,
        };
        var ho = {
            arrowShapeWidth: 0.3,
            registerArrowShapes: function () {
              var e = (this.arrowShapes = {}),
                t = this,
                n = function (e, t, n, r, a, i, o) {
                  var s = a.x - n / 2 - o,
                    l = a.x + n / 2 + o,
                    u = a.y - n / 2 - o,
                    c = a.y + n / 2 + o;
                  return s <= e && e <= l && u <= t && t <= c;
                },
                r = function (e, t, n, r, a) {
                  var i = e * Math.cos(r) - t * Math.sin(r),
                    o = (e * Math.sin(r) + t * Math.cos(r)) * n;
                  return { x: i * n + a.x, y: o + a.y };
                },
                a = function (e, t, n, a) {
                  for (var i = [], o = 0; o < e.length; o += 2) {
                    var s = e[o],
                      l = e[o + 1];
                    i.push(r(s, l, t, n, a));
                  }
                  return i;
                },
                i = function (e) {
                  for (var t = [], n = 0; n < e.length; n++) {
                    var r = e[n];
                    t.push(r.x, r.y);
                  }
                  return t;
                },
                o = function (e) {
                  return (
                    e.pstyle("width").pfValue *
                    e.pstyle("arrow-scale").pfValue *
                    2
                  );
                },
                s = function (r, s) {
                  b(s) && (s = e[s]),
                    (e[r] = V(
                      {
                        name: r,
                        points: [
                          -0.15,
                          -0.3,
                          0.15,
                          -0.3,
                          0.15,
                          0.3,
                          -0.15,
                          0.3,
                        ],
                        collide: function (e, t, n, r, o, s) {
                          var l = i(a(this.points, n + 2 * s, r, o));
                          return gt(e, t, l);
                        },
                        roughCollide: n,
                        draw: function (e, n, r, i) {
                          var o = a(this.points, n, r, i);
                          t.arrowShapeImpl("polygon")(e, o);
                        },
                        spacing: function (e) {
                          return 0;
                        },
                        gap: o,
                      },
                      s
                    ));
                };
              s("none", {
                collide: ce,
                roughCollide: ce,
                draw: he,
                spacing: de,
                gap: de,
              }),
                s("triangle", { points: [-0.15, -0.3, 0, 0, 0.15, -0.3] }),
                s("arrow", "triangle"),
                s("triangle-backcurve", {
                  points: e.triangle.points,
                  controlPoint: [0, -0.15],
                  roughCollide: n,
                  draw: function (e, n, i, o, s) {
                    var l = a(this.points, n, i, o),
                      u = this.controlPoint,
                      c = r(u[0], u[1], n, i, o);
                    t.arrowShapeImpl(this.name)(e, l, c);
                  },
                  gap: function (e) {
                    return 0.8 * o(e);
                  },
                }),
                s("triangle-tee", {
                  points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
                  pointsTee: [-0.15, -0.4, -0.15, -0.5, 0.15, -0.5, 0.15, -0.4],
                  collide: function (e, t, n, r, o, s, l) {
                    var u = i(a(this.points, n + 2 * l, r, o)),
                      c = i(a(this.pointsTee, n + 2 * l, r, o));
                    return gt(e, t, u) || gt(e, t, c);
                  },
                  draw: function (e, n, r, i, o) {
                    var s = a(this.points, n, r, i),
                      l = a(this.pointsTee, n, r, i);
                    t.arrowShapeImpl(this.name)(e, s, l);
                  },
                }),
                s("circle-triangle", {
                  radius: 0.15,
                  pointsTr: [0, -0.15, 0.15, -0.45, -0.15, -0.45, 0, -0.15],
                  collide: function (e, t, n, r, o, s, l) {
                    var u = o,
                      c =
                        Math.pow(u.x - e, 2) + Math.pow(u.y - t, 2) <=
                        Math.pow((n + 2 * l) * this.radius, 2),
                      d = i(a(this.points, n + 2 * l, r, o));
                    return gt(e, t, d) || c;
                  },
                  draw: function (e, n, r, i, o) {
                    var s = a(this.pointsTr, n, r, i);
                    t.arrowShapeImpl(this.name)(
                      e,
                      s,
                      i.x,
                      i.y,
                      this.radius * n
                    );
                  },
                  spacing: function (e) {
                    return (
                      t.getArrowWidth(
                        e.pstyle("width").pfValue,
                        e.pstyle("arrow-scale").value
                      ) * this.radius
                    );
                  },
                }),
                s("triangle-cross", {
                  points: [0, 0, 0.15, -0.3, -0.15, -0.3, 0, 0],
                  baseCrossLinePts: [
                    -0.15,
                    -0.4,
                    -0.15,
                    -0.4,
                    0.15,
                    -0.4,
                    0.15,
                    -0.4,
                  ],
                  crossLinePts: function (e, t) {
                    var n = this.baseCrossLinePts.slice(),
                      r = t / e;
                    return (n[3] = n[3] - r), (n[5] = n[5] - r), n;
                  },
                  collide: function (e, t, n, r, o, s, l) {
                    var u = i(a(this.points, n + 2 * l, r, o)),
                      c = i(a(this.crossLinePts(n, s), n + 2 * l, r, o));
                    return gt(e, t, u) || gt(e, t, c);
                  },
                  draw: function (e, n, r, i, o) {
                    var s = a(this.points, n, r, i),
                      l = a(this.crossLinePts(n, o), n, r, i);
                    t.arrowShapeImpl(this.name)(e, s, l);
                  },
                }),
                s("vee", {
                  points: [-0.15, -0.3, 0, 0, 0.15, -0.3, 0, -0.15],
                  gap: function (e) {
                    return 0.525 * o(e);
                  },
                }),
                s("circle", {
                  radius: 0.15,
                  collide: function (e, t, n, r, a, i, o) {
                    var s = a;
                    return (
                      Math.pow(s.x - e, 2) + Math.pow(s.y - t, 2) <=
                      Math.pow((n + 2 * o) * this.radius, 2)
                    );
                  },
                  draw: function (e, n, r, a, i) {
                    t.arrowShapeImpl(this.name)(e, a.x, a.y, this.radius * n);
                  },
                  spacing: function (e) {
                    return (
                      t.getArrowWidth(
                        e.pstyle("width").pfValue,
                        e.pstyle("arrow-scale").value
                      ) * this.radius
                    );
                  },
                }),
                s("tee", {
                  points: [-0.15, 0, -0.15, -0.1, 0.15, -0.1, 0.15, 0],
                  spacing: function (e) {
                    return 1;
                  },
                  gap: function (e) {
                    return 1;
                  },
                }),
                s("square", {
                  points: [-0.15, 0, 0.15, 0, 0.15, -0.3, -0.15, -0.3],
                }),
                s("diamond", {
                  points: [-0.15, -0.15, 0, -0.3, 0.15, -0.15, 0, 0],
                  gap: function (e) {
                    return (
                      e.pstyle("width").pfValue * e.pstyle("arrow-scale").value
                    );
                  },
                }),
                s("chevron", {
                  points: [
                    0,
                    0,
                    -0.15,
                    -0.15,
                    -0.1,
                    -0.2,
                    0,
                    -0.1,
                    0.1,
                    -0.2,
                    0.15,
                    -0.15,
                  ],
                  gap: function (e) {
                    return (
                      0.95 *
                      e.pstyle("width").pfValue *
                      e.pstyle("arrow-scale").value
                    );
                  },
                });
            },
          },
          po = {
            projectIntoViewport: function (e, t) {
              var n = this.cy,
                r = this.findContainerClientCoords(),
                a = r[0],
                i = r[1],
                o = r[4],
                s = n.pan(),
                l = n.zoom();
              return [((e - a) / o - s.x) / l, ((t - i) / o - s.y) / l];
            },
            findContainerClientCoords: function () {
              if (this.containerBB) return this.containerBB;
              var e = this.container,
                t = e.getBoundingClientRect(),
                n = h.getComputedStyle(e),
                r = function (e) {
                  return parseFloat(n.getPropertyValue(e));
                },
                a = r("padding-left"),
                i = r("padding-right"),
                o = r("padding-top"),
                s = r("padding-bottom"),
                l = r("border-left-width"),
                u = r("border-right-width"),
                c = r("border-top-width"),
                d = (r("border-bottom-width"), e.clientWidth),
                p = e.clientHeight,
                f = a + i,
                g = o + s,
                v = l + u,
                y = t.width / (d + v),
                m = d - f,
                b = p - g,
                x = t.left + a + l,
                w = t.top + o + c;
              return (this.containerBB = [x, w, m, b, y]);
            },
            invalidateContainerClientCoordsCache: function () {
              this.containerBB = null;
            },
            findNearestElement: function (e, t, n, r) {
              return this.findNearestElements(e, t, n, r)[0];
            },
            findNearestElements: function (e, t, n, r) {
              var a,
                i,
                o = this,
                s = this,
                l = s.getCachedZSortedEles(),
                u = [],
                c = s.cy.zoom(),
                d = s.cy.hasCompoundNodes(),
                h = (r ? 24 : 8) / c,
                p = (r ? 8 : 2) / c,
                f = (r ? 8 : 2) / c,
                g = 1 / 0;
              function v(e, t) {
                if (e.isNode()) {
                  if (i) return;
                  (i = e), u.push(e);
                }
                if (e.isEdge() && (null == t || t < g))
                  if (a) {
                    if (
                      a.pstyle("z-compound-depth").value ===
                        e.pstyle("z-compound-depth").value &&
                      a.pstyle("z-compound-depth").value ===
                        e.pstyle("z-compound-depth").value
                    )
                      for (var n = 0; n < u.length; n++)
                        if (u[n].isEdge()) {
                          (u[n] = e), (a = e), (g = null != t ? t : g);
                          break;
                        }
                  } else u.push(e), (a = e), (g = null != t ? t : g);
              }
              function y(n) {
                var r = n.outerWidth() + 2 * p,
                  a = n.outerHeight() + 2 * p,
                  i = r / 2,
                  l = a / 2,
                  u = n.position();
                if (
                  u.x - i <= e &&
                  e <= u.x + i &&
                  u.y - l <= t &&
                  t <= u.y + l &&
                  s.nodeShapes[o.getNodeShape(n)].checkPoint(
                    e,
                    t,
                    0,
                    r,
                    a,
                    u.x,
                    u.y
                  )
                )
                  return v(n, 0), !0;
              }
              function m(n) {
                var r,
                  a = n._private,
                  i = a.rscratch,
                  l = n.pstyle("width").pfValue,
                  c = n.pstyle("arrow-scale").value,
                  p = l / 2 + h,
                  f = p * p,
                  g = 2 * p,
                  m = a.source,
                  b = a.target;
                if (
                  "segments" === i.edgeType ||
                  "straight" === i.edgeType ||
                  "haystack" === i.edgeType
                ) {
                  for (var x = i.allpts, w = 0; w + 3 < x.length; w += 2)
                    if (
                      dt(e, t, x[w], x[w + 1], x[w + 2], x[w + 3], g) &&
                      f > (r = ft(e, t, x[w], x[w + 1], x[w + 2], x[w + 3]))
                    )
                      return v(n, r), !0;
                } else if (
                  "bezier" === i.edgeType ||
                  "multibezier" === i.edgeType ||
                  "self" === i.edgeType ||
                  "compound" === i.edgeType
                )
                  for (x = i.allpts, w = 0; w + 5 < i.allpts.length; w += 4)
                    if (
                      ht(
                        e,
                        t,
                        x[w],
                        x[w + 1],
                        x[w + 2],
                        x[w + 3],
                        x[w + 4],
                        x[w + 5],
                        g
                      ) &&
                      f >
                        (r = pt(
                          e,
                          t,
                          x[w],
                          x[w + 1],
                          x[w + 2],
                          x[w + 3],
                          x[w + 4],
                          x[w + 5]
                        ))
                    )
                      return v(n, r), !0;
                (m = m || a.source), (b = b || a.target);
                var E = o.getArrowWidth(l, c),
                  k = [
                    {
                      name: "source",
                      x: i.arrowStartX,
                      y: i.arrowStartY,
                      angle: i.srcArrowAngle,
                    },
                    {
                      name: "target",
                      x: i.arrowEndX,
                      y: i.arrowEndY,
                      angle: i.tgtArrowAngle,
                    },
                    {
                      name: "mid-source",
                      x: i.midX,
                      y: i.midY,
                      angle: i.midsrcArrowAngle,
                    },
                    {
                      name: "mid-target",
                      x: i.midX,
                      y: i.midY,
                      angle: i.midtgtArrowAngle,
                    },
                  ];
                for (w = 0; w < k.length; w++) {
                  var C = k[w],
                    S = s.arrowShapes[n.pstyle(C.name + "-arrow-shape").value],
                    D = n.pstyle("width").pfValue;
                  if (
                    S.roughCollide(
                      e,
                      t,
                      E,
                      C.angle,
                      { x: C.x, y: C.y },
                      D,
                      h
                    ) &&
                    S.collide(e, t, E, C.angle, { x: C.x, y: C.y }, D, h)
                  )
                    return v(n), !0;
                }
                d && u.length > 0 && (y(m), y(b));
              }
              function b(e, t, n) {
                return ke(e, t, n);
              }
              function x(n, r) {
                var a,
                  i = n._private,
                  o = f;
                (a = r ? r + "-" : ""), n.boundingBox();
                var s = i.labelBounds[r || "main"],
                  l = n.pstyle(a + "label").value;
                if ("yes" === n.pstyle("text-events").strValue && l) {
                  var u = b(i.rscratch, "labelX", r),
                    c = b(i.rscratch, "labelY", r),
                    d = b(i.rscratch, "labelAngle", r),
                    h = n.pstyle(a + "text-margin-x").pfValue,
                    p = n.pstyle(a + "text-margin-y").pfValue,
                    g = s.x1 - o - h,
                    y = s.x2 + o - h,
                    m = s.y1 - o - p,
                    x = s.y2 + o - p;
                  if (d) {
                    var w = Math.cos(d),
                      E = Math.sin(d),
                      k = function (e, t) {
                        return {
                          x: (e -= u) * w - (t -= c) * E + u,
                          y: e * E + t * w + c,
                        };
                      },
                      C = k(g, m),
                      S = k(g, x),
                      D = k(y, m),
                      P = k(y, x),
                      T = [
                        C.x + h,
                        C.y + p,
                        D.x + h,
                        D.y + p,
                        P.x + h,
                        P.y + p,
                        S.x + h,
                        S.y + p,
                      ];
                    if (gt(e, t, T)) return v(n), !0;
                  } else if (lt(s, e, t)) return v(n), !0;
                }
              }
              n && (l = l.interactive);
              for (var w = l.length - 1; w >= 0; w--) {
                var E = l[w];
                E.isNode()
                  ? y(E) || x(E)
                  : m(E) || x(E) || x(E, "source") || x(E, "target");
              }
              return u;
            },
            getAllInBox: function (e, t, n, r) {
              for (
                var a,
                  i,
                  o = this.getCachedZSortedEles().interactive,
                  s = [],
                  l = Math.min(e, n),
                  u = Math.max(e, n),
                  c = Math.min(t, r),
                  d = Math.max(t, r),
                  h = nt({
                    x1: (e = l),
                    y1: (t = c),
                    x2: (n = u),
                    y2: (r = d),
                  }),
                  p = 0;
                p < o.length;
                p++
              ) {
                var f = o[p];
                if (f.isNode()) {
                  var g = f,
                    v = g.boundingBox({
                      includeNodes: !0,
                      includeEdges: !1,
                      includeLabels: !1,
                    });
                  st(h, v) && !ut(v, h) && s.push(g);
                } else {
                  var y = f,
                    m = y._private,
                    b = m.rscratch;
                  if (
                    null != b.startX &&
                    null != b.startY &&
                    !lt(h, b.startX, b.startY)
                  )
                    continue;
                  if (
                    null != b.endX &&
                    null != b.endY &&
                    !lt(h, b.endX, b.endY)
                  )
                    continue;
                  if (
                    "bezier" === b.edgeType ||
                    "multibezier" === b.edgeType ||
                    "self" === b.edgeType ||
                    "compound" === b.edgeType ||
                    "segments" === b.edgeType ||
                    "haystack" === b.edgeType
                  ) {
                    for (
                      var x =
                          m.rstyle.bezierPts ||
                          m.rstyle.linePts ||
                          m.rstyle.haystackPts,
                        w = !0,
                        E = 0;
                      E < x.length;
                      E++
                    )
                      if (((a = h), (i = x[E]), !lt(a, i.x, i.y))) {
                        w = !1;
                        break;
                      }
                    w && s.push(y);
                  } else
                    ("haystack" !== b.edgeType && "straight" !== b.edgeType) ||
                      s.push(y);
                }
              }
              return s;
            },
          },
          fo = {
            calculateArrowAngles: function (e) {
              var t,
                n,
                r,
                a,
                i,
                o,
                s = e._private.rscratch,
                l = "haystack" === s.edgeType,
                u = "bezier" === s.edgeType,
                c = "multibezier" === s.edgeType,
                d = "segments" === s.edgeType,
                h = "compound" === s.edgeType,
                p = "self" === s.edgeType;
              if (
                (l
                  ? ((r = s.haystackPts[0]),
                    (a = s.haystackPts[1]),
                    (i = s.haystackPts[2]),
                    (o = s.haystackPts[3]))
                  : ((r = s.arrowStartX),
                    (a = s.arrowStartY),
                    (i = s.arrowEndX),
                    (o = s.arrowEndY)),
                (g = s.midX),
                (v = s.midY),
                d)
              )
                (t = r - s.segpts[0]), (n = a - s.segpts[1]);
              else if (c || h || p || u) {
                var f = s.allpts;
                (t = r - Je(f[0], f[2], f[4], 0.1)),
                  (n = a - Je(f[1], f[3], f[5], 0.1));
              } else (t = r - g), (n = a - v);
              s.srcArrowAngle = $e(t, n);
              var g = s.midX,
                v = s.midY;
              if (
                (l && ((g = (r + i) / 2), (v = (a + o) / 2)),
                (t = i - r),
                (n = o - a),
                d)
              )
                if (((f = s.allpts).length / 2) % 2 == 0) {
                  var y = (m = f.length / 2) - 2;
                  (t = f[m] - f[y]), (n = f[m + 1] - f[y + 1]);
                } else {
                  y = (m = f.length / 2 - 1) - 2;
                  var m,
                    b = m + 2;
                  (t = f[m] - f[y]), (n = f[m + 1] - f[y + 1]);
                }
              else if (c || h || p) {
                var x, w, E, k;
                f = s.allpts;
                if ((s.ctrlpts.length / 2) % 2 == 0) {
                  var C = 2 + (S = 2 + (D = f.length / 2 - 1));
                  (x = Je(f[D], f[S], f[C], 0)),
                    (w = Je(f[D + 1], f[S + 1], f[C + 1], 0)),
                    (E = Je(f[D], f[S], f[C], 1e-4)),
                    (k = Je(f[D + 1], f[S + 1], f[C + 1], 1e-4));
                } else {
                  var S, D;
                  (C = 2 + (S = f.length / 2 - 1)),
                    (x = Je(f[(D = S - 2)], f[S], f[C], 0.4999)),
                    (w = Je(f[D + 1], f[S + 1], f[C + 1], 0.4999)),
                    (E = Je(f[D], f[S], f[C], 0.5)),
                    (k = Je(f[D + 1], f[S + 1], f[C + 1], 0.5));
                }
                (t = E - x), (n = k - w);
              }
              if (
                ((s.midtgtArrowAngle = $e(t, n)),
                (s.midDispX = t),
                (s.midDispY = n),
                (t *= -1),
                (n *= -1),
                d &&
                  (((f = s.allpts).length / 2) % 2 == 0 ||
                    ((t = -(f[(b = 2 + (m = f.length / 2 - 1))] - f[m])),
                    (n = -(f[b + 1] - f[m + 1])))),
                (s.midsrcArrowAngle = $e(t, n)),
                d)
              )
                (t = i - s.segpts[s.segpts.length - 2]),
                  (n = o - s.segpts[s.segpts.length - 1]);
              else if (c || h || p || u) {
                var P = (f = s.allpts).length;
                (t = i - Je(f[P - 6], f[P - 4], f[P - 2], 0.9)),
                  (n = o - Je(f[P - 5], f[P - 3], f[P - 1], 0.9));
              } else (t = i - g), (n = o - v);
              s.tgtArrowAngle = $e(t, n);
            },
          };
        fo.getArrowWidth = fo.getArrowHeight = function (e, t) {
          var n = (this.arrowWidthCache = this.arrowWidthCache || {}),
            r = n[e + ", " + t];
          return (
            r ||
            ((r = Math.max(Math.pow(13.37 * e, 0.9), 29) * t),
            (n[e + ", " + t] = r),
            r)
          );
        };
        var go = {};
        function vo(e) {
          var t = [];
          if (null != e) {
            for (var n = 0; n < e.length; n += 2) {
              var r = e[n],
                a = e[n + 1];
              t.push({ x: r, y: a });
            }
            return t;
          }
        }
        (go.findHaystackPoints = function (e) {
          for (var t = 0; t < e.length; t++) {
            var n = e[t],
              r = n._private,
              a = r.rscratch;
            if (!a.haystack) {
              var i = 2 * Math.random() * Math.PI;
              (a.source = { x: Math.cos(i), y: Math.sin(i) }),
                (i = 2 * Math.random() * Math.PI),
                (a.target = { x: Math.cos(i), y: Math.sin(i) });
            }
            var o = r.source,
              s = r.target,
              l = o.position(),
              u = s.position(),
              c = o.width(),
              d = s.width(),
              h = o.height(),
              p = s.height(),
              f = n.pstyle("haystack-radius").value / 2;
            (a.haystackPts = a.allpts = [
              a.source.x * c * f + l.x,
              a.source.y * h * f + l.y,
              a.target.x * d * f + u.x,
              a.target.y * p * f + u.y,
            ]),
              (a.midX = (a.allpts[0] + a.allpts[2]) / 2),
              (a.midY = (a.allpts[1] + a.allpts[3]) / 2),
              (a.edgeType = "haystack"),
              (a.haystack = !0),
              this.storeEdgeProjections(n),
              this.calculateArrowAngles(n),
              this.recalculateEdgeLabelProjections(n),
              this.calculateLabelAngles(n);
          }
        }),
          (go.findSegmentsPoints = function (e, t) {
            var n = e._private.rscratch,
              r = t.posPts,
              a = t.intersectionPts,
              i = t.vectorNormInverse,
              o = e.pstyle("edge-distances").value,
              s = e.pstyle("segment-weights"),
              l = e.pstyle("segment-distances"),
              u = Math.min(s.pfValue.length, l.pfValue.length);
            (n.edgeType = "segments"), (n.segpts = []);
            for (var c = 0; c < u; c++) {
              var d = s.pfValue[c],
                h = l.pfValue[c],
                p = 1 - d,
                f = d,
                g = "node-position" === o ? r : a,
                v = { x: g.x1 * p + g.x2 * f, y: g.y1 * p + g.y2 * f };
              n.segpts.push(v.x + i.x * h, v.y + i.y * h);
            }
          }),
          (go.findLoopPoints = function (e, t, n, r) {
            var a = e._private.rscratch,
              i = t.dirCounts,
              o = t.srcPos,
              s = e.pstyle("control-point-distances"),
              l = s ? s.pfValue[0] : void 0,
              u = e.pstyle("loop-direction").pfValue,
              c = e.pstyle("loop-sweep").pfValue,
              d = e.pstyle("control-point-step-size").pfValue;
            a.edgeType = "self";
            var h = n,
              p = d;
            r && ((h = 0), (p = l));
            var f = u - Math.PI / 2,
              g = f - c / 2,
              v = f + c / 2,
              y = String(u + "_" + c);
            (h = void 0 === i[y] ? (i[y] = 0) : ++i[y]),
              (a.ctrlpts = [
                o.x + 1.4 * Math.cos(g) * p * (h / 3 + 1),
                o.y + 1.4 * Math.sin(g) * p * (h / 3 + 1),
                o.x + 1.4 * Math.cos(v) * p * (h / 3 + 1),
                o.y + 1.4 * Math.sin(v) * p * (h / 3 + 1),
              ]);
          }),
          (go.findCompoundLoopPoints = function (e, t, n, r) {
            var a = e._private.rscratch;
            a.edgeType = "compound";
            var i = t.srcPos,
              o = t.tgtPos,
              s = t.srcW,
              l = t.srcH,
              u = t.tgtW,
              c = t.tgtH,
              d = e.pstyle("control-point-step-size").pfValue,
              h = e.pstyle("control-point-distances"),
              p = h ? h.pfValue[0] : void 0,
              f = n,
              g = d;
            r && ((f = 0), (g = p));
            var v = { x: i.x - s / 2, y: i.y - l / 2 },
              y = { x: o.x - u / 2, y: o.y - c / 2 },
              m = { x: Math.min(v.x, y.x), y: Math.min(v.y, y.y) },
              b = Math.max(0.5, Math.log(0.01 * s)),
              x = Math.max(0.5, Math.log(0.01 * u));
            a.ctrlpts = [
              m.x,
              m.y - (1 + Math.pow(50, 1.12) / 100) * g * (f / 3 + 1) * b,
              m.x - (1 + Math.pow(50, 1.12) / 100) * g * (f / 3 + 1) * x,
              m.y,
            ];
          }),
          (go.findStraightEdgePoints = function (e) {
            e._private.rscratch.edgeType = "straight";
          }),
          (go.findBezierPoints = function (e, t, n, r, a) {
            var i = e._private.rscratch,
              o = t.vectorNormInverse,
              s = t.posPts,
              l = t.intersectionPts,
              u = e.pstyle("edge-distances").value,
              c = e.pstyle("control-point-step-size").pfValue,
              d = e.pstyle("control-point-distances"),
              h = e.pstyle("control-point-weights"),
              p = d && h ? Math.min(d.value.length, h.value.length) : 1,
              f = d ? d.pfValue[0] : void 0,
              g = h.value[0],
              v = r;
            (i.edgeType = v ? "multibezier" : "bezier"), (i.ctrlpts = []);
            for (var y = 0; y < p; y++) {
              var m,
                b = (0.5 - t.eles.length / 2 + n) * c * (a ? -1 : 1),
                x = Ge(b);
              v && ((f = d ? d.pfValue[y] : c), (g = h.value[y]));
              var w =
                  void 0 !== (m = r ? f : void 0 !== f ? x * f : void 0)
                    ? m
                    : b,
                E = 1 - g,
                k = g,
                C = "node-position" === u ? s : l,
                S = { x: C.x1 * E + C.x2 * k, y: C.y1 * E + C.y2 * k };
              i.ctrlpts.push(S.x + o.x * w, S.y + o.y * w);
            }
          }),
          (go.findTaxiPoints = function (e, t) {
            var n = e._private.rscratch;
            n.edgeType = "segments";
            var r = "vertical",
              a = "horizontal",
              i = "leftward",
              o = "rightward",
              s = "downward",
              l = "upward",
              u = t.posPts,
              c = t.srcW,
              d = t.srcH,
              h = t.tgtW,
              p = t.tgtH,
              f = "node-position" !== e.pstyle("edge-distances").value,
              g = e.pstyle("taxi-direction").value,
              v = g,
              y = e.pstyle("taxi-turn"),
              m = "%" === y.units,
              b = y.pfValue,
              x = b < 0,
              w = e.pstyle("taxi-turn-min-distance").pfValue,
              E = f ? (c + h) / 2 : 0,
              k = f ? (d + p) / 2 : 0,
              C = u.x2 - u.x1,
              S = u.y2 - u.y1,
              D = function (e, t) {
                return e > 0 ? Math.max(e - t, 0) : Math.min(e + t, 0);
              },
              P = D(C, E),
              T = D(S, k),
              M = !1;
            "auto" === v
              ? (g = Math.abs(P) > Math.abs(T) ? a : r)
              : v === l || v === s
              ? ((g = r), (M = !0))
              : (v !== i && v !== o) || ((g = a), (M = !0));
            var B,
              _ = g === r,
              N = _ ? T : P,
              I = _ ? S : C,
              L = Ge(I),
              z = !1;
            (M && (m || x)) ||
              !(
                (v === s && I < 0) ||
                (v === l && I > 0) ||
                (v === i && I > 0) ||
                (v === o && I < 0)
              ) ||
              ((N = (L *= -1) * Math.abs(N)), (z = !0));
            var A = function (e) {
                return Math.abs(e) < w || Math.abs(e) >= Math.abs(N);
              },
              O = A(
                (B = m ? (b < 0 ? 1 + b : b) * N : (b < 0 ? N : 0) + b * L)
              ),
              R = A(Math.abs(N) - Math.abs(B));
            if ((!O && !R) || z)
              if (_) {
                var V = u.y1 + B + (f ? (d / 2) * L : 0),
                  F = u.x1,
                  j = u.x2;
                n.segpts = [F, V, j, V];
              } else {
                var q = u.x1 + B + (f ? (c / 2) * L : 0),
                  X = u.y1,
                  Y = u.y2;
                n.segpts = [q, X, q, Y];
              }
            else if (_) {
              var W = Math.abs(I) <= d / 2,
                H = Math.abs(C) <= h / 2;
              if (W) {
                var $ = (u.x1 + u.x2) / 2,
                  K = u.y1,
                  G = u.y2;
                n.segpts = [$, K, $, G];
              } else if (H) {
                var U = (u.y1 + u.y2) / 2,
                  Z = u.x1,
                  Q = u.x2;
                n.segpts = [Z, U, Q, U];
              } else n.segpts = [u.x1, u.y2];
            } else {
              var J = Math.abs(I) <= c / 2,
                ee = Math.abs(S) <= p / 2;
              if (J) {
                var te = (u.y1 + u.y2) / 2,
                  ne = u.x1,
                  re = u.x2;
                n.segpts = [ne, te, re, te];
              } else if (ee) {
                var ae = (u.x1 + u.x2) / 2,
                  ie = u.y1,
                  oe = u.y2;
                n.segpts = [ae, ie, ae, oe];
              } else n.segpts = [u.x2, u.y1];
            }
          }),
          (go.tryToCorrectInvalidPoints = function (e, t) {
            var n = e._private.rscratch;
            if ("bezier" === n.edgeType) {
              var r = t.srcPos,
                a = t.tgtPos,
                i = t.srcW,
                o = t.srcH,
                s = t.tgtW,
                l = t.tgtH,
                u = t.srcShape,
                c = t.tgtShape,
                d = !k(n.startX) || !k(n.startY),
                h = !k(n.arrowStartX) || !k(n.arrowStartY),
                p = !k(n.endX) || !k(n.endY),
                f = !k(n.arrowEndX) || !k(n.arrowEndY),
                g =
                  this.getArrowWidth(
                    e.pstyle("width").pfValue,
                    e.pstyle("arrow-scale").value
                  ) *
                  this.arrowShapeWidth *
                  3,
                v = Ue(
                  { x: n.ctrlpts[0], y: n.ctrlpts[1] },
                  { x: n.startX, y: n.startY }
                ),
                y = v < g,
                m = Ue(
                  { x: n.ctrlpts[0], y: n.ctrlpts[1] },
                  { x: n.endX, y: n.endY }
                ),
                b = m < g,
                x = !1;
              if (d || h || y) {
                x = !0;
                var w = { x: n.ctrlpts[0] - r.x, y: n.ctrlpts[1] - r.y },
                  E = Math.sqrt(w.x * w.x + w.y * w.y),
                  C = { x: w.x / E, y: w.y / E },
                  S = Math.max(i, o),
                  D = {
                    x: n.ctrlpts[0] + 2 * C.x * S,
                    y: n.ctrlpts[1] + 2 * C.y * S,
                  },
                  P = u.intersectLine(r.x, r.y, i, o, D.x, D.y, 0);
                y
                  ? ((n.ctrlpts[0] = n.ctrlpts[0] + C.x * (g - v)),
                    (n.ctrlpts[1] = n.ctrlpts[1] + C.y * (g - v)))
                  : ((n.ctrlpts[0] = P[0] + C.x * g),
                    (n.ctrlpts[1] = P[1] + C.y * g));
              }
              if (p || f || b) {
                x = !0;
                var T = { x: n.ctrlpts[0] - a.x, y: n.ctrlpts[1] - a.y },
                  M = Math.sqrt(T.x * T.x + T.y * T.y),
                  B = { x: T.x / M, y: T.y / M },
                  _ = Math.max(i, o),
                  N = {
                    x: n.ctrlpts[0] + 2 * B.x * _,
                    y: n.ctrlpts[1] + 2 * B.y * _,
                  },
                  I = c.intersectLine(a.x, a.y, s, l, N.x, N.y, 0);
                b
                  ? ((n.ctrlpts[0] = n.ctrlpts[0] + B.x * (g - m)),
                    (n.ctrlpts[1] = n.ctrlpts[1] + B.y * (g - m)))
                  : ((n.ctrlpts[0] = I[0] + B.x * g),
                    (n.ctrlpts[1] = I[1] + B.y * g));
              }
              x && this.findEndpoints(e);
            }
          }),
          (go.storeAllpts = function (e) {
            var t = e._private.rscratch;
            if (
              "multibezier" === t.edgeType ||
              "bezier" === t.edgeType ||
              "self" === t.edgeType ||
              "compound" === t.edgeType
            ) {
              (t.allpts = []), t.allpts.push(t.startX, t.startY);
              for (var n = 0; n + 1 < t.ctrlpts.length; n += 2)
                t.allpts.push(t.ctrlpts[n], t.ctrlpts[n + 1]),
                  n + 3 < t.ctrlpts.length &&
                    t.allpts.push(
                      (t.ctrlpts[n] + t.ctrlpts[n + 2]) / 2,
                      (t.ctrlpts[n + 1] + t.ctrlpts[n + 3]) / 2
                    );
              var r;
              t.allpts.push(t.endX, t.endY),
                (t.ctrlpts.length / 2) % 2 == 0
                  ? ((r = t.allpts.length / 2 - 1),
                    (t.midX = t.allpts[r]),
                    (t.midY = t.allpts[r + 1]))
                  : ((r = t.allpts.length / 2 - 3),
                    (t.midX = Je(
                      t.allpts[r],
                      t.allpts[r + 2],
                      t.allpts[r + 4],
                      0.5
                    )),
                    (t.midY = Je(
                      t.allpts[r + 1],
                      t.allpts[r + 3],
                      t.allpts[r + 5],
                      0.5
                    )));
            } else if ("straight" === t.edgeType)
              (t.allpts = [t.startX, t.startY, t.endX, t.endY]),
                (t.midX =
                  (t.startX + t.endX + t.arrowStartX + t.arrowEndX) / 4),
                (t.midY =
                  (t.startY + t.endY + t.arrowStartY + t.arrowEndY) / 4);
            else if ("segments" === t.edgeType)
              if (
                ((t.allpts = []),
                t.allpts.push(t.startX, t.startY),
                t.allpts.push.apply(t.allpts, t.segpts),
                t.allpts.push(t.endX, t.endY),
                t.segpts.length % 4 == 0)
              ) {
                var a = t.segpts.length / 2,
                  i = a - 2;
                (t.midX = (t.segpts[i] + t.segpts[a]) / 2),
                  (t.midY = (t.segpts[i + 1] + t.segpts[a + 1]) / 2);
              } else {
                var o = t.segpts.length / 2 - 1;
                (t.midX = t.segpts[o]), (t.midY = t.segpts[o + 1]);
              }
          }),
          (go.checkForInvalidEdgeWarning = function (e) {
            var t = e[0]._private.rscratch;
            t.nodesOverlap ||
            (k(t.startX) && k(t.startY) && k(t.endX) && k(t.endY))
              ? (t.loggedErr = !1)
              : t.loggedErr ||
                ((t.loggedErr = !0),
                ge(
                  "Edge `" +
                    e.id() +
                    "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."
                ));
          }),
          (go.findEdgeControlPoints = function (e) {
            var t = this;
            if (e && 0 !== e.length) {
              for (
                var n = this,
                  r = n.cy.hasCompoundNodes(),
                  a = {
                    map: new Se(),
                    get: function (e) {
                      var t = this.map.get(e[0]);
                      return null != t ? t.get(e[1]) : null;
                    },
                    set: function (e, t) {
                      var n = this.map.get(e[0]);
                      null == n && ((n = new Se()), this.map.set(e[0], n)),
                        n.set(e[1], t);
                    },
                  },
                  i = [],
                  o = [],
                  s = 0;
                s < e.length;
                s++
              ) {
                var l = e[s],
                  u = l._private,
                  c = l.pstyle("curve-style").value;
                if (!l.removed() && l.takesUpSpace())
                  if ("haystack" !== c) {
                    var d =
                        "unbundled-bezier" === c ||
                        "segments" === c ||
                        "straight" === c ||
                        "taxi" === c,
                      h = "unbundled-bezier" === c || "bezier" === c,
                      p = u.source,
                      f = u.target,
                      g = [p.poolIndex(), f.poolIndex()].sort(),
                      v = a.get(g);
                    null == v && ((v = { eles: [] }), a.set(g, v), i.push(g)),
                      v.eles.push(l),
                      d && (v.hasUnbundled = !0),
                      h && (v.hasBezier = !0);
                  } else o.push(l);
              }
              for (
                var y = function (e) {
                    var o = i[e],
                      s = a.get(o),
                      l = void 0;
                    if (!s.hasUnbundled) {
                      var u = s.eles[0].parallelEdges().filter(function (e) {
                        return e.isBundledBezier();
                      });
                      Ee(s.eles),
                        u.forEach(function (e) {
                          return s.eles.push(e);
                        }),
                        s.eles.sort(function (e, t) {
                          return e.poolIndex() - t.poolIndex();
                        });
                    }
                    var c = s.eles[0],
                      d = c.source(),
                      h = c.target();
                    if (d.poolIndex() > h.poolIndex()) {
                      var p = d;
                      (d = h), (h = p);
                    }
                    var f = (s.srcPos = d.position()),
                      g = (s.tgtPos = h.position()),
                      v = (s.srcW = d.outerWidth()),
                      y = (s.srcH = d.outerHeight()),
                      m = (s.tgtW = h.outerWidth()),
                      b = (s.tgtH = h.outerHeight()),
                      x = (s.srcShape = n.nodeShapes[t.getNodeShape(d)]),
                      w = (s.tgtShape = n.nodeShapes[t.getNodeShape(h)]);
                    s.dirCounts = {
                      north: 0,
                      west: 0,
                      south: 0,
                      east: 0,
                      northwest: 0,
                      southwest: 0,
                      northeast: 0,
                      southeast: 0,
                    };
                    for (var E = 0; E < s.eles.length; E++) {
                      var C = s.eles[E],
                        S = C[0]._private.rscratch,
                        D = C.pstyle("curve-style").value,
                        P =
                          "unbundled-bezier" === D ||
                          "segments" === D ||
                          "taxi" === D,
                        T = !d.same(C.source());
                      if (
                        !s.calculatedIntersection &&
                        d !== h &&
                        (s.hasBezier || s.hasUnbundled)
                      ) {
                        s.calculatedIntersection = !0;
                        var M = x.intersectLine(f.x, f.y, v, y, g.x, g.y, 0),
                          B = (s.srcIntn = M),
                          _ = w.intersectLine(g.x, g.y, m, b, f.x, f.y, 0),
                          N = (s.tgtIntn = _),
                          I = (s.intersectionPts = {
                            x1: M[0],
                            x2: _[0],
                            y1: M[1],
                            y2: _[1],
                          }),
                          L = (s.posPts = {
                            x1: f.x,
                            x2: g.x,
                            y1: f.y,
                            y2: g.y,
                          }),
                          z = _[1] - M[1],
                          A = _[0] - M[0],
                          O = Math.sqrt(A * A + z * z),
                          R = (s.vector = { x: A, y: z }),
                          V = (s.vectorNorm = { x: R.x / O, y: R.y / O }),
                          F = { x: -V.y, y: V.x };
                        (s.nodesOverlap =
                          !k(O) ||
                          w.checkPoint(M[0], M[1], 0, m, b, g.x, g.y) ||
                          x.checkPoint(_[0], _[1], 0, v, y, f.x, f.y)),
                          (s.vectorNormInverse = F),
                          (l = {
                            nodesOverlap: s.nodesOverlap,
                            dirCounts: s.dirCounts,
                            calculatedIntersection: !0,
                            hasBezier: s.hasBezier,
                            hasUnbundled: s.hasUnbundled,
                            eles: s.eles,
                            srcPos: g,
                            tgtPos: f,
                            srcW: m,
                            srcH: b,
                            tgtW: v,
                            tgtH: y,
                            srcIntn: N,
                            tgtIntn: B,
                            srcShape: w,
                            tgtShape: x,
                            posPts: { x1: L.x2, y1: L.y2, x2: L.x1, y2: L.y1 },
                            intersectionPts: {
                              x1: I.x2,
                              y1: I.y2,
                              x2: I.x1,
                              y2: I.y1,
                            },
                            vector: { x: -R.x, y: -R.y },
                            vectorNorm: { x: -V.x, y: -V.y },
                            vectorNormInverse: { x: -F.x, y: -F.y },
                          });
                      }
                      var j = T ? l : s;
                      (S.nodesOverlap = j.nodesOverlap),
                        (S.srcIntn = j.srcIntn),
                        (S.tgtIntn = j.tgtIntn),
                        r &&
                        (d.isParent() ||
                          d.isChild() ||
                          h.isParent() ||
                          h.isChild()) &&
                        (d.parents().anySame(h) ||
                          h.parents().anySame(d) ||
                          (d.same(h) && d.isParent()))
                          ? t.findCompoundLoopPoints(C, j, E, P)
                          : d === h
                          ? t.findLoopPoints(C, j, E, P)
                          : "segments" === D
                          ? t.findSegmentsPoints(C, j)
                          : "taxi" === D
                          ? t.findTaxiPoints(C, j)
                          : "straight" === D ||
                            (!P &&
                              s.eles.length % 2 == 1 &&
                              E === Math.floor(s.eles.length / 2))
                          ? t.findStraightEdgePoints(C)
                          : t.findBezierPoints(C, j, E, P, T),
                        t.findEndpoints(C),
                        t.tryToCorrectInvalidPoints(C, j),
                        t.checkForInvalidEdgeWarning(C),
                        t.storeAllpts(C),
                        t.storeEdgeProjections(C),
                        t.calculateArrowAngles(C),
                        t.recalculateEdgeLabelProjections(C),
                        t.calculateLabelAngles(C);
                    }
                  },
                  m = 0;
                m < i.length;
                m++
              )
                y(m);
              this.findHaystackPoints(o);
            }
          }),
          (go.getSegmentPoints = function (e) {
            var t = e[0]._private.rscratch;
            if ("segments" === t.edgeType)
              return this.recalculateRenderedStyle(e), vo(t.segpts);
          }),
          (go.getControlPoints = function (e) {
            var t = e[0]._private.rscratch,
              n = t.edgeType;
            if (
              "bezier" === n ||
              "multibezier" === n ||
              "self" === n ||
              "compound" === n
            )
              return this.recalculateRenderedStyle(e), vo(t.ctrlpts);
          }),
          (go.getEdgeMidpoint = function (e) {
            var t = e[0]._private.rscratch;
            return this.recalculateRenderedStyle(e), { x: t.midX, y: t.midY };
          });
        var yo = {
            manualEndptToPx: function (e, t) {
              var n = e.position(),
                r = e.outerWidth(),
                a = e.outerHeight();
              if (2 === t.value.length) {
                var i = [t.pfValue[0], t.pfValue[1]];
                return (
                  "%" === t.units[0] && (i[0] = i[0] * r),
                  "%" === t.units[1] && (i[1] = i[1] * a),
                  (i[0] += n.x),
                  (i[1] += n.y),
                  i
                );
              }
              var o = t.pfValue[0];
              o = -Math.PI / 2 + o;
              var s = 2 * Math.max(r, a),
                l = [n.x + Math.cos(o) * s, n.y + Math.sin(o) * s];
              return this.nodeShapes[this.getNodeShape(e)].intersectLine(
                n.x,
                n.y,
                r,
                a,
                l[0],
                l[1],
                0
              );
            },
            findEndpoints: function (e) {
              var t,
                n,
                r,
                a,
                i,
                o = this,
                s = e.source()[0],
                l = e.target()[0],
                u = s.position(),
                c = l.position(),
                d = e.pstyle("target-arrow-shape").value,
                h = e.pstyle("source-arrow-shape").value,
                p = e.pstyle("target-distance-from-node").pfValue,
                f = e.pstyle("source-distance-from-node").pfValue,
                g = e.pstyle("curve-style").value,
                v = e._private.rscratch,
                y = v.edgeType,
                m = "self" === y || "compound" === y,
                b = "bezier" === y || "multibezier" === y || m,
                x = "bezier" !== y,
                w = "straight" === y || "segments" === y,
                E = "segments" === y,
                C = b || x || w,
                S = m || "taxi" === g,
                D = e.pstyle("source-endpoint"),
                P = S ? "outside-to-node" : D.value,
                T = e.pstyle("target-endpoint"),
                M = S ? "outside-to-node" : T.value;
              if (((v.srcManEndpt = D), (v.tgtManEndpt = T), b)) {
                var B = [v.ctrlpts[0], v.ctrlpts[1]];
                (n = x
                  ? [
                      v.ctrlpts[v.ctrlpts.length - 2],
                      v.ctrlpts[v.ctrlpts.length - 1],
                    ]
                  : B),
                  (r = B);
              } else if (w) {
                var _ = E ? v.segpts.slice(0, 2) : [c.x, c.y];
                (n = E ? v.segpts.slice(v.segpts.length - 2) : [u.x, u.y]),
                  (r = _);
              }
              if ("inside-to-node" === M) t = [c.x, c.y];
              else if (T.units) t = this.manualEndptToPx(l, T);
              else if ("outside-to-line" === M) t = v.tgtIntn;
              else if (
                ("outside-to-node" === M || "outside-to-node-or-label" === M
                  ? (a = n)
                  : ("outside-to-line" !== M &&
                      "outside-to-line-or-label" !== M) ||
                    (a = [u.x, u.y]),
                (t = o.nodeShapes[this.getNodeShape(l)].intersectLine(
                  c.x,
                  c.y,
                  l.outerWidth(),
                  l.outerHeight(),
                  a[0],
                  a[1],
                  0
                )),
                "outside-to-node-or-label" === M ||
                  "outside-to-line-or-label" === M)
              ) {
                var N = l._private.rscratch,
                  I = N.labelWidth,
                  L = N.labelHeight,
                  z = N.labelX,
                  A = N.labelY,
                  O = I / 2,
                  R = L / 2,
                  V = l.pstyle("text-valign").value;
                "top" === V ? (A -= R) : "bottom" === V && (A += R);
                var F = l.pstyle("text-halign").value;
                "left" === F ? (z -= O) : "right" === F && (z += O);
                var j = kt(
                  a[0],
                  a[1],
                  [z - O, A - R, z + O, A - R, z + O, A + R, z - O, A + R],
                  c.x,
                  c.y
                );
                if (j.length > 0) {
                  var q = u,
                    X = Ze(q, He(t)),
                    Y = Ze(q, He(j)),
                    W = X;
                  Y < X && ((t = j), (W = Y)),
                    j.length > 2 &&
                      Ze(q, { x: j[2], y: j[3] }) < W &&
                      (t = [j[2], j[3]]);
                }
              }
              var H = Ct(t, n, o.arrowShapes[d].spacing(e) + p),
                $ = Ct(t, n, o.arrowShapes[d].gap(e) + p);
              if (
                ((v.endX = $[0]),
                (v.endY = $[1]),
                (v.arrowEndX = H[0]),
                (v.arrowEndY = H[1]),
                "inside-to-node" === P)
              )
                t = [u.x, u.y];
              else if (D.units) t = this.manualEndptToPx(s, D);
              else if ("outside-to-line" === P) t = v.srcIntn;
              else if (
                ("outside-to-node" === P || "outside-to-node-or-label" === P
                  ? (i = r)
                  : ("outside-to-line" !== P &&
                      "outside-to-line-or-label" !== P) ||
                    (i = [c.x, c.y]),
                (t = o.nodeShapes[this.getNodeShape(s)].intersectLine(
                  u.x,
                  u.y,
                  s.outerWidth(),
                  s.outerHeight(),
                  i[0],
                  i[1],
                  0
                )),
                "outside-to-node-or-label" === P ||
                  "outside-to-line-or-label" === P)
              ) {
                var K = s._private.rscratch,
                  G = K.labelWidth,
                  U = K.labelHeight,
                  Z = K.labelX,
                  Q = K.labelY,
                  J = G / 2,
                  ee = U / 2,
                  te = s.pstyle("text-valign").value;
                "top" === te ? (Q -= ee) : "bottom" === te && (Q += ee);
                var ne = s.pstyle("text-halign").value;
                "left" === ne ? (Z -= J) : "right" === ne && (Z += J);
                var re = kt(
                  i[0],
                  i[1],
                  [Z - J, Q - ee, Z + J, Q - ee, Z + J, Q + ee, Z - J, Q + ee],
                  u.x,
                  u.y
                );
                if (re.length > 0) {
                  var ae = c,
                    ie = Ze(ae, He(t)),
                    oe = Ze(ae, He(re)),
                    se = ie;
                  oe < ie && ((t = [re[0], re[1]]), (se = oe)),
                    re.length > 2 &&
                      Ze(ae, { x: re[2], y: re[3] }) < se &&
                      (t = [re[2], re[3]]);
                }
              }
              var le = Ct(t, r, o.arrowShapes[h].spacing(e) + f),
                ue = Ct(t, r, o.arrowShapes[h].gap(e) + f);
              (v.startX = ue[0]),
                (v.startY = ue[1]),
                (v.arrowStartX = le[0]),
                (v.arrowStartY = le[1]),
                C &&
                  (k(v.startX) && k(v.startY) && k(v.endX) && k(v.endY)
                    ? (v.badLine = !1)
                    : (v.badLine = !0));
            },
            getSourceEndpoint: function (e) {
              var t = e[0]._private.rscratch;
              switch ((this.recalculateRenderedStyle(e), t.edgeType)) {
                case "haystack":
                  return { x: t.haystackPts[0], y: t.haystackPts[1] };
                default:
                  return { x: t.arrowStartX, y: t.arrowStartY };
              }
            },
            getTargetEndpoint: function (e) {
              var t = e[0]._private.rscratch;
              switch ((this.recalculateRenderedStyle(e), t.edgeType)) {
                case "haystack":
                  return { x: t.haystackPts[2], y: t.haystackPts[3] };
                default:
                  return { x: t.arrowEndX, y: t.arrowEndY };
              }
            },
          },
          mo = {};
        function bo(e, t, n) {
          for (
            var r = function (e, t, n, r) {
                return Je(e, t, n, r);
              },
              a = t._private.rstyle.bezierPts,
              i = 0;
            i < e.bezierProjPcts.length;
            i++
          ) {
            var o = e.bezierProjPcts[i];
            a.push({ x: r(n[0], n[2], n[4], o), y: r(n[1], n[3], n[5], o) });
          }
        }
        (mo.storeEdgeProjections = function (e) {
          var t = e._private,
            n = t.rscratch,
            r = n.edgeType;
          if (
            ((t.rstyle.bezierPts = null),
            (t.rstyle.linePts = null),
            (t.rstyle.haystackPts = null),
            "multibezier" === r ||
              "bezier" === r ||
              "self" === r ||
              "compound" === r)
          ) {
            t.rstyle.bezierPts = [];
            for (var a = 0; a + 5 < n.allpts.length; a += 4)
              bo(this, e, n.allpts.slice(a, a + 6));
          } else if ("segments" === r) {
            var i = (t.rstyle.linePts = []);
            for (a = 0; a + 1 < n.allpts.length; a += 2)
              i.push({ x: n.allpts[a], y: n.allpts[a + 1] });
          } else if ("haystack" === r) {
            var o = n.haystackPts;
            t.rstyle.haystackPts = [
              { x: o[0], y: o[1] },
              { x: o[2], y: o[3] },
            ];
          }
          t.rstyle.arrowWidth =
            this.getArrowWidth(
              e.pstyle("width").pfValue,
              e.pstyle("arrow-scale").value
            ) * this.arrowShapeWidth;
        }),
          (mo.recalculateEdgeProjections = function (e) {
            this.findEdgeControlPoints(e);
          });
        var xo = {
            recalculateNodeLabelProjection: function (e) {
              var t = e.pstyle("label").strValue;
              if (!B(t)) {
                var n,
                  r,
                  a = e._private,
                  i = e.width(),
                  o = e.height(),
                  s = e.padding(),
                  l = e.position(),
                  u = e.pstyle("text-halign").strValue,
                  c = e.pstyle("text-valign").strValue,
                  d = a.rscratch,
                  h = a.rstyle;
                switch (u) {
                  case "left":
                    n = l.x - i / 2 - s;
                    break;
                  case "right":
                    n = l.x + i / 2 + s;
                    break;
                  default:
                    n = l.x;
                }
                switch (c) {
                  case "top":
                    r = l.y - o / 2 - s;
                    break;
                  case "bottom":
                    r = l.y + o / 2 + s;
                    break;
                  default:
                    r = l.y;
                }
                (d.labelX = n),
                  (d.labelY = r),
                  (h.labelX = n),
                  (h.labelY = r),
                  this.calculateLabelAngles(e),
                  this.applyLabelDimensions(e);
              }
            },
          },
          wo = function (e, t) {
            var n = Math.atan(t / e);
            return 0 === e && n < 0 && (n *= -1), n;
          },
          Eo = function (e, t) {
            var n = t.x - e.x,
              r = t.y - e.y;
            return wo(n, r);
          };
        (xo.recalculateEdgeLabelProjections = function (e) {
          var t,
            n = e._private,
            r = n.rscratch,
            a = this,
            i = {
              mid: e.pstyle("label").strValue,
              source: e.pstyle("source-label").strValue,
              target: e.pstyle("target-label").strValue,
            };
          if (i.mid || i.source || i.target) {
            t = { x: r.midX, y: r.midY };
            var o = function (e, t, r) {
              Ce(n.rscratch, e, t, r), Ce(n.rstyle, e, t, r);
            };
            o("labelX", null, t.x), o("labelY", null, t.y);
            var s = wo(r.midDispX, r.midDispY);
            o("labelAutoAngle", null, s);
            var l = function e() {
                if (e.cache) return e.cache;
                for (var t = [], i = 0; i + 5 < r.allpts.length; i += 4) {
                  var o = { x: r.allpts[i], y: r.allpts[i + 1] },
                    s = { x: r.allpts[i + 2], y: r.allpts[i + 3] },
                    l = { x: r.allpts[i + 4], y: r.allpts[i + 5] };
                  t.push({
                    p0: o,
                    p1: s,
                    p2: l,
                    startDist: 0,
                    length: 0,
                    segments: [],
                  });
                }
                var u = n.rstyle.bezierPts,
                  c = a.bezierProjPcts.length;
                function d(e, t, n, r, a) {
                  var i = Ue(t, n),
                    o = e.segments[e.segments.length - 1],
                    s = {
                      p0: t,
                      p1: n,
                      t0: r,
                      t1: a,
                      startDist: o ? o.startDist + o.length : 0,
                      length: i,
                    };
                  e.segments.push(s), (e.length += i);
                }
                for (var h = 0; h < t.length; h++) {
                  var p = t[h],
                    f = t[h - 1];
                  f && (p.startDist = f.startDist + f.length),
                    d(p, p.p0, u[h * c], 0, a.bezierProjPcts[0]);
                  for (var g = 0; g < c - 1; g++)
                    d(
                      p,
                      u[h * c + g],
                      u[h * c + g + 1],
                      a.bezierProjPcts[g],
                      a.bezierProjPcts[g + 1]
                    );
                  d(p, u[h * c + c - 1], p.p2, a.bezierProjPcts[c - 1], 1);
                }
                return (e.cache = t);
              },
              u = function (n) {
                var a,
                  s = "source" === n;
                if (i[n]) {
                  var u = e.pstyle(n + "-text-offset").pfValue;
                  switch (r.edgeType) {
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                      for (
                        var c, d = l(), h = 0, p = 0, f = 0;
                        f < d.length;
                        f++
                      ) {
                        for (
                          var g = d[s ? f : d.length - 1 - f], v = 0;
                          v < g.segments.length;
                          v++
                        ) {
                          var y = g.segments[s ? v : g.segments.length - 1 - v],
                            m =
                              f === d.length - 1 && v === g.segments.length - 1;
                          if (((h = p), (p += y.length) >= u || m)) {
                            c = { cp: g, segment: y };
                            break;
                          }
                        }
                        if (c) break;
                      }
                      var b = c.cp,
                        x = c.segment,
                        w = (u - h) / x.length,
                        E = x.t1 - x.t0,
                        k = s ? x.t0 + E * w : x.t1 - E * w;
                      (k = tt(0, k, 1)),
                        (t = et(b.p0, b.p1, b.p2, k)),
                        (a = (function (e, t, n, r) {
                          var a = tt(0, r - 0.001, 1),
                            i = tt(0, r + 0.001, 1),
                            o = et(e, t, n, a),
                            s = et(e, t, n, i);
                          return Eo(o, s);
                        })(b.p0, b.p1, b.p2, k));
                      break;
                    case "straight":
                    case "segments":
                    case "haystack":
                      for (
                        var C, S, D, P, T = 0, M = r.allpts.length, B = 0;
                        B + 3 < M &&
                        (s
                          ? ((D = { x: r.allpts[B], y: r.allpts[B + 1] }),
                            (P = { x: r.allpts[B + 2], y: r.allpts[B + 3] }))
                          : ((D = {
                              x: r.allpts[M - 2 - B],
                              y: r.allpts[M - 1 - B],
                            }),
                            (P = {
                              x: r.allpts[M - 4 - B],
                              y: r.allpts[M - 3 - B],
                            })),
                        (S = T),
                        !((T += C = Ue(D, P)) >= u));
                        B += 2
                      );
                      var _ = (u - S) / C;
                      (_ = tt(0, _, 1)),
                        (t = (function (e, t, n, r) {
                          var a = t.x - e.x,
                            i = t.y - e.y,
                            o = Ue(e, t),
                            s = a / o,
                            l = i / o;
                          return (
                            (n = null == n ? 0 : n),
                            (r = null != r ? r : n * o),
                            { x: e.x + s * r, y: e.y + l * r }
                          );
                        })(D, P, _)),
                        (a = Eo(D, P));
                  }
                  o("labelX", n, t.x),
                    o("labelY", n, t.y),
                    o("labelAutoAngle", n, a);
                }
              };
            u("source"), u("target"), this.applyLabelDimensions(e);
          }
        }),
          (xo.applyLabelDimensions = function (e) {
            this.applyPrefixedLabelDimensions(e),
              e.isEdge() &&
                (this.applyPrefixedLabelDimensions(e, "source"),
                this.applyPrefixedLabelDimensions(e, "target"));
          }),
          (xo.applyPrefixedLabelDimensions = function (e, t) {
            var n = e._private,
              r = this.getLabelText(e, t),
              a = this.calculateLabelDimensions(e, r),
              i = e.pstyle("line-height").pfValue,
              o = e.pstyle("text-wrap").strValue,
              s = ke(n.rscratch, "labelWrapCachedLines", t) || [],
              l = "wrap" !== o ? 1 : Math.max(s.length, 1),
              u = a.height / l,
              c = u * i,
              d = a.width,
              h = a.height + (l - 1) * (i - 1) * u;
            Ce(n.rstyle, "labelWidth", t, d),
              Ce(n.rscratch, "labelWidth", t, d),
              Ce(n.rstyle, "labelHeight", t, h),
              Ce(n.rscratch, "labelHeight", t, h),
              Ce(n.rscratch, "labelLineHeight", t, c);
          }),
          (xo.getLabelText = function (e, t) {
            var n = e._private,
              r = t ? t + "-" : "",
              a = e.pstyle(r + "label").strValue,
              i = e.pstyle("text-transform").value,
              o = function (e, r) {
                return r ? (Ce(n.rscratch, e, t, r), r) : ke(n.rscratch, e, t);
              };
            if (!a) return "";
            "none" == i ||
              ("uppercase" == i
                ? (a = a.toUpperCase())
                : "lowercase" == i && (a = a.toLowerCase()));
            var s = e.pstyle("text-wrap").value;
            if ("wrap" === s) {
              var l = o("labelKey");
              if (null != l && o("labelWrapKey") === l)
                return o("labelWrapCachedText");
              for (
                var u = a.split("\n"),
                  c = e.pstyle("text-max-width").pfValue,
                  d = "anywhere" === e.pstyle("text-overflow-wrap").value,
                  h = [],
                  p = /[\s\u200b]+/,
                  f = d ? "" : " ",
                  g = 0;
                g < u.length;
                g++
              ) {
                var v = u[g],
                  y = this.calculateLabelDimensions(e, v).width;
                if (d) {
                  var m = v.split("").join("​");
                  v = m;
                }
                if (y > c) {
                  for (var b = v.split(p), x = "", w = 0; w < b.length; w++) {
                    var E = b[w],
                      k = 0 === x.length ? E : x + f + E;
                    this.calculateLabelDimensions(e, k).width <= c
                      ? (x += E + f)
                      : (x && h.push(x), (x = E + f));
                  }
                  x.match(/^[\s\u200b]+$/) || h.push(x);
                } else h.push(v);
              }
              o("labelWrapCachedLines", h),
                (a = o("labelWrapCachedText", h.join("\n"))),
                o("labelWrapKey", l);
            } else if ("ellipsis" === s) {
              var C = e.pstyle("text-max-width").pfValue,
                S = "",
                D = !1;
              if (this.calculateLabelDimensions(e, a).width < C) return a;
              for (
                var P = 0;
                P < a.length &&
                !(this.calculateLabelDimensions(e, S + a[P] + "…").width > C);
                P++
              )
                (S += a[P]), P === a.length - 1 && (D = !0);
              return D || (S += "…"), S;
            }
            return a;
          }),
          (xo.getLabelJustification = function (e) {
            var t = e.pstyle("text-justification").strValue,
              n = e.pstyle("text-halign").strValue;
            if ("auto" !== t) return t;
            if (!e.isNode()) return "center";
            switch (n) {
              case "left":
                return "right";
              case "right":
                return "left";
              default:
                return "center";
            }
          }),
          (xo.calculateLabelDimensions = function (e, t) {
            var n = ne(t, e._private.labelDimsKey),
              r = this.labelDimCache || (this.labelDimCache = []),
              a = r[n];
            if (null != a) return a;
            var i = e.pstyle("font-style").strValue,
              o = e.pstyle("font-size").pfValue,
              s = e.pstyle("font-family").strValue,
              l = e.pstyle("font-weight").strValue,
              u = this.labelCalcCanvas,
              c = this.labelCalcCanvasContext;
            if (!u) {
              (u = this.labelCalcCanvas = document.createElement("canvas")),
                (c = this.labelCalcCanvasContext = u.getContext("2d"));
              var d = u.style;
              (d.position = "absolute"),
                (d.left = "-9999px"),
                (d.top = "-9999px"),
                (d.zIndex = "-1"),
                (d.visibility = "hidden"),
                (d.pointerEvents = "none");
            }
            c.font = ""
              .concat(i, " ")
              .concat(l, " ")
              .concat(o, "px ")
              .concat(s);
            for (
              var h = 0, p = 0, f = t.split("\n"), g = 0;
              g < f.length;
              g++
            ) {
              var v = f[g],
                y = c.measureText(v),
                m = Math.ceil(y.width),
                b = o;
              (h = Math.max(m, h)), (p += b);
            }
            return (h += 0), (p += 0), (r[n] = { width: h, height: p });
          }),
          (xo.calculateLabelAngle = function (e, t) {
            var n = e._private.rscratch,
              r = e.isEdge(),
              a = t ? t + "-" : "",
              i = e.pstyle(a + "text-rotation"),
              o = i.strValue;
            return "none" === o
              ? 0
              : r && "autorotate" === o
              ? n.labelAutoAngle
              : "autorotate" === o
              ? 0
              : i.pfValue;
          }),
          (xo.calculateLabelAngles = function (e) {
            var t = this,
              n = e.isEdge(),
              r = e._private.rscratch;
            (r.labelAngle = t.calculateLabelAngle(e)),
              n &&
                ((r.sourceLabelAngle = t.calculateLabelAngle(e, "source")),
                (r.targetLabelAngle = t.calculateLabelAngle(e, "target")));
          });
        var ko = {},
          Co = !1;
        ko.getNodeShape = function (e) {
          var t = e.pstyle("shape").value;
          if ("cutrectangle" === t && (e.width() < 28 || e.height() < 28))
            return (
              Co ||
                (ge(
                  "The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"
                ),
                (Co = !0)),
              "rectangle"
            );
          if (e.isParent())
            return "rectangle" === t ||
              "roundrectangle" === t ||
              "round-rectangle" === t ||
              "cutrectangle" === t ||
              "cut-rectangle" === t ||
              "barrel" === t
              ? t
              : "rectangle";
          if ("polygon" === t) {
            var n = e.pstyle("shape-polygon-points").value;
            return this.nodeShapes.makePolygon(n).name;
          }
          return t;
        };
        var So = {};
        [
          po,
          fo,
          go,
          yo,
          mo,
          xo,
          ko,
          {
            registerCalculationListeners: function () {
              var e = this.cy,
                t = e.collection(),
                n = this,
                r = function (e) {
                  var n =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1];
                  if ((t.merge(e), n))
                    for (var r = 0; r < e.length; r++) {
                      var a = e[r],
                        i = a._private,
                        o = i.rstyle;
                      (o.clean = !1), (o.cleanConnected = !1);
                    }
                };
              n.binder(e)
                .on("bounds.* dirty.*", function (e) {
                  var t = e.target;
                  r(t);
                })
                .on("style.* background.*", function (e) {
                  var t = e.target;
                  r(t, !1);
                });
              var a = function (a) {
                if (a) {
                  var i = n.onUpdateEleCalcsFns;
                  t.cleanStyle();
                  for (var o = 0; o < t.length; o++) {
                    var s = t[o],
                      l = s._private.rstyle;
                    s.isNode() &&
                      !l.cleanConnected &&
                      (r(s.connectedEdges()), (l.cleanConnected = !0));
                  }
                  if (i) for (var u = 0; u < i.length; u++) (0, i[u])(a, t);
                  n.recalculateRenderedStyle(t), (t = e.collection());
                }
              };
              (n.flushRenderedStyleQueue = function () {
                a(!0);
              }),
                n.beforeRender(a, n.beforeRenderPriorities.eleCalcs);
            },
            onUpdateEleCalcs: function (e) {
              (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(
                e
              );
            },
            recalculateRenderedStyle: function (e, t) {
              var n = function (e) {
                  return e._private.rstyle.cleanConnected;
                },
                r = [],
                a = [];
              if (!this.destroyed) {
                void 0 === t && (t = !0);
                for (var i = 0; i < e.length; i++) {
                  var o = e[i],
                    s = o._private,
                    l = s.rstyle;
                  !o.isEdge() ||
                    (n(o.source()) && n(o.target())) ||
                    (l.clean = !1),
                    (t && l.clean) ||
                      o.removed() ||
                      ("none" !== o.pstyle("display").value &&
                        ("nodes" === s.group ? a.push(o) : r.push(o),
                        (l.clean = !0)));
                }
                for (var u = 0; u < a.length; u++) {
                  var c = a[u],
                    d = c._private.rstyle,
                    h = c.position();
                  this.recalculateNodeLabelProjection(c),
                    (d.nodeX = h.x),
                    (d.nodeY = h.y),
                    (d.nodeW = c.pstyle("width").pfValue),
                    (d.nodeH = c.pstyle("height").pfValue);
                }
                this.recalculateEdgeProjections(r);
                for (var p = 0; p < r.length; p++) {
                  var f = r[p]._private,
                    g = f.rstyle,
                    v = f.rscratch;
                  (g.srcX = v.arrowStartX),
                    (g.srcY = v.arrowStartY),
                    (g.tgtX = v.arrowEndX),
                    (g.tgtY = v.arrowEndY),
                    (g.midX = v.midX),
                    (g.midY = v.midY),
                    (g.labelAngle = v.labelAngle),
                    (g.sourceLabelAngle = v.sourceLabelAngle),
                    (g.targetLabelAngle = v.targetLabelAngle);
                }
              }
            },
          },
          {
            updateCachedGrabbedEles: function () {
              var e = this.cachedZSortedEles;
              if (e) {
                (e.drag = []), (e.nondrag = []);
                for (var t = [], n = 0; n < e.length; n++) {
                  var r = (a = e[n])._private.rscratch;
                  a.grabbed() && !a.isParent()
                    ? t.push(a)
                    : r.inDragLayer
                    ? e.drag.push(a)
                    : e.nondrag.push(a);
                }
                for (n = 0; n < t.length; n++) {
                  var a = t[n];
                  e.drag.push(a);
                }
              }
            },
            invalidateCachedZSortedEles: function () {
              this.cachedZSortedEles = null;
            },
            getCachedZSortedEles: function (e) {
              if (e || !this.cachedZSortedEles) {
                var t = this.cy.mutableElements().toArray();
                t.sort(pa),
                  (t.interactive = t.filter(function (e) {
                    return e.interactive();
                  })),
                  (this.cachedZSortedEles = t),
                  this.updateCachedGrabbedEles();
              } else t = this.cachedZSortedEles;
              return t;
            },
          },
        ].forEach(function (e) {
          V(So, e);
        });
        var Do = {
            getCachedImage: function (e, t, n) {
              var r = (this.imageCache = this.imageCache || {}),
                a = r[e];
              if (a)
                return (
                  a.image.complete || a.image.addEventListener("load", n),
                  a.image
                );
              var i = ((a = r[e] = r[e] || {}).image = new Image());
              i.addEventListener("load", n),
                i.addEventListener("error", function () {
                  i.error = !0;
                });
              var o = "data:";
              return (
                e.substring(0, o.length).toLowerCase() === o ||
                  (i.crossOrigin = t),
                (i.src = e),
                i
              );
            },
          },
          Po = {
            registerBinding: function (e, t, n, r) {
              var a = Array.prototype.slice.apply(arguments, [1]),
                i = this.binder(e);
              return i.on.apply(i, a);
            },
            binder: function (e) {
              var t = this,
                n =
                  e === window ||
                  e === document ||
                  e === document.body ||
                  ("undefined" != typeof HTMLElement &&
                    e instanceof HTMLElement);
              if (null == t.supportsPassiveEvents) {
                var r = !1;
                try {
                  var a = Object.defineProperty({}, "passive", {
                    get: function () {
                      return (r = !0), !0;
                    },
                  });
                  window.addEventListener("test", null, a);
                } catch (e) {}
                t.supportsPassiveEvents = r;
              }
              var i = function (r, a, i) {
                var o = Array.prototype.slice.call(arguments);
                return (
                  n &&
                    t.supportsPassiveEvents &&
                    (o[2] = { capture: null != i && i, passive: !1, once: !1 }),
                  t.bindings.push({ target: e, args: o }),
                  (e.addEventListener || e.on).apply(e, o),
                  this
                );
              };
              return { on: i, addEventListener: i, addListener: i, bind: i };
            },
            nodeIsDraggable: function (e) {
              return e && e.isNode() && !e.locked() && e.grabbable();
            },
            nodeIsGrabbable: function (e) {
              return this.nodeIsDraggable(e) && e.interactive();
            },
          };
        Po.load = function () {
          var e = this,
            t = function (e) {
              return e.selected();
            },
            n = function (t, n, r, a) {
              null == t && (t = e.cy);
              for (var i = 0; i < n.length; i++) {
                var o = n[i];
                t.emit({ originalEvent: r, type: o, position: a });
              }
            },
            r = function (e) {
              return e.shiftKey || e.metaKey || e.ctrlKey;
            },
            i = function (t, n) {
              var r = !0;
              if (e.cy.hasCompoundNodes() && t && t.pannable()) {
                for (var a = 0; n && a < n.length; a++)
                  if ((t = n[a]).isNode() && t.isParent() && !t.pannable()) {
                    r = !1;
                    break;
                  }
              } else r = !0;
              return r;
            },
            o = function (e) {
              e[0]._private.rscratch.inDragLayer = !0;
            },
            s = function (e) {
              e[0]._private.rscratch.isGrabTarget = !0;
            },
            l = function (e, t) {
              var n = t.addToList;
              n.has(e) ||
                (n.merge(e),
                (function (e) {
                  e[0]._private.grabbed = !0;
                })(e));
            },
            u = function (t, n) {
              n = n || {};
              var r = t.cy().hasCompoundNodes();
              n.inDragLayer &&
                (t.forEach(o),
                t
                  .neighborhood()
                  .stdFilter(function (e) {
                    return !r || e.isEdge();
                  })
                  .forEach(o)),
                n.addToList &&
                  t.forEach(function (e) {
                    l(e, n);
                  }),
                (function (e, t) {
                  if (
                    e.cy().hasCompoundNodes() &&
                    (null != t.inDragLayer || null != t.addToList)
                  ) {
                    var n = e.descendants();
                    t.inDragLayer &&
                      (n.forEach(o), n.connectedEdges().forEach(o)),
                      t.addToList && t.addToList.unmerge(n);
                  }
                })(t, n),
                h(t, { inDragLayer: n.inDragLayer }),
                e.updateCachedGrabbedEles();
            },
            c = u,
            d = function (t) {
              t &&
                (e.getCachedZSortedEles().forEach(function (e) {
                  !(function (e) {
                    e[0]._private.grabbed = !1;
                  })(e),
                    (function (e) {
                      e[0]._private.rscratch.inDragLayer = !1;
                    })(e),
                    (function (e) {
                      e[0]._private.rscratch.isGrabTarget = !1;
                    })(e);
                }),
                e.updateCachedGrabbedEles());
            },
            h = function (e, t) {
              if (
                (null != t.inDragLayer || null != t.addToList) &&
                e.cy().hasCompoundNodes()
              ) {
                var n = e.ancestors().orphans();
                if (!n.same(e)) {
                  var r = n
                      .descendants()
                      .spawnSelf()
                      .merge(n)
                      .unmerge(e)
                      .unmerge(e.descendants()),
                    a = r.connectedEdges();
                  t.inDragLayer && (a.forEach(o), r.forEach(o)),
                    t.addToList &&
                      r.forEach(function (e) {
                        l(e, t);
                      });
                }
              }
            },
            p = function () {
              null != document.activeElement &&
                null != document.activeElement.blur &&
                document.activeElement.blur();
            },
            f = "undefined" != typeof MutationObserver,
            g = "undefined" != typeof ResizeObserver;
          f
            ? ((e.removeObserver = new MutationObserver(function (t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n].removedNodes;
                  if (r)
                    for (var a = 0; a < r.length; a++)
                      if (r[a] === e.container) {
                        e.destroy();
                        break;
                      }
                }
              })),
              e.container.parentNode &&
                e.removeObserver.observe(e.container.parentNode, {
                  childList: !0,
                }))
            : e.registerBinding(e.container, "DOMNodeRemoved", function (t) {
                e.destroy();
              });
          var v = a(function () {
            e.cy.resize();
          }, 100);
          f &&
            ((e.styleObserver = new MutationObserver(v)),
            e.styleObserver.observe(e.container, { attributes: !0 })),
            e.registerBinding(window, "resize", v),
            g &&
              ((e.resizeObserver = new ResizeObserver(v)),
              e.resizeObserver.observe(e.container));
          var y = function () {
            e.invalidateContainerClientCoordsCache();
          };
          !(function (e, t) {
            for (; null != e; ) t(e), (e = e.parentNode);
          })(e.container, function (t) {
            e.registerBinding(t, "transitionend", y),
              e.registerBinding(t, "animationend", y),
              e.registerBinding(t, "scroll", y);
          }),
            e.registerBinding(e.container, "contextmenu", function (e) {
              e.preventDefault();
            });
          var m = function (t) {
            for (
              var n = e.findContainerClientCoords(),
                r = n[0],
                a = n[1],
                i = n[2],
                o = n[3],
                s = t.touches ? t.touches : [t],
                l = !1,
                u = 0;
              u < s.length;
              u++
            ) {
              var c = s[u];
              if (
                r <= c.clientX &&
                c.clientX <= r + i &&
                a <= c.clientY &&
                c.clientY <= a + o
              ) {
                l = !0;
                break;
              }
            }
            if (!l) return !1;
            for (var d = e.container, h = t.target.parentNode, p = !1; h; ) {
              if (h === d) {
                p = !0;
                break;
              }
              h = h.parentNode;
            }
            return !!p;
          };
          e.registerBinding(
            e.container,
            "mousedown",
            function (t) {
              if (m(t)) {
                t.preventDefault(),
                  p(),
                  (e.hoverData.capture = !0),
                  (e.hoverData.which = t.which);
                var r = e.cy,
                  a = [t.clientX, t.clientY],
                  i = e.projectIntoViewport(a[0], a[1]),
                  o = e.selection,
                  l = e.findNearestElements(i[0], i[1], !0, !1),
                  d = l[0],
                  h = e.dragData.possibleDragElements;
                if (
                  ((e.hoverData.mdownPos = i),
                  (e.hoverData.mdownGPos = a),
                  3 == t.which)
                ) {
                  e.hoverData.cxtStarted = !0;
                  var f = {
                    originalEvent: t,
                    type: "cxttapstart",
                    position: { x: i[0], y: i[1] },
                  };
                  d
                    ? (d.activate(), d.emit(f), (e.hoverData.down = d))
                    : r.emit(f),
                    (e.hoverData.downTime = new Date().getTime()),
                    (e.hoverData.cxtDragged = !1);
                } else if (1 == t.which) {
                  if ((d && d.activate(), null != d && e.nodeIsGrabbable(d))) {
                    var g = function (e) {
                      return {
                        originalEvent: t,
                        type: e,
                        position: { x: i[0], y: i[1] },
                      };
                    };
                    if ((s(d), d.selected())) {
                      h = e.dragData.possibleDragElements = r.collection();
                      var v = r.$(function (t) {
                        return (
                          t.isNode() && t.selected() && e.nodeIsGrabbable(t)
                        );
                      });
                      u(v, { addToList: h }),
                        d.emit(g("grabon")),
                        v.forEach(function (e) {
                          e.emit(g("grab"));
                        });
                    } else
                      (h = e.dragData.possibleDragElements = r.collection()),
                        c(d, { addToList: h }),
                        d.emit(g("grabon")).emit(g("grab"));
                    e.redrawHint("eles", !0), e.redrawHint("drag", !0);
                  }
                  (e.hoverData.down = d),
                    (e.hoverData.downs = l),
                    (e.hoverData.downTime = new Date().getTime()),
                    n(d, ["mousedown", "tapstart", "vmousedown"], t, {
                      x: i[0],
                      y: i[1],
                    }),
                    null == d
                      ? ((o[4] = 1),
                        (e.data.bgActivePosistion = { x: i[0], y: i[1] }),
                        e.redrawHint("select", !0),
                        e.redraw())
                      : d.pannable() && (o[4] = 1),
                    (e.hoverData.tapholdCancelled = !1),
                    clearTimeout(e.hoverData.tapholdTimeout),
                    (e.hoverData.tapholdTimeout = setTimeout(function () {
                      if (!e.hoverData.tapholdCancelled) {
                        var n = e.hoverData.down;
                        n
                          ? n.emit({
                              originalEvent: t,
                              type: "taphold",
                              position: { x: i[0], y: i[1] },
                            })
                          : r.emit({
                              originalEvent: t,
                              type: "taphold",
                              position: { x: i[0], y: i[1] },
                            });
                      }
                    }, e.tapholdDuration));
                }
                (o[0] = o[2] = i[0]), (o[1] = o[3] = i[1]);
              }
            },
            !1
          ),
            e.registerBinding(
              window,
              "mousemove",
              function (t) {
                if (e.hoverData.capture || m(t)) {
                  var a = !1,
                    o = e.cy,
                    s = o.zoom(),
                    l = [t.clientX, t.clientY],
                    c = e.projectIntoViewport(l[0], l[1]),
                    h = e.hoverData.mdownPos,
                    p = e.hoverData.mdownGPos,
                    f = e.selection,
                    g = null;
                  e.hoverData.draggingEles ||
                    e.hoverData.dragging ||
                    e.hoverData.selecting ||
                    (g = e.findNearestElement(c[0], c[1], !0, !1));
                  var v,
                    y = e.hoverData.last,
                    b = e.hoverData.down,
                    x = [c[0] - f[2], c[1] - f[3]],
                    w = e.dragData.possibleDragElements;
                  if (p) {
                    var E = l[0] - p[0],
                      C = E * E,
                      S = l[1] - p[1],
                      D = C + S * S;
                    e.hoverData.isOverThresholdDrag = v =
                      D >= e.desktopTapThreshold2;
                  }
                  var P = r(t);
                  v && (e.hoverData.tapholdCancelled = !0),
                    (a = !0),
                    n(g, ["mousemove", "vmousemove", "tapdrag"], t, {
                      x: c[0],
                      y: c[1],
                    });
                  var T = function () {
                    (e.data.bgActivePosistion = void 0),
                      e.hoverData.selecting ||
                        o.emit({
                          originalEvent: t,
                          type: "boxstart",
                          position: { x: c[0], y: c[1] },
                        }),
                      (f[4] = 1),
                      (e.hoverData.selecting = !0),
                      e.redrawHint("select", !0),
                      e.redraw();
                  };
                  if (3 === e.hoverData.which) {
                    if (v) {
                      var M = {
                        originalEvent: t,
                        type: "cxtdrag",
                        position: { x: c[0], y: c[1] },
                      };
                      b ? b.emit(M) : o.emit(M),
                        (e.hoverData.cxtDragged = !0),
                        (e.hoverData.cxtOver && g === e.hoverData.cxtOver) ||
                          (e.hoverData.cxtOver &&
                            e.hoverData.cxtOver.emit({
                              originalEvent: t,
                              type: "cxtdragout",
                              position: { x: c[0], y: c[1] },
                            }),
                          (e.hoverData.cxtOver = g),
                          g &&
                            g.emit({
                              originalEvent: t,
                              type: "cxtdragover",
                              position: { x: c[0], y: c[1] },
                            }));
                    }
                  } else if (e.hoverData.dragging) {
                    if (
                      ((a = !0), o.panningEnabled() && o.userPanningEnabled())
                    ) {
                      var B;
                      if (e.hoverData.justStartedPan) {
                        var _ = e.hoverData.mdownPos;
                        (B = { x: (c[0] - _[0]) * s, y: (c[1] - _[1]) * s }),
                          (e.hoverData.justStartedPan = !1);
                      } else B = { x: x[0] * s, y: x[1] * s };
                      o.panBy(B), (e.hoverData.dragged = !0);
                    }
                    c = e.projectIntoViewport(t.clientX, t.clientY);
                  } else if (1 != f[4] || (null != b && !b.pannable())) {
                    if (
                      (b && b.pannable() && b.active() && b.unactivate(),
                      (b && b.grabbed()) ||
                        g == y ||
                        (y &&
                          n(y, ["mouseout", "tapdragout"], t, {
                            x: c[0],
                            y: c[1],
                          }),
                        g &&
                          n(g, ["mouseover", "tapdragover"], t, {
                            x: c[0],
                            y: c[1],
                          }),
                        (e.hoverData.last = g)),
                      b)
                    )
                      if (v) {
                        if (o.boxSelectionEnabled() && P)
                          b &&
                            b.grabbed() &&
                            (d(w),
                            b.emit("freeon"),
                            w.emit("free"),
                            e.dragData.didDrag &&
                              (b.emit("dragfreeon"), w.emit("dragfree"))),
                            T();
                        else if (b && b.grabbed() && e.nodeIsDraggable(b)) {
                          var N = !e.dragData.didDrag;
                          N && e.redrawHint("eles", !0),
                            (e.dragData.didDrag = !0);
                          var I = o.collection();
                          e.hoverData.draggingEles || u(w, { inDragLayer: !0 });
                          var L = { x: 0, y: 0 };
                          if (
                            k(x[0]) &&
                            k(x[1]) &&
                            ((L.x += x[0]), (L.y += x[1]), N)
                          ) {
                            var z = e.hoverData.dragDelta;
                            z &&
                              k(z[0]) &&
                              k(z[1]) &&
                              ((L.x += z[0]), (L.y += z[1]));
                          }
                          for (var A = 0; A < w.length; A++) {
                            var O = w[A];
                            e.nodeIsDraggable(O) && O.grabbed() && I.push(O);
                          }
                          (e.hoverData.draggingEles = !0),
                            I.silentShift(L).emit("position drag"),
                            e.redrawHint("drag", !0),
                            e.redraw();
                        }
                      } else
                        !(function () {
                          var t = (e.hoverData.dragDelta =
                            e.hoverData.dragDelta || []);
                          0 === t.length
                            ? (t.push(x[0]), t.push(x[1]))
                            : ((t[0] += x[0]), (t[1] += x[1]));
                        })();
                    a = !0;
                  } else
                    v &&
                      (e.hoverData.dragging ||
                      !o.boxSelectionEnabled() ||
                      (!P && o.panningEnabled() && o.userPanningEnabled())
                        ? !e.hoverData.selecting &&
                          o.panningEnabled() &&
                          o.userPanningEnabled() &&
                          i(b, e.hoverData.downs) &&
                          ((e.hoverData.dragging = !0),
                          (e.hoverData.justStartedPan = !0),
                          (f[4] = 0),
                          (e.data.bgActivePosistion = He(h)),
                          e.redrawHint("select", !0),
                          e.redraw())
                        : T(),
                      b && b.pannable() && b.active() && b.unactivate());
                  return (
                    (f[2] = c[0]),
                    (f[3] = c[1]),
                    a
                      ? (t.stopPropagation && t.stopPropagation(),
                        t.preventDefault && t.preventDefault(),
                        !1)
                      : void 0
                  );
                }
              },
              !1
            ),
            e.registerBinding(
              window,
              "mouseup",
              function (a) {
                if (e.hoverData.capture) {
                  e.hoverData.capture = !1;
                  var i = e.cy,
                    o = e.projectIntoViewport(a.clientX, a.clientY),
                    s = e.selection,
                    l = e.findNearestElement(o[0], o[1], !0, !1),
                    u = e.dragData.possibleDragElements,
                    c = e.hoverData.down,
                    h = r(a);
                  if (
                    (e.data.bgActivePosistion &&
                      (e.redrawHint("select", !0), e.redraw()),
                    (e.hoverData.tapholdCancelled = !0),
                    (e.data.bgActivePosistion = void 0),
                    c && c.unactivate(),
                    3 === e.hoverData.which)
                  ) {
                    var p = {
                      originalEvent: a,
                      type: "cxttapend",
                      position: { x: o[0], y: o[1] },
                    };
                    if ((c ? c.emit(p) : i.emit(p), !e.hoverData.cxtDragged)) {
                      var f = {
                        originalEvent: a,
                        type: "cxttap",
                        position: { x: o[0], y: o[1] },
                      };
                      c ? c.emit(f) : i.emit(f);
                    }
                    (e.hoverData.cxtDragged = !1), (e.hoverData.which = null);
                  } else if (1 === e.hoverData.which) {
                    if (
                      (n(l, ["mouseup", "tapend", "vmouseup"], a, {
                        x: o[0],
                        y: o[1],
                      }),
                      e.dragData.didDrag ||
                        e.hoverData.dragged ||
                        e.hoverData.selecting ||
                        e.hoverData.isOverThresholdDrag ||
                        n(c, ["click", "tap", "vclick"], a, {
                          x: o[0],
                          y: o[1],
                        }),
                      null != c ||
                        e.dragData.didDrag ||
                        e.hoverData.selecting ||
                        e.hoverData.dragged ||
                        r(a) ||
                        (i.$(t).unselect(["tapunselect"]),
                        u.length > 0 && e.redrawHint("eles", !0),
                        (e.dragData.possibleDragElements = u = i.collection())),
                      l != c ||
                        e.dragData.didDrag ||
                        e.hoverData.selecting ||
                        (null != l &&
                          l._private.selectable &&
                          (e.hoverData.dragging ||
                            ("additive" === i.selectionType() || h
                              ? l.selected()
                                ? l.unselect(["tapunselect"])
                                : l.select(["tapselect"])
                              : h ||
                                (i.$(t).unmerge(l).unselect(["tapunselect"]),
                                l.select(["tapselect"]))),
                          e.redrawHint("eles", !0))),
                      e.hoverData.selecting)
                    ) {
                      var g = i.collection(
                        e.getAllInBox(s[0], s[1], s[2], s[3])
                      );
                      e.redrawHint("select", !0),
                        g.length > 0 && e.redrawHint("eles", !0),
                        i.emit({
                          type: "boxend",
                          originalEvent: a,
                          position: { x: o[0], y: o[1] },
                        });
                      "additive" === i.selectionType() ||
                        h ||
                        i.$(t).unmerge(g).unselect(),
                        g
                          .emit("box")
                          .stdFilter(function (e) {
                            return e.selectable() && !e.selected();
                          })
                          .select()
                          .emit("boxselect"),
                        e.redraw();
                    }
                    if (
                      (e.hoverData.dragging &&
                        ((e.hoverData.dragging = !1),
                        e.redrawHint("select", !0),
                        e.redrawHint("eles", !0),
                        e.redraw()),
                      !s[4])
                    ) {
                      e.redrawHint("drag", !0), e.redrawHint("eles", !0);
                      var v = c && c.grabbed();
                      d(u),
                        v &&
                          (c.emit("freeon"),
                          u.emit("free"),
                          e.dragData.didDrag &&
                            (c.emit("dragfreeon"), u.emit("dragfree")));
                    }
                  }
                  (s[4] = 0),
                    (e.hoverData.down = null),
                    (e.hoverData.cxtStarted = !1),
                    (e.hoverData.draggingEles = !1),
                    (e.hoverData.selecting = !1),
                    (e.hoverData.isOverThresholdDrag = !1),
                    (e.dragData.didDrag = !1),
                    (e.hoverData.dragged = !1),
                    (e.hoverData.dragDelta = []),
                    (e.hoverData.mdownPos = null),
                    (e.hoverData.mdownGPos = null);
                }
              },
              !1
            );
          var b,
            x,
            w,
            E,
            C,
            S,
            D,
            P,
            T,
            M,
            B,
            _,
            N,
            I = function (t) {
              if (!e.scrollingPage) {
                var n = e.cy,
                  r = n.zoom(),
                  a = n.pan(),
                  i = e.projectIntoViewport(t.clientX, t.clientY),
                  o = [i[0] * r + a.x, i[1] * r + a.y];
                if (
                  e.hoverData.draggingEles ||
                  e.hoverData.dragging ||
                  e.hoverData.cxtStarted ||
                  0 !== e.selection[4]
                )
                  t.preventDefault();
                else if (
                  n.panningEnabled() &&
                  n.userPanningEnabled() &&
                  n.zoomingEnabled() &&
                  n.userZoomingEnabled()
                ) {
                  var s;
                  t.preventDefault(),
                    (e.data.wheelZooming = !0),
                    clearTimeout(e.data.wheelTimeout),
                    (e.data.wheelTimeout = setTimeout(function () {
                      (e.data.wheelZooming = !1),
                        e.redrawHint("eles", !0),
                        e.redraw();
                    }, 150)),
                    (s =
                      null != t.deltaY
                        ? t.deltaY / -250
                        : null != t.wheelDeltaY
                        ? t.wheelDeltaY / 1e3
                        : t.wheelDelta / 1e3),
                    (s *= e.wheelSensitivity),
                    1 === t.deltaMode && (s *= 33);
                  var l = n.zoom() * Math.pow(10, s);
                  "gesturechange" === t.type &&
                    (l = e.gestureStartZoom * t.scale),
                    n.zoom({
                      level: l,
                      renderedPosition: { x: o[0], y: o[1] },
                    });
                }
              }
            };
          e.registerBinding(e.container, "wheel", I, !0),
            e.registerBinding(
              window,
              "scroll",
              function (t) {
                (e.scrollingPage = !0),
                  clearTimeout(e.scrollingPageTimeout),
                  (e.scrollingPageTimeout = setTimeout(function () {
                    e.scrollingPage = !1;
                  }, 250));
              },
              !0
            ),
            e.registerBinding(
              e.container,
              "gesturestart",
              function (t) {
                (e.gestureStartZoom = e.cy.zoom()),
                  e.hasTouchStarted || t.preventDefault();
              },
              !0
            ),
            e.registerBinding(
              e.container,
              "gesturechange",
              function (t) {
                e.hasTouchStarted || I(t);
              },
              !0
            ),
            e.registerBinding(
              e.container,
              "mouseout",
              function (t) {
                var n = e.projectIntoViewport(t.clientX, t.clientY);
                e.cy.emit({
                  originalEvent: t,
                  type: "mouseout",
                  position: { x: n[0], y: n[1] },
                });
              },
              !1
            ),
            e.registerBinding(
              e.container,
              "mouseover",
              function (t) {
                var n = e.projectIntoViewport(t.clientX, t.clientY);
                e.cy.emit({
                  originalEvent: t,
                  type: "mouseover",
                  position: { x: n[0], y: n[1] },
                });
              },
              !1
            );
          var L,
            z,
            A,
            O,
            R = function (e, t, n, r) {
              return Math.sqrt((n - e) * (n - e) + (r - t) * (r - t));
            },
            V = function (e, t, n, r) {
              return (n - e) * (n - e) + (r - t) * (r - t);
            };
          if (
            (e.registerBinding(
              e.container,
              "touchstart",
              (L = function (t) {
                if (((e.hasTouchStarted = !0), m(t))) {
                  p(),
                    (e.touchData.capture = !0),
                    (e.data.bgActivePosistion = void 0);
                  var r = e.cy,
                    a = e.touchData.now,
                    i = e.touchData.earlier;
                  if (t.touches[0]) {
                    var o = e.projectIntoViewport(
                      t.touches[0].clientX,
                      t.touches[0].clientY
                    );
                    (a[0] = o[0]), (a[1] = o[1]);
                  }
                  if (
                    (t.touches[1] &&
                      ((o = e.projectIntoViewport(
                        t.touches[1].clientX,
                        t.touches[1].clientY
                      )),
                      (a[2] = o[0]),
                      (a[3] = o[1])),
                    t.touches[2] &&
                      ((o = e.projectIntoViewport(
                        t.touches[2].clientX,
                        t.touches[2].clientY
                      )),
                      (a[4] = o[0]),
                      (a[5] = o[1])),
                    t.touches[1])
                  ) {
                    (e.touchData.singleTouchMoved = !0),
                      d(e.dragData.touchDragEles);
                    var l = e.findContainerClientCoords();
                    (T = l[0]),
                      (M = l[1]),
                      (B = l[2]),
                      (_ = l[3]),
                      (b = t.touches[0].clientX - T),
                      (x = t.touches[0].clientY - M),
                      (w = t.touches[1].clientX - T),
                      (E = t.touches[1].clientY - M),
                      (N =
                        0 <= b &&
                        b <= B &&
                        0 <= w &&
                        w <= B &&
                        0 <= x &&
                        x <= _ &&
                        0 <= E &&
                        E <= _);
                    var h = r.pan(),
                      f = r.zoom();
                    if (
                      ((C = R(b, x, w, E)),
                      (S = V(b, x, w, E)),
                      (P = [
                        ((D = [(b + w) / 2, (x + E) / 2])[0] - h.x) / f,
                        (D[1] - h.y) / f,
                      ]),
                      S < 4e4 && !t.touches[2])
                    ) {
                      var g = e.findNearestElement(a[0], a[1], !0, !0),
                        v = e.findNearestElement(a[2], a[3], !0, !0);
                      return (
                        g && g.isNode()
                          ? (g
                              .activate()
                              .emit({
                                originalEvent: t,
                                type: "cxttapstart",
                                position: { x: a[0], y: a[1] },
                              }),
                            (e.touchData.start = g))
                          : v && v.isNode()
                          ? (v
                              .activate()
                              .emit({
                                originalEvent: t,
                                type: "cxttapstart",
                                position: { x: a[0], y: a[1] },
                              }),
                            (e.touchData.start = v))
                          : r.emit({
                              originalEvent: t,
                              type: "cxttapstart",
                              position: { x: a[0], y: a[1] },
                            }),
                        e.touchData.start &&
                          (e.touchData.start._private.grabbed = !1),
                        (e.touchData.cxt = !0),
                        (e.touchData.cxtDragged = !1),
                        (e.data.bgActivePosistion = void 0),
                        void e.redraw()
                      );
                    }
                  }
                  if (t.touches[2])
                    r.boxSelectionEnabled() && t.preventDefault();
                  else if (t.touches[1]);
                  else if (t.touches[0]) {
                    var y = e.findNearestElements(a[0], a[1], !0, !0),
                      k = y[0];
                    if (
                      null != k &&
                      (k.activate(),
                      (e.touchData.start = k),
                      (e.touchData.starts = y),
                      e.nodeIsGrabbable(k))
                    ) {
                      var I = (e.dragData.touchDragEles = r.collection()),
                        L = null;
                      e.redrawHint("eles", !0),
                        e.redrawHint("drag", !0),
                        k.selected()
                          ? ((L = r.$(function (t) {
                              return t.selected() && e.nodeIsGrabbable(t);
                            })),
                            u(L, { addToList: I }))
                          : c(k, { addToList: I }),
                        s(k);
                      var z = function (e) {
                        return {
                          originalEvent: t,
                          type: e,
                          position: { x: a[0], y: a[1] },
                        };
                      };
                      k.emit(z("grabon")),
                        L
                          ? L.forEach(function (e) {
                              e.emit(z("grab"));
                            })
                          : k.emit(z("grab"));
                    }
                    n(k, ["touchstart", "tapstart", "vmousedown"], t, {
                      x: a[0],
                      y: a[1],
                    }),
                      null == k &&
                        ((e.data.bgActivePosistion = { x: o[0], y: o[1] }),
                        e.redrawHint("select", !0),
                        e.redraw()),
                      (e.touchData.singleTouchMoved = !1),
                      (e.touchData.singleTouchStartTime = +new Date()),
                      clearTimeout(e.touchData.tapholdTimeout),
                      (e.touchData.tapholdTimeout = setTimeout(function () {
                        !1 !== e.touchData.singleTouchMoved ||
                          e.pinching ||
                          e.touchData.selecting ||
                          n(e.touchData.start, ["taphold"], t, {
                            x: a[0],
                            y: a[1],
                          });
                      }, e.tapholdDuration));
                  }
                  if (t.touches.length >= 1) {
                    for (
                      var A = (e.touchData.startPosition = []), O = 0;
                      O < a.length;
                      O++
                    )
                      A[O] = i[O] = a[O];
                    var F = t.touches[0];
                    e.touchData.startGPosition = [F.clientX, F.clientY];
                  }
                }
              }),
              !1
            ),
            e.registerBinding(
              window,
              "touchmove",
              (z = function (t) {
                var r = e.touchData.capture;
                if (r || m(t)) {
                  var a = e.selection,
                    o = e.cy,
                    s = e.touchData.now,
                    l = e.touchData.earlier,
                    c = o.zoom();
                  if (t.touches[0]) {
                    var h = e.projectIntoViewport(
                      t.touches[0].clientX,
                      t.touches[0].clientY
                    );
                    (s[0] = h[0]), (s[1] = h[1]);
                  }
                  t.touches[1] &&
                    ((h = e.projectIntoViewport(
                      t.touches[1].clientX,
                      t.touches[1].clientY
                    )),
                    (s[2] = h[0]),
                    (s[3] = h[1])),
                    t.touches[2] &&
                      ((h = e.projectIntoViewport(
                        t.touches[2].clientX,
                        t.touches[2].clientY
                      )),
                      (s[4] = h[0]),
                      (s[5] = h[1]));
                  var p,
                    f = e.touchData.startGPosition;
                  if (r && t.touches[0] && f) {
                    for (var g = [], v = 0; v < s.length; v++)
                      g[v] = s[v] - l[v];
                    var y = t.touches[0].clientX - f[0],
                      D = y * y,
                      B = t.touches[0].clientY - f[1];
                    p = D + B * B >= e.touchTapThreshold2;
                  }
                  if (r && e.touchData.cxt) {
                    t.preventDefault();
                    var _ = t.touches[0].clientX - T,
                      I = t.touches[0].clientY - M,
                      L = t.touches[1].clientX - T,
                      z = t.touches[1].clientY - M,
                      A = V(_, I, L, z);
                    if (A / S >= 2.25 || A >= 22500) {
                      (e.touchData.cxt = !1),
                        (e.data.bgActivePosistion = void 0),
                        e.redrawHint("select", !0);
                      var O = {
                        originalEvent: t,
                        type: "cxttapend",
                        position: { x: s[0], y: s[1] },
                      };
                      e.touchData.start
                        ? (e.touchData.start.unactivate().emit(O),
                          (e.touchData.start = null))
                        : o.emit(O);
                    }
                  }
                  if (r && e.touchData.cxt) {
                    (O = {
                      originalEvent: t,
                      type: "cxtdrag",
                      position: { x: s[0], y: s[1] },
                    }),
                      (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0),
                      e.touchData.start ? e.touchData.start.emit(O) : o.emit(O),
                      e.touchData.start &&
                        (e.touchData.start._private.grabbed = !1),
                      (e.touchData.cxtDragged = !0);
                    var F = e.findNearestElement(s[0], s[1], !0, !0);
                    (e.touchData.cxtOver && F === e.touchData.cxtOver) ||
                      (e.touchData.cxtOver &&
                        e.touchData.cxtOver.emit({
                          originalEvent: t,
                          type: "cxtdragout",
                          position: { x: s[0], y: s[1] },
                        }),
                      (e.touchData.cxtOver = F),
                      F &&
                        F.emit({
                          originalEvent: t,
                          type: "cxtdragover",
                          position: { x: s[0], y: s[1] },
                        }));
                  } else if (r && t.touches[2] && o.boxSelectionEnabled())
                    t.preventDefault(),
                      (e.data.bgActivePosistion = void 0),
                      (this.lastThreeTouch = +new Date()),
                      e.touchData.selecting ||
                        o.emit({
                          originalEvent: t,
                          type: "boxstart",
                          position: { x: s[0], y: s[1] },
                        }),
                      (e.touchData.selecting = !0),
                      (e.touchData.didSelect = !0),
                      (a[4] = 1),
                      a && 0 !== a.length && void 0 !== a[0]
                        ? ((a[2] = (s[0] + s[2] + s[4]) / 3),
                          (a[3] = (s[1] + s[3] + s[5]) / 3))
                        : ((a[0] = (s[0] + s[2] + s[4]) / 3),
                          (a[1] = (s[1] + s[3] + s[5]) / 3),
                          (a[2] = (s[0] + s[2] + s[4]) / 3 + 1),
                          (a[3] = (s[1] + s[3] + s[5]) / 3 + 1)),
                      e.redrawHint("select", !0),
                      e.redraw();
                  else if (
                    r &&
                    t.touches[1] &&
                    !e.touchData.didSelect &&
                    o.zoomingEnabled() &&
                    o.panningEnabled() &&
                    o.userZoomingEnabled() &&
                    o.userPanningEnabled()
                  ) {
                    if (
                      (t.preventDefault(),
                      (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0),
                      (ee = e.dragData.touchDragEles))
                    ) {
                      e.redrawHint("drag", !0);
                      for (var j = 0; j < ee.length; j++) {
                        var q = ee[j]._private;
                        (q.grabbed = !1), (q.rscratch.inDragLayer = !1);
                      }
                    }
                    var X = e.touchData.start,
                      Y =
                        ((_ = t.touches[0].clientX - T),
                        (I = t.touches[0].clientY - M),
                        (L = t.touches[1].clientX - T),
                        (z = t.touches[1].clientY - M),
                        R(_, I, L, z)),
                      W = Y / C;
                    if (N) {
                      var H = (_ - b + (L - w)) / 2,
                        $ = (I - x + (z - E)) / 2,
                        K = o.zoom(),
                        G = K * W,
                        U = o.pan(),
                        Z = P[0] * K + U.x,
                        Q = P[1] * K + U.y,
                        J = {
                          x: (-G / K) * (Z - U.x - H) + Z,
                          y: (-G / K) * (Q - U.y - $) + Q,
                        };
                      if (X && X.active()) {
                        var ee = e.dragData.touchDragEles;
                        d(ee),
                          e.redrawHint("drag", !0),
                          e.redrawHint("eles", !0),
                          X.unactivate().emit("freeon"),
                          ee.emit("free"),
                          e.dragData.didDrag &&
                            (X.emit("dragfreeon"), ee.emit("dragfree"));
                      }
                      o.viewport({ zoom: G, pan: J, cancelOnFailedZoom: !0 }),
                        (C = Y),
                        (b = _),
                        (x = I),
                        (w = L),
                        (E = z),
                        (e.pinching = !0);
                    }
                    t.touches[0] &&
                      ((h = e.projectIntoViewport(
                        t.touches[0].clientX,
                        t.touches[0].clientY
                      )),
                      (s[0] = h[0]),
                      (s[1] = h[1])),
                      t.touches[1] &&
                        ((h = e.projectIntoViewport(
                          t.touches[1].clientX,
                          t.touches[1].clientY
                        )),
                        (s[2] = h[0]),
                        (s[3] = h[1])),
                      t.touches[2] &&
                        ((h = e.projectIntoViewport(
                          t.touches[2].clientX,
                          t.touches[2].clientY
                        )),
                        (s[4] = h[0]),
                        (s[5] = h[1]));
                  } else if (t.touches[0] && !e.touchData.didSelect) {
                    var te = e.touchData.start,
                      ne = e.touchData.last;
                    if (
                      (e.hoverData.draggingEles ||
                        e.swipePanning ||
                        (F = e.findNearestElement(s[0], s[1], !0, !0)),
                      r && null != te && t.preventDefault(),
                      r && null != te && e.nodeIsDraggable(te))
                    )
                      if (p) {
                        ee = e.dragData.touchDragEles;
                        var re = !e.dragData.didDrag;
                        re && u(ee, { inDragLayer: !0 }),
                          (e.dragData.didDrag = !0);
                        var ae = { x: 0, y: 0 };
                        k(g[0]) &&
                          k(g[1]) &&
                          ((ae.x += g[0]),
                          (ae.y += g[1]),
                          re &&
                            (e.redrawHint("eles", !0),
                            (ie = e.touchData.dragDelta) &&
                              k(ie[0]) &&
                              k(ie[1]) &&
                              ((ae.x += ie[0]), (ae.y += ie[1])))),
                          (e.hoverData.draggingEles = !0),
                          ee.silentShift(ae).emit("position drag"),
                          e.redrawHint("drag", !0),
                          e.touchData.startPosition[0] == l[0] &&
                            e.touchData.startPosition[1] == l[1] &&
                            e.redrawHint("eles", !0),
                          e.redraw();
                      } else {
                        var ie;
                        0 ===
                        (ie = e.touchData.dragDelta =
                          e.touchData.dragDelta || []).length
                          ? (ie.push(g[0]), ie.push(g[1]))
                          : ((ie[0] += g[0]), (ie[1] += g[1]));
                      }
                    if (
                      (n(te || F, ["touchmove", "tapdrag", "vmousemove"], t, {
                        x: s[0],
                        y: s[1],
                      }),
                      (te && te.grabbed()) ||
                        F == ne ||
                        (ne &&
                          ne.emit({
                            originalEvent: t,
                            type: "tapdragout",
                            position: { x: s[0], y: s[1] },
                          }),
                        F &&
                          F.emit({
                            originalEvent: t,
                            type: "tapdragover",
                            position: { x: s[0], y: s[1] },
                          })),
                      (e.touchData.last = F),
                      r)
                    )
                      for (j = 0; j < s.length; j++)
                        s[j] &&
                          e.touchData.startPosition[j] &&
                          p &&
                          (e.touchData.singleTouchMoved = !0);
                    r &&
                      (null == te || te.pannable()) &&
                      o.panningEnabled() &&
                      o.userPanningEnabled() &&
                      (i(te, e.touchData.starts) &&
                        (t.preventDefault(),
                        e.data.bgActivePosistion ||
                          (e.data.bgActivePosistion = He(
                            e.touchData.startPosition
                          )),
                        e.swipePanning
                          ? o.panBy({ x: g[0] * c, y: g[1] * c })
                          : p &&
                            ((e.swipePanning = !0),
                            o.panBy({ x: y * c, y: B * c }),
                            te &&
                              (te.unactivate(),
                              e.redrawHint("select", !0),
                              (e.touchData.start = null)))),
                      (h = e.projectIntoViewport(
                        t.touches[0].clientX,
                        t.touches[0].clientY
                      )),
                      (s[0] = h[0]),
                      (s[1] = h[1]));
                  }
                  for (v = 0; v < s.length; v++) l[v] = s[v];
                  r &&
                    t.touches.length > 0 &&
                    !e.hoverData.draggingEles &&
                    !e.swipePanning &&
                    null != e.data.bgActivePosistion &&
                    ((e.data.bgActivePosistion = void 0),
                    e.redrawHint("select", !0),
                    e.redraw());
                }
              }),
              !1
            ),
            e.registerBinding(
              window,
              "touchcancel",
              (A = function (t) {
                var n = e.touchData.start;
                (e.touchData.capture = !1), n && n.unactivate();
              })
            ),
            e.registerBinding(
              window,
              "touchend",
              (O = function (r) {
                var a = e.touchData.start;
                if (e.touchData.capture) {
                  0 === r.touches.length && (e.touchData.capture = !1),
                    r.preventDefault();
                  var i = e.selection;
                  (e.swipePanning = !1), (e.hoverData.draggingEles = !1);
                  var o,
                    s = e.cy,
                    l = s.zoom(),
                    u = e.touchData.now,
                    c = e.touchData.earlier;
                  if (r.touches[0]) {
                    var h = e.projectIntoViewport(
                      r.touches[0].clientX,
                      r.touches[0].clientY
                    );
                    (u[0] = h[0]), (u[1] = h[1]);
                  }
                  if (
                    (r.touches[1] &&
                      ((h = e.projectIntoViewport(
                        r.touches[1].clientX,
                        r.touches[1].clientY
                      )),
                      (u[2] = h[0]),
                      (u[3] = h[1])),
                    r.touches[2] &&
                      ((h = e.projectIntoViewport(
                        r.touches[2].clientX,
                        r.touches[2].clientY
                      )),
                      (u[4] = h[0]),
                      (u[5] = h[1])),
                    a && a.unactivate(),
                    e.touchData.cxt)
                  ) {
                    if (
                      ((o = {
                        originalEvent: r,
                        type: "cxttapend",
                        position: { x: u[0], y: u[1] },
                      }),
                      a ? a.emit(o) : s.emit(o),
                      !e.touchData.cxtDragged)
                    ) {
                      var p = {
                        originalEvent: r,
                        type: "cxttap",
                        position: { x: u[0], y: u[1] },
                      };
                      a ? a.emit(p) : s.emit(p);
                    }
                    return (
                      e.touchData.start &&
                        (e.touchData.start._private.grabbed = !1),
                      (e.touchData.cxt = !1),
                      (e.touchData.start = null),
                      void e.redraw()
                    );
                  }
                  if (
                    !r.touches[2] &&
                    s.boxSelectionEnabled() &&
                    e.touchData.selecting
                  ) {
                    e.touchData.selecting = !1;
                    var f = s.collection(e.getAllInBox(i[0], i[1], i[2], i[3]));
                    (i[0] = void 0),
                      (i[1] = void 0),
                      (i[2] = void 0),
                      (i[3] = void 0),
                      (i[4] = 0),
                      e.redrawHint("select", !0),
                      s.emit({
                        type: "boxend",
                        originalEvent: r,
                        position: { x: u[0], y: u[1] },
                      }),
                      f
                        .emit("box")
                        .stdFilter(function (e) {
                          return e.selectable() && !e.selected();
                        })
                        .select()
                        .emit("boxselect"),
                      f.nonempty() && e.redrawHint("eles", !0),
                      e.redraw();
                  }
                  if ((null != a && a.unactivate(), r.touches[2]))
                    (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0);
                  else if (r.touches[1]);
                  else if (r.touches[0]);
                  else if (!r.touches[0]) {
                    (e.data.bgActivePosistion = void 0),
                      e.redrawHint("select", !0);
                    var g = e.dragData.touchDragEles;
                    if (null != a) {
                      var v = a._private.grabbed;
                      d(g),
                        e.redrawHint("drag", !0),
                        e.redrawHint("eles", !0),
                        v &&
                          (a.emit("freeon"),
                          g.emit("free"),
                          e.dragData.didDrag &&
                            (a.emit("dragfreeon"), g.emit("dragfree"))),
                        n(
                          a,
                          ["touchend", "tapend", "vmouseup", "tapdragout"],
                          r,
                          { x: u[0], y: u[1] }
                        ),
                        a.unactivate(),
                        (e.touchData.start = null);
                    } else {
                      var y = e.findNearestElement(u[0], u[1], !0, !0);
                      n(
                        y,
                        ["touchend", "tapend", "vmouseup", "tapdragout"],
                        r,
                        { x: u[0], y: u[1] }
                      );
                    }
                    var m = e.touchData.startPosition[0] - u[0],
                      b = m * m,
                      x = e.touchData.startPosition[1] - u[1],
                      w = (b + x * x) * l * l;
                    e.touchData.singleTouchMoved ||
                      (a || s.$(":selected").unselect(["tapunselect"]),
                      n(a, ["tap", "vclick"], r, { x: u[0], y: u[1] })),
                      null != a &&
                        !e.dragData.didDrag &&
                        a._private.selectable &&
                        w < e.touchTapThreshold2 &&
                        !e.pinching &&
                        ("single" === s.selectionType()
                          ? (s.$(t).unmerge(a).unselect(["tapunselect"]),
                            a.select(["tapselect"]))
                          : a.selected()
                          ? a.unselect(["tapunselect"])
                          : a.select(["tapselect"]),
                        e.redrawHint("eles", !0)),
                      (e.touchData.singleTouchMoved = !0);
                  }
                  for (var E = 0; E < u.length; E++) c[E] = u[E];
                  (e.dragData.didDrag = !1),
                    0 === r.touches.length &&
                      ((e.touchData.dragDelta = []),
                      (e.touchData.startPosition = null),
                      (e.touchData.startGPosition = null),
                      (e.touchData.didSelect = !1)),
                    r.touches.length < 2 &&
                      (1 === r.touches.length &&
                        (e.touchData.startGPosition = [
                          r.touches[0].clientX,
                          r.touches[0].clientY,
                        ]),
                      (e.pinching = !1),
                      e.redrawHint("eles", !0),
                      e.redraw());
                }
              }),
              !1
            ),
            "undefined" == typeof TouchEvent)
          ) {
            var F = [],
              j = function (e) {
                return {
                  clientX: e.clientX,
                  clientY: e.clientY,
                  force: 1,
                  identifier: e.pointerId,
                  pageX: e.pageX,
                  pageY: e.pageY,
                  radiusX: e.width / 2,
                  radiusY: e.height / 2,
                  screenX: e.screenX,
                  screenY: e.screenY,
                  target: e.target,
                };
              },
              q = function (e) {
                for (var t = 0; t < F.length; t++)
                  if (F[t].event.pointerId === e.pointerId)
                    return void F.splice(t, 1);
              },
              X = function (e) {
                e.touches = F.map(function (e) {
                  return e.touch;
                });
              },
              Y = function (e) {
                return "mouse" === e.pointerType || 4 === e.pointerType;
              };
            e.registerBinding(e.container, "pointerdown", function (e) {
              Y(e) ||
                (e.preventDefault(),
                (function (e) {
                  F.push(
                    (function (e) {
                      return { event: e, touch: j(e) };
                    })(e)
                  );
                })(e),
                X(e),
                L(e));
            }),
              e.registerBinding(e.container, "pointerup", function (e) {
                Y(e) || (q(e), X(e), O(e));
              }),
              e.registerBinding(e.container, "pointercancel", function (e) {
                Y(e) || (q(e), X(e), A());
              }),
              e.registerBinding(e.container, "pointermove", function (e) {
                Y(e) ||
                  (e.preventDefault(),
                  (function (e) {
                    var t = F.filter(function (t) {
                      return t.event.pointerId === e.pointerId;
                    })[0];
                    (t.event = e), (t.touch = j(e));
                  })(e),
                  X(e),
                  z(e));
              });
          }
        };
        var To = {
            generatePolygon: function (e, t) {
              return (this.nodeShapes[e] = {
                renderer: this,
                name: e,
                points: t,
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(
                    "polygon",
                    e,
                    t,
                    n,
                    r,
                    a,
                    this.points
                  );
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  return kt(a, i, this.points, e, t, n / 2, r / 2, o);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  return vt(e, t, this.points, i, o, r, a, [0, -1], n);
                },
              });
            },
            generateEllipse: function () {
              return (this.nodeShapes.ellipse = {
                renderer: this,
                name: "ellipse",
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  return (function (e, t, n, r, a, i) {
                    var o = n - e,
                      s = r - t;
                    (o /= a), (s /= i);
                    var l = Math.sqrt(o * o + s * s),
                      u = l - 1;
                    if (u < 0) return [];
                    var c = u / l;
                    return [(n - e) * c + e, (r - t) * c + t];
                  })(a, i, e, t, n / 2 + o, r / 2 + o);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  return bt(e, t, r, a, i, o, n);
                },
              });
            },
            generateRoundPolygon: function (e, t) {
              for (
                var n = new Array(2 * t.length), r = 0;
                r < t.length / 2;
                r++
              ) {
                var a,
                  i = 2 * r;
                (a = r < t.length / 2 - 1 ? 2 * (r + 1) : 0),
                  (n[4 * r] = t[i]),
                  (n[4 * r + 1] = t[i + 1]);
                var o = t[a] - t[i],
                  s = t[a + 1] - t[i + 1],
                  l = Math.sqrt(o * o + s * s);
                (n[4 * r + 2] = o / l), (n[4 * r + 3] = s / l);
              }
              return (this.nodeShapes[e] = {
                renderer: this,
                name: e,
                points: n,
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(
                    "round-polygon",
                    e,
                    t,
                    n,
                    r,
                    a,
                    this.points
                  );
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  return (function (e, t, n, r, a, i, o, s) {
                    for (
                      var l,
                        u = [],
                        c = new Array(n.length),
                        d = i / 2,
                        h = o / 2,
                        p = Mt(i, o),
                        f = 0;
                      f < n.length / 4;
                      f++
                    ) {
                      var g, v;
                      (v = 0 === f ? n.length - 2 : 4 * f - 2), (g = 4 * f + 2);
                      var y = r + d * n[4 * f],
                        m = a + h * n[4 * f + 1],
                        b = -n[v] * n[g] - n[v + 1] * n[g + 1],
                        x = p / Math.tan(Math.acos(b) / 2),
                        w = y - x * n[v],
                        E = m - x * n[v + 1],
                        k = y + x * n[g],
                        C = m + x * n[g + 1];
                      0 === f
                        ? ((c[n.length - 2] = w), (c[n.length - 1] = E))
                        : ((c[4 * f - 2] = w), (c[4 * f - 1] = E)),
                        (c[4 * f] = k),
                        (c[4 * f + 1] = C);
                      var S = n[v + 1],
                        D = -n[v];
                      S * n[g] + D * n[g + 1] < 0 && ((S *= -1), (D *= -1)),
                        0 !==
                          (l = xt(e, t, r, a, w + S * p, E + D * p, p))
                            .length && u.push(l[0], l[1]);
                    }
                    for (var P = 0; P < c.length / 4; P++)
                      0 !==
                        (l = Et(
                          e,
                          t,
                          r,
                          a,
                          c[4 * P],
                          c[4 * P + 1],
                          c[4 * P + 2],
                          c[4 * P + 3],
                          !1
                        )).length && u.push(l[0], l[1]);
                    if (u.length > 2) {
                      for (
                        var T = [u[0], u[1]],
                          M = Math.pow(T[0] - e, 2) + Math.pow(T[1] - t, 2),
                          B = 1;
                        B < u.length / 2;
                        B++
                      ) {
                        var _ =
                          Math.pow(u[2 * B] - e, 2) +
                          Math.pow(u[2 * B + 1] - t, 2);
                        _ <= M &&
                          ((T[0] = u[2 * B]), (T[1] = u[2 * B + 1]), (M = _));
                      }
                      return T;
                    }
                    return u;
                  })(a, i, this.points, e, t, n, r);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  return (function (e, t, n, r, a, i, o) {
                    for (
                      var s = new Array(n.length),
                        l = i / 2,
                        u = o / 2,
                        c = Mt(i, o),
                        d = c * c,
                        h = 0;
                      h < n.length / 4;
                      h++
                    ) {
                      var p, f;
                      (f = 0 === h ? n.length - 2 : 4 * h - 2), (p = 4 * h + 2);
                      var g = r + l * n[4 * h],
                        v = a + u * n[4 * h + 1],
                        y = -n[f] * n[p] - n[f + 1] * n[p + 1],
                        m = c / Math.tan(Math.acos(y) / 2),
                        b = g - m * n[f],
                        x = v - m * n[f + 1],
                        w = g + m * n[p],
                        E = v + m * n[p + 1];
                      (s[4 * h] = b),
                        (s[4 * h + 1] = x),
                        (s[4 * h + 2] = w),
                        (s[4 * h + 3] = E);
                      var k = n[f + 1],
                        C = -n[f];
                      k * n[p] + C * n[p + 1] < 0 && ((k *= -1), (C *= -1));
                      var S = b + k * c,
                        D = x + C * c;
                      if (Math.pow(S - e, 2) + Math.pow(D - t, 2) <= d)
                        return !0;
                    }
                    return gt(e, t, s);
                  })(e, t, this.points, i, o, r, a);
                },
              });
            },
            generateRoundRectangle: function () {
              return (this.nodeShapes[
                "round-rectangle"
              ] = this.nodeShapes.roundrectangle = {
                renderer: this,
                name: "round-rectangle",
                points: St(4, 0),
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  return ct(a, i, e, t, n, r, o);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  var s = Tt(r, a),
                    l = 2 * s;
                  return !!(
                    vt(e, t, this.points, i, o, r, a - l, [0, -1], n) ||
                    vt(e, t, this.points, i, o, r - l, a, [0, -1], n) ||
                    bt(e, t, l, l, i - r / 2 + s, o - a / 2 + s, n) ||
                    bt(e, t, l, l, i + r / 2 - s, o - a / 2 + s, n) ||
                    bt(e, t, l, l, i + r / 2 - s, o + a / 2 - s, n) ||
                    bt(e, t, l, l, i - r / 2 + s, o + a / 2 - s, n)
                  );
                },
              });
            },
            generateCutRectangle: function () {
              return (this.nodeShapes[
                "cut-rectangle"
              ] = this.nodeShapes.cutrectangle = {
                renderer: this,
                name: "cut-rectangle",
                cornerLength: 8,
                points: St(4, 0),
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
                },
                generateCutTrianglePts: function (e, t, n, r) {
                  var a = this.cornerLength,
                    i = t / 2,
                    o = e / 2,
                    s = n - o,
                    l = n + o,
                    u = r - i,
                    c = r + i;
                  return {
                    topLeft: [s, u + a, s + a, u, s + a, u + a],
                    topRight: [l - a, u, l, u + a, l - a, u + a],
                    bottomRight: [l, c - a, l - a, c, l - a, c - a],
                    bottomLeft: [s + a, c, s, c - a, s + a, c - a],
                  };
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  var s = this.generateCutTrianglePts(
                      n + 2 * o,
                      r + 2 * o,
                      e,
                      t
                    ),
                    l = [].concat.apply(
                      [],
                      [
                        s.topLeft.splice(0, 4),
                        s.topRight.splice(0, 4),
                        s.bottomRight.splice(0, 4),
                        s.bottomLeft.splice(0, 4),
                      ]
                    );
                  return kt(a, i, l, e, t);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  if (
                    vt(
                      e,
                      t,
                      this.points,
                      i,
                      o,
                      r,
                      a - 2 * this.cornerLength,
                      [0, -1],
                      n
                    )
                  )
                    return !0;
                  if (
                    vt(
                      e,
                      t,
                      this.points,
                      i,
                      o,
                      r - 2 * this.cornerLength,
                      a,
                      [0, -1],
                      n
                    )
                  )
                    return !0;
                  var s = this.generateCutTrianglePts(r, a, i, o);
                  return (
                    gt(e, t, s.topLeft) ||
                    gt(e, t, s.topRight) ||
                    gt(e, t, s.bottomRight) ||
                    gt(e, t, s.bottomLeft)
                  );
                },
              });
            },
            generateBarrel: function () {
              return (this.nodeShapes.barrel = {
                renderer: this,
                name: "barrel",
                points: St(4, 0),
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  var s = this.generateBarrelBezierPts(
                      n + 2 * o,
                      r + 2 * o,
                      e,
                      t
                    ),
                    l = function (e) {
                      var t = et(
                          { x: e[0], y: e[1] },
                          { x: e[2], y: e[3] },
                          { x: e[4], y: e[5] },
                          0.15
                        ),
                        n = et(
                          { x: e[0], y: e[1] },
                          { x: e[2], y: e[3] },
                          { x: e[4], y: e[5] },
                          0.5
                        ),
                        r = et(
                          { x: e[0], y: e[1] },
                          { x: e[2], y: e[3] },
                          { x: e[4], y: e[5] },
                          0.85
                        );
                      return [
                        e[0],
                        e[1],
                        t.x,
                        t.y,
                        n.x,
                        n.y,
                        r.x,
                        r.y,
                        e[4],
                        e[5],
                      ];
                    },
                    u = [].concat(
                      l(s.topLeft),
                      l(s.topRight),
                      l(s.bottomRight),
                      l(s.bottomLeft)
                    );
                  return kt(a, i, u, e, t);
                },
                generateBarrelBezierPts: function (e, t, n, r) {
                  var a = t / 2,
                    i = e / 2,
                    o = n - i,
                    s = n + i,
                    l = r - a,
                    u = r + a,
                    c = Bt(e, t),
                    d = c.heightOffset,
                    h = c.widthOffset,
                    p = c.ctrlPtOffsetPct * e,
                    f = {
                      topLeft: [o, l + d, o + p, l, o + h, l],
                      topRight: [s - h, l, s - p, l, s, l + d],
                      bottomRight: [s, u - d, s - p, u, s - h, u],
                      bottomLeft: [o + h, u, o + p, u, o, u - d],
                    };
                  return (
                    (f.topLeft.isTop = !0),
                    (f.topRight.isTop = !0),
                    (f.bottomLeft.isBottom = !0),
                    (f.bottomRight.isBottom = !0),
                    f
                  );
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  var s = Bt(r, a),
                    l = s.heightOffset,
                    u = s.widthOffset;
                  if (vt(e, t, this.points, i, o, r, a - 2 * l, [0, -1], n))
                    return !0;
                  if (vt(e, t, this.points, i, o, r - 2 * u, a, [0, -1], n))
                    return !0;
                  for (
                    var c = this.generateBarrelBezierPts(r, a, i, o),
                      d = function (e, t, n) {
                        var r,
                          a,
                          i = n[4],
                          o = n[2],
                          s = n[0],
                          l = n[5],
                          u = n[1],
                          c = Math.min(i, s),
                          d = Math.max(i, s),
                          h = Math.min(l, u),
                          p = Math.max(l, u);
                        if (c <= e && e <= d && h <= t && t <= p) {
                          var f = [(r = i) - 2 * (a = o) + s, 2 * (a - r), r],
                            g = (function (e, t, n, r) {
                              var a = t * t - 4 * e * (n -= r);
                              if (a < 0) return [];
                              var i = Math.sqrt(a),
                                o = 2 * e;
                              return [(-t + i) / o, (-t - i) / o];
                            })(f[0], f[1], f[2], e).filter(function (e) {
                              return 0 <= e && e <= 1;
                            });
                          if (g.length > 0) return g[0];
                        }
                        return null;
                      },
                      h = Object.keys(c),
                      p = 0;
                    p < h.length;
                    p++
                  ) {
                    var f = c[h[p]],
                      g = d(e, t, f);
                    if (null != g) {
                      var v = f[5],
                        y = f[3],
                        m = f[1],
                        b = Je(v, y, m, g);
                      if (f.isTop && b <= t) return !0;
                      if (f.isBottom && t <= b) return !0;
                    }
                  }
                  return !1;
                },
              });
            },
            generateBottomRoundrectangle: function () {
              return (this.nodeShapes[
                "bottom-round-rectangle"
              ] = this.nodeShapes.bottomroundrectangle = {
                renderer: this,
                name: "bottom-round-rectangle",
                points: St(4, 0),
                draw: function (e, t, n, r, a) {
                  this.renderer.nodeShapeImpl(this.name, e, t, n, r, a);
                },
                intersectLine: function (e, t, n, r, a, i, o) {
                  var s = t - (r / 2 + o),
                    l = Et(
                      a,
                      i,
                      e,
                      t,
                      e - (n / 2 + o),
                      s,
                      e + (n / 2 + o),
                      s,
                      !1
                    );
                  return l.length > 0 ? l : ct(a, i, e, t, n, r, o);
                },
                checkPoint: function (e, t, n, r, a, i, o) {
                  var s = Tt(r, a),
                    l = 2 * s;
                  if (vt(e, t, this.points, i, o, r, a - l, [0, -1], n))
                    return !0;
                  if (vt(e, t, this.points, i, o, r - l, a, [0, -1], n))
                    return !0;
                  var u = r / 2 + 2 * n,
                    c = a / 2 + 2 * n;
                  return (
                    !!gt(e, t, [
                      i - u,
                      o - c,
                      i - u,
                      o,
                      i + u,
                      o,
                      i + u,
                      o - c,
                    ]) ||
                    !!bt(e, t, l, l, i + r / 2 - s, o + a / 2 - s, n) ||
                    !!bt(e, t, l, l, i - r / 2 + s, o + a / 2 - s, n)
                  );
                },
              });
            },
            registerNodeShapes: function () {
              var e = (this.nodeShapes = {}),
                t = this;
              this.generateEllipse(),
                this.generatePolygon("triangle", St(3, 0)),
                this.generateRoundPolygon("round-triangle", St(3, 0)),
                this.generatePolygon("rectangle", St(4, 0)),
                (e.square = e.rectangle),
                this.generateRoundRectangle(),
                this.generateCutRectangle(),
                this.generateBarrel(),
                this.generateBottomRoundrectangle();
              var n = [0, 1, 1, 0, 0, -1, -1, 0];
              this.generatePolygon("diamond", n),
                this.generateRoundPolygon("round-diamond", n),
                this.generatePolygon("pentagon", St(5, 0)),
                this.generateRoundPolygon("round-pentagon", St(5, 0)),
                this.generatePolygon("hexagon", St(6, 0)),
                this.generateRoundPolygon("round-hexagon", St(6, 0)),
                this.generatePolygon("heptagon", St(7, 0)),
                this.generateRoundPolygon("round-heptagon", St(7, 0)),
                this.generatePolygon("octagon", St(8, 0)),
                this.generateRoundPolygon("round-octagon", St(8, 0));
              var r = new Array(20),
                a = Pt(5, 0),
                i = Pt(5, Math.PI / 5),
                o = 0.5 * (3 - Math.sqrt(5));
              o *= 1.57;
              for (var s = 0; s < i.length / 2; s++)
                (i[2 * s] *= o), (i[2 * s + 1] *= o);
              for (s = 0; s < 5; s++)
                (r[4 * s] = a[2 * s]),
                  (r[4 * s + 1] = a[2 * s + 1]),
                  (r[4 * s + 2] = i[2 * s]),
                  (r[4 * s + 3] = i[2 * s + 1]);
              (r = Dt(r)),
                this.generatePolygon("star", r),
                this.generatePolygon("vee", [-1, -1, 0, -0.333, 1, -1, 0, 1]),
                this.generatePolygon("rhomboid", [
                  -1,
                  -1,
                  0.333,
                  -1,
                  1,
                  1,
                  -0.333,
                  1,
                ]),
                (this.nodeShapes.concavehexagon = this.generatePolygon(
                  "concave-hexagon",
                  [-1, -0.95, -0.75, 0, -1, 0.95, 1, 0.95, 0.75, 0, 1, -0.95]
                ));
              var l = [-1, -1, 0.25, -1, 1, 0, 0.25, 1, -1, 1];
              this.generatePolygon("tag", l),
                this.generateRoundPolygon("round-tag", l),
                (e.makePolygon = function (e) {
                  var n,
                    r = "polygon-" + e.join("$");
                  return (n = this[r]) ? n : t.generatePolygon(r, e);
                });
            },
          },
          Mo = {
            timeToRender: function () {
              return this.redrawTotalTime / this.redrawCount;
            },
            redraw: function (e) {
              e = e || be();
              var t = this;
              void 0 === t.averageRedrawTime && (t.averageRedrawTime = 0),
                void 0 === t.lastRedrawTime && (t.lastRedrawTime = 0),
                void 0 === t.lastDrawTime && (t.lastDrawTime = 0),
                (t.requestedFrame = !0),
                (t.renderOptions = e);
            },
            beforeRender: function (e, t) {
              if (!this.destroyed) {
                null == t && pe("Priority is not optional for beforeRender");
                var n = this.beforeRenderCallbacks;
                n.push({ fn: e, priority: t }),
                  n.sort(function (e, t) {
                    return t.priority - e.priority;
                  });
              }
            },
          },
          Bo = function (e, t, n) {
            for (var r = e.beforeRenderCallbacks, a = 0; a < r.length; a++)
              r[a].fn(t, n);
          };
        Mo.startRenderLoop = function () {
          var e = this,
            t = e.cy;
          e.renderLoopStarted ||
            ((e.renderLoopStarted = !0),
            H(function n(r) {
              if (!e.destroyed) {
                if (t.batching());
                else if (e.requestedFrame && !e.skipFrame) {
                  Bo(e, !0, r);
                  var a = $();
                  e.render(e.renderOptions);
                  var i = (e.lastDrawTime = $());
                  void 0 === e.averageRedrawTime &&
                    (e.averageRedrawTime = i - a),
                    void 0 === e.redrawCount && (e.redrawCount = 0),
                    e.redrawCount++,
                    void 0 === e.redrawTotalTime && (e.redrawTotalTime = 0);
                  var o = i - a;
                  (e.redrawTotalTime += o),
                    (e.lastRedrawTime = o),
                    (e.averageRedrawTime = e.averageRedrawTime / 2 + o / 2),
                    (e.requestedFrame = !1);
                } else Bo(e, !1, r);
                (e.skipFrame = !1), H(n);
              }
            }));
        };
        var _o = function (e) {
            this.init(e);
          },
          No = _o.prototype;
        (No.clientFunctions = [
          "redrawHint",
          "render",
          "renderTo",
          "matchCanvasSize",
          "nodeShapeImpl",
          "arrowShapeImpl",
        ]),
          (No.init = function (e) {
            var t = this;
            (t.options = e), (t.cy = e.cy);
            var n = (t.container = e.cy.container());
            if (h) {
              var r = h.document,
                a = r.head,
                i = "__________cytoscape_stylesheet",
                o = "__________cytoscape_container",
                s = null != r.getElementById(i);
              if (
                (n.className.indexOf(o) < 0 &&
                  (n.className = (n.className || "") + " " + o),
                !s)
              ) {
                var l = r.createElement("style");
                (l.id = i),
                  (l.innerHTML = "." + o + " { position: relative; }"),
                  a.insertBefore(l, a.children[0]);
              }
              "static" === h.getComputedStyle(n).getPropertyValue("position") &&
                ge(
                  "A Cytoscape container has style position:static and so can not use UI extensions properly"
                );
            }
            (t.selection = [void 0, void 0, void 0, void 0, 0]),
              (t.bezierProjPcts = [0.05, 0.225, 0.4, 0.5, 0.6, 0.775, 0.95]),
              (t.hoverData = {
                down: null,
                last: null,
                downTime: null,
                triggerMode: null,
                dragging: !1,
                initialPan: [null, null],
                capture: !1,
              }),
              (t.dragData = { possibleDragElements: [] }),
              (t.touchData = {
                start: null,
                capture: !1,
                startPosition: [null, null, null, null, null, null],
                singleTouchStartTime: null,
                singleTouchMoved: !0,
                now: [null, null, null, null, null, null],
                earlier: [null, null, null, null, null, null],
              }),
              (t.redraws = 0),
              (t.showFps = e.showFps),
              (t.debug = e.debug),
              (t.hideEdgesOnViewport = e.hideEdgesOnViewport),
              (t.textureOnViewport = e.textureOnViewport),
              (t.wheelSensitivity = e.wheelSensitivity),
              (t.motionBlurEnabled = e.motionBlur),
              (t.forcedPixelRatio = k(e.pixelRatio) ? e.pixelRatio : null),
              (t.motionBlur = e.motionBlur),
              (t.motionBlurOpacity = e.motionBlurOpacity),
              (t.motionBlurTransparency = 1 - t.motionBlurOpacity),
              (t.motionBlurPxRatio = 1),
              (t.mbPxRBlurry = 1),
              (t.minMbLowQualFrames = 4),
              (t.fullQualityMb = !1),
              (t.clearedForMotionBlur = []),
              (t.desktopTapThreshold = e.desktopTapThreshold),
              (t.desktopTapThreshold2 =
                e.desktopTapThreshold * e.desktopTapThreshold),
              (t.touchTapThreshold = e.touchTapThreshold),
              (t.touchTapThreshold2 =
                e.touchTapThreshold * e.touchTapThreshold),
              (t.tapholdDuration = 500),
              (t.bindings = []),
              (t.beforeRenderCallbacks = []),
              (t.beforeRenderPriorities = {
                animations: 400,
                eleCalcs: 300,
                eleTxrDeq: 200,
                lyrTxrDeq: 150,
                lyrTxrSkip: 100,
              }),
              t.registerNodeShapes(),
              t.registerArrowShapes(),
              t.registerCalculationListeners();
          }),
          (No.notify = function (e, t) {
            var n = this,
              r = n.cy;
            this.destroyed ||
              ("init" !== e
                ? "destroy" !== e
                  ? (("add" === e ||
                      "remove" === e ||
                      ("move" === e && r.hasCompoundNodes()) ||
                      "load" === e ||
                      "zorder" === e ||
                      "mount" === e) &&
                      n.invalidateCachedZSortedEles(),
                    "viewport" === e && n.redrawHint("select", !0),
                    ("load" !== e && "resize" !== e && "mount" !== e) ||
                      (n.invalidateContainerClientCoordsCache(),
                      n.matchCanvasSize(n.container)),
                    n.redrawHint("eles", !0),
                    n.redrawHint("drag", !0),
                    this.startRenderLoop(),
                    this.redraw())
                  : n.destroy()
                : n.load());
          }),
          (No.destroy = function () {
            var e = this;
            (e.destroyed = !0), e.cy.stopAnimationLoop();
            for (var t = 0; t < e.bindings.length; t++) {
              var n = e.bindings[t],
                r = n.target;
              (r.off || r.removeEventListener).apply(r, n.args);
            }
            if (
              ((e.bindings = []),
              (e.beforeRenderCallbacks = []),
              (e.onUpdateEleCalcsFns = []),
              e.removeObserver && e.removeObserver.disconnect(),
              e.styleObserver && e.styleObserver.disconnect(),
              e.resizeObserver && e.resizeObserver.disconnect(),
              e.labelCalcDiv)
            )
              try {
                document.body.removeChild(e.labelCalcDiv);
              } catch (e) {}
          }),
          (No.isHeadless = function () {
            return !1;
          }),
          [ho, So, Do, Po, To, Mo].forEach(function (e) {
            V(No, e);
          });
        var Io = 1e3 / 60,
          Lo = function (e) {
            return function () {
              var t = this,
                n = this.renderer;
              if (!t.dequeueingSetup) {
                t.dequeueingSetup = !0;
                var r = a(function () {
                    n.redrawHint("eles", !0),
                      n.redrawHint("drag", !0),
                      n.redraw();
                  }, e.deqRedrawThreshold),
                  i = e.priority || he;
                n.beforeRender(function (a, i) {
                  var o = $(),
                    s = n.averageRedrawTime,
                    l = n.lastRedrawTime,
                    u = [],
                    c = n.cy.extent(),
                    d = n.getPixelRatio();
                  for (a || n.flushRenderedStyleQueue(); ; ) {
                    var h = $(),
                      p = h - o,
                      f = h - i;
                    if (l < Io) {
                      var g = Io - (a ? s : 0);
                      if (f >= e.deqFastCost * g) break;
                    } else if (a) {
                      if (p >= e.deqCost * l || p >= e.deqAvgCost * s) break;
                    } else if (f >= e.deqNoDrawCost * Io) break;
                    var v = e.deq(t, d, c);
                    if (!(v.length > 0)) break;
                    for (var y = 0; y < v.length; y++) u.push(v[y]);
                  }
                  u.length > 0 &&
                    (e.onDeqd(t, u), !a && e.shouldRedraw(t, u, d, c) && r());
                }, i(t));
              }
            };
          },
          zo = (function () {
            function e(t) {
              var n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : ce;
              s(this, e),
                (this.idsByKey = new Se()),
                (this.keyForId = new Se()),
                (this.cachesByLvl = new Se()),
                (this.lvls = []),
                (this.getKey = t),
                (this.doesEleInvalidateKey = n);
            }
            return (
              u(e, [
                {
                  key: "getIdsFor",
                  value: function (e) {
                    null == e && pe("Can not get id list for null key");
                    var t = this.idsByKey,
                      n = this.idsByKey.get(e);
                    return n || ((n = new Pe()), t.set(e, n)), n;
                  },
                },
                {
                  key: "addIdForKey",
                  value: function (e, t) {
                    null != e && this.getIdsFor(e).add(t);
                  },
                },
                {
                  key: "deleteIdForKey",
                  value: function (e, t) {
                    null != e && this.getIdsFor(e).delete(t);
                  },
                },
                {
                  key: "getNumberOfIdsForKey",
                  value: function (e) {
                    return null == e ? 0 : this.getIdsFor(e).size;
                  },
                },
                {
                  key: "updateKeyMappingFor",
                  value: function (e) {
                    var t = e.id(),
                      n = this.keyForId.get(t),
                      r = this.getKey(e);
                    this.deleteIdForKey(n, t),
                      this.addIdForKey(r, t),
                      this.keyForId.set(t, r);
                  },
                },
                {
                  key: "deleteKeyMappingFor",
                  value: function (e) {
                    var t = e.id(),
                      n = this.keyForId.get(t);
                    this.deleteIdForKey(n, t), this.keyForId.delete(t);
                  },
                },
                {
                  key: "keyHasChangedFor",
                  value: function (e) {
                    var t = e.id();
                    return this.keyForId.get(t) !== this.getKey(e);
                  },
                },
                {
                  key: "isInvalid",
                  value: function (e) {
                    return (
                      this.keyHasChangedFor(e) || this.doesEleInvalidateKey(e)
                    );
                  },
                },
                {
                  key: "getCachesAt",
                  value: function (e) {
                    var t = this.cachesByLvl,
                      n = this.lvls,
                      r = t.get(e);
                    return r || ((r = new Se()), t.set(e, r), n.push(e)), r;
                  },
                },
                {
                  key: "getCache",
                  value: function (e, t) {
                    return this.getCachesAt(t).get(e);
                  },
                },
                {
                  key: "get",
                  value: function (e, t) {
                    var n = this.getKey(e),
                      r = this.getCache(n, t);
                    return null != r && this.updateKeyMappingFor(e), r;
                  },
                },
                {
                  key: "getForCachedKey",
                  value: function (e, t) {
                    var n = this.keyForId.get(e.id());
                    return this.getCache(n, t);
                  },
                },
                {
                  key: "hasCache",
                  value: function (e, t) {
                    return this.getCachesAt(t).has(e);
                  },
                },
                {
                  key: "has",
                  value: function (e, t) {
                    var n = this.getKey(e);
                    return this.hasCache(n, t);
                  },
                },
                {
                  key: "setCache",
                  value: function (e, t, n) {
                    (n.key = e), this.getCachesAt(t).set(e, n);
                  },
                },
                {
                  key: "set",
                  value: function (e, t, n) {
                    var r = this.getKey(e);
                    this.setCache(r, t, n), this.updateKeyMappingFor(e);
                  },
                },
                {
                  key: "deleteCache",
                  value: function (e, t) {
                    this.getCachesAt(t).delete(e);
                  },
                },
                {
                  key: "delete",
                  value: function (e, t) {
                    var n = this.getKey(e);
                    this.deleteCache(n, t);
                  },
                },
                {
                  key: "invalidateKey",
                  value: function (e) {
                    var t = this;
                    this.lvls.forEach(function (n) {
                      return t.deleteCache(e, n);
                    });
                  },
                },
                {
                  key: "invalidate",
                  value: function (e) {
                    var t = e.id(),
                      n = this.keyForId.get(t);
                    this.deleteKeyMappingFor(e);
                    var r = this.doesEleInvalidateKey(e);
                    return (
                      r && this.invalidateKey(n),
                      r || 0 === this.getNumberOfIdsForKey(n)
                    );
                  },
                },
              ]),
              e
            );
          })(),
          Ao = {
            dequeue: "dequeue",
            downscale: "downscale",
            highQuality: "highQuality",
          },
          Oo = xe({
            getKey: null,
            doesEleInvalidateKey: ce,
            drawElement: null,
            getBoundingBox: null,
            getRotationPoint: null,
            getRotationOffset: null,
            isVisible: ue,
            allowEdgeTxrCaching: !0,
            allowParentTxrCaching: !0,
          }),
          Ro = function (e, t) {
            var n = this;
            (n.renderer = e), (n.onDequeues = []);
            var r = Oo(t);
            V(n, r),
              (n.lookup = new zo(r.getKey, r.doesEleInvalidateKey)),
              n.setupDequeueing();
          },
          Vo = Ro.prototype;
        (Vo.reasons = Ao),
          (Vo.getTextureQueue = function (e) {
            var t = this;
            return (
              (t.eleImgCaches = t.eleImgCaches || {}),
              (t.eleImgCaches[e] = t.eleImgCaches[e] || [])
            );
          }),
          (Vo.getRetiredTextureQueue = function (e) {
            var t = (this.eleImgCaches.retired =
              this.eleImgCaches.retired || {});
            return (t[e] = t[e] || []);
          }),
          (Vo.getElementQueue = function () {
            return (this.eleCacheQueue =
              this.eleCacheQueue ||
              new i(function (e, t) {
                return t.reqs - e.reqs;
              }));
          }),
          (Vo.getElementKeyToQueue = function () {
            return (this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {});
          }),
          (Vo.getElement = function (e, t, n, r, a) {
            var i = this,
              o = this.renderer,
              s = o.cy.zoom(),
              l = this.lookup;
            if (
              !t ||
              0 === t.w ||
              0 === t.h ||
              isNaN(t.w) ||
              isNaN(t.h) ||
              !e.visible() ||
              e.removed()
            )
              return null;
            if (
              (!i.allowEdgeTxrCaching && e.isEdge()) ||
              (!i.allowParentTxrCaching && e.isParent())
            )
              return null;
            if ((null == r && (r = Math.ceil(Ke(s * n))), r < -4)) r = -4;
            else if (s >= 7.99 || r > 3) return null;
            var u = Math.pow(2, r),
              c = t.h * u,
              d = t.w * u,
              h = o.eleTextBiggerThanMin(e, u);
            if (!this.isVisible(e, h)) return null;
            var p,
              f = l.get(e, r);
            if (
              (f &&
                f.invalidated &&
                ((f.invalidated = !1), (f.texture.invalidatedWidth -= f.width)),
              f)
            )
              return f;
            if (
              ((p = c <= 25 ? 25 : c <= 50 ? 50 : 50 * Math.ceil(c / 50)),
              c > 1024 || d > 1024)
            )
              return null;
            var g = i.getTextureQueue(p),
              v = g[g.length - 2],
              y = function () {
                return i.recycleTexture(p, d) || i.addTexture(p, d);
              };
            v || (v = g[g.length - 1]),
              v || (v = y()),
              v.width - v.usedWidth < d && (v = y());
            for (
              var m,
                b = function (e) {
                  return e && e.scaledLabelShown === h;
                },
                x = a && a === Ao.dequeue,
                w = a && a === Ao.highQuality,
                E = a && a === Ao.downscale,
                k = r + 1;
              k <= 3;
              k++
            ) {
              var C = l.get(e, k);
              if (C) {
                m = C;
                break;
              }
            }
            var S = m && m.level === r + 1 ? m : null,
              D = function () {
                v.context.drawImage(
                  S.texture.canvas,
                  S.x,
                  0,
                  S.width,
                  S.height,
                  v.usedWidth,
                  0,
                  d,
                  c
                );
              };
            if (
              (v.context.setTransform(1, 0, 0, 1, 0, 0),
              v.context.clearRect(v.usedWidth, 0, d, p),
              b(S))
            )
              D();
            else if (b(m)) {
              if (!w) return i.queueElement(e, m.level - 1), m;
              for (var P = m.level; P > r; P--)
                S = i.getElement(e, t, n, P, Ao.downscale);
              D();
            } else {
              var T;
              if (!x && !w && !E)
                for (var M = r - 1; M >= -4; M--) {
                  var B = l.get(e, M);
                  if (B) {
                    T = B;
                    break;
                  }
                }
              if (b(T)) return i.queueElement(e, r), T;
              v.context.translate(v.usedWidth, 0),
                v.context.scale(u, u),
                this.drawElement(v.context, e, t, h, !1),
                v.context.scale(1 / u, 1 / u),
                v.context.translate(-v.usedWidth, 0);
            }
            return (
              (f = {
                x: v.usedWidth,
                texture: v,
                level: r,
                scale: u,
                width: d,
                height: c,
                scaledLabelShown: h,
              }),
              (v.usedWidth += Math.ceil(d + 8)),
              v.eleCaches.push(f),
              l.set(e, r, f),
              i.checkTextureFullness(v),
              f
            );
          }),
          (Vo.invalidateElements = function (e) {
            for (var t = 0; t < e.length; t++) this.invalidateElement(e[t]);
          }),
          (Vo.invalidateElement = function (e) {
            var t = this,
              n = t.lookup,
              r = [];
            if (n.isInvalid(e)) {
              for (var a = -4; a <= 3; a++) {
                var i = n.getForCachedKey(e, a);
                i && r.push(i);
              }
              if (n.invalidate(e))
                for (var o = 0; o < r.length; o++) {
                  var s = r[o],
                    l = s.texture;
                  (l.invalidatedWidth += s.width),
                    (s.invalidated = !0),
                    t.checkTextureUtility(l);
                }
              t.removeFromQueue(e);
            }
          }),
          (Vo.checkTextureUtility = function (e) {
            e.invalidatedWidth >= 0.2 * e.width && this.retireTexture(e);
          }),
          (Vo.checkTextureFullness = function (e) {
            var t = this.getTextureQueue(e.height);
            e.usedWidth / e.width > 0.8 && e.fullnessChecks >= 10
              ? we(t, e)
              : e.fullnessChecks++;
          }),
          (Vo.retireTexture = function (e) {
            var t = e.height,
              n = this.getTextureQueue(t),
              r = this.lookup;
            we(n, e), (e.retired = !0);
            for (var a = e.eleCaches, i = 0; i < a.length; i++) {
              var o = a[i];
              r.deleteCache(o.key, o.level);
            }
            Ee(a), this.getRetiredTextureQueue(t).push(e);
          }),
          (Vo.addTexture = function (e, t) {
            var n = {};
            return (
              this.getTextureQueue(e).push(n),
              (n.eleCaches = []),
              (n.height = e),
              (n.width = Math.max(1024, t)),
              (n.usedWidth = 0),
              (n.invalidatedWidth = 0),
              (n.fullnessChecks = 0),
              (n.canvas = this.renderer.makeOffscreenCanvas(n.width, n.height)),
              (n.context = n.canvas.getContext("2d")),
              n
            );
          }),
          (Vo.recycleTexture = function (e, t) {
            for (
              var n = this.getTextureQueue(e),
                r = this.getRetiredTextureQueue(e),
                a = 0;
              a < r.length;
              a++
            ) {
              var i = r[a];
              if (i.width >= t)
                return (
                  (i.retired = !1),
                  (i.usedWidth = 0),
                  (i.invalidatedWidth = 0),
                  (i.fullnessChecks = 0),
                  Ee(i.eleCaches),
                  i.context.setTransform(1, 0, 0, 1, 0, 0),
                  i.context.clearRect(0, 0, i.width, i.height),
                  we(r, i),
                  n.push(i),
                  i
                );
            }
          }),
          (Vo.queueElement = function (e, t) {
            var n = this.getElementQueue(),
              r = this.getElementKeyToQueue(),
              a = this.getKey(e),
              i = r[a];
            if (i)
              (i.level = Math.max(i.level, t)),
                i.eles.merge(e),
                i.reqs++,
                n.updateItem(i);
            else {
              var o = { eles: e.spawn().merge(e), level: t, reqs: 1, key: a };
              n.push(o), (r[a] = o);
            }
          }),
          (Vo.dequeue = function (e) {
            for (
              var t = this,
                n = t.getElementQueue(),
                r = t.getElementKeyToQueue(),
                a = [],
                i = t.lookup,
                o = 0;
              o < 1 && n.size() > 0;
              o++
            ) {
              var s = n.pop(),
                l = s.key,
                u = s.eles[0],
                c = i.hasCache(u, s.level);
              if (((r[l] = null), !c)) {
                a.push(s);
                var d = t.getBoundingBox(u);
                t.getElement(u, d, e, s.level, Ao.dequeue);
              }
            }
            return a;
          }),
          (Vo.removeFromQueue = function (e) {
            var t = this.getElementQueue(),
              n = this.getElementKeyToQueue(),
              r = this.getKey(e),
              a = n[r];
            null != a &&
              (1 === a.eles.length
                ? ((a.reqs = le), t.updateItem(a), t.pop(), (n[r] = null))
                : a.eles.unmerge(e));
          }),
          (Vo.onDequeue = function (e) {
            this.onDequeues.push(e);
          }),
          (Vo.offDequeue = function (e) {
            we(this.onDequeues, e);
          }),
          (Vo.setupDequeueing = Lo({
            deqRedrawThreshold: 100,
            deqCost: 0.15,
            deqAvgCost: 0.1,
            deqNoDrawCost: 0.9,
            deqFastCost: 0.9,
            deq: function (e, t, n) {
              return e.dequeue(t, n);
            },
            onDeqd: function (e, t) {
              for (var n = 0; n < e.onDequeues.length; n++)
                (0, e.onDequeues[n])(t);
            },
            shouldRedraw: function (e, t, n, r) {
              for (var a = 0; a < t.length; a++)
                for (var i = t[a].eles, o = 0; o < i.length; o++) {
                  var s = i[o].boundingBox();
                  if (st(s, r)) return !0;
                }
              return !1;
            },
            priority: function (e) {
              return e.renderer.beforeRenderPriorities.eleTxrDeq;
            },
          }));
        var Fo = function (e) {
            var t = this,
              n = (t.renderer = e),
              r = n.cy;
            (t.layersByLevel = {}),
              (t.firstGet = !0),
              (t.lastInvalidationTime = $() - 500),
              (t.skipping = !1),
              (t.eleTxrDeqs = r.collection()),
              (t.scheduleElementRefinement = a(function () {
                t.refineElementTextures(t.eleTxrDeqs),
                  t.eleTxrDeqs.unmerge(t.eleTxrDeqs);
              }, 50)),
              n.beforeRender(function (e, n) {
                n - t.lastInvalidationTime <= 250
                  ? (t.skipping = !0)
                  : (t.skipping = !1);
              }, n.beforeRenderPriorities.lyrTxrSkip),
              (t.layersQueue = new i(function (e, t) {
                return t.reqs - e.reqs;
              })),
              t.setupDequeueing();
          },
          jo = Fo.prototype,
          qo = 0,
          Xo = Math.pow(2, 53) - 1;
        (jo.makeLayer = function (e, t) {
          var n = Math.pow(2, t),
            r = Math.ceil(e.w * n),
            a = Math.ceil(e.h * n),
            i = this.renderer.makeOffscreenCanvas(r, a),
            o = {
              id: (qo = ++qo % Xo),
              bb: e,
              level: t,
              width: r,
              height: a,
              canvas: i,
              context: i.getContext("2d"),
              eles: [],
              elesQueue: [],
              reqs: 0,
            },
            s = o.context,
            l = -o.bb.x1,
            u = -o.bb.y1;
          return s.scale(n, n), s.translate(l, u), o;
        }),
          (jo.getLayers = function (e, t, n) {
            var r = this,
              a = r.renderer.cy.zoom(),
              i = r.firstGet;
            if (((r.firstGet = !1), null == n))
              if ((n = Math.ceil(Ke(a * t))) < -4) n = -4;
              else if (a >= 3.99 || n > 2) return null;
            r.validateLayersElesOrdering(n, e);
            var o,
              s,
              l = r.layersByLevel,
              u = Math.pow(2, n),
              c = (l[n] = l[n] || []);
            if (r.levelIsComplete(n, e)) return c;
            !(function () {
              var t = function (t) {
                  if (
                    (r.validateLayersElesOrdering(t, e),
                    r.levelIsComplete(t, e))
                  )
                    return (s = l[t]), !0;
                },
                a = function (e) {
                  if (!s)
                    for (var r = n + e; -4 <= r && r <= 2 && !t(r); r += e);
                };
              a(1), a(-1);
              for (var i = c.length - 1; i >= 0; i--) {
                var o = c[i];
                o.invalid && we(c, o);
              }
            })();
            var d = function (t) {
              var a = (t = t || {}).after;
              if (
                ((function () {
                  if (!o) {
                    o = nt();
                    for (var t = 0; t < e.length; t++)
                      (n = o),
                        (r = e[t].boundingBox()),
                        (n.x1 = Math.min(n.x1, r.x1)),
                        (n.x2 = Math.max(n.x2, r.x2)),
                        (n.w = n.x2 - n.x1),
                        (n.y1 = Math.min(n.y1, r.y1)),
                        (n.y2 = Math.max(n.y2, r.y2)),
                        (n.h = n.y2 - n.y1);
                  }
                  var n, r;
                })(),
                o.w * u * (o.h * u) > 16e6)
              )
                return null;
              var i = r.makeLayer(o, n);
              if (null != a) {
                var s = c.indexOf(a) + 1;
                c.splice(s, 0, i);
              } else (void 0 === t.insert || t.insert) && c.unshift(i);
              return i;
            };
            if (r.skipping && !i) return null;
            for (
              var h = null, p = e.length / 1, f = !i, g = 0;
              g < e.length;
              g++
            ) {
              var v = e[g],
                y = v._private.rscratch,
                m = (y.imgLayerCaches = y.imgLayerCaches || {}),
                b = m[n];
              if (b) h = b;
              else {
                if (
                  (!h || h.eles.length >= p || !ut(h.bb, v.boundingBox())) &&
                  !(h = d({ insert: !0, after: h }))
                )
                  return null;
                s || f ? r.queueLayer(h, v) : r.drawEleInLayer(h, v, n, t),
                  h.eles.push(v),
                  (m[n] = h);
              }
            }
            return s || (f ? null : c);
          }),
          (jo.getEleLevelForLayerLevel = function (e, t) {
            return e;
          }),
          (jo.drawEleInLayer = function (e, t, n, r) {
            var a = this.renderer,
              i = e.context,
              o = t.boundingBox();
            0 !== o.w &&
              0 !== o.h &&
              t.visible() &&
              ((n = this.getEleLevelForLayerLevel(n, r)),
              a.setImgSmoothing(i, !1),
              a.drawCachedElement(i, t, null, null, n, !0),
              a.setImgSmoothing(i, !0));
          }),
          (jo.levelIsComplete = function (e, t) {
            var n = this.layersByLevel[e];
            if (!n || 0 === n.length) return !1;
            for (var r = 0, a = 0; a < n.length; a++) {
              var i = n[a];
              if (i.reqs > 0) return !1;
              if (i.invalid) return !1;
              r += i.eles.length;
            }
            return r === t.length;
          }),
          (jo.validateLayersElesOrdering = function (e, t) {
            var n = this.layersByLevel[e];
            if (n)
              for (var r = 0; r < n.length; r++) {
                for (var a = n[r], i = -1, o = 0; o < t.length; o++)
                  if (a.eles[0] === t[o]) {
                    i = o;
                    break;
                  }
                if (i < 0) this.invalidateLayer(a);
                else {
                  var s = i;
                  for (o = 0; o < a.eles.length; o++)
                    if (a.eles[o] !== t[s + o]) {
                      this.invalidateLayer(a);
                      break;
                    }
                }
              }
          }),
          (jo.updateElementsInLayers = function (e, t) {
            for (var n = D(e[0]), r = 0; r < e.length; r++)
              for (
                var a = n ? null : e[r],
                  i = n ? e[r] : e[r].ele,
                  o = i._private.rscratch,
                  s = (o.imgLayerCaches = o.imgLayerCaches || {}),
                  l = -4;
                l <= 2;
                l++
              ) {
                var u = s[l];
                u &&
                  ((a && this.getEleLevelForLayerLevel(u.level) !== a.level) ||
                    t(u, i, a));
              }
          }),
          (jo.haveLayers = function () {
            for (var e = !1, t = -4; t <= 2; t++) {
              var n = this.layersByLevel[t];
              if (n && n.length > 0) {
                e = !0;
                break;
              }
            }
            return e;
          }),
          (jo.invalidateElements = function (e) {
            var t = this;
            0 !== e.length &&
              ((t.lastInvalidationTime = $()),
              0 !== e.length &&
                t.haveLayers() &&
                t.updateElementsInLayers(e, function (e, n, r) {
                  t.invalidateLayer(e);
                }));
          }),
          (jo.invalidateLayer = function (e) {
            if (((this.lastInvalidationTime = $()), !e.invalid)) {
              var t = e.level,
                n = e.eles,
                r = this.layersByLevel[t];
              we(r, e),
                (e.elesQueue = []),
                (e.invalid = !0),
                e.replacement && (e.replacement.invalid = !0);
              for (var a = 0; a < n.length; a++) {
                var i = n[a]._private.rscratch.imgLayerCaches;
                i && (i[t] = null);
              }
            }
          }),
          (jo.refineElementTextures = function (e) {
            var t = this;
            t.updateElementsInLayers(e, function (e, n, r) {
              var a = e.replacement;
              if (
                (a ||
                  (((a = e.replacement = t.makeLayer(
                    e.bb,
                    e.level
                  )).replaces = e),
                  (a.eles = e.eles)),
                !a.reqs)
              )
                for (var i = 0; i < a.eles.length; i++)
                  t.queueLayer(a, a.eles[i]);
            });
          }),
          (jo.enqueueElementRefinement = function (e) {
            this.eleTxrDeqs.merge(e), this.scheduleElementRefinement();
          }),
          (jo.queueLayer = function (e, t) {
            var n = this.layersQueue,
              r = e.elesQueue,
              a = (r.hasId = r.hasId || {});
            if (!e.replacement) {
              if (t) {
                if (a[t.id()]) return;
                r.push(t), (a[t.id()] = !0);
              }
              e.reqs ? (e.reqs++, n.updateItem(e)) : ((e.reqs = 1), n.push(e));
            }
          }),
          (jo.dequeue = function (e) {
            for (
              var t = this, n = t.layersQueue, r = [], a = 0;
              a < 1 && 0 !== n.size();

            ) {
              var i = n.peek();
              if (i.replacement) n.pop();
              else if (i.replaces && i !== i.replaces.replacement) n.pop();
              else if (i.invalid) n.pop();
              else {
                var o = i.elesQueue.shift();
                o && (t.drawEleInLayer(i, o, i.level, e), a++),
                  0 === r.length && r.push(!0),
                  0 === i.elesQueue.length &&
                    (n.pop(),
                    (i.reqs = 0),
                    i.replaces && t.applyLayerReplacement(i),
                    t.requestRedraw());
              }
            }
            return r;
          }),
          (jo.applyLayerReplacement = function (e) {
            var t = this.layersByLevel[e.level],
              n = e.replaces,
              r = t.indexOf(n);
            if (!(r < 0 || n.invalid)) {
              t[r] = e;
              for (var a = 0; a < e.eles.length; a++) {
                var i = e.eles[a]._private,
                  o = (i.imgLayerCaches = i.imgLayerCaches || {});
                o && (o[e.level] = e);
              }
              this.requestRedraw();
            }
          }),
          (jo.requestRedraw = a(function () {
            var e = this.renderer;
            e.redrawHint("eles", !0), e.redrawHint("drag", !0), e.redraw();
          }, 100)),
          (jo.setupDequeueing = Lo({
            deqRedrawThreshold: 50,
            deqCost: 0.15,
            deqAvgCost: 0.1,
            deqNoDrawCost: 0.9,
            deqFastCost: 0.9,
            deq: function (e, t) {
              return e.dequeue(t);
            },
            onDeqd: he,
            shouldRedraw: ue,
            priority: function (e) {
              return e.renderer.beforeRenderPriorities.lyrTxrDeq;
            },
          }));
        var Yo,
          Wo = {};
        function Ho(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            e.lineTo(r.x, r.y);
          }
        }
        function $o(e, t, n) {
          for (var r, a = 0; a < t.length; a++) {
            var i = t[a];
            0 === a && (r = i), e.lineTo(i.x, i.y);
          }
          e.quadraticCurveTo(n.x, n.y, r.x, r.y);
        }
        function Ko(e, t, n) {
          e.beginPath && e.beginPath();
          for (var r = t, a = 0; a < r.length; a++) {
            var i = r[a];
            e.lineTo(i.x, i.y);
          }
          var o = n,
            s = n[0];
          for (e.moveTo(s.x, s.y), a = 1; a < o.length; a++)
            (i = o[a]), e.lineTo(i.x, i.y);
          e.closePath && e.closePath();
        }
        function Go(e, t, n, r, a) {
          e.beginPath && e.beginPath(), e.arc(n, r, a, 0, 2 * Math.PI, !1);
          var i = t,
            o = i[0];
          e.moveTo(o.x, o.y);
          for (var s = 0; s < i.length; s++) {
            var l = i[s];
            e.lineTo(l.x, l.y);
          }
          e.closePath && e.closePath();
        }
        function Uo(e, t, n, r) {
          e.arc(t, n, r, 0, 2 * Math.PI, !1);
        }
        Wo.arrowShapeImpl = function (e) {
          return (Yo ||
            (Yo = {
              polygon: Ho,
              "triangle-backcurve": $o,
              "triangle-tee": Ko,
              "circle-triangle": Go,
              "triangle-cross": Ko,
              circle: Uo,
            }))[e];
        };
        var Zo = {
            drawElement: function (e, t, n, r, a, i) {
              t.isNode()
                ? this.drawNode(e, t, n, r, a, i)
                : this.drawEdge(e, t, n, r, a, i);
            },
            drawElementOverlay: function (e, t) {
              t.isNode()
                ? this.drawNodeOverlay(e, t)
                : this.drawEdgeOverlay(e, t);
            },
            drawCachedElementPortion: function (e, t, n, r, a, i, o, s) {
              var l = this,
                u = n.getBoundingBox(t);
              if (0 !== u.w && 0 !== u.h) {
                var c = n.getElement(t, u, r, a, i);
                if (null != c) {
                  var d = s(l, t);
                  if (0 === d) return;
                  var h,
                    p,
                    f,
                    g,
                    v,
                    y,
                    m = o(l, t),
                    b = u.x1,
                    x = u.y1,
                    w = u.w,
                    E = u.h;
                  if (0 !== m) {
                    var k = n.getRotationPoint(t);
                    (f = k.x),
                      (g = k.y),
                      e.translate(f, g),
                      e.rotate(m),
                      (v = l.getImgSmoothing(e)) || l.setImgSmoothing(e, !0);
                    var C = n.getRotationOffset(t);
                    (h = C.x), (p = C.y);
                  } else (h = b), (p = x);
                  1 !== d && ((y = e.globalAlpha), (e.globalAlpha = y * d)),
                    e.drawImage(
                      c.texture.canvas,
                      c.x,
                      0,
                      c.width,
                      c.height,
                      h,
                      p,
                      w,
                      E
                    ),
                    1 !== d && (e.globalAlpha = y),
                    0 !== m &&
                      (e.rotate(-m),
                      e.translate(-f, -g),
                      v || l.setImgSmoothing(e, !1));
                } else n.drawElement(e, t);
              }
            },
          },
          Qo = function () {
            return 0;
          },
          Jo = function (e, t) {
            return e.getTextAngle(t, null);
          },
          es = function (e, t) {
            return e.getTextAngle(t, "source");
          },
          ts = function (e, t) {
            return e.getTextAngle(t, "target");
          },
          ns = function (e, t) {
            return t.effectiveOpacity();
          },
          rs = function (e, t) {
            return t.pstyle("text-opacity").pfValue * t.effectiveOpacity();
          };
        (Zo.drawCachedElement = function (e, t, n, r, a, i) {
          var o = this,
            s = o.data,
            l = s.eleTxrCache,
            u = s.lblTxrCache,
            c = s.slbTxrCache,
            d = s.tlbTxrCache,
            h = t.boundingBox(),
            p = !0 === i ? l.reasons.highQuality : null;
          if (0 !== h.w && 0 !== h.h && t.visible() && (!r || st(h, r))) {
            var f = t.isEdge(),
              g = t.element()._private.rscratch.badLine;
            o.drawCachedElementPortion(e, t, l, n, a, p, Qo, ns),
              (f && g) || o.drawCachedElementPortion(e, t, u, n, a, p, Jo, rs),
              f &&
                !g &&
                (o.drawCachedElementPortion(e, t, c, n, a, p, es, rs),
                o.drawCachedElementPortion(e, t, d, n, a, p, ts, rs)),
              o.drawElementOverlay(e, t);
          }
        }),
          (Zo.drawElements = function (e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              this.drawElement(e, r);
            }
          }),
          (Zo.drawCachedElements = function (e, t, n, r) {
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              this.drawCachedElement(e, i, n, r);
            }
          }),
          (Zo.drawCachedNodes = function (e, t, n, r) {
            for (var a = 0; a < t.length; a++) {
              var i = t[a];
              i.isNode() && this.drawCachedElement(e, i, n, r);
            }
          }),
          (Zo.drawLayeredElements = function (e, t, n, r) {
            var a = this.data.lyrTxrCache.getLayers(t, n);
            if (a)
              for (var i = 0; i < a.length; i++) {
                var o = a[i],
                  s = o.bb;
                0 !== s.w &&
                  0 !== s.h &&
                  e.drawImage(o.canvas, s.x1, s.y1, s.w, s.h);
              }
            else this.drawCachedElements(e, t, n, r);
          });
        var as = {
            drawEdge: function (e, t, n) {
              var r =
                  !(arguments.length > 3 && void 0 !== arguments[3]) ||
                  arguments[3],
                a =
                  !(arguments.length > 4 && void 0 !== arguments[4]) ||
                  arguments[4],
                i =
                  !(arguments.length > 5 && void 0 !== arguments[5]) ||
                  arguments[5],
                o = this,
                s = t._private.rscratch;
              if (
                (!i || t.visible()) &&
                !s.badLine &&
                null != s.allpts &&
                !isNaN(s.allpts[0])
              ) {
                var l;
                n && ((l = n), e.translate(-l.x1, -l.y1));
                var u = i ? t.pstyle("opacity").value : 1,
                  c = i ? t.pstyle("line-opacity").value : 1,
                  d = t.pstyle("line-style").value,
                  h = t.pstyle("width").pfValue,
                  p = t.pstyle("line-cap").value,
                  f = u * c,
                  g = u * c,
                  v = function () {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : f;
                    (e.lineWidth = h),
                      (e.lineCap = p),
                      o.eleStrokeStyle(e, t, n),
                      o.drawEdgePath(t, e, s.allpts, d),
                      (e.lineCap = "butt");
                  },
                  y = function () {
                    a && o.drawEdgeOverlay(e, t);
                  },
                  m = function () {
                    var n =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : g;
                    o.drawArrowheads(e, t, n);
                  },
                  b = function () {
                    o.drawElementText(e, t, null, r);
                  };
                e.lineJoin = "round";
                var x = "yes" === t.pstyle("ghost").value;
                if (x) {
                  var w = t.pstyle("ghost-offset-x").pfValue,
                    E = t.pstyle("ghost-offset-y").pfValue,
                    k = t.pstyle("ghost-opacity").value,
                    C = f * k;
                  e.translate(w, E), v(C), m(C), e.translate(-w, -E);
                }
                v(), m(), y(), b(), n && e.translate(l.x1, l.y1);
              }
            },
            drawEdgeOverlay: function (e, t) {
              if (t.visible()) {
                var n = t.pstyle("overlay-opacity").value;
                if (0 !== n) {
                  var r = this,
                    a = r.usePaths(),
                    i = t._private.rscratch,
                    o = 2 * t.pstyle("overlay-padding").pfValue,
                    s = t.pstyle("overlay-color").value;
                  (e.lineWidth = o),
                    "self" !== i.edgeType || a
                      ? (e.lineCap = "round")
                      : (e.lineCap = "butt"),
                    r.colorStrokeStyle(e, s[0], s[1], s[2], n),
                    r.drawEdgePath(t, e, i.allpts, "solid");
                }
              }
            },
            drawEdgePath: function (e, t, n, r) {
              var a,
                i = e._private.rscratch,
                o = t,
                s = !1,
                l = this.usePaths(),
                u = e.pstyle("line-dash-pattern").pfValue,
                c = e.pstyle("line-dash-offset").pfValue;
              if (l) {
                var d = n.join("$");
                i.pathCacheKey && i.pathCacheKey === d
                  ? ((a = t = i.pathCache), (s = !0))
                  : ((a = t = new Path2D()),
                    (i.pathCacheKey = d),
                    (i.pathCache = a));
              }
              if (o.setLineDash)
                switch (r) {
                  case "dotted":
                    o.setLineDash([1, 1]);
                    break;
                  case "dashed":
                    o.setLineDash(u), (o.lineDashOffset = c);
                    break;
                  case "solid":
                    o.setLineDash([]);
                }
              if (!s && !i.badLine)
                switch (
                  (t.beginPath && t.beginPath(),
                  t.moveTo(n[0], n[1]),
                  i.edgeType)
                ) {
                  case "bezier":
                  case "self":
                  case "compound":
                  case "multibezier":
                    for (var h = 2; h + 3 < n.length; h += 4)
                      t.quadraticCurveTo(n[h], n[h + 1], n[h + 2], n[h + 3]);
                    break;
                  case "straight":
                  case "segments":
                  case "haystack":
                    for (var p = 2; p + 1 < n.length; p += 2)
                      t.lineTo(n[p], n[p + 1]);
                }
              (t = o),
                l ? t.stroke(a) : t.stroke(),
                t.setLineDash && t.setLineDash([]);
            },
            drawArrowheads: function (e, t, n) {
              var r = t._private.rscratch,
                a = "haystack" === r.edgeType;
              a ||
                this.drawArrowhead(
                  e,
                  t,
                  "source",
                  r.arrowStartX,
                  r.arrowStartY,
                  r.srcArrowAngle,
                  n
                ),
                this.drawArrowhead(
                  e,
                  t,
                  "mid-target",
                  r.midX,
                  r.midY,
                  r.midtgtArrowAngle,
                  n
                ),
                this.drawArrowhead(
                  e,
                  t,
                  "mid-source",
                  r.midX,
                  r.midY,
                  r.midsrcArrowAngle,
                  n
                ),
                a ||
                  this.drawArrowhead(
                    e,
                    t,
                    "target",
                    r.arrowEndX,
                    r.arrowEndY,
                    r.tgtArrowAngle,
                    n
                  );
            },
            drawArrowhead: function (e, t, n, r, a, i, o) {
              if (
                !(
                  isNaN(r) ||
                  null == r ||
                  isNaN(a) ||
                  null == a ||
                  isNaN(i) ||
                  null == i
                )
              ) {
                var s = this,
                  l = t.pstyle(n + "-arrow-shape").value;
                if ("none" !== l) {
                  var u =
                      "hollow" === t.pstyle(n + "-arrow-fill").value
                        ? "both"
                        : "filled",
                    c = t.pstyle(n + "-arrow-fill").value,
                    d = t.pstyle("width").pfValue,
                    h = t.pstyle("opacity").value;
                  void 0 === o && (o = h);
                  var p = e.globalCompositeOperation;
                  (1 === o && "hollow" !== c) ||
                    ((e.globalCompositeOperation = "destination-out"),
                    s.colorFillStyle(e, 255, 255, 255, 1),
                    s.colorStrokeStyle(e, 255, 255, 255, 1),
                    s.drawArrowShape(t, e, u, d, l, r, a, i),
                    (e.globalCompositeOperation = p));
                  var f = t.pstyle(n + "-arrow-color").value;
                  s.colorFillStyle(e, f[0], f[1], f[2], o),
                    s.colorStrokeStyle(e, f[0], f[1], f[2], o),
                    s.drawArrowShape(t, e, c, d, l, r, a, i);
                }
              }
            },
            drawArrowShape: function (e, t, n, r, a, i, o, s) {
              var l,
                u = this,
                c = this.usePaths() && "triangle-cross" !== a,
                d = !1,
                h = t,
                p = { x: i, y: o },
                f = e.pstyle("arrow-scale").value,
                g = this.getArrowWidth(r, f),
                v = u.arrowShapes[a];
              if (c) {
                var y = (u.arrowPathCache = u.arrowPathCache || []),
                  m = ne(a),
                  b = y[m];
                null != b
                  ? ((l = t = b), (d = !0))
                  : ((l = t = new Path2D()), (y[m] = l));
              }
              d ||
                (t.beginPath && t.beginPath(),
                c ? v.draw(t, 1, 0, { x: 0, y: 0 }, 1) : v.draw(t, g, s, p, r),
                t.closePath && t.closePath()),
                (t = h),
                c && (t.translate(i, o), t.rotate(s), t.scale(g, g)),
                ("filled" !== n && "both" !== n) || (c ? t.fill(l) : t.fill()),
                ("hollow" !== n && "both" !== n) ||
                  ((t.lineWidth = (v.matchEdgeWidth ? r : 1) / (c ? g : 1)),
                  (t.lineJoin = "miter"),
                  c ? t.stroke(l) : t.stroke()),
                c && (t.scale(1 / g, 1 / g), t.rotate(-s), t.translate(-i, -o));
            },
          },
          is = {
            safeDrawImage: function (e, t, n, r, a, i, o, s, l, u) {
              a <= 0 ||
                i <= 0 ||
                l <= 0 ||
                u <= 0 ||
                e.drawImage(t, n, r, a, i, o, s, l, u);
            },
            drawInscribedImage: function (e, t, n, r, a) {
              var i = this,
                o = n.position(),
                s = o.x,
                l = o.y,
                u = n.cy().style(),
                c = u.getIndexedStyle.bind(u),
                d = c(n, "background-fit", "value", r),
                h = c(n, "background-repeat", "value", r),
                p = n.width(),
                f = n.height(),
                g = 2 * n.padding(),
                v =
                  p +
                  ("inner" === c(n, "background-width-relative-to", "value", r)
                    ? 0
                    : g),
                y =
                  f +
                  ("inner" === c(n, "background-height-relative-to", "value", r)
                    ? 0
                    : g),
                m = n._private.rscratch,
                b = "node" === c(n, "background-clip", "value", r),
                x = c(n, "background-image-opacity", "value", r) * a,
                w = c(n, "background-image-smoothing", "value", r),
                E = t.width || t.cachedW,
                k = t.height || t.cachedH;
              (null != E && null != k) ||
                (document.body.appendChild(t),
                (E = t.cachedW = t.width || t.offsetWidth),
                (k = t.cachedH = t.height || t.offsetHeight),
                document.body.removeChild(t));
              var C = E,
                S = k;
              if (
                ("auto" !== c(n, "background-width", "value", r) &&
                  (C =
                    "%" === c(n, "background-width", "units", r)
                      ? c(n, "background-width", "pfValue", r) * v
                      : c(n, "background-width", "pfValue", r)),
                "auto" !== c(n, "background-height", "value", r) &&
                  (S =
                    "%" === c(n, "background-height", "units", r)
                      ? c(n, "background-height", "pfValue", r) * y
                      : c(n, "background-height", "pfValue", r)),
                0 !== C && 0 !== S)
              ) {
                if ("contain" === d)
                  (C *= D = Math.min(v / C, y / S)), (S *= D);
                else if ("cover" === d) {
                  var D;
                  (C *= D = Math.max(v / C, y / S)), (S *= D);
                }
                var P = s - v / 2,
                  T = c(n, "background-position-x", "units", r),
                  M = c(n, "background-position-x", "pfValue", r);
                P += "%" === T ? (v - C) * M : M;
                var B = c(n, "background-offset-x", "units", r),
                  _ = c(n, "background-offset-x", "pfValue", r);
                P += "%" === B ? (v - C) * _ : _;
                var N = l - y / 2,
                  I = c(n, "background-position-y", "units", r),
                  L = c(n, "background-position-y", "pfValue", r);
                N += "%" === I ? (y - S) * L : L;
                var z = c(n, "background-offset-y", "units", r),
                  A = c(n, "background-offset-y", "pfValue", r);
                (N += "%" === z ? (y - S) * A : A),
                  m.pathCache && ((P -= s), (N -= l), (s = 0), (l = 0));
                var O = e.globalAlpha;
                e.globalAlpha = x;
                var R = i.getImgSmoothing(e),
                  V = !1;
                if (
                  ("no" === w && R
                    ? (i.setImgSmoothing(e, !1), (V = !0))
                    : "yes" !== w || R || (i.setImgSmoothing(e, !0), (V = !0)),
                  "no-repeat" === h)
                )
                  b &&
                    (e.save(),
                    m.pathCache
                      ? e.clip(m.pathCache)
                      : (i.nodeShapes[i.getNodeShape(n)].draw(e, s, l, v, y),
                        e.clip())),
                    i.safeDrawImage(e, t, 0, 0, E, k, P, N, C, S),
                    b && e.restore();
                else {
                  var F = e.createPattern(t, h);
                  (e.fillStyle = F),
                    i.nodeShapes[i.getNodeShape(n)].draw(e, s, l, v, y),
                    e.translate(P, N),
                    e.fill(),
                    e.translate(-P, -N);
                }
                (e.globalAlpha = O), V && i.setImgSmoothing(e, R);
              }
            },
          },
          os = {};
        function ss(e, t, n, r, a) {
          var i =
            arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 5;
          e.beginPath(),
            e.moveTo(t + i, n),
            e.lineTo(t + r - i, n),
            e.quadraticCurveTo(t + r, n, t + r, n + i),
            e.lineTo(t + r, n + a - i),
            e.quadraticCurveTo(t + r, n + a, t + r - i, n + a),
            e.lineTo(t + i, n + a),
            e.quadraticCurveTo(t, n + a, t, n + a - i),
            e.lineTo(t, n + i),
            e.quadraticCurveTo(t, n, t + i, n),
            e.closePath(),
            e.fill();
        }
        (os.eleTextBiggerThanMin = function (e, t) {
          if (!t) {
            var n = e.cy().zoom(),
              r = this.getPixelRatio(),
              a = Math.ceil(Ke(n * r));
            t = Math.pow(2, a);
          }
          return !(
            e.pstyle("font-size").pfValue * t <
            e.pstyle("min-zoomed-font-size").pfValue
          );
        }),
          (os.drawElementText = function (e, t, n, r, a) {
            var i =
                !(arguments.length > 5 && void 0 !== arguments[5]) ||
                arguments[5],
              o = this;
            if (null == r) {
              if (i && !o.eleTextBiggerThanMin(t)) return;
            } else if (!1 === r) return;
            if (t.isNode()) {
              var s = t.pstyle("label");
              if (!s || !s.value) return;
              var l = o.getLabelJustification(t);
              (e.textAlign = l), (e.textBaseline = "bottom");
            } else {
              var u = t.element()._private.rscratch.badLine,
                c = t.pstyle("label"),
                d = t.pstyle("source-label"),
                h = t.pstyle("target-label");
              if (
                u ||
                ((!c || !c.value) && (!d || !d.value) && (!h || !h.value))
              )
                return;
              (e.textAlign = "center"), (e.textBaseline = "bottom");
            }
            var p,
              f = !n;
            n && ((p = n), e.translate(-p.x1, -p.y1)),
              null == a
                ? (o.drawText(e, t, null, f, i),
                  t.isEdge() &&
                    (o.drawText(e, t, "source", f, i),
                    o.drawText(e, t, "target", f, i)))
                : o.drawText(e, t, a, f, i),
              n && e.translate(p.x1, p.y1);
          }),
          (os.getFontCache = function (e) {
            var t;
            this.fontCaches = this.fontCaches || [];
            for (var n = 0; n < this.fontCaches.length; n++)
              if ((t = this.fontCaches[n]).context === e) return t;
            return (t = { context: e }), this.fontCaches.push(t), t;
          }),
          (os.setupTextStyle = function (e, t) {
            var n =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2],
              r = t.pstyle("font-style").strValue,
              a = t.pstyle("font-size").pfValue + "px",
              i = t.pstyle("font-family").strValue,
              o = t.pstyle("font-weight").strValue,
              s = n ? t.effectiveOpacity() * t.pstyle("text-opacity").value : 1,
              l = t.pstyle("text-outline-opacity").value * s,
              u = t.pstyle("color").value,
              c = t.pstyle("text-outline-color").value;
            (e.font = r + " " + o + " " + a + " " + i),
              (e.lineJoin = "round"),
              this.colorFillStyle(e, u[0], u[1], u[2], s),
              this.colorStrokeStyle(e, c[0], c[1], c[2], l);
          }),
          (os.getTextAngle = function (e, t) {
            var n = e._private.rscratch,
              r = t ? t + "-" : "",
              a = e.pstyle(r + "text-rotation"),
              i = ke(n, "labelAngle", t);
            return "autorotate" === a.strValue
              ? e.isEdge()
                ? i
                : 0
              : "none" === a.strValue
              ? 0
              : a.pfValue;
          }),
          (os.drawText = function (e, t, n) {
            var r =
                !(arguments.length > 3 && void 0 !== arguments[3]) ||
                arguments[3],
              a =
                !(arguments.length > 4 && void 0 !== arguments[4]) ||
                arguments[4],
              i = t._private,
              o = i.rscratch,
              s = a ? t.effectiveOpacity() : 1;
            if (!a || (0 !== s && 0 !== t.pstyle("text-opacity").value)) {
              "main" === n && (n = null);
              var l,
                u,
                c = ke(o, "labelX", n),
                d = ke(o, "labelY", n),
                h = this.getLabelText(t, n);
              if (null != h && "" !== h && !isNaN(c) && !isNaN(d)) {
                this.setupTextStyle(e, t, a);
                var p,
                  f = n ? n + "-" : "",
                  g = ke(o, "labelWidth", n),
                  v = ke(o, "labelHeight", n),
                  y = t.pstyle(f + "text-margin-x").pfValue,
                  m = t.pstyle(f + "text-margin-y").pfValue,
                  b = t.isEdge(),
                  x = t.pstyle("text-halign").value,
                  w = t.pstyle("text-valign").value;
                switch (
                  (b && ((x = "center"), (w = "center")),
                  (c += y),
                  (d += m),
                  0 !== (p = r ? this.getTextAngle(t, n) : 0) &&
                    ((l = c),
                    (u = d),
                    e.translate(l, u),
                    e.rotate(p),
                    (c = 0),
                    (d = 0)),
                  w)
                ) {
                  case "top":
                    break;
                  case "center":
                    d += v / 2;
                    break;
                  case "bottom":
                    d += v;
                }
                var E = t.pstyle("text-background-opacity").value,
                  k = t.pstyle("text-border-opacity").value,
                  C = t.pstyle("text-border-width").pfValue,
                  S = t.pstyle("text-background-padding").pfValue;
                if (E > 0 || (C > 0 && k > 0)) {
                  var D = c - S;
                  switch (x) {
                    case "left":
                      D -= g;
                      break;
                    case "center":
                      D -= g / 2;
                  }
                  var P = d - v - S,
                    T = g + 2 * S,
                    M = v + 2 * S;
                  if (E > 0) {
                    var B = e.fillStyle,
                      _ = t.pstyle("text-background-color").value;
                    e.fillStyle =
                      "rgba(" +
                      _[0] +
                      "," +
                      _[1] +
                      "," +
                      _[2] +
                      "," +
                      E * s +
                      ")";
                    var N = t.pstyle("text-background-shape").strValue;
                    0 === N.indexOf("round")
                      ? ss(e, D, P, T, M, 2)
                      : e.fillRect(D, P, T, M),
                      (e.fillStyle = B);
                  }
                  if (C > 0 && k > 0) {
                    var I = e.strokeStyle,
                      L = e.lineWidth,
                      z = t.pstyle("text-border-color").value,
                      A = t.pstyle("text-border-style").value;
                    if (
                      ((e.strokeStyle =
                        "rgba(" +
                        z[0] +
                        "," +
                        z[1] +
                        "," +
                        z[2] +
                        "," +
                        k * s +
                        ")"),
                      (e.lineWidth = C),
                      e.setLineDash)
                    )
                      switch (A) {
                        case "dotted":
                          e.setLineDash([1, 1]);
                          break;
                        case "dashed":
                          e.setLineDash([4, 2]);
                          break;
                        case "double":
                          (e.lineWidth = C / 4), e.setLineDash([]);
                          break;
                        case "solid":
                          e.setLineDash([]);
                      }
                    if ((e.strokeRect(D, P, T, M), "double" === A)) {
                      var O = C / 2;
                      e.strokeRect(D + O, P + O, T - 2 * O, M - 2 * O);
                    }
                    e.setLineDash && e.setLineDash([]),
                      (e.lineWidth = L),
                      (e.strokeStyle = I);
                  }
                }
                var R = 2 * t.pstyle("text-outline-width").pfValue;
                if (
                  (R > 0 && (e.lineWidth = R),
                  "wrap" === t.pstyle("text-wrap").value)
                ) {
                  var V = ke(o, "labelWrapCachedLines", n),
                    F = ke(o, "labelLineHeight", n),
                    j = g / 2,
                    q = this.getLabelJustification(t);
                  switch (
                    ("auto" === q ||
                      ("left" === x
                        ? "left" === q
                          ? (c += -g)
                          : "center" === q && (c += -j)
                        : "center" === x
                        ? "left" === q
                          ? (c += -j)
                          : "right" === q && (c += j)
                        : "right" === x &&
                          ("center" === q
                            ? (c += j)
                            : "right" === q && (c += g))),
                    w)
                  ) {
                    case "top":
                      d -= (V.length - 1) * F;
                      break;
                    case "center":
                    case "bottom":
                      d -= (V.length - 1) * F;
                  }
                  for (var X = 0; X < V.length; X++)
                    R > 0 && e.strokeText(V[X], c, d),
                      e.fillText(V[X], c, d),
                      (d += F);
                } else R > 0 && e.strokeText(h, c, d), e.fillText(h, c, d);
                0 !== p && (e.rotate(-p), e.translate(-l, -u));
              }
            }
          });
        for (
          var ls = {
              drawNode: function (e, t, n) {
                var r,
                  a,
                  i =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                  o =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4],
                  s =
                    !(arguments.length > 5 && void 0 !== arguments[5]) ||
                    arguments[5],
                  l = this,
                  u = t._private,
                  c = u.rscratch,
                  d = t.position();
                if (k(d.x) && k(d.y) && (!s || t.visible())) {
                  var h,
                    p,
                    f = s ? t.effectiveOpacity() : 1,
                    g = l.usePaths(),
                    v = !1,
                    y = t.padding();
                  (r = t.width() + 2 * y),
                    (a = t.height() + 2 * y),
                    n && ((p = n), e.translate(-p.x1, -p.y1));
                  for (
                    var m = t.pstyle("background-image"),
                      b = m.value,
                      x = new Array(b.length),
                      w = new Array(b.length),
                      E = 0,
                      C = 0;
                    C < b.length;
                    C++
                  ) {
                    var S = b[C],
                      D = (x[C] = null != S && "none" !== S);
                    if (D) {
                      var P = t
                        .cy()
                        .style()
                        .getIndexedStyle(
                          t,
                          "background-image-crossorigin",
                          "value",
                          C
                        );
                      E++,
                        (w[C] = l.getCachedImage(S, P, function () {
                          (u.backgroundTimestamp = Date.now()),
                            t.emitAndNotify("background");
                        }));
                    }
                  }
                  var T = t.pstyle("background-blacken").value,
                    M = t.pstyle("border-width").pfValue,
                    B = t.pstyle("background-opacity").value * f,
                    _ = t.pstyle("border-color").value,
                    N = t.pstyle("border-style").value,
                    I = t.pstyle("border-opacity").value * f;
                  e.lineJoin = "miter";
                  var L = function () {
                      var n =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : B;
                      l.eleFillStyle(e, t, n);
                    },
                    z = function () {
                      var t =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : I;
                      l.colorStrokeStyle(e, _[0], _[1], _[2], t);
                    },
                    A = t.pstyle("shape").strValue,
                    O = t.pstyle("shape-polygon-points").pfValue;
                  if (g) {
                    e.translate(d.x, d.y);
                    var R = (l.nodePathCache = l.nodePathCache || []),
                      V = re(
                        "polygon" === A ? A + "," + O.join(",") : A,
                        "" + a,
                        "" + r
                      ),
                      F = R[V];
                    null != F
                      ? ((h = F), (v = !0), (c.pathCache = h))
                      : ((h = new Path2D()), (R[V] = c.pathCache = h));
                  }
                  var j = function () {
                      if (!v) {
                        var n = d;
                        g && (n = { x: 0, y: 0 }),
                          l.nodeShapes[l.getNodeShape(t)].draw(
                            h || e,
                            n.x,
                            n.y,
                            r,
                            a
                          );
                      }
                      g ? e.fill(h) : e.fill();
                    },
                    q = function () {
                      for (
                        var n =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : f,
                          r =
                            !(
                              arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                          a = u.backgrounding,
                          i = 0,
                          o = 0;
                        o < w.length;
                        o++
                      ) {
                        var s = t
                          .cy()
                          .style()
                          .getIndexedStyle(
                            t,
                            "background-image-containment",
                            "value",
                            o
                          );
                        (r && "over" === s) || (!r && "inside" === s)
                          ? i++
                          : x[o] &&
                            w[o].complete &&
                            !w[o].error &&
                            (i++, l.drawInscribedImage(e, w[o], t, o, n));
                      }
                      (u.backgrounding = !(i === E)),
                        a !== u.backgrounding && t.updateStyle(!1);
                    },
                    X = function () {
                      var n =
                          arguments.length > 0 &&
                          void 0 !== arguments[0] &&
                          arguments[0],
                        i =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : f;
                      l.hasPie(t) &&
                        (l.drawPie(e, t, i),
                        n &&
                          (g ||
                            l.nodeShapes[l.getNodeShape(t)].draw(
                              e,
                              d.x,
                              d.y,
                              r,
                              a
                            )));
                    },
                    Y = function () {
                      var t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : f,
                        n = (T > 0 ? T : -T) * t,
                        r = T > 0 ? 0 : 255;
                      0 !== T &&
                        (l.colorFillStyle(e, r, r, r, n),
                        g ? e.fill(h) : e.fill());
                    },
                    W = function () {
                      if (M > 0) {
                        if (
                          ((e.lineWidth = M),
                          (e.lineCap = "butt"),
                          e.setLineDash)
                        )
                          switch (N) {
                            case "dotted":
                              e.setLineDash([1, 1]);
                              break;
                            case "dashed":
                              e.setLineDash([4, 2]);
                              break;
                            case "solid":
                            case "double":
                              e.setLineDash([]);
                          }
                        if ((g ? e.stroke(h) : e.stroke(), "double" === N)) {
                          e.lineWidth = M / 3;
                          var t = e.globalCompositeOperation;
                          (e.globalCompositeOperation = "destination-out"),
                            g ? e.stroke(h) : e.stroke(),
                            (e.globalCompositeOperation = t);
                        }
                        e.setLineDash && e.setLineDash([]);
                      }
                    },
                    H = function () {
                      o && l.drawNodeOverlay(e, t, d, r, a);
                    },
                    $ = function () {
                      l.drawElementText(e, t, null, i);
                    },
                    K = "yes" === t.pstyle("ghost").value;
                  if (K) {
                    var G = t.pstyle("ghost-offset-x").pfValue,
                      U = t.pstyle("ghost-offset-y").pfValue,
                      Z = t.pstyle("ghost-opacity").value,
                      Q = Z * f;
                    e.translate(G, U),
                      L(Z * B),
                      j(),
                      q(Q, !0),
                      z(Z * I),
                      W(),
                      X(0 !== T || 0 !== M),
                      q(Q, !1),
                      Y(Q),
                      e.translate(-G, -U);
                  }
                  L(),
                    j(),
                    q(f, !0),
                    z(),
                    W(),
                    X(0 !== T || 0 !== M),
                    q(f, !1),
                    Y(),
                    g && e.translate(-d.x, -d.y),
                    $(),
                    H(),
                    n && e.translate(p.x1, p.y1);
                }
              },
              drawNodeOverlay: function (e, t, n, r, a) {
                if (t.visible()) {
                  var i = t.pstyle("overlay-padding").pfValue,
                    o = t.pstyle("overlay-opacity").value,
                    s = t.pstyle("overlay-color").value;
                  if (o > 0) {
                    if (((n = n || t.position()), null == r || null == a)) {
                      var l = t.padding();
                      (r = t.width() + 2 * l), (a = t.height() + 2 * l);
                    }
                    this.colorFillStyle(e, s[0], s[1], s[2], o),
                      this.nodeShapes.roundrectangle.draw(
                        e,
                        n.x,
                        n.y,
                        r + 2 * i,
                        a + 2 * i
                      ),
                      e.fill();
                  }
                }
              },
              hasPie: function (e) {
                return (e = e[0])._private.hasPie;
              },
              drawPie: function (e, t, n, r) {
                (t = t[0]), (r = r || t.position());
                var a = t.cy().style(),
                  i = t.pstyle("pie-size"),
                  o = r.x,
                  s = r.y,
                  l = t.width(),
                  u = t.height(),
                  c = Math.min(l, u) / 2,
                  d = 0;
                this.usePaths() && ((o = 0), (s = 0)),
                  "%" === i.units
                    ? (c *= i.pfValue)
                    : void 0 !== i.pfValue && (c = i.pfValue / 2);
                for (var h = 1; h <= a.pieBackgroundN; h++) {
                  var p = t.pstyle("pie-" + h + "-background-size").value,
                    f = t.pstyle("pie-" + h + "-background-color").value,
                    g = t.pstyle("pie-" + h + "-background-opacity").value * n,
                    v = p / 100;
                  v + d > 1 && (v = 1 - d);
                  var y = 1.5 * Math.PI + 2 * Math.PI * d,
                    m = y + 2 * Math.PI * v;
                  0 === p ||
                    d >= 1 ||
                    d + v > 1 ||
                    (e.beginPath(),
                    e.moveTo(o, s),
                    e.arc(o, s, c, y, m),
                    e.closePath(),
                    this.colorFillStyle(e, f[0], f[1], f[2], g),
                    e.fill(),
                    (d += v));
                }
              },
            },
            us = {
              getPixelRatio: function () {
                var e = this.data.contexts[0];
                if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
                var t =
                  e.backingStorePixelRatio ||
                  e.webkitBackingStorePixelRatio ||
                  e.mozBackingStorePixelRatio ||
                  e.msBackingStorePixelRatio ||
                  e.oBackingStorePixelRatio ||
                  e.backingStorePixelRatio ||
                  1;
                return (window.devicePixelRatio || 1) / t;
              },
              paintCache: function (e) {
                for (
                  var t,
                    n = (this.paintCaches = this.paintCaches || []),
                    r = !0,
                    a = 0;
                  a < n.length;
                  a++
                )
                  if ((t = n[a]).context === e) {
                    r = !1;
                    break;
                  }
                return r && ((t = { context: e }), n.push(t)), t;
              },
              createGradientStyleFor: function (e, t, n, r, a) {
                var i,
                  o = this.usePaths(),
                  s = n.pstyle(t + "-gradient-stop-colors").value,
                  l = n.pstyle(t + "-gradient-stop-positions").pfValue;
                if ("radial-gradient" === r)
                  if (n.isEdge()) {
                    var u = n.sourceEndpoint(),
                      c = n.targetEndpoint(),
                      d = n.midpoint(),
                      h = Ue(u, d),
                      p = Ue(c, d);
                    i = e.createRadialGradient(
                      d.x,
                      d.y,
                      0,
                      d.x,
                      d.y,
                      Math.max(h, p)
                    );
                  } else {
                    var f = o ? { x: 0, y: 0 } : n.position(),
                      g = n.paddedWidth(),
                      v = n.paddedHeight();
                    i = e.createRadialGradient(
                      f.x,
                      f.y,
                      0,
                      f.x,
                      f.y,
                      Math.max(g, v)
                    );
                  }
                else if (n.isEdge()) {
                  var y = n.sourceEndpoint(),
                    m = n.targetEndpoint();
                  i = e.createLinearGradient(y.x, y.y, m.x, m.y);
                } else {
                  var b = o ? { x: 0, y: 0 } : n.position(),
                    x = n.paddedWidth() / 2,
                    w = n.paddedHeight() / 2;
                  switch (n.pstyle("background-gradient-direction").value) {
                    case "to-bottom":
                      i = e.createLinearGradient(b.x, b.y - w, b.x, b.y + w);
                      break;
                    case "to-top":
                      i = e.createLinearGradient(b.x, b.y + w, b.x, b.y - w);
                      break;
                    case "to-left":
                      i = e.createLinearGradient(b.x + x, b.y, b.x - x, b.y);
                      break;
                    case "to-right":
                      i = e.createLinearGradient(b.x - x, b.y, b.x + x, b.y);
                      break;
                    case "to-bottom-right":
                    case "to-right-bottom":
                      i = e.createLinearGradient(
                        b.x - x,
                        b.y - w,
                        b.x + x,
                        b.y + w
                      );
                      break;
                    case "to-top-right":
                    case "to-right-top":
                      i = e.createLinearGradient(
                        b.x - x,
                        b.y + w,
                        b.x + x,
                        b.y - w
                      );
                      break;
                    case "to-bottom-left":
                    case "to-left-bottom":
                      i = e.createLinearGradient(
                        b.x + x,
                        b.y - w,
                        b.x - x,
                        b.y + w
                      );
                      break;
                    case "to-top-left":
                    case "to-left-top":
                      i = e.createLinearGradient(
                        b.x + x,
                        b.y + w,
                        b.x - x,
                        b.y - w
                      );
                  }
                }
                if (!i) return null;
                for (
                  var E = l.length === s.length, k = s.length, C = 0;
                  C < k;
                  C++
                )
                  i.addColorStop(
                    E ? l[C] : C / (k - 1),
                    "rgba(" +
                      s[C][0] +
                      "," +
                      s[C][1] +
                      "," +
                      s[C][2] +
                      "," +
                      a +
                      ")"
                  );
                return i;
              },
              gradientFillStyle: function (e, t, n, r) {
                var a = this.createGradientStyleFor(e, "background", t, n, r);
                if (!a) return null;
                e.fillStyle = a;
              },
              colorFillStyle: function (e, t, n, r, a) {
                e.fillStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
              },
              eleFillStyle: function (e, t, n) {
                var r = t.pstyle("background-fill").value;
                if ("linear-gradient" === r || "radial-gradient" === r)
                  this.gradientFillStyle(e, t, r, n);
                else {
                  var a = t.pstyle("background-color").value;
                  this.colorFillStyle(e, a[0], a[1], a[2], n);
                }
              },
              gradientStrokeStyle: function (e, t, n, r) {
                var a = this.createGradientStyleFor(e, "line", t, n, r);
                if (!a) return null;
                e.strokeStyle = a;
              },
              colorStrokeStyle: function (e, t, n, r, a) {
                e.strokeStyle = "rgba(" + t + "," + n + "," + r + "," + a + ")";
              },
              eleStrokeStyle: function (e, t, n) {
                var r = t.pstyle("line-fill").value;
                if ("linear-gradient" === r || "radial-gradient" === r)
                  this.gradientStrokeStyle(e, t, r, n);
                else {
                  var a = t.pstyle("line-color").value;
                  this.colorStrokeStyle(e, a[0], a[1], a[2], n);
                }
              },
              matchCanvasSize: function (e) {
                var t = this,
                  n = t.data,
                  r = t.findContainerClientCoords(),
                  a = r[2],
                  i = r[3],
                  o = t.getPixelRatio(),
                  s = t.motionBlurPxRatio;
                (e !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_NODE] &&
                  e !== t.data.bufferCanvases[t.MOTIONBLUR_BUFFER_DRAG]) ||
                  (o = s);
                var l,
                  u = a * o,
                  c = i * o;
                if (u !== t.canvasWidth || c !== t.canvasHeight) {
                  t.fontCaches = null;
                  var d = n.canvasContainer;
                  (d.style.width = a + "px"), (d.style.height = i + "px");
                  for (var h = 0; h < t.CANVAS_LAYERS; h++)
                    ((l = n.canvases[h]).width = u),
                      (l.height = c),
                      (l.style.width = a + "px"),
                      (l.style.height = i + "px");
                  for (h = 0; h < t.BUFFER_COUNT; h++)
                    ((l = n.bufferCanvases[h]).width = u),
                      (l.height = c),
                      (l.style.width = a + "px"),
                      (l.style.height = i + "px");
                  (t.textureMult = 1),
                    o <= 1 &&
                      ((l = n.bufferCanvases[t.TEXTURE_BUFFER]),
                      (t.textureMult = 2),
                      (l.width = u * t.textureMult),
                      (l.height = c * t.textureMult)),
                    (t.canvasWidth = u),
                    (t.canvasHeight = c);
                }
              },
              renderTo: function (e, t, n, r) {
                this.render({
                  forcedContext: e,
                  forcedZoom: t,
                  forcedPan: n,
                  drawAllLayers: !0,
                  forcedPxRatio: r,
                });
              },
              render: function (e) {
                var t = (e = e || be()).forcedContext,
                  n = e.drawAllLayers,
                  r = e.drawOnlyNodeLayer,
                  a = e.forcedZoom,
                  i = e.forcedPan,
                  o = this,
                  s =
                    void 0 === e.forcedPxRatio
                      ? this.getPixelRatio()
                      : e.forcedPxRatio,
                  l = o.cy,
                  u = o.data,
                  c = u.canvasNeedsRedraw,
                  d =
                    o.textureOnViewport &&
                    !t &&
                    (o.pinching ||
                      o.hoverData.dragging ||
                      o.swipePanning ||
                      o.data.wheelZooming),
                  h = void 0 !== e.motionBlur ? e.motionBlur : o.motionBlur,
                  p = o.motionBlurPxRatio,
                  f = l.hasCompoundNodes(),
                  g = o.hoverData.draggingEles,
                  v = !(!o.hoverData.selecting && !o.touchData.selecting),
                  y = (h = h && !t && o.motionBlurEnabled && !v);
                t ||
                  (o.prevPxRatio !== s &&
                    (o.invalidateContainerClientCoordsCache(),
                    o.matchCanvasSize(o.container),
                    o.redrawHint("eles", !0),
                    o.redrawHint("drag", !0)),
                  (o.prevPxRatio = s)),
                  !t &&
                    o.motionBlurTimeout &&
                    clearTimeout(o.motionBlurTimeout),
                  h &&
                    (null == o.mbFrames && (o.mbFrames = 0),
                    o.mbFrames++,
                    o.mbFrames < 3 && (y = !1),
                    o.mbFrames > o.minMbLowQualFrames &&
                      (o.motionBlurPxRatio = o.mbPxRBlurry)),
                  o.clearingMotionBlur && (o.motionBlurPxRatio = 1),
                  o.textureDrawLastFrame &&
                    !d &&
                    ((c[o.NODE] = !0), (c[o.SELECT_BOX] = !0));
                var m = l.style(),
                  b = l.zoom(),
                  x = void 0 !== a ? a : b,
                  w = l.pan(),
                  E = { x: w.x, y: w.y },
                  k = { zoom: b, pan: { x: w.x, y: w.y } },
                  C = o.prevViewport;
                void 0 === C ||
                  k.zoom !== C.zoom ||
                  k.pan.x !== C.pan.x ||
                  k.pan.y !== C.pan.y ||
                  (g && !f) ||
                  (o.motionBlurPxRatio = 1),
                  i && (E = i),
                  (x *= s),
                  (E.x *= s),
                  (E.y *= s);
                var S = o.getCachedZSortedEles();
                function D(e, t, n, r, a) {
                  var i = e.globalCompositeOperation;
                  (e.globalCompositeOperation = "destination-out"),
                    o.colorFillStyle(
                      e,
                      255,
                      255,
                      255,
                      o.motionBlurTransparency
                    ),
                    e.fillRect(t, n, r, a),
                    (e.globalCompositeOperation = i);
                }
                function P(e, r) {
                  var s, l, c, d;
                  o.clearingMotionBlur ||
                  (e !== u.bufferContexts[o.MOTIONBLUR_BUFFER_NODE] &&
                    e !== u.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG])
                    ? ((s = E),
                      (l = x),
                      (c = o.canvasWidth),
                      (d = o.canvasHeight))
                    : ((s = { x: w.x * p, y: w.y * p }),
                      (l = b * p),
                      (c = o.canvasWidth * p),
                      (d = o.canvasHeight * p)),
                    e.setTransform(1, 0, 0, 1, 0, 0),
                    "motionBlur" === r
                      ? D(e, 0, 0, c, d)
                      : t || (void 0 !== r && !r) || e.clearRect(0, 0, c, d),
                    n || (e.translate(s.x, s.y), e.scale(l, l)),
                    i && e.translate(i.x, i.y),
                    a && e.scale(a, a);
                }
                if ((d || (o.textureDrawLastFrame = !1), d)) {
                  if (((o.textureDrawLastFrame = !0), !o.textureCache)) {
                    (o.textureCache = {}),
                      (o.textureCache.bb = l.mutableElements().boundingBox()),
                      (o.textureCache.texture =
                        o.data.bufferCanvases[o.TEXTURE_BUFFER]);
                    var T = o.data.bufferContexts[o.TEXTURE_BUFFER];
                    T.setTransform(1, 0, 0, 1, 0, 0),
                      T.clearRect(
                        0,
                        0,
                        o.canvasWidth * o.textureMult,
                        o.canvasHeight * o.textureMult
                      ),
                      o.render({
                        forcedContext: T,
                        drawOnlyNodeLayer: !0,
                        forcedPxRatio: s * o.textureMult,
                      }),
                      ((k = o.textureCache.viewport = {
                        zoom: l.zoom(),
                        pan: l.pan(),
                        width: o.canvasWidth,
                        height: o.canvasHeight,
                      }).mpan = {
                        x: (0 - k.pan.x) / k.zoom,
                        y: (0 - k.pan.y) / k.zoom,
                      });
                  }
                  (c[o.DRAG] = !1), (c[o.NODE] = !1);
                  var M = u.contexts[o.NODE],
                    B = o.textureCache.texture;
                  (k = o.textureCache.viewport),
                    M.setTransform(1, 0, 0, 1, 0, 0),
                    h
                      ? D(M, 0, 0, k.width, k.height)
                      : M.clearRect(0, 0, k.width, k.height);
                  var _ = m.core("outside-texture-bg-color").value,
                    N = m.core("outside-texture-bg-opacity").value;
                  o.colorFillStyle(M, _[0], _[1], _[2], N),
                    M.fillRect(0, 0, k.width, k.height),
                    (b = l.zoom()),
                    P(M, !1),
                    M.clearRect(
                      k.mpan.x,
                      k.mpan.y,
                      k.width / k.zoom / s,
                      k.height / k.zoom / s
                    ),
                    M.drawImage(
                      B,
                      k.mpan.x,
                      k.mpan.y,
                      k.width / k.zoom / s,
                      k.height / k.zoom / s
                    );
                } else o.textureOnViewport && !t && (o.textureCache = null);
                var I = l.extent(),
                  L =
                    o.pinching ||
                    o.hoverData.dragging ||
                    o.swipePanning ||
                    o.data.wheelZooming ||
                    o.hoverData.draggingEles ||
                    o.cy.animated(),
                  z = o.hideEdgesOnViewport && L,
                  A = [];
                if (
                  ((A[o.NODE] =
                    (!c[o.NODE] && h && !o.clearedForMotionBlur[o.NODE]) ||
                    o.clearingMotionBlur),
                  A[o.NODE] && (o.clearedForMotionBlur[o.NODE] = !0),
                  (A[o.DRAG] =
                    (!c[o.DRAG] && h && !o.clearedForMotionBlur[o.DRAG]) ||
                    o.clearingMotionBlur),
                  A[o.DRAG] && (o.clearedForMotionBlur[o.DRAG] = !0),
                  c[o.NODE] || n || r || A[o.NODE])
                ) {
                  var O = h && !A[o.NODE] && 1 !== p;
                  P(
                    (M =
                      t ||
                      (O
                        ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_NODE]
                        : u.contexts[o.NODE])),
                    h && !O ? "motionBlur" : void 0
                  ),
                    z
                      ? o.drawCachedNodes(M, S.nondrag, s, I)
                      : o.drawLayeredElements(M, S.nondrag, s, I),
                    o.debug && o.drawDebugPoints(M, S.nondrag),
                    n || h || (c[o.NODE] = !1);
                }
                if (
                  (!r &&
                    (c[o.DRAG] || n || A[o.DRAG]) &&
                    ((O = h && !A[o.DRAG] && 1 !== p),
                    P(
                      (M =
                        t ||
                        (O
                          ? o.data.bufferContexts[o.MOTIONBLUR_BUFFER_DRAG]
                          : u.contexts[o.DRAG])),
                      h && !O ? "motionBlur" : void 0
                    ),
                    z
                      ? o.drawCachedNodes(M, S.drag, s, I)
                      : o.drawCachedElements(M, S.drag, s, I),
                    o.debug && o.drawDebugPoints(M, S.drag),
                    n || h || (c[o.DRAG] = !1)),
                  o.showFps || (!r && c[o.SELECT_BOX] && !n))
                ) {
                  if (
                    (P((M = t || u.contexts[o.SELECT_BOX])),
                    1 == o.selection[4] &&
                      (o.hoverData.selecting || o.touchData.selecting))
                  ) {
                    b = o.cy.zoom();
                    var R = m.core("selection-box-border-width").value / b;
                    (M.lineWidth = R),
                      (M.fillStyle =
                        "rgba(" +
                        m.core("selection-box-color").value[0] +
                        "," +
                        m.core("selection-box-color").value[1] +
                        "," +
                        m.core("selection-box-color").value[2] +
                        "," +
                        m.core("selection-box-opacity").value +
                        ")"),
                      M.fillRect(
                        o.selection[0],
                        o.selection[1],
                        o.selection[2] - o.selection[0],
                        o.selection[3] - o.selection[1]
                      ),
                      R > 0 &&
                        ((M.strokeStyle =
                          "rgba(" +
                          m.core("selection-box-border-color").value[0] +
                          "," +
                          m.core("selection-box-border-color").value[1] +
                          "," +
                          m.core("selection-box-border-color").value[2] +
                          "," +
                          m.core("selection-box-opacity").value +
                          ")"),
                        M.strokeRect(
                          o.selection[0],
                          o.selection[1],
                          o.selection[2] - o.selection[0],
                          o.selection[3] - o.selection[1]
                        ));
                  }
                  if (u.bgActivePosistion && !o.hoverData.selecting) {
                    b = o.cy.zoom();
                    var V = u.bgActivePosistion;
                    (M.fillStyle =
                      "rgba(" +
                      m.core("active-bg-color").value[0] +
                      "," +
                      m.core("active-bg-color").value[1] +
                      "," +
                      m.core("active-bg-color").value[2] +
                      "," +
                      m.core("active-bg-opacity").value +
                      ")"),
                      M.beginPath(),
                      M.arc(
                        V.x,
                        V.y,
                        m.core("active-bg-size").pfValue / b,
                        0,
                        2 * Math.PI
                      ),
                      M.fill();
                  }
                  var F = o.lastRedrawTime;
                  if (o.showFps && F) {
                    F = Math.round(F);
                    var j = Math.round(1e3 / F);
                    M.setTransform(1, 0, 0, 1, 0, 0),
                      (M.fillStyle = "rgba(255, 0, 0, 0.75)"),
                      (M.strokeStyle = "rgba(255, 0, 0, 0.75)"),
                      (M.lineWidth = 1),
                      M.fillText(
                        "1 frame = " + F + " ms = " + j + " fps",
                        0,
                        20
                      ),
                      M.strokeRect(0, 30, 250, 20),
                      M.fillRect(0, 30, 250 * Math.min(j / 60, 1), 20);
                  }
                  n || (c[o.SELECT_BOX] = !1);
                }
                if (h && 1 !== p) {
                  var q = u.contexts[o.NODE],
                    X = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_NODE],
                    Y = u.contexts[o.DRAG],
                    W = o.data.bufferCanvases[o.MOTIONBLUR_BUFFER_DRAG],
                    H = function (e, t, n) {
                      e.setTransform(1, 0, 0, 1, 0, 0),
                        n || !y
                          ? e.clearRect(0, 0, o.canvasWidth, o.canvasHeight)
                          : D(e, 0, 0, o.canvasWidth, o.canvasHeight);
                      var r = p;
                      e.drawImage(
                        t,
                        0,
                        0,
                        o.canvasWidth * r,
                        o.canvasHeight * r,
                        0,
                        0,
                        o.canvasWidth,
                        o.canvasHeight
                      );
                    };
                  (c[o.NODE] || A[o.NODE]) &&
                    (H(q, X, A[o.NODE]), (c[o.NODE] = !1)),
                    (c[o.DRAG] || A[o.DRAG]) &&
                      (H(Y, W, A[o.DRAG]), (c[o.DRAG] = !1));
                }
                (o.prevViewport = k),
                  o.clearingMotionBlur &&
                    ((o.clearingMotionBlur = !1),
                    (o.motionBlurCleared = !0),
                    (o.motionBlur = !0)),
                  h &&
                    (o.motionBlurTimeout = setTimeout(function () {
                      (o.motionBlurTimeout = null),
                        (o.clearedForMotionBlur[o.NODE] = !1),
                        (o.clearedForMotionBlur[o.DRAG] = !1),
                        (o.motionBlur = !1),
                        (o.clearingMotionBlur = !d),
                        (o.mbFrames = 0),
                        (c[o.NODE] = !0),
                        (c[o.DRAG] = !0),
                        o.redraw();
                    }, 100)),
                  t || l.emit("render");
              },
            },
            cs = {
              drawPolygonPath: function (e, t, n, r, a, i) {
                var o = r / 2,
                  s = a / 2;
                e.beginPath && e.beginPath(),
                  e.moveTo(t + o * i[0], n + s * i[1]);
                for (var l = 1; l < i.length / 2; l++)
                  e.lineTo(t + o * i[2 * l], n + s * i[2 * l + 1]);
                e.closePath();
              },
              drawRoundPolygonPath: function (e, t, n, r, a, i) {
                var o = r / 2,
                  s = a / 2,
                  l = Mt(r, a);
                e.beginPath && e.beginPath();
                for (var u = 0; u < i.length / 4; u++) {
                  var c, d;
                  (d = 0 === u ? i.length - 2 : 4 * u - 2), (c = 4 * u + 2);
                  var h = t + o * i[4 * u],
                    p = n + s * i[4 * u + 1],
                    f = -i[d] * i[c] - i[d + 1] * i[c + 1],
                    g = l / Math.tan(Math.acos(f) / 2),
                    v = h - g * i[d],
                    y = p - g * i[d + 1],
                    m = h + g * i[c],
                    b = p + g * i[c + 1];
                  0 === u ? e.moveTo(v, y) : e.lineTo(v, y),
                    e.arcTo(h, p, m, b, l);
                }
                e.closePath();
              },
              drawRoundRectanglePath: function (e, t, n, r, a) {
                var i = r / 2,
                  o = a / 2,
                  s = Tt(r, a);
                e.beginPath && e.beginPath(),
                  e.moveTo(t, n - o),
                  e.arcTo(t + i, n - o, t + i, n, s),
                  e.arcTo(t + i, n + o, t, n + o, s),
                  e.arcTo(t - i, n + o, t - i, n, s),
                  e.arcTo(t - i, n - o, t, n - o, s),
                  e.lineTo(t, n - o),
                  e.closePath();
              },
              drawBottomRoundRectanglePath: function (e, t, n, r, a) {
                var i = r / 2,
                  o = a / 2,
                  s = Tt(r, a);
                e.beginPath && e.beginPath(),
                  e.moveTo(t, n - o),
                  e.lineTo(t + i, n - o),
                  e.lineTo(t + i, n),
                  e.arcTo(t + i, n + o, t, n + o, s),
                  e.arcTo(t - i, n + o, t - i, n, s),
                  e.lineTo(t - i, n - o),
                  e.lineTo(t, n - o),
                  e.closePath();
              },
              drawCutRectanglePath: function (e, t, n, r, a) {
                var i = r / 2,
                  o = a / 2;
                e.beginPath && e.beginPath(),
                  e.moveTo(t - i + 8, n - o),
                  e.lineTo(t + i - 8, n - o),
                  e.lineTo(t + i, n - o + 8),
                  e.lineTo(t + i, n + o - 8),
                  e.lineTo(t + i - 8, n + o),
                  e.lineTo(t - i + 8, n + o),
                  e.lineTo(t - i, n + o - 8),
                  e.lineTo(t - i, n - o + 8),
                  e.closePath();
              },
              drawBarrelPath: function (e, t, n, r, a) {
                var i = r / 2,
                  o = a / 2,
                  s = t - i,
                  l = t + i,
                  u = n - o,
                  c = n + o,
                  d = Bt(r, a),
                  h = d.widthOffset,
                  p = d.heightOffset,
                  f = d.ctrlPtOffsetPct * h;
                e.beginPath && e.beginPath(),
                  e.moveTo(s, u + p),
                  e.lineTo(s, c - p),
                  e.quadraticCurveTo(s + f, c, s + h, c),
                  e.lineTo(l - h, c),
                  e.quadraticCurveTo(l - f, c, l, c - p),
                  e.lineTo(l, u + p),
                  e.quadraticCurveTo(l - f, u, l - h, u),
                  e.lineTo(s + h, u),
                  e.quadraticCurveTo(s + f, u, s, u + p),
                  e.closePath();
              },
            },
            ds = Math.sin(0),
            hs = Math.cos(0),
            ps = {},
            fs = {},
            gs = Math.PI / 40,
            vs = 0 * Math.PI;
          vs < 2 * Math.PI;
          vs += gs
        )
          (ps[vs] = Math.sin(vs)), (fs[vs] = Math.cos(vs));
        cs.drawEllipsePath = function (e, t, n, r, a) {
          if ((e.beginPath && e.beginPath(), e.ellipse))
            e.ellipse(t, n, r / 2, a / 2, 0, 0, 2 * Math.PI);
          else
            for (
              var i, o, s = r / 2, l = a / 2, u = 0 * Math.PI;
              u < 2 * Math.PI;
              u += gs
            )
              (i = t - s * ps[u] * ds + s * fs[u] * hs),
                (o = n + l * fs[u] * ds + l * ps[u] * hs),
                0 === u ? e.moveTo(i, o) : e.lineTo(i, o);
          e.closePath();
        };
        var ys = {};
        function ms(e) {
          var t = e.indexOf(",");
          return e.substr(t + 1);
        }
        function bs(e, t, n) {
          var r = function () {
            return t.toDataURL(n, e.quality);
          };
          switch (e.output) {
            case "blob-promise":
              return new qn(function (r, a) {
                try {
                  t.toBlob(
                    function (e) {
                      null != e
                        ? r(e)
                        : a(
                            new Error(
                              "`canvas.toBlob()` sent a null value in its callback"
                            )
                          );
                    },
                    n,
                    e.quality
                  );
                } catch (e) {
                  a(e);
                }
              });
            case "blob":
              return (function (e, t) {
                for (
                  var n = atob(e),
                    r = new ArrayBuffer(n.length),
                    a = new Uint8Array(r),
                    i = 0;
                  i < n.length;
                  i++
                )
                  a[i] = n.charCodeAt(i);
                return new Blob([r], { type: t });
              })(ms(r()), n);
            case "base64":
              return ms(r());
            case "base64uri":
            default:
              return r();
          }
        }
        (ys.createBuffer = function (e, t) {
          var n = document.createElement("canvas");
          return (n.width = e), (n.height = t), [n, n.getContext("2d")];
        }),
          (ys.bufferCanvasImage = function (e) {
            var t = this.cy,
              n = t.mutableElements().boundingBox(),
              r = this.findContainerClientCoords(),
              a = e.full ? Math.ceil(n.w) : r[2],
              i = e.full ? Math.ceil(n.h) : r[3],
              o = k(e.maxWidth) || k(e.maxHeight),
              s = this.getPixelRatio(),
              l = 1;
            if (void 0 !== e.scale)
              (a *= e.scale), (i *= e.scale), (l = e.scale);
            else if (o) {
              var u = 1 / 0,
                c = 1 / 0;
              k(e.maxWidth) && (u = (l * e.maxWidth) / a),
                k(e.maxHeight) && (c = (l * e.maxHeight) / i),
                (a *= l = Math.min(u, c)),
                (i *= l);
            }
            o || ((a *= s), (i *= s), (l *= s));
            var d = document.createElement("canvas");
            (d.width = a),
              (d.height = i),
              (d.style.width = a + "px"),
              (d.style.height = i + "px");
            var h = d.getContext("2d");
            if (a > 0 && i > 0) {
              h.clearRect(0, 0, a, i),
                (h.globalCompositeOperation = "source-over");
              var p = this.getCachedZSortedEles();
              if (e.full)
                h.translate(-n.x1 * l, -n.y1 * l),
                  h.scale(l, l),
                  this.drawElements(h, p),
                  h.scale(1 / l, 1 / l),
                  h.translate(n.x1 * l, n.y1 * l);
              else {
                var f = t.pan(),
                  g = { x: f.x * l, y: f.y * l };
                (l *= t.zoom()),
                  h.translate(g.x, g.y),
                  h.scale(l, l),
                  this.drawElements(h, p),
                  h.scale(1 / l, 1 / l),
                  h.translate(-g.x, -g.y);
              }
              e.bg &&
                ((h.globalCompositeOperation = "destination-over"),
                (h.fillStyle = e.bg),
                h.rect(0, 0, a, i),
                h.fill());
            }
            return d;
          }),
          (ys.png = function (e) {
            return bs(e, this.bufferCanvasImage(e), "image/png");
          }),
          (ys.jpg = function (e) {
            return bs(e, this.bufferCanvasImage(e), "image/jpeg");
          });
        var xs = Es,
          ws = Es.prototype;
        function Es(e) {
          var t = this;
          t.data = {
            canvases: new Array(ws.CANVAS_LAYERS),
            contexts: new Array(ws.CANVAS_LAYERS),
            canvasNeedsRedraw: new Array(ws.CANVAS_LAYERS),
            bufferCanvases: new Array(ws.BUFFER_COUNT),
            bufferContexts: new Array(ws.CANVAS_LAYERS),
          };
          var n = "-webkit-tap-highlight-color",
            r = "rgba(0,0,0,0)";
          t.data.canvasContainer = document.createElement("div");
          var a = t.data.canvasContainer.style;
          (t.data.canvasContainer.style[n] = r),
            (a.position = "relative"),
            (a.zIndex = "0"),
            (a.overflow = "hidden");
          var i = e.cy.container();
          i.appendChild(t.data.canvasContainer), (i.style[n] = r);
          var o = {
            "-webkit-user-select": "none",
            "-moz-user-select": "-moz-none",
            "user-select": "none",
            "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
            "outline-style": "none",
          };
          p &&
            p.userAgent.match(/msie|trident|edge/i) &&
            ((o["-ms-touch-action"] = "none"), (o["touch-action"] = "none"));
          for (var s = 0; s < ws.CANVAS_LAYERS; s++) {
            var l = (t.data.canvases[s] = document.createElement("canvas"));
            (t.data.contexts[s] = l.getContext("2d")),
              Object.keys(o).forEach(function (e) {
                l.style[e] = o[e];
              }),
              (l.style.position = "absolute"),
              l.setAttribute("data-id", "layer" + s),
              (l.style.zIndex = String(ws.CANVAS_LAYERS - s)),
              t.data.canvasContainer.appendChild(l),
              (t.data.canvasNeedsRedraw[s] = !1);
          }
          for (
            t.data.topCanvas = t.data.canvases[0],
              t.data.canvases[ws.NODE].setAttribute(
                "data-id",
                "layer" + ws.NODE + "-node"
              ),
              t.data.canvases[ws.SELECT_BOX].setAttribute(
                "data-id",
                "layer" + ws.SELECT_BOX + "-selectbox"
              ),
              t.data.canvases[ws.DRAG].setAttribute(
                "data-id",
                "layer" + ws.DRAG + "-drag"
              ),
              s = 0;
            s < ws.BUFFER_COUNT;
            s++
          )
            (t.data.bufferCanvases[s] = document.createElement("canvas")),
              (t.data.bufferContexts[s] = t.data.bufferCanvases[s].getContext(
                "2d"
              )),
              (t.data.bufferCanvases[s].style.position = "absolute"),
              t.data.bufferCanvases[s].setAttribute("data-id", "buffer" + s),
              (t.data.bufferCanvases[s].style.zIndex = String(-s - 1)),
              (t.data.bufferCanvases[s].style.visibility = "hidden");
          t.pathsEnabled = !0;
          var u = nt(),
            c = function (e) {
              return { x: -e.w / 2, y: -e.h / 2 };
            },
            d = function (e) {
              return e.boundingBox(), e[0]._private.bodyBounds;
            },
            h = function (e) {
              return e.boundingBox(), e[0]._private.labelBounds.main || u;
            },
            f = function (e) {
              return e.boundingBox(), e[0]._private.labelBounds.source || u;
            },
            g = function (e) {
              return e.boundingBox(), e[0]._private.labelBounds.target || u;
            },
            v = function (e, t) {
              return t;
            },
            y = function (e, t, n) {
              var r = e ? e + "-" : "";
              return {
                x: t.x + n.pstyle(r + "text-margin-x").pfValue,
                y: t.y + n.pstyle(r + "text-margin-y").pfValue,
              };
            },
            m = function (e, t, n) {
              var r = e[0]._private.rscratch;
              return { x: r[t], y: r[n] };
            },
            b = (t.data.eleTxrCache = new Ro(t, {
              getKey: function (e) {
                return e[0]._private.nodeKey;
              },
              doesEleInvalidateKey: function (e) {
                var t = e[0]._private;
                return !(t.oldBackgroundTimestamp === t.backgroundTimestamp);
              },
              drawElement: function (e, n, r, a, i) {
                return t.drawElement(e, n, r, !1, !1, i);
              },
              getBoundingBox: d,
              getRotationPoint: function (e) {
                return { x: ((t = d(e)).x1 + t.x2) / 2, y: (t.y1 + t.y2) / 2 };
                var t;
              },
              getRotationOffset: function (e) {
                return c(d(e));
              },
              allowEdgeTxrCaching: !1,
              allowParentTxrCaching: !1,
            })),
            x = (t.data.lblTxrCache = new Ro(t, {
              getKey: function (e) {
                return e[0]._private.labelStyleKey;
              },
              drawElement: function (e, n, r, a, i) {
                return t.drawElementText(e, n, r, a, "main", i);
              },
              getBoundingBox: h,
              getRotationPoint: function (e) {
                return y("", m(e, "labelX", "labelY"), e);
              },
              getRotationOffset: function (e) {
                var t = h(e),
                  n = c(h(e));
                if (e.isNode()) {
                  switch (e.pstyle("text-halign").value) {
                    case "left":
                      n.x = -t.w;
                      break;
                    case "right":
                      n.x = 0;
                  }
                  switch (e.pstyle("text-valign").value) {
                    case "top":
                      n.y = -t.h;
                      break;
                    case "bottom":
                      n.y = 0;
                  }
                }
                return n;
              },
              isVisible: v,
            })),
            w = (t.data.slbTxrCache = new Ro(t, {
              getKey: function (e) {
                return e[0]._private.sourceLabelStyleKey;
              },
              drawElement: function (e, n, r, a, i) {
                return t.drawElementText(e, n, r, a, "source", i);
              },
              getBoundingBox: f,
              getRotationPoint: function (e) {
                return y("source", m(e, "sourceLabelX", "sourceLabelY"), e);
              },
              getRotationOffset: function (e) {
                return c(f(e));
              },
              isVisible: v,
            })),
            E = (t.data.tlbTxrCache = new Ro(t, {
              getKey: function (e) {
                return e[0]._private.targetLabelStyleKey;
              },
              drawElement: function (e, n, r, a, i) {
                return t.drawElementText(e, n, r, a, "target", i);
              },
              getBoundingBox: g,
              getRotationPoint: function (e) {
                return y("target", m(e, "targetLabelX", "targetLabelY"), e);
              },
              getRotationOffset: function (e) {
                return c(g(e));
              },
              isVisible: v,
            })),
            k = (t.data.lyrTxrCache = new Fo(t));
          t.onUpdateEleCalcs(function (e, t) {
            b.invalidateElements(t),
              x.invalidateElements(t),
              w.invalidateElements(t),
              E.invalidateElements(t),
              k.invalidateElements(t);
            for (var n = 0; n < t.length; n++) {
              var r = t[n]._private;
              r.oldBackgroundTimestamp = r.backgroundTimestamp;
            }
          });
          var C = function (e) {
            for (var t = 0; t < e.length; t++)
              k.enqueueElementRefinement(e[t].ele);
          };
          b.onDequeue(C), x.onDequeue(C), w.onDequeue(C), E.onDequeue(C);
        }
        (ws.CANVAS_LAYERS = 3),
          (ws.SELECT_BOX = 0),
          (ws.DRAG = 1),
          (ws.NODE = 2),
          (ws.BUFFER_COUNT = 3),
          (ws.TEXTURE_BUFFER = 0),
          (ws.MOTIONBLUR_BUFFER_NODE = 1),
          (ws.MOTIONBLUR_BUFFER_DRAG = 2),
          (ws.redrawHint = function (e, t) {
            var n = this;
            switch (e) {
              case "eles":
                n.data.canvasNeedsRedraw[ws.NODE] = t;
                break;
              case "drag":
                n.data.canvasNeedsRedraw[ws.DRAG] = t;
                break;
              case "select":
                n.data.canvasNeedsRedraw[ws.SELECT_BOX] = t;
            }
          });
        var ks = "undefined" != typeof Path2D;
        (ws.path2dEnabled = function (e) {
          if (void 0 === e) return this.pathsEnabled;
          this.pathsEnabled = !!e;
        }),
          (ws.usePaths = function () {
            return ks && this.pathsEnabled;
          }),
          (ws.setImgSmoothing = function (e, t) {
            null != e.imageSmoothingEnabled
              ? (e.imageSmoothingEnabled = t)
              : ((e.webkitImageSmoothingEnabled = t),
                (e.mozImageSmoothingEnabled = t),
                (e.msImageSmoothingEnabled = t));
          }),
          (ws.getImgSmoothing = function (e) {
            return null != e.imageSmoothingEnabled
              ? e.imageSmoothingEnabled
              : e.webkitImageSmoothingEnabled ||
                  e.mozImageSmoothingEnabled ||
                  e.msImageSmoothingEnabled;
          }),
          (ws.makeOffscreenCanvas = function (e, t) {
            var n;
            return (
              "undefined" !==
              ("undefined" == typeof OffscreenCanvas
                ? "undefined"
                : o(OffscreenCanvas))
                ? (n = new OffscreenCanvas(e, t))
                : (((n = document.createElement("canvas")).width = e),
                  (n.height = t)),
              n
            );
          }),
          [
            Wo,
            Zo,
            as,
            is,
            os,
            ls,
            us,
            cs,
            ys,
            {
              nodeShapeImpl: function (e, t, n, r, a, i, o) {
                switch (e) {
                  case "ellipse":
                    return this.drawEllipsePath(t, n, r, a, i);
                  case "polygon":
                    return this.drawPolygonPath(t, n, r, a, i, o);
                  case "round-polygon":
                    return this.drawRoundPolygonPath(t, n, r, a, i, o);
                  case "roundrectangle":
                  case "round-rectangle":
                    return this.drawRoundRectanglePath(t, n, r, a, i);
                  case "cutrectangle":
                  case "cut-rectangle":
                    return this.drawCutRectanglePath(t, n, r, a, i);
                  case "bottomroundrectangle":
                  case "bottom-round-rectangle":
                    return this.drawBottomRoundRectanglePath(t, n, r, a, i);
                  case "barrel":
                    return this.drawBarrelPath(t, n, r, a, i);
                }
              },
            },
          ].forEach(function (e) {
            V(ws, e);
          });
        var Cs = [
            { type: "layout", extensions: so },
            {
              type: "renderer",
              extensions: [
                { name: "null", impl: lo },
                { name: "base", impl: _o },
                { name: "canvas", impl: xs },
              ],
            },
          ],
          Ss = {},
          Ds = {};
        function Ps(e, t, n) {
          var r = n,
            a = function (n) {
              pe(
                "Can not register `" +
                  t +
                  "` for `" +
                  e +
                  "` since `" +
                  n +
                  "` already exists in the prototype and can not be overridden"
              );
            };
          if ("core" === e) {
            if (wi.prototype[t]) return a(t);
            wi.prototype[t] = n;
          } else if ("collection" === e) {
            if (Ra.prototype[t]) return a(t);
            Ra.prototype[t] = n;
          } else if ("layout" === e) {
            for (
              var i = function (e) {
                  (this.options = e),
                    n.call(this, e),
                    E(this._private) || (this._private = {}),
                    (this._private.cy = e.cy),
                    (this._private.listeners = []),
                    this.createEmitter();
                },
                o = (i.prototype = Object.create(n.prototype)),
                s = [],
                l = 0;
              l < s.length;
              l++
            ) {
              var u = s[l];
              o[u] =
                o[u] ||
                function () {
                  return this;
                };
            }
            o.start && !o.run
              ? (o.run = function () {
                  return this.start(), this;
                })
              : !o.start &&
                o.run &&
                (o.start = function () {
                  return this.run(), this;
                });
            var c = n.prototype.stop;
            (o.stop = function () {
              var e = this.options;
              if (e && e.animate) {
                var t = this.animations;
                if (t) for (var n = 0; n < t.length; n++) t[n].stop();
              }
              return c ? c.call(this) : this.emit("layoutstop"), this;
            }),
              o.destroy ||
                (o.destroy = function () {
                  return this;
                }),
              (o.cy = function () {
                return this._private.cy;
              });
            var d = function (e) {
                return e._private.cy;
              },
              h = {
                addEventFields: function (e, t) {
                  (t.layout = e), (t.cy = d(e)), (t.target = e);
                },
                bubble: function () {
                  return !0;
                },
                parent: function (e) {
                  return d(e);
                },
              };
            V(o, {
              createEmitter: function () {
                return (this._private.emitter = new ra(h, this)), this;
              },
              emitter: function () {
                return this._private.emitter;
              },
              on: function (e, t) {
                return this.emitter().on(e, t), this;
              },
              one: function (e, t) {
                return this.emitter().one(e, t), this;
              },
              once: function (e, t) {
                return this.emitter().one(e, t), this;
              },
              removeListener: function (e, t) {
                return this.emitter().removeListener(e, t), this;
              },
              removeAllListeners: function () {
                return this.emitter().removeAllListeners(), this;
              },
              emit: function (e, t) {
                return this.emitter().emit(e, t), this;
              },
            }),
              Wn.eventAliasesOn(o),
              (r = i);
          } else if ("renderer" === e && "null" !== t && "base" !== t) {
            var p = Ts("renderer", "base"),
              f = p.prototype,
              g = n,
              v = n.prototype,
              y = function () {
                p.apply(this, arguments), g.apply(this, arguments);
              },
              m = y.prototype;
            for (var b in f) {
              var x = f[b];
              if (null != v[b]) return a(b);
              m[b] = x;
            }
            for (var w in v) m[w] = v[w];
            f.clientFunctions.forEach(function (e) {
              m[e] =
                m[e] ||
                function () {
                  pe(
                    "Renderer does not implement `renderer." +
                      e +
                      "()` on its prototype"
                  );
                };
            }),
              (r = y);
          }
          return j({ map: Ss, keys: [e, t], value: r });
        }
        function Ts(e, t) {
          return q({ map: Ss, keys: [e, t] });
        }
        function Ms(e, t, n, r, a) {
          return j({ map: Ds, keys: [e, t, n, r], value: a });
        }
        function Bs(e, t, n, r) {
          return q({ map: Ds, keys: [e, t, n, r] });
        }
        var _s = function () {
          return 2 === arguments.length
            ? Ts.apply(null, arguments)
            : 3 === arguments.length
            ? Ps.apply(null, arguments)
            : 4 === arguments.length
            ? Bs.apply(null, arguments)
            : 5 === arguments.length
            ? Ms.apply(null, arguments)
            : void pe("Invalid extension access syntax");
        };
        (wi.prototype.extension = _s),
          Cs.forEach(function (e) {
            e.extensions.forEach(function (t) {
              Ps(e.type, t.name, t.impl);
            });
          });
        var Ns = function e() {
            if (!(this instanceof e)) return new e();
            this.length = 0;
          },
          Is = Ns.prototype;
        (Is.instanceString = function () {
          return "stylesheet";
        }),
          (Is.selector = function (e) {
            return (
              (this[this.length++] = { selector: e, properties: [] }), this
            );
          }),
          (Is.css = function (e, t) {
            var n = this.length - 1;
            if (b(e)) this[n].properties.push({ name: e, value: t });
            else if (E(e))
              for (var r = e, a = Object.keys(r), i = 0; i < a.length; i++) {
                var o = a[i],
                  s = r[o];
                if (null != s) {
                  var l = vi.properties[o] || vi.properties[L(o)];
                  if (null != l) {
                    var u = l.name,
                      c = s;
                    this[n].properties.push({ name: u, value: c });
                  }
                }
              }
            return this;
          }),
          (Is.style = Is.css),
          (Is.generateStyle = function (e) {
            var t = new vi(e);
            return this.appendToStyle(t);
          }),
          (Is.appendToStyle = function (e) {
            for (var t = 0; t < this.length; t++) {
              var n = this[t],
                r = n.selector,
                a = n.properties;
              e.selector(r);
              for (var i = 0; i < a.length; i++) {
                var o = a[i];
                e.css(o.name, o.value);
              }
            }
            return e;
          });
        var Ls = function (e) {
          return (
            void 0 === e && (e = {}),
            E(e) ? new wi(e) : b(e) ? _s.apply(_s, arguments) : void 0
          );
        };
        (Ls.use = function (e) {
          var t = Array.prototype.slice.call(arguments, 1);
          return t.unshift(Ls), e.apply(null, t), this;
        }),
          (Ls.warnings = function (e) {
            return fe(e);
          }),
          (Ls.version = "3.18.1"),
          (Ls.stylesheet = Ls.Stylesheet = Ns),
          (e.exports = Ls);
      },
      162: function (e, t, n) {
        var r, a;
        void 0 ===
          (a =
            "function" ==
            typeof (r = function () {
              "use strict";
              function t(e, t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e),
                  (r.responseType = "blob"),
                  (r.onload = function () {
                    s(r.response, t, n);
                  }),
                  (r.onerror = function () {
                    console.error("could not download file");
                  }),
                  r.send();
              }
              function r(e) {
                var t = new XMLHttpRequest();
                t.open("HEAD", e, !1);
                try {
                  t.send();
                } catch (e) {}
                return 200 <= t.status && 299 >= t.status;
              }
              function a(e) {
                try {
                  e.dispatchEvent(new MouseEvent("click"));
                } catch (n) {
                  var t = document.createEvent("MouseEvents");
                  t.initMouseEvent(
                    "click",
                    !0,
                    !0,
                    window,
                    0,
                    0,
                    0,
                    80,
                    20,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    e.dispatchEvent(t);
                }
              }
              var i =
                  "object" == typeof window && window.window === window
                    ? window
                    : "object" == typeof self && self.self === self
                    ? self
                    : "object" == typeof n.g && n.g.global === n.g
                    ? n.g
                    : void 0,
                o =
                  i.navigator &&
                  /Macintosh/.test(navigator.userAgent) &&
                  /AppleWebKit/.test(navigator.userAgent) &&
                  !/Safari/.test(navigator.userAgent),
                s =
                  i.saveAs ||
                  ("object" != typeof window || window !== i
                    ? function () {}
                    : "download" in HTMLAnchorElement.prototype && !o
                    ? function (e, n, o) {
                        var s = i.URL || i.webkitURL,
                          l = document.createElement("a");
                        (n = n || e.name || "download"),
                          (l.download = n),
                          (l.rel = "noopener"),
                          "string" == typeof e
                            ? ((l.href = e),
                              l.origin === location.origin
                                ? a(l)
                                : r(l.href)
                                ? t(e, n, o)
                                : a(l, (l.target = "_blank")))
                            : ((l.href = s.createObjectURL(e)),
                              setTimeout(function () {
                                s.revokeObjectURL(l.href);
                              }, 4e4),
                              setTimeout(function () {
                                a(l);
                              }, 0));
                      }
                    : "msSaveOrOpenBlob" in navigator
                    ? function (e, n, i) {
                        if (
                          ((n = n || e.name || "download"),
                          "string" != typeof e)
                        )
                          navigator.msSaveOrOpenBlob(
                            (function (e, t) {
                              return (
                                void 0 === t
                                  ? (t = { autoBom: !1 })
                                  : "object" != typeof t &&
                                    (console.warn(
                                      "Deprecated: Expected third argument to be a object"
                                    ),
                                    (t = { autoBom: !t })),
                                t.autoBom &&
                                /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                  e.type
                                )
                                  ? new Blob(["\ufeff", e], { type: e.type })
                                  : e
                              );
                            })(e, i),
                            n
                          );
                        else if (r(e)) t(e, n, i);
                        else {
                          var o = document.createElement("a");
                          (o.href = e),
                            (o.target = "_blank"),
                            setTimeout(function () {
                              a(o);
                            });
                        }
                      }
                    : function (e, n, r, a) {
                        if (
                          ((a = a || open("", "_blank")) &&
                            (a.document.title = a.document.body.innerText =
                              "downloading..."),
                          "string" == typeof e)
                        )
                          return t(e, n, r);
                        var s = "application/octet-stream" === e.type,
                          l = /constructor/i.test(i.HTMLElement) || i.safari,
                          u = /CriOS\/[\d]+/.test(navigator.userAgent);
                        if (
                          (u || (s && l) || o) &&
                          "undefined" != typeof FileReader
                        ) {
                          var c = new FileReader();
                          (c.onloadend = function () {
                            var e = c.result;
                            (e = u
                              ? e
                              : e.replace(
                                  /^data:[^;]*;/,
                                  "data:attachment/file;"
                                )),
                              a ? (a.location.href = e) : (location = e),
                              (a = null);
                          }),
                            c.readAsDataURL(e);
                        } else {
                          var d = i.URL || i.webkitURL,
                            h = d.createObjectURL(e);
                          a ? (a.location = h) : (location.href = h),
                            (a = null),
                            setTimeout(function () {
                              d.revokeObjectURL(h);
                            }, 4e4);
                        }
                      });
              (i.saveAs = s.saveAs = s), (e.exports = s);
            })
              ? r.apply(t, [])
              : r) || (e.exports = a);
      },
      485: (e, t, n) => {
        e.exports = n(894);
      },
      894: function (e, t) {
        var n, r, a;
        (function () {
          var i, o, s, l, u, c, d, h, p, f, g, v, y, m, b;
          (s = Math.floor),
            (f = Math.min),
            (o = function (e, t) {
              return e < t ? -1 : e > t ? 1 : 0;
            }),
            (p = function (e, t, n, r, a) {
              var i;
              if ((null == n && (n = 0), null == a && (a = o), n < 0))
                throw new Error("lo must be non-negative");
              for (null == r && (r = e.length); n < r; )
                a(t, e[(i = s((n + r) / 2))]) < 0 ? (r = i) : (n = i + 1);
              return [].splice.apply(e, [n, n - n].concat(t)), t;
            }),
            (c = function (e, t, n) {
              return null == n && (n = o), e.push(t), m(e, 0, e.length - 1, n);
            }),
            (u = function (e, t) {
              var n, r;
              return (
                null == t && (t = o),
                (n = e.pop()),
                e.length ? ((r = e[0]), (e[0] = n), b(e, 0, t)) : (r = n),
                r
              );
            }),
            (h = function (e, t, n) {
              var r;
              return (
                null == n && (n = o), (r = e[0]), (e[0] = t), b(e, 0, n), r
              );
            }),
            (d = function (e, t, n) {
              var r;
              return (
                null == n && (n = o),
                e.length &&
                  n(e[0], t) < 0 &&
                  ((t = (r = [e[0], t])[0]), (e[0] = r[1]), b(e, 0, n)),
                t
              );
            }),
            (l = function (e, t) {
              var n, r, a, i, l, u;
              for (
                null == t && (t = o),
                  l = [],
                  r = 0,
                  a = (i = function () {
                    u = [];
                    for (
                      var t = 0, n = s(e.length / 2);
                      0 <= n ? t < n : t > n;
                      0 <= n ? t++ : t--
                    )
                      u.push(t);
                    return u;
                  }
                    .apply(this)
                    .reverse()).length;
                r < a;
                r++
              )
                (n = i[r]), l.push(b(e, n, t));
              return l;
            }),
            (y = function (e, t, n) {
              var r;
              if ((null == n && (n = o), -1 !== (r = e.indexOf(t))))
                return m(e, 0, r, n), b(e, r, n);
            }),
            (g = function (e, t, n) {
              var r, a, i, s, u;
              if ((null == n && (n = o), !(a = e.slice(0, t)).length)) return a;
              for (l(a, n), i = 0, s = (u = e.slice(t)).length; i < s; i++)
                (r = u[i]), d(a, r, n);
              return a.sort(n).reverse();
            }),
            (v = function (e, t, n) {
              var r, a, i, s, c, d, h, g, v;
              if ((null == n && (n = o), 10 * t <= e.length)) {
                if (!(i = e.slice(0, t).sort(n)).length) return i;
                for (
                  a = i[i.length - 1], s = 0, d = (h = e.slice(t)).length;
                  s < d;
                  s++
                )
                  n((r = h[s]), a) < 0 &&
                    (p(i, r, 0, null, n), i.pop(), (a = i[i.length - 1]));
                return i;
              }
              for (
                l(e, n), v = [], c = 0, g = f(t, e.length);
                0 <= g ? c < g : c > g;
                0 <= g ? ++c : --c
              )
                v.push(u(e, n));
              return v;
            }),
            (m = function (e, t, n, r) {
              var a, i, s;
              for (
                null == r && (r = o), a = e[n];
                n > t && r(a, (i = e[(s = (n - 1) >> 1)])) < 0;

              )
                (e[n] = i), (n = s);
              return (e[n] = a);
            }),
            (b = function (e, t, n) {
              var r, a, i, s, l;
              for (
                null == n && (n = o),
                  a = e.length,
                  l = t,
                  i = e[t],
                  r = 2 * t + 1;
                r < a;

              )
                (s = r + 1) < a && !(n(e[r], e[s]) < 0) && (r = s),
                  (e[t] = e[r]),
                  (r = 2 * (t = r) + 1);
              return (e[t] = i), m(e, l, t, n);
            }),
            (i = (function () {
              function e(e) {
                (this.cmp = null != e ? e : o), (this.nodes = []);
              }
              return (
                (e.push = c),
                (e.pop = u),
                (e.replace = h),
                (e.pushpop = d),
                (e.heapify = l),
                (e.updateItem = y),
                (e.nlargest = g),
                (e.nsmallest = v),
                (e.prototype.push = function (e) {
                  return c(this.nodes, e, this.cmp);
                }),
                (e.prototype.pop = function () {
                  return u(this.nodes, this.cmp);
                }),
                (e.prototype.peek = function () {
                  return this.nodes[0];
                }),
                (e.prototype.contains = function (e) {
                  return -1 !== this.nodes.indexOf(e);
                }),
                (e.prototype.replace = function (e) {
                  return h(this.nodes, e, this.cmp);
                }),
                (e.prototype.pushpop = function (e) {
                  return d(this.nodes, e, this.cmp);
                }),
                (e.prototype.heapify = function () {
                  return l(this.nodes, this.cmp);
                }),
                (e.prototype.updateItem = function (e) {
                  return y(this.nodes, e, this.cmp);
                }),
                (e.prototype.clear = function () {
                  return (this.nodes = []);
                }),
                (e.prototype.empty = function () {
                  return 0 === this.nodes.length;
                }),
                (e.prototype.size = function () {
                  return this.nodes.length;
                }),
                (e.prototype.clone = function () {
                  var t;
                  return ((t = new e()).nodes = this.nodes.slice(0)), t;
                }),
                (e.prototype.toArray = function () {
                  return this.nodes.slice(0);
                }),
                (e.prototype.insert = e.prototype.push),
                (e.prototype.top = e.prototype.peek),
                (e.prototype.front = e.prototype.peek),
                (e.prototype.has = e.prototype.contains),
                (e.prototype.copy = e.prototype.clone),
                e
              );
            })()),
            (r = []),
            void 0 ===
              (a =
                "function" ==
                typeof (n = function () {
                  return i;
                })
                  ? n.apply(t, r)
                  : n) || (e.exports = a);
        }.call(this));
      },
      296: (e, t, n) => {
        var r = /^\s+|\s+$/g,
          a = /^[-+]0x[0-9a-f]+$/i,
          i = /^0b[01]+$/i,
          o = /^0o[0-7]+$/i,
          s = parseInt,
          l = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
          u = "object" == typeof self && self && self.Object === Object && self,
          c = l || u || Function("return this")(),
          d = Object.prototype.toString,
          h = Math.max,
          p = Math.min,
          f = function () {
            return c.Date.now();
          };
        function g(e) {
          var t = typeof e;
          return !!e && ("object" == t || "function" == t);
        }
        function v(e) {
          if ("number" == typeof e) return e;
          if (
            (function (e) {
              return (
                "symbol" == typeof e ||
                ((function (e) {
                  return !!e && "object" == typeof e;
                })(e) &&
                  "[object Symbol]" == d.call(e))
              );
            })(e)
          )
            return NaN;
          if (g(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = g(t) ? t + "" : t;
          }
          if ("string" != typeof e) return 0 === e ? e : +e;
          e = e.replace(r, "");
          var n = i.test(e);
          return n || o.test(e)
            ? s(e.slice(2), n ? 2 : 8)
            : a.test(e)
            ? NaN
            : +e;
        }
        e.exports = function (e, t, n) {
          var r,
            a,
            i,
            o,
            s,
            l,
            u = 0,
            c = !1,
            d = !1,
            y = !0;
          if ("function" != typeof e)
            throw new TypeError("Expected a function");
          function m(t) {
            var n = r,
              i = a;
            return (r = a = void 0), (u = t), (o = e.apply(i, n));
          }
          function b(e) {
            return (u = e), (s = setTimeout(w, t)), c ? m(e) : o;
          }
          function x(e) {
            var n = e - l;
            return void 0 === l || n >= t || n < 0 || (d && e - u >= i);
          }
          function w() {
            var e = f();
            if (x(e)) return E(e);
            s = setTimeout(
              w,
              (function (e) {
                var n = t - (e - l);
                return d ? p(n, i - (e - u)) : n;
              })(e)
            );
          }
          function E(e) {
            return (s = void 0), y && r ? m(e) : ((r = a = void 0), o);
          }
          function k() {
            var e = f(),
              n = x(e);
            if (((r = arguments), (a = this), (l = e), n)) {
              if (void 0 === s) return b(l);
              if (d) return (s = setTimeout(w, t)), m(l);
            }
            return void 0 === s && (s = setTimeout(w, t)), o;
          }
          return (
            (t = v(t) || 0),
            g(n) &&
              ((c = !!n.leading),
              (i = (d = "maxWait" in n) ? h(v(n.maxWait) || 0, t) : i),
              (y = "trailing" in n ? !!n.trailing : y)),
            (k.cancel = function () {
              void 0 !== s && clearTimeout(s),
                (u = 0),
                (r = l = a = s = void 0);
            }),
            (k.flush = function () {
              return void 0 === s ? o : E(f());
            }),
            k
          );
        };
      },
    },
    t = {};
  function n(r) {
    var a = t[r];
    if (void 0 !== a) return a.exports;
    var i = (t[r] = { exports: {} });
    return e[r].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (() => {
      "use strict";
      function e() {}
      function t(e) {
        return e();
      }
      function r() {
        return Object.create(null);
      }
      function a(e) {
        e.forEach(t);
      }
      function i(e) {
        return "function" == typeof e;
      }
      function o(e, t) {
        return e != e
          ? t == t
          : e !== t || (e && "object" == typeof e) || "function" == typeof e;
      }
      function s(e) {
        return 0 === Object.keys(e).length;
      }
      function l(e, t) {
        e.appendChild(t);
      }
      function u(e, t, n) {
        e.insertBefore(t, n || null);
      }
      function c(e) {
        e.parentNode.removeChild(e);
      }
      function d(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t);
      }
      function h(e) {
        return document.createElement(e);
      }
      function p(e) {
        return document.createTextNode(e);
      }
      function f() {
        return p(" ");
      }
      function g(e, t, n, r) {
        return (
          e.addEventListener(t, n, r), () => e.removeEventListener(t, n, r)
        );
      }
      function v(e, t, n) {
        null == n
          ? e.removeAttribute(t)
          : e.getAttribute(t) !== n && e.setAttribute(t, n);
      }
      function y(e, t) {
        (t = "" + t), e.wholeText !== t && (e.data = t);
      }
      function m(e, t) {
        e.value = null == t ? "" : t;
      }
      let b;
      function x(e) {
        b = e;
      }
      new Set(), new Set();
      const w = [],
        E = [],
        k = [],
        C = [],
        S = Promise.resolve();
      let D = !1;
      function P(e) {
        k.push(e);
      }
      let T = !1;
      const M = new Set();
      function B() {
        if (!T) {
          T = !0;
          do {
            for (let e = 0; e < w.length; e += 1) {
              const t = w[e];
              x(t), _(t.$$);
            }
            for (x(null), w.length = 0; E.length; ) E.pop()();
            for (let e = 0; e < k.length; e += 1) {
              const t = k[e];
              M.has(t) || (M.add(t), t());
            }
            k.length = 0;
          } while (w.length);
          for (; C.length; ) C.pop()();
          (D = !1), (T = !1), M.clear();
        }
      }
      function _(e) {
        if (null !== e.fragment) {
          e.update(), a(e.before_update);
          const t = e.dirty;
          (e.dirty = [-1]),
            e.fragment && e.fragment.p(e.ctx, t),
            e.after_update.forEach(P);
        }
      }
      const N = new Set();
      let I;
      function L(e, t) {
        e && e.i && (N.delete(e), e.i(t));
      }
      function z(e, n, r, o) {
        const {
          fragment: s,
          on_mount: l,
          on_destroy: u,
          after_update: c,
        } = e.$$;
        s && s.m(n, r),
          o ||
            P(() => {
              const n = l.map(t).filter(i);
              u ? u.push(...n) : a(n), (e.$$.on_mount = []);
            }),
          c.forEach(P);
      }
      function A(e, t) {
        const n = e.$$;
        null !== n.fragment &&
          (a(n.on_destroy),
          n.fragment && n.fragment.d(t),
          (n.on_destroy = n.fragment = null),
          (n.ctx = []));
      }
      function O(t, n, i, o, s, l, u = [-1]) {
        const d = b;
        x(t);
        const h = (t.$$ = {
          fragment: null,
          ctx: null,
          props: l,
          update: e,
          not_equal: s,
          bound: r(),
          on_mount: [],
          on_destroy: [],
          on_disconnect: [],
          before_update: [],
          after_update: [],
          context: new Map(d ? d.$$.context : []),
          callbacks: r(),
          dirty: u,
          skip_bound: !1,
        });
        let p = !1;
        if (
          ((h.ctx = i
            ? i(t, n.props || {}, (e, n, ...r) => {
                const a = r.length ? r[0] : n;
                return (
                  h.ctx &&
                    s(h.ctx[e], (h.ctx[e] = a)) &&
                    (!h.skip_bound && h.bound[e] && h.bound[e](a),
                    p &&
                      (function (e, t) {
                        -1 === e.$$.dirty[0] &&
                          (w.push(e),
                          D || ((D = !0), S.then(B)),
                          e.$$.dirty.fill(0)),
                          (e.$$.dirty[(t / 31) | 0] |= 1 << t % 31);
                      })(t, e)),
                  n
                );
              })
            : []),
          h.update(),
          (p = !0),
          a(h.before_update),
          (h.fragment = !!o && o(h.ctx)),
          n.target)
        ) {
          if (n.hydrate) {
            const e = ((f = n.target), Array.from(f.childNodes));
            h.fragment && h.fragment.l(e), e.forEach(c);
          } else h.fragment && h.fragment.c();
          n.intro && L(t.$$.fragment),
            z(t, n.target, n.anchor, n.customElement),
            B();
        }
        var f;
        x(d);
      }
      "undefined" != typeof window
        ? window
        : "undefined" != typeof globalThis
        ? globalThis
        : global,
        new Set([
          "allowfullscreen",
          "allowpaymentrequest",
          "async",
          "autofocus",
          "autoplay",
          "checked",
          "controls",
          "default",
          "defer",
          "disabled",
          "formnovalidate",
          "hidden",
          "ismap",
          "loop",
          "multiple",
          "muted",
          "nomodule",
          "novalidate",
          "open",
          "playsinline",
          "readonly",
          "required",
          "reversed",
          "selected",
        ]),
        "function" == typeof HTMLElement &&
          (I = class extends HTMLElement {
            constructor() {
              super(), this.attachShadow({ mode: "open" });
            }
            connectedCallback() {
              const { on_mount: e } = this.$$;
              this.$$.on_disconnect = e.map(t).filter(i);
              for (const e in this.$$.slotted)
                this.appendChild(this.$$.slotted[e]);
            }
            attributeChangedCallback(e, t, n) {
              this[e] = n;
            }
            disconnectedCallback() {
              a(this.$$.on_disconnect);
            }
            $destroy() {
              A(this, 1), (this.$destroy = e);
            }
            $on(e, t) {
              const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
              return (
                n.push(t),
                () => {
                  const e = n.indexOf(t);
                  -1 !== e && n.splice(e, 1);
                }
              );
            }
            $set(e) {
              this.$$set &&
                !s(e) &&
                ((this.$$.skip_bound = !0),
                this.$$set(e),
                (this.$$.skip_bound = !1));
            }
          });
      class R {
        $destroy() {
          A(this, 1), (this.$destroy = e);
        }
        $on(e, t) {
          const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
          return (
            n.push(t),
            () => {
              const e = n.indexOf(t);
              -1 !== e && n.splice(e, 1);
            }
          );
        }
        $set(e) {
          this.$$set &&
            !s(e) &&
            ((this.$$.skip_bound = !0),
            this.$$set(e),
            (this.$$.skip_bound = !1));
        }
      }
      var V = n(58),
        F = n.n(V);
      function j(t) {
        let n,
          r,
          a,
          i,
          o,
          s = t[0].title + "";
        return {
          c() {
            (n = h("aside")),
              (r = h("div")),
              (a = p(s)),
              (i = f()),
              (o = h("div")),
              v(o, "id", "viz"),
              v(o, "class", "svelte-glgvle"),
              v(n, "class", "svelte-glgvle");
          },
          m(e, t) {
            u(e, n, t), l(n, r), l(r, a), l(n, i), l(n, o);
          },
          p(e, [t]) {
            1 & t && s !== (s = e[0].title + "") && y(a, s);
          },
          i: e,
          o: e,
          d(e) {
            e && c(n);
          },
        };
      }
      function q(e, t, n) {
        var r =
          (this && this.__awaiter) ||
          function (e, t, n, r) {
            return new (n || (n = Promise))(function (a, i) {
              function o(e) {
                try {
                  l(r.next(e));
                } catch (e) {
                  i(e);
                }
              }
              function s(e) {
                try {
                  l(r.throw(e));
                } catch (e) {
                  i(e);
                }
              }
              function l(e) {
                var t;
                e.done
                  ? a(e.value)
                  : ((t = e.value),
                    t instanceof n
                      ? t
                      : new n(function (e) {
                          e(t);
                        })).then(o, s);
              }
              l((r = r.apply(e, t || [])).next());
            });
          };
        let { quest: a } = t;
        var i;
        return (
          (i = () =>
            r(void 0, void 0, void 0, function* () {
              if (!a.states) return;
              const e = (e) => {
                  return (t = a.states.find((t) => t.name === e))
                    ? t.id
                    : void 0;
                  var t;
                },
                t = a.states
                  .map((e) =>
                    e.transitions
                      ? e
                      : Object.assign(Object.assign({}, e), { transitions: [] })
                  )
                  .reduce(
                    (t, n) => [
                      ...t,
                      { data: { id: n.id, name: n.name } },
                      ...n.transitions
                        .filter((t) => a.states.find((n) => n.id === e(t[1])))
                        .map((t, r) => ({
                          data: {
                            source: n.id,
                            target: e(t[1]),
                            id: `${n.id}-${r}`,
                            label: t[0],
                          },
                        })),
                    ],
                    []
                  ),
                n = F()({
                  container: document.getElementById("viz"),
                  elements: t,
                  style: [
                    {
                      selector: "node",
                      style: {
                        "background-color": "#EEE",
                        "border-color": "black",
                        "border-width": 1,
                        height: 20,
                        label: "data(name)",
                        width: 20,
                      },
                    },
                    {
                      selector: "edge",
                      style: {
                        "arrow-scale": 2,
                        color: "#444",
                        "curve-style": "bezier",
                        "font-size": 8,
                        "line-color": "#ccc",
                        "source-label": "data(label)",
                        "source-text-offset": 25,
                        "source-text-rotation": "autorotate",
                        "target-arrow-color": "#ccc",
                        "target-arrow-shape": "triangle",
                        "text-border-color": "#444",
                        "text-border-width": 1,
                        "text-halign": "left",
                        width: 2,
                      },
                    },
                  ],
                  layout: { name: "grid", rows: 1 },
                }),
                r = {
                  name: "cose",
                  ready() {},
                  stop() {},
                  animate: !1,
                  animationEasing: void 0,
                  animationDuration: void 0,
                  animateFilter: (e, t) => !0,
                  animationThreshold: 250,
                  refresh: 20,
                  fit: !0,
                  padding: 30,
                  boundingBox: void 0,
                  nodeDimensionsIncludeLabels: !0,
                  randomize: !1,
                  componentSpacing: 512,
                  nodeRepulsion: (e) => 32,
                  nodeOverlap: 4,
                  idealEdgeLength: (e) => 1,
                  edgeElasticity: (e) => 2048,
                  nestingFactor: 1.2,
                  gravity: 1,
                  numIter: 1e3,
                  initialTemp: 1e3,
                  coolingFactor: 0.99,
                  minTemp: 1,
                };
              n.layout(r).run(),
                n.removeAllListeners(),
                n.nodes().addListener("dragfreeon", (e) => {
                  e.stopPropagation(),
                    e.preventDefault(),
                    console.log(e, e.target === n);
                }),
                n.nodes().roots().style("background-color", "lightgreen"),
                n
                  .nodes()
                  .leaves()
                  .style({
                    "background-color": "#CCC",
                    "border-width": 2,
                    "border-style": "double",
                    "border-color": "black",
                  });
            })),
          (function () {
            if (!b)
              throw new Error(
                "Function called outside component initialization"
              );
            return b;
          })().$$.after_update.push(i),
          (e.$$set = (e) => {
            "quest" in e && n(0, (a = e.quest));
          }),
          [a]
        );
      }
      const X = class extends R {
        constructor(e) {
          super(), O(this, e, q, j, o, { quest: 0 });
        }
      };
      var Y,
        W = n(162),
        H = new Uint8Array(16);
      function $() {
        if (
          !Y &&
          !(Y =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto)))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
          );
        return Y(H);
      }
      const K = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
        G = function (e) {
          return "string" == typeof e && K.test(e);
        };
      for (var U = [], Z = 0; Z < 256; ++Z)
        U.push((Z + 256).toString(16).substr(1));
      const Q = function (e, t, n) {
        var r = (e = e || {}).random || (e.rng || $)();
        if (((r[6] = (15 & r[6]) | 64), (r[8] = (63 & r[8]) | 128), t)) {
          n = n || 0;
          for (var a = 0; a < 16; ++a) t[n + a] = r[a];
          return t;
        }
        return (function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = (
              U[e[t + 0]] +
              U[e[t + 1]] +
              U[e[t + 2]] +
              U[e[t + 3]] +
              "-" +
              U[e[t + 4]] +
              U[e[t + 5]] +
              "-" +
              U[e[t + 6]] +
              U[e[t + 7]] +
              "-" +
              U[e[t + 8]] +
              U[e[t + 9]] +
              "-" +
              U[e[t + 10]] +
              U[e[t + 11]] +
              U[e[t + 12]] +
              U[e[t + 13]] +
              U[e[t + 14]] +
              U[e[t + 15]]
            ).toLowerCase();
          if (!G(n)) throw TypeError("Stringified UUID is invalid");
          return n;
        })(r);
      };
      function J(e, t, n) {
        const r = e.slice();
        return (r[18] = t[n]), (r[19] = t), (r[20] = n), r;
      }
      function ee(e, t, n) {
        const r = e.slice();
        return (r[21] = t[n]), (r[22] = t), (r[23] = n), r;
      }
      function te(e) {
        let t,
          n,
          r,
          a,
          i = e[18].transitions,
          o = [];
        for (let t = 0; t < i.length; t += 1) o[t] = ne(ee(e, i, t));
        return {
          c() {
            (t = h("table")),
              (n = h("thead")),
              (n.innerHTML =
                "<th>This action...</th> \n                <th>...transitions to state</th> \n                <th></th>"),
              (r = f()),
              (a = h("tbody"));
            for (let e = 0; e < o.length; e += 1) o[e].c();
            v(t, "class", "svelte-1d551r0");
          },
          m(e, i) {
            u(e, t, i), l(t, n), l(t, r), l(t, a);
            for (let e = 0; e < o.length; e += 1) o[e].m(a, null);
          },
          p(e, t) {
            if (65 & t) {
              let n;
              for (i = e[18].transitions, n = 0; n < i.length; n += 1) {
                const r = ee(e, i, n);
                o[n]
                  ? o[n].p(r, t)
                  : ((o[n] = ne(r)), o[n].c(), o[n].m(a, null));
              }
              for (; n < o.length; n += 1) o[n].d(1);
              o.length = i.length;
            }
          },
          d(e) {
            e && c(t), d(o, e);
          },
        };
      }
      function ne(e) {
        let t, n, r, o, s, d, p, y, b, x, w, E;
        function k() {
          e[12].call(r, e[22], e[23]);
        }
        function C() {
          e[13].call(d, e[22], e[23]);
        }
        return {
          c() {
            (t = h("tr")),
              (n = h("td")),
              (r = h("input")),
              (o = f()),
              (s = h("td")),
              (d = h("input")),
              (p = f()),
              (y = h("td")),
              (b = h("button")),
              (b.textContent = "Remove"),
              (x = f()),
              v(r, "class", "svelte-1d551r0"),
              v(d, "class", "svelte-1d551r0"),
              v(b, "class", "svelte-1d551r0");
          },
          m(a, c) {
            u(a, t, c),
              l(t, n),
              l(n, r),
              m(r, e[21][0]),
              l(t, o),
              l(t, s),
              l(s, d),
              m(d, e[21][1]),
              l(t, p),
              l(t, y),
              l(y, b),
              l(t, x),
              w ||
                ((E = [
                  g(r, "input", k),
                  g(d, "input", C),
                  g(b, "click", function () {
                    i(e[6](e[21], e[18], e[20])) &&
                      e[6](e[21], e[18], e[20]).apply(this, arguments);
                  }),
                ]),
                (w = !0));
          },
          p(t, n) {
            (e = t),
              1 & n && r.value !== e[21][0] && m(r, e[21][0]),
              1 & n && d.value !== e[21][1] && m(d, e[21][1]);
          },
          d(e) {
            e && c(t), (w = !1), a(E);
          },
        };
      }
      function re(e) {
        let t,
          n,
          r,
          o,
          s,
          d,
          b,
          x,
          w,
          E,
          k,
          C,
          S,
          D,
          P,
          T,
          M,
          B,
          _,
          N,
          I,
          L,
          z = e[18].name + "";
        function A() {
          e[9].call(o, e[19], e[20]);
        }
        function O() {
          e[10].call(C, e[19], e[20]);
        }
        function R() {
          e[11].call(T, e[19], e[20]);
        }
        let V = !!e[18].transitions && e[18].transitions.length > 0 && te(e);
        return {
          c() {
            (t = h("li")),
              (n = h("label")),
              (r = p("State: ")),
              (o = h("input")),
              (s = f()),
              (d = h("button")),
              (b = p("Remove ")),
              (x = p(z)),
              (w = f()),
              (E = h("label")),
              (k = p("Summary:\n            ")),
              (C = h("input")),
              (S = f()),
              (D = h("label")),
              (P = p("Description:\n            ")),
              (T = h("textarea")),
              (M = f()),
              V && V.c(),
              (B = f()),
              (_ = h("button")),
              (_.textContent = "Add action"),
              (N = f()),
              v(o, "class", "svelte-1d551r0"),
              v(d, "class", "svelte-1d551r0"),
              v(n, "class", "svelte-1d551r0"),
              v(C, "class", "svelte-1d551r0"),
              v(E, "class", "svelte-1d551r0"),
              v(T, "class", "svelte-1d551r0"),
              v(D, "class", "svelte-1d551r0"),
              v(_, "class", "svelte-1d551r0"),
              v(t, "class", "state svelte-1d551r0");
          },
          m(a, c) {
            u(a, t, c),
              l(t, n),
              l(n, r),
              l(n, o),
              m(o, e[18].name),
              l(n, s),
              l(n, d),
              l(d, b),
              l(d, x),
              l(t, w),
              l(t, E),
              l(E, k),
              l(E, C),
              m(C, e[18].summary),
              l(t, S),
              l(t, D),
              l(D, P),
              l(D, T),
              m(T, e[18].description),
              l(t, M),
              V && V.m(t, null),
              l(t, B),
              l(t, _),
              l(t, N),
              I ||
                ((L = [
                  g(o, "input", A),
                  g(d, "click", function () {
                    i(e[4](e[18].id)) && e[4](e[18].id).apply(this, arguments);
                  }),
                  g(C, "input", O),
                  g(T, "input", R),
                  g(_, "click", function () {
                    i(e[5](e[18], e[20])) &&
                      e[5](e[18], e[20]).apply(this, arguments);
                  }),
                ]),
                (I = !0));
          },
          p(n, r) {
            (e = n),
              1 & r && o.value !== e[18].name && m(o, e[18].name),
              1 & r && z !== (z = e[18].name + "") && y(x, z),
              1 & r && C.value !== e[18].summary && m(C, e[18].summary),
              1 & r && m(T, e[18].description),
              e[18].transitions && e[18].transitions.length > 0
                ? V
                  ? V.p(e, r)
                  : ((V = te(e)), V.c(), V.m(t, B))
                : V && (V.d(1), (V = null));
          },
          d(e) {
            e && c(t), V && V.d(), (I = !1), a(L);
          },
        };
      }
      function ae(e) {
        let t,
          n,
          r,
          i,
          o,
          s,
          y,
          b,
          x,
          w,
          E,
          k,
          C,
          S,
          D,
          P,
          T,
          M,
          B,
          _,
          I,
          O,
          R,
          V,
          F,
          j,
          q = e[0].states,
          Y = [];
        for (let t = 0; t < q.length; t += 1) Y[t] = re(J(e, q, t));
        return (
          (R = new X({ props: { quest: e[0] } })),
          {
            c() {
              (t = h("div")),
                (n = h("main")),
                (r = h("label")),
                (i = p("Import:\n      ")),
                (o = h("input")),
                (s = f()),
                (y = h("label")),
                (b = p("Title: ")),
                (x = h("input")),
                (w = f()),
                (E = h("label")),
                (k = p("Description: ")),
                (C = h("textarea")),
                (S = f()),
                (D = h("ul"));
              for (let e = 0; e < Y.length; e += 1) Y[e].c();
              var e;
              (P = f()),
                (T = h("button")),
                (T.textContent = "Add State"),
                (M = f()),
                (B = h("label")),
                (_ = p("Export: ")),
                (I = h("button")),
                (I.textContent = "Choose download location"),
                (O = f()),
                (e = R.$$.fragment) && e.c(),
                v(o, "type", "file"),
                v(o, "class", "svelte-1d551r0"),
                v(r, "class", "svelte-1d551r0"),
                v(x, "class", "svelte-1d551r0"),
                v(y, "class", "svelte-1d551r0"),
                v(C, "class", "svelte-1d551r0"),
                v(E, "class", "svelte-1d551r0"),
                v(T, "class", "svelte-1d551r0"),
                v(I, "class", "svelte-1d551r0"),
                v(B, "class", "svelte-1d551r0"),
                v(n, "class", "svelte-1d551r0"),
                v(t, "class", "container svelte-1d551r0");
            },
            m(a, c) {
              u(a, t, c),
                l(t, n),
                l(n, r),
                l(r, i),
                l(r, o),
                l(n, s),
                l(n, y),
                l(y, b),
                l(y, x),
                m(x, e[0].title),
                l(n, w),
                l(n, E),
                l(E, k),
                l(E, C),
                m(C, e[0].description),
                l(n, S),
                l(n, D);
              for (let e = 0; e < Y.length; e += 1) Y[e].m(D, null);
              l(n, P),
                l(n, T),
                l(n, M),
                l(n, B),
                l(B, _),
                l(B, I),
                l(t, O),
                z(R, t, null),
                (V = !0),
                F ||
                  ((j = [
                    g(o, "change", e[2]),
                    g(x, "input", e[7]),
                    g(C, "input", e[8]),
                    g(T, "click", e[3]),
                    g(I, "click", e[1]),
                  ]),
                  (F = !0));
            },
            p(e, [t]) {
              if (
                (1 & t && x.value !== e[0].title && m(x, e[0].title),
                1 & t && m(C, e[0].description),
                113 & t)
              ) {
                let n;
                for (q = e[0].states, n = 0; n < q.length; n += 1) {
                  const r = J(e, q, n);
                  Y[n]
                    ? Y[n].p(r, t)
                    : ((Y[n] = re(r)), Y[n].c(), Y[n].m(D, null));
                }
                for (; n < Y.length; n += 1) Y[n].d(1);
                Y.length = q.length;
              }
              const n = {};
              1 & t && (n.quest = e[0]), R.$set(n);
            },
            i(e) {
              V || (L(R.$$.fragment, e), (V = !0));
            },
            o(e) {
              (function (e, t, n, r) {
                if (e && e.o) {
                  if (N.has(e)) return;
                  N.add(e),
                    (void 0).c.push(() => {
                      N.delete(e), r && (n && e.d(1), r());
                    }),
                    e.o(t);
                }
              })(R.$$.fragment, e),
                (V = !1);
            },
            d(e) {
              e && c(t), d(Y, e), A(R), (F = !1), a(j);
            },
          }
        );
      }
      function ie(e, t, n) {
        let r = {
          title: "",
          description: "",
          states: [
            {
              id: Q(),
              name: "started",
              summary: "Inciting incident",
              description: "",
            },
          ],
        };
        return [
          r,
          (e) => {
            const t = r,
              n = new Blob([JSON.stringify(t)], { type: "application/json" });
            var a;
            (0, W.saveAs)(
              n,
              `${
                ((a = r.title),
                a.replace(/[^\u0000-\u007F]+/, "").replace(/\s+/g, ""))
              }.json`
            );
          },
          (e) => {
            const t = e.target.files[0],
              a = new FileReader();
            (a.onload = (e) => {
              return (t = e.target.result), n(0, (r = JSON.parse(t)));
              var t;
            }),
              a.readAsText(t);
          },
          (e) => {
            const t = {
              id: Q(),
              name: `state-${r.states.length}`,
              summary: "",
              description: "",
            };
            n(
              0,
              (r = Object.assign(Object.assign({}, r), {
                states: [...r.states, t],
              }))
            );
          },
          (e) => (t) =>
            n(
              0,
              (r = Object.assign(Object.assign({}, r), {
                states: r.states.filter((t) => t.id !== e),
              }))
            ),
          (e, t) => () => {
            e.transitions ||
              (e = Object.assign(Object.assign({}, e), { transitions: [] }));
            const a = [`action-${e.transitions.length}`, e.name],
              i = Object.assign(Object.assign({}, e), {
                transitions: [...e.transitions, a],
              });
            n(
              0,
              (r = Object.assign(Object.assign({}, r), {
                states: r.states.map((e, n) => (n === t ? i : e)),
              }))
            );
          },
          (e, t, a) => () => {
            const i = t.transitions.filter(
                (t) => !(t[0] === e[0] && t[1] === e[1])
              ),
              o = Object.assign(Object.assign({}, t), { transitions: i });
            n(
              0,
              (r = Object.assign(Object.assign({}, r), {
                states: r.states.map((e, t) => (t === a ? o : e)),
              }))
            );
          },
          function () {
            (r.title = this.value), n(0, r);
          },
          function () {
            (r.description = this.value), n(0, r);
          },
          function (e, t) {
            (e[t].name = this.value), n(0, r);
          },
          function (e, t) {
            (e[t].summary = this.value), n(0, r);
          },
          function (e, t) {
            (e[t].description = this.value), n(0, r);
          },
          function (e, t) {
            (e[t][0] = this.value), n(0, r);
          },
          function (e, t) {
            (e[t][1] = this.value), n(0, r);
          },
        ];
      }
      new (class extends R {
        constructor(e) {
          super(), O(this, e, ie, ae, o, {});
        }
      })({ target: document.body });
    })();
})();
