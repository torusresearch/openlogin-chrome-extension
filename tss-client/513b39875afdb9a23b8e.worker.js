/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 400:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(425);

/*! For license information please see dkls.min.js.LICENSE.txt */
!function (t, n) {
  "object" == ( false ? 0 : _typeof(exports)) && "object" == ( false ? 0 : _typeof(module)) ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
}(self, function () {
  return function () {
    var t = {
      609: function _(t, n, e) {
        var r = e(425).default;

        function o() {
          "use strict";

          t.exports = o = function o() {
            return n;
          }, t.exports.__esModule = !0, t.exports.default = t.exports;

          var n = {},
              e = Object.prototype,
              i = e.hasOwnProperty,
              a = "function" == typeof Symbol ? Symbol : {},
              c = a.iterator || "@@iterator",
              _ = a.asyncIterator || "@@asyncIterator",
              u = a.toStringTag || "@@toStringTag";

          function f(t, n, e) {
            return Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }), t[n];
          }

          try {
            f({}, "");
          } catch (t) {
            f = function f(t, n, e) {
              return t[n] = e;
            };
          }

          function l(t, n, e, r) {
            var o = n && n.prototype instanceof g ? n : g,
                i = Object.create(o.prototype),
                a = new L(r || []);
            return i._invoke = function (t, n, e) {
              var r = "suspendedStart";
              return function (o, i) {
                if ("executing" === r) throw new Error("Generator is already running");

                if ("completed" === r) {
                  if ("throw" === o) throw i;
                  return {
                    value: void 0,
                    done: !0
                  };
                }

                for (e.method = o, e.arg = i;;) {
                  var a = e.delegate;

                  if (a) {
                    var c = k(a, e);

                    if (c) {
                      if (c === b) continue;
                      return c;
                    }
                  }

                  if ("next" === e.method) e.sent = e._sent = e.arg;else if ("throw" === e.method) {
                    if ("suspendedStart" === r) throw r = "completed", e.arg;
                    e.dispatchException(e.arg);
                  } else "return" === e.method && e.abrupt("return", e.arg);
                  r = "executing";

                  var _ = s(t, n, e);

                  if ("normal" === _.type) {
                    if (r = e.done ? "completed" : "suspendedYield", _.arg === b) continue;
                    return {
                      value: _.arg,
                      done: e.done
                    };
                  }

                  "throw" === _.type && (r = "completed", e.method = "throw", e.arg = _.arg);
                }
              };
            }(t, e, a), i;
          }

          function s(t, n, e) {
            try {
              return {
                type: "normal",
                arg: t.call(n, e)
              };
            } catch (t) {
              return {
                type: "throw",
                arg: t
              };
            }
          }

          n.wrap = l;
          var b = {};

          function g() {}

          function d() {}

          function w() {}

          var y = {};
          f(y, c, function () {
            return this;
          });
          var p = Object.getPrototypeOf,
              h = p && p(p(S([])));
          h && h !== e && i.call(h, c) && (y = h);
          var v = w.prototype = g.prototype = Object.create(y);

          function m(t) {
            ["next", "throw", "return"].forEach(function (n) {
              f(t, n, function (t) {
                return this._invoke(n, t);
              });
            });
          }

          function x(t, n) {
            function e(o, a, c, _) {
              var u = s(t[o], t, a);

              if ("throw" !== u.type) {
                var f = u.arg,
                    l = f.value;
                return l && "object" == r(l) && i.call(l, "__await") ? n.resolve(l.__await).then(function (t) {
                  e("next", t, c, _);
                }, function (t) {
                  e("throw", t, c, _);
                }) : n.resolve(l).then(function (t) {
                  f.value = t, c(f);
                }, function (t) {
                  return e("throw", t, c, _);
                });
              }

              _(u.arg);
            }

            var o;

            this._invoke = function (t, r) {
              function i() {
                return new n(function (n, o) {
                  e(t, r, n, o);
                });
              }

              return o = o ? o.then(i, i) : i();
            };
          }

          function k(t, n) {
            var e = t.iterator[n.method];

            if (void 0 === e) {
              if (n.delegate = null, "throw" === n.method) {
                if (t.iterator.return && (n.method = "return", n.arg = void 0, k(t, n), "throw" === n.method)) return b;
                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method");
              }

              return b;
            }

            var r = s(e, t.iterator, n.arg);
            if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, b;
            var o = r.arg;
            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, b) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, b);
          }

          function j(t) {
            var n = {
              tryLoc: t[0]
            };
            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);
          }

          function E(t) {
            var n = t.completion || {};
            n.type = "normal", delete n.arg, t.completion = n;
          }

          function L(t) {
            this.tryEntries = [{
              tryLoc: "root"
            }], t.forEach(j, this), this.reset(!0);
          }

          function S(t) {
            if (t) {
              var n = t[c];
              if (n) return n.call(t);
              if ("function" == typeof t.next) return t;

              if (!isNaN(t.length)) {
                var e = -1,
                    r = function n() {
                  for (; ++e < t.length;) {
                    if (i.call(t, e)) return n.value = t[e], n.done = !1, n;
                  }

                  return n.value = void 0, n.done = !0, n;
                };

                return r.next = r;
              }
            }

            return {
              next: A
            };
          }

          function A() {
            return {
              value: void 0,
              done: !0
            };
          }

          return d.prototype = w, f(v, "constructor", w), f(w, "constructor", d), d.displayName = f(w, u, "GeneratorFunction"), n.isGeneratorFunction = function (t) {
            var n = "function" == typeof t && t.constructor;
            return !!n && (n === d || "GeneratorFunction" === (n.displayName || n.name));
          }, n.mark = function (t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, f(t, u, "GeneratorFunction")), t.prototype = Object.create(v), t;
          }, n.awrap = function (t) {
            return {
              __await: t
            };
          }, m(x.prototype), f(x.prototype, _, function () {
            return this;
          }), n.AsyncIterator = x, n.async = function (t, e, r, o, i) {
            void 0 === i && (i = Promise);
            var a = new x(l(t, e, r, o), i);
            return n.isGeneratorFunction(e) ? a : a.next().then(function (t) {
              return t.done ? t.value : a.next();
            });
          }, m(v), f(v, u, "Generator"), f(v, c, function () {
            return this;
          }), f(v, "toString", function () {
            return "[object Generator]";
          }), n.keys = function (t) {
            var n = [];

            for (var e in t) {
              n.push(e);
            }

            return n.reverse(), function e() {
              for (; n.length;) {
                var r = n.pop();
                if (r in t) return e.value = r, e.done = !1, e;
              }

              return e.done = !0, e;
            };
          }, n.values = S, L.prototype = {
            constructor: L,
            reset: function reset(t) {
              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t) for (var n in this) {
                "t" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0);
              }
            },
            stop: function stop() {
              this.done = !0;
              var t = this.tryEntries[0].completion;
              if ("throw" === t.type) throw t.arg;
              return this.rval;
            },
            dispatchException: function dispatchException(t) {
              if (this.done) throw t;
              var n = this;

              function e(e, r) {
                return a.type = "throw", a.arg = t, n.next = e, r && (n.method = "next", n.arg = void 0), !!r;
              }

              for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                var o = this.tryEntries[r],
                    a = o.completion;
                if ("root" === o.tryLoc) return e("end");

                if (o.tryLoc <= this.prev) {
                  var c = i.call(o, "catchLoc"),
                      _ = i.call(o, "finallyLoc");

                  if (c && _) {
                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                  } else if (c) {
                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                  } else {
                    if (!_) throw new Error("try statement without catch or finally");
                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);
                  }
                }
              }
            },
            abrupt: function abrupt(t, n) {
              for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                var r = this.tryEntries[e];

                if (r.tryLoc <= this.prev && i.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                  var o = r;
                  break;
                }
              }

              o && ("break" === t || "continue" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);
              var a = o ? o.completion : {};
              return a.type = t, a.arg = n, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(a);
            },
            complete: function complete(t, n) {
              if ("throw" === t.type) throw t.arg;
              return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && n && (this.next = n), b;
            },
            finish: function finish(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];
                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), b;
              }
            },
            catch: function _catch(t) {
              for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                var e = this.tryEntries[n];

                if (e.tryLoc === t) {
                  var r = e.completion;

                  if ("throw" === r.type) {
                    var o = r.arg;
                    E(e);
                  }

                  return o;
                }
              }

              throw new Error("illegal catch attempt");
            },
            delegateYield: function delegateYield(t, n, e) {
              return this.delegate = {
                iterator: S(t),
                resultName: n,
                nextLoc: e
              }, "next" === this.method && (this.arg = void 0), b;
            }
          }, n;
        }

        t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports;
      },
      425: function _(t) {
        function n(e) {
          return t.exports = n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
            return _typeof(t);
          } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
          }, t.exports.__esModule = !0, t.exports.default = t.exports, n(e);
        }

        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;
      },
      841: function _(t, n, e) {
        var r = e(609)();
        t.exports = r;

        try {
          regeneratorRuntime = r;
        } catch (t) {
          "object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r);
        }
      }
    },
        n = {};

    function e(r) {
      var o = n[r];
      if (void 0 !== o) return o.exports;
      var i = n[r] = {
        exports: {}
      };
      return t[r](i, i.exports, e), i.exports;
    }

    e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, {
        a: n
      }), n;
    }, e.d = function (t, n) {
      for (var r in n) {
        e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
          enumerable: !0,
          get: n[r]
        });
      }
    }, e.g = function () {
      if ("object" == (typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis))) return globalThis;

      try {
        return this || new Function("return this")();
      } catch (t) {
        if ("object" == (typeof window === "undefined" ? "undefined" : _typeof(window))) return window;
      }
    }(), e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    };
    var r = {};
    return function () {
      "use strict";

      function t(t, n, e, r, o, i, a) {
        try {
          var c = t[i](a),
              _ = c.value;
        } catch (t) {
          return void e(t);
        }

        c.done ? n(_) : Promise.resolve(_).then(r, o);
      }

      function n(n) {
        return function () {
          var e = this,
              r = arguments;
          return new Promise(function (o, i) {
            var a = n.apply(e, r);

            function c(n) {
              t(a, o, i, c, _, "next", n);
            }

            function _(n) {
              t(a, o, i, c, _, "throw", n);
            }

            c(void 0);
          });
        };
      }

      function o(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
        }
      }

      function i(t) {
        return i = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (t) {
          return _typeof(t);
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : _typeof(t);
        }, i(t);
      }

      e.r(r), e.d(r, {
        WasmBindgenTestContext: function WasmBindgenTestContext() {
          return K;
        },
        __wbgtest_console_debug: function __wbgtest_console_debug() {
          return Y;
        },
        __wbgtest_console_error: function __wbgtest_console_error() {
          return H;
        },
        __wbgtest_console_info: function __wbgtest_console_info() {
          return D;
        },
        __wbgtest_console_log: function __wbgtest_console_log() {
          return z;
        },
        __wbgtest_console_warn: function __wbgtest_console_warn() {
          return J;
        },
        batch_size: function batch_size() {
          return S;
        },
        default: function _default() {
          return et;
        },
        finalizeInit: function finalizeInit() {
          return Z;
        },
        getImports: function getImports() {
          return X;
        },
        get_r_from_precompute: function get_r_from_precompute() {
          return W;
        },
        initSync: function initSync() {
          return $;
        },
        local_sign: function local_sign() {
          return F;
        },
        local_verify: function local_verify() {
          return U;
        },
        precompute: function precompute() {
          return M;
        },
        process_ga1: function process_ga1() {
          return L;
        },
        random_generator: function random_generator() {
          return A;
        },
        random_generator_free: function random_generator_free() {
          return O;
        },
        setup: function setup() {
          return P;
        },
        sign: function sign() {
          return G;
        },
        threshold_signer: function threshold_signer() {
          return T;
        },
        threshold_signer_free: function threshold_signer_free() {
          return I;
        }
      });

      var a,
          c = e(841),
          _ = e.n(c),
          u = new Array(32).fill(void 0);

      function f(t) {
        return u[t];
      }

      u.push(void 0, null, !0, !1);
      var l = u.length;

      function s(t) {
        var n = f(t);
        return function (t) {
          t < 36 || (u[t] = l, l = t);
        }(t), n;
      }

      var b = new TextDecoder("utf-8", {
        ignoreBOM: !0,
        fatal: !0
      });
      b.decode();
      var g = new Uint8Array();

      function d() {
        return 0 === g.byteLength && (g = new Uint8Array(a.memory.buffer)), g;
      }

      function w(t, n) {
        return b.decode(d().subarray(t, t + n));
      }

      function y(t) {
        l === u.length && u.push(u.length + 1);
        var n = l;
        return l = u[n], u[n] = t, n;
      }

      var p = 0,
          h = new TextEncoder("utf-8"),
          v = "function" == typeof h.encodeInto ? function (t, n) {
        return h.encodeInto(t, n);
      } : function (t, n) {
        var e = h.encode(t);
        return n.set(e), {
          read: t.length,
          written: e.length
        };
      };

      function m(t, n, e) {
        if (void 0 === e) {
          var r = h.encode(t),
              o = n(r.length);
          return d().subarray(o, o + r.length).set(r), p = r.length, o;
        }

        for (var i = t.length, a = n(i), c = d(), _ = 0; _ < i; _++) {
          var u = t.charCodeAt(_);
          if (u > 127) break;
          c[a + _] = u;
        }

        if (_ !== i) {
          0 !== _ && (t = t.slice(_)), a = e(a, i, i = _ + 3 * t.length);
          var f = d().subarray(a + _, a + i);
          _ += v(t, f).written;
        }

        return p = _, a;
      }

      var x = new Int32Array();

      function k() {
        return 0 === x.byteLength && (x = new Int32Array(a.memory.buffer)), x;
      }

      function j(t) {
        var n = i(t);
        if ("number" == n || "boolean" == n || null == t) return "".concat(t);
        if ("string" == n) return '"'.concat(t, '"');

        if ("symbol" == n) {
          var e = t.description;
          return null == e ? "Symbol" : "Symbol(".concat(e, ")");
        }

        if ("function" == n) {
          var r = t.name;
          return "string" == typeof r && r.length > 0 ? "Function(".concat(r, ")") : "Function";
        }

        if (Array.isArray(t)) {
          var o = t.length,
              a = "[";
          o > 0 && (a += j(t[0]));

          for (var c = 1; c < o; c++) {
            a += ", " + j(t[c]);
          }

          return a + "]";
        }

        var _,
            u = /\[object ([^\]]+)\]/.exec(toString.call(t));

        if (!(u.length > 1)) return toString.call(t);
        if ("Object" == (_ = u[1])) try {
          return "Object(" + JSON.stringify(t) + ")";
        } catch (t) {
          return "Object";
        }
        return t instanceof Error ? "".concat(t.name, ": ").concat(t.message, "\n").concat(t.stack) : _;
      }

      function E(t, n, e) {
        a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha0b01688533da445(t, n, y(e));
      }

      function L(t) {
        try {
          var n = a.__wbindgen_add_to_stack_pointer(-16),
              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;

          a.process_ga1(n, e, r);
          var o = k()[n / 4 + 0],
              i = k()[n / 4 + 1],
              c = k()[n / 4 + 2],
              _ = k()[n / 4 + 3],
              u = o,
              f = i;
          if (_) throw u = 0, f = 0, s(c);
          return w(u, f);
        } finally {
          a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(u, f);
        }
      }

      function S() {
        return a.batch_size() >>> 0;
      }

      function A(t) {
        try {
          var n = a.__wbindgen_add_to_stack_pointer(-16),
              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;

          a.random_generator(n, e, r);
          var o = k()[n / 4 + 0],
              i = k()[n / 4 + 1];
          if (k()[n / 4 + 2]) throw s(i);
          return o;
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }

      function O(t) {
        a.random_generator_free(t);
      }

      function T(t, n, e, r, o, i) {
        try {
          var c = a.__wbindgen_add_to_stack_pointer(-16),
              _ = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
              u = p,
              f = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),
              l = p,
              b = m(i, a.__wbindgen_malloc, a.__wbindgen_realloc),
              g = p;

          a.threshold_signer(c, _, u, n, e, r, f, l, b, g);
          var d = k()[c / 4 + 0],
              w = k()[c / 4 + 1];
          if (k()[c / 4 + 2]) throw s(w);
          return d;
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }

      function I(t) {
        a.threshold_signer_free(t);
      }

      function P(t, n) {
        return s(a.setup(t, n));
      }

      function M(t, n, e) {
        return s(a.precompute(y(t), n, e));
      }

      function F(t, n, e) {
        try {
          var r = a.__wbindgen_add_to_stack_pointer(-16),
              o = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
              i = p;

          a.local_sign(r, o, i, n, y(e));
          var c = k()[r / 4 + 0],
              _ = k()[r / 4 + 1];
          if (k()[r / 4 + 2]) throw s(_);
          return s(c);
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }

      function W(t) {
        try {
          var n = a.__wbindgen_add_to_stack_pointer(-16);

          a.get_r_from_precompute(n, y(t));
          var e = k()[n / 4 + 0],
              r = k()[n / 4 + 1];
          if (k()[n / 4 + 2]) throw s(r);
          return s(e);
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }

      var R = new Uint32Array();

      function N(t, n) {
        for (var e = n(4 * t.length), r = (0 === R.byteLength && (R = new Uint32Array(a.memory.buffer)), R), o = 0; o < t.length; o++) {
          r[e / 4 + o] = y(t[o]);
        }

        return p = t.length, e;
      }

      function U(t, n, e, r, o) {
        try {
          var i = a.__wbindgen_add_to_stack_pointer(-16),
              c = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),
              _ = p,
              u = N(r, a.__wbindgen_malloc),
              f = p,
              l = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),
              b = p;

          a.local_verify(i, c, _, n, y(e), u, f, l, b);
          var g = k()[i / 4 + 0],
              d = k()[i / 4 + 1];
          if (k()[i / 4 + 2]) throw s(d);
          return s(g);
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }

      function G(t, n, e, r, o) {
        var i = m(n, a.__wbindgen_malloc, a.__wbindgen_realloc),
            c = p;
        return s(a.sign(y(t), i, c, e, r, o));
      }

      function C(t, n) {
        try {
          return t.apply(this, n);
        } catch (t) {
          a.__wbindgen_exn_store(y(t));
        }
      }

      var B = 32;

      function q(t) {
        if (1 == B) throw new Error("out of js stack");
        return u[--B] = t, B;
      }

      function z(t) {
        try {
          a.__wbgtest_console_log(q(t));
        } finally {
          u[B++] = void 0;
        }
      }

      function Y(t) {
        try {
          a.__wbgtest_console_debug(q(t));
        } finally {
          u[B++] = void 0;
        }
      }

      function D(t) {
        try {
          a.__wbgtest_console_info(q(t));
        } finally {
          u[B++] = void 0;
        }
      }

      function J(t) {
        try {
          a.__wbgtest_console_warn(q(t));
        } finally {
          u[B++] = void 0;
        }
      }

      function H(t) {
        try {
          a.__wbgtest_console_error(q(t));
        } finally {
          u[B++] = void 0;
        }
      }

      var K = function () {
        function t() {
          !function (t, n) {
            if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
          }(this, t);
          var n = a.wasmbindgentestcontext_new();
          return t.__wrap(n);
        }

        var n, e, r;
        return n = t, r = [{
          key: "__wrap",
          value: function value(n) {
            var e = Object.create(t.prototype);
            return e.ptr = n, e;
          }
        }], (e = [{
          key: "__destroy_into_raw",
          value: function value() {
            var t = this.ptr;
            return this.ptr = 0, t;
          }
        }, {
          key: "free",
          value: function value() {
            var t = this.__destroy_into_raw();

            a.__wbg_wasmbindgentestcontext_free(t);
          }
        }, {
          key: "args",
          value: function value(t) {
            var n = N(t, a.__wbindgen_malloc),
                e = p;
            a.wasmbindgentestcontext_args(this.ptr, n, e);
          }
        }, {
          key: "run",
          value: function value(t) {
            var n = N(t, a.__wbindgen_malloc),
                e = p;
            return s(a.wasmbindgentestcontext_run(this.ptr, n, e));
          }
        }]) && o(n.prototype, e), r && o(n, r), Object.defineProperty(n, "prototype", {
          writable: !1
        }), t;
      }();

      function Q(t, n) {
        return V.apply(this, arguments);
      }

      function V() {
        return (V = n(_().mark(function t(n, e) {
          var r, o;
          return _().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (!("function" == typeof Response && n instanceof Response)) {
                    t.next = 23;
                    break;
                  }

                  if ("function" != typeof WebAssembly.instantiateStreaming) {
                    t.next = 15;
                    break;
                  }

                  return t.prev = 2, t.next = 5, WebAssembly.instantiateStreaming(n, e);

                case 5:
                case 20:
                  return t.abrupt("return", t.sent);

                case 8:
                  if (t.prev = 8, t.t0 = t.catch(2), "application/wasm" == n.headers.get("Content-Type")) {
                    t.next = 14;
                    break;
                  }

                  console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t.t0), t.next = 15;
                  break;

                case 14:
                  throw t.t0;

                case 15:
                  return t.next = 17, n.arrayBuffer();

                case 17:
                  return r = t.sent, t.next = 20, WebAssembly.instantiate(r, e);

                case 23:
                  return t.next = 25, WebAssembly.instantiate(n, e);

                case 25:
                  if (!((o = t.sent) instanceof WebAssembly.Instance)) {
                    t.next = 30;
                    break;
                  }

                  return t.abrupt("return", {
                    instance: o,
                    module: n
                  });

                case 30:
                  return t.abrupt("return", o);

                case 31:
                case "end":
                  return t.stop();
              }
            }
          }, t, null, [[2, 8]]);
        }))).apply(this, arguments);
      }

      function X() {
        var t = {
          wbg: {}
        };
        return t.wbg.__wbindgen_object_drop_ref = function (t) {
          s(t);
        }, t.wbg.__wbindgen_cb_drop = function (t) {
          var n = s(t).original;
          return 1 == n.cnt-- && (n.a = 0, !0);
        }, t.wbg.__wbg_jssendmsg_72dd946a7fbc8ccd = function (t, n, e, r, o, i, c, _) {
          try {
            return y(js_send_msg(w(t, n), e >>> 0, r >>> 0, w(o, i), w(c, _)));
          } finally {
            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i), a.__wbindgen_free(c, _);
          }
        }, t.wbg.__wbindgen_is_falsy = function (t) {
          return !f(t);
        }, t.wbg.__wbindgen_string_new = function (t, n) {
          return y(w(t, n));
        }, t.wbg.__wbindgen_bigint_new = function (t, n) {
          return y(BigInt(w(t, n)));
        }, t.wbg.__wbg_jsreadmsg_8a12f6e25645f453 = function (t, n, e, r, o, i) {
          try {
            return y(js_read_msg(w(t, n), e >>> 0, r >>> 0, w(o, i)));
          } finally {
            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i);
          }
        }, t.wbg.__wbindgen_string_get = function (t, n) {
          var e = f(n),
              r = "string" == typeof e ? e : void 0,
              o = null == r ? 0 : m(r, a.__wbindgen_malloc, a.__wbindgen_realloc),
              i = p;
          k()[t / 4 + 1] = i, k()[t / 4 + 0] = o;
        }, t.wbg.__wbindgen_number_new = function (t) {
          return y(t);
        }, t.wbg.__wbg_newnoargs_971e9a5abe185139 = function (t, n) {
          return y(new Function(w(t, n)));
        }, t.wbg.__wbg_call_33d7bcddbbfa394a = function () {
          return C(function (t, n) {
            return y(f(t).call(f(n)));
          }, arguments);
        }, t.wbg.__wbindgen_object_clone_ref = function (t) {
          return y(f(t));
        }, t.wbg.__wbg_self_fd00a1ef86d1b2ed = function () {
          return C(function () {
            return y(self.self);
          }, arguments);
        }, t.wbg.__wbg_window_6f6e346d8bbd61d7 = function () {
          return C(function () {
            return y(window.window);
          }, arguments);
        }, t.wbg.__wbg_globalThis_3348936ac49df00a = function () {
          return C(function () {
            return y(globalThis.globalThis);
          }, arguments);
        }, t.wbg.__wbg_global_67175caf56f55ca9 = function () {
          return C(function () {
            return y(e.g.global);
          }, arguments);
        }, t.wbg.__wbindgen_is_undefined = function (t) {
          return void 0 === f(t);
        }, t.wbg.__wbg_forEach_49bfa6f148ac0f7d = function (t, n, e) {
          try {
            var r = {
              a: n,
              b: e
            };
            f(t).forEach(function (t, n, e) {
              var o = r.a;
              r.a = 0;

              try {
                return function (t, n, e, r, o) {
                  a.wasm_bindgen__convert__closures__invoke3_mut__h1481b0b3a4794987(t, n, y(e), r, y(o));
                }(o, r.b, t, n, e);
              } finally {
                r.a = o;
              }
            });
          } finally {
            r.a = r.b = 0;
          }
        }, t.wbg.__wbg_message_924b46658b69b295 = function (t) {
          return y(f(t).message);
        }, t.wbg.__wbg_name_e88a3b3a0f6b23c2 = function (t) {
          return y(f(t).name);
        }, t.wbg.__wbg_call_65af9f665ab6ade5 = function () {
          return C(function (t, n, e) {
            return y(f(t).call(f(n), f(e)));
          }, arguments);
        }, t.wbg.__wbg_new_52205195aa880fc2 = function (t, n) {
          try {
            var e = {
              a: t,
              b: n
            },
                r = new Promise(function (t, n) {
              var r = e.a;
              e.a = 0;

              try {
                return function (t, n, e, r) {
                  a.wasm_bindgen__convert__closures__invoke2_mut__h31f9dc4b753d7d17(t, n, y(e), y(r));
                }(r, e.b, t, n);
              } finally {
                e.a = r;
              }
            });
            return y(r);
          } finally {
            e.a = e.b = 0;
          }
        }, t.wbg.__wbg_resolve_0107b3a501450ba0 = function (t) {
          return y(Promise.resolve(f(t)));
        }, t.wbg.__wbg_then_18da6e5453572fc8 = function (t, n) {
          return y(f(t).then(f(n)));
        }, t.wbg.__wbg_then_e5489f796341454b = function (t, n, e) {
          return y(f(t).then(f(n), f(e)));
        }, t.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function (t) {
          return y(f(t).buffer);
        }, t.wbg.__wbg_new_cda198d9dbc6d7ea = function (t) {
          return y(new Uint8Array(f(t)));
        }, t.wbg.__wbg_set_1a930cfcda1a8067 = function (t, n, e) {
          f(t).set(f(n), e >>> 0);
        }, t.wbg.__wbg_length_51f19f73d6d9eff3 = function (t) {
          return f(t).length;
        }, t.wbg.__wbindgen_debug_string = function (t, n) {
          var e = m(j(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;
          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;
        }, t.wbg.__wbindgen_throw = function (t, n) {
          throw new Error(w(t, n));
        }, t.wbg.__wbindgen_memory = function () {
          return y(a.memory);
        }, t.wbg.__wbg_log_d4cf02b84d94d5cc = function (t, n) {
          console.log(w(t, n));
        }, t.wbg.__wbg_String_1e50b0ad2927b74c = function (t, n) {
          var e = m(String(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;
          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;
        }, t.wbg.__wbg_new_693216e109162396 = function () {
          return y(new Error());
        }, t.wbg.__wbg_stack_0ddaca5d1abfb52f = function (t, n) {
          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;
          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;
        }, t.wbg.__wbg_error_09919627ac0992f5 = function (t, n) {
          try {
            console.error(w(t, n));
          } finally {
            a.__wbindgen_free(t, n);
          }
        }, t.wbg.__wbg_static_accessor_document_57521ac637ea23b1 = function () {
          return y(document);
        }, t.wbg.__wbg_self_331f85453774af9f = function (t) {
          return y(f(t).self);
        }, t.wbg.__wbindgen_jsval_eq = function (t, n) {
          return f(t) === f(n);
        }, t.wbg.__wbg_getElementById_9ef7f5a90430a467 = function (t, n, e) {
          return y(f(t).getElementById(w(n, e)));
        }, t.wbg.__wbg_settextcontent_2e10a7628cf8a079 = function (t, n, e) {
          f(t).textContent = w(n, e);
        }, t.wbg.__wbg_textcontent_2eda1e93d7676aaa = function (t, n) {
          var e = m(f(n).textContent, a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;
          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;
        }, t.wbg.__wbg_stack_c674c54b561c0712 = function (t) {
          return y(f(t).stack);
        }, t.wbg.__wbg_stack_41a23a715c0aee96 = function (t, n) {
          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),
              r = p;
          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;
        }, t.wbg.__wbindgen_closure_wrapper519 = function (t, n, e) {
          var r = function (t, n, e, r) {
            var o = {
              a: t,
              b: n,
              cnt: 1,
              dtor: 111
            },
                i = function i() {
              o.cnt++;
              var t = o.a;
              o.a = 0;

              try {
                for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++) {
                  e[i] = arguments[i];
                }

                return r.apply(void 0, [t, o.b].concat(e));
              } finally {
                0 == --o.cnt ? a.__wbindgen_export_2.get(o.dtor)(t, o.b) : o.a = t;
              }
            };

            return i.original = o, i;
          }(t, n, 0, E);

          return y(r);
        }, t;
      }

      function Z(t, n) {
        return a = t.exports, tt.__wbindgen_wasm_module = n, x = new Int32Array(), R = new Uint32Array(), g = new Uint8Array(), a;
      }

      function $(t) {
        var n = X();
        return t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t)), Z(new WebAssembly.Instance(t, n), t);
      }

      function tt(t) {
        return nt.apply(this, arguments);
      }

      function nt() {
        return (nt = n(_().mark(function t(n) {
          var e, r, o, i;
          return _().wrap(function (t) {
            for (;;) {
              switch (t.prev = t.next) {
                case 0:
                  if (void 0 !== n) {
                    t.next = 2;
                    break;
                  }

                  throw new Error("no");

                case 2:
                  return e = X(), ("string" == typeof n || "function" == typeof Request && n instanceof Request || "function" == typeof URL && n instanceof URL) && (n = fetch(n)), t.t0 = Q, t.next = 8, n;

                case 8:
                  return t.t1 = t.sent, t.t2 = e, t.next = 12, (0, t.t0)(t.t1, t.t2);

                case 12:
                  return r = t.sent, o = r.instance, i = r.module, t.abrupt("return", Z(o, i));

                case 16:
                case "end":
                  return t.stop();
              }
            }
          }, t);
        }))).apply(this, arguments);
      }

      var et = tt;
    }(), r;
  }();
});

