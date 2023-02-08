/*! For license information please see 16e9203249ae21df3635.worker.js.LICENSE.txt */
(()=>{var t={400:(t,n,e)=>{var r,o,i;t=e.nmd(t);var a,c=e(425);self,a=function(){return function(){var t={609:function(t,n,e){var r=e(425).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var o=n&&n.prototype instanceof g?n:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=_(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function _(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var d={};function g(){}function h(){}function p(){}var b={};s(b,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==e&&i.call(w,c)&&(b=w);var v=p.prototype=g.prototype=Object.create(b);function m(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function e(o,a,c,u){var f=_(t[o],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==r(l)&&i.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(f.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=_(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,s(v,"constructor",p),s(p,"constructor",h),h.displayName=s(p,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,f,"GeneratorFunction")),t.prototype=Object.create(v),t},n.awrap=function(t){return{__await:t}},m(x.prototype),s(x.prototype,u,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(v),s(v,f,"Generator"),s(v,c,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},425:function(t){function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},841:function(t,n,e){var r=e(609)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==("undefined"==typeof globalThis?"undefined":c(globalThis))?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return t[r](i,i.exports,e),i.exports}e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,{a:n}),n},e.d=function(t,n){for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==("undefined"==typeof globalThis?"undefined":c(globalThis)))return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==("undefined"==typeof window?"undefined":c(window)))return window}}(),e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){"use strict";function t(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function n(n){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=n.apply(e,r);function c(n){t(a,o,i,c,u,"next",n)}function u(n){t(a,o,i,c,u,"throw",n)}c(void 0)}))}}function o(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t){return i="function"==typeof Symbol&&"symbol"==c(Symbol.iterator)?function(t){return c(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":c(t)},i(t)}e.r(r),e.d(r,{WasmBindgenTestContext:function(){return K},__wbgtest_console_debug:function(){return D},__wbgtest_console_error:function(){return H},__wbgtest_console_info:function(){return J},__wbgtest_console_log:function(){return z},__wbgtest_console_warn:function(){return $},batch_size:function(){return O},default:function(){return rt},finalizeInit:function(){return Z},getImports:function(){return X},get_r_from_precompute:function(){return R},initSync:function(){return tt},local_sign:function(){return N},local_verify:function(){return W},precompute:function(){return F},process_ga1:function(){return S},random_generator:function(){return A},random_generator_free:function(){return P},setup:function(){return M},sign:function(){return U},threshold_signer:function(){return T},threshold_signer_free:function(){return I}});var a,u=e(841),f=e.n(u),s=new Array(32).fill(void 0);function l(t){return s[t]}s.push(void 0,null,!0,!1);var _=s.length;function d(t){var n=l(t);return function(t){t<36||(s[t]=_,_=t)}(t),n}var g=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});g.decode();var h=new Uint8Array;function p(){return 0===h.byteLength&&(h=new Uint8Array(a.memory.buffer)),h}function b(t,n){return g.decode(p().subarray(t,t+n))}function y(t){_===s.length&&s.push(s.length+1);var n=_;return _=s[n],s[n]=t,n}var w=0,v=new TextEncoder("utf-8"),m="function"==typeof v.encodeInto?function(t,n){return v.encodeInto(t,n)}:function(t,n){var e=v.encode(t);return n.set(e),{read:t.length,written:e.length}};function x(t,n,e){if(void 0===e){var r=v.encode(t),o=n(r.length);return p().subarray(o,o+r.length).set(r),w=r.length,o}for(var i=t.length,a=n(i),c=p(),u=0;u<i;u++){var f=t.charCodeAt(u);if(f>127)break;c[a+u]=f}if(u!==i){0!==u&&(t=t.slice(u)),a=e(a,i,i=u+3*t.length);var s=p().subarray(a+u,a+i);u+=m(t,s).written}return w=u,a}var L=new Int32Array;function k(){return 0===L.byteLength&&(L=new Int32Array(a.memory.buffer)),L}function E(t){var n=i(t);if("number"==n||"boolean"==n||null==t)return"".concat(t);if("string"==n)return'"'.concat(t,'"');if("symbol"==n){var e=t.description;return null==e?"Symbol":"Symbol(".concat(e,")")}if("function"==n){var r=t.name;return"string"==typeof r&&r.length>0?"Function(".concat(r,")"):"Function"}if(Array.isArray(t)){var o=t.length,a="[";o>0&&(a+=E(t[0]));for(var c=1;c<o;c++)a+=", "+E(t[c]);return a+"]"}var u,f=/\[object ([^\]]+)\]/.exec(toString.call(t));if(!(f.length>1))return toString.call(t);if("Object"==(u=f[1]))try{return"Object("+JSON.stringify(t)+")"}catch(t){return"Object"}return t instanceof Error?"".concat(t.name,": ").concat(t.message,"\n").concat(t.stack):u}function j(t,n,e){a._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha0b01688533da445(t,n,y(e))}function S(t){try{var n=a.__wbindgen_add_to_stack_pointer(-16),e=x(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;a.process_ga1(n,e,r);var o=k()[n/4+0],i=k()[n/4+1],c=k()[n/4+2],u=k()[n/4+3],f=o,s=i;if(u)throw f=0,s=0,d(c);return b(f,s)}finally{a.__wbindgen_add_to_stack_pointer(16),a.__wbindgen_free(f,s)}}function O(){return a.batch_size()>>>0}function A(t){try{var n=a.__wbindgen_add_to_stack_pointer(-16),e=x(t,a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;a.random_generator(n,e,r);var o=k()[n/4+0],i=k()[n/4+1];if(k()[n/4+2])throw d(i);return o}finally{a.__wbindgen_add_to_stack_pointer(16)}}function P(t){a.random_generator_free(t)}function T(t,n,e,r,o,i){try{var c=a.__wbindgen_add_to_stack_pointer(-16),u=x(t,a.__wbindgen_malloc,a.__wbindgen_realloc),f=w,s=x(o,a.__wbindgen_malloc,a.__wbindgen_realloc),l=w,_=x(i,a.__wbindgen_malloc,a.__wbindgen_realloc),g=w;a.threshold_signer(c,u,f,n,e,r,s,l,_,g);var h=k()[c/4+0],p=k()[c/4+1];if(k()[c/4+2])throw d(p);return h}finally{a.__wbindgen_add_to_stack_pointer(16)}}function I(t){a.threshold_signer_free(t)}function M(t,n){return d(a.setup(t,n))}function F(t,n,e){return d(a.precompute(y(t),n,e))}function N(t,n,e){try{var r=a.__wbindgen_add_to_stack_pointer(-16),o=x(t,a.__wbindgen_malloc,a.__wbindgen_realloc),i=w;a.local_sign(r,o,i,n,y(e));var c=k()[r/4+0],u=k()[r/4+1];if(k()[r/4+2])throw d(u);return d(c)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function R(t){try{var n=a.__wbindgen_add_to_stack_pointer(-16);a.get_r_from_precompute(n,y(t));var e=k()[n/4+0],r=k()[n/4+1];if(k()[n/4+2])throw d(r);return d(e)}finally{a.__wbindgen_add_to_stack_pointer(16)}}var G=new Uint32Array;function C(t,n){for(var e=n(4*t.length),r=(0===G.byteLength&&(G=new Uint32Array(a.memory.buffer)),G),o=0;o<t.length;o++)r[e/4+o]=y(t[o]);return w=t.length,e}function W(t,n,e,r,o){try{var i=a.__wbindgen_add_to_stack_pointer(-16),c=x(t,a.__wbindgen_malloc,a.__wbindgen_realloc),u=w,f=C(r,a.__wbindgen_malloc),s=w,l=x(o,a.__wbindgen_malloc,a.__wbindgen_realloc),_=w;a.local_verify(i,c,u,n,y(e),f,s,l,_);var g=k()[i/4+0],h=k()[i/4+1];if(k()[i/4+2])throw d(h);return d(g)}finally{a.__wbindgen_add_to_stack_pointer(16)}}function U(t,n,e,r,o){var i=x(n,a.__wbindgen_malloc,a.__wbindgen_realloc),c=w;return d(a.sign(y(t),i,c,e,r,o))}function B(t,n){try{return t.apply(this,n)}catch(t){a.__wbindgen_exn_store(y(t))}}var Y=32;function q(t){if(1==Y)throw new Error("out of js stack");return s[--Y]=t,Y}function z(t){try{a.__wbgtest_console_log(q(t))}finally{s[Y++]=void 0}}function D(t){try{a.__wbgtest_console_debug(q(t))}finally{s[Y++]=void 0}}function J(t){try{a.__wbgtest_console_info(q(t))}finally{s[Y++]=void 0}}function $(t){try{a.__wbgtest_console_warn(q(t))}finally{s[Y++]=void 0}}function H(t){try{a.__wbgtest_console_error(q(t))}finally{s[Y++]=void 0}}var K=function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=a.wasmbindgentestcontext_new();return t.__wrap(n)}var n,e,r;return n=t,r=[{key:"__wrap",value:function(n){var e=Object.create(t.prototype);return e.ptr=n,e}}],(e=[{key:"__destroy_into_raw",value:function(){var t=this.ptr;return this.ptr=0,t}},{key:"free",value:function(){var t=this.__destroy_into_raw();a.__wbg_wasmbindgentestcontext_free(t)}},{key:"args",value:function(t){var n=C(t,a.__wbindgen_malloc),e=w;a.wasmbindgentestcontext_args(this.ptr,n,e)}},{key:"run",value:function(t){var n=C(t,a.__wbindgen_malloc),e=w;return d(a.wasmbindgentestcontext_run(this.ptr,n,e))}}])&&o(n.prototype,e),r&&o(n,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function Q(t,n){return V.apply(this,arguments)}function V(){return(V=n(f().mark((function t(n,e){var r,o;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!("function"==typeof Response&&n instanceof Response)){t.next=23;break}if("function"!=typeof WebAssembly.instantiateStreaming){t.next=15;break}return t.prev=2,t.next=5,WebAssembly.instantiateStreaming(n,e);case 5:case 20:return t.abrupt("return",t.sent);case 8:if(t.prev=8,t.t0=t.catch(2),"application/wasm"==n.headers.get("Content-Type")){t.next=14;break}console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",t.t0),t.next=15;break;case 14:throw t.t0;case 15:return t.next=17,n.arrayBuffer();case 17:return r=t.sent,t.next=20,WebAssembly.instantiate(r,e);case 23:return t.next=25,WebAssembly.instantiate(n,e);case 25:if(!((o=t.sent)instanceof WebAssembly.Instance)){t.next=30;break}return t.abrupt("return",{instance:o,module:n});case 30:return t.abrupt("return",o);case 31:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}function X(){var t={wbg:{}};return t.wbg.__wbindgen_object_drop_ref=function(t){d(t)},t.wbg.__wbindgen_cb_drop=function(t){var n=d(t).original;return 1==n.cnt--&&(n.a=0,!0)},t.wbg.__wbg_jssendmsg_72dd946a7fbc8ccd=function(t,n,e,r,o,i,c,u){try{return y(js_send_msg(b(t,n),e>>>0,r>>>0,b(o,i),b(c,u)))}finally{a.__wbindgen_free(t,n),a.__wbindgen_free(o,i),a.__wbindgen_free(c,u)}},t.wbg.__wbindgen_is_falsy=function(t){return!l(t)},t.wbg.__wbindgen_string_new=function(t,n){return y(b(t,n))},t.wbg.__wbindgen_bigint_new=function(t,n){return y(BigInt(b(t,n)))},t.wbg.__wbg_jsreadmsg_8a12f6e25645f453=function(t,n,e,r,o,i){try{return y(js_read_msg(b(t,n),e>>>0,r>>>0,b(o,i)))}finally{a.__wbindgen_free(t,n),a.__wbindgen_free(o,i)}},t.wbg.__wbindgen_string_get=function(t,n){var e=l(n),r="string"==typeof e?e:void 0,o=null==r?0:x(r,a.__wbindgen_malloc,a.__wbindgen_realloc),i=w;k()[t/4+1]=i,k()[t/4+0]=o},t.wbg.__wbindgen_number_new=function(t){return y(t)},t.wbg.__wbg_newnoargs_971e9a5abe185139=function(t,n){return y(new Function(b(t,n)))},t.wbg.__wbg_call_33d7bcddbbfa394a=function(){return B((function(t,n){return y(l(t).call(l(n)))}),arguments)},t.wbg.__wbindgen_object_clone_ref=function(t){return y(l(t))},t.wbg.__wbg_self_fd00a1ef86d1b2ed=function(){return B((function(){return y(self.self)}),arguments)},t.wbg.__wbg_window_6f6e346d8bbd61d7=function(){return B((function(){return y(window.window)}),arguments)},t.wbg.__wbg_globalThis_3348936ac49df00a=function(){return B((function(){return y(globalThis.globalThis)}),arguments)},t.wbg.__wbg_global_67175caf56f55ca9=function(){return B((function(){return y(e.g.global)}),arguments)},t.wbg.__wbindgen_is_undefined=function(t){return void 0===l(t)},t.wbg.__wbg_forEach_49bfa6f148ac0f7d=function(t,n,e){try{var r={a:n,b:e};l(t).forEach((function(t,n,e){var o=r.a;r.a=0;try{return function(t,n,e,r,o){a.wasm_bindgen__convert__closures__invoke3_mut__h1481b0b3a4794987(t,n,y(e),r,y(o))}(o,r.b,t,n,e)}finally{r.a=o}}))}finally{r.a=r.b=0}},t.wbg.__wbg_message_924b46658b69b295=function(t){return y(l(t).message)},t.wbg.__wbg_name_e88a3b3a0f6b23c2=function(t){return y(l(t).name)},t.wbg.__wbg_call_65af9f665ab6ade5=function(){return B((function(t,n,e){return y(l(t).call(l(n),l(e)))}),arguments)},t.wbg.__wbg_new_52205195aa880fc2=function(t,n){try{var e={a:t,b:n},r=new Promise((function(t,n){var r=e.a;e.a=0;try{return function(t,n,e,r){a.wasm_bindgen__convert__closures__invoke2_mut__h31f9dc4b753d7d17(t,n,y(e),y(r))}(r,e.b,t,n)}finally{e.a=r}}));return y(r)}finally{e.a=e.b=0}},t.wbg.__wbg_resolve_0107b3a501450ba0=function(t){return y(Promise.resolve(l(t)))},t.wbg.__wbg_then_18da6e5453572fc8=function(t,n){return y(l(t).then(l(n)))},t.wbg.__wbg_then_e5489f796341454b=function(t,n,e){return y(l(t).then(l(n),l(e)))},t.wbg.__wbg_buffer_34f5ec9f8a838ba0=function(t){return y(l(t).buffer)},t.wbg.__wbg_new_cda198d9dbc6d7ea=function(t){return y(new Uint8Array(l(t)))},t.wbg.__wbg_set_1a930cfcda1a8067=function(t,n,e){l(t).set(l(n),e>>>0)},t.wbg.__wbg_length_51f19f73d6d9eff3=function(t){return l(t).length},t.wbg.__wbindgen_debug_string=function(t,n){var e=x(E(l(n)),a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;k()[t/4+1]=r,k()[t/4+0]=e},t.wbg.__wbindgen_throw=function(t,n){throw new Error(b(t,n))},t.wbg.__wbindgen_memory=function(){return y(a.memory)},t.wbg.__wbg_log_d4cf02b84d94d5cc=function(t,n){console.log(b(t,n))},t.wbg.__wbg_String_1e50b0ad2927b74c=function(t,n){var e=x(String(l(n)),a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;k()[t/4+1]=r,k()[t/4+0]=e},t.wbg.__wbg_new_693216e109162396=function(){return y(new Error)},t.wbg.__wbg_stack_0ddaca5d1abfb52f=function(t,n){var e=x(l(n).stack,a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;k()[t/4+1]=r,k()[t/4+0]=e},t.wbg.__wbg_error_09919627ac0992f5=function(t,n){try{console.error(b(t,n))}finally{a.__wbindgen_free(t,n)}},t.wbg.__wbg_static_accessor_document_57521ac637ea23b1=function(){return y(document)},t.wbg.__wbg_self_331f85453774af9f=function(t){return y(l(t).self)},t.wbg.__wbindgen_jsval_eq=function(t,n){return l(t)===l(n)},t.wbg.__wbg_getElementById_9ef7f5a90430a467=function(t,n,e){return y(l(t).getElementById(b(n,e)))},t.wbg.__wbg_settextcontent_2e10a7628cf8a079=function(t,n,e){l(t).textContent=b(n,e)},t.wbg.__wbg_textcontent_2eda1e93d7676aaa=function(t,n){var e=x(l(n).textContent,a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;k()[t/4+1]=r,k()[t/4+0]=e},t.wbg.__wbg_stack_c674c54b561c0712=function(t){return y(l(t).stack)},t.wbg.__wbg_stack_41a23a715c0aee96=function(t,n){var e=x(l(n).stack,a.__wbindgen_malloc,a.__wbindgen_realloc),r=w;k()[t/4+1]=r,k()[t/4+0]=e},t.wbg.__wbindgen_closure_wrapper519=function(t,n,e){var r=function(t,n,e,r){var o={a:t,b:n,cnt:1,dtor:111},i=function(){o.cnt++;var t=o.a;o.a=0;try{for(var n=arguments.length,e=new Array(n),i=0;i<n;i++)e[i]=arguments[i];return r.apply(void 0,[t,o.b].concat(e))}finally{0==--o.cnt?a.__wbindgen_export_2.get(o.dtor)(t,o.b):o.a=t}};return i.original=o,i}(t,n,0,j);return y(r)},t}function Z(t,n){return a=t.exports,nt.__wbindgen_wasm_module=n,L=new Int32Array,G=new Uint32Array,h=new Uint8Array,a}function tt(t){var n=X();return t instanceof WebAssembly.Module||(t=new WebAssembly.Module(t)),Z(new WebAssembly.Instance(t,n),t)}function nt(t){return et.apply(this,arguments)}function et(){return(et=n(f().mark((function t(n){var e,r,o,i;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(void 0!==n){t.next=2;break}throw new Error("no");case 2:return e=X(),("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),t.t0=Q,t.next=8,n;case 8:return t.t1=t.sent,t.t2=e,t.next=12,(0,t.t0)(t.t1,t.t2);case 12:return r=t.sent,o=r.instance,i=r.module,t.abrupt("return",Z(o,i));case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var rt=nt}(),r}()},"object"==c(n)&&"object"==c(t)?t.exports=a():(o=[],void 0===(i="function"==typeof(r=a)?r.apply(n,o):r)||(t.exports=i))},609:(t,n,e)=>{var r=e(425).default;function o(){"use strict";t.exports=o=function(){return n},t.exports.__esModule=!0,t.exports.default=t.exports;var n={},e=Object.prototype,i=e.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{s({},"")}catch(t){s=function(t,n,e){return t[n]=e}}function l(t,n,e,r){var o=n&&n.prototype instanceof g?n:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=function(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===d)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=_(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function _(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(t){return{type:"throw",arg:t}}}n.wrap=l;var d={};function g(){}function h(){}function p(){}var b={};s(b,c,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(S([])));w&&w!==e&&i.call(w,c)&&(b=w);var v=p.prototype=g.prototype=Object.create(b);function m(t){["next","throw","return"].forEach((function(n){s(t,n,(function(t){return this._invoke(n,t)}))}))}function x(t,n){function e(o,a,c,u){var f=_(t[o],t,a);if("throw"!==f.type){var s=f.arg,l=s.value;return l&&"object"==r(l)&&i.call(l,"__await")?n.resolve(l.__await).then((function(t){e("next",t,c,u)}),(function(t){e("throw",t,c,u)})):n.resolve(l).then((function(t){s.value=t,c(s)}),(function(t){return e("throw",t,c,u)}))}u(f.arg)}var o;this._invoke=function(t,r){function i(){return new n((function(n,o){e(t,r,n,o)}))}return o=o?o.then(i,i):i()}}function L(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=_(e,t.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,d;var o=r.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,d):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function E(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var n=t[c];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,s(v,"constructor",p),s(p,"constructor",h),h.displayName=s(p,f,"GeneratorFunction"),n.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,f,"GeneratorFunction")),t.prototype=Object.create(v),t},n.awrap=function(t){return{__await:t}},m(x.prototype),s(x.prototype,u,(function(){return this})),n.AsyncIterator=x,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new x(l(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(v),s(v,f,"Generator"),s(v,c,(function(){return this})),s(v,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),d},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),E(e),d}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;E(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:S(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),d}},n}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},425:t=>{function n(e){return t.exports=n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,n(e)}t.exports=n,t.exports.__esModule=!0,t.exports.default=t.exports},841:(t,n,e)=>{var r=e(609)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return t[r](i,i.exports,e),i.loaded=!0,i.exports}e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),e.nmd=t=>(t.paths=[],t.children||(t.children=[]),t);var r={};(()=>{"use strict";function t(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function n(t,n,e,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void e(t)}c.done?n(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,u,"next",t)}function u(t){n(a,o,i,c,u,"throw",t)}c(void 0)}))}}e.d(r,{instantiate:()=>f,takeAction:()=>s});var i=e(841),a=e.n(i),c=e(400),u=e.n(c),f=function(){var t=o(a().mark((function t(n){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u()(n);case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),s=function(){var n=o(a().mark((function n(e,r){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",c[e].apply(c,function(n){if(Array.isArray(n))return t(n)}(o=r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(o)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(n,e):void 0}}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));case 1:case"end":return n.stop()}var o}),n)})));return function(t,e){return n.apply(this,arguments)}}();addEventListener("message",(function(t){var n,e=t.data,o=e.type,i=e.method,a=e.id,c=e.params;"RPC"===o&&i&&((n=r[i])?Promise.resolve().then((function(){return n.apply(r,c)})):Promise.reject("No such method")).then((function(t){postMessage({type:"RPC",id:a,result:t})})).catch((function(t){var n={message:t};t.stack&&(n.message=t.message,n.stack=t.stack,n.name=t.name),postMessage({type:"RPC",id:a,error:n})}))})),postMessage({type:"RPC",method:"ready"})})()})();
//# sourceMappingURL=16e9203249ae21df3635.worker.js.map