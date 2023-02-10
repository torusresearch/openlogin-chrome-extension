/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 304:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


				var addMethods = __webpack_require__(475)
				var methods = ["instantiate","takeAction"]
				module.exports = function() {
					var w = new Worker(URL.createObjectURL(new Blob(["/******/ (() => { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ 400:\n/***/ ((module, exports, __webpack_require__) => {\n\n/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(425);\n\n/*! For license information please see dkls.min.js.LICENSE.txt */\n!function (t, n) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"object\" == ( false ? 0 : _typeof(module)) ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(self, function () {\n  return function () {\n    var t = {\n      609: function _(t, n, e) {\n        var r = e(425).default;\n\n        function o() {\n          \"use strict\";\n\n          t.exports = o = function o() {\n            return n;\n          }, t.exports.__esModule = !0, t.exports.default = t.exports;\n\n          var n = {},\n              e = Object.prototype,\n              i = e.hasOwnProperty,\n              a = \"function\" == typeof Symbol ? Symbol : {},\n              c = a.iterator || \"@@iterator\",\n              _ = a.asyncIterator || \"@@asyncIterator\",\n              u = a.toStringTag || \"@@toStringTag\";\n\n          function f(t, n, e) {\n            return Object.defineProperty(t, n, {\n              value: e,\n              enumerable: !0,\n              configurable: !0,\n              writable: !0\n            }), t[n];\n          }\n\n          try {\n            f({}, \"\");\n          } catch (t) {\n            f = function f(t, n, e) {\n              return t[n] = e;\n            };\n          }\n\n          function l(t, n, e, r) {\n            var o = n && n.prototype instanceof g ? n : g,\n                i = Object.create(o.prototype),\n                a = new L(r || []);\n            return i._invoke = function (t, n, e) {\n              var r = \"suspendedStart\";\n              return function (o, i) {\n                if (\"executing\" === r) throw new Error(\"Generator is already running\");\n\n                if (\"completed\" === r) {\n                  if (\"throw\" === o) throw i;\n                  return {\n                    value: void 0,\n                    done: !0\n                  };\n                }\n\n                for (e.method = o, e.arg = i;;) {\n                  var a = e.delegate;\n\n                  if (a) {\n                    var c = k(a, e);\n\n                    if (c) {\n                      if (c === b) continue;\n                      return c;\n                    }\n                  }\n\n                  if (\"next\" === e.method) e.sent = e._sent = e.arg;else if (\"throw\" === e.method) {\n                    if (\"suspendedStart\" === r) throw r = \"completed\", e.arg;\n                    e.dispatchException(e.arg);\n                  } else \"return\" === e.method && e.abrupt(\"return\", e.arg);\n                  r = \"executing\";\n\n                  var _ = s(t, n, e);\n\n                  if (\"normal\" === _.type) {\n                    if (r = e.done ? \"completed\" : \"suspendedYield\", _.arg === b) continue;\n                    return {\n                      value: _.arg,\n                      done: e.done\n                    };\n                  }\n\n                  \"throw\" === _.type && (r = \"completed\", e.method = \"throw\", e.arg = _.arg);\n                }\n              };\n            }(t, e, a), i;\n          }\n\n          function s(t, n, e) {\n            try {\n              return {\n                type: \"normal\",\n                arg: t.call(n, e)\n              };\n            } catch (t) {\n              return {\n                type: \"throw\",\n                arg: t\n              };\n            }\n          }\n\n          n.wrap = l;\n          var b = {};\n\n          function g() {}\n\n          function d() {}\n\n          function w() {}\n\n          var y = {};\n          f(y, c, function () {\n            return this;\n          });\n          var p = Object.getPrototypeOf,\n              h = p && p(p(S([])));\n          h && h !== e && i.call(h, c) && (y = h);\n          var v = w.prototype = g.prototype = Object.create(y);\n\n          function m(t) {\n            [\"next\", \"throw\", \"return\"].forEach(function (n) {\n              f(t, n, function (t) {\n                return this._invoke(n, t);\n              });\n            });\n          }\n\n          function x(t, n) {\n            function e(o, a, c, _) {\n              var u = s(t[o], t, a);\n\n              if (\"throw\" !== u.type) {\n                var f = u.arg,\n                    l = f.value;\n                return l && \"object\" == r(l) && i.call(l, \"__await\") ? n.resolve(l.__await).then(function (t) {\n                  e(\"next\", t, c, _);\n                }, function (t) {\n                  e(\"throw\", t, c, _);\n                }) : n.resolve(l).then(function (t) {\n                  f.value = t, c(f);\n                }, function (t) {\n                  return e(\"throw\", t, c, _);\n                });\n              }\n\n              _(u.arg);\n            }\n\n            var o;\n\n            this._invoke = function (t, r) {\n              function i() {\n                return new n(function (n, o) {\n                  e(t, r, n, o);\n                });\n              }\n\n              return o = o ? o.then(i, i) : i();\n            };\n          }\n\n          function k(t, n) {\n            var e = t.iterator[n.method];\n\n            if (void 0 === e) {\n              if (n.delegate = null, \"throw\" === n.method) {\n                if (t.iterator.return && (n.method = \"return\", n.arg = void 0, k(t, n), \"throw\" === n.method)) return b;\n                n.method = \"throw\", n.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n              }\n\n              return b;\n            }\n\n            var r = s(e, t.iterator, n.arg);\n            if (\"throw\" === r.type) return n.method = \"throw\", n.arg = r.arg, n.delegate = null, b;\n            var o = r.arg;\n            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, \"return\" !== n.method && (n.method = \"next\", n.arg = void 0), n.delegate = null, b) : o : (n.method = \"throw\", n.arg = new TypeError(\"iterator result is not an object\"), n.delegate = null, b);\n          }\n\n          function j(t) {\n            var n = {\n              tryLoc: t[0]\n            };\n            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);\n          }\n\n          function E(t) {\n            var n = t.completion || {};\n            n.type = \"normal\", delete n.arg, t.completion = n;\n          }\n\n          function L(t) {\n            this.tryEntries = [{\n              tryLoc: \"root\"\n            }], t.forEach(j, this), this.reset(!0);\n          }\n\n          function S(t) {\n            if (t) {\n              var n = t[c];\n              if (n) return n.call(t);\n              if (\"function\" == typeof t.next) return t;\n\n              if (!isNaN(t.length)) {\n                var e = -1,\n                    r = function n() {\n                  for (; ++e < t.length;) {\n                    if (i.call(t, e)) return n.value = t[e], n.done = !1, n;\n                  }\n\n                  return n.value = void 0, n.done = !0, n;\n                };\n\n                return r.next = r;\n              }\n            }\n\n            return {\n              next: A\n            };\n          }\n\n          function A() {\n            return {\n              value: void 0,\n              done: !0\n            };\n          }\n\n          return d.prototype = w, f(v, \"constructor\", w), f(w, \"constructor\", d), d.displayName = f(w, u, \"GeneratorFunction\"), n.isGeneratorFunction = function (t) {\n            var n = \"function\" == typeof t && t.constructor;\n            return !!n && (n === d || \"GeneratorFunction\" === (n.displayName || n.name));\n          }, n.mark = function (t) {\n            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, f(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t;\n          }, n.awrap = function (t) {\n            return {\n              __await: t\n            };\n          }, m(x.prototype), f(x.prototype, _, function () {\n            return this;\n          }), n.AsyncIterator = x, n.async = function (t, e, r, o, i) {\n            void 0 === i && (i = Promise);\n            var a = new x(l(t, e, r, o), i);\n            return n.isGeneratorFunction(e) ? a : a.next().then(function (t) {\n              return t.done ? t.value : a.next();\n            });\n          }, m(v), f(v, u, \"Generator\"), f(v, c, function () {\n            return this;\n          }), f(v, \"toString\", function () {\n            return \"[object Generator]\";\n          }), n.keys = function (t) {\n            var n = [];\n\n            for (var e in t) {\n              n.push(e);\n            }\n\n            return n.reverse(), function e() {\n              for (; n.length;) {\n                var r = n.pop();\n                if (r in t) return e.value = r, e.done = !1, e;\n              }\n\n              return e.done = !0, e;\n            };\n          }, n.values = S, L.prototype = {\n            constructor: L,\n            reset: function reset(t) {\n              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = void 0, this.tryEntries.forEach(E), !t) for (var n in this) {\n                \"t\" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0);\n              }\n            },\n            stop: function stop() {\n              this.done = !0;\n              var t = this.tryEntries[0].completion;\n              if (\"throw\" === t.type) throw t.arg;\n              return this.rval;\n            },\n            dispatchException: function dispatchException(t) {\n              if (this.done) throw t;\n              var n = this;\n\n              function e(e, r) {\n                return a.type = \"throw\", a.arg = t, n.next = e, r && (n.method = \"next\", n.arg = void 0), !!r;\n              }\n\n              for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n                var o = this.tryEntries[r],\n                    a = o.completion;\n                if (\"root\" === o.tryLoc) return e(\"end\");\n\n                if (o.tryLoc <= this.prev) {\n                  var c = i.call(o, \"catchLoc\"),\n                      _ = i.call(o, \"finallyLoc\");\n\n                  if (c && _) {\n                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);\n                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);\n                  } else if (c) {\n                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);\n                  } else {\n                    if (!_) throw new Error(\"try statement without catch or finally\");\n                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);\n                  }\n                }\n              }\n            },\n            abrupt: function abrupt(t, n) {\n              for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n                var r = this.tryEntries[e];\n\n                if (r.tryLoc <= this.prev && i.call(r, \"finallyLoc\") && this.prev < r.finallyLoc) {\n                  var o = r;\n                  break;\n                }\n              }\n\n              o && (\"break\" === t || \"continue\" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);\n              var a = o ? o.completion : {};\n              return a.type = t, a.arg = n, o ? (this.method = \"next\", this.next = o.finallyLoc, b) : this.complete(a);\n            },\n            complete: function complete(t, n) {\n              if (\"throw\" === t.type) throw t.arg;\n              return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && n && (this.next = n), b;\n            },\n            finish: function finish(t) {\n              for (var n = this.tryEntries.length - 1; n >= 0; --n) {\n                var e = this.tryEntries[n];\n                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), b;\n              }\n            },\n            catch: function _catch(t) {\n              for (var n = this.tryEntries.length - 1; n >= 0; --n) {\n                var e = this.tryEntries[n];\n\n                if (e.tryLoc === t) {\n                  var r = e.completion;\n\n                  if (\"throw\" === r.type) {\n                    var o = r.arg;\n                    E(e);\n                  }\n\n                  return o;\n                }\n              }\n\n              throw new Error(\"illegal catch attempt\");\n            },\n            delegateYield: function delegateYield(t, n, e) {\n              return this.delegate = {\n                iterator: S(t),\n                resultName: n,\n                nextLoc: e\n              }, \"next\" === this.method && (this.arg = void 0), b;\n            }\n          }, n;\n        }\n\n        t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports;\n      },\n      425: function _(t) {\n        function n(e) {\n          return t.exports = n = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n            return _typeof(t);\n          } : function (t) {\n            return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n          }, t.exports.__esModule = !0, t.exports.default = t.exports, n(e);\n        }\n\n        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;\n      },\n      841: function _(t, n, e) {\n        var r = e(609)();\n        t.exports = r;\n\n        try {\n          regeneratorRuntime = r;\n        } catch (t) {\n          \"object\" == (typeof globalThis === \"undefined\" ? \"undefined\" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = r : Function(\"r\", \"regeneratorRuntime = r\")(r);\n        }\n      }\n    },\n        n = {};\n\n    function e(r) {\n      var o = n[r];\n      if (void 0 !== o) return o.exports;\n      var i = n[r] = {\n        exports: {}\n      };\n      return t[r](i, i.exports, e), i.exports;\n    }\n\n    e.n = function (t) {\n      var n = t && t.__esModule ? function () {\n        return t.default;\n      } : function () {\n        return t;\n      };\n      return e.d(n, {\n        a: n\n      }), n;\n    }, e.d = function (t, n) {\n      for (var r in n) {\n        e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {\n          enumerable: !0,\n          get: n[r]\n        });\n      }\n    }, e.g = function () {\n      if (\"object\" == (typeof globalThis === \"undefined\" ? \"undefined\" : _typeof(globalThis))) return globalThis;\n\n      try {\n        return this || new Function(\"return this\")();\n      } catch (t) {\n        if (\"object\" == (typeof window === \"undefined\" ? \"undefined\" : _typeof(window))) return window;\n      }\n    }(), e.o = function (t, n) {\n      return Object.prototype.hasOwnProperty.call(t, n);\n    }, e.r = function (t) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(t, \"__esModule\", {\n        value: !0\n      });\n    };\n    var r = {};\n    return function () {\n      \"use strict\";\n\n      function t(t, n, e, r, o, i, a) {\n        try {\n          var c = t[i](a),\n              _ = c.value;\n        } catch (t) {\n          return void e(t);\n        }\n\n        c.done ? n(_) : Promise.resolve(_).then(r, o);\n      }\n\n      function n(n) {\n        return function () {\n          var e = this,\n              r = arguments;\n          return new Promise(function (o, i) {\n            var a = n.apply(e, r);\n\n            function c(n) {\n              t(a, o, i, c, _, \"next\", n);\n            }\n\n            function _(n) {\n              t(a, o, i, c, _, \"throw\", n);\n            }\n\n            c(void 0);\n          });\n        };\n      }\n\n      function o(t, n) {\n        for (var e = 0; e < n.length; e++) {\n          var r = n[e];\n          r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);\n        }\n      }\n\n      function i(t) {\n        return i = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n          return _typeof(t);\n        } : function (t) {\n          return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n        }, i(t);\n      }\n\n      e.r(r), e.d(r, {\n        WasmBindgenTestContext: function WasmBindgenTestContext() {\n          return K;\n        },\n        __wbgtest_console_debug: function __wbgtest_console_debug() {\n          return Y;\n        },\n        __wbgtest_console_error: function __wbgtest_console_error() {\n          return H;\n        },\n        __wbgtest_console_info: function __wbgtest_console_info() {\n          return D;\n        },\n        __wbgtest_console_log: function __wbgtest_console_log() {\n          return z;\n        },\n        __wbgtest_console_warn: function __wbgtest_console_warn() {\n          return J;\n        },\n        batch_size: function batch_size() {\n          return S;\n        },\n        default: function _default() {\n          return et;\n        },\n        finalizeInit: function finalizeInit() {\n          return Z;\n        },\n        getImports: function getImports() {\n          return X;\n        },\n        get_r_from_precompute: function get_r_from_precompute() {\n          return W;\n        },\n        initSync: function initSync() {\n          return $;\n        },\n        local_sign: function local_sign() {\n          return F;\n        },\n        local_verify: function local_verify() {\n          return U;\n        },\n        precompute: function precompute() {\n          return M;\n        },\n        process_ga1: function process_ga1() {\n          return L;\n        },\n        random_generator: function random_generator() {\n          return A;\n        },\n        random_generator_free: function random_generator_free() {\n          return O;\n        },\n        setup: function setup() {\n          return P;\n        },\n        sign: function sign() {\n          return G;\n        },\n        threshold_signer: function threshold_signer() {\n          return T;\n        },\n        threshold_signer_free: function threshold_signer_free() {\n          return I;\n        }\n      });\n\n      var a,\n          c = e(841),\n          _ = e.n(c),\n          u = new Array(32).fill(void 0);\n\n      function f(t) {\n        return u[t];\n      }\n\n      u.push(void 0, null, !0, !1);\n      var l = u.length;\n\n      function s(t) {\n        var n = f(t);\n        return function (t) {\n          t < 36 || (u[t] = l, l = t);\n        }(t), n;\n      }\n\n      var b = new TextDecoder(\"utf-8\", {\n        ignoreBOM: !0,\n        fatal: !0\n      });\n      b.decode();\n      var g = new Uint8Array();\n\n      function d() {\n        return 0 === g.byteLength && (g = new Uint8Array(a.memory.buffer)), g;\n      }\n\n      function w(t, n) {\n        return b.decode(d().subarray(t, t + n));\n      }\n\n      function y(t) {\n        l === u.length && u.push(u.length + 1);\n        var n = l;\n        return l = u[n], u[n] = t, n;\n      }\n\n      var p = 0,\n          h = new TextEncoder(\"utf-8\"),\n          v = \"function\" == typeof h.encodeInto ? function (t, n) {\n        return h.encodeInto(t, n);\n      } : function (t, n) {\n        var e = h.encode(t);\n        return n.set(e), {\n          read: t.length,\n          written: e.length\n        };\n      };\n\n      function m(t, n, e) {\n        if (void 0 === e) {\n          var r = h.encode(t),\n              o = n(r.length);\n          return d().subarray(o, o + r.length).set(r), p = r.length, o;\n        }\n\n        for (var i = t.length, a = n(i), c = d(), _ = 0; _ < i; _++) {\n          var u = t.charCodeAt(_);\n          if (u > 127) break;\n          c[a + _] = u;\n        }\n\n        if (_ !== i) {\n          0 !== _ && (t = t.slice(_)), a = e(a, i, i = _ + 3 * t.length);\n          var f = d().subarray(a + _, a + i);\n          _ += v(t, f).written;\n        }\n\n        return p = _, a;\n      }\n\n      var x = new Int32Array();\n\n      function k() {\n        return 0 === x.byteLength && (x = new Int32Array(a.memory.buffer)), x;\n      }\n\n      function j(t) {\n        var n = i(t);\n        if (\"number\" == n || \"boolean\" == n || null == t) return \"\".concat(t);\n        if (\"string\" == n) return '\"'.concat(t, '\"');\n\n        if (\"symbol\" == n) {\n          var e = t.description;\n          return null == e ? \"Symbol\" : \"Symbol(\".concat(e, \")\");\n        }\n\n        if (\"function\" == n) {\n          var r = t.name;\n          return \"string\" == typeof r && r.length > 0 ? \"Function(\".concat(r, \")\") : \"Function\";\n        }\n\n        if (Array.isArray(t)) {\n          var o = t.length,\n              a = \"[\";\n          o > 0 && (a += j(t[0]));\n\n          for (var c = 1; c < o; c++) {\n            a += \", \" + j(t[c]);\n          }\n\n          return a + \"]\";\n        }\n\n        var _,\n            u = /\\[object ([^\\]]+)\\]/.exec(toString.call(t));\n\n        if (!(u.length > 1)) return toString.call(t);\n        if (\"Object\" == (_ = u[1])) try {\n          return \"Object(\" + JSON.stringify(t) + \")\";\n        } catch (t) {\n          return \"Object\";\n        }\n        return t instanceof Error ? \"\".concat(t.name, \": \").concat(t.message, \"\\n\").concat(t.stack) : _;\n      }\n\n      function E(t, n, e) {\n        a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha0b01688533da445(t, n, y(e));\n      }\n\n      function L(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16),\n              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n\n          a.process_ga1(n, e, r);\n          var o = k()[n / 4 + 0],\n              i = k()[n / 4 + 1],\n              c = k()[n / 4 + 2],\n              _ = k()[n / 4 + 3],\n              u = o,\n              f = i;\n          if (_) throw u = 0, f = 0, s(c);\n          return w(u, f);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(u, f);\n        }\n      }\n\n      function S() {\n        return a.batch_size() >>> 0;\n      }\n\n      function A(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16),\n              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n\n          a.random_generator(n, e, r);\n          var o = k()[n / 4 + 0],\n              i = k()[n / 4 + 1];\n          if (k()[n / 4 + 2]) throw s(i);\n          return o;\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function O(t) {\n        a.random_generator_free(t);\n      }\n\n      function T(t, n, e, r, o, i) {\n        try {\n          var c = a.__wbindgen_add_to_stack_pointer(-16),\n              _ = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              u = p,\n              f = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              l = p,\n              b = m(i, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              g = p;\n\n          a.threshold_signer(c, _, u, n, e, r, f, l, b, g);\n          var d = k()[c / 4 + 0],\n              w = k()[c / 4 + 1];\n          if (k()[c / 4 + 2]) throw s(w);\n          return d;\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function I(t) {\n        a.threshold_signer_free(t);\n      }\n\n      function P(t, n) {\n        return s(a.setup(t, n));\n      }\n\n      function M(t, n, e) {\n        return s(a.precompute(y(t), n, e));\n      }\n\n      function F(t, n, e) {\n        try {\n          var r = a.__wbindgen_add_to_stack_pointer(-16),\n              o = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              i = p;\n\n          a.local_sign(r, o, i, n, y(e));\n          var c = k()[r / 4 + 0],\n              _ = k()[r / 4 + 1];\n          if (k()[r / 4 + 2]) throw s(_);\n          return s(c);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function W(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16);\n\n          a.get_r_from_precompute(n, y(t));\n          var e = k()[n / 4 + 0],\n              r = k()[n / 4 + 1];\n          if (k()[n / 4 + 2]) throw s(r);\n          return s(e);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      var R = new Uint32Array();\n\n      function N(t, n) {\n        for (var e = n(4 * t.length), r = (0 === R.byteLength && (R = new Uint32Array(a.memory.buffer)), R), o = 0; o < t.length; o++) {\n          r[e / 4 + o] = y(t[o]);\n        }\n\n        return p = t.length, e;\n      }\n\n      function U(t, n, e, r, o) {\n        try {\n          var i = a.__wbindgen_add_to_stack_pointer(-16),\n              c = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              _ = p,\n              u = N(r, a.__wbindgen_malloc),\n              f = p,\n              l = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              b = p;\n\n          a.local_verify(i, c, _, n, y(e), u, f, l, b);\n          var g = k()[i / 4 + 0],\n              d = k()[i / 4 + 1];\n          if (k()[i / 4 + 2]) throw s(d);\n          return s(g);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function G(t, n, e, r, o) {\n        var i = m(n, a.__wbindgen_malloc, a.__wbindgen_realloc),\n            c = p;\n        return s(a.sign(y(t), i, c, e, r, o));\n      }\n\n      function C(t, n) {\n        try {\n          return t.apply(this, n);\n        } catch (t) {\n          a.__wbindgen_exn_store(y(t));\n        }\n      }\n\n      var B = 32;\n\n      function q(t) {\n        if (1 == B) throw new Error(\"out of js stack\");\n        return u[--B] = t, B;\n      }\n\n      function z(t) {\n        try {\n          a.__wbgtest_console_log(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function Y(t) {\n        try {\n          a.__wbgtest_console_debug(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function D(t) {\n        try {\n          a.__wbgtest_console_info(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function J(t) {\n        try {\n          a.__wbgtest_console_warn(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function H(t) {\n        try {\n          a.__wbgtest_console_error(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      var K = function () {\n        function t() {\n          !function (t, n) {\n            if (!(t instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, t);\n          var n = a.wasmbindgentestcontext_new();\n          return t.__wrap(n);\n        }\n\n        var n, e, r;\n        return n = t, r = [{\n          key: \"__wrap\",\n          value: function value(n) {\n            var e = Object.create(t.prototype);\n            return e.ptr = n, e;\n          }\n        }], (e = [{\n          key: \"__destroy_into_raw\",\n          value: function value() {\n            var t = this.ptr;\n            return this.ptr = 0, t;\n          }\n        }, {\n          key: \"free\",\n          value: function value() {\n            var t = this.__destroy_into_raw();\n\n            a.__wbg_wasmbindgentestcontext_free(t);\n          }\n        }, {\n          key: \"args\",\n          value: function value(t) {\n            var n = N(t, a.__wbindgen_malloc),\n                e = p;\n            a.wasmbindgentestcontext_args(this.ptr, n, e);\n          }\n        }, {\n          key: \"run\",\n          value: function value(t) {\n            var n = N(t, a.__wbindgen_malloc),\n                e = p;\n            return s(a.wasmbindgentestcontext_run(this.ptr, n, e));\n          }\n        }]) && o(n.prototype, e), r && o(n, r), Object.defineProperty(n, \"prototype\", {\n          writable: !1\n        }), t;\n      }();\n\n      function Q(t, n) {\n        return V.apply(this, arguments);\n      }\n\n      function V() {\n        return (V = n(_().mark(function t(n, e) {\n          var r, o;\n          return _().wrap(function (t) {\n            for (;;) {\n              switch (t.prev = t.next) {\n                case 0:\n                  if (!(\"function\" == typeof Response && n instanceof Response)) {\n                    t.next = 23;\n                    break;\n                  }\n\n                  if (\"function\" != typeof WebAssembly.instantiateStreaming) {\n                    t.next = 15;\n                    break;\n                  }\n\n                  return t.prev = 2, t.next = 5, WebAssembly.instantiateStreaming(n, e);\n\n                case 5:\n                case 20:\n                  return t.abrupt(\"return\", t.sent);\n\n                case 8:\n                  if (t.prev = 8, t.t0 = t.catch(2), \"application/wasm\" == n.headers.get(\"Content-Type\")) {\n                    t.next = 14;\n                    break;\n                  }\n\n                  console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", t.t0), t.next = 15;\n                  break;\n\n                case 14:\n                  throw t.t0;\n\n                case 15:\n                  return t.next = 17, n.arrayBuffer();\n\n                case 17:\n                  return r = t.sent, t.next = 20, WebAssembly.instantiate(r, e);\n\n                case 23:\n                  return t.next = 25, WebAssembly.instantiate(n, e);\n\n                case 25:\n                  if (!((o = t.sent) instanceof WebAssembly.Instance)) {\n                    t.next = 30;\n                    break;\n                  }\n\n                  return t.abrupt(\"return\", {\n                    instance: o,\n                    module: n\n                  });\n\n                case 30:\n                  return t.abrupt(\"return\", o);\n\n                case 31:\n                case \"end\":\n                  return t.stop();\n              }\n            }\n          }, t, null, [[2, 8]]);\n        }))).apply(this, arguments);\n      }\n\n      function X() {\n        var t = {\n          wbg: {}\n        };\n        return t.wbg.__wbindgen_object_drop_ref = function (t) {\n          s(t);\n        }, t.wbg.__wbindgen_cb_drop = function (t) {\n          var n = s(t).original;\n          return 1 == n.cnt-- && (n.a = 0, !0);\n        }, t.wbg.__wbg_jssendmsg_72dd946a7fbc8ccd = function (t, n, e, r, o, i, c, _) {\n          try {\n            return y(js_send_msg(w(t, n), e >>> 0, r >>> 0, w(o, i), w(c, _)));\n          } finally {\n            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i), a.__wbindgen_free(c, _);\n          }\n        }, t.wbg.__wbindgen_is_falsy = function (t) {\n          return !f(t);\n        }, t.wbg.__wbindgen_string_new = function (t, n) {\n          return y(w(t, n));\n        }, t.wbg.__wbindgen_bigint_new = function (t, n) {\n          return y(BigInt(w(t, n)));\n        }, t.wbg.__wbg_jsreadmsg_8a12f6e25645f453 = function (t, n, e, r, o, i) {\n          try {\n            return y(js_read_msg(w(t, n), e >>> 0, r >>> 0, w(o, i)));\n          } finally {\n            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i);\n          }\n        }, t.wbg.__wbindgen_string_get = function (t, n) {\n          var e = f(n),\n              r = \"string\" == typeof e ? e : void 0,\n              o = null == r ? 0 : m(r, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              i = p;\n          k()[t / 4 + 1] = i, k()[t / 4 + 0] = o;\n        }, t.wbg.__wbindgen_number_new = function (t) {\n          return y(t);\n        }, t.wbg.__wbg_newnoargs_971e9a5abe185139 = function (t, n) {\n          return y(new Function(w(t, n)));\n        }, t.wbg.__wbg_call_33d7bcddbbfa394a = function () {\n          return C(function (t, n) {\n            return y(f(t).call(f(n)));\n          }, arguments);\n        }, t.wbg.__wbindgen_object_clone_ref = function (t) {\n          return y(f(t));\n        }, t.wbg.__wbg_self_fd00a1ef86d1b2ed = function () {\n          return C(function () {\n            return y(self.self);\n          }, arguments);\n        }, t.wbg.__wbg_window_6f6e346d8bbd61d7 = function () {\n          return C(function () {\n            return y(window.window);\n          }, arguments);\n        }, t.wbg.__wbg_globalThis_3348936ac49df00a = function () {\n          return C(function () {\n            return y(globalThis.globalThis);\n          }, arguments);\n        }, t.wbg.__wbg_global_67175caf56f55ca9 = function () {\n          return C(function () {\n            return y(e.g.global);\n          }, arguments);\n        }, t.wbg.__wbindgen_is_undefined = function (t) {\n          return void 0 === f(t);\n        }, t.wbg.__wbg_forEach_49bfa6f148ac0f7d = function (t, n, e) {\n          try {\n            var r = {\n              a: n,\n              b: e\n            };\n            f(t).forEach(function (t, n, e) {\n              var o = r.a;\n              r.a = 0;\n\n              try {\n                return function (t, n, e, r, o) {\n                  a.wasm_bindgen__convert__closures__invoke3_mut__h1481b0b3a4794987(t, n, y(e), r, y(o));\n                }(o, r.b, t, n, e);\n              } finally {\n                r.a = o;\n              }\n            });\n          } finally {\n            r.a = r.b = 0;\n          }\n        }, t.wbg.__wbg_message_924b46658b69b295 = function (t) {\n          return y(f(t).message);\n        }, t.wbg.__wbg_name_e88a3b3a0f6b23c2 = function (t) {\n          return y(f(t).name);\n        }, t.wbg.__wbg_call_65af9f665ab6ade5 = function () {\n          return C(function (t, n, e) {\n            return y(f(t).call(f(n), f(e)));\n          }, arguments);\n        }, t.wbg.__wbg_new_52205195aa880fc2 = function (t, n) {\n          try {\n            var e = {\n              a: t,\n              b: n\n            },\n                r = new Promise(function (t, n) {\n              var r = e.a;\n              e.a = 0;\n\n              try {\n                return function (t, n, e, r) {\n                  a.wasm_bindgen__convert__closures__invoke2_mut__h31f9dc4b753d7d17(t, n, y(e), y(r));\n                }(r, e.b, t, n);\n              } finally {\n                e.a = r;\n              }\n            });\n            return y(r);\n          } finally {\n            e.a = e.b = 0;\n          }\n        }, t.wbg.__wbg_resolve_0107b3a501450ba0 = function (t) {\n          return y(Promise.resolve(f(t)));\n        }, t.wbg.__wbg_then_18da6e5453572fc8 = function (t, n) {\n          return y(f(t).then(f(n)));\n        }, t.wbg.__wbg_then_e5489f796341454b = function (t, n, e) {\n          return y(f(t).then(f(n), f(e)));\n        }, t.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function (t) {\n          return y(f(t).buffer);\n        }, t.wbg.__wbg_new_cda198d9dbc6d7ea = function (t) {\n          return y(new Uint8Array(f(t)));\n        }, t.wbg.__wbg_set_1a930cfcda1a8067 = function (t, n, e) {\n          f(t).set(f(n), e >>> 0);\n        }, t.wbg.__wbg_length_51f19f73d6d9eff3 = function (t) {\n          return f(t).length;\n        }, t.wbg.__wbindgen_debug_string = function (t, n) {\n          var e = m(j(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbindgen_throw = function (t, n) {\n          throw new Error(w(t, n));\n        }, t.wbg.__wbindgen_memory = function () {\n          return y(a.memory);\n        }, t.wbg.__wbg_log_d4cf02b84d94d5cc = function (t, n) {\n          console.log(w(t, n));\n        }, t.wbg.__wbg_String_1e50b0ad2927b74c = function (t, n) {\n          var e = m(String(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_new_693216e109162396 = function () {\n          return y(new Error());\n        }, t.wbg.__wbg_stack_0ddaca5d1abfb52f = function (t, n) {\n          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_error_09919627ac0992f5 = function (t, n) {\n          try {\n            console.error(w(t, n));\n          } finally {\n            a.__wbindgen_free(t, n);\n          }\n        }, t.wbg.__wbg_static_accessor_document_57521ac637ea23b1 = function () {\n          return y(document);\n        }, t.wbg.__wbg_self_331f85453774af9f = function (t) {\n          return y(f(t).self);\n        }, t.wbg.__wbindgen_jsval_eq = function (t, n) {\n          return f(t) === f(n);\n        }, t.wbg.__wbg_getElementById_9ef7f5a90430a467 = function (t, n, e) {\n          return y(f(t).getElementById(w(n, e)));\n        }, t.wbg.__wbg_settextcontent_2e10a7628cf8a079 = function (t, n, e) {\n          f(t).textContent = w(n, e);\n        }, t.wbg.__wbg_textcontent_2eda1e93d7676aaa = function (t, n) {\n          var e = m(f(n).textContent, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_stack_c674c54b561c0712 = function (t) {\n          return y(f(t).stack);\n        }, t.wbg.__wbg_stack_41a23a715c0aee96 = function (t, n) {\n          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbindgen_closure_wrapper519 = function (t, n, e) {\n          var r = function (t, n, e, r) {\n            var o = {\n              a: t,\n              b: n,\n              cnt: 1,\n              dtor: 111\n            },\n                i = function i() {\n              o.cnt++;\n              var t = o.a;\n              o.a = 0;\n\n              try {\n                for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++) {\n                  e[i] = arguments[i];\n                }\n\n                return r.apply(void 0, [t, o.b].concat(e));\n              } finally {\n                0 == --o.cnt ? a.__wbindgen_export_2.get(o.dtor)(t, o.b) : o.a = t;\n              }\n            };\n\n            return i.original = o, i;\n          }(t, n, 0, E);\n\n          return y(r);\n        }, t;\n      }\n\n      function Z(t, n) {\n        return a = t.exports, tt.__wbindgen_wasm_module = n, x = new Int32Array(), R = new Uint32Array(), g = new Uint8Array(), a;\n      }\n\n      function $(t) {\n        var n = X();\n        return t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t)), Z(new WebAssembly.Instance(t, n), t);\n      }\n\n      function tt(t) {\n        return nt.apply(this, arguments);\n      }\n\n      function nt() {\n        return (nt = n(_().mark(function t(n) {\n          var e, r, o, i;\n          return _().wrap(function (t) {\n            for (;;) {\n              switch (t.prev = t.next) {\n                case 0:\n                  if (void 0 !== n) {\n                    t.next = 2;\n                    break;\n                  }\n\n                  throw new Error(\"no\");\n\n                case 2:\n                  return e = X(), (\"string\" == typeof n || \"function\" == typeof Request && n instanceof Request || \"function\" == typeof URL && n instanceof URL) && (n = fetch(n)), t.t0 = Q, t.next = 8, n;\n\n                case 8:\n                  return t.t1 = t.sent, t.t2 = e, t.next = 12, (0, t.t0)(t.t1, t.t2);\n\n                case 12:\n                  return r = t.sent, o = r.instance, i = r.module, t.abrupt(\"return\", Z(o, i));\n\n                case 16:\n                case \"end\":\n                  return t.stop();\n              }\n            }\n          }, t);\n        }))).apply(this, arguments);\n      }\n\n      var et = tt;\n    }(), r;\n  }();\n});\n\n/***/ }),\n\n/***/ 609:\n/***/ ((module, __unused_webpack_exports, __webpack_require__) => {\n\nvar _typeof = (__webpack_require__(425)[\"default\"]);\n\nfunction _regeneratorRuntime() {\n  \"use strict\";\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n      Op = Object.prototype,\n      hasOwn = Op.hasOwnProperty,\n      $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n      iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n      asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n      toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n        generator = Object.create(protoGenerator.prototype),\n        context = new Context(tryLocsList || []);\n    return generator._invoke = function (innerFn, self, context) {\n      var state = \"suspendedStart\";\n      return function (method, arg) {\n        if (\"executing\" === state) throw new Error(\"Generator is already running\");\n\n        if (\"completed\" === state) {\n          if (\"throw\" === method) throw arg;\n          return doneResult();\n        }\n\n        for (context.method = method, context.arg = arg;;) {\n          var delegate = context.delegate;\n\n          if (delegate) {\n            var delegateResult = maybeInvokeDelegate(delegate, context);\n\n            if (delegateResult) {\n              if (delegateResult === ContinueSentinel) continue;\n              return delegateResult;\n            }\n          }\n\n          if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n            if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n            context.dispatchException(context.arg);\n          } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n          state = \"executing\";\n          var record = tryCatch(innerFn, self, context);\n\n          if (\"normal\" === record.type) {\n            if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n            return {\n              value: record.arg,\n              done: context.done\n            };\n          }\n\n          \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n        }\n      };\n    }(innerFn, self, context), generator;\n  }\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {}\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n      NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n            value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n\n      reject(record.arg);\n    }\n\n    var previousPromise;\n\n    this._invoke = function (method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    };\n  }\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          for (; ++i < iterable.length;) {\n            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n          }\n\n          return next.value = undefined, next.done = !0, next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    return {\n      next: doneResult\n    };\n  }\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n            record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n              hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      }\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\n\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n/***/ }),\n\n/***/ 425:\n/***/ ((module) => {\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n/***/ }),\n\n/***/ 841:\n/***/ ((module, __unused_webpack_exports, __webpack_require__) => {\n\n// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(609)();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/compat get default export */\n/******/ \t(() => {\n/******/ \t\t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t\t__webpack_require__.n = (module) => {\n/******/ \t\t\tvar getter = module && module.__esModule ?\n/******/ \t\t\t\t() => (module['default']) :\n/******/ \t\t\t\t() => (module);\n/******/ \t\t\t__webpack_require__.d(getter, { a: getter });\n/******/ \t\t\treturn getter;\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__webpack_require__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/node module decorator */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.nmd = (module) => {\n/******/ \t\t\tmodule.paths = [];\n/******/ \t\t\tif (!module.children) module.children = [];\n/******/ \t\t\treturn module;\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\nvar __webpack_exports__ = {};\n// This entry need to be wrapped in an IIFE because it need to be in strict mode.\n(() => {\n\"use strict\";\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"instantiate\": () => (/* binding */ instantiate),\n  \"takeAction\": () => (/* binding */ takeAction)\n});\n\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n// EXTERNAL MODULE: ../../node_modules/@babel/runtime/regenerator/index.js\nvar regenerator = __webpack_require__(841);\nvar regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);\n// EXTERNAL MODULE: ../tss-lib/dist/dkls.min.js\nvar dkls_min = __webpack_require__(400);\nvar dkls_min_default = /*#__PURE__*/__webpack_require__.n(dkls_min);\n;// CONCATENATED MODULE: ../../node_modules/workerize-loader/dist/rpc-worker-loader.js!../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/worker/worker.js\n\n\n\n\nvar instantiate = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(wasmFileUrl) {\n    return regenerator_default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return dkls_min_default()(wasmFileUrl);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function instantiate(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar takeAction = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(method, args) {\n    return regenerator_default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", dkls_min[method].apply(dkls_min, _toConsumableArray(args)));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function takeAction(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\naddEventListener('message', function (e) {var _e$data = e.data,type = _e$data.type,method = _e$data.method,id = _e$data.id,params = _e$data.params,f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () {return f.apply(__webpack_exports__, params);});} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});\n})();\n\n/******/ })()\n;\n//# sourceMappingURL=513b39875afdb9a23b8e.worker.js.map"])), { name: "[fullhash].worker.js" })
					URL.revokeObjectURL(URL.createObjectURL(new Blob(["/******/ (() => { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ 400:\n/***/ ((module, exports, __webpack_require__) => {\n\n/* module decorator */ module = __webpack_require__.nmd(module);\nvar __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = __webpack_require__(425);\n\n/*! For license information please see dkls.min.js.LICENSE.txt */\n!function (t, n) {\n  \"object\" == ( false ? 0 : _typeof(exports)) && \"object\" == ( false ? 0 : _typeof(module)) ? module.exports = n() :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(self, function () {\n  return function () {\n    var t = {\n      609: function _(t, n, e) {\n        var r = e(425).default;\n\n        function o() {\n          \"use strict\";\n\n          t.exports = o = function o() {\n            return n;\n          }, t.exports.__esModule = !0, t.exports.default = t.exports;\n\n          var n = {},\n              e = Object.prototype,\n              i = e.hasOwnProperty,\n              a = \"function\" == typeof Symbol ? Symbol : {},\n              c = a.iterator || \"@@iterator\",\n              _ = a.asyncIterator || \"@@asyncIterator\",\n              u = a.toStringTag || \"@@toStringTag\";\n\n          function f(t, n, e) {\n            return Object.defineProperty(t, n, {\n              value: e,\n              enumerable: !0,\n              configurable: !0,\n              writable: !0\n            }), t[n];\n          }\n\n          try {\n            f({}, \"\");\n          } catch (t) {\n            f = function f(t, n, e) {\n              return t[n] = e;\n            };\n          }\n\n          function l(t, n, e, r) {\n            var o = n && n.prototype instanceof g ? n : g,\n                i = Object.create(o.prototype),\n                a = new L(r || []);\n            return i._invoke = function (t, n, e) {\n              var r = \"suspendedStart\";\n              return function (o, i) {\n                if (\"executing\" === r) throw new Error(\"Generator is already running\");\n\n                if (\"completed\" === r) {\n                  if (\"throw\" === o) throw i;\n                  return {\n                    value: void 0,\n                    done: !0\n                  };\n                }\n\n                for (e.method = o, e.arg = i;;) {\n                  var a = e.delegate;\n\n                  if (a) {\n                    var c = k(a, e);\n\n                    if (c) {\n                      if (c === b) continue;\n                      return c;\n                    }\n                  }\n\n                  if (\"next\" === e.method) e.sent = e._sent = e.arg;else if (\"throw\" === e.method) {\n                    if (\"suspendedStart\" === r) throw r = \"completed\", e.arg;\n                    e.dispatchException(e.arg);\n                  } else \"return\" === e.method && e.abrupt(\"return\", e.arg);\n                  r = \"executing\";\n\n                  var _ = s(t, n, e);\n\n                  if (\"normal\" === _.type) {\n                    if (r = e.done ? \"completed\" : \"suspendedYield\", _.arg === b) continue;\n                    return {\n                      value: _.arg,\n                      done: e.done\n                    };\n                  }\n\n                  \"throw\" === _.type && (r = \"completed\", e.method = \"throw\", e.arg = _.arg);\n                }\n              };\n            }(t, e, a), i;\n          }\n\n          function s(t, n, e) {\n            try {\n              return {\n                type: \"normal\",\n                arg: t.call(n, e)\n              };\n            } catch (t) {\n              return {\n                type: \"throw\",\n                arg: t\n              };\n            }\n          }\n\n          n.wrap = l;\n          var b = {};\n\n          function g() {}\n\n          function d() {}\n\n          function w() {}\n\n          var y = {};\n          f(y, c, function () {\n            return this;\n          });\n          var p = Object.getPrototypeOf,\n              h = p && p(p(S([])));\n          h && h !== e && i.call(h, c) && (y = h);\n          var v = w.prototype = g.prototype = Object.create(y);\n\n          function m(t) {\n            [\"next\", \"throw\", \"return\"].forEach(function (n) {\n              f(t, n, function (t) {\n                return this._invoke(n, t);\n              });\n            });\n          }\n\n          function x(t, n) {\n            function e(o, a, c, _) {\n              var u = s(t[o], t, a);\n\n              if (\"throw\" !== u.type) {\n                var f = u.arg,\n                    l = f.value;\n                return l && \"object\" == r(l) && i.call(l, \"__await\") ? n.resolve(l.__await).then(function (t) {\n                  e(\"next\", t, c, _);\n                }, function (t) {\n                  e(\"throw\", t, c, _);\n                }) : n.resolve(l).then(function (t) {\n                  f.value = t, c(f);\n                }, function (t) {\n                  return e(\"throw\", t, c, _);\n                });\n              }\n\n              _(u.arg);\n            }\n\n            var o;\n\n            this._invoke = function (t, r) {\n              function i() {\n                return new n(function (n, o) {\n                  e(t, r, n, o);\n                });\n              }\n\n              return o = o ? o.then(i, i) : i();\n            };\n          }\n\n          function k(t, n) {\n            var e = t.iterator[n.method];\n\n            if (void 0 === e) {\n              if (n.delegate = null, \"throw\" === n.method) {\n                if (t.iterator.return && (n.method = \"return\", n.arg = void 0, k(t, n), \"throw\" === n.method)) return b;\n                n.method = \"throw\", n.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n              }\n\n              return b;\n            }\n\n            var r = s(e, t.iterator, n.arg);\n            if (\"throw\" === r.type) return n.method = \"throw\", n.arg = r.arg, n.delegate = null, b;\n            var o = r.arg;\n            return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, \"return\" !== n.method && (n.method = \"next\", n.arg = void 0), n.delegate = null, b) : o : (n.method = \"throw\", n.arg = new TypeError(\"iterator result is not an object\"), n.delegate = null, b);\n          }\n\n          function j(t) {\n            var n = {\n              tryLoc: t[0]\n            };\n            1 in t && (n.catchLoc = t[1]), 2 in t && (n.finallyLoc = t[2], n.afterLoc = t[3]), this.tryEntries.push(n);\n          }\n\n          function E(t) {\n            var n = t.completion || {};\n            n.type = \"normal\", delete n.arg, t.completion = n;\n          }\n\n          function L(t) {\n            this.tryEntries = [{\n              tryLoc: \"root\"\n            }], t.forEach(j, this), this.reset(!0);\n          }\n\n          function S(t) {\n            if (t) {\n              var n = t[c];\n              if (n) return n.call(t);\n              if (\"function\" == typeof t.next) return t;\n\n              if (!isNaN(t.length)) {\n                var e = -1,\n                    r = function n() {\n                  for (; ++e < t.length;) {\n                    if (i.call(t, e)) return n.value = t[e], n.done = !1, n;\n                  }\n\n                  return n.value = void 0, n.done = !0, n;\n                };\n\n                return r.next = r;\n              }\n            }\n\n            return {\n              next: A\n            };\n          }\n\n          function A() {\n            return {\n              value: void 0,\n              done: !0\n            };\n          }\n\n          return d.prototype = w, f(v, \"constructor\", w), f(w, \"constructor\", d), d.displayName = f(w, u, \"GeneratorFunction\"), n.isGeneratorFunction = function (t) {\n            var n = \"function\" == typeof t && t.constructor;\n            return !!n && (n === d || \"GeneratorFunction\" === (n.displayName || n.name));\n          }, n.mark = function (t) {\n            return Object.setPrototypeOf ? Object.setPrototypeOf(t, w) : (t.__proto__ = w, f(t, u, \"GeneratorFunction\")), t.prototype = Object.create(v), t;\n          }, n.awrap = function (t) {\n            return {\n              __await: t\n            };\n          }, m(x.prototype), f(x.prototype, _, function () {\n            return this;\n          }), n.AsyncIterator = x, n.async = function (t, e, r, o, i) {\n            void 0 === i && (i = Promise);\n            var a = new x(l(t, e, r, o), i);\n            return n.isGeneratorFunction(e) ? a : a.next().then(function (t) {\n              return t.done ? t.value : a.next();\n            });\n          }, m(v), f(v, u, \"Generator\"), f(v, c, function () {\n            return this;\n          }), f(v, \"toString\", function () {\n            return \"[object Generator]\";\n          }), n.keys = function (t) {\n            var n = [];\n\n            for (var e in t) {\n              n.push(e);\n            }\n\n            return n.reverse(), function e() {\n              for (; n.length;) {\n                var r = n.pop();\n                if (r in t) return e.value = r, e.done = !1, e;\n              }\n\n              return e.done = !0, e;\n            };\n          }, n.values = S, L.prototype = {\n            constructor: L,\n            reset: function reset(t) {\n              if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = void 0, this.tryEntries.forEach(E), !t) for (var n in this) {\n                \"t\" === n.charAt(0) && i.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0);\n              }\n            },\n            stop: function stop() {\n              this.done = !0;\n              var t = this.tryEntries[0].completion;\n              if (\"throw\" === t.type) throw t.arg;\n              return this.rval;\n            },\n            dispatchException: function dispatchException(t) {\n              if (this.done) throw t;\n              var n = this;\n\n              function e(e, r) {\n                return a.type = \"throw\", a.arg = t, n.next = e, r && (n.method = \"next\", n.arg = void 0), !!r;\n              }\n\n              for (var r = this.tryEntries.length - 1; r >= 0; --r) {\n                var o = this.tryEntries[r],\n                    a = o.completion;\n                if (\"root\" === o.tryLoc) return e(\"end\");\n\n                if (o.tryLoc <= this.prev) {\n                  var c = i.call(o, \"catchLoc\"),\n                      _ = i.call(o, \"finallyLoc\");\n\n                  if (c && _) {\n                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);\n                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);\n                  } else if (c) {\n                    if (this.prev < o.catchLoc) return e(o.catchLoc, !0);\n                  } else {\n                    if (!_) throw new Error(\"try statement without catch or finally\");\n                    if (this.prev < o.finallyLoc) return e(o.finallyLoc);\n                  }\n                }\n              }\n            },\n            abrupt: function abrupt(t, n) {\n              for (var e = this.tryEntries.length - 1; e >= 0; --e) {\n                var r = this.tryEntries[e];\n\n                if (r.tryLoc <= this.prev && i.call(r, \"finallyLoc\") && this.prev < r.finallyLoc) {\n                  var o = r;\n                  break;\n                }\n              }\n\n              o && (\"break\" === t || \"continue\" === t) && o.tryLoc <= n && n <= o.finallyLoc && (o = null);\n              var a = o ? o.completion : {};\n              return a.type = t, a.arg = n, o ? (this.method = \"next\", this.next = o.finallyLoc, b) : this.complete(a);\n            },\n            complete: function complete(t, n) {\n              if (\"throw\" === t.type) throw t.arg;\n              return \"break\" === t.type || \"continue\" === t.type ? this.next = t.arg : \"return\" === t.type ? (this.rval = this.arg = t.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === t.type && n && (this.next = n), b;\n            },\n            finish: function finish(t) {\n              for (var n = this.tryEntries.length - 1; n >= 0; --n) {\n                var e = this.tryEntries[n];\n                if (e.finallyLoc === t) return this.complete(e.completion, e.afterLoc), E(e), b;\n              }\n            },\n            catch: function _catch(t) {\n              for (var n = this.tryEntries.length - 1; n >= 0; --n) {\n                var e = this.tryEntries[n];\n\n                if (e.tryLoc === t) {\n                  var r = e.completion;\n\n                  if (\"throw\" === r.type) {\n                    var o = r.arg;\n                    E(e);\n                  }\n\n                  return o;\n                }\n              }\n\n              throw new Error(\"illegal catch attempt\");\n            },\n            delegateYield: function delegateYield(t, n, e) {\n              return this.delegate = {\n                iterator: S(t),\n                resultName: n,\n                nextLoc: e\n              }, \"next\" === this.method && (this.arg = void 0), b;\n            }\n          }, n;\n        }\n\n        t.exports = o, t.exports.__esModule = !0, t.exports.default = t.exports;\n      },\n      425: function _(t) {\n        function n(e) {\n          return t.exports = n = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n            return _typeof(t);\n          } : function (t) {\n            return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n          }, t.exports.__esModule = !0, t.exports.default = t.exports, n(e);\n        }\n\n        t.exports = n, t.exports.__esModule = !0, t.exports.default = t.exports;\n      },\n      841: function _(t, n, e) {\n        var r = e(609)();\n        t.exports = r;\n\n        try {\n          regeneratorRuntime = r;\n        } catch (t) {\n          \"object\" == (typeof globalThis === \"undefined\" ? \"undefined\" : _typeof(globalThis)) ? globalThis.regeneratorRuntime = r : Function(\"r\", \"regeneratorRuntime = r\")(r);\n        }\n      }\n    },\n        n = {};\n\n    function e(r) {\n      var o = n[r];\n      if (void 0 !== o) return o.exports;\n      var i = n[r] = {\n        exports: {}\n      };\n      return t[r](i, i.exports, e), i.exports;\n    }\n\n    e.n = function (t) {\n      var n = t && t.__esModule ? function () {\n        return t.default;\n      } : function () {\n        return t;\n      };\n      return e.d(n, {\n        a: n\n      }), n;\n    }, e.d = function (t, n) {\n      for (var r in n) {\n        e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {\n          enumerable: !0,\n          get: n[r]\n        });\n      }\n    }, e.g = function () {\n      if (\"object\" == (typeof globalThis === \"undefined\" ? \"undefined\" : _typeof(globalThis))) return globalThis;\n\n      try {\n        return this || new Function(\"return this\")();\n      } catch (t) {\n        if (\"object\" == (typeof window === \"undefined\" ? \"undefined\" : _typeof(window))) return window;\n      }\n    }(), e.o = function (t, n) {\n      return Object.prototype.hasOwnProperty.call(t, n);\n    }, e.r = function (t) {\n      \"undefined\" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {\n        value: \"Module\"\n      }), Object.defineProperty(t, \"__esModule\", {\n        value: !0\n      });\n    };\n    var r = {};\n    return function () {\n      \"use strict\";\n\n      function t(t, n, e, r, o, i, a) {\n        try {\n          var c = t[i](a),\n              _ = c.value;\n        } catch (t) {\n          return void e(t);\n        }\n\n        c.done ? n(_) : Promise.resolve(_).then(r, o);\n      }\n\n      function n(n) {\n        return function () {\n          var e = this,\n              r = arguments;\n          return new Promise(function (o, i) {\n            var a = n.apply(e, r);\n\n            function c(n) {\n              t(a, o, i, c, _, \"next\", n);\n            }\n\n            function _(n) {\n              t(a, o, i, c, _, \"throw\", n);\n            }\n\n            c(void 0);\n          });\n        };\n      }\n\n      function o(t, n) {\n        for (var e = 0; e < n.length; e++) {\n          var r = n[e];\n          r.enumerable = r.enumerable || !1, r.configurable = !0, \"value\" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);\n        }\n      }\n\n      function i(t) {\n        return i = \"function\" == typeof Symbol && \"symbol\" == _typeof(Symbol.iterator) ? function (t) {\n          return _typeof(t);\n        } : function (t) {\n          return t && \"function\" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? \"symbol\" : _typeof(t);\n        }, i(t);\n      }\n\n      e.r(r), e.d(r, {\n        WasmBindgenTestContext: function WasmBindgenTestContext() {\n          return K;\n        },\n        __wbgtest_console_debug: function __wbgtest_console_debug() {\n          return Y;\n        },\n        __wbgtest_console_error: function __wbgtest_console_error() {\n          return H;\n        },\n        __wbgtest_console_info: function __wbgtest_console_info() {\n          return D;\n        },\n        __wbgtest_console_log: function __wbgtest_console_log() {\n          return z;\n        },\n        __wbgtest_console_warn: function __wbgtest_console_warn() {\n          return J;\n        },\n        batch_size: function batch_size() {\n          return S;\n        },\n        default: function _default() {\n          return et;\n        },\n        finalizeInit: function finalizeInit() {\n          return Z;\n        },\n        getImports: function getImports() {\n          return X;\n        },\n        get_r_from_precompute: function get_r_from_precompute() {\n          return W;\n        },\n        initSync: function initSync() {\n          return $;\n        },\n        local_sign: function local_sign() {\n          return F;\n        },\n        local_verify: function local_verify() {\n          return U;\n        },\n        precompute: function precompute() {\n          return M;\n        },\n        process_ga1: function process_ga1() {\n          return L;\n        },\n        random_generator: function random_generator() {\n          return A;\n        },\n        random_generator_free: function random_generator_free() {\n          return O;\n        },\n        setup: function setup() {\n          return P;\n        },\n        sign: function sign() {\n          return G;\n        },\n        threshold_signer: function threshold_signer() {\n          return T;\n        },\n        threshold_signer_free: function threshold_signer_free() {\n          return I;\n        }\n      });\n\n      var a,\n          c = e(841),\n          _ = e.n(c),\n          u = new Array(32).fill(void 0);\n\n      function f(t) {\n        return u[t];\n      }\n\n      u.push(void 0, null, !0, !1);\n      var l = u.length;\n\n      function s(t) {\n        var n = f(t);\n        return function (t) {\n          t < 36 || (u[t] = l, l = t);\n        }(t), n;\n      }\n\n      var b = new TextDecoder(\"utf-8\", {\n        ignoreBOM: !0,\n        fatal: !0\n      });\n      b.decode();\n      var g = new Uint8Array();\n\n      function d() {\n        return 0 === g.byteLength && (g = new Uint8Array(a.memory.buffer)), g;\n      }\n\n      function w(t, n) {\n        return b.decode(d().subarray(t, t + n));\n      }\n\n      function y(t) {\n        l === u.length && u.push(u.length + 1);\n        var n = l;\n        return l = u[n], u[n] = t, n;\n      }\n\n      var p = 0,\n          h = new TextEncoder(\"utf-8\"),\n          v = \"function\" == typeof h.encodeInto ? function (t, n) {\n        return h.encodeInto(t, n);\n      } : function (t, n) {\n        var e = h.encode(t);\n        return n.set(e), {\n          read: t.length,\n          written: e.length\n        };\n      };\n\n      function m(t, n, e) {\n        if (void 0 === e) {\n          var r = h.encode(t),\n              o = n(r.length);\n          return d().subarray(o, o + r.length).set(r), p = r.length, o;\n        }\n\n        for (var i = t.length, a = n(i), c = d(), _ = 0; _ < i; _++) {\n          var u = t.charCodeAt(_);\n          if (u > 127) break;\n          c[a + _] = u;\n        }\n\n        if (_ !== i) {\n          0 !== _ && (t = t.slice(_)), a = e(a, i, i = _ + 3 * t.length);\n          var f = d().subarray(a + _, a + i);\n          _ += v(t, f).written;\n        }\n\n        return p = _, a;\n      }\n\n      var x = new Int32Array();\n\n      function k() {\n        return 0 === x.byteLength && (x = new Int32Array(a.memory.buffer)), x;\n      }\n\n      function j(t) {\n        var n = i(t);\n        if (\"number\" == n || \"boolean\" == n || null == t) return \"\".concat(t);\n        if (\"string\" == n) return '\"'.concat(t, '\"');\n\n        if (\"symbol\" == n) {\n          var e = t.description;\n          return null == e ? \"Symbol\" : \"Symbol(\".concat(e, \")\");\n        }\n\n        if (\"function\" == n) {\n          var r = t.name;\n          return \"string\" == typeof r && r.length > 0 ? \"Function(\".concat(r, \")\") : \"Function\";\n        }\n\n        if (Array.isArray(t)) {\n          var o = t.length,\n              a = \"[\";\n          o > 0 && (a += j(t[0]));\n\n          for (var c = 1; c < o; c++) {\n            a += \", \" + j(t[c]);\n          }\n\n          return a + \"]\";\n        }\n\n        var _,\n            u = /\\[object ([^\\]]+)\\]/.exec(toString.call(t));\n\n        if (!(u.length > 1)) return toString.call(t);\n        if (\"Object\" == (_ = u[1])) try {\n          return \"Object(\" + JSON.stringify(t) + \")\";\n        } catch (t) {\n          return \"Object\";\n        }\n        return t instanceof Error ? \"\".concat(t.name, \": \").concat(t.message, \"\\n\").concat(t.stack) : _;\n      }\n\n      function E(t, n, e) {\n        a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha0b01688533da445(t, n, y(e));\n      }\n\n      function L(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16),\n              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n\n          a.process_ga1(n, e, r);\n          var o = k()[n / 4 + 0],\n              i = k()[n / 4 + 1],\n              c = k()[n / 4 + 2],\n              _ = k()[n / 4 + 3],\n              u = o,\n              f = i;\n          if (_) throw u = 0, f = 0, s(c);\n          return w(u, f);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16), a.__wbindgen_free(u, f);\n        }\n      }\n\n      function S() {\n        return a.batch_size() >>> 0;\n      }\n\n      function A(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16),\n              e = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n\n          a.random_generator(n, e, r);\n          var o = k()[n / 4 + 0],\n              i = k()[n / 4 + 1];\n          if (k()[n / 4 + 2]) throw s(i);\n          return o;\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function O(t) {\n        a.random_generator_free(t);\n      }\n\n      function T(t, n, e, r, o, i) {\n        try {\n          var c = a.__wbindgen_add_to_stack_pointer(-16),\n              _ = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              u = p,\n              f = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              l = p,\n              b = m(i, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              g = p;\n\n          a.threshold_signer(c, _, u, n, e, r, f, l, b, g);\n          var d = k()[c / 4 + 0],\n              w = k()[c / 4 + 1];\n          if (k()[c / 4 + 2]) throw s(w);\n          return d;\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function I(t) {\n        a.threshold_signer_free(t);\n      }\n\n      function P(t, n) {\n        return s(a.setup(t, n));\n      }\n\n      function M(t, n, e) {\n        return s(a.precompute(y(t), n, e));\n      }\n\n      function F(t, n, e) {\n        try {\n          var r = a.__wbindgen_add_to_stack_pointer(-16),\n              o = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              i = p;\n\n          a.local_sign(r, o, i, n, y(e));\n          var c = k()[r / 4 + 0],\n              _ = k()[r / 4 + 1];\n          if (k()[r / 4 + 2]) throw s(_);\n          return s(c);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function W(t) {\n        try {\n          var n = a.__wbindgen_add_to_stack_pointer(-16);\n\n          a.get_r_from_precompute(n, y(t));\n          var e = k()[n / 4 + 0],\n              r = k()[n / 4 + 1];\n          if (k()[n / 4 + 2]) throw s(r);\n          return s(e);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      var R = new Uint32Array();\n\n      function N(t, n) {\n        for (var e = n(4 * t.length), r = (0 === R.byteLength && (R = new Uint32Array(a.memory.buffer)), R), o = 0; o < t.length; o++) {\n          r[e / 4 + o] = y(t[o]);\n        }\n\n        return p = t.length, e;\n      }\n\n      function U(t, n, e, r, o) {\n        try {\n          var i = a.__wbindgen_add_to_stack_pointer(-16),\n              c = m(t, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              _ = p,\n              u = N(r, a.__wbindgen_malloc),\n              f = p,\n              l = m(o, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              b = p;\n\n          a.local_verify(i, c, _, n, y(e), u, f, l, b);\n          var g = k()[i / 4 + 0],\n              d = k()[i / 4 + 1];\n          if (k()[i / 4 + 2]) throw s(d);\n          return s(g);\n        } finally {\n          a.__wbindgen_add_to_stack_pointer(16);\n        }\n      }\n\n      function G(t, n, e, r, o) {\n        var i = m(n, a.__wbindgen_malloc, a.__wbindgen_realloc),\n            c = p;\n        return s(a.sign(y(t), i, c, e, r, o));\n      }\n\n      function C(t, n) {\n        try {\n          return t.apply(this, n);\n        } catch (t) {\n          a.__wbindgen_exn_store(y(t));\n        }\n      }\n\n      var B = 32;\n\n      function q(t) {\n        if (1 == B) throw new Error(\"out of js stack\");\n        return u[--B] = t, B;\n      }\n\n      function z(t) {\n        try {\n          a.__wbgtest_console_log(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function Y(t) {\n        try {\n          a.__wbgtest_console_debug(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function D(t) {\n        try {\n          a.__wbgtest_console_info(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function J(t) {\n        try {\n          a.__wbgtest_console_warn(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      function H(t) {\n        try {\n          a.__wbgtest_console_error(q(t));\n        } finally {\n          u[B++] = void 0;\n        }\n      }\n\n      var K = function () {\n        function t() {\n          !function (t, n) {\n            if (!(t instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n          }(this, t);\n          var n = a.wasmbindgentestcontext_new();\n          return t.__wrap(n);\n        }\n\n        var n, e, r;\n        return n = t, r = [{\n          key: \"__wrap\",\n          value: function value(n) {\n            var e = Object.create(t.prototype);\n            return e.ptr = n, e;\n          }\n        }], (e = [{\n          key: \"__destroy_into_raw\",\n          value: function value() {\n            var t = this.ptr;\n            return this.ptr = 0, t;\n          }\n        }, {\n          key: \"free\",\n          value: function value() {\n            var t = this.__destroy_into_raw();\n\n            a.__wbg_wasmbindgentestcontext_free(t);\n          }\n        }, {\n          key: \"args\",\n          value: function value(t) {\n            var n = N(t, a.__wbindgen_malloc),\n                e = p;\n            a.wasmbindgentestcontext_args(this.ptr, n, e);\n          }\n        }, {\n          key: \"run\",\n          value: function value(t) {\n            var n = N(t, a.__wbindgen_malloc),\n                e = p;\n            return s(a.wasmbindgentestcontext_run(this.ptr, n, e));\n          }\n        }]) && o(n.prototype, e), r && o(n, r), Object.defineProperty(n, \"prototype\", {\n          writable: !1\n        }), t;\n      }();\n\n      function Q(t, n) {\n        return V.apply(this, arguments);\n      }\n\n      function V() {\n        return (V = n(_().mark(function t(n, e) {\n          var r, o;\n          return _().wrap(function (t) {\n            for (;;) {\n              switch (t.prev = t.next) {\n                case 0:\n                  if (!(\"function\" == typeof Response && n instanceof Response)) {\n                    t.next = 23;\n                    break;\n                  }\n\n                  if (\"function\" != typeof WebAssembly.instantiateStreaming) {\n                    t.next = 15;\n                    break;\n                  }\n\n                  return t.prev = 2, t.next = 5, WebAssembly.instantiateStreaming(n, e);\n\n                case 5:\n                case 20:\n                  return t.abrupt(\"return\", t.sent);\n\n                case 8:\n                  if (t.prev = 8, t.t0 = t.catch(2), \"application/wasm\" == n.headers.get(\"Content-Type\")) {\n                    t.next = 14;\n                    break;\n                  }\n\n                  console.warn(\"`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\\n\", t.t0), t.next = 15;\n                  break;\n\n                case 14:\n                  throw t.t0;\n\n                case 15:\n                  return t.next = 17, n.arrayBuffer();\n\n                case 17:\n                  return r = t.sent, t.next = 20, WebAssembly.instantiate(r, e);\n\n                case 23:\n                  return t.next = 25, WebAssembly.instantiate(n, e);\n\n                case 25:\n                  if (!((o = t.sent) instanceof WebAssembly.Instance)) {\n                    t.next = 30;\n                    break;\n                  }\n\n                  return t.abrupt(\"return\", {\n                    instance: o,\n                    module: n\n                  });\n\n                case 30:\n                  return t.abrupt(\"return\", o);\n\n                case 31:\n                case \"end\":\n                  return t.stop();\n              }\n            }\n          }, t, null, [[2, 8]]);\n        }))).apply(this, arguments);\n      }\n\n      function X() {\n        var t = {\n          wbg: {}\n        };\n        return t.wbg.__wbindgen_object_drop_ref = function (t) {\n          s(t);\n        }, t.wbg.__wbindgen_cb_drop = function (t) {\n          var n = s(t).original;\n          return 1 == n.cnt-- && (n.a = 0, !0);\n        }, t.wbg.__wbg_jssendmsg_72dd946a7fbc8ccd = function (t, n, e, r, o, i, c, _) {\n          try {\n            return y(js_send_msg(w(t, n), e >>> 0, r >>> 0, w(o, i), w(c, _)));\n          } finally {\n            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i), a.__wbindgen_free(c, _);\n          }\n        }, t.wbg.__wbindgen_is_falsy = function (t) {\n          return !f(t);\n        }, t.wbg.__wbindgen_string_new = function (t, n) {\n          return y(w(t, n));\n        }, t.wbg.__wbindgen_bigint_new = function (t, n) {\n          return y(BigInt(w(t, n)));\n        }, t.wbg.__wbg_jsreadmsg_8a12f6e25645f453 = function (t, n, e, r, o, i) {\n          try {\n            return y(js_read_msg(w(t, n), e >>> 0, r >>> 0, w(o, i)));\n          } finally {\n            a.__wbindgen_free(t, n), a.__wbindgen_free(o, i);\n          }\n        }, t.wbg.__wbindgen_string_get = function (t, n) {\n          var e = f(n),\n              r = \"string\" == typeof e ? e : void 0,\n              o = null == r ? 0 : m(r, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              i = p;\n          k()[t / 4 + 1] = i, k()[t / 4 + 0] = o;\n        }, t.wbg.__wbindgen_number_new = function (t) {\n          return y(t);\n        }, t.wbg.__wbg_newnoargs_971e9a5abe185139 = function (t, n) {\n          return y(new Function(w(t, n)));\n        }, t.wbg.__wbg_call_33d7bcddbbfa394a = function () {\n          return C(function (t, n) {\n            return y(f(t).call(f(n)));\n          }, arguments);\n        }, t.wbg.__wbindgen_object_clone_ref = function (t) {\n          return y(f(t));\n        }, t.wbg.__wbg_self_fd00a1ef86d1b2ed = function () {\n          return C(function () {\n            return y(self.self);\n          }, arguments);\n        }, t.wbg.__wbg_window_6f6e346d8bbd61d7 = function () {\n          return C(function () {\n            return y(window.window);\n          }, arguments);\n        }, t.wbg.__wbg_globalThis_3348936ac49df00a = function () {\n          return C(function () {\n            return y(globalThis.globalThis);\n          }, arguments);\n        }, t.wbg.__wbg_global_67175caf56f55ca9 = function () {\n          return C(function () {\n            return y(e.g.global);\n          }, arguments);\n        }, t.wbg.__wbindgen_is_undefined = function (t) {\n          return void 0 === f(t);\n        }, t.wbg.__wbg_forEach_49bfa6f148ac0f7d = function (t, n, e) {\n          try {\n            var r = {\n              a: n,\n              b: e\n            };\n            f(t).forEach(function (t, n, e) {\n              var o = r.a;\n              r.a = 0;\n\n              try {\n                return function (t, n, e, r, o) {\n                  a.wasm_bindgen__convert__closures__invoke3_mut__h1481b0b3a4794987(t, n, y(e), r, y(o));\n                }(o, r.b, t, n, e);\n              } finally {\n                r.a = o;\n              }\n            });\n          } finally {\n            r.a = r.b = 0;\n          }\n        }, t.wbg.__wbg_message_924b46658b69b295 = function (t) {\n          return y(f(t).message);\n        }, t.wbg.__wbg_name_e88a3b3a0f6b23c2 = function (t) {\n          return y(f(t).name);\n        }, t.wbg.__wbg_call_65af9f665ab6ade5 = function () {\n          return C(function (t, n, e) {\n            return y(f(t).call(f(n), f(e)));\n          }, arguments);\n        }, t.wbg.__wbg_new_52205195aa880fc2 = function (t, n) {\n          try {\n            var e = {\n              a: t,\n              b: n\n            },\n                r = new Promise(function (t, n) {\n              var r = e.a;\n              e.a = 0;\n\n              try {\n                return function (t, n, e, r) {\n                  a.wasm_bindgen__convert__closures__invoke2_mut__h31f9dc4b753d7d17(t, n, y(e), y(r));\n                }(r, e.b, t, n);\n              } finally {\n                e.a = r;\n              }\n            });\n            return y(r);\n          } finally {\n            e.a = e.b = 0;\n          }\n        }, t.wbg.__wbg_resolve_0107b3a501450ba0 = function (t) {\n          return y(Promise.resolve(f(t)));\n        }, t.wbg.__wbg_then_18da6e5453572fc8 = function (t, n) {\n          return y(f(t).then(f(n)));\n        }, t.wbg.__wbg_then_e5489f796341454b = function (t, n, e) {\n          return y(f(t).then(f(n), f(e)));\n        }, t.wbg.__wbg_buffer_34f5ec9f8a838ba0 = function (t) {\n          return y(f(t).buffer);\n        }, t.wbg.__wbg_new_cda198d9dbc6d7ea = function (t) {\n          return y(new Uint8Array(f(t)));\n        }, t.wbg.__wbg_set_1a930cfcda1a8067 = function (t, n, e) {\n          f(t).set(f(n), e >>> 0);\n        }, t.wbg.__wbg_length_51f19f73d6d9eff3 = function (t) {\n          return f(t).length;\n        }, t.wbg.__wbindgen_debug_string = function (t, n) {\n          var e = m(j(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbindgen_throw = function (t, n) {\n          throw new Error(w(t, n));\n        }, t.wbg.__wbindgen_memory = function () {\n          return y(a.memory);\n        }, t.wbg.__wbg_log_d4cf02b84d94d5cc = function (t, n) {\n          console.log(w(t, n));\n        }, t.wbg.__wbg_String_1e50b0ad2927b74c = function (t, n) {\n          var e = m(String(f(n)), a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_new_693216e109162396 = function () {\n          return y(new Error());\n        }, t.wbg.__wbg_stack_0ddaca5d1abfb52f = function (t, n) {\n          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_error_09919627ac0992f5 = function (t, n) {\n          try {\n            console.error(w(t, n));\n          } finally {\n            a.__wbindgen_free(t, n);\n          }\n        }, t.wbg.__wbg_static_accessor_document_57521ac637ea23b1 = function () {\n          return y(document);\n        }, t.wbg.__wbg_self_331f85453774af9f = function (t) {\n          return y(f(t).self);\n        }, t.wbg.__wbindgen_jsval_eq = function (t, n) {\n          return f(t) === f(n);\n        }, t.wbg.__wbg_getElementById_9ef7f5a90430a467 = function (t, n, e) {\n          return y(f(t).getElementById(w(n, e)));\n        }, t.wbg.__wbg_settextcontent_2e10a7628cf8a079 = function (t, n, e) {\n          f(t).textContent = w(n, e);\n        }, t.wbg.__wbg_textcontent_2eda1e93d7676aaa = function (t, n) {\n          var e = m(f(n).textContent, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbg_stack_c674c54b561c0712 = function (t) {\n          return y(f(t).stack);\n        }, t.wbg.__wbg_stack_41a23a715c0aee96 = function (t, n) {\n          var e = m(f(n).stack, a.__wbindgen_malloc, a.__wbindgen_realloc),\n              r = p;\n          k()[t / 4 + 1] = r, k()[t / 4 + 0] = e;\n        }, t.wbg.__wbindgen_closure_wrapper519 = function (t, n, e) {\n          var r = function (t, n, e, r) {\n            var o = {\n              a: t,\n              b: n,\n              cnt: 1,\n              dtor: 111\n            },\n                i = function i() {\n              o.cnt++;\n              var t = o.a;\n              o.a = 0;\n\n              try {\n                for (var n = arguments.length, e = new Array(n), i = 0; i < n; i++) {\n                  e[i] = arguments[i];\n                }\n\n                return r.apply(void 0, [t, o.b].concat(e));\n              } finally {\n                0 == --o.cnt ? a.__wbindgen_export_2.get(o.dtor)(t, o.b) : o.a = t;\n              }\n            };\n\n            return i.original = o, i;\n          }(t, n, 0, E);\n\n          return y(r);\n        }, t;\n      }\n\n      function Z(t, n) {\n        return a = t.exports, tt.__wbindgen_wasm_module = n, x = new Int32Array(), R = new Uint32Array(), g = new Uint8Array(), a;\n      }\n\n      function $(t) {\n        var n = X();\n        return t instanceof WebAssembly.Module || (t = new WebAssembly.Module(t)), Z(new WebAssembly.Instance(t, n), t);\n      }\n\n      function tt(t) {\n        return nt.apply(this, arguments);\n      }\n\n      function nt() {\n        return (nt = n(_().mark(function t(n) {\n          var e, r, o, i;\n          return _().wrap(function (t) {\n            for (;;) {\n              switch (t.prev = t.next) {\n                case 0:\n                  if (void 0 !== n) {\n                    t.next = 2;\n                    break;\n                  }\n\n                  throw new Error(\"no\");\n\n                case 2:\n                  return e = X(), (\"string\" == typeof n || \"function\" == typeof Request && n instanceof Request || \"function\" == typeof URL && n instanceof URL) && (n = fetch(n)), t.t0 = Q, t.next = 8, n;\n\n                case 8:\n                  return t.t1 = t.sent, t.t2 = e, t.next = 12, (0, t.t0)(t.t1, t.t2);\n\n                case 12:\n                  return r = t.sent, o = r.instance, i = r.module, t.abrupt(\"return\", Z(o, i));\n\n                case 16:\n                case \"end\":\n                  return t.stop();\n              }\n            }\n          }, t);\n        }))).apply(this, arguments);\n      }\n\n      var et = tt;\n    }(), r;\n  }();\n});\n\n/***/ }),\n\n/***/ 609:\n/***/ ((module, __unused_webpack_exports, __webpack_require__) => {\n\nvar _typeof = (__webpack_require__(425)[\"default\"]);\n\nfunction _regeneratorRuntime() {\n  \"use strict\";\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */\n\n  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return exports;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n  var exports = {},\n      Op = Object.prototype,\n      hasOwn = Op.hasOwnProperty,\n      $Symbol = \"function\" == typeof Symbol ? Symbol : {},\n      iteratorSymbol = $Symbol.iterator || \"@@iterator\",\n      asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\",\n      toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    return Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: !0,\n      configurable: !0,\n      writable: !0\n    }), obj[key];\n  }\n\n  try {\n    define({}, \"\");\n  } catch (err) {\n    define = function define(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,\n        generator = Object.create(protoGenerator.prototype),\n        context = new Context(tryLocsList || []);\n    return generator._invoke = function (innerFn, self, context) {\n      var state = \"suspendedStart\";\n      return function (method, arg) {\n        if (\"executing\" === state) throw new Error(\"Generator is already running\");\n\n        if (\"completed\" === state) {\n          if (\"throw\" === method) throw arg;\n          return doneResult();\n        }\n\n        for (context.method = method, context.arg = arg;;) {\n          var delegate = context.delegate;\n\n          if (delegate) {\n            var delegateResult = maybeInvokeDelegate(delegate, context);\n\n            if (delegateResult) {\n              if (delegateResult === ContinueSentinel) continue;\n              return delegateResult;\n            }\n          }\n\n          if (\"next\" === context.method) context.sent = context._sent = context.arg;else if (\"throw\" === context.method) {\n            if (\"suspendedStart\" === state) throw state = \"completed\", context.arg;\n            context.dispatchException(context.arg);\n          } else \"return\" === context.method && context.abrupt(\"return\", context.arg);\n          state = \"executing\";\n          var record = tryCatch(innerFn, self, context);\n\n          if (\"normal\" === record.type) {\n            if (state = context.done ? \"completed\" : \"suspendedYield\", record.arg === ContinueSentinel) continue;\n            return {\n              value: record.arg,\n              done: context.done\n            };\n          }\n\n          \"throw\" === record.type && (state = \"completed\", context.method = \"throw\", context.arg = record.arg);\n        }\n      };\n    }(innerFn, self, context), generator;\n  }\n\n  function tryCatch(fn, obj, arg) {\n    try {\n      return {\n        type: \"normal\",\n        arg: fn.call(obj, arg)\n      };\n    } catch (err) {\n      return {\n        type: \"throw\",\n        arg: err\n      };\n    }\n  }\n\n  exports.wrap = wrap;\n  var ContinueSentinel = {};\n\n  function Generator() {}\n\n  function GeneratorFunction() {}\n\n  function GeneratorFunctionPrototype() {}\n\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n  var getProto = Object.getPrototypeOf,\n      NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);\n  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);\n\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function (method) {\n      define(prototype, method, function (arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n\n      if (\"throw\" !== record.type) {\n        var result = record.arg,\n            value = result.value;\n        return value && \"object\" == _typeof(value) && hasOwn.call(value, \"__await\") ? PromiseImpl.resolve(value.__await).then(function (value) {\n          invoke(\"next\", value, resolve, reject);\n        }, function (err) {\n          invoke(\"throw\", err, resolve, reject);\n        }) : PromiseImpl.resolve(value).then(function (unwrapped) {\n          result.value = unwrapped, resolve(result);\n        }, function (error) {\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n\n      reject(record.arg);\n    }\n\n    var previousPromise;\n\n    this._invoke = function (method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function (resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();\n    };\n  }\n\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n\n    if (undefined === method) {\n      if (context.delegate = null, \"throw\" === context.method) {\n        if (delegate.iterator[\"return\"] && (context.method = \"return\", context.arg = undefined, maybeInvokeDelegate(delegate, context), \"throw\" === context.method)) return ContinueSentinel;\n        context.method = \"throw\", context.arg = new TypeError(\"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n    if (\"throw\" === record.type) return context.method = \"throw\", context.arg = record.arg, context.delegate = null, ContinueSentinel;\n    var info = record.arg;\n    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, \"return\" !== context.method && (context.method = \"next\", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = \"throw\", context.arg = new TypeError(\"iterator result is not an object\"), context.delegate = null, ContinueSentinel);\n  }\n\n  function pushTryEntry(locs) {\n    var entry = {\n      tryLoc: locs[0]\n    };\n    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\", delete record.arg, entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    this.tryEntries = [{\n      tryLoc: \"root\"\n    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);\n  }\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) return iteratorMethod.call(iterable);\n      if (\"function\" == typeof iterable.next) return iterable;\n\n      if (!isNaN(iterable.length)) {\n        var i = -1,\n            next = function next() {\n          for (; ++i < iterable.length;) {\n            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;\n          }\n\n          return next.value = undefined, next.done = !0, next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    return {\n      next: doneResult\n    };\n  }\n\n  function doneResult() {\n    return {\n      value: undefined,\n      done: !0\n    };\n  }\n\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, \"constructor\", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, \"GeneratorFunction\"), exports.isGeneratorFunction = function (genFun) {\n    var ctor = \"function\" == typeof genFun && genFun.constructor;\n    return !!ctor && (ctor === GeneratorFunction || \"GeneratorFunction\" === (ctor.displayName || ctor.name));\n  }, exports.mark = function (genFun) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, \"GeneratorFunction\")), genFun.prototype = Object.create(Gp), genFun;\n  }, exports.awrap = function (arg) {\n    return {\n      __await: arg\n    };\n  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    void 0 === PromiseImpl && (PromiseImpl = Promise);\n    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);\n    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {\n      return result.done ? result.value : iter.next();\n    });\n  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, \"Generator\"), define(Gp, iteratorSymbol, function () {\n    return this;\n  }), define(Gp, \"toString\", function () {\n    return \"[object Generator]\";\n  }), exports.keys = function (object) {\n    var keys = [];\n\n    for (var key in object) {\n      keys.push(key);\n    }\n\n    return keys.reverse(), function next() {\n      for (; keys.length;) {\n        var key = keys.pop();\n        if (key in object) return next.value = key, next.done = !1, next;\n      }\n\n      return next.done = !0, next;\n    };\n  }, exports.values = values, Context.prototype = {\n    constructor: Context,\n    reset: function reset(skipTempReset) {\n      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = \"next\", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {\n        \"t\" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);\n      }\n    },\n    stop: function stop() {\n      this.done = !0;\n      var rootRecord = this.tryEntries[0].completion;\n      if (\"throw\" === rootRecord.type) throw rootRecord.arg;\n      return this.rval;\n    },\n    dispatchException: function dispatchException(exception) {\n      if (this.done) throw exception;\n      var context = this;\n\n      function handle(loc, caught) {\n        return record.type = \"throw\", record.arg = exception, context.next = loc, caught && (context.method = \"next\", context.arg = undefined), !!caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i],\n            record = entry.completion;\n        if (\"root\" === entry.tryLoc) return handle(\"end\");\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\"),\n              hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);\n          } else {\n            if (!hasFinally) throw new Error(\"try statement without catch or finally\");\n            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);\n          }\n        }\n      }\n    },\n    abrupt: function abrupt(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc <= this.prev && hasOwn.call(entry, \"finallyLoc\") && this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      finallyEntry && (\"break\" === type || \"continue\" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);\n      var record = finallyEntry ? finallyEntry.completion : {};\n      return record.type = type, record.arg = arg, finallyEntry ? (this.method = \"next\", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);\n    },\n    complete: function complete(record, afterLoc) {\n      if (\"throw\" === record.type) throw record.arg;\n      return \"break\" === record.type || \"continue\" === record.type ? this.next = record.arg : \"return\" === record.type ? (this.rval = this.arg = record.arg, this.method = \"return\", this.next = \"end\") : \"normal\" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;\n    },\n    finish: function finish(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;\n      }\n    },\n    \"catch\": function _catch(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n\n          if (\"throw\" === record.type) {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n\n          return thrown;\n        }\n      }\n\n      throw new Error(\"illegal catch attempt\");\n    },\n    delegateYield: function delegateYield(iterable, resultName, nextLoc) {\n      return this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      }, \"next\" === this.method && (this.arg = undefined), ContinueSentinel;\n    }\n  }, exports;\n}\n\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n/***/ }),\n\n/***/ 425:\n/***/ ((module) => {\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  return (module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) {\n    return typeof obj;\n  } : function (obj) {\n    return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports), _typeof(obj);\n}\n\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n/***/ }),\n\n/***/ 841:\n/***/ ((module, __unused_webpack_exports, __webpack_require__) => {\n\n// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(609)();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\tid: moduleId,\n/******/ \t\t\tloaded: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n/******/ \t\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.loaded = true;\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/compat get default export */\n/******/ \t(() => {\n/******/ \t\t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t\t__webpack_require__.n = (module) => {\n/******/ \t\t\tvar getter = module && module.__esModule ?\n/******/ \t\t\t\t() => (module['default']) :\n/******/ \t\t\t\t() => (module);\n/******/ \t\t\t__webpack_require__.d(getter, { a: getter });\n/******/ \t\t\treturn getter;\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__webpack_require__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/node module decorator */\n/******/ \t(() => {\n/******/ \t\t__webpack_require__.nmd = (module) => {\n/******/ \t\t\tmodule.paths = [];\n/******/ \t\t\tif (!module.children) module.children = [];\n/******/ \t\t\treturn module;\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\nvar __webpack_exports__ = {};\n// This entry need to be wrapped in an IIFE because it need to be in strict mode.\n(() => {\n\"use strict\";\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"instantiate\": () => (/* binding */ instantiate),\n  \"takeAction\": () => (/* binding */ takeAction)\n});\n\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js\nfunction _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n\n  for (var i = 0, arr2 = new Array(len); i < len; i++) {\n    arr2[i] = arr[i];\n  }\n\n  return arr2;\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js\n\nfunction _arrayWithoutHoles(arr) {\n  if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/iterableToArray.js\nfunction _iterableToArray(iter) {\n  if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\n\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\n\n\n\n\nfunction _toConsumableArray(arr) {\n  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\n;// CONCATENATED MODULE: ../../node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    Promise.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new Promise(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n// EXTERNAL MODULE: ../../node_modules/@babel/runtime/regenerator/index.js\nvar regenerator = __webpack_require__(841);\nvar regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);\n// EXTERNAL MODULE: ../tss-lib/dist/dkls.min.js\nvar dkls_min = __webpack_require__(400);\nvar dkls_min_default = /*#__PURE__*/__webpack_require__.n(dkls_min);\n;// CONCATENATED MODULE: ../../node_modules/workerize-loader/dist/rpc-worker-loader.js!../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[0].use!./src/worker/worker.js\n\n\n\n\nvar instantiate = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee(wasmFileUrl) {\n    return regenerator_default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return dkls_min_default()(wasmFileUrl);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function instantiate(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar takeAction = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regenerator_default().mark(function _callee2(method, args) {\n    return regenerator_default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            return _context2.abrupt(\"return\", dkls_min[method].apply(dkls_min, _toConsumableArray(args)));\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function takeAction(_x2, _x3) {\n    return _ref2.apply(this, arguments);\n  };\n}();\naddEventListener('message', function (e) {var _e$data = e.data,type = _e$data.type,method = _e$data.method,id = _e$data.id,params = _e$data.params,f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () {return f.apply(__webpack_exports__, params);});} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});\n})();\n\n/******/ })()\n;\n//# sourceMappingURL=513b39875afdb9a23b8e.worker.js.map"])));
					addMethods(w, methods)
					
					return w
				}
			