/***/ }),

/***/ 609:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(425)["default"]);

function _regeneratorRuntime() {
  "use strict";
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */

  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");

        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }

        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;

          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);

            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }

          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);

          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }

          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;

    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 425:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 841:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(609)();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "instantiate": () => (/* binding */ instantiate),
  "takeAction": () => (/* binding */ takeAction)
});

;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// EXTERNAL MODULE: ../../node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(841);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);
// EXTERNAL MODULE: ../tss-lib/dist/dkls.min.js
var dkls_min = __webpack_require__(400);
var dkls_min_default = /*#__PURE__*/__webpack_require__.n(dkls_min);
;// CONCATENATED MODULE: ../../node_modules/workerize-loader/dist/rpc-worker-loader.js!../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/worker/worker.js




var instantiate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(wasmFileUrl) {
    return regenerator_default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return dkls_min_default()(wasmFileUrl);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function instantiate(_x) {
    return _ref.apply(this, arguments);
  };
}();
var takeAction = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(method, args) {
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", dkls_min[method].apply(dkls_min, _toConsumableArray(args)));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function takeAction(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
addEventListener('message', function (e) {var _e$data = e.data,type = _e$data.type,method = _e$data.method,id = _e$data.id,params = _e$data.params,f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () {return f.apply(__webpack_exports__, params);});} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});
})();

/******/ })()
;
//# sourceMappingURL=513b39875afdb9a23b8e.worker.js.map