function Up(e, t) {
   for (var r = 0; r < t.length; r++) {
      const n = t[r];
      if (typeof n != "string" && !Array.isArray(n)) {
         for (const i in n)
            if (i !== "default" && !(i in e)) {
               const s = Object.getOwnPropertyDescriptor(n, i);
               s &&
                  Object.defineProperty(
                     e,
                     i,
                     s.get ? s : { enumerable: !0, get: () => n[i] }
                  );
            }
      }
   }
   return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
   );
}
(function () {
   const t = document.createElement("link").relList;
   if (t && t.supports && t.supports("modulepreload")) return;
   for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
   new MutationObserver((i) => {
      for (const s of i)
         if (s.type === "childList")
            for (const o of s.addedNodes)
               o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
   }).observe(document, { childList: !0, subtree: !0 });
   function r(i) {
      const s = {};
      return (
         i.integrity && (s.integrity = i.integrity),
         i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
         i.crossOrigin === "use-credentials"
            ? (s.credentials = "include")
            : i.crossOrigin === "anonymous"
            ? (s.credentials = "omit")
            : (s.credentials = "same-origin"),
         s
      );
   }
   function n(i) {
      if (i.ep) return;
      i.ep = !0;
      const s = r(i);
      fetch(i.href, s);
   }
})();
var cf =
   typeof globalThis < "u"
      ? globalThis
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : typeof self < "u"
      ? self
      : {};
function zp(e) {
   return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
}
var Bp = { exports: {} },
   Ua = {},
   qp = { exports: {} },
   Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var qs = Symbol.for("react.element"),
   K0 = Symbol.for("react.portal"),
   Y0 = Symbol.for("react.fragment"),
   J0 = Symbol.for("react.strict_mode"),
   X0 = Symbol.for("react.profiler"),
   Z0 = Symbol.for("react.provider"),
   ey = Symbol.for("react.context"),
   ty = Symbol.for("react.forward_ref"),
   ry = Symbol.for("react.suspense"),
   ny = Symbol.for("react.memo"),
   iy = Symbol.for("react.lazy"),
   df = Symbol.iterator;
function sy(e) {
   return e === null || typeof e != "object"
      ? null
      : ((e = (df && e[df]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
}
var Vp = {
      isMounted: function () {
         return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
   },
   Wp = Object.assign,
   Hp = {};
function Ci(e, t, r) {
   (this.props = e),
      (this.context = t),
      (this.refs = Hp),
      (this.updater = r || Vp);
}
Ci.prototype.isReactComponent = {};
Ci.prototype.setState = function (e, t) {
   if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
         "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
   this.updater.enqueueSetState(this, e, t, "setState");
};
Ci.prototype.forceUpdate = function (e) {
   this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qp() {}
Qp.prototype = Ci.prototype;
function Rc(e, t, r) {
   (this.props = e),
      (this.context = t),
      (this.refs = Hp),
      (this.updater = r || Vp);
}
var Ic = (Rc.prototype = new Qp());
Ic.constructor = Rc;
Wp(Ic, Ci.prototype);
Ic.isPureReactComponent = !0;
var ff = Array.isArray,
   Gp = Object.prototype.hasOwnProperty,
   $c = { current: null },
   Kp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yp(e, t, r) {
   var n,
      i = {},
      s = null,
      o = null;
   if (t != null)
      for (n in (t.ref !== void 0 && (o = t.ref),
      t.key !== void 0 && (s = "" + t.key),
      t))
         Gp.call(t, n) && !Kp.hasOwnProperty(n) && (i[n] = t[n]);
   var a = arguments.length - 2;
   if (a === 1) i.children = r;
   else if (1 < a) {
      for (var l = Array(a), u = 0; u < a; u++) l[u] = arguments[u + 2];
      i.children = l;
   }
   if (e && e.defaultProps)
      for (n in ((a = e.defaultProps), a)) i[n] === void 0 && (i[n] = a[n]);
   return {
      $$typeof: qs,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: $c.current,
   };
}
function oy(e, t) {
   return {
      $$typeof: qs,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
   };
}
function Nc(e) {
   return typeof e == "object" && e !== null && e.$$typeof === qs;
}
function ay(e) {
   var t = { "=": "=0", ":": "=2" };
   return (
      "$" +
      e.replace(/[=:]/g, function (r) {
         return t[r];
      })
   );
}
var hf = /\/+/g;
function vl(e, t) {
   return typeof e == "object" && e !== null && e.key != null
      ? ay("" + e.key)
      : t.toString(36);
}
function Po(e, t, r, n, i) {
   var s = typeof e;
   (s === "undefined" || s === "boolean") && (e = null);
   var o = !1;
   if (e === null) o = !0;
   else
      switch (s) {
         case "string":
         case "number":
            o = !0;
            break;
         case "object":
            switch (e.$$typeof) {
               case qs:
               case K0:
                  o = !0;
            }
      }
   if (o)
      return (
         (o = e),
         (i = i(o)),
         (e = n === "" ? "." + vl(o, 0) : n),
         ff(i)
            ? ((r = ""),
              e != null && (r = e.replace(hf, "$&/") + "/"),
              Po(i, t, r, "", function (u) {
                 return u;
              }))
            : i != null &&
              (Nc(i) &&
                 (i = oy(
                    i,
                    r +
                       (!i.key || (o && o.key === i.key)
                          ? ""
                          : ("" + i.key).replace(hf, "$&/") + "/") +
                       e
                 )),
              t.push(i)),
         1
      );
   if (((o = 0), (n = n === "" ? "." : n + ":"), ff(e)))
      for (var a = 0; a < e.length; a++) {
         s = e[a];
         var l = n + vl(s, a);
         o += Po(s, t, r, l, i);
      }
   else if (((l = sy(e)), typeof l == "function"))
      for (e = l.call(e), a = 0; !(s = e.next()).done; )
         (s = s.value), (l = n + vl(s, a++)), (o += Po(s, t, r, l, i));
   else if (s === "object")
      throw (
         ((t = String(e)),
         Error(
            "Objects are not valid as a React child (found: " +
               (t === "[object Object]"
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
               "). If you meant to render a collection of children, use an array instead."
         ))
      );
   return o;
}
function no(e, t, r) {
   if (e == null) return e;
   var n = [],
      i = 0;
   return (
      Po(e, n, "", "", function (s) {
         return t.call(r, s, i++);
      }),
      n
   );
}
function ly(e) {
   if (e._status === -1) {
      var t = e._result;
      (t = t()),
         t.then(
            function (r) {
               (e._status === 0 || e._status === -1) &&
                  ((e._status = 1), (e._result = r));
            },
            function (r) {
               (e._status === 0 || e._status === -1) &&
                  ((e._status = 2), (e._result = r));
            }
         ),
         e._status === -1 && ((e._status = 0), (e._result = t));
   }
   if (e._status === 1) return e._result.default;
   throw e._result;
}
var it = { current: null },
   To = { transition: null },
   uy = {
      ReactCurrentDispatcher: it,
      ReactCurrentBatchConfig: To,
      ReactCurrentOwner: $c,
   };
Q.Children = {
   map: no,
   forEach: function (e, t, r) {
      no(
         e,
         function () {
            t.apply(this, arguments);
         },
         r
      );
   },
   count: function (e) {
      var t = 0;
      return (
         no(e, function () {
            t++;
         }),
         t
      );
   },
   toArray: function (e) {
      return (
         no(e, function (t) {
            return t;
         }) || []
      );
   },
   only: function (e) {
      if (!Nc(e))
         throw Error(
            "React.Children.only expected to receive a single React element child."
         );
      return e;
   },
};
Q.Component = Ci;
Q.Fragment = Y0;
Q.Profiler = X0;
Q.PureComponent = Rc;
Q.StrictMode = J0;
Q.Suspense = ry;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uy;
Q.cloneElement = function (e, t, r) {
   if (e == null)
      throw Error(
         "React.cloneElement(...): The argument must be a React element, but you passed " +
            e +
            "."
      );
   var n = Wp({}, e.props),
      i = e.key,
      s = e.ref,
      o = e._owner;
   if (t != null) {
      if (
         (t.ref !== void 0 && ((s = t.ref), (o = $c.current)),
         t.key !== void 0 && (i = "" + t.key),
         e.type && e.type.defaultProps)
      )
         var a = e.type.defaultProps;
      for (l in t)
         Gp.call(t, l) &&
            !Kp.hasOwnProperty(l) &&
            (n[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
   }
   var l = arguments.length - 2;
   if (l === 1) n.children = r;
   else if (1 < l) {
      a = Array(l);
      for (var u = 0; u < l; u++) a[u] = arguments[u + 2];
      n.children = a;
   }
   return { $$typeof: qs, type: e.type, key: i, ref: s, props: n, _owner: o };
};
Q.createContext = function (e) {
   return (
      (e = {
         $$typeof: ey,
         _currentValue: e,
         _currentValue2: e,
         _threadCount: 0,
         Provider: null,
         Consumer: null,
         _defaultValue: null,
         _globalName: null,
      }),
      (e.Provider = { $$typeof: Z0, _context: e }),
      (e.Consumer = e)
   );
};
Q.createElement = Yp;
Q.createFactory = function (e) {
   var t = Yp.bind(null, e);
   return (t.type = e), t;
};
Q.createRef = function () {
   return { current: null };
};
Q.forwardRef = function (e) {
   return { $$typeof: ty, render: e };
};
Q.isValidElement = Nc;
Q.lazy = function (e) {
   return { $$typeof: iy, _payload: { _status: -1, _result: e }, _init: ly };
};
Q.memo = function (e, t) {
   return { $$typeof: ny, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
   var t = To.transition;
   To.transition = {};
   try {
      e();
   } finally {
      To.transition = t;
   }
};
Q.unstable_act = function () {
   throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
   return it.current.useCallback(e, t);
};
Q.useContext = function (e) {
   return it.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
   return it.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
   return it.current.useEffect(e, t);
};
Q.useId = function () {
   return it.current.useId();
};
Q.useImperativeHandle = function (e, t, r) {
   return it.current.useImperativeHandle(e, t, r);
};
Q.useInsertionEffect = function (e, t) {
   return it.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
   return it.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
   return it.current.useMemo(e, t);
};
Q.useReducer = function (e, t, r) {
   return it.current.useReducer(e, t, r);
};
Q.useRef = function (e) {
   return it.current.useRef(e);
};
Q.useState = function (e) {
   return it.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, r) {
   return it.current.useSyncExternalStore(e, t, r);
};
Q.useTransition = function () {
   return it.current.useTransition();
};
Q.version = "18.2.0";
qp.exports = Q;
var S = qp.exports;
const ue = zp(S),
   cy = Up({ __proto__: null, default: ue }, [S]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var dy = S,
   fy = Symbol.for("react.element"),
   hy = Symbol.for("react.fragment"),
   py = Object.prototype.hasOwnProperty,
   my = dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
   gy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jp(e, t, r) {
   var n,
      i = {},
      s = null,
      o = null;
   r !== void 0 && (s = "" + r),
      t.key !== void 0 && (s = "" + t.key),
      t.ref !== void 0 && (o = t.ref);
   for (n in t) py.call(t, n) && !gy.hasOwnProperty(n) && (i[n] = t[n]);
   if (e && e.defaultProps)
      for (n in ((t = e.defaultProps), t)) i[n] === void 0 && (i[n] = t[n]);
   return {
      $$typeof: fy,
      type: e,
      key: s,
      ref: o,
      props: i,
      _owner: my.current,
   };
}
Ua.Fragment = hy;
Ua.jsx = Jp;
Ua.jsxs = Jp;
Bp.exports = Ua;
var f = Bp.exports,
   pu = {},
   Xp = { exports: {} },
   bt = {},
   Zp = { exports: {} },
   em = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
   function t(R, z) {
      var B = R.length;
      R.push(z);
      e: for (; 0 < B; ) {
         var ae = (B - 1) >>> 1,
            de = R[ae];
         if (0 < i(de, z)) (R[ae] = z), (R[B] = de), (B = ae);
         else break e;
      }
   }
   function r(R) {
      return R.length === 0 ? null : R[0];
   }
   function n(R) {
      if (R.length === 0) return null;
      var z = R[0],
         B = R.pop();
      if (B !== z) {
         R[0] = B;
         e: for (var ae = 0, de = R.length, $t = de >>> 1; ae < $t; ) {
            var He = 2 * (ae + 1) - 1,
               Gt = R[He],
               Fe = He + 1,
               et = R[Fe];
            if (0 > i(Gt, B))
               Fe < de && 0 > i(et, Gt)
                  ? ((R[ae] = et), (R[Fe] = B), (ae = Fe))
                  : ((R[ae] = Gt), (R[He] = B), (ae = He));
            else if (Fe < de && 0 > i(et, B))
               (R[ae] = et), (R[Fe] = B), (ae = Fe);
            else break e;
         }
      }
      return z;
   }
   function i(R, z) {
      var B = R.sortIndex - z.sortIndex;
      return B !== 0 ? B : R.id - z.id;
   }
   if (typeof performance == "object" && typeof performance.now == "function") {
      var s = performance;
      e.unstable_now = function () {
         return s.now();
      };
   } else {
      var o = Date,
         a = o.now();
      e.unstable_now = function () {
         return o.now() - a;
      };
   }
   var l = [],
      u = [],
      c = 1,
      d = null,
      h = 3,
      m = !1,
      y = !1,
      w = !1,
      k = typeof setTimeout == "function" ? setTimeout : null,
      g = typeof clearTimeout == "function" ? clearTimeout : null,
      p = typeof setImmediate < "u" ? setImmediate : null;
   typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
   function v(R) {
      for (var z = r(u); z !== null; ) {
         if (z.callback === null) n(u);
         else if (z.startTime <= R)
            n(u), (z.sortIndex = z.expirationTime), t(l, z);
         else break;
         z = r(u);
      }
   }
   function b(R) {
      if (((w = !1), v(R), !y))
         if (r(l) !== null) (y = !0), re(_);
         else {
            var z = r(u);
            z !== null && oe(b, z.startTime - R);
         }
   }
   function _(R, z) {
      (y = !1), w && ((w = !1), g(j), (j = -1)), (m = !0);
      var B = h;
      try {
         for (
            v(z), d = r(l);
            d !== null && (!(d.expirationTime > z) || (R && !te()));

         ) {
            var ae = d.callback;
            if (typeof ae == "function") {
               (d.callback = null), (h = d.priorityLevel);
               var de = ae(d.expirationTime <= z);
               (z = e.unstable_now()),
                  typeof de == "function"
                     ? (d.callback = de)
                     : d === r(l) && n(l),
                  v(z);
            } else n(l);
            d = r(l);
         }
         if (d !== null) var $t = !0;
         else {
            var He = r(u);
            He !== null && oe(b, He.startTime - z), ($t = !1);
         }
         return $t;
      } finally {
         (d = null), (h = B), (m = !1);
      }
   }
   var P = !1,
      C = null,
      j = -1,
      U = 5,
      F = -1;
   function te() {
      return !(e.unstable_now() - F < U);
   }
   function W() {
      if (C !== null) {
         var R = e.unstable_now();
         F = R;
         var z = !0;
         try {
            z = C(!0, R);
         } finally {
            z ? V() : ((P = !1), (C = null));
         }
      } else P = !1;
   }
   var V;
   if (typeof p == "function")
      V = function () {
         p(W);
      };
   else if (typeof MessageChannel < "u") {
      var se = new MessageChannel(),
         X = se.port2;
      (se.port1.onmessage = W),
         (V = function () {
            X.postMessage(null);
         });
   } else
      V = function () {
         k(W, 0);
      };
   function re(R) {
      (C = R), P || ((P = !0), V());
   }
   function oe(R, z) {
      j = k(function () {
         R(e.unstable_now());
      }, z);
   }
   (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (R) {
         R.callback = null;
      }),
      (e.unstable_continueExecution = function () {
         y || m || ((y = !0), re(_));
      }),
      (e.unstable_forceFrameRate = function (R) {
         0 > R || 125 < R
            ? console.error(
                 "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (U = 0 < R ? Math.floor(1e3 / R) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
         return h;
      }),
      (e.unstable_getFirstCallbackNode = function () {
         return r(l);
      }),
      (e.unstable_next = function (R) {
         switch (h) {
            case 1:
            case 2:
            case 3:
               var z = 3;
               break;
            default:
               z = h;
         }
         var B = h;
         h = z;
         try {
            return R();
         } finally {
            h = B;
         }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (R, z) {
         switch (R) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
               break;
            default:
               R = 3;
         }
         var B = h;
         h = R;
         try {
            return z();
         } finally {
            h = B;
         }
      }),
      (e.unstable_scheduleCallback = function (R, z, B) {
         var ae = e.unstable_now();
         switch (
            (typeof B == "object" && B !== null
               ? ((B = B.delay),
                 (B = typeof B == "number" && 0 < B ? ae + B : ae))
               : (B = ae),
            R)
         ) {
            case 1:
               var de = -1;
               break;
            case 2:
               de = 250;
               break;
            case 5:
               de = 1073741823;
               break;
            case 4:
               de = 1e4;
               break;
            default:
               de = 5e3;
         }
         return (
            (de = B + de),
            (R = {
               id: c++,
               callback: z,
               priorityLevel: R,
               startTime: B,
               expirationTime: de,
               sortIndex: -1,
            }),
            B > ae
               ? ((R.sortIndex = B),
                 t(u, R),
                 r(l) === null &&
                    R === r(u) &&
                    (w ? (g(j), (j = -1)) : (w = !0), oe(b, B - ae)))
               : ((R.sortIndex = de), t(l, R), y || m || ((y = !0), re(_))),
            R
         );
      }),
      (e.unstable_shouldYield = te),
      (e.unstable_wrapCallback = function (R) {
         var z = h;
         return function () {
            var B = h;
            h = z;
            try {
               return R.apply(this, arguments);
            } finally {
               h = B;
            }
         };
      });
})(em);
Zp.exports = em;
var vy = Zp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var tm = S,
   xt = vy;
function O(e) {
   for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
         r = 1;
      r < arguments.length;
      r++
   )
      t += "&args[]=" + encodeURIComponent(arguments[r]);
   return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
   );
}
var rm = new Set(),
   ws = {};
function Tn(e, t) {
   di(e, t), di(e + "Capture", t);
}
function di(e, t) {
   for (ws[e] = t, e = 0; e < t.length; e++) rm.add(t[e]);
}
var gr = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
   ),
   mu = Object.prototype.hasOwnProperty,
   yy =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
   pf = {},
   mf = {};
function wy(e) {
   return mu.call(mf, e)
      ? !0
      : mu.call(pf, e)
      ? !1
      : yy.test(e)
      ? (mf[e] = !0)
      : ((pf[e] = !0), !1);
}
function xy(e, t, r, n) {
   if (r !== null && r.type === 0) return !1;
   switch (typeof t) {
      case "function":
      case "symbol":
         return !0;
      case "boolean":
         return n
            ? !1
            : r !== null
            ? !r.acceptsBooleans
            : ((e = e.toLowerCase().slice(0, 5)),
              e !== "data-" && e !== "aria-");
      default:
         return !1;
   }
}
function by(e, t, r, n) {
   if (t === null || typeof t > "u" || xy(e, t, r, n)) return !0;
   if (n) return !1;
   if (r !== null)
      switch (r.type) {
         case 3:
            return !t;
         case 4:
            return t === !1;
         case 5:
            return isNaN(t);
         case 6:
            return isNaN(t) || 1 > t;
      }
   return !1;
}
function st(e, t, r, n, i, s, o) {
   (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = n),
      (this.attributeNamespace = i),
      (this.mustUseProperty = r),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = s),
      (this.removeEmptyString = o);
}
var We = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
   .split(" ")
   .forEach(function (e) {
      We[e] = new st(e, 0, !1, e, null, !1, !1);
   });
[
   ["acceptCharset", "accept-charset"],
   ["className", "class"],
   ["htmlFor", "for"],
   ["httpEquiv", "http-equiv"],
].forEach(function (e) {
   var t = e[0];
   We[t] = new st(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
   We[e] = new st(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
   "autoReverse",
   "externalResourcesRequired",
   "focusable",
   "preserveAlpha",
].forEach(function (e) {
   We[e] = new st(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
   .split(" ")
   .forEach(function (e) {
      We[e] = new st(e, 3, !1, e.toLowerCase(), null, !1, !1);
   });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
   We[e] = new st(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
   We[e] = new st(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
   We[e] = new st(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
   We[e] = new st(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Lc = /[\-:]([a-z])/g;
function Ac(e) {
   return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
   .split(" ")
   .forEach(function (e) {
      var t = e.replace(Lc, Ac);
      We[t] = new st(t, 1, !1, e, null, !1, !1);
   });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
   .split(" ")
   .forEach(function (e) {
      var t = e.replace(Lc, Ac);
      We[t] = new st(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
   });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
   var t = e.replace(Lc, Ac);
   We[t] = new st(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
   We[e] = new st(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
We.xlinkHref = new st(
   "xlinkHref",
   1,
   !1,
   "xlink:href",
   "http://www.w3.org/1999/xlink",
   !0,
   !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
   We[e] = new st(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Mc(e, t, r, n) {
   var i = We.hasOwnProperty(t) ? We[t] : null;
   (i !== null
      ? i.type !== 0
      : n ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (by(t, r, i, n) && (r = null),
      n || i === null
         ? wy(t) &&
           (r === null ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
         : i.mustUseProperty
         ? (e[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
         : ((t = i.attributeName),
           (n = i.attributeNamespace),
           r === null
              ? e.removeAttribute(t)
              : ((i = i.type),
                (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
                n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
}
var br = tm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
   io = Symbol.for("react.element"),
   qn = Symbol.for("react.portal"),
   Vn = Symbol.for("react.fragment"),
   Fc = Symbol.for("react.strict_mode"),
   gu = Symbol.for("react.profiler"),
   nm = Symbol.for("react.provider"),
   im = Symbol.for("react.context"),
   Uc = Symbol.for("react.forward_ref"),
   vu = Symbol.for("react.suspense"),
   yu = Symbol.for("react.suspense_list"),
   zc = Symbol.for("react.memo"),
   Tr = Symbol.for("react.lazy"),
   sm = Symbol.for("react.offscreen"),
   gf = Symbol.iterator;
function Ni(e) {
   return e === null || typeof e != "object"
      ? null
      : ((e = (gf && e[gf]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
}
var xe = Object.assign,
   yl;
function Ji(e) {
   if (yl === void 0)
      try {
         throw Error();
      } catch (r) {
         var t = r.stack.trim().match(/\n( *(at )?)/);
         yl = (t && t[1]) || "";
      }
   return (
      `
` +
      yl +
      e
   );
}
var wl = !1;
function xl(e, t) {
   if (!e || wl) return "";
   wl = !0;
   var r = Error.prepareStackTrace;
   Error.prepareStackTrace = void 0;
   try {
      if (t)
         if (
            ((t = function () {
               throw Error();
            }),
            Object.defineProperty(t.prototype, "props", {
               set: function () {
                  throw Error();
               },
            }),
            typeof Reflect == "object" && Reflect.construct)
         ) {
            try {
               Reflect.construct(t, []);
            } catch (u) {
               var n = u;
            }
            Reflect.construct(e, [], t);
         } else {
            try {
               t.call();
            } catch (u) {
               n = u;
            }
            e.call(t.prototype);
         }
      else {
         try {
            throw Error();
         } catch (u) {
            n = u;
         }
         e();
      }
   } catch (u) {
      if (u && n && typeof u.stack == "string") {
         for (
            var i = u.stack.split(`
`),
               s = n.stack.split(`
`),
               o = i.length - 1,
               a = s.length - 1;
            1 <= o && 0 <= a && i[o] !== s[a];

         )
            a--;
         for (; 1 <= o && 0 <= a; o--, a--)
            if (i[o] !== s[a]) {
               if (o !== 1 || a !== 1)
                  do
                     if ((o--, a--, 0 > a || i[o] !== s[a])) {
                        var l =
                           `
` + i[o].replace(" at new ", " at ");
                        return (
                           e.displayName &&
                              l.includes("<anonymous>") &&
                              (l = l.replace("<anonymous>", e.displayName)),
                           l
                        );
                     }
                  while (1 <= o && 0 <= a);
               break;
            }
      }
   } finally {
      (wl = !1), (Error.prepareStackTrace = r);
   }
   return (e = e ? e.displayName || e.name : "") ? Ji(e) : "";
}
function ky(e) {
   switch (e.tag) {
      case 5:
         return Ji(e.type);
      case 16:
         return Ji("Lazy");
      case 13:
         return Ji("Suspense");
      case 19:
         return Ji("SuspenseList");
      case 0:
      case 2:
      case 15:
         return (e = xl(e.type, !1)), e;
      case 11:
         return (e = xl(e.type.render, !1)), e;
      case 1:
         return (e = xl(e.type, !0)), e;
      default:
         return "";
   }
}
function wu(e) {
   if (e == null) return null;
   if (typeof e == "function") return e.displayName || e.name || null;
   if (typeof e == "string") return e;
   switch (e) {
      case Vn:
         return "Fragment";
      case qn:
         return "Portal";
      case gu:
         return "Profiler";
      case Fc:
         return "StrictMode";
      case vu:
         return "Suspense";
      case yu:
         return "SuspenseList";
   }
   if (typeof e == "object")
      switch (e.$$typeof) {
         case im:
            return (e.displayName || "Context") + ".Consumer";
         case nm:
            return (e._context.displayName || "Context") + ".Provider";
         case Uc:
            var t = e.render;
            return (
               (e = e.displayName),
               e ||
                  ((e = t.displayName || t.name || ""),
                  (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
               e
            );
         case zc:
            return (
               (t = e.displayName || null),
               t !== null ? t : wu(e.type) || "Memo"
            );
         case Tr:
            (t = e._payload), (e = e._init);
            try {
               return wu(e(t));
            } catch {}
      }
   return null;
}
function Sy(e) {
   var t = e.type;
   switch (e.tag) {
      case 24:
         return "Cache";
      case 9:
         return (t.displayName || "Context") + ".Consumer";
      case 10:
         return (t._context.displayName || "Context") + ".Provider";
      case 18:
         return "DehydratedFragment";
      case 11:
         return (
            (e = t.render),
            (e = e.displayName || e.name || ""),
            t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
         );
      case 7:
         return "Fragment";
      case 5:
         return t;
      case 4:
         return "Portal";
      case 3:
         return "Root";
      case 6:
         return "Text";
      case 16:
         return wu(t);
      case 8:
         return t === Fc ? "StrictMode" : "Mode";
      case 22:
         return "Offscreen";
      case 12:
         return "Profiler";
      case 21:
         return "Scope";
      case 13:
         return "Suspense";
      case 19:
         return "SuspenseList";
      case 25:
         return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
         if (typeof t == "function") return t.displayName || t.name || null;
         if (typeof t == "string") return t;
   }
   return null;
}
function Jr(e) {
   switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
         return e;
      case "object":
         return e;
      default:
         return "";
   }
}
function om(e) {
   var t = e.type;
   return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
   );
}
function _y(e) {
   var t = om(e) ? "checked" : "value",
      r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      n = "" + e[t];
   if (
      !e.hasOwnProperty(t) &&
      typeof r < "u" &&
      typeof r.get == "function" &&
      typeof r.set == "function"
   ) {
      var i = r.get,
         s = r.set;
      return (
         Object.defineProperty(e, t, {
            configurable: !0,
            get: function () {
               return i.call(this);
            },
            set: function (o) {
               (n = "" + o), s.call(this, o);
            },
         }),
         Object.defineProperty(e, t, { enumerable: r.enumerable }),
         {
            getValue: function () {
               return n;
            },
            setValue: function (o) {
               n = "" + o;
            },
            stopTracking: function () {
               (e._valueTracker = null), delete e[t];
            },
         }
      );
   }
}
function so(e) {
   e._valueTracker || (e._valueTracker = _y(e));
}
function am(e) {
   if (!e) return !1;
   var t = e._valueTracker;
   if (!t) return !0;
   var r = t.getValue(),
      n = "";
   return (
      e && (n = om(e) ? (e.checked ? "true" : "false") : e.value),
      (e = n),
      e !== r ? (t.setValue(e), !0) : !1
   );
}
function Ko(e) {
   if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
      return null;
   try {
      return e.activeElement || e.body;
   } catch {
      return e.body;
   }
}
function xu(e, t) {
   var r = t.checked;
   return xe({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: r ?? e._wrapperState.initialChecked,
   });
}
function vf(e, t) {
   var r = t.defaultValue == null ? "" : t.defaultValue,
      n = t.checked != null ? t.checked : t.defaultChecked;
   (r = Jr(t.value != null ? t.value : r)),
      (e._wrapperState = {
         initialChecked: n,
         initialValue: r,
         controlled:
            t.type === "checkbox" || t.type === "radio"
               ? t.checked != null
               : t.value != null,
      });
}
function lm(e, t) {
   (t = t.checked), t != null && Mc(e, "checked", t, !1);
}
function bu(e, t) {
   lm(e, t);
   var r = Jr(t.value),
      n = t.type;
   if (r != null)
      n === "number"
         ? ((r === 0 && e.value === "") || e.value != r) && (e.value = "" + r)
         : e.value !== "" + r && (e.value = "" + r);
   else if (n === "submit" || n === "reset") {
      e.removeAttribute("value");
      return;
   }
   t.hasOwnProperty("value")
      ? ku(e, t.type, r)
      : t.hasOwnProperty("defaultValue") && ku(e, t.type, Jr(t.defaultValue)),
      t.checked == null &&
         t.defaultChecked != null &&
         (e.defaultChecked = !!t.defaultChecked);
}
function yf(e, t, r) {
   if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var n = t.type;
      if (
         !(
            (n !== "submit" && n !== "reset") ||
            (t.value !== void 0 && t.value !== null)
         )
      )
         return;
      (t = "" + e._wrapperState.initialValue),
         r || t === e.value || (e.value = t),
         (e.defaultValue = t);
   }
   (r = e.name),
      r !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      r !== "" && (e.name = r);
}
function ku(e, t, r) {
   (t !== "number" || Ko(e.ownerDocument) !== e) &&
      (r == null
         ? (e.defaultValue = "" + e._wrapperState.initialValue)
         : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
}
var Xi = Array.isArray;
function ii(e, t, r, n) {
   if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
      for (r = 0; r < e.length; r++)
         (i = t.hasOwnProperty("$" + e[r].value)),
            e[r].selected !== i && (e[r].selected = i),
            i && n && (e[r].defaultSelected = !0);
   } else {
      for (r = "" + Jr(r), t = null, i = 0; i < e.length; i++) {
         if (e[i].value === r) {
            (e[i].selected = !0), n && (e[i].defaultSelected = !0);
            return;
         }
         t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
   }
}
function Su(e, t) {
   if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
   return xe({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
   });
}
function wf(e, t) {
   var r = t.value;
   if (r == null) {
      if (((r = t.children), (t = t.defaultValue), r != null)) {
         if (t != null) throw Error(O(92));
         if (Xi(r)) {
            if (1 < r.length) throw Error(O(93));
            r = r[0];
         }
         t = r;
      }
      t == null && (t = ""), (r = t);
   }
   e._wrapperState = { initialValue: Jr(r) };
}
function um(e, t) {
   var r = Jr(t.value),
      n = Jr(t.defaultValue);
   r != null &&
      ((r = "" + r),
      r !== e.value && (e.value = r),
      t.defaultValue == null && e.defaultValue !== r && (e.defaultValue = r)),
      n != null && (e.defaultValue = "" + n);
}
function xf(e) {
   var t = e.textContent;
   t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
}
function cm(e) {
   switch (e) {
      case "svg":
         return "http://www.w3.org/2000/svg";
      case "math":
         return "http://www.w3.org/1998/Math/MathML";
      default:
         return "http://www.w3.org/1999/xhtml";
   }
}
function _u(e, t) {
   return e == null || e === "http://www.w3.org/1999/xhtml"
      ? cm(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
}
var oo,
   dm = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
         ? function (t, r, n, i) {
              MSApp.execUnsafeLocalFunction(function () {
                 return e(t, r, n, i);
              });
           }
         : e;
   })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
         e.innerHTML = t;
      else {
         for (
            oo = oo || document.createElement("div"),
               oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
               t = oo.firstChild;
            e.firstChild;

         )
            e.removeChild(e.firstChild);
         for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
   });
function xs(e, t) {
   if (t) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
         r.nodeValue = t;
         return;
      }
   }
   e.textContent = t;
}
var ss = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
   },
   Cy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ss).forEach(function (e) {
   Cy.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ss[t] = ss[e]);
   });
});
function fm(e, t, r) {
   return t == null || typeof t == "boolean" || t === ""
      ? ""
      : r || typeof t != "number" || t === 0 || (ss.hasOwnProperty(e) && ss[e])
      ? ("" + t).trim()
      : t + "px";
}
function hm(e, t) {
   e = e.style;
   for (var r in t)
      if (t.hasOwnProperty(r)) {
         var n = r.indexOf("--") === 0,
            i = fm(r, t[r], n);
         r === "float" && (r = "cssFloat"),
            n ? e.setProperty(r, i) : (e[r] = i);
      }
}
var Ey = xe(
   { menuitem: !0 },
   {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
   }
);
function Cu(e, t) {
   if (t) {
      if (Ey[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
         throw Error(O(137, e));
      if (t.dangerouslySetInnerHTML != null) {
         if (t.children != null) throw Error(O(60));
         if (
            typeof t.dangerouslySetInnerHTML != "object" ||
            !("__html" in t.dangerouslySetInnerHTML)
         )
            throw Error(O(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(O(62));
   }
}
function Eu(e, t) {
   if (e.indexOf("-") === -1) return typeof t.is == "string";
   switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
         return !1;
      default:
         return !0;
   }
}
var Pu = null;
function Bc(e) {
   return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
   );
}
var Tu = null,
   si = null,
   oi = null;
function bf(e) {
   if ((e = Hs(e))) {
      if (typeof Tu != "function") throw Error(O(280));
      var t = e.stateNode;
      t && ((t = Wa(t)), Tu(e.stateNode, e.type, t));
   }
}
function pm(e) {
   si ? (oi ? oi.push(e) : (oi = [e])) : (si = e);
}
function mm() {
   if (si) {
      var e = si,
         t = oi;
      if (((oi = si = null), bf(e), t)) for (e = 0; e < t.length; e++) bf(t[e]);
   }
}
function gm(e, t) {
   return e(t);
}
function vm() {}
var bl = !1;
function ym(e, t, r) {
   if (bl) return e(t, r);
   bl = !0;
   try {
      return gm(e, t, r);
   } finally {
      (bl = !1), (si !== null || oi !== null) && (vm(), mm());
   }
}
function bs(e, t) {
   var r = e.stateNode;
   if (r === null) return null;
   var n = Wa(r);
   if (n === null) return null;
   r = n[t];
   e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
         (n = !n.disabled) ||
            ((e = e.type),
            (n = !(
               e === "button" ||
               e === "input" ||
               e === "select" ||
               e === "textarea"
            ))),
            (e = !n);
         break e;
      default:
         e = !1;
   }
   if (e) return null;
   if (r && typeof r != "function") throw Error(O(231, t, typeof r));
   return r;
}
var ju = !1;
if (gr)
   try {
      var Li = {};
      Object.defineProperty(Li, "passive", {
         get: function () {
            ju = !0;
         },
      }),
         window.addEventListener("test", Li, Li),
         window.removeEventListener("test", Li, Li);
   } catch {
      ju = !1;
   }
function Py(e, t, r, n, i, s, o, a, l) {
   var u = Array.prototype.slice.call(arguments, 3);
   try {
      t.apply(r, u);
   } catch (c) {
      this.onError(c);
   }
}
var os = !1,
   Yo = null,
   Jo = !1,
   Ou = null,
   Ty = {
      onError: function (e) {
         (os = !0), (Yo = e);
      },
   };
function jy(e, t, r, n, i, s, o, a, l) {
   (os = !1), (Yo = null), Py.apply(Ty, arguments);
}
function Oy(e, t, r, n, i, s, o, a, l) {
   if ((jy.apply(this, arguments), os)) {
      if (os) {
         var u = Yo;
         (os = !1), (Yo = null);
      } else throw Error(O(198));
      Jo || ((Jo = !0), (Ou = u));
   }
}
function jn(e) {
   var t = e,
      r = e;
   if (e.alternate) for (; t.return; ) t = t.return;
   else {
      e = t;
      do (t = e), t.flags & 4098 && (r = t.return), (e = t.return);
      while (e);
   }
   return t.tag === 3 ? r : null;
}
function wm(e) {
   if (e.tag === 13) {
      var t = e.memoizedState;
      if (
         (t === null &&
            ((e = e.alternate), e !== null && (t = e.memoizedState)),
         t !== null)
      )
         return t.dehydrated;
   }
   return null;
}
function kf(e) {
   if (jn(e) !== e) throw Error(O(188));
}
function Dy(e) {
   var t = e.alternate;
   if (!t) {
      if (((t = jn(e)), t === null)) throw Error(O(188));
      return t !== e ? null : e;
   }
   for (var r = e, n = t; ; ) {
      var i = r.return;
      if (i === null) break;
      var s = i.alternate;
      if (s === null) {
         if (((n = i.return), n !== null)) {
            r = n;
            continue;
         }
         break;
      }
      if (i.child === s.child) {
         for (s = i.child; s; ) {
            if (s === r) return kf(i), e;
            if (s === n) return kf(i), t;
            s = s.sibling;
         }
         throw Error(O(188));
      }
      if (r.return !== n.return) (r = i), (n = s);
      else {
         for (var o = !1, a = i.child; a; ) {
            if (a === r) {
               (o = !0), (r = i), (n = s);
               break;
            }
            if (a === n) {
               (o = !0), (n = i), (r = s);
               break;
            }
            a = a.sibling;
         }
         if (!o) {
            for (a = s.child; a; ) {
               if (a === r) {
                  (o = !0), (r = s), (n = i);
                  break;
               }
               if (a === n) {
                  (o = !0), (n = s), (r = i);
                  break;
               }
               a = a.sibling;
            }
            if (!o) throw Error(O(189));
         }
      }
      if (r.alternate !== n) throw Error(O(190));
   }
   if (r.tag !== 3) throw Error(O(188));
   return r.stateNode.current === r ? e : t;
}
function xm(e) {
   return (e = Dy(e)), e !== null ? bm(e) : null;
}
function bm(e) {
   if (e.tag === 5 || e.tag === 6) return e;
   for (e = e.child; e !== null; ) {
      var t = bm(e);
      if (t !== null) return t;
      e = e.sibling;
   }
   return null;
}
var km = xt.unstable_scheduleCallback,
   Sf = xt.unstable_cancelCallback,
   Ry = xt.unstable_shouldYield,
   Iy = xt.unstable_requestPaint,
   Ce = xt.unstable_now,
   $y = xt.unstable_getCurrentPriorityLevel,
   qc = xt.unstable_ImmediatePriority,
   Sm = xt.unstable_UserBlockingPriority,
   Xo = xt.unstable_NormalPriority,
   Ny = xt.unstable_LowPriority,
   _m = xt.unstable_IdlePriority,
   za = null,
   er = null;
function Ly(e) {
   if (er && typeof er.onCommitFiberRoot == "function")
      try {
         er.onCommitFiberRoot(za, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
}
var qt = Math.clz32 ? Math.clz32 : Fy,
   Ay = Math.log,
   My = Math.LN2;
function Fy(e) {
   return (e >>>= 0), e === 0 ? 32 : (31 - ((Ay(e) / My) | 0)) | 0;
}
var ao = 64,
   lo = 4194304;
function Zi(e) {
   switch (e & -e) {
      case 1:
         return 1;
      case 2:
         return 2;
      case 4:
         return 4;
      case 8:
         return 8;
      case 16:
         return 16;
      case 32:
         return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return e & 130023424;
      case 134217728:
         return 134217728;
      case 268435456:
         return 268435456;
      case 536870912:
         return 536870912;
      case 1073741824:
         return 1073741824;
      default:
         return e;
   }
}
function Zo(e, t) {
   var r = e.pendingLanes;
   if (r === 0) return 0;
   var n = 0,
      i = e.suspendedLanes,
      s = e.pingedLanes,
      o = r & 268435455;
   if (o !== 0) {
      var a = o & ~i;
      a !== 0 ? (n = Zi(a)) : ((s &= o), s !== 0 && (n = Zi(s)));
   } else (o = r & ~i), o !== 0 ? (n = Zi(o)) : s !== 0 && (n = Zi(s));
   if (n === 0) return 0;
   if (
      t !== 0 &&
      t !== n &&
      !(t & i) &&
      ((i = n & -n), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
   )
      return t;
   if ((n & 4 && (n |= r & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= n; 0 < t; )
         (r = 31 - qt(t)), (i = 1 << r), (n |= e[r]), (t &= ~i);
   return n;
}
function Uy(e, t) {
   switch (e) {
      case 1:
      case 2:
      case 4:
         return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
         return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
         return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
         return -1;
      default:
         return -1;
   }
}
function zy(e, t) {
   for (
      var r = e.suspendedLanes,
         n = e.pingedLanes,
         i = e.expirationTimes,
         s = e.pendingLanes;
      0 < s;

   ) {
      var o = 31 - qt(s),
         a = 1 << o,
         l = i[o];
      l === -1
         ? (!(a & r) || a & n) && (i[o] = Uy(a, t))
         : l <= t && (e.expiredLanes |= a),
         (s &= ~a);
   }
}
function Du(e) {
   return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
   );
}
function Cm() {
   var e = ao;
   return (ao <<= 1), !(ao & 4194240) && (ao = 64), e;
}
function kl(e) {
   for (var t = [], r = 0; 31 > r; r++) t.push(e);
   return t;
}
function Vs(e, t, r) {
   (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - qt(t)),
      (e[t] = r);
}
function By(e, t) {
   var r = e.pendingLanes & ~t;
   (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
   var n = e.eventTimes;
   for (e = e.expirationTimes; 0 < r; ) {
      var i = 31 - qt(r),
         s = 1 << i;
      (t[i] = 0), (n[i] = -1), (e[i] = -1), (r &= ~s);
   }
}
function Vc(e, t) {
   var r = (e.entangledLanes |= t);
   for (e = e.entanglements; r; ) {
      var n = 31 - qt(r),
         i = 1 << n;
      (i & t) | (e[n] & t) && (e[n] |= t), (r &= ~i);
   }
}
var ie = 0;
function Em(e) {
   return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pm,
   Wc,
   Tm,
   jm,
   Om,
   Ru = !1,
   uo = [],
   Ur = null,
   zr = null,
   Br = null,
   ks = new Map(),
   Ss = new Map(),
   Rr = [],
   qy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
         " "
      );
function _f(e, t) {
   switch (e) {
      case "focusin":
      case "focusout":
         Ur = null;
         break;
      case "dragenter":
      case "dragleave":
         zr = null;
         break;
      case "mouseover":
      case "mouseout":
         Br = null;
         break;
      case "pointerover":
      case "pointerout":
         ks.delete(t.pointerId);
         break;
      case "gotpointercapture":
      case "lostpointercapture":
         Ss.delete(t.pointerId);
   }
}
function Ai(e, t, r, n, i, s) {
   return e === null || e.nativeEvent !== s
      ? ((e = {
           blockedOn: t,
           domEventName: r,
           eventSystemFlags: n,
           nativeEvent: s,
           targetContainers: [i],
        }),
        t !== null && ((t = Hs(t)), t !== null && Wc(t)),
        e)
      : ((e.eventSystemFlags |= n),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
}
function Vy(e, t, r, n, i) {
   switch (t) {
      case "focusin":
         return (Ur = Ai(Ur, e, t, r, n, i)), !0;
      case "dragenter":
         return (zr = Ai(zr, e, t, r, n, i)), !0;
      case "mouseover":
         return (Br = Ai(Br, e, t, r, n, i)), !0;
      case "pointerover":
         var s = i.pointerId;
         return ks.set(s, Ai(ks.get(s) || null, e, t, r, n, i)), !0;
      case "gotpointercapture":
         return (
            (s = i.pointerId),
            Ss.set(s, Ai(Ss.get(s) || null, e, t, r, n, i)),
            !0
         );
   }
   return !1;
}
function Dm(e) {
   var t = hn(e.target);
   if (t !== null) {
      var r = jn(t);
      if (r !== null) {
         if (((t = r.tag), t === 13)) {
            if (((t = wm(r)), t !== null)) {
               (e.blockedOn = t),
                  Om(e.priority, function () {
                     Tm(r);
                  });
               return;
            }
         } else if (t === 3 && r.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
            return;
         }
      }
   }
   e.blockedOn = null;
}
function jo(e) {
   if (e.blockedOn !== null) return !1;
   for (var t = e.targetContainers; 0 < t.length; ) {
      var r = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (r === null) {
         r = e.nativeEvent;
         var n = new r.constructor(r.type, r);
         (Pu = n), r.target.dispatchEvent(n), (Pu = null);
      } else return (t = Hs(r)), t !== null && Wc(t), (e.blockedOn = r), !1;
      t.shift();
   }
   return !0;
}
function Cf(e, t, r) {
   jo(e) && r.delete(t);
}
function Wy() {
   (Ru = !1),
      Ur !== null && jo(Ur) && (Ur = null),
      zr !== null && jo(zr) && (zr = null),
      Br !== null && jo(Br) && (Br = null),
      ks.forEach(Cf),
      Ss.forEach(Cf);
}
function Mi(e, t) {
   e.blockedOn === t &&
      ((e.blockedOn = null),
      Ru ||
         ((Ru = !0),
         xt.unstable_scheduleCallback(xt.unstable_NormalPriority, Wy)));
}
function _s(e) {
   function t(i) {
      return Mi(i, e);
   }
   if (0 < uo.length) {
      Mi(uo[0], e);
      for (var r = 1; r < uo.length; r++) {
         var n = uo[r];
         n.blockedOn === e && (n.blockedOn = null);
      }
   }
   for (
      Ur !== null && Mi(Ur, e),
         zr !== null && Mi(zr, e),
         Br !== null && Mi(Br, e),
         ks.forEach(t),
         Ss.forEach(t),
         r = 0;
      r < Rr.length;
      r++
   )
      (n = Rr[r]), n.blockedOn === e && (n.blockedOn = null);
   for (; 0 < Rr.length && ((r = Rr[0]), r.blockedOn === null); )
      Dm(r), r.blockedOn === null && Rr.shift();
}
var ai = br.ReactCurrentBatchConfig,
   ea = !0;
function Hy(e, t, r, n) {
   var i = ie,
      s = ai.transition;
   ai.transition = null;
   try {
      (ie = 1), Hc(e, t, r, n);
   } finally {
      (ie = i), (ai.transition = s);
   }
}
function Qy(e, t, r, n) {
   var i = ie,
      s = ai.transition;
   ai.transition = null;
   try {
      (ie = 4), Hc(e, t, r, n);
   } finally {
      (ie = i), (ai.transition = s);
   }
}
function Hc(e, t, r, n) {
   if (ea) {
      var i = Iu(e, t, r, n);
      if (i === null) Rl(e, t, n, ta, r), _f(e, n);
      else if (Vy(i, e, t, r, n)) n.stopPropagation();
      else if ((_f(e, n), t & 4 && -1 < qy.indexOf(e))) {
         for (; i !== null; ) {
            var s = Hs(i);
            if (
               (s !== null && Pm(s),
               (s = Iu(e, t, r, n)),
               s === null && Rl(e, t, n, ta, r),
               s === i)
            )
               break;
            i = s;
         }
         i !== null && n.stopPropagation();
      } else Rl(e, t, n, null, r);
   }
}
var ta = null;
function Iu(e, t, r, n) {
   if (((ta = null), (e = Bc(n)), (e = hn(e)), e !== null))
      if (((t = jn(e)), t === null)) e = null;
      else if (((r = t.tag), r === 13)) {
         if (((e = wm(t)), e !== null)) return e;
         e = null;
      } else if (r === 3) {
         if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
         e = null;
      } else t !== e && (e = null);
   return (ta = e), null;
}
function Rm(e) {
   switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
         return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
         return 4;
      case "message":
         switch ($y()) {
            case qc:
               return 1;
            case Sm:
               return 4;
            case Xo:
            case Ny:
               return 16;
            case _m:
               return 536870912;
            default:
               return 16;
         }
      default:
         return 16;
   }
}
var Lr = null,
   Qc = null,
   Oo = null;
function Im() {
   if (Oo) return Oo;
   var e,
      t = Qc,
      r = t.length,
      n,
      i = "value" in Lr ? Lr.value : Lr.textContent,
      s = i.length;
   for (e = 0; e < r && t[e] === i[e]; e++);
   var o = r - e;
   for (n = 1; n <= o && t[r - n] === i[s - n]; n++);
   return (Oo = i.slice(e, 1 < n ? 1 - n : void 0));
}
function Do(e) {
   var t = e.keyCode;
   return (
      "charCode" in e
         ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
         : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
   );
}
function co() {
   return !0;
}
function Ef() {
   return !1;
}
function kt(e) {
   function t(r, n, i, s, o) {
      (this._reactName = r),
         (this._targetInst = i),
         (this.type = n),
         (this.nativeEvent = s),
         (this.target = o),
         (this.currentTarget = null);
      for (var a in e)
         e.hasOwnProperty(a) && ((r = e[a]), (this[a] = r ? r(s) : s[a]));
      return (
         (this.isDefaultPrevented = (
            s.defaultPrevented != null
               ? s.defaultPrevented
               : s.returnValue === !1
         )
            ? co
            : Ef),
         (this.isPropagationStopped = Ef),
         this
      );
   }
   return (
      xe(t.prototype, {
         preventDefault: function () {
            this.defaultPrevented = !0;
            var r = this.nativeEvent;
            r &&
               (r.preventDefault
                  ? r.preventDefault()
                  : typeof r.returnValue != "unknown" && (r.returnValue = !1),
               (this.isDefaultPrevented = co));
         },
         stopPropagation: function () {
            var r = this.nativeEvent;
            r &&
               (r.stopPropagation
                  ? r.stopPropagation()
                  : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
               (this.isPropagationStopped = co));
         },
         persist: function () {},
         isPersistent: co,
      }),
      t
   );
}
var Ei = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
         return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
   },
   Gc = kt(Ei),
   Ws = xe({}, Ei, { view: 0, detail: 0 }),
   Gy = kt(Ws),
   Sl,
   _l,
   Fi,
   Ba = xe({}, Ws, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Kc,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
         return e.relatedTarget === void 0
            ? e.fromElement === e.srcElement
               ? e.toElement
               : e.fromElement
            : e.relatedTarget;
      },
      movementX: function (e) {
         return "movementX" in e
            ? e.movementX
            : (e !== Fi &&
                 (Fi && e.type === "mousemove"
                    ? ((Sl = e.screenX - Fi.screenX),
                      (_l = e.screenY - Fi.screenY))
                    : (_l = Sl = 0),
                 (Fi = e)),
              Sl);
      },
      movementY: function (e) {
         return "movementY" in e ? e.movementY : _l;
      },
   }),
   Pf = kt(Ba),
   Ky = xe({}, Ba, { dataTransfer: 0 }),
   Yy = kt(Ky),
   Jy = xe({}, Ws, { relatedTarget: 0 }),
   Cl = kt(Jy),
   Xy = xe({}, Ei, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
   Zy = kt(Xy),
   e1 = xe({}, Ei, {
      clipboardData: function (e) {
         return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
   }),
   t1 = kt(e1),
   r1 = xe({}, Ei, { data: 0 }),
   Tf = kt(r1),
   n1 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
   },
   i1 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
   },
   s1 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
   };
function o1(e) {
   var t = this.nativeEvent;
   return t.getModifierState
      ? t.getModifierState(e)
      : (e = s1[e])
      ? !!t[e]
      : !1;
}
function Kc() {
   return o1;
}
var a1 = xe({}, Ws, {
      key: function (e) {
         if (e.key) {
            var t = n1[e.key] || e.key;
            if (t !== "Unidentified") return t;
         }
         return e.type === "keypress"
            ? ((e = Do(e)), e === 13 ? "Enter" : String.fromCharCode(e))
            : e.type === "keydown" || e.type === "keyup"
            ? i1[e.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Kc,
      charCode: function (e) {
         return e.type === "keypress" ? Do(e) : 0;
      },
      keyCode: function (e) {
         return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
         return e.type === "keypress"
            ? Do(e)
            : e.type === "keydown" || e.type === "keyup"
            ? e.keyCode
            : 0;
      },
   }),
   l1 = kt(a1),
   u1 = xe({}, Ba, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
   }),
   jf = kt(u1),
   c1 = xe({}, Ws, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Kc,
   }),
   d1 = kt(c1),
   f1 = xe({}, Ei, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
   h1 = kt(f1),
   p1 = xe({}, Ba, {
      deltaX: function (e) {
         return "deltaX" in e
            ? e.deltaX
            : "wheelDeltaX" in e
            ? -e.wheelDeltaX
            : 0;
      },
      deltaY: function (e) {
         return "deltaY" in e
            ? e.deltaY
            : "wheelDeltaY" in e
            ? -e.wheelDeltaY
            : "wheelDelta" in e
            ? -e.wheelDelta
            : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
   }),
   m1 = kt(p1),
   g1 = [9, 13, 27, 32],
   Yc = gr && "CompositionEvent" in window,
   as = null;
gr && "documentMode" in document && (as = document.documentMode);
var v1 = gr && "TextEvent" in window && !as,
   $m = gr && (!Yc || (as && 8 < as && 11 >= as)),
   Of = String.fromCharCode(32),
   Df = !1;
function Nm(e, t) {
   switch (e) {
      case "keyup":
         return g1.indexOf(t.keyCode) !== -1;
      case "keydown":
         return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
         return !0;
      default:
         return !1;
   }
}
function Lm(e) {
   return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Wn = !1;
function y1(e, t) {
   switch (e) {
      case "compositionend":
         return Lm(t);
      case "keypress":
         return t.which !== 32 ? null : ((Df = !0), Of);
      case "textInput":
         return (e = t.data), e === Of && Df ? null : e;
      default:
         return null;
   }
}
function w1(e, t) {
   if (Wn)
      return e === "compositionend" || (!Yc && Nm(e, t))
         ? ((e = Im()), (Oo = Qc = Lr = null), (Wn = !1), e)
         : null;
   switch (e) {
      case "paste":
         return null;
      case "keypress":
         if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
         }
         return null;
      case "compositionend":
         return $m && t.locale !== "ko" ? null : t.data;
      default:
         return null;
   }
}
var x1 = {
   color: !0,
   date: !0,
   datetime: !0,
   "datetime-local": !0,
   email: !0,
   month: !0,
   number: !0,
   password: !0,
   range: !0,
   search: !0,
   tel: !0,
   text: !0,
   time: !0,
   url: !0,
   week: !0,
};
function Rf(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return t === "input" ? !!x1[e.type] : t === "textarea";
}
function Am(e, t, r, n) {
   pm(n),
      (t = ra(t, "onChange")),
      0 < t.length &&
         ((r = new Gc("onChange", "change", null, r, n)),
         e.push({ event: r, listeners: t }));
}
var ls = null,
   Cs = null;
function b1(e) {
   Gm(e, 0);
}
function qa(e) {
   var t = Gn(e);
   if (am(t)) return e;
}
function k1(e, t) {
   if (e === "change") return t;
}
var Mm = !1;
if (gr) {
   var El;
   if (gr) {
      var Pl = "oninput" in document;
      if (!Pl) {
         var If = document.createElement("div");
         If.setAttribute("oninput", "return;"),
            (Pl = typeof If.oninput == "function");
      }
      El = Pl;
   } else El = !1;
   Mm = El && (!document.documentMode || 9 < document.documentMode);
}
function $f() {
   ls && (ls.detachEvent("onpropertychange", Fm), (Cs = ls = null));
}
function Fm(e) {
   if (e.propertyName === "value" && qa(Cs)) {
      var t = [];
      Am(t, Cs, e, Bc(e)), ym(b1, t);
   }
}
function S1(e, t, r) {
   e === "focusin"
      ? ($f(), (ls = t), (Cs = r), ls.attachEvent("onpropertychange", Fm))
      : e === "focusout" && $f();
}
function _1(e) {
   if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return qa(Cs);
}
function C1(e, t) {
   if (e === "click") return qa(t);
}
function E1(e, t) {
   if (e === "input" || e === "change") return qa(t);
}
function P1(e, t) {
   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ht = typeof Object.is == "function" ? Object.is : P1;
function Es(e, t) {
   if (Ht(e, t)) return !0;
   if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
   var r = Object.keys(e),
      n = Object.keys(t);
   if (r.length !== n.length) return !1;
   for (n = 0; n < r.length; n++) {
      var i = r[n];
      if (!mu.call(t, i) || !Ht(e[i], t[i])) return !1;
   }
   return !0;
}
function Nf(e) {
   for (; e && e.firstChild; ) e = e.firstChild;
   return e;
}
function Lf(e, t) {
   var r = Nf(e);
   e = 0;
   for (var n; r; ) {
      if (r.nodeType === 3) {
         if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e };
         e = n;
      }
      e: {
         for (; r; ) {
            if (r.nextSibling) {
               r = r.nextSibling;
               break e;
            }
            r = r.parentNode;
         }
         r = void 0;
      }
      r = Nf(r);
   }
}
function Um(e, t) {
   return e && t
      ? e === t
         ? !0
         : e && e.nodeType === 3
         ? !1
         : t && t.nodeType === 3
         ? Um(e, t.parentNode)
         : "contains" in e
         ? e.contains(t)
         : e.compareDocumentPosition
         ? !!(e.compareDocumentPosition(t) & 16)
         : !1
      : !1;
}
function zm() {
   for (var e = window, t = Ko(); t instanceof e.HTMLIFrameElement; ) {
      try {
         var r = typeof t.contentWindow.location.href == "string";
      } catch {
         r = !1;
      }
      if (r) e = t.contentWindow;
      else break;
      t = Ko(e.document);
   }
   return t;
}
function Jc(e) {
   var t = e && e.nodeName && e.nodeName.toLowerCase();
   return (
      t &&
      ((t === "input" &&
         (e.type === "text" ||
            e.type === "search" ||
            e.type === "tel" ||
            e.type === "url" ||
            e.type === "password")) ||
         t === "textarea" ||
         e.contentEditable === "true")
   );
}
function T1(e) {
   var t = zm(),
      r = e.focusedElem,
      n = e.selectionRange;
   if (
      t !== r &&
      r &&
      r.ownerDocument &&
      Um(r.ownerDocument.documentElement, r)
   ) {
      if (n !== null && Jc(r)) {
         if (
            ((t = n.start),
            (e = n.end),
            e === void 0 && (e = t),
            "selectionStart" in r)
         )
            (r.selectionStart = t),
               (r.selectionEnd = Math.min(e, r.value.length));
         else if (
            ((e =
               ((t = r.ownerDocument || document) && t.defaultView) || window),
            e.getSelection)
         ) {
            e = e.getSelection();
            var i = r.textContent.length,
               s = Math.min(n.start, i);
            (n = n.end === void 0 ? s : Math.min(n.end, i)),
               !e.extend && s > n && ((i = n), (n = s), (s = i)),
               (i = Lf(r, s));
            var o = Lf(r, n);
            i &&
               o &&
               (e.rangeCount !== 1 ||
                  e.anchorNode !== i.node ||
                  e.anchorOffset !== i.offset ||
                  e.focusNode !== o.node ||
                  e.focusOffset !== o.offset) &&
               ((t = t.createRange()),
               t.setStart(i.node, i.offset),
               e.removeAllRanges(),
               s > n
                  ? (e.addRange(t), e.extend(o.node, o.offset))
                  : (t.setEnd(o.node, o.offset), e.addRange(t)));
         }
      }
      for (t = [], e = r; (e = e.parentNode); )
         e.nodeType === 1 &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof r.focus == "function" && r.focus(), r = 0; r < t.length; r++)
         (e = t[r]),
            (e.element.scrollLeft = e.left),
            (e.element.scrollTop = e.top);
   }
}
var j1 = gr && "documentMode" in document && 11 >= document.documentMode,
   Hn = null,
   $u = null,
   us = null,
   Nu = !1;
function Af(e, t, r) {
   var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
   Nu ||
      Hn == null ||
      Hn !== Ko(n) ||
      ((n = Hn),
      "selectionStart" in n && Jc(n)
         ? (n = { start: n.selectionStart, end: n.selectionEnd })
         : ((n = (
              (n.ownerDocument && n.ownerDocument.defaultView) ||
              window
           ).getSelection()),
           (n = {
              anchorNode: n.anchorNode,
              anchorOffset: n.anchorOffset,
              focusNode: n.focusNode,
              focusOffset: n.focusOffset,
           })),
      (us && Es(us, n)) ||
         ((us = n),
         (n = ra($u, "onSelect")),
         0 < n.length &&
            ((t = new Gc("onSelect", "select", null, t, r)),
            e.push({ event: t, listeners: n }),
            (t.target = Hn))));
}
function fo(e, t) {
   var r = {};
   return (
      (r[e.toLowerCase()] = t.toLowerCase()),
      (r["Webkit" + e] = "webkit" + t),
      (r["Moz" + e] = "moz" + t),
      r
   );
}
var Qn = {
      animationend: fo("Animation", "AnimationEnd"),
      animationiteration: fo("Animation", "AnimationIteration"),
      animationstart: fo("Animation", "AnimationStart"),
      transitionend: fo("Transition", "TransitionEnd"),
   },
   Tl = {},
   Bm = {};
gr &&
   ((Bm = document.createElement("div").style),
   "AnimationEvent" in window ||
      (delete Qn.animationend.animation,
      delete Qn.animationiteration.animation,
      delete Qn.animationstart.animation),
   "TransitionEvent" in window || delete Qn.transitionend.transition);
function Va(e) {
   if (Tl[e]) return Tl[e];
   if (!Qn[e]) return e;
   var t = Qn[e],
      r;
   for (r in t) if (t.hasOwnProperty(r) && r in Bm) return (Tl[e] = t[r]);
   return e;
}
var qm = Va("animationend"),
   Vm = Va("animationiteration"),
   Wm = Va("animationstart"),
   Hm = Va("transitionend"),
   Qm = new Map(),
   Mf =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
         " "
      );
function Zr(e, t) {
   Qm.set(e, t), Tn(t, [e]);
}
for (var jl = 0; jl < Mf.length; jl++) {
   var Ol = Mf[jl],
      O1 = Ol.toLowerCase(),
      D1 = Ol[0].toUpperCase() + Ol.slice(1);
   Zr(O1, "on" + D1);
}
Zr(qm, "onAnimationEnd");
Zr(Vm, "onAnimationIteration");
Zr(Wm, "onAnimationStart");
Zr("dblclick", "onDoubleClick");
Zr("focusin", "onFocus");
Zr("focusout", "onBlur");
Zr(Hm, "onTransitionEnd");
di("onMouseEnter", ["mouseout", "mouseover"]);
di("onMouseLeave", ["mouseout", "mouseover"]);
di("onPointerEnter", ["pointerout", "pointerover"]);
di("onPointerLeave", ["pointerout", "pointerover"]);
Tn(
   "onChange",
   "change click focusin focusout input keydown keyup selectionchange".split(
      " "
   )
);
Tn(
   "onSelect",
   "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
   )
);
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn(
   "onCompositionEnd",
   "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
   "onCompositionStart",
   "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tn(
   "onCompositionUpdate",
   "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var es =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
         " "
      ),
   R1 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(es)
   );
function Ff(e, t, r) {
   var n = e.type || "unknown-event";
   (e.currentTarget = r), Oy(n, t, void 0, e), (e.currentTarget = null);
}
function Gm(e, t) {
   t = (t & 4) !== 0;
   for (var r = 0; r < e.length; r++) {
      var n = e[r],
         i = n.event;
      n = n.listeners;
      e: {
         var s = void 0;
         if (t)
            for (var o = n.length - 1; 0 <= o; o--) {
               var a = n[o],
                  l = a.instance,
                  u = a.currentTarget;
               if (((a = a.listener), l !== s && i.isPropagationStopped()))
                  break e;
               Ff(i, a, u), (s = l);
            }
         else
            for (o = 0; o < n.length; o++) {
               if (
                  ((a = n[o]),
                  (l = a.instance),
                  (u = a.currentTarget),
                  (a = a.listener),
                  l !== s && i.isPropagationStopped())
               )
                  break e;
               Ff(i, a, u), (s = l);
            }
      }
   }
   if (Jo) throw ((e = Ou), (Jo = !1), (Ou = null), e);
}
function fe(e, t) {
   var r = t[Uu];
   r === void 0 && (r = t[Uu] = new Set());
   var n = e + "__bubble";
   r.has(n) || (Km(t, e, 2, !1), r.add(n));
}
function Dl(e, t, r) {
   var n = 0;
   t && (n |= 4), Km(r, e, n, t);
}
var ho = "_reactListening" + Math.random().toString(36).slice(2);
function Ps(e) {
   if (!e[ho]) {
      (e[ho] = !0),
         rm.forEach(function (r) {
            r !== "selectionchange" &&
               (R1.has(r) || Dl(r, !1, e), Dl(r, !0, e));
         });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ho] || ((t[ho] = !0), Dl("selectionchange", !1, t));
   }
}
function Km(e, t, r, n) {
   switch (Rm(t)) {
      case 1:
         var i = Hy;
         break;
      case 4:
         i = Qy;
         break;
      default:
         i = Hc;
   }
   (r = i.bind(null, t, r, e)),
      (i = void 0),
      !ju ||
         (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
         (i = !0),
      n
         ? i !== void 0
            ? e.addEventListener(t, r, { capture: !0, passive: i })
            : e.addEventListener(t, r, !0)
         : i !== void 0
         ? e.addEventListener(t, r, { passive: i })
         : e.addEventListener(t, r, !1);
}
function Rl(e, t, r, n, i) {
   var s = n;
   if (!(t & 1) && !(t & 2) && n !== null)
      e: for (;;) {
         if (n === null) return;
         var o = n.tag;
         if (o === 3 || o === 4) {
            var a = n.stateNode.containerInfo;
            if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
            if (o === 4)
               for (o = n.return; o !== null; ) {
                  var l = o.tag;
                  if (
                     (l === 3 || l === 4) &&
                     ((l = o.stateNode.containerInfo),
                     l === i || (l.nodeType === 8 && l.parentNode === i))
                  )
                     return;
                  o = o.return;
               }
            for (; a !== null; ) {
               if (((o = hn(a)), o === null)) return;
               if (((l = o.tag), l === 5 || l === 6)) {
                  n = s = o;
                  continue e;
               }
               a = a.parentNode;
            }
         }
         n = n.return;
      }
   ym(function () {
      var u = s,
         c = Bc(r),
         d = [];
      e: {
         var h = Qm.get(e);
         if (h !== void 0) {
            var m = Gc,
               y = e;
            switch (e) {
               case "keypress":
                  if (Do(r) === 0) break e;
               case "keydown":
               case "keyup":
                  m = l1;
                  break;
               case "focusin":
                  (y = "focus"), (m = Cl);
                  break;
               case "focusout":
                  (y = "blur"), (m = Cl);
                  break;
               case "beforeblur":
               case "afterblur":
                  m = Cl;
                  break;
               case "click":
                  if (r.button === 2) break e;
               case "auxclick":
               case "dblclick":
               case "mousedown":
               case "mousemove":
               case "mouseup":
               case "mouseout":
               case "mouseover":
               case "contextmenu":
                  m = Pf;
                  break;
               case "drag":
               case "dragend":
               case "dragenter":
               case "dragexit":
               case "dragleave":
               case "dragover":
               case "dragstart":
               case "drop":
                  m = Yy;
                  break;
               case "touchcancel":
               case "touchend":
               case "touchmove":
               case "touchstart":
                  m = d1;
                  break;
               case qm:
               case Vm:
               case Wm:
                  m = Zy;
                  break;
               case Hm:
                  m = h1;
                  break;
               case "scroll":
                  m = Gy;
                  break;
               case "wheel":
                  m = m1;
                  break;
               case "copy":
               case "cut":
               case "paste":
                  m = t1;
                  break;
               case "gotpointercapture":
               case "lostpointercapture":
               case "pointercancel":
               case "pointerdown":
               case "pointermove":
               case "pointerout":
               case "pointerover":
               case "pointerup":
                  m = jf;
            }
            var w = (t & 4) !== 0,
               k = !w && e === "scroll",
               g = w ? (h !== null ? h + "Capture" : null) : h;
            w = [];
            for (var p = u, v; p !== null; ) {
               v = p;
               var b = v.stateNode;
               if (
                  (v.tag === 5 &&
                     b !== null &&
                     ((v = b),
                     g !== null &&
                        ((b = bs(p, g)), b != null && w.push(Ts(p, b, v)))),
                  k)
               )
                  break;
               p = p.return;
            }
            0 < w.length &&
               ((h = new m(h, y, null, r, c)),
               d.push({ event: h, listeners: w }));
         }
      }
      if (!(t & 7)) {
         e: {
            if (
               ((h = e === "mouseover" || e === "pointerover"),
               (m = e === "mouseout" || e === "pointerout"),
               h &&
                  r !== Pu &&
                  (y = r.relatedTarget || r.fromElement) &&
                  (hn(y) || y[vr]))
            )
               break e;
            if (
               (m || h) &&
               ((h =
                  c.window === c
                     ? c
                     : (h = c.ownerDocument)
                     ? h.defaultView || h.parentWindow
                     : window),
               m
                  ? ((y = r.relatedTarget || r.toElement),
                    (m = u),
                    (y = y ? hn(y) : null),
                    y !== null &&
                       ((k = jn(y)), y !== k || (y.tag !== 5 && y.tag !== 6)) &&
                       (y = null))
                  : ((m = null), (y = u)),
               m !== y)
            ) {
               if (
                  ((w = Pf),
                  (b = "onMouseLeave"),
                  (g = "onMouseEnter"),
                  (p = "mouse"),
                  (e === "pointerout" || e === "pointerover") &&
                     ((w = jf),
                     (b = "onPointerLeave"),
                     (g = "onPointerEnter"),
                     (p = "pointer")),
                  (k = m == null ? h : Gn(m)),
                  (v = y == null ? h : Gn(y)),
                  (h = new w(b, p + "leave", m, r, c)),
                  (h.target = k),
                  (h.relatedTarget = v),
                  (b = null),
                  hn(c) === u &&
                     ((w = new w(g, p + "enter", y, r, c)),
                     (w.target = v),
                     (w.relatedTarget = k),
                     (b = w)),
                  (k = b),
                  m && y)
               )
                  t: {
                     for (w = m, g = y, p = 0, v = w; v; v = $n(v)) p++;
                     for (v = 0, b = g; b; b = $n(b)) v++;
                     for (; 0 < p - v; ) (w = $n(w)), p--;
                     for (; 0 < v - p; ) (g = $n(g)), v--;
                     for (; p--; ) {
                        if (w === g || (g !== null && w === g.alternate))
                           break t;
                        (w = $n(w)), (g = $n(g));
                     }
                     w = null;
                  }
               else w = null;
               m !== null && Uf(d, h, m, w, !1),
                  y !== null && k !== null && Uf(d, k, y, w, !0);
            }
         }
         e: {
            if (
               ((h = u ? Gn(u) : window),
               (m = h.nodeName && h.nodeName.toLowerCase()),
               m === "select" || (m === "input" && h.type === "file"))
            )
               var _ = k1;
            else if (Rf(h))
               if (Mm) _ = E1;
               else {
                  _ = _1;
                  var P = S1;
               }
            else
               (m = h.nodeName) &&
                  m.toLowerCase() === "input" &&
                  (h.type === "checkbox" || h.type === "radio") &&
                  (_ = C1);
            if (_ && (_ = _(e, u))) {
               Am(d, _, r, c);
               break e;
            }
            P && P(e, h, u),
               e === "focusout" &&
                  (P = h._wrapperState) &&
                  P.controlled &&
                  h.type === "number" &&
                  ku(h, "number", h.value);
         }
         switch (((P = u ? Gn(u) : window), e)) {
            case "focusin":
               (Rf(P) || P.contentEditable === "true") &&
                  ((Hn = P), ($u = u), (us = null));
               break;
            case "focusout":
               us = $u = Hn = null;
               break;
            case "mousedown":
               Nu = !0;
               break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
               (Nu = !1), Af(d, r, c);
               break;
            case "selectionchange":
               if (j1) break;
            case "keydown":
            case "keyup":
               Af(d, r, c);
         }
         var C;
         if (Yc)
            e: {
               switch (e) {
                  case "compositionstart":
                     var j = "onCompositionStart";
                     break e;
                  case "compositionend":
                     j = "onCompositionEnd";
                     break e;
                  case "compositionupdate":
                     j = "onCompositionUpdate";
                     break e;
               }
               j = void 0;
            }
         else
            Wn
               ? Nm(e, r) && (j = "onCompositionEnd")
               : e === "keydown" &&
                 r.keyCode === 229 &&
                 (j = "onCompositionStart");
         j &&
            ($m &&
               r.locale !== "ko" &&
               (Wn || j !== "onCompositionStart"
                  ? j === "onCompositionEnd" && Wn && (C = Im())
                  : ((Lr = c),
                    (Qc = "value" in Lr ? Lr.value : Lr.textContent),
                    (Wn = !0))),
            (P = ra(u, j)),
            0 < P.length &&
               ((j = new Tf(j, e, null, r, c)),
               d.push({ event: j, listeners: P }),
               C ? (j.data = C) : ((C = Lm(r)), C !== null && (j.data = C)))),
            (C = v1 ? y1(e, r) : w1(e, r)) &&
               ((u = ra(u, "onBeforeInput")),
               0 < u.length &&
                  ((c = new Tf("onBeforeInput", "beforeinput", null, r, c)),
                  d.push({ event: c, listeners: u }),
                  (c.data = C)));
      }
      Gm(d, t);
   });
}
function Ts(e, t, r) {
   return { instance: e, listener: t, currentTarget: r };
}
function ra(e, t) {
   for (var r = t + "Capture", n = []; e !== null; ) {
      var i = e,
         s = i.stateNode;
      i.tag === 5 &&
         s !== null &&
         ((i = s),
         (s = bs(e, r)),
         s != null && n.unshift(Ts(e, s, i)),
         (s = bs(e, t)),
         s != null && n.push(Ts(e, s, i))),
         (e = e.return);
   }
   return n;
}
function $n(e) {
   if (e === null) return null;
   do e = e.return;
   while (e && e.tag !== 5);
   return e || null;
}
function Uf(e, t, r, n, i) {
   for (var s = t._reactName, o = []; r !== null && r !== n; ) {
      var a = r,
         l = a.alternate,
         u = a.stateNode;
      if (l !== null && l === n) break;
      a.tag === 5 &&
         u !== null &&
         ((a = u),
         i
            ? ((l = bs(r, s)), l != null && o.unshift(Ts(r, l, a)))
            : i || ((l = bs(r, s)), l != null && o.push(Ts(r, l, a)))),
         (r = r.return);
   }
   o.length !== 0 && e.push({ event: t, listeners: o });
}
var I1 = /\r\n?/g,
   $1 = /\u0000|\uFFFD/g;
function zf(e) {
   return (typeof e == "string" ? e : "" + e)
      .replace(
         I1,
         `
`
      )
      .replace($1, "");
}
function po(e, t, r) {
   if (((t = zf(t)), zf(e) !== t && r)) throw Error(O(425));
}
function na() {}
var Lu = null,
   Au = null;
function Mu(e, t) {
   return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
         t.dangerouslySetInnerHTML !== null &&
         t.dangerouslySetInnerHTML.__html != null)
   );
}
var Fu = typeof setTimeout == "function" ? setTimeout : void 0,
   N1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
   Bf = typeof Promise == "function" ? Promise : void 0,
   L1 =
      typeof queueMicrotask == "function"
         ? queueMicrotask
         : typeof Bf < "u"
         ? function (e) {
              return Bf.resolve(null).then(e).catch(A1);
           }
         : Fu;
function A1(e) {
   setTimeout(function () {
      throw e;
   });
}
function Il(e, t) {
   var r = t,
      n = 0;
   do {
      var i = r.nextSibling;
      if ((e.removeChild(r), i && i.nodeType === 8))
         if (((r = i.data), r === "/$")) {
            if (n === 0) {
               e.removeChild(i), _s(t);
               return;
            }
            n--;
         } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
      r = i;
   } while (r);
   _s(t);
}
function qr(e) {
   for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
         if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
         if (t === "/$") return null;
      }
   }
   return e;
}
function qf(e) {
   e = e.previousSibling;
   for (var t = 0; e; ) {
      if (e.nodeType === 8) {
         var r = e.data;
         if (r === "$" || r === "$!" || r === "$?") {
            if (t === 0) return e;
            t--;
         } else r === "/$" && t++;
      }
      e = e.previousSibling;
   }
   return null;
}
var Pi = Math.random().toString(36).slice(2),
   Xt = "__reactFiber$" + Pi,
   js = "__reactProps$" + Pi,
   vr = "__reactContainer$" + Pi,
   Uu = "__reactEvents$" + Pi,
   M1 = "__reactListeners$" + Pi,
   F1 = "__reactHandles$" + Pi;
function hn(e) {
   var t = e[Xt];
   if (t) return t;
   for (var r = e.parentNode; r; ) {
      if ((t = r[vr] || r[Xt])) {
         if (
            ((r = t.alternate),
            t.child !== null || (r !== null && r.child !== null))
         )
            for (e = qf(e); e !== null; ) {
               if ((r = e[Xt])) return r;
               e = qf(e);
            }
         return t;
      }
      (e = r), (r = e.parentNode);
   }
   return null;
}
function Hs(e) {
   return (
      (e = e[Xt] || e[vr]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
         ? null
         : e
   );
}
function Gn(e) {
   if (e.tag === 5 || e.tag === 6) return e.stateNode;
   throw Error(O(33));
}
function Wa(e) {
   return e[js] || null;
}
var zu = [],
   Kn = -1;
function en(e) {
   return { current: e };
}
function pe(e) {
   0 > Kn || ((e.current = zu[Kn]), (zu[Kn] = null), Kn--);
}
function ce(e, t) {
   Kn++, (zu[Kn] = e.current), (e.current = t);
}
var Xr = {},
   Ze = en(Xr),
   ct = en(!1),
   Sn = Xr;
function fi(e, t) {
   var r = e.type.contextTypes;
   if (!r) return Xr;
   var n = e.stateNode;
   if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
      return n.__reactInternalMemoizedMaskedChildContext;
   var i = {},
      s;
   for (s in r) i[s] = t[s];
   return (
      n &&
         ((e = e.stateNode),
         (e.__reactInternalMemoizedUnmaskedChildContext = t),
         (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
   );
}
function dt(e) {
   return (e = e.childContextTypes), e != null;
}
function ia() {
   pe(ct), pe(Ze);
}
function Vf(e, t, r) {
   if (Ze.current !== Xr) throw Error(O(168));
   ce(Ze, t), ce(ct, r);
}
function Ym(e, t, r) {
   var n = e.stateNode;
   if (((t = t.childContextTypes), typeof n.getChildContext != "function"))
      return r;
   n = n.getChildContext();
   for (var i in n) if (!(i in t)) throw Error(O(108, Sy(e) || "Unknown", i));
   return xe({}, r, n);
}
function sa(e) {
   return (
      (e =
         ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
         Xr),
      (Sn = Ze.current),
      ce(Ze, e),
      ce(ct, ct.current),
      !0
   );
}
function Wf(e, t, r) {
   var n = e.stateNode;
   if (!n) throw Error(O(169));
   r
      ? ((e = Ym(e, t, Sn)),
        (n.__reactInternalMemoizedMergedChildContext = e),
        pe(ct),
        pe(Ze),
        ce(Ze, e))
      : pe(ct),
      ce(ct, r);
}
var dr = null,
   Ha = !1,
   $l = !1;
function Jm(e) {
   dr === null ? (dr = [e]) : dr.push(e);
}
function U1(e) {
   (Ha = !0), Jm(e);
}
function tn() {
   if (!$l && dr !== null) {
      $l = !0;
      var e = 0,
         t = ie;
      try {
         var r = dr;
         for (ie = 1; e < r.length; e++) {
            var n = r[e];
            do n = n(!0);
            while (n !== null);
         }
         (dr = null), (Ha = !1);
      } catch (i) {
         throw (dr !== null && (dr = dr.slice(e + 1)), km(qc, tn), i);
      } finally {
         (ie = t), ($l = !1);
      }
   }
   return null;
}
var Yn = [],
   Jn = 0,
   oa = null,
   aa = 0,
   Et = [],
   Pt = 0,
   _n = null,
   hr = 1,
   pr = "";
function ln(e, t) {
   (Yn[Jn++] = aa), (Yn[Jn++] = oa), (oa = e), (aa = t);
}
function Xm(e, t, r) {
   (Et[Pt++] = hr), (Et[Pt++] = pr), (Et[Pt++] = _n), (_n = e);
   var n = hr;
   e = pr;
   var i = 32 - qt(n) - 1;
   (n &= ~(1 << i)), (r += 1);
   var s = 32 - qt(t) + i;
   if (30 < s) {
      var o = i - (i % 5);
      (s = (n & ((1 << o) - 1)).toString(32)),
         (n >>= o),
         (i -= o),
         (hr = (1 << (32 - qt(t) + i)) | (r << i) | n),
         (pr = s + e);
   } else (hr = (1 << s) | (r << i) | n), (pr = e);
}
function Xc(e) {
   e.return !== null && (ln(e, 1), Xm(e, 1, 0));
}
function Zc(e) {
   for (; e === oa; )
      (oa = Yn[--Jn]), (Yn[Jn] = null), (aa = Yn[--Jn]), (Yn[Jn] = null);
   for (; e === _n; )
      (_n = Et[--Pt]),
         (Et[Pt] = null),
         (pr = Et[--Pt]),
         (Et[Pt] = null),
         (hr = Et[--Pt]),
         (Et[Pt] = null);
}
var yt = null,
   gt = null,
   ge = !1,
   Ut = null;
function Zm(e, t) {
   var r = Tt(5, null, null, 0);
   (r.elementType = "DELETED"),
      (r.stateNode = t),
      (r.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [r]), (e.flags |= 16)) : t.push(r);
}
function Hf(e, t) {
   switch (e.tag) {
      case 5:
         var r = e.type;
         return (
            (t =
               t.nodeType !== 1 || r.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t),
            t !== null
               ? ((e.stateNode = t), (yt = e), (gt = qr(t.firstChild)), !0)
               : !1
         );
      case 6:
         return (
            (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
            t !== null ? ((e.stateNode = t), (yt = e), (gt = null), !0) : !1
         );
      case 13:
         return (
            (t = t.nodeType !== 8 ? null : t),
            t !== null
               ? ((r = _n !== null ? { id: hr, overflow: pr } : null),
                 (e.memoizedState = {
                    dehydrated: t,
                    treeContext: r,
                    retryLane: 1073741824,
                 }),
                 (r = Tt(18, null, null, 0)),
                 (r.stateNode = t),
                 (r.return = e),
                 (e.child = r),
                 (yt = e),
                 (gt = null),
                 !0)
               : !1
         );
      default:
         return !1;
   }
}
function Bu(e) {
   return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function qu(e) {
   if (ge) {
      var t = gt;
      if (t) {
         var r = t;
         if (!Hf(e, t)) {
            if (Bu(e)) throw Error(O(418));
            t = qr(r.nextSibling);
            var n = yt;
            t && Hf(e, t)
               ? Zm(n, r)
               : ((e.flags = (e.flags & -4097) | 2), (ge = !1), (yt = e));
         }
      } else {
         if (Bu(e)) throw Error(O(418));
         (e.flags = (e.flags & -4097) | 2), (ge = !1), (yt = e);
      }
   }
}
function Qf(e) {
   for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

   )
      e = e.return;
   yt = e;
}
function mo(e) {
   if (e !== yt) return !1;
   if (!ge) return Qf(e), (ge = !0), !1;
   var t;
   if (
      ((t = e.tag !== 3) &&
         !(t = e.tag !== 5) &&
         ((t = e.type),
         (t = t !== "head" && t !== "body" && !Mu(e.type, e.memoizedProps))),
      t && (t = gt))
   ) {
      if (Bu(e)) throw (eg(), Error(O(418)));
      for (; t; ) Zm(e, t), (t = qr(t.nextSibling));
   }
   if ((Qf(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
         throw Error(O(317));
      e: {
         for (e = e.nextSibling, t = 0; e; ) {
            if (e.nodeType === 8) {
               var r = e.data;
               if (r === "/$") {
                  if (t === 0) {
                     gt = qr(e.nextSibling);
                     break e;
                  }
                  t--;
               } else (r !== "$" && r !== "$!" && r !== "$?") || t++;
            }
            e = e.nextSibling;
         }
         gt = null;
      }
   } else gt = yt ? qr(e.stateNode.nextSibling) : null;
   return !0;
}
function eg() {
   for (var e = gt; e; ) e = qr(e.nextSibling);
}
function hi() {
   (gt = yt = null), (ge = !1);
}
function ed(e) {
   Ut === null ? (Ut = [e]) : Ut.push(e);
}
var z1 = br.ReactCurrentBatchConfig;
function At(e, t) {
   if (e && e.defaultProps) {
      (t = xe({}, t)), (e = e.defaultProps);
      for (var r in e) t[r] === void 0 && (t[r] = e[r]);
      return t;
   }
   return t;
}
var la = en(null),
   ua = null,
   Xn = null,
   td = null;
function rd() {
   td = Xn = ua = null;
}
function nd(e) {
   var t = la.current;
   pe(la), (e._currentValue = t);
}
function Vu(e, t, r) {
   for (; e !== null; ) {
      var n = e.alternate;
      if (
         ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), n !== null && (n.childLanes |= t))
            : n !== null && (n.childLanes & t) !== t && (n.childLanes |= t),
         e === r)
      )
         break;
      e = e.return;
   }
}
function li(e, t) {
   (ua = e),
      (td = Xn = null),
      (e = e.dependencies),
      e !== null &&
         e.firstContext !== null &&
         (e.lanes & t && (at = !0), (e.firstContext = null));
}
function Ot(e) {
   var t = e._currentValue;
   if (td !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Xn === null)) {
         if (ua === null) throw Error(O(308));
         (Xn = e), (ua.dependencies = { lanes: 0, firstContext: e });
      } else Xn = Xn.next = e;
   return t;
}
var pn = null;
function id(e) {
   pn === null ? (pn = [e]) : pn.push(e);
}
function tg(e, t, r, n) {
   var i = t.interleaved;
   return (
      i === null ? ((r.next = r), id(t)) : ((r.next = i.next), (i.next = r)),
      (t.interleaved = r),
      yr(e, n)
   );
}
function yr(e, t) {
   e.lanes |= t;
   var r = e.alternate;
   for (r !== null && (r.lanes |= t), r = e, e = e.return; e !== null; )
      (e.childLanes |= t),
         (r = e.alternate),
         r !== null && (r.childLanes |= t),
         (r = e),
         (e = e.return);
   return r.tag === 3 ? r.stateNode : null;
}
var jr = !1;
function sd(e) {
   e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
   };
}
function rg(e, t) {
   (e = e.updateQueue),
      t.updateQueue === e &&
         (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
         });
}
function mr(e, t) {
   return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
   };
}
function Vr(e, t, r) {
   var n = e.updateQueue;
   if (n === null) return null;
   if (((n = n.shared), J & 2)) {
      var i = n.pending;
      return (
         i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
         (n.pending = t),
         yr(e, r)
      );
   }
   return (
      (i = n.interleaved),
      i === null ? ((t.next = t), id(n)) : ((t.next = i.next), (i.next = t)),
      (n.interleaved = t),
      yr(e, r)
   );
}
function Ro(e, t, r) {
   if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (r & 4194240) !== 0))
   ) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), Vc(e, r);
   }
}
function Gf(e, t) {
   var r = e.updateQueue,
      n = e.alternate;
   if (n !== null && ((n = n.updateQueue), r === n)) {
      var i = null,
         s = null;
      if (((r = r.firstBaseUpdate), r !== null)) {
         do {
            var o = {
               eventTime: r.eventTime,
               lane: r.lane,
               tag: r.tag,
               payload: r.payload,
               callback: r.callback,
               next: null,
            };
            s === null ? (i = s = o) : (s = s.next = o), (r = r.next);
         } while (r !== null);
         s === null ? (i = s = t) : (s = s.next = t);
      } else i = s = t;
      (r = {
         baseState: n.baseState,
         firstBaseUpdate: i,
         lastBaseUpdate: s,
         shared: n.shared,
         effects: n.effects,
      }),
         (e.updateQueue = r);
      return;
   }
   (e = r.lastBaseUpdate),
      e === null ? (r.firstBaseUpdate = t) : (e.next = t),
      (r.lastBaseUpdate = t);
}
function ca(e, t, r, n) {
   var i = e.updateQueue;
   jr = !1;
   var s = i.firstBaseUpdate,
      o = i.lastBaseUpdate,
      a = i.shared.pending;
   if (a !== null) {
      i.shared.pending = null;
      var l = a,
         u = l.next;
      (l.next = null), o === null ? (s = u) : (o.next = u), (o = l);
      var c = e.alternate;
      c !== null &&
         ((c = c.updateQueue),
         (a = c.lastBaseUpdate),
         a !== o &&
            (a === null ? (c.firstBaseUpdate = u) : (a.next = u),
            (c.lastBaseUpdate = l)));
   }
   if (s !== null) {
      var d = i.baseState;
      (o = 0), (c = u = l = null), (a = s);
      do {
         var h = a.lane,
            m = a.eventTime;
         if ((n & h) === h) {
            c !== null &&
               (c = c.next =
                  {
                     eventTime: m,
                     lane: 0,
                     tag: a.tag,
                     payload: a.payload,
                     callback: a.callback,
                     next: null,
                  });
            e: {
               var y = e,
                  w = a;
               switch (((h = t), (m = r), w.tag)) {
                  case 1:
                     if (((y = w.payload), typeof y == "function")) {
                        d = y.call(m, d, h);
                        break e;
                     }
                     d = y;
                     break e;
                  case 3:
                     y.flags = (y.flags & -65537) | 128;
                  case 0:
                     if (
                        ((y = w.payload),
                        (h = typeof y == "function" ? y.call(m, d, h) : y),
                        h == null)
                     )
                        break e;
                     d = xe({}, d, h);
                     break e;
                  case 2:
                     jr = !0;
               }
            }
            a.callback !== null &&
               a.lane !== 0 &&
               ((e.flags |= 64),
               (h = i.effects),
               h === null ? (i.effects = [a]) : h.push(a));
         } else
            (m = {
               eventTime: m,
               lane: h,
               tag: a.tag,
               payload: a.payload,
               callback: a.callback,
               next: null,
            }),
               c === null ? ((u = c = m), (l = d)) : (c = c.next = m),
               (o |= h);
         if (((a = a.next), a === null)) {
            if (((a = i.shared.pending), a === null)) break;
            (h = a),
               (a = h.next),
               (h.next = null),
               (i.lastBaseUpdate = h),
               (i.shared.pending = null);
         }
      } while (1);
      if (
         (c === null && (l = d),
         (i.baseState = l),
         (i.firstBaseUpdate = u),
         (i.lastBaseUpdate = c),
         (t = i.shared.interleaved),
         t !== null)
      ) {
         i = t;
         do (o |= i.lane), (i = i.next);
         while (i !== t);
      } else s === null && (i.shared.lanes = 0);
      (En |= o), (e.lanes = o), (e.memoizedState = d);
   }
}
function Kf(e, t, r) {
   if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
         var n = e[t],
            i = n.callback;
         if (i !== null) {
            if (((n.callback = null), (n = r), typeof i != "function"))
               throw Error(O(191, i));
            i.call(n);
         }
      }
}
var ng = new tm.Component().refs;
function Wu(e, t, r, n) {
   (t = e.memoizedState),
      (r = r(n, t)),
      (r = r == null ? t : xe({}, t, r)),
      (e.memoizedState = r),
      e.lanes === 0 && (e.updateQueue.baseState = r);
}
var Qa = {
   isMounted: function (e) {
      return (e = e._reactInternals) ? jn(e) === e : !1;
   },
   enqueueSetState: function (e, t, r) {
      e = e._reactInternals;
      var n = nt(),
         i = Hr(e),
         s = mr(n, i);
      (s.payload = t),
         r != null && (s.callback = r),
         (t = Vr(e, s, i)),
         t !== null && (Vt(t, e, i, n), Ro(t, e, i));
   },
   enqueueReplaceState: function (e, t, r) {
      e = e._reactInternals;
      var n = nt(),
         i = Hr(e),
         s = mr(n, i);
      (s.tag = 1),
         (s.payload = t),
         r != null && (s.callback = r),
         (t = Vr(e, s, i)),
         t !== null && (Vt(t, e, i, n), Ro(t, e, i));
   },
   enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var r = nt(),
         n = Hr(e),
         i = mr(r, n);
      (i.tag = 2),
         t != null && (i.callback = t),
         (t = Vr(e, i, n)),
         t !== null && (Vt(t, e, n, r), Ro(t, e, n));
   },
};
function Yf(e, t, r, n, i, s, o) {
   return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
         ? e.shouldComponentUpdate(n, s, o)
         : t.prototype && t.prototype.isPureReactComponent
         ? !Es(r, n) || !Es(i, s)
         : !0
   );
}
function ig(e, t, r) {
   var n = !1,
      i = Xr,
      s = t.contextType;
   return (
      typeof s == "object" && s !== null
         ? (s = Ot(s))
         : ((i = dt(t) ? Sn : Ze.current),
           (n = t.contextTypes),
           (s = (n = n != null) ? fi(e, i) : Xr)),
      (t = new t(r, s)),
      (e.memoizedState =
         t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Qa),
      (e.stateNode = t),
      (t._reactInternals = e),
      n &&
         ((e = e.stateNode),
         (e.__reactInternalMemoizedUnmaskedChildContext = i),
         (e.__reactInternalMemoizedMaskedChildContext = s)),
      t
   );
}
function Jf(e, t, r, n) {
   (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
         t.componentWillReceiveProps(r, n),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
         t.UNSAFE_componentWillReceiveProps(r, n),
      t.state !== e && Qa.enqueueReplaceState(t, t.state, null);
}
function Hu(e, t, r, n) {
   var i = e.stateNode;
   (i.props = r), (i.state = e.memoizedState), (i.refs = ng), sd(e);
   var s = t.contextType;
   typeof s == "object" && s !== null
      ? (i.context = Ot(s))
      : ((s = dt(t) ? Sn : Ze.current), (i.context = fi(e, s))),
      (i.state = e.memoizedState),
      (s = t.getDerivedStateFromProps),
      typeof s == "function" && (Wu(e, t, s, r), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
         typeof i.getSnapshotBeforeUpdate == "function" ||
         (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
         ((t = i.state),
         typeof i.componentWillMount == "function" && i.componentWillMount(),
         typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
         t !== i.state && Qa.enqueueReplaceState(i, i.state, null),
         ca(e, r, i, n),
         (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ui(e, t, r) {
   if (
      ((e = r.ref),
      e !== null && typeof e != "function" && typeof e != "object")
   ) {
      if (r._owner) {
         if (((r = r._owner), r)) {
            if (r.tag !== 1) throw Error(O(309));
            var n = r.stateNode;
         }
         if (!n) throw Error(O(147, e));
         var i = n,
            s = "" + e;
         return t !== null &&
            t.ref !== null &&
            typeof t.ref == "function" &&
            t.ref._stringRef === s
            ? t.ref
            : ((t = function (o) {
                 var a = i.refs;
                 a === ng && (a = i.refs = {}),
                    o === null ? delete a[s] : (a[s] = o);
              }),
              (t._stringRef = s),
              t);
      }
      if (typeof e != "string") throw Error(O(284));
      if (!r._owner) throw Error(O(290, e));
   }
   return e;
}
function go(e, t) {
   throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
         O(
            31,
            e === "[object Object]"
               ? "object with keys {" + Object.keys(t).join(", ") + "}"
               : e
         )
      ))
   );
}
function Xf(e) {
   var t = e._init;
   return t(e._payload);
}
function sg(e) {
   function t(g, p) {
      if (e) {
         var v = g.deletions;
         v === null ? ((g.deletions = [p]), (g.flags |= 16)) : v.push(p);
      }
   }
   function r(g, p) {
      if (!e) return null;
      for (; p !== null; ) t(g, p), (p = p.sibling);
      return null;
   }
   function n(g, p) {
      for (g = new Map(); p !== null; )
         p.key !== null ? g.set(p.key, p) : g.set(p.index, p), (p = p.sibling);
      return g;
   }
   function i(g, p) {
      return (g = Qr(g, p)), (g.index = 0), (g.sibling = null), g;
   }
   function s(g, p, v) {
      return (
         (g.index = v),
         e
            ? ((v = g.alternate),
              v !== null
                 ? ((v = v.index), v < p ? ((g.flags |= 2), p) : v)
                 : ((g.flags |= 2), p))
            : ((g.flags |= 1048576), p)
      );
   }
   function o(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
   }
   function a(g, p, v, b) {
      return p === null || p.tag !== 6
         ? ((p = zl(v, g.mode, b)), (p.return = g), p)
         : ((p = i(p, v)), (p.return = g), p);
   }
   function l(g, p, v, b) {
      var _ = v.type;
      return _ === Vn
         ? c(g, p, v.props.children, b, v.key)
         : p !== null &&
           (p.elementType === _ ||
              (typeof _ == "object" &&
                 _ !== null &&
                 _.$$typeof === Tr &&
                 Xf(_) === p.type))
         ? ((b = i(p, v.props)), (b.ref = Ui(g, p, v)), (b.return = g), b)
         : ((b = Mo(v.type, v.key, v.props, null, g.mode, b)),
           (b.ref = Ui(g, p, v)),
           (b.return = g),
           b);
   }
   function u(g, p, v, b) {
      return p === null ||
         p.tag !== 4 ||
         p.stateNode.containerInfo !== v.containerInfo ||
         p.stateNode.implementation !== v.implementation
         ? ((p = Bl(v, g.mode, b)), (p.return = g), p)
         : ((p = i(p, v.children || [])), (p.return = g), p);
   }
   function c(g, p, v, b, _) {
      return p === null || p.tag !== 7
         ? ((p = bn(v, g.mode, b, _)), (p.return = g), p)
         : ((p = i(p, v)), (p.return = g), p);
   }
   function d(g, p, v) {
      if ((typeof p == "string" && p !== "") || typeof p == "number")
         return (p = zl("" + p, g.mode, v)), (p.return = g), p;
      if (typeof p == "object" && p !== null) {
         switch (p.$$typeof) {
            case io:
               return (
                  (v = Mo(p.type, p.key, p.props, null, g.mode, v)),
                  (v.ref = Ui(g, null, p)),
                  (v.return = g),
                  v
               );
            case qn:
               return (p = Bl(p, g.mode, v)), (p.return = g), p;
            case Tr:
               var b = p._init;
               return d(g, b(p._payload), v);
         }
         if (Xi(p) || Ni(p))
            return (p = bn(p, g.mode, v, null)), (p.return = g), p;
         go(g, p);
      }
      return null;
   }
   function h(g, p, v, b) {
      var _ = p !== null ? p.key : null;
      if ((typeof v == "string" && v !== "") || typeof v == "number")
         return _ !== null ? null : a(g, p, "" + v, b);
      if (typeof v == "object" && v !== null) {
         switch (v.$$typeof) {
            case io:
               return v.key === _ ? l(g, p, v, b) : null;
            case qn:
               return v.key === _ ? u(g, p, v, b) : null;
            case Tr:
               return (_ = v._init), h(g, p, _(v._payload), b);
         }
         if (Xi(v) || Ni(v)) return _ !== null ? null : c(g, p, v, b, null);
         go(g, v);
      }
      return null;
   }
   function m(g, p, v, b, _) {
      if ((typeof b == "string" && b !== "") || typeof b == "number")
         return (g = g.get(v) || null), a(p, g, "" + b, _);
      if (typeof b == "object" && b !== null) {
         switch (b.$$typeof) {
            case io:
               return (
                  (g = g.get(b.key === null ? v : b.key) || null), l(p, g, b, _)
               );
            case qn:
               return (
                  (g = g.get(b.key === null ? v : b.key) || null), u(p, g, b, _)
               );
            case Tr:
               var P = b._init;
               return m(g, p, v, P(b._payload), _);
         }
         if (Xi(b) || Ni(b)) return (g = g.get(v) || null), c(p, g, b, _, null);
         go(p, b);
      }
      return null;
   }
   function y(g, p, v, b) {
      for (
         var _ = null, P = null, C = p, j = (p = 0), U = null;
         C !== null && j < v.length;
         j++
      ) {
         C.index > j ? ((U = C), (C = null)) : (U = C.sibling);
         var F = h(g, C, v[j], b);
         if (F === null) {
            C === null && (C = U);
            break;
         }
         e && C && F.alternate === null && t(g, C),
            (p = s(F, p, j)),
            P === null ? (_ = F) : (P.sibling = F),
            (P = F),
            (C = U);
      }
      if (j === v.length) return r(g, C), ge && ln(g, j), _;
      if (C === null) {
         for (; j < v.length; j++)
            (C = d(g, v[j], b)),
               C !== null &&
                  ((p = s(C, p, j)),
                  P === null ? (_ = C) : (P.sibling = C),
                  (P = C));
         return ge && ln(g, j), _;
      }
      for (C = n(g, C); j < v.length; j++)
         (U = m(C, g, j, v[j], b)),
            U !== null &&
               (e &&
                  U.alternate !== null &&
                  C.delete(U.key === null ? j : U.key),
               (p = s(U, p, j)),
               P === null ? (_ = U) : (P.sibling = U),
               (P = U));
      return (
         e &&
            C.forEach(function (te) {
               return t(g, te);
            }),
         ge && ln(g, j),
         _
      );
   }
   function w(g, p, v, b) {
      var _ = Ni(v);
      if (typeof _ != "function") throw Error(O(150));
      if (((v = _.call(v)), v == null)) throw Error(O(151));
      for (
         var P = (_ = null), C = p, j = (p = 0), U = null, F = v.next();
         C !== null && !F.done;
         j++, F = v.next()
      ) {
         C.index > j ? ((U = C), (C = null)) : (U = C.sibling);
         var te = h(g, C, F.value, b);
         if (te === null) {
            C === null && (C = U);
            break;
         }
         e && C && te.alternate === null && t(g, C),
            (p = s(te, p, j)),
            P === null ? (_ = te) : (P.sibling = te),
            (P = te),
            (C = U);
      }
      if (F.done) return r(g, C), ge && ln(g, j), _;
      if (C === null) {
         for (; !F.done; j++, F = v.next())
            (F = d(g, F.value, b)),
               F !== null &&
                  ((p = s(F, p, j)),
                  P === null ? (_ = F) : (P.sibling = F),
                  (P = F));
         return ge && ln(g, j), _;
      }
      for (C = n(g, C); !F.done; j++, F = v.next())
         (F = m(C, g, j, F.value, b)),
            F !== null &&
               (e &&
                  F.alternate !== null &&
                  C.delete(F.key === null ? j : F.key),
               (p = s(F, p, j)),
               P === null ? (_ = F) : (P.sibling = F),
               (P = F));
      return (
         e &&
            C.forEach(function (W) {
               return t(g, W);
            }),
         ge && ln(g, j),
         _
      );
   }
   function k(g, p, v, b) {
      if (
         (typeof v == "object" &&
            v !== null &&
            v.type === Vn &&
            v.key === null &&
            (v = v.props.children),
         typeof v == "object" && v !== null)
      ) {
         switch (v.$$typeof) {
            case io:
               e: {
                  for (var _ = v.key, P = p; P !== null; ) {
                     if (P.key === _) {
                        if (((_ = v.type), _ === Vn)) {
                           if (P.tag === 7) {
                              r(g, P.sibling),
                                 (p = i(P, v.props.children)),
                                 (p.return = g),
                                 (g = p);
                              break e;
                           }
                        } else if (
                           P.elementType === _ ||
                           (typeof _ == "object" &&
                              _ !== null &&
                              _.$$typeof === Tr &&
                              Xf(_) === P.type)
                        ) {
                           r(g, P.sibling),
                              (p = i(P, v.props)),
                              (p.ref = Ui(g, P, v)),
                              (p.return = g),
                              (g = p);
                           break e;
                        }
                        r(g, P);
                        break;
                     } else t(g, P);
                     P = P.sibling;
                  }
                  v.type === Vn
                     ? ((p = bn(v.props.children, g.mode, b, v.key)),
                       (p.return = g),
                       (g = p))
                     : ((b = Mo(v.type, v.key, v.props, null, g.mode, b)),
                       (b.ref = Ui(g, p, v)),
                       (b.return = g),
                       (g = b));
               }
               return o(g);
            case qn:
               e: {
                  for (P = v.key; p !== null; ) {
                     if (p.key === P)
                        if (
                           p.tag === 4 &&
                           p.stateNode.containerInfo === v.containerInfo &&
                           p.stateNode.implementation === v.implementation
                        ) {
                           r(g, p.sibling),
                              (p = i(p, v.children || [])),
                              (p.return = g),
                              (g = p);
                           break e;
                        } else {
                           r(g, p);
                           break;
                        }
                     else t(g, p);
                     p = p.sibling;
                  }
                  (p = Bl(v, g.mode, b)), (p.return = g), (g = p);
               }
               return o(g);
            case Tr:
               return (P = v._init), k(g, p, P(v._payload), b);
         }
         if (Xi(v)) return y(g, p, v, b);
         if (Ni(v)) return w(g, p, v, b);
         go(g, v);
      }
      return (typeof v == "string" && v !== "") || typeof v == "number"
         ? ((v = "" + v),
           p !== null && p.tag === 6
              ? (r(g, p.sibling), (p = i(p, v)), (p.return = g), (g = p))
              : (r(g, p), (p = zl(v, g.mode, b)), (p.return = g), (g = p)),
           o(g))
         : r(g, p);
   }
   return k;
}
var pi = sg(!0),
   og = sg(!1),
   Qs = {},
   tr = en(Qs),
   Os = en(Qs),
   Ds = en(Qs);
function mn(e) {
   if (e === Qs) throw Error(O(174));
   return e;
}
function od(e, t) {
   switch ((ce(Ds, t), ce(Os, e), ce(tr, Qs), (e = t.nodeType), e)) {
      case 9:
      case 11:
         t = (t = t.documentElement) ? t.namespaceURI : _u(null, "");
         break;
      default:
         (e = e === 8 ? t.parentNode : t),
            (t = e.namespaceURI || null),
            (e = e.tagName),
            (t = _u(t, e));
   }
   pe(tr), ce(tr, t);
}
function mi() {
   pe(tr), pe(Os), pe(Ds);
}
function ag(e) {
   mn(Ds.current);
   var t = mn(tr.current),
      r = _u(t, e.type);
   t !== r && (ce(Os, e), ce(tr, r));
}
function ad(e) {
   Os.current === e && (pe(tr), pe(Os));
}
var ve = en(0);
function da(e) {
   for (var t = e; t !== null; ) {
      if (t.tag === 13) {
         var r = t.memoizedState;
         if (
            r !== null &&
            ((r = r.dehydrated),
            r === null || r.data === "$?" || r.data === "$!")
         )
            return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
         if (t.flags & 128) return t;
      } else if (t.child !== null) {
         (t.child.return = t), (t = t.child);
         continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
         if (t.return === null || t.return === e) return null;
         t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
   }
   return null;
}
var Nl = [];
function ld() {
   for (var e = 0; e < Nl.length; e++)
      Nl[e]._workInProgressVersionPrimary = null;
   Nl.length = 0;
}
var Io = br.ReactCurrentDispatcher,
   Ll = br.ReactCurrentBatchConfig,
   Cn = 0,
   ye = null,
   Oe = null,
   Ne = null,
   fa = !1,
   cs = !1,
   Rs = 0,
   B1 = 0;
function Qe() {
   throw Error(O(321));
}
function ud(e, t) {
   if (t === null) return !1;
   for (var r = 0; r < t.length && r < e.length; r++)
      if (!Ht(e[r], t[r])) return !1;
   return !0;
}
function cd(e, t, r, n, i, s) {
   if (
      ((Cn = s),
      (ye = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (Io.current = e === null || e.memoizedState === null ? H1 : Q1),
      (e = r(n, i)),
      cs)
   ) {
      s = 0;
      do {
         if (((cs = !1), (Rs = 0), 25 <= s)) throw Error(O(301));
         (s += 1),
            (Ne = Oe = null),
            (t.updateQueue = null),
            (Io.current = G1),
            (e = r(n, i));
      } while (cs);
   }
   if (
      ((Io.current = ha),
      (t = Oe !== null && Oe.next !== null),
      (Cn = 0),
      (Ne = Oe = ye = null),
      (fa = !1),
      t)
   )
      throw Error(O(300));
   return e;
}
function dd() {
   var e = Rs !== 0;
   return (Rs = 0), e;
}
function Yt() {
   var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
   };
   return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
}
function Dt() {
   if (Oe === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
   } else e = Oe.next;
   var t = Ne === null ? ye.memoizedState : Ne.next;
   if (t !== null) (Ne = t), (Oe = e);
   else {
      if (e === null) throw Error(O(310));
      (Oe = e),
         (e = {
            memoizedState: Oe.memoizedState,
            baseState: Oe.baseState,
            baseQueue: Oe.baseQueue,
            queue: Oe.queue,
            next: null,
         }),
         Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e);
   }
   return Ne;
}
function Is(e, t) {
   return typeof t == "function" ? t(e) : t;
}
function Al(e) {
   var t = Dt(),
      r = t.queue;
   if (r === null) throw Error(O(311));
   r.lastRenderedReducer = e;
   var n = Oe,
      i = n.baseQueue,
      s = r.pending;
   if (s !== null) {
      if (i !== null) {
         var o = i.next;
         (i.next = s.next), (s.next = o);
      }
      (n.baseQueue = i = s), (r.pending = null);
   }
   if (i !== null) {
      (s = i.next), (n = n.baseState);
      var a = (o = null),
         l = null,
         u = s;
      do {
         var c = u.lane;
         if ((Cn & c) === c)
            l !== null &&
               (l = l.next =
                  {
                     lane: 0,
                     action: u.action,
                     hasEagerState: u.hasEagerState,
                     eagerState: u.eagerState,
                     next: null,
                  }),
               (n = u.hasEagerState ? u.eagerState : e(n, u.action));
         else {
            var d = {
               lane: c,
               action: u.action,
               hasEagerState: u.hasEagerState,
               eagerState: u.eagerState,
               next: null,
            };
            l === null ? ((a = l = d), (o = n)) : (l = l.next = d),
               (ye.lanes |= c),
               (En |= c);
         }
         u = u.next;
      } while (u !== null && u !== s);
      l === null ? (o = n) : (l.next = a),
         Ht(n, t.memoizedState) || (at = !0),
         (t.memoizedState = n),
         (t.baseState = o),
         (t.baseQueue = l),
         (r.lastRenderedState = n);
   }
   if (((e = r.interleaved), e !== null)) {
      i = e;
      do (s = i.lane), (ye.lanes |= s), (En |= s), (i = i.next);
      while (i !== e);
   } else i === null && (r.lanes = 0);
   return [t.memoizedState, r.dispatch];
}
function Ml(e) {
   var t = Dt(),
      r = t.queue;
   if (r === null) throw Error(O(311));
   r.lastRenderedReducer = e;
   var n = r.dispatch,
      i = r.pending,
      s = t.memoizedState;
   if (i !== null) {
      r.pending = null;
      var o = (i = i.next);
      do (s = e(s, o.action)), (o = o.next);
      while (o !== i);
      Ht(s, t.memoizedState) || (at = !0),
         (t.memoizedState = s),
         t.baseQueue === null && (t.baseState = s),
         (r.lastRenderedState = s);
   }
   return [s, n];
}
function lg() {}
function ug(e, t) {
   var r = ye,
      n = Dt(),
      i = t(),
      s = !Ht(n.memoizedState, i);
   if (
      (s && ((n.memoizedState = i), (at = !0)),
      (n = n.queue),
      fd(fg.bind(null, r, n, e), [e]),
      n.getSnapshot !== t || s || (Ne !== null && Ne.memoizedState.tag & 1))
   ) {
      if (
         ((r.flags |= 2048),
         $s(9, dg.bind(null, r, n, i, t), void 0, null),
         Me === null)
      )
         throw Error(O(349));
      Cn & 30 || cg(r, t, i);
   }
   return i;
}
function cg(e, t, r) {
   (e.flags |= 16384),
      (e = { getSnapshot: t, value: r }),
      (t = ye.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }),
           (ye.updateQueue = t),
           (t.stores = [e]))
         : ((r = t.stores), r === null ? (t.stores = [e]) : r.push(e));
}
function dg(e, t, r, n) {
   (t.value = r), (t.getSnapshot = n), hg(t) && pg(e);
}
function fg(e, t, r) {
   return r(function () {
      hg(t) && pg(e);
   });
}
function hg(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var r = t();
      return !Ht(e, r);
   } catch {
      return !0;
   }
}
function pg(e) {
   var t = yr(e, 1);
   t !== null && Vt(t, e, 1, -1);
}
function Zf(e) {
   var t = Yt();
   return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
         pending: null,
         interleaved: null,
         lanes: 0,
         dispatch: null,
         lastRenderedReducer: Is,
         lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = W1.bind(null, ye, e)),
      [t.memoizedState, e]
   );
}
function $s(e, t, r, n) {
   return (
      (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
      (t = ye.updateQueue),
      t === null
         ? ((t = { lastEffect: null, stores: null }),
           (ye.updateQueue = t),
           (t.lastEffect = e.next = e))
         : ((r = t.lastEffect),
           r === null
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e))),
      e
   );
}
function mg() {
   return Dt().memoizedState;
}
function $o(e, t, r, n) {
   var i = Yt();
   (ye.flags |= e),
      (i.memoizedState = $s(1 | t, r, void 0, n === void 0 ? null : n));
}
function Ga(e, t, r, n) {
   var i = Dt();
   n = n === void 0 ? null : n;
   var s = void 0;
   if (Oe !== null) {
      var o = Oe.memoizedState;
      if (((s = o.destroy), n !== null && ud(n, o.deps))) {
         i.memoizedState = $s(t, r, s, n);
         return;
      }
   }
   (ye.flags |= e), (i.memoizedState = $s(1 | t, r, s, n));
}
function eh(e, t) {
   return $o(8390656, 8, e, t);
}
function fd(e, t) {
   return Ga(2048, 8, e, t);
}
function gg(e, t) {
   return Ga(4, 2, e, t);
}
function vg(e, t) {
   return Ga(4, 4, e, t);
}
function yg(e, t) {
   if (typeof t == "function")
      return (
         (e = e()),
         t(e),
         function () {
            t(null);
         }
      );
   if (t != null)
      return (
         (e = e()),
         (t.current = e),
         function () {
            t.current = null;
         }
      );
}
function wg(e, t, r) {
   return (
      (r = r != null ? r.concat([e]) : null), Ga(4, 4, yg.bind(null, t, e), r)
   );
}
function hd() {}
function xg(e, t) {
   var r = Dt();
   t = t === void 0 ? null : t;
   var n = r.memoizedState;
   return n !== null && t !== null && ud(t, n[1])
      ? n[0]
      : ((r.memoizedState = [e, t]), e);
}
function bg(e, t) {
   var r = Dt();
   t = t === void 0 ? null : t;
   var n = r.memoizedState;
   return n !== null && t !== null && ud(t, n[1])
      ? n[0]
      : ((e = e()), (r.memoizedState = [e, t]), e);
}
function kg(e, t, r) {
   return Cn & 21
      ? (Ht(r, t) ||
           ((r = Cm()), (ye.lanes |= r), (En |= r), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (at = !0)), (e.memoizedState = r));
}
function q1(e, t) {
   var r = ie;
   (ie = r !== 0 && 4 > r ? r : 4), e(!0);
   var n = Ll.transition;
   Ll.transition = {};
   try {
      e(!1), t();
   } finally {
      (ie = r), (Ll.transition = n);
   }
}
function Sg() {
   return Dt().memoizedState;
}
function V1(e, t, r) {
   var n = Hr(e);
   if (
      ((r = {
         lane: n,
         action: r,
         hasEagerState: !1,
         eagerState: null,
         next: null,
      }),
      _g(e))
   )
      Cg(t, r);
   else if (((r = tg(e, t, r, n)), r !== null)) {
      var i = nt();
      Vt(r, e, n, i), Eg(r, t, n);
   }
}
function W1(e, t, r) {
   var n = Hr(e),
      i = {
         lane: n,
         action: r,
         hasEagerState: !1,
         eagerState: null,
         next: null,
      };
   if (_g(e)) Cg(t, i);
   else {
      var s = e.alternate;
      if (
         e.lanes === 0 &&
         (s === null || s.lanes === 0) &&
         ((s = t.lastRenderedReducer), s !== null)
      )
         try {
            var o = t.lastRenderedState,
               a = s(o, r);
            if (((i.hasEagerState = !0), (i.eagerState = a), Ht(a, o))) {
               var l = t.interleaved;
               l === null
                  ? ((i.next = i), id(t))
                  : ((i.next = l.next), (l.next = i)),
                  (t.interleaved = i);
               return;
            }
         } catch {
         } finally {
         }
      (r = tg(e, t, i, n)),
         r !== null && ((i = nt()), Vt(r, e, n, i), Eg(r, t, n));
   }
}
function _g(e) {
   var t = e.alternate;
   return e === ye || (t !== null && t === ye);
}
function Cg(e, t) {
   cs = fa = !0;
   var r = e.pending;
   r === null ? (t.next = t) : ((t.next = r.next), (r.next = t)),
      (e.pending = t);
}
function Eg(e, t, r) {
   if (r & 4194240) {
      var n = t.lanes;
      (n &= e.pendingLanes), (r |= n), (t.lanes = r), Vc(e, r);
   }
}
var ha = {
      readContext: Ot,
      useCallback: Qe,
      useContext: Qe,
      useEffect: Qe,
      useImperativeHandle: Qe,
      useInsertionEffect: Qe,
      useLayoutEffect: Qe,
      useMemo: Qe,
      useReducer: Qe,
      useRef: Qe,
      useState: Qe,
      useDebugValue: Qe,
      useDeferredValue: Qe,
      useTransition: Qe,
      useMutableSource: Qe,
      useSyncExternalStore: Qe,
      useId: Qe,
      unstable_isNewReconciler: !1,
   },
   H1 = {
      readContext: Ot,
      useCallback: function (e, t) {
         return (Yt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Ot,
      useEffect: eh,
      useImperativeHandle: function (e, t, r) {
         return (
            (r = r != null ? r.concat([e]) : null),
            $o(4194308, 4, yg.bind(null, t, e), r)
         );
      },
      useLayoutEffect: function (e, t) {
         return $o(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
         return $o(4, 2, e, t);
      },
      useMemo: function (e, t) {
         var r = Yt();
         return (
            (t = t === void 0 ? null : t),
            (e = e()),
            (r.memoizedState = [e, t]),
            e
         );
      },
      useReducer: function (e, t, r) {
         var n = Yt();
         return (
            (t = r !== void 0 ? r(t) : t),
            (n.memoizedState = n.baseState = t),
            (e = {
               pending: null,
               interleaved: null,
               lanes: 0,
               dispatch: null,
               lastRenderedReducer: e,
               lastRenderedState: t,
            }),
            (n.queue = e),
            (e = e.dispatch = V1.bind(null, ye, e)),
            [n.memoizedState, e]
         );
      },
      useRef: function (e) {
         var t = Yt();
         return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Zf,
      useDebugValue: hd,
      useDeferredValue: function (e) {
         return (Yt().memoizedState = e);
      },
      useTransition: function () {
         var e = Zf(!1),
            t = e[0];
         return (e = q1.bind(null, e[1])), (Yt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, r) {
         var n = ye,
            i = Yt();
         if (ge) {
            if (r === void 0) throw Error(O(407));
            r = r();
         } else {
            if (((r = t()), Me === null)) throw Error(O(349));
            Cn & 30 || cg(n, t, r);
         }
         i.memoizedState = r;
         var s = { value: r, getSnapshot: t };
         return (
            (i.queue = s),
            eh(fg.bind(null, n, s, e), [e]),
            (n.flags |= 2048),
            $s(9, dg.bind(null, n, s, r, t), void 0, null),
            r
         );
      },
      useId: function () {
         var e = Yt(),
            t = Me.identifierPrefix;
         if (ge) {
            var r = pr,
               n = hr;
            (r = (n & ~(1 << (32 - qt(n) - 1))).toString(32) + r),
               (t = ":" + t + "R" + r),
               (r = Rs++),
               0 < r && (t += "H" + r.toString(32)),
               (t += ":");
         } else (r = B1++), (t = ":" + t + "r" + r.toString(32) + ":");
         return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
   },
   Q1 = {
      readContext: Ot,
      useCallback: xg,
      useContext: Ot,
      useEffect: fd,
      useImperativeHandle: wg,
      useInsertionEffect: gg,
      useLayoutEffect: vg,
      useMemo: bg,
      useReducer: Al,
      useRef: mg,
      useState: function () {
         return Al(Is);
      },
      useDebugValue: hd,
      useDeferredValue: function (e) {
         var t = Dt();
         return kg(t, Oe.memoizedState, e);
      },
      useTransition: function () {
         var e = Al(Is)[0],
            t = Dt().memoizedState;
         return [e, t];
      },
      useMutableSource: lg,
      useSyncExternalStore: ug,
      useId: Sg,
      unstable_isNewReconciler: !1,
   },
   G1 = {
      readContext: Ot,
      useCallback: xg,
      useContext: Ot,
      useEffect: fd,
      useImperativeHandle: wg,
      useInsertionEffect: gg,
      useLayoutEffect: vg,
      useMemo: bg,
      useReducer: Ml,
      useRef: mg,
      useState: function () {
         return Ml(Is);
      },
      useDebugValue: hd,
      useDeferredValue: function (e) {
         var t = Dt();
         return Oe === null
            ? (t.memoizedState = e)
            : kg(t, Oe.memoizedState, e);
      },
      useTransition: function () {
         var e = Ml(Is)[0],
            t = Dt().memoizedState;
         return [e, t];
      },
      useMutableSource: lg,
      useSyncExternalStore: ug,
      useId: Sg,
      unstable_isNewReconciler: !1,
   };
function gi(e, t) {
   try {
      var r = "",
         n = t;
      do (r += ky(n)), (n = n.return);
      while (n);
      var i = r;
   } catch (s) {
      i =
         `
Error generating stack: ` +
         s.message +
         `
` +
         s.stack;
   }
   return { value: e, source: t, stack: i, digest: null };
}
function Fl(e, t, r) {
   return { value: e, source: null, stack: r ?? null, digest: t ?? null };
}
function Qu(e, t) {
   try {
      console.error(t.value);
   } catch (r) {
      setTimeout(function () {
         throw r;
      });
   }
}
var K1 = typeof WeakMap == "function" ? WeakMap : Map;
function Pg(e, t, r) {
   (r = mr(-1, r)), (r.tag = 3), (r.payload = { element: null });
   var n = t.value;
   return (
      (r.callback = function () {
         ma || ((ma = !0), (nc = n)), Qu(e, t);
      }),
      r
   );
}
function Tg(e, t, r) {
   (r = mr(-1, r)), (r.tag = 3);
   var n = e.type.getDerivedStateFromError;
   if (typeof n == "function") {
      var i = t.value;
      (r.payload = function () {
         return n(i);
      }),
         (r.callback = function () {
            Qu(e, t);
         });
   }
   var s = e.stateNode;
   return (
      s !== null &&
         typeof s.componentDidCatch == "function" &&
         (r.callback = function () {
            Qu(e, t),
               typeof n != "function" &&
                  (Wr === null ? (Wr = new Set([this])) : Wr.add(this));
            var o = t.stack;
            this.componentDidCatch(t.value, {
               componentStack: o !== null ? o : "",
            });
         }),
      r
   );
}
function th(e, t, r) {
   var n = e.pingCache;
   if (n === null) {
      n = e.pingCache = new K1();
      var i = new Set();
      n.set(t, i);
   } else (i = n.get(t)), i === void 0 && ((i = new Set()), n.set(t, i));
   i.has(r) || (i.add(r), (e = uw.bind(null, e, t, r)), t.then(e, e));
}
function rh(e) {
   do {
      var t;
      if (
         ((t = e.tag === 13) &&
            ((t = e.memoizedState),
            (t = t !== null ? t.dehydrated !== null : !0)),
         t)
      )
         return e;
      e = e.return;
   } while (e !== null);
   return null;
}
function nh(e, t, r, n, i) {
   return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = i), e)
      : (e === t
           ? (e.flags |= 65536)
           : ((e.flags |= 128),
             (r.flags |= 131072),
             (r.flags &= -52805),
             r.tag === 1 &&
                (r.alternate === null
                   ? (r.tag = 17)
                   : ((t = mr(-1, 1)), (t.tag = 2), Vr(r, t, 1))),
             (r.lanes |= 1)),
        e);
}
var Y1 = br.ReactCurrentOwner,
   at = !1;
function tt(e, t, r, n) {
   t.child = e === null ? og(t, null, r, n) : pi(t, e.child, r, n);
}
function ih(e, t, r, n, i) {
   r = r.render;
   var s = t.ref;
   return (
      li(t, i),
      (n = cd(e, t, r, n, s, i)),
      (r = dd()),
      e !== null && !at
         ? ((t.updateQueue = e.updateQueue),
           (t.flags &= -2053),
           (e.lanes &= ~i),
           wr(e, t, i))
         : (ge && r && Xc(t), (t.flags |= 1), tt(e, t, n, i), t.child)
   );
}
function sh(e, t, r, n, i) {
   if (e === null) {
      var s = r.type;
      return typeof s == "function" &&
         !bd(s) &&
         s.defaultProps === void 0 &&
         r.compare === null &&
         r.defaultProps === void 0
         ? ((t.tag = 15), (t.type = s), jg(e, t, s, n, i))
         : ((e = Mo(r.type, null, n, t, t.mode, i)),
           (e.ref = t.ref),
           (e.return = t),
           (t.child = e));
   }
   if (((s = e.child), !(e.lanes & i))) {
      var o = s.memoizedProps;
      if (
         ((r = r.compare),
         (r = r !== null ? r : Es),
         r(o, n) && e.ref === t.ref)
      )
         return wr(e, t, i);
   }
   return (
      (t.flags |= 1),
      (e = Qr(s, n)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
   );
}
function jg(e, t, r, n, i) {
   if (e !== null) {
      var s = e.memoizedProps;
      if (Es(s, n) && e.ref === t.ref)
         if (((at = !1), (t.pendingProps = n = s), (e.lanes & i) !== 0))
            e.flags & 131072 && (at = !0);
         else return (t.lanes = e.lanes), wr(e, t, i);
   }
   return Gu(e, t, r, n, i);
}
function Og(e, t, r) {
   var n = t.pendingProps,
      i = n.children,
      s = e !== null ? e.memoizedState : null;
   if (n.mode === "hidden")
      if (!(t.mode & 1))
         (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
         }),
            ce(ei, mt),
            (mt |= r);
      else {
         if (!(r & 1073741824))
            return (
               (e = s !== null ? s.baseLanes | r : r),
               (t.lanes = t.childLanes = 1073741824),
               (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
               }),
               (t.updateQueue = null),
               ce(ei, mt),
               (mt |= e),
               null
            );
         (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
         }),
            (n = s !== null ? s.baseLanes : r),
            ce(ei, mt),
            (mt |= n);
      }
   else
      s !== null ? ((n = s.baseLanes | r), (t.memoizedState = null)) : (n = r),
         ce(ei, mt),
         (mt |= n);
   return tt(e, t, i, r), t.child;
}
function Dg(e, t) {
   var r = t.ref;
   ((e === null && r !== null) || (e !== null && e.ref !== r)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
}
function Gu(e, t, r, n, i) {
   var s = dt(r) ? Sn : Ze.current;
   return (
      (s = fi(t, s)),
      li(t, i),
      (r = cd(e, t, r, n, s, i)),
      (n = dd()),
      e !== null && !at
         ? ((t.updateQueue = e.updateQueue),
           (t.flags &= -2053),
           (e.lanes &= ~i),
           wr(e, t, i))
         : (ge && n && Xc(t), (t.flags |= 1), tt(e, t, r, i), t.child)
   );
}
function oh(e, t, r, n, i) {
   if (dt(r)) {
      var s = !0;
      sa(t);
   } else s = !1;
   if ((li(t, i), t.stateNode === null))
      No(e, t), ig(t, r, n), Hu(t, r, n, i), (n = !0);
   else if (e === null) {
      var o = t.stateNode,
         a = t.memoizedProps;
      o.props = a;
      var l = o.context,
         u = r.contextType;
      typeof u == "object" && u !== null
         ? (u = Ot(u))
         : ((u = dt(r) ? Sn : Ze.current), (u = fi(t, u)));
      var c = r.getDerivedStateFromProps,
         d =
            typeof c == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function";
      d ||
         (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
         ((a !== n || l !== u) && Jf(t, o, n, u)),
         (jr = !1);
      var h = t.memoizedState;
      (o.state = h),
         ca(t, n, o, i),
         (l = t.memoizedState),
         a !== n || h !== l || ct.current || jr
            ? (typeof c == "function" &&
                 (Wu(t, r, c, n), (l = t.memoizedState)),
              (a = jr || Yf(t, r, a, n, h, l, u))
                 ? (d ||
                      (typeof o.UNSAFE_componentWillMount != "function" &&
                         typeof o.componentWillMount != "function") ||
                      (typeof o.componentWillMount == "function" &&
                         o.componentWillMount(),
                      typeof o.UNSAFE_componentWillMount == "function" &&
                         o.UNSAFE_componentWillMount()),
                   typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308))
                 : (typeof o.componentDidMount == "function" &&
                      (t.flags |= 4194308),
                   (t.memoizedProps = n),
                   (t.memoizedState = l)),
              (o.props = n),
              (o.state = l),
              (o.context = u),
              (n = a))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (n = !1));
   } else {
      (o = t.stateNode),
         rg(e, t),
         (a = t.memoizedProps),
         (u = t.type === t.elementType ? a : At(t.type, a)),
         (o.props = u),
         (d = t.pendingProps),
         (h = o.context),
         (l = r.contextType),
         typeof l == "object" && l !== null
            ? (l = Ot(l))
            : ((l = dt(r) ? Sn : Ze.current), (l = fi(t, l)));
      var m = r.getDerivedStateFromProps;
      (c =
         typeof m == "function" ||
         typeof o.getSnapshotBeforeUpdate == "function") ||
         (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
            typeof o.componentWillReceiveProps != "function") ||
         ((a !== d || h !== l) && Jf(t, o, n, l)),
         (jr = !1),
         (h = t.memoizedState),
         (o.state = h),
         ca(t, n, o, i);
      var y = t.memoizedState;
      a !== d || h !== y || ct.current || jr
         ? (typeof m == "function" && (Wu(t, r, m, n), (y = t.memoizedState)),
           (u = jr || Yf(t, r, u, n, h, y, l) || !1)
              ? (c ||
                   (typeof o.UNSAFE_componentWillUpdate != "function" &&
                      typeof o.componentWillUpdate != "function") ||
                   (typeof o.componentWillUpdate == "function" &&
                      o.componentWillUpdate(n, y, l),
                   typeof o.UNSAFE_componentWillUpdate == "function" &&
                      o.UNSAFE_componentWillUpdate(n, y, l)),
                typeof o.componentDidUpdate == "function" && (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate == "function" &&
                   (t.flags |= 1024))
              : (typeof o.componentDidUpdate != "function" ||
                   (a === e.memoizedProps && h === e.memoizedState) ||
                   (t.flags |= 4),
                typeof o.getSnapshotBeforeUpdate != "function" ||
                   (a === e.memoizedProps && h === e.memoizedState) ||
                   (t.flags |= 1024),
                (t.memoizedProps = n),
                (t.memoizedState = y)),
           (o.props = n),
           (o.state = y),
           (o.context = l),
           (n = u))
         : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 4),
           typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && h === e.memoizedState) ||
              (t.flags |= 1024),
           (n = !1));
   }
   return Ku(e, t, r, n, s, i);
}
function Ku(e, t, r, n, i, s) {
   Dg(e, t);
   var o = (t.flags & 128) !== 0;
   if (!n && !o) return i && Wf(t, r, !1), wr(e, t, s);
   (n = t.stateNode), (Y1.current = t);
   var a =
      o && typeof r.getDerivedStateFromError != "function" ? null : n.render();
   return (
      (t.flags |= 1),
      e !== null && o
         ? ((t.child = pi(t, e.child, null, s)), (t.child = pi(t, null, a, s)))
         : tt(e, t, a, s),
      (t.memoizedState = n.state),
      i && Wf(t, r, !0),
      t.child
   );
}
function Rg(e) {
   var t = e.stateNode;
   t.pendingContext
      ? Vf(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Vf(e, t.context, !1),
      od(e, t.containerInfo);
}
function ah(e, t, r, n, i) {
   return hi(), ed(i), (t.flags |= 256), tt(e, t, r, n), t.child;
}
var Yu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ju(e) {
   return { baseLanes: e, cachePool: null, transitions: null };
}
function Ig(e, t, r) {
   var n = t.pendingProps,
      i = ve.current,
      s = !1,
      o = (t.flags & 128) !== 0,
      a;
   if (
      ((a = o) ||
         (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      a
         ? ((s = !0), (t.flags &= -129))
         : (e === null || e.memoizedState !== null) && (i |= 1),
      ce(ve, i & 1),
      e === null)
   )
      return (
         qu(t),
         (e = t.memoizedState),
         e !== null && ((e = e.dehydrated), e !== null)
            ? (t.mode & 1
                 ? e.data === "$!"
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824)
                 : (t.lanes = 1),
              null)
            : ((o = n.children),
              (e = n.fallback),
              s
                 ? ((n = t.mode),
                   (s = t.child),
                   (o = { mode: "hidden", children: o }),
                   !(n & 1) && s !== null
                      ? ((s.childLanes = 0), (s.pendingProps = o))
                      : (s = Ja(o, n, 0, null)),
                   (e = bn(e, n, r, null)),
                   (s.return = t),
                   (e.return = t),
                   (s.sibling = e),
                   (t.child = s),
                   (t.child.memoizedState = Ju(r)),
                   (t.memoizedState = Yu),
                   e)
                 : pd(t, o))
      );
   if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
      return J1(e, t, o, n, a, i, r);
   if (s) {
      (s = n.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
      var l = { mode: "hidden", children: n.children };
      return (
         !(o & 1) && t.child !== i
            ? ((n = t.child),
              (n.childLanes = 0),
              (n.pendingProps = l),
              (t.deletions = null))
            : ((n = Qr(i, l)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
         a !== null
            ? (s = Qr(a, s))
            : ((s = bn(s, o, r, null)), (s.flags |= 2)),
         (s.return = t),
         (n.return = t),
         (n.sibling = s),
         (t.child = n),
         (n = s),
         (s = t.child),
         (o = e.child.memoizedState),
         (o =
            o === null
               ? Ju(r)
               : {
                    baseLanes: o.baseLanes | r,
                    cachePool: null,
                    transitions: o.transitions,
                 }),
         (s.memoizedState = o),
         (s.childLanes = e.childLanes & ~r),
         (t.memoizedState = Yu),
         n
      );
   }
   return (
      (s = e.child),
      (e = s.sibling),
      (n = Qr(s, { mode: "visible", children: n.children })),
      !(t.mode & 1) && (n.lanes = r),
      (n.return = t),
      (n.sibling = null),
      e !== null &&
         ((r = t.deletions),
         r === null ? ((t.deletions = [e]), (t.flags |= 16)) : r.push(e)),
      (t.child = n),
      (t.memoizedState = null),
      n
   );
}
function pd(e, t) {
   return (
      (t = Ja({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
   );
}
function vo(e, t, r, n) {
   return (
      n !== null && ed(n),
      pi(t, e.child, null, r),
      (e = pd(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
   );
}
function J1(e, t, r, n, i, s, o) {
   if (r)
      return t.flags & 256
         ? ((t.flags &= -257), (n = Fl(Error(O(422)))), vo(e, t, o, n))
         : t.memoizedState !== null
         ? ((t.child = e.child), (t.flags |= 128), null)
         : ((s = n.fallback),
           (i = t.mode),
           (n = Ja({ mode: "visible", children: n.children }, i, 0, null)),
           (s = bn(s, i, o, null)),
           (s.flags |= 2),
           (n.return = t),
           (s.return = t),
           (n.sibling = s),
           (t.child = n),
           t.mode & 1 && pi(t, e.child, null, o),
           (t.child.memoizedState = Ju(o)),
           (t.memoizedState = Yu),
           s);
   if (!(t.mode & 1)) return vo(e, t, o, null);
   if (i.data === "$!") {
      if (((n = i.nextSibling && i.nextSibling.dataset), n)) var a = n.dgst;
      return (
         (n = a), (s = Error(O(419))), (n = Fl(s, n, void 0)), vo(e, t, o, n)
      );
   }
   if (((a = (o & e.childLanes) !== 0), at || a)) {
      if (((n = Me), n !== null)) {
         switch (o & -o) {
            case 4:
               i = 2;
               break;
            case 16:
               i = 8;
               break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
               i = 32;
               break;
            case 536870912:
               i = 268435456;
               break;
            default:
               i = 0;
         }
         (i = i & (n.suspendedLanes | o) ? 0 : i),
            i !== 0 &&
               i !== s.retryLane &&
               ((s.retryLane = i), yr(e, i), Vt(n, e, i, -1));
      }
      return xd(), (n = Fl(Error(O(421)))), vo(e, t, o, n);
   }
   return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = cw.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = s.treeContext),
        (gt = qr(i.nextSibling)),
        (yt = t),
        (ge = !0),
        (Ut = null),
        e !== null &&
           ((Et[Pt++] = hr),
           (Et[Pt++] = pr),
           (Et[Pt++] = _n),
           (hr = e.id),
           (pr = e.overflow),
           (_n = t)),
        (t = pd(t, n.children)),
        (t.flags |= 4096),
        t);
}
function lh(e, t, r) {
   e.lanes |= t;
   var n = e.alternate;
   n !== null && (n.lanes |= t), Vu(e.return, t, r);
}
function Ul(e, t, r, n, i) {
   var s = e.memoizedState;
   s === null
      ? (e.memoizedState = {
           isBackwards: t,
           rendering: null,
           renderingStartTime: 0,
           last: n,
           tail: r,
           tailMode: i,
        })
      : ((s.isBackwards = t),
        (s.rendering = null),
        (s.renderingStartTime = 0),
        (s.last = n),
        (s.tail = r),
        (s.tailMode = i));
}
function $g(e, t, r) {
   var n = t.pendingProps,
      i = n.revealOrder,
      s = n.tail;
   if ((tt(e, t, n.children, r), (n = ve.current), n & 2))
      (n = (n & 1) | 2), (t.flags |= 128);
   else {
      if (e !== null && e.flags & 128)
         e: for (e = t.child; e !== null; ) {
            if (e.tag === 13) e.memoizedState !== null && lh(e, r, t);
            else if (e.tag === 19) lh(e, r, t);
            else if (e.child !== null) {
               (e.child.return = e), (e = e.child);
               continue;
            }
            if (e === t) break e;
            for (; e.sibling === null; ) {
               if (e.return === null || e.return === t) break e;
               e = e.return;
            }
            (e.sibling.return = e.return), (e = e.sibling);
         }
      n &= 1;
   }
   if ((ce(ve, n), !(t.mode & 1))) t.memoizedState = null;
   else
      switch (i) {
         case "forwards":
            for (r = t.child, i = null; r !== null; )
               (e = r.alternate),
                  e !== null && da(e) === null && (i = r),
                  (r = r.sibling);
            (r = i),
               r === null
                  ? ((i = t.child), (t.child = null))
                  : ((i = r.sibling), (r.sibling = null)),
               Ul(t, !1, i, r, s);
            break;
         case "backwards":
            for (r = null, i = t.child, t.child = null; i !== null; ) {
               if (((e = i.alternate), e !== null && da(e) === null)) {
                  t.child = i;
                  break;
               }
               (e = i.sibling), (i.sibling = r), (r = i), (i = e);
            }
            Ul(t, !0, r, null, s);
            break;
         case "together":
            Ul(t, !1, null, null, void 0);
            break;
         default:
            t.memoizedState = null;
      }
   return t.child;
}
function No(e, t) {
   !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function wr(e, t, r) {
   if (
      (e !== null && (t.dependencies = e.dependencies),
      (En |= t.lanes),
      !(r & t.childLanes))
   )
      return null;
   if (e !== null && t.child !== e.child) throw Error(O(153));
   if (t.child !== null) {
      for (
         e = t.child, r = Qr(e, e.pendingProps), t.child = r, r.return = t;
         e.sibling !== null;

      )
         (e = e.sibling),
            (r = r.sibling = Qr(e, e.pendingProps)),
            (r.return = t);
      r.sibling = null;
   }
   return t.child;
}
function X1(e, t, r) {
   switch (t.tag) {
      case 3:
         Rg(t), hi();
         break;
      case 5:
         ag(t);
         break;
      case 1:
         dt(t.type) && sa(t);
         break;
      case 4:
         od(t, t.stateNode.containerInfo);
         break;
      case 10:
         var n = t.type._context,
            i = t.memoizedProps.value;
         ce(la, n._currentValue), (n._currentValue = i);
         break;
      case 13:
         if (((n = t.memoizedState), n !== null))
            return n.dehydrated !== null
               ? (ce(ve, ve.current & 1), (t.flags |= 128), null)
               : r & t.child.childLanes
               ? Ig(e, t, r)
               : (ce(ve, ve.current & 1),
                 (e = wr(e, t, r)),
                 e !== null ? e.sibling : null);
         ce(ve, ve.current & 1);
         break;
      case 19:
         if (((n = (r & t.childLanes) !== 0), e.flags & 128)) {
            if (n) return $g(e, t, r);
            t.flags |= 128;
         }
         if (
            ((i = t.memoizedState),
            i !== null &&
               ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
            ce(ve, ve.current),
            n)
         )
            break;
         return null;
      case 22:
      case 23:
         return (t.lanes = 0), Og(e, t, r);
   }
   return wr(e, t, r);
}
var Ng, Xu, Lg, Ag;
Ng = function (e, t) {
   for (var r = t.child; r !== null; ) {
      if (r.tag === 5 || r.tag === 6) e.appendChild(r.stateNode);
      else if (r.tag !== 4 && r.child !== null) {
         (r.child.return = r), (r = r.child);
         continue;
      }
      if (r === t) break;
      for (; r.sibling === null; ) {
         if (r.return === null || r.return === t) return;
         r = r.return;
      }
      (r.sibling.return = r.return), (r = r.sibling);
   }
};
Xu = function () {};
Lg = function (e, t, r, n) {
   var i = e.memoizedProps;
   if (i !== n) {
      (e = t.stateNode), mn(tr.current);
      var s = null;
      switch (r) {
         case "input":
            (i = xu(e, i)), (n = xu(e, n)), (s = []);
            break;
         case "select":
            (i = xe({}, i, { value: void 0 })),
               (n = xe({}, n, { value: void 0 })),
               (s = []);
            break;
         case "textarea":
            (i = Su(e, i)), (n = Su(e, n)), (s = []);
            break;
         default:
            typeof i.onClick != "function" &&
               typeof n.onClick == "function" &&
               (e.onclick = na);
      }
      Cu(r, n);
      var o;
      r = null;
      for (u in i)
         if (!n.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
            if (u === "style") {
               var a = i[u];
               for (o in a) a.hasOwnProperty(o) && (r || (r = {}), (r[o] = ""));
            } else
               u !== "dangerouslySetInnerHTML" &&
                  u !== "children" &&
                  u !== "suppressContentEditableWarning" &&
                  u !== "suppressHydrationWarning" &&
                  u !== "autoFocus" &&
                  (ws.hasOwnProperty(u)
                     ? s || (s = [])
                     : (s = s || []).push(u, null));
      for (u in n) {
         var l = n[u];
         if (
            ((a = i != null ? i[u] : void 0),
            n.hasOwnProperty(u) && l !== a && (l != null || a != null))
         )
            if (u === "style")
               if (a) {
                  for (o in a)
                     !a.hasOwnProperty(o) ||
                        (l && l.hasOwnProperty(o)) ||
                        (r || (r = {}), (r[o] = ""));
                  for (o in l)
                     l.hasOwnProperty(o) &&
                        a[o] !== l[o] &&
                        (r || (r = {}), (r[o] = l[o]));
               } else r || (s || (s = []), s.push(u, r)), (r = l);
            else
               u === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0),
                    (a = a ? a.__html : void 0),
                    l != null && a !== l && (s = s || []).push(u, l))
                  : u === "children"
                  ? (typeof l != "string" && typeof l != "number") ||
                    (s = s || []).push(u, "" + l)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    (ws.hasOwnProperty(u)
                       ? (l != null && u === "onScroll" && fe("scroll", e),
                         s || a === l || (s = []))
                       : (s = s || []).push(u, l));
      }
      r && (s = s || []).push("style", r);
      var u = s;
      (t.updateQueue = u) && (t.flags |= 4);
   }
};
Ag = function (e, t, r, n) {
   r !== n && (t.flags |= 4);
};
function zi(e, t) {
   if (!ge)
      switch (e.tailMode) {
         case "hidden":
            t = e.tail;
            for (var r = null; t !== null; )
               t.alternate !== null && (r = t), (t = t.sibling);
            r === null ? (e.tail = null) : (r.sibling = null);
            break;
         case "collapsed":
            r = e.tail;
            for (var n = null; r !== null; )
               r.alternate !== null && (n = r), (r = r.sibling);
            n === null
               ? t || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
               : (n.sibling = null);
      }
}
function Ge(e) {
   var t = e.alternate !== null && e.alternate.child === e.child,
      r = 0,
      n = 0;
   if (t)
      for (var i = e.child; i !== null; )
         (r |= i.lanes | i.childLanes),
            (n |= i.subtreeFlags & 14680064),
            (n |= i.flags & 14680064),
            (i.return = e),
            (i = i.sibling);
   else
      for (i = e.child; i !== null; )
         (r |= i.lanes | i.childLanes),
            (n |= i.subtreeFlags),
            (n |= i.flags),
            (i.return = e),
            (i = i.sibling);
   return (e.subtreeFlags |= n), (e.childLanes = r), t;
}
function Z1(e, t, r) {
   var n = t.pendingProps;
   switch ((Zc(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
         return Ge(t), null;
      case 1:
         return dt(t.type) && ia(), Ge(t), null;
      case 3:
         return (
            (n = t.stateNode),
            mi(),
            pe(ct),
            pe(Ze),
            ld(),
            n.pendingContext &&
               ((n.context = n.pendingContext), (n.pendingContext = null)),
            (e === null || e.child === null) &&
               (mo(t)
                  ? (t.flags |= 4)
                  : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), Ut !== null && (oc(Ut), (Ut = null)))),
            Xu(e, t),
            Ge(t),
            null
         );
      case 5:
         ad(t);
         var i = mn(Ds.current);
         if (((r = t.type), e !== null && t.stateNode != null))
            Lg(e, t, r, n, i),
               e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
         else {
            if (!n) {
               if (t.stateNode === null) throw Error(O(166));
               return Ge(t), null;
            }
            if (((e = mn(tr.current)), mo(t))) {
               (n = t.stateNode), (r = t.type);
               var s = t.memoizedProps;
               switch (
                  ((n[Xt] = t), (n[js] = s), (e = (t.mode & 1) !== 0), r)
               ) {
                  case "dialog":
                     fe("cancel", n), fe("close", n);
                     break;
                  case "iframe":
                  case "object":
                  case "embed":
                     fe("load", n);
                     break;
                  case "video":
                  case "audio":
                     for (i = 0; i < es.length; i++) fe(es[i], n);
                     break;
                  case "source":
                     fe("error", n);
                     break;
                  case "img":
                  case "image":
                  case "link":
                     fe("error", n), fe("load", n);
                     break;
                  case "details":
                     fe("toggle", n);
                     break;
                  case "input":
                     vf(n, s), fe("invalid", n);
                     break;
                  case "select":
                     (n._wrapperState = { wasMultiple: !!s.multiple }),
                        fe("invalid", n);
                     break;
                  case "textarea":
                     wf(n, s), fe("invalid", n);
               }
               Cu(r, s), (i = null);
               for (var o in s)
                  if (s.hasOwnProperty(o)) {
                     var a = s[o];
                     o === "children"
                        ? typeof a == "string"
                           ? n.textContent !== a &&
                             (s.suppressHydrationWarning !== !0 &&
                                po(n.textContent, a, e),
                             (i = ["children", a]))
                           : typeof a == "number" &&
                             n.textContent !== "" + a &&
                             (s.suppressHydrationWarning !== !0 &&
                                po(n.textContent, a, e),
                             (i = ["children", "" + a]))
                        : ws.hasOwnProperty(o) &&
                          a != null &&
                          o === "onScroll" &&
                          fe("scroll", n);
                  }
               switch (r) {
                  case "input":
                     so(n), yf(n, s, !0);
                     break;
                  case "textarea":
                     so(n), xf(n);
                     break;
                  case "select":
                  case "option":
                     break;
                  default:
                     typeof s.onClick == "function" && (n.onclick = na);
               }
               (n = i), (t.updateQueue = n), n !== null && (t.flags |= 4);
            } else {
               (o = i.nodeType === 9 ? i : i.ownerDocument),
                  e === "http://www.w3.org/1999/xhtml" && (e = cm(r)),
                  e === "http://www.w3.org/1999/xhtml"
                     ? r === "script"
                        ? ((e = o.createElement("div")),
                          (e.innerHTML = "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : typeof n.is == "string"
                        ? (e = o.createElement(r, { is: n.is }))
                        : ((e = o.createElement(r)),
                          r === "select" &&
                             ((o = e),
                             n.multiple
                                ? (o.multiple = !0)
                                : n.size && (o.size = n.size)))
                     : (e = o.createElementNS(e, r)),
                  (e[Xt] = t),
                  (e[js] = n),
                  Ng(e, t, !1, !1),
                  (t.stateNode = e);
               e: {
                  switch (((o = Eu(r, n)), r)) {
                     case "dialog":
                        fe("cancel", e), fe("close", e), (i = n);
                        break;
                     case "iframe":
                     case "object":
                     case "embed":
                        fe("load", e), (i = n);
                        break;
                     case "video":
                     case "audio":
                        for (i = 0; i < es.length; i++) fe(es[i], e);
                        i = n;
                        break;
                     case "source":
                        fe("error", e), (i = n);
                        break;
                     case "img":
                     case "image":
                     case "link":
                        fe("error", e), fe("load", e), (i = n);
                        break;
                     case "details":
                        fe("toggle", e), (i = n);
                        break;
                     case "input":
                        vf(e, n), (i = xu(e, n)), fe("invalid", e);
                        break;
                     case "option":
                        i = n;
                        break;
                     case "select":
                        (e._wrapperState = { wasMultiple: !!n.multiple }),
                           (i = xe({}, n, { value: void 0 })),
                           fe("invalid", e);
                        break;
                     case "textarea":
                        wf(e, n), (i = Su(e, n)), fe("invalid", e);
                        break;
                     default:
                        i = n;
                  }
                  Cu(r, i), (a = i);
                  for (s in a)
                     if (a.hasOwnProperty(s)) {
                        var l = a[s];
                        s === "style"
                           ? hm(e, l)
                           : s === "dangerouslySetInnerHTML"
                           ? ((l = l ? l.__html : void 0),
                             l != null && dm(e, l))
                           : s === "children"
                           ? typeof l == "string"
                              ? (r !== "textarea" || l !== "") && xs(e, l)
                              : typeof l == "number" && xs(e, "" + l)
                           : s !== "suppressContentEditableWarning" &&
                             s !== "suppressHydrationWarning" &&
                             s !== "autoFocus" &&
                             (ws.hasOwnProperty(s)
                                ? l != null &&
                                  s === "onScroll" &&
                                  fe("scroll", e)
                                : l != null && Mc(e, s, l, o));
                     }
                  switch (r) {
                     case "input":
                        so(e), yf(e, n, !1);
                        break;
                     case "textarea":
                        so(e), xf(e);
                        break;
                     case "option":
                        n.value != null &&
                           e.setAttribute("value", "" + Jr(n.value));
                        break;
                     case "select":
                        (e.multiple = !!n.multiple),
                           (s = n.value),
                           s != null
                              ? ii(e, !!n.multiple, s, !1)
                              : n.defaultValue != null &&
                                ii(e, !!n.multiple, n.defaultValue, !0);
                        break;
                     default:
                        typeof i.onClick == "function" && (e.onclick = na);
                  }
                  switch (r) {
                     case "button":
                     case "input":
                     case "select":
                     case "textarea":
                        n = !!n.autoFocus;
                        break e;
                     case "img":
                        n = !0;
                        break e;
                     default:
                        n = !1;
                  }
               }
               n && (t.flags |= 4);
            }
            t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
         }
         return Ge(t), null;
      case 6:
         if (e && t.stateNode != null) Ag(e, t, e.memoizedProps, n);
         else {
            if (typeof n != "string" && t.stateNode === null)
               throw Error(O(166));
            if (((r = mn(Ds.current)), mn(tr.current), mo(t))) {
               if (
                  ((n = t.stateNode),
                  (r = t.memoizedProps),
                  (n[Xt] = t),
                  (s = n.nodeValue !== r) && ((e = yt), e !== null))
               )
                  switch (e.tag) {
                     case 3:
                        po(n.nodeValue, r, (e.mode & 1) !== 0);
                        break;
                     case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 &&
                           po(n.nodeValue, r, (e.mode & 1) !== 0);
                  }
               s && (t.flags |= 4);
            } else
               (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
                  (n[Xt] = t),
                  (t.stateNode = n);
         }
         return Ge(t), null;
      case 13:
         if (
            (pe(ve),
            (n = t.memoizedState),
            e === null ||
               (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null))
         ) {
            if (ge && gt !== null && t.mode & 1 && !(t.flags & 128))
               eg(), hi(), (t.flags |= 98560), (s = !1);
            else if (((s = mo(t)), n !== null && n.dehydrated !== null)) {
               if (e === null) {
                  if (!s) throw Error(O(318));
                  if (
                     ((s = t.memoizedState),
                     (s = s !== null ? s.dehydrated : null),
                     !s)
                  )
                     throw Error(O(317));
                  s[Xt] = t;
               } else
                  hi(),
                     !(t.flags & 128) && (t.memoizedState = null),
                     (t.flags |= 4);
               Ge(t), (s = !1);
            } else Ut !== null && (oc(Ut), (Ut = null)), (s = !0);
            if (!s) return t.flags & 65536 ? t : null;
         }
         return t.flags & 128
            ? ((t.lanes = r), t)
            : ((n = n !== null),
              n !== (e !== null && e.memoizedState !== null) &&
                 n &&
                 ((t.child.flags |= 8192),
                 t.mode & 1 &&
                    (e === null || ve.current & 1
                       ? Re === 0 && (Re = 3)
                       : xd())),
              t.updateQueue !== null && (t.flags |= 4),
              Ge(t),
              null);
      case 4:
         return (
            mi(),
            Xu(e, t),
            e === null && Ps(t.stateNode.containerInfo),
            Ge(t),
            null
         );
      case 10:
         return nd(t.type._context), Ge(t), null;
      case 17:
         return dt(t.type) && ia(), Ge(t), null;
      case 19:
         if ((pe(ve), (s = t.memoizedState), s === null)) return Ge(t), null;
         if (((n = (t.flags & 128) !== 0), (o = s.rendering), o === null))
            if (n) zi(s, !1);
            else {
               if (Re !== 0 || (e !== null && e.flags & 128))
                  for (e = t.child; e !== null; ) {
                     if (((o = da(e)), o !== null)) {
                        for (
                           t.flags |= 128,
                              zi(s, !1),
                              n = o.updateQueue,
                              n !== null &&
                                 ((t.updateQueue = n), (t.flags |= 4)),
                              t.subtreeFlags = 0,
                              n = r,
                              r = t.child;
                           r !== null;

                        )
                           (s = r),
                              (e = n),
                              (s.flags &= 14680066),
                              (o = s.alternate),
                              o === null
                                 ? ((s.childLanes = 0),
                                   (s.lanes = e),
                                   (s.child = null),
                                   (s.subtreeFlags = 0),
                                   (s.memoizedProps = null),
                                   (s.memoizedState = null),
                                   (s.updateQueue = null),
                                   (s.dependencies = null),
                                   (s.stateNode = null))
                                 : ((s.childLanes = o.childLanes),
                                   (s.lanes = o.lanes),
                                   (s.child = o.child),
                                   (s.subtreeFlags = 0),
                                   (s.deletions = null),
                                   (s.memoizedProps = o.memoizedProps),
                                   (s.memoizedState = o.memoizedState),
                                   (s.updateQueue = o.updateQueue),
                                   (s.type = o.type),
                                   (e = o.dependencies),
                                   (s.dependencies =
                                      e === null
                                         ? null
                                         : {
                                              lanes: e.lanes,
                                              firstContext: e.firstContext,
                                           })),
                              (r = r.sibling);
                        return ce(ve, (ve.current & 1) | 2), t.child;
                     }
                     e = e.sibling;
                  }
               s.tail !== null &&
                  Ce() > vi &&
                  ((t.flags |= 128), (n = !0), zi(s, !1), (t.lanes = 4194304));
            }
         else {
            if (!n)
               if (((e = da(o)), e !== null)) {
                  if (
                     ((t.flags |= 128),
                     (n = !0),
                     (r = e.updateQueue),
                     r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                     zi(s, !0),
                     s.tail === null &&
                        s.tailMode === "hidden" &&
                        !o.alternate &&
                        !ge)
                  )
                     return Ge(t), null;
               } else
                  2 * Ce() - s.renderingStartTime > vi &&
                     r !== 1073741824 &&
                     ((t.flags |= 128),
                     (n = !0),
                     zi(s, !1),
                     (t.lanes = 4194304));
            s.isBackwards
               ? ((o.sibling = t.child), (t.child = o))
               : ((r = s.last),
                 r !== null ? (r.sibling = o) : (t.child = o),
                 (s.last = o));
         }
         return s.tail !== null
            ? ((t = s.tail),
              (s.rendering = t),
              (s.tail = t.sibling),
              (s.renderingStartTime = Ce()),
              (t.sibling = null),
              (r = ve.current),
              ce(ve, n ? (r & 1) | 2 : r & 1),
              t)
            : (Ge(t), null);
      case 22:
      case 23:
         return (
            wd(),
            (n = t.memoizedState !== null),
            e !== null && (e.memoizedState !== null) !== n && (t.flags |= 8192),
            n && t.mode & 1
               ? mt & 1073741824 &&
                 (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
               : Ge(t),
            null
         );
      case 24:
         return null;
      case 25:
         return null;
   }
   throw Error(O(156, t.tag));
}
function ew(e, t) {
   switch ((Zc(t), t.tag)) {
      case 1:
         return (
            dt(t.type) && ia(),
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 3:
         return (
            mi(),
            pe(ct),
            pe(Ze),
            ld(),
            (e = t.flags),
            e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 5:
         return ad(t), null;
      case 13:
         if (
            (pe(ve), (e = t.memoizedState), e !== null && e.dehydrated !== null)
         ) {
            if (t.alternate === null) throw Error(O(340));
            hi();
         }
         return (
            (e = t.flags),
            e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
         );
      case 19:
         return pe(ve), null;
      case 4:
         return mi(), null;
      case 10:
         return nd(t.type._context), null;
      case 22:
      case 23:
         return wd(), null;
      case 24:
         return null;
      default:
         return null;
   }
}
var yo = !1,
   Ye = !1,
   tw = typeof WeakSet == "function" ? WeakSet : Set,
   L = null;
function Zn(e, t) {
   var r = e.ref;
   if (r !== null)
      if (typeof r == "function")
         try {
            r(null);
         } catch (n) {
            ke(e, t, n);
         }
      else r.current = null;
}
function Zu(e, t, r) {
   try {
      r();
   } catch (n) {
      ke(e, t, n);
   }
}
var uh = !1;
function rw(e, t) {
   if (((Lu = ea), (e = zm()), Jc(e))) {
      if ("selectionStart" in e)
         var r = { start: e.selectionStart, end: e.selectionEnd };
      else
         e: {
            r = ((r = e.ownerDocument) && r.defaultView) || window;
            var n = r.getSelection && r.getSelection();
            if (n && n.rangeCount !== 0) {
               r = n.anchorNode;
               var i = n.anchorOffset,
                  s = n.focusNode;
               n = n.focusOffset;
               try {
                  r.nodeType, s.nodeType;
               } catch {
                  r = null;
                  break e;
               }
               var o = 0,
                  a = -1,
                  l = -1,
                  u = 0,
                  c = 0,
                  d = e,
                  h = null;
               t: for (;;) {
                  for (
                     var m;
                     d !== r || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                        d !== s || (n !== 0 && d.nodeType !== 3) || (l = o + n),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (m = d.firstChild) !== null;

                  )
                     (h = d), (d = m);
                  for (;;) {
                     if (d === e) break t;
                     if (
                        (h === r && ++u === i && (a = o),
                        h === s && ++c === n && (l = o),
                        (m = d.nextSibling) !== null)
                     )
                        break;
                     (d = h), (h = d.parentNode);
                  }
                  d = m;
               }
               r = a === -1 || l === -1 ? null : { start: a, end: l };
            } else r = null;
         }
      r = r || { start: 0, end: 0 };
   } else r = null;
   for (
      Au = { focusedElem: e, selectionRange: r }, ea = !1, L = t;
      L !== null;

   )
      if (((t = L), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
         (e.return = t), (L = e);
      else
         for (; L !== null; ) {
            t = L;
            try {
               var y = t.alternate;
               if (t.flags & 1024)
                  switch (t.tag) {
                     case 0:
                     case 11:
                     case 15:
                        break;
                     case 1:
                        if (y !== null) {
                           var w = y.memoizedProps,
                              k = y.memoizedState,
                              g = t.stateNode,
                              p = g.getSnapshotBeforeUpdate(
                                 t.elementType === t.type ? w : At(t.type, w),
                                 k
                              );
                           g.__reactInternalSnapshotBeforeUpdate = p;
                        }
                        break;
                     case 3:
                        var v = t.stateNode.containerInfo;
                        v.nodeType === 1
                           ? (v.textContent = "")
                           : v.nodeType === 9 &&
                             v.documentElement &&
                             v.removeChild(v.documentElement);
                        break;
                     case 5:
                     case 6:
                     case 4:
                     case 17:
                        break;
                     default:
                        throw Error(O(163));
                  }
            } catch (b) {
               ke(t, t.return, b);
            }
            if (((e = t.sibling), e !== null)) {
               (e.return = t.return), (L = e);
               break;
            }
            L = t.return;
         }
   return (y = uh), (uh = !1), y;
}
function ds(e, t, r) {
   var n = t.updateQueue;
   if (((n = n !== null ? n.lastEffect : null), n !== null)) {
      var i = (n = n.next);
      do {
         if ((i.tag & e) === e) {
            var s = i.destroy;
            (i.destroy = void 0), s !== void 0 && Zu(t, r, s);
         }
         i = i.next;
      } while (i !== n);
   }
}
function Ka(e, t) {
   if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
   ) {
      var r = (t = t.next);
      do {
         if ((r.tag & e) === e) {
            var n = r.create;
            r.destroy = n();
         }
         r = r.next;
      } while (r !== t);
   }
}
function ec(e) {
   var t = e.ref;
   if (t !== null) {
      var r = e.stateNode;
      switch (e.tag) {
         case 5:
            e = r;
            break;
         default:
            e = r;
      }
      typeof t == "function" ? t(e) : (t.current = e);
   }
}
function Mg(e) {
   var t = e.alternate;
   t !== null && ((e.alternate = null), Mg(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
         ((t = e.stateNode),
         t !== null &&
            (delete t[Xt],
            delete t[js],
            delete t[Uu],
            delete t[M1],
            delete t[F1])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
}
function Fg(e) {
   return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ch(e) {
   e: for (;;) {
      for (; e.sibling === null; ) {
         if (e.return === null || Fg(e.return)) return null;
         e = e.return;
      }
      for (
         e.sibling.return = e.return, e = e.sibling;
         e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
         if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
         (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
   }
}
function tc(e, t, r) {
   var n = e.tag;
   if (n === 5 || n === 6)
      (e = e.stateNode),
         t
            ? r.nodeType === 8
               ? r.parentNode.insertBefore(e, t)
               : r.insertBefore(e, t)
            : (r.nodeType === 8
                 ? ((t = r.parentNode), t.insertBefore(e, r))
                 : ((t = r), t.appendChild(e)),
              (r = r._reactRootContainer),
              r != null || t.onclick !== null || (t.onclick = na));
   else if (n !== 4 && ((e = e.child), e !== null))
      for (tc(e, t, r), e = e.sibling; e !== null; )
         tc(e, t, r), (e = e.sibling);
}
function rc(e, t, r) {
   var n = e.tag;
   if (n === 5 || n === 6)
      (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
   else if (n !== 4 && ((e = e.child), e !== null))
      for (rc(e, t, r), e = e.sibling; e !== null; )
         rc(e, t, r), (e = e.sibling);
}
var ze = null,
   Mt = !1;
function Sr(e, t, r) {
   for (r = r.child; r !== null; ) Ug(e, t, r), (r = r.sibling);
}
function Ug(e, t, r) {
   if (er && typeof er.onCommitFiberUnmount == "function")
      try {
         er.onCommitFiberUnmount(za, r);
      } catch {}
   switch (r.tag) {
      case 5:
         Ye || Zn(r, t);
      case 6:
         var n = ze,
            i = Mt;
         (ze = null),
            Sr(e, t, r),
            (ze = n),
            (Mt = i),
            ze !== null &&
               (Mt
                  ? ((e = ze),
                    (r = r.stateNode),
                    e.nodeType === 8
                       ? e.parentNode.removeChild(r)
                       : e.removeChild(r))
                  : ze.removeChild(r.stateNode));
         break;
      case 18:
         ze !== null &&
            (Mt
               ? ((e = ze),
                 (r = r.stateNode),
                 e.nodeType === 8
                    ? Il(e.parentNode, r)
                    : e.nodeType === 1 && Il(e, r),
                 _s(e))
               : Il(ze, r.stateNode));
         break;
      case 4:
         (n = ze),
            (i = Mt),
            (ze = r.stateNode.containerInfo),
            (Mt = !0),
            Sr(e, t, r),
            (ze = n),
            (Mt = i);
         break;
      case 0:
      case 11:
      case 14:
      case 15:
         if (
            !Ye &&
            ((n = r.updateQueue),
            n !== null && ((n = n.lastEffect), n !== null))
         ) {
            i = n = n.next;
            do {
               var s = i,
                  o = s.destroy;
               (s = s.tag),
                  o !== void 0 && (s & 2 || s & 4) && Zu(r, t, o),
                  (i = i.next);
            } while (i !== n);
         }
         Sr(e, t, r);
         break;
      case 1:
         if (
            !Ye &&
            (Zn(r, t),
            (n = r.stateNode),
            typeof n.componentWillUnmount == "function")
         )
            try {
               (n.props = r.memoizedProps),
                  (n.state = r.memoizedState),
                  n.componentWillUnmount();
            } catch (a) {
               ke(r, t, a);
            }
         Sr(e, t, r);
         break;
      case 21:
         Sr(e, t, r);
         break;
      case 22:
         r.mode & 1
            ? ((Ye = (n = Ye) || r.memoizedState !== null),
              Sr(e, t, r),
              (Ye = n))
            : Sr(e, t, r);
         break;
      default:
         Sr(e, t, r);
   }
}
function dh(e) {
   var t = e.updateQueue;
   if (t !== null) {
      e.updateQueue = null;
      var r = e.stateNode;
      r === null && (r = e.stateNode = new tw()),
         t.forEach(function (n) {
            var i = dw.bind(null, e, n);
            r.has(n) || (r.add(n), n.then(i, i));
         });
   }
}
function Lt(e, t) {
   var r = t.deletions;
   if (r !== null)
      for (var n = 0; n < r.length; n++) {
         var i = r[n];
         try {
            var s = e,
               o = t,
               a = o;
            e: for (; a !== null; ) {
               switch (a.tag) {
                  case 5:
                     (ze = a.stateNode), (Mt = !1);
                     break e;
                  case 3:
                     (ze = a.stateNode.containerInfo), (Mt = !0);
                     break e;
                  case 4:
                     (ze = a.stateNode.containerInfo), (Mt = !0);
                     break e;
               }
               a = a.return;
            }
            if (ze === null) throw Error(O(160));
            Ug(s, o, i), (ze = null), (Mt = !1);
            var l = i.alternate;
            l !== null && (l.return = null), (i.return = null);
         } catch (u) {
            ke(i, t, u);
         }
      }
   if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) zg(t, e), (t = t.sibling);
}
function zg(e, t) {
   var r = e.alternate,
      n = e.flags;
   switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
         if ((Lt(t, e), Kt(e), n & 4)) {
            try {
               ds(3, e, e.return), Ka(3, e);
            } catch (w) {
               ke(e, e.return, w);
            }
            try {
               ds(5, e, e.return);
            } catch (w) {
               ke(e, e.return, w);
            }
         }
         break;
      case 1:
         Lt(t, e), Kt(e), n & 512 && r !== null && Zn(r, r.return);
         break;
      case 5:
         if (
            (Lt(t, e),
            Kt(e),
            n & 512 && r !== null && Zn(r, r.return),
            e.flags & 32)
         ) {
            var i = e.stateNode;
            try {
               xs(i, "");
            } catch (w) {
               ke(e, e.return, w);
            }
         }
         if (n & 4 && ((i = e.stateNode), i != null)) {
            var s = e.memoizedProps,
               o = r !== null ? r.memoizedProps : s,
               a = e.type,
               l = e.updateQueue;
            if (((e.updateQueue = null), l !== null))
               try {
                  a === "input" &&
                     s.type === "radio" &&
                     s.name != null &&
                     lm(i, s),
                     Eu(a, o);
                  var u = Eu(a, s);
                  for (o = 0; o < l.length; o += 2) {
                     var c = l[o],
                        d = l[o + 1];
                     c === "style"
                        ? hm(i, d)
                        : c === "dangerouslySetInnerHTML"
                        ? dm(i, d)
                        : c === "children"
                        ? xs(i, d)
                        : Mc(i, c, d, u);
                  }
                  switch (a) {
                     case "input":
                        bu(i, s);
                        break;
                     case "textarea":
                        um(i, s);
                        break;
                     case "select":
                        var h = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null
                           ? ii(i, !!s.multiple, m, !1)
                           : h !== !!s.multiple &&
                             (s.defaultValue != null
                                ? ii(i, !!s.multiple, s.defaultValue, !0)
                                : ii(
                                     i,
                                     !!s.multiple,
                                     s.multiple ? [] : "",
                                     !1
                                  ));
                  }
                  i[js] = s;
               } catch (w) {
                  ke(e, e.return, w);
               }
         }
         break;
      case 6:
         if ((Lt(t, e), Kt(e), n & 4)) {
            if (e.stateNode === null) throw Error(O(162));
            (i = e.stateNode), (s = e.memoizedProps);
            try {
               i.nodeValue = s;
            } catch (w) {
               ke(e, e.return, w);
            }
         }
         break;
      case 3:
         if (
            (Lt(t, e),
            Kt(e),
            n & 4 && r !== null && r.memoizedState.isDehydrated)
         )
            try {
               _s(t.containerInfo);
            } catch (w) {
               ke(e, e.return, w);
            }
         break;
      case 4:
         Lt(t, e), Kt(e);
         break;
      case 13:
         Lt(t, e),
            Kt(e),
            (i = e.child),
            i.flags & 8192 &&
               ((s = i.memoizedState !== null),
               (i.stateNode.isHidden = s),
               !s ||
                  (i.alternate !== null &&
                     i.alternate.memoizedState !== null) ||
                  (vd = Ce())),
            n & 4 && dh(e);
         break;
      case 22:
         if (
            ((c = r !== null && r.memoizedState !== null),
            e.mode & 1 ? ((Ye = (u = Ye) || c), Lt(t, e), (Ye = u)) : Lt(t, e),
            Kt(e),
            n & 8192)
         ) {
            if (
               ((u = e.memoizedState !== null),
               (e.stateNode.isHidden = u) && !c && e.mode & 1)
            )
               for (L = e, c = e.child; c !== null; ) {
                  for (d = L = c; L !== null; ) {
                     switch (((h = L), (m = h.child), h.tag)) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                           ds(4, h, h.return);
                           break;
                        case 1:
                           Zn(h, h.return);
                           var y = h.stateNode;
                           if (typeof y.componentWillUnmount == "function") {
                              (n = h), (r = h.return);
                              try {
                                 (t = n),
                                    (y.props = t.memoizedProps),
                                    (y.state = t.memoizedState),
                                    y.componentWillUnmount();
                              } catch (w) {
                                 ke(n, r, w);
                              }
                           }
                           break;
                        case 5:
                           Zn(h, h.return);
                           break;
                        case 22:
                           if (h.memoizedState !== null) {
                              hh(d);
                              continue;
                           }
                     }
                     m !== null ? ((m.return = h), (L = m)) : hh(d);
                  }
                  c = c.sibling;
               }
            e: for (c = null, d = e; ; ) {
               if (d.tag === 5) {
                  if (c === null) {
                     c = d;
                     try {
                        (i = d.stateNode),
                           u
                              ? ((s = i.style),
                                typeof s.setProperty == "function"
                                   ? s.setProperty(
                                        "display",
                                        "none",
                                        "important"
                                     )
                                   : (s.display = "none"))
                              : ((a = d.stateNode),
                                (l = d.memoizedProps.style),
                                (o =
                                   l != null && l.hasOwnProperty("display")
                                      ? l.display
                                      : null),
                                (a.style.display = fm("display", o)));
                     } catch (w) {
                        ke(e, e.return, w);
                     }
                  }
               } else if (d.tag === 6) {
                  if (c === null)
                     try {
                        d.stateNode.nodeValue = u ? "" : d.memoizedProps;
                     } catch (w) {
                        ke(e, e.return, w);
                     }
               } else if (
                  ((d.tag !== 22 && d.tag !== 23) ||
                     d.memoizedState === null ||
                     d === e) &&
                  d.child !== null
               ) {
                  (d.child.return = d), (d = d.child);
                  continue;
               }
               if (d === e) break e;
               for (; d.sibling === null; ) {
                  if (d.return === null || d.return === e) break e;
                  c === d && (c = null), (d = d.return);
               }
               c === d && (c = null),
                  (d.sibling.return = d.return),
                  (d = d.sibling);
            }
         }
         break;
      case 19:
         Lt(t, e), Kt(e), n & 4 && dh(e);
         break;
      case 21:
         break;
      default:
         Lt(t, e), Kt(e);
   }
}
function Kt(e) {
   var t = e.flags;
   if (t & 2) {
      try {
         e: {
            for (var r = e.return; r !== null; ) {
               if (Fg(r)) {
                  var n = r;
                  break e;
               }
               r = r.return;
            }
            throw Error(O(160));
         }
         switch (n.tag) {
            case 5:
               var i = n.stateNode;
               n.flags & 32 && (xs(i, ""), (n.flags &= -33));
               var s = ch(e);
               rc(e, s, i);
               break;
            case 3:
            case 4:
               var o = n.stateNode.containerInfo,
                  a = ch(e);
               tc(e, a, o);
               break;
            default:
               throw Error(O(161));
         }
      } catch (l) {
         ke(e, e.return, l);
      }
      e.flags &= -3;
   }
   t & 4096 && (e.flags &= -4097);
}
function nw(e, t, r) {
   (L = e), Bg(e);
}
function Bg(e, t, r) {
   for (var n = (e.mode & 1) !== 0; L !== null; ) {
      var i = L,
         s = i.child;
      if (i.tag === 22 && n) {
         var o = i.memoizedState !== null || yo;
         if (!o) {
            var a = i.alternate,
               l = (a !== null && a.memoizedState !== null) || Ye;
            a = yo;
            var u = Ye;
            if (((yo = o), (Ye = l) && !u))
               for (L = i; L !== null; )
                  (o = L),
                     (l = o.child),
                     o.tag === 22 && o.memoizedState !== null
                        ? ph(i)
                        : l !== null
                        ? ((l.return = o), (L = l))
                        : ph(i);
            for (; s !== null; ) (L = s), Bg(s), (s = s.sibling);
            (L = i), (yo = a), (Ye = u);
         }
         fh(e);
      } else
         i.subtreeFlags & 8772 && s !== null
            ? ((s.return = i), (L = s))
            : fh(e);
   }
}
function fh(e) {
   for (; L !== null; ) {
      var t = L;
      if (t.flags & 8772) {
         var r = t.alternate;
         try {
            if (t.flags & 8772)
               switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                     Ye || Ka(5, t);
                     break;
                  case 1:
                     var n = t.stateNode;
                     if (t.flags & 4 && !Ye)
                        if (r === null) n.componentDidMount();
                        else {
                           var i =
                              t.elementType === t.type
                                 ? r.memoizedProps
                                 : At(t.type, r.memoizedProps);
                           n.componentDidUpdate(
                              i,
                              r.memoizedState,
                              n.__reactInternalSnapshotBeforeUpdate
                           );
                        }
                     var s = t.updateQueue;
                     s !== null && Kf(t, s, n);
                     break;
                  case 3:
                     var o = t.updateQueue;
                     if (o !== null) {
                        if (((r = null), t.child !== null))
                           switch (t.child.tag) {
                              case 5:
                                 r = t.child.stateNode;
                                 break;
                              case 1:
                                 r = t.child.stateNode;
                           }
                        Kf(t, o, r);
                     }
                     break;
                  case 5:
                     var a = t.stateNode;
                     if (r === null && t.flags & 4) {
                        r = a;
                        var l = t.memoizedProps;
                        switch (t.type) {
                           case "button":
                           case "input":
                           case "select":
                           case "textarea":
                              l.autoFocus && r.focus();
                              break;
                           case "img":
                              l.src && (r.src = l.src);
                        }
                     }
                     break;
                  case 6:
                     break;
                  case 4:
                     break;
                  case 12:
                     break;
                  case 13:
                     if (t.memoizedState === null) {
                        var u = t.alternate;
                        if (u !== null) {
                           var c = u.memoizedState;
                           if (c !== null) {
                              var d = c.dehydrated;
                              d !== null && _s(d);
                           }
                        }
                     }
                     break;
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                     break;
                  default:
                     throw Error(O(163));
               }
            Ye || (t.flags & 512 && ec(t));
         } catch (h) {
            ke(t, t.return, h);
         }
      }
      if (t === e) {
         L = null;
         break;
      }
      if (((r = t.sibling), r !== null)) {
         (r.return = t.return), (L = r);
         break;
      }
      L = t.return;
   }
}
function hh(e) {
   for (; L !== null; ) {
      var t = L;
      if (t === e) {
         L = null;
         break;
      }
      var r = t.sibling;
      if (r !== null) {
         (r.return = t.return), (L = r);
         break;
      }
      L = t.return;
   }
}
function ph(e) {
   for (; L !== null; ) {
      var t = L;
      try {
         switch (t.tag) {
            case 0:
            case 11:
            case 15:
               var r = t.return;
               try {
                  Ka(4, t);
               } catch (l) {
                  ke(t, r, l);
               }
               break;
            case 1:
               var n = t.stateNode;
               if (typeof n.componentDidMount == "function") {
                  var i = t.return;
                  try {
                     n.componentDidMount();
                  } catch (l) {
                     ke(t, i, l);
                  }
               }
               var s = t.return;
               try {
                  ec(t);
               } catch (l) {
                  ke(t, s, l);
               }
               break;
            case 5:
               var o = t.return;
               try {
                  ec(t);
               } catch (l) {
                  ke(t, o, l);
               }
         }
      } catch (l) {
         ke(t, t.return, l);
      }
      if (t === e) {
         L = null;
         break;
      }
      var a = t.sibling;
      if (a !== null) {
         (a.return = t.return), (L = a);
         break;
      }
      L = t.return;
   }
}
var iw = Math.ceil,
   pa = br.ReactCurrentDispatcher,
   md = br.ReactCurrentOwner,
   jt = br.ReactCurrentBatchConfig,
   J = 0,
   Me = null,
   je = null,
   Ve = 0,
   mt = 0,
   ei = en(0),
   Re = 0,
   Ns = null,
   En = 0,
   Ya = 0,
   gd = 0,
   fs = null,
   ot = null,
   vd = 0,
   vi = 1 / 0,
   ur = null,
   ma = !1,
   nc = null,
   Wr = null,
   wo = !1,
   Ar = null,
   ga = 0,
   hs = 0,
   ic = null,
   Lo = -1,
   Ao = 0;
function nt() {
   return J & 6 ? Ce() : Lo !== -1 ? Lo : (Lo = Ce());
}
function Hr(e) {
   return e.mode & 1
      ? J & 2 && Ve !== 0
         ? Ve & -Ve
         : z1.transition !== null
         ? (Ao === 0 && (Ao = Cm()), Ao)
         : ((e = ie),
           e !== 0 ||
              ((e = window.event), (e = e === void 0 ? 16 : Rm(e.type))),
           e)
      : 1;
}
function Vt(e, t, r, n) {
   if (50 < hs) throw ((hs = 0), (ic = null), Error(O(185)));
   Vs(e, r, n),
      (!(J & 2) || e !== Me) &&
         (e === Me && (!(J & 2) && (Ya |= r), Re === 4 && Ir(e, Ve)),
         ft(e, n),
         r === 1 &&
            J === 0 &&
            !(t.mode & 1) &&
            ((vi = Ce() + 500), Ha && tn()));
}
function ft(e, t) {
   var r = e.callbackNode;
   zy(e, t);
   var n = Zo(e, e === Me ? Ve : 0);
   if (n === 0)
      r !== null && Sf(r), (e.callbackNode = null), (e.callbackPriority = 0);
   else if (((t = n & -n), e.callbackPriority !== t)) {
      if ((r != null && Sf(r), t === 1))
         e.tag === 0 ? U1(mh.bind(null, e)) : Jm(mh.bind(null, e)),
            L1(function () {
               !(J & 6) && tn();
            }),
            (r = null);
      else {
         switch (Em(n)) {
            case 1:
               r = qc;
               break;
            case 4:
               r = Sm;
               break;
            case 16:
               r = Xo;
               break;
            case 536870912:
               r = _m;
               break;
            default:
               r = Xo;
         }
         r = Yg(r, qg.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = r);
   }
}
function qg(e, t) {
   if (((Lo = -1), (Ao = 0), J & 6)) throw Error(O(327));
   var r = e.callbackNode;
   if (ui() && e.callbackNode !== r) return null;
   var n = Zo(e, e === Me ? Ve : 0);
   if (n === 0) return null;
   if (n & 30 || n & e.expiredLanes || t) t = va(e, n);
   else {
      t = n;
      var i = J;
      J |= 2;
      var s = Wg();
      (Me !== e || Ve !== t) && ((ur = null), (vi = Ce() + 500), xn(e, t));
      do
         try {
            aw();
            break;
         } catch (a) {
            Vg(e, a);
         }
      while (1);
      rd(),
         (pa.current = s),
         (J = i),
         je !== null ? (t = 0) : ((Me = null), (Ve = 0), (t = Re));
   }
   if (t !== 0) {
      if (
         (t === 2 && ((i = Du(e)), i !== 0 && ((n = i), (t = sc(e, i)))),
         t === 1)
      )
         throw ((r = Ns), xn(e, 0), Ir(e, n), ft(e, Ce()), r);
      if (t === 6) Ir(e, n);
      else {
         if (
            ((i = e.current.alternate),
            !(n & 30) &&
               !sw(i) &&
               ((t = va(e, n)),
               t === 2 && ((s = Du(e)), s !== 0 && ((n = s), (t = sc(e, s)))),
               t === 1))
         )
            throw ((r = Ns), xn(e, 0), Ir(e, n), ft(e, Ce()), r);
         switch (((e.finishedWork = i), (e.finishedLanes = n), t)) {
            case 0:
            case 1:
               throw Error(O(345));
            case 2:
               un(e, ot, ur);
               break;
            case 3:
               if (
                  (Ir(e, n),
                  (n & 130023424) === n && ((t = vd + 500 - Ce()), 10 < t))
               ) {
                  if (Zo(e, 0) !== 0) break;
                  if (((i = e.suspendedLanes), (i & n) !== n)) {
                     nt(), (e.pingedLanes |= e.suspendedLanes & i);
                     break;
                  }
                  e.timeoutHandle = Fu(un.bind(null, e, ot, ur), t);
                  break;
               }
               un(e, ot, ur);
               break;
            case 4:
               if ((Ir(e, n), (n & 4194240) === n)) break;
               for (t = e.eventTimes, i = -1; 0 < n; ) {
                  var o = 31 - qt(n);
                  (s = 1 << o), (o = t[o]), o > i && (i = o), (n &= ~s);
               }
               if (
                  ((n = i),
                  (n = Ce() - n),
                  (n =
                     (120 > n
                        ? 120
                        : 480 > n
                        ? 480
                        : 1080 > n
                        ? 1080
                        : 1920 > n
                        ? 1920
                        : 3e3 > n
                        ? 3e3
                        : 4320 > n
                        ? 4320
                        : 1960 * iw(n / 1960)) - n),
                  10 < n)
               ) {
                  e.timeoutHandle = Fu(un.bind(null, e, ot, ur), n);
                  break;
               }
               un(e, ot, ur);
               break;
            case 5:
               un(e, ot, ur);
               break;
            default:
               throw Error(O(329));
         }
      }
   }
   return ft(e, Ce()), e.callbackNode === r ? qg.bind(null, e) : null;
}
function sc(e, t) {
   var r = fs;
   return (
      e.current.memoizedState.isDehydrated && (xn(e, t).flags |= 256),
      (e = va(e, t)),
      e !== 2 && ((t = ot), (ot = r), t !== null && oc(t)),
      e
   );
}
function oc(e) {
   ot === null ? (ot = e) : ot.push.apply(ot, e);
}
function sw(e) {
   for (var t = e; ; ) {
      if (t.flags & 16384) {
         var r = t.updateQueue;
         if (r !== null && ((r = r.stores), r !== null))
            for (var n = 0; n < r.length; n++) {
               var i = r[n],
                  s = i.getSnapshot;
               i = i.value;
               try {
                  if (!Ht(s(), i)) return !1;
               } catch {
                  return !1;
               }
            }
      }
      if (((r = t.child), t.subtreeFlags & 16384 && r !== null))
         (r.return = t), (t = r);
      else {
         if (t === e) break;
         for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return !0;
            t = t.return;
         }
         (t.sibling.return = t.return), (t = t.sibling);
      }
   }
   return !0;
}
function Ir(e, t) {
   for (
      t &= ~gd,
         t &= ~Ya,
         e.suspendedLanes |= t,
         e.pingedLanes &= ~t,
         e = e.expirationTimes;
      0 < t;

   ) {
      var r = 31 - qt(t),
         n = 1 << r;
      (e[r] = -1), (t &= ~n);
   }
}
function mh(e) {
   if (J & 6) throw Error(O(327));
   ui();
   var t = Zo(e, 0);
   if (!(t & 1)) return ft(e, Ce()), null;
   var r = va(e, t);
   if (e.tag !== 0 && r === 2) {
      var n = Du(e);
      n !== 0 && ((t = n), (r = sc(e, n)));
   }
   if (r === 1) throw ((r = Ns), xn(e, 0), Ir(e, t), ft(e, Ce()), r);
   if (r === 6) throw Error(O(345));
   return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      un(e, ot, ur),
      ft(e, Ce()),
      null
   );
}
function yd(e, t) {
   var r = J;
   J |= 1;
   try {
      return e(t);
   } finally {
      (J = r), J === 0 && ((vi = Ce() + 500), Ha && tn());
   }
}
function Pn(e) {
   Ar !== null && Ar.tag === 0 && !(J & 6) && ui();
   var t = J;
   J |= 1;
   var r = jt.transition,
      n = ie;
   try {
      if (((jt.transition = null), (ie = 1), e)) return e();
   } finally {
      (ie = n), (jt.transition = r), (J = t), !(J & 6) && tn();
   }
}
function wd() {
   (mt = ei.current), pe(ei);
}
function xn(e, t) {
   (e.finishedWork = null), (e.finishedLanes = 0);
   var r = e.timeoutHandle;
   if ((r !== -1 && ((e.timeoutHandle = -1), N1(r)), je !== null))
      for (r = je.return; r !== null; ) {
         var n = r;
         switch ((Zc(n), n.tag)) {
            case 1:
               (n = n.type.childContextTypes), n != null && ia();
               break;
            case 3:
               mi(), pe(ct), pe(Ze), ld();
               break;
            case 5:
               ad(n);
               break;
            case 4:
               mi();
               break;
            case 13:
               pe(ve);
               break;
            case 19:
               pe(ve);
               break;
            case 10:
               nd(n.type._context);
               break;
            case 22:
            case 23:
               wd();
         }
         r = r.return;
      }
   if (
      ((Me = e),
      (je = e = Qr(e.current, null)),
      (Ve = mt = t),
      (Re = 0),
      (Ns = null),
      (gd = Ya = En = 0),
      (ot = fs = null),
      pn !== null)
   ) {
      for (t = 0; t < pn.length; t++)
         if (((r = pn[t]), (n = r.interleaved), n !== null)) {
            r.interleaved = null;
            var i = n.next,
               s = r.pending;
            if (s !== null) {
               var o = s.next;
               (s.next = i), (n.next = o);
            }
            r.pending = n;
         }
      pn = null;
   }
   return e;
}
function Vg(e, t) {
   do {
      var r = je;
      try {
         if ((rd(), (Io.current = ha), fa)) {
            for (var n = ye.memoizedState; n !== null; ) {
               var i = n.queue;
               i !== null && (i.pending = null), (n = n.next);
            }
            fa = !1;
         }
         if (
            ((Cn = 0),
            (Ne = Oe = ye = null),
            (cs = !1),
            (Rs = 0),
            (md.current = null),
            r === null || r.return === null)
         ) {
            (Re = 1), (Ns = t), (je = null);
            break;
         }
         e: {
            var s = e,
               o = r.return,
               a = r,
               l = t;
            if (
               ((t = Ve),
               (a.flags |= 32768),
               l !== null &&
                  typeof l == "object" &&
                  typeof l.then == "function")
            ) {
               var u = l,
                  c = a,
                  d = c.tag;
               if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                  var h = c.alternate;
                  h
                     ? ((c.updateQueue = h.updateQueue),
                       (c.memoizedState = h.memoizedState),
                       (c.lanes = h.lanes))
                     : ((c.updateQueue = null), (c.memoizedState = null));
               }
               var m = rh(o);
               if (m !== null) {
                  (m.flags &= -257),
                     nh(m, o, a, s, t),
                     m.mode & 1 && th(s, u, t),
                     (t = m),
                     (l = u);
                  var y = t.updateQueue;
                  if (y === null) {
                     var w = new Set();
                     w.add(l), (t.updateQueue = w);
                  } else y.add(l);
                  break e;
               } else {
                  if (!(t & 1)) {
                     th(s, u, t), xd();
                     break e;
                  }
                  l = Error(O(426));
               }
            } else if (ge && a.mode & 1) {
               var k = rh(o);
               if (k !== null) {
                  !(k.flags & 65536) && (k.flags |= 256),
                     nh(k, o, a, s, t),
                     ed(gi(l, a));
                  break e;
               }
            }
            (s = l = gi(l, a)),
               Re !== 4 && (Re = 2),
               fs === null ? (fs = [s]) : fs.push(s),
               (s = o);
            do {
               switch (s.tag) {
                  case 3:
                     (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                     var g = Pg(s, l, t);
                     Gf(s, g);
                     break e;
                  case 1:
                     a = l;
                     var p = s.type,
                        v = s.stateNode;
                     if (
                        !(s.flags & 128) &&
                        (typeof p.getDerivedStateFromError == "function" ||
                           (v !== null &&
                              typeof v.componentDidCatch == "function" &&
                              (Wr === null || !Wr.has(v))))
                     ) {
                        (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                        var b = Tg(s, a, t);
                        Gf(s, b);
                        break e;
                     }
               }
               s = s.return;
            } while (s !== null);
         }
         Qg(r);
      } catch (_) {
         (t = _), je === r && r !== null && (je = r = r.return);
         continue;
      }
      break;
   } while (1);
}
function Wg() {
   var e = pa.current;
   return (pa.current = ha), e === null ? ha : e;
}
function xd() {
   (Re === 0 || Re === 3 || Re === 2) && (Re = 4),
      Me === null || (!(En & 268435455) && !(Ya & 268435455)) || Ir(Me, Ve);
}
function va(e, t) {
   var r = J;
   J |= 2;
   var n = Wg();
   (Me !== e || Ve !== t) && ((ur = null), xn(e, t));
   do
      try {
         ow();
         break;
      } catch (i) {
         Vg(e, i);
      }
   while (1);
   if ((rd(), (J = r), (pa.current = n), je !== null)) throw Error(O(261));
   return (Me = null), (Ve = 0), Re;
}
function ow() {
   for (; je !== null; ) Hg(je);
}
function aw() {
   for (; je !== null && !Ry(); ) Hg(je);
}
function Hg(e) {
   var t = Kg(e.alternate, e, mt);
   (e.memoizedProps = e.pendingProps),
      t === null ? Qg(e) : (je = t),
      (md.current = null);
}
function Qg(e) {
   var t = e;
   do {
      var r = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
         if (((r = ew(r, t)), r !== null)) {
            (r.flags &= 32767), (je = r);
            return;
         }
         if (e !== null)
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
         else {
            (Re = 6), (je = null);
            return;
         }
      } else if (((r = Z1(r, t, mt)), r !== null)) {
         je = r;
         return;
      }
      if (((t = t.sibling), t !== null)) {
         je = t;
         return;
      }
      je = t = e;
   } while (t !== null);
   Re === 0 && (Re = 5);
}
function un(e, t, r) {
   var n = ie,
      i = jt.transition;
   try {
      (jt.transition = null), (ie = 1), lw(e, t, r, n);
   } finally {
      (jt.transition = i), (ie = n);
   }
   return null;
}
function lw(e, t, r, n) {
   do ui();
   while (Ar !== null);
   if (J & 6) throw Error(O(327));
   r = e.finishedWork;
   var i = e.finishedLanes;
   if (r === null) return null;
   if (((e.finishedWork = null), (e.finishedLanes = 0), r === e.current))
      throw Error(O(177));
   (e.callbackNode = null), (e.callbackPriority = 0);
   var s = r.lanes | r.childLanes;
   if (
      (By(e, s),
      e === Me && ((je = Me = null), (Ve = 0)),
      (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
         wo ||
         ((wo = !0),
         Yg(Xo, function () {
            return ui(), null;
         })),
      (s = (r.flags & 15990) !== 0),
      r.subtreeFlags & 15990 || s)
   ) {
      (s = jt.transition), (jt.transition = null);
      var o = ie;
      ie = 1;
      var a = J;
      (J |= 4),
         (md.current = null),
         rw(e, r),
         zg(r, e),
         T1(Au),
         (ea = !!Lu),
         (Au = Lu = null),
         (e.current = r),
         nw(r),
         Iy(),
         (J = a),
         (ie = o),
         (jt.transition = s);
   } else e.current = r;
   if (
      (wo && ((wo = !1), (Ar = e), (ga = i)),
      (s = e.pendingLanes),
      s === 0 && (Wr = null),
      Ly(r.stateNode),
      ft(e, Ce()),
      t !== null)
   )
      for (n = e.onRecoverableError, r = 0; r < t.length; r++)
         (i = t[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
   if (ma) throw ((ma = !1), (e = nc), (nc = null), e);
   return (
      ga & 1 && e.tag !== 0 && ui(),
      (s = e.pendingLanes),
      s & 1 ? (e === ic ? hs++ : ((hs = 0), (ic = e))) : (hs = 0),
      tn(),
      null
   );
}
function ui() {
   if (Ar !== null) {
      var e = Em(ga),
         t = jt.transition,
         r = ie;
      try {
         if (((jt.transition = null), (ie = 16 > e ? 16 : e), Ar === null))
            var n = !1;
         else {
            if (((e = Ar), (Ar = null), (ga = 0), J & 6)) throw Error(O(331));
            var i = J;
            for (J |= 4, L = e.current; L !== null; ) {
               var s = L,
                  o = s.child;
               if (L.flags & 16) {
                  var a = s.deletions;
                  if (a !== null) {
                     for (var l = 0; l < a.length; l++) {
                        var u = a[l];
                        for (L = u; L !== null; ) {
                           var c = L;
                           switch (c.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 ds(8, c, s);
                           }
                           var d = c.child;
                           if (d !== null) (d.return = c), (L = d);
                           else
                              for (; L !== null; ) {
                                 c = L;
                                 var h = c.sibling,
                                    m = c.return;
                                 if ((Mg(c), c === u)) {
                                    L = null;
                                    break;
                                 }
                                 if (h !== null) {
                                    (h.return = m), (L = h);
                                    break;
                                 }
                                 L = m;
                              }
                        }
                     }
                     var y = s.alternate;
                     if (y !== null) {
                        var w = y.child;
                        if (w !== null) {
                           y.child = null;
                           do {
                              var k = w.sibling;
                              (w.sibling = null), (w = k);
                           } while (w !== null);
                        }
                     }
                     L = s;
                  }
               }
               if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (L = o);
               else
                  e: for (; L !== null; ) {
                     if (((s = L), s.flags & 2048))
                        switch (s.tag) {
                           case 0:
                           case 11:
                           case 15:
                              ds(9, s, s.return);
                        }
                     var g = s.sibling;
                     if (g !== null) {
                        (g.return = s.return), (L = g);
                        break e;
                     }
                     L = s.return;
                  }
            }
            var p = e.current;
            for (L = p; L !== null; ) {
               o = L;
               var v = o.child;
               if (o.subtreeFlags & 2064 && v !== null) (v.return = o), (L = v);
               else
                  e: for (o = p; L !== null; ) {
                     if (((a = L), a.flags & 2048))
                        try {
                           switch (a.tag) {
                              case 0:
                              case 11:
                              case 15:
                                 Ka(9, a);
                           }
                        } catch (_) {
                           ke(a, a.return, _);
                        }
                     if (a === o) {
                        L = null;
                        break e;
                     }
                     var b = a.sibling;
                     if (b !== null) {
                        (b.return = a.return), (L = b);
                        break e;
                     }
                     L = a.return;
                  }
            }
            if (
               ((J = i),
               tn(),
               er && typeof er.onPostCommitFiberRoot == "function")
            )
               try {
                  er.onPostCommitFiberRoot(za, e);
               } catch {}
            n = !0;
         }
         return n;
      } finally {
         (ie = r), (jt.transition = t);
      }
   }
   return !1;
}
function gh(e, t, r) {
   (t = gi(r, t)),
      (t = Pg(e, t, 1)),
      (e = Vr(e, t, 1)),
      (t = nt()),
      e !== null && (Vs(e, 1, t), ft(e, t));
}
function ke(e, t, r) {
   if (e.tag === 3) gh(e, e, r);
   else
      for (; t !== null; ) {
         if (t.tag === 3) {
            gh(t, e, r);
            break;
         } else if (t.tag === 1) {
            var n = t.stateNode;
            if (
               typeof t.type.getDerivedStateFromError == "function" ||
               (typeof n.componentDidCatch == "function" &&
                  (Wr === null || !Wr.has(n)))
            ) {
               (e = gi(r, e)),
                  (e = Tg(t, e, 1)),
                  (t = Vr(t, e, 1)),
                  (e = nt()),
                  t !== null && (Vs(t, 1, e), ft(t, e));
               break;
            }
         }
         t = t.return;
      }
}
function uw(e, t, r) {
   var n = e.pingCache;
   n !== null && n.delete(t),
      (t = nt()),
      (e.pingedLanes |= e.suspendedLanes & r),
      Me === e &&
         (Ve & r) === r &&
         (Re === 4 || (Re === 3 && (Ve & 130023424) === Ve && 500 > Ce() - vd)
            ? xn(e, 0)
            : (gd |= r)),
      ft(e, t);
}
function Gg(e, t) {
   t === 0 &&
      (e.mode & 1
         ? ((t = lo), (lo <<= 1), !(lo & 130023424) && (lo = 4194304))
         : (t = 1));
   var r = nt();
   (e = yr(e, t)), e !== null && (Vs(e, t, r), ft(e, r));
}
function cw(e) {
   var t = e.memoizedState,
      r = 0;
   t !== null && (r = t.retryLane), Gg(e, r);
}
function dw(e, t) {
   var r = 0;
   switch (e.tag) {
      case 13:
         var n = e.stateNode,
            i = e.memoizedState;
         i !== null && (r = i.retryLane);
         break;
      case 19:
         n = e.stateNode;
         break;
      default:
         throw Error(O(314));
   }
   n !== null && n.delete(t), Gg(e, r);
}
var Kg;
Kg = function (e, t, r) {
   if (e !== null)
      if (e.memoizedProps !== t.pendingProps || ct.current) at = !0;
      else {
         if (!(e.lanes & r) && !(t.flags & 128)) return (at = !1), X1(e, t, r);
         at = !!(e.flags & 131072);
      }
   else (at = !1), ge && t.flags & 1048576 && Xm(t, aa, t.index);
   switch (((t.lanes = 0), t.tag)) {
      case 2:
         var n = t.type;
         No(e, t), (e = t.pendingProps);
         var i = fi(t, Ze.current);
         li(t, r), (i = cd(null, t, n, e, i, r));
         var s = dd();
         return (
            (t.flags |= 1),
            typeof i == "object" &&
            i !== null &&
            typeof i.render == "function" &&
            i.$$typeof === void 0
               ? ((t.tag = 1),
                 (t.memoizedState = null),
                 (t.updateQueue = null),
                 dt(n) ? ((s = !0), sa(t)) : (s = !1),
                 (t.memoizedState =
                    i.state !== null && i.state !== void 0 ? i.state : null),
                 sd(t),
                 (i.updater = Qa),
                 (t.stateNode = i),
                 (i._reactInternals = t),
                 Hu(t, n, e, r),
                 (t = Ku(null, t, n, !0, s, r)))
               : ((t.tag = 0),
                 ge && s && Xc(t),
                 tt(null, t, i, r),
                 (t = t.child)),
            t
         );
      case 16:
         n = t.elementType;
         e: {
            switch (
               (No(e, t),
               (e = t.pendingProps),
               (i = n._init),
               (n = i(n._payload)),
               (t.type = n),
               (i = t.tag = hw(n)),
               (e = At(n, e)),
               i)
            ) {
               case 0:
                  t = Gu(null, t, n, e, r);
                  break e;
               case 1:
                  t = oh(null, t, n, e, r);
                  break e;
               case 11:
                  t = ih(null, t, n, e, r);
                  break e;
               case 14:
                  t = sh(null, t, n, At(n.type, e), r);
                  break e;
            }
            throw Error(O(306, n, ""));
         }
         return t;
      case 0:
         return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : At(n, i)),
            Gu(e, t, n, i, r)
         );
      case 1:
         return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : At(n, i)),
            oh(e, t, n, i, r)
         );
      case 3:
         e: {
            if ((Rg(t), e === null)) throw Error(O(387));
            (n = t.pendingProps),
               (s = t.memoizedState),
               (i = s.element),
               rg(e, t),
               ca(t, n, null, r);
            var o = t.memoizedState;
            if (((n = o.element), s.isDehydrated))
               if (
                  ((s = {
                     element: n,
                     isDehydrated: !1,
                     cache: o.cache,
                     pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                     transitions: o.transitions,
                  }),
                  (t.updateQueue.baseState = s),
                  (t.memoizedState = s),
                  t.flags & 256)
               ) {
                  (i = gi(Error(O(423)), t)), (t = ah(e, t, n, r, i));
                  break e;
               } else if (n !== i) {
                  (i = gi(Error(O(424)), t)), (t = ah(e, t, n, r, i));
                  break e;
               } else
                  for (
                     gt = qr(t.stateNode.containerInfo.firstChild),
                        yt = t,
                        ge = !0,
                        Ut = null,
                        r = og(t, null, n, r),
                        t.child = r;
                     r;

                  )
                     (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
            else {
               if ((hi(), n === i)) {
                  t = wr(e, t, r);
                  break e;
               }
               tt(e, t, n, r);
            }
            t = t.child;
         }
         return t;
      case 5:
         return (
            ag(t),
            e === null && qu(t),
            (n = t.type),
            (i = t.pendingProps),
            (s = e !== null ? e.memoizedProps : null),
            (o = i.children),
            Mu(n, i) ? (o = null) : s !== null && Mu(n, s) && (t.flags |= 32),
            Dg(e, t),
            tt(e, t, o, r),
            t.child
         );
      case 6:
         return e === null && qu(t), null;
      case 13:
         return Ig(e, t, r);
      case 4:
         return (
            od(t, t.stateNode.containerInfo),
            (n = t.pendingProps),
            e === null ? (t.child = pi(t, null, n, r)) : tt(e, t, n, r),
            t.child
         );
      case 11:
         return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : At(n, i)),
            ih(e, t, n, i, r)
         );
      case 7:
         return tt(e, t, t.pendingProps, r), t.child;
      case 8:
         return tt(e, t, t.pendingProps.children, r), t.child;
      case 12:
         return tt(e, t, t.pendingProps.children, r), t.child;
      case 10:
         e: {
            if (
               ((n = t.type._context),
               (i = t.pendingProps),
               (s = t.memoizedProps),
               (o = i.value),
               ce(la, n._currentValue),
               (n._currentValue = o),
               s !== null)
            )
               if (Ht(s.value, o)) {
                  if (s.children === i.children && !ct.current) {
                     t = wr(e, t, r);
                     break e;
                  }
               } else
                  for (
                     s = t.child, s !== null && (s.return = t);
                     s !== null;

                  ) {
                     var a = s.dependencies;
                     if (a !== null) {
                        o = s.child;
                        for (var l = a.firstContext; l !== null; ) {
                           if (l.context === n) {
                              if (s.tag === 1) {
                                 (l = mr(-1, r & -r)), (l.tag = 2);
                                 var u = s.updateQueue;
                                 if (u !== null) {
                                    u = u.shared;
                                    var c = u.pending;
                                    c === null
                                       ? (l.next = l)
                                       : ((l.next = c.next), (c.next = l)),
                                       (u.pending = l);
                                 }
                              }
                              (s.lanes |= r),
                                 (l = s.alternate),
                                 l !== null && (l.lanes |= r),
                                 Vu(s.return, r, t),
                                 (a.lanes |= r);
                              break;
                           }
                           l = l.next;
                        }
                     } else if (s.tag === 10)
                        o = s.type === t.type ? null : s.child;
                     else if (s.tag === 18) {
                        if (((o = s.return), o === null)) throw Error(O(341));
                        (o.lanes |= r),
                           (a = o.alternate),
                           a !== null && (a.lanes |= r),
                           Vu(o, r, t),
                           (o = s.sibling);
                     } else o = s.child;
                     if (o !== null) o.return = s;
                     else
                        for (o = s; o !== null; ) {
                           if (o === t) {
                              o = null;
                              break;
                           }
                           if (((s = o.sibling), s !== null)) {
                              (s.return = o.return), (o = s);
                              break;
                           }
                           o = o.return;
                        }
                     s = o;
                  }
            tt(e, t, i.children, r), (t = t.child);
         }
         return t;
      case 9:
         return (
            (i = t.type),
            (n = t.pendingProps.children),
            li(t, r),
            (i = Ot(i)),
            (n = n(i)),
            (t.flags |= 1),
            tt(e, t, n, r),
            t.child
         );
      case 14:
         return (
            (n = t.type),
            (i = At(n, t.pendingProps)),
            (i = At(n.type, i)),
            sh(e, t, n, i, r)
         );
      case 15:
         return jg(e, t, t.type, t.pendingProps, r);
      case 17:
         return (
            (n = t.type),
            (i = t.pendingProps),
            (i = t.elementType === n ? i : At(n, i)),
            No(e, t),
            (t.tag = 1),
            dt(n) ? ((e = !0), sa(t)) : (e = !1),
            li(t, r),
            ig(t, n, i),
            Hu(t, n, i, r),
            Ku(null, t, n, !0, e, r)
         );
      case 19:
         return $g(e, t, r);
      case 22:
         return Og(e, t, r);
   }
   throw Error(O(156, t.tag));
};
function Yg(e, t) {
   return km(e, t);
}
function fw(e, t, r, n) {
   (this.tag = e),
      (this.key = r),
      (this.sibling =
         this.child =
         this.return =
         this.stateNode =
         this.type =
         this.elementType =
            null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
         this.memoizedState =
         this.updateQueue =
         this.memoizedProps =
            null),
      (this.mode = n),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
}
function Tt(e, t, r, n) {
   return new fw(e, t, r, n);
}
function bd(e) {
   return (e = e.prototype), !(!e || !e.isReactComponent);
}
function hw(e) {
   if (typeof e == "function") return bd(e) ? 1 : 0;
   if (e != null) {
      if (((e = e.$$typeof), e === Uc)) return 11;
      if (e === zc) return 14;
   }
   return 2;
}
function Qr(e, t) {
   var r = e.alternate;
   return (
      r === null
         ? ((r = Tt(e.tag, t, e.key, e.mode)),
           (r.elementType = e.elementType),
           (r.type = e.type),
           (r.stateNode = e.stateNode),
           (r.alternate = e),
           (e.alternate = r))
         : ((r.pendingProps = t),
           (r.type = e.type),
           (r.flags = 0),
           (r.subtreeFlags = 0),
           (r.deletions = null)),
      (r.flags = e.flags & 14680064),
      (r.childLanes = e.childLanes),
      (r.lanes = e.lanes),
      (r.child = e.child),
      (r.memoizedProps = e.memoizedProps),
      (r.memoizedState = e.memoizedState),
      (r.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (r.dependencies =
         t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (r.sibling = e.sibling),
      (r.index = e.index),
      (r.ref = e.ref),
      r
   );
}
function Mo(e, t, r, n, i, s) {
   var o = 2;
   if (((n = e), typeof e == "function")) bd(e) && (o = 1);
   else if (typeof e == "string") o = 5;
   else
      e: switch (e) {
         case Vn:
            return bn(r.children, i, s, t);
         case Fc:
            (o = 8), (i |= 8);
            break;
         case gu:
            return (
               (e = Tt(12, r, t, i | 2)), (e.elementType = gu), (e.lanes = s), e
            );
         case vu:
            return (
               (e = Tt(13, r, t, i)), (e.elementType = vu), (e.lanes = s), e
            );
         case yu:
            return (
               (e = Tt(19, r, t, i)), (e.elementType = yu), (e.lanes = s), e
            );
         case sm:
            return Ja(r, i, s, t);
         default:
            if (typeof e == "object" && e !== null)
               switch (e.$$typeof) {
                  case nm:
                     o = 10;
                     break e;
                  case im:
                     o = 9;
                     break e;
                  case Uc:
                     o = 11;
                     break e;
                  case zc:
                     o = 14;
                     break e;
                  case Tr:
                     (o = 16), (n = null);
                     break e;
               }
            throw Error(O(130, e == null ? e : typeof e, ""));
      }
   return (
      (t = Tt(o, r, t, i)), (t.elementType = e), (t.type = n), (t.lanes = s), t
   );
}
function bn(e, t, r, n) {
   return (e = Tt(7, e, n, t)), (e.lanes = r), e;
}
function Ja(e, t, r, n) {
   return (
      (e = Tt(22, e, n, t)),
      (e.elementType = sm),
      (e.lanes = r),
      (e.stateNode = { isHidden: !1 }),
      e
   );
}
function zl(e, t, r) {
   return (e = Tt(6, e, null, t)), (e.lanes = r), e;
}
function Bl(e, t, r) {
   return (
      (t = Tt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = r),
      (t.stateNode = {
         containerInfo: e.containerInfo,
         pendingChildren: null,
         implementation: e.implementation,
      }),
      t
   );
}
function pw(e, t, r, n, i) {
   (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
         this.pingCache =
         this.current =
         this.pendingChildren =
            null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = kl(0)),
      (this.expirationTimes = kl(-1)),
      (this.entangledLanes =
         this.finishedLanes =
         this.mutableReadLanes =
         this.expiredLanes =
         this.pingedLanes =
         this.suspendedLanes =
         this.pendingLanes =
            0),
      (this.entanglements = kl(0)),
      (this.identifierPrefix = n),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
}
function kd(e, t, r, n, i, s, o, a, l) {
   return (
      (e = new pw(e, t, r, a, l)),
      t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
      (s = Tt(3, null, null, t)),
      (e.current = s),
      (s.stateNode = e),
      (s.memoizedState = {
         element: n,
         isDehydrated: r,
         cache: null,
         transitions: null,
         pendingSuspenseBoundaries: null,
      }),
      sd(s),
      e
   );
}
function mw(e, t, r) {
   var n =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
   return {
      $$typeof: qn,
      key: n == null ? null : "" + n,
      children: e,
      containerInfo: t,
      implementation: r,
   };
}
function Jg(e) {
   if (!e) return Xr;
   e = e._reactInternals;
   e: {
      if (jn(e) !== e || e.tag !== 1) throw Error(O(170));
      var t = e;
      do {
         switch (t.tag) {
            case 3:
               t = t.stateNode.context;
               break e;
            case 1:
               if (dt(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
               }
         }
         t = t.return;
      } while (t !== null);
      throw Error(O(171));
   }
   if (e.tag === 1) {
      var r = e.type;
      if (dt(r)) return Ym(e, r, t);
   }
   return t;
}
function Xg(e, t, r, n, i, s, o, a, l) {
   return (
      (e = kd(r, n, !0, e, i, s, o, a, l)),
      (e.context = Jg(null)),
      (r = e.current),
      (n = nt()),
      (i = Hr(r)),
      (s = mr(n, i)),
      (s.callback = t ?? null),
      Vr(r, s, i),
      (e.current.lanes = i),
      Vs(e, i, n),
      ft(e, n),
      e
   );
}
function Xa(e, t, r, n) {
   var i = t.current,
      s = nt(),
      o = Hr(i);
   return (
      (r = Jg(r)),
      t.context === null ? (t.context = r) : (t.pendingContext = r),
      (t = mr(s, o)),
      (t.payload = { element: e }),
      (n = n === void 0 ? null : n),
      n !== null && (t.callback = n),
      (e = Vr(i, t, o)),
      e !== null && (Vt(e, i, o, s), Ro(e, i, o)),
      o
   );
}
function ya(e) {
   if (((e = e.current), !e.child)) return null;
   switch (e.child.tag) {
      case 5:
         return e.child.stateNode;
      default:
         return e.child.stateNode;
   }
}
function vh(e, t) {
   if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < t ? r : t;
   }
}
function Sd(e, t) {
   vh(e, t), (e = e.alternate) && vh(e, t);
}
function gw() {
   return null;
}
var Zg =
   typeof reportError == "function"
      ? reportError
      : function (e) {
           console.error(e);
        };
function _d(e) {
   this._internalRoot = e;
}
Za.prototype.render = _d.prototype.render = function (e) {
   var t = this._internalRoot;
   if (t === null) throw Error(O(409));
   Xa(e, t, null, null);
};
Za.prototype.unmount = _d.prototype.unmount = function () {
   var e = this._internalRoot;
   if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pn(function () {
         Xa(null, e, null, null);
      }),
         (t[vr] = null);
   }
};
function Za(e) {
   this._internalRoot = e;
}
Za.prototype.unstable_scheduleHydration = function (e) {
   if (e) {
      var t = jm();
      e = { blockedOn: null, target: e, priority: t };
      for (var r = 0; r < Rr.length && t !== 0 && t < Rr[r].priority; r++);
      Rr.splice(r, 0, e), r === 0 && Dm(e);
   }
};
function Cd(e) {
   return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function el(e) {
   return !(
      !e ||
      (e.nodeType !== 1 &&
         e.nodeType !== 9 &&
         e.nodeType !== 11 &&
         (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
   );
}
function yh() {}
function vw(e, t, r, n, i) {
   if (i) {
      if (typeof n == "function") {
         var s = n;
         n = function () {
            var u = ya(o);
            s.call(u);
         };
      }
      var o = Xg(t, n, e, 0, null, !1, !1, "", yh);
      return (
         (e._reactRootContainer = o),
         (e[vr] = o.current),
         Ps(e.nodeType === 8 ? e.parentNode : e),
         Pn(),
         o
      );
   }
   for (; (i = e.lastChild); ) e.removeChild(i);
   if (typeof n == "function") {
      var a = n;
      n = function () {
         var u = ya(l);
         a.call(u);
      };
   }
   var l = kd(e, 0, !1, null, null, !1, !1, "", yh);
   return (
      (e._reactRootContainer = l),
      (e[vr] = l.current),
      Ps(e.nodeType === 8 ? e.parentNode : e),
      Pn(function () {
         Xa(t, l, r, n);
      }),
      l
   );
}
function tl(e, t, r, n, i) {
   var s = r._reactRootContainer;
   if (s) {
      var o = s;
      if (typeof i == "function") {
         var a = i;
         i = function () {
            var l = ya(o);
            a.call(l);
         };
      }
      Xa(t, o, e, i);
   } else o = vw(r, t, e, i, n);
   return ya(o);
}
Pm = function (e) {
   switch (e.tag) {
      case 3:
         var t = e.stateNode;
         if (t.current.memoizedState.isDehydrated) {
            var r = Zi(t.pendingLanes);
            r !== 0 &&
               (Vc(t, r | 1),
               ft(t, Ce()),
               !(J & 6) && ((vi = Ce() + 500), tn()));
         }
         break;
      case 13:
         Pn(function () {
            var n = yr(e, 1);
            if (n !== null) {
               var i = nt();
               Vt(n, e, 1, i);
            }
         }),
            Sd(e, 1);
   }
};
Wc = function (e) {
   if (e.tag === 13) {
      var t = yr(e, 134217728);
      if (t !== null) {
         var r = nt();
         Vt(t, e, 134217728, r);
      }
      Sd(e, 134217728);
   }
};
Tm = function (e) {
   if (e.tag === 13) {
      var t = Hr(e),
         r = yr(e, t);
      if (r !== null) {
         var n = nt();
         Vt(r, e, t, n);
      }
      Sd(e, t);
   }
};
jm = function () {
   return ie;
};
Om = function (e, t) {
   var r = ie;
   try {
      return (ie = e), t();
   } finally {
      ie = r;
   }
};
Tu = function (e, t, r) {
   switch (t) {
      case "input":
         if ((bu(e, r), (t = r.name), r.type === "radio" && t != null)) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (
               r = r.querySelectorAll(
                  "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
               ),
                  t = 0;
               t < r.length;
               t++
            ) {
               var n = r[t];
               if (n !== e && n.form === e.form) {
                  var i = Wa(n);
                  if (!i) throw Error(O(90));
                  am(n), bu(n, i);
               }
            }
         }
         break;
      case "textarea":
         um(e, r);
         break;
      case "select":
         (t = r.value), t != null && ii(e, !!r.multiple, t, !1);
   }
};
gm = yd;
vm = Pn;
var yw = { usingClientEntryPoint: !1, Events: [Hs, Gn, Wa, pm, mm, yd] },
   Bi = {
      findFiberByHostInstance: hn,
      bundleType: 0,
      version: "18.2.0",
      rendererPackageName: "react-dom",
   },
   ww = {
      bundleType: Bi.bundleType,
      version: Bi.version,
      rendererPackageName: Bi.rendererPackageName,
      rendererConfig: Bi.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: br.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
         return (e = xm(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Bi.findFiberByHostInstance || gw,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
   };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
   var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
   if (!xo.isDisabled && xo.supportsFiber)
      try {
         (za = xo.inject(ww)), (er = xo);
      } catch {}
}
bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = yw;
bt.createPortal = function (e, t) {
   var r =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
   if (!Cd(t)) throw Error(O(200));
   return mw(e, t, null, r);
};
bt.createRoot = function (e, t) {
   if (!Cd(e)) throw Error(O(299));
   var r = !1,
      n = "",
      i = Zg;
   return (
      t != null &&
         (t.unstable_strictMode === !0 && (r = !0),
         t.identifierPrefix !== void 0 && (n = t.identifierPrefix),
         t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
      (t = kd(e, 1, !1, null, null, r, !1, n, i)),
      (e[vr] = t.current),
      Ps(e.nodeType === 8 ? e.parentNode : e),
      new _d(t)
   );
};
bt.findDOMNode = function (e) {
   if (e == null) return null;
   if (e.nodeType === 1) return e;
   var t = e._reactInternals;
   if (t === void 0)
      throw typeof e.render == "function"
         ? Error(O(188))
         : ((e = Object.keys(e).join(",")), Error(O(268, e)));
   return (e = xm(t)), (e = e === null ? null : e.stateNode), e;
};
bt.flushSync = function (e) {
   return Pn(e);
};
bt.hydrate = function (e, t, r) {
   if (!el(t)) throw Error(O(200));
   return tl(null, e, t, !0, r);
};
bt.hydrateRoot = function (e, t, r) {
   if (!Cd(e)) throw Error(O(405));
   var n = (r != null && r.hydratedSources) || null,
      i = !1,
      s = "",
      o = Zg;
   if (
      (r != null &&
         (r.unstable_strictMode === !0 && (i = !0),
         r.identifierPrefix !== void 0 && (s = r.identifierPrefix),
         r.onRecoverableError !== void 0 && (o = r.onRecoverableError)),
      (t = Xg(t, null, e, 1, r ?? null, i, !1, s, o)),
      (e[vr] = t.current),
      Ps(e),
      n)
   )
      for (e = 0; e < n.length; e++)
         (r = n[e]),
            (i = r._getVersion),
            (i = i(r._source)),
            t.mutableSourceEagerHydrationData == null
               ? (t.mutableSourceEagerHydrationData = [r, i])
               : t.mutableSourceEagerHydrationData.push(r, i);
   return new Za(t);
};
bt.render = function (e, t, r) {
   if (!el(t)) throw Error(O(200));
   return tl(null, e, t, !1, r);
};
bt.unmountComponentAtNode = function (e) {
   if (!el(e)) throw Error(O(40));
   return e._reactRootContainer
      ? (Pn(function () {
           tl(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[vr] = null);
           });
        }),
        !0)
      : !1;
};
bt.unstable_batchedUpdates = yd;
bt.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
   if (!el(r)) throw Error(O(200));
   if (e == null || e._reactInternals === void 0) throw Error(O(38));
   return tl(e, t, r, !1, n);
};
bt.version = "18.2.0-next-9e3b772b8-20220608";
function ev() {
   if (
      !(
         typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
         typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
   )
      try {
         __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ev);
      } catch (e) {
         console.error(e);
      }
}
ev(), (Xp.exports = bt);
var Ed = Xp.exports,
   wh = Ed;
(pu.createRoot = wh.createRoot), (pu.hydrateRoot = wh.hydrateRoot);
/**
 * @remix-run/router v1.9.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ls() {
   return (
      (Ls = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var r = arguments[t];
                 for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
           }),
      Ls.apply(this, arguments)
   );
}
var Mr;
(function (e) {
   (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mr || (Mr = {}));
const xh = "popstate";
function xw(e) {
   e === void 0 && (e = {});
   function t(n, i) {
      let { pathname: s, search: o, hash: a } = n.location;
      return ac(
         "",
         { pathname: s, search: o, hash: a },
         (i.state && i.state.usr) || null,
         (i.state && i.state.key) || "default"
      );
   }
   function r(n, i) {
      return typeof i == "string" ? i : wa(i);
   }
   return kw(t, r, null, e);
}
function Ee(e, t) {
   if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Pd(e, t) {
   if (!e) {
      typeof console < "u" && console.warn(t);
      try {
         throw new Error(t);
      } catch {}
   }
}
function bw() {
   return Math.random().toString(36).substr(2, 8);
}
function bh(e, t) {
   return { usr: e.state, key: e.key, idx: t };
}
function ac(e, t, r, n) {
   return (
      r === void 0 && (r = null),
      Ls(
         {
            pathname: typeof e == "string" ? e : e.pathname,
            search: "",
            hash: "",
         },
         typeof t == "string" ? Ti(t) : t,
         { state: r, key: (t && t.key) || n || bw() }
      )
   );
}
function wa(e) {
   let { pathname: t = "/", search: r = "", hash: n = "" } = e;
   return (
      r && r !== "?" && (t += r.charAt(0) === "?" ? r : "?" + r),
      n && n !== "#" && (t += n.charAt(0) === "#" ? n : "#" + n),
      t
   );
}
function Ti(e) {
   let t = {};
   if (e) {
      let r = e.indexOf("#");
      r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
      let n = e.indexOf("?");
      n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
         e && (t.pathname = e);
   }
   return t;
}
function kw(e, t, r, n) {
   n === void 0 && (n = {});
   let { window: i = document.defaultView, v5Compat: s = !1 } = n,
      o = i.history,
      a = Mr.Pop,
      l = null,
      u = c();
   u == null && ((u = 0), o.replaceState(Ls({}, o.state, { idx: u }), ""));
   function c() {
      return (o.state || { idx: null }).idx;
   }
   function d() {
      a = Mr.Pop;
      let k = c(),
         g = k == null ? null : k - u;
      (u = k), l && l({ action: a, location: w.location, delta: g });
   }
   function h(k, g) {
      a = Mr.Push;
      let p = ac(w.location, k, g);
      r && r(p, k), (u = c() + 1);
      let v = bh(p, u),
         b = w.createHref(p);
      try {
         o.pushState(v, "", b);
      } catch (_) {
         if (_ instanceof DOMException && _.name === "DataCloneError") throw _;
         i.location.assign(b);
      }
      s && l && l({ action: a, location: w.location, delta: 1 });
   }
   function m(k, g) {
      a = Mr.Replace;
      let p = ac(w.location, k, g);
      r && r(p, k), (u = c());
      let v = bh(p, u),
         b = w.createHref(p);
      o.replaceState(v, "", b),
         s && l && l({ action: a, location: w.location, delta: 0 });
   }
   function y(k) {
      let g =
            i.location.origin !== "null" ? i.location.origin : i.location.href,
         p = typeof k == "string" ? k : wa(k);
      return (
         Ee(
            g,
            "No window.location.(origin|href) available to create URL for href: " +
               p
         ),
         new URL(p, g)
      );
   }
   let w = {
      get action() {
         return a;
      },
      get location() {
         return e(i, o);
      },
      listen(k) {
         if (l) throw new Error("A history only accepts one active listener");
         return (
            i.addEventListener(xh, d),
            (l = k),
            () => {
               i.removeEventListener(xh, d), (l = null);
            }
         );
      },
      createHref(k) {
         return t(i, k);
      },
      createURL: y,
      encodeLocation(k) {
         let g = y(k);
         return { pathname: g.pathname, search: g.search, hash: g.hash };
      },
      push: h,
      replace: m,
      go(k) {
         return o.go(k);
      },
   };
   return w;
}
var kh;
(function (e) {
   (e.data = "data"),
      (e.deferred = "deferred"),
      (e.redirect = "redirect"),
      (e.error = "error");
})(kh || (kh = {}));
function Sw(e, t, r) {
   r === void 0 && (r = "/");
   let n = typeof t == "string" ? Ti(t) : t,
      i = Td(n.pathname || "/", r);
   if (i == null) return null;
   let s = tv(e);
   _w(s);
   let o = null;
   for (let a = 0; o == null && a < s.length; ++a) o = Iw(s[a], Lw(i));
   return o;
}
function tv(e, t, r, n) {
   t === void 0 && (t = []), r === void 0 && (r = []), n === void 0 && (n = "");
   let i = (s, o, a) => {
      let l = {
         relativePath: a === void 0 ? s.path || "" : a,
         caseSensitive: s.caseSensitive === !0,
         childrenIndex: o,
         route: s,
      };
      l.relativePath.startsWith("/") &&
         (Ee(
            l.relativePath.startsWith(n),
            'Absolute route path "' +
               l.relativePath +
               '" nested under path ' +
               ('"' + n + '" is not valid. An absolute child route path ') +
               "must start with the combined path of all its parent routes."
         ),
         (l.relativePath = l.relativePath.slice(n.length)));
      let u = Gr([n, l.relativePath]),
         c = r.concat(l);
      s.children &&
         s.children.length > 0 &&
         (Ee(
            s.index !== !0,
            "Index routes must not have child routes. Please remove " +
               ('all child routes from route path "' + u + '".')
         ),
         tv(s.children, t, c, u)),
         !(s.path == null && !s.index) &&
            t.push({ path: u, score: Dw(u, s.index), routesMeta: c });
   };
   return (
      e.forEach((s, o) => {
         var a;
         if (s.path === "" || !((a = s.path) != null && a.includes("?")))
            i(s, o);
         else for (let l of rv(s.path)) i(s, o, l);
      }),
      t
   );
}
function rv(e) {
   let t = e.split("/");
   if (t.length === 0) return [];
   let [r, ...n] = t,
      i = r.endsWith("?"),
      s = r.replace(/\?$/, "");
   if (n.length === 0) return i ? [s, ""] : [s];
   let o = rv(n.join("/")),
      a = [];
   return (
      a.push(...o.map((l) => (l === "" ? s : [s, l].join("/")))),
      i && a.push(...o),
      a.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
   );
}
function _w(e) {
   e.sort((t, r) =>
      t.score !== r.score
         ? r.score - t.score
         : Rw(
              t.routesMeta.map((n) => n.childrenIndex),
              r.routesMeta.map((n) => n.childrenIndex)
           )
   );
}
const Cw = /^:\w+$/,
   Ew = 3,
   Pw = 2,
   Tw = 1,
   jw = 10,
   Ow = -2,
   Sh = (e) => e === "*";
function Dw(e, t) {
   let r = e.split("/"),
      n = r.length;
   return (
      r.some(Sh) && (n += Ow),
      t && (n += Pw),
      r
         .filter((i) => !Sh(i))
         .reduce((i, s) => i + (Cw.test(s) ? Ew : s === "" ? Tw : jw), n)
   );
}
function Rw(e, t) {
   return e.length === t.length && e.slice(0, -1).every((n, i) => n === t[i])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
}
function Iw(e, t) {
   let { routesMeta: r } = e,
      n = {},
      i = "/",
      s = [];
   for (let o = 0; o < r.length; ++o) {
      let a = r[o],
         l = o === r.length - 1,
         u = i === "/" ? t : t.slice(i.length) || "/",
         c = $w(
            { path: a.relativePath, caseSensitive: a.caseSensitive, end: l },
            u
         );
      if (!c) return null;
      Object.assign(n, c.params);
      let d = a.route;
      s.push({
         params: n,
         pathname: Gr([i, c.pathname]),
         pathnameBase: Uw(Gr([i, c.pathnameBase])),
         route: d,
      }),
         c.pathnameBase !== "/" && (i = Gr([i, c.pathnameBase]));
   }
   return s;
}
function $w(e, t) {
   typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
   let [r, n] = Nw(e.path, e.caseSensitive, e.end),
      i = t.match(r);
   if (!i) return null;
   let s = i[0],
      o = s.replace(/(.)\/+$/, "$1"),
      a = i.slice(1);
   return {
      params: n.reduce((u, c, d) => {
         if (c === "*") {
            let h = a[d] || "";
            o = s.slice(0, s.length - h.length).replace(/(.)\/+$/, "$1");
         }
         return (u[c] = Aw(a[d] || "", c)), u;
      }, {}),
      pathname: s,
      pathnameBase: o,
      pattern: e,
   };
}
function Nw(e, t, r) {
   t === void 0 && (t = !1),
      r === void 0 && (r = !0),
      Pd(
         e === "*" || !e.endsWith("*") || e.endsWith("/*"),
         'Route path "' +
            e +
            '" will be treated as if it were ' +
            ('"' +
               e.replace(/\*$/, "/*") +
               '" because the `*` character must ') +
            "always follow a `/` in the pattern. To get rid of this warning, " +
            ('please change the route path to "' +
               e.replace(/\*$/, "/*") +
               '".')
      );
   let n = [],
      i =
         "^" +
         e
            .replace(/\/*\*?$/, "")
            .replace(/^\/*/, "/")
            .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
            .replace(/\/:(\w+)/g, (o, a) => (n.push(a), "/([^\\/]+)"));
   return (
      e.endsWith("*")
         ? (n.push("*"),
           (i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
         : r
         ? (i += "\\/*$")
         : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"),
      [new RegExp(i, t ? void 0 : "i"), n]
   );
}
function Lw(e) {
   try {
      return decodeURI(e);
   } catch (t) {
      return (
         Pd(
            !1,
            'The URL path "' +
               e +
               '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
               ("encoding (" + t + ").")
         ),
         e
      );
   }
}
function Aw(e, t) {
   try {
      return decodeURIComponent(e);
   } catch (r) {
      return (
         Pd(
            !1,
            'The value for the URL param "' +
               t +
               '" will not be decoded because' +
               (' the string "' +
                  e +
                  '" is a malformed URL segment. This is probably') +
               (" due to a bad percent encoding (" + r + ").")
         ),
         e
      );
   }
}
function Td(e, t) {
   if (t === "/") return e;
   if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
   let r = t.endsWith("/") ? t.length - 1 : t.length,
      n = e.charAt(r);
   return n && n !== "/" ? null : e.slice(r) || "/";
}
function Mw(e, t) {
   t === void 0 && (t = "/");
   let {
      pathname: r,
      search: n = "",
      hash: i = "",
   } = typeof e == "string" ? Ti(e) : e;
   return {
      pathname: r ? (r.startsWith("/") ? r : Fw(r, t)) : t,
      search: zw(n),
      hash: Bw(i),
   };
}
function Fw(e, t) {
   let r = t.replace(/\/+$/, "").split("/");
   return (
      e.split("/").forEach((i) => {
         i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
      }),
      r.length > 1 ? r.join("/") : "/"
   );
}
function ql(e, t, r, n) {
   return (
      "Cannot include a '" +
      e +
      "' character in a manually specified " +
      ("`to." +
         t +
         "` field [" +
         JSON.stringify(n) +
         "].  Please separate it out to the ") +
      ("`to." +
         r +
         "` field. Alternatively you may provide the full path as ") +
      'a string in <Link to="..."> and the router will parse it for you.'
   );
}
function jd(e) {
   return e.filter(
      (t, r) => r === 0 || (t.route.path && t.route.path.length > 0)
   );
}
function Od(e, t, r, n) {
   n === void 0 && (n = !1);
   let i;
   typeof e == "string"
      ? (i = Ti(e))
      : ((i = Ls({}, e)),
        Ee(
           !i.pathname || !i.pathname.includes("?"),
           ql("?", "pathname", "search", i)
        ),
        Ee(
           !i.pathname || !i.pathname.includes("#"),
           ql("#", "pathname", "hash", i)
        ),
        Ee(!i.search || !i.search.includes("#"), ql("#", "search", "hash", i)));
   let s = e === "" || i.pathname === "",
      o = s ? "/" : i.pathname,
      a;
   if (n || o == null) a = r;
   else {
      let d = t.length - 1;
      if (o.startsWith("..")) {
         let h = o.split("/");
         for (; h[0] === ".."; ) h.shift(), (d -= 1);
         i.pathname = h.join("/");
      }
      a = d >= 0 ? t[d] : "/";
   }
   let l = Mw(i, a),
      u = o && o !== "/" && o.endsWith("/"),
      c = (s || o === ".") && r.endsWith("/");
   return !l.pathname.endsWith("/") && (u || c) && (l.pathname += "/"), l;
}
const Gr = (e) => e.join("/").replace(/\/\/+/g, "/"),
   Uw = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
   zw = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
   Bw = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function qw(e) {
   return (
      e != null &&
      typeof e.status == "number" &&
      typeof e.statusText == "string" &&
      typeof e.internal == "boolean" &&
      "data" in e
   );
}
const nv = ["post", "put", "patch", "delete"];
new Set(nv);
const Vw = ["get", ...nv];
new Set(Vw);
/**
 * React Router v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xa() {
   return (
      (xa = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var r = arguments[t];
                 for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
           }),
      xa.apply(this, arguments)
   );
}
const Dd = S.createContext(null),
   iv = S.createContext(null),
   On = S.createContext(null),
   rl = S.createContext(null),
   nr = S.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
   sv = S.createContext(null);
function Ww(e, t) {
   let { relative: r } = t === void 0 ? {} : t;
   ji() || Ee(!1);
   let { basename: n, navigator: i } = S.useContext(On),
      { hash: s, pathname: o, search: a } = Rd(e, { relative: r }),
      l = o;
   return (
      n !== "/" && (l = o === "/" ? n : Gr([n, o])),
      i.createHref({ pathname: l, search: a, hash: s })
   );
}
function ji() {
   return S.useContext(rl) != null;
}
function Dn() {
   return ji() || Ee(!1), S.useContext(rl).location;
}
function ov(e) {
   S.useContext(On).static || S.useLayoutEffect(e);
}
function ir() {
   let { isDataRoute: e } = S.useContext(nr);
   return e ? ax() : Hw();
}
function Hw() {
   ji() || Ee(!1);
   let e = S.useContext(Dd),
      { basename: t, navigator: r } = S.useContext(On),
      { matches: n } = S.useContext(nr),
      { pathname: i } = Dn(),
      s = JSON.stringify(jd(n).map((l) => l.pathnameBase)),
      o = S.useRef(!1);
   return (
      ov(() => {
         o.current = !0;
      }),
      S.useCallback(
         function (l, u) {
            if ((u === void 0 && (u = {}), !o.current)) return;
            if (typeof l == "number") {
               r.go(l);
               return;
            }
            let c = Od(l, JSON.parse(s), i, u.relative === "path");
            e == null &&
               t !== "/" &&
               (c.pathname = c.pathname === "/" ? t : Gr([t, c.pathname])),
               (u.replace ? r.replace : r.push)(c, u.state, u);
         },
         [t, r, s, i, e]
      )
   );
}
const Qw = S.createContext(null);
function Gw(e) {
   let t = S.useContext(nr).outlet;
   return t && S.createElement(Qw.Provider, { value: e }, t);
}
function Kw() {
   let { matches: e } = S.useContext(nr),
      t = e[e.length - 1];
   return t ? t.params : {};
}
function Rd(e, t) {
   let { relative: r } = t === void 0 ? {} : t,
      { matches: n } = S.useContext(nr),
      { pathname: i } = Dn(),
      s = JSON.stringify(jd(n).map((o) => o.pathnameBase));
   return S.useMemo(() => Od(e, JSON.parse(s), i, r === "path"), [e, s, i, r]);
}
function Yw(e, t) {
   return Jw(e, t);
}
function Jw(e, t, r) {
   ji() || Ee(!1);
   let { navigator: n } = S.useContext(On),
      { matches: i } = S.useContext(nr),
      s = i[i.length - 1],
      o = s ? s.params : {};
   s && s.pathname;
   let a = s ? s.pathnameBase : "/";
   s && s.route;
   let l = Dn(),
      u;
   if (t) {
      var c;
      let w = typeof t == "string" ? Ti(t) : t;
      a === "/" || ((c = w.pathname) != null && c.startsWith(a)) || Ee(!1),
         (u = w);
   } else u = l;
   let d = u.pathname || "/",
      h = a === "/" ? d : d.slice(a.length) || "/",
      m = Sw(e, { pathname: h }),
      y = rx(
         m &&
            m.map((w) =>
               Object.assign({}, w, {
                  params: Object.assign({}, o, w.params),
                  pathname: Gr([
                     a,
                     n.encodeLocation
                        ? n.encodeLocation(w.pathname).pathname
                        : w.pathname,
                  ]),
                  pathnameBase:
                     w.pathnameBase === "/"
                        ? a
                        : Gr([
                             a,
                             n.encodeLocation
                                ? n.encodeLocation(w.pathnameBase).pathname
                                : w.pathnameBase,
                          ]),
               })
            ),
         i,
         r
      );
   return t && y
      ? S.createElement(
           rl.Provider,
           {
              value: {
                 location: xa(
                    {
                       pathname: "/",
                       search: "",
                       hash: "",
                       state: null,
                       key: "default",
                    },
                    u
                 ),
                 navigationType: Mr.Pop,
              },
           },
           y
        )
      : y;
}
function Xw() {
   let e = ox(),
      t = qw(e)
         ? e.status + " " + e.statusText
         : e instanceof Error
         ? e.message
         : JSON.stringify(e),
      r = e instanceof Error ? e.stack : null,
      i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
      s = null;
   return S.createElement(
      S.Fragment,
      null,
      S.createElement("h2", null, "Unexpected Application Error!"),
      S.createElement("h3", { style: { fontStyle: "italic" } }, t),
      r ? S.createElement("pre", { style: i }, r) : null,
      s
   );
}
const Zw = S.createElement(Xw, null);
class ex extends S.Component {
   constructor(t) {
      super(t),
         (this.state = {
            location: t.location,
            revalidation: t.revalidation,
            error: t.error,
         });
   }
   static getDerivedStateFromError(t) {
      return { error: t };
   }
   static getDerivedStateFromProps(t, r) {
      return r.location !== t.location ||
         (r.revalidation !== "idle" && t.revalidation === "idle")
         ? {
              error: t.error,
              location: t.location,
              revalidation: t.revalidation,
           }
         : {
              error: t.error || r.error,
              location: r.location,
              revalidation: t.revalidation || r.revalidation,
           };
   }
   componentDidCatch(t, r) {
      console.error(
         "React Router caught the following error during render",
         t,
         r
      );
   }
   render() {
      return this.state.error
         ? S.createElement(
              nr.Provider,
              { value: this.props.routeContext },
              S.createElement(sv.Provider, {
                 value: this.state.error,
                 children: this.props.component,
              })
           )
         : this.props.children;
   }
}
function tx(e) {
   let { routeContext: t, match: r, children: n } = e,
      i = S.useContext(Dd);
   return (
      i &&
         i.static &&
         i.staticContext &&
         (r.route.errorElement || r.route.ErrorBoundary) &&
         (i.staticContext._deepestRenderedBoundaryId = r.route.id),
      S.createElement(nr.Provider, { value: t }, n)
   );
}
function rx(e, t, r) {
   var n;
   if ((t === void 0 && (t = []), r === void 0 && (r = null), e == null)) {
      var i;
      if ((i = r) != null && i.errors) e = r.matches;
      else return null;
   }
   let s = e,
      o = (n = r) == null ? void 0 : n.errors;
   if (o != null) {
      let a = s.findIndex(
         (l) => l.route.id && (o == null ? void 0 : o[l.route.id])
      );
      a >= 0 || Ee(!1), (s = s.slice(0, Math.min(s.length, a + 1)));
   }
   return s.reduceRight((a, l, u) => {
      let c = l.route.id ? (o == null ? void 0 : o[l.route.id]) : null,
         d = null;
      r && (d = l.route.errorElement || Zw);
      let h = t.concat(s.slice(0, u + 1)),
         m = () => {
            let y;
            return (
               c
                  ? (y = d)
                  : l.route.Component
                  ? (y = S.createElement(l.route.Component, null))
                  : l.route.element
                  ? (y = l.route.element)
                  : (y = a),
               S.createElement(tx, {
                  match: l,
                  routeContext: {
                     outlet: a,
                     matches: h,
                     isDataRoute: r != null,
                  },
                  children: y,
               })
            );
         };
      return r && (l.route.ErrorBoundary || l.route.errorElement || u === 0)
         ? S.createElement(ex, {
              location: r.location,
              revalidation: r.revalidation,
              component: d,
              error: c,
              children: m(),
              routeContext: { outlet: null, matches: h, isDataRoute: !0 },
           })
         : m();
   }, null);
}
var av = (function (e) {
      return (
         (e.UseBlocker = "useBlocker"),
         (e.UseRevalidator = "useRevalidator"),
         (e.UseNavigateStable = "useNavigate"),
         e
      );
   })(av || {}),
   ba = (function (e) {
      return (
         (e.UseBlocker = "useBlocker"),
         (e.UseLoaderData = "useLoaderData"),
         (e.UseActionData = "useActionData"),
         (e.UseRouteError = "useRouteError"),
         (e.UseNavigation = "useNavigation"),
         (e.UseRouteLoaderData = "useRouteLoaderData"),
         (e.UseMatches = "useMatches"),
         (e.UseRevalidator = "useRevalidator"),
         (e.UseNavigateStable = "useNavigate"),
         (e.UseRouteId = "useRouteId"),
         e
      );
   })(ba || {});
function nx(e) {
   let t = S.useContext(Dd);
   return t || Ee(!1), t;
}
function ix(e) {
   let t = S.useContext(iv);
   return t || Ee(!1), t;
}
function sx(e) {
   let t = S.useContext(nr);
   return t || Ee(!1), t;
}
function lv(e) {
   let t = sx(),
      r = t.matches[t.matches.length - 1];
   return r.route.id || Ee(!1), r.route.id;
}
function ox() {
   var e;
   let t = S.useContext(sv),
      r = ix(ba.UseRouteError),
      n = lv(ba.UseRouteError);
   return t || ((e = r.errors) == null ? void 0 : e[n]);
}
function ax() {
   let { router: e } = nx(av.UseNavigateStable),
      t = lv(ba.UseNavigateStable),
      r = S.useRef(!1);
   return (
      ov(() => {
         r.current = !0;
      }),
      S.useCallback(
         function (i, s) {
            s === void 0 && (s = {}),
               r.current &&
                  (typeof i == "number"
                     ? e.navigate(i)
                     : e.navigate(i, xa({ fromRouteId: t }, s)));
         },
         [e, t]
      )
   );
}
function lx(e) {
   let { to: t, replace: r, state: n, relative: i } = e;
   ji() || Ee(!1);
   let { matches: s } = S.useContext(nr),
      { pathname: o } = Dn(),
      a = ir(),
      l = Od(
         t,
         jd(s).map((c) => c.pathnameBase),
         o,
         i === "path"
      ),
      u = JSON.stringify(l);
   return (
      S.useEffect(
         () => a(JSON.parse(u), { replace: r, state: n, relative: i }),
         [a, u, i, r, n]
      ),
      null
   );
}
function ux(e) {
   return Gw(e.context);
}
function ht(e) {
   Ee(!1);
}
function cx(e) {
   let {
      basename: t = "/",
      children: r = null,
      location: n,
      navigationType: i = Mr.Pop,
      navigator: s,
      static: o = !1,
   } = e;
   ji() && Ee(!1);
   let a = t.replace(/^\/*/, "/"),
      l = S.useMemo(
         () => ({ basename: a, navigator: s, static: o }),
         [a, s, o]
      );
   typeof n == "string" && (n = Ti(n));
   let {
         pathname: u = "/",
         search: c = "",
         hash: d = "",
         state: h = null,
         key: m = "default",
      } = n,
      y = S.useMemo(() => {
         let w = Td(u, a);
         return w == null
            ? null
            : {
                 location: {
                    pathname: w,
                    search: c,
                    hash: d,
                    state: h,
                    key: m,
                 },
                 navigationType: i,
              };
      }, [a, u, c, d, h, m, i]);
   return y == null
      ? null
      : S.createElement(
           On.Provider,
           { value: l },
           S.createElement(rl.Provider, { children: r, value: y })
        );
}
function dx(e) {
   let { children: t, location: r } = e;
   return Yw(lc(t), r);
}
new Promise(() => {});
function lc(e, t) {
   t === void 0 && (t = []);
   let r = [];
   return (
      S.Children.forEach(e, (n, i) => {
         if (!S.isValidElement(n)) return;
         let s = [...t, i];
         if (n.type === S.Fragment) {
            r.push.apply(r, lc(n.props.children, s));
            return;
         }
         n.type !== ht && Ee(!1), !n.props.index || !n.props.children || Ee(!1);
         let o = {
            id: n.props.id || s.join("-"),
            caseSensitive: n.props.caseSensitive,
            element: n.props.element,
            Component: n.props.Component,
            index: n.props.index,
            path: n.props.path,
            loader: n.props.loader,
            action: n.props.action,
            errorElement: n.props.errorElement,
            ErrorBoundary: n.props.ErrorBoundary,
            hasErrorBoundary:
               n.props.ErrorBoundary != null || n.props.errorElement != null,
            shouldRevalidate: n.props.shouldRevalidate,
            handle: n.props.handle,
            lazy: n.props.lazy,
         };
         n.props.children && (o.children = lc(n.props.children, s)), r.push(o);
      }),
      r
   );
}
/**
 * React Router DOM v6.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ka() {
   return (
      (ka = Object.assign
         ? Object.assign.bind()
         : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                 var r = arguments[t];
                 for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
           }),
      ka.apply(this, arguments)
   );
}
function uv(e, t) {
   if (e == null) return {};
   var r = {},
      n = Object.keys(e),
      i,
      s;
   for (s = 0; s < n.length; s++)
      (i = n[s]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
   return r;
}
function fx(e) {
   return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function hx(e, t) {
   return e.button === 0 && (!t || t === "_self") && !fx(e);
}
function uc(e) {
   return (
      e === void 0 && (e = ""),
      new URLSearchParams(
         typeof e == "string" ||
         Array.isArray(e) ||
         e instanceof URLSearchParams
            ? e
            : Object.keys(e).reduce((t, r) => {
                 let n = e[r];
                 return t.concat(
                    Array.isArray(n) ? n.map((i) => [r, i]) : [[r, n]]
                 );
              }, [])
      )
   );
}
function px(e, t) {
   let r = uc(e);
   return (
      t &&
         t.forEach((n, i) => {
            r.has(i) ||
               t.getAll(i).forEach((s) => {
                  r.append(i, s);
               });
         }),
      r
   );
}
const mx = [
      "onClick",
      "relative",
      "reloadDocument",
      "replace",
      "state",
      "target",
      "to",
      "preventScrollReset",
   ],
   gx = [
      "aria-current",
      "caseSensitive",
      "className",
      "end",
      "style",
      "to",
      "children",
   ],
   vx = "startTransition",
   _h = cy[vx];
function yx(e) {
   let { basename: t, children: r, future: n, window: i } = e,
      s = S.useRef();
   s.current == null && (s.current = xw({ window: i, v5Compat: !0 }));
   let o = s.current,
      [a, l] = S.useState({ action: o.action, location: o.location }),
      { v7_startTransition: u } = n || {},
      c = S.useCallback(
         (d) => {
            u && _h ? _h(() => l(d)) : l(d);
         },
         [l, u]
      );
   return (
      S.useLayoutEffect(() => o.listen(c), [o, c]),
      S.createElement(cx, {
         basename: t,
         children: r,
         location: a.location,
         navigationType: a.action,
         navigator: o,
      })
   );
}
const wx =
      typeof window < "u" &&
      typeof window.document < "u" &&
      typeof window.document.createElement < "u",
   xx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
   bx = S.forwardRef(function (t, r) {
      let {
            onClick: n,
            relative: i,
            reloadDocument: s,
            replace: o,
            state: a,
            target: l,
            to: u,
            preventScrollReset: c,
         } = t,
         d = uv(t, mx),
         { basename: h } = S.useContext(On),
         m,
         y = !1;
      if (typeof u == "string" && xx.test(u) && ((m = u), wx))
         try {
            let p = new URL(window.location.href),
               v = u.startsWith("//") ? new URL(p.protocol + u) : new URL(u),
               b = Td(v.pathname, h);
            v.origin === p.origin && b != null
               ? (u = b + v.search + v.hash)
               : (y = !0);
         } catch {}
      let w = Ww(u, { relative: i }),
         k = Sx(u, {
            replace: o,
            state: a,
            target: l,
            preventScrollReset: c,
            relative: i,
         });
      function g(p) {
         n && n(p), p.defaultPrevented || k(p);
      }
      return S.createElement(
         "a",
         ka({}, d, { href: m || w, onClick: y || s ? n : g, ref: r, target: l })
      );
   }),
   kx = S.forwardRef(function (t, r) {
      let {
            "aria-current": n = "page",
            caseSensitive: i = !1,
            className: s = "",
            end: o = !1,
            style: a,
            to: l,
            children: u,
         } = t,
         c = uv(t, gx),
         d = Rd(l, { relative: c.relative }),
         h = Dn(),
         m = S.useContext(iv),
         { navigator: y } = S.useContext(On),
         w = y.encodeLocation ? y.encodeLocation(d).pathname : d.pathname,
         k = h.pathname,
         g =
            m && m.navigation && m.navigation.location
               ? m.navigation.location.pathname
               : null;
      i ||
         ((k = k.toLowerCase()),
         (g = g ? g.toLowerCase() : null),
         (w = w.toLowerCase()));
      let p = k === w || (!o && k.startsWith(w) && k.charAt(w.length) === "/"),
         v =
            g != null &&
            (g === w || (!o && g.startsWith(w) && g.charAt(w.length) === "/")),
         b = p ? n : void 0,
         _;
      typeof s == "function"
         ? (_ = s({ isActive: p, isPending: v }))
         : (_ = [s, p ? "active" : null, v ? "pending" : null]
              .filter(Boolean)
              .join(" "));
      let P = typeof a == "function" ? a({ isActive: p, isPending: v }) : a;
      return S.createElement(
         bx,
         ka({}, c, {
            "aria-current": b,
            className: _,
            ref: r,
            style: P,
            to: l,
         }),
         typeof u == "function" ? u({ isActive: p, isPending: v }) : u
      );
   });
var Ch;
(function (e) {
   (e.UseScrollRestoration = "useScrollRestoration"),
      (e.UseSubmit = "useSubmit"),
      (e.UseSubmitFetcher = "useSubmitFetcher"),
      (e.UseFetcher = "useFetcher");
})(Ch || (Ch = {}));
var Eh;
(function (e) {
   (e.UseFetchers = "useFetchers"),
      (e.UseScrollRestoration = "useScrollRestoration");
})(Eh || (Eh = {}));
function Sx(e, t) {
   let {
         target: r,
         replace: n,
         state: i,
         preventScrollReset: s,
         relative: o,
      } = t === void 0 ? {} : t,
      a = ir(),
      l = Dn(),
      u = Rd(e, { relative: o });
   return S.useCallback(
      (c) => {
         if (hx(c, r)) {
            c.preventDefault();
            let d = n !== void 0 ? n : wa(l) === wa(u);
            a(e, { replace: d, state: i, preventScrollReset: s, relative: o });
         }
      },
      [l, a, u, n, i, r, e, s, o]
   );
}
function Gs(e) {
   let t = S.useRef(uc(e)),
      r = S.useRef(!1),
      n = Dn(),
      i = S.useMemo(
         () => px(n.search, r.current ? null : t.current),
         [n.search]
      ),
      s = ir(),
      o = S.useCallback(
         (a, l) => {
            const u = uc(typeof a == "function" ? a(i) : a);
            (r.current = !0), s("?" + u, l);
         },
         [s, i]
      );
   return [i, o];
}
class Oi {
   constructor() {
      (this.listeners = new Set()),
         (this.subscribe = this.subscribe.bind(this));
   }
   subscribe(t) {
      const r = { listener: t };
      return (
         this.listeners.add(r),
         this.onSubscribe(),
         () => {
            this.listeners.delete(r), this.onUnsubscribe();
         }
      );
   }
   hasListeners() {
      return this.listeners.size > 0;
   }
   onSubscribe() {}
   onUnsubscribe() {}
}
const As = typeof window > "u" || "Deno" in window;
function _t() {}
function _x(e, t) {
   return typeof e == "function" ? e(t) : e;
}
function cc(e) {
   return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function cv(e, t) {
   return Math.max(e + (t || 0) - Date.now(), 0);
}
function ts(e, t, r) {
   return Ks(e)
      ? typeof t == "function"
         ? { ...r, queryKey: e, queryFn: t }
         : { ...t, queryKey: e }
      : e;
}
function Cx(e, t, r) {
   return Ks(e)
      ? typeof t == "function"
         ? { ...r, mutationKey: e, mutationFn: t }
         : { ...t, mutationKey: e }
      : typeof e == "function"
      ? { ...t, mutationFn: e }
      : { ...e };
}
function Or(e, t, r) {
   return Ks(e) ? [{ ...t, queryKey: e }, r] : [e || {}, t];
}
function Ph(e, t) {
   const {
      type: r = "all",
      exact: n,
      fetchStatus: i,
      predicate: s,
      queryKey: o,
      stale: a,
   } = e;
   if (Ks(o)) {
      if (n) {
         if (t.queryHash !== Id(o, t.options)) return !1;
      } else if (!Sa(t.queryKey, o)) return !1;
   }
   if (r !== "all") {
      const l = t.isActive();
      if ((r === "active" && !l) || (r === "inactive" && l)) return !1;
   }
   return !(
      (typeof a == "boolean" && t.isStale() !== a) ||
      (typeof i < "u" && i !== t.state.fetchStatus) ||
      (s && !s(t))
   );
}
function Th(e, t) {
   const { exact: r, fetching: n, predicate: i, mutationKey: s } = e;
   if (Ks(s)) {
      if (!t.options.mutationKey) return !1;
      if (r) {
         if (gn(t.options.mutationKey) !== gn(s)) return !1;
      } else if (!Sa(t.options.mutationKey, s)) return !1;
   }
   return !(
      (typeof n == "boolean" && (t.state.status === "loading") !== n) ||
      (i && !i(t))
   );
}
function Id(e, t) {
   return ((t == null ? void 0 : t.queryKeyHashFn) || gn)(e);
}
function gn(e) {
   return JSON.stringify(e, (t, r) =>
      dc(r)
         ? Object.keys(r)
              .sort()
              .reduce((n, i) => ((n[i] = r[i]), n), {})
         : r
   );
}
function Sa(e, t) {
   return dv(e, t);
}
function dv(e, t) {
   return e === t
      ? !0
      : typeof e != typeof t
      ? !1
      : e && t && typeof e == "object" && typeof t == "object"
      ? !Object.keys(t).some((r) => !dv(e[r], t[r]))
      : !1;
}
function fv(e, t) {
   if (e === t) return e;
   const r = jh(e) && jh(t);
   if (r || (dc(e) && dc(t))) {
      const n = r ? e.length : Object.keys(e).length,
         i = r ? t : Object.keys(t),
         s = i.length,
         o = r ? [] : {};
      let a = 0;
      for (let l = 0; l < s; l++) {
         const u = r ? l : i[l];
         (o[u] = fv(e[u], t[u])), o[u] === e[u] && a++;
      }
      return n === s && a === n ? e : o;
   }
   return t;
}
function _a(e, t) {
   if ((e && !t) || (t && !e)) return !1;
   for (const r in e) if (e[r] !== t[r]) return !1;
   return !0;
}
function jh(e) {
   return Array.isArray(e) && e.length === Object.keys(e).length;
}
function dc(e) {
   if (!Oh(e)) return !1;
   const t = e.constructor;
   if (typeof t > "u") return !0;
   const r = t.prototype;
   return !(!Oh(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Oh(e) {
   return Object.prototype.toString.call(e) === "[object Object]";
}
function Ks(e) {
   return Array.isArray(e);
}
function hv(e) {
   return new Promise((t) => {
      setTimeout(t, e);
   });
}
function Dh(e) {
   hv(0).then(e);
}
function Ex() {
   if (typeof AbortController == "function") return new AbortController();
}
function fc(e, t, r) {
   return r.isDataEqual != null && r.isDataEqual(e, t)
      ? e
      : typeof r.structuralSharing == "function"
      ? r.structuralSharing(e, t)
      : r.structuralSharing !== !1
      ? fv(e, t)
      : t;
}
class Px extends Oi {
   constructor() {
      super(),
         (this.setup = (t) => {
            if (!As && window.addEventListener) {
               const r = () => t();
               return (
                  window.addEventListener("visibilitychange", r, !1),
                  window.addEventListener("focus", r, !1),
                  () => {
                     window.removeEventListener("visibilitychange", r),
                        window.removeEventListener("focus", r);
                  }
               );
            }
         });
   }
   onSubscribe() {
      this.cleanup || this.setEventListener(this.setup);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
      }
   }
   setEventListener(t) {
      var r;
      (this.setup = t),
         (r = this.cleanup) == null || r.call(this),
         (this.cleanup = t((n) => {
            typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
         }));
   }
   setFocused(t) {
      this.focused !== t && ((this.focused = t), this.onFocus());
   }
   onFocus() {
      this.listeners.forEach(({ listener: t }) => {
         t();
      });
   }
   isFocused() {
      return typeof this.focused == "boolean"
         ? this.focused
         : typeof document > "u"
         ? !0
         : [void 0, "visible", "prerender"].includes(document.visibilityState);
   }
}
const Ca = new Px(),
   Rh = ["online", "offline"];
class Tx extends Oi {
   constructor() {
      super(),
         (this.setup = (t) => {
            if (!As && window.addEventListener) {
               const r = () => t();
               return (
                  Rh.forEach((n) => {
                     window.addEventListener(n, r, !1);
                  }),
                  () => {
                     Rh.forEach((n) => {
                        window.removeEventListener(n, r);
                     });
                  }
               );
            }
         });
   }
   onSubscribe() {
      this.cleanup || this.setEventListener(this.setup);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.cleanup) == null || t.call(this), (this.cleanup = void 0);
      }
   }
   setEventListener(t) {
      var r;
      (this.setup = t),
         (r = this.cleanup) == null || r.call(this),
         (this.cleanup = t((n) => {
            typeof n == "boolean" ? this.setOnline(n) : this.onOnline();
         }));
   }
   setOnline(t) {
      this.online !== t && ((this.online = t), this.onOnline());
   }
   onOnline() {
      this.listeners.forEach(({ listener: t }) => {
         t();
      });
   }
   isOnline() {
      return typeof this.online == "boolean"
         ? this.online
         : typeof navigator > "u" || typeof navigator.onLine > "u"
         ? !0
         : navigator.onLine;
   }
}
const Ea = new Tx();
function jx(e) {
   return Math.min(1e3 * 2 ** e, 3e4);
}
function nl(e) {
   return (e ?? "online") === "online" ? Ea.isOnline() : !0;
}
class pv {
   constructor(t) {
      (this.revert = t == null ? void 0 : t.revert),
         (this.silent = t == null ? void 0 : t.silent);
   }
}
function Fo(e) {
   return e instanceof pv;
}
function mv(e) {
   let t = !1,
      r = 0,
      n = !1,
      i,
      s,
      o;
   const a = new Promise((k, g) => {
         (s = k), (o = g);
      }),
      l = (k) => {
         n || (m(new pv(k)), e.abort == null || e.abort());
      },
      u = () => {
         t = !0;
      },
      c = () => {
         t = !1;
      },
      d = () =>
         !Ca.isFocused() || (e.networkMode !== "always" && !Ea.isOnline()),
      h = (k) => {
         n ||
            ((n = !0),
            e.onSuccess == null || e.onSuccess(k),
            i == null || i(),
            s(k));
      },
      m = (k) => {
         n ||
            ((n = !0),
            e.onError == null || e.onError(k),
            i == null || i(),
            o(k));
      },
      y = () =>
         new Promise((k) => {
            (i = (g) => {
               const p = n || !d();
               return p && k(g), p;
            }),
               e.onPause == null || e.onPause();
         }).then(() => {
            (i = void 0), n || e.onContinue == null || e.onContinue();
         }),
      w = () => {
         if (n) return;
         let k;
         try {
            k = e.fn();
         } catch (g) {
            k = Promise.reject(g);
         }
         Promise.resolve(k)
            .then(h)
            .catch((g) => {
               var p, v;
               if (n) return;
               const b = (p = e.retry) != null ? p : 3,
                  _ = (v = e.retryDelay) != null ? v : jx,
                  P = typeof _ == "function" ? _(r, g) : _,
                  C =
                     b === !0 ||
                     (typeof b == "number" && r < b) ||
                     (typeof b == "function" && b(r, g));
               if (t || !C) {
                  m(g);
                  return;
               }
               r++,
                  e.onFail == null || e.onFail(r, g),
                  hv(P)
                     .then(() => {
                        if (d()) return y();
                     })
                     .then(() => {
                        t ? m(g) : w();
                     });
            });
      };
   return (
      nl(e.networkMode) ? w() : y().then(w),
      {
         promise: a,
         cancel: l,
         continue: () => ((i == null ? void 0 : i()) ? a : Promise.resolve()),
         cancelRetry: u,
         continueRetry: c,
      }
   );
}
const $d = console;
function Ox() {
   let e = [],
      t = 0,
      r = (c) => {
         c();
      },
      n = (c) => {
         c();
      };
   const i = (c) => {
         let d;
         t++;
         try {
            d = c();
         } finally {
            t--, t || a();
         }
         return d;
      },
      s = (c) => {
         t
            ? e.push(c)
            : Dh(() => {
                 r(c);
              });
      },
      o =
         (c) =>
         (...d) => {
            s(() => {
               c(...d);
            });
         },
      a = () => {
         const c = e;
         (e = []),
            c.length &&
               Dh(() => {
                  n(() => {
                     c.forEach((d) => {
                        r(d);
                     });
                  });
               });
      };
   return {
      batch: i,
      batchCalls: o,
      schedule: s,
      setNotifyFunction: (c) => {
         r = c;
      },
      setBatchNotifyFunction: (c) => {
         n = c;
      },
   };
}
const Se = Ox();
class gv {
   destroy() {
      this.clearGcTimeout();
   }
   scheduleGc() {
      this.clearGcTimeout(),
         cc(this.cacheTime) &&
            (this.gcTimeout = setTimeout(() => {
               this.optionalRemove();
            }, this.cacheTime));
   }
   updateCacheTime(t) {
      this.cacheTime = Math.max(
         this.cacheTime || 0,
         t ?? (As ? 1 / 0 : 5 * 60 * 1e3)
      );
   }
   clearGcTimeout() {
      this.gcTimeout &&
         (clearTimeout(this.gcTimeout), (this.gcTimeout = void 0));
   }
}
class Dx extends gv {
   constructor(t) {
      super(),
         (this.abortSignalConsumed = !1),
         (this.defaultOptions = t.defaultOptions),
         this.setOptions(t.options),
         (this.observers = []),
         (this.cache = t.cache),
         (this.logger = t.logger || $d),
         (this.queryKey = t.queryKey),
         (this.queryHash = t.queryHash),
         (this.initialState = t.state || Rx(this.options)),
         (this.state = this.initialState),
         this.scheduleGc();
   }
   get meta() {
      return this.options.meta;
   }
   setOptions(t) {
      (this.options = { ...this.defaultOptions, ...t }),
         this.updateCacheTime(this.options.cacheTime);
   }
   optionalRemove() {
      !this.observers.length &&
         this.state.fetchStatus === "idle" &&
         this.cache.remove(this);
   }
   setData(t, r) {
      const n = fc(this.state.data, t, this.options);
      return (
         this.dispatch({
            data: n,
            type: "success",
            dataUpdatedAt: r == null ? void 0 : r.updatedAt,
            manual: r == null ? void 0 : r.manual,
         }),
         n
      );
   }
   setState(t, r) {
      this.dispatch({ type: "setState", state: t, setStateOptions: r });
   }
   cancel(t) {
      var r;
      const n = this.promise;
      return (
         (r = this.retryer) == null || r.cancel(t),
         n ? n.then(_t).catch(_t) : Promise.resolve()
      );
   }
   destroy() {
      super.destroy(), this.cancel({ silent: !0 });
   }
   reset() {
      this.destroy(), this.setState(this.initialState);
   }
   isActive() {
      return this.observers.some((t) => t.options.enabled !== !1);
   }
   isDisabled() {
      return this.getObserversCount() > 0 && !this.isActive();
   }
   isStale() {
      return (
         this.state.isInvalidated ||
         !this.state.dataUpdatedAt ||
         this.observers.some((t) => t.getCurrentResult().isStale)
      );
   }
   isStaleByTime(t = 0) {
      return (
         this.state.isInvalidated ||
         !this.state.dataUpdatedAt ||
         !cv(this.state.dataUpdatedAt, t)
      );
   }
   onFocus() {
      var t;
      const r = this.observers.find((n) => n.shouldFetchOnWindowFocus());
      r && r.refetch({ cancelRefetch: !1 }),
         (t = this.retryer) == null || t.continue();
   }
   onOnline() {
      var t;
      const r = this.observers.find((n) => n.shouldFetchOnReconnect());
      r && r.refetch({ cancelRefetch: !1 }),
         (t = this.retryer) == null || t.continue();
   }
   addObserver(t) {
      this.observers.includes(t) ||
         (this.observers.push(t),
         this.clearGcTimeout(),
         this.cache.notify({
            type: "observerAdded",
            query: this,
            observer: t,
         }));
   }
   removeObserver(t) {
      this.observers.includes(t) &&
         ((this.observers = this.observers.filter((r) => r !== t)),
         this.observers.length ||
            (this.retryer &&
               (this.abortSignalConsumed
                  ? this.retryer.cancel({ revert: !0 })
                  : this.retryer.cancelRetry()),
            this.scheduleGc()),
         this.cache.notify({
            type: "observerRemoved",
            query: this,
            observer: t,
         }));
   }
   getObserversCount() {
      return this.observers.length;
   }
   invalidate() {
      this.state.isInvalidated || this.dispatch({ type: "invalidate" });
   }
   fetch(t, r) {
      var n, i;
      if (this.state.fetchStatus !== "idle") {
         if (this.state.dataUpdatedAt && r != null && r.cancelRefetch)
            this.cancel({ silent: !0 });
         else if (this.promise) {
            var s;
            return (
               (s = this.retryer) == null || s.continueRetry(), this.promise
            );
         }
      }
      if ((t && this.setOptions(t), !this.options.queryFn)) {
         const m = this.observers.find((y) => y.options.queryFn);
         m && this.setOptions(m.options);
      }
      const o = Ex(),
         a = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta },
         l = (m) => {
            Object.defineProperty(m, "signal", {
               enumerable: !0,
               get: () => {
                  if (o) return (this.abortSignalConsumed = !0), o.signal;
               },
            });
         };
      l(a);
      const u = () =>
            this.options.queryFn
               ? ((this.abortSignalConsumed = !1), this.options.queryFn(a))
               : Promise.reject(
                    "Missing queryFn for queryKey '" +
                       this.options.queryHash +
                       "'"
                 ),
         c = {
            fetchOptions: r,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn: u,
         };
      if (
         (l(c),
         (n = this.options.behavior) == null || n.onFetch(c),
         (this.revertState = this.state),
         this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
               ((i = c.fetchOptions) == null ? void 0 : i.meta))
      ) {
         var d;
         this.dispatch({
            type: "fetch",
            meta: (d = c.fetchOptions) == null ? void 0 : d.meta,
         });
      }
      const h = (m) => {
         if (
            ((Fo(m) && m.silent) || this.dispatch({ type: "error", error: m }),
            !Fo(m))
         ) {
            var y, w, k, g;
            (y = (w = this.cache.config).onError) == null || y.call(w, m, this),
               (k = (g = this.cache.config).onSettled) == null ||
                  k.call(g, this.state.data, m, this);
         }
         this.isFetchingOptimistic || this.scheduleGc(),
            (this.isFetchingOptimistic = !1);
      };
      return (
         (this.retryer = mv({
            fn: c.fetchFn,
            abort: o == null ? void 0 : o.abort.bind(o),
            onSuccess: (m) => {
               var y, w, k, g;
               if (typeof m > "u") {
                  h(new Error(this.queryHash + " data is undefined"));
                  return;
               }
               this.setData(m),
                  (y = (w = this.cache.config).onSuccess) == null ||
                     y.call(w, m, this),
                  (k = (g = this.cache.config).onSettled) == null ||
                     k.call(g, m, this.state.error, this),
                  this.isFetchingOptimistic || this.scheduleGc(),
                  (this.isFetchingOptimistic = !1);
            },
            onError: h,
            onFail: (m, y) => {
               this.dispatch({ type: "failed", failureCount: m, error: y });
            },
            onPause: () => {
               this.dispatch({ type: "pause" });
            },
            onContinue: () => {
               this.dispatch({ type: "continue" });
            },
            retry: c.options.retry,
            retryDelay: c.options.retryDelay,
            networkMode: c.options.networkMode,
         })),
         (this.promise = this.retryer.promise),
         this.promise
      );
   }
   dispatch(t) {
      const r = (n) => {
         var i, s;
         switch (t.type) {
            case "failed":
               return {
                  ...n,
                  fetchFailureCount: t.failureCount,
                  fetchFailureReason: t.error,
               };
            case "pause":
               return { ...n, fetchStatus: "paused" };
            case "continue":
               return { ...n, fetchStatus: "fetching" };
            case "fetch":
               return {
                  ...n,
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                  fetchMeta: (i = t.meta) != null ? i : null,
                  fetchStatus: nl(this.options.networkMode)
                     ? "fetching"
                     : "paused",
                  ...(!n.dataUpdatedAt && { error: null, status: "loading" }),
               };
            case "success":
               return {
                  ...n,
                  data: t.data,
                  dataUpdateCount: n.dataUpdateCount + 1,
                  dataUpdatedAt: (s = t.dataUpdatedAt) != null ? s : Date.now(),
                  error: null,
                  isInvalidated: !1,
                  status: "success",
                  ...(!t.manual && {
                     fetchStatus: "idle",
                     fetchFailureCount: 0,
                     fetchFailureReason: null,
                  }),
               };
            case "error":
               const o = t.error;
               return Fo(o) && o.revert && this.revertState
                  ? { ...this.revertState, fetchStatus: "idle" }
                  : {
                       ...n,
                       error: o,
                       errorUpdateCount: n.errorUpdateCount + 1,
                       errorUpdatedAt: Date.now(),
                       fetchFailureCount: n.fetchFailureCount + 1,
                       fetchFailureReason: o,
                       fetchStatus: "idle",
                       status: "error",
                    };
            case "invalidate":
               return { ...n, isInvalidated: !0 };
            case "setState":
               return { ...n, ...t.state };
         }
      };
      (this.state = r(this.state)),
         Se.batch(() => {
            this.observers.forEach((n) => {
               n.onQueryUpdate(t);
            }),
               this.cache.notify({ query: this, type: "updated", action: t });
         });
   }
}
function Rx(e) {
   const t =
         typeof e.initialData == "function" ? e.initialData() : e.initialData,
      r = typeof t < "u",
      n = r
         ? typeof e.initialDataUpdatedAt == "function"
            ? e.initialDataUpdatedAt()
            : e.initialDataUpdatedAt
         : 0;
   return {
      data: t,
      dataUpdateCount: 0,
      dataUpdatedAt: r ? n ?? Date.now() : 0,
      error: null,
      errorUpdateCount: 0,
      errorUpdatedAt: 0,
      fetchFailureCount: 0,
      fetchFailureReason: null,
      fetchMeta: null,
      isInvalidated: !1,
      status: r ? "success" : "loading",
      fetchStatus: "idle",
   };
}
class Ix extends Oi {
   constructor(t) {
      super(),
         (this.config = t || {}),
         (this.queries = []),
         (this.queriesMap = {});
   }
   build(t, r, n) {
      var i;
      const s = r.queryKey,
         o = (i = r.queryHash) != null ? i : Id(s, r);
      let a = this.get(o);
      return (
         a ||
            ((a = new Dx({
               cache: this,
               logger: t.getLogger(),
               queryKey: s,
               queryHash: o,
               options: t.defaultQueryOptions(r),
               state: n,
               defaultOptions: t.getQueryDefaults(s),
            })),
            this.add(a)),
         a
      );
   }
   add(t) {
      this.queriesMap[t.queryHash] ||
         ((this.queriesMap[t.queryHash] = t),
         this.queries.push(t),
         this.notify({ type: "added", query: t }));
   }
   remove(t) {
      const r = this.queriesMap[t.queryHash];
      r &&
         (t.destroy(),
         (this.queries = this.queries.filter((n) => n !== t)),
         r === t && delete this.queriesMap[t.queryHash],
         this.notify({ type: "removed", query: t }));
   }
   clear() {
      Se.batch(() => {
         this.queries.forEach((t) => {
            this.remove(t);
         });
      });
   }
   get(t) {
      return this.queriesMap[t];
   }
   getAll() {
      return this.queries;
   }
   find(t, r) {
      const [n] = Or(t, r);
      return (
         typeof n.exact > "u" && (n.exact = !0),
         this.queries.find((i) => Ph(n, i))
      );
   }
   findAll(t, r) {
      const [n] = Or(t, r);
      return Object.keys(n).length > 0
         ? this.queries.filter((i) => Ph(n, i))
         : this.queries;
   }
   notify(t) {
      Se.batch(() => {
         this.listeners.forEach(({ listener: r }) => {
            r(t);
         });
      });
   }
   onFocus() {
      Se.batch(() => {
         this.queries.forEach((t) => {
            t.onFocus();
         });
      });
   }
   onOnline() {
      Se.batch(() => {
         this.queries.forEach((t) => {
            t.onOnline();
         });
      });
   }
}
class $x extends gv {
   constructor(t) {
      super(),
         (this.defaultOptions = t.defaultOptions),
         (this.mutationId = t.mutationId),
         (this.mutationCache = t.mutationCache),
         (this.logger = t.logger || $d),
         (this.observers = []),
         (this.state = t.state || vv()),
         this.setOptions(t.options),
         this.scheduleGc();
   }
   setOptions(t) {
      (this.options = { ...this.defaultOptions, ...t }),
         this.updateCacheTime(this.options.cacheTime);
   }
   get meta() {
      return this.options.meta;
   }
   setState(t) {
      this.dispatch({ type: "setState", state: t });
   }
   addObserver(t) {
      this.observers.includes(t) ||
         (this.observers.push(t),
         this.clearGcTimeout(),
         this.mutationCache.notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
         }));
   }
   removeObserver(t) {
      (this.observers = this.observers.filter((r) => r !== t)),
         this.scheduleGc(),
         this.mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
         });
   }
   optionalRemove() {
      this.observers.length ||
         (this.state.status === "loading"
            ? this.scheduleGc()
            : this.mutationCache.remove(this));
   }
   continue() {
      var t, r;
      return (t = (r = this.retryer) == null ? void 0 : r.continue()) != null
         ? t
         : this.execute();
   }
   async execute() {
      const t = () => {
            var C;
            return (
               (this.retryer = mv({
                  fn: () =>
                     this.options.mutationFn
                        ? this.options.mutationFn(this.state.variables)
                        : Promise.reject("No mutationFn found"),
                  onFail: (j, U) => {
                     this.dispatch({
                        type: "failed",
                        failureCount: j,
                        error: U,
                     });
                  },
                  onPause: () => {
                     this.dispatch({ type: "pause" });
                  },
                  onContinue: () => {
                     this.dispatch({ type: "continue" });
                  },
                  retry: (C = this.options.retry) != null ? C : 0,
                  retryDelay: this.options.retryDelay,
                  networkMode: this.options.networkMode,
               })),
               this.retryer.promise
            );
         },
         r = this.state.status === "loading";
      try {
         var n, i, s, o, a, l, u, c;
         if (!r) {
            var d, h, m, y;
            this.dispatch({
               type: "loading",
               variables: this.options.variables,
            }),
               await ((d = (h = this.mutationCache.config).onMutate) == null
                  ? void 0
                  : d.call(h, this.state.variables, this));
            const j = await ((m = (y = this.options).onMutate) == null
               ? void 0
               : m.call(y, this.state.variables));
            j !== this.state.context &&
               this.dispatch({
                  type: "loading",
                  context: j,
                  variables: this.state.variables,
               });
         }
         const C = await t();
         return (
            await ((n = (i = this.mutationCache.config).onSuccess) == null
               ? void 0
               : n.call(i, C, this.state.variables, this.state.context, this)),
            await ((s = (o = this.options).onSuccess) == null
               ? void 0
               : s.call(o, C, this.state.variables, this.state.context)),
            await ((a = (l = this.mutationCache.config).onSettled) == null
               ? void 0
               : a.call(
                    l,
                    C,
                    null,
                    this.state.variables,
                    this.state.context,
                    this
                 )),
            await ((u = (c = this.options).onSettled) == null
               ? void 0
               : u.call(c, C, null, this.state.variables, this.state.context)),
            this.dispatch({ type: "success", data: C }),
            C
         );
      } catch (C) {
         try {
            var w, k, g, p, v, b, _, P;
            throw (
               (await ((w = (k = this.mutationCache.config).onError) == null
                  ? void 0
                  : w.call(
                       k,
                       C,
                       this.state.variables,
                       this.state.context,
                       this
                    )),
               await ((g = (p = this.options).onError) == null
                  ? void 0
                  : g.call(p, C, this.state.variables, this.state.context)),
               await ((v = (b = this.mutationCache.config).onSettled) == null
                  ? void 0
                  : v.call(
                       b,
                       void 0,
                       C,
                       this.state.variables,
                       this.state.context,
                       this
                    )),
               await ((_ = (P = this.options).onSettled) == null
                  ? void 0
                  : _.call(
                       P,
                       void 0,
                       C,
                       this.state.variables,
                       this.state.context
                    )),
               C)
            );
         } finally {
            this.dispatch({ type: "error", error: C });
         }
      }
   }
   dispatch(t) {
      const r = (n) => {
         switch (t.type) {
            case "failed":
               return {
                  ...n,
                  failureCount: t.failureCount,
                  failureReason: t.error,
               };
            case "pause":
               return { ...n, isPaused: !0 };
            case "continue":
               return { ...n, isPaused: !1 };
            case "loading":
               return {
                  ...n,
                  context: t.context,
                  data: void 0,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  isPaused: !nl(this.options.networkMode),
                  status: "loading",
                  variables: t.variables,
               };
            case "success":
               return {
                  ...n,
                  data: t.data,
                  failureCount: 0,
                  failureReason: null,
                  error: null,
                  status: "success",
                  isPaused: !1,
               };
            case "error":
               return {
                  ...n,
                  data: void 0,
                  error: t.error,
                  failureCount: n.failureCount + 1,
                  failureReason: t.error,
                  isPaused: !1,
                  status: "error",
               };
            case "setState":
               return { ...n, ...t.state };
         }
      };
      (this.state = r(this.state)),
         Se.batch(() => {
            this.observers.forEach((n) => {
               n.onMutationUpdate(t);
            }),
               this.mutationCache.notify({
                  mutation: this,
                  type: "updated",
                  action: t,
               });
         });
   }
}
function vv() {
   return {
      context: void 0,
      data: void 0,
      error: null,
      failureCount: 0,
      failureReason: null,
      isPaused: !1,
      status: "idle",
      variables: void 0,
   };
}
class Nx extends Oi {
   constructor(t) {
      super(),
         (this.config = t || {}),
         (this.mutations = []),
         (this.mutationId = 0);
   }
   build(t, r, n) {
      const i = new $x({
         mutationCache: this,
         logger: t.getLogger(),
         mutationId: ++this.mutationId,
         options: t.defaultMutationOptions(r),
         state: n,
         defaultOptions: r.mutationKey
            ? t.getMutationDefaults(r.mutationKey)
            : void 0,
      });
      return this.add(i), i;
   }
   add(t) {
      this.mutations.push(t), this.notify({ type: "added", mutation: t });
   }
   remove(t) {
      (this.mutations = this.mutations.filter((r) => r !== t)),
         this.notify({ type: "removed", mutation: t });
   }
   clear() {
      Se.batch(() => {
         this.mutations.forEach((t) => {
            this.remove(t);
         });
      });
   }
   getAll() {
      return this.mutations;
   }
   find(t) {
      return (
         typeof t.exact > "u" && (t.exact = !0),
         this.mutations.find((r) => Th(t, r))
      );
   }
   findAll(t) {
      return this.mutations.filter((r) => Th(t, r));
   }
   notify(t) {
      Se.batch(() => {
         this.listeners.forEach(({ listener: r }) => {
            r(t);
         });
      });
   }
   resumePausedMutations() {
      var t;
      return (
         (this.resuming = ((t = this.resuming) != null ? t : Promise.resolve())
            .then(() => {
               const r = this.mutations.filter((n) => n.state.isPaused);
               return Se.batch(() =>
                  r.reduce(
                     (n, i) => n.then(() => i.continue().catch(_t)),
                     Promise.resolve()
                  )
               );
            })
            .then(() => {
               this.resuming = void 0;
            })),
         this.resuming
      );
   }
}
function Lx() {
   return {
      onFetch: (e) => {
         e.fetchFn = () => {
            var t, r, n, i, s, o;
            const a =
                  (t = e.fetchOptions) == null || (r = t.meta) == null
                     ? void 0
                     : r.refetchPage,
               l =
                  (n = e.fetchOptions) == null || (i = n.meta) == null
                     ? void 0
                     : i.fetchMore,
               u = l == null ? void 0 : l.pageParam,
               c = (l == null ? void 0 : l.direction) === "forward",
               d = (l == null ? void 0 : l.direction) === "backward",
               h = ((s = e.state.data) == null ? void 0 : s.pages) || [],
               m = ((o = e.state.data) == null ? void 0 : o.pageParams) || [];
            let y = m,
               w = !1;
            const k = (P) => {
                  Object.defineProperty(P, "signal", {
                     enumerable: !0,
                     get: () => {
                        var C;
                        if ((C = e.signal) != null && C.aborted) w = !0;
                        else {
                           var j;
                           (j = e.signal) == null ||
                              j.addEventListener("abort", () => {
                                 w = !0;
                              });
                        }
                        return e.signal;
                     },
                  });
               },
               g =
                  e.options.queryFn ||
                  (() =>
                     Promise.reject(
                        "Missing queryFn for queryKey '" +
                           e.options.queryHash +
                           "'"
                     )),
               p = (P, C, j, U) => (
                  (y = U ? [C, ...y] : [...y, C]), U ? [j, ...P] : [...P, j]
               ),
               v = (P, C, j, U) => {
                  if (w) return Promise.reject("Cancelled");
                  if (typeof j > "u" && !C && P.length)
                     return Promise.resolve(P);
                  const F = {
                     queryKey: e.queryKey,
                     pageParam: j,
                     meta: e.options.meta,
                  };
                  k(F);
                  const te = g(F);
                  return Promise.resolve(te).then((V) => p(P, j, V, U));
               };
            let b;
            if (!h.length) b = v([]);
            else if (c) {
               const P = typeof u < "u",
                  C = P ? u : Ih(e.options, h);
               b = v(h, P, C);
            } else if (d) {
               const P = typeof u < "u",
                  C = P ? u : Ax(e.options, h);
               b = v(h, P, C, !0);
            } else {
               y = [];
               const P = typeof e.options.getNextPageParam > "u";
               b = (a && h[0] ? a(h[0], 0, h) : !0)
                  ? v([], P, m[0])
                  : Promise.resolve(p([], m[0], h[0]));
               for (let j = 1; j < h.length; j++)
                  b = b.then((U) => {
                     if (a && h[j] ? a(h[j], j, h) : !0) {
                        const te = P ? m[j] : Ih(e.options, U);
                        return v(U, P, te);
                     }
                     return Promise.resolve(p(U, m[j], h[j]));
                  });
            }
            return b.then((P) => ({ pages: P, pageParams: y }));
         };
      },
   };
}
function Ih(e, t) {
   return e.getNextPageParam == null
      ? void 0
      : e.getNextPageParam(t[t.length - 1], t);
}
function Ax(e, t) {
   return e.getPreviousPageParam == null
      ? void 0
      : e.getPreviousPageParam(t[0], t);
}
class Mx {
   constructor(t = {}) {
      (this.queryCache = t.queryCache || new Ix()),
         (this.mutationCache = t.mutationCache || new Nx()),
         (this.logger = t.logger || $d),
         (this.defaultOptions = t.defaultOptions || {}),
         (this.queryDefaults = []),
         (this.mutationDefaults = []),
         (this.mountCount = 0);
   }
   mount() {
      this.mountCount++,
         this.mountCount === 1 &&
            ((this.unsubscribeFocus = Ca.subscribe(() => {
               Ca.isFocused() &&
                  (this.resumePausedMutations(), this.queryCache.onFocus());
            })),
            (this.unsubscribeOnline = Ea.subscribe(() => {
               Ea.isOnline() &&
                  (this.resumePausedMutations(), this.queryCache.onOnline());
            })));
   }
   unmount() {
      var t, r;
      this.mountCount--,
         this.mountCount === 0 &&
            ((t = this.unsubscribeFocus) == null || t.call(this),
            (this.unsubscribeFocus = void 0),
            (r = this.unsubscribeOnline) == null || r.call(this),
            (this.unsubscribeOnline = void 0));
   }
   isFetching(t, r) {
      const [n] = Or(t, r);
      return (n.fetchStatus = "fetching"), this.queryCache.findAll(n).length;
   }
   isMutating(t) {
      return this.mutationCache.findAll({ ...t, fetching: !0 }).length;
   }
   getQueryData(t, r) {
      var n;
      return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state.data;
   }
   ensureQueryData(t, r, n) {
      const i = ts(t, r, n),
         s = this.getQueryData(i.queryKey);
      return s ? Promise.resolve(s) : this.fetchQuery(i);
   }
   getQueriesData(t) {
      return this.getQueryCache()
         .findAll(t)
         .map(({ queryKey: r, state: n }) => {
            const i = n.data;
            return [r, i];
         });
   }
   setQueryData(t, r, n) {
      const i = this.queryCache.find(t),
         s = i == null ? void 0 : i.state.data,
         o = _x(r, s);
      if (typeof o > "u") return;
      const a = ts(t),
         l = this.defaultQueryOptions(a);
      return this.queryCache.build(this, l).setData(o, { ...n, manual: !0 });
   }
   setQueriesData(t, r, n) {
      return Se.batch(() =>
         this.getQueryCache()
            .findAll(t)
            .map(({ queryKey: i }) => [i, this.setQueryData(i, r, n)])
      );
   }
   getQueryState(t, r) {
      var n;
      return (n = this.queryCache.find(t, r)) == null ? void 0 : n.state;
   }
   removeQueries(t, r) {
      const [n] = Or(t, r),
         i = this.queryCache;
      Se.batch(() => {
         i.findAll(n).forEach((s) => {
            i.remove(s);
         });
      });
   }
   resetQueries(t, r, n) {
      const [i, s] = Or(t, r, n),
         o = this.queryCache,
         a = { type: "active", ...i };
      return Se.batch(
         () => (
            o.findAll(i).forEach((l) => {
               l.reset();
            }),
            this.refetchQueries(a, s)
         )
      );
   }
   cancelQueries(t, r, n) {
      const [i, s = {}] = Or(t, r, n);
      typeof s.revert > "u" && (s.revert = !0);
      const o = Se.batch(() =>
         this.queryCache.findAll(i).map((a) => a.cancel(s))
      );
      return Promise.all(o).then(_t).catch(_t);
   }
   invalidateQueries(t, r, n) {
      const [i, s] = Or(t, r, n);
      return Se.batch(() => {
         var o, a;
         if (
            (this.queryCache.findAll(i).forEach((u) => {
               u.invalidate();
            }),
            i.refetchType === "none")
         )
            return Promise.resolve();
         const l = {
            ...i,
            type:
               (o = (a = i.refetchType) != null ? a : i.type) != null
                  ? o
                  : "active",
         };
         return this.refetchQueries(l, s);
      });
   }
   refetchQueries(t, r, n) {
      const [i, s] = Or(t, r, n),
         o = Se.batch(() =>
            this.queryCache
               .findAll(i)
               .filter((l) => !l.isDisabled())
               .map((l) => {
                  var u;
                  return l.fetch(void 0, {
                     ...s,
                     cancelRefetch:
                        (u = s == null ? void 0 : s.cancelRefetch) != null
                           ? u
                           : !0,
                     meta: { refetchPage: i.refetchPage },
                  });
               })
         );
      let a = Promise.all(o).then(_t);
      return (s != null && s.throwOnError) || (a = a.catch(_t)), a;
   }
   fetchQuery(t, r, n) {
      const i = ts(t, r, n),
         s = this.defaultQueryOptions(i);
      typeof s.retry > "u" && (s.retry = !1);
      const o = this.queryCache.build(this, s);
      return o.isStaleByTime(s.staleTime)
         ? o.fetch(s)
         : Promise.resolve(o.state.data);
   }
   prefetchQuery(t, r, n) {
      return this.fetchQuery(t, r, n).then(_t).catch(_t);
   }
   fetchInfiniteQuery(t, r, n) {
      const i = ts(t, r, n);
      return (i.behavior = Lx()), this.fetchQuery(i);
   }
   prefetchInfiniteQuery(t, r, n) {
      return this.fetchInfiniteQuery(t, r, n).then(_t).catch(_t);
   }
   resumePausedMutations() {
      return this.mutationCache.resumePausedMutations();
   }
   getQueryCache() {
      return this.queryCache;
   }
   getMutationCache() {
      return this.mutationCache;
   }
   getLogger() {
      return this.logger;
   }
   getDefaultOptions() {
      return this.defaultOptions;
   }
   setDefaultOptions(t) {
      this.defaultOptions = t;
   }
   setQueryDefaults(t, r) {
      const n = this.queryDefaults.find((i) => gn(t) === gn(i.queryKey));
      n
         ? (n.defaultOptions = r)
         : this.queryDefaults.push({ queryKey: t, defaultOptions: r });
   }
   getQueryDefaults(t) {
      if (!t) return;
      const r = this.queryDefaults.find((n) => Sa(t, n.queryKey));
      return r == null ? void 0 : r.defaultOptions;
   }
   setMutationDefaults(t, r) {
      const n = this.mutationDefaults.find((i) => gn(t) === gn(i.mutationKey));
      n
         ? (n.defaultOptions = r)
         : this.mutationDefaults.push({ mutationKey: t, defaultOptions: r });
   }
   getMutationDefaults(t) {
      if (!t) return;
      const r = this.mutationDefaults.find((n) => Sa(t, n.mutationKey));
      return r == null ? void 0 : r.defaultOptions;
   }
   defaultQueryOptions(t) {
      if (t != null && t._defaulted) return t;
      const r = {
         ...this.defaultOptions.queries,
         ...this.getQueryDefaults(t == null ? void 0 : t.queryKey),
         ...t,
         _defaulted: !0,
      };
      return (
         !r.queryHash && r.queryKey && (r.queryHash = Id(r.queryKey, r)),
         typeof r.refetchOnReconnect > "u" &&
            (r.refetchOnReconnect = r.networkMode !== "always"),
         typeof r.useErrorBoundary > "u" && (r.useErrorBoundary = !!r.suspense),
         r
      );
   }
   defaultMutationOptions(t) {
      return t != null && t._defaulted
         ? t
         : {
              ...this.defaultOptions.mutations,
              ...this.getMutationDefaults(t == null ? void 0 : t.mutationKey),
              ...t,
              _defaulted: !0,
           };
   }
   clear() {
      this.queryCache.clear(), this.mutationCache.clear();
   }
}
class Fx extends Oi {
   constructor(t, r) {
      super(),
         (this.client = t),
         (this.options = r),
         (this.trackedProps = new Set()),
         (this.selectError = null),
         this.bindMethods(),
         this.setOptions(r);
   }
   bindMethods() {
      (this.remove = this.remove.bind(this)),
         (this.refetch = this.refetch.bind(this));
   }
   onSubscribe() {
      this.listeners.size === 1 &&
         (this.currentQuery.addObserver(this),
         $h(this.currentQuery, this.options) && this.executeFetch(),
         this.updateTimers());
   }
   onUnsubscribe() {
      this.hasListeners() || this.destroy();
   }
   shouldFetchOnReconnect() {
      return hc(
         this.currentQuery,
         this.options,
         this.options.refetchOnReconnect
      );
   }
   shouldFetchOnWindowFocus() {
      return hc(
         this.currentQuery,
         this.options,
         this.options.refetchOnWindowFocus
      );
   }
   destroy() {
      (this.listeners = new Set()),
         this.clearStaleTimeout(),
         this.clearRefetchInterval(),
         this.currentQuery.removeObserver(this);
   }
   setOptions(t, r) {
      const n = this.options,
         i = this.currentQuery;
      if (
         ((this.options = this.client.defaultQueryOptions(t)),
         _a(n, this.options) ||
            this.client
               .getQueryCache()
               .notify({
                  type: "observerOptionsUpdated",
                  query: this.currentQuery,
                  observer: this,
               }),
         typeof this.options.enabled < "u" &&
            typeof this.options.enabled != "boolean")
      )
         throw new Error("Expected enabled to be a boolean");
      this.options.queryKey || (this.options.queryKey = n.queryKey),
         this.updateQuery();
      const s = this.hasListeners();
      s && Nh(this.currentQuery, i, this.options, n) && this.executeFetch(),
         this.updateResult(r),
         s &&
            (this.currentQuery !== i ||
               this.options.enabled !== n.enabled ||
               this.options.staleTime !== n.staleTime) &&
            this.updateStaleTimeout();
      const o = this.computeRefetchInterval();
      s &&
         (this.currentQuery !== i ||
            this.options.enabled !== n.enabled ||
            o !== this.currentRefetchInterval) &&
         this.updateRefetchInterval(o);
   }
   getOptimisticResult(t) {
      const r = this.client.getQueryCache().build(this.client, t),
         n = this.createResult(r, t);
      return (
         zx(this, n, t) &&
            ((this.currentResult = n),
            (this.currentResultOptions = this.options),
            (this.currentResultState = this.currentQuery.state)),
         n
      );
   }
   getCurrentResult() {
      return this.currentResult;
   }
   trackResult(t) {
      const r = {};
      return (
         Object.keys(t).forEach((n) => {
            Object.defineProperty(r, n, {
               configurable: !1,
               enumerable: !0,
               get: () => (this.trackedProps.add(n), t[n]),
            });
         }),
         r
      );
   }
   getCurrentQuery() {
      return this.currentQuery;
   }
   remove() {
      this.client.getQueryCache().remove(this.currentQuery);
   }
   refetch({ refetchPage: t, ...r } = {}) {
      return this.fetch({ ...r, meta: { refetchPage: t } });
   }
   fetchOptimistic(t) {
      const r = this.client.defaultQueryOptions(t),
         n = this.client.getQueryCache().build(this.client, r);
      return (
         (n.isFetchingOptimistic = !0),
         n.fetch().then(() => this.createResult(n, r))
      );
   }
   fetch(t) {
      var r;
      return this.executeFetch({
         ...t,
         cancelRefetch: (r = t.cancelRefetch) != null ? r : !0,
      }).then(() => (this.updateResult(), this.currentResult));
   }
   executeFetch(t) {
      this.updateQuery();
      let r = this.currentQuery.fetch(this.options, t);
      return (t != null && t.throwOnError) || (r = r.catch(_t)), r;
   }
   updateStaleTimeout() {
      if (
         (this.clearStaleTimeout(),
         As || this.currentResult.isStale || !cc(this.options.staleTime))
      )
         return;
      const r =
         cv(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1;
      this.staleTimeoutId = setTimeout(() => {
         this.currentResult.isStale || this.updateResult();
      }, r);
   }
   computeRefetchInterval() {
      var t;
      return typeof this.options.refetchInterval == "function"
         ? this.options.refetchInterval(
              this.currentResult.data,
              this.currentQuery
           )
         : (t = this.options.refetchInterval) != null
         ? t
         : !1;
   }
   updateRefetchInterval(t) {
      this.clearRefetchInterval(),
         (this.currentRefetchInterval = t),
         !(
            As ||
            this.options.enabled === !1 ||
            !cc(this.currentRefetchInterval) ||
            this.currentRefetchInterval === 0
         ) &&
            (this.refetchIntervalId = setInterval(() => {
               (this.options.refetchIntervalInBackground || Ca.isFocused()) &&
                  this.executeFetch();
            }, this.currentRefetchInterval));
   }
   updateTimers() {
      this.updateStaleTimeout(),
         this.updateRefetchInterval(this.computeRefetchInterval());
   }
   clearStaleTimeout() {
      this.staleTimeoutId &&
         (clearTimeout(this.staleTimeoutId), (this.staleTimeoutId = void 0));
   }
   clearRefetchInterval() {
      this.refetchIntervalId &&
         (clearInterval(this.refetchIntervalId),
         (this.refetchIntervalId = void 0));
   }
   createResult(t, r) {
      const n = this.currentQuery,
         i = this.options,
         s = this.currentResult,
         o = this.currentResultState,
         a = this.currentResultOptions,
         l = t !== n,
         u = l ? t.state : this.currentQueryInitialState,
         c = l ? this.currentResult : this.previousQueryResult,
         { state: d } = t;
      let {
            dataUpdatedAt: h,
            error: m,
            errorUpdatedAt: y,
            fetchStatus: w,
            status: k,
         } = d,
         g = !1,
         p = !1,
         v;
      if (r._optimisticResults) {
         const j = this.hasListeners(),
            U = !j && $h(t, r),
            F = j && Nh(t, n, r, i);
         (U || F) &&
            ((w = nl(t.options.networkMode) ? "fetching" : "paused"),
            h || (k = "loading")),
            r._optimisticResults === "isRestoring" && (w = "idle");
      }
      if (
         r.keepPreviousData &&
         !d.dataUpdatedAt &&
         c != null &&
         c.isSuccess &&
         k !== "error"
      )
         (v = c.data), (h = c.dataUpdatedAt), (k = c.status), (g = !0);
      else if (r.select && typeof d.data < "u")
         if (
            s &&
            d.data === (o == null ? void 0 : o.data) &&
            r.select === this.selectFn
         )
            v = this.selectResult;
         else
            try {
               (this.selectFn = r.select),
                  (v = r.select(d.data)),
                  (v = fc(s == null ? void 0 : s.data, v, r)),
                  (this.selectResult = v),
                  (this.selectError = null);
            } catch (j) {
               this.selectError = j;
            }
      else v = d.data;
      if (typeof r.placeholderData < "u" && typeof v > "u" && k === "loading") {
         let j;
         if (
            s != null &&
            s.isPlaceholderData &&
            r.placeholderData === (a == null ? void 0 : a.placeholderData)
         )
            j = s.data;
         else if (
            ((j =
               typeof r.placeholderData == "function"
                  ? r.placeholderData()
                  : r.placeholderData),
            r.select && typeof j < "u")
         )
            try {
               (j = r.select(j)), (this.selectError = null);
            } catch (U) {
               this.selectError = U;
            }
         typeof j < "u" &&
            ((k = "success"),
            (v = fc(s == null ? void 0 : s.data, j, r)),
            (p = !0));
      }
      this.selectError &&
         ((m = this.selectError),
         (v = this.selectResult),
         (y = Date.now()),
         (k = "error"));
      const b = w === "fetching",
         _ = k === "loading",
         P = k === "error";
      return {
         status: k,
         fetchStatus: w,
         isLoading: _,
         isSuccess: k === "success",
         isError: P,
         isInitialLoading: _ && b,
         data: v,
         dataUpdatedAt: h,
         error: m,
         errorUpdatedAt: y,
         failureCount: d.fetchFailureCount,
         failureReason: d.fetchFailureReason,
         errorUpdateCount: d.errorUpdateCount,
         isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
         isFetchedAfterMount:
            d.dataUpdateCount > u.dataUpdateCount ||
            d.errorUpdateCount > u.errorUpdateCount,
         isFetching: b,
         isRefetching: b && !_,
         isLoadingError: P && d.dataUpdatedAt === 0,
         isPaused: w === "paused",
         isPlaceholderData: p,
         isPreviousData: g,
         isRefetchError: P && d.dataUpdatedAt !== 0,
         isStale: Nd(t, r),
         refetch: this.refetch,
         remove: this.remove,
      };
   }
   updateResult(t) {
      const r = this.currentResult,
         n = this.createResult(this.currentQuery, this.options);
      if (
         ((this.currentResultState = this.currentQuery.state),
         (this.currentResultOptions = this.options),
         _a(n, r))
      )
         return;
      this.currentResult = n;
      const i = { cache: !0 },
         s = () => {
            if (!r) return !0;
            const { notifyOnChangeProps: o } = this.options,
               a = typeof o == "function" ? o() : o;
            if (a === "all" || (!a && !this.trackedProps.size)) return !0;
            const l = new Set(a ?? this.trackedProps);
            return (
               this.options.useErrorBoundary && l.add("error"),
               Object.keys(this.currentResult).some((u) => {
                  const c = u;
                  return this.currentResult[c] !== r[c] && l.has(c);
               })
            );
         };
      (t == null ? void 0 : t.listeners) !== !1 && s() && (i.listeners = !0),
         this.notify({ ...i, ...t });
   }
   updateQuery() {
      const t = this.client.getQueryCache().build(this.client, this.options);
      if (t === this.currentQuery) return;
      const r = this.currentQuery;
      (this.currentQuery = t),
         (this.currentQueryInitialState = t.state),
         (this.previousQueryResult = this.currentResult),
         this.hasListeners() &&
            (r == null || r.removeObserver(this), t.addObserver(this));
   }
   onQueryUpdate(t) {
      const r = {};
      t.type === "success"
         ? (r.onSuccess = !t.manual)
         : t.type === "error" && !Fo(t.error) && (r.onError = !0),
         this.updateResult(r),
         this.hasListeners() && this.updateTimers();
   }
   notify(t) {
      Se.batch(() => {
         if (t.onSuccess) {
            var r, n, i, s;
            (r = (n = this.options).onSuccess) == null ||
               r.call(n, this.currentResult.data),
               (i = (s = this.options).onSettled) == null ||
                  i.call(s, this.currentResult.data, null);
         } else if (t.onError) {
            var o, a, l, u;
            (o = (a = this.options).onError) == null ||
               o.call(a, this.currentResult.error),
               (l = (u = this.options).onSettled) == null ||
                  l.call(u, void 0, this.currentResult.error);
         }
         t.listeners &&
            this.listeners.forEach(({ listener: c }) => {
               c(this.currentResult);
            }),
            t.cache &&
               this.client
                  .getQueryCache()
                  .notify({
                     query: this.currentQuery,
                     type: "observerResultsUpdated",
                  });
      });
   }
}
function Ux(e, t) {
   return (
      t.enabled !== !1 &&
      !e.state.dataUpdatedAt &&
      !(e.state.status === "error" && t.retryOnMount === !1)
   );
}
function $h(e, t) {
   return Ux(e, t) || (e.state.dataUpdatedAt > 0 && hc(e, t, t.refetchOnMount));
}
function hc(e, t, r) {
   if (t.enabled !== !1) {
      const n = typeof r == "function" ? r(e) : r;
      return n === "always" || (n !== !1 && Nd(e, t));
   }
   return !1;
}
function Nh(e, t, r, n) {
   return (
      r.enabled !== !1 &&
      (e !== t || n.enabled === !1) &&
      (!r.suspense || e.state.status !== "error") &&
      Nd(e, r)
   );
}
function Nd(e, t) {
   return e.isStaleByTime(t.staleTime);
}
function zx(e, t, r) {
   return r.keepPreviousData
      ? !1
      : r.placeholderData !== void 0
      ? t.isPlaceholderData
      : !_a(e.getCurrentResult(), t);
}
let Bx = class extends Oi {
   constructor(t, r) {
      super(),
         (this.client = t),
         this.setOptions(r),
         this.bindMethods(),
         this.updateResult();
   }
   bindMethods() {
      (this.mutate = this.mutate.bind(this)),
         (this.reset = this.reset.bind(this));
   }
   setOptions(t) {
      var r;
      const n = this.options;
      (this.options = this.client.defaultMutationOptions(t)),
         _a(n, this.options) ||
            this.client
               .getMutationCache()
               .notify({
                  type: "observerOptionsUpdated",
                  mutation: this.currentMutation,
                  observer: this,
               }),
         (r = this.currentMutation) == null || r.setOptions(this.options);
   }
   onUnsubscribe() {
      if (!this.hasListeners()) {
         var t;
         (t = this.currentMutation) == null || t.removeObserver(this);
      }
   }
   onMutationUpdate(t) {
      this.updateResult();
      const r = { listeners: !0 };
      t.type === "success"
         ? (r.onSuccess = !0)
         : t.type === "error" && (r.onError = !0),
         this.notify(r);
   }
   getCurrentResult() {
      return this.currentResult;
   }
   reset() {
      (this.currentMutation = void 0),
         this.updateResult(),
         this.notify({ listeners: !0 });
   }
   mutate(t, r) {
      return (
         (this.mutateOptions = r),
         this.currentMutation && this.currentMutation.removeObserver(this),
         (this.currentMutation = this.client
            .getMutationCache()
            .build(this.client, {
               ...this.options,
               variables: typeof t < "u" ? t : this.options.variables,
            })),
         this.currentMutation.addObserver(this),
         this.currentMutation.execute()
      );
   }
   updateResult() {
      const t = this.currentMutation ? this.currentMutation.state : vv(),
         r = {
            ...t,
            isLoading: t.status === "loading",
            isSuccess: t.status === "success",
            isError: t.status === "error",
            isIdle: t.status === "idle",
            mutate: this.mutate,
            reset: this.reset,
         };
      this.currentResult = r;
   }
   notify(t) {
      Se.batch(() => {
         if (this.mutateOptions && this.hasListeners()) {
            if (t.onSuccess) {
               var r, n, i, s;
               (r = (n = this.mutateOptions).onSuccess) == null ||
                  r.call(
                     n,
                     this.currentResult.data,
                     this.currentResult.variables,
                     this.currentResult.context
                  ),
                  (i = (s = this.mutateOptions).onSettled) == null ||
                     i.call(
                        s,
                        this.currentResult.data,
                        null,
                        this.currentResult.variables,
                        this.currentResult.context
                     );
            } else if (t.onError) {
               var o, a, l, u;
               (o = (a = this.mutateOptions).onError) == null ||
                  o.call(
                     a,
                     this.currentResult.error,
                     this.currentResult.variables,
                     this.currentResult.context
                  ),
                  (l = (u = this.mutateOptions).onSettled) == null ||
                     l.call(
                        u,
                        void 0,
                        this.currentResult.error,
                        this.currentResult.variables,
                        this.currentResult.context
                     );
            }
         }
         t.listeners &&
            this.listeners.forEach(({ listener: c }) => {
               c(this.currentResult);
            });
      });
   }
};
var yv = { exports: {} },
   wv = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yi = S;
function qx(e, t) {
   return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Vx = typeof Object.is == "function" ? Object.is : qx,
   Wx = yi.useState,
   Hx = yi.useEffect,
   Qx = yi.useLayoutEffect,
   Gx = yi.useDebugValue;
function Kx(e, t) {
   var r = t(),
      n = Wx({ inst: { value: r, getSnapshot: t } }),
      i = n[0].inst,
      s = n[1];
   return (
      Qx(
         function () {
            (i.value = r), (i.getSnapshot = t), Vl(i) && s({ inst: i });
         },
         [e, r, t]
      ),
      Hx(
         function () {
            return (
               Vl(i) && s({ inst: i }),
               e(function () {
                  Vl(i) && s({ inst: i });
               })
            );
         },
         [e]
      ),
      Gx(r),
      r
   );
}
function Vl(e) {
   var t = e.getSnapshot;
   e = e.value;
   try {
      var r = t();
      return !Vx(e, r);
   } catch {
      return !0;
   }
}
function Yx(e, t) {
   return t();
}
var Jx =
   typeof window > "u" ||
   typeof window.document > "u" ||
   typeof window.document.createElement > "u"
      ? Yx
      : Kx;
wv.useSyncExternalStore =
   yi.useSyncExternalStore !== void 0 ? yi.useSyncExternalStore : Jx;
yv.exports = wv;
var Xx = yv.exports;
const xv = Xx.useSyncExternalStore,
   Lh = S.createContext(void 0),
   bv = S.createContext(!1);
function kv(e, t) {
   return (
      e ||
      (t && typeof window < "u"
         ? (window.ReactQueryClientContext ||
              (window.ReactQueryClientContext = Lh),
           window.ReactQueryClientContext)
         : Lh)
   );
}
const It = ({ context: e } = {}) => {
      const t = S.useContext(kv(e, S.useContext(bv)));
      if (!t)
         throw new Error(
            "No QueryClient set, use QueryClientProvider to set one"
         );
      return t;
   },
   Zx = ({ client: e, children: t, context: r, contextSharing: n = !1 }) => {
      S.useEffect(
         () => (
            e.mount(),
            () => {
               e.unmount();
            }
         ),
         [e]
      );
      const i = kv(r, n);
      return S.createElement(
         bv.Provider,
         { value: !r && n },
         S.createElement(i.Provider, { value: e }, t)
      );
   },
   Sv = S.createContext(!1),
   eb = () => S.useContext(Sv);
Sv.Provider;
function tb() {
   let e = !1;
   return {
      clearReset: () => {
         e = !1;
      },
      reset: () => {
         e = !0;
      },
      isReset: () => e,
   };
}
const rb = S.createContext(tb()),
   nb = () => S.useContext(rb);
function _v(e, t) {
   return typeof e == "function" ? e(...t) : !!e;
}
const ib = (e, t) => {
      (e.suspense || e.useErrorBoundary) &&
         (t.isReset() || (e.retryOnMount = !1));
   },
   sb = (e) => {
      S.useEffect(() => {
         e.clearReset();
      }, [e]);
   },
   ob = ({ result: e, errorResetBoundary: t, useErrorBoundary: r, query: n }) =>
      e.isError && !t.isReset() && !e.isFetching && _v(r, [e.error, n]),
   ab = (e) => {
      e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
   },
   lb = (e, t) => e.isLoading && e.isFetching && !t,
   ub = (e, t, r) => (e == null ? void 0 : e.suspense) && lb(t, r),
   cb = (e, t, r) =>
      t
         .fetchOptimistic(e)
         .then(({ data: n }) => {
            e.onSuccess == null || e.onSuccess(n),
               e.onSettled == null || e.onSettled(n, null);
         })
         .catch((n) => {
            r.clearReset(),
               e.onError == null || e.onError(n),
               e.onSettled == null || e.onSettled(void 0, n);
         });
function db(e, t) {
   const r = It({ context: e.context }),
      n = eb(),
      i = nb(),
      s = r.defaultQueryOptions(e);
   (s._optimisticResults = n ? "isRestoring" : "optimistic"),
      s.onError && (s.onError = Se.batchCalls(s.onError)),
      s.onSuccess && (s.onSuccess = Se.batchCalls(s.onSuccess)),
      s.onSettled && (s.onSettled = Se.batchCalls(s.onSettled)),
      ab(s),
      ib(s, i),
      sb(i);
   const [o] = S.useState(() => new t(r, s)),
      a = o.getOptimisticResult(s);
   if (
      (xv(
         S.useCallback(
            (l) => {
               const u = n ? () => {} : o.subscribe(Se.batchCalls(l));
               return o.updateResult(), u;
            },
            [o, n]
         ),
         () => o.getCurrentResult(),
         () => o.getCurrentResult()
      ),
      S.useEffect(() => {
         o.setOptions(s, { listeners: !1 });
      }, [s, o]),
      ub(s, a, n))
   )
      throw cb(s, o, i);
   if (
      ob({
         result: a,
         errorResetBoundary: i,
         useErrorBoundary: s.useErrorBoundary,
         query: o.getCurrentQuery(),
      })
   )
      throw a.error;
   return s.notifyOnChangeProps ? a : o.trackResult(a);
}
function Ys(e, t, r) {
   const n = ts(e, t, r);
   return db(n, Fx);
}
function kr(e, t, r) {
   const n = Cx(e, t, r),
      i = It({ context: n.context }),
      [s] = S.useState(() => new Bx(i, n));
   S.useEffect(() => {
      s.setOptions(n);
   }, [s, n]);
   const o = xv(
         S.useCallback((l) => s.subscribe(Se.batchCalls(l)), [s]),
         () => s.getCurrentResult(),
         () => s.getCurrentResult()
      ),
      a = S.useCallback(
         (l, u) => {
            s.mutate(l, u).catch(fb);
         },
         [s]
      );
   if (o.error && _v(s.options.useErrorBoundary, [o.error])) throw o.error;
   return { ...o, mutate: a, mutateAsync: o.mutate };
}
function fb() {}
var Xe = function () {
   return (
      (Xe =
         Object.assign ||
         function (t) {
            for (var r, n = 1, i = arguments.length; n < i; n++) {
               r = arguments[n];
               for (var s in r)
                  Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
            }
            return t;
         }),
      Xe.apply(this, arguments)
   );
};
function wi(e, t, r) {
   if (r || arguments.length === 2)
      for (var n = 0, i = t.length, s; n < i; n++)
         (s || !(n in t)) &&
            (s || (s = Array.prototype.slice.call(t, 0, n)), (s[n] = t[n]));
   return e.concat(s || Array.prototype.slice.call(t));
}
var he = "-ms-",
   ps = "-moz-",
   ee = "-webkit-",
   Cv = "comm",
   il = "rule",
   Ld = "decl",
   hb = "@import",
   Ev = "@keyframes",
   pb = "@layer",
   mb = Math.abs,
   Ad = String.fromCharCode,
   pc = Object.assign;
function gb(e, t) {
   return Le(e, 0) ^ 45
      ? (((((((t << 2) ^ Le(e, 0)) << 2) ^ Le(e, 1)) << 2) ^ Le(e, 2)) << 2) ^
           Le(e, 3)
      : 0;
}
function Pv(e) {
   return e.trim();
}
function cr(e, t) {
   return (e = t.exec(e)) ? e[0] : e;
}
function H(e, t, r) {
   return e.replace(t, r);
}
function Uo(e, t) {
   return e.indexOf(t);
}
function Le(e, t) {
   return e.charCodeAt(t) | 0;
}
function xi(e, t, r) {
   return e.slice(t, r);
}
function Jt(e) {
   return e.length;
}
function Tv(e) {
   return e.length;
}
function rs(e, t) {
   return t.push(e), e;
}
function vb(e, t) {
   return e.map(t).join("");
}
function Ah(e, t) {
   return e.filter(function (r) {
      return !cr(r, t);
   });
}
var sl = 1,
   bi = 1,
   jv = 0,
   Rt = 0,
   Te = 0,
   Di = "";
function ol(e, t, r, n, i, s, o, a) {
   return {
      value: e,
      root: t,
      parent: r,
      type: n,
      props: i,
      children: s,
      line: sl,
      column: bi,
      length: o,
      return: "",
      siblings: a,
   };
}
function Pr(e, t) {
   return pc(
      ol("", null, null, "", null, null, 0, e.siblings),
      e,
      { length: -e.length },
      t
   );
}
function Nn(e) {
   for (; e.root; ) e = Pr(e.root, { children: [e] });
   rs(e, e.siblings);
}
function yb() {
   return Te;
}
function wb() {
   return (
      (Te = Rt > 0 ? Le(Di, --Rt) : 0), bi--, Te === 10 && ((bi = 1), sl--), Te
   );
}
function Wt() {
   return (
      (Te = Rt < jv ? Le(Di, Rt++) : 0), bi++, Te === 10 && ((bi = 1), sl++), Te
   );
}
function kn() {
   return Le(Di, Rt);
}
function zo() {
   return Rt;
}
function al(e, t) {
   return xi(Di, e, t);
}
function mc(e) {
   switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
         return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
         return 4;
      case 58:
         return 3;
      case 34:
      case 39:
      case 40:
      case 91:
         return 2;
      case 41:
      case 93:
         return 1;
   }
   return 0;
}
function xb(e) {
   return (sl = bi = 1), (jv = Jt((Di = e))), (Rt = 0), [];
}
function bb(e) {
   return (Di = ""), e;
}
function Wl(e) {
   return Pv(al(Rt - 1, gc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function kb(e) {
   for (; (Te = kn()) && Te < 33; ) Wt();
   return mc(e) > 2 || mc(Te) > 3 ? "" : " ";
}
function Sb(e, t) {
   for (
      ;
      --t &&
      Wt() &&
      !(Te < 48 || Te > 102 || (Te > 57 && Te < 65) || (Te > 70 && Te < 97));

   );
   return al(e, zo() + (t < 6 && kn() == 32 && Wt() == 32));
}
function gc(e) {
   for (; Wt(); )
      switch (Te) {
         case e:
            return Rt;
         case 34:
         case 39:
            e !== 34 && e !== 39 && gc(Te);
            break;
         case 40:
            e === 41 && gc(e);
            break;
         case 92:
            Wt();
            break;
      }
   return Rt;
}
function _b(e, t) {
   for (; Wt() && e + Te !== 47 + 10; )
      if (e + Te === 42 + 42 && kn() === 47) break;
   return "/*" + al(t, Rt - 1) + "*" + Ad(e === 47 ? e : Wt());
}
function Cb(e) {
   for (; !mc(kn()); ) Wt();
   return al(e, Rt);
}
function Eb(e) {
   return bb(Bo("", null, null, null, [""], (e = xb(e)), 0, [0], e));
}
function Bo(e, t, r, n, i, s, o, a, l) {
   for (
      var u = 0,
         c = 0,
         d = o,
         h = 0,
         m = 0,
         y = 0,
         w = 1,
         k = 1,
         g = 1,
         p = 0,
         v = "",
         b = i,
         _ = s,
         P = n,
         C = v;
      k;

   )
      switch (((y = p), (p = Wt()))) {
         case 40:
            if (y != 108 && Le(C, d - 1) == 58) {
               Uo((C += H(Wl(p), "&", "&\f")), "&\f") != -1 && (g = -1);
               break;
            }
         case 34:
         case 39:
         case 91:
            C += Wl(p);
            break;
         case 9:
         case 10:
         case 13:
         case 32:
            C += kb(y);
            break;
         case 92:
            C += Sb(zo() - 1, 7);
            continue;
         case 47:
            switch (kn()) {
               case 42:
               case 47:
                  rs(Pb(_b(Wt(), zo()), t, r, l), l);
                  break;
               default:
                  C += "/";
            }
            break;
         case 123 * w:
            a[u++] = Jt(C) * g;
         case 125 * w:
         case 59:
         case 0:
            switch (p) {
               case 0:
               case 125:
                  k = 0;
               case 59 + c:
                  g == -1 && (C = H(C, /\f/g, "")),
                     m > 0 &&
                        Jt(C) - d &&
                        rs(
                           m > 32
                              ? Fh(C + ";", n, r, d - 1, l)
                              : Fh(H(C, " ", "") + ";", n, r, d - 2, l),
                           l
                        );
                  break;
               case 59:
                  C += ";";
               default:
                  if (
                     (rs(
                        (P = Mh(
                           C,
                           t,
                           r,
                           u,
                           c,
                           i,
                           a,
                           v,
                           (b = []),
                           (_ = []),
                           d,
                           s
                        )),
                        s
                     ),
                     p === 123)
                  )
                     if (c === 0) Bo(C, t, P, P, b, s, d, a, _);
                     else
                        switch (h === 99 && Le(C, 3) === 110 ? 100 : h) {
                           case 100:
                           case 108:
                           case 109:
                           case 115:
                              Bo(
                                 e,
                                 P,
                                 P,
                                 n &&
                                    rs(
                                       Mh(
                                          e,
                                          P,
                                          P,
                                          0,
                                          0,
                                          i,
                                          a,
                                          v,
                                          i,
                                          (b = []),
                                          d,
                                          _
                                       ),
                                       _
                                    ),
                                 i,
                                 _,
                                 d,
                                 a,
                                 n ? b : _
                              );
                              break;
                           default:
                              Bo(C, P, P, P, [""], _, 0, a, _);
                        }
            }
            (u = c = m = 0), (w = g = 1), (v = C = ""), (d = o);
            break;
         case 58:
            (d = 1 + Jt(C)), (m = y);
         default:
            if (w < 1) {
               if (p == 123) --w;
               else if (p == 125 && w++ == 0 && wb() == 125) continue;
            }
            switch (((C += Ad(p)), p * w)) {
               case 38:
                  g = c > 0 ? 1 : ((C += "\f"), -1);
                  break;
               case 44:
                  (a[u++] = (Jt(C) - 1) * g), (g = 1);
                  break;
               case 64:
                  kn() === 45 && (C += Wl(Wt())),
                     (h = kn()),
                     (c = d = Jt((v = C += Cb(zo())))),
                     p++;
                  break;
               case 45:
                  y === 45 && Jt(C) == 2 && (w = 0);
            }
      }
   return s;
}
function Mh(e, t, r, n, i, s, o, a, l, u, c, d) {
   for (
      var h = i - 1, m = i === 0 ? s : [""], y = Tv(m), w = 0, k = 0, g = 0;
      w < n;
      ++w
   )
      for (var p = 0, v = xi(e, h + 1, (h = mb((k = o[w])))), b = e; p < y; ++p)
         (b = Pv(k > 0 ? m[p] + " " + v : H(v, /&\f/g, m[p]))) && (l[g++] = b);
   return ol(e, t, r, i === 0 ? il : a, l, u, c, d);
}
function Pb(e, t, r, n) {
   return ol(e, t, r, Cv, Ad(yb()), xi(e, 2, -2), 0, n);
}
function Fh(e, t, r, n, i) {
   return ol(e, t, r, Ld, xi(e, 0, n), xi(e, n + 1, -1), n, i);
}
function Ov(e, t, r) {
   switch (gb(e, t)) {
      case 5103:
         return ee + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
         return ee + e + e;
      case 4789:
         return ps + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
         return ee + e + ps + e + he + e + e;
      case 5936:
         switch (Le(e, t + 11)) {
            case 114:
               return ee + e + he + H(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
            case 108:
               return ee + e + he + H(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
            case 45:
               return ee + e + he + H(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
         }
      case 6828:
      case 4268:
      case 2903:
         return ee + e + he + e + e;
      case 6165:
         return ee + e + he + "flex-" + e + e;
      case 5187:
         return (
            ee +
            e +
            H(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + he + "flex-$1$2") +
            e
         );
      case 5443:
         return (
            ee +
            e +
            he +
            "flex-item-" +
            H(e, /flex-|-self/g, "") +
            (cr(e, /flex-|baseline/)
               ? ""
               : he + "grid-row-" + H(e, /flex-|-self/g, "")) +
            e
         );
      case 4675:
         return (
            ee +
            e +
            he +
            "flex-line-pack" +
            H(e, /align-content|flex-|-self/g, "") +
            e
         );
      case 5548:
         return ee + e + he + H(e, "shrink", "negative") + e;
      case 5292:
         return ee + e + he + H(e, "basis", "preferred-size") + e;
      case 6060:
         return (
            ee +
            "box-" +
            H(e, "-grow", "") +
            ee +
            e +
            he +
            H(e, "grow", "positive") +
            e
         );
      case 4554:
         return ee + H(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
      case 6187:
         return (
            H(
               H(H(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"),
               e,
               ""
            ) + e
         );
      case 5495:
      case 3959:
         return H(e, /(image-set\([^]*)/, ee + "$1$`$1");
      case 4968:
         return (
            H(
               H(
                  e,
                  /(.+:)(flex-)?(.*)/,
                  ee + "box-pack:$3" + he + "flex-pack:$3"
               ),
               /s.+-b[^;]+/,
               "justify"
            ) +
            ee +
            e +
            e
         );
      case 4200:
         if (!cr(e, /flex-|baseline/))
            return he + "grid-column-align" + xi(e, t) + e;
         break;
      case 2592:
      case 3360:
         return he + H(e, "template-", "") + e;
      case 4384:
      case 3616:
         return r &&
            r.some(function (n, i) {
               return (t = i), cr(n.props, /grid-\w+-end/);
            })
            ? ~Uo(e + (r = r[t].value), "span")
               ? e
               : he +
                 H(e, "-start", "") +
                 e +
                 he +
                 "grid-row-span:" +
                 (~Uo(r, "span")
                    ? cr(r, /\d+/)
                    : +cr(r, /\d+/) - +cr(e, /\d+/)) +
                 ";"
            : he + H(e, "-start", "") + e;
      case 4896:
      case 4128:
         return r &&
            r.some(function (n) {
               return cr(n.props, /grid-\w+-start/);
            })
            ? e
            : he + H(H(e, "-end", "-span"), "span ", "") + e;
      case 4095:
      case 3583:
      case 4068:
      case 2532:
         return H(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
         if (Jt(e) - 1 - t > 6)
            switch (Le(e, t + 1)) {
               case 109:
                  if (Le(e, t + 4) !== 45) break;
               case 102:
                  return (
                     H(
                        e,
                        /(.+:)(.+)-([^]+)/,
                        "$1" +
                           ee +
                           "$2-$3$1" +
                           ps +
                           (Le(e, t + 3) == 108 ? "$3" : "$2-$3")
                     ) + e
                  );
               case 115:
                  return ~Uo(e, "stretch")
                     ? Ov(H(e, "stretch", "fill-available"), t, r) + e
                     : e;
            }
         break;
      case 5152:
      case 5920:
         return H(
            e,
            /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
            function (n, i, s, o, a, l, u) {
               return (
                  he +
                  i +
                  ":" +
                  s +
                  u +
                  (o ? he + i + "-span:" + (a ? l : +l - +s) + u : "") +
                  e
               );
            }
         );
      case 4949:
         if (Le(e, t + 6) === 121) return H(e, ":", ":" + ee) + e;
         break;
      case 6444:
         switch (Le(e, Le(e, 14) === 45 ? 18 : 11)) {
            case 120:
               return (
                  H(
                     e,
                     /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                     "$1" +
                        ee +
                        (Le(e, 14) === 45 ? "inline-" : "") +
                        "box$3$1" +
                        ee +
                        "$2$3$1" +
                        he +
                        "$2box$3"
                  ) + e
               );
            case 100:
               return H(e, ":", ":" + he) + e;
         }
         break;
      case 5719:
      case 2647:
      case 2135:
      case 3927:
      case 2391:
         return H(e, "scroll-", "scroll-snap-") + e;
   }
   return e;
}
function Pa(e, t) {
   for (var r = "", n = 0; n < e.length; n++) r += t(e[n], n, e, t) || "";
   return r;
}
function Tb(e, t, r, n) {
   switch (e.type) {
      case pb:
         if (e.children.length) break;
      case hb:
      case Ld:
         return (e.return = e.return || e.value);
      case Cv:
         return "";
      case Ev:
         return (e.return = e.value + "{" + Pa(e.children, n) + "}");
      case il:
         if (!Jt((e.value = e.props.join(",")))) return "";
   }
   return Jt((r = Pa(e.children, n)))
      ? (e.return = e.value + "{" + r + "}")
      : "";
}
function jb(e) {
   var t = Tv(e);
   return function (r, n, i, s) {
      for (var o = "", a = 0; a < t; a++) o += e[a](r, n, i, s) || "";
      return o;
   };
}
function Ob(e) {
   return function (t) {
      t.root || ((t = t.return) && e(t));
   };
}
function Db(e, t, r, n) {
   if (e.length > -1 && !e.return)
      switch (e.type) {
         case Ld:
            e.return = Ov(e.value, e.length, r);
            return;
         case Ev:
            return Pa([Pr(e, { value: H(e.value, "@", "@" + ee) })], n);
         case il:
            if (e.length)
               return vb((r = e.props), function (i) {
                  switch (cr(i, (n = /(::plac\w+|:read-\w+)/))) {
                     case ":read-only":
                     case ":read-write":
                        Nn(
                           Pr(e, {
                              props: [H(i, /:(read-\w+)/, ":" + ps + "$1")],
                           })
                        ),
                           Nn(Pr(e, { props: [i] })),
                           pc(e, { props: Ah(r, n) });
                        break;
                     case "::placeholder":
                        Nn(
                           Pr(e, {
                              props: [
                                 H(i, /:(plac\w+)/, ":" + ee + "input-$1"),
                              ],
                           })
                        ),
                           Nn(
                              Pr(e, {
                                 props: [H(i, /:(plac\w+)/, ":" + ps + "$1")],
                              })
                           ),
                           Nn(
                              Pr(e, {
                                 props: [H(i, /:(plac\w+)/, he + "input-$1")],
                              })
                           ),
                           Nn(Pr(e, { props: [i] })),
                           pc(e, { props: Ah(r, n) });
                        break;
                  }
                  return "";
               });
      }
}
var Rb = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
   },
   ki =
      (typeof process < "u" &&
         process.env !== void 0 &&
         ({}.REACT_APP_SC_ATTR || {}.SC_ATTR)) ||
      "data-styled",
   Md = typeof window < "u" && "HTMLElement" in window,
   Ib = !!(typeof SC_DISABLE_SPEEDY == "boolean"
      ? SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== void 0 &&
        {}.REACT_APP_SC_DISABLE_SPEEDY !== ""
      ? {}.REACT_APP_SC_DISABLE_SPEEDY !== "false" &&
        {}.REACT_APP_SC_DISABLE_SPEEDY
      : typeof process < "u" &&
        process.env !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== void 0 &&
        {}.SC_DISABLE_SPEEDY !== "" &&
        {}.SC_DISABLE_SPEEDY !== "false" &&
        {}.SC_DISABLE_SPEEDY),
   $b = {},
   ll = Object.freeze([]),
   Si = Object.freeze({});
function Dv(e, t, r) {
   return (
      r === void 0 && (r = Si), (e.theme !== r.theme && e.theme) || t || r.theme
   );
}
var Rv = new Set([
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "tr",
      "track",
      "u",
      "ul",
      "use",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "marker",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
   ]),
   Nb = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
   Lb = /(^-|-$)/g;
function Uh(e) {
   return e.replace(Nb, "-").replace(Lb, "");
}
var Ab = /(a)(d)/gi,
   zh = function (e) {
      return String.fromCharCode(e + (e > 25 ? 39 : 97));
   };
function vc(e) {
   var t,
      r = "";
   for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = zh(t % 52) + r;
   return (zh(t % 52) + r).replace(Ab, "$1-$2");
}
var Hl,
   ti = function (e, t) {
      for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
      return e;
   },
   Iv = function (e) {
      return ti(5381, e);
   };
function Fd(e) {
   return vc(Iv(e) >>> 0);
}
function Mb(e) {
   return e.displayName || e.name || "Component";
}
function Ql(e) {
   return typeof e == "string" && !0;
}
var $v = typeof Symbol == "function" && Symbol.for,
   Nv = $v ? Symbol.for("react.memo") : 60115,
   Fb = $v ? Symbol.for("react.forward_ref") : 60112,
   Ub = {
      childContextTypes: !0,
      contextType: !0,
      contextTypes: !0,
      defaultProps: !0,
      displayName: !0,
      getDefaultProps: !0,
      getDerivedStateFromError: !0,
      getDerivedStateFromProps: !0,
      mixins: !0,
      propTypes: !0,
      type: !0,
   },
   zb = {
      name: !0,
      length: !0,
      prototype: !0,
      caller: !0,
      callee: !0,
      arguments: !0,
      arity: !0,
   },
   Lv = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
   },
   Bb =
      (((Hl = {})[Fb] = {
         $$typeof: !0,
         render: !0,
         defaultProps: !0,
         displayName: !0,
         propTypes: !0,
      }),
      (Hl[Nv] = Lv),
      Hl);
function Bh(e) {
   return ("type" in (t = e) && t.type.$$typeof) === Nv
      ? Lv
      : "$$typeof" in e
      ? Bb[e.$$typeof]
      : Ub;
   var t;
}
var qb = Object.defineProperty,
   Vb = Object.getOwnPropertyNames,
   qh = Object.getOwnPropertySymbols,
   Wb = Object.getOwnPropertyDescriptor,
   Hb = Object.getPrototypeOf,
   Vh = Object.prototype;
function Av(e, t, r) {
   if (typeof t != "string") {
      if (Vh) {
         var n = Hb(t);
         n && n !== Vh && Av(e, n, r);
      }
      var i = Vb(t);
      qh && (i = i.concat(qh(t)));
      for (var s = Bh(e), o = Bh(t), a = 0; a < i.length; ++a) {
         var l = i[a];
         if (!(l in zb || (r && r[l]) || (o && l in o) || (s && l in s))) {
            var u = Wb(t, l);
            try {
               qb(e, l, u);
            } catch {}
         }
      }
   }
   return e;
}
function _i(e) {
   return typeof e == "function";
}
function Ud(e) {
   return typeof e == "object" && "styledComponentId" in e;
}
function vn(e, t) {
   return e && t ? "".concat(e, " ").concat(t) : e || t || "";
}
function Ta(e, t) {
   if (e.length === 0) return "";
   for (var r = e[0], n = 1; n < e.length; n++) r += t ? t + e[n] : e[n];
   return r;
}
function Ms(e) {
   return (
      e !== null &&
      typeof e == "object" &&
      e.constructor.name === Object.name &&
      !("props" in e && e.$$typeof)
   );
}
function yc(e, t, r) {
   if ((r === void 0 && (r = !1), !r && !Ms(e) && !Array.isArray(e))) return t;
   if (Array.isArray(t))
      for (var n = 0; n < t.length; n++) e[n] = yc(e[n], t[n]);
   else if (Ms(t)) for (var n in t) e[n] = yc(e[n], t[n]);
   return e;
}
function zd(e, t) {
   Object.defineProperty(e, "toString", { value: t });
}
function Js(e) {
   for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
   return new Error(
      "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
         .concat(e, " for more information.")
         .concat(t.length > 0 ? " Args: ".concat(t.join(", ")) : "")
   );
}
var Qb = (function () {
      function e(t) {
         (this.groupSizes = new Uint32Array(512)),
            (this.length = 512),
            (this.tag = t);
      }
      return (
         (e.prototype.indexOfGroup = function (t) {
            for (var r = 0, n = 0; n < t; n++) r += this.groupSizes[n];
            return r;
         }),
         (e.prototype.insertRules = function (t, r) {
            if (t >= this.groupSizes.length) {
               for (var n = this.groupSizes, i = n.length, s = i; t >= s; )
                  if ((s <<= 1) < 0) throw Js(16, "".concat(t));
               (this.groupSizes = new Uint32Array(s)),
                  this.groupSizes.set(n),
                  (this.length = s);
               for (var o = i; o < s; o++) this.groupSizes[o] = 0;
            }
            for (
               var a = this.indexOfGroup(t + 1), l = ((o = 0), r.length);
               o < l;
               o++
            )
               this.tag.insertRule(a, r[o]) && (this.groupSizes[t]++, a++);
         }),
         (e.prototype.clearGroup = function (t) {
            if (t < this.length) {
               var r = this.groupSizes[t],
                  n = this.indexOfGroup(t),
                  i = n + r;
               this.groupSizes[t] = 0;
               for (var s = n; s < i; s++) this.tag.deleteRule(n);
            }
         }),
         (e.prototype.getGroup = function (t) {
            var r = "";
            if (t >= this.length || this.groupSizes[t] === 0) return r;
            for (
               var n = this.groupSizes[t],
                  i = this.indexOfGroup(t),
                  s = i + n,
                  o = i;
               o < s;
               o++
            )
               r += "".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);
            return r;
         }),
         e
      );
   })(),
   qo = new Map(),
   ja = new Map(),
   Gl = 1,
   bo = function (e) {
      if (qo.has(e)) return qo.get(e);
      for (; ja.has(Gl); ) Gl++;
      var t = Gl++;
      return qo.set(e, t), ja.set(t, e), t;
   },
   Gb = function (e, t) {
      qo.set(e, t), ja.set(t, e);
   },
   Kb = "style["
      .concat(ki, "][")
      .concat("data-styled-version", '="')
      .concat("6.0.8", '"]'),
   Yb = new RegExp(
      "^".concat(ki, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
   ),
   Jb = function (e, t, r) {
      for (var n, i = r.split(","), s = 0, o = i.length; s < o; s++)
         (n = i[s]) && e.registerName(t, n);
   },
   Xb = function (e, t) {
      for (
         var r,
            n = ((r = t.textContent) !== null && r !== void 0 ? r : "")
               .split(`/*!sc*/
`),
            i = [],
            s = 0,
            o = n.length;
         s < o;
         s++
      ) {
         var a = n[s].trim();
         if (a) {
            var l = a.match(Yb);
            if (l) {
               var u = 0 | parseInt(l[1], 10),
                  c = l[2];
               u !== 0 &&
                  (Gb(c, u), Jb(e, c, l[3]), e.getTag().insertRules(u, i)),
                  (i.length = 0);
            } else i.push(a);
         }
      }
   };
function Zb() {
   return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Mv = function (e) {
      var t = document.head,
         r = e || t,
         n = document.createElement("style"),
         i = (function (a) {
            var l = Array.from(a.querySelectorAll("style[".concat(ki, "]")));
            return l[l.length - 1];
         })(r),
         s = i !== void 0 ? i.nextSibling : null;
      n.setAttribute(ki, "active"),
         n.setAttribute("data-styled-version", "6.0.8");
      var o = Zb();
      return o && n.setAttribute("nonce", o), r.insertBefore(n, s), n;
   },
   ek = (function () {
      function e(t) {
         (this.element = Mv(t)),
            this.element.appendChild(document.createTextNode("")),
            (this.sheet = (function (r) {
               if (r.sheet) return r.sheet;
               for (
                  var n = document.styleSheets, i = 0, s = n.length;
                  i < s;
                  i++
               ) {
                  var o = n[i];
                  if (o.ownerNode === r) return o;
               }
               throw Js(17);
            })(this.element)),
            (this.length = 0);
      }
      return (
         (e.prototype.insertRule = function (t, r) {
            try {
               return this.sheet.insertRule(r, t), this.length++, !0;
            } catch {
               return !1;
            }
         }),
         (e.prototype.deleteRule = function (t) {
            this.sheet.deleteRule(t), this.length--;
         }),
         (e.prototype.getRule = function (t) {
            var r = this.sheet.cssRules[t];
            return r && r.cssText ? r.cssText : "";
         }),
         e
      );
   })(),
   tk = (function () {
      function e(t) {
         (this.element = Mv(t)),
            (this.nodes = this.element.childNodes),
            (this.length = 0);
      }
      return (
         (e.prototype.insertRule = function (t, r) {
            if (t <= this.length && t >= 0) {
               var n = document.createTextNode(r);
               return (
                  this.element.insertBefore(n, this.nodes[t] || null),
                  this.length++,
                  !0
               );
            }
            return !1;
         }),
         (e.prototype.deleteRule = function (t) {
            this.element.removeChild(this.nodes[t]), this.length--;
         }),
         (e.prototype.getRule = function (t) {
            return t < this.length ? this.nodes[t].textContent : "";
         }),
         e
      );
   })(),
   rk = (function () {
      function e(t) {
         (this.rules = []), (this.length = 0);
      }
      return (
         (e.prototype.insertRule = function (t, r) {
            return (
               t <= this.length &&
               (this.rules.splice(t, 0, r), this.length++, !0)
            );
         }),
         (e.prototype.deleteRule = function (t) {
            this.rules.splice(t, 1), this.length--;
         }),
         (e.prototype.getRule = function (t) {
            return t < this.length ? this.rules[t] : "";
         }),
         e
      );
   })(),
   Wh = Md,
   nk = { isServer: !Md, useCSSOMInjection: !Ib },
   Oa = (function () {
      function e(t, r, n) {
         t === void 0 && (t = Si), r === void 0 && (r = {});
         var i = this;
         (this.options = Xe(Xe({}, nk), t)),
            (this.gs = r),
            (this.names = new Map(n)),
            (this.server = !!t.isServer),
            !this.server &&
               Md &&
               Wh &&
               ((Wh = !1),
               (function (s) {
                  for (
                     var o = document.querySelectorAll(Kb), a = 0, l = o.length;
                     a < l;
                     a++
                  ) {
                     var u = o[a];
                     u &&
                        u.getAttribute(ki) !== "active" &&
                        (Xb(s, u), u.parentNode && u.parentNode.removeChild(u));
                  }
               })(this)),
            zd(this, function () {
               return (function (s) {
                  for (
                     var o = s.getTag(),
                        a = o.length,
                        l = "",
                        u = function (d) {
                           var h = (function (g) {
                              return ja.get(g);
                           })(d);
                           if (h === void 0) return "continue";
                           var m = s.names.get(h),
                              y = o.getGroup(d);
                           if (m === void 0 || y.length === 0)
                              return "continue";
                           var w = ""
                                 .concat(ki, ".g")
                                 .concat(d, '[id="')
                                 .concat(h, '"]'),
                              k = "";
                           m !== void 0 &&
                              m.forEach(function (g) {
                                 g.length > 0 && (k += "".concat(g, ","));
                              }),
                              (l += ""
                                 .concat(y)
                                 .concat(w, '{content:"')
                                 .concat(k, '"}').concat(`/*!sc*/
`));
                        },
                        c = 0;
                     c < a;
                     c++
                  )
                     u(c);
                  return l;
               })(i);
            });
      }
      return (
         (e.registerId = function (t) {
            return bo(t);
         }),
         (e.prototype.reconstructWithOptions = function (t, r) {
            return (
               r === void 0 && (r = !0),
               new e(
                  Xe(Xe({}, this.options), t),
                  this.gs,
                  (r && this.names) || void 0
               )
            );
         }),
         (e.prototype.allocateGSInstance = function (t) {
            return (this.gs[t] = (this.gs[t] || 0) + 1);
         }),
         (e.prototype.getTag = function () {
            return (
               this.tag ||
               (this.tag =
                  ((t = (function (r) {
                     var n = r.useCSSOMInjection,
                        i = r.target;
                     return r.isServer ? new rk(i) : n ? new ek(i) : new tk(i);
                  })(this.options)),
                  new Qb(t)))
            );
            var t;
         }),
         (e.prototype.hasNameForId = function (t, r) {
            return this.names.has(t) && this.names.get(t).has(r);
         }),
         (e.prototype.registerName = function (t, r) {
            if ((bo(t), this.names.has(t))) this.names.get(t).add(r);
            else {
               var n = new Set();
               n.add(r), this.names.set(t, n);
            }
         }),
         (e.prototype.insertRules = function (t, r, n) {
            this.registerName(t, r), this.getTag().insertRules(bo(t), n);
         }),
         (e.prototype.clearNames = function (t) {
            this.names.has(t) && this.names.get(t).clear();
         }),
         (e.prototype.clearRules = function (t) {
            this.getTag().clearGroup(bo(t)), this.clearNames(t);
         }),
         (e.prototype.clearTag = function () {
            this.tag = void 0;
         }),
         e
      );
   })(),
   ik = /&/g,
   sk = /^\s*\/\/.*$/gm;
function Fv(e, t) {
   return e.map(function (r) {
      return (
         r.type === "rule" &&
            ((r.value = "".concat(t, " ").concat(r.value)),
            (r.value = r.value.replaceAll(",", ",".concat(t, " "))),
            (r.props = r.props.map(function (n) {
               return "".concat(t, " ").concat(n);
            }))),
         Array.isArray(r.children) &&
            r.type !== "@keyframes" &&
            (r.children = Fv(r.children, t)),
         r
      );
   });
}
function ok(e) {
   var t,
      r,
      n,
      i = e === void 0 ? Si : e,
      s = i.options,
      o = s === void 0 ? Si : s,
      a = i.plugins,
      l = a === void 0 ? ll : a,
      u = function (h, m, y) {
         return y === r ||
            (y.startsWith(r) && y.endsWith(r) && y.replaceAll(r, "").length > 0)
            ? ".".concat(t)
            : h;
      },
      c = l.slice();
   c.push(function (h) {
      h.type === il &&
         h.value.includes("&") &&
         (h.props[0] = h.props[0].replace(ik, r).replace(n, u));
   }),
      o.prefix && c.push(Db),
      c.push(Tb);
   var d = function (h, m, y, w) {
      m === void 0 && (m = ""),
         y === void 0 && (y = ""),
         w === void 0 && (w = "&"),
         (t = w),
         (r = m),
         (n = new RegExp("\\".concat(r, "\\b"), "g"));
      var k = h.replace(sk, ""),
         g = Eb(
            y || m ? "".concat(y, " ").concat(m, " { ").concat(k, " }") : k
         );
      o.namespace && (g = Fv(g, o.namespace));
      var p = [];
      return (
         Pa(
            g,
            jb(
               c.concat(
                  Ob(function (v) {
                     return p.push(v);
                  })
               )
            )
         ),
         p
      );
   };
   return (
      (d.hash = l.length
         ? l
              .reduce(function (h, m) {
                 return m.name || Js(15), ti(h, m.name);
              }, 5381)
              .toString()
         : ""),
      d
   );
}
var ak = new Oa(),
   wc = ok(),
   Uv = ue.createContext({
      shouldForwardProp: void 0,
      styleSheet: ak,
      stylis: wc,
   });
Uv.Consumer;
ue.createContext(void 0);
function xc() {
   return S.useContext(Uv);
}
var zv = (function () {
      function e(t, r) {
         var n = this;
         (this.inject = function (i, s) {
            s === void 0 && (s = wc);
            var o = n.name + s.hash;
            i.hasNameForId(n.id, o) ||
               i.insertRules(n.id, o, s(n.rules, o, "@keyframes"));
         }),
            (this.name = t),
            (this.id = "sc-keyframes-".concat(t)),
            (this.rules = r),
            zd(this, function () {
               throw Js(12, String(n.name));
            });
      }
      return (
         (e.prototype.getName = function (t) {
            return t === void 0 && (t = wc), this.name + t.hash;
         }),
         e
      );
   })(),
   lk = function (e) {
      return e >= "A" && e <= "Z";
   };
function Hh(e) {
   for (var t = "", r = 0; r < e.length; r++) {
      var n = e[r];
      if (r === 1 && n === "-" && e[0] === "-") return e;
      lk(n) ? (t += "-" + n.toLowerCase()) : (t += n);
   }
   return t.startsWith("ms-") ? "-" + t : t;
}
var Bv = function (e) {
      return e == null || e === !1 || e === "";
   },
   qv = function (e) {
      var t,
         r,
         n = [];
      for (var i in e) {
         var s = e[i];
         e.hasOwnProperty(i) &&
            !Bv(s) &&
            ((Array.isArray(s) && s.isCss) || _i(s)
               ? n.push("".concat(Hh(i), ":"), s, ";")
               : Ms(s)
               ? n.push.apply(
                    n,
                    wi(wi(["".concat(i, " {")], qv(s), !1), ["}"], !1)
                 )
               : n.push(
                    ""
                       .concat(Hh(i), ": ")
                       .concat(
                          ((t = i),
                          (r = s) == null || typeof r == "boolean" || r === ""
                             ? ""
                             : typeof r != "number" ||
                               r === 0 ||
                               t in Rb ||
                               t.startsWith("--")
                             ? String(r).trim()
                             : "".concat(r, "px")),
                          ";"
                       )
                 ));
      }
      return n;
   };
function Kr(e, t, r, n) {
   if (Bv(e)) return [];
   if (Ud(e)) return [".".concat(e.styledComponentId)];
   if (_i(e)) {
      if (!_i((s = e)) || (s.prototype && s.prototype.isReactComponent) || !t)
         return [e];
      var i = e(t);
      return Kr(i, t, r, n);
   }
   var s;
   return e instanceof zv
      ? r
         ? (e.inject(r, n), [e.getName(n)])
         : [e]
      : Ms(e)
      ? qv(e)
      : Array.isArray(e)
      ? Array.prototype.concat.apply(
           ll,
           e.map(function (o) {
              return Kr(o, t, r, n);
           })
        )
      : [e.toString()];
}
function Vv(e) {
   for (var t = 0; t < e.length; t += 1) {
      var r = e[t];
      if (_i(r) && !Ud(r)) return !1;
   }
   return !0;
}
var uk = Iv("6.0.8"),
   ck = (function () {
      function e(t, r, n) {
         (this.rules = t),
            (this.staticRulesId = ""),
            (this.isStatic = (n === void 0 || n.isStatic) && Vv(t)),
            (this.componentId = r),
            (this.baseHash = ti(uk, r)),
            (this.baseStyle = n),
            Oa.registerId(r);
      }
      return (
         (e.prototype.generateAndInjectStyles = function (t, r, n) {
            var i = this.baseStyle
               ? this.baseStyle.generateAndInjectStyles(t, r, n)
               : "";
            if (this.isStatic && !n.hash)
               if (
                  this.staticRulesId &&
                  r.hasNameForId(this.componentId, this.staticRulesId)
               )
                  i = vn(i, this.staticRulesId);
               else {
                  var s = Ta(Kr(this.rules, t, r, n)),
                     o = vc(ti(this.baseHash, s) >>> 0);
                  if (!r.hasNameForId(this.componentId, o)) {
                     var a = n(s, ".".concat(o), void 0, this.componentId);
                     r.insertRules(this.componentId, o, a);
                  }
                  (i = vn(i, o)), (this.staticRulesId = o);
               }
            else {
               for (
                  var l = ti(this.baseHash, n.hash), u = "", c = 0;
                  c < this.rules.length;
                  c++
               ) {
                  var d = this.rules[c];
                  if (typeof d == "string") u += d;
                  else if (d) {
                     var h = Ta(Kr(d, t, r, n));
                     (l = ti(l, h + c)), (u += h);
                  }
               }
               if (u) {
                  var m = vc(l >>> 0);
                  r.hasNameForId(this.componentId, m) ||
                     r.insertRules(
                        this.componentId,
                        m,
                        n(u, ".".concat(m), void 0, this.componentId)
                     ),
                     (i = vn(i, m));
               }
            }
            return i;
         }),
         e
      );
   })(),
   Bd = ue.createContext(void 0);
Bd.Consumer;
var Kl = {};
function dk(e, t, r) {
   var n = Ud(e),
      i = e,
      s = !Ql(e),
      o = t.attrs,
      a = o === void 0 ? ll : o,
      l = t.componentId,
      u =
         l === void 0
            ? (function (v, b) {
                 var _ = typeof v != "string" ? "sc" : Uh(v);
                 Kl[_] = (Kl[_] || 0) + 1;
                 var P = "".concat(_, "-").concat(Fd("6.0.8" + _ + Kl[_]));
                 return b ? "".concat(b, "-").concat(P) : P;
              })(t.displayName, t.parentComponentId)
            : l,
      c = t.displayName;
   c === void 0 &&
      (function (v) {
         return Ql(v) ? "styled.".concat(v) : "Styled(".concat(Mb(v), ")");
      })(e);
   var d =
         t.displayName && t.componentId
            ? "".concat(Uh(t.displayName), "-").concat(t.componentId)
            : t.componentId || u,
      h = n && i.attrs ? i.attrs.concat(a).filter(Boolean) : a,
      m = t.shouldForwardProp;
   if (n && i.shouldForwardProp) {
      var y = i.shouldForwardProp;
      if (t.shouldForwardProp) {
         var w = t.shouldForwardProp;
         m = function (v, b) {
            return y(v, b) && w(v, b);
         };
      } else m = y;
   }
   var k = new ck(r, d, n ? i.componentStyle : void 0);
   function g(v, b) {
      return (function (_, P, C) {
         var j = _.attrs,
            U = _.componentStyle,
            F = _.defaultProps,
            te = _.foldedComponentIds,
            W = _.styledComponentId,
            V = _.target,
            se = ue.useContext(Bd),
            X = xc(),
            re = _.shouldForwardProp || X.shouldForwardProp,
            oe = (function ($t, He, Gt) {
               for (
                  var Fe,
                     et = Xe(Xe({}, He), { className: void 0, theme: Gt }),
                     nn = 0;
                  nn < $t.length;
                  nn += 1
               ) {
                  var sn = _i((Fe = $t[nn])) ? Fe(et) : Fe;
                  for (var Nt in sn)
                     et[Nt] =
                        Nt === "className"
                           ? vn(et[Nt], sn[Nt])
                           : Nt === "style"
                           ? Xe(Xe({}, et[Nt]), sn[Nt])
                           : sn[Nt];
               }
               return (
                  He.className &&
                     (et.className = vn(et.className, He.className)),
                  et
               );
            })(j, P, Dv(P, se, F) || Si),
            R = oe.as || V,
            z = {};
         for (var B in oe)
            oe[B] === void 0 ||
               B[0] === "$" ||
               B === "as" ||
               B === "theme" ||
               (B === "forwardedAs"
                  ? (z.as = oe.forwardedAs)
                  : (re && !re(B, R)) || (z[B] = oe[B]));
         var ae = (function ($t, He) {
               var Gt = xc(),
                  Fe = $t.generateAndInjectStyles(He, Gt.styleSheet, Gt.stylis);
               return Fe;
            })(U, oe),
            de = vn(te, W);
         return (
            ae && (de += " " + ae),
            oe.className && (de += " " + oe.className),
            (z[Ql(R) && !Rv.has(R) ? "class" : "className"] = de),
            (z.ref = C),
            S.createElement(R, z)
         );
      })(p, v, b);
   }
   var p = ue.forwardRef(g);
   return (
      (p.attrs = h),
      (p.componentStyle = k),
      (p.shouldForwardProp = m),
      (p.foldedComponentIds = n
         ? vn(i.foldedComponentIds, i.styledComponentId)
         : ""),
      (p.styledComponentId = d),
      (p.target = n ? i.target : e),
      Object.defineProperty(p, "defaultProps", {
         get: function () {
            return this._foldedDefaultProps;
         },
         set: function (v) {
            this._foldedDefaultProps = n
               ? (function (b) {
                    for (var _ = [], P = 1; P < arguments.length; P++)
                       _[P - 1] = arguments[P];
                    for (var C = 0, j = _; C < j.length; C++) yc(b, j[C], !0);
                    return b;
                 })({}, i.defaultProps, v)
               : v;
         },
      }),
      zd(p, function () {
         return ".".concat(p.styledComponentId);
      }),
      s &&
         Av(p, e, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0,
         }),
      p
   );
}
function Qh(e, t) {
   for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
      r.push(t[n], e[n + 1]);
   return r;
}
var Gh = function (e) {
   return Object.assign(e, { isCss: !0 });
};
function Ae(e) {
   for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
   if (_i(e) || Ms(e)) {
      var n = e;
      return Gh(Kr(Qh(ll, wi([n], t, !0))));
   }
   var i = e;
   return t.length === 0 && i.length === 1 && typeof i[0] == "string"
      ? Kr(i)
      : Gh(Kr(Qh(i, t)));
}
function bc(e, t, r) {
   if ((r === void 0 && (r = Si), !t)) throw Js(1, t);
   var n = function (i) {
      for (var s = [], o = 1; o < arguments.length; o++)
         s[o - 1] = arguments[o];
      return e(t, r, Ae.apply(void 0, wi([i], s, !1)));
   };
   return (
      (n.attrs = function (i) {
         return bc(
            e,
            t,
            Xe(Xe({}, r), {
               attrs: Array.prototype.concat(r.attrs, i).filter(Boolean),
            })
         );
      }),
      (n.withConfig = function (i) {
         return bc(e, t, Xe(Xe({}, r), i));
      }),
      n
   );
}
var Wv = function (e) {
      return bc(dk, e);
   },
   I = Wv;
Rv.forEach(function (e) {
   I[e] = Wv(e);
});
var fk = (function () {
   function e(t, r) {
      (this.rules = t),
         (this.componentId = r),
         (this.isStatic = Vv(t)),
         Oa.registerId(this.componentId + 1);
   }
   return (
      (e.prototype.createStyles = function (t, r, n, i) {
         var s = i(Ta(Kr(this.rules, r, n, i)), ""),
            o = this.componentId + t;
         n.insertRules(o, o, s);
      }),
      (e.prototype.removeStyles = function (t, r) {
         r.clearRules(this.componentId + t);
      }),
      (e.prototype.renderStyles = function (t, r, n, i) {
         t > 2 && Oa.registerId(this.componentId + t),
            this.removeStyles(t, n),
            this.createStyles(t, r, n, i);
      }),
      e
   );
})();
function hk(e) {
   for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
   var n = Ae.apply(void 0, wi([e], t, !1)),
      i = "sc-global-".concat(Fd(JSON.stringify(n))),
      s = new fk(n, i),
      o = function (l) {
         var u = xc(),
            c = ue.useContext(Bd),
            d = ue.useRef(u.styleSheet.allocateGSInstance(i)).current;
         return (
            u.styleSheet.server && a(d, l, u.styleSheet, c, u.stylis),
            ue.useLayoutEffect(
               function () {
                  if (!u.styleSheet.server)
                     return (
                        a(d, l, u.styleSheet, c, u.stylis),
                        function () {
                           return s.removeStyles(d, u.styleSheet);
                        }
                     );
               },
               [d, l, u.styleSheet, c, u.stylis]
            ),
            null
         );
      };
   function a(l, u, c, d, h) {
      if (s.isStatic) s.renderStyles(l, $b, c, h);
      else {
         var m = Xe(Xe({}, u), { theme: Dv(u, d, o.defaultProps) });
         s.renderStyles(l, m, c, h);
      }
   }
   return ue.memo(o);
}
function pk(e) {
   for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
   var n = Ta(Ae.apply(void 0, wi([e], t, !1))),
      i = Fd(n);
   return new zv(i, n);
}
const mk = I.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: var(--color-brand-600);
  }
`;
var Hv = {
      color: void 0,
      size: void 0,
      className: void 0,
      style: void 0,
      attr: void 0,
   },
   Kh = ue.createContext && ue.createContext(Hv),
   Yr =
      (globalThis && globalThis.__assign) ||
      function () {
         return (
            (Yr =
               Object.assign ||
               function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++) {
                     t = arguments[r];
                     for (var i in t)
                        Object.prototype.hasOwnProperty.call(t, i) &&
                           (e[i] = t[i]);
                  }
                  return e;
               }),
            Yr.apply(this, arguments)
         );
      },
   gk =
      (globalThis && globalThis.__rest) ||
      function (e, t) {
         var r = {};
         for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
               t.indexOf(n) < 0 &&
               (r[n] = e[n]);
         if (e != null && typeof Object.getOwnPropertySymbols == "function")
            for (
               var i = 0, n = Object.getOwnPropertySymbols(e);
               i < n.length;
               i++
            )
               t.indexOf(n[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
         return r;
      };
function Qv(e) {
   return (
      e &&
      e.map(function (t, r) {
         return ue.createElement(t.tag, Yr({ key: r }, t.attr), Qv(t.child));
      })
   );
}
function $e(e) {
   return function (t) {
      return ue.createElement(vk, Yr({ attr: Yr({}, e.attr) }, t), Qv(e.child));
   };
}
function vk(e) {
   var t = function (r) {
      var n = e.attr,
         i = e.size,
         s = e.title,
         o = gk(e, ["attr", "size", "title"]),
         a = i || r.size || "1em",
         l;
      return (
         r.className && (l = r.className),
         e.className && (l = (l ? l + " " : "") + e.className),
         ue.createElement(
            "svg",
            Yr(
               {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
               },
               r.attr,
               n,
               o,
               {
                  className: l,
                  style: Yr(
                     Yr({ color: e.color || r.color }, r.style),
                     e.style
                  ),
                  height: a,
                  width: a,
                  xmlns: "http://www.w3.org/2000/svg",
               }
            ),
            s && ue.createElement("title", null, s),
            e.children
         )
      );
   };
   return Kh !== void 0
      ? ue.createElement(Kh.Consumer, null, function (r) {
           return t(r);
        })
      : t(Hv);
}
function yk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               d: "M12 1.5a.75.75 0 01.75.75V7.5h-1.5V2.25A.75.75 0 0112 1.5zM11.25 7.5v5.69l-1.72-1.72a.75.75 0 00-1.06 1.06l3 3a.75.75 0 001.06 0l3-3a.75.75 0 10-1.06-1.06l-1.72 1.72V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z",
            },
         },
      ],
   })(e);
}
function wk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function Gv(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               d: "M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z",
            },
         },
      ],
   })(e);
}
function xk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function bk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function kk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M10.5 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm0 6a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function Sk(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         { tag: "path", attr: { d: "M12 15a3 3 0 100-6 3 3 0 000 6z" } },
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function _k(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               d: "M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z",
            },
         },
      ],
   })(e);
}
function Ck(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               d: "M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z",
            },
         },
         {
            tag: "path",
            attr: {
               d: "M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z",
            },
         },
      ],
   })(e);
}
function Kv(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function Ek(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 24 24",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function Pk(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "1.5",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z",
            },
         },
      ],
   })(e);
}
function Tk(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "1.5",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
         },
      ],
   })(e);
}
function jk(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "1.5",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
         },
      ],
   })(e);
}
function Ok(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "1.5",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819",
            },
         },
      ],
   })(e);
}
const Dk = "modulepreload",
   Rk = function (e) {
      return "/" + e;
   },
   Yh = {},
   ul = function (t, r, n) {
      if (!r || r.length === 0) return t();
      const i = document.getElementsByTagName("link");
      return Promise.all(
         r.map((s) => {
            if (((s = Rk(s)), s in Yh)) return;
            Yh[s] = !0;
            const o = s.endsWith(".css"),
               a = o ? '[rel="stylesheet"]' : "";
            if (!!n)
               for (let c = i.length - 1; c >= 0; c--) {
                  const d = i[c];
                  if (d.href === s && (!o || d.rel === "stylesheet")) return;
               }
            else if (document.querySelector(`link[href="${s}"]${a}`)) return;
            const u = document.createElement("link");
            if (
               ((u.rel = o ? "stylesheet" : Dk),
               o || ((u.as = "script"), (u.crossOrigin = "")),
               (u.href = s),
               document.head.appendChild(u),
               o)
            )
               return new Promise((c, d) => {
                  u.addEventListener("load", c),
                     u.addEventListener("error", () =>
                        d(new Error(`Unable to preload CSS for ${s}`))
                     );
               });
         })
      )
         .then(() => t())
         .catch((s) => {
            const o = new Event("vite:preloadError", { cancelable: !0 });
            if (((o.payload = s), window.dispatchEvent(o), !o.defaultPrevented))
               throw s;
         });
   },
   Ik = (e) => {
      let t;
      return (
         e
            ? (t = e)
            : typeof fetch > "u"
            ? (t = (...r) =>
                 ul(() => Promise.resolve().then(() => cl), void 0).then(
                    ({ default: n }) => n(...r)
                 ))
            : (t = fetch),
         (...r) => t(...r)
      );
   };
class qd extends Error {
   constructor(t, r = "FunctionsError", n) {
      super(t), (this.name = r), (this.context = n);
   }
}
class $k extends qd {
   constructor(t) {
      super(
         "Failed to send a request to the Edge Function",
         "FunctionsFetchError",
         t
      );
   }
}
class Nk extends qd {
   constructor(t) {
      super("Relay Error invoking the Edge Function", "FunctionsRelayError", t);
   }
}
class Lk extends qd {
   constructor(t) {
      super(
         "Edge Function returned a non-2xx status code",
         "FunctionsHttpError",
         t
      );
   }
}
var Ak =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
class Mk {
   constructor(t, { headers: r = {}, customFetch: n } = {}) {
      (this.url = t), (this.headers = r), (this.fetch = Ik(n));
   }
   setAuth(t) {
      this.headers.Authorization = `Bearer ${t}`;
   }
   invoke(t, r = {}) {
      var n;
      return Ak(this, void 0, void 0, function* () {
         try {
            const { headers: i, method: s, body: o } = r;
            let a = {},
               l;
            o &&
               ((i &&
                  !Object.prototype.hasOwnProperty.call(i, "Content-Type")) ||
                  !i) &&
               ((typeof Blob < "u" && o instanceof Blob) ||
               o instanceof ArrayBuffer
                  ? ((a["Content-Type"] = "application/octet-stream"), (l = o))
                  : typeof o == "string"
                  ? ((a["Content-Type"] = "text/plain"), (l = o))
                  : typeof FormData < "u" && o instanceof FormData
                  ? (l = o)
                  : ((a["Content-Type"] = "application/json"),
                    (l = JSON.stringify(o))));
            const u = yield this.fetch(`${this.url}/${t}`, {
                  method: s || "POST",
                  headers: Object.assign(
                     Object.assign(Object.assign({}, a), this.headers),
                     i
                  ),
                  body: l,
               }).catch((m) => {
                  throw new $k(m);
               }),
               c = u.headers.get("x-relay-error");
            if (c && c === "true") throw new Nk(u);
            if (!u.ok) throw new Lk(u);
            let d = (
                  (n = u.headers.get("Content-Type")) !== null && n !== void 0
                     ? n
                     : "text/plain"
               )
                  .split(";")[0]
                  .trim(),
               h;
            return (
               d === "application/json"
                  ? (h = yield u.json())
                  : d === "application/octet-stream"
                  ? (h = yield u.blob())
                  : d === "multipart/form-data"
                  ? (h = yield u.formData())
                  : (h = yield u.text()),
               { data: h, error: null }
            );
         } catch (i) {
            return { data: null, error: i };
         }
      });
   }
}
var kc = { exports: {} };
(function (e, t) {
   var r = function () {
         if (typeof self < "u") return self;
         if (typeof window < "u") return window;
         if (typeof cf < "u") return cf;
         throw new Error("unable to locate global object");
      },
      n = r();
   (e.exports = t = n.fetch),
      n.fetch && (t.default = n.fetch.bind(n)),
      (t.Headers = n.Headers),
      (t.Request = n.Request),
      (t.Response = n.Response);
})(kc, kc.exports);
var Vd = kc.exports;
const Wd = zp(Vd),
   cl = Up({ __proto__: null, default: Wd }, [Vd]);
class Fk {
   constructor(t) {
      (this.shouldThrowOnError = !1),
         (this.method = t.method),
         (this.url = t.url),
         (this.headers = t.headers),
         (this.schema = t.schema),
         (this.body = t.body),
         (this.shouldThrowOnError = t.shouldThrowOnError),
         (this.signal = t.signal),
         (this.isMaybeSingle = t.isMaybeSingle),
         t.fetch
            ? (this.fetch = t.fetch)
            : typeof fetch > "u"
            ? (this.fetch = Wd)
            : (this.fetch = fetch);
   }
   throwOnError() {
      return (this.shouldThrowOnError = !0), this;
   }
   then(t, r) {
      this.schema === void 0 ||
         (["GET", "HEAD"].includes(this.method)
            ? (this.headers["Accept-Profile"] = this.schema)
            : (this.headers["Content-Profile"] = this.schema)),
         this.method !== "GET" &&
            this.method !== "HEAD" &&
            (this.headers["Content-Type"] = "application/json");
      const n = this.fetch;
      let i = n(this.url.toString(), {
         method: this.method,
         headers: this.headers,
         body: JSON.stringify(this.body),
         signal: this.signal,
      }).then(async (s) => {
         var o, a, l;
         let u = null,
            c = null,
            d = null,
            h = s.status,
            m = s.statusText;
         if (s.ok) {
            if (this.method !== "HEAD") {
               const g = await s.text();
               g === "" ||
                  (this.headers.Accept === "text/csv" ||
                  (this.headers.Accept &&
                     this.headers.Accept.includes(
                        "application/vnd.pgrst.plan+text"
                     ))
                     ? (c = g)
                     : (c = JSON.parse(g)));
            }
            const w =
                  (o = this.headers.Prefer) === null || o === void 0
                     ? void 0
                     : o.match(/count=(exact|planned|estimated)/),
               k =
                  (a = s.headers.get("content-range")) === null || a === void 0
                     ? void 0
                     : a.split("/");
            w && k && k.length > 1 && (d = parseInt(k[1])),
               this.isMaybeSingle &&
                  this.method === "GET" &&
                  Array.isArray(c) &&
                  (c.length > 1
                     ? ((u = {
                          code: "PGRST116",
                          details: `Results contain ${c.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                          hint: null,
                          message:
                             "JSON object requested, multiple (or no) rows returned",
                       }),
                       (c = null),
                       (d = null),
                       (h = 406),
                       (m = "Not Acceptable"))
                     : c.length === 1
                     ? (c = c[0])
                     : (c = null));
         } else {
            const w = await s.text();
            try {
               (u = JSON.parse(w)),
                  Array.isArray(u) &&
                     s.status === 404 &&
                     ((c = []), (u = null), (h = 200), (m = "OK"));
            } catch {
               s.status === 404 && w === ""
                  ? ((h = 204), (m = "No Content"))
                  : (u = { message: w });
            }
            if (
               (u &&
                  this.isMaybeSingle &&
                  !(
                     (l = u == null ? void 0 : u.details) === null ||
                     l === void 0
                  ) &&
                  l.includes("Results contain 0 rows") &&
                  ((u = null), (h = 200), (m = "OK")),
               u && this.shouldThrowOnError)
            )
               throw u;
         }
         return { error: u, data: c, count: d, status: h, statusText: m };
      });
      return (
         this.shouldThrowOnError ||
            (i = i.catch((s) => {
               var o, a, l;
               return {
                  error: {
                     message: `${
                        (o = s == null ? void 0 : s.name) !== null &&
                        o !== void 0
                           ? o
                           : "FetchError"
                     }: ${s == null ? void 0 : s.message}`,
                     details: `${
                        (a = s == null ? void 0 : s.stack) !== null &&
                        a !== void 0
                           ? a
                           : ""
                     }`,
                     hint: "",
                     code: `${
                        (l = s == null ? void 0 : s.code) !== null &&
                        l !== void 0
                           ? l
                           : ""
                     }`,
                  },
                  data: null,
                  count: null,
                  status: 0,
                  statusText: "",
               };
            })),
         i.then(t, r)
      );
   }
}
class Uk extends Fk {
   select(t) {
      let r = !1;
      const n = (t ?? "*")
         .split("")
         .map((i) => (/\s/.test(i) && !r ? "" : (i === '"' && (r = !r), i)))
         .join("");
      return (
         this.url.searchParams.set("select", n),
         this.headers.Prefer && (this.headers.Prefer += ","),
         (this.headers.Prefer += "return=representation"),
         this
      );
   }
   order(t, { ascending: r = !0, nullsFirst: n, foreignTable: i } = {}) {
      const s = i ? `${i}.order` : "order",
         o = this.url.searchParams.get(s);
      return (
         this.url.searchParams.set(
            s,
            `${o ? `${o},` : ""}${t}.${r ? "asc" : "desc"}${
               n === void 0 ? "" : n ? ".nullsfirst" : ".nullslast"
            }`
         ),
         this
      );
   }
   limit(t, { foreignTable: r } = {}) {
      const n = typeof r > "u" ? "limit" : `${r}.limit`;
      return this.url.searchParams.set(n, `${t}`), this;
   }
   range(t, r, { foreignTable: n } = {}) {
      const i = typeof n > "u" ? "offset" : `${n}.offset`,
         s = typeof n > "u" ? "limit" : `${n}.limit`;
      return (
         this.url.searchParams.set(i, `${t}`),
         this.url.searchParams.set(s, `${r - t + 1}`),
         this
      );
   }
   abortSignal(t) {
      return (this.signal = t), this;
   }
   single() {
      return (this.headers.Accept = "application/vnd.pgrst.object+json"), this;
   }
   maybeSingle() {
      return (
         this.method === "GET"
            ? (this.headers.Accept = "application/json")
            : (this.headers.Accept = "application/vnd.pgrst.object+json"),
         (this.isMaybeSingle = !0),
         this
      );
   }
   csv() {
      return (this.headers.Accept = "text/csv"), this;
   }
   geojson() {
      return (this.headers.Accept = "application/geo+json"), this;
   }
   explain({
      analyze: t = !1,
      verbose: r = !1,
      settings: n = !1,
      buffers: i = !1,
      wal: s = !1,
      format: o = "text",
   } = {}) {
      const a = [
            t ? "analyze" : null,
            r ? "verbose" : null,
            n ? "settings" : null,
            i ? "buffers" : null,
            s ? "wal" : null,
         ]
            .filter(Boolean)
            .join("|"),
         l = this.headers.Accept;
      return (
         (this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${l}"; options=${a};`),
         o === "json" ? this : this
      );
   }
   rollback() {
      var t;
      return (
         ((t = this.headers.Prefer) !== null && t !== void 0 ? t : "").trim()
            .length > 0
            ? (this.headers.Prefer += ",tx=rollback")
            : (this.headers.Prefer = "tx=rollback"),
         this
      );
   }
   returns() {
      return this;
   }
}
class Bn extends Uk {
   eq(t, r) {
      return this.url.searchParams.append(t, `eq.${r}`), this;
   }
   neq(t, r) {
      return this.url.searchParams.append(t, `neq.${r}`), this;
   }
   gt(t, r) {
      return this.url.searchParams.append(t, `gt.${r}`), this;
   }
   gte(t, r) {
      return this.url.searchParams.append(t, `gte.${r}`), this;
   }
   lt(t, r) {
      return this.url.searchParams.append(t, `lt.${r}`), this;
   }
   lte(t, r) {
      return this.url.searchParams.append(t, `lte.${r}`), this;
   }
   like(t, r) {
      return this.url.searchParams.append(t, `like.${r}`), this;
   }
   likeAllOf(t, r) {
      return (
         this.url.searchParams.append(t, `like(all).{${r.join(",")}}`), this
      );
   }
   likeAnyOf(t, r) {
      return (
         this.url.searchParams.append(t, `like(any).{${r.join(",")}}`), this
      );
   }
   ilike(t, r) {
      return this.url.searchParams.append(t, `ilike.${r}`), this;
   }
   ilikeAllOf(t, r) {
      return (
         this.url.searchParams.append(t, `ilike(all).{${r.join(",")}}`), this
      );
   }
   ilikeAnyOf(t, r) {
      return (
         this.url.searchParams.append(t, `ilike(any).{${r.join(",")}}`), this
      );
   }
   is(t, r) {
      return this.url.searchParams.append(t, `is.${r}`), this;
   }
   in(t, r) {
      const n = r
         .map((i) =>
            typeof i == "string" && new RegExp("[,()]").test(i)
               ? `"${i}"`
               : `${i}`
         )
         .join(",");
      return this.url.searchParams.append(t, `in.(${n})`), this;
   }
   contains(t, r) {
      return (
         typeof r == "string"
            ? this.url.searchParams.append(t, `cs.${r}`)
            : Array.isArray(r)
            ? this.url.searchParams.append(t, `cs.{${r.join(",")}}`)
            : this.url.searchParams.append(t, `cs.${JSON.stringify(r)}`),
         this
      );
   }
   containedBy(t, r) {
      return (
         typeof r == "string"
            ? this.url.searchParams.append(t, `cd.${r}`)
            : Array.isArray(r)
            ? this.url.searchParams.append(t, `cd.{${r.join(",")}}`)
            : this.url.searchParams.append(t, `cd.${JSON.stringify(r)}`),
         this
      );
   }
   rangeGt(t, r) {
      return this.url.searchParams.append(t, `sr.${r}`), this;
   }
   rangeGte(t, r) {
      return this.url.searchParams.append(t, `nxl.${r}`), this;
   }
   rangeLt(t, r) {
      return this.url.searchParams.append(t, `sl.${r}`), this;
   }
   rangeLte(t, r) {
      return this.url.searchParams.append(t, `nxr.${r}`), this;
   }
   rangeAdjacent(t, r) {
      return this.url.searchParams.append(t, `adj.${r}`), this;
   }
   overlaps(t, r) {
      return (
         typeof r == "string"
            ? this.url.searchParams.append(t, `ov.${r}`)
            : this.url.searchParams.append(t, `ov.{${r.join(",")}}`),
         this
      );
   }
   textSearch(t, r, { config: n, type: i } = {}) {
      let s = "";
      i === "plain"
         ? (s = "pl")
         : i === "phrase"
         ? (s = "ph")
         : i === "websearch" && (s = "w");
      const o = n === void 0 ? "" : `(${n})`;
      return this.url.searchParams.append(t, `${s}fts${o}.${r}`), this;
   }
   match(t) {
      return (
         Object.entries(t).forEach(([r, n]) => {
            this.url.searchParams.append(r, `eq.${n}`);
         }),
         this
      );
   }
   not(t, r, n) {
      return this.url.searchParams.append(t, `not.${r}.${n}`), this;
   }
   or(t, { foreignTable: r } = {}) {
      const n = r ? `${r}.or` : "or";
      return this.url.searchParams.append(n, `(${t})`), this;
   }
   filter(t, r, n) {
      return this.url.searchParams.append(t, `${r}.${n}`), this;
   }
}
class zk {
   constructor(t, { headers: r = {}, schema: n, fetch: i }) {
      (this.url = t), (this.headers = r), (this.schema = n), (this.fetch = i);
   }
   select(t, { head: r = !1, count: n } = {}) {
      const i = r ? "HEAD" : "GET";
      let s = !1;
      const o = (t ?? "*")
         .split("")
         .map((a) => (/\s/.test(a) && !s ? "" : (a === '"' && (s = !s), a)))
         .join("");
      return (
         this.url.searchParams.set("select", o),
         n && (this.headers.Prefer = `count=${n}`),
         new Bn({
            method: i,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
         })
      );
   }
   insert(t, { count: r, defaultToNull: n = !0 } = {}) {
      const i = "POST",
         s = [];
      if (
         (this.headers.Prefer && s.push(this.headers.Prefer),
         r && s.push(`count=${r}`),
         n || s.push("missing=default"),
         (this.headers.Prefer = s.join(",")),
         Array.isArray(t))
      ) {
         const o = t.reduce((a, l) => a.concat(Object.keys(l)), []);
         if (o.length > 0) {
            const a = [...new Set(o)].map((l) => `"${l}"`);
            this.url.searchParams.set("columns", a.join(","));
         }
      }
      return new Bn({
         method: i,
         url: this.url,
         headers: this.headers,
         schema: this.schema,
         body: t,
         fetch: this.fetch,
         allowEmpty: !1,
      });
   }
   upsert(
      t,
      {
         onConflict: r,
         ignoreDuplicates: n = !1,
         count: i,
         defaultToNull: s = !0,
      } = {}
   ) {
      const o = "POST",
         a = [`resolution=${n ? "ignore" : "merge"}-duplicates`];
      if (
         (r !== void 0 && this.url.searchParams.set("on_conflict", r),
         this.headers.Prefer && a.push(this.headers.Prefer),
         i && a.push(`count=${i}`),
         s || a.push("missing=default"),
         (this.headers.Prefer = a.join(",")),
         Array.isArray(t))
      ) {
         const l = t.reduce((u, c) => u.concat(Object.keys(c)), []);
         if (l.length > 0) {
            const u = [...new Set(l)].map((c) => `"${c}"`);
            this.url.searchParams.set("columns", u.join(","));
         }
      }
      return new Bn({
         method: o,
         url: this.url,
         headers: this.headers,
         schema: this.schema,
         body: t,
         fetch: this.fetch,
         allowEmpty: !1,
      });
   }
   update(t, { count: r } = {}) {
      const n = "PATCH",
         i = [];
      return (
         this.headers.Prefer && i.push(this.headers.Prefer),
         r && i.push(`count=${r}`),
         (this.headers.Prefer = i.join(",")),
         new Bn({
            method: n,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: t,
            fetch: this.fetch,
            allowEmpty: !1,
         })
      );
   }
   delete({ count: t } = {}) {
      const r = "DELETE",
         n = [];
      return (
         t && n.push(`count=${t}`),
         this.headers.Prefer && n.unshift(this.headers.Prefer),
         (this.headers.Prefer = n.join(",")),
         new Bn({
            method: r,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch,
            allowEmpty: !1,
         })
      );
   }
}
const Bk = "1.8.4",
   qk = { "X-Client-Info": `postgrest-js/${Bk}` };
class Hd {
   constructor(t, { headers: r = {}, schema: n, fetch: i } = {}) {
      (this.url = t),
         (this.headers = Object.assign(Object.assign({}, qk), r)),
         (this.schemaName = n),
         (this.fetch = i);
   }
   from(t) {
      const r = new URL(`${this.url}/${t}`);
      return new zk(r, {
         headers: Object.assign({}, this.headers),
         schema: this.schemaName,
         fetch: this.fetch,
      });
   }
   schema(t) {
      return new Hd(this.url, {
         headers: this.headers,
         schema: t,
         fetch: this.fetch,
      });
   }
   rpc(t, r = {}, { head: n = !1, count: i } = {}) {
      let s;
      const o = new URL(`${this.url}/rpc/${t}`);
      let a;
      n
         ? ((s = "HEAD"),
           Object.entries(r).forEach(([u, c]) => {
              o.searchParams.append(u, `${c}`);
           }))
         : ((s = "POST"), (a = r));
      const l = Object.assign({}, this.headers);
      return (
         i && (l.Prefer = `count=${i}`),
         new Bn({
            method: s,
            url: o,
            headers: l,
            schema: this.schemaName,
            body: a,
            fetch: this.fetch,
            allowEmpty: !1,
         })
      );
   }
}
var Yl, Jh;
function Vk() {
   if (Jh) return Yl;
   Jh = 1;
   var e = function () {
      if (typeof self == "object" && self) return self;
      if (typeof window == "object" && window) return window;
      throw new Error("Unable to resolve global `this`");
   };
   return (
      (Yl = (function () {
         if (this) return this;
         if (typeof globalThis == "object" && globalThis) return globalThis;
         try {
            Object.defineProperty(Object.prototype, "__global__", {
               get: function () {
                  return this;
               },
               configurable: !0,
            });
         } catch {
            return e();
         }
         try {
            return __global__ || e();
         } finally {
            delete Object.prototype.__global__;
         }
      })()),
      Yl
   );
}
const Wk = "websocket",
   Hk =
      "Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",
   Qk = [
      "websocket",
      "websockets",
      "socket",
      "networking",
      "comet",
      "push",
      "RFC-6455",
      "realtime",
      "server",
      "client",
   ],
   Gk =
      "Brian McKelvey <theturtle32@gmail.com> (https://github.com/theturtle32)",
   Kk = ["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],
   Yk = "1.0.34",
   Jk = {
      type: "git",
      url: "https://github.com/theturtle32/WebSocket-Node.git",
   },
   Xk = "https://github.com/theturtle32/WebSocket-Node",
   Zk = { node: ">=4.0.0" },
   eS = {
      bufferutil: "^4.0.1",
      debug: "^2.2.0",
      "es5-ext": "^0.10.50",
      "typedarray-to-buffer": "^3.1.5",
      "utf-8-validate": "^5.0.2",
      yaeti: "^0.0.6",
   },
   tS = {
      "buffer-equal": "^1.0.0",
      gulp: "^4.0.2",
      "gulp-jshint": "^2.0.4",
      "jshint-stylish": "^2.2.1",
      jshint: "^2.0.0",
      tape: "^4.9.1",
   },
   rS = { verbose: !1 },
   nS = { test: "tape test/unit/*.js", gulp: "gulp" },
   iS = "index",
   sS = { lib: "./lib" },
   oS = "lib/browser.js",
   aS = "Apache-2.0",
   lS = {
      name: Wk,
      description: Hk,
      keywords: Qk,
      author: Gk,
      contributors: Kk,
      version: Yk,
      repository: Jk,
      homepage: Xk,
      engines: Zk,
      dependencies: eS,
      devDependencies: tS,
      config: rS,
      scripts: nS,
      main: iS,
      directories: sS,
      browser: oS,
      license: aS,
   };
var uS = lS.version,
   dn;
if (typeof globalThis == "object") dn = globalThis;
else
   try {
      dn = Vk();
   } catch {
   } finally {
      if ((!dn && typeof window < "u" && (dn = window), !dn))
         throw new Error("Could not determine global this");
   }
var Fs = dn.WebSocket || dn.MozWebSocket,
   cS = uS;
function Yv(e, t) {
   var r;
   return t ? (r = new Fs(e, t)) : (r = new Fs(e)), r;
}
Fs &&
   ["CONNECTING", "OPEN", "CLOSING", "CLOSED"].forEach(function (e) {
      Object.defineProperty(Yv, e, {
         get: function () {
            return Fs[e];
         },
      });
   });
var dS = { w3cwebsocket: Fs ? Yv : null, version: cS };
const fS = "2.7.4",
   hS = { "X-Client-Info": `realtime-js/${fS}` },
   pS = "1.0.0",
   Jv = 1e4,
   mS = 1e3;
var ms;
(function (e) {
   (e[(e.connecting = 0)] = "connecting"),
      (e[(e.open = 1)] = "open"),
      (e[(e.closing = 2)] = "closing"),
      (e[(e.closed = 3)] = "closed");
})(ms || (ms = {}));
var pt;
(function (e) {
   (e.closed = "closed"),
      (e.errored = "errored"),
      (e.joined = "joined"),
      (e.joining = "joining"),
      (e.leaving = "leaving");
})(pt || (pt = {}));
var Ft;
(function (e) {
   (e.close = "phx_close"),
      (e.error = "phx_error"),
      (e.join = "phx_join"),
      (e.reply = "phx_reply"),
      (e.leave = "phx_leave"),
      (e.access_token = "access_token");
})(Ft || (Ft = {}));
var Sc;
(function (e) {
   e.websocket = "websocket";
})(Sc || (Sc = {}));
var fn;
(function (e) {
   (e.Connecting = "connecting"),
      (e.Open = "open"),
      (e.Closing = "closing"),
      (e.Closed = "closed");
})(fn || (fn = {}));
class Xv {
   constructor(t, r) {
      (this.callback = t),
         (this.timerCalc = r),
         (this.timer = void 0),
         (this.tries = 0),
         (this.callback = t),
         (this.timerCalc = r);
   }
   reset() {
      (this.tries = 0), clearTimeout(this.timer);
   }
   scheduleTimeout() {
      clearTimeout(this.timer),
         (this.timer = setTimeout(() => {
            (this.tries = this.tries + 1), this.callback();
         }, this.timerCalc(this.tries + 1)));
   }
}
class gS {
   constructor() {
      this.HEADER_LENGTH = 1;
   }
   decode(t, r) {
      return t.constructor === ArrayBuffer
         ? r(this._binaryDecode(t))
         : r(typeof t == "string" ? JSON.parse(t) : {});
   }
   _binaryDecode(t) {
      const r = new DataView(t),
         n = new TextDecoder();
      return this._decodeBroadcast(t, r, n);
   }
   _decodeBroadcast(t, r, n) {
      const i = r.getUint8(1),
         s = r.getUint8(2);
      let o = this.HEADER_LENGTH + 2;
      const a = n.decode(t.slice(o, o + i));
      o = o + i;
      const l = n.decode(t.slice(o, o + s));
      o = o + s;
      const u = JSON.parse(n.decode(t.slice(o, t.byteLength)));
      return { ref: null, topic: a, event: l, payload: u };
   }
}
class Jl {
   constructor(t, r, n = {}, i = Jv) {
      (this.channel = t),
         (this.event = r),
         (this.payload = n),
         (this.timeout = i),
         (this.sent = !1),
         (this.timeoutTimer = void 0),
         (this.ref = ""),
         (this.receivedResp = null),
         (this.recHooks = []),
         (this.refEvent = null),
         (this.rateLimited = !1);
   }
   resend(t) {
      (this.timeout = t),
         this._cancelRefEvent(),
         (this.ref = ""),
         (this.refEvent = null),
         (this.receivedResp = null),
         (this.sent = !1),
         this.send();
   }
   send() {
      if (this._hasReceived("timeout")) return;
      this.startTimeout(),
         (this.sent = !0),
         this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload,
            ref: this.ref,
            join_ref: this.channel._joinRef(),
         }) === "rate limited" && (this.rateLimited = !0);
   }
   updatePayload(t) {
      this.payload = Object.assign(Object.assign({}, this.payload), t);
   }
   receive(t, r) {
      var n;
      return (
         this._hasReceived(t) &&
            r(
               (n = this.receivedResp) === null || n === void 0
                  ? void 0
                  : n.response
            ),
         this.recHooks.push({ status: t, callback: r }),
         this
      );
   }
   startTimeout() {
      if (this.timeoutTimer) return;
      (this.ref = this.channel.socket._makeRef()),
         (this.refEvent = this.channel._replyEventName(this.ref));
      const t = (r) => {
         this._cancelRefEvent(),
            this._cancelTimeout(),
            (this.receivedResp = r),
            this._matchReceive(r);
      };
      this.channel._on(this.refEvent, {}, t),
         (this.timeoutTimer = setTimeout(() => {
            this.trigger("timeout", {});
         }, this.timeout));
   }
   trigger(t, r) {
      this.refEvent &&
         this.channel._trigger(this.refEvent, { status: t, response: r });
   }
   destroy() {
      this._cancelRefEvent(), this._cancelTimeout();
   }
   _cancelRefEvent() {
      this.refEvent && this.channel._off(this.refEvent, {});
   }
   _cancelTimeout() {
      clearTimeout(this.timeoutTimer), (this.timeoutTimer = void 0);
   }
   _matchReceive({ status: t, response: r }) {
      this.recHooks.filter((n) => n.status === t).forEach((n) => n.callback(r));
   }
   _hasReceived(t) {
      return this.receivedResp && this.receivedResp.status === t;
   }
}
var Xh;
(function (e) {
   (e.SYNC = "sync"), (e.JOIN = "join"), (e.LEAVE = "leave");
})(Xh || (Xh = {}));
class gs {
   constructor(t, r) {
      (this.channel = t),
         (this.state = {}),
         (this.pendingDiffs = []),
         (this.joinRef = null),
         (this.caller = {
            onJoin: () => {},
            onLeave: () => {},
            onSync: () => {},
         });
      const n = (r == null ? void 0 : r.events) || {
         state: "presence_state",
         diff: "presence_diff",
      };
      this.channel._on(n.state, {}, (i) => {
         const { onJoin: s, onLeave: o, onSync: a } = this.caller;
         (this.joinRef = this.channel._joinRef()),
            (this.state = gs.syncState(this.state, i, s, o)),
            this.pendingDiffs.forEach((l) => {
               this.state = gs.syncDiff(this.state, l, s, o);
            }),
            (this.pendingDiffs = []),
            a();
      }),
         this.channel._on(n.diff, {}, (i) => {
            const { onJoin: s, onLeave: o, onSync: a } = this.caller;
            this.inPendingSyncState()
               ? this.pendingDiffs.push(i)
               : ((this.state = gs.syncDiff(this.state, i, s, o)), a());
         }),
         this.onJoin((i, s, o) => {
            this.channel._trigger("presence", {
               event: "join",
               key: i,
               currentPresences: s,
               newPresences: o,
            });
         }),
         this.onLeave((i, s, o) => {
            this.channel._trigger("presence", {
               event: "leave",
               key: i,
               currentPresences: s,
               leftPresences: o,
            });
         }),
         this.onSync(() => {
            this.channel._trigger("presence", { event: "sync" });
         });
   }
   static syncState(t, r, n, i) {
      const s = this.cloneDeep(t),
         o = this.transformState(r),
         a = {},
         l = {};
      return (
         this.map(s, (u, c) => {
            o[u] || (l[u] = c);
         }),
         this.map(o, (u, c) => {
            const d = s[u];
            if (d) {
               const h = c.map((k) => k.presence_ref),
                  m = d.map((k) => k.presence_ref),
                  y = c.filter((k) => m.indexOf(k.presence_ref) < 0),
                  w = d.filter((k) => h.indexOf(k.presence_ref) < 0);
               y.length > 0 && (a[u] = y), w.length > 0 && (l[u] = w);
            } else a[u] = c;
         }),
         this.syncDiff(s, { joins: a, leaves: l }, n, i)
      );
   }
   static syncDiff(t, r, n, i) {
      const { joins: s, leaves: o } = {
         joins: this.transformState(r.joins),
         leaves: this.transformState(r.leaves),
      };
      return (
         n || (n = () => {}),
         i || (i = () => {}),
         this.map(s, (a, l) => {
            var u;
            const c = (u = t[a]) !== null && u !== void 0 ? u : [];
            if (((t[a] = this.cloneDeep(l)), c.length > 0)) {
               const d = t[a].map((m) => m.presence_ref),
                  h = c.filter((m) => d.indexOf(m.presence_ref) < 0);
               t[a].unshift(...h);
            }
            n(a, c, l);
         }),
         this.map(o, (a, l) => {
            let u = t[a];
            if (!u) return;
            const c = l.map((d) => d.presence_ref);
            (u = u.filter((d) => c.indexOf(d.presence_ref) < 0)),
               (t[a] = u),
               i(a, u, l),
               u.length === 0 && delete t[a];
         }),
         t
      );
   }
   static map(t, r) {
      return Object.getOwnPropertyNames(t).map((n) => r(n, t[n]));
   }
   static transformState(t) {
      return (
         (t = this.cloneDeep(t)),
         Object.getOwnPropertyNames(t).reduce((r, n) => {
            const i = t[n];
            return (
               "metas" in i
                  ? (r[n] = i.metas.map(
                       (s) => (
                          (s.presence_ref = s.phx_ref),
                          delete s.phx_ref,
                          delete s.phx_ref_prev,
                          s
                       )
                    ))
                  : (r[n] = i),
               r
            );
         }, {})
      );
   }
   static cloneDeep(t) {
      return JSON.parse(JSON.stringify(t));
   }
   onJoin(t) {
      this.caller.onJoin = t;
   }
   onLeave(t) {
      this.caller.onLeave = t;
   }
   onSync(t) {
      this.caller.onSync = t;
   }
   inPendingSyncState() {
      return !this.joinRef || this.joinRef !== this.channel._joinRef();
   }
}
var le;
(function (e) {
   (e.abstime = "abstime"),
      (e.bool = "bool"),
      (e.date = "date"),
      (e.daterange = "daterange"),
      (e.float4 = "float4"),
      (e.float8 = "float8"),
      (e.int2 = "int2"),
      (e.int4 = "int4"),
      (e.int4range = "int4range"),
      (e.int8 = "int8"),
      (e.int8range = "int8range"),
      (e.json = "json"),
      (e.jsonb = "jsonb"),
      (e.money = "money"),
      (e.numeric = "numeric"),
      (e.oid = "oid"),
      (e.reltime = "reltime"),
      (e.text = "text"),
      (e.time = "time"),
      (e.timestamp = "timestamp"),
      (e.timestamptz = "timestamptz"),
      (e.timetz = "timetz"),
      (e.tsrange = "tsrange"),
      (e.tstzrange = "tstzrange");
})(le || (le = {}));
const Zh = (e, t, r = {}) => {
      var n;
      const i = (n = r.skipTypes) !== null && n !== void 0 ? n : [];
      return Object.keys(t).reduce((s, o) => ((s[o] = vS(o, e, t, i)), s), {});
   },
   vS = (e, t, r, n) => {
      const i = t.find((a) => a.name === e),
         s = i == null ? void 0 : i.type,
         o = r[e];
      return s && !n.includes(s) ? Zv(s, o) : _c(o);
   },
   Zv = (e, t) => {
      if (e.charAt(0) === "_") {
         const r = e.slice(1, e.length);
         return bS(t, r);
      }
      switch (e) {
         case le.bool:
            return yS(t);
         case le.float4:
         case le.float8:
         case le.int2:
         case le.int4:
         case le.int8:
         case le.numeric:
         case le.oid:
            return wS(t);
         case le.json:
         case le.jsonb:
            return xS(t);
         case le.timestamp:
            return kS(t);
         case le.abstime:
         case le.date:
         case le.daterange:
         case le.int4range:
         case le.int8range:
         case le.money:
         case le.reltime:
         case le.text:
         case le.time:
         case le.timestamptz:
         case le.timetz:
         case le.tsrange:
         case le.tstzrange:
            return _c(t);
         default:
            return _c(t);
      }
   },
   _c = (e) => e,
   yS = (e) => {
      switch (e) {
         case "t":
            return !0;
         case "f":
            return !1;
         default:
            return e;
      }
   },
   wS = (e) => {
      if (typeof e == "string") {
         const t = parseFloat(e);
         if (!Number.isNaN(t)) return t;
      }
      return e;
   },
   xS = (e) => {
      if (typeof e == "string")
         try {
            return JSON.parse(e);
         } catch (t) {
            return console.log(`JSON parse error: ${t}`), e;
         }
      return e;
   },
   bS = (e, t) => {
      if (typeof e != "string") return e;
      const r = e.length - 1,
         n = e[r];
      if (e[0] === "{" && n === "}") {
         let s;
         const o = e.slice(1, r);
         try {
            s = JSON.parse("[" + o + "]");
         } catch {
            s = o ? o.split(",") : [];
         }
         return s.map((a) => Zv(t, a));
      }
      return e;
   },
   kS = (e) => (typeof e == "string" ? e.replace(" ", "T") : e);
var ep =
      (globalThis && globalThis.__awaiter) ||
      function (e, t, r, n) {
         function i(s) {
            return s instanceof r
               ? s
               : new r(function (o) {
                    o(s);
                 });
         }
         return new (r || (r = Promise))(function (s, o) {
            function a(c) {
               try {
                  u(n.next(c));
               } catch (d) {
                  o(d);
               }
            }
            function l(c) {
               try {
                  u(n.throw(c));
               } catch (d) {
                  o(d);
               }
            }
            function u(c) {
               c.done ? s(c.value) : i(c.value).then(a, l);
            }
            u((n = n.apply(e, t || [])).next());
         });
      },
   tp;
(function (e) {
   (e.ALL = "*"),
      (e.INSERT = "INSERT"),
      (e.UPDATE = "UPDATE"),
      (e.DELETE = "DELETE");
})(tp || (tp = {}));
var rp;
(function (e) {
   (e.BROADCAST = "broadcast"),
      (e.PRESENCE = "presence"),
      (e.POSTGRES_CHANGES = "postgres_changes");
})(rp || (rp = {}));
var np;
(function (e) {
   (e.SUBSCRIBED = "SUBSCRIBED"),
      (e.TIMED_OUT = "TIMED_OUT"),
      (e.CLOSED = "CLOSED"),
      (e.CHANNEL_ERROR = "CHANNEL_ERROR");
})(np || (np = {}));
class Qd {
   constructor(t, r = { config: {} }, n) {
      (this.topic = t),
         (this.params = r),
         (this.socket = n),
         (this.bindings = {}),
         (this.state = pt.closed),
         (this.joinedOnce = !1),
         (this.pushBuffer = []),
         (this.params.config = Object.assign(
            { broadcast: { ack: !1, self: !1 }, presence: { key: "" } },
            r.config
         )),
         (this.timeout = this.socket.timeout),
         (this.joinPush = new Jl(this, Ft.join, this.params, this.timeout)),
         (this.rejoinTimer = new Xv(
            () => this._rejoinUntilConnected(),
            this.socket.reconnectAfterMs
         )),
         this.joinPush.receive("ok", () => {
            (this.state = pt.joined),
               this.rejoinTimer.reset(),
               this.pushBuffer.forEach((i) => i.send()),
               (this.pushBuffer = []);
         }),
         this._onClose(() => {
            this.rejoinTimer.reset(),
               this.socket.log(
                  "channel",
                  `close ${this.topic} ${this._joinRef()}`
               ),
               (this.state = pt.closed),
               this.socket._remove(this);
         }),
         this._onError((i) => {
            this._isLeaving() ||
               this._isClosed() ||
               (this.socket.log("channel", `error ${this.topic}`, i),
               (this.state = pt.errored),
               this.rejoinTimer.scheduleTimeout());
         }),
         this.joinPush.receive("timeout", () => {
            this._isJoining() &&
               (this.socket.log(
                  "channel",
                  `timeout ${this.topic}`,
                  this.joinPush.timeout
               ),
               (this.state = pt.errored),
               this.rejoinTimer.scheduleTimeout());
         }),
         this._on(Ft.reply, {}, (i, s) => {
            this._trigger(this._replyEventName(s), i);
         }),
         (this.presence = new gs(this));
   }
   subscribe(t, r = this.timeout) {
      var n, i;
      if (this.joinedOnce)
         throw "tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";
      {
         const {
            config: { broadcast: s, presence: o },
         } = this.params;
         this._onError((u) => t && t("CHANNEL_ERROR", u)),
            this._onClose(() => t && t("CLOSED"));
         const a = {},
            l = {
               broadcast: s,
               presence: o,
               postgres_changes:
                  (i =
                     (n = this.bindings.postgres_changes) === null ||
                     n === void 0
                        ? void 0
                        : n.map((u) => u.filter)) !== null && i !== void 0
                     ? i
                     : [],
            };
         this.socket.accessToken && (a.access_token = this.socket.accessToken),
            this.updateJoinPayload(Object.assign({ config: l }, a)),
            (this.joinedOnce = !0),
            this._rejoin(r),
            this.joinPush
               .receive("ok", ({ postgres_changes: u }) => {
                  var c;
                  if (
                     (this.socket.accessToken &&
                        this.socket.setAuth(this.socket.accessToken),
                     u === void 0)
                  ) {
                     t && t("SUBSCRIBED");
                     return;
                  } else {
                     const d = this.bindings.postgres_changes,
                        h =
                           (c = d == null ? void 0 : d.length) !== null &&
                           c !== void 0
                              ? c
                              : 0,
                        m = [];
                     for (let y = 0; y < h; y++) {
                        const w = d[y],
                           {
                              filter: {
                                 event: k,
                                 schema: g,
                                 table: p,
                                 filter: v,
                              },
                           } = w,
                           b = u && u[y];
                        if (
                           b &&
                           b.event === k &&
                           b.schema === g &&
                           b.table === p &&
                           b.filter === v
                        )
                           m.push(
                              Object.assign(Object.assign({}, w), { id: b.id })
                           );
                        else {
                           this.unsubscribe(),
                              t &&
                                 t(
                                    "CHANNEL_ERROR",
                                    new Error(
                                       "mismatch between server and client bindings for postgres changes"
                                    )
                                 );
                           return;
                        }
                     }
                     (this.bindings.postgres_changes = m), t && t("SUBSCRIBED");
                     return;
                  }
               })
               .receive("error", (u) => {
                  t &&
                     t(
                        "CHANNEL_ERROR",
                        new Error(
                           JSON.stringify(
                              Object.values(u).join(", ") || "error"
                           )
                        )
                     );
               })
               .receive("timeout", () => {
                  t && t("TIMED_OUT");
               });
      }
      return this;
   }
   presenceState() {
      return this.presence.state;
   }
   track(t, r = {}) {
      return ep(this, void 0, void 0, function* () {
         return yield this.send(
            { type: "presence", event: "track", payload: t },
            r.timeout || this.timeout
         );
      });
   }
   untrack(t = {}) {
      return ep(this, void 0, void 0, function* () {
         return yield this.send({ type: "presence", event: "untrack" }, t);
      });
   }
   on(t, r, n) {
      return this._on(t, r, n);
   }
   send(t, r = {}) {
      return new Promise((n) => {
         var i, s, o;
         const a = this._push(t.type, t, r.timeout || this.timeout);
         a.rateLimited && n("rate limited"),
            t.type === "broadcast" &&
               !(
                  !(
                     (o =
                        (s =
                           (i = this.params) === null || i === void 0
                              ? void 0
                              : i.config) === null || s === void 0
                           ? void 0
                           : s.broadcast) === null || o === void 0
                  ) && o.ack
               ) &&
               n("ok"),
            a.receive("ok", () => n("ok")),
            a.receive("timeout", () => n("timed out"));
      });
   }
   updateJoinPayload(t) {
      this.joinPush.updatePayload(t);
   }
   unsubscribe(t = this.timeout) {
      this.state = pt.leaving;
      const r = () => {
         this.socket.log("channel", `leave ${this.topic}`),
            this._trigger(Ft.close, "leave", this._joinRef());
      };
      return (
         this.rejoinTimer.reset(),
         this.joinPush.destroy(),
         new Promise((n) => {
            const i = new Jl(this, Ft.leave, {}, t);
            i
               .receive("ok", () => {
                  r(), n("ok");
               })
               .receive("timeout", () => {
                  r(), n("timed out");
               })
               .receive("error", () => {
                  n("error");
               }),
               i.send(),
               this._canPush() || i.trigger("ok", {});
         })
      );
   }
   _push(t, r, n = this.timeout) {
      if (!this.joinedOnce)
         throw `tried to push '${t}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
      let i = new Jl(this, t, r, n);
      return (
         this._canPush()
            ? i.send()
            : (i.startTimeout(), this.pushBuffer.push(i)),
         i
      );
   }
   _onMessage(t, r, n) {
      return r;
   }
   _isMember(t) {
      return this.topic === t;
   }
   _joinRef() {
      return this.joinPush.ref;
   }
   _trigger(t, r, n) {
      var i, s;
      const o = t.toLocaleLowerCase(),
         { close: a, error: l, leave: u, join: c } = Ft;
      if (n && [a, l, u, c].indexOf(o) >= 0 && n !== this._joinRef()) return;
      let h = this._onMessage(o, r, n);
      if (r && !h)
         throw "channel onMessage callbacks must return the payload, modified or unmodified";
      ["insert", "update", "delete"].includes(o)
         ? (i = this.bindings.postgres_changes) === null ||
           i === void 0 ||
           i
              .filter((m) => {
                 var y, w, k;
                 return (
                    ((y = m.filter) === null || y === void 0
                       ? void 0
                       : y.event) === "*" ||
                    ((k =
                       (w = m.filter) === null || w === void 0
                          ? void 0
                          : w.event) === null || k === void 0
                       ? void 0
                       : k.toLocaleLowerCase()) === o
                 );
              })
              .map((m) => m.callback(h, n))
         : (s = this.bindings[o]) === null ||
           s === void 0 ||
           s
              .filter((m) => {
                 var y, w, k, g, p, v;
                 if (["broadcast", "presence", "postgres_changes"].includes(o))
                    if ("id" in m) {
                       const b = m.id,
                          _ =
                             (y = m.filter) === null || y === void 0
                                ? void 0
                                : y.event;
                       return (
                          b &&
                          ((w = r.ids) === null || w === void 0
                             ? void 0
                             : w.includes(b)) &&
                          (_ === "*" ||
                             (_ == null ? void 0 : _.toLocaleLowerCase()) ===
                                ((k = r.data) === null || k === void 0
                                   ? void 0
                                   : k.type.toLocaleLowerCase()))
                       );
                    } else {
                       const b =
                          (p =
                             (g = m == null ? void 0 : m.filter) === null ||
                             g === void 0
                                ? void 0
                                : g.event) === null || p === void 0
                             ? void 0
                             : p.toLocaleLowerCase();
                       return (
                          b === "*" ||
                          b ===
                             ((v = r == null ? void 0 : r.event) === null ||
                             v === void 0
                                ? void 0
                                : v.toLocaleLowerCase())
                       );
                    }
                 else return m.type.toLocaleLowerCase() === o;
              })
              .map((m) => {
                 if (typeof h == "object" && "ids" in h) {
                    const y = h.data,
                       {
                          schema: w,
                          table: k,
                          commit_timestamp: g,
                          type: p,
                          errors: v,
                       } = y;
                    h = Object.assign(
                       Object.assign(
                          {},
                          {
                             schema: w,
                             table: k,
                             commit_timestamp: g,
                             eventType: p,
                             new: {},
                             old: {},
                             errors: v,
                          }
                       ),
                       this._getPayloadRecords(y)
                    );
                 }
                 m.callback(h, n);
              });
   }
   _isClosed() {
      return this.state === pt.closed;
   }
   _isJoined() {
      return this.state === pt.joined;
   }
   _isJoining() {
      return this.state === pt.joining;
   }
   _isLeaving() {
      return this.state === pt.leaving;
   }
   _replyEventName(t) {
      return `chan_reply_${t}`;
   }
   _on(t, r, n) {
      const i = t.toLocaleLowerCase(),
         s = { type: i, filter: r, callback: n };
      return (
         this.bindings[i] ? this.bindings[i].push(s) : (this.bindings[i] = [s]),
         this
      );
   }
   _off(t, r) {
      const n = t.toLocaleLowerCase();
      return (
         (this.bindings[n] = this.bindings[n].filter((i) => {
            var s;
            return !(
               ((s = i.type) === null || s === void 0
                  ? void 0
                  : s.toLocaleLowerCase()) === n && Qd.isEqual(i.filter, r)
            );
         })),
         this
      );
   }
   static isEqual(t, r) {
      if (Object.keys(t).length !== Object.keys(r).length) return !1;
      for (const n in t) if (t[n] !== r[n]) return !1;
      return !0;
   }
   _rejoinUntilConnected() {
      this.rejoinTimer.scheduleTimeout(),
         this.socket.isConnected() && this._rejoin();
   }
   _onClose(t) {
      this._on(Ft.close, {}, t);
   }
   _onError(t) {
      this._on(Ft.error, {}, (r) => t(r));
   }
   _canPush() {
      return this.socket.isConnected() && this._isJoined();
   }
   _rejoin(t = this.timeout) {
      this._isLeaving() ||
         (this.socket._leaveOpenTopic(this.topic),
         (this.state = pt.joining),
         this.joinPush.resend(t));
   }
   _getPayloadRecords(t) {
      const r = { new: {}, old: {} };
      return (
         (t.type === "INSERT" || t.type === "UPDATE") &&
            (r.new = Zh(t.columns, t.record)),
         (t.type === "UPDATE" || t.type === "DELETE") &&
            (r.old = Zh(t.columns, t.old_record)),
         r
      );
   }
}
var Xl =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const SS = () => {};
class _S {
   constructor(t, r) {
      var n, i;
      (this.accessToken = null),
         (this.channels = []),
         (this.endPoint = ""),
         (this.headers = hS),
         (this.params = {}),
         (this.timeout = Jv),
         (this.transport = dS.w3cwebsocket),
         (this.heartbeatIntervalMs = 3e4),
         (this.heartbeatTimer = void 0),
         (this.pendingHeartbeatRef = null),
         (this.ref = 0),
         (this.logger = SS),
         (this.conn = null),
         (this.sendBuffer = []),
         (this.serializer = new gS()),
         (this.stateChangeCallbacks = {
            open: [],
            close: [],
            error: [],
            message: [],
         }),
         (this.eventsPerSecondLimitMs = 100),
         (this.inThrottle = !1),
         (this.endPoint = `${t}/${Sc.websocket}`),
         r != null && r.params && (this.params = r.params),
         r != null &&
            r.headers &&
            (this.headers = Object.assign(
               Object.assign({}, this.headers),
               r.headers
            )),
         r != null && r.timeout && (this.timeout = r.timeout),
         r != null && r.logger && (this.logger = r.logger),
         r != null && r.transport && (this.transport = r.transport),
         r != null &&
            r.heartbeatIntervalMs &&
            (this.heartbeatIntervalMs = r.heartbeatIntervalMs);
      const s =
         (n = r == null ? void 0 : r.params) === null || n === void 0
            ? void 0
            : n.eventsPerSecond;
      s && (this.eventsPerSecondLimitMs = Math.floor(1e3 / s));
      const o =
         (i = r == null ? void 0 : r.params) === null || i === void 0
            ? void 0
            : i.apikey;
      o && (this.accessToken = o),
         (this.reconnectAfterMs =
            r != null && r.reconnectAfterMs
               ? r.reconnectAfterMs
               : (a) => [1e3, 2e3, 5e3, 1e4][a - 1] || 1e4),
         (this.encode =
            r != null && r.encode ? r.encode : (a, l) => l(JSON.stringify(a))),
         (this.decode =
            r != null && r.decode
               ? r.decode
               : this.serializer.decode.bind(this.serializer)),
         (this.reconnectTimer = new Xv(
            () =>
               Xl(this, void 0, void 0, function* () {
                  this.disconnect(), this.connect();
               }),
            this.reconnectAfterMs
         ));
   }
   connect() {
      this.conn ||
         ((this.conn = new this.transport(
            this._endPointURL(),
            [],
            null,
            this.headers
         )),
         this.conn &&
            ((this.conn.binaryType = "arraybuffer"),
            (this.conn.onopen = () => this._onConnOpen()),
            (this.conn.onerror = (t) => this._onConnError(t)),
            (this.conn.onmessage = (t) => this._onConnMessage(t)),
            (this.conn.onclose = (t) => this._onConnClose(t))));
   }
   disconnect(t, r) {
      this.conn &&
         ((this.conn.onclose = function () {}),
         t ? this.conn.close(t, r ?? "") : this.conn.close(),
         (this.conn = null),
         this.heartbeatTimer && clearInterval(this.heartbeatTimer),
         this.reconnectTimer.reset());
   }
   getChannels() {
      return this.channels;
   }
   removeChannel(t) {
      return Xl(this, void 0, void 0, function* () {
         const r = yield t.unsubscribe();
         return this.channels.length === 0 && this.disconnect(), r;
      });
   }
   removeAllChannels() {
      return Xl(this, void 0, void 0, function* () {
         const t = yield Promise.all(this.channels.map((r) => r.unsubscribe()));
         return this.disconnect(), t;
      });
   }
   log(t, r, n) {
      this.logger(t, r, n);
   }
   connectionState() {
      switch (this.conn && this.conn.readyState) {
         case ms.connecting:
            return fn.Connecting;
         case ms.open:
            return fn.Open;
         case ms.closing:
            return fn.Closing;
         default:
            return fn.Closed;
      }
   }
   isConnected() {
      return this.connectionState() === fn.Open;
   }
   channel(t, r = { config: {} }) {
      this.isConnected() || this.connect();
      const n = new Qd(`realtime:${t}`, r, this);
      return this.channels.push(n), n;
   }
   push(t) {
      const { topic: r, event: n, payload: i, ref: s } = t;
      let o = () => {
         this.encode(t, (a) => {
            var l;
            (l = this.conn) === null || l === void 0 || l.send(a);
         });
      };
      if ((this.log("push", `${r} ${n} (${s})`, i), this.isConnected()))
         if (["broadcast", "presence", "postgres_changes"].includes(n)) {
            if (this._throttle(o)()) return "rate limited";
         } else o();
      else this.sendBuffer.push(o);
   }
   setAuth(t) {
      (this.accessToken = t),
         this.channels.forEach((r) => {
            t && r.updateJoinPayload({ access_token: t }),
               r.joinedOnce &&
                  r._isJoined() &&
                  r._push(Ft.access_token, { access_token: t });
         });
   }
   _makeRef() {
      let t = this.ref + 1;
      return (
         t === this.ref ? (this.ref = 0) : (this.ref = t), this.ref.toString()
      );
   }
   _leaveOpenTopic(t) {
      let r = this.channels.find(
         (n) => n.topic === t && (n._isJoined() || n._isJoining())
      );
      r &&
         (this.log("transport", `leaving duplicate topic "${t}"`),
         r.unsubscribe());
   }
   _remove(t) {
      this.channels = this.channels.filter(
         (r) => r._joinRef() !== t._joinRef()
      );
   }
   _endPointURL() {
      return this._appendParams(
         this.endPoint,
         Object.assign({}, this.params, { vsn: pS })
      );
   }
   _onConnMessage(t) {
      this.decode(t.data, (r) => {
         let { topic: n, event: i, payload: s, ref: o } = r;
         ((o && o === this.pendingHeartbeatRef) ||
            i === (s == null ? void 0 : s.type)) &&
            (this.pendingHeartbeatRef = null),
            this.log(
               "receive",
               `${s.status || ""} ${n} ${i} ${(o && "(" + o + ")") || ""}`,
               s
            ),
            this.channels
               .filter((a) => a._isMember(n))
               .forEach((a) => a._trigger(i, s, o)),
            this.stateChangeCallbacks.message.forEach((a) => a(r));
      });
   }
   _onConnOpen() {
      this.log("transport", `connected to ${this._endPointURL()}`),
         this._flushSendBuffer(),
         this.reconnectTimer.reset(),
         this.heartbeatTimer && clearInterval(this.heartbeatTimer),
         (this.heartbeatTimer = setInterval(
            () => this._sendHeartbeat(),
            this.heartbeatIntervalMs
         )),
         this.stateChangeCallbacks.open.forEach((t) => t());
   }
   _onConnClose(t) {
      this.log("transport", "close", t),
         this._triggerChanError(),
         this.heartbeatTimer && clearInterval(this.heartbeatTimer),
         this.reconnectTimer.scheduleTimeout(),
         this.stateChangeCallbacks.close.forEach((r) => r(t));
   }
   _onConnError(t) {
      this.log("transport", t.message),
         this._triggerChanError(),
         this.stateChangeCallbacks.error.forEach((r) => r(t));
   }
   _triggerChanError() {
      this.channels.forEach((t) => t._trigger(Ft.error));
   }
   _appendParams(t, r) {
      if (Object.keys(r).length === 0) return t;
      const n = t.match(/\?/) ? "&" : "?",
         i = new URLSearchParams(r);
      return `${t}${n}${i}`;
   }
   _flushSendBuffer() {
      this.isConnected() &&
         this.sendBuffer.length > 0 &&
         (this.sendBuffer.forEach((t) => t()), (this.sendBuffer = []));
   }
   _sendHeartbeat() {
      var t;
      if (this.isConnected()) {
         if (this.pendingHeartbeatRef) {
            (this.pendingHeartbeatRef = null),
               this.log(
                  "transport",
                  "heartbeat timeout. Attempting to re-establish connection"
               ),
               (t = this.conn) === null ||
                  t === void 0 ||
                  t.close(mS, "hearbeat timeout");
            return;
         }
         (this.pendingHeartbeatRef = this._makeRef()),
            this.push({
               topic: "phoenix",
               event: "heartbeat",
               payload: {},
               ref: this.pendingHeartbeatRef,
            }),
            this.setAuth(this.accessToken);
      }
   }
   _throttle(t, r = this.eventsPerSecondLimitMs) {
      return () =>
         this.inThrottle
            ? !0
            : (t(),
              r > 0 &&
                 ((this.inThrottle = !0),
                 setTimeout(() => {
                    this.inThrottle = !1;
                 }, r)),
              !1);
   }
}
class Gd extends Error {
   constructor(t) {
      super(t), (this.__isStorageError = !0), (this.name = "StorageError");
   }
}
function Ke(e) {
   return typeof e == "object" && e !== null && "__isStorageError" in e;
}
class CS extends Gd {
   constructor(t, r) {
      super(t), (this.name = "StorageApiError"), (this.status = r);
   }
   toJSON() {
      return { name: this.name, message: this.message, status: this.status };
   }
}
class ip extends Gd {
   constructor(t, r) {
      super(t), (this.name = "StorageUnknownError"), (this.originalError = r);
   }
}
var ES =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const e0 = (e) => {
      let t;
      return (
         e
            ? (t = e)
            : typeof fetch > "u"
            ? (t = (...r) =>
                 ul(() => Promise.resolve().then(() => cl), void 0).then(
                    ({ default: n }) => n(...r)
                 ))
            : (t = fetch),
         (...r) => t(...r)
      );
   },
   PS = () =>
      ES(void 0, void 0, void 0, function* () {
         return typeof Response > "u"
            ? (yield ul(() => Promise.resolve().then(() => cl), void 0))
                 .Response
            : Response;
      });
var Ri =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const Zl = (e) =>
      e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
   TS = (e, t) =>
      Ri(void 0, void 0, void 0, function* () {
         const r = yield PS();
         e instanceof r
            ? e
                 .json()
                 .then((n) => {
                    t(new CS(Zl(n), e.status || 500));
                 })
                 .catch((n) => {
                    t(new ip(Zl(n), n));
                 })
            : t(new ip(Zl(e), e));
      }),
   jS = (e, t, r, n) => {
      const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
      return e === "GET"
         ? i
         : ((i.headers = Object.assign(
              { "Content-Type": "application/json" },
              t == null ? void 0 : t.headers
           )),
           (i.body = JSON.stringify(n)),
           Object.assign(Object.assign({}, i), r));
   };
function dl(e, t, r, n, i, s) {
   return Ri(this, void 0, void 0, function* () {
      return new Promise((o, a) => {
         e(r, jS(t, n, i, s))
            .then((l) => {
               if (!l.ok) throw l;
               return n != null && n.noResolveJson ? l : l.json();
            })
            .then((l) => o(l))
            .catch((l) => TS(l, a));
      });
   });
}
function Cc(e, t, r, n) {
   return Ri(this, void 0, void 0, function* () {
      return dl(e, "GET", t, r, n);
   });
}
function Dr(e, t, r, n, i) {
   return Ri(this, void 0, void 0, function* () {
      return dl(e, "POST", t, n, i, r);
   });
}
function OS(e, t, r, n, i) {
   return Ri(this, void 0, void 0, function* () {
      return dl(e, "PUT", t, n, i, r);
   });
}
function t0(e, t, r, n, i) {
   return Ri(this, void 0, void 0, function* () {
      return dl(e, "DELETE", t, n, i, r);
   });
}
var St =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const DS = { limit: 100, offset: 0, sortBy: { column: "name", order: "asc" } },
   sp = {
      cacheControl: "3600",
      contentType: "text/plain;charset=UTF-8",
      upsert: !1,
   };
class RS {
   constructor(t, r = {}, n, i) {
      (this.url = t),
         (this.headers = r),
         (this.bucketId = n),
         (this.fetch = e0(i));
   }
   uploadOrUpdate(t, r, n, i) {
      return St(this, void 0, void 0, function* () {
         try {
            let s;
            const o = Object.assign(Object.assign({}, sp), i),
               a = Object.assign(
                  Object.assign({}, this.headers),
                  t === "POST" && { "x-upsert": String(o.upsert) }
               );
            typeof Blob < "u" && n instanceof Blob
               ? ((s = new FormData()),
                 s.append("cacheControl", o.cacheControl),
                 s.append("", n))
               : typeof FormData < "u" && n instanceof FormData
               ? ((s = n), s.append("cacheControl", o.cacheControl))
               : ((s = n),
                 (a["cache-control"] = `max-age=${o.cacheControl}`),
                 (a["content-type"] = o.contentType));
            const l = this._removeEmptyFolders(r),
               u = this._getFinalPath(l),
               c = yield this.fetch(
                  `${this.url}/object/${u}`,
                  Object.assign(
                     { method: t, body: s, headers: a },
                     o != null && o.duplex ? { duplex: o.duplex } : {}
                  )
               );
            return c.ok
               ? { data: { path: l }, error: null }
               : { data: null, error: yield c.json() };
         } catch (s) {
            if (Ke(s)) return { data: null, error: s };
            throw s;
         }
      });
   }
   upload(t, r, n) {
      return St(this, void 0, void 0, function* () {
         return this.uploadOrUpdate("POST", t, r, n);
      });
   }
   uploadToSignedUrl(t, r, n, i) {
      return St(this, void 0, void 0, function* () {
         const s = this._removeEmptyFolders(t),
            o = this._getFinalPath(s),
            a = new URL(this.url + `/object/upload/sign/${o}`);
         a.searchParams.set("token", r);
         try {
            let l;
            const u = Object.assign({ upsert: sp.upsert }, i),
               c = Object.assign(Object.assign({}, this.headers), {
                  "x-upsert": String(u.upsert),
               });
            typeof Blob < "u" && n instanceof Blob
               ? ((l = new FormData()),
                 l.append("cacheControl", u.cacheControl),
                 l.append("", n))
               : typeof FormData < "u" && n instanceof FormData
               ? ((l = n), l.append("cacheControl", u.cacheControl))
               : ((l = n),
                 (c["cache-control"] = `max-age=${u.cacheControl}`),
                 (c["content-type"] = u.contentType));
            const d = yield this.fetch(a.toString(), {
               method: "PUT",
               body: l,
               headers: c,
            });
            return d.ok
               ? { data: { path: s }, error: null }
               : { data: null, error: yield d.json() };
         } catch (l) {
            if (Ke(l)) return { data: null, error: l };
            throw l;
         }
      });
   }
   createSignedUploadUrl(t) {
      return St(this, void 0, void 0, function* () {
         try {
            let r = this._getFinalPath(t);
            const n = yield Dr(
                  this.fetch,
                  `${this.url}/object/upload/sign/${r}`,
                  {},
                  { headers: this.headers }
               ),
               i = new URL(this.url + n.url),
               s = i.searchParams.get("token");
            if (!s) throw new Gd("No token returned by API");
            return {
               data: { signedUrl: i.toString(), path: t, token: s },
               error: null,
            };
         } catch (r) {
            if (Ke(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   update(t, r, n) {
      return St(this, void 0, void 0, function* () {
         return this.uploadOrUpdate("PUT", t, r, n);
      });
   }
   move(t, r) {
      return St(this, void 0, void 0, function* () {
         try {
            return {
               data: yield Dr(
                  this.fetch,
                  `${this.url}/object/move`,
                  { bucketId: this.bucketId, sourceKey: t, destinationKey: r },
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (n) {
            if (Ke(n)) return { data: null, error: n };
            throw n;
         }
      });
   }
   copy(t, r) {
      return St(this, void 0, void 0, function* () {
         try {
            return {
               data: {
                  path: (yield Dr(
                     this.fetch,
                     `${this.url}/object/copy`,
                     {
                        bucketId: this.bucketId,
                        sourceKey: t,
                        destinationKey: r,
                     },
                     { headers: this.headers }
                  )).Key,
               },
               error: null,
            };
         } catch (n) {
            if (Ke(n)) return { data: null, error: n };
            throw n;
         }
      });
   }
   createSignedUrl(t, r, n) {
      return St(this, void 0, void 0, function* () {
         try {
            let i = this._getFinalPath(t),
               s = yield Dr(
                  this.fetch,
                  `${this.url}/object/sign/${i}`,
                  Object.assign(
                     { expiresIn: r },
                     n != null && n.transform ? { transform: n.transform } : {}
                  ),
                  { headers: this.headers }
               );
            const o =
               n != null && n.download
                  ? `&download=${n.download === !0 ? "" : n.download}`
                  : "";
            return (
               (s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${o}`) }),
               { data: s, error: null }
            );
         } catch (i) {
            if (Ke(i)) return { data: null, error: i };
            throw i;
         }
      });
   }
   createSignedUrls(t, r, n) {
      return St(this, void 0, void 0, function* () {
         try {
            const i = yield Dr(
                  this.fetch,
                  `${this.url}/object/sign/${this.bucketId}`,
                  { expiresIn: r, paths: t },
                  { headers: this.headers }
               ),
               s =
                  n != null && n.download
                     ? `&download=${n.download === !0 ? "" : n.download}`
                     : "";
            return {
               data: i.map((o) =>
                  Object.assign(Object.assign({}, o), {
                     signedUrl: o.signedURL
                        ? encodeURI(`${this.url}${o.signedURL}${s}`)
                        : null,
                  })
               ),
               error: null,
            };
         } catch (i) {
            if (Ke(i)) return { data: null, error: i };
            throw i;
         }
      });
   }
   download(t, r) {
      return St(this, void 0, void 0, function* () {
         const i =
               typeof (r == null ? void 0 : r.transform) < "u"
                  ? "render/image/authenticated"
                  : "object",
            s = this.transformOptsToQueryString(
               (r == null ? void 0 : r.transform) || {}
            ),
            o = s ? `?${s}` : "";
         try {
            const a = this._getFinalPath(t);
            return {
               data: yield (yield Cc(this.fetch, `${this.url}/${i}/${a}${o}`, {
                  headers: this.headers,
                  noResolveJson: !0,
               })).blob(),
               error: null,
            };
         } catch (a) {
            if (Ke(a)) return { data: null, error: a };
            throw a;
         }
      });
   }
   getPublicUrl(t, r) {
      const n = this._getFinalPath(t),
         i = [],
         s =
            r != null && r.download
               ? `download=${r.download === !0 ? "" : r.download}`
               : "";
      s !== "" && i.push(s);
      const a =
            typeof (r == null ? void 0 : r.transform) < "u"
               ? "render/image"
               : "object",
         l = this.transformOptsToQueryString(
            (r == null ? void 0 : r.transform) || {}
         );
      l !== "" && i.push(l);
      let u = i.join("&");
      return (
         u !== "" && (u = `?${u}`),
         { data: { publicUrl: encodeURI(`${this.url}/${a}/public/${n}${u}`) } }
      );
   }
   remove(t) {
      return St(this, void 0, void 0, function* () {
         try {
            return {
               data: yield t0(
                  this.fetch,
                  `${this.url}/object/${this.bucketId}`,
                  { prefixes: t },
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (r) {
            if (Ke(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   list(t, r, n) {
      return St(this, void 0, void 0, function* () {
         try {
            const i = Object.assign(Object.assign(Object.assign({}, DS), r), {
               prefix: t || "",
            });
            return {
               data: yield Dr(
                  this.fetch,
                  `${this.url}/object/list/${this.bucketId}`,
                  i,
                  { headers: this.headers },
                  n
               ),
               error: null,
            };
         } catch (i) {
            if (Ke(i)) return { data: null, error: i };
            throw i;
         }
      });
   }
   _getFinalPath(t) {
      return `${this.bucketId}/${t}`;
   }
   _removeEmptyFolders(t) {
      return t.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
   }
   transformOptsToQueryString(t) {
      const r = [];
      return (
         t.width && r.push(`width=${t.width}`),
         t.height && r.push(`height=${t.height}`),
         t.resize && r.push(`resize=${t.resize}`),
         t.format && r.push(`format=${t.format}`),
         t.quality && r.push(`quality=${t.quality}`),
         r.join("&")
      );
   }
}
const IS = "2.5.4",
   $S = { "X-Client-Info": `storage-js/${IS}` };
var Ln =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
class NS {
   constructor(t, r = {}, n) {
      (this.url = t),
         (this.headers = Object.assign(Object.assign({}, $S), r)),
         (this.fetch = e0(n));
   }
   listBuckets() {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield Cc(this.fetch, `${this.url}/bucket`, {
                  headers: this.headers,
               }),
               error: null,
            };
         } catch (t) {
            if (Ke(t)) return { data: null, error: t };
            throw t;
         }
      });
   }
   getBucket(t) {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield Cc(this.fetch, `${this.url}/bucket/${t}`, {
                  headers: this.headers,
               }),
               error: null,
            };
         } catch (r) {
            if (Ke(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   createBucket(t, r = { public: !1 }) {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield Dr(
                  this.fetch,
                  `${this.url}/bucket`,
                  {
                     id: t,
                     name: t,
                     public: r.public,
                     file_size_limit: r.fileSizeLimit,
                     allowed_mime_types: r.allowedMimeTypes,
                  },
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (n) {
            if (Ke(n)) return { data: null, error: n };
            throw n;
         }
      });
   }
   updateBucket(t, r) {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield OS(
                  this.fetch,
                  `${this.url}/bucket/${t}`,
                  {
                     id: t,
                     name: t,
                     public: r.public,
                     file_size_limit: r.fileSizeLimit,
                     allowed_mime_types: r.allowedMimeTypes,
                  },
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (n) {
            if (Ke(n)) return { data: null, error: n };
            throw n;
         }
      });
   }
   emptyBucket(t) {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield Dr(
                  this.fetch,
                  `${this.url}/bucket/${t}/empty`,
                  {},
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (r) {
            if (Ke(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   deleteBucket(t) {
      return Ln(this, void 0, void 0, function* () {
         try {
            return {
               data: yield t0(
                  this.fetch,
                  `${this.url}/bucket/${t}`,
                  {},
                  { headers: this.headers }
               ),
               error: null,
            };
         } catch (r) {
            if (Ke(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
}
class LS extends NS {
   constructor(t, r = {}, n) {
      super(t, r, n);
   }
   from(t) {
      return new RS(this.url, this.headers, t, this.fetch);
   }
}
const AS = "2.36.0";
let ns = "";
typeof Deno < "u"
   ? (ns = "deno")
   : typeof document < "u"
   ? (ns = "web")
   : typeof navigator < "u" && navigator.product === "ReactNative"
   ? (ns = "react-native")
   : (ns = "node");
const MS = { "X-Client-Info": `supabase-js-${ns}/${AS}` };
var FS =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const US = (e) => {
      let t;
      return (
         e ? (t = e) : typeof fetch > "u" ? (t = Wd) : (t = fetch),
         (...r) => t(...r)
      );
   },
   zS = () => (typeof Headers > "u" ? Vd.Headers : Headers),
   BS = (e, t, r) => {
      const n = US(r),
         i = zS();
      return (s, o) =>
         FS(void 0, void 0, void 0, function* () {
            var a;
            const l = (a = yield t()) !== null && a !== void 0 ? a : e;
            let u = new i(o == null ? void 0 : o.headers);
            return (
               u.has("apikey") || u.set("apikey", e),
               u.has("Authorization") || u.set("Authorization", `Bearer ${l}`),
               n(s, Object.assign(Object.assign({}, o), { headers: u }))
            );
         });
   };
function qS(e) {
   return e.replace(/\/$/, "");
}
function VS(e, t) {
   const { db: r, auth: n, realtime: i, global: s } = e,
      { db: o, auth: a, realtime: l, global: u } = t;
   return {
      db: Object.assign(Object.assign({}, o), r),
      auth: Object.assign(Object.assign({}, a), n),
      realtime: Object.assign(Object.assign({}, l), i),
      global: Object.assign(Object.assign({}, u), s),
   };
}
function WS(e) {
   return Math.round(Date.now() / 1e3) + e;
}
function HS() {
   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
      const t = (Math.random() * 16) | 0;
      return (e == "x" ? t : (t & 3) | 8).toString(16);
   });
}
const ar = () => typeof document < "u",
   on = { tested: !1, writable: !1 },
   vs = () => {
      if (!ar()) return !1;
      try {
         if (typeof globalThis.localStorage != "object") return !1;
      } catch {
         return !1;
      }
      if (on.tested) return on.writable;
      const e = `lswt-${Math.random()}${Math.random()}`;
      try {
         globalThis.localStorage.setItem(e, e),
            globalThis.localStorage.removeItem(e),
            (on.tested = !0),
            (on.writable = !0);
      } catch {
         (on.tested = !0), (on.writable = !1);
      }
      return on.writable;
   };
function eu(e) {
   const t = {},
      r = new URL(e);
   if (r.hash && r.hash[0] === "#")
      try {
         new URLSearchParams(r.hash.substring(1)).forEach((i, s) => {
            t[s] = i;
         });
      } catch {}
   return (
      r.searchParams.forEach((n, i) => {
         t[i] = n;
      }),
      t
   );
}
const r0 = (e) => {
      let t;
      return (
         e
            ? (t = e)
            : typeof fetch > "u"
            ? (t = (...r) =>
                 ul(() => Promise.resolve().then(() => cl), void 0).then(
                    ({ default: n }) => n(...r)
                 ))
            : (t = fetch),
         (...r) => t(...r)
      );
   },
   QS = (e) =>
      typeof e == "object" &&
      e !== null &&
      "status" in e &&
      "ok" in e &&
      "json" in e &&
      typeof e.json == "function",
   An = async (e, t, r) => {
      await e.setItem(t, JSON.stringify(r));
   },
   ko = async (e, t) => {
      const r = await e.getItem(t);
      if (!r) return null;
      try {
         return JSON.parse(r);
      } catch {
         return r;
      }
   },
   tu = async (e, t) => {
      await e.removeItem(t);
   };
function GS(e) {
   const t =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
   let r = "",
      n,
      i,
      s,
      o,
      a,
      l,
      u,
      c = 0;
   for (e = e.replace("-", "+").replace("_", "/"); c < e.length; )
      (o = t.indexOf(e.charAt(c++))),
         (a = t.indexOf(e.charAt(c++))),
         (l = t.indexOf(e.charAt(c++))),
         (u = t.indexOf(e.charAt(c++))),
         (n = (o << 2) | (a >> 4)),
         (i = ((a & 15) << 4) | (l >> 2)),
         (s = ((l & 3) << 6) | u),
         (r = r + String.fromCharCode(n)),
         l != 64 && i != 0 && (r = r + String.fromCharCode(i)),
         u != 64 && s != 0 && (r = r + String.fromCharCode(s));
   return r;
}
class fl {
   constructor() {
      this.promise = new fl.promiseConstructor((t, r) => {
         (this.resolve = t), (this.reject = r);
      });
   }
}
fl.promiseConstructor = Promise;
function op(e) {
   const t = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}=?$|[a-z0-9_-]{2}(==)?$)$/i,
      r = e.split(".");
   if (r.length !== 3) throw new Error("JWT is not valid: not a JWT structure");
   if (!t.test(r[1]))
      throw new Error("JWT is not valid: payload is not in base64url format");
   const n = r[1];
   return JSON.parse(GS(n));
}
async function KS(e) {
   return await new Promise((t) => {
      setTimeout(() => t(null), e);
   });
}
function YS(e, t) {
   return new Promise((n, i) => {
      (async () => {
         for (let s = 0; s < 1 / 0; s++)
            try {
               const o = await e(s);
               if (!t(s, null, o)) {
                  n(o);
                  return;
               }
            } catch (o) {
               if (!t(s, o)) {
                  i(o);
                  return;
               }
            }
      })();
   });
}
function JS(e) {
   return ("0" + e.toString(16)).substr(-2);
}
function qi() {
   const t = new Uint32Array(56);
   if (typeof crypto > "u") {
      const r =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",
         n = r.length;
      let i = "";
      for (let s = 0; s < 56; s++) i += r.charAt(Math.floor(Math.random() * n));
      return i;
   }
   return crypto.getRandomValues(t), Array.from(t, JS).join("");
}
async function XS(e) {
   const r = new TextEncoder().encode(e),
      n = await crypto.subtle.digest("SHA-256", r),
      i = new Uint8Array(n);
   return Array.from(i)
      .map((s) => String.fromCharCode(s))
      .join("");
}
function ZS(e) {
   return btoa(e).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function Vi(e) {
   if (typeof crypto > "u")
      return (
         console.warn(
            "WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."
         ),
         e
      );
   const t = await XS(e);
   return ZS(t);
}
class Kd extends Error {
   constructor(t, r) {
      super(t),
         (this.__isAuthError = !0),
         (this.name = "AuthError"),
         (this.status = r);
   }
}
function Y(e) {
   return typeof e == "object" && e !== null && "__isAuthError" in e;
}
class e_ extends Kd {
   constructor(t, r) {
      super(t, r), (this.name = "AuthApiError"), (this.status = r);
   }
   toJSON() {
      return { name: this.name, message: this.message, status: this.status };
   }
}
function t_(e) {
   return Y(e) && e.name === "AuthApiError";
}
class n0 extends Kd {
   constructor(t, r) {
      super(t), (this.name = "AuthUnknownError"), (this.originalError = r);
   }
}
class Ii extends Kd {
   constructor(t, r, n) {
      super(t), (this.name = r), (this.status = n);
   }
   toJSON() {
      return { name: this.name, message: this.message, status: this.status };
   }
}
class Mn extends Ii {
   constructor() {
      super("Auth session missing!", "AuthSessionMissingError", 400);
   }
}
class ru extends Ii {
   constructor() {
      super(
         "Auth session or user missing",
         "AuthInvalidTokenResponseError",
         500
      );
   }
}
class So extends Ii {
   constructor(t) {
      super(t, "AuthInvalidCredentialsError", 400);
   }
}
class _o extends Ii {
   constructor(t, r = null) {
      super(t, "AuthImplicitGrantRedirectError", 500),
         (this.details = null),
         (this.details = r);
   }
   toJSON() {
      return {
         name: this.name,
         message: this.message,
         status: this.status,
         details: this.details,
      };
   }
}
class ap extends Ii {
   constructor(t, r = null) {
      super(t, "AuthPKCEGrantCodeExchangeError", 500),
         (this.details = null),
         (this.details = r);
   }
   toJSON() {
      return {
         name: this.name,
         message: this.message,
         status: this.status,
         details: this.details,
      };
   }
}
class Ec extends Ii {
   constructor(t, r) {
      super(t, "AuthRetryableFetchError", r);
   }
}
function lp(e) {
   return Y(e) && e.name === "AuthRetryableFetchError";
}
var r_ =
   (globalThis && globalThis.__rest) ||
   function (e, t) {
      var r = {};
      for (var n in e)
         Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
         for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
               Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
               (r[n[i]] = e[n[i]]);
      return r;
   };
const is = (e) =>
      e.msg || e.message || e.error_description || e.error || JSON.stringify(e),
   n_ = [502, 503, 504];
async function up(e) {
   if (!QS(e)) throw new Ec(is(e), 0);
   if (n_.includes(e.status)) throw new Ec(is(e), e.status);
   let t;
   try {
      t = await e.json();
   } catch (r) {
      throw new n0(is(r), r);
   }
   throw new e_(is(t), e.status || 500);
}
const i_ = (e, t, r, n) => {
   const i = { method: e, headers: (t == null ? void 0 : t.headers) || {} };
   return e === "GET"
      ? i
      : ((i.headers = Object.assign(
           { "Content-Type": "application/json;charset=UTF-8" },
           t == null ? void 0 : t.headers
        )),
        (i.body = JSON.stringify(n)),
        Object.assign(Object.assign({}, i), r));
};
async function Z(e, t, r, n) {
   var i;
   const s = Object.assign({}, n == null ? void 0 : n.headers);
   n != null && n.jwt && (s.Authorization = `Bearer ${n.jwt}`);
   const o =
      (i = n == null ? void 0 : n.query) !== null && i !== void 0 ? i : {};
   n != null && n.redirectTo && (o.redirect_to = n.redirectTo);
   const a = Object.keys(o).length
         ? "?" + new URLSearchParams(o).toString()
         : "",
      l = await s_(
         e,
         t,
         r + a,
         { headers: s, noResolveJson: n == null ? void 0 : n.noResolveJson },
         {},
         n == null ? void 0 : n.body
      );
   return n != null && n.xform
      ? n == null
         ? void 0
         : n.xform(l)
      : { data: Object.assign({}, l), error: null };
}
async function s_(e, t, r, n, i, s) {
   const o = i_(t, n, i, s);
   let a;
   try {
      a = await e(r, o);
   } catch (l) {
      throw (console.error(l), new Ec(is(l), 0));
   }
   if ((a.ok || (await up(a)), n != null && n.noResolveJson)) return a;
   try {
      return await a.json();
   } catch (l) {
      await up(l);
   }
}
function _r(e) {
   var t;
   let r = null;
   u_(e) &&
      ((r = Object.assign({}, e)),
      e.expires_at || (r.expires_at = WS(e.expires_in)));
   const n = (t = e.user) !== null && t !== void 0 ? t : e;
   return { data: { session: r, user: n }, error: null };
}
function $r(e) {
   var t;
   return {
      data: { user: (t = e.user) !== null && t !== void 0 ? t : e },
      error: null,
   };
}
function o_(e) {
   return { data: e, error: null };
}
function a_(e) {
   const {
         action_link: t,
         email_otp: r,
         hashed_token: n,
         redirect_to: i,
         verification_type: s,
      } = e,
      o = r_(e, [
         "action_link",
         "email_otp",
         "hashed_token",
         "redirect_to",
         "verification_type",
      ]),
      a = {
         action_link: t,
         email_otp: r,
         hashed_token: n,
         redirect_to: i,
         verification_type: s,
      },
      l = Object.assign({}, o);
   return { data: { properties: a, user: l }, error: null };
}
function l_(e) {
   return e;
}
function u_(e) {
   return e.access_token && e.refresh_token && e.expires_in;
}
var c_ =
   (globalThis && globalThis.__rest) ||
   function (e, t) {
      var r = {};
      for (var n in e)
         Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
      if (e != null && typeof Object.getOwnPropertySymbols == "function")
         for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
               Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
               (r[n[i]] = e[n[i]]);
      return r;
   };
class d_ {
   constructor({ url: t = "", headers: r = {}, fetch: n }) {
      (this.url = t),
         (this.headers = r),
         (this.fetch = r0(n)),
         (this.mfa = {
            listFactors: this._listFactors.bind(this),
            deleteFactor: this._deleteFactor.bind(this),
         });
   }
   async signOut(t, r = "global") {
      try {
         return (
            await Z(this.fetch, "POST", `${this.url}/logout?scope=${r}`, {
               headers: this.headers,
               jwt: t,
               noResolveJson: !0,
            }),
            { data: null, error: null }
         );
      } catch (n) {
         if (Y(n)) return { data: null, error: n };
         throw n;
      }
   }
   async inviteUserByEmail(t, r = {}) {
      try {
         return await Z(this.fetch, "POST", `${this.url}/invite`, {
            body: { email: t, data: r.data },
            headers: this.headers,
            redirectTo: r.redirectTo,
            xform: $r,
         });
      } catch (n) {
         if (Y(n)) return { data: { user: null }, error: n };
         throw n;
      }
   }
   async generateLink(t) {
      try {
         const { options: r } = t,
            n = c_(t, ["options"]),
            i = Object.assign(Object.assign({}, n), r);
         return (
            "newEmail" in n &&
               ((i.new_email = n == null ? void 0 : n.newEmail),
               delete i.newEmail),
            await Z(this.fetch, "POST", `${this.url}/admin/generate_link`, {
               body: i,
               headers: this.headers,
               xform: a_,
               redirectTo: r == null ? void 0 : r.redirectTo,
            })
         );
      } catch (r) {
         if (Y(r)) return { data: { properties: null, user: null }, error: r };
         throw r;
      }
   }
   async createUser(t) {
      try {
         return await Z(this.fetch, "POST", `${this.url}/admin/users`, {
            body: t,
            headers: this.headers,
            xform: $r,
         });
      } catch (r) {
         if (Y(r)) return { data: { user: null }, error: r };
         throw r;
      }
   }
   async listUsers(t) {
      var r, n, i, s, o, a, l;
      try {
         const u = { nextPage: null, lastPage: 0, total: 0 },
            c = await Z(this.fetch, "GET", `${this.url}/admin/users`, {
               headers: this.headers,
               noResolveJson: !0,
               query: {
                  page:
                     (n =
                        (r = t == null ? void 0 : t.page) === null ||
                        r === void 0
                           ? void 0
                           : r.toString()) !== null && n !== void 0
                        ? n
                        : "",
                  per_page:
                     (s =
                        (i = t == null ? void 0 : t.perPage) === null ||
                        i === void 0
                           ? void 0
                           : i.toString()) !== null && s !== void 0
                        ? s
                        : "",
               },
               xform: l_,
            });
         if (c.error) throw c.error;
         const d = await c.json(),
            h =
               (o = c.headers.get("x-total-count")) !== null && o !== void 0
                  ? o
                  : 0,
            m =
               (l =
                  (a = c.headers.get("link")) === null || a === void 0
                     ? void 0
                     : a.split(",")) !== null && l !== void 0
                  ? l
                  : [];
         return (
            m.length > 0 &&
               (m.forEach((y) => {
                  const w = parseInt(
                        y.split(";")[0].split("=")[1].substring(0, 1)
                     ),
                     k = JSON.parse(y.split(";")[1].split("=")[1]);
                  u[`${k}Page`] = w;
               }),
               (u.total = parseInt(h))),
            { data: Object.assign(Object.assign({}, d), u), error: null }
         );
      } catch (u) {
         if (Y(u)) return { data: { users: [] }, error: u };
         throw u;
      }
   }
   async getUserById(t) {
      try {
         return await Z(this.fetch, "GET", `${this.url}/admin/users/${t}`, {
            headers: this.headers,
            xform: $r,
         });
      } catch (r) {
         if (Y(r)) return { data: { user: null }, error: r };
         throw r;
      }
   }
   async updateUserById(t, r) {
      try {
         return await Z(this.fetch, "PUT", `${this.url}/admin/users/${t}`, {
            body: r,
            headers: this.headers,
            xform: $r,
         });
      } catch (n) {
         if (Y(n)) return { data: { user: null }, error: n };
         throw n;
      }
   }
   async deleteUser(t, r = !1) {
      try {
         return await Z(this.fetch, "DELETE", `${this.url}/admin/users/${t}`, {
            headers: this.headers,
            body: { should_soft_delete: r },
            xform: $r,
         });
      } catch (n) {
         if (Y(n)) return { data: { user: null }, error: n };
         throw n;
      }
   }
   async _listFactors(t) {
      try {
         const { data: r, error: n } = await Z(
            this.fetch,
            "GET",
            `${this.url}/admin/users/${t.userId}/factors`,
            {
               headers: this.headers,
               xform: (i) => ({ data: { factors: i }, error: null }),
            }
         );
         return { data: r, error: n };
      } catch (r) {
         if (Y(r)) return { data: null, error: r };
         throw r;
      }
   }
   async _deleteFactor(t) {
      try {
         return {
            data: await Z(
               this.fetch,
               "DELETE",
               `${this.url}/admin/users/${t.userId}/factors/${t.id}`,
               { headers: this.headers }
            ),
            error: null,
         };
      } catch (r) {
         if (Y(r)) return { data: null, error: r };
         throw r;
      }
   }
}
const i0 = "2.54.0",
   f_ = "http://localhost:9999",
   h_ = "supabase.auth.token",
   p_ = { "X-Client-Info": `gotrue-js/${i0}` },
   cp = 10,
   m_ = {
      getItem: (e) => (vs() ? globalThis.localStorage.getItem(e) : null),
      setItem: (e, t) => {
         vs() && globalThis.localStorage.setItem(e, t);
      },
      removeItem: (e) => {
         vs() && globalThis.localStorage.removeItem(e);
      },
   };
function dp(e = {}) {
   return {
      getItem: (t) => e[t] || null,
      setItem: (t, r) => {
         e[t] = r;
      },
      removeItem: (t) => {
         delete e[t];
      },
   };
}
function g_() {
   if (typeof globalThis != "object")
      try {
         Object.defineProperty(Object.prototype, "__magic__", {
            get: function () {
               return this;
            },
            configurable: !0,
         }),
            (__magic__.globalThis = __magic__),
            delete Object.prototype.__magic__;
      } catch {
         typeof self < "u" && (self.globalThis = self);
      }
}
globalThis &&
   vs() &&
   globalThis.localStorage &&
   globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");
class v_ extends Error {
   constructor(t) {
      super(t), (this.isAcquireTimeout = !0);
   }
}
g_();
const y_ = {
      url: f_,
      storageKey: h_,
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      headers: p_,
      flowType: "implicit",
      debug: !1,
   },
   Wi = 30 * 1e3,
   fp = 3;
async function w_(e, t, r) {
   return await r();
}
class Us {
   constructor(t) {
      var r;
      (this.memoryStorage = null),
         (this.stateChangeEmitters = new Map()),
         (this.autoRefreshTicker = null),
         (this.visibilityChangedCallback = null),
         (this.refreshingDeferred = null),
         (this.initializePromise = null),
         (this.detectSessionInUrl = !0),
         (this.lockAcquired = !1),
         (this.pendingInLock = []),
         (this.broadcastChannel = null),
         (this.logger = console.log),
         (this.instanceID = Us.nextInstanceID),
         (Us.nextInstanceID += 1),
         this.instanceID > 0 &&
            ar() &&
            console.warn(
               "Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key."
            );
      const n = Object.assign(Object.assign({}, y_), t);
      if (
         ((this.logDebugMessages = !!n.debug),
         typeof n.debug == "function" && (this.logger = n.debug),
         (this.persistSession = n.persistSession),
         (this.storageKey = n.storageKey),
         (this.autoRefreshToken = n.autoRefreshToken),
         (this.admin = new d_({
            url: n.url,
            headers: n.headers,
            fetch: n.fetch,
         })),
         (this.url = n.url),
         (this.headers = n.headers),
         (this.fetch = r0(n.fetch)),
         (this.lock = n.lock || w_),
         (this.detectSessionInUrl = n.detectSessionInUrl),
         (this.flowType = n.flowType),
         (this.mfa = {
            verify: this._verify.bind(this),
            enroll: this._enroll.bind(this),
            unenroll: this._unenroll.bind(this),
            challenge: this._challenge.bind(this),
            listFactors: this._listFactors.bind(this),
            challengeAndVerify: this._challengeAndVerify.bind(this),
            getAuthenticatorAssuranceLevel:
               this._getAuthenticatorAssuranceLevel.bind(this),
         }),
         this.persistSession
            ? n.storage
               ? (this.storage = n.storage)
               : vs()
               ? (this.storage = m_)
               : ((this.memoryStorage = {}),
                 (this.storage = dp(this.memoryStorage)))
            : ((this.memoryStorage = {}),
              (this.storage = dp(this.memoryStorage))),
         ar() &&
            globalThis.BroadcastChannel &&
            this.persistSession &&
            this.storageKey)
      ) {
         try {
            this.broadcastChannel = new globalThis.BroadcastChannel(
               this.storageKey
            );
         } catch (i) {
            console.error(
               "Failed to create a new BroadcastChannel, multi-tab state changes will not be available",
               i
            );
         }
         (r = this.broadcastChannel) === null ||
            r === void 0 ||
            r.addEventListener("message", async (i) => {
               this._debug(
                  "received broadcast notification from other tab or client",
                  i
               ),
                  await this._notifyAllSubscribers(
                     i.data.event,
                     i.data.session,
                     !1
                  );
            });
      }
      this.initialize();
   }
   _debug(...t) {
      return (
         this.logDebugMessages &&
            this.logger(
               `GoTrueClient@${
                  this.instanceID
               } (${i0}) ${new Date().toISOString()}`,
               ...t
            ),
         this
      );
   }
   async initialize() {
      return this.initializePromise
         ? await this.initializePromise
         : ((this.initializePromise = (async () =>
              await this._acquireLock(
                 -1,
                 async () => await this._initialize()
              ))()),
           await this.initializePromise);
   }
   async _initialize() {
      try {
         const t = ar() ? await this._isPKCEFlow() : !1;
         if (
            (this._debug("#_initialize()", "begin", "is PKCE flow", t),
            t || (this.detectSessionInUrl && this._isImplicitGrantFlow()))
         ) {
            const { data: r, error: n } = await this._getSessionFromURL(t);
            if (n)
               return (
                  this._debug(
                     "#_initialize()",
                     "error detecting session from URL",
                     n
                  ),
                  await this._removeSession(),
                  { error: n }
               );
            const { session: i, redirectType: s } = r;
            return (
               this._debug(
                  "#_initialize()",
                  "detected session in URL",
                  i,
                  "redirect type",
                  s
               ),
               await this._saveSession(i),
               setTimeout(async () => {
                  s === "recovery"
                     ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", i)
                     : await this._notifyAllSubscribers("SIGNED_IN", i);
               }, 0),
               { error: null }
            );
         }
         return await this._recoverAndRefresh(), { error: null };
      } catch (t) {
         return Y(t)
            ? { error: t }
            : { error: new n0("Unexpected error during initialization", t) };
      } finally {
         await this._handleVisibilityChange(),
            this._debug("#_initialize()", "end");
      }
   }
   async signUp(t) {
      var r, n, i;
      try {
         await this._removeSession();
         let s;
         if ("email" in t) {
            const { email: c, password: d, options: h } = t;
            let m = null,
               y = null;
            if (this.flowType === "pkce") {
               const w = qi();
               await An(this.storage, `${this.storageKey}-code-verifier`, w),
                  (m = await Vi(w)),
                  (y = w === m ? "plain" : "s256");
            }
            s = await Z(this.fetch, "POST", `${this.url}/signup`, {
               headers: this.headers,
               redirectTo: h == null ? void 0 : h.emailRedirectTo,
               body: {
                  email: c,
                  password: d,
                  data:
                     (r = h == null ? void 0 : h.data) !== null && r !== void 0
                        ? r
                        : {},
                  gotrue_meta_security: {
                     captcha_token: h == null ? void 0 : h.captchaToken,
                  },
                  code_challenge: m,
                  code_challenge_method: y,
               },
               xform: _r,
            });
         } else if ("phone" in t) {
            const { phone: c, password: d, options: h } = t;
            s = await Z(this.fetch, "POST", `${this.url}/signup`, {
               headers: this.headers,
               body: {
                  phone: c,
                  password: d,
                  data:
                     (n = h == null ? void 0 : h.data) !== null && n !== void 0
                        ? n
                        : {},
                  channel:
                     (i = h == null ? void 0 : h.channel) !== null &&
                     i !== void 0
                        ? i
                        : "sms",
                  gotrue_meta_security: {
                     captcha_token: h == null ? void 0 : h.captchaToken,
                  },
               },
               xform: _r,
            });
         } else
            throw new So(
               "You must provide either an email or phone number and a password"
            );
         const { data: o, error: a } = s;
         if (a || !o) return { data: { user: null, session: null }, error: a };
         const l = o.session,
            u = o.user;
         return (
            o.session &&
               (await this._saveSession(o.session),
               await this._notifyAllSubscribers("SIGNED_IN", l)),
            { data: { user: u, session: l }, error: null }
         );
      } catch (s) {
         if (Y(s)) return { data: { user: null, session: null }, error: s };
         throw s;
      }
   }
   async signInWithPassword(t) {
      try {
         await this._removeSession();
         let r;
         if ("email" in t) {
            const { email: s, password: o, options: a } = t;
            r = await Z(
               this.fetch,
               "POST",
               `${this.url}/token?grant_type=password`,
               {
                  headers: this.headers,
                  body: {
                     email: s,
                     password: o,
                     gotrue_meta_security: {
                        captcha_token: a == null ? void 0 : a.captchaToken,
                     },
                  },
                  xform: _r,
               }
            );
         } else if ("phone" in t) {
            const { phone: s, password: o, options: a } = t;
            r = await Z(
               this.fetch,
               "POST",
               `${this.url}/token?grant_type=password`,
               {
                  headers: this.headers,
                  body: {
                     phone: s,
                     password: o,
                     gotrue_meta_security: {
                        captcha_token: a == null ? void 0 : a.captchaToken,
                     },
                  },
                  xform: _r,
               }
            );
         } else
            throw new So(
               "You must provide either an email or phone number and a password"
            );
         const { data: n, error: i } = r;
         return i
            ? { data: { user: null, session: null }, error: i }
            : !n || !n.session || !n.user
            ? { data: { user: null, session: null }, error: new ru() }
            : (n.session &&
                 (await this._saveSession(n.session),
                 await this._notifyAllSubscribers("SIGNED_IN", n.session)),
              { data: { user: n.user, session: n.session }, error: i });
      } catch (r) {
         if (Y(r)) return { data: { user: null, session: null }, error: r };
         throw r;
      }
   }
   async signInWithOAuth(t) {
      var r, n, i, s;
      return (
         await this._removeSession(),
         await this._handleProviderSignIn(t.provider, {
            redirectTo:
               (r = t.options) === null || r === void 0 ? void 0 : r.redirectTo,
            scopes:
               (n = t.options) === null || n === void 0 ? void 0 : n.scopes,
            queryParams:
               (i = t.options) === null || i === void 0
                  ? void 0
                  : i.queryParams,
            skipBrowserRedirect:
               (s = t.options) === null || s === void 0
                  ? void 0
                  : s.skipBrowserRedirect,
         })
      );
   }
   async exchangeCodeForSession(t) {
      return (
         await this.initializePromise,
         this._acquireLock(-1, async () => this._exchangeCodeForSession(t))
      );
   }
   async _exchangeCodeForSession(t) {
      const r = await ko(this.storage, `${this.storageKey}-code-verifier`),
         { data: n, error: i } = await Z(
            this.fetch,
            "POST",
            `${this.url}/token?grant_type=pkce`,
            {
               headers: this.headers,
               body: { auth_code: t, code_verifier: r },
               xform: _r,
            }
         );
      return (
         await tu(this.storage, `${this.storageKey}-code-verifier`),
         i
            ? { data: { user: null, session: null }, error: i }
            : !n || !n.session || !n.user
            ? { data: { user: null, session: null }, error: new ru() }
            : (n.session &&
                 (await this._saveSession(n.session),
                 await this._notifyAllSubscribers("SIGNED_IN", n.session)),
              { data: n, error: i })
      );
   }
   async signInWithIdToken(t) {
      await this._removeSession();
      try {
         const {
               options: r,
               provider: n,
               token: i,
               access_token: s,
               nonce: o,
            } = t,
            a = await Z(
               this.fetch,
               "POST",
               `${this.url}/token?grant_type=id_token`,
               {
                  headers: this.headers,
                  body: {
                     provider: n,
                     id_token: i,
                     access_token: s,
                     nonce: o,
                     gotrue_meta_security: {
                        captcha_token: r == null ? void 0 : r.captchaToken,
                     },
                  },
                  xform: _r,
               }
            ),
            { data: l, error: u } = a;
         return u
            ? { data: { user: null, session: null }, error: u }
            : !l || !l.session || !l.user
            ? { data: { user: null, session: null }, error: new ru() }
            : (l.session &&
                 (await this._saveSession(l.session),
                 await this._notifyAllSubscribers("SIGNED_IN", l.session)),
              { data: l, error: u });
      } catch (r) {
         if (Y(r)) return { data: { user: null, session: null }, error: r };
         throw r;
      }
   }
   async signInWithOtp(t) {
      var r, n, i, s, o;
      try {
         if ((await this._removeSession(), "email" in t)) {
            const { email: a, options: l } = t;
            let u = null,
               c = null;
            if (this.flowType === "pkce") {
               const h = qi();
               await An(this.storage, `${this.storageKey}-code-verifier`, h),
                  (u = await Vi(h)),
                  (c = h === u ? "plain" : "s256");
            }
            const { error: d } = await Z(
               this.fetch,
               "POST",
               `${this.url}/otp`,
               {
                  headers: this.headers,
                  body: {
                     email: a,
                     data:
                        (r = l == null ? void 0 : l.data) !== null &&
                        r !== void 0
                           ? r
                           : {},
                     create_user:
                        (n = l == null ? void 0 : l.shouldCreateUser) !==
                           null && n !== void 0
                           ? n
                           : !0,
                     gotrue_meta_security: {
                        captcha_token: l == null ? void 0 : l.captchaToken,
                     },
                     code_challenge: u,
                     code_challenge_method: c,
                  },
                  redirectTo: l == null ? void 0 : l.emailRedirectTo,
               }
            );
            return { data: { user: null, session: null }, error: d };
         }
         if ("phone" in t) {
            const { phone: a, options: l } = t,
               { data: u, error: c } = await Z(
                  this.fetch,
                  "POST",
                  `${this.url}/otp`,
                  {
                     headers: this.headers,
                     body: {
                        phone: a,
                        data:
                           (i = l == null ? void 0 : l.data) !== null &&
                           i !== void 0
                              ? i
                              : {},
                        create_user:
                           (s = l == null ? void 0 : l.shouldCreateUser) !==
                              null && s !== void 0
                              ? s
                              : !0,
                        gotrue_meta_security: {
                           captcha_token: l == null ? void 0 : l.captchaToken,
                        },
                        channel:
                           (o = l == null ? void 0 : l.channel) !== null &&
                           o !== void 0
                              ? o
                              : "sms",
                     },
                  }
               );
            return {
               data: {
                  user: null,
                  session: null,
                  messageId: u == null ? void 0 : u.message_id,
               },
               error: c,
            };
         }
         throw new So("You must provide either an email or phone number.");
      } catch (a) {
         if (Y(a)) return { data: { user: null, session: null }, error: a };
         throw a;
      }
   }
   async verifyOtp(t) {
      var r, n;
      try {
         t.type !== "email_change" &&
            t.type !== "phone_change" &&
            (await this._removeSession());
         let i, s;
         "options" in t &&
            ((i =
               (r = t.options) === null || r === void 0
                  ? void 0
                  : r.redirectTo),
            (s =
               (n = t.options) === null || n === void 0
                  ? void 0
                  : n.captchaToken));
         const { data: o, error: a } = await Z(
            this.fetch,
            "POST",
            `${this.url}/verify`,
            {
               headers: this.headers,
               body: Object.assign(Object.assign({}, t), {
                  gotrue_meta_security: { captcha_token: s },
               }),
               redirectTo: i,
               xform: _r,
            }
         );
         if (a) throw a;
         if (!o) throw new Error("An error occurred on token verification.");
         const l = o.session,
            u = o.user;
         return (
            l != null &&
               l.access_token &&
               (await this._saveSession(l),
               await this._notifyAllSubscribers("SIGNED_IN", l)),
            { data: { user: u, session: l }, error: null }
         );
      } catch (i) {
         if (Y(i)) return { data: { user: null, session: null }, error: i };
         throw i;
      }
   }
   async signInWithSSO(t) {
      var r, n, i;
      try {
         return (
            await this._removeSession(),
            await Z(this.fetch, "POST", `${this.url}/sso`, {
               body: Object.assign(
                  Object.assign(
                     Object.assign(
                        Object.assign(
                           Object.assign(
                              {},
                              "providerId" in t
                                 ? { provider_id: t.providerId }
                                 : null
                           ),
                           "domain" in t ? { domain: t.domain } : null
                        ),
                        {
                           redirect_to:
                              (n =
                                 (r = t.options) === null || r === void 0
                                    ? void 0
                                    : r.redirectTo) !== null && n !== void 0
                                 ? n
                                 : void 0,
                        }
                     ),
                     !(
                        (i = t == null ? void 0 : t.options) === null ||
                        i === void 0
                     ) && i.captchaToken
                        ? {
                             gotrue_meta_security: {
                                captcha_token: t.options.captchaToken,
                             },
                          }
                        : null
                  ),
                  { skip_http_redirect: !0 }
               ),
               headers: this.headers,
               xform: o_,
            })
         );
      } catch (s) {
         if (Y(s)) return { data: null, error: s };
         throw s;
      }
   }
   async reauthenticate() {
      return (
         await this.initializePromise,
         await this._acquireLock(-1, async () => await this._reauthenticate())
      );
   }
   async _reauthenticate() {
      try {
         return await this._useSession(async (t) => {
            const {
               data: { session: r },
               error: n,
            } = t;
            if (n) throw n;
            if (!r) throw new Mn();
            const { error: i } = await Z(
               this.fetch,
               "GET",
               `${this.url}/reauthenticate`,
               { headers: this.headers, jwt: r.access_token }
            );
            return { data: { user: null, session: null }, error: i };
         });
      } catch (t) {
         if (Y(t)) return { data: { user: null, session: null }, error: t };
         throw t;
      }
   }
   async resend(t) {
      try {
         t.type != "email_change" &&
            t.type != "phone_change" &&
            (await this._removeSession());
         const r = `${this.url}/resend`;
         if ("email" in t) {
            const { email: n, type: i, options: s } = t,
               { error: o } = await Z(this.fetch, "POST", r, {
                  headers: this.headers,
                  body: {
                     email: n,
                     type: i,
                     gotrue_meta_security: {
                        captcha_token: s == null ? void 0 : s.captchaToken,
                     },
                  },
                  redirectTo: s == null ? void 0 : s.emailRedirectTo,
               });
            return { data: { user: null, session: null }, error: o };
         } else if ("phone" in t) {
            const { phone: n, type: i, options: s } = t,
               { data: o, error: a } = await Z(this.fetch, "POST", r, {
                  headers: this.headers,
                  body: {
                     phone: n,
                     type: i,
                     gotrue_meta_security: {
                        captcha_token: s == null ? void 0 : s.captchaToken,
                     },
                  },
               });
            return {
               data: {
                  user: null,
                  session: null,
                  messageId: o == null ? void 0 : o.message_id,
               },
               error: a,
            };
         }
         throw new So(
            "You must provide either an email or phone number and a type"
         );
      } catch (r) {
         if (Y(r)) return { data: { user: null, session: null }, error: r };
         throw r;
      }
   }
   async getSession() {
      return (
         await this.initializePromise,
         this._acquireLock(-1, async () => this._useSession(async (t) => t))
      );
   }
   async _acquireLock(t, r) {
      this._debug("#_acquireLock", "begin", t);
      try {
         if (this.lockAcquired) {
            const n = this.pendingInLock.length
                  ? this.pendingInLock[this.pendingInLock.length - 1]
                  : Promise.resolve(),
               i = (async () => (await n, await r()))();
            return (
               this.pendingInLock.push(
                  (async () => {
                     try {
                        await i;
                     } catch {}
                  })()
               ),
               i
            );
         }
         return await this.lock(`lock:${this.storageKey}`, t, async () => {
            this._debug(
               "#_acquireLock",
               "lock acquired for storage key",
               this.storageKey
            );
            try {
               this.lockAcquired = !0;
               const n = r();
               for (
                  this.pendingInLock.push(
                     (async () => {
                        try {
                           await n;
                        } catch {}
                     })()
                  ),
                     await n;
                  this.pendingInLock.length;

               ) {
                  const i = [...this.pendingInLock];
                  await Promise.all(i), this.pendingInLock.splice(0, i.length);
               }
               return await n;
            } finally {
               this._debug(
                  "#_acquireLock",
                  "lock released for storage key",
                  this.storageKey
               ),
                  (this.lockAcquired = !1);
            }
         });
      } finally {
         this._debug("#_acquireLock", "end");
      }
   }
   async _useSession(t) {
      this._debug("#_useSession", "begin");
      try {
         const r = await this.__loadSession();
         return await t(r);
      } finally {
         this._debug("#_useSession", "end");
      }
   }
   async __loadSession() {
      this._debug("#__loadSession()", "begin"),
         this.lockAcquired ||
            this._debug(
               "#__loadSession()",
               "used outside of an acquired lock!",
               new Error().stack
            );
      try {
         let t = null;
         const r = await ko(this.storage, this.storageKey);
         if (
            (this._debug("#getSession()", "session from storage", r),
            r !== null &&
               (this._isValidSession(r)
                  ? (t = r)
                  : (this._debug(
                       "#getSession()",
                       "session from storage is not valid"
                    ),
                    await this._removeSession())),
            !t)
         )
            return { data: { session: null }, error: null };
         const n = t.expires_at ? t.expires_at <= Date.now() / 1e3 : !1;
         if (
            (this._debug(
               "#__loadSession()",
               `session has${n ? "" : " not"} expired`,
               "expires_at",
               t.expires_at
            ),
            !n)
         )
            return { data: { session: t }, error: null };
         const { session: i, error: s } = await this._callRefreshToken(
            t.refresh_token
         );
         return s
            ? { data: { session: null }, error: s }
            : { data: { session: i }, error: null };
      } finally {
         this._debug("#__loadSession()", "end");
      }
   }
   async getUser(t) {
      return t
         ? await this._getUser(t)
         : (await this.initializePromise,
           this._acquireLock(-1, async () => await this._getUser()));
   }
   async _getUser(t) {
      try {
         return t
            ? await Z(this.fetch, "GET", `${this.url}/user`, {
                 headers: this.headers,
                 jwt: t,
                 xform: $r,
              })
            : await this._useSession(async (r) => {
                 var n, i;
                 const { data: s, error: o } = r;
                 if (o) throw o;
                 return await Z(this.fetch, "GET", `${this.url}/user`, {
                    headers: this.headers,
                    jwt:
                       (i =
                          (n = s.session) === null || n === void 0
                             ? void 0
                             : n.access_token) !== null && i !== void 0
                          ? i
                          : void 0,
                    xform: $r,
                 });
              });
      } catch (r) {
         if (Y(r)) return { data: { user: null }, error: r };
         throw r;
      }
   }
   async updateUser(t, r = {}) {
      return (
         await this.initializePromise,
         await this._acquireLock(-1, async () => await this._updateUser(t, r))
      );
   }
   async _updateUser(t, r = {}) {
      try {
         return await this._useSession(async (n) => {
            const { data: i, error: s } = n;
            if (s) throw s;
            if (!i.session) throw new Mn();
            const o = i.session;
            let a = null,
               l = null;
            if (this.flowType === "pkce" && t.email != null) {
               const d = qi();
               await An(this.storage, `${this.storageKey}-code-verifier`, d),
                  (a = await Vi(d)),
                  (l = d === a ? "plain" : "s256");
            }
            const { data: u, error: c } = await Z(
               this.fetch,
               "PUT",
               `${this.url}/user`,
               {
                  headers: this.headers,
                  redirectTo: r == null ? void 0 : r.emailRedirectTo,
                  body: Object.assign(Object.assign({}, t), {
                     code_challenge: a,
                     code_challenge_method: l,
                  }),
                  jwt: o.access_token,
                  xform: $r,
               }
            );
            if (c) throw c;
            return (
               (o.user = u.user),
               await this._saveSession(o),
               await this._notifyAllSubscribers("USER_UPDATED", o),
               { data: { user: o.user }, error: null }
            );
         });
      } catch (n) {
         if (Y(n)) return { data: { user: null }, error: n };
         throw n;
      }
   }
   _decodeJWT(t) {
      return op(t);
   }
   async setSession(t) {
      return (
         await this.initializePromise,
         await this._acquireLock(-1, async () => await this._setSession(t))
      );
   }
   async _setSession(t) {
      try {
         if (!t.access_token || !t.refresh_token) throw new Mn();
         const r = Date.now() / 1e3;
         let n = r,
            i = !0,
            s = null;
         const o = op(t.access_token);
         if ((o.exp && ((n = o.exp), (i = n <= r)), i)) {
            const { session: a, error: l } = await this._callRefreshToken(
               t.refresh_token
            );
            if (l) return { data: { user: null, session: null }, error: l };
            if (!a) return { data: { user: null, session: null }, error: null };
            s = a;
         } else {
            const { data: a, error: l } = await this._getUser(t.access_token);
            if (l) throw l;
            (s = {
               access_token: t.access_token,
               refresh_token: t.refresh_token,
               user: a.user,
               token_type: "bearer",
               expires_in: n - r,
               expires_at: n,
            }),
               await this._saveSession(s),
               await this._notifyAllSubscribers("SIGNED_IN", s);
         }
         return { data: { user: s.user, session: s }, error: null };
      } catch (r) {
         if (Y(r)) return { data: { session: null, user: null }, error: r };
         throw r;
      }
   }
   async refreshSession(t) {
      return (
         await this.initializePromise,
         await this._acquireLock(-1, async () => await this._refreshSession(t))
      );
   }
   async _refreshSession(t) {
      try {
         return await this._useSession(async (r) => {
            var n;
            if (!t) {
               const { data: o, error: a } = r;
               if (a) throw a;
               t = (n = o.session) !== null && n !== void 0 ? n : void 0;
            }
            if (!(t != null && t.refresh_token)) throw new Mn();
            const { session: i, error: s } = await this._callRefreshToken(
               t.refresh_token
            );
            return s
               ? { data: { user: null, session: null }, error: s }
               : i
               ? { data: { user: i.user, session: i }, error: null }
               : { data: { user: null, session: null }, error: null };
         });
      } catch (r) {
         if (Y(r)) return { data: { user: null, session: null }, error: r };
         throw r;
      }
   }
   async _getSessionFromURL(t) {
      try {
         if (!ar()) throw new _o("No browser detected.");
         if (this.flowType === "implicit" && !this._isImplicitGrantFlow())
            throw new _o("Not a valid implicit grant flow url.");
         if (this.flowType == "pkce" && !t)
            throw new ap("Not a valid PKCE flow url.");
         const r = eu(window.location.href);
         if (t) {
            if (!r.code) throw new ap("No code detected.");
            const { data: p, error: v } = await this._exchangeCodeForSession(
               r.code
            );
            if (v) throw v;
            const b = new URL(window.location.href);
            return (
               b.searchParams.delete("code"),
               window.history.replaceState(
                  window.history.state,
                  "",
                  b.toString()
               ),
               { data: { session: p.session, redirectType: null }, error: null }
            );
         }
         if (r.error || r.error_description || r.error_code)
            throw new _o(
               r.error_description ||
                  "Error in URL with unspecified error_description",
               {
                  error: r.error || "unspecified_error",
                  code: r.error_code || "unspecified_code",
               }
            );
         const {
            provider_token: n,
            provider_refresh_token: i,
            access_token: s,
            refresh_token: o,
            expires_in: a,
            expires_at: l,
            token_type: u,
         } = r;
         if (!s || !a || !o || !u) throw new _o("No session defined in URL");
         const c = Math.round(Date.now() / 1e3),
            d = parseInt(a);
         let h = c + d;
         l && (h = parseInt(l));
         const m = h - c;
         m * 1e3 <= Wi &&
            console.warn(
               `@supabase/gotrue-js: Session as retrieved from URL expires in ${m}s, should have been closer to ${d}s`
            );
         const y = h - d;
         c - y >= 120
            ? console.warn(
                 "@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",
                 y,
                 h,
                 c
              )
            : c - y < 0 &&
              console.warn(
                 "@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clok for skew",
                 y,
                 h,
                 c
              );
         const { data: w, error: k } = await this._getUser(s);
         if (k) throw k;
         const g = {
            provider_token: n,
            provider_refresh_token: i,
            access_token: s,
            expires_in: d,
            expires_at: h,
            refresh_token: o,
            token_type: u,
            user: w.user,
         };
         return (
            (window.location.hash = ""),
            this._debug(
               "#_getSessionFromURL()",
               "clearing window.location.hash"
            ),
            { data: { session: g, redirectType: r.type }, error: null }
         );
      } catch (r) {
         if (Y(r))
            return { data: { session: null, redirectType: null }, error: r };
         throw r;
      }
   }
   _isImplicitGrantFlow() {
      const t = eu(window.location.href);
      return !!(ar() && (t.access_token || t.error_description));
   }
   async _isPKCEFlow() {
      const t = eu(window.location.href),
         r = await ko(this.storage, `${this.storageKey}-code-verifier`);
      return !!(t.code && r);
   }
   async signOut(t = { scope: "global" }) {
      return (
         await this.initializePromise,
         await this._acquireLock(-1, async () => await this._signOut(t))
      );
   }
   async _signOut({ scope: t } = { scope: "global" }) {
      return await this._useSession(async (r) => {
         var n;
         const { data: i, error: s } = r;
         if (s) return { error: s };
         const o =
            (n = i.session) === null || n === void 0 ? void 0 : n.access_token;
         if (o) {
            const { error: a } = await this.admin.signOut(o, t);
            if (a && !(t_(a) && (a.status === 404 || a.status === 401)))
               return { error: a };
         }
         return (
            t !== "others" &&
               (await this._removeSession(),
               await tu(this.storage, `${this.storageKey}-code-verifier`),
               await this._notifyAllSubscribers("SIGNED_OUT", null)),
            { error: null }
         );
      });
   }
   onAuthStateChange(t) {
      const r = HS(),
         n = {
            id: r,
            callback: t,
            unsubscribe: () => {
               this._debug(
                  "#unsubscribe()",
                  "state change callback with id removed",
                  r
               ),
                  this.stateChangeEmitters.delete(r);
            },
         };
      return (
         this._debug("#onAuthStateChange()", "registered callback with id", r),
         this.stateChangeEmitters.set(r, n),
         (async () => (
            await this.initializePromise,
            await this._acquireLock(-1, async () => {
               this._emitInitialSession(r);
            })
         ))(),
         { data: { subscription: n } }
      );
   }
   async _emitInitialSession(t) {
      return await this._useSession(async (r) => {
         var n, i;
         try {
            const {
               data: { session: s },
               error: o,
            } = r;
            if (o) throw o;
            await ((n = this.stateChangeEmitters.get(t)) === null ||
            n === void 0
               ? void 0
               : n.callback("INITIAL_SESSION", s)),
               this._debug("INITIAL_SESSION", "callback id", t, "session", s);
         } catch (s) {
            await ((i = this.stateChangeEmitters.get(t)) === null ||
            i === void 0
               ? void 0
               : i.callback("INITIAL_SESSION", null)),
               this._debug("INITIAL_SESSION", "callback id", t, "error", s),
               console.error(s);
         }
      });
   }
   async resetPasswordForEmail(t, r = {}) {
      let n = null,
         i = null;
      if (this.flowType === "pkce") {
         const s = qi();
         await An(this.storage, `${this.storageKey}-code-verifier`, s),
            (n = await Vi(s)),
            (i = s === n ? "plain" : "s256");
      }
      try {
         return await Z(this.fetch, "POST", `${this.url}/recover`, {
            body: {
               email: t,
               code_challenge: n,
               code_challenge_method: i,
               gotrue_meta_security: { captcha_token: r.captchaToken },
            },
            headers: this.headers,
            redirectTo: r.redirectTo,
         });
      } catch (s) {
         if (Y(s)) return { data: null, error: s };
         throw s;
      }
   }
   async _refreshAccessToken(t) {
      const r = `#_refreshAccessToken(${t.substring(0, 5)}...)`;
      this._debug(r, "begin");
      try {
         const n = Date.now();
         return await YS(
            async (i) => (
               await KS(i * 200),
               this._debug(r, "refreshing attempt", i),
               await Z(
                  this.fetch,
                  "POST",
                  `${this.url}/token?grant_type=refresh_token`,
                  {
                     body: { refresh_token: t },
                     headers: this.headers,
                     xform: _r,
                  }
               )
            ),
            (i, s, o) =>
               o &&
               o.error &&
               lp(o.error) &&
               Date.now() + (i + 1) * 200 - n < Wi
         );
      } catch (n) {
         if ((this._debug(r, "error", n), Y(n)))
            return { data: { session: null, user: null }, error: n };
         throw n;
      } finally {
         this._debug(r, "end");
      }
   }
   _isValidSession(t) {
      return (
         typeof t == "object" &&
         t !== null &&
         "access_token" in t &&
         "refresh_token" in t &&
         "expires_at" in t
      );
   }
   async _handleProviderSignIn(t, r) {
      const n = await this._getUrlForProvider(t, {
         redirectTo: r.redirectTo,
         scopes: r.scopes,
         queryParams: r.queryParams,
      });
      return (
         this._debug(
            "#_handleProviderSignIn()",
            "provider",
            t,
            "options",
            r,
            "url",
            n
         ),
         ar() && !r.skipBrowserRedirect && window.location.assign(n),
         { data: { provider: t, url: n }, error: null }
      );
   }
   async _recoverAndRefresh() {
      var t;
      const r = "#_recoverAndRefresh()";
      this._debug(r, "begin");
      try {
         const n = await ko(this.storage, this.storageKey);
         if (
            (this._debug(r, "session from storage", n),
            !this._isValidSession(n))
         ) {
            this._debug(r, "session is not valid"),
               n !== null && (await this._removeSession());
            return;
         }
         const i = Math.round(Date.now() / 1e3),
            s =
               ((t = n.expires_at) !== null && t !== void 0 ? t : 1 / 0) <
               i + cp;
         if (
            (this._debug(
               r,
               `session has${s ? "" : " not"} expired with margin of ${cp}s`
            ),
            s)
         ) {
            if (this.autoRefreshToken && n.refresh_token) {
               const { error: o } = await this._callRefreshToken(
                  n.refresh_token
               );
               o &&
                  (console.error(o),
                  lp(o) ||
                     (this._debug(
                        r,
                        "refresh failed with a non-retryable error, removing the session",
                        o
                     ),
                     await this._removeSession()));
            }
         } else await this._notifyAllSubscribers("SIGNED_IN", n);
      } catch (n) {
         this._debug(r, "error", n), console.error(n);
         return;
      } finally {
         this._debug(r, "end");
      }
   }
   async _callRefreshToken(t) {
      var r, n;
      if (!t) throw new Mn();
      if (this.refreshingDeferred) return this.refreshingDeferred.promise;
      const i = `#_callRefreshToken(${t.substring(0, 5)}...)`;
      this._debug(i, "begin");
      try {
         this.refreshingDeferred = new fl();
         const { data: s, error: o } = await this._refreshAccessToken(t);
         if (o) throw o;
         if (!s.session) throw new Mn();
         await this._saveSession(s.session),
            await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
         const a = { session: s.session, error: null };
         return this.refreshingDeferred.resolve(a), a;
      } catch (s) {
         if ((this._debug(i, "error", s), Y(s))) {
            const o = { session: null, error: s };
            return (
               (r = this.refreshingDeferred) === null ||
                  r === void 0 ||
                  r.resolve(o),
               o
            );
         }
         throw (
            ((n = this.refreshingDeferred) === null ||
               n === void 0 ||
               n.reject(s),
            s)
         );
      } finally {
         (this.refreshingDeferred = null), this._debug(i, "end");
      }
   }
   async _notifyAllSubscribers(t, r, n = !0) {
      const i = `#_notifyAllSubscribers(${t})`;
      this._debug(i, "begin", r, `broadcast = ${n}`);
      try {
         this.broadcastChannel &&
            n &&
            this.broadcastChannel.postMessage({ event: t, session: r });
         const s = [],
            o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
               try {
                  await a.callback(t, r);
               } catch (l) {
                  s.push(l);
               }
            });
         if ((await Promise.all(o), s.length > 0)) {
            for (let a = 0; a < s.length; a += 1) console.error(s[a]);
            throw s[0];
         }
      } finally {
         this._debug(i, "end");
      }
   }
   async _saveSession(t) {
      this._debug("#_saveSession()", t), await this._persistSession(t);
   }
   _persistSession(t) {
      return (
         this._debug("#_persistSession()", t),
         An(this.storage, this.storageKey, t)
      );
   }
   async _removeSession() {
      this._debug("#_removeSession()"), await tu(this.storage, this.storageKey);
   }
   _removeVisibilityChangedCallback() {
      this._debug("#_removeVisibilityChangedCallback()");
      const t = this.visibilityChangedCallback;
      this.visibilityChangedCallback = null;
      try {
         t &&
            ar() &&
            window != null &&
            window.removeEventListener &&
            window.removeEventListener("visibilitychange", t);
      } catch (r) {
         console.error("removing visibilitychange callback failed", r);
      }
   }
   async _startAutoRefresh() {
      await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
      const t = setInterval(() => this._autoRefreshTokenTick(), Wi);
      (this.autoRefreshTicker = t),
         t && typeof t == "object" && typeof t.unref == "function"
            ? t.unref()
            : typeof Deno < "u" &&
              typeof Deno.unrefTimer == "function" &&
              Deno.unrefTimer(t),
         setTimeout(async () => {
            await this.initializePromise, await this._autoRefreshTokenTick();
         }, 0);
   }
   async _stopAutoRefresh() {
      this._debug("#_stopAutoRefresh()");
      const t = this.autoRefreshTicker;
      (this.autoRefreshTicker = null), t && clearInterval(t);
   }
   async startAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
   }
   async stopAutoRefresh() {
      this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
   }
   async _autoRefreshTokenTick() {
      this._debug("#_autoRefreshTokenTick()", "begin");
      try {
         await this._acquireLock(0, async () => {
            try {
               const t = Date.now();
               try {
                  return await this._useSession(async (r) => {
                     const {
                        data: { session: n },
                     } = r;
                     if (!n || !n.refresh_token || !n.expires_at) {
                        this._debug("#_autoRefreshTokenTick()", "no session");
                        return;
                     }
                     const i = Math.floor((n.expires_at * 1e3 - t) / Wi);
                     this._debug(
                        "#_autoRefreshTokenTick()",
                        `access token expires in ${i} ticks, a tick lasts ${Wi}ms, refresh threshold is ${fp} ticks`
                     ),
                        i <= fp &&
                           (await this._callRefreshToken(n.refresh_token));
                  });
               } catch (r) {
                  console.error(
                     "Auto refresh tick failed with error. This is likely a transient error.",
                     r
                  );
               }
            } finally {
               this._debug("#_autoRefreshTokenTick()", "end");
            }
         });
      } catch (t) {
         if (t.isAcquireTimeout || t instanceof v_)
            this._debug("auto refresh token tick lock not available");
         else throw t;
      }
   }
   async _handleVisibilityChange() {
      if (
         (this._debug("#_handleVisibilityChange()"),
         !ar() || !(window != null && window.addEventListener))
      )
         return this.autoRefreshToken && this.startAutoRefresh(), !1;
      try {
         (this.visibilityChangedCallback = async () =>
            await this._onVisibilityChanged(!1)),
            window == null ||
               window.addEventListener(
                  "visibilitychange",
                  this.visibilityChangedCallback
               ),
            await this._onVisibilityChanged(!0);
      } catch (t) {
         console.error("_handleVisibilityChange", t);
      }
   }
   async _onVisibilityChanged(t) {
      const r = `#_onVisibilityChanged(${t})`;
      this._debug(r, "visibilityState", document.visibilityState),
         document.visibilityState === "visible"
            ? (this.autoRefreshToken && this._startAutoRefresh(),
              t ||
                 (await this.initializePromise,
                 await this._acquireLock(-1, async () => {
                    if (document.visibilityState !== "visible") {
                       this._debug(
                          r,
                          "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting"
                       );
                       return;
                    }
                    await this._recoverAndRefresh();
                 })))
            : document.visibilityState === "hidden" &&
              this.autoRefreshToken &&
              this._stopAutoRefresh();
   }
   async _getUrlForProvider(t, r) {
      const n = [`provider=${encodeURIComponent(t)}`];
      if (
         (r != null &&
            r.redirectTo &&
            n.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),
         r != null &&
            r.scopes &&
            n.push(`scopes=${encodeURIComponent(r.scopes)}`),
         this.flowType === "pkce")
      ) {
         const i = qi();
         await An(this.storage, `${this.storageKey}-code-verifier`, i);
         const s = await Vi(i),
            o = i === s ? "plain" : "s256";
         this._debug(
            "PKCE",
            "code verifier",
            `${i.substring(0, 5)}...`,
            "code challenge",
            s,
            "method",
            o
         );
         const a = new URLSearchParams({
            code_challenge: `${encodeURIComponent(s)}`,
            code_challenge_method: `${encodeURIComponent(o)}`,
         });
         n.push(a.toString());
      }
      if (r != null && r.queryParams) {
         const i = new URLSearchParams(r.queryParams);
         n.push(i.toString());
      }
      return `${this.url}/authorize?${n.join("&")}`;
   }
   async _unenroll(t) {
      try {
         return await this._useSession(async (r) => {
            var n;
            const { data: i, error: s } = r;
            return s
               ? { data: null, error: s }
               : await Z(
                    this.fetch,
                    "DELETE",
                    `${this.url}/factors/${t.factorId}`,
                    {
                       headers: this.headers,
                       jwt:
                          (n = i == null ? void 0 : i.session) === null ||
                          n === void 0
                             ? void 0
                             : n.access_token,
                    }
                 );
         });
      } catch (r) {
         if (Y(r)) return { data: null, error: r };
         throw r;
      }
   }
   async _enroll(t) {
      try {
         return await this._useSession(async (r) => {
            var n, i;
            const { data: s, error: o } = r;
            if (o) return { data: null, error: o };
            const { data: a, error: l } = await Z(
               this.fetch,
               "POST",
               `${this.url}/factors`,
               {
                  body: {
                     friendly_name: t.friendlyName,
                     factor_type: t.factorType,
                     issuer: t.issuer,
                  },
                  headers: this.headers,
                  jwt:
                     (n = s == null ? void 0 : s.session) === null ||
                     n === void 0
                        ? void 0
                        : n.access_token,
               }
            );
            return l
               ? { data: null, error: l }
               : (!(
                    (i = a == null ? void 0 : a.totp) === null || i === void 0
                 ) &&
                    i.qr_code &&
                    (a.totp.qr_code = `data:image/svg+xml;utf-8,${a.totp.qr_code}`),
                 { data: a, error: null });
         });
      } catch (r) {
         if (Y(r)) return { data: null, error: r };
         throw r;
      }
   }
   async _verify(t) {
      return this._acquireLock(-1, async () => {
         try {
            return await this._useSession(async (r) => {
               var n;
               const { data: i, error: s } = r;
               if (s) return { data: null, error: s };
               const { data: o, error: a } = await Z(
                  this.fetch,
                  "POST",
                  `${this.url}/factors/${t.factorId}/verify`,
                  {
                     body: { code: t.code, challenge_id: t.challengeId },
                     headers: this.headers,
                     jwt:
                        (n = i == null ? void 0 : i.session) === null ||
                        n === void 0
                           ? void 0
                           : n.access_token,
                  }
               );
               return a
                  ? { data: null, error: a }
                  : (await this._saveSession(
                       Object.assign(
                          {
                             expires_at:
                                Math.round(Date.now() / 1e3) + o.expires_in,
                          },
                          o
                       )
                    ),
                    await this._notifyAllSubscribers(
                       "MFA_CHALLENGE_VERIFIED",
                       o
                    ),
                    { data: o, error: a });
            });
         } catch (r) {
            if (Y(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   async _challenge(t) {
      return this._acquireLock(-1, async () => {
         try {
            return await this._useSession(async (r) => {
               var n;
               const { data: i, error: s } = r;
               return s
                  ? { data: null, error: s }
                  : await Z(
                       this.fetch,
                       "POST",
                       `${this.url}/factors/${t.factorId}/challenge`,
                       {
                          headers: this.headers,
                          jwt:
                             (n = i == null ? void 0 : i.session) === null ||
                             n === void 0
                                ? void 0
                                : n.access_token,
                       }
                    );
            });
         } catch (r) {
            if (Y(r)) return { data: null, error: r };
            throw r;
         }
      });
   }
   async _challengeAndVerify(t) {
      const { data: r, error: n } = await this._challenge({
         factorId: t.factorId,
      });
      return n
         ? { data: null, error: n }
         : await this._verify({
              factorId: t.factorId,
              challengeId: r.id,
              code: t.code,
           });
   }
   async _listFactors() {
      const {
         data: { user: t },
         error: r,
      } = await this.getUser();
      if (r) return { data: null, error: r };
      const n = (t == null ? void 0 : t.factors) || [],
         i = n.filter(
            (s) => s.factor_type === "totp" && s.status === "verified"
         );
      return { data: { all: n, totp: i }, error: null };
   }
   async _getAuthenticatorAssuranceLevel() {
      return this._acquireLock(
         -1,
         async () =>
            await this._useSession(async (t) => {
               var r, n;
               const {
                  data: { session: i },
                  error: s,
               } = t;
               if (s) return { data: null, error: s };
               if (!i)
                  return {
                     data: {
                        currentLevel: null,
                        nextLevel: null,
                        currentAuthenticationMethods: [],
                     },
                     error: null,
                  };
               const o = this._decodeJWT(i.access_token);
               let a = null;
               o.aal && (a = o.aal);
               let l = a;
               ((n =
                  (r = i.user.factors) === null || r === void 0
                     ? void 0
                     : r.filter((d) => d.status === "verified")) !== null &&
               n !== void 0
                  ? n
                  : []
               ).length > 0 && (l = "aal2");
               const c = o.amr || [];
               return {
                  data: {
                     currentLevel: a,
                     nextLevel: l,
                     currentAuthenticationMethods: c,
                  },
                  error: null,
               };
            })
      );
   }
}
Us.nextInstanceID = 0;
class x_ extends Us {
   constructor(t) {
      super(t);
   }
}
var b_ =
   (globalThis && globalThis.__awaiter) ||
   function (e, t, r, n) {
      function i(s) {
         return s instanceof r
            ? s
            : new r(function (o) {
                 o(s);
              });
      }
      return new (r || (r = Promise))(function (s, o) {
         function a(c) {
            try {
               u(n.next(c));
            } catch (d) {
               o(d);
            }
         }
         function l(c) {
            try {
               u(n.throw(c));
            } catch (d) {
               o(d);
            }
         }
         function u(c) {
            c.done ? s(c.value) : i(c.value).then(a, l);
         }
         u((n = n.apply(e, t || [])).next());
      });
   };
const k_ = { headers: MS },
   S_ = { schema: "public" },
   __ = {
      autoRefreshToken: !0,
      persistSession: !0,
      detectSessionInUrl: !0,
      flowType: "implicit",
   },
   C_ = {};
class E_ {
   constructor(t, r, n) {
      var i, s, o, a, l, u, c, d;
      if (((this.supabaseUrl = t), (this.supabaseKey = r), !t))
         throw new Error("supabaseUrl is required.");
      if (!r) throw new Error("supabaseKey is required.");
      const h = qS(t);
      (this.realtimeUrl = `${h}/realtime/v1`.replace(/^http/i, "ws")),
         (this.authUrl = `${h}/auth/v1`),
         (this.storageUrl = `${h}/storage/v1`),
         (this.functionsUrl = `${h}/functions/v1`);
      const m = `sb-${new URL(this.authUrl).hostname.split(".")[0]}-auth-token`,
         y = {
            db: S_,
            realtime: C_,
            auth: Object.assign(Object.assign({}, __), { storageKey: m }),
            global: k_,
         },
         w = VS(n ?? {}, y);
      (this.storageKey =
         (s = (i = w.auth) === null || i === void 0 ? void 0 : i.storageKey) !==
            null && s !== void 0
            ? s
            : ""),
         (this.headers =
            (a =
               (o = w.global) === null || o === void 0 ? void 0 : o.headers) !==
               null && a !== void 0
               ? a
               : {}),
         (this.auth = this._initSupabaseAuthClient(
            (l = w.auth) !== null && l !== void 0 ? l : {},
            this.headers,
            (u = w.global) === null || u === void 0 ? void 0 : u.fetch
         )),
         (this.fetch = BS(
            r,
            this._getAccessToken.bind(this),
            (c = w.global) === null || c === void 0 ? void 0 : c.fetch
         )),
         (this.realtime = this._initRealtimeClient(
            Object.assign({ headers: this.headers }, w.realtime)
         )),
         (this.rest = new Hd(`${h}/rest/v1`, {
            headers: this.headers,
            schema: (d = w.db) === null || d === void 0 ? void 0 : d.schema,
            fetch: this.fetch,
         })),
         this._listenForAuthEvents();
   }
   get functions() {
      return new Mk(this.functionsUrl, {
         headers: this.headers,
         customFetch: this.fetch,
      });
   }
   get storage() {
      return new LS(this.storageUrl, this.headers, this.fetch);
   }
   from(t) {
      return this.rest.from(t);
   }
   schema(t) {
      return this.rest.schema(t);
   }
   rpc(t, r = {}, n) {
      return this.rest.rpc(t, r, n);
   }
   channel(t, r = { config: {} }) {
      return this.realtime.channel(t, r);
   }
   getChannels() {
      return this.realtime.getChannels();
   }
   removeChannel(t) {
      return this.realtime.removeChannel(t);
   }
   removeAllChannels() {
      return this.realtime.removeAllChannels();
   }
   _getAccessToken() {
      var t, r;
      return b_(this, void 0, void 0, function* () {
         const { data: n } = yield this.auth.getSession();
         return (r =
            (t = n.session) === null || t === void 0
               ? void 0
               : t.access_token) !== null && r !== void 0
            ? r
            : null;
      });
   }
   _initSupabaseAuthClient(
      {
         autoRefreshToken: t,
         persistSession: r,
         detectSessionInUrl: n,
         storage: i,
         storageKey: s,
         flowType: o,
         debug: a,
      },
      l,
      u
   ) {
      const c = {
         Authorization: `Bearer ${this.supabaseKey}`,
         apikey: `${this.supabaseKey}`,
      };
      return new x_({
         url: this.authUrl,
         headers: Object.assign(Object.assign({}, c), l),
         storageKey: s,
         autoRefreshToken: t,
         persistSession: r,
         detectSessionInUrl: n,
         storage: i,
         flowType: o,
         debug: a,
         fetch: u,
      });
   }
   _initRealtimeClient(t) {
      return new _S(
         this.realtimeUrl,
         Object.assign(Object.assign({}, t), {
            params: Object.assign(
               { apikey: this.supabaseKey },
               t == null ? void 0 : t.params
            ),
         })
      );
   }
   _listenForAuthEvents() {
      return this.auth.onAuthStateChange((r, n) => {
         this._handleTokenChanged(
            r,
            "CLIENT",
            n == null ? void 0 : n.access_token
         );
      });
   }
   _handleTokenChanged(t, r, n) {
      (t === "TOKEN_REFRESHED" || t === "SIGNED_IN") &&
      this.changedAccessToken !== n
         ? (this.realtime.setAuth(n ?? null), (this.changedAccessToken = n))
         : t === "SIGNED_OUT" &&
           (this.realtime.setAuth(this.supabaseKey),
           r == "STORAGE" && this.auth.signOut(),
           (this.changedAccessToken = void 0));
   }
}
const P_ = (e, t, r) => new E_(e, t, r),
   Da = "https://aojlsqmjbfyvirtochwp.supabase.co",
   T_ =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFvamxzcW1qYmZ5dmlydG9jaHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU4MjUxMTUsImV4cCI6MjAxMTQwMTExNX0.A-mNNQCNvBO7bOU7yQajoq7rhlYQZp4nW1fPWa3Xlf4",
   we = P_(Da, T_);
async function j_({ email: e, password: t }) {
   const { data: r, error: n } = await we.auth.signInWithPassword({
      email: e,
      password: t,
   });
   if (n) throw new Error(n.message);
   return console.log(r.user.role), { data: r };
}
async function O_() {
   const { data: e } = await we.auth.getSession();
   if ((console.log(e), !e.session)) return null;
   const { data: t, error: r } = await we.auth.getUser();
   if ((console.log(t), r)) throw new Error(r.message);
   return t == null ? void 0 : t.user;
}
async function D_() {
   const { error: e } = await we.auth.signOut();
   if (e) throw new Error(e.message);
}
function R_() {
   const e = ir(),
      t = It(),
      { mutate: r, isLoading: n } = kr({
         mutationFn: D_,
         onSuccess: () => {
            e("/login", { replace: !0 }), t.removeQueries();
         },
      });
   return { logout: r, isLoading: n };
}
function I_() {
   const { logout: e, isLoading: t } = R_();
   return f.jsx(mk, { disabled: t, onClick: e, children: f.jsx(wk, {}) });
}
const $_ = I.header`
   background-color: var(--color-grey-0);
   padding: 1.2rem 4.8rem;
   border-bottom: 1px solid var(--color-grey-100);
`;
function N_() {
   return f.jsx($_, { children: f.jsx(I_, {}) });
}
const L_ = I.div`
   text-align: center;
`,
   A_ = I.img`
   height: 9.6rem;
   width: auto;
`;
function s0() {
   return f.jsx(L_, {
      children: f.jsx(A_, { src: "/logo-light.png", alt: "Logo" }),
   });
}
function M_(e) {
   return $e({
      tag: "svg",
      attr: {
         viewBox: "0 0 20 20",
         fill: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               fillRule: "evenodd",
               d: "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
               clipRule: "evenodd",
            },
         },
      ],
   })(e);
}
function F_(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "2",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
            },
         },
      ],
   })(e);
}
function hp(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "2",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
            },
         },
      ],
   })(e);
}
function U_(e) {
   return $e({
      tag: "svg",
      attr: {
         fill: "none",
         viewBox: "0 0 24 24",
         strokeWidth: "2",
         stroke: "currentColor",
         "aria-hidden": "true",
      },
      child: [
         {
            tag: "path",
            attr: {
               strokeLinecap: "round",
               strokeLinejoin: "round",
               d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
            },
         },
      ],
   })(e);
}
const z_ = I.ul`
   display: flex;
   flex-direction: column;
   gap: 0.8rem;
`,
   Hi = I(kx)`
   &:link,
   &:visited {
      display: flex;
      align-items: center;
      gap: 1.2rem;

      color: var(--color-grey-600);
      font-size: 1.6rem;
      font-weight: 500;
      padding: 1.2rem 2.4rem;
      transition: all 0.3s;
   }

   /* This works because react-router places the active class on the active NavLink */
   &:hover,
   &:active,
   &.active:link,
   &.active:visited {
      color: var(--color-grey-800);
      background-color: var(--color-grey-50);
      border-radius: var(--border-radius-sm);
   }

   & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
   }

   &:hover svg,
   &:active svg,
   &.active:link svg,
   &.active:visited svg {
      color: var(--color-brand-600);
   }
`;
function B_() {
   return f.jsx("nav", {
      children: f.jsxs(z_, {
         children: [
            f.jsx("li", {
               children: f.jsxs(Hi, {
                  to: "dashboard",
                  children: [
                     f.jsx(hp, {}),
                     f.jsx("span", { children: "Home" }),
                  ],
               }),
            }),
            f.jsx("li", {
               children: f.jsxs(Hi, {
                  to: "/bookings",
                  children: [
                     f.jsx(F_, {}),
                     f.jsx("span", { children: "Bookings" }),
                  ],
               }),
            }),
            f.jsx("li", {
               children: f.jsxs(Hi, {
                  to: "/cabins",
                  children: [
                     f.jsx(hp, {}),
                     f.jsx("span", { children: "Cabins" }),
                  ],
               }),
            }),
            f.jsx("li", {
               children: f.jsxs(Hi, {
                  to: "/users",
                  children: [
                     f.jsx(U_, {}),
                     f.jsx("span", { children: "Users" }),
                  ],
               }),
            }),
            f.jsx("li", {
               children: f.jsxs(Hi, {
                  to: "/settings",
                  children: [
                     f.jsx(M_, {}),
                     f.jsx("span", { children: "Settings" }),
                  ],
               }),
            }),
         ],
      }),
   });
}
function zs(e) {
   "@babel/helpers - typeof";
   return (
      (zs =
         typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
            ? function (t) {
                 return typeof t;
              }
            : function (t) {
                 return t &&
                    typeof Symbol == "function" &&
                    t.constructor === Symbol &&
                    t !== Symbol.prototype
                    ? "symbol"
                    : typeof t;
              }),
      zs(e)
   );
}
function Be(e) {
   if (e === null || e === !0 || e === !1) return NaN;
   var t = Number(e);
   return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function G(e, t) {
   if (t.length < e)
      throw new TypeError(
         e +
            " argument" +
            (e > 1 ? "s" : "") +
            " required, but only " +
            t.length +
            " present"
      );
}
function K(e) {
   G(1, arguments);
   var t = Object.prototype.toString.call(e);
   return e instanceof Date || (zs(e) === "object" && t === "[object Date]")
      ? new Date(e.getTime())
      : typeof e == "number" || t === "[object Number]"
      ? new Date(e)
      : ((typeof e == "string" || t === "[object String]") &&
           typeof console < "u" &&
           (console.warn(
              "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
           ),
           console.warn(new Error().stack)),
        new Date(NaN));
}
function q_(e, t) {
   G(2, arguments);
   var r = K(e),
      n = Be(t);
   return isNaN(n) ? new Date(NaN) : (n && r.setDate(r.getDate() + n), r);
}
function V_(e, t) {
   G(2, arguments);
   var r = K(e),
      n = Be(t);
   if (isNaN(n)) return new Date(NaN);
   if (!n) return r;
   var i = r.getDate(),
      s = new Date(r.getTime());
   s.setMonth(r.getMonth() + n + 1, 0);
   var o = s.getDate();
   return i >= o ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), i), r);
}
function W_(e, t) {
   if ((G(2, arguments), !t || zs(t) !== "object")) return new Date(NaN);
   var r = t.years ? Be(t.years) : 0,
      n = t.months ? Be(t.months) : 0,
      i = t.weeks ? Be(t.weeks) : 0,
      s = t.days ? Be(t.days) : 0,
      o = t.hours ? Be(t.hours) : 0,
      a = t.minutes ? Be(t.minutes) : 0,
      l = t.seconds ? Be(t.seconds) : 0,
      u = K(e),
      c = n || r ? V_(u, n + r * 12) : u,
      d = s || i ? q_(c, s + i * 7) : c,
      h = a + o * 60,
      m = l + h * 60,
      y = m * 1e3,
      w = new Date(d.getTime() + y);
   return w;
}
function H_(e, t) {
   G(2, arguments);
   var r = K(e).getTime(),
      n = Be(t);
   return new Date(r + n);
}
var Q_ = {};
function Xs() {
   return Q_;
}
function Bs(e) {
   var t = new Date(
      Date.UTC(
         e.getFullYear(),
         e.getMonth(),
         e.getDate(),
         e.getHours(),
         e.getMinutes(),
         e.getSeconds(),
         e.getMilliseconds()
      )
   );
   return t.setUTCFullYear(e.getFullYear()), e.getTime() - t.getTime();
}
function Ra(e) {
   G(1, arguments);
   var t = K(e);
   return t.setHours(0, 0, 0, 0), t;
}
var G_ = 864e5;
function K_(e, t) {
   G(2, arguments);
   var r = Ra(e),
      n = Ra(t),
      i = r.getTime() - Bs(r),
      s = n.getTime() - Bs(n);
   return Math.round((i - s) / G_);
}
function Vo(e, t) {
   G(2, arguments);
   var r = K(e),
      n = K(t),
      i = r.getTime() - n.getTime();
   return i < 0 ? -1 : i > 0 ? 1 : i;
}
var o0 = 6e4,
   a0 = 36e5;
function Y_(e, t) {
   G(2, arguments);
   var r = Ra(e),
      n = Ra(t);
   return r.getTime() === n.getTime();
}
function J_(e) {
   return (
      G(1, arguments),
      e instanceof Date ||
         (zs(e) === "object" &&
            Object.prototype.toString.call(e) === "[object Date]")
   );
}
function X_(e) {
   if ((G(1, arguments), !J_(e) && typeof e != "number")) return !1;
   var t = K(e);
   return !isNaN(Number(t));
}
function Z_(e, t) {
   G(2, arguments);
   var r = K(e),
      n = K(t),
      i = r.getFullYear() - n.getFullYear(),
      s = r.getMonth() - n.getMonth();
   return i * 12 + s;
}
function pp(e, t) {
   var r =
      e.getFullYear() - t.getFullYear() ||
      e.getMonth() - t.getMonth() ||
      e.getDate() - t.getDate() ||
      e.getHours() - t.getHours() ||
      e.getMinutes() - t.getMinutes() ||
      e.getSeconds() - t.getSeconds() ||
      e.getMilliseconds() - t.getMilliseconds();
   return r < 0 ? -1 : r > 0 ? 1 : r;
}
function e2(e, t) {
   G(2, arguments);
   var r = K(e),
      n = K(t),
      i = pp(r, n),
      s = Math.abs(K_(r, n));
   r.setDate(r.getDate() - i * s);
   var o = +(pp(r, n) === -i),
      a = i * (s - o);
   return a === 0 ? 0 : a;
}
function t2(e, t) {
   return G(2, arguments), K(e).getTime() - K(t).getTime();
}
var mp = {
      ceil: Math.ceil,
      round: Math.round,
      floor: Math.floor,
      trunc: function (t) {
         return t < 0 ? Math.ceil(t) : Math.floor(t);
      },
   },
   r2 = "trunc";
function n2(e) {
   return e ? mp[e] : mp[r2];
}
function i2(e) {
   G(1, arguments);
   var t = K(e);
   return t.setHours(23, 59, 59, 999), t;
}
function s2(e) {
   G(1, arguments);
   var t = K(e),
      r = t.getMonth();
   return (
      t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t
   );
}
function o2(e) {
   G(1, arguments);
   var t = K(e);
   return i2(t).getTime() === s2(t).getTime();
}
function a2(e, t) {
   G(2, arguments);
   var r = K(e),
      n = K(t),
      i = Vo(r, n),
      s = Math.abs(Z_(r, n)),
      o;
   if (s < 1) o = 0;
   else {
      r.getMonth() === 1 && r.getDate() > 27 && r.setDate(30),
         r.setMonth(r.getMonth() - i * s);
      var a = Vo(r, n) === -i;
      o2(K(e)) && s === 1 && Vo(e, n) === 1 && (a = !1),
         (o = i * (s - Number(a)));
   }
   return o === 0 ? 0 : o;
}
function l2(e, t, r) {
   G(2, arguments);
   var n = t2(e, t) / 1e3;
   return n2(r == null ? void 0 : r.roundingMethod)(n);
}
function u2(e, t) {
   G(2, arguments);
   var r = Be(t);
   return H_(e, -r);
}
var c2 = 864e5;
function d2(e) {
   G(1, arguments);
   var t = K(e),
      r = t.getTime();
   t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
   var n = t.getTime(),
      i = r - n;
   return Math.floor(i / c2) + 1;
}
function Ia(e) {
   G(1, arguments);
   var t = 1,
      r = K(e),
      n = r.getUTCDay(),
      i = (n < t ? 7 : 0) + n - t;
   return r.setUTCDate(r.getUTCDate() - i), r.setUTCHours(0, 0, 0, 0), r;
}
function l0(e) {
   G(1, arguments);
   var t = K(e),
      r = t.getUTCFullYear(),
      n = new Date(0);
   n.setUTCFullYear(r + 1, 0, 4), n.setUTCHours(0, 0, 0, 0);
   var i = Ia(n),
      s = new Date(0);
   s.setUTCFullYear(r, 0, 4), s.setUTCHours(0, 0, 0, 0);
   var o = Ia(s);
   return t.getTime() >= i.getTime()
      ? r + 1
      : t.getTime() >= o.getTime()
      ? r
      : r - 1;
}
function f2(e) {
   G(1, arguments);
   var t = l0(e),
      r = new Date(0);
   r.setUTCFullYear(t, 0, 4), r.setUTCHours(0, 0, 0, 0);
   var n = Ia(r);
   return n;
}
var h2 = 6048e5;
function p2(e) {
   G(1, arguments);
   var t = K(e),
      r = Ia(t).getTime() - f2(t).getTime();
   return Math.round(r / h2) + 1;
}
function $a(e, t) {
   var r, n, i, s, o, a, l, u;
   G(1, arguments);
   var c = Xs(),
      d = Be(
         (r =
            (n =
               (i =
                  (s = t == null ? void 0 : t.weekStartsOn) !== null &&
                  s !== void 0
                     ? s
                     : t == null ||
                       (o = t.locale) === null ||
                       o === void 0 ||
                       (a = o.options) === null ||
                       a === void 0
                     ? void 0
                     : a.weekStartsOn) !== null && i !== void 0
                  ? i
                  : c.weekStartsOn) !== null && n !== void 0
               ? n
               : (l = c.locale) === null ||
                 l === void 0 ||
                 (u = l.options) === null ||
                 u === void 0
               ? void 0
               : u.weekStartsOn) !== null && r !== void 0
            ? r
            : 0
      );
   if (!(d >= 0 && d <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
   var h = K(e),
      m = h.getUTCDay(),
      y = (m < d ? 7 : 0) + m - d;
   return h.setUTCDate(h.getUTCDate() - y), h.setUTCHours(0, 0, 0, 0), h;
}
function u0(e, t) {
   var r, n, i, s, o, a, l, u;
   G(1, arguments);
   var c = K(e),
      d = c.getUTCFullYear(),
      h = Xs(),
      m = Be(
         (r =
            (n =
               (i =
                  (s = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
                  s !== void 0
                     ? s
                     : t == null ||
                       (o = t.locale) === null ||
                       o === void 0 ||
                       (a = o.options) === null ||
                       a === void 0
                     ? void 0
                     : a.firstWeekContainsDate) !== null && i !== void 0
                  ? i
                  : h.firstWeekContainsDate) !== null && n !== void 0
               ? n
               : (l = h.locale) === null ||
                 l === void 0 ||
                 (u = l.options) === null ||
                 u === void 0
               ? void 0
               : u.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : 1
      );
   if (!(m >= 1 && m <= 7))
      throw new RangeError(
         "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
   var y = new Date(0);
   y.setUTCFullYear(d + 1, 0, m), y.setUTCHours(0, 0, 0, 0);
   var w = $a(y, t),
      k = new Date(0);
   k.setUTCFullYear(d, 0, m), k.setUTCHours(0, 0, 0, 0);
   var g = $a(k, t);
   return c.getTime() >= w.getTime()
      ? d + 1
      : c.getTime() >= g.getTime()
      ? d
      : d - 1;
}
function m2(e, t) {
   var r, n, i, s, o, a, l, u;
   G(1, arguments);
   var c = Xs(),
      d = Be(
         (r =
            (n =
               (i =
                  (s = t == null ? void 0 : t.firstWeekContainsDate) !== null &&
                  s !== void 0
                     ? s
                     : t == null ||
                       (o = t.locale) === null ||
                       o === void 0 ||
                       (a = o.options) === null ||
                       a === void 0
                     ? void 0
                     : a.firstWeekContainsDate) !== null && i !== void 0
                  ? i
                  : c.firstWeekContainsDate) !== null && n !== void 0
               ? n
               : (l = c.locale) === null ||
                 l === void 0 ||
                 (u = l.options) === null ||
                 u === void 0
               ? void 0
               : u.firstWeekContainsDate) !== null && r !== void 0
            ? r
            : 1
      ),
      h = u0(e, t),
      m = new Date(0);
   m.setUTCFullYear(h, 0, d), m.setUTCHours(0, 0, 0, 0);
   var y = $a(m, t);
   return y;
}
var g2 = 6048e5;
function v2(e, t) {
   G(1, arguments);
   var r = K(e),
      n = $a(r, t).getTime() - m2(r, t).getTime();
   return Math.round(n / g2) + 1;
}
function ne(e, t) {
   for (var r = e < 0 ? "-" : "", n = Math.abs(e).toString(); n.length < t; )
      n = "0" + n;
   return r + n;
}
var y2 = {
   y: function (t, r) {
      var n = t.getUTCFullYear(),
         i = n > 0 ? n : 1 - n;
      return ne(r === "yy" ? i % 100 : i, r.length);
   },
   M: function (t, r) {
      var n = t.getUTCMonth();
      return r === "M" ? String(n + 1) : ne(n + 1, 2);
   },
   d: function (t, r) {
      return ne(t.getUTCDate(), r.length);
   },
   a: function (t, r) {
      var n = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (r) {
         case "a":
         case "aa":
            return n.toUpperCase();
         case "aaa":
            return n;
         case "aaaaa":
            return n[0];
         case "aaaa":
         default:
            return n === "am" ? "a.m." : "p.m.";
      }
   },
   h: function (t, r) {
      return ne(t.getUTCHours() % 12 || 12, r.length);
   },
   H: function (t, r) {
      return ne(t.getUTCHours(), r.length);
   },
   m: function (t, r) {
      return ne(t.getUTCMinutes(), r.length);
   },
   s: function (t, r) {
      return ne(t.getUTCSeconds(), r.length);
   },
   S: function (t, r) {
      var n = r.length,
         i = t.getUTCMilliseconds(),
         s = Math.floor(i * Math.pow(10, n - 3));
      return ne(s, r.length);
   },
};
const Cr = y2;
var Fn = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night",
   },
   w2 = {
      G: function (t, r, n) {
         var i = t.getUTCFullYear() > 0 ? 1 : 0;
         switch (r) {
            case "G":
            case "GG":
            case "GGG":
               return n.era(i, { width: "abbreviated" });
            case "GGGGG":
               return n.era(i, { width: "narrow" });
            case "GGGG":
            default:
               return n.era(i, { width: "wide" });
         }
      },
      y: function (t, r, n) {
         if (r === "yo") {
            var i = t.getUTCFullYear(),
               s = i > 0 ? i : 1 - i;
            return n.ordinalNumber(s, { unit: "year" });
         }
         return Cr.y(t, r);
      },
      Y: function (t, r, n, i) {
         var s = u0(t, i),
            o = s > 0 ? s : 1 - s;
         if (r === "YY") {
            var a = o % 100;
            return ne(a, 2);
         }
         return r === "Yo"
            ? n.ordinalNumber(o, { unit: "year" })
            : ne(o, r.length);
      },
      R: function (t, r) {
         var n = l0(t);
         return ne(n, r.length);
      },
      u: function (t, r) {
         var n = t.getUTCFullYear();
         return ne(n, r.length);
      },
      Q: function (t, r, n) {
         var i = Math.ceil((t.getUTCMonth() + 1) / 3);
         switch (r) {
            case "Q":
               return String(i);
            case "QQ":
               return ne(i, 2);
            case "Qo":
               return n.ordinalNumber(i, { unit: "quarter" });
            case "QQQ":
               return n.quarter(i, {
                  width: "abbreviated",
                  context: "formatting",
               });
            case "QQQQQ":
               return n.quarter(i, { width: "narrow", context: "formatting" });
            case "QQQQ":
            default:
               return n.quarter(i, { width: "wide", context: "formatting" });
         }
      },
      q: function (t, r, n) {
         var i = Math.ceil((t.getUTCMonth() + 1) / 3);
         switch (r) {
            case "q":
               return String(i);
            case "qq":
               return ne(i, 2);
            case "qo":
               return n.ordinalNumber(i, { unit: "quarter" });
            case "qqq":
               return n.quarter(i, {
                  width: "abbreviated",
                  context: "standalone",
               });
            case "qqqqq":
               return n.quarter(i, { width: "narrow", context: "standalone" });
            case "qqqq":
            default:
               return n.quarter(i, { width: "wide", context: "standalone" });
         }
      },
      M: function (t, r, n) {
         var i = t.getUTCMonth();
         switch (r) {
            case "M":
            case "MM":
               return Cr.M(t, r);
            case "Mo":
               return n.ordinalNumber(i + 1, { unit: "month" });
            case "MMM":
               return n.month(i, {
                  width: "abbreviated",
                  context: "formatting",
               });
            case "MMMMM":
               return n.month(i, { width: "narrow", context: "formatting" });
            case "MMMM":
            default:
               return n.month(i, { width: "wide", context: "formatting" });
         }
      },
      L: function (t, r, n) {
         var i = t.getUTCMonth();
         switch (r) {
            case "L":
               return String(i + 1);
            case "LL":
               return ne(i + 1, 2);
            case "Lo":
               return n.ordinalNumber(i + 1, { unit: "month" });
            case "LLL":
               return n.month(i, {
                  width: "abbreviated",
                  context: "standalone",
               });
            case "LLLLL":
               return n.month(i, { width: "narrow", context: "standalone" });
            case "LLLL":
            default:
               return n.month(i, { width: "wide", context: "standalone" });
         }
      },
      w: function (t, r, n, i) {
         var s = v2(t, i);
         return r === "wo"
            ? n.ordinalNumber(s, { unit: "week" })
            : ne(s, r.length);
      },
      I: function (t, r, n) {
         var i = p2(t);
         return r === "Io"
            ? n.ordinalNumber(i, { unit: "week" })
            : ne(i, r.length);
      },
      d: function (t, r, n) {
         return r === "do"
            ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
            : Cr.d(t, r);
      },
      D: function (t, r, n) {
         var i = d2(t);
         return r === "Do"
            ? n.ordinalNumber(i, { unit: "dayOfYear" })
            : ne(i, r.length);
      },
      E: function (t, r, n) {
         var i = t.getUTCDay();
         switch (r) {
            case "E":
            case "EE":
            case "EEE":
               return n.day(i, { width: "abbreviated", context: "formatting" });
            case "EEEEE":
               return n.day(i, { width: "narrow", context: "formatting" });
            case "EEEEEE":
               return n.day(i, { width: "short", context: "formatting" });
            case "EEEE":
            default:
               return n.day(i, { width: "wide", context: "formatting" });
         }
      },
      e: function (t, r, n, i) {
         var s = t.getUTCDay(),
            o = (s - i.weekStartsOn + 8) % 7 || 7;
         switch (r) {
            case "e":
               return String(o);
            case "ee":
               return ne(o, 2);
            case "eo":
               return n.ordinalNumber(o, { unit: "day" });
            case "eee":
               return n.day(s, { width: "abbreviated", context: "formatting" });
            case "eeeee":
               return n.day(s, { width: "narrow", context: "formatting" });
            case "eeeeee":
               return n.day(s, { width: "short", context: "formatting" });
            case "eeee":
            default:
               return n.day(s, { width: "wide", context: "formatting" });
         }
      },
      c: function (t, r, n, i) {
         var s = t.getUTCDay(),
            o = (s - i.weekStartsOn + 8) % 7 || 7;
         switch (r) {
            case "c":
               return String(o);
            case "cc":
               return ne(o, r.length);
            case "co":
               return n.ordinalNumber(o, { unit: "day" });
            case "ccc":
               return n.day(s, { width: "abbreviated", context: "standalone" });
            case "ccccc":
               return n.day(s, { width: "narrow", context: "standalone" });
            case "cccccc":
               return n.day(s, { width: "short", context: "standalone" });
            case "cccc":
            default:
               return n.day(s, { width: "wide", context: "standalone" });
         }
      },
      i: function (t, r, n) {
         var i = t.getUTCDay(),
            s = i === 0 ? 7 : i;
         switch (r) {
            case "i":
               return String(s);
            case "ii":
               return ne(s, r.length);
            case "io":
               return n.ordinalNumber(s, { unit: "day" });
            case "iii":
               return n.day(i, { width: "abbreviated", context: "formatting" });
            case "iiiii":
               return n.day(i, { width: "narrow", context: "formatting" });
            case "iiiiii":
               return n.day(i, { width: "short", context: "formatting" });
            case "iiii":
            default:
               return n.day(i, { width: "wide", context: "formatting" });
         }
      },
      a: function (t, r, n) {
         var i = t.getUTCHours(),
            s = i / 12 >= 1 ? "pm" : "am";
         switch (r) {
            case "a":
            case "aa":
               return n.dayPeriod(s, {
                  width: "abbreviated",
                  context: "formatting",
               });
            case "aaa":
               return n
                  .dayPeriod(s, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
            case "aaaaa":
               return n.dayPeriod(s, {
                  width: "narrow",
                  context: "formatting",
               });
            case "aaaa":
            default:
               return n.dayPeriod(s, { width: "wide", context: "formatting" });
         }
      },
      b: function (t, r, n) {
         var i = t.getUTCHours(),
            s;
         switch (
            (i === 12
               ? (s = Fn.noon)
               : i === 0
               ? (s = Fn.midnight)
               : (s = i / 12 >= 1 ? "pm" : "am"),
            r)
         ) {
            case "b":
            case "bb":
               return n.dayPeriod(s, {
                  width: "abbreviated",
                  context: "formatting",
               });
            case "bbb":
               return n
                  .dayPeriod(s, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
            case "bbbbb":
               return n.dayPeriod(s, {
                  width: "narrow",
                  context: "formatting",
               });
            case "bbbb":
            default:
               return n.dayPeriod(s, { width: "wide", context: "formatting" });
         }
      },
      B: function (t, r, n) {
         var i = t.getUTCHours(),
            s;
         switch (
            (i >= 17
               ? (s = Fn.evening)
               : i >= 12
               ? (s = Fn.afternoon)
               : i >= 4
               ? (s = Fn.morning)
               : (s = Fn.night),
            r)
         ) {
            case "B":
            case "BB":
            case "BBB":
               return n.dayPeriod(s, {
                  width: "abbreviated",
                  context: "formatting",
               });
            case "BBBBB":
               return n.dayPeriod(s, {
                  width: "narrow",
                  context: "formatting",
               });
            case "BBBB":
            default:
               return n.dayPeriod(s, { width: "wide", context: "formatting" });
         }
      },
      h: function (t, r, n) {
         if (r === "ho") {
            var i = t.getUTCHours() % 12;
            return i === 0 && (i = 12), n.ordinalNumber(i, { unit: "hour" });
         }
         return Cr.h(t, r);
      },
      H: function (t, r, n) {
         return r === "Ho"
            ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
            : Cr.H(t, r);
      },
      K: function (t, r, n) {
         var i = t.getUTCHours() % 12;
         return r === "Ko"
            ? n.ordinalNumber(i, { unit: "hour" })
            : ne(i, r.length);
      },
      k: function (t, r, n) {
         var i = t.getUTCHours();
         return (
            i === 0 && (i = 24),
            r === "ko" ? n.ordinalNumber(i, { unit: "hour" }) : ne(i, r.length)
         );
      },
      m: function (t, r, n) {
         return r === "mo"
            ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
            : Cr.m(t, r);
      },
      s: function (t, r, n) {
         return r === "so"
            ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
            : Cr.s(t, r);
      },
      S: function (t, r) {
         return Cr.S(t, r);
      },
      X: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = s.getTimezoneOffset();
         if (o === 0) return "Z";
         switch (r) {
            case "X":
               return vp(o);
            case "XXXX":
            case "XX":
               return cn(o);
            case "XXXXX":
            case "XXX":
            default:
               return cn(o, ":");
         }
      },
      x: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = s.getTimezoneOffset();
         switch (r) {
            case "x":
               return vp(o);
            case "xxxx":
            case "xx":
               return cn(o);
            case "xxxxx":
            case "xxx":
            default:
               return cn(o, ":");
         }
      },
      O: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = s.getTimezoneOffset();
         switch (r) {
            case "O":
            case "OO":
            case "OOO":
               return "GMT" + gp(o, ":");
            case "OOOO":
            default:
               return "GMT" + cn(o, ":");
         }
      },
      z: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = s.getTimezoneOffset();
         switch (r) {
            case "z":
            case "zz":
            case "zzz":
               return "GMT" + gp(o, ":");
            case "zzzz":
            default:
               return "GMT" + cn(o, ":");
         }
      },
      t: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = Math.floor(s.getTime() / 1e3);
         return ne(o, r.length);
      },
      T: function (t, r, n, i) {
         var s = i._originalDate || t,
            o = s.getTime();
         return ne(o, r.length);
      },
   };
function gp(e, t) {
   var r = e > 0 ? "-" : "+",
      n = Math.abs(e),
      i = Math.floor(n / 60),
      s = n % 60;
   if (s === 0) return r + String(i);
   var o = t || "";
   return r + String(i) + o + ne(s, 2);
}
function vp(e, t) {
   if (e % 60 === 0) {
      var r = e > 0 ? "-" : "+";
      return r + ne(Math.abs(e) / 60, 2);
   }
   return cn(e, t);
}
function cn(e, t) {
   var r = t || "",
      n = e > 0 ? "-" : "+",
      i = Math.abs(e),
      s = ne(Math.floor(i / 60), 2),
      o = ne(i % 60, 2);
   return n + s + r + o;
}
const x2 = w2;
var yp = function (t, r) {
      switch (t) {
         case "P":
            return r.date({ width: "short" });
         case "PP":
            return r.date({ width: "medium" });
         case "PPP":
            return r.date({ width: "long" });
         case "PPPP":
         default:
            return r.date({ width: "full" });
      }
   },
   c0 = function (t, r) {
      switch (t) {
         case "p":
            return r.time({ width: "short" });
         case "pp":
            return r.time({ width: "medium" });
         case "ppp":
            return r.time({ width: "long" });
         case "pppp":
         default:
            return r.time({ width: "full" });
      }
   },
   b2 = function (t, r) {
      var n = t.match(/(P+)(p+)?/) || [],
         i = n[1],
         s = n[2];
      if (!s) return yp(t, r);
      var o;
      switch (i) {
         case "P":
            o = r.dateTime({ width: "short" });
            break;
         case "PP":
            o = r.dateTime({ width: "medium" });
            break;
         case "PPP":
            o = r.dateTime({ width: "long" });
            break;
         case "PPPP":
         default:
            o = r.dateTime({ width: "full" });
            break;
      }
      return o.replace("{{date}}", yp(i, r)).replace("{{time}}", c0(s, r));
   },
   k2 = { p: c0, P: b2 };
const S2 = k2;
var _2 = ["D", "DD"],
   C2 = ["YY", "YYYY"];
function E2(e) {
   return _2.indexOf(e) !== -1;
}
function P2(e) {
   return C2.indexOf(e) !== -1;
}
function wp(e, t, r) {
   if (e === "YYYY")
      throw new RangeError(
         "Use `yyyy` instead of `YYYY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(
               r,
               "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
      );
   if (e === "YY")
      throw new RangeError(
         "Use `yy` instead of `YY` (in `"
            .concat(t, "`) for formatting years to the input `")
            .concat(
               r,
               "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
      );
   if (e === "D")
      throw new RangeError(
         "Use `d` instead of `D` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(
               r,
               "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
      );
   if (e === "DD")
      throw new RangeError(
         "Use `dd` instead of `DD` (in `"
            .concat(t, "`) for formatting days of the month to the input `")
            .concat(
               r,
               "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
            )
      );
}
var T2 = {
      lessThanXSeconds: {
         one: "less than a second",
         other: "less than {{count}} seconds",
      },
      xSeconds: { one: "1 second", other: "{{count}} seconds" },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
         one: "less than a minute",
         other: "less than {{count}} minutes",
      },
      xMinutes: { one: "1 minute", other: "{{count}} minutes" },
      aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
      xHours: { one: "1 hour", other: "{{count}} hours" },
      xDays: { one: "1 day", other: "{{count}} days" },
      aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
      xWeeks: { one: "1 week", other: "{{count}} weeks" },
      aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
      xMonths: { one: "1 month", other: "{{count}} months" },
      aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
      xYears: { one: "1 year", other: "{{count}} years" },
      overXYears: { one: "over 1 year", other: "over {{count}} years" },
      almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
   },
   j2 = function (t, r, n) {
      var i,
         s = T2[t];
      return (
         typeof s == "string"
            ? (i = s)
            : r === 1
            ? (i = s.one)
            : (i = s.other.replace("{{count}}", r.toString())),
         n != null && n.addSuffix
            ? n.comparison && n.comparison > 0
               ? "in " + i
               : i + " ago"
            : i
      );
   };
const O2 = j2;
function nu(e) {
   return function () {
      var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
         r = t.width ? String(t.width) : e.defaultWidth,
         n = e.formats[r] || e.formats[e.defaultWidth];
      return n;
   };
}
var D2 = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy",
   },
   R2 = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a",
   },
   I2 = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}",
   },
   $2 = {
      date: nu({ formats: D2, defaultWidth: "full" }),
      time: nu({ formats: R2, defaultWidth: "full" }),
      dateTime: nu({ formats: I2, defaultWidth: "full" }),
   };
const N2 = $2;
var L2 = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
   },
   A2 = function (t, r, n, i) {
      return L2[t];
   };
const M2 = A2;
function Qi(e) {
   return function (t, r) {
      var n = r != null && r.context ? String(r.context) : "standalone",
         i;
      if (n === "formatting" && e.formattingValues) {
         var s = e.defaultFormattingWidth || e.defaultWidth,
            o = r != null && r.width ? String(r.width) : s;
         i = e.formattingValues[o] || e.formattingValues[s];
      } else {
         var a = e.defaultWidth,
            l = r != null && r.width ? String(r.width) : e.defaultWidth;
         i = e.values[l] || e.values[a];
      }
      var u = e.argumentCallback ? e.argumentCallback(t) : t;
      return i[u];
   };
}
var F2 = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"],
   },
   U2 = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
   },
   z2 = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: [
         "Jan",
         "Feb",
         "Mar",
         "Apr",
         "May",
         "Jun",
         "Jul",
         "Aug",
         "Sep",
         "Oct",
         "Nov",
         "Dec",
      ],
      wide: [
         "January",
         "February",
         "March",
         "April",
         "May",
         "June",
         "July",
         "August",
         "September",
         "October",
         "November",
         "December",
      ],
   },
   B2 = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: [
         "Sunday",
         "Monday",
         "Tuesday",
         "Wednesday",
         "Thursday",
         "Friday",
         "Saturday",
      ],
   },
   q2 = {
      narrow: {
         am: "a",
         pm: "p",
         midnight: "mi",
         noon: "n",
         morning: "morning",
         afternoon: "afternoon",
         evening: "evening",
         night: "night",
      },
      abbreviated: {
         am: "AM",
         pm: "PM",
         midnight: "midnight",
         noon: "noon",
         morning: "morning",
         afternoon: "afternoon",
         evening: "evening",
         night: "night",
      },
      wide: {
         am: "a.m.",
         pm: "p.m.",
         midnight: "midnight",
         noon: "noon",
         morning: "morning",
         afternoon: "afternoon",
         evening: "evening",
         night: "night",
      },
   },
   V2 = {
      narrow: {
         am: "a",
         pm: "p",
         midnight: "mi",
         noon: "n",
         morning: "in the morning",
         afternoon: "in the afternoon",
         evening: "in the evening",
         night: "at night",
      },
      abbreviated: {
         am: "AM",
         pm: "PM",
         midnight: "midnight",
         noon: "noon",
         morning: "in the morning",
         afternoon: "in the afternoon",
         evening: "in the evening",
         night: "at night",
      },
      wide: {
         am: "a.m.",
         pm: "p.m.",
         midnight: "midnight",
         noon: "noon",
         morning: "in the morning",
         afternoon: "in the afternoon",
         evening: "in the evening",
         night: "at night",
      },
   },
   W2 = function (t, r) {
      var n = Number(t),
         i = n % 100;
      if (i > 20 || i < 10)
         switch (i % 10) {
            case 1:
               return n + "st";
            case 2:
               return n + "nd";
            case 3:
               return n + "rd";
         }
      return n + "th";
   },
   H2 = {
      ordinalNumber: W2,
      era: Qi({ values: F2, defaultWidth: "wide" }),
      quarter: Qi({
         values: U2,
         defaultWidth: "wide",
         argumentCallback: function (t) {
            return t - 1;
         },
      }),
      month: Qi({ values: z2, defaultWidth: "wide" }),
      day: Qi({ values: B2, defaultWidth: "wide" }),
      dayPeriod: Qi({
         values: q2,
         defaultWidth: "wide",
         formattingValues: V2,
         defaultFormattingWidth: "wide",
      }),
   };
const Q2 = H2;
function Gi(e) {
   return function (t) {
      var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
         n = r.width,
         i = (n && e.matchPatterns[n]) || e.matchPatterns[e.defaultMatchWidth],
         s = t.match(i);
      if (!s) return null;
      var o = s[0],
         a = (n && e.parsePatterns[n]) || e.parsePatterns[e.defaultParseWidth],
         l = Array.isArray(a)
            ? K2(a, function (d) {
                 return d.test(o);
              })
            : G2(a, function (d) {
                 return d.test(o);
              }),
         u;
      (u = e.valueCallback ? e.valueCallback(l) : l),
         (u = r.valueCallback ? r.valueCallback(u) : u);
      var c = t.slice(o.length);
      return { value: u, rest: c };
   };
}
function G2(e, t) {
   for (var r in e) if (e.hasOwnProperty(r) && t(e[r])) return r;
}
function K2(e, t) {
   for (var r = 0; r < e.length; r++) if (t(e[r])) return r;
}
function Y2(e) {
   return function (t) {
      var r =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
         n = t.match(e.matchPattern);
      if (!n) return null;
      var i = n[0],
         s = t.match(e.parsePattern);
      if (!s) return null;
      var o = e.valueCallback ? e.valueCallback(s[0]) : s[0];
      o = r.valueCallback ? r.valueCallback(o) : o;
      var a = t.slice(i.length);
      return { value: o, rest: a };
   };
}
var J2 = /^(\d+)(th|st|nd|rd)?/i,
   X2 = /\d+/i,
   Z2 = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i,
   },
   eC = { any: [/^b/i, /^(a|c)/i] },
   tC = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i,
   },
   rC = { any: [/1/i, /2/i, /3/i, /4/i] },
   nC = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
   },
   iC = {
      narrow: [
         /^j/i,
         /^f/i,
         /^m/i,
         /^a/i,
         /^m/i,
         /^j/i,
         /^j/i,
         /^a/i,
         /^s/i,
         /^o/i,
         /^n/i,
         /^d/i,
      ],
      any: [
         /^ja/i,
         /^f/i,
         /^mar/i,
         /^ap/i,
         /^may/i,
         /^jun/i,
         /^jul/i,
         /^au/i,
         /^s/i,
         /^o/i,
         /^n/i,
         /^d/i,
      ],
   },
   sC = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
   },
   oC = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
   },
   aC = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
   },
   lC = {
      any: {
         am: /^a/i,
         pm: /^p/i,
         midnight: /^mi/i,
         noon: /^no/i,
         morning: /morning/i,
         afternoon: /afternoon/i,
         evening: /evening/i,
         night: /night/i,
      },
   },
   uC = {
      ordinalNumber: Y2({
         matchPattern: J2,
         parsePattern: X2,
         valueCallback: function (t) {
            return parseInt(t, 10);
         },
      }),
      era: Gi({
         matchPatterns: Z2,
         defaultMatchWidth: "wide",
         parsePatterns: eC,
         defaultParseWidth: "any",
      }),
      quarter: Gi({
         matchPatterns: tC,
         defaultMatchWidth: "wide",
         parsePatterns: rC,
         defaultParseWidth: "any",
         valueCallback: function (t) {
            return t + 1;
         },
      }),
      month: Gi({
         matchPatterns: nC,
         defaultMatchWidth: "wide",
         parsePatterns: iC,
         defaultParseWidth: "any",
      }),
      day: Gi({
         matchPatterns: sC,
         defaultMatchWidth: "wide",
         parsePatterns: oC,
         defaultParseWidth: "any",
      }),
      dayPeriod: Gi({
         matchPatterns: aC,
         defaultMatchWidth: "any",
         parsePatterns: lC,
         defaultParseWidth: "any",
      }),
   };
const cC = uC;
var dC = {
   code: "en-US",
   formatDistance: O2,
   formatLong: N2,
   formatRelative: M2,
   localize: Q2,
   match: cC,
   options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
};
const d0 = dC;
var fC = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
   hC = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
   pC = /^'([^]*?)'?$/,
   mC = /''/g,
   gC = /[a-zA-Z]/;
function ys(e, t, r) {
   var n, i, s, o, a, l, u, c, d, h, m, y, w, k, g, p, v, b;
   G(2, arguments);
   var _ = String(t),
      P = Xs(),
      C =
         (n =
            (i = r == null ? void 0 : r.locale) !== null && i !== void 0
               ? i
               : P.locale) !== null && n !== void 0
            ? n
            : d0,
      j = Be(
         (s =
            (o =
               (a =
                  (l = r == null ? void 0 : r.firstWeekContainsDate) !== null &&
                  l !== void 0
                     ? l
                     : r == null ||
                       (u = r.locale) === null ||
                       u === void 0 ||
                       (c = u.options) === null ||
                       c === void 0
                     ? void 0
                     : c.firstWeekContainsDate) !== null && a !== void 0
                  ? a
                  : P.firstWeekContainsDate) !== null && o !== void 0
               ? o
               : (d = P.locale) === null ||
                 d === void 0 ||
                 (h = d.options) === null ||
                 h === void 0
               ? void 0
               : h.firstWeekContainsDate) !== null && s !== void 0
            ? s
            : 1
      );
   if (!(j >= 1 && j <= 7))
      throw new RangeError(
         "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
   var U = Be(
      (m =
         (y =
            (w =
               (k = r == null ? void 0 : r.weekStartsOn) !== null &&
               k !== void 0
                  ? k
                  : r == null ||
                    (g = r.locale) === null ||
                    g === void 0 ||
                    (p = g.options) === null ||
                    p === void 0
                  ? void 0
                  : p.weekStartsOn) !== null && w !== void 0
               ? w
               : P.weekStartsOn) !== null && y !== void 0
            ? y
            : (v = P.locale) === null ||
              v === void 0 ||
              (b = v.options) === null ||
              b === void 0
            ? void 0
            : b.weekStartsOn) !== null && m !== void 0
         ? m
         : 0
   );
   if (!(U >= 0 && U <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
   if (!C.localize)
      throw new RangeError("locale must contain localize property");
   if (!C.formatLong)
      throw new RangeError("locale must contain formatLong property");
   var F = K(e);
   if (!X_(F)) throw new RangeError("Invalid time value");
   var te = Bs(F),
      W = u2(F, te),
      V = {
         firstWeekContainsDate: j,
         weekStartsOn: U,
         locale: C,
         _originalDate: F,
      },
      se = _.match(hC)
         .map(function (X) {
            var re = X[0];
            if (re === "p" || re === "P") {
               var oe = S2[re];
               return oe(X, C.formatLong);
            }
            return X;
         })
         .join("")
         .match(fC)
         .map(function (X) {
            if (X === "''") return "'";
            var re = X[0];
            if (re === "'") return vC(X);
            var oe = x2[re];
            if (oe)
               return (
                  !(r != null && r.useAdditionalWeekYearTokens) &&
                     P2(X) &&
                     wp(X, t, String(e)),
                  !(r != null && r.useAdditionalDayOfYearTokens) &&
                     E2(X) &&
                     wp(X, t, String(e)),
                  oe(W, X, C.localize, V)
               );
            if (re.match(gC))
               throw new RangeError(
                  "Format string contains an unescaped latin alphabet character `" +
                     re +
                     "`"
               );
            return X;
         })
         .join("");
   return se;
}
function vC(e) {
   var t = e.match(pC);
   return t ? t[1].replace(mC, "'") : e;
}
function f0(e, t) {
   if (e == null)
      throw new TypeError(
         "assign requires that input parameter not be null or undefined"
      );
   for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
   return e;
}
function yC(e) {
   return f0({}, e);
}
var xp = 1440,
   wC = 2520,
   iu = 43200,
   xC = 86400;
function bC(e, t, r) {
   var n, i;
   G(2, arguments);
   var s = Xs(),
      o =
         (n =
            (i = r == null ? void 0 : r.locale) !== null && i !== void 0
               ? i
               : s.locale) !== null && n !== void 0
            ? n
            : d0;
   if (!o.formatDistance)
      throw new RangeError("locale must contain formatDistance property");
   var a = Vo(e, t);
   if (isNaN(a)) throw new RangeError("Invalid time value");
   var l = f0(yC(r), {
         addSuffix: !!(r != null && r.addSuffix),
         comparison: a,
      }),
      u,
      c;
   a > 0 ? ((u = K(t)), (c = K(e))) : ((u = K(e)), (c = K(t)));
   var d = l2(c, u),
      h = (Bs(c) - Bs(u)) / 1e3,
      m = Math.round((d - h) / 60),
      y;
   if (m < 2)
      return r != null && r.includeSeconds
         ? d < 5
            ? o.formatDistance("lessThanXSeconds", 5, l)
            : d < 10
            ? o.formatDistance("lessThanXSeconds", 10, l)
            : d < 20
            ? o.formatDistance("lessThanXSeconds", 20, l)
            : d < 40
            ? o.formatDistance("halfAMinute", 0, l)
            : d < 60
            ? o.formatDistance("lessThanXMinutes", 1, l)
            : o.formatDistance("xMinutes", 1, l)
         : m === 0
         ? o.formatDistance("lessThanXMinutes", 1, l)
         : o.formatDistance("xMinutes", m, l);
   if (m < 45) return o.formatDistance("xMinutes", m, l);
   if (m < 90) return o.formatDistance("aboutXHours", 1, l);
   if (m < xp) {
      var w = Math.round(m / 60);
      return o.formatDistance("aboutXHours", w, l);
   } else {
      if (m < wC) return o.formatDistance("xDays", 1, l);
      if (m < iu) {
         var k = Math.round(m / xp);
         return o.formatDistance("xDays", k, l);
      } else if (m < xC)
         return (
            (y = Math.round(m / iu)), o.formatDistance("aboutXMonths", y, l)
         );
   }
   if (((y = a2(c, u)), y < 12)) {
      var g = Math.round(m / iu);
      return o.formatDistance("xMonths", g, l);
   } else {
      var p = y % 12,
         v = Math.floor(y / 12);
      return p < 3
         ? o.formatDistance("aboutXYears", v, l)
         : p < 9
         ? o.formatDistance("overXYears", v, l)
         : o.formatDistance("almostXYears", v + 1, l);
   }
}
function bp(e) {
   return G(1, arguments), K(e).getTime() > Date.now();
}
function kp(e) {
   return G(1, arguments), K(e).getTime() < Date.now();
}
function ri(e) {
   return G(1, arguments), Y_(e, Date.now());
}
function Pc(e, t) {
   var r;
   G(1, arguments);
   var n = Be(
      (r = t == null ? void 0 : t.additionalDigits) !== null && r !== void 0
         ? r
         : 2
   );
   if (n !== 2 && n !== 1 && n !== 0)
      throw new RangeError("additionalDigits must be 0, 1 or 2");
   if (
      !(
         typeof e == "string" ||
         Object.prototype.toString.call(e) === "[object String]"
      )
   )
      return new Date(NaN);
   var i = CC(e),
      s;
   if (i.date) {
      var o = EC(i.date, n);
      s = PC(o.restDateString, o.year);
   }
   if (!s || isNaN(s.getTime())) return new Date(NaN);
   var a = s.getTime(),
      l = 0,
      u;
   if (i.time && ((l = TC(i.time)), isNaN(l))) return new Date(NaN);
   if (i.timezone) {
      if (((u = jC(i.timezone)), isNaN(u))) return new Date(NaN);
   } else {
      var c = new Date(a + l),
         d = new Date(0);
      return (
         d.setFullYear(c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()),
         d.setHours(
            c.getUTCHours(),
            c.getUTCMinutes(),
            c.getUTCSeconds(),
            c.getUTCMilliseconds()
         ),
         d
      );
   }
   return new Date(a + l + u);
}
var Co = {
      dateTimeDelimiter: /[T ]/,
      timeZoneDelimiter: /[Z ]/i,
      timezone: /([Z+-].*)$/,
   },
   kC = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,
   SC =
      /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,
   _C = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function CC(e) {
   var t = {},
      r = e.split(Co.dateTimeDelimiter),
      n;
   if (r.length > 2) return t;
   if (
      (/:/.test(r[0])
         ? (n = r[0])
         : ((t.date = r[0]),
           (n = r[1]),
           Co.timeZoneDelimiter.test(t.date) &&
              ((t.date = e.split(Co.timeZoneDelimiter)[0]),
              (n = e.substr(t.date.length, e.length)))),
      n)
   ) {
      var i = Co.timezone.exec(n);
      i ? ((t.time = n.replace(i[1], "")), (t.timezone = i[1])) : (t.time = n);
   }
   return t;
}
function EC(e, t) {
   var r = new RegExp(
         "^(?:(\\d{4}|[+-]\\d{" +
            (4 + t) +
            "})|(\\d{2}|[+-]\\d{" +
            (2 + t) +
            "})$)"
      ),
      n = e.match(r);
   if (!n) return { year: NaN, restDateString: "" };
   var i = n[1] ? parseInt(n[1]) : null,
      s = n[2] ? parseInt(n[2]) : null;
   return {
      year: s === null ? i : s * 100,
      restDateString: e.slice((n[1] || n[2]).length),
   };
}
function PC(e, t) {
   if (t === null) return new Date(NaN);
   var r = e.match(kC);
   if (!r) return new Date(NaN);
   var n = !!r[4],
      i = Ki(r[1]),
      s = Ki(r[2]) - 1,
      o = Ki(r[3]),
      a = Ki(r[4]),
      l = Ki(r[5]) - 1;
   if (n) return $C(t, a, l) ? OC(t, a, l) : new Date(NaN);
   var u = new Date(0);
   return !RC(t, s, o) || !IC(t, i)
      ? new Date(NaN)
      : (u.setUTCFullYear(t, s, Math.max(i, o)), u);
}
function Ki(e) {
   return e ? parseInt(e) : 1;
}
function TC(e) {
   var t = e.match(SC);
   if (!t) return NaN;
   var r = su(t[1]),
      n = su(t[2]),
      i = su(t[3]);
   return NC(r, n, i) ? r * a0 + n * o0 + i * 1e3 : NaN;
}
function su(e) {
   return (e && parseFloat(e.replace(",", "."))) || 0;
}
function jC(e) {
   if (e === "Z") return 0;
   var t = e.match(_C);
   if (!t) return 0;
   var r = t[1] === "+" ? -1 : 1,
      n = parseInt(t[2]),
      i = (t[3] && parseInt(t[3])) || 0;
   return LC(n, i) ? r * (n * a0 + i * o0) : NaN;
}
function OC(e, t, r) {
   var n = new Date(0);
   n.setUTCFullYear(e, 0, 4);
   var i = n.getUTCDay() || 7,
      s = (t - 1) * 7 + r + 1 - i;
   return n.setUTCDate(n.getUTCDate() + s), n;
}
var DC = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function h0(e) {
   return e % 400 === 0 || (e % 4 === 0 && e % 100 !== 0);
}
function RC(e, t, r) {
   return t >= 0 && t <= 11 && r >= 1 && r <= (DC[t] || (h0(e) ? 29 : 28));
}
function IC(e, t) {
   return t >= 1 && t <= (h0(e) ? 366 : 365);
}
function $C(e, t, r) {
   return t >= 1 && t <= 53 && r >= 0 && r <= 6;
}
function NC(e, t, r) {
   return e === 24
      ? t === 0 && r === 0
      : r >= 0 && r < 60 && t >= 0 && t < 60 && e >= 0 && e < 25;
}
function LC(e, t) {
   return t >= 0 && t <= 59;
}
const AC = {
      small: Ae`
      font-size: 1.2rem;
      padding: 0.4rem 0.8rem;
      text-transform: uppercase;
      font-weight: 600;
      text-align: center;
   `,
      medium: Ae`
      font-size: 1.4rem;
      padding: 1.2rem 1.6rem;
      font-weight: 500;
   `,
      large: Ae`
      font-size: 1.6rem;
      padding: 1.2rem 2.4rem;
      font-weight: 500;
   `,
   },
   MC = {
      primary: Ae`
      color: var(--color-brand-50);
      background-color: var(--color-brand-600);

      &:hover {
         background-color: var(--color-brand-700);
      }
   `,
      secondary: Ae`
      color: var(--color-grey-600);
      background: var(--color-grey-0);
      border: 1px solid var(--color-grey-200);

      &:hover {
         background-color: var(--color-grey-50);
      }
   `,
      danger: Ae`
      color: var(--color-red-100);
      background-color: var(--color-red-700);

      &:hover {
         background-color: var(--color-red-800);
      }
   `,
   },
   qe = I.button`
   border: none;
   border-radius: var(--border-radius-sm);
   box-shadow: var(--shadow-sm);

   ${(e) => AC[e.size]}
   ${(e) => MC[e.variation]}
`;
qe.defaultProps = { variation: "primary", size: "medium" };
const FC = (e, t) => e2(Pc(String(e)), Pc(String(t))),
   p0 = (e) =>
      bC(Pc(e), new Date(), { addSuffix: !0 })
         .replace("about ", "")
         .replace("in", "In"),
   zt = (e) =>
      new Intl.NumberFormat("en", {
         style: "currency",
         currency: "USD",
      }).format(e);
function N(e, t = !1) {
   const r = W_(new Date(), { days: e });
   return t || r.setUTCHours(0, 0, 0, 0), r.toISOString().slice(0, -1);
}
const UC = [
      {
         created_at: N(-20, !0),
         startDate: N(0),
         endDate: N(7),
         cabinId: 1,
         guestId: 2,
         hasBreakfast: !0,
         observations:
            "I have a gluten allergy and would like to request a gluten-free breakfast.",
         isPaid: !1,
         numGuests: 1,
      },
      {
         created_at: N(-33, !0),
         startDate: N(-23),
         endDate: N(-13),
         cabinId: 1,
         guestId: 3,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 2,
      },
      {
         created_at: N(-27, !0),
         startDate: N(12),
         endDate: N(18),
         cabinId: 1,
         guestId: 4,
         hasBreakfast: !1,
         observations: "",
         isPaid: !1,
         numGuests: 2,
      },
      {
         created_at: N(-45, !0),
         startDate: N(-45),
         endDate: N(-29),
         cabinId: 2,
         guestId: 5,
         hasBreakfast: !1,
         observations: "",
         isPaid: !0,
         numGuests: 2,
      },
      {
         created_at: N(-2, !0),
         startDate: N(15),
         endDate: N(18),
         cabinId: 2,
         guestId: 6,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 2,
      },
      {
         created_at: N(-5, !0),
         startDate: N(33),
         endDate: N(48),
         cabinId: 2,
         guestId: 7,
         hasBreakfast: !0,
         observations: "",
         isPaid: !1,
         numGuests: 2,
      },
      {
         created_at: N(-65, !0),
         startDate: N(-25),
         endDate: N(-20),
         cabinId: 3,
         guestId: 8,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 4,
      },
      {
         created_at: N(-2, !0),
         startDate: N(-2),
         endDate: N(0),
         cabinId: 3,
         guestId: 9,
         hasBreakfast: !1,
         observations: "We will be bringing our small dog with us",
         isPaid: !0,
         numGuests: 3,
      },
      {
         created_at: N(-14, !0),
         startDate: N(-14),
         endDate: N(-11),
         cabinId: 3,
         guestId: 10,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 4,
      },
      {
         created_at: N(-30, !0),
         startDate: N(-4),
         endDate: N(8),
         cabinId: 4,
         guestId: 11,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 4,
      },
      {
         created_at: N(-1, !0),
         startDate: N(12),
         endDate: N(17),
         cabinId: 4,
         guestId: 12,
         hasBreakfast: !0,
         observations: "",
         isPaid: !1,
         numGuests: 4,
      },
      {
         created_at: N(-3, !0),
         startDate: N(18),
         endDate: N(19),
         cabinId: 4,
         guestId: 13,
         hasBreakfast: !1,
         observations: "",
         isPaid: !0,
         numGuests: 1,
      },
      {
         created_at: N(0, !0),
         startDate: N(14),
         endDate: N(21),
         cabinId: 5,
         guestId: 14,
         hasBreakfast: !0,
         observations: "",
         isPaid: !1,
         numGuests: 5,
      },
      {
         created_at: N(-6, !0),
         startDate: N(-6),
         endDate: N(-4),
         cabinId: 5,
         guestId: 15,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 4,
      },
      {
         created_at: N(-4, !0),
         startDate: N(-4),
         endDate: N(-1),
         cabinId: 5,
         guestId: 16,
         hasBreakfast: !1,
         observations: "",
         isPaid: !0,
         numGuests: 6,
      },
      {
         created_at: N(-3, !0),
         startDate: N(0),
         endDate: N(11),
         cabinId: 6,
         guestId: 17,
         hasBreakfast: !1,
         observations:
            "We will be checking in late, around midnight. Hope that's okay :)",
         isPaid: !0,
         numGuests: 6,
      },
      {
         created_at: N(-16, !0),
         startDate: N(-16),
         endDate: N(-9),
         cabinId: 6,
         guestId: 18,
         hasBreakfast: !0,
         observations: "I will need a rollaway bed for one of the guests",
         isPaid: !0,
         numGuests: 4,
      },
      {
         created_at: N(-18, !0),
         startDate: N(-4),
         endDate: N(-1),
         cabinId: 6,
         guestId: 19,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 6,
      },
      {
         created_at: N(-2, !0),
         startDate: N(17),
         endDate: N(23),
         cabinId: 7,
         guestId: 20,
         hasBreakfast: !1,
         observations: "",
         isPaid: !1,
         numGuests: 8,
      },
      {
         created_at: N(-7, !0),
         startDate: N(40),
         endDate: N(50),
         cabinId: 7,
         guestId: 21,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 7,
      },
      {
         created_at: N(-55, !0),
         startDate: N(32),
         endDate: N(37),
         cabinId: 7,
         guestId: 22,
         hasBreakfast: !0,
         observations: "",
         isPaid: !0,
         numGuests: 6,
      },
      {
         created_at: N(-8, !0),
         startDate: N(-5),
         endDate: N(0),
         cabinId: 8,
         guestId: 1,
         hasBreakfast: !0,
         observations:
            "My wife has a gluten allergy so I would like to request a gluten-free breakfast if possible",
         isPaid: !0,
         numGuests: 9,
      },
      {
         created_at: N(0, !0),
         startDate: N(0),
         endDate: N(5),
         cabinId: 8,
         guestId: 23,
         hasBreakfast: !0,
         observations:
            "I am celebrating my anniversary, can you arrange for any special amenities or decorations?",
         isPaid: !0,
         numGuests: 10,
      },
      {
         created_at: N(-10, !0),
         startDate: N(10),
         endDate: N(13),
         cabinId: 8,
         guestId: 24,
         hasBreakfast: !1,
         observations: "",
         isPaid: !0,
         numGuests: 7,
      },
   ],
   Er = `${Da}/storage/v1/object/public/cabin-images/`,
   m0 = [
      {
         name: "001",
         maxCapacity: 2,
         regularPrice: 250,
         discount: 0,
         image: Er + "cabin-001.jpg",
         description:
            "Discover the ultimate luxury getaway for couples in the cozy wooden cabin 001. Nestled in a picturesque forest, this stunning cabin offers a secluded and intimate retreat. Inside, enjoy modern high-quality wood interiors, a comfortable seating area, a fireplace and a fully-equipped kitchen. The plush king-size bed, dressed in fine linens guarantees a peaceful nights sleep. Relax in the spa-like shower and unwind on the private deck with hot tub.",
      },
      {
         name: "002",
         maxCapacity: 2,
         regularPrice: 350,
         discount: 25,
         image: Er + "cabin-002.jpg",
         description:
            "Escape to the serenity of nature and indulge in luxury in our cozy cabin 002. Perfect for couples, this cabin offers a secluded and intimate retreat in the heart of a picturesque forest. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace and a fully-equipped kitchen. The luxurious bedroom features a plush king-size bed and spa-like shower. Relax on the private deck with hot tub and take in the beauty of nature.",
      },
      {
         name: "003",
         maxCapacity: 4,
         regularPrice: 300,
         discount: 0,
         image: Er + "cabin-003.jpg",
         description:
            "Experience luxury family living in our medium-sized wooden cabin 003. Perfect for families of up to 4 people, this cabin offers a comfortable and inviting space with all modern amenities. Inside, you will find warm and inviting interiors crafted from high-quality wood, a comfortable living area, a fireplace, and a fully-equipped kitchen. The bedrooms feature plush beds and spa-like bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
      },
      {
         name: "004",
         maxCapacity: 4,
         regularPrice: 500,
         discount: 50,
         image: Er + "cabin-004.jpg",
         description:
            "Indulge in the ultimate luxury family vacation in this medium-sized cabin 004. Designed for families of up to 4, this cabin offers a sumptuous retreat for the discerning traveler. Inside, the cabin boasts of opulent interiors crafted from the finest quality wood, a comfortable living area, a fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-inspired en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
      },
      {
         name: "005",
         maxCapacity: 6,
         regularPrice: 350,
         discount: 0,
         image: Er + "cabin-005.jpg",
         description:
            "Enjoy a comfortable and cozy getaway with your group or family in our spacious cabin 005. Designed to accommodate up to 6 people, this cabin offers a secluded retreat in the heart of nature. Inside, the cabin features warm and inviting interiors crafted from quality wood, a living area with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. Step outside to your private deck and take in the natural surroundings while relaxing in your own hot tub.",
      },
      {
         name: "006",
         maxCapacity: 6,
         regularPrice: 800,
         discount: 100,
         image: Er + "cabin-006.jpg",
         description:
            "Experience the epitome of luxury with your group or family in our spacious wooden cabin 006. Designed to comfortably accommodate up to 6 people, this cabin offers a lavish retreat in the heart of nature. Inside, the cabin features opulent interiors crafted from premium wood, a grand living area with fireplace, and a fully-equipped gourmet kitchen. The bedrooms are adorned with plush beds and spa-like en-suite bathrooms. Step outside to your private deck and soak in the natural surroundings while relaxing in your own hot tub.",
      },
      {
         name: "007",
         maxCapacity: 8,
         regularPrice: 600,
         discount: 100,
         image: Er + "cabin-007.jpg",
         description:
            "Accommodate your large group or multiple families in the spacious and grand wooden cabin 007. Designed to comfortably fit up to 8 people, this cabin offers a secluded retreat in the heart of beautiful forests and mountains. Inside, the cabin features warm and inviting interiors crafted from quality wood, multiple living areas with fireplace, and a fully-equipped kitchen. The bedrooms are comfortable and equipped with en-suite bathrooms. The cabin has a private deck with a hot tub and outdoor seating area, perfect for taking in the natural surroundings.",
      },
      {
         name: "008",
         maxCapacity: 10,
         regularPrice: 1400,
         discount: 0,
         image: Er + "cabin-008.jpg",
         description:
            "Experience the epitome of luxury and grandeur with your large group or multiple families in our grand cabin 008. This cabin offers a lavish retreat that caters to all your needs and desires. The cabin features an opulent design and boasts of high-end finishes, intricate details and the finest quality wood throughout. Inside, the cabin features multiple grand living areas with fireplaces, a formal dining area, and a gourmet kitchen that is a chef's dream. The bedrooms are designed for ultimate comfort and luxury, with plush beds and en-suite spa-inspired bathrooms. Step outside and immerse yourself in the beauty of nature from your private deck, featuring a luxurious hot tub and ample seating areas for ultimate relaxation and enjoyment.",
      },
   ],
   zC = [
      {
         fullName: "Jonas Schmedtmann",
         email: "hello@jonas.io",
         nationality: "Portugal",
         nationalID: "3525436345",
         countryFlag: "https://flagcdn.com/pt.svg",
      },
      {
         fullName: "Jonathan Smith",
         email: "johnsmith@test.eu",
         nationality: "Great Britain",
         nationalID: "4534593454",
         countryFlag: "https://flagcdn.com/gb.svg",
      },
      {
         fullName: "Jonatan Johansson",
         email: "jonatan@example.com",
         nationality: "Finland",
         nationalID: "9374074454",
         countryFlag: "https://flagcdn.com/fi.svg",
      },
      {
         fullName: "Jonas Mueller",
         email: "jonas@example.eu",
         nationality: "Germany",
         nationalID: "1233212288",
         countryFlag: "https://flagcdn.com/de.svg",
      },
      {
         fullName: "Jonas Anderson",
         email: "anderson@example.com",
         nationality: "Bolivia (Plurinational State of)",
         nationalID: "0988520146",
         countryFlag: "https://flagcdn.com/bo.svg",
      },
      {
         fullName: "Jonathan Williams",
         email: "jowi@gmail.com",
         nationality: "United States of America",
         nationalID: "633678543",
         countryFlag: "https://flagcdn.com/us.svg",
      },
      {
         fullName: "Emma Watson",
         email: "emma@gmail.com",
         nationality: "United Kingdom",
         nationalID: "1234578901",
         countryFlag: "https://flagcdn.com/gb.svg",
      },
      {
         fullName: "Mohammed Ali",
         email: "mohammedali@yahoo.com",
         nationality: "Egypt",
         nationalID: "987543210",
         countryFlag: "https://flagcdn.com/eg.svg",
      },
      {
         fullName: "Maria Rodriguez",
         email: "maria@gmail.com",
         nationality: "Spain",
         nationalID: "1098765321",
         countryFlag: "https://flagcdn.com/es.svg",
      },
      {
         fullName: "Li Mei",
         email: "li.mei@hotmail.com",
         nationality: "China",
         nationalID: "102934756",
         countryFlag: "https://flagcdn.com/cn.svg",
      },
      {
         fullName: "Khadija Ahmed",
         email: "khadija@gmail.com",
         nationality: "Sudan",
         nationalID: "1023457890",
         countryFlag: "https://flagcdn.com/sd.svg",
      },
      {
         fullName: "Gabriel Silva",
         email: "gabriel@gmail.com",
         nationality: "Brazil",
         nationalID: "109283465",
         countryFlag: "https://flagcdn.com/br.svg",
      },
      {
         fullName: "Maria Gomez",
         email: "maria@example.com",
         nationality: "Mexico",
         nationalID: "108765421",
         countryFlag: "https://flagcdn.com/mx.svg",
      },
      {
         fullName: "Ahmed Hassan",
         email: "ahmed@gmail.com",
         nationality: "Egypt",
         nationalID: "1077777777",
         countryFlag: "https://flagcdn.com/eg.svg",
      },
      {
         fullName: "John Doe",
         email: "johndoe@gmail.com",
         nationality: "United States",
         nationalID: "3245908744",
         countryFlag: "https://flagcdn.com/us.svg",
      },
      {
         fullName: "Fatima Ahmed",
         email: "fatima@example.com",
         nationality: "Pakistan",
         nationalID: "1089999363",
         countryFlag: "https://flagcdn.com/pk.svg",
      },
      {
         fullName: "David Smith",
         email: "david@gmail.com",
         nationality: "Australia",
         nationalID: "44450960283",
         countryFlag: "https://flagcdn.com/au.svg",
      },
      {
         fullName: "Marie Dupont",
         email: "marie@gmail.com",
         nationality: "France",
         nationalID: "06934233728",
         countryFlag: "https://flagcdn.com/fr.svg",
      },
      {
         fullName: "Ramesh Patel",
         email: "ramesh@gmail.com",
         nationality: "India",
         nationalID: "9875412303",
         countryFlag: "https://flagcdn.com/in.svg",
      },
      {
         fullName: "Fatimah Al-Sayed",
         email: "fatimah@gmail.com",
         nationality: "Kuwait",
         nationalID: "0123456789",
         countryFlag: "https://flagcdn.com/kw.svg",
      },
      {
         fullName: "Nina Williams",
         email: "nina@hotmail.com",
         nationality: "South Africa",
         nationalID: "2345678901",
         countryFlag: "https://flagcdn.com/za.svg",
      },
      {
         fullName: "Taro Tanaka",
         email: "taro@gmail.com",
         nationality: "Japan",
         nationalID: "3456789012",
         countryFlag: "https://flagcdn.com/jp.svg",
      },
      {
         fullName: "Abdul Rahman",
         email: "abdul@gmail.com",
         nationality: "Saudi Arabia",
         nationalID: "4567890123",
         countryFlag: "https://flagcdn.com/sa.svg",
      },
      {
         fullName: "Julie Nguyen",
         email: "julie@gmail.com",
         nationality: "Vietnam",
         nationalID: "5678901234",
         countryFlag: "https://flagcdn.com/vn.svg",
      },
      {
         fullName: "Sara Lee",
         email: "sara@gmail.com",
         nationality: "South Korea",
         nationalID: "6789012345",
         countryFlag: "https://flagcdn.com/kr.svg",
      },
      {
         fullName: "Carlos Gomez",
         email: "carlos@yahoo.com",
         nationality: "Colombia",
         nationalID: "7890123456",
         countryFlag: "https://flagcdn.com/co.svg",
      },
      {
         fullName: "Emma Brown",
         email: "emma@gmail.com",
         nationality: "Canada",
         nationalID: "8901234567",
         countryFlag: "https://flagcdn.com/ca.svg",
      },
      {
         fullName: "Juan Hernandez",
         email: "juan@yahoo.com",
         nationality: "Argentina",
         nationalID: "4343433333",
         countryFlag: "https://flagcdn.com/ar.svg",
      },
      {
         fullName: "Ibrahim Ahmed",
         email: "ibrahim@yahoo.com",
         nationality: "Nigeria",
         nationalID: "2345678009",
         countryFlag: "https://flagcdn.com/ng.svg",
      },
      {
         fullName: "Mei Chen",
         email: "mei@gmail.com",
         nationality: "Taiwan",
         nationalID: "3456117890",
         countryFlag: "https://flagcdn.com/tw.svg",
      },
   ];
async function BC() {
   const { error: e } = await we.from("guests").delete().gt("id", 0);
   e && console.log(e.message);
}
async function qC() {
   const { error: e } = await we.from("cabins").delete().gt("id", 0);
   e && console.log(e.message);
}
async function Sp() {
   const { error: e } = await we.from("bookings").delete().gt("id", 0);
   e && console.log(e.message);
}
async function VC() {
   const { error: e } = await we.from("guests").insert(zC);
   e && console.log(e.message);
}
async function WC() {
   const { error: e } = await we.from("cabins").insert(m0);
   e && console.log(e.message);
}
async function _p() {
   const { data: e } = await we.from("guests").select("id").order("id"),
      t = e.map((o) => o.id),
      { data: r } = await we.from("cabins").select("id").order("id"),
      n = r.map((o) => o.id),
      i = UC.map((o) => {
         const a = m0.at(o.cabinId - 1),
            l = FC(o.endDate, o.startDate),
            u = l * (a.regularPrice - a.discount),
            c = o.hasBreakfast ? l * 15 * o.numGuests : 0,
            d = u + c;
         let h;
         return (
            kp(new Date(o.endDate)) &&
               !ri(new Date(o.endDate)) &&
               (h = "checked-out"),
            (bp(new Date(o.startDate)) || ri(new Date(o.startDate))) &&
               (h = "unconfirmed"),
            (bp(new Date(o.endDate)) || ri(new Date(o.endDate))) &&
               kp(new Date(o.startDate)) &&
               !ri(new Date(o.startDate)) &&
               (h = "checked-in"),
            {
               ...o,
               numNights: l,
               cabinPrice: u,
               extrasPrice: c,
               totalPrice: d,
               guestId: t.at(o.guestId - 1),
               cabinId: n.at(o.cabinId - 1),
               status: h,
            }
         );
      });
   console.log(i);
   const { error: s } = await we.from("bookings").insert(i);
   s && console.log(s.message);
}
function HC() {
   const [e, t] = S.useState(!1);
   async function r() {
      t(!0),
         await Sp(),
         await BC(),
         await qC(),
         await VC(),
         await WC(),
         await _p(),
         t(!1);
   }
   async function n() {
      t(!0), await Sp(), await _p(), t(!1);
   }
   return f.jsxs("div", {
      style: {
         marginTop: "auto",
         backgroundColor: "#e0e7ff",
         padding: "8px",
         borderRadius: "5px",
         textAlign: "center",
         display: "flex",
         flexDirection: "column",
         gap: "8px",
      },
      children: [
         f.jsx("h3", { children: "SAMPLE DATA" }),
         f.jsx(qe, { onClick: r, disabled: e, children: "Upload ALL" }),
         f.jsx(qe, {
            onClick: n,
            disabled: e,
            children: "Upload bookings ONLY",
         }),
      ],
   });
}
const QC = I.aside`
   background-color: var(--color-grey-0);
   padding: 3.2rem 2.4rem;
   border-right: 1px solid var(--color-grey-100);
   grid-row: 1/ -1;
`;
function GC() {
   return f.jsxs(QC, {
      children: [f.jsx(s0, {}), f.jsx(B_, {}), f.jsx(HC, {})],
   });
}
const KC = I.div`
   display: grid;
   grid-template-columns: 26rem 1fr;
   grid-template-rows: auto 1fr;
   height: 100vh;
`,
   YC = I.main`
   background-color: var(--color-grey-50);
   padding: 4rem 4.8rem 6.4rem;
   overflow: scroll;
`,
   JC = I.div`
   max-width: 120rem;
   margin: 0 auto;
   display: flex;
   flex-direction: column;
   gap: 3.2rem;
`;
function XC() {
   return f.jsxs(KC, {
      children: [
         f.jsx(N_, {}),
         f.jsx(GC, {}),
         f.jsx(YC, { children: f.jsx(JC, { children: f.jsx(ux, {}) }) }),
      ],
   });
}
const ZC = hk`
:root {

  --color-brand-50: #eef2ff;
  --color-brand-100: #e0e7ff;
  --color-brand-200: #c7d2fe;
  --color-brand-500: #6366f1;
  --color-brand-600: #4f46e5;
  --color-brand-700: #4338ca;
  --color-brand-800: #3730a3;
  --color-brand-900: #312e81;

  --color-grey-0: #fff;
  --color-grey-50: #f9fafb;
  --color-grey-100: #f3f4f6;
  --color-grey-200: #e5e7eb;
  --color-grey-300: #d1d5db;
  --color-grey-400: #9ca3af;
  --color-grey-500: #6b7280;
  --color-grey-600: #4b5563;
  --color-grey-700: #374151;
  --color-grey-800: #1f2937;
  --color-grey-900: #111827;

  --color-blue-100: #e0f2fe;
  --color-blue-700: #0369a1;
  --color-green-100: #dcfce7;
  --color-green-700: #15803d;
  --color-yellow-100: #fef9c3;
  --color-yellow-700: #a16207;
  --color-silver-100: #e5e7eb;
  --color-silver-700: #374151;
  --color-indigo-100: #e0e7ff;
  --color-indigo-700: #4338ca;

  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;

  --backdrop-color: rgba(255, 255, 255, 0.1);

  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);

  --border-radius-tiny: 3px;
  --border-radius-sm: 5px;
  --border-radius-md: 7px;
  --border-radius-lg: 9px;

  --image-grayscale: 0;
  --image-opacity: 100%;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  color: var(--color-grey-700);

  transition: color 0.3s, background-color 0.3s;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;


  filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
}

/* FOR DARK MODE */

--color-grey-0: #18212f;
--color-grey-50: #111827;
--color-grey-100: #1f2937;
--color-grey-200: #374151;
--color-grey-300: #4b5563;
--color-grey-400: #6b7280;
--color-grey-500: #9ca3af;
--color-grey-600: #d1d5db;
--color-grey-700: #e5e7eb;
--color-grey-800: #f3f4f6;
--color-grey-900: #f9fafb;

--color-blue-100: #075985;
--color-blue-700: #e0f2fe;
--color-green-100: #166534;
--color-green-700: #dcfce7;
--color-yellow-100: #854d0e;
--color-yellow-700: #fef9c3;
--color-silver-100: #374151;
--color-silver-700: #f3f4f6;
--color-indigo-100: #3730a3;
--color-indigo-700: #e0e7ff;

--color-red-100: #fee2e2;
--color-red-700: #b91c1c;
--color-red-800: #991b1b;

--backdrop-color: rgba(0, 0, 0, 0.3);

--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
--shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
--shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);

--image-grayscale: 10%;
--image-opacity: 90%;


`,
   wt = I.h1`
   ${(e) =>
      e.as === "h1" &&
      Ae`
         font-size: 3rem;
         font-weight: 600;
      `}

   ${(e) =>
      e.as === "h2" &&
      Ae`
         font-size: 2rem;
         font-weight: 600;
      `}
    
    ${(e) =>
       e.as === "h3" &&
       Ae`
         font-size: 2rem;
         font-weight: 500;
      `}
    ${(e) =>
       e.as === "h4" &&
       Ae`
         font-size: 3rem;
         font-weight: 600;
         text-align: center;
      `}
    
  line-height: 1.4;
`,
   rr = I.div`
  display: flex;

  ${(e) =>
     e.type === "horizontal" &&
     Ae`
      justify-content: space-between;
      align-items: center;
    `}

  ${(e) =>
     e.type === "vertical" &&
     Ae`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;
rr.defaultProps = { type: "vertical" };
function eE() {
   return f.jsx(rr, {
      type: "horizontal",
      children: f.jsx(wt, { as: "h1", children: "Dashboard" }),
   });
}
function Yd() {
   const e = ir();
   return () => e(-1);
}
const tE = I.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`,
   rE = I.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;
function nE() {
   const e = Yd();
   return f.jsx(tE, {
      children: f.jsxs(rE, {
         children: [
            f.jsx(wt, {
               as: "h1",
               children: "The page you are looking for could not be found 😢",
            }),
            f.jsx("button", {
               onClick: e,
               size: "large",
               children: "← Go back",
            }),
         ],
      }),
   });
}
const Zs = I.form`
   ${(e) =>
      e.type === "regular" &&
      Ae`
         padding: 2.4rem 4rem;

         /* Box */
         background-color: var(--color-grey-0);
         border: 1px solid var(--color-grey-100);
         border-radius: var(--border-radius-md);
      `}

   ${(e) =>
      e.type === "modal" &&
      Ae`
         width: 80rem;
      `}
    
  overflow: hidden;
   font-size: 1.4rem;
`;
Zs.defaultProps = { type: "regular" };
const lt = I.input`
   border: 1px solid var(--color-grey-300);
   background-color: var(--color-grey-0);
   border-radius: var(--border-radius-sm);
   padding: 0.8rem 1.2rem;
   box-shadow: var(--shadow-sm);
`,
   iE = I.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`,
   sE = I.label`
  font-weight: 500;
`,
   oE = I.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function ou({ label: e, error: t, children: r }) {
   return f.jsxs(iE, {
      children: [
         e && f.jsx(sE, { htmlFor: r.props.id, children: e }),
         r,
         t && f.jsx(oE, { children: t }),
      ],
   });
}
let aE = { data: "" },
   lE = (e) =>
      typeof window == "object"
         ? (
              (e ? e.querySelector("#_goober") : window._goober) ||
              Object.assign(
                 (e || document.head).appendChild(
                    document.createElement("style")
                 ),
                 { innerHTML: " ", id: "_goober" }
              )
           ).firstChild
         : e || aE,
   uE = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
   cE = /\/\*[^]*?\*\/|  +/g,
   Cp = /\n+/g,
   Nr = (e, t) => {
      let r = "",
         n = "",
         i = "";
      for (let s in e) {
         let o = e[s];
         s[0] == "@"
            ? s[1] == "i"
               ? (r = s + " " + o + ";")
               : (n +=
                    s[1] == "f"
                       ? Nr(o, s)
                       : s + "{" + Nr(o, s[1] == "k" ? "" : t) + "}")
            : typeof o == "object"
            ? (n += Nr(
                 o,
                 t
                    ? t.replace(/([^,])+/g, (a) =>
                         s.replace(/(^:.*)|([^,])+/g, (l) =>
                            /&/.test(l)
                               ? l.replace(/&/g, a)
                               : a
                               ? a + " " + l
                               : l
                         )
                      )
                    : s
              ))
            : o != null &&
              ((s = /^--/.test(s)
                 ? s
                 : s.replace(/[A-Z]/g, "-$&").toLowerCase()),
              (i += Nr.p ? Nr.p(s, o) : s + ":" + o + ";"));
      }
      return r + (t && i ? t + "{" + i + "}" : i) + n;
   },
   sr = {},
   g0 = (e) => {
      if (typeof e == "object") {
         let t = "";
         for (let r in e) t += r + g0(e[r]);
         return t;
      }
      return e;
   },
   dE = (e, t, r, n, i) => {
      let s = g0(e),
         o =
            sr[s] ||
            (sr[s] = ((l) => {
               let u = 0,
                  c = 11;
               for (; u < l.length; ) c = (101 * c + l.charCodeAt(u++)) >>> 0;
               return "go" + c;
            })(s));
      if (!sr[o]) {
         let l =
            s !== e
               ? e
               : ((u) => {
                    let c,
                       d,
                       h = [{}];
                    for (; (c = uE.exec(u.replace(cE, ""))); )
                       c[4]
                          ? h.shift()
                          : c[3]
                          ? ((d = c[3].replace(Cp, " ").trim()),
                            h.unshift((h[0][d] = h[0][d] || {})))
                          : (h[0][c[1]] = c[2].replace(Cp, " ").trim());
                    return h[0];
                 })(e);
         sr[o] = Nr(i ? { ["@keyframes " + o]: l } : l, r ? "" : "." + o);
      }
      let a = r && sr.g ? sr.g : null;
      return (
         r && (sr.g = sr[o]),
         ((l, u, c, d) => {
            d
               ? (u.data = u.data.replace(d, l))
               : u.data.indexOf(l) === -1 &&
                 (u.data = c ? l + u.data : u.data + l);
         })(sr[o], t, n, a),
         o
      );
   },
   fE = (e, t, r) =>
      e.reduce((n, i, s) => {
         let o = t[s];
         if (o && o.call) {
            let a = o(r),
               l = (a && a.props && a.props.className) || (/^go/.test(a) && a);
            o = l
               ? "." + l
               : a && typeof a == "object"
               ? a.props
                  ? ""
                  : Nr(a, "")
               : a === !1
               ? ""
               : a;
         }
         return n + i + (o ?? "");
      }, "");
function hl(e) {
   let t = this || {},
      r = e.call ? e(t.p) : e;
   return dE(
      r.unshift
         ? r.raw
            ? fE(r, [].slice.call(arguments, 1), t.p)
            : r.reduce((n, i) => Object.assign(n, i && i.call ? i(t.p) : i), {})
         : r,
      lE(t.target),
      t.g,
      t.o,
      t.k
   );
}
let v0, Tc, jc;
hl.bind({ g: 1 });
let xr = hl.bind({ k: 1 });
function hE(e, t, r, n) {
   (Nr.p = t), (v0 = e), (Tc = r), (jc = n);
}
function rn(e, t) {
   let r = this || {};
   return function () {
      let n = arguments;
      function i(s, o) {
         let a = Object.assign({}, s),
            l = a.className || i.className;
         (r.p = Object.assign({ theme: Tc && Tc() }, a)),
            (r.o = / *go\d+/.test(l)),
            (a.className = hl.apply(r, n) + (l ? " " + l : "")),
            t && (a.ref = o);
         let u = e;
         return (
            e[0] && ((u = a.as || e), delete a.as),
            jc && u[0] && jc(a),
            v0(u, a)
         );
      }
      return t ? t(i) : i;
   };
}
var pE = (e) => typeof e == "function",
   Na = (e, t) => (pE(e) ? e(t) : e),
   mE = (() => {
      let e = 0;
      return () => (++e).toString();
   })(),
   y0 = (() => {
      let e;
      return () => {
         if (e === void 0 && typeof window < "u") {
            let t = matchMedia("(prefers-reduced-motion: reduce)");
            e = !t || t.matches;
         }
         return e;
      };
   })(),
   gE = 20,
   Wo = new Map(),
   vE = 1e3,
   Ep = (e) => {
      if (Wo.has(e)) return;
      let t = setTimeout(() => {
         Wo.delete(e), Rn({ type: 4, toastId: e });
      }, vE);
      Wo.set(e, t);
   },
   yE = (e) => {
      let t = Wo.get(e);
      t && clearTimeout(t);
   },
   Oc = (e, t) => {
      switch (t.type) {
         case 0:
            return { ...e, toasts: [t.toast, ...e.toasts].slice(0, gE) };
         case 1:
            return (
               t.toast.id && yE(t.toast.id),
               {
                  ...e,
                  toasts: e.toasts.map((s) =>
                     s.id === t.toast.id ? { ...s, ...t.toast } : s
                  ),
               }
            );
         case 2:
            let { toast: r } = t;
            return e.toasts.find((s) => s.id === r.id)
               ? Oc(e, { type: 1, toast: r })
               : Oc(e, { type: 0, toast: r });
         case 3:
            let { toastId: n } = t;
            return (
               n
                  ? Ep(n)
                  : e.toasts.forEach((s) => {
                       Ep(s.id);
                    }),
               {
                  ...e,
                  toasts: e.toasts.map((s) =>
                     s.id === n || n === void 0 ? { ...s, visible: !1 } : s
                  ),
               }
            );
         case 4:
            return t.toastId === void 0
               ? { ...e, toasts: [] }
               : { ...e, toasts: e.toasts.filter((s) => s.id !== t.toastId) };
         case 5:
            return { ...e, pausedAt: t.time };
         case 6:
            let i = t.time - (e.pausedAt || 0);
            return {
               ...e,
               pausedAt: void 0,
               toasts: e.toasts.map((s) => ({
                  ...s,
                  pauseDuration: s.pauseDuration + i,
               })),
            };
      }
   },
   Ho = [],
   Qo = { toasts: [], pausedAt: void 0 },
   Rn = (e) => {
      (Qo = Oc(Qo, e)),
         Ho.forEach((t) => {
            t(Qo);
         });
   },
   wE = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 },
   xE = (e = {}) => {
      let [t, r] = S.useState(Qo);
      S.useEffect(
         () => (
            Ho.push(r),
            () => {
               let i = Ho.indexOf(r);
               i > -1 && Ho.splice(i, 1);
            }
         ),
         [t]
      );
      let n = t.toasts.map((i) => {
         var s, o;
         return {
            ...e,
            ...e[i.type],
            ...i,
            duration:
               i.duration ||
               ((s = e[i.type]) == null ? void 0 : s.duration) ||
               (e == null ? void 0 : e.duration) ||
               wE[i.type],
            style: {
               ...e.style,
               ...((o = e[i.type]) == null ? void 0 : o.style),
               ...i.style,
            },
         };
      });
      return { ...t, toasts: n };
   },
   bE = (e, t = "blank", r) => ({
      createdAt: Date.now(),
      visible: !0,
      type: t,
      ariaProps: { role: "status", "aria-live": "polite" },
      message: e,
      pauseDuration: 0,
      ...r,
      id: (r == null ? void 0 : r.id) || mE(),
   }),
   eo = (e) => (t, r) => {
      let n = bE(t, e, r);
      return Rn({ type: 2, toast: n }), n.id;
   },
   ut = (e, t) => eo("blank")(e, t);
ut.error = eo("error");
ut.success = eo("success");
ut.loading = eo("loading");
ut.custom = eo("custom");
ut.dismiss = (e) => {
   Rn({ type: 3, toastId: e });
};
ut.remove = (e) => Rn({ type: 4, toastId: e });
ut.promise = (e, t, r) => {
   let n = ut.loading(t.loading, { ...r, ...(r == null ? void 0 : r.loading) });
   return (
      e
         .then(
            (i) => (
               ut.success(Na(t.success, i), {
                  id: n,
                  ...r,
                  ...(r == null ? void 0 : r.success),
               }),
               i
            )
         )
         .catch((i) => {
            ut.error(Na(t.error, i), {
               id: n,
               ...r,
               ...(r == null ? void 0 : r.error),
            });
         }),
      e
   );
};
var kE = (e, t) => {
      Rn({ type: 1, toast: { id: e, height: t } });
   },
   SE = () => {
      Rn({ type: 5, time: Date.now() });
   },
   _E = (e) => {
      let { toasts: t, pausedAt: r } = xE(e);
      S.useEffect(() => {
         if (r) return;
         let s = Date.now(),
            o = t.map((a) => {
               if (a.duration === 1 / 0) return;
               let l = (a.duration || 0) + a.pauseDuration - (s - a.createdAt);
               if (l < 0) {
                  a.visible && ut.dismiss(a.id);
                  return;
               }
               return setTimeout(() => ut.dismiss(a.id), l);
            });
         return () => {
            o.forEach((a) => a && clearTimeout(a));
         };
      }, [t, r]);
      let n = S.useCallback(() => {
            r && Rn({ type: 6, time: Date.now() });
         }, [r]),
         i = S.useCallback(
            (s, o) => {
               let {
                     reverseOrder: a = !1,
                     gutter: l = 8,
                     defaultPosition: u,
                  } = o || {},
                  c = t.filter(
                     (m) => (m.position || u) === (s.position || u) && m.height
                  ),
                  d = c.findIndex((m) => m.id === s.id),
                  h = c.filter((m, y) => y < d && m.visible).length;
               return c
                  .filter((m) => m.visible)
                  .slice(...(a ? [h + 1] : [0, h]))
                  .reduce((m, y) => m + (y.height || 0) + l, 0);
            },
            [t]
         );
      return {
         toasts: t,
         handlers: {
            updateHeight: kE,
            startPause: SE,
            endPause: n,
            calculateOffset: i,
         },
      };
   },
   CE = xr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
   EE = xr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
   PE = xr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
   TE = rn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${CE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${EE} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${PE} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
   jE = xr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
   OE = rn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${jE} 1s linear infinite;
`,
   DE = xr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
   RE = xr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
   IE = rn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${DE} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${RE} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
   $E = rn("div")`
  position: absolute;
`,
   NE = rn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
   LE = xr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
   AE = rn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${LE} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
   ME = ({ toast: e }) => {
      let { icon: t, type: r, iconTheme: n } = e;
      return t !== void 0
         ? typeof t == "string"
            ? S.createElement(AE, null, t)
            : t
         : r === "blank"
         ? null
         : S.createElement(
              NE,
              null,
              S.createElement(OE, { ...n }),
              r !== "loading" &&
                 S.createElement(
                    $E,
                    null,
                    r === "error"
                       ? S.createElement(TE, { ...n })
                       : S.createElement(IE, { ...n })
                 )
           );
   },
   FE = (e) => `
0% {transform: translate3d(0,${e * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
   UE = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e * -150}%,-1px) scale(.6); opacity:0;}
`,
   zE = "0%{opacity:0;} 100%{opacity:1;}",
   BE = "0%{opacity:1;} 100%{opacity:0;}",
   qE = rn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
   VE = rn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
   WE = (e, t) => {
      let r = e.includes("top") ? 1 : -1,
         [n, i] = y0() ? [zE, BE] : [FE(r), UE(r)];
      return {
         animation: t
            ? `${xr(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
            : `${xr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
      };
   },
   HE = S.memo(({ toast: e, position: t, style: r, children: n }) => {
      let i = e.height
            ? WE(e.position || t || "top-center", e.visible)
            : { opacity: 0 },
         s = S.createElement(ME, { toast: e }),
         o = S.createElement(VE, { ...e.ariaProps }, Na(e.message, e));
      return S.createElement(
         qE,
         { className: e.className, style: { ...i, ...r, ...e.style } },
         typeof n == "function"
            ? n({ icon: s, message: o })
            : S.createElement(S.Fragment, null, s, o)
      );
   });
hE(S.createElement);
var QE = ({
      id: e,
      className: t,
      style: r,
      onHeightUpdate: n,
      children: i,
   }) => {
      let s = S.useCallback(
         (o) => {
            if (o) {
               let a = () => {
                  let l = o.getBoundingClientRect().height;
                  n(e, l);
               };
               a(),
                  new MutationObserver(a).observe(o, {
                     subtree: !0,
                     childList: !0,
                     characterData: !0,
                  });
            }
         },
         [e, n]
      );
      return S.createElement("div", { ref: s, className: t, style: r }, i);
   },
   GE = (e, t) => {
      let r = e.includes("top"),
         n = r ? { top: 0 } : { bottom: 0 },
         i = e.includes("center")
            ? { justifyContent: "center" }
            : e.includes("right")
            ? { justifyContent: "flex-end" }
            : {};
      return {
         left: 0,
         right: 0,
         display: "flex",
         position: "absolute",
         transition: y0() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
         transform: `translateY(${t * (r ? 1 : -1)}px)`,
         ...n,
         ...i,
      };
   },
   KE = hl`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
   Eo = 16,
   YE = ({
      reverseOrder: e,
      position: t = "top-center",
      toastOptions: r,
      gutter: n,
      children: i,
      containerStyle: s,
      containerClassName: o,
   }) => {
      let { toasts: a, handlers: l } = _E(r);
      return S.createElement(
         "div",
         {
            style: {
               position: "fixed",
               zIndex: 9999,
               top: Eo,
               left: Eo,
               right: Eo,
               bottom: Eo,
               pointerEvents: "none",
               ...s,
            },
            className: o,
            onMouseEnter: l.startPause,
            onMouseLeave: l.endPause,
         },
         a.map((u) => {
            let c = u.position || t,
               d = l.calculateOffset(u, {
                  reverseOrder: e,
                  gutter: n,
                  defaultPosition: t,
               }),
               h = GE(c, d);
            return S.createElement(
               QE,
               {
                  id: u.id,
                  key: u.id,
                  onHeightUpdate: l.updateHeight,
                  className: u.visible ? KE : "",
                  style: h,
               },
               u.type === "custom"
                  ? Na(u.message, u)
                  : i
                  ? i(u)
                  : S.createElement(HE, { toast: u, position: c })
            );
         })
      );
   },
   Qt = ut;
function JE() {
   const e = ir(),
      t = It(),
      { mutate: r, isLoading: n } = kr({
         mutationFn: ({ email: i, password: s }) =>
            j_({ email: i, password: s }),
         onSuccess: (i) => {
            t.setQueryData(["user"], i.user), e("/dashboard", { replace: !0 });
         },
         onError: (i) => {
            console.log("ERROR", i),
               ut.error("Provided email or passwors are incorrect!");
         },
      });
   return { login: r, isLoading: n };
}
function XE() {
   const [e, t] = S.useState(""),
      [r, n] = S.useState(""),
      { login: i, isLoading: s } = JE();
   function o(a) {
      a.preventDefault(),
         !(!e || !r) &&
            i(
               { email: e, password: r },
               {
                  onSettled: () => {
                     t(""), n("");
                  },
               }
            );
   }
   return f.jsxs(Zs, {
      onSubmit: o,
      children: [
         f.jsx(ou, {
            label: "Email address",
            children: f.jsx(lt, {
               type: "email",
               id: "email",
               autoComplete: "username",
               value: e,
               onChange: (a) => t(a.target.value),
            }),
         }),
         f.jsx(ou, {
            label: "Password",
            children: f.jsx(lt, {
               type: "password",
               id: "password",
               autoComplete: "current-password",
               value: r,
               onChange: (a) => n(a.target.value),
            }),
         }),
         f.jsx(ou, {
            children: f.jsx(qe, { size: "large", children: "Login" }),
         }),
      ],
   });
}
const ZE = I.main`
   min-height: 100vh;
   display: grid;
   grid-template-columns: 48rem;
   align-content: center;
   justify-content: center;
   gap: 3.2rem;
   background-color: var(--color-grey-50);
`;
function eP() {
   return f.jsxs(ZE, {
      children: [
         f.jsx(s0, {}),
         f.jsx(wt, { as: "h4", children: "Log in to your account" }),
         f.jsx(XE, {}),
      ],
   });
}
function tP() {
   return f.jsxs(f.Fragment, {
      children: [
         f.jsx(wt, { as: "h1", children: "Update your account" }),
         f.jsxs(rr, {
            children: [
               f.jsx(wt, { as: "h3", children: "Update user data" }),
               f.jsx("p", { children: "Update user data form" }),
            ],
         }),
         f.jsxs(rr, {
            children: [
               f.jsx(wt, { as: "h3", children: "Update password" }),
               f.jsx("p", { children: "Update user password form" }),
            ],
         }),
      ],
   });
}
async function rP() {
   const { data: e, error: t } = await we.from("settings").select("*").single();
   if (t) throw (console.error(t), new Error("Settings could not be loaded"));
   return e;
}
async function nP(e) {
   const { data: t, error: r } = await we
      .from("settings")
      .update(e)
      .eq("id", 1)
      .single();
   if (r) throw (console.error(r), new Error("Settings could not be updated"));
   return t;
}
function w0() {
   const {
      isLoading: e,
      error: t,
      data: r,
   } = Ys({ queryKey: ["settings"], queryFn: rP });
   return { isLoading: e, error: t, settings: r };
}
const iP = I.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`,
   sP = I.label`
  font-weight: 500;
`,
   oP = I.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;
function fr({ label: e, error: t, children: r }) {
   return f.jsxs(iP, {
      children: [
         e && f.jsx(sP, { htmlFor: r.props.id, children: e }),
         r,
         t && f.jsx(oP, { children: t }),
      ],
   });
}
const aP = pk`
  to {
    transform: rotate(1turn)
  }
`,
   $i = I.div`
  margin: 4.8rem auto;

  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background: radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000)
      top/10px 10px no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 10px), #000 0);
  animation: ${aP} 1.5s infinite linear;
`;
async function lP() {
   const { data: e, error: t } = await we.from("cabins").select("*");
   if (t) throw new Error("Cabins could not be loaded");
   return e;
}
async function x0(e, t) {
   var u, c;
   const r =
         (c = (u = e.image) == null ? void 0 : u.startsWith) == null
            ? void 0
            : c.call(u, Da),
      n = `${Math.random()}-${e.image.name}`.replaceAll("/", ""),
      i = r ? e.image : `${Da}/storage/v1/object/public/cabins/${n}`;
   let s = we.from("cabins");
   t || (s = s.insert([{ ...e, image: i }])),
      t && (s = s.update({ ...e, image: i }).eq("id", t));
   const { data: o, error: a } = await s.select().single();
   if (a) throw (console.error(a), new Error("Cabin could not be created"));
   if (r) return o;
   const { error: l } = await we.storage.from("cabins").upload(n, e.image);
   if (l)
      throw (
         (await we.from("cabins").delete().eq("id", o.id),
         console.error(l),
         new Error(
            "Cabin image could not be uploaded and the cabin was not created"
         ))
      );
   return o;
}
async function uP(e) {
   const { error: t } = await we.from("cabins").delete().eq("id", e);
   if (t) throw new Error("Cabins could not be deleted");
}
function cP() {
   const e = It(),
      { mutate: t, isLoading: r } = kr({
         mutationFn: nP,
         onSuccess: () => {
            Qt.success("Settings successfully updated"),
               e.invalidateQueries({ queryKey: ["settings"] });
         },
      });
   return { updateSettings: t, isUpdating: r };
}
function dP() {
   const {
         isLoading: e,
         settings: {
            minBookingLength: t,
            maxBookingLength: r,
            maxGuestsPerBooking: n,
            breakfastPrice: i,
         } = {},
      } = w0(),
      { updateSettings: s, isUpdating: o } = cP();
   function a(l, u) {
      console.log(u);
      const { value: c } = l.target;
      c && s({ [u]: c });
   }
   return e
      ? f.jsx($i, {})
      : f.jsxs(Zs, {
           children: [
              f.jsx(fr, {
                 label: "Minimum nights/booking",
                 children: f.jsx(lt, {
                    type: "number",
                    id: "min-nights",
                    defaultValue: t,
                    onBlur: (l) => a(l, "minBookingLength"),
                 }),
              }),
              f.jsx(fr, {
                 label: "Maximum nights/booking",
                 children: f.jsx(lt, {
                    type: "number",
                    id: "max-nights",
                    defaultValue: r,
                    onBlur: (l) => a(l, "maxBookingLength"),
                 }),
              }),
              f.jsx(fr, {
                 label: "Maximum guests/booking",
                 children: f.jsx(lt, {
                    type: "number",
                    id: "max-guests",
                    defaultValue: n,
                    onBlur: (l) => a(l, "maxGuestsPerBooking"),
                 }),
              }),
              f.jsx(fr, {
                 label: "Breakfast price",
                 children: f.jsx(lt, {
                    type: "number",
                    id: "breakfast-price",
                    defaultValue: i,
                    onBlur: (l) => a(l, "breakfastPrice"),
                 }),
              }),
           ],
        });
}
function fP() {
   return f.jsxs(rr, {
      children: [
         f.jsx(wt, { as: "h1", children: "Update hotel settings" }),
         f.jsx(dP, {}),
      ],
   });
}
var to = (e) => e.type === "checkbox",
   ni = (e) => e instanceof Date,
   rt = (e) => e == null;
const b0 = (e) => typeof e == "object";
var Ie = (e) => !rt(e) && !Array.isArray(e) && b0(e) && !ni(e),
   hP = (e) =>
      Ie(e) && e.target
         ? to(e.target)
            ? e.target.checked
            : e.target.value
         : e,
   pP = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
   mP = (e, t) => e.has(pP(t)),
   gP = (e) => {
      const t = e.constructor && e.constructor.prototype;
      return Ie(t) && t.hasOwnProperty("isPrototypeOf");
   },
   Jd =
      typeof window < "u" &&
      typeof window.HTMLElement < "u" &&
      typeof document < "u";
function lr(e) {
   let t;
   const r = Array.isArray(e);
   if (e instanceof Date) t = new Date(e);
   else if (e instanceof Set) t = new Set(e);
   else if (
      !(Jd && (e instanceof Blob || e instanceof FileList)) &&
      (r || Ie(e))
   )
      if (((t = r ? [] : {}), !r && !gP(e))) t = e;
      else for (const n in e) e.hasOwnProperty(n) && (t[n] = lr(e[n]));
   else return e;
   return t;
}
var ro = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
   Pe = (e) => e === void 0,
   A = (e, t, r) => {
      if (!t || !Ie(e)) return r;
      const n = ro(t.split(/[,[\].]+?/)).reduce(
         (i, s) => (rt(i) ? i : i[s]),
         e
      );
      return Pe(n) || n === e ? (Pe(e[t]) ? r : e[t]) : n;
   },
   yn = (e) => typeof e == "boolean";
const Pp = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
   Bt = {
      onBlur: "onBlur",
      onChange: "onChange",
      onSubmit: "onSubmit",
      onTouched: "onTouched",
      all: "all",
   },
   or = {
      max: "max",
      min: "min",
      maxLength: "maxLength",
      minLength: "minLength",
      pattern: "pattern",
      required: "required",
      validate: "validate",
   };
ue.createContext(null);
var vP = (e, t, r, n = !0) => {
      const i = { defaultValues: t._defaultValues };
      for (const s in e)
         Object.defineProperty(i, s, {
            get: () => {
               const o = s;
               return (
                  t._proxyFormState[o] !== Bt.all &&
                     (t._proxyFormState[o] = !n || Bt.all),
                  r && (r[o] = !0),
                  e[o]
               );
            },
         });
      return i;
   },
   Ct = (e) => Ie(e) && !Object.keys(e).length,
   yP = (e, t, r, n) => {
      r(e);
      const { name: i, ...s } = e;
      return (
         Ct(s) ||
         Object.keys(s).length >= Object.keys(t).length ||
         Object.keys(s).find((o) => t[o] === (!n || Bt.all))
      );
   },
   au = (e) => (Array.isArray(e) ? e : [e]);
function wP(e) {
   const t = ue.useRef(e);
   (t.current = e),
      ue.useEffect(() => {
         const r =
            !e.disabled &&
            t.current.subject &&
            t.current.subject.subscribe({ next: t.current.next });
         return () => {
            r && r.unsubscribe();
         };
      }, [e.disabled]);
}
var Zt = (e) => typeof e == "string",
   xP = (e, t, r, n, i) =>
      Zt(e)
         ? (n && t.watch.add(e), A(r, e, i))
         : Array.isArray(e)
         ? e.map((s) => (n && t.watch.add(s), A(r, s)))
         : (n && (t.watchAll = !0), r),
   Xd = (e) => /^\w*$/.test(e),
   k0 = (e) => ro(e.replace(/["|']|\]/g, "").split(/\.|\[/));
function me(e, t, r) {
   let n = -1;
   const i = Xd(t) ? [t] : k0(t),
      s = i.length,
      o = s - 1;
   for (; ++n < s; ) {
      const a = i[n];
      let l = r;
      if (n !== o) {
         const u = e[a];
         l = Ie(u) || Array.isArray(u) ? u : isNaN(+i[n + 1]) ? {} : [];
      }
      (e[a] = l), (e = e[a]);
   }
   return e;
}
var bP = (e, t, r, n, i) =>
   t
      ? {
           ...r[e],
           types: { ...(r[e] && r[e].types ? r[e].types : {}), [n]: i || !0 },
        }
      : {};
const Dc = (e, t, r) => {
   for (const n of r || Object.keys(e)) {
      const i = A(e, n);
      if (i) {
         const { _f: s, ...o } = i;
         if (s && t(s.name)) {
            if (s.ref.focus) {
               s.ref.focus();
               break;
            } else if (s.refs && s.refs[0].focus) {
               s.refs[0].focus();
               break;
            }
         } else Ie(o) && Dc(o, t);
      }
   }
};
var Tp = (e) => ({
      isOnSubmit: !e || e === Bt.onSubmit,
      isOnBlur: e === Bt.onBlur,
      isOnChange: e === Bt.onChange,
      isOnAll: e === Bt.all,
      isOnTouch: e === Bt.onTouched,
   }),
   jp = (e, t, r) =>
      !r &&
      (t.watchAll ||
         t.watch.has(e) ||
         [...t.watch].some(
            (n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))
         )),
   kP = (e, t, r) => {
      const n = ro(A(e, r));
      return me(n, "root", t[r]), me(e, r, n), e;
   },
   Zd = (e) => e.type === "file",
   Fr = (e) => typeof e == "function",
   La = (e) => {
      if (!Jd) return !1;
      const t = e ? e.ownerDocument : 0;
      return (
         e instanceof
         (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
      );
   },
   Go = (e) => Zt(e),
   ef = (e) => e.type === "radio",
   Aa = (e) => e instanceof RegExp;
const Op = { value: !1, isValid: !1 },
   Dp = { value: !0, isValid: !0 };
var S0 = (e) => {
   if (Array.isArray(e)) {
      if (e.length > 1) {
         const t = e
            .filter((r) => r && r.checked && !r.disabled)
            .map((r) => r.value);
         return { value: t, isValid: !!t.length };
      }
      return e[0].checked && !e[0].disabled
         ? e[0].attributes && !Pe(e[0].attributes.value)
            ? Pe(e[0].value) || e[0].value === ""
               ? Dp
               : { value: e[0].value, isValid: !0 }
            : Dp
         : Op;
   }
   return Op;
};
const Rp = { isValid: !1, value: null };
var _0 = (e) =>
   Array.isArray(e)
      ? e.reduce(
           (t, r) =>
              r && r.checked && !r.disabled
                 ? { isValid: !0, value: r.value }
                 : t,
           Rp
        )
      : Rp;
function Ip(e, t, r = "validate") {
   if (Go(e) || (Array.isArray(e) && e.every(Go)) || (yn(e) && !e))
      return { type: r, message: Go(e) ? e : "", ref: t };
}
var Un = (e) => (Ie(e) && !Aa(e) ? e : { value: e, message: "" }),
   $p = async (e, t, r, n, i) => {
      const {
            ref: s,
            refs: o,
            required: a,
            maxLength: l,
            minLength: u,
            min: c,
            max: d,
            pattern: h,
            validate: m,
            name: y,
            valueAsNumber: w,
            mount: k,
            disabled: g,
         } = e._f,
         p = A(t, y);
      if (!k || g) return {};
      const v = o ? o[0] : s,
         b = (W) => {
            n &&
               v.reportValidity &&
               (v.setCustomValidity(yn(W) ? "" : W || ""), v.reportValidity());
         },
         _ = {},
         P = ef(s),
         C = to(s),
         j = P || C,
         U =
            ((w || Zd(s)) && Pe(s.value) && Pe(p)) ||
            (La(s) && s.value === "") ||
            p === "" ||
            (Array.isArray(p) && !p.length),
         F = bP.bind(null, y, r, _),
         te = (W, V, se, X = or.maxLength, re = or.minLength) => {
            const oe = W ? V : se;
            _[y] = {
               type: W ? X : re,
               message: oe,
               ref: s,
               ...F(W ? X : re, oe),
            };
         };
      if (
         i
            ? !Array.isArray(p) || !p.length
            : a &&
              ((!j && (U || rt(p))) ||
                 (yn(p) && !p) ||
                 (C && !S0(o).isValid) ||
                 (P && !_0(o).isValid))
      ) {
         const { value: W, message: V } = Go(a)
            ? { value: !!a, message: a }
            : Un(a);
         if (
            W &&
            ((_[y] = {
               type: or.required,
               message: V,
               ref: v,
               ...F(or.required, V),
            }),
            !r)
         )
            return b(V), _;
      }
      if (!U && (!rt(c) || !rt(d))) {
         let W, V;
         const se = Un(d),
            X = Un(c);
         if (!rt(p) && !isNaN(p)) {
            const re = s.valueAsNumber || (p && +p);
            rt(se.value) || (W = re > se.value),
               rt(X.value) || (V = re < X.value);
         } else {
            const re = s.valueAsDate || new Date(p),
               oe = (B) => new Date(new Date().toDateString() + " " + B),
               R = s.type == "time",
               z = s.type == "week";
            Zt(se.value) &&
               p &&
               (W = R
                  ? oe(p) > oe(se.value)
                  : z
                  ? p > se.value
                  : re > new Date(se.value)),
               Zt(X.value) &&
                  p &&
                  (V = R
                     ? oe(p) < oe(X.value)
                     : z
                     ? p < X.value
                     : re < new Date(X.value));
         }
         if ((W || V) && (te(!!W, se.message, X.message, or.max, or.min), !r))
            return b(_[y].message), _;
      }
      if ((l || u) && !U && (Zt(p) || (i && Array.isArray(p)))) {
         const W = Un(l),
            V = Un(u),
            se = !rt(W.value) && p.length > +W.value,
            X = !rt(V.value) && p.length < +V.value;
         if ((se || X) && (te(se, W.message, V.message), !r))
            return b(_[y].message), _;
      }
      if (h && !U && Zt(p)) {
         const { value: W, message: V } = Un(h);
         if (
            Aa(W) &&
            !p.match(W) &&
            ((_[y] = {
               type: or.pattern,
               message: V,
               ref: s,
               ...F(or.pattern, V),
            }),
            !r)
         )
            return b(V), _;
      }
      if (m) {
         if (Fr(m)) {
            const W = await m(p, t),
               V = Ip(W, v);
            if (V && ((_[y] = { ...V, ...F(or.validate, V.message) }), !r))
               return b(V.message), _;
         } else if (Ie(m)) {
            let W = {};
            for (const V in m) {
               if (!Ct(W) && !r) break;
               const se = Ip(await m[V](p, t), v, V);
               se &&
                  ((W = { ...se, ...F(V, se.message) }),
                  b(se.message),
                  r && (_[y] = W));
            }
            if (!Ct(W) && ((_[y] = { ref: v, ...W }), !r)) return _;
         }
      }
      return b(!0), _;
   };
function SP(e, t) {
   const r = t.slice(0, -1).length;
   let n = 0;
   for (; n < r; ) e = Pe(e) ? n++ : e[t[n++]];
   return e;
}
function _P(e) {
   for (const t in e) if (e.hasOwnProperty(t) && !Pe(e[t])) return !1;
   return !0;
}
function Ue(e, t) {
   const r = Array.isArray(t) ? t : Xd(t) ? [t] : k0(t),
      n = r.length === 1 ? e : SP(e, r),
      i = r.length - 1,
      s = r[i];
   return (
      n && delete n[s],
      i !== 0 &&
         ((Ie(n) && Ct(n)) || (Array.isArray(n) && _P(n))) &&
         Ue(e, r.slice(0, -1)),
      e
   );
}
function lu() {
   let e = [];
   return {
      get observers() {
         return e;
      },
      next: (i) => {
         for (const s of e) s.next && s.next(i);
      },
      subscribe: (i) => (
         e.push(i),
         {
            unsubscribe: () => {
               e = e.filter((s) => s !== i);
            },
         }
      ),
      unsubscribe: () => {
         e = [];
      },
   };
}
var Ma = (e) => rt(e) || !b0(e);
function wn(e, t) {
   if (Ma(e) || Ma(t)) return e === t;
   if (ni(e) && ni(t)) return e.getTime() === t.getTime();
   const r = Object.keys(e),
      n = Object.keys(t);
   if (r.length !== n.length) return !1;
   for (const i of r) {
      const s = e[i];
      if (!n.includes(i)) return !1;
      if (i !== "ref") {
         const o = t[i];
         if (
            (ni(s) && ni(o)) ||
            (Ie(s) && Ie(o)) ||
            (Array.isArray(s) && Array.isArray(o))
               ? !wn(s, o)
               : s !== o
         )
            return !1;
      }
   }
   return !0;
}
var C0 = (e) => e.type === "select-multiple",
   CP = (e) => ef(e) || to(e),
   uu = (e) => La(e) && e.isConnected,
   E0 = (e) => {
      for (const t in e) if (Fr(e[t])) return !0;
      return !1;
   };
function Fa(e, t = {}) {
   const r = Array.isArray(e);
   if (Ie(e) || r)
      for (const n in e)
         Array.isArray(e[n]) || (Ie(e[n]) && !E0(e[n]))
            ? ((t[n] = Array.isArray(e[n]) ? [] : {}), Fa(e[n], t[n]))
            : rt(e[n]) || (t[n] = !0);
   return t;
}
function P0(e, t, r) {
   const n = Array.isArray(e);
   if (Ie(e) || n)
      for (const i in e)
         Array.isArray(e[i]) || (Ie(e[i]) && !E0(e[i]))
            ? Pe(t) || Ma(r[i])
               ? (r[i] = Array.isArray(e[i]) ? Fa(e[i], []) : { ...Fa(e[i]) })
               : P0(e[i], rt(t) ? {} : t[i], r[i])
            : (r[i] = !wn(e[i], t[i]));
   return r;
}
var cu = (e, t) => P0(e, t, Fa(t)),
   T0 = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) =>
      Pe(e)
         ? e
         : t
         ? e === ""
            ? NaN
            : e && +e
         : r && Zt(e)
         ? new Date(e)
         : n
         ? n(e)
         : e;
function du(e) {
   const t = e.ref;
   if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
      return Zd(t)
         ? t.files
         : ef(t)
         ? _0(e.refs).value
         : C0(t)
         ? [...t.selectedOptions].map(({ value: r }) => r)
         : to(t)
         ? S0(e.refs).value
         : T0(Pe(t.value) ? e.ref.value : t.value, e);
}
var EP = (e, t, r, n) => {
      const i = {};
      for (const s of e) {
         const o = A(t, s);
         o && me(i, s, o._f);
      }
      return {
         criteriaMode: r,
         names: [...e],
         fields: i,
         shouldUseNativeValidation: n,
      };
   },
   Yi = (e) =>
      Pe(e)
         ? e
         : Aa(e)
         ? e.source
         : Ie(e)
         ? Aa(e.value)
            ? e.value.source
            : e.value
         : e,
   PP = (e) =>
      e.mount &&
      (e.required ||
         e.min ||
         e.max ||
         e.maxLength ||
         e.minLength ||
         e.pattern ||
         e.validate);
function Np(e, t, r) {
   const n = A(e, r);
   if (n || Xd(r)) return { error: n, name: r };
   const i = r.split(".");
   for (; i.length; ) {
      const s = i.join("."),
         o = A(t, s),
         a = A(e, s);
      if (o && !Array.isArray(o) && r !== s) return { name: r };
      if (a && a.type) return { name: s, error: a };
      i.pop();
   }
   return { name: r };
}
var TP = (e, t, r, n, i) =>
      i.isOnAll
         ? !1
         : !r && i.isOnTouch
         ? !(t || e)
         : (r ? n.isOnBlur : i.isOnBlur)
         ? !e
         : (r ? n.isOnChange : i.isOnChange)
         ? e
         : !0,
   jP = (e, t) => !ro(A(e, t)).length && Ue(e, t);
const OP = {
   mode: Bt.onSubmit,
   reValidateMode: Bt.onChange,
   shouldFocusError: !0,
};
function DP(e = {}, t) {
   let r = { ...OP, ...e },
      n = {
         submitCount: 0,
         isDirty: !1,
         isLoading: Fr(r.defaultValues),
         isValidating: !1,
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         touchedFields: {},
         dirtyFields: {},
         errors: {},
      },
      i = {},
      s =
         Ie(r.defaultValues) || Ie(r.values)
            ? lr(r.defaultValues || r.values) || {}
            : {},
      o = r.shouldUnregister ? {} : lr(s),
      a = { action: !1, mount: !1, watch: !1 },
      l = {
         mount: new Set(),
         unMount: new Set(),
         array: new Set(),
         watch: new Set(),
      },
      u,
      c = 0;
   const d = {
         isDirty: !1,
         dirtyFields: !1,
         touchedFields: !1,
         isValidating: !1,
         isValid: !1,
         errors: !1,
      },
      h = { values: lu(), array: lu(), state: lu() },
      m = e.resetOptions && e.resetOptions.keepDirtyValues,
      y = Tp(r.mode),
      w = Tp(r.reValidateMode),
      k = r.criteriaMode === Bt.all,
      g = (x) => (E) => {
         clearTimeout(c), (c = setTimeout(x, E));
      },
      p = async (x) => {
         if (d.isValid || x) {
            const E = r.resolver ? Ct((await U()).errors) : await te(i, !0);
            E !== n.isValid && h.state.next({ isValid: E });
         }
      },
      v = (x) => d.isValidating && h.state.next({ isValidating: x }),
      b = (x, E = [], T, M, $ = !0, D = !0) => {
         if (M && T) {
            if (((a.action = !0), D && Array.isArray(A(i, x)))) {
               const q = T(A(i, x), M.argA, M.argB);
               $ && me(i, x, q);
            }
            if (D && Array.isArray(A(n.errors, x))) {
               const q = T(A(n.errors, x), M.argA, M.argB);
               $ && me(n.errors, x, q), jP(n.errors, x);
            }
            if (d.touchedFields && D && Array.isArray(A(n.touchedFields, x))) {
               const q = T(A(n.touchedFields, x), M.argA, M.argB);
               $ && me(n.touchedFields, x, q);
            }
            d.dirtyFields && (n.dirtyFields = cu(s, o)),
               h.state.next({
                  name: x,
                  isDirty: V(x, E),
                  dirtyFields: n.dirtyFields,
                  errors: n.errors,
                  isValid: n.isValid,
               });
         } else me(o, x, E);
      },
      _ = (x, E) => {
         me(n.errors, x, E), h.state.next({ errors: n.errors });
      },
      P = (x, E, T, M) => {
         const $ = A(i, x);
         if ($) {
            const D = A(o, x, Pe(T) ? A(s, x) : T);
            Pe(D) || (M && M.defaultChecked) || E
               ? me(o, x, E ? D : du($._f))
               : re(x, D),
               a.mount && p();
         }
      },
      C = (x, E, T, M, $) => {
         let D = !1,
            q = !1;
         const be = { name: x };
         if (!T || M) {
            d.isDirty &&
               ((q = n.isDirty),
               (n.isDirty = be.isDirty = V()),
               (D = q !== be.isDirty));
            const _e = wn(A(s, x), E);
            (q = A(n.dirtyFields, x)),
               _e ? Ue(n.dirtyFields, x) : me(n.dirtyFields, x, !0),
               (be.dirtyFields = n.dirtyFields),
               (D = D || (d.dirtyFields && q !== !_e));
         }
         if (T) {
            const _e = A(n.touchedFields, x);
            _e ||
               (me(n.touchedFields, x, T),
               (be.touchedFields = n.touchedFields),
               (D = D || (d.touchedFields && _e !== T)));
         }
         return D && $ && h.state.next(be), D ? be : {};
      },
      j = (x, E, T, M) => {
         const $ = A(n.errors, x),
            D = d.isValid && yn(E) && n.isValid !== E;
         if (
            (e.delayError && T
               ? ((u = g(() => _(x, T))), u(e.delayError))
               : (clearTimeout(c),
                 (u = null),
                 T ? me(n.errors, x, T) : Ue(n.errors, x)),
            (T ? !wn($, T) : $) || !Ct(M) || D)
         ) {
            const q = {
               ...M,
               ...(D && yn(E) ? { isValid: E } : {}),
               errors: n.errors,
               name: x,
            };
            (n = { ...n, ...q }), h.state.next(q);
         }
         v(!1);
      },
      U = async (x) =>
         r.resolver(
            o,
            r.context,
            EP(x || l.mount, i, r.criteriaMode, r.shouldUseNativeValidation)
         ),
      F = async (x) => {
         const { errors: E } = await U(x);
         if (x)
            for (const T of x) {
               const M = A(E, T);
               M ? me(n.errors, T, M) : Ue(n.errors, T);
            }
         else n.errors = E;
         return E;
      },
      te = async (x, E, T = { valid: !0 }) => {
         for (const M in x) {
            const $ = x[M];
            if ($) {
               const { _f: D, ...q } = $;
               if (D) {
                  const be = l.array.has(D.name),
                     _e = await $p(
                        $,
                        o,
                        k,
                        r.shouldUseNativeValidation && !E,
                        be
                     );
                  if (_e[D.name] && ((T.valid = !1), E)) break;
                  !E &&
                     (A(_e, D.name)
                        ? be
                           ? kP(n.errors, _e, D.name)
                           : me(n.errors, D.name, _e[D.name])
                        : Ue(n.errors, D.name));
               }
               q && (await te(q, E, T));
            }
         }
         return T.valid;
      },
      W = () => {
         for (const x of l.unMount) {
            const E = A(i, x);
            E &&
               (E._f.refs ? E._f.refs.every((T) => !uu(T)) : !uu(E._f.ref)) &&
               Fe(x);
         }
         l.unMount = new Set();
      },
      V = (x, E) => (x && E && me(o, x, E), !wn(ae(), s)),
      se = (x, E, T) =>
         xP(
            x,
            l,
            { ...(a.mount ? o : Pe(E) ? s : Zt(x) ? { [x]: E } : E) },
            T,
            E
         ),
      X = (x) =>
         ro(A(a.mount ? o : s, x, e.shouldUnregister ? A(s, x, []) : [])),
      re = (x, E, T = {}) => {
         const M = A(i, x);
         let $ = E;
         if (M) {
            const D = M._f;
            D &&
               (!D.disabled && me(o, x, T0(E, D)),
               ($ = La(D.ref) && rt(E) ? "" : E),
               C0(D.ref)
                  ? [...D.ref.options].forEach(
                       (q) => (q.selected = $.includes(q.value))
                    )
                  : D.refs
                  ? to(D.ref)
                     ? D.refs.length > 1
                        ? D.refs.forEach(
                             (q) =>
                                (!q.defaultChecked || !q.disabled) &&
                                (q.checked = Array.isArray($)
                                   ? !!$.find((be) => be === q.value)
                                   : $ === q.value)
                          )
                        : D.refs[0] && (D.refs[0].checked = !!$)
                     : D.refs.forEach((q) => (q.checked = q.value === $))
                  : Zd(D.ref)
                  ? (D.ref.value = "")
                  : ((D.ref.value = $),
                    D.ref.type ||
                       h.values.next({ name: x, values: { ...o } })));
         }
         (T.shouldDirty || T.shouldTouch) &&
            C(x, $, T.shouldTouch, T.shouldDirty, !0),
            T.shouldValidate && B(x);
      },
      oe = (x, E, T) => {
         for (const M in E) {
            const $ = E[M],
               D = `${x}.${M}`,
               q = A(i, D);
            (l.array.has(x) || !Ma($) || (q && !q._f)) && !ni($)
               ? oe(D, $, T)
               : re(D, $, T);
         }
      },
      R = (x, E, T = {}) => {
         const M = A(i, x),
            $ = l.array.has(x),
            D = lr(E);
         me(o, x, D),
            $
               ? (h.array.next({ name: x, values: { ...o } }),
                 (d.isDirty || d.dirtyFields) &&
                    T.shouldDirty &&
                    h.state.next({
                       name: x,
                       dirtyFields: cu(s, o),
                       isDirty: V(x, D),
                    }))
               : M && !M._f && !rt(D)
               ? oe(x, D, T)
               : re(x, D, T),
            jp(x, l) && h.state.next({ ...n }),
            h.values.next({ name: x, values: { ...o } }),
            !a.mount && t();
      },
      z = async (x) => {
         const E = x.target;
         let T = E.name,
            M = !0;
         const $ = A(i, T),
            D = () => (E.type ? du($._f) : hP(x));
         if ($) {
            let q, be;
            const _e = D(),
               In = x.type === Pp.BLUR || x.type === Pp.FOCUS_OUT,
               H0 =
                  (!PP($._f) && !r.resolver && !A(n.errors, T) && !$._f.deps) ||
                  TP(In, A(n.touchedFields, T), n.isSubmitted, w, y),
               ml = jp(T, l, In);
            me(o, T, _e),
               In
                  ? ($._f.onBlur && $._f.onBlur(x), u && u(0))
                  : $._f.onChange && $._f.onChange(x);
            const gl = C(T, _e, In, !1),
               Q0 = !Ct(gl) || ml;
            if (
               (!In &&
                  h.values.next({ name: T, type: x.type, values: { ...o } }),
               H0)
            )
               return (
                  d.isValid && p(),
                  Q0 && h.state.next({ name: T, ...(ml ? {} : gl) })
               );
            if ((!In && ml && h.state.next({ ...n }), v(!0), r.resolver)) {
               const { errors: lf } = await U([T]),
                  G0 = Np(n.errors, i, T),
                  uf = Np(lf, i, G0.name || T);
               (q = uf.error), (T = uf.name), (be = Ct(lf));
            } else
               (q = (await $p($, o, k, r.shouldUseNativeValidation))[T]),
                  (M = Number.isNaN(_e) || _e === A(o, T, _e)),
                  M && (q ? (be = !1) : d.isValid && (be = await te(i, !0)));
            M && ($._f.deps && B($._f.deps), j(T, be, q, gl));
         }
      },
      B = async (x, E = {}) => {
         let T, M;
         const $ = au(x);
         if ((v(!0), r.resolver)) {
            const D = await F(Pe(x) ? x : $);
            (T = Ct(D)), (M = x ? !$.some((q) => A(D, q)) : T);
         } else
            x
               ? ((M = (
                    await Promise.all(
                       $.map(async (D) => {
                          const q = A(i, D);
                          return await te(q && q._f ? { [D]: q } : q);
                       })
                    )
                 ).every(Boolean)),
                 !(!M && !n.isValid) && p())
               : (M = T = await te(i));
         return (
            h.state.next({
               ...(!Zt(x) || (d.isValid && T !== n.isValid) ? {} : { name: x }),
               ...(r.resolver || !x ? { isValid: T } : {}),
               errors: n.errors,
               isValidating: !1,
            }),
            E.shouldFocus &&
               !M &&
               Dc(i, (D) => D && A(n.errors, D), x ? $ : l.mount),
            M
         );
      },
      ae = (x) => {
         const E = { ...s, ...(a.mount ? o : {}) };
         return Pe(x) ? E : Zt(x) ? A(E, x) : x.map((T) => A(E, T));
      },
      de = (x, E) => ({
         invalid: !!A((E || n).errors, x),
         isDirty: !!A((E || n).dirtyFields, x),
         isTouched: !!A((E || n).touchedFields, x),
         error: A((E || n).errors, x),
      }),
      $t = (x) => {
         x && au(x).forEach((E) => Ue(n.errors, E)),
            h.state.next({ errors: x ? n.errors : {} });
      },
      He = (x, E, T) => {
         const M = (A(i, x, { _f: {} })._f || {}).ref;
         me(n.errors, x, { ...E, ref: M }),
            h.state.next({ name: x, errors: n.errors, isValid: !1 }),
            T && T.shouldFocus && M && M.focus && M.focus();
      },
      Gt = (x, E) =>
         Fr(x)
            ? h.values.subscribe({ next: (T) => x(se(void 0, E), T) })
            : se(x, E, !0),
      Fe = (x, E = {}) => {
         for (const T of x ? au(x) : l.mount)
            l.mount.delete(T),
               l.array.delete(T),
               E.keepValue || (Ue(i, T), Ue(o, T)),
               !E.keepError && Ue(n.errors, T),
               !E.keepDirty && Ue(n.dirtyFields, T),
               !E.keepTouched && Ue(n.touchedFields, T),
               !r.shouldUnregister && !E.keepDefaultValue && Ue(s, T);
         h.values.next({ values: { ...o } }),
            h.state.next({ ...n, ...(E.keepDirty ? { isDirty: V() } : {}) }),
            !E.keepIsValid && p();
      },
      et = ({ disabled: x, name: E, field: T, fields: M }) => {
         if (yn(x)) {
            const $ = x ? void 0 : A(o, E, du(T ? T._f : A(M, E)._f));
            me(o, E, $), C(E, $, !1, !1, !0);
         }
      },
      nn = (x, E = {}) => {
         let T = A(i, x);
         const M = yn(E.disabled);
         return (
            me(i, x, {
               ...(T || {}),
               _f: {
                  ...(T && T._f ? T._f : { ref: { name: x } }),
                  name: x,
                  mount: !0,
                  ...E,
               },
            }),
            l.mount.add(x),
            T
               ? et({ field: T, disabled: E.disabled, name: x })
               : P(x, !0, E.value),
            {
               ...(M ? { disabled: E.disabled } : {}),
               ...(r.progressive
                  ? {
                       required: !!E.required,
                       min: Yi(E.min),
                       max: Yi(E.max),
                       minLength: Yi(E.minLength),
                       maxLength: Yi(E.maxLength),
                       pattern: Yi(E.pattern),
                    }
                  : {}),
               name: x,
               onChange: z,
               onBlur: z,
               ref: ($) => {
                  if ($) {
                     nn(x, E), (T = A(i, x));
                     const D =
                           (Pe($.value) &&
                              $.querySelectorAll &&
                              $.querySelectorAll("input,select,textarea")[0]) ||
                           $,
                        q = CP(D),
                        be = T._f.refs || [];
                     if (q ? be.find((_e) => _e === D) : D === T._f.ref) return;
                     me(i, x, {
                        _f: {
                           ...T._f,
                           ...(q
                              ? {
                                   refs: [
                                      ...be.filter(uu),
                                      D,
                                      ...(Array.isArray(A(s, x)) ? [{}] : []),
                                   ],
                                   ref: { type: D.type, name: x },
                                }
                              : { ref: D }),
                        },
                     }),
                        P(x, !1, void 0, D);
                  } else
                     (T = A(i, x, {})),
                        T._f && (T._f.mount = !1),
                        (r.shouldUnregister || E.shouldUnregister) &&
                           !(mP(l.array, x) && a.action) &&
                           l.unMount.add(x);
               },
            }
         );
      },
      sn = () =>
         r.shouldFocusError && Dc(i, (x) => x && A(n.errors, x), l.mount),
      Nt = (x, E) => async (T) => {
         T &&
            (T.preventDefault && T.preventDefault(), T.persist && T.persist());
         let M = lr(o);
         if ((h.state.next({ isSubmitting: !0 }), r.resolver)) {
            const { errors: $, values: D } = await U();
            (n.errors = $), (M = D);
         } else await te(i);
         Ue(n.errors, "root"),
            Ct(n.errors)
               ? (h.state.next({ errors: {} }), await x(M, T))
               : (E && (await E({ ...n.errors }, T)), sn(), setTimeout(sn)),
            h.state.next({
               isSubmitted: !0,
               isSubmitting: !1,
               isSubmitSuccessful: Ct(n.errors),
               submitCount: n.submitCount + 1,
               errors: n.errors,
            });
      },
      W0 = (x, E = {}) => {
         A(i, x) &&
            (Pe(E.defaultValue)
               ? R(x, A(s, x))
               : (R(x, E.defaultValue), me(s, x, E.defaultValue)),
            E.keepTouched || Ue(n.touchedFields, x),
            E.keepDirty ||
               (Ue(n.dirtyFields, x),
               (n.isDirty = E.defaultValue ? V(x, A(s, x)) : V())),
            E.keepError || (Ue(n.errors, x), d.isValid && p()),
            h.state.next({ ...n }));
      },
      of = (x, E = {}) => {
         const T = x ? lr(x) : s,
            M = lr(T),
            $ = x && !Ct(x) ? M : s;
         if ((E.keepDefaultValues || (s = T), !E.keepValues)) {
            if (E.keepDirtyValues || m)
               for (const D of l.mount)
                  A(n.dirtyFields, D) ? me($, D, A(o, D)) : R(D, A($, D));
            else {
               if (Jd && Pe(x))
                  for (const D of l.mount) {
                     const q = A(i, D);
                     if (q && q._f) {
                        const be = Array.isArray(q._f.refs)
                           ? q._f.refs[0]
                           : q._f.ref;
                        if (La(be)) {
                           const _e = be.closest("form");
                           if (_e) {
                              _e.reset();
                              break;
                           }
                        }
                     }
                  }
               i = {};
            }
            (o = e.shouldUnregister
               ? E.keepDefaultValues
                  ? lr(s)
                  : {}
               : lr($)),
               h.array.next({ values: { ...$ } }),
               h.values.next({ values: { ...$ } });
         }
         (l = {
            mount: new Set(),
            unMount: new Set(),
            array: new Set(),
            watch: new Set(),
            watchAll: !1,
            focus: "",
         }),
            !a.mount && t(),
            (a.mount = !d.isValid || !!E.keepIsValid),
            (a.watch = !!e.shouldUnregister),
            h.state.next({
               submitCount: E.keepSubmitCount ? n.submitCount : 0,
               isDirty: E.keepDirty
                  ? n.isDirty
                  : !!(E.keepDefaultValues && !wn(x, s)),
               isSubmitted: E.keepIsSubmitted ? n.isSubmitted : !1,
               dirtyFields: E.keepDirtyValues
                  ? n.dirtyFields
                  : E.keepDefaultValues && x
                  ? cu(s, x)
                  : {},
               touchedFields: E.keepTouched ? n.touchedFields : {},
               errors: E.keepErrors ? n.errors : {},
               isSubmitSuccessful: E.keepIsSubmitSuccessful
                  ? n.isSubmitSuccessful
                  : !1,
               isSubmitting: !1,
            });
      },
      af = (x, E) => of(Fr(x) ? x(o) : x, E);
   return {
      control: {
         register: nn,
         unregister: Fe,
         getFieldState: de,
         handleSubmit: Nt,
         setError: He,
         _executeSchema: U,
         _getWatch: se,
         _getDirty: V,
         _updateValid: p,
         _removeUnmounted: W,
         _updateFieldArray: b,
         _updateDisabledField: et,
         _getFieldArray: X,
         _reset: of,
         _resetDefaultValues: () =>
            Fr(r.defaultValues) &&
            r.defaultValues().then((x) => {
               af(x, r.resetOptions), h.state.next({ isLoading: !1 });
            }),
         _updateFormState: (x) => {
            n = { ...n, ...x };
         },
         _subjects: h,
         _proxyFormState: d,
         get _fields() {
            return i;
         },
         get _formValues() {
            return o;
         },
         get _state() {
            return a;
         },
         set _state(x) {
            a = x;
         },
         get _defaultValues() {
            return s;
         },
         get _names() {
            return l;
         },
         set _names(x) {
            l = x;
         },
         get _formState() {
            return n;
         },
         set _formState(x) {
            n = x;
         },
         get _options() {
            return r;
         },
         set _options(x) {
            r = { ...r, ...x };
         },
      },
      trigger: B,
      register: nn,
      handleSubmit: Nt,
      watch: Gt,
      setValue: R,
      getValues: ae,
      reset: af,
      resetField: W0,
      clearErrors: $t,
      unregister: Fe,
      setError: He,
      setFocus: (x, E = {}) => {
         const T = A(i, x),
            M = T && T._f;
         if (M) {
            const $ = M.refs ? M.refs[0] : M.ref;
            $.focus && ($.focus(), E.shouldSelect && $.select());
         }
      },
      getFieldState: de,
   };
}
function j0(e = {}) {
   const t = ue.useRef(),
      r = ue.useRef(),
      [n, i] = ue.useState({
         isDirty: !1,
         isValidating: !1,
         isLoading: Fr(e.defaultValues),
         isSubmitted: !1,
         isSubmitting: !1,
         isSubmitSuccessful: !1,
         isValid: !1,
         submitCount: 0,
         dirtyFields: {},
         touchedFields: {},
         errors: {},
         defaultValues: Fr(e.defaultValues) ? void 0 : e.defaultValues,
      });
   t.current ||
      (t.current = { ...DP(e, () => i((o) => ({ ...o }))), formState: n });
   const s = t.current.control;
   return (
      (s._options = e),
      wP({
         subject: s._subjects.state,
         next: (o) => {
            yP(o, s._proxyFormState, s._updateFormState, !0) &&
               i({ ...s._formState });
         },
      }),
      ue.useEffect(() => {
         e.values && !wn(e.values, r.current)
            ? (s._reset(e.values, s._options.resetOptions),
              (r.current = e.values))
            : s._resetDefaultValues();
      }, [e.values, s]),
      ue.useEffect(() => {
         s._state.mount || (s._updateValid(), (s._state.mount = !0)),
            s._state.watch &&
               ((s._state.watch = !1),
               s._subjects.state.next({ ...s._formState })),
            s._removeUnmounted();
      }),
      (t.current.formState = vP(n, s)),
      t.current
   );
}
function RP() {
   var o, a, l, u;
   const { register: e, formState: t, getValues: r, handleSubmit: n } = j0(),
      { errors: i } = t;
   function s(c) {
      console.log(c);
   }
   return f.jsxs(Zs, {
      onSubmit: n(s),
      children: [
         f.jsx(fr, {
            label: "Full name",
            error:
               (o = i == null ? void 0 : i.fullName) == null
                  ? void 0
                  : o.message,
            children: f.jsx(lt, {
               type: "text",
               id: "fullName",
               ...e("fullName", { required: "This field is required!" }),
            }),
         }),
         f.jsx(fr, {
            label: "Email address",
            error:
               (a = i == null ? void 0 : i.email) == null ? void 0 : a.message,
            children: f.jsx(lt, {
               type: "email",
               id: "email",
               ...e("email", {
                  required: "This field is required!",
                  pattern: {
                     value: /\S+@\S+\.\S+/,
                     message: "Please provide a valid email address!",
                  },
               }),
            }),
         }),
         f.jsx(fr, {
            label: "Password (min 8 characters)",
            error:
               (l = i == null ? void 0 : i.password) == null
                  ? void 0
                  : l.message,
            children: f.jsx(lt, {
               type: "password",
               id: "password",
               ...e("password", {
                  required: "This field is required!",
                  minLength: {
                     value: 8,
                     message: "Password needs a minimun of 8 characters!",
                  },
               }),
            }),
         }),
         f.jsx(fr, {
            label: "Repeat password",
            error:
               (u = i == null ? void 0 : i.passwordConfirm) == null
                  ? void 0
                  : u.message,
            children: f.jsx(lt, {
               type: "password",
               id: "passwordConfirm",
               ...e("passwordConfirm", {
                  required: "This field is required!",
                  validate: (c) =>
                     c === r().password || "Passwords need to match",
               }),
            }),
         }),
         f.jsxs(fr, {
            children: [
               f.jsx(qe, {
                  variation: "secondary",
                  type: "reset",
                  children: "Cancel",
               }),
               f.jsx(qe, { children: "Create new user" }),
            ],
         }),
      ],
   });
}
function IP() {
   return f.jsxs(f.Fragment, {
      children: [
         f.jsx(wt, { as: "h1", children: "Create a new user" }),
         f.jsx(RP, {}),
      ],
   });
}
function O0() {
   const e = It(),
      { mutate: t, isLoading: r } = kr({
         mutationFn: x0,
         onSuccess: () => {
            Qt.success("New cabin successfully created"),
               e.invalidateQueries({ queryKey: ["cabins"] });
         },
      });
   return { isCreating: r, createCabin: t };
}
function $P() {
   const e = It(),
      { isLoading: t, mutate: r } = kr({
         mutationFn: uP,
         onSuccess: () => {
            Qt.success("Cabin successfully deleted"),
               e.invalidateQueries({ queryKey: ["cabins"] });
         },
         onError: (n) => Qt.error(n.message),
      });
   return { isDeleting: t, deleteCabin: r };
}
function NP() {
   const e = It(),
      { mutate: t, isLoading: r } = kr({
         mutationFn: ({ newCabinData: n, id: i }) => x0(n, i),
         onSuccess: () => {
            Qt.success("Cabin successfully edited"),
               e.invalidateQueries({ queryKey: ["cabins"] });
         },
      });
   return { editCabin: t, isEditing: r };
}
const LP = I.input`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`,
   AP = I.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
`,
   an = I.div`
   display: grid;
   align-items: center;
   grid-template-columns: 24rem 1fr 1.2fr;
   gap: 2.4rem;

   padding: 1.2rem 0;

   &:first-child {
      padding-top: 0;
   }

   &:last-child {
      padding-bottom: 0;
   }

   &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
   }

   &:has(button) {
      display: flex;
      justify-content: flex-end;
      gap: 1.2rem;
   }
`,
   zn = I.label`
   font-weight: 500;
`;
I.span`
   font-size: 1.4rem;
   color: var(--color-red-700);
`;
function D0({ cabinToEdit: e = {}, onCloseModal: t }) {
   const { id: r, ...n } = e,
      i = !!r,
      {
         register: s,
         handleSubmit: o,
         reset: a,
      } = j0({ defaultValues: i ? n : {} }),
      { isCreating: l, createCabin: u } = O0(),
      { editCabin: c, isEditing: d } = NP();
   function h(m) {
      const y = typeof m.image == "string" ? m.image : m.image[0];
      i
         ? c(
              { newCabinData: { ...m, image: y }, id: r },
              {
                 onSuccess: (w) => {
                    a(), t == null || t();
                 },
              }
           )
         : u(
              { ...m, image: y },
              {
                 onSuccess: () => {
                    a(), t == null || t();
                 },
              }
           );
   }
   return f.jsxs(Zs, {
      onSubmit: o(h),
      type: t ? "modal" : "regular",
      children: [
         f.jsxs(an, {
            children: [
               f.jsx(zn, { htmlFor: "name", children: "Cabin name" }),
               f.jsx(lt, {
                  type: "text",
                  id: "name",
                  ...s("name", { required: "This field is required!" }),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(zn, {
                  htmlFor: "maxCapacity",
                  children: "Maximum capacity",
               }),
               f.jsx(lt, {
                  type: "number",
                  id: "maxCapacity",
                  ...s("maxCapacity", { required: "This field is required!" }),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(zn, {
                  htmlFor: "regularPrice",
                  children: "Regular price",
               }),
               f.jsx(lt, {
                  type: "number",
                  id: "regularPrice",
                  ...s("regularPrice", { required: "This field is required!" }),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(zn, { htmlFor: "discount", children: "Discount" }),
               f.jsx(lt, {
                  type: "number",
                  id: "discount",
                  defaultValue: 0,
                  ...s("discount"),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(zn, {
                  htmlFor: "description",
                  children: "Description for website",
               }),
               f.jsx(AP, {
                  type: "number",
                  id: "description",
                  defaultValue: "",
                  ...s("description"),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(zn, { htmlFor: "image", children: "Cabin photo" }),
               f.jsx(LP, {
                  id: "image",
                  accept: "image/*",
                  type: "file",
                  ...s("image", {
                     required: i ? !1 : "This field is required!",
                  }),
               }),
            ],
         }),
         f.jsxs(an, {
            children: [
               f.jsx(qe, {
                  variation: "secondary",
                  type: "reset",
                  onClick: () => (t == null ? void 0 : t()),
                  children: "Cancel",
               }),
               f.jsx(qe, { children: i ? "Edit cabin" : "Add new Cabin" }),
            ],
         }),
      ],
   });
}
function R0(e, t = !0) {
   const r = S.useRef();
   return (
      S.useEffect(
         function () {
            function n(i) {
               r.current && !r.current.contains(i.target) && e();
            }
            return (
               document.addEventListener("click", n, !0),
               () => {
                  document.removeEventListener("click", n, t);
               }
            );
         },
         [e, t]
      ),
      r
   );
}
const MP = I.div`
   position: fixed;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   background-color: var(--color-grey-0);
   border-radius: var(--border-radius-lg);
   box-shadow: var(--shadow-lg);
   padding: 3.2rem 4rem;
   transition: all 0.5s;
`,
   FP = I.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: var(--backdrop-color);
   backdrop-filter: blur(4px);
   z-index: 1000;
   transition: all 0.5s;
`,
   UP = I.button`
   background: none;
   border: none;
   padding: 0.4rem;
   border-radius: var(--border-radius-sm);
   transform: translateX(0.8rem);
   transition: all 0.2s;
   position: absolute;
   top: 1.2rem;
   right: 1.9rem;

   &:hover {
      background-color: var(--color-grey-100);
   }

   & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--color-grey-500);
   }
`,
   tf = S.createContext();
function Je({ children: e }) {
   const [t, r] = S.useState(""),
      n = () => r(""),
      i = r;
   return f.jsx(tf.Provider, {
      value: { openName: t, open: i, close: n },
      children: e,
   });
}
function zP({ children: e, opens: t }) {
   const { open: r } = S.useContext(tf);
   return S.cloneElement(e, { onClick: () => r(t) });
}
function BP({ children: e, name: t }) {
   const { openName: r, close: n } = S.useContext(tf),
      i = R0(n);
   return t !== r
      ? null
      : Ed.createPortal(
           f.jsx(FP, {
              children: f.jsxs(MP, {
                 ref: i,
                 children: [
                    f.jsx(UP, { onClick: n, children: f.jsx(Ek, {}) }),
                    f.jsx("div", {
                       children: S.cloneElement(e, { onCloseModal: n }),
                    }),
                 ],
              }),
           }),
           document.body
        );
}
Je.Open = zP;
Je.Window = BP;
const qP = I.div`
   width: 40rem;
   display: flex;
   flex-direction: column;
   gap: 1.2rem;

   & p {
      color: var(--color-grey-500);
      margin-bottom: 1.2rem;
   }

   & div {
      display: flex;
      justify-content: flex-end;
      gap: 1.2rem;
   }
`;
function rf({ resourceName: e, onConfirm: t, disabled: r, onCloseModal: n }) {
   return f.jsxs(qP, {
      children: [
         f.jsxs(wt, { as: "h3", children: ["Delete ", e] }),
         f.jsxs("p", {
            children: [
               "Are you sure you want to delete this ",
               e,
               " permanently? This action cannot be undone.",
            ],
         }),
         f.jsxs("div", {
            children: [
               f.jsx(qe, {
                  variation: "secondary",
                  disabled: r,
                  onClick: n,
                  children: "Cancel",
               }),
               f.jsx(qe, {
                  variation: "danger",
                  disabled: r,
                  onClick: t,
                  children: "Delete",
               }),
            ],
         }),
      ],
   });
}
const VP = I.div`
   border: 1px solid var(--color-grey-200);

   font-size: 1.4rem;
   background-color: var(--color-grey-0);
   border-radius: 7px;
   overflow: hidden;
`,
   I0 = I.div`
   display: grid;
   grid-template-columns: ${(e) => e.columns};
   column-gap: 2.4rem;
   align-items: center;
   transition: none;
`,
   WP = I(I0)`
   padding: 1.6rem 2.4rem;

   background-color: var(--color-grey-50);
   border-bottom: 1px solid var(--color-grey-100);
   text-transform: uppercase;
   letter-spacing: 0.4px;
   font-weight: 600;
   color: var(--color-grey-600);
`,
   HP = I(I0)`
   padding: 1.2rem 2.4rem;

   &:not(:last-child) {
      border-bottom: 1px solid var(--color-grey-100);
   }
`,
   QP = I.section`
   margin: 0.4rem 0;
`,
   GP = I.footer`
   background-color: var(--color-grey-50);
   display: flex;
   justify-content: center;
   padding: 1.2rem;

   /* This will hide the footer when it contains no child elements. Possible thanks to the parent selector :has 🎉 */
   &:not(:has(*)) {
      display: none;
   }
`,
   KP = I.p`
   font-size: 1.6rem;
   font-weight: 500;
   text-align: center;
   margin: 2.4rem;
`,
   nf = S.createContext();
function vt({ columns: e, children: t }) {
   return f.jsx(nf.Provider, {
      value: { columns: e },
      children: f.jsx(VP, { role: "table", children: t }),
   });
}
function YP({ children: e }) {
   const { columns: t } = S.useContext(nf);
   return f.jsx(WP, { role: "row", columns: t, as: "header", children: e });
}
function JP({ children: e }) {
   const { columns: t } = S.useContext(nf);
   return f.jsx(HP, { role: "row", columns: t, children: e });
}
function XP({ data: e, render: t }) {
   return e.length
      ? f.jsx(QP, { children: e.map(t) })
      : f.jsx(KP, { children: "No data to show at the moment" });
}
vt.Header = YP;
vt.Body = XP;
vt.Row = JP;
vt.Footer = GP;
const ZP = I.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
`,
   eT = I.button`
   background: none;
   border: none;
   padding: 0.4rem;
   border-radius: var(--border-radius-sm);
   transform: translateX(0.8rem);
   transition: all 0.2s;

   &:hover {
      background-color: var(--color-grey-100);
   }

   & svg {
      width: 2.4rem;
      height: 2.4rem;
      color: var(--color-grey-700);
   }
`,
   tT = I.ul`
   position: fixed;

   background-color: var(--color-grey-0);
   box-shadow: var(--shadow-md);
   border-radius: var(--border-radius-md);

   right: ${(e) => e.position.x}px;
   top: ${(e) => e.position.y}px;
`,
   rT = I.button`
   width: 100%;
   text-align: left;
   background: none;
   border: none;
   padding: 1.2rem 2.4rem;
   font-size: 1.4rem;
   transition: all 0.2s;

   display: flex;
   align-items: center;
   gap: 1.6rem;

   &:hover {
      background-color: var(--color-grey-50);
   }

   & svg {
      width: 1.6rem;
      height: 1.6rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
   }
`,
   pl = S.createContext();
function De({ children: e }) {
   const [t, r] = S.useState(""),
      [n, i] = S.useState(null),
      s = () => r(""),
      o = r;
   return f.jsx(pl.Provider, {
      value: { openId: t, close: s, open: o, position: n, setPosition: i },
      children: e,
   });
}
function nT({ id: e }) {
   const { openId: t, open: r, close: n, setPosition: i } = S.useContext(pl);
   function s(o) {
      const a = o.target.closest("button").getBoundingClientRect();
      i({ x: window.innerWidth - a.width - a.x, y: a.y + a.height + 8 }),
         t === "" || t !== e ? r(e) : n();
   }
   return f.jsx(eT, { onClick: s, children: f.jsx(kk, {}) });
}
function iT({ id: e, children: t }) {
   const { openId: r, position: n, close: i } = S.useContext(pl),
      s = R0(i);
   return r !== e
      ? null
      : Ed.createPortal(
           f.jsx(tT, { position: n, ref: s, children: t }),
           document.body
        );
}
function sT({ children: e, icon: t, onClick: r }) {
   const { close: n } = S.useContext(pl);
   function i() {
      r == null || r(), n();
   }
   return f.jsx("li", {
      children: f.jsxs(rT, {
         onClick: i,
         children: [t, f.jsx("span", { children: e })],
      }),
   });
}
De.Menu = ZP;
De.Toggle = nT;
De.List = iT;
De.Button = sT;
const oT = I.img`
   display: block;
   width: 6.4rem;
   aspect-ratio: 3 / 2;
   object-fit: cover;
   object-position: center;
   transform: scale(1.5) translateX(-7px);
`,
   aT = I.div`
   font-size: 1.6rem;
   font-weight: 600;
   color: var(--color-grey-600);
   font-family: "Sono";
`,
   lT = I.div`
   font-family: "Sono";
   font-weight: 600;
`,
   uT = I.div`
   font-family: "Sono";
   font-weight: 500;
   color: var(--color-green-700);
`;
function cT({ cabin: e }) {
   const { isDeleting: t, deleteCabin: r } = $P(),
      { isCreating: n, createCabin: i } = O0(),
      {
         id: s,
         name: o,
         maxCapacity: a,
         regularPrice: l,
         discount: u,
         image: c,
         description: d,
      } = e;
   function h() {
      i({
         name: `copy of ${o}`,
         maxCapacity: a,
         regularPrice: l,
         discount: u,
         image: c,
         description: d,
      });
   }
   return f.jsxs(vt.Row, {
      role: "row",
      children: [
         f.jsx(oT, { src: c }),
         f.jsx(aT, { children: o }),
         f.jsxs("div", { children: ["Fits up to ", a, " guests"] }),
         f.jsx(lT, { children: zt(l) }),
         u ? f.jsx(uT, { children: zt(u) }) : f.jsx("span", { children: "—" }),
         f.jsx("div", {
            children: f.jsxs(Je, {
               children: [
                  f.jsxs(De.Menu, {
                     children: [
                        f.jsx(De.Toggle, { id: s }),
                        f.jsxs(De.List, {
                           id: s,
                           children: [
                              f.jsx(De.Button, {
                                 icon: f.jsx(Ck, {}),
                                 onClick: h,
                                 children: "Duplicate",
                              }),
                              f.jsx(Je.Open, {
                                 opens: "edit",
                                 children: f.jsx(De.Button, {
                                    icon: f.jsx(_k, {}),
                                    children: "Edit",
                                 }),
                              }),
                              f.jsx(Je.Open, {
                                 opens: "delete",
                                 children: f.jsx(De.Button, {
                                    icon: f.jsx(Kv, {}),
                                    children: "Delete",
                                 }),
                              }),
                           ],
                        }),
                     ],
                  }),
                  f.jsx(Je.Window, {
                     name: "edit",
                     children: f.jsx(D0, { cabinToEdit: e }),
                  }),
                  f.jsx(Je.Window, {
                     name: "delete",
                     children: f.jsx(rf, {
                        resourceName: "cabins",
                        disabled: t,
                        onConfirm: () => {
                           r(s);
                        },
                     }),
                  }),
               ],
            }),
         }),
      ],
   });
}
function dT() {
   const {
      isLoading: e,
      data: t,
      error: r,
   } = Ys({ queryKey: ["cabins"], queryFn: lP });
   return { isLoading: e, cabins: t, error: r };
}
function sf({ resource: e }) {
   return f.jsxs("p", { children: ["No ", e, " could be found."] });
}
function fT() {
   const { isLoading: e, cabins: t, error: r } = dT(),
      [n] = Gs();
   if (e) return f.jsx($i, {});
   if (!t.length) return f.jsx(sf, { resource: "bookings" });
   const i = n.get("discount") || "all";
   let s;
   i === "all" && (s = t),
      i === "no-discount" && (s = t.filter((d) => d.discount === 0)),
      i === "with-discount" && (s = t.filter((d) => d.discount > 0));
   const o = n.get("sortBy") || "startDate-asc",
      [a, l] = o.split("-"),
      u = l === "asc" ? 1 : -1,
      c = s.sort((d, h) => (d[a] - h[a]) * u);
   return f.jsx(De, {
      children: f.jsxs(vt, {
         columns: "0.6fr 1.8fr 2.2fr 1fr 1fr 1fr",
         children: [
            f.jsxs(vt.Header, {
               children: [
                  f.jsx("div", { children: "Cabins" }),
                  f.jsx("div", { children: "Capacity" }),
                  f.jsx("div", { children: "Price" }),
                  f.jsx("div", { children: "Discout" }),
               ],
            }),
            f.jsx(vt.Body, {
               data: c,
               render: (d) => f.jsx(cT, { cabin: d }, d.id),
            }),
         ],
      }),
   });
}
function hT() {
   return f.jsxs(Je, {
      children: [
         f.jsx(Je.Open, {
            opens: "cabin-form",
            children: f.jsx(qe, { children: "Add new cabin" }),
         }),
         f.jsx(Je.Window, { name: "cabin-form", children: f.jsx(D0, {}) }),
      ],
   });
}
const pT = I.div`
   border: 1px solid var(--color-grey-100);
   background-color: var(--color-grey-0);
   box-shadow: var(--shadow-sm);
   border-radius: var(--border-radius-sm);
   padding: 0.4rem;
   display: flex;
   gap: 0.4rem;
`,
   mT = I.button`
   background-color: var(--color-grey-0);
   border: none;

   ${(e) =>
      e.active &&
      Ae`
         background-color: var(--color-brand-600);
         color: var(--color-brand-50);
      `}

   border-radius: var(--border-radius-sm);
   font-weight: 500;
   font-size: 1.4rem;
   /* To give the same height as select */
   padding: 0.44rem 0.8rem;
   transition: all 0.3s;

   &:hover:not(:disabled) {
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
   }
`;
function $0({ filterField: e, options: t }) {
   const [r, n] = Gs(),
      i = r.get(e) || t.at(0).value;
   function s(o) {
      r.set(e, o), r.get("page") && r.set("page", 1), n(r);
   }
   return f.jsx(pT, {
      children: t.map((o) =>
         f.jsx(
            mT,
            {
               onClick: () => s(o.value),
               disabled: o.value === i,
               children: o.label,
            },
            o.value
         )
      ),
   });
}
const gT = I.select`
   font-size: 1.4rem;
   padding: 0.8rem 1.2rem;
   border: 1px solid
      ${(e) =>
         e.type === "white"
            ? "var(--color-grey-100)"
            : "var(--color-grey-300)"};
   border-radius: var(--border-radius-sm);
   background-color: var(--color-grey-0);
   font-weight: 500;
   box-shadow: var(--shadow-sm);
`;
function vT({ options: e, value: t, onChange: r }) {
   return f.jsx(gT, {
      value: t,
      onChange: r,
      children: e.map((n) =>
         f.jsx("option", { value: n.value, children: n.label }, n.value)
      ),
   });
}
function N0({ options: e }) {
   const [t, r] = Gs(),
      n = t.get("sortBy") || "";
   function i(s) {
      t.set("sortBy", s.target.value), r(t);
   }
   return f.jsx(vT, { options: e, type: "white", value: n, onChange: i });
}
const L0 = I.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;
function yT() {
   return f.jsxs(L0, {
      children: [
         f.jsx($0, {
            filterField: "discount",
            options: [
               { value: "all", label: "All" },
               { value: "no-discount", label: "No discount" },
               { value: "with-discount", label: "With discount" },
            ],
         }),
         f.jsx(N0, {
            options: [
               { value: "name-asc", label: "Sort by name (A-Z)" },
               { value: "name-desc", label: "Sort by name (Z-A)" },
               {
                  value: "regularPrice-asc",
                  label: "Sort by price (low first)",
               },
               {
                  value: "regularPrice-desc",
                  label: "Sort by price (high first)",
               },
               {
                  value: "maxCapacity-asc",
                  label: "Sort by capacity (low first)",
               },
               {
                  value: "maxCapacity-desc",
                  label: "Sort by capacity (high first)",
               },
            ],
         }),
      ],
   });
}
function wT() {
   return f.jsxs(f.Fragment, {
      children: [
         f.jsxs(rr, {
            type: "horizontal",
            children: [
               f.jsx(wt, { as: "h1", children: "All cabins" }),
               f.jsx(yT, {}),
            ],
         }),
         f.jsxs(rr, { children: [f.jsx(fT, {}), f.jsx(hT, {})] }),
      ],
   });
}
const ci = 10;
async function fu({ filter: e, sortBy: t, page: r }) {
   let n = we
      .from("bookings")
      .select("*, cabins(name), guests(fullName, email)", { count: "exact" });
   if (
      (e && (n = n[e.method || "eq"](e.field, e.value)),
      t && (n = n.order(t.field, { ascending: t.direction === "asc" })),
      r)
   ) {
      const a = (r - 1) * ci,
         l = a + ci - 1;
      n = n.range(a, l);
   }
   const { data: i, error: s, count: o } = await n;
   if (s) throw (console.error(s), new Error("Booking not found"));
   return { data: i, count: o };
}
async function xT(e) {
   const { data: t, error: r } = await we
      .from("bookings")
      .select("*, cabins(*), guests(*)")
      .eq("id", e)
      .single();
   if (r) throw (console.error(r), new Error("Booking not found"));
   return t;
}
async function A0(e, t) {
   const { data: r, error: n } = await we
      .from("bookings")
      .update(t)
      .eq("id", e)
      .select()
      .single();
   if (n) throw (console.error(n), new Error("Booking could not be updated"));
   return r;
}
async function bT(e) {
   const { data: t, error: r } = await we.from("bookings").delete().eq("id", e);
   if (r) throw (console.error(r), new Error("Booking could not be deleted"));
   return t;
}
function kT() {
   const e = It(),
      [t] = Gs(),
      r = t.get("status"),
      n = !r || r === "all" ? null : { field: "status", value: r },
      i = t.get("sortBy") || "startDate-desc",
      [s, o] = i.split("-"),
      a = { field: s, direction: o },
      l = t.get("page") ? Number(t.get("page")) : 1,
      {
         isLoading: u,
         data: { data: c, count: d } = {},
         error: h,
      } = Ys({
         queryKey: ["bookings", n, a, l],
         queryFn: () => fu({ filter: n, sortBy: a, page: l }),
      }),
      m = Math.ceil(d / ci);
   return (
      l < m &&
         e.prefetchQuery({
            queryKey: ["bookings", n, a, l + 1],
            queryFn: () => fu({ filter: n, sortBy: a, page: l + 1 }),
         }),
      l > 1 &&
         e.prefetchQuery({
            queryKey: ["bookings", n, a, l - 1],
            queryFn: () => fu({ filter: n, sortBy: a, page: l - 1 }),
         }),
      { isLoading: u, bookings: c, error: h, count: d }
   );
}
const M0 = I.span`
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 0.4rem 1.2rem;
  border-radius: 100px;

  /* Make these dynamic, based on the received prop */
  color: var(--color-${(e) => e.type}-700);
  background-color: var(--color-${(e) => e.type}-100);
`;
function F0() {
   const e = It(),
      { mutate: t, isLoading: r } = kr({
         mutationFn: (n) => A0(n, { status: "checked-out" }),
         onSuccess: (n) => {
            Qt.success(`Booking #${n.id} successfully checked out`),
               e.invalidateQueries({ active: !0 });
         },
         onError: () => {
            Qt.error("There was an error while checking out");
         },
      });
   return { checkout: t, isCheckingOut: r };
}
function U0() {
   const e = It(),
      { mutate: t, isDeletingBooking: r } = kr({
         mutationFn: bT,
         onSuccess: () => {
            Qt.success("Booking successfully deleted!"),
               e.invalidateQueries({ queryKey: ["bookings"] });
         },
         onError: (n) => Qt.error(n.message),
      });
   return { deleteBooking: t, isDeletingBooking: r };
}
const ST = I.div`
   font-size: 1.6rem;
   font-weight: 600;
   color: var(--color-grey-600);
   font-family: "Sono";
`,
   Lp = I.div`
   display: flex;
   flex-direction: column;
   gap: 0.2rem;

   & span:first-child {
      font-weight: 500;
   }

   & span:last-child {
      color: var(--color-grey-500);
      font-size: 1.2rem;
   }
`,
   _T = I.div`
   font-family: "Sono";
   font-weight: 500;
`;
function CT({
   booking: {
      id: e,
      created_at: t,
      startDate: r,
      endDate: n,
      numNights: i,
      numGuests: s,
      totalPrice: o,
      status: a,
      cabins: { name: l },
      guests: { fullName: u, email: c },
   },
}) {
   const d = ir(),
      { checkout: h, isCheckingOut: m } = F0(),
      { deleteBooking: y, isDeletingBooking: w } = U0(),
      k = {
         unconfirmed: "blue",
         "checked-in": "green",
         "checked-out": "silver",
      };
   return f.jsxs(vt.Row, {
      children: [
         f.jsx(ST, { children: l }),
         f.jsxs(Lp, {
            children: [
               f.jsx("span", { children: u }),
               f.jsx("span", { children: c }),
            ],
         }),
         f.jsxs(Lp, {
            children: [
               f.jsxs("span", {
                  children: [
                     ri(new Date(r)) ? "Today" : p0(r),
                     " ",
                     "→ ",
                     i,
                     " night stay",
                  ],
               }),
               f.jsxs("span", {
                  children: [
                     ys(new Date(r), "MMM dd yyyy"),
                     " —",
                     " ",
                     ys(new Date(n), "MMM dd yyyy"),
                  ],
               }),
            ],
         }),
         f.jsx(M0, { type: k[a], children: a.replace("-", " ") }),
         f.jsx(_T, { children: zt(o) }),
         f.jsxs(Je, {
            children: [
               f.jsxs(De.Menu, {
                  children: [
                     f.jsx(De.Toggle, { id: e }),
                     f.jsxs(De.List, {
                        id: e,
                        children: [
                           f.jsx(De.Button, {
                              icon: f.jsx(Sk, {}),
                              onClick: () => d(`/bookings/${e}`),
                              children: "See details",
                           }),
                           a === "unconfirmed" &&
                              f.jsx(De.Button, {
                                 icon: f.jsx(yk, {}),
                                 onClick: () => d(`/checkin/${e}`),
                                 children: "Check in",
                              }),
                           a === "checked-in" &&
                              f.jsx(De.Button, {
                                 icon: f.jsx(Gv, {}),
                                 onClick: () => h(e),
                                 disabled: m,
                                 children: "Check out",
                              }),
                           f.jsx(Je.Open, {
                              opens: "delete",
                              children: f.jsx(De.Button, {
                                 icon: f.jsx(Kv, {}),
                                 children: "Delete booking",
                              }),
                           }),
                        ],
                     }),
                  ],
               }),
               f.jsx(Je.Window, {
                  name: "delete",
                  children: f.jsx(rf, {
                     resourceName: "booking",
                     disabled: w,
                     onConfirm: () => y(e),
                  }),
               }),
            ],
         }),
      ],
   });
}
const ET = I.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`,
   PT = I.p`
   font-size: 1.4rem;
   margin-left: 0.8rem;

   & span {
      font-weight: 600;
   }
`,
   TT = I.div`
   display: flex;
   gap: 0.6rem;
`,
   Ap = I.button`
   background-color: ${(e) =>
      e.active ? " var(--color-brand-600)" : "var(--color-grey-50)"};
   color: ${(e) => (e.active ? " var(--color-brand-50)" : "inherit")};
   border: none;
   border-radius: var(--border-radius-sm);
   font-weight: 500;
   font-size: 1.4rem;

   display: flex;
   align-items: center;
   justify-content: center;
   gap: 0.4rem;
   padding: 0.6rem 1.2rem;
   transition: all 0.3s;

   &:has(span:last-child) {
      padding-left: 0.4rem;
   }

   &:has(span:first-child) {
      padding-right: 0.4rem;
   }

   & svg {
      height: 1.8rem;
      width: 1.8rem;
   }

   &:hover:not(:disabled) {
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
   }
`;
function jT({ count: e }) {
   const [t, r] = Gs(),
      n = t.get("page") ? Number(t.get("page")) : 1,
      i = Math.ceil(e / ci);
   function s() {
      const a = n === i ? n : n + 1;
      t.set("page", a), r(t);
   }
   function o() {
      const a = n === 1 ? n : n - 1;
      t.set("page", a), r(t);
   }
   return i <= 1
      ? null
      : f.jsxs(ET, {
           children: [
              f.jsxs(PT, {
                 children: [
                    "Showing ",
                    f.jsx("span", { children: (n - 1) * ci + 1 }),
                    " to",
                    " ",
                    f.jsx("span", { children: n === i ? e : n * ci }),
                    " ",
                    "of ",
                    f.jsx("span", { children: e }),
                    " results",
                 ],
              }),
              f.jsxs(TT, {
                 children: [
                    f.jsxs(Ap, {
                       onClick: o,
                       disabled: n === 1,
                       children: [
                          f.jsx(xk, {}),
                          f.jsx("span", { children: "Previous" }),
                       ],
                    }),
                    f.jsxs(Ap, {
                       onClick: s,
                       disabled: n === i,
                       children: [
                          f.jsx("span", { children: "Next" }),
                          f.jsx(bk, {}),
                       ],
                    }),
                 ],
              }),
           ],
        });
}
function OT() {
   const { bookings: e, isLoading: t, count: r } = kT();
   return t
      ? f.jsx($i, {})
      : e.length
      ? f.jsx(De, {
           children: f.jsxs(vt, {
              columns: "0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem",
              children: [
                 f.jsxs(vt.Header, {
                    children: [
                       f.jsx("div", { children: "Cabin" }),
                       f.jsx("div", { children: "Guest" }),
                       f.jsx("div", { children: "Dates" }),
                       f.jsx("div", { children: "Status" }),
                       f.jsx("div", { children: "Amount" }),
                       f.jsx("div", {}),
                    ],
                 }),
                 f.jsx(vt.Body, {
                    data: e,
                    render: (n) => f.jsx(CT, { booking: n }, n.id),
                 }),
                 f.jsx(vt.Footer, { children: f.jsx(jT, { count: r }) }),
              ],
           }),
        })
      : f.jsx(sf, { resource: "bookings" });
}
function DT() {
   return f.jsxs(L0, {
      children: [
         f.jsx($0, {
            filterField: "status",
            options: [
               { value: "all", label: "All" },
               { value: "checked-out", label: "Checked out" },
               { value: "checked-in", label: "Checked in" },
               { value: "unconfirmed", label: "Unconfirmed" },
            ],
         }),
         f.jsx(N0, {
            options: [
               {
                  value: "startDate-desc",
                  label: "Sort by date (recent first)",
               },
               {
                  value: "startDate-asc",
                  label: "Sort by date (earlier first)",
               },
               {
                  value: "totalPrice-desc",
                  label: "Sort by amount (high first)",
               },
               { value: "totalPrice-asc", label: "Sort by amount (low first)" },
            ],
         }),
      ],
   });
}
function RT() {
   return f.jsxs(f.Fragment, {
      children: [
         f.jsxs(rr, {
            type: "horizontal",
            children: [
               f.jsx(wt, { as: "h1", children: "All bookings" }),
               f.jsx(DT, {}),
            ],
         }),
         f.jsx(OT, {}),
      ],
   });
}
const IT = function () {
      return null;
   },
   $T = I.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`,
   NT = I.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;
function hu({ icon: e, label: t, children: r }) {
   return f.jsxs($T, {
      children: [
         f.jsxs(NT, { children: [e, f.jsx("span", { children: t })] }),
         r,
      ],
   });
}
const LT = I.img`
  max-width: 2rem;
  border-radius: var(--border-radius-tiny);
  display: block;
  border: 1px solid var(--color-grey-100);
`,
   AT = I.section`
  /* Box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  overflow: hidden;
`,
   MT = I.header`
  background-color: var(--color-brand-500);
  padding: 2rem 4rem;
  color: #e0e7ff;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 3.2rem;
    width: 3.2rem;
  }

  & div:first-child {
    display: flex;
    align-items: center;
    gap: 1.6rem;
    font-weight: 600;
    font-size: 1.8rem;
  }

  & span {
    font-family: "Sono";
    font-size: 2rem;
    margin-left: 4px;
  }
`,
   FT = I.section`
  padding: 3.2rem 4rem 1.2rem;
`,
   UT = I.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.6rem;
  color: var(--color-grey-500);

  & p:first-of-type {
    font-weight: 500;
    color: var(--color-grey-700);
  }
`,
   zT = I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.6rem 3.2rem;
  border-radius: var(--border-radius-sm);
  margin-top: 2.4rem;

  background-color: ${(e) =>
     e.isPaid ? "var(--color-green-100)" : "var(--color-yellow-100)"};
  color: ${(e) =>
     e.isPaid ? "var(--color-green-700)" : "var(--color-yellow-700)"};

  & p:last-child {
    text-transform: uppercase;
    font-size: 1.4rem;
    font-weight: 600;
  }

  svg {
    height: 2.4rem;
    width: 2.4rem;
    color: currentColor !important;
  }
`,
   BT = I.footer`
  padding: 1.6rem 4rem;
  font-size: 1.2rem;
  color: var(--color-grey-500);
  text-align: right;
`;
function z0({ booking: e }) {
   const {
      created_at: t,
      startDate: r,
      endDate: n,
      numNights: i,
      numGuests: s,
      cabinPrice: o,
      extrasPrice: a,
      totalPrice: l,
      hasBreakfast: u,
      observations: c,
      isPaid: d,
      guests: {
         fullName: h,
         email: m,
         country: y,
         countryFlag: w,
         nationalID: k,
      },
      cabins: { name: g },
   } = e;
   return f.jsxs(AT, {
      children: [
         f.jsxs(MT, {
            children: [
               f.jsxs("div", {
                  children: [
                     f.jsx(Ok, {}),
                     f.jsxs("p", {
                        children: [
                           i,
                           " nights in Cabin ",
                           f.jsx("span", { children: g }),
                        ],
                     }),
                  ],
               }),
               f.jsxs("p", {
                  children: [
                     ys(new Date(r), "EEE, MMM dd yyyy"),
                     " (",
                     ri(new Date(r)) ? "Today" : p0(r),
                     ") — ",
                     ys(new Date(n), "EEE, MMM dd yyyy"),
                  ],
               }),
            ],
         }),
         f.jsxs(FT, {
            children: [
               f.jsxs(UT, {
                  children: [
                     w && f.jsx(LT, { src: w, alt: `Flag of ${y}` }),
                     f.jsxs("p", {
                        children: [h, " ", s > 1 ? `+ ${s - 1} guests` : ""],
                     }),
                     f.jsx("span", { children: "•" }),
                     f.jsx("p", { children: m }),
                     f.jsx("span", { children: "•" }),
                     f.jsxs("p", { children: ["National ID ", k] }),
                  ],
               }),
               c &&
                  f.jsx(hu, {
                     icon: f.jsx(Pk, {}),
                     label: "Observations",
                     children: c,
                  }),
               f.jsx(hu, {
                  icon: f.jsx(Tk, {}),
                  label: "Breakfast included?",
                  children: u ? "Yes" : "No",
               }),
               f.jsxs(zT, {
                  isPaid: d,
                  children: [
                     f.jsxs(hu, {
                        icon: f.jsx(jk, {}),
                        label: "Total price",
                        children: [
                           zt(l),
                           u && ` (${zt(o)} cabin + ${zt(a)} breakfast)`,
                        ],
                     }),
                     f.jsx("p", {
                        children: d ? "Paid" : "Will pay at property",
                     }),
                  ],
               }),
            ],
         }),
         f.jsx(BT, {
            children: f.jsxs("p", {
               children: ["Booked ", ys(new Date(t), "EEE, MMM dd yyyy, p")],
            }),
         }),
      ],
   });
}
const B0 = I.div`
  display: flex;
  gap: 1.2rem;
  justify-content: flex-end;
`,
   q0 = I.button`
  color: var(--color-brand-600);
  font-weight: 500;
  text-align: center;
  transition: all 0.3s;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);

  &:hover,
  &:active {
    color: var(--color-brand-700);
  }
`;
function V0() {
   const { bookingId: e } = Kw(),
      {
         isLoading: t,
         data: r,
         error: n,
      } = Ys({ queryKey: ["booking", e], queryFn: () => xT(e), retry: !1 });
   return { isLoading: t, booking: r, error: n };
}
const qT = I.div`
   display: flex;
   gap: 2.4rem;
   align-items: center;
`;
function VT() {
   const { booking: e, isLoading: t } = V0(),
      { checkout: r, isCheckingOut: n } = F0(),
      { deleteBooking: i, isDeleting: s } = U0(),
      o = Yd(),
      a = ir();
   if (t) return f.jsx($i, {});
   if (!e) return f.jsx(sf, { resourceName: "booking" });
   const { status: l, id: u } = e,
      c = {
         unconfirmed: "blue",
         "checked-in": "green",
         "checked-out": "silver",
      };
   return f.jsxs(f.Fragment, {
      children: [
         f.jsxs(rr, {
            type: "horizontal",
            children: [
               f.jsxs(qT, {
                  children: [
                     f.jsxs(wt, { as: "h1", children: ["Booking #", u] }),
                     f.jsx(M0, { type: c[l], children: l.replace("-", " ") }),
                  ],
               }),
               f.jsx(q0, { onClick: o, children: "← Back" }),
            ],
         }),
         f.jsx(z0, { booking: e }),
         f.jsxs(B0, {
            children: [
               l === "unconfirmed" &&
                  f.jsx(qe, {
                     onClick: () => a(`/checkin/${u}`),
                     children: "Check in",
                  }),
               l === "checked-in" &&
                  f.jsx(qe, {
                     icon: f.jsx(Gv, {}),
                     onClick: () => r(u),
                     disabled: n,
                     children: "Check out",
                  }),
               f.jsxs(Je, {
                  children: [
                     f.jsx(Je.Open, {
                        opens: "delete",
                        children: f.jsx(qe, {
                           variation: "danger",
                           children: "Delete booking",
                        }),
                     }),
                     f.jsx(Je.Window, {
                        name: "delete",
                        children: f.jsx(rf, {
                           resourceName: "booking",
                           disabled: s,
                           onConfirm: () => i(u, { onSettled: () => a(-1) }),
                        }),
                     }),
                  ],
               }),
               f.jsx(qe, {
                  variation: "secondary",
                  onClick: o,
                  children: "Back",
               }),
            ],
         }),
      ],
   });
}
function WT() {
   return f.jsx(VT, {});
}
const HT = I.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;
function Mp({ checked: e, onChange: t, disabled: r = !1, id: n, children: i }) {
   return f.jsxs(HT, {
      children: [
         f.jsx("input", {
            type: "checkbox",
            id: n,
            checked: e,
            onChange: t,
            disabled: r,
         }),
         f.jsx("label", { htmlFor: r ? "" : n, children: i }),
      ],
   });
}
function QT() {
   const e = It(),
      t = ir(),
      { mutate: r, isLoading: n } = kr({
         mutationFn: ({ bookingId: i, breakfast: s }) =>
            A0(i, { status: "checked-in", isPaid: !0, ...s }),
         onSuccess: (i) => {
            Qt.success(`Booking #${i.id} successfully checked in`),
               e.invalidateQueries({ active: !0 }),
               t("/");
         },
         onError: () => {
            Qt.error("There was an error while checking in");
         },
      });
   return { checkin: r, isCheckingIn: n };
}
const Fp = I.div`
   /* Box */
   background-color: var(--color-grey-0);
   border: 1px solid var(--color-grey-100);
   border-radius: var(--border-radius-md);
   padding: 2.4rem 4rem;
`;
function GT() {
   const [e, t] = S.useState(!1),
      [r, n] = S.useState(!1),
      { booking: i, isLoading: s } = V0(),
      { settings: o, isLoading: a } = w0();
   S.useEffect(() => t((i == null ? void 0 : i.isPaid) ?? !1), [i]);
   const l = Yd(),
      { checkin: u, isCheckingIn: c } = QT();
   if (s || a) return f.jsx($i, {});
   const {
         id: d,
         guests: h,
         totalPrice: m,
         numGuests: y,
         hasBreakfast: w,
         numNights: k,
      } = i,
      g = o.breakfastPrice * k * y;
   function p() {
      e &&
         u(
            r
               ? {
                    bookingId: d,
                    breakfast: {
                       hasBreakfast: !0,
                       extrasPrice: g,
                       totalPrice: m + g,
                    },
                 }
               : { bookingId: d, breakfast: {} }
         );
   }
   return f.jsxs(f.Fragment, {
      children: [
         f.jsxs(rr, {
            type: "horizontal",
            children: [
               f.jsxs(wt, { as: "h1", children: ["Check in booking #", d] }),
               f.jsx(q0, { onClick: l, children: "← Back" }),
            ],
         }),
         f.jsx(z0, { booking: i }),
         !w &&
            f.jsx(Fp, {
               children: f.jsxs(Mp, {
                  checked: r,
                  onChange: () => {
                     n((v) => !v), t(!1);
                  },
                  id: "breakfast",
                  children: ["Want to add breakfast for", " ", zt(g), " ?"],
               }),
            }),
         f.jsx(Fp, {
            children: f.jsxs(Mp, {
               checked: e,
               onChange: () => t((v) => !v),
               disabled: e || c,
               id: "confirm",
               children: [
                  "I confirm that ",
                  h.fullName,
                  " has paid the total amount of",
                  " ",
                  r ? `${zt(m + g)} (${zt(m)} + ${zt(g)})` : zt(m),
               ],
            }),
         }),
         f.jsxs(B0, {
            children: [
               f.jsxs(qe, {
                  onClick: p,
                  disabled: !e || c,
                  children: ["Check in booking #", d],
               }),
               f.jsx(qe, {
                  variation: "secondary",
                  onClick: l,
                  children: "Back",
               }),
            ],
         }),
      ],
   });
}
function KT() {
   return f.jsx(GT, {});
}
function YT() {
   const { data: e, isLoading: t } = Ys({ queryKey: ["user"], queryFn: O_ });
   return {
      user: e,
      isLoading: t,
      isAuthenticated: (e == null ? void 0 : e.role) === "authenticated",
   };
}
const JT = I.div`
   height: 100vh;
   background-color: var(--color-grey-50);
   display: flex;
   align-items: center;
   justify-content: center;
`;
function XT({ children: e }) {
   const t = ir(),
      { isLoading: r, isAuthenticated: n } = YT();
   if (
      (S.useEffect(
         function () {
            !n && !r && t("/login");
         },
         [r, n, t]
      ),
      r)
   )
      return f.jsxs(JT, { children: [f.jsx($i, {}), ";"] });
   if (n) return e;
}
const ZT = new Mx({ defaultOptions: { queries: { staleTime: 0 } } });
function e3() {
   return f.jsxs(Zx, {
      client: ZT,
      children: [
         f.jsx(IT, { initialIsOpen: !1 }),
         f.jsx(ZC, {}),
         f.jsx(yx, {
            children: f.jsxs(dx, {
               children: [
                  f.jsxs(ht, {
                     element: f.jsx(XT, { children: f.jsx(XC, {}) }),
                     children: [
                        f.jsx(ht, {
                           index: !0,
                           element: f.jsx(lx, { replace: !0, to: "dashboard" }),
                        }),
                        f.jsx(ht, {
                           path: "dashboard",
                           element: f.jsx(eE, {}),
                        }),
                        f.jsx(ht, { path: "bookings", element: f.jsx(RT, {}) }),
                        f.jsx(ht, {
                           path: "bookings/:bookingId",
                           element: f.jsx(WT, {}),
                        }),
                        f.jsx(ht, {
                           path: "checkin/:bookingId",
                           element: f.jsx(KT, {}),
                        }),
                        f.jsx(ht, { path: "cabins", element: f.jsx(wT, {}) }),
                        f.jsx(ht, { path: "users", element: f.jsx(IP, {}) }),
                        f.jsx(ht, { path: "settings", element: f.jsx(fP, {}) }),
                        f.jsx(ht, { path: "account", element: f.jsx(tP, {}) }),
                     ],
                  }),
                  f.jsx(ht, { path: "login", element: f.jsx(eP, {}) }),
                  f.jsx(ht, { path: "*", element: f.jsx(nE, {}) }),
               ],
            }),
         }),
         f.jsx(YE, {
            position: "top-center",
            gutter: 12,
            containerStyle: { margin: "8px" },
            toastOptions: {
               success: { duration: 1500 },
               error: { duration: 2500 },
               style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
               },
            },
         }),
      ],
   });
}
pu.createRoot(document.getElementById("root")).render(
   f.jsx(ue.StrictMode, { children: f.jsx(e3, {}) })
);