/***/ }),

/***/ 475:
/***/ ((module) => {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;
    if (d.type !== 'RPC') return;

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var _arguments = arguments;
      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: [].slice.call(_arguments)
        });
      });
    };
  });
}

module.exports = addMethods;
//# sourceMappingURL=rpc-wrapper.js.map


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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Client": () => (/* reexport */ Client),
  "localStorageDB": () => (/* reexport */ localStorageDB)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/classCallCheck"
const classCallCheck_namespaceObject = require("@babel/runtime/helpers/classCallCheck");
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/createClass"
const createClass_namespaceObject = require("@babel/runtime/helpers/createClass");
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/helpers/asyncToGenerator"
const asyncToGenerator_namespaceObject = require("@babel/runtime/helpers/asyncToGenerator");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_namespaceObject);
;// CONCATENATED MODULE: external "@babel/runtime/regenerator"
const regenerator_namespaceObject = require("@babel/runtime/regenerator");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/eccrypto"
const eccrypto_namespaceObject = require("@toruslabs/eccrypto");
;// CONCATENATED MODULE: external "bn.js"
const external_bn_js_namespaceObject = require("bn.js");
var external_bn_js_default = /*#__PURE__*/__webpack_require__.n(external_bn_js_namespaceObject);
;// CONCATENATED MODULE: external "keccak256"
const external_keccak256_namespaceObject = require("keccak256");
var external_keccak256_default = /*#__PURE__*/__webpack_require__.n(external_keccak256_namespaceObject);
// EXTERNAL MODULE: ../../node_modules/workerize-loader/dist/index.js?inline!./src/worker/worker.js
var worker_worker = __webpack_require__(304);
var worker_default = /*#__PURE__*/__webpack_require__.n(worker_worker);
;// CONCATENATED MODULE: ./src/worker/index.ts




// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line


var TssWebWorker = /*#__PURE__*/function () {
  function TssWebWorker(_wasmUrl) {
    classCallCheck_default()(this, TssWebWorker);

    this._wasmUrl = _wasmUrl;
  }

  createClass_default()(TssWebWorker, [{
    key: "work",
    value: function () {
      var _work = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(method, args) {
        var worker, mes;
        return regenerator_default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                worker = worker_default()();
                _context.next = 4;
                return worker.instantiate(this._wasmUrl);

              case 4:
                _context.next = 6;
                return worker.takeAction(method, args);

              case 6:
                mes = _context.sent;
                worker.terminate();
                return _context.abrupt("return", mes);

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.error(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 11]]);
      }));

      function work(_x, _x2) {
        return _work.apply(this, arguments);
      }

      return work;
    }()
  }]);

  return TssWebWorker;
}();

/* harmony default export */ const src_worker = (TssWebWorker);
;// CONCATENATED MODULE: ./src/client.ts





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



// import axios from "axios";


 // TODO: create namespace for globals

if (globalThis.tss_clients === undefined) {
  globalThis.tss_clients = {};
}

if (globalThis.js_read_msg === undefined) {
  globalThis.js_read_msg = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee(session, self_index, party, msg_type) {
      var tss_client, mm;
      return regenerator_default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              tss_client = globalThis.tss_clients[session];
              tss_client.log("reading msg, ".concat(msg_type));

              if (!(msg_type === "ga1_worker_support")) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", "supported");

            case 4:
              mm = tss_client.msgQueue.find(function (m) {
                return m.sender === party && m.recipient === self_index && m.msg_type === msg_type;
              });

              if (mm) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", new Promise(function (resolve) {
                tss_client.pendingReads["session-".concat(session, ":sender-").concat(party, ":recipient-").concat(self_index, ":msg_type-").concat(msg_type)] = resolve;
              }));

            case 7:
              return _context.abrupt("return", mm.msg_data);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x, _x2, _x3, _x4) {
      return _ref.apply(this, arguments);
    };
  }();
}

globalThis.process_ga1 = /*#__PURE__*/function () {
  var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee2(tssImportUrl, msg_data) {
    var worker, res;
    return regenerator_default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            worker = new src_worker(tssImportUrl);
            res = worker.work("process_ga1", [msg_data]);
            return _context2.abrupt("return", res);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function (_x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

if (globalThis.js_send_msg === undefined) {
  globalThis.js_send_msg = /*#__PURE__*/function () {
    var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee3(session, self_index, party, msg_type, msg_data) {
      var tss_client, socket, endpoint;
      return regenerator_default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              tss_client = globalThis.tss_clients[session];
              tss_client.log("sending msg, ".concat(msg_type));

              if (!(msg_type.indexOf("ga1_data_unprocessed") > -1)) {
                _context3.next = 5;
                break;
              }

              globalThis.process_ga1(tss_client.tssImportUrl, msg_data).then(function (processed_data) {
                var key = "session-".concat(session, ":sender-").concat(party, ":recipient-").concat(self_index, ":msg_type-").concat(session, "~ga1_data_processed");
                var pendingRead = tss_client.pendingReads[key];

                if (pendingRead !== undefined) {
                  pendingRead(processed_data);
                } else {
                  tss_client.msgQueue.push({
                    session: session,
                    sender: party,
                    recipient: self_index,
                    msg_type: "".concat(session, "~ga1_data_processed"),
                    msg_data: processed_data
                  });
                }

                return true;
              });
              return _context3.abrupt("return", true);

            case 5:
              if (tss_client.websocketOnly) {
                socket = tss_client.sockets[party];
                socket.emit("send_msg", {
                  session: session,
                  sender: self_index,
                  recipient: party,
                  msg_type: msg_type,
                  msg_data: msg_data
                });
              } else {
                endpoint = tss_client.lookupEndpoint(session, party);
                fetch("".concat(endpoint, "/send"), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    session: session,
                    sender: self_index,
                    recipient: party,
                    msg_type: msg_type,
                    msg_data: msg_data
                  })
                }); // axios.post(`${endpoint}/send`, {
                //   session,
                //   sender: self_index,
                //   recipient: party,
                //   msg_type,
                //   msg_data,
                // });
              }

              return _context3.abrupt("return", true);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function (_x7, _x8, _x9, _x10, _x11) {
      return _ref3.apply(this, arguments);
    };
  }();
}

var Client = /*#__PURE__*/function () {
  // Note: create sockets externally before passing it in in the constructor to allow socket reuse
  function Client(_session, _index, _parties, _endpoints, _sockets, _share, _pubKey, _websocketOnly, _tssImportUrl) {
    var _this = this;

    classCallCheck_default()(this, Client);

    defineProperty_default()(this, "session", void 0);

    defineProperty_default()(this, "index", void 0);

    defineProperty_default()(this, "parties", void 0);

    defineProperty_default()(this, "msgQueue", []);

    defineProperty_default()(this, "pendingReads", {});

    defineProperty_default()(this, "sockets", void 0);

    defineProperty_default()(this, "endpoints", void 0);

    defineProperty_default()(this, "share", void 0);

    defineProperty_default()(this, "pubKey", void 0);

    defineProperty_default()(this, "precomputes", []);

    defineProperty_default()(this, "websocketOnly", void 0);

    defineProperty_default()(this, "tssImportUrl", void 0);

    defineProperty_default()(this, "_startPrecomputeTime", void 0);

    defineProperty_default()(this, "_endPrecomputeTime", void 0);

    defineProperty_default()(this, "_startSignTime", void 0);

    defineProperty_default()(this, "_endSignTime", void 0);

    defineProperty_default()(this, "log", void 0);

    defineProperty_default()(this, "_ready", void 0);

    defineProperty_default()(this, "_consumed", void 0);

    defineProperty_default()(this, "_readyResolves", []);

    defineProperty_default()(this, "_readyPromises", []);

    defineProperty_default()(this, "_readyPromiseAll", void 0);

    defineProperty_default()(this, "_signer", void 0);

    defineProperty_default()(this, "_rng", void 0);

    if (_parties.length !== _sockets.length) {
      throw new Error("parties and sockets length must be equal, fill with nulls if necessary");
    }

    if (_parties.length !== _endpoints.length) {
      throw new Error("parties and endpoints length must be equal, fill with nulls if necessary");
    }

    this.session = _session;
    this.index = _index;
    this.parties = _parties;
    this.endpoints = _endpoints;
    this.sockets = _sockets;
    this.share = _share;
    this.pubKey = _pubKey;
    this.websocketOnly = _websocketOnly;
    this.tssImportUrl = _tssImportUrl;
    this.log = console.log;
    this._ready = false;
    this._consumed = false;

    _sockets.map(function (socket) {
      if (socket === undefined || socket === null) {
        var clientResolve;

        _this._readyPromises.push(new Promise(function (r) {
          return clientResolve = r;
        }));

        _this._readyResolves.push(clientResolve);

        return;
      }

      if (socket.hasListeners("send")) {
        socket.off("send");
      } // create pending promises for each server that resolves when precompute for that server is complete


      var resolve;

      _this._readyPromises.push(new Promise(function (r) {
        return resolve = r;
      }));

      _this._readyResolves.push(resolve); // Add listener for incoming messages


      socket.on("send", /*#__PURE__*/function () {
        var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee4(data, cb) {
          var session, sender, recipient, msg_type, msg_data, pendingRead;
          return regenerator_default().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  session = data.session, sender = data.sender, recipient = data.recipient, msg_type = data.msg_type, msg_data = data.msg_data;

                  if (!(session !== _this.session)) {
                    _context4.next = 4;
                    break;
                  }

                  _this.log("ignoring message for a different session... client session: ".concat(_this.session, ", message session: ").concat(session));

                  return _context4.abrupt("return");

                case 4:
                  pendingRead = _this.pendingReads["session-".concat(session, ":sender-").concat(sender, ":recipient-").concat(recipient, ":msg_type-").concat(msg_type)];

                  if (pendingRead !== undefined) {
                    // globalThis.total_incoming += msg_data.length;
                    // globalThis.total_incoming_msg.push(msg_data);
                    pendingRead(msg_data);
                  } else {
                    _this.msgQueue.push({
                      session: session,
                      sender: sender,
                      recipient: recipient,
                      msg_type: msg_type,
                      msg_data: msg_data
                    });
                  }

                  if (cb) cb();

                case 7:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function (_x12, _x13) {
          return _ref4.apply(this, arguments);
        };
      }()); // Add listener for completion

      socket.on("precompute_complete", /*#__PURE__*/function () {
        var _ref5 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee5(data, cb) {
          var session, party;
          return regenerator_default().wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  session = data.session, party = data.party;

                  if (!(session !== _this.session)) {
                    _context5.next = 4;
                    break;
                  }

                  _this.log("ignoring message for a different session... client session: ".concat(_this.session, ", message session: ").concat(session));

                  return _context5.abrupt("return");

                case 4:
                  if (cb) cb();
                  _this.precomputes[_this.parties.indexOf(party)] = "precompute_complete";
                  resolve();

                case 7:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5);
        }));

        return function (_x14, _x15) {
          return _ref5.apply(this, arguments);
        };
      }());
    });

    this._readyPromiseAll = Promise.all(this._readyPromises).then(function () {
      _this._ready = true;
      _this._endPrecomputeTime = Date.now();
      return null;
    });
    globalThis.tss_clients[this.session] = this;
  }

  createClass_default()(Client, [{
    key: "ready",
    value: function () {
      var _ready = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee6() {
        return regenerator_default().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this._readyPromiseAll;

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function ready() {
        return _ready.apply(this, arguments);
      }

      return ready;
    }()
  }, {
    key: "precompute",
    value: function precompute(tss, additionalParams) {
      var _this2 = this;

      this._startPrecomputeTime = Date.now();
      this._signer = tss.threshold_signer(this.session, this.index, this.parties.length, this.parties.length, this.share, this.pubKey);
      this._rng = tss.random_generator(Buffer.from((0,eccrypto_namespaceObject.generatePrivate)()).toString("base64")); // check if sockets have connected and have an id;

      this.sockets.map(function (socket, party) {
        if (socket !== null) {
          if (socket.id === undefined) {
            throw new Error("socket not connected yet, session: ".concat(_this2.session, ", party: ").concat(party));
          }
        }
      });

      var _loop = function _loop(i) {
        var party = _this2.parties[i];

        if (party !== _this2.index) {
          fetch("".concat(_this2.lookupEndpoint(_this2.session, party), "/precompute"), {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(_objectSpread({
              endpoints: _this2.endpoints.map(function (endpoint, j) {
                if (j !== _this2.index) {
                  return endpoint;
                } // pass in different id for websocket connection for each server so that the server can communicate back


                return "websocket:".concat(_this2.sockets[party].id);
              }),
              session: _this2.session,
              parties: _this2.parties,
              player_index: party,
              threshold: _this2.parties.length,
              pubkey: _this2.pubKey,
              notifyWebsocketId: _this2.sockets[party].id,
              sendWebsocket: _this2.sockets[party].id
            }, additionalParams))
          }); // axios.post(`${this.lookupEndpoint(this.session, party)}/precompute`, {
          //   endpoints: this.endpoints.map((endpoint, j) => {
          //     if (j !== this.index) {
          //       return endpoint;
          //     }
          //     // pass in different id for websocket connection for each server so that the server can communicate back
          //     return `websocket:${this.sockets[party].id}`;
          //   }),
          //   session: this.session,
          //   parties: this.parties,
          //   player_index: party,
          //   threshold: this.parties.length,
          //   pubkey: this.pubKey,
          //   notifyWebsocketId: this.sockets[party].id,
          //   sendWebsocket: this.sockets[party].id,
          //   ...additionalParams,
          // });
        }
      };

      for (var i = 0; i < this.parties.length; i++) {
        _loop(i);
      }

      tss.setup(this._signer, this._rng).then(function () {
        return tss.precompute(new Uint8Array(_this2.parties), _this2._signer, _this2._rng);
      }).then(function (precompute) {
        _this2.precomputes[_this2.parties.indexOf(_this2.index)] = precompute;

        _this2._readyResolves[_this2.parties.indexOf(_this2.index)]();

        return null;
      });
    }
  }, {
    key: "sign",
    value: function () {
      var _sign = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee7(tss, msg, hash_only, original_message, hash_algo, additionalParams) {
        var sigFragmentsPromises, i, precompute, party, endpoint, sigFragments, R, sig, sigHex, r, s, recoveryParam;
        return regenerator_default().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                if (this._ready) {
                  _context7.next = 2;
                  break;
                }

                throw new Error("client is not ready");

              case 2:
                if (!this._consumed) {
                  _context7.next = 6;
                  break;
                }

                throw new Error("this instance has already signed a message and cannot be reused");

              case 6:
                this._consumed = true;

              case 7:
                if (!(this.precomputes.length !== this.parties.length)) {
                  _context7.next = 9;
                  break;
                }

                throw new Error("insufficient precomputes");

              case 9:
                if (hash_only) {
                  _context7.next = 16;
                  break;
                }

                if (!(hash_algo === "keccak256")) {
                  _context7.next = 15;
                  break;
                }

                if (!(external_keccak256_default()(original_message).toString("base64") !== msg)) {
                  _context7.next = 13;
                  break;
                }

                throw new Error("hash of original message does not match msg");

              case 13:
                _context7.next = 16;
                break;

              case 15:
                throw new Error("hash algo ".concat(hash_algo, " not supported"));

              case 16:
                this._startSignTime = Date.now();
                sigFragmentsPromises = [];

                for (i = 0; i < this.precomputes.length; i++) {
                  precompute = this.precomputes[i];
                  party = i;

                  if (precompute === "precompute_complete") {
                    endpoint = this.lookupEndpoint(this.session, party);
                    sigFragmentsPromises.push(fetch("".concat(endpoint, "/sign"), {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(_objectSpread({
                        session: this.session,
                        sender: this.index,
                        recipient: party,
                        msg: msg,
                        hash_only: hash_only,
                        original_message: original_message,
                        hash_algo: hash_algo
                      }, additionalParams))
                    }).then(function (res) {
                      return res.json();
                    }).then(function (res) {
                      return res.sig;
                    }) // axios
                    //   .post(`${endpoint}/sign`, {
                    //     session: this.session,
                    //     sender: this.index,
                    //     recipient: party,
                    //     msg,
                    //     hash_only,
                    //     original_message,
                    //     hash_algo,
                    //     ...additionalParams,
                    //   })
                    //   .then((res) => res.data.sig)
                    );
                  } else {
                    sigFragmentsPromises.push(Promise.resolve(tss.local_sign(msg, hash_only, precompute)));
                  }
                }

                _context7.next = 21;
                return Promise.all(sigFragmentsPromises);

              case 21:
                sigFragments = _context7.sent;
                R = tss.get_r_from_precompute(this.precomputes[this.parties.indexOf(this.index)]);
                sig = tss.local_verify(msg, hash_only, R, sigFragments, this.pubKey);
                sigHex = Buffer.from(sig, "base64").toString("hex");
                r = new (external_bn_js_default())(sigHex.slice(0, 64), 16);
                s = new (external_bn_js_default())(sigHex.slice(64), 16);
                recoveryParam = Buffer.from(R, "base64")[63] % 2;
                this._endSignTime = Date.now();
                return _context7.abrupt("return", {
                  r: r,
                  s: s,
                  recoveryParam: recoveryParam
                });

              case 30:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function sign(_x16, _x17, _x18, _x19, _x20, _x21) {
        return _sign.apply(this, arguments);
      }

      return sign;
    }()
  }, {
    key: "lookupEndpoint",
    value: function lookupEndpoint(session, party) {
      if (session !== this.session) throw new Error("incorrect session when looking up endpoint");
      return this.endpoints[party];
    }
  }, {
    key: "cleanup",
    value: function () {
      var _cleanup = asyncToGenerator_default()( /*#__PURE__*/regenerator_default().mark(function _callee8(tss, additionalParams) {
        var _this3 = this;

        return regenerator_default().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                // free rust objects
                tss.random_generator_free(this._rng);
                tss.threshold_signer_free(this._signer); // remove references

                delete globalThis.tss_clients[this.session];
                _context8.next = 5;
                return Promise.all(this.parties.map(function (party) {
                  if (party !== _this3.index) {
                    return fetch("".concat(_this3.lookupEndpoint(_this3.session, party), "/cleanup"), {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json"
                      },
                      body: JSON.stringify(_objectSpread({
                        session: _this3.session
                      }, additionalParams))
                    }); // return axios.post(`${this.lookupEndpoint(this.session, party)}/cleanup`, { session: this.session, ...additionalParams });
                  }

                  return Promise.resolve(true);
                }));

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function cleanup(_x22, _x23) {
        return _cleanup.apply(this, arguments);
      }

      return cleanup;
    }()
  }]);

  return Client;
}();
;// CONCATENATED MODULE: ./src/db.ts




var WebDb = /*#__PURE__*/createClass_default()(function WebDb() {
  classCallCheck_default()(this, WebDb);

  defineProperty_default()(this, "get", function (key) {
    return new Promise(function (r) {
      chrome.storage.local.get([key]).then(function (result) {
        r(result[key]);
        return result;
      });
    });
  });

  defineProperty_default()(this, "set", function (key, value) {
    return chrome.storage.local.set(defineProperty_default()({}, key, value)); //   // memoryDB[key] = value
  });
});

var localStorageDB = new WebDb();
;// CONCATENATED MODULE: ./src/index.ts



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=tssClient.cjs.js.map