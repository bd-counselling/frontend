(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const s of l)
      if (s.type === "childList")
        for (const a of s.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && r(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const s = {};
    return (
      l.integrity && (s.integrity = l.integrity),
      l.referrerPolicy && (s.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const s = n(l);
    fetch(l.href, s);
  }
})();
var vo = { exports: {} },
  hl = {},
  wo = { exports: {} },
  T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var er = Symbol.for("react.element"),
  Rc = Symbol.for("react.portal"),
  Lc = Symbol.for("react.fragment"),
  Fc = Symbol.for("react.strict_mode"),
  Oc = Symbol.for("react.profiler"),
  Vc = Symbol.for("react.provider"),
  Hc = Symbol.for("react.context"),
  $c = Symbol.for("react.forward_ref"),
  Wc = Symbol.for("react.suspense"),
  qc = Symbol.for("react.memo"),
  Qc = Symbol.for("react.lazy"),
  Xs = Symbol.iterator;
function Kc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xs && e[Xs]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var yo = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Mo = Object.assign,
  So = {};
function an(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = So),
    (this.updater = n || yo);
}
an.prototype.isReactComponent = {};
an.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function No() {}
No.prototype = an.prototype;
function ts(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = So),
    (this.updater = n || yo);
}
var ns = (ts.prototype = new No());
ns.constructor = ts;
Mo(ns, an.prototype);
ns.isPureReactComponent = !0;
var Zs = Array.isArray,
  Co = Object.prototype.hasOwnProperty,
  rs = { current: null },
  jo = { key: !0, ref: !0, __self: !0, __source: !0 };
function ko(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      Co.call(t, r) && !jo.hasOwnProperty(r) && (l[r] = t[r]);
  var o = arguments.length - 2;
  if (o === 1) l.children = n;
  else if (1 < o) {
    for (var u = Array(o), c = 0; c < o; c++) u[c] = arguments[c + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((o = e.defaultProps), o)) l[r] === void 0 && (l[r] = o[r]);
  return {
    $$typeof: er,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: rs.current,
  };
}
function Jc(e, t) {
  return {
    $$typeof: er,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ls(e) {
  return typeof e == "object" && e !== null && e.$$typeof === er;
}
function Yc(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var ea = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? Yc("" + e.key)
    : t.toString(36);
}
function br(e, t, n, r, l) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var a = !1;
  if (e === null) a = !0;
  else
    switch (s) {
      case "string":
      case "number":
        a = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case er:
          case Rc:
            a = !0;
        }
    }
  if (a)
    return (
      (a = e),
      (l = l(a)),
      (e = r === "" ? "." + Bl(a, 0) : r),
      Zs(l)
        ? ((n = ""),
          e != null && (n = e.replace(ea, "$&/") + "/"),
          br(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (ls(l) &&
            (l = Jc(
              l,
              n +
                (!l.key || (a && a.key === l.key)
                  ? ""
                  : ("" + l.key).replace(ea, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((a = 0), (r = r === "" ? "." : r + ":"), Zs(e)))
    for (var o = 0; o < e.length; o++) {
      s = e[o];
      var u = r + Bl(s, o);
      a += br(s, t, n, u, l);
    }
  else if (((u = Kc(e)), typeof u == "function"))
    for (e = u.call(e), o = 0; !(s = e.next()).done; )
      (s = s.value), (u = r + Bl(s, o++)), (a += br(s, t, n, u, l));
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
  return a;
}
function ur(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    br(e, r, "", "", function (s) {
      return t.call(n, s, l++);
    }),
    r
  );
}
function Xc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  Er = { transition: null },
  Zc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: Er,
    ReactCurrentOwner: rs,
  };
function bo() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = {
  map: ur,
  forEach: function (e, t, n) {
    ur(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ur(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ur(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ls(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
T.Component = an;
T.Fragment = Lc;
T.Profiler = Oc;
T.PureComponent = ts;
T.StrictMode = Fc;
T.Suspense = Wc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Zc;
T.act = bo;
T.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Mo({}, e.props),
    l = e.key,
    s = e.ref,
    a = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (a = rs.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var o = e.type.defaultProps;
    for (u in t)
      Co.call(t, u) &&
        !jo.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && o !== void 0 ? o[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    o = Array(u);
    for (var c = 0; c < u; c++) o[c] = arguments[c + 2];
    r.children = o;
  }
  return { $$typeof: er, type: e.type, key: l, ref: s, props: r, _owner: a };
};
T.createContext = function (e) {
  return (
    (e = {
      $$typeof: Hc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Vc, _context: e }),
    (e.Consumer = e)
  );
};
T.createElement = ko;
T.createFactory = function (e) {
  var t = ko.bind(null, e);
  return (t.type = e), t;
};
T.createRef = function () {
  return { current: null };
};
T.forwardRef = function (e) {
  return { $$typeof: $c, render: e };
};
T.isValidElement = ls;
T.lazy = function (e) {
  return { $$typeof: Qc, _payload: { _status: -1, _result: e }, _init: Xc };
};
T.memo = function (e, t) {
  return { $$typeof: qc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function (e) {
  var t = Er.transition;
  Er.transition = {};
  try {
    e();
  } finally {
    Er.transition = t;
  }
};
T.unstable_act = bo;
T.useCallback = function (e, t) {
  return ue.current.useCallback(e, t);
};
T.useContext = function (e) {
  return ue.current.useContext(e);
};
T.useDebugValue = function () {};
T.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
T.useEffect = function (e, t) {
  return ue.current.useEffect(e, t);
};
T.useId = function () {
  return ue.current.useId();
};
T.useImperativeHandle = function (e, t, n) {
  return ue.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function (e, t) {
  return ue.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function (e, t) {
  return ue.current.useLayoutEffect(e, t);
};
T.useMemo = function (e, t) {
  return ue.current.useMemo(e, t);
};
T.useReducer = function (e, t, n) {
  return ue.current.useReducer(e, t, n);
};
T.useRef = function (e) {
  return ue.current.useRef(e);
};
T.useState = function (e) {
  return ue.current.useState(e);
};
T.useSyncExternalStore = function (e, t, n) {
  return ue.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function () {
  return ue.current.useTransition();
};
T.version = "18.3.1";
wo.exports = T;
var P = wo.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ed = P,
  td = Symbol.for("react.element"),
  nd = Symbol.for("react.fragment"),
  rd = Object.prototype.hasOwnProperty,
  ld = ed.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  id = { key: !0, ref: !0, __self: !0, __source: !0 };
function Eo(e, t, n) {
  var r,
    l = {},
    s = null,
    a = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (a = t.ref);
  for (r in t) rd.call(t, r) && !id.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: td,
    type: e,
    key: s,
    ref: a,
    props: l,
    _owner: ld.current,
  };
}
hl.Fragment = nd;
hl.jsx = Eo;
hl.jsxs = Eo;
vo.exports = hl;
var i = vo.exports,
  Do = { exports: {} },
  ye = {},
  Po = { exports: {} },
  Io = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(C, D) {
    var I = C.length;
    C.push(D);
    e: for (; 0 < I; ) {
      var W = (I - 1) >>> 1,
        Y = C[W];
      if (0 < l(Y, D)) (C[W] = D), (C[I] = Y), (I = W);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0],
      I = C.pop();
    if (I !== D) {
      C[0] = I;
      e: for (var W = 0, Y = C.length, ar = Y >>> 1; W < ar; ) {
        var xt = 2 * (W + 1) - 1,
          Tl = C[xt],
          vt = xt + 1,
          or = C[vt];
        if (0 > l(Tl, I))
          vt < Y && 0 > l(or, Tl)
            ? ((C[W] = or), (C[vt] = I), (W = vt))
            : ((C[W] = Tl), (C[xt] = I), (W = xt));
        else if (vt < Y && 0 > l(or, I)) (C[W] = or), (C[vt] = I), (W = vt);
        else break e;
      }
    }
    return D;
  }
  function l(C, D) {
    var I = C.sortIndex - D.sortIndex;
    return I !== 0 ? I : C.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    e.unstable_now = function () {
      return a.now() - o;
    };
  }
  var u = [],
    c = [],
    g = 1,
    p = null,
    m = 3,
    x = !1,
    y = !1,
    S = !1,
    A = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    d = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(C) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= C)
        r(c), (D.sortIndex = D.expirationTime), t(u, D);
      else break;
      D = n(c);
    }
  }
  function v(C) {
    if (((S = !1), h(C), !y))
      if (n(u) !== null) (y = !0), Pl(M);
      else {
        var D = n(c);
        D !== null && Il(v, D.startTime - C);
      }
  }
  function M(C, D) {
    (y = !1), S && ((S = !1), f(b), (b = -1)), (x = !0);
    var I = m;
    try {
      for (
        h(D), p = n(u);
        p !== null && (!(p.expirationTime > D) || (C && !Ee()));

      ) {
        var W = p.callback;
        if (typeof W == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var Y = W(p.expirationTime <= D);
          (D = e.unstable_now()),
            typeof Y == "function" ? (p.callback = Y) : p === n(u) && r(u),
            h(D);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ar = !0;
      else {
        var xt = n(c);
        xt !== null && Il(v, xt.startTime - D), (ar = !1);
      }
      return ar;
    } finally {
      (p = null), (m = I), (x = !1);
    }
  }
  var j = !1,
    k = null,
    b = -1,
    $ = 5,
    B = -1;
  function Ee() {
    return !(e.unstable_now() - B < $);
  }
  function cn() {
    if (k !== null) {
      var C = e.unstable_now();
      B = C;
      var D = !0;
      try {
        D = k(!0, C);
      } finally {
        D ? dn() : ((j = !1), (k = null));
      }
    } else j = !1;
  }
  var dn;
  if (typeof d == "function")
    dn = function () {
      d(cn);
    };
  else if (typeof MessageChannel < "u") {
    var Ys = new MessageChannel(),
      zc = Ys.port2;
    (Ys.port1.onmessage = cn),
      (dn = function () {
        zc.postMessage(null);
      });
  } else
    dn = function () {
      A(cn, 0);
    };
  function Pl(C) {
    (k = C), j || ((j = !0), dn());
  }
  function Il(C, D) {
    b = A(function () {
      C(e.unstable_now());
    }, D);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || x || ((y = !0), Pl(M));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : ($ = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (C) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var D = 3;
          break;
        default:
          D = m;
      }
      var I = m;
      m = D;
      try {
        return C();
      } finally {
        m = I;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, D) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var I = m;
      m = C;
      try {
        return D();
      } finally {
        m = I;
      }
    }),
    (e.unstable_scheduleCallback = function (C, D, I) {
      var W = e.unstable_now();
      switch (
        (typeof I == "object" && I !== null
          ? ((I = I.delay), (I = typeof I == "number" && 0 < I ? W + I : W))
          : (I = W),
        C)
      ) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return (
        (Y = I + Y),
        (C = {
          id: g++,
          callback: D,
          priorityLevel: C,
          startTime: I,
          expirationTime: Y,
          sortIndex: -1,
        }),
        I > W
          ? ((C.sortIndex = I),
            t(c, C),
            n(u) === null &&
              C === n(c) &&
              (S ? (f(b), (b = -1)) : (S = !0), Il(v, I - W)))
          : ((C.sortIndex = Y), t(u, C), y || x || ((y = !0), Pl(M))),
        C
      );
    }),
    (e.unstable_shouldYield = Ee),
    (e.unstable_wrapCallback = function (C) {
      var D = m;
      return function () {
        var I = m;
        m = D;
        try {
          return C.apply(this, arguments);
        } finally {
          m = I;
        }
      };
    });
})(Io);
Po.exports = Io;
var sd = Po.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ad = P,
  we = sd;
function w(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var To = new Set(),
  Un = {};
function Tt(e, t) {
  Zt(e, t), Zt(e + "Capture", t);
}
function Zt(e, t) {
  for (Un[e] = t, e = 0; e < t.length; e++) To.add(t[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  si = Object.prototype.hasOwnProperty,
  od =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  ta = {},
  na = {};
function ud(e) {
  return si.call(na, e)
    ? !0
    : si.call(ta, e)
    ? !1
    : od.test(e)
    ? (na[e] = !0)
    : ((ta[e] = !0), !1);
}
function cd(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function dd(e, t, n, r) {
  if (t === null || typeof t > "u" || cd(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
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
function ce(e, t, n, r, l, s, a) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ne[t] = new ce(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ne[e] = new ce(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ne[e] = new ce(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ne[e] = new ce(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ne[e] = new ce(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ne[e] = new ce(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ne[e] = new ce(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var is = /[\-:]([a-z])/g;
function ss(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(is, ss);
    ne[t] = new ce(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(is, ss);
    ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(is, ss);
  ne[t] = new ce(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new ce(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ne[e] = new ce(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function as(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (dd(t, n, l, r) && (n = null),
    r || l === null
      ? ud(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Je = ad.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  cr = Symbol.for("react.element"),
  Ut = Symbol.for("react.portal"),
  Gt = Symbol.for("react.fragment"),
  os = Symbol.for("react.strict_mode"),
  ai = Symbol.for("react.profiler"),
  Bo = Symbol.for("react.provider"),
  Ao = Symbol.for("react.context"),
  us = Symbol.for("react.forward_ref"),
  oi = Symbol.for("react.suspense"),
  ui = Symbol.for("react.suspense_list"),
  cs = Symbol.for("react.memo"),
  Xe = Symbol.for("react.lazy"),
  Uo = Symbol.for("react.offscreen"),
  ra = Symbol.iterator;
function mn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ra && e[ra]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var V = Object.assign,
  Al;
function Mn(e) {
  if (Al === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Al = (t && t[1]) || "";
    }
  return (
    `
` +
    Al +
    e
  );
}
var Ul = !1;
function Gl(e, t) {
  if (!e || Ul) return "";
  Ul = !0;
  var n = Error.prepareStackTrace;
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
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          s = r.stack.split(`
`),
          a = l.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && l[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (l[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || l[a] !== s[o])) {
                var u =
                  `
` + l[a].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (Ul = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Mn(e) : "";
}
function md(e) {
  switch (e.tag) {
    case 5:
      return Mn(e.type);
    case 16:
      return Mn("Lazy");
    case 13:
      return Mn("Suspense");
    case 19:
      return Mn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Gl(e.type, !1)), e;
    case 11:
      return (e = Gl(e.type.render, !1)), e;
    case 1:
      return (e = Gl(e.type, !0)), e;
    default:
      return "";
  }
}
function ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Gt:
      return "Fragment";
    case Ut:
      return "Portal";
    case ai:
      return "Profiler";
    case os:
      return "StrictMode";
    case oi:
      return "Suspense";
    case ui:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Ao:
        return (e.displayName || "Context") + ".Consumer";
      case Bo:
        return (e._context.displayName || "Context") + ".Provider";
      case us:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case cs:
        return (
          (t = e.displayName || null), t !== null ? t : ci(e.type) || "Memo"
        );
      case Xe:
        (t = e._payload), (e = e._init);
        try {
          return ci(e(t));
        } catch {}
    }
  return null;
}
function fd(e) {
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
      return ci(t);
    case 8:
      return t === os ? "StrictMode" : "Mode";
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
function mt(e) {
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
function Go(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function hd(e) {
  var t = Go(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (a) {
          (r = "" + a), s.call(this, a);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (a) {
          r = "" + a;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function dr(e) {
  e._valueTracker || (e._valueTracker = hd(e));
}
function _o(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Go(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Rr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function di(e, t) {
  var n = t.checked;
  return V({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function la(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = mt(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function zo(e, t) {
  (t = t.checked), t != null && as(e, "checked", t, !1);
}
function mi(e, t) {
  zo(e, t);
  var n = mt(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? fi(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && fi(e, t.type, mt(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function ia(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function fi(e, t, n) {
  (t !== "number" || Rr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Sn = Array.isArray;
function qt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function hi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(w(91));
  return V({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function sa(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(w(92));
      if (Sn(n)) {
        if (1 < n.length) throw Error(w(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: mt(n) };
}
function Ro(e, t) {
  var n = mt(t.value),
    r = mt(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function aa(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lo(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function pi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lo(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var mr,
  Fo = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        mr = mr || document.createElement("div"),
          mr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = mr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Gn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var kn = {
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
  pd = ["Webkit", "ms", "Moz", "O"];
Object.keys(kn).forEach(function (e) {
  pd.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (kn[t] = kn[e]);
  });
});
function Oo(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (kn.hasOwnProperty(e) && kn[e])
    ? ("" + t).trim()
    : t + "px";
}
function Vo(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = Oo(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var gd = V(
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
function gi(e, t) {
  if (t) {
    if (gd[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(w(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(w(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(w(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(w(62));
  }
}
function xi(e, t) {
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
var vi = null;
function ds(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var wi = null,
  Qt = null,
  Kt = null;
function oa(e) {
  if ((e = rr(e))) {
    if (typeof wi != "function") throw Error(w(280));
    var t = e.stateNode;
    t && ((t = wl(t)), wi(e.stateNode, e.type, t));
  }
}
function Ho(e) {
  Qt ? (Kt ? Kt.push(e) : (Kt = [e])) : (Qt = e);
}
function $o() {
  if (Qt) {
    var e = Qt,
      t = Kt;
    if (((Kt = Qt = null), oa(e), t)) for (e = 0; e < t.length; e++) oa(t[e]);
  }
}
function Wo(e, t) {
  return e(t);
}
function qo() {}
var _l = !1;
function Qo(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return Wo(e, t, n);
  } finally {
    (_l = !1), (Qt !== null || Kt !== null) && (qo(), $o());
  }
}
function _n(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
  if (r === null) return null;
  n = r[t];
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(w(231, t, typeof n));
  return n;
}
var yi = !1;
if (We)
  try {
    var fn = {};
    Object.defineProperty(fn, "passive", {
      get: function () {
        yi = !0;
      },
    }),
      window.addEventListener("test", fn, fn),
      window.removeEventListener("test", fn, fn);
  } catch {
    yi = !1;
  }
function xd(e, t, n, r, l, s, a, o, u) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (g) {
    this.onError(g);
  }
}
var bn = !1,
  Lr = null,
  Fr = !1,
  Mi = null,
  vd = {
    onError: function (e) {
      (bn = !0), (Lr = e);
    },
  };
function wd(e, t, n, r, l, s, a, o, u) {
  (bn = !1), (Lr = null), xd.apply(vd, arguments);
}
function yd(e, t, n, r, l, s, a, o, u) {
  if ((wd.apply(this, arguments), bn)) {
    if (bn) {
      var c = Lr;
      (bn = !1), (Lr = null);
    } else throw Error(w(198));
    Fr || ((Fr = !0), (Mi = c));
  }
}
function Bt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Ko(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function ua(e) {
  if (Bt(e) !== e) throw Error(w(188));
}
function Md(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Bt(e)), t === null)) throw Error(w(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var s = l.alternate;
    if (s === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === s.child) {
      for (s = l.child; s; ) {
        if (s === n) return ua(l), e;
        if (s === r) return ua(l), t;
        s = s.sibling;
      }
      throw Error(w(188));
    }
    if (n.return !== r.return) (n = l), (r = s);
    else {
      for (var a = !1, o = l.child; o; ) {
        if (o === n) {
          (a = !0), (n = l), (r = s);
          break;
        }
        if (o === r) {
          (a = !0), (r = l), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (r = l);
            break;
          }
          if (o === r) {
            (a = !0), (r = s), (n = l);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(w(189));
      }
    }
    if (n.alternate !== r) throw Error(w(190));
  }
  if (n.tag !== 3) throw Error(w(188));
  return n.stateNode.current === n ? e : t;
}
function Jo(e) {
  return (e = Md(e)), e !== null ? Yo(e) : null;
}
function Yo(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yo(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Xo = we.unstable_scheduleCallback,
  ca = we.unstable_cancelCallback,
  Sd = we.unstable_shouldYield,
  Nd = we.unstable_requestPaint,
  q = we.unstable_now,
  Cd = we.unstable_getCurrentPriorityLevel,
  ms = we.unstable_ImmediatePriority,
  Zo = we.unstable_UserBlockingPriority,
  Or = we.unstable_NormalPriority,
  jd = we.unstable_LowPriority,
  eu = we.unstable_IdlePriority,
  pl = null,
  Re = null;
function kd(e) {
  if (Re && typeof Re.onCommitFiberRoot == "function")
    try {
      Re.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Be = Math.clz32 ? Math.clz32 : Dd,
  bd = Math.log,
  Ed = Math.LN2;
function Dd(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((bd(e) / Ed) | 0)) | 0;
}
var fr = 64,
  hr = 4194304;
function Nn(e) {
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
function Vr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    s = e.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~l;
    o !== 0 ? (r = Nn(o)) : ((s &= a), s !== 0 && (r = Nn(s)));
  } else (a = n & ~l), a !== 0 ? (r = Nn(a)) : s !== 0 && (r = Nn(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (s = t & -t), l >= s || (l === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Be(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Pd(e, t) {
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
function Id(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var a = 31 - Be(s),
      o = 1 << a,
      u = l[a];
    u === -1
      ? (!(o & n) || o & r) && (l[a] = Pd(o, t))
      : u <= t && (e.expiredLanes |= o),
      (s &= ~o);
  }
}
function Si(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function tu() {
  var e = fr;
  return (fr <<= 1), !(fr & 4194240) && (fr = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function tr(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Be(t)),
    (e[t] = n);
}
function Td(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Be(n),
      s = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~s);
  }
}
function fs(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Be(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var G = 0;
function nu(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var ru,
  hs,
  lu,
  iu,
  su,
  Ni = !1,
  pr = [],
  lt = null,
  it = null,
  st = null,
  zn = new Map(),
  Rn = new Map(),
  et = [],
  Bd =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function da(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      lt = null;
      break;
    case "dragenter":
    case "dragleave":
      it = null;
      break;
    case "mouseover":
    case "mouseout":
      st = null;
      break;
    case "pointerover":
    case "pointerout":
      zn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Rn.delete(t.pointerId);
  }
}
function hn(e, t, n, r, l, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [l],
      }),
      t !== null && ((t = rr(t)), t !== null && hs(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Ad(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (lt = hn(lt, e, t, n, r, l)), !0;
    case "dragenter":
      return (it = hn(it, e, t, n, r, l)), !0;
    case "mouseover":
      return (st = hn(st, e, t, n, r, l)), !0;
    case "pointerover":
      var s = l.pointerId;
      return zn.set(s, hn(zn.get(s) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (s = l.pointerId), Rn.set(s, hn(Rn.get(s) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function au(e) {
  var t = Mt(e.target);
  if (t !== null) {
    var n = Bt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Ko(n)), t !== null)) {
          (e.blockedOn = t),
            su(e.priority, function () {
              lu(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Dr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ci(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (vi = r), n.target.dispatchEvent(r), (vi = null);
    } else return (t = rr(n)), t !== null && hs(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ma(e, t, n) {
  Dr(e) && n.delete(t);
}
function Ud() {
  (Ni = !1),
    lt !== null && Dr(lt) && (lt = null),
    it !== null && Dr(it) && (it = null),
    st !== null && Dr(st) && (st = null),
    zn.forEach(ma),
    Rn.forEach(ma);
}
function pn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ni ||
      ((Ni = !0),
      we.unstable_scheduleCallback(we.unstable_NormalPriority, Ud)));
}
function Ln(e) {
  function t(l) {
    return pn(l, e);
  }
  if (0 < pr.length) {
    pn(pr[0], e);
    for (var n = 1; n < pr.length; n++) {
      var r = pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    lt !== null && pn(lt, e),
      it !== null && pn(it, e),
      st !== null && pn(st, e),
      zn.forEach(t),
      Rn.forEach(t),
      n = 0;
    n < et.length;
    n++
  )
    (r = et[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < et.length && ((n = et[0]), n.blockedOn === null); )
    au(n), n.blockedOn === null && et.shift();
}
var Jt = Je.ReactCurrentBatchConfig,
  Hr = !0;
function Gd(e, t, n, r) {
  var l = G,
    s = Jt.transition;
  Jt.transition = null;
  try {
    (G = 1), ps(e, t, n, r);
  } finally {
    (G = l), (Jt.transition = s);
  }
}
function _d(e, t, n, r) {
  var l = G,
    s = Jt.transition;
  Jt.transition = null;
  try {
    (G = 4), ps(e, t, n, r);
  } finally {
    (G = l), (Jt.transition = s);
  }
}
function ps(e, t, n, r) {
  if (Hr) {
    var l = Ci(e, t, n, r);
    if (l === null) Ql(e, t, r, $r, n), da(e, r);
    else if (Ad(l, e, t, n, r)) r.stopPropagation();
    else if ((da(e, r), t & 4 && -1 < Bd.indexOf(e))) {
      for (; l !== null; ) {
        var s = rr(l);
        if (
          (s !== null && ru(s),
          (s = Ci(e, t, n, r)),
          s === null && Ql(e, t, r, $r, n),
          s === l)
        )
          break;
        l = s;
      }
      l !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var $r = null;
function Ci(e, t, n, r) {
  if ((($r = null), (e = ds(r)), (e = Mt(e)), e !== null))
    if (((t = Bt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Ko(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($r = e), null;
}
function ou(e) {
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
      switch (Cd()) {
        case ms:
          return 1;
        case Zo:
          return 4;
        case Or:
        case jd:
          return 16;
        case eu:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var nt = null,
  gs = null,
  Pr = null;
function uu() {
  if (Pr) return Pr;
  var e,
    t = gs,
    n = t.length,
    r,
    l = "value" in nt ? nt.value : nt.textContent,
    s = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var a = n - e;
  for (r = 1; r <= a && t[n - r] === l[s - r]; r++);
  return (Pr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Ir(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function gr() {
  return !0;
}
function fa() {
  return !1;
}
function Me(e) {
  function t(n, r, l, s, a) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in e)
      e.hasOwnProperty(o) && ((n = e[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? gr
        : fa),
      (this.isPropagationStopped = fa),
      this
    );
  }
  return (
    V(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = gr));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = gr));
      },
      persist: function () {},
      isPersistent: gr,
    }),
    t
  );
}
var on = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xs = Me(on),
  nr = V({}, on, { view: 0, detail: 0 }),
  zd = Me(nr),
  Rl,
  Ll,
  gn,
  gl = V({}, nr, {
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
    getModifierState: vs,
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
        : (e !== gn &&
            (gn && e.type === "mousemove"
              ? ((Rl = e.screenX - gn.screenX), (Ll = e.screenY - gn.screenY))
              : (Ll = Rl = 0),
            (gn = e)),
          Rl);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Ll;
    },
  }),
  ha = Me(gl),
  Rd = V({}, gl, { dataTransfer: 0 }),
  Ld = Me(Rd),
  Fd = V({}, nr, { relatedTarget: 0 }),
  Fl = Me(Fd),
  Od = V({}, on, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vd = Me(Od),
  Hd = V({}, on, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  $d = Me(Hd),
  Wd = V({}, on, { data: 0 }),
  pa = Me(Wd),
  qd = {
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
  Qd = {
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
  Kd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Kd[e]) ? !!t[e] : !1;
}
function vs() {
  return Jd;
}
var Yd = V({}, nr, {
    key: function (e) {
      if (e.key) {
        var t = qd[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Ir(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Qd[e.keyCode] || "Unidentified"
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
    getModifierState: vs,
    charCode: function (e) {
      return e.type === "keypress" ? Ir(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Ir(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Xd = Me(Yd),
  Zd = V({}, gl, {
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
  ga = Me(Zd),
  em = V({}, nr, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vs,
  }),
  tm = Me(em),
  nm = V({}, on, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  rm = Me(nm),
  lm = V({}, gl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
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
  im = Me(lm),
  sm = [9, 13, 27, 32],
  ws = We && "CompositionEvent" in window,
  En = null;
We && "documentMode" in document && (En = document.documentMode);
var am = We && "TextEvent" in window && !En,
  cu = We && (!ws || (En && 8 < En && 11 >= En)),
  xa = " ",
  va = !1;
function du(e, t) {
  switch (e) {
    case "keyup":
      return sm.indexOf(t.keyCode) !== -1;
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
function mu(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var _t = !1;
function om(e, t) {
  switch (e) {
    case "compositionend":
      return mu(t);
    case "keypress":
      return t.which !== 32 ? null : ((va = !0), xa);
    case "textInput":
      return (e = t.data), e === xa && va ? null : e;
    default:
      return null;
  }
}
function um(e, t) {
  if (_t)
    return e === "compositionend" || (!ws && du(e, t))
      ? ((e = uu()), (Pr = gs = nt = null), (_t = !1), e)
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
      return cu && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var cm = {
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
function wa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!cm[e.type] : t === "textarea";
}
function fu(e, t, n, r) {
  Ho(r),
    (t = Wr(t, "onChange")),
    0 < t.length &&
      ((n = new xs("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Dn = null,
  Fn = null;
function dm(e) {
  Cu(e, 0);
}
function xl(e) {
  var t = Lt(e);
  if (_o(t)) return e;
}
function mm(e, t) {
  if (e === "change") return t;
}
var hu = !1;
if (We) {
  var Ol;
  if (We) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var ya = document.createElement("div");
      ya.setAttribute("oninput", "return;"),
        (Vl = typeof ya.oninput == "function");
    }
    Ol = Vl;
  } else Ol = !1;
  hu = Ol && (!document.documentMode || 9 < document.documentMode);
}
function Ma() {
  Dn && (Dn.detachEvent("onpropertychange", pu), (Fn = Dn = null));
}
function pu(e) {
  if (e.propertyName === "value" && xl(Fn)) {
    var t = [];
    fu(t, Fn, e, ds(e)), Qo(dm, t);
  }
}
function fm(e, t, n) {
  e === "focusin"
    ? (Ma(), (Dn = t), (Fn = n), Dn.attachEvent("onpropertychange", pu))
    : e === "focusout" && Ma();
}
function hm(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return xl(Fn);
}
function pm(e, t) {
  if (e === "click") return xl(t);
}
function gm(e, t) {
  if (e === "input" || e === "change") return xl(t);
}
function xm(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Ue = typeof Object.is == "function" ? Object.is : xm;
function On(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function Sa(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Na(e, t) {
  var n = Sa(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Sa(n);
  }
}
function gu(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? gu(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function xu() {
  for (var e = window, t = Rr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Rr(e.document);
  }
  return t;
}
function ys(e) {
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
function vm(e) {
  var t = xu(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    gu(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ys(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          s = Math.min(r.start, l);
        (r = r.end === void 0 ? s : Math.min(r.end, l)),
          !e.extend && s > r && ((l = r), (r = s), (s = l)),
          (l = Na(n, s));
        var a = Na(n, r);
        l &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var wm = We && "documentMode" in document && 11 >= document.documentMode,
  zt = null,
  ji = null,
  Pn = null,
  ki = !1;
function Ca(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ki ||
    zt == null ||
    zt !== Rr(r) ||
    ((r = zt),
    "selectionStart" in r && ys(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && On(Pn, r)) ||
      ((Pn = r),
      (r = Wr(ji, "onSelect")),
      0 < r.length &&
        ((t = new xs("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zt))));
}
function xr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Rt = {
    animationend: xr("Animation", "AnimationEnd"),
    animationiteration: xr("Animation", "AnimationIteration"),
    animationstart: xr("Animation", "AnimationStart"),
    transitionend: xr("Transition", "TransitionEnd"),
  },
  Hl = {},
  vu = {};
We &&
  ((vu = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Rt.animationend.animation,
    delete Rt.animationiteration.animation,
    delete Rt.animationstart.animation),
  "TransitionEvent" in window || delete Rt.transitionend.transition);
function vl(e) {
  if (Hl[e]) return Hl[e];
  if (!Rt[e]) return e;
  var t = Rt[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in vu) return (Hl[e] = t[n]);
  return e;
}
var wu = vl("animationend"),
  yu = vl("animationiteration"),
  Mu = vl("animationstart"),
  Su = vl("transitionend"),
  Nu = new Map(),
  ja =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function ht(e, t) {
  Nu.set(e, t), Tt(t, [e]);
}
for (var $l = 0; $l < ja.length; $l++) {
  var Wl = ja[$l],
    ym = Wl.toLowerCase(),
    Mm = Wl[0].toUpperCase() + Wl.slice(1);
  ht(ym, "on" + Mm);
}
ht(wu, "onAnimationEnd");
ht(yu, "onAnimationIteration");
ht(Mu, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(Su, "onTransitionEnd");
Zt("onMouseEnter", ["mouseout", "mouseover"]);
Zt("onMouseLeave", ["mouseout", "mouseover"]);
Zt("onPointerEnter", ["pointerout", "pointerover"]);
Zt("onPointerLeave", ["pointerout", "pointerover"]);
Tt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Tt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Tt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Tt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Cn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Sm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));
function ka(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), yd(r, t, void 0, e), (e.currentTarget = null);
}
function Cu(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var o = r[a],
            u = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), u !== s && l.isPropagationStopped())) break e;
          ka(l, o, c), (s = u);
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((o = r[a]),
            (u = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            u !== s && l.isPropagationStopped())
          )
            break e;
          ka(l, o, c), (s = u);
        }
    }
  }
  if (Fr) throw ((e = Mi), (Fr = !1), (Mi = null), e);
}
function z(e, t) {
  var n = t[Ii];
  n === void 0 && (n = t[Ii] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ju(t, e, 2, !1), n.add(r));
}
function ql(e, t, n) {
  var r = 0;
  t && (r |= 4), ju(n, e, r, t);
}
var vr = "_reactListening" + Math.random().toString(36).slice(2);
function Vn(e) {
  if (!e[vr]) {
    (e[vr] = !0),
      To.forEach(function (n) {
        n !== "selectionchange" && (Sm.has(n) || ql(n, !1, e), ql(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[vr] || ((t[vr] = !0), ql("selectionchange", !1, t));
  }
}
function ju(e, t, n, r) {
  switch (ou(t)) {
    case 1:
      var l = Gd;
      break;
    case 4:
      l = _d;
      break;
    default:
      l = ps;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !yi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, l) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var a = r.tag;
      if (a === 3 || a === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || (o.nodeType === 8 && o.parentNode === l)) break;
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var u = a.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = a.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = Mt(o)), a === null)) return;
          if (((u = a.tag), u === 5 || u === 6)) {
            r = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
  Qo(function () {
    var c = s,
      g = ds(n),
      p = [];
    e: {
      var m = Nu.get(e);
      if (m !== void 0) {
        var x = xs,
          y = e;
        switch (e) {
          case "keypress":
            if (Ir(n) === 0) break e;
          case "keydown":
          case "keyup":
            x = Xd;
            break;
          case "focusin":
            (y = "focus"), (x = Fl);
            break;
          case "focusout":
            (y = "blur"), (x = Fl);
            break;
          case "beforeblur":
          case "afterblur":
            x = Fl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            x = ha;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            x = Ld;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            x = tm;
            break;
          case wu:
          case yu:
          case Mu:
            x = Vd;
            break;
          case Su:
            x = rm;
            break;
          case "scroll":
            x = zd;
            break;
          case "wheel":
            x = im;
            break;
          case "copy":
          case "cut":
          case "paste":
            x = $d;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            x = ga;
        }
        var S = (t & 4) !== 0,
          A = !S && e === "scroll",
          f = S ? (m !== null ? m + "Capture" : null) : m;
        S = [];
        for (var d = c, h; d !== null; ) {
          h = d;
          var v = h.stateNode;
          if (
            (h.tag === 5 &&
              v !== null &&
              ((h = v),
              f !== null && ((v = _n(d, f)), v != null && S.push(Hn(d, v, h)))),
            A)
          )
            break;
          d = d.return;
        }
        0 < S.length &&
          ((m = new x(m, y, null, n, g)), p.push({ event: m, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (x = e === "mouseout" || e === "pointerout"),
          m &&
            n !== vi &&
            (y = n.relatedTarget || n.fromElement) &&
            (Mt(y) || y[qe]))
        )
          break e;
        if (
          (x || m) &&
          ((m =
            g.window === g
              ? g
              : (m = g.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          x
            ? ((y = n.relatedTarget || n.toElement),
              (x = c),
              (y = y ? Mt(y) : null),
              y !== null &&
                ((A = Bt(y)), y !== A || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((x = null), (y = c)),
          x !== y)
        ) {
          if (
            ((S = ha),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (d = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((S = ga),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (d = "pointer")),
            (A = x == null ? m : Lt(x)),
            (h = y == null ? m : Lt(y)),
            (m = new S(v, d + "leave", x, n, g)),
            (m.target = A),
            (m.relatedTarget = h),
            (v = null),
            Mt(g) === c &&
              ((S = new S(f, d + "enter", y, n, g)),
              (S.target = h),
              (S.relatedTarget = A),
              (v = S)),
            (A = v),
            x && y)
          )
            t: {
              for (S = x, f = y, d = 0, h = S; h; h = At(h)) d++;
              for (h = 0, v = f; v; v = At(v)) h++;
              for (; 0 < d - h; ) (S = At(S)), d--;
              for (; 0 < h - d; ) (f = At(f)), h--;
              for (; d--; ) {
                if (S === f || (f !== null && S === f.alternate)) break t;
                (S = At(S)), (f = At(f));
              }
              S = null;
            }
          else S = null;
          x !== null && ba(p, m, x, S, !1),
            y !== null && A !== null && ba(p, A, y, S, !0);
        }
      }
      e: {
        if (
          ((m = c ? Lt(c) : window),
          (x = m.nodeName && m.nodeName.toLowerCase()),
          x === "select" || (x === "input" && m.type === "file"))
        )
          var M = mm;
        else if (wa(m))
          if (hu) M = gm;
          else {
            M = hm;
            var j = fm;
          }
        else
          (x = m.nodeName) &&
            x.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (M = pm);
        if (M && (M = M(e, c))) {
          fu(p, M, n, g);
          break e;
        }
        j && j(e, m, c),
          e === "focusout" &&
            (j = m._wrapperState) &&
            j.controlled &&
            m.type === "number" &&
            fi(m, "number", m.value);
      }
      switch (((j = c ? Lt(c) : window), e)) {
        case "focusin":
          (wa(j) || j.contentEditable === "true") &&
            ((zt = j), (ji = c), (Pn = null));
          break;
        case "focusout":
          Pn = ji = zt = null;
          break;
        case "mousedown":
          ki = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (ki = !1), Ca(p, n, g);
          break;
        case "selectionchange":
          if (wm) break;
        case "keydown":
        case "keyup":
          Ca(p, n, g);
      }
      var k;
      if (ws)
        e: {
          switch (e) {
            case "compositionstart":
              var b = "onCompositionStart";
              break e;
            case "compositionend":
              b = "onCompositionEnd";
              break e;
            case "compositionupdate":
              b = "onCompositionUpdate";
              break e;
          }
          b = void 0;
        }
      else
        _t
          ? du(e, n) && (b = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (b = "onCompositionStart");
      b &&
        (cu &&
          n.locale !== "ko" &&
          (_t || b !== "onCompositionStart"
            ? b === "onCompositionEnd" && _t && (k = uu())
            : ((nt = g),
              (gs = "value" in nt ? nt.value : nt.textContent),
              (_t = !0))),
        (j = Wr(c, b)),
        0 < j.length &&
          ((b = new pa(b, e, null, n, g)),
          p.push({ event: b, listeners: j }),
          k ? (b.data = k) : ((k = mu(n)), k !== null && (b.data = k)))),
        (k = am ? om(e, n) : um(e, n)) &&
          ((c = Wr(c, "onBeforeInput")),
          0 < c.length &&
            ((g = new pa("onBeforeInput", "beforeinput", null, n, g)),
            p.push({ event: g, listeners: c }),
            (g.data = k)));
    }
    Cu(p, t);
  });
}
function Hn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Wr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      s = l.stateNode;
    l.tag === 5 &&
      s !== null &&
      ((l = s),
      (s = _n(e, n)),
      s != null && r.unshift(Hn(e, s, l)),
      (s = _n(e, t)),
      s != null && r.push(Hn(e, s, l))),
      (e = e.return);
  }
  return r;
}
function At(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function ba(e, t, n, r, l) {
  for (var s = t._reactName, a = []; n !== null && n !== r; ) {
    var o = n,
      u = o.alternate,
      c = o.stateNode;
    if (u !== null && u === r) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      l
        ? ((u = _n(n, s)), u != null && a.unshift(Hn(n, u, o)))
        : l || ((u = _n(n, s)), u != null && a.push(Hn(n, u, o)))),
      (n = n.return);
  }
  a.length !== 0 && e.push({ event: t, listeners: a });
}
var Nm = /\r\n?/g,
  Cm = /\u0000|\uFFFD/g;
function Ea(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Nm,
      `
`
    )
    .replace(Cm, "");
}
function wr(e, t, n) {
  if (((t = Ea(t)), Ea(e) !== t && n)) throw Error(w(425));
}
function qr() {}
var bi = null,
  Ei = null;
function Di(e, t) {
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
var Pi = typeof setTimeout == "function" ? setTimeout : void 0,
  jm = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Da = typeof Promise == "function" ? Promise : void 0,
  km =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Da < "u"
      ? function (e) {
          return Da.resolve(null).then(e).catch(bm);
        }
      : Pi;
function bm(e) {
  setTimeout(function () {
    throw e;
  });
}
function Kl(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Ln(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Ln(t);
}
function at(e) {
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
function Pa(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var un = Math.random().toString(36).slice(2),
  ze = "__reactFiber$" + un,
  $n = "__reactProps$" + un,
  qe = "__reactContainer$" + un,
  Ii = "__reactEvents$" + un,
  Em = "__reactListeners$" + un,
  Dm = "__reactHandles$" + un;
function Mt(e) {
  var t = e[ze];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[qe] || n[ze])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Pa(e); e !== null; ) {
          if ((n = e[ze])) return n;
          e = Pa(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function rr(e) {
  return (
    (e = e[ze] || e[qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Lt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(w(33));
}
function wl(e) {
  return e[$n] || null;
}
var Ti = [],
  Ft = -1;
function pt(e) {
  return { current: e };
}
function R(e) {
  0 > Ft || ((e.current = Ti[Ft]), (Ti[Ft] = null), Ft--);
}
function _(e, t) {
  Ft++, (Ti[Ft] = e.current), (e.current = t);
}
var ft = {},
  se = pt(ft),
  fe = pt(!1),
  kt = ft;
function en(e, t) {
  var n = e.type.contextTypes;
  if (!n) return ft;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    s;
  for (s in n) l[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function he(e) {
  return (e = e.childContextTypes), e != null;
}
function Qr() {
  R(fe), R(se);
}
function Ia(e, t, n) {
  if (se.current !== ft) throw Error(w(168));
  _(se, t), _(fe, n);
}
function ku(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(w(108, fd(e) || "Unknown", l));
  return V({}, n, r);
}
function Kr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || ft),
    (kt = se.current),
    _(se, e),
    _(fe, fe.current),
    !0
  );
}
function Ta(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(w(169));
  n
    ? ((e = ku(e, t, kt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      R(fe),
      R(se),
      _(se, e))
    : R(fe),
    _(fe, n);
}
var Oe = null,
  yl = !1,
  Jl = !1;
function bu(e) {
  Oe === null ? (Oe = [e]) : Oe.push(e);
}
function Pm(e) {
  (yl = !0), bu(e);
}
function gt() {
  if (!Jl && Oe !== null) {
    Jl = !0;
    var e = 0,
      t = G;
    try {
      var n = Oe;
      for (G = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Oe = null), (yl = !1);
    } catch (l) {
      throw (Oe !== null && (Oe = Oe.slice(e + 1)), Xo(ms, gt), l);
    } finally {
      (G = t), (Jl = !1);
    }
  }
  return null;
}
var Ot = [],
  Vt = 0,
  Jr = null,
  Yr = 0,
  Se = [],
  Ne = 0,
  bt = null,
  Ve = 1,
  He = "";
function wt(e, t) {
  (Ot[Vt++] = Yr), (Ot[Vt++] = Jr), (Jr = e), (Yr = t);
}
function Eu(e, t, n) {
  (Se[Ne++] = Ve), (Se[Ne++] = He), (Se[Ne++] = bt), (bt = e);
  var r = Ve;
  e = He;
  var l = 32 - Be(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var s = 32 - Be(t) + l;
  if (30 < s) {
    var a = l - (l % 5);
    (s = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (l -= a),
      (Ve = (1 << (32 - Be(t) + l)) | (n << l) | r),
      (He = s + e);
  } else (Ve = (1 << s) | (n << l) | r), (He = e);
}
function Ms(e) {
  e.return !== null && (wt(e, 1), Eu(e, 1, 0));
}
function Ss(e) {
  for (; e === Jr; )
    (Jr = Ot[--Vt]), (Ot[Vt] = null), (Yr = Ot[--Vt]), (Ot[Vt] = null);
  for (; e === bt; )
    (bt = Se[--Ne]),
      (Se[Ne] = null),
      (He = Se[--Ne]),
      (Se[Ne] = null),
      (Ve = Se[--Ne]),
      (Se[Ne] = null);
}
var ve = null,
  xe = null,
  L = !1,
  Te = null;
function Du(e, t) {
  var n = Ce(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Ba(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ve = e), (xe = at(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ve = e), (xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = bt !== null ? { id: Ve, overflow: He } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ce(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ve = e),
            (xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Bi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ai(e) {
  if (L) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Ba(e, t)) {
        if (Bi(e)) throw Error(w(418));
        t = at(n.nextSibling);
        var r = ve;
        t && Ba(e, t)
          ? Du(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (L = !1), (ve = e));
      }
    } else {
      if (Bi(e)) throw Error(w(418));
      (e.flags = (e.flags & -4097) | 2), (L = !1), (ve = e);
    }
  }
}
function Aa(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function yr(e) {
  if (e !== ve) return !1;
  if (!L) return Aa(e), (L = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps))),
    t && (t = xe))
  ) {
    if (Bi(e)) throw (Pu(), Error(w(418)));
    for (; t; ) Du(e, t), (t = at(t.nextSibling));
  }
  if ((Aa(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(w(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = at(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = ve ? at(e.stateNode.nextSibling) : null;
  return !0;
}
function Pu() {
  for (var e = xe; e; ) e = at(e.nextSibling);
}
function tn() {
  (xe = ve = null), (L = !1);
}
function Ns(e) {
  Te === null ? (Te = [e]) : Te.push(e);
}
var Im = Je.ReactCurrentBatchConfig;
function xn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(w(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(w(147, e));
      var l = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (a) {
            var o = l.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(w(284));
    if (!n._owner) throw Error(w(290, e));
  }
  return e;
}
function Mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      w(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Ua(e) {
  var t = e._init;
  return t(e._payload);
}
function Iu(e) {
  function t(f, d) {
    if (e) {
      var h = f.deletions;
      h === null ? ((f.deletions = [d]), (f.flags |= 16)) : h.push(d);
    }
  }
  function n(f, d) {
    if (!e) return null;
    for (; d !== null; ) t(f, d), (d = d.sibling);
    return null;
  }
  function r(f, d) {
    for (f = new Map(); d !== null; )
      d.key !== null ? f.set(d.key, d) : f.set(d.index, d), (d = d.sibling);
    return f;
  }
  function l(f, d) {
    return (f = dt(f, d)), (f.index = 0), (f.sibling = null), f;
  }
  function s(f, d, h) {
    return (
      (f.index = h),
      e
        ? ((h = f.alternate),
          h !== null
            ? ((h = h.index), h < d ? ((f.flags |= 2), d) : h)
            : ((f.flags |= 2), d))
        : ((f.flags |= 1048576), d)
    );
  }
  function a(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function o(f, d, h, v) {
    return d === null || d.tag !== 6
      ? ((d = ri(h, f.mode, v)), (d.return = f), d)
      : ((d = l(d, h)), (d.return = f), d);
  }
  function u(f, d, h, v) {
    var M = h.type;
    return M === Gt
      ? g(f, d, h.props.children, v, h.key)
      : d !== null &&
        (d.elementType === M ||
          (typeof M == "object" &&
            M !== null &&
            M.$$typeof === Xe &&
            Ua(M) === d.type))
      ? ((v = l(d, h.props)), (v.ref = xn(f, d, h)), (v.return = f), v)
      : ((v = zr(h.type, h.key, h.props, null, f.mode, v)),
        (v.ref = xn(f, d, h)),
        (v.return = f),
        v);
  }
  function c(f, d, h, v) {
    return d === null ||
      d.tag !== 4 ||
      d.stateNode.containerInfo !== h.containerInfo ||
      d.stateNode.implementation !== h.implementation
      ? ((d = li(h, f.mode, v)), (d.return = f), d)
      : ((d = l(d, h.children || [])), (d.return = f), d);
  }
  function g(f, d, h, v, M) {
    return d === null || d.tag !== 7
      ? ((d = jt(h, f.mode, v, M)), (d.return = f), d)
      : ((d = l(d, h)), (d.return = f), d);
  }
  function p(f, d, h) {
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return (d = ri("" + d, f.mode, h)), (d.return = f), d;
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          return (
            (h = zr(d.type, d.key, d.props, null, f.mode, h)),
            (h.ref = xn(f, null, d)),
            (h.return = f),
            h
          );
        case Ut:
          return (d = li(d, f.mode, h)), (d.return = f), d;
        case Xe:
          var v = d._init;
          return p(f, v(d._payload), h);
      }
      if (Sn(d) || mn(d))
        return (d = jt(d, f.mode, h, null)), (d.return = f), d;
      Mr(f, d);
    }
    return null;
  }
  function m(f, d, h, v) {
    var M = d !== null ? d.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return M !== null ? null : o(f, d, "" + h, v);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case cr:
          return h.key === M ? u(f, d, h, v) : null;
        case Ut:
          return h.key === M ? c(f, d, h, v) : null;
        case Xe:
          return (M = h._init), m(f, d, M(h._payload), v);
      }
      if (Sn(h) || mn(h)) return M !== null ? null : g(f, d, h, v, null);
      Mr(f, h);
    }
    return null;
  }
  function x(f, d, h, v, M) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(h) || null), o(d, f, "" + v, M);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case cr:
          return (f = f.get(v.key === null ? h : v.key) || null), u(d, f, v, M);
        case Ut:
          return (f = f.get(v.key === null ? h : v.key) || null), c(d, f, v, M);
        case Xe:
          var j = v._init;
          return x(f, d, h, j(v._payload), M);
      }
      if (Sn(v) || mn(v)) return (f = f.get(h) || null), g(d, f, v, M, null);
      Mr(d, v);
    }
    return null;
  }
  function y(f, d, h, v) {
    for (
      var M = null, j = null, k = d, b = (d = 0), $ = null;
      k !== null && b < h.length;
      b++
    ) {
      k.index > b ? (($ = k), (k = null)) : ($ = k.sibling);
      var B = m(f, k, h[b], v);
      if (B === null) {
        k === null && (k = $);
        break;
      }
      e && k && B.alternate === null && t(f, k),
        (d = s(B, d, b)),
        j === null ? (M = B) : (j.sibling = B),
        (j = B),
        (k = $);
    }
    if (b === h.length) return n(f, k), L && wt(f, b), M;
    if (k === null) {
      for (; b < h.length; b++)
        (k = p(f, h[b], v)),
          k !== null &&
            ((d = s(k, d, b)), j === null ? (M = k) : (j.sibling = k), (j = k));
      return L && wt(f, b), M;
    }
    for (k = r(f, k); b < h.length; b++)
      ($ = x(k, f, b, h[b], v)),
        $ !== null &&
          (e && $.alternate !== null && k.delete($.key === null ? b : $.key),
          (d = s($, d, b)),
          j === null ? (M = $) : (j.sibling = $),
          (j = $));
    return (
      e &&
        k.forEach(function (Ee) {
          return t(f, Ee);
        }),
      L && wt(f, b),
      M
    );
  }
  function S(f, d, h, v) {
    var M = mn(h);
    if (typeof M != "function") throw Error(w(150));
    if (((h = M.call(h)), h == null)) throw Error(w(151));
    for (
      var j = (M = null), k = d, b = (d = 0), $ = null, B = h.next();
      k !== null && !B.done;
      b++, B = h.next()
    ) {
      k.index > b ? (($ = k), (k = null)) : ($ = k.sibling);
      var Ee = m(f, k, B.value, v);
      if (Ee === null) {
        k === null && (k = $);
        break;
      }
      e && k && Ee.alternate === null && t(f, k),
        (d = s(Ee, d, b)),
        j === null ? (M = Ee) : (j.sibling = Ee),
        (j = Ee),
        (k = $);
    }
    if (B.done) return n(f, k), L && wt(f, b), M;
    if (k === null) {
      for (; !B.done; b++, B = h.next())
        (B = p(f, B.value, v)),
          B !== null &&
            ((d = s(B, d, b)), j === null ? (M = B) : (j.sibling = B), (j = B));
      return L && wt(f, b), M;
    }
    for (k = r(f, k); !B.done; b++, B = h.next())
      (B = x(k, f, b, B.value, v)),
        B !== null &&
          (e && B.alternate !== null && k.delete(B.key === null ? b : B.key),
          (d = s(B, d, b)),
          j === null ? (M = B) : (j.sibling = B),
          (j = B));
    return (
      e &&
        k.forEach(function (cn) {
          return t(f, cn);
        }),
      L && wt(f, b),
      M
    );
  }
  function A(f, d, h, v) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Gt &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case cr:
          e: {
            for (var M = h.key, j = d; j !== null; ) {
              if (j.key === M) {
                if (((M = h.type), M === Gt)) {
                  if (j.tag === 7) {
                    n(f, j.sibling),
                      (d = l(j, h.props.children)),
                      (d.return = f),
                      (f = d);
                    break e;
                  }
                } else if (
                  j.elementType === M ||
                  (typeof M == "object" &&
                    M !== null &&
                    M.$$typeof === Xe &&
                    Ua(M) === j.type)
                ) {
                  n(f, j.sibling),
                    (d = l(j, h.props)),
                    (d.ref = xn(f, j, h)),
                    (d.return = f),
                    (f = d);
                  break e;
                }
                n(f, j);
                break;
              } else t(f, j);
              j = j.sibling;
            }
            h.type === Gt
              ? ((d = jt(h.props.children, f.mode, v, h.key)),
                (d.return = f),
                (f = d))
              : ((v = zr(h.type, h.key, h.props, null, f.mode, v)),
                (v.ref = xn(f, d, h)),
                (v.return = f),
                (f = v));
          }
          return a(f);
        case Ut:
          e: {
            for (j = h.key; d !== null; ) {
              if (d.key === j)
                if (
                  d.tag === 4 &&
                  d.stateNode.containerInfo === h.containerInfo &&
                  d.stateNode.implementation === h.implementation
                ) {
                  n(f, d.sibling),
                    (d = l(d, h.children || [])),
                    (d.return = f),
                    (f = d);
                  break e;
                } else {
                  n(f, d);
                  break;
                }
              else t(f, d);
              d = d.sibling;
            }
            (d = li(h, f.mode, v)), (d.return = f), (f = d);
          }
          return a(f);
        case Xe:
          return (j = h._init), A(f, d, j(h._payload), v);
      }
      if (Sn(h)) return y(f, d, h, v);
      if (mn(h)) return S(f, d, h, v);
      Mr(f, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        d !== null && d.tag === 6
          ? (n(f, d.sibling), (d = l(d, h)), (d.return = f), (f = d))
          : (n(f, d), (d = ri(h, f.mode, v)), (d.return = f), (f = d)),
        a(f))
      : n(f, d);
  }
  return A;
}
var nn = Iu(!0),
  Tu = Iu(!1),
  Xr = pt(null),
  Zr = null,
  Ht = null,
  Cs = null;
function js() {
  Cs = Ht = Zr = null;
}
function ks(e) {
  var t = Xr.current;
  R(Xr), (e._currentValue = t);
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Yt(e, t) {
  (Zr = e),
    (Cs = Ht = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (me = !0), (e.firstContext = null));
}
function ke(e) {
  var t = e._currentValue;
  if (Cs !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Ht === null)) {
      if (Zr === null) throw Error(w(308));
      (Ht = e), (Zr.dependencies = { lanes: 0, firstContext: e });
    } else Ht = Ht.next = e;
  return t;
}
var St = null;
function bs(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Bu(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), bs(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Qe(e, r)
  );
}
function Qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ze = !1;
function Es(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Au(e, t) {
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
function $e(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ot(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), U & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Qe(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), bs(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Qe(e, n)
  );
}
function Tr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fs(e, n);
  }
}
function Ga(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (l = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (l = s = t) : (s = s.next = t);
    } else l = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  Ze = !1;
  var s = l.firstBaseUpdate,
    a = l.lastBaseUpdate,
    o = l.shared.pending;
  if (o !== null) {
    l.shared.pending = null;
    var u = o,
      c = u.next;
    (u.next = null), a === null ? (s = c) : (a.next = c), (a = u);
    var g = e.alternate;
    g !== null &&
      ((g = g.updateQueue),
      (o = g.lastBaseUpdate),
      o !== a &&
        (o === null ? (g.firstBaseUpdate = c) : (o.next = c),
        (g.lastBaseUpdate = u)));
  }
  if (s !== null) {
    var p = l.baseState;
    (a = 0), (g = c = u = null), (o = s);
    do {
      var m = o.lane,
        x = o.eventTime;
      if ((r & m) === m) {
        g !== null &&
          (g = g.next =
            {
              eventTime: x,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var y = e,
            S = o;
          switch (((m = t), (x = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == "function")) {
                p = y.call(x, p, m);
                break e;
              }
              p = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = S.payload),
                (m = typeof y == "function" ? y.call(x, p, m) : y),
                m == null)
              )
                break e;
              p = V({}, p, m);
              break e;
            case 2:
              Ze = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [o]) : m.push(o));
      } else
        (x = {
          eventTime: x,
          lane: m,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          g === null ? ((c = g = x), (u = p)) : (g = g.next = x),
          (a |= m);
      if (((o = o.next), o === null)) {
        if (((o = l.shared.pending), o === null)) break;
        (m = o),
          (o = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (g === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = g),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (a |= l.lane), (l = l.next);
      while (l !== t);
    } else s === null && (l.shared.lanes = 0);
    (Dt |= a), (e.lanes = a), (e.memoizedState = p);
  }
}
function _a(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(w(191, l));
        l.call(r);
      }
    }
}
var lr = {},
  Le = pt(lr),
  Wn = pt(lr),
  qn = pt(lr);
function Nt(e) {
  if (e === lr) throw Error(w(174));
  return e;
}
function Ds(e, t) {
  switch ((_(qn, t), _(Wn, e), _(Le, lr), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : pi(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = pi(t, e));
  }
  R(Le), _(Le, t);
}
function rn() {
  R(Le), R(Wn), R(qn);
}
function Uu(e) {
  Nt(qn.current);
  var t = Nt(Le.current),
    n = pi(t, e.type);
  t !== n && (_(Wn, e), _(Le, n));
}
function Ps(e) {
  Wn.current === e && (R(Le), R(Wn));
}
var F = pt(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
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
var Yl = [];
function Is() {
  for (var e = 0; e < Yl.length; e++)
    Yl[e]._workInProgressVersionPrimary = null;
  Yl.length = 0;
}
var Br = Je.ReactCurrentDispatcher,
  Xl = Je.ReactCurrentBatchConfig,
  Et = 0,
  O = null,
  K = null,
  X = null,
  nl = !1,
  In = !1,
  Qn = 0,
  Tm = 0;
function re() {
  throw Error(w(321));
}
function Ts(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Bs(e, t, n, r, l, s) {
  if (
    ((Et = s),
    (O = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Br.current = e === null || e.memoizedState === null ? Gm : _m),
    (e = n(r, l)),
    In)
  ) {
    s = 0;
    do {
      if (((In = !1), (Qn = 0), 25 <= s)) throw Error(w(301));
      (s += 1),
        (X = K = null),
        (t.updateQueue = null),
        (Br.current = zm),
        (e = n(r, l));
    } while (In);
  }
  if (
    ((Br.current = rl),
    (t = K !== null && K.next !== null),
    (Et = 0),
    (X = K = O = null),
    (nl = !1),
    t)
  )
    throw Error(w(300));
  return e;
}
function As() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function _e() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (O.memoizedState = X = e) : (X = X.next = e), X;
}
function be() {
  if (K === null) {
    var e = O.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = K.next;
  var t = X === null ? O.memoizedState : X.next;
  if (t !== null) (X = t), (K = e);
  else {
    if (e === null) throw Error(w(310));
    (K = e),
      (e = {
        memoizedState: K.memoizedState,
        baseState: K.baseState,
        baseQueue: K.baseQueue,
        queue: K.queue,
        next: null,
      }),
      X === null ? (O.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Kn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = K,
    l = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (l !== null) {
      var a = l.next;
      (l.next = s.next), (s.next = a);
    }
    (r.baseQueue = l = s), (n.pending = null);
  }
  if (l !== null) {
    (s = l.next), (r = r.baseState);
    var o = (a = null),
      u = null,
      c = s;
    do {
      var g = c.lane;
      if ((Et & g) === g)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var p = {
          lane: g,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        u === null ? ((o = u = p), (a = r)) : (u = u.next = p),
          (O.lanes |= g),
          (Dt |= g);
      }
      c = c.next;
    } while (c !== null && c !== s);
    u === null ? (a = r) : (u.next = o),
      Ue(r, t.memoizedState) || (me = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (s = l.lane), (O.lanes |= s), (Dt |= s), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = be(),
    n = t.queue;
  if (n === null) throw Error(w(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    s = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var a = (l = l.next);
    do (s = e(s, a.action)), (a = a.next);
    while (a !== l);
    Ue(s, t.memoizedState) || (me = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Gu() {}
function _u(e, t) {
  var n = O,
    r = be(),
    l = t(),
    s = !Ue(r.memoizedState, l);
  if (
    (s && ((r.memoizedState = l), (me = !0)),
    (r = r.queue),
    Us(Lu.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Jn(9, Ru.bind(null, n, r, l, t), void 0, null),
      Z === null)
    )
      throw Error(w(349));
    Et & 30 || zu(n, t, l);
  }
  return l;
}
function zu(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = O.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (O.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Ru(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Fu(t) && Ou(e);
}
function Lu(e, t, n) {
  return n(function () {
    Fu(t) && Ou(e);
  });
}
function Fu(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Ou(e) {
  var t = Qe(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function za(e) {
  var t = _e();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Kn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Um.bind(null, O, e)),
    [t.memoizedState, e]
  );
}
function Jn(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = O.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (O.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Vu() {
  return be().memoizedState;
}
function Ar(e, t, n, r) {
  var l = _e();
  (O.flags |= e),
    (l.memoizedState = Jn(1 | t, n, void 0, r === void 0 ? null : r));
}
function Ml(e, t, n, r) {
  var l = be();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (K !== null) {
    var a = K.memoizedState;
    if (((s = a.destroy), r !== null && Ts(r, a.deps))) {
      l.memoizedState = Jn(t, n, s, r);
      return;
    }
  }
  (O.flags |= e), (l.memoizedState = Jn(1 | t, n, s, r));
}
function Ra(e, t) {
  return Ar(8390656, 8, e, t);
}
function Us(e, t) {
  return Ml(2048, 8, e, t);
}
function Hu(e, t) {
  return Ml(4, 2, e, t);
}
function $u(e, t) {
  return Ml(4, 4, e, t);
}
function Wu(e, t) {
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
function qu(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Ml(4, 4, Wu.bind(null, t, e), n)
  );
}
function Gs() {}
function Qu(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ts(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Ku(e, t) {
  var n = be();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ts(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Ju(e, t, n) {
  return Et & 21
    ? (Ue(n, t) || ((n = tu()), (O.lanes |= n), (Dt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (me = !0)), (e.memoizedState = n));
}
function Bm(e, t) {
  var n = G;
  (G = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Xl.transition;
  Xl.transition = {};
  try {
    e(!1), t();
  } finally {
    (G = n), (Xl.transition = r);
  }
}
function Yu() {
  return be().memoizedState;
}
function Am(e, t, n) {
  var r = ct(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Xu(e))
  )
    Zu(t, n);
  else if (((n = Bu(e, t, n, r)), n !== null)) {
    var l = oe();
    Ae(n, e, r, l), ec(n, t, r);
  }
}
function Um(e, t, n) {
  var r = ct(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Xu(e)) Zu(t, l);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var a = t.lastRenderedState,
          o = s(a, n);
        if (((l.hasEagerState = !0), (l.eagerState = o), Ue(o, a))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), bs(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Bu(e, t, l, r)),
      n !== null && ((l = oe()), Ae(n, e, r, l), ec(n, t, r));
  }
}
function Xu(e) {
  var t = e.alternate;
  return e === O || (t !== null && t === O);
}
function Zu(e, t) {
  In = nl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), fs(e, n);
  }
}
var rl = {
    readContext: ke,
    useCallback: re,
    useContext: re,
    useEffect: re,
    useImperativeHandle: re,
    useInsertionEffect: re,
    useLayoutEffect: re,
    useMemo: re,
    useReducer: re,
    useRef: re,
    useState: re,
    useDebugValue: re,
    useDeferredValue: re,
    useTransition: re,
    useMutableSource: re,
    useSyncExternalStore: re,
    useId: re,
    unstable_isNewReconciler: !1,
  },
  Gm = {
    readContext: ke,
    useCallback: function (e, t) {
      return (_e().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ke,
    useEffect: Ra,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ar(4194308, 4, Wu.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ar(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ar(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = _e();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = _e();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Am.bind(null, O, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = _e();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: za,
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      return (_e().memoizedState = e);
    },
    useTransition: function () {
      var e = za(!1),
        t = e[0];
      return (e = Bm.bind(null, e[1])), (_e().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = O,
        l = _e();
      if (L) {
        if (n === void 0) throw Error(w(407));
        n = n();
      } else {
        if (((n = t()), Z === null)) throw Error(w(349));
        Et & 30 || zu(r, t, n);
      }
      l.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (l.queue = s),
        Ra(Lu.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        Jn(9, Ru.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = _e(),
        t = Z.identifierPrefix;
      if (L) {
        var n = He,
          r = Ve;
        (n = (r & ~(1 << (32 - Be(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Tm++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  _m = {
    readContext: ke,
    useCallback: Qu,
    useContext: ke,
    useEffect: Us,
    useImperativeHandle: qu,
    useInsertionEffect: Hu,
    useLayoutEffect: $u,
    useMemo: Ku,
    useReducer: Zl,
    useRef: Vu,
    useState: function () {
      return Zl(Kn);
    },
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      var t = be();
      return Ju(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = Zl(Kn)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Gu,
    useSyncExternalStore: _u,
    useId: Yu,
    unstable_isNewReconciler: !1,
  },
  zm = {
    readContext: ke,
    useCallback: Qu,
    useContext: ke,
    useEffect: Us,
    useImperativeHandle: qu,
    useInsertionEffect: Hu,
    useLayoutEffect: $u,
    useMemo: Ku,
    useReducer: ei,
    useRef: Vu,
    useState: function () {
      return ei(Kn);
    },
    useDebugValue: Gs,
    useDeferredValue: function (e) {
      var t = be();
      return K === null ? (t.memoizedState = e) : Ju(t, K.memoizedState, e);
    },
    useTransition: function () {
      var e = ei(Kn)[0],
        t = be().memoizedState;
      return [e, t];
    },
    useMutableSource: Gu,
    useSyncExternalStore: _u,
    useId: Yu,
    unstable_isNewReconciler: !1,
  };
function Pe(e, t) {
  if (e && e.defaultProps) {
    (t = V({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Gi(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : V({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Bt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      s = $e(r, l);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = ot(e, s, l)),
      t !== null && (Ae(t, e, l, r), Tr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = oe(),
      l = ct(e),
      s = $e(r, l);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = ot(e, s, l)),
      t !== null && (Ae(t, e, l, r), Tr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = oe(),
      r = ct(e),
      l = $e(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ot(e, l, r)),
      t !== null && (Ae(t, e, r, n), Tr(t, e, r));
  },
};
function La(e, t, n, r, l, s, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, a)
      : t.prototype && t.prototype.isPureReactComponent
      ? !On(n, r) || !On(l, s)
      : !0
  );
}
function tc(e, t, n) {
  var r = !1,
    l = ft,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ke(s))
      : ((l = he(t) ? kt : se.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? en(e, l) : ft)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Fa(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function _i(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Es(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (l.context = ke(s))
    : ((s = he(t) ? kt : se.current), (l.context = en(e, s))),
    (l.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (Gi(e, t, s, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Sl.enqueueReplaceState(l, l.state, null),
      el(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function ln(e, t) {
  try {
    var n = "",
      r = t;
    do (n += md(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (s) {
    l =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function zi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Rm = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      il || ((il = !0), (Qi = r)), zi(e, t);
    }),
    n
  );
}
function rc(e, t, n) {
  (n = $e(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zi(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        zi(e, t),
          typeof r != "function" &&
            (ut === null ? (ut = new Set([this])) : ut.add(this));
        var a = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: a !== null ? a : "",
        });
      }),
    n
  );
}
function Oa(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Rm();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = Zm.bind(null, e, t, n)), t.then(e, e));
}
function Va(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ha(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $e(-1, 1)), (t.tag = 2), ot(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Lm = Je.ReactCurrentOwner,
  me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Tu(t, null, n, r) : nn(t, e.child, n, r);
}
function $a(e, t, n, r, l) {
  n = n.render;
  var s = t.ref;
  return (
    Yt(t, l),
    (r = Bs(e, t, n, r, s, l)),
    (n = As()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (L && n && Ms(t), (t.flags |= 1), ae(e, t, r, l), t.child)
  );
}
function Wa(e, t, n, r, l) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Hs(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), lc(e, t, s, r, l))
      : ((e = zr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & l))) {
    var a = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : On), n(a, r) && e.ref === t.ref)
    )
      return Ke(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = dt(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (On(s, r) && e.ref === t.ref)
      if (((me = !1), (t.pendingProps = r = s), (e.lanes & l) !== 0))
        e.flags & 131072 && (me = !0);
      else return (t.lanes = e.lanes), Ke(e, t, l);
  }
  return Ri(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        _(Wt, ge),
        (ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          _(Wt, ge),
          (ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        _(Wt, ge),
        (ge |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      _(Wt, ge),
      (ge |= r);
  return ae(e, t, l, n), t.child;
}
function sc(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Ri(e, t, n, r, l) {
  var s = he(n) ? kt : se.current;
  return (
    (s = en(t, s)),
    Yt(t, l),
    (n = Bs(e, t, n, r, s, l)),
    (r = As()),
    e !== null && !me
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ke(e, t, l))
      : (L && r && Ms(t), (t.flags |= 1), ae(e, t, n, l), t.child)
  );
}
function qa(e, t, n, r, l) {
  if (he(n)) {
    var s = !0;
    Kr(t);
  } else s = !1;
  if ((Yt(t, l), t.stateNode === null))
    Ur(e, t), tc(t, n, r), _i(t, n, r, l), (r = !0);
  else if (e === null) {
    var a = t.stateNode,
      o = t.memoizedProps;
    a.props = o;
    var u = a.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ke(c))
      : ((c = he(n) ? kt : se.current), (c = en(t, c)));
    var g = n.getDerivedStateFromProps,
      p =
        typeof g == "function" ||
        typeof a.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== r || u !== c) && Fa(t, a, r, c)),
      (Ze = !1);
    var m = t.memoizedState;
    (a.state = m),
      el(t, r, a, l),
      (u = t.memoizedState),
      o !== r || m !== u || fe.current || Ze
        ? (typeof g == "function" && (Gi(t, n, g, r), (u = t.memoizedState)),
          (o = Ze || La(t, n, o, r, m, u, c))
            ? (p ||
                (typeof a.UNSAFE_componentWillMount != "function" &&
                  typeof a.componentWillMount != "function") ||
                (typeof a.componentWillMount == "function" &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == "function" &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (a.props = r),
          (a.state = u),
          (a.context = c),
          (r = o))
        : (typeof a.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (a = t.stateNode),
      Au(e, t),
      (o = t.memoizedProps),
      (c = t.type === t.elementType ? o : Pe(t.type, o)),
      (a.props = c),
      (p = t.pendingProps),
      (m = a.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = ke(u))
        : ((u = he(n) ? kt : se.current), (u = en(t, u)));
    var x = n.getDerivedStateFromProps;
    (g =
      typeof x == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function") ||
      (typeof a.UNSAFE_componentWillReceiveProps != "function" &&
        typeof a.componentWillReceiveProps != "function") ||
      ((o !== p || m !== u) && Fa(t, a, r, u)),
      (Ze = !1),
      (m = t.memoizedState),
      (a.state = m),
      el(t, r, a, l);
    var y = t.memoizedState;
    o !== p || m !== y || fe.current || Ze
      ? (typeof x == "function" && (Gi(t, n, x, r), (y = t.memoizedState)),
        (c = Ze || La(t, n, c, r, m, y, u) || !1)
          ? (g ||
              (typeof a.UNSAFE_componentWillUpdate != "function" &&
                typeof a.componentWillUpdate != "function") ||
              (typeof a.componentWillUpdate == "function" &&
                a.componentWillUpdate(r, y, u),
              typeof a.UNSAFE_componentWillUpdate == "function" &&
                a.UNSAFE_componentWillUpdate(r, y, u)),
            typeof a.componentDidUpdate == "function" && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != "function" ||
              (o === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = u),
        (r = c))
      : (typeof a.componentDidUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != "function" ||
          (o === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Li(e, t, n, r, s, l);
}
function Li(e, t, n, r, l, s) {
  sc(e, t);
  var a = (t.flags & 128) !== 0;
  if (!r && !a) return l && Ta(t, n, !1), Ke(e, t, s);
  (r = t.stateNode), (Lm.current = t);
  var o =
    a && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = nn(t, e.child, null, s)), (t.child = nn(t, null, o, s)))
      : ae(e, t, o, s),
    (t.memoizedState = r.state),
    l && Ta(t, n, !0),
    t.child
  );
}
function ac(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Ia(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Ia(e, t.context, !1),
    Ds(e, t.containerInfo);
}
function Qa(e, t, n, r, l) {
  return tn(), Ns(l), (t.flags |= 256), ae(e, t, n, r), t.child;
}
var Fi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Oi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function oc(e, t, n) {
  var r = t.pendingProps,
    l = F.current,
    s = !1,
    a = (t.flags & 128) !== 0,
    o;
  if (
    ((o = a) ||
      (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    o
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    _(F, l & 1),
    e === null)
  )
    return (
      Ai(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (a = { mode: "hidden", children: a }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = jl(a, r, 0, null)),
              (e = jt(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Oi(n)),
              (t.memoizedState = Fi),
              e)
            : _s(t, a))
    );
  if (((l = e.memoizedState), l !== null && ((o = l.dehydrated), o !== null)))
    return Fm(e, t, a, r, o, l, n);
  if (s) {
    (s = r.fallback), (a = t.mode), (l = e.child), (o = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(a & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = dt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      o !== null ? (s = dt(o, s)) : ((s = jt(s, a, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? Oi(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (s.memoizedState = a),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Fi),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = dt(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function _s(e, t) {
  return (
    (t = jl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Sr(e, t, n, r) {
  return (
    r !== null && Ns(r),
    nn(t, e.child, null, n),
    (e = _s(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Fm(e, t, n, r, l, s, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ti(Error(w(422)))), Sr(e, t, a, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (l = t.mode),
        (r = jl({ mode: "visible", children: r.children }, l, 0, null)),
        (s = jt(s, l, a, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && nn(t, e.child, null, a),
        (t.child.memoizedState = Oi(a)),
        (t.memoizedState = Fi),
        s);
  if (!(t.mode & 1)) return Sr(e, t, a, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var o = r.dgst;
    return (r = o), (s = Error(w(419))), (r = ti(s, r, void 0)), Sr(e, t, a, r);
  }
  if (((o = (a & e.childLanes) !== 0), me || o)) {
    if (((r = Z), r !== null)) {
      switch (a & -a) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
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
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | a) ? 0 : l),
        l !== 0 &&
          l !== s.retryLane &&
          ((s.retryLane = l), Qe(e, l), Ae(r, e, l, -1));
    }
    return Vs(), (r = ti(Error(w(421)))), Sr(e, t, a, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = ef.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (xe = at(l.nextSibling)),
      (ve = t),
      (L = !0),
      (Te = null),
      e !== null &&
        ((Se[Ne++] = Ve),
        (Se[Ne++] = He),
        (Se[Ne++] = bt),
        (Ve = e.id),
        (He = e.overflow),
        (bt = t)),
      (t = _s(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ka(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ni(e, t, n, r, l) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = l));
}
function uc(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    s = r.tail;
  if ((ae(e, t, r.children, n), (r = F.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ka(e, n, t);
        else if (e.tag === 19) Ka(e, n, t);
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
    r &= 1;
  }
  if ((_(F, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && tl(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ni(t, !1, l, n, s);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && tl(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ni(t, !0, n, null, s);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ur(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ke(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Dt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(w(153));
  if (t.child !== null) {
    for (
      e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = dt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Om(e, t, n) {
  switch (t.tag) {
    case 3:
      ac(t), tn();
      break;
    case 5:
      Uu(t);
      break;
    case 1:
      he(t.type) && Kr(t);
      break;
    case 4:
      Ds(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      _(Xr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (_(F, F.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? oc(e, t, n)
          : (_(F, F.current & 1),
            (e = Ke(e, t, n)),
            e !== null ? e.sibling : null);
      _(F, F.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return uc(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        _(F, F.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), ic(e, t, n);
  }
  return Ke(e, t, n);
}
var cc, Vi, dc, mc;
cc = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Vi = function () {};
dc = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Nt(Le.current);
    var s = null;
    switch (n) {
      case "input":
        (l = di(e, l)), (r = di(e, r)), (s = []);
        break;
      case "select":
        (l = V({}, l, { value: void 0 })),
          (r = V({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (l = hi(e, l)), (r = hi(e, r)), (s = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = qr);
    }
    gi(n, r);
    var a;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var o = l[c];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Un.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var u = r[c];
      if (
        ((o = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && u !== o && (u != null || o != null))
      )
        if (c === "style")
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) ||
                (u && u.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ""));
            for (a in u)
              u.hasOwnProperty(a) &&
                o[a] !== u[a] &&
                (n || (n = {}), (n[a] = u[a]));
          } else n || (s || (s = []), s.push(c, n)), (n = u);
        else
          c === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (o = o ? o.__html : void 0),
              u != null && o !== u && (s = s || []).push(c, u))
            : c === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (s = s || []).push(c, "" + u)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Un.hasOwnProperty(c)
                ? (u != null && c === "onScroll" && z("scroll", e),
                  s || o === u || (s = []))
                : (s = s || []).push(c, u));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
mc = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function vn(e, t) {
  if (!L)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Vm(e, t, n) {
  var r = t.pendingProps;
  switch ((Ss(t), t.tag)) {
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
      return le(t), null;
    case 1:
      return he(t.type) && Qr(), le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rn(),
        R(fe),
        R(se),
        Is(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (yr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Te !== null && (Yi(Te), (Te = null)))),
        Vi(e, t),
        le(t),
        null
      );
    case 5:
      Ps(t);
      var l = Nt(qn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        dc(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(w(166));
          return le(t), null;
        }
        if (((e = Nt(Le.current)), yr(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[ze] = t), (r[$n] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              z("cancel", r), z("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              z("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Cn.length; l++) z(Cn[l], r);
              break;
            case "source":
              z("error", r);
              break;
            case "img":
            case "image":
            case "link":
              z("error", r), z("load", r);
              break;
            case "details":
              z("toggle", r);
              break;
            case "input":
              la(r, s), z("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                z("invalid", r);
              break;
            case "textarea":
              sa(r, s), z("invalid", r);
          }
          gi(n, s), (l = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === "children"
                ? typeof o == "string"
                  ? r.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, o, e),
                    (l = ["children", o]))
                  : typeof o == "number" &&
                    r.textContent !== "" + o &&
                    (s.suppressHydrationWarning !== !0 &&
                      wr(r.textContent, o, e),
                    (l = ["children", "" + o]))
                : Un.hasOwnProperty(a) &&
                  o != null &&
                  a === "onScroll" &&
                  z("scroll", r);
            }
          switch (n) {
            case "input":
              dr(r), ia(r, s, !0);
              break;
            case "textarea":
              dr(r), aa(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = qr);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (a = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lo(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = a.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = a.createElement(n, { is: r.is }))
                : ((e = a.createElement(n)),
                  n === "select" &&
                    ((a = e),
                    r.multiple
                      ? (a.multiple = !0)
                      : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[ze] = t),
            (e[$n] = r),
            cc(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((a = xi(n, r)), n)) {
              case "dialog":
                z("cancel", e), z("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                z("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Cn.length; l++) z(Cn[l], e);
                l = r;
                break;
              case "source":
                z("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                z("error", e), z("load", e), (l = r);
                break;
              case "details":
                z("toggle", e), (l = r);
                break;
              case "input":
                la(e, r), (l = di(e, r)), z("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = V({}, r, { value: void 0 })),
                  z("invalid", e);
                break;
              case "textarea":
                sa(e, r), (l = hi(e, r)), z("invalid", e);
                break;
              default:
                l = r;
            }
            gi(n, l), (o = l);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var u = o[s];
                s === "style"
                  ? Vo(e, u)
                  : s === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Fo(e, u))
                  : s === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Gn(e, u)
                    : typeof u == "number" && Gn(e, "" + u)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (Un.hasOwnProperty(s)
                      ? u != null && s === "onScroll" && z("scroll", e)
                      : u != null && as(e, s, u, a));
              }
            switch (n) {
              case "input":
                dr(e), ia(e, r, !1);
                break;
              case "textarea":
                dr(e), aa(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + mt(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? qt(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      qt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = qr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) mc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(w(166));
        if (((n = Nt(qn.current)), Nt(Le.current), yr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[ze] = t),
            (s = r.nodeValue !== n) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                wr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  wr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[ze] = t),
            (t.stateNode = r);
      }
      return le(t), null;
    case 13:
      if (
        (R(F),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (L && xe !== null && t.mode & 1 && !(t.flags & 128))
          Pu(), tn(), (t.flags |= 98560), (s = !1);
        else if (((s = yr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(w(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(w(317));
            s[ze] = t;
          } else
            tn(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          le(t), (s = !1);
        } else Te !== null && (Yi(Te), (Te = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || F.current & 1 ? J === 0 && (J = 3) : Vs())),
          t.updateQueue !== null && (t.flags |= 4),
          le(t),
          null);
    case 4:
      return (
        rn(), Vi(e, t), e === null && Vn(t.stateNode.containerInfo), le(t), null
      );
    case 10:
      return ks(t.type._context), le(t), null;
    case 17:
      return he(t.type) && Qr(), le(t), null;
    case 19:
      if ((R(F), (s = t.memoizedState), s === null)) return le(t), null;
      if (((r = (t.flags & 128) !== 0), (a = s.rendering), a === null))
        if (r) vn(s, !1);
        else {
          if (J !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = tl(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    vn(s, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (e = a.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return _(F, (F.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            q() > sn &&
            ((t.flags |= 128), (r = !0), vn(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = tl(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              vn(s, !0),
              s.tail === null && s.tailMode === "hidden" && !a.alternate && !L)
            )
              return le(t), null;
          } else
            2 * q() - s.renderingStartTime > sn &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), vn(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = s.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (s.last = a));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = q()),
          (t.sibling = null),
          (n = F.current),
          _(F, r ? (n & 1) | 2 : n & 1),
          t)
        : (le(t), null);
    case 22:
    case 23:
      return (
        Os(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? ge & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(w(156, t.tag));
}
function Hm(e, t) {
  switch ((Ss(t), t.tag)) {
    case 1:
      return (
        he(t.type) && Qr(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rn(),
        R(fe),
        R(se),
        Is(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ps(t), null;
    case 13:
      if ((R(F), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(w(340));
        tn();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return R(F), null;
    case 4:
      return rn(), null;
    case 10:
      return ks(t.type._context), null;
    case 22:
    case 23:
      return Os(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1,
  ie = !1,
  $m = typeof WeakSet == "function" ? WeakSet : Set,
  N = null;
function $t(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        H(e, t, r);
      }
    else n.current = null;
}
function Hi(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Ja = !1;
function Wm(e, t) {
  if (((bi = Hr), (e = xu()), ys(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            u = -1,
            c = 0,
            g = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var x;
              p !== n || (l !== 0 && p.nodeType !== 3) || (o = a + l),
                p !== s || (r !== 0 && p.nodeType !== 3) || (u = a + r),
                p.nodeType === 3 && (a += p.nodeValue.length),
                (x = p.firstChild) !== null;

            )
              (m = p), (p = x);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++c === l && (o = a),
                m === s && ++g === r && (u = a),
                (x = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = x;
          }
          n = o === -1 || u === -1 ? null : { start: o, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ei = { focusedElem: e, selectionRange: n }, Hr = !1, N = t; N !== null; )
    if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (N = e);
    else
      for (; N !== null; ) {
        t = N;
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
                  var S = y.memoizedProps,
                    A = y.memoizedState,
                    f = t.stateNode,
                    d = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Pe(t.type, S),
                      A
                    );
                  f.__reactInternalSnapshotBeforeUpdate = d;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(w(163));
            }
        } catch (v) {
          H(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (N = e);
          break;
        }
        N = t.return;
      }
  return (y = Ja), (Ja = !1), y;
}
function Tn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var s = l.destroy;
        (l.destroy = void 0), s !== void 0 && Hi(t, n, s);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function $i(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function fc(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), fc(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[ze], delete t[$n], delete t[Ii], delete t[Em], delete t[Dm])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ya(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
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
function Wi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = qr));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Wi(e, t, n), e = e.sibling; e !== null; ) Wi(e, t, n), (e = e.sibling);
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), (e = e.sibling);
}
var ee = null,
  Ie = !1;
function Ye(e, t, n) {
  for (n = n.child; n !== null; ) pc(e, t, n), (n = n.sibling);
}
function pc(e, t, n) {
  if (Re && typeof Re.onCommitFiberUnmount == "function")
    try {
      Re.onCommitFiberUnmount(pl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      ie || $t(n, t);
    case 6:
      var r = ee,
        l = Ie;
      (ee = null),
        Ye(e, t, n),
        (ee = r),
        (Ie = l),
        ee !== null &&
          (Ie
            ? ((e = ee),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null &&
        (Ie
          ? ((e = ee),
            (n = n.stateNode),
            e.nodeType === 8
              ? Kl(e.parentNode, n)
              : e.nodeType === 1 && Kl(e, n),
            Ln(e))
          : Kl(ee, n.stateNode));
      break;
    case 4:
      (r = ee),
        (l = Ie),
        (ee = n.stateNode.containerInfo),
        (Ie = !0),
        Ye(e, t, n),
        (ee = r),
        (Ie = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !ie &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var s = l,
            a = s.destroy;
          (s = s.tag),
            a !== void 0 && (s & 2 || s & 4) && Hi(n, t, a),
            (l = l.next);
        } while (l !== r);
      }
      Ye(e, t, n);
      break;
    case 1:
      if (
        !ie &&
        ($t(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (o) {
          H(n, t, o);
        }
      Ye(e, t, n);
      break;
    case 21:
      Ye(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((ie = (r = ie) || n.memoizedState !== null), Ye(e, t, n), (ie = r))
        : Ye(e, t, n);
      break;
    default:
      Ye(e, t, n);
  }
}
function Xa(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $m()),
      t.forEach(function (r) {
        var l = tf.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function De(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var s = e,
          a = t,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (ee = o.stateNode), (Ie = !1);
              break e;
            case 3:
              (ee = o.stateNode.containerInfo), (Ie = !0);
              break e;
            case 4:
              (ee = o.stateNode.containerInfo), (Ie = !0);
              break e;
          }
          o = o.return;
        }
        if (ee === null) throw Error(w(160));
        pc(s, a, l), (ee = null), (Ie = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (c) {
        H(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) gc(t, e), (t = t.sibling);
}
function gc(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((De(t, e), Ge(e), r & 4)) {
        try {
          Tn(3, e, e.return), Nl(3, e);
        } catch (S) {
          H(e, e.return, S);
        }
        try {
          Tn(5, e, e.return);
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 1:
      De(t, e), Ge(e), r & 512 && n !== null && $t(n, n.return);
      break;
    case 5:
      if (
        (De(t, e),
        Ge(e),
        r & 512 && n !== null && $t(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Gn(l, "");
        } catch (S) {
          H(e, e.return, S);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var s = e.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            o === "input" && s.type === "radio" && s.name != null && zo(l, s),
              xi(o, a);
            var c = xi(o, s);
            for (a = 0; a < u.length; a += 2) {
              var g = u[a],
                p = u[a + 1];
              g === "style"
                ? Vo(l, p)
                : g === "dangerouslySetInnerHTML"
                ? Fo(l, p)
                : g === "children"
                ? Gn(l, p)
                : as(l, g, p, c);
            }
            switch (o) {
              case "input":
                mi(l, s);
                break;
              case "textarea":
                Ro(l, s);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!s.multiple;
                var x = s.value;
                x != null
                  ? qt(l, !!s.multiple, x, !1)
                  : m !== !!s.multiple &&
                    (s.defaultValue != null
                      ? qt(l, !!s.multiple, s.defaultValue, !0)
                      : qt(l, !!s.multiple, s.multiple ? [] : "", !1));
            }
            l[$n] = s;
          } catch (S) {
            H(e, e.return, S);
          }
      }
      break;
    case 6:
      if ((De(t, e), Ge(e), r & 4)) {
        if (e.stateNode === null) throw Error(w(162));
        (l = e.stateNode), (s = e.memoizedProps);
        try {
          l.nodeValue = s;
        } catch (S) {
          H(e, e.return, S);
        }
      }
      break;
    case 3:
      if (
        (De(t, e), Ge(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Ln(t.containerInfo);
        } catch (S) {
          H(e, e.return, S);
        }
      break;
    case 4:
      De(t, e), Ge(e);
      break;
    case 13:
      De(t, e),
        Ge(e),
        (l = e.child),
        l.flags & 8192 &&
          ((s = l.memoizedState !== null),
          (l.stateNode.isHidden = s),
          !s ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Ls = q())),
        r & 4 && Xa(e);
      break;
    case 22:
      if (
        ((g = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((ie = (c = ie) || g), De(t, e), (ie = c)) : De(t, e),
        Ge(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !g && e.mode & 1)
        )
          for (N = e, g = e.child; g !== null; ) {
            for (p = N = g; N !== null; ) {
              switch (((m = N), (x = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Tn(4, m, m.return);
                  break;
                case 1:
                  $t(m, m.return);
                  var y = m.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (S) {
                      H(r, n, S);
                    }
                  }
                  break;
                case 5:
                  $t(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    eo(p);
                    continue;
                  }
              }
              x !== null ? ((x.return = m), (N = x)) : eo(p);
            }
            g = g.sibling;
          }
        e: for (g = null, p = e; ; ) {
          if (p.tag === 5) {
            if (g === null) {
              g = p;
              try {
                (l = p.stateNode),
                  c
                    ? ((s = l.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((o = p.stateNode),
                      (u = p.memoizedProps.style),
                      (a =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (o.style.display = Oo("display", a)));
              } catch (S) {
                H(e, e.return, S);
              }
            }
          } else if (p.tag === 6) {
            if (g === null)
              try {
                p.stateNode.nodeValue = c ? "" : p.memoizedProps;
              } catch (S) {
                H(e, e.return, S);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            g === p && (g = null), (p = p.return);
          }
          g === p && (g = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      De(t, e), Ge(e), r & 4 && Xa(e);
      break;
    case 21:
      break;
    default:
      De(t, e), Ge(e);
  }
}
function Ge(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (hc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(w(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Gn(l, ""), (r.flags &= -33));
          var s = Ya(e);
          qi(e, s, l);
          break;
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            o = Ya(e);
          Wi(e, o, a);
          break;
        default:
          throw Error(w(161));
      }
    } catch (u) {
      H(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qm(e, t, n) {
  (N = e), xc(e);
}
function xc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N,
      s = l.child;
    if (l.tag === 22 && r) {
      var a = l.memoizedState !== null || Nr;
      if (!a) {
        var o = l.alternate,
          u = (o !== null && o.memoizedState !== null) || ie;
        o = Nr;
        var c = ie;
        if (((Nr = a), (ie = u) && !c))
          for (N = l; N !== null; )
            (a = N),
              (u = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? to(l)
                : u !== null
                ? ((u.return = a), (N = u))
                : to(l);
        for (; s !== null; ) (N = s), xc(s), (s = s.sibling);
        (N = l), (Nr = o), (ie = c);
      }
      Za(e);
    } else
      l.subtreeFlags & 8772 && s !== null ? ((s.return = l), (N = s)) : Za(e);
  }
}
function Za(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              ie || Nl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !ie)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Pe(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && _a(t, s, r);
              break;
            case 3:
              var a = t.updateQueue;
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                _a(t, a, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var g = c.memoizedState;
                  if (g !== null) {
                    var p = g.dehydrated;
                    p !== null && Ln(p);
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
              throw Error(w(163));
          }
        ie || (t.flags & 512 && $i(t));
      } catch (m) {
        H(t, t.return, m);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function eo(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (N = n);
      break;
    }
    N = t.return;
  }
}
function to(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
          } catch (u) {
            H(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              H(t, l, u);
            }
          }
          var s = t.return;
          try {
            $i(t);
          } catch (u) {
            H(t, s, u);
          }
          break;
        case 5:
          var a = t.return;
          try {
            $i(t);
          } catch (u) {
            H(t, a, u);
          }
      }
    } catch (u) {
      H(t, t.return, u);
    }
    if (t === e) {
      N = null;
      break;
    }
    var o = t.sibling;
    if (o !== null) {
      (o.return = t.return), (N = o);
      break;
    }
    N = t.return;
  }
}
var Qm = Math.ceil,
  ll = Je.ReactCurrentDispatcher,
  zs = Je.ReactCurrentOwner,
  je = Je.ReactCurrentBatchConfig,
  U = 0,
  Z = null,
  Q = null,
  te = 0,
  ge = 0,
  Wt = pt(0),
  J = 0,
  Yn = null,
  Dt = 0,
  Cl = 0,
  Rs = 0,
  Bn = null,
  de = null,
  Ls = 0,
  sn = 1 / 0,
  Fe = null,
  il = !1,
  Qi = null,
  ut = null,
  Cr = !1,
  rt = null,
  sl = 0,
  An = 0,
  Ki = null,
  Gr = -1,
  _r = 0;
function oe() {
  return U & 6 ? q() : Gr !== -1 ? Gr : (Gr = q());
}
function ct(e) {
  return e.mode & 1
    ? U & 2 && te !== 0
      ? te & -te
      : Im.transition !== null
      ? (_r === 0 && (_r = tu()), _r)
      : ((e = G),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : ou(e.type))),
        e)
    : 1;
}
function Ae(e, t, n, r) {
  if (50 < An) throw ((An = 0), (Ki = null), Error(w(185)));
  tr(e, n, r),
    (!(U & 2) || e !== Z) &&
      (e === Z && (!(U & 2) && (Cl |= n), J === 4 && tt(e, te)),
      pe(e, r),
      n === 1 && U === 0 && !(t.mode & 1) && ((sn = q() + 500), yl && gt()));
}
function pe(e, t) {
  var n = e.callbackNode;
  Id(e, t);
  var r = Vr(e, e === Z ? te : 0);
  if (r === 0)
    n !== null && ca(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && ca(n), t === 1))
      e.tag === 0 ? Pm(no.bind(null, e)) : bu(no.bind(null, e)),
        km(function () {
          !(U & 6) && gt();
        }),
        (n = null);
    else {
      switch (nu(r)) {
        case 1:
          n = ms;
          break;
        case 4:
          n = Zo;
          break;
        case 16:
          n = Or;
          break;
        case 536870912:
          n = eu;
          break;
        default:
          n = Or;
      }
      n = jc(n, vc.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function vc(e, t) {
  if (((Gr = -1), (_r = 0), U & 6)) throw Error(w(327));
  var n = e.callbackNode;
  if (Xt() && e.callbackNode !== n) return null;
  var r = Vr(e, e === Z ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = al(e, r);
  else {
    t = r;
    var l = U;
    U |= 2;
    var s = yc();
    (Z !== e || te !== t) && ((Fe = null), (sn = q() + 500), Ct(e, t));
    do
      try {
        Ym();
        break;
      } catch (o) {
        wc(e, o);
      }
    while (!0);
    js(),
      (ll.current = s),
      (U = l),
      Q !== null ? (t = 0) : ((Z = null), (te = 0), (t = J));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Si(e)), l !== 0 && ((r = l), (t = Ji(e, l)))), t === 1)
    )
      throw ((n = Yn), Ct(e, 0), tt(e, r), pe(e, q()), n);
    if (t === 6) tt(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Km(l) &&
          ((t = al(e, r)),
          t === 2 && ((s = Si(e)), s !== 0 && ((r = s), (t = Ji(e, s)))),
          t === 1))
      )
        throw ((n = Yn), Ct(e, 0), tt(e, r), pe(e, q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(w(345));
        case 2:
          yt(e, de, Fe);
          break;
        case 3:
          if (
            (tt(e, r), (r & 130023424) === r && ((t = Ls + 500 - q()), 10 < t))
          ) {
            if (Vr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Pi(yt.bind(null, e, de, Fe), t);
            break;
          }
          yt(e, de, Fe);
          break;
        case 4:
          if ((tt(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var a = 31 - Be(r);
            (s = 1 << a), (a = t[a]), a > l && (l = a), (r &= ~s);
          }
          if (
            ((r = l),
            (r = q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Qm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Pi(yt.bind(null, e, de, Fe), r);
            break;
          }
          yt(e, de, Fe);
          break;
        case 5:
          yt(e, de, Fe);
          break;
        default:
          throw Error(w(329));
      }
    }
  }
  return pe(e, q()), e.callbackNode === n ? vc.bind(null, e) : null;
}
function Ji(e, t) {
  var n = Bn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = al(e, t)),
    e !== 2 && ((t = de), (de = n), t !== null && Yi(t)),
    e
  );
}
function Yi(e) {
  de === null ? (de = e) : de.push.apply(de, e);
}
function Km(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            s = l.getSnapshot;
          l = l.value;
          try {
            if (!Ue(s(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
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
function tt(e, t) {
  for (
    t &= ~Rs,
      t &= ~Cl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Be(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function no(e) {
  if (U & 6) throw Error(w(327));
  Xt();
  var t = Vr(e, 0);
  if (!(t & 1)) return pe(e, q()), null;
  var n = al(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Si(e);
    r !== 0 && ((t = r), (n = Ji(e, r)));
  }
  if (n === 1) throw ((n = Yn), Ct(e, 0), tt(e, t), pe(e, q()), n);
  if (n === 6) throw Error(w(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    yt(e, de, Fe),
    pe(e, q()),
    null
  );
}
function Fs(e, t) {
  var n = U;
  U |= 1;
  try {
    return e(t);
  } finally {
    (U = n), U === 0 && ((sn = q() + 500), yl && gt());
  }
}
function Pt(e) {
  rt !== null && rt.tag === 0 && !(U & 6) && Xt();
  var t = U;
  U |= 1;
  var n = je.transition,
    r = G;
  try {
    if (((je.transition = null), (G = 1), e)) return e();
  } finally {
    (G = r), (je.transition = n), (U = t), !(U & 6) && gt();
  }
}
function Os() {
  (ge = Wt.current), R(Wt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), jm(n)), Q !== null))
    for (n = Q.return; n !== null; ) {
      var r = n;
      switch ((Ss(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Qr();
          break;
        case 3:
          rn(), R(fe), R(se), Is();
          break;
        case 5:
          Ps(r);
          break;
        case 4:
          rn();
          break;
        case 13:
          R(F);
          break;
        case 19:
          R(F);
          break;
        case 10:
          ks(r.type._context);
          break;
        case 22:
        case 23:
          Os();
      }
      n = n.return;
    }
  if (
    ((Z = e),
    (Q = e = dt(e.current, null)),
    (te = ge = t),
    (J = 0),
    (Yn = null),
    (Rs = Cl = Dt = 0),
    (de = Bn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = l), (r.next = a);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function wc(e, t) {
  do {
    var n = Q;
    try {
      if ((js(), (Br.current = rl), nl)) {
        for (var r = O.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        nl = !1;
      }
      if (
        ((Et = 0),
        (X = K = O = null),
        (In = !1),
        (Qn = 0),
        (zs.current = null),
        n === null || n.return === null)
      ) {
        (J = 1), (Yn = t), (Q = null);
        break;
      }
      e: {
        var s = e,
          a = n.return,
          o = n,
          u = t;
        if (
          ((t = te),
          (o.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var c = u,
            g = o,
            p = g.tag;
          if (!(g.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = g.alternate;
            m
              ? ((g.updateQueue = m.updateQueue),
                (g.memoizedState = m.memoizedState),
                (g.lanes = m.lanes))
              : ((g.updateQueue = null), (g.memoizedState = null));
          }
          var x = Va(a);
          if (x !== null) {
            (x.flags &= -257),
              Ha(x, a, o, s, t),
              x.mode & 1 && Oa(s, c, t),
              (t = x),
              (u = c);
            var y = t.updateQueue;
            if (y === null) {
              var S = new Set();
              S.add(u), (t.updateQueue = S);
            } else y.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Oa(s, c, t), Vs();
              break e;
            }
            u = Error(w(426));
          }
        } else if (L && o.mode & 1) {
          var A = Va(a);
          if (A !== null) {
            !(A.flags & 65536) && (A.flags |= 256),
              Ha(A, a, o, s, t),
              Ns(ln(u, o));
            break e;
          }
        }
        (s = u = ln(u, o)),
          J !== 4 && (J = 2),
          Bn === null ? (Bn = [s]) : Bn.push(s),
          (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var f = nc(s, u, t);
              Ga(s, f);
              break e;
            case 1:
              o = u;
              var d = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof d.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (ut === null || !ut.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var v = rc(s, o, t);
                Ga(s, v);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Sc(n);
    } catch (M) {
      (t = M), Q === n && n !== null && (Q = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function yc() {
  var e = ll.current;
  return (ll.current = rl), e === null ? rl : e;
}
function Vs() {
  (J === 0 || J === 3 || J === 2) && (J = 4),
    Z === null || (!(Dt & 268435455) && !(Cl & 268435455)) || tt(Z, te);
}
function al(e, t) {
  var n = U;
  U |= 2;
  var r = yc();
  (Z !== e || te !== t) && ((Fe = null), Ct(e, t));
  do
    try {
      Jm();
      break;
    } catch (l) {
      wc(e, l);
    }
  while (!0);
  if ((js(), (U = n), (ll.current = r), Q !== null)) throw Error(w(261));
  return (Z = null), (te = 0), J;
}
function Jm() {
  for (; Q !== null; ) Mc(Q);
}
function Ym() {
  for (; Q !== null && !Sd(); ) Mc(Q);
}
function Mc(e) {
  var t = Cc(e.alternate, e, ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Sc(e) : (Q = t),
    (zs.current = null);
}
function Sc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Hm(n, t)), n !== null)) {
        (n.flags &= 32767), (Q = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (J = 6), (Q = null);
        return;
      }
    } else if (((n = Vm(n, t, ge)), n !== null)) {
      Q = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Q = t;
      return;
    }
    Q = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function yt(e, t, n) {
  var r = G,
    l = je.transition;
  try {
    (je.transition = null), (G = 1), Xm(e, t, n, r);
  } finally {
    (je.transition = l), (G = r);
  }
  return null;
}
function Xm(e, t, n, r) {
  do Xt();
  while (rt !== null);
  if (U & 6) throw Error(w(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(w(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (Td(e, s),
    e === Z && ((Q = Z = null), (te = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Cr ||
      ((Cr = !0),
      jc(Or, function () {
        return Xt(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = je.transition), (je.transition = null);
    var a = G;
    G = 1;
    var o = U;
    (U |= 4),
      (zs.current = null),
      Wm(e, n),
      gc(n, e),
      vm(Ei),
      (Hr = !!bi),
      (Ei = bi = null),
      (e.current = n),
      qm(n),
      Nd(),
      (U = o),
      (G = a),
      (je.transition = s);
  } else e.current = n;
  if (
    (Cr && ((Cr = !1), (rt = e), (sl = l)),
    (s = e.pendingLanes),
    s === 0 && (ut = null),
    kd(n.stateNode),
    pe(e, q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (il) throw ((il = !1), (e = Qi), (Qi = null), e);
  return (
    sl & 1 && e.tag !== 0 && Xt(),
    (s = e.pendingLanes),
    s & 1 ? (e === Ki ? An++ : ((An = 0), (Ki = e))) : (An = 0),
    gt(),
    null
  );
}
function Xt() {
  if (rt !== null) {
    var e = nu(sl),
      t = je.transition,
      n = G;
    try {
      if (((je.transition = null), (G = 16 > e ? 16 : e), rt === null))
        var r = !1;
      else {
        if (((e = rt), (rt = null), (sl = 0), U & 6)) throw Error(w(331));
        var l = U;
        for (U |= 4, N = e.current; N !== null; ) {
          var s = N,
            a = s.child;
          if (N.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var u = 0; u < o.length; u++) {
                var c = o[u];
                for (N = c; N !== null; ) {
                  var g = N;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Tn(8, g, s);
                  }
                  var p = g.child;
                  if (p !== null) (p.return = g), (N = p);
                  else
                    for (; N !== null; ) {
                      g = N;
                      var m = g.sibling,
                        x = g.return;
                      if ((fc(g), g === c)) {
                        N = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = x), (N = m);
                        break;
                      }
                      N = x;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var S = y.child;
                if (S !== null) {
                  y.child = null;
                  do {
                    var A = S.sibling;
                    (S.sibling = null), (S = A);
                  } while (S !== null);
                }
              }
              N = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (N = a);
          else
            e: for (; N !== null; ) {
              if (((s = N), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Tn(9, s, s.return);
                }
              var f = s.sibling;
              if (f !== null) {
                (f.return = s.return), (N = f);
                break e;
              }
              N = s.return;
            }
        }
        var d = e.current;
        for (N = d; N !== null; ) {
          a = N;
          var h = a.child;
          if (a.subtreeFlags & 2064 && h !== null) (h.return = a), (N = h);
          else
            e: for (a = d; N !== null; ) {
              if (((o = N), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Nl(9, o);
                  }
                } catch (M) {
                  H(o, o.return, M);
                }
              if (o === a) {
                N = null;
                break e;
              }
              var v = o.sibling;
              if (v !== null) {
                (v.return = o.return), (N = v);
                break e;
              }
              N = o.return;
            }
        }
        if (
          ((U = l), gt(), Re && typeof Re.onPostCommitFiberRoot == "function")
        )
          try {
            Re.onPostCommitFiberRoot(pl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (G = n), (je.transition = t);
    }
  }
  return !1;
}
function ro(e, t, n) {
  (t = ln(n, t)),
    (t = nc(e, t, 1)),
    (e = ot(e, t, 1)),
    (t = oe()),
    e !== null && (tr(e, 1, t), pe(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) ro(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        ro(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (ut === null || !ut.has(r)))
        ) {
          (e = ln(n, e)),
            (e = rc(t, e, 1)),
            (t = ot(t, e, 1)),
            (e = oe()),
            t !== null && (tr(t, 1, e), pe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Zm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Z === e &&
      (te & n) === n &&
      (J === 4 || (J === 3 && (te & 130023424) === te && 500 > q() - Ls)
        ? Ct(e, 0)
        : (Rs |= n)),
    pe(e, t);
}
function Nc(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = hr), (hr <<= 1), !(hr & 130023424) && (hr = 4194304))
      : (t = 1));
  var n = oe();
  (e = Qe(e, t)), e !== null && (tr(e, t, n), pe(e, n));
}
function ef(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Nc(e, n);
}
function tf(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(w(314));
  }
  r !== null && r.delete(t), Nc(e, n);
}
var Cc;
Cc = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || fe.current) me = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (me = !1), Om(e, t, n);
      me = !!(e.flags & 131072);
    }
  else (me = !1), L && t.flags & 1048576 && Eu(t, Yr, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Ur(e, t), (e = t.pendingProps);
      var l = en(t, se.current);
      Yt(t, n), (l = Bs(null, t, r, e, l, n));
      var s = As();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            he(r) ? ((s = !0), Kr(t)) : (s = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Es(t),
            (l.updater = Sl),
            (t.stateNode = l),
            (l._reactInternals = t),
            _i(t, r, e, n),
            (t = Li(null, t, r, !0, s, n)))
          : ((t.tag = 0), L && s && Ms(t), ae(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Ur(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = rf(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            t = Ri(null, t, r, e, n);
            break e;
          case 1:
            t = qa(null, t, r, e, n);
            break e;
          case 11:
            t = $a(null, t, r, e, n);
            break e;
          case 14:
            t = Wa(null, t, r, Pe(r.type, e), n);
            break e;
        }
        throw Error(w(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Ri(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        qa(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((ac(t), e === null)) throw Error(w(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (l = s.element),
          Au(e, t),
          el(t, r, null, n);
        var a = t.memoizedState;
        if (((r = a.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (l = ln(Error(w(423)), t)), (t = Qa(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = ln(Error(w(424)), t)), (t = Qa(e, t, r, n, l));
            break e;
          } else
            for (
              xe = at(t.stateNode.containerInfo.firstChild),
                ve = t,
                L = !0,
                Te = null,
                n = Tu(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tn(), r === l)) {
            t = Ke(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Uu(t),
        e === null && Ai(t),
        (r = t.type),
        (l = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (a = l.children),
        Di(r, l) ? (a = null) : s !== null && Di(r, s) && (t.flags |= 32),
        sc(e, t),
        ae(e, t, a, n),
        t.child
      );
    case 6:
      return e === null && Ai(t), null;
    case 13:
      return oc(e, t, n);
    case 4:
      return (
        Ds(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nn(t, null, r, n)) : ae(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        $a(e, t, r, l, n)
      );
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (s = t.memoizedProps),
          (a = l.value),
          _(Xr, r._currentValue),
          (r._currentValue = a),
          s !== null)
        )
          if (Ue(s.value, a)) {
            if (s.children === l.children && !fe.current) {
              t = Ke(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var u = o.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (s.tag === 1) {
                      (u = $e(-1, n & -n)), (u.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var g = c.pending;
                        g === null
                          ? (u.next = u)
                          : ((u.next = g.next), (g.next = u)),
                          (c.pending = u);
                      }
                    }
                    (s.lanes |= n),
                      (u = s.alternate),
                      u !== null && (u.lanes |= n),
                      Ui(s.return, n, t),
                      (o.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (s.tag === 10) a = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(w(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Ui(a, n, t),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === t) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        ae(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Yt(t, n),
        (l = ke(l)),
        (r = r(l)),
        (t.flags |= 1),
        ae(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Pe(r, t.pendingProps)),
        (l = Pe(r.type, l)),
        Wa(e, t, r, l, n)
      );
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Pe(r, l)),
        Ur(e, t),
        (t.tag = 1),
        he(r) ? ((e = !0), Kr(t)) : (e = !1),
        Yt(t, n),
        tc(t, r, l),
        _i(t, r, l, n),
        Li(null, t, r, !0, e, n)
      );
    case 19:
      return uc(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(w(156, t.tag));
};
function jc(e, t) {
  return Xo(e, t);
}
function nf(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
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
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ce(e, t, n, r) {
  return new nf(e, t, n, r);
}
function Hs(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function rf(e) {
  if (typeof e == "function") return Hs(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === us)) return 11;
    if (e === cs) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ce(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function zr(e, t, n, r, l, s) {
  var a = 2;
  if (((r = e), typeof e == "function")) Hs(e) && (a = 1);
  else if (typeof e == "string") a = 5;
  else
    e: switch (e) {
      case Gt:
        return jt(n.children, l, s, t);
      case os:
        (a = 8), (l |= 8);
        break;
      case ai:
        return (
          (e = Ce(12, n, t, l | 2)), (e.elementType = ai), (e.lanes = s), e
        );
      case oi:
        return (e = Ce(13, n, t, l)), (e.elementType = oi), (e.lanes = s), e;
      case ui:
        return (e = Ce(19, n, t, l)), (e.elementType = ui), (e.lanes = s), e;
      case Uo:
        return jl(n, l, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Bo:
              a = 10;
              break e;
            case Ao:
              a = 9;
              break e;
            case us:
              a = 11;
              break e;
            case cs:
              a = 14;
              break e;
            case Xe:
              (a = 16), (r = null);
              break e;
          }
        throw Error(w(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ce(a, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function jt(e, t, n, r) {
  return (e = Ce(7, e, r, t)), (e.lanes = n), e;
}
function jl(e, t, n, r) {
  return (
    (e = Ce(22, e, r, t)),
    (e.elementType = Uo),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function ri(e, t, n) {
  return (e = Ce(6, e, null, t)), (e.lanes = n), e;
}
function li(e, t, n) {
  return (
    (t = Ce(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lf(e, t, n, r, l) {
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
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function $s(e, t, n, r, l, s, a, o, u) {
  return (
    (e = new lf(e, t, n, o, u)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = Ce(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Es(s),
    e
  );
}
function sf(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ut,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function kc(e) {
  if (!e) return ft;
  e = e._reactInternals;
  e: {
    if (Bt(e) !== e || e.tag !== 1) throw Error(w(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (he(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(w(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (he(n)) return ku(e, n, t);
  }
  return t;
}
function bc(e, t, n, r, l, s, a, o, u) {
  return (
    (e = $s(n, r, !0, e, l, s, a, o, u)),
    (e.context = kc(null)),
    (n = e.current),
    (r = oe()),
    (l = ct(n)),
    (s = $e(r, l)),
    (s.callback = t ?? null),
    ot(n, s, l),
    (e.current.lanes = l),
    tr(e, l, r),
    pe(e, r),
    e
  );
}
function kl(e, t, n, r) {
  var l = t.current,
    s = oe(),
    a = ct(l);
  return (
    (n = kc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $e(s, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ot(l, t, a)),
    e !== null && (Ae(e, l, a, s), Tr(e, l, a)),
    a
  );
}
function ol(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function lo(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ws(e, t) {
  lo(e, t), (e = e.alternate) && lo(e, t);
}
function af() {
  return null;
}
var Ec =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function qs(e) {
  this._internalRoot = e;
}
bl.prototype.render = qs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(w(409));
  kl(e, t, null, null);
};
bl.prototype.unmount = qs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Pt(function () {
      kl(null, e, null, null);
    }),
      (t[qe] = null);
  }
};
function bl(e) {
  this._internalRoot = e;
}
bl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = iu();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < et.length && t !== 0 && t < et[n].priority; n++);
    et.splice(n, 0, e), n === 0 && au(e);
  }
};
function Qs(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function El(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function io() {}
function of(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = ol(a);
        s.call(c);
      };
    }
    var a = bc(t, r, e, 0, null, !1, !1, "", io);
    return (
      (e._reactRootContainer = a),
      (e[qe] = a.current),
      Vn(e.nodeType === 8 ? e.parentNode : e),
      Pt(),
      a
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var o = r;
    r = function () {
      var c = ol(u);
      o.call(c);
    };
  }
  var u = $s(e, 0, !1, null, null, !1, !1, "", io);
  return (
    (e._reactRootContainer = u),
    (e[qe] = u.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    Pt(function () {
      kl(t, u, n, r);
    }),
    u
  );
}
function Dl(e, t, n, r, l) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof l == "function") {
      var o = l;
      l = function () {
        var u = ol(a);
        o.call(u);
      };
    }
    kl(t, a, e, l);
  } else a = of(n, t, e, l, r);
  return ol(a);
}
ru = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 &&
          (fs(t, n | 1), pe(t, q()), !(U & 6) && ((sn = q() + 500), gt()));
      }
      break;
    case 13:
      Pt(function () {
        var r = Qe(e, 1);
        if (r !== null) {
          var l = oe();
          Ae(r, e, 1, l);
        }
      }),
        Ws(e, 1);
  }
};
hs = function (e) {
  if (e.tag === 13) {
    var t = Qe(e, 134217728);
    if (t !== null) {
      var n = oe();
      Ae(t, e, 134217728, n);
    }
    Ws(e, 134217728);
  }
};
lu = function (e) {
  if (e.tag === 13) {
    var t = ct(e),
      n = Qe(e, t);
    if (n !== null) {
      var r = oe();
      Ae(n, e, t, r);
    }
    Ws(e, t);
  }
};
iu = function () {
  return G;
};
su = function (e, t) {
  var n = G;
  try {
    return (G = e), t();
  } finally {
    G = n;
  }
};
wi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((mi(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(w(90));
            _o(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ro(e, n);
      break;
    case "select":
      (t = n.value), t != null && qt(e, !!n.multiple, t, !1);
  }
};
Wo = Fs;
qo = Pt;
var uf = { usingClientEntryPoint: !1, Events: [rr, Lt, wl, Ho, $o, Fs] },
  wn = {
    findFiberByHostInstance: Mt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  cf = {
    bundleType: wn.bundleType,
    version: wn.version,
    rendererPackageName: wn.rendererPackageName,
    rendererConfig: wn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Je.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Jo(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: wn.findFiberByHostInstance || af,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var jr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!jr.isDisabled && jr.supportsFiber)
    try {
      (pl = jr.inject(cf)), (Re = jr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = uf;
ye.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qs(t)) throw Error(w(200));
  return sf(e, t, null, n);
};
ye.createRoot = function (e, t) {
  if (!Qs(e)) throw Error(w(299));
  var n = !1,
    r = "",
    l = Ec;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = $s(e, 1, !1, null, null, n, !1, r, l)),
    (e[qe] = t.current),
    Vn(e.nodeType === 8 ? e.parentNode : e),
    new qs(t)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(w(188))
      : ((e = Object.keys(e).join(",")), Error(w(268, e)));
  return (e = Jo(t)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return Pt(e);
};
ye.hydrate = function (e, t, n) {
  if (!El(t)) throw Error(w(200));
  return Dl(null, e, t, !0, n);
};
ye.hydrateRoot = function (e, t, n) {
  if (!Qs(e)) throw Error(w(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    s = "",
    a = Ec;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = bc(t, null, e, 1, n ?? null, l, !1, s, a)),
    (e[qe] = t.current),
    Vn(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new bl(t);
};
ye.render = function (e, t, n) {
  if (!El(t)) throw Error(w(200));
  return Dl(null, e, t, !1, n);
};
ye.unmountComponentAtNode = function (e) {
  if (!El(e)) throw Error(w(40));
  return e._reactRootContainer
    ? (Pt(function () {
        Dl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = Fs;
ye.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!El(n)) throw Error(w(200));
  if (e == null || e._reactInternals === void 0) throw Error(w(38));
  return Dl(e, t, n, !1, r);
};
ye.version = "18.3.1-next-f1338f8080-20240426";
function Dc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc);
    } catch (e) {
      console.error(e);
    }
}
Dc(), (Do.exports = ye);
var df = Do.exports,
  Pc,
  so = df;
(Pc = so.createRoot), so.hydrateRoot;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var mf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ff = (e) =>
    e
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  E = (e, t) => {
    const n = P.forwardRef(
      (
        {
          color: r = "currentColor",
          size: l = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          className: o = "",
          children: u,
          ...c
        },
        g
      ) =>
        P.createElement(
          "svg",
          {
            ref: g,
            ...mf,
            width: l,
            height: l,
            stroke: r,
            strokeWidth: a ? (Number(s) * 24) / Number(l) : s,
            className: ["lucide", `lucide-${ff(e)}`, o].join(" "),
            ...c,
          },
          [
            ...t.map(([p, m]) => P.createElement(p, m)),
            ...(Array.isArray(u) ? u : [u]),
          ]
        )
    );
    return (n.displayName = `${e}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ir = E("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const It = E("Award", [
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ["path", { d: "M15.477 12.89 17 22l-5-3-5 3 1.523-9.11", key: "em7aur" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ao = E("BarChart3", [
  ["path", { d: "M3 3v18h18", key: "1s2lah" }],
  ["path", { d: "M18 17V9", key: "2bz60n" }],
  ["path", { d: "M13 17V5", key: "1frdt8" }],
  ["path", { d: "M8 17v-3", key: "17ska0" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oo = E("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xi = E("BookOpen", [
  ["path", { d: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z", key: "vv98re" }],
  ["path", { d: "M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z", key: "1cyq3y" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uo = E("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yn = E("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const co = E("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hf = E("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ul = E("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mo = E("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xn = E("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pf = E("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gf = E("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ic = E("Compass", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "polygon",
    {
      points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76",
      key: "m9r19z",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xf = E("Construction", [
  [
    "rect",
    { x: "2", y: "6", width: "20", height: "8", rx: "1", key: "1estib" },
  ],
  ["path", { d: "M17 14v7", key: "7m2elx" }],
  ["path", { d: "M7 14v7", key: "1cm7wv" }],
  ["path", { d: "M17 3v3", key: "1v4jwn" }],
  ["path", { d: "M7 3v3", key: "7o6guu" }],
  ["path", { d: "M10 14 2.3 6.3", key: "1023jk" }],
  ["path", { d: "m14 6 7.7 7.7", key: "1s8pl2" }],
  ["path", { d: "m8 6 8 8", key: "hl96qh" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vf = E("Database", [
  ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
  ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
  ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tc = E("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wf = E("Eye", [
  [
    "path",
    { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z", key: "rwhkz3" },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ii = E("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ks = E("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zi = E("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jn = E("HelpCircle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bc = E("Home", [
  [
    "path",
    { d: "m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z", key: "y5dka4" },
  ],
  ["polyline", { points: "9 22 9 12 15 12 15 22", key: "e2us08" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ac = E("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cl = E("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yf = E("Maximize2", [
  ["polyline", { points: "15 3 21 3 21 9", key: "mznyad" }],
  ["polyline", { points: "9 21 3 21 3 15", key: "1avn1i" }],
  ["line", { x1: "21", x2: "14", y1: "3", y2: "10", key: "ota7mn" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mf = E("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zn = E("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sf = E("Minimize2", [
  ["polyline", { points: "4 14 10 14 10 20", key: "11kfnr" }],
  ["polyline", { points: "20 10 14 10 14 4", key: "rlmsce" }],
  ["line", { x1: "14", x2: "21", y1: "10", y2: "3", key: "o5lafz" }],
  ["line", { x1: "3", x2: "10", y1: "21", y2: "14", key: "1atl0r" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nf = E("PanelLeftClose", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cf = E("PanelLeftOpen", [
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" },
  ],
  ["path", { d: "M9 3v18", key: "fh3hqa" }],
  ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Uc = E("PenLine", [
  ["path", { d: "M12 20h9", key: "t2du7b" }],
  [
    "path",
    { d: "M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z", key: "ymcmye" },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gc = E("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jf = E("Play", [
  ["polygon", { points: "5 3 19 12 5 21 5 3", key: "191637" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fo = E("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kf = E("Save", [
  [
    "path",
    {
      d: "M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",
      key: "1owoqh",
    },
  ],
  ["polyline", { points: "17 21 17 13 7 13 7 21", key: "1md35c" }],
  ["polyline", { points: "7 3 7 8 15 8", key: "8nz8an" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dl = E("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = E("Send", [
  ["path", { d: "m22 2-7 20-4-9-9-4Z", key: "1q3vgg" }],
  ["path", { d: "M22 2 11 13", key: "nzbqef" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bf = E("Settings", [
  [
    "path",
    {
      d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",
      key: "1qme2f",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = E("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ef = E("Stethoscope", [
  [
    "path",
    {
      d: "M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",
      key: "1jd90r",
    },
  ],
  ["path", { d: "M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4", key: "126ukv" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Df = E("Target", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pf = E("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _c = E("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const If = E("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ml = E("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fl = E("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sr = E("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  ho = ({
    onSearchChange: e,
    onMobileMenuToggle: t,
    isMobileMenuOpen: n,
    user: r,
    onSectionChange: l,
  }) => {
    const [s, a] = P.useState(""),
      [o, u] = P.useState(null),
      c = (p) => {
        const m = p.target.value;
        a(m), e(m);
      },
      g = (p) => {
        u(o === p ? null : p);
      };
    return i.jsxs("header", {
      className:
        "bg-white/90 backdrop-blur-xl border-b border-slate-200/50 px-4 lg:px-6 py-2 lg:py-2 sticky top-0 z-40 shadow-sm h-16",
      children: [
        i.jsxs("div", {
          className: "flex items-center justify-between h-full",
          children: [
            i.jsxs("div", {
              className: "xl:hidden flex items-center justify-between w-full",
              children: [
                i.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    i.jsx("div", {
                      className:
                        "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg",
                      children: i.jsx("span", {
                        className: "text-white font-bold text-lg",
                        children: "BD",
                      }),
                    }),
                    i.jsx("div", {
                      children: i.jsx("h1", {
                        className:
                          "text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                        children: "BD-Counselling",
                      }),
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex items-center space-x-2",
                  children: [
                    i.jsx("button", {
                      className:
                        "p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors",
                      children: i.jsx(mo, { className: "w-5 h-5" }),
                    }),
                    i.jsx("button", {
                      className:
                        "p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors",
                      children: i.jsx(Xn, { className: "w-5 h-5" }),
                    }),
                    i.jsxs("button", {
                      className:
                        "p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors relative",
                      children: [
                        i.jsx(oo, { className: "w-5 h-5" }),
                        i.jsx("span", {
                          className:
                            "absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse",
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      onClick: () => l("profile"),
                      className:
                        "w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center",
                      children: i.jsx("span", {
                        className: "font-medium text-sm",
                        children: (r == null ? void 0 : r.avatar) || "U",
                      }),
                    }),
                    i.jsx("button", {
                      onClick: t,
                      className:
                        "p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg",
                      children: n
                        ? i.jsx(sr, { className: "w-5 h-5" })
                        : i.jsx(Mf, { className: "w-5 h-5" }),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className: "hidden xl:flex items-center justify-between w-full",
              children: [
                i.jsxs("div", {
                  className: "flex items-center space-x-4 lg:space-x-8",
                  children: [
                    i.jsxs("div", {
                      className: "flex items-center space-x-3",
                      children: [
                        i.jsx("div", {
                          className:
                            "w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg",
                          children: i.jsx("span", {
                            className: "text-white font-bold text-lg",
                            children: "BD",
                          }),
                        }),
                        i.jsxs("div", {
                          children: [
                            i.jsx("h1", {
                              className:
                                "text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent",
                              children: "BD-Counselling",
                            }),
                            i.jsx("p", {
                              className: "text-xs text-slate-500",
                              children: "Medical Career Guidance",
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "flex items-center space-x-6",
                      children: [
                        i.jsxs("div", {
                          className: "relative",
                          children: [
                            i.jsxs("button", {
                              onClick: () => g("neet"),
                              className:
                                "flex items-center space-x-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200 font-medium",
                              children: [
                                i.jsx("span", { children: "NEET UG" }),
                                i.jsx(ul, { className: "w-4 h-4" }),
                              ],
                            }),
                            o === "neet" &&
                              i.jsxs("div", {
                                className:
                                  "absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 py-2 z-50 animate-in slide-in-from-top-2",
                                children: [
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "NEET UG",
                                  }),
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "NEET PG",
                                  }),
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "INICET",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        i.jsxs("button", {
                          className:
                            "flex items-center space-x-2 px-4 py-2 text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-200 font-medium",
                          onClick: () => l("ChoiceLists"),
                          children: [
                            i.jsx(Zi, { className: "w-4 h-4" }),
                            i.jsx("span", { children: "My Choice Lists" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "flex items-center space-x-3 lg:space-x-4",
                  children: [
                    i.jsxs("div", {
                      className: "relative",
                      children: [
                        i.jsx(dl, {
                          className:
                            "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400",
                        }),
                        i.jsx("input", {
                          type: "text",
                          placeholder: "Search courses, colleges...",
                          value: s,
                          onChange: c,
                          className:
                            "pl-10 pr-4 py-2.5 w-64 lg:w-80 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all duration-200",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "flex items-center space-x-2",
                      children: [
                        i.jsx("button", {
                          className:
                            "p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors",
                          children: i.jsx(mo, { className: "w-5 h-5" }),
                        }),
                        i.jsx("button", {
                          className:
                            "p-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors",
                          children: i.jsx(Xn, { className: "w-5 h-5" }),
                        }),
                        i.jsxs("div", {
                          className: "relative",
                          children: [
                            i.jsxs("button", {
                              onClick: () => g("institutes"),
                              className:
                                "flex items-center space-x-1 px-3 py-2 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors",
                              children: [
                                i.jsx("span", { children: "Institutes" }),
                                i.jsx(ul, { className: "w-4 h-4" }),
                              ],
                            }),
                            o === "institutes" &&
                              i.jsxs("div", {
                                className:
                                  "absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl shadow-xl border border-slate-200/50 py-2 z-50 animate-in slide-in-from-top-2",
                                children: [
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "All Institutes",
                                  }),
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "Top Institutes",
                                  }),
                                  i.jsx("a", {
                                    href: "#",
                                    className:
                                      "block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 transition-colors",
                                    children: "Government",
                                  }),
                                ],
                              }),
                          ],
                        }),
                        i.jsx("button", {
                          onClick: () => l("faq"),
                          className:
                            "px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg",
                          children: "FAQ",
                        }),
                        i.jsx("button", {
                          onClick: () => l("support"),
                          className:
                            "px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg",
                          children: "Support",
                        }),
                      ],
                    }),
                    i.jsxs("button", {
                      className:
                        "p-2.5 text-slate-700 hover:bg-slate-50 rounded-xl transition-colors relative",
                      children: [
                        i.jsx(oo, { className: "w-5 h-5" }),
                        i.jsx("span", {
                          className:
                            "absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse",
                        }),
                      ],
                    }),
                    i.jsx("button", {
                      onClick: () => l("profile"),
                      className:
                        "p-2.5 bg-gradient-to-r from-slate-700 to-slate-800 text-white rounded-xl hover:from-slate-600 hover:to-slate-700 transition-all duration-200 transform hover:scale-105",
                      children: i.jsx("span", {
                        className: "font-medium",
                        children: (r == null ? void 0 : r.avatar) || "U",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsx("div", {
          className: "xl:hidden mt-3",
          children: i.jsxs("div", {
            className: "relative",
            children: [
              i.jsx(dl, {
                className:
                  "w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400",
              }),
              i.jsx("input", {
                type: "text",
                placeholder: "Search courses, colleges...",
                value: s,
                onChange: c,
                className:
                  "w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50/50 transition-all duration-200",
              }),
            ],
          }),
        }),
      ],
    });
  },
  kr = ({
    activeSection: e,
    onSectionChange: t,
    className: n = "",
    isCollapsed: r = !1,
    onToggleCollapse: l,
  }) => {
    const [s, a] = P.useState(["repo", "tools", "explore"]),
      o = (c) => {
        r || a((g) => (g.includes(c) ? g.filter((p) => p !== c) : [...g, c]));
      },
      u = [
        {
          id: "home",
          icon: Bc,
          label: "Dashboard",
          hasSubmenu: !1,
          color: "text-blue-600",
        },
        {
          id: "explore",
          icon: Ic,
          label: "Explore",
          hasSubmenu: !0,
          color: "text-orange-600",
          submenu: [
            "Medical Courses",
            "Top Colleges",
            "Entrance Exams",
            "Career Paths",
          ],
        },
        {
          id: "tools",
          icon: bf,
          label: "Rank Predictor",
          hasSubmenu: !0,
          color: "text-purple-600",
          submenu: [
            "NEET UG Predictor",
            "NEET PG Predictor",
            "Cut-off Analysis",
            "Rank Analysis",
          ],
        },
        {
          id: "universities",
          icon: Ks,
          label: "Universities",
          hasSubmenu: !1,
          color: "text-cyan-600",
        },
        {
          id: "Counselling",
          icon: If,
          label: "Counselling",
          hasSubmenu: !1,
          color: "text-pink-600",
        },
        {
          id: "results",
          icon: It,
          label: "Results & Rankings",
          hasSubmenu: !1,
          color: "text-emerald-600",
          onClick: () => (window.location.href = "/resultranking"),
        },
      ];
    return i.jsx("div", {
      className: `${
        r ? "w-16" : "w-64"
      } bg-white/95 backdrop-blur-md border-r border-slate-200 h-screen overflow-y-auto transition-all duration-300 ${n} flex-shrink-0 fixed left-0 top-0 z-30`,
      children: i.jsxs("div", {
        className: "p-4",
        children: [
          l &&
            i.jsx("div", {
              className: "flex justify-end mb-4",
              children: i.jsx("button", {
                onClick: l,
                className:
                  "p-2 hover:bg-slate-100 rounded-xl transition-colors text-slate-600 hover:text-slate-800",
                title: r ? "Expand Sidebar" : "Collapse Sidebar",
                children: r
                  ? i.jsx(Cf, { className: "w-5 h-5" })
                  : i.jsx(Nf, { className: "w-5 h-5" }),
              }),
            }),
          i.jsx("nav", {
            className: "space-y-2",
            children: u.map((c) => {
              var g;
              return i.jsxs(
                "div",
                {
                  children: [
                    i.jsxs("button", {
                      onClick: () => {
                        c.onClick
                          ? c.onClick()
                          : c.hasSubmenu && !r
                          ? o(c.id)
                          : t(c.id);
                      },
                      className: `w-full flex items-center ${
                        r ? "justify-center px-2" : "justify-between px-4"
                      } py-3 text-sm font-medium rounded-xl transition-all duration-200 group ${
                        e === c.id
                          ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-md border border-blue-200"
                          : "text-slate-700 hover:bg-slate-50 hover:shadow-sm"
                      }`,
                      title: r ? c.label : "",
                      children: [
                        i.jsxs("div", {
                          className: `flex items-center ${
                            r ? "" : "space-x-3"
                          }`,
                          children: [
                            i.jsx(c.icon, {
                              className: `w-5 h-5 ${
                                e === c.id ? "text-blue-600" : c.color
                              } transition-colors`,
                            }),
                            !r &&
                              i.jsx("span", {
                                className: "font-medium",
                                children: c.label,
                              }),
                          ],
                        }),
                        c.hasSubmenu &&
                          !r &&
                          i.jsx("div", {
                            className: `transition-transform duration-200 ${
                              s.includes(c.id) ? "rotate-180" : ""
                            }`,
                            children: i.jsx(ul, { className: "w-4 h-4" }),
                          }),
                      ],
                    }),
                    c.hasSubmenu &&
                      s.includes(c.id) &&
                      !r &&
                      i.jsx("div", {
                        className:
                          "ml-6 mt-2 space-y-1 animate-in slide-in-from-top-2",
                        children:
                          (g = c.submenu) == null
                            ? void 0
                            : g.map((p) =>
                                i.jsx(
                                  "button",
                                  {
                                    onClick: () =>
                                      t(
                                        `${c.id}-${p
                                          .toLowerCase()
                                          .replace(/\s+/g, "-")}`
                                      ),
                                    className:
                                      "w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-lg transition-all duration-200 hover:translate-x-1",
                                    children: i.jsxs("div", {
                                      className: "flex items-center space-x-2",
                                      children: [
                                        i.jsx("div", {
                                          className:
                                            "w-1.5 h-1.5 bg-slate-400 rounded-full",
                                        }),
                                        i.jsx("span", { children: p }),
                                      ],
                                    }),
                                  },
                                  p
                                )
                              ),
                      }),
                  ],
                },
                c.id
              );
            }),
          }),
        ],
      }),
    });
  },
  Tf = ({ activeTab: e }) => {
    const t = [
        {
          id: "quotas",
          label: "Quotas",
          icon: ii,
          bgColor: "bg-orange-100",
          textColor: "text-orange-600",
        },
        {
          id: "registration",
          label: "Registration",
          icon: ao,
          bgColor: "bg-orange-100",
          textColor: "text-orange-600",
        },
        {
          id: "prospectus",
          label: "Prospectus",
          icon: ii,
          bgColor: "bg-orange-100",
          textColor: "text-orange-600",
        },
      ],
      n = [
        {
          title: "NEET Results 2025",
          subtitle: "Check your scorecard",
          icon: Df,
          bgGradient: "from-blue-400 to-blue-600",
          textColor: "text-white",
          action: "Get Result Now",
          onClick: () => {
            window.open(
              "https://examinationservices.nic.in/resultservices/Neet2025/Login",
              "_blank"
            );
          },
        },
        {
          title: "Career Guidance",
          subtitle: "Expert consultation",
          icon: Ks,
          bgGradient: "from-green-400 to-green-600",
          textColor: "text-white",
          action: "Free Counselling",
          onClick: () => {
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSdwL6ERosbYYVBw5dUxQoVupLnzSDEtW8qe0UE-3FsptSB8sw/viewform?usp=preview",
              "_blank"
            );
          },
        },
        {
          title: "Frequently Asked Questions",
          subtitle: "Get all your questions answered",
          icon: jn,
          bgGradient: "from-purple-400 to-purple-600",
          textColor: "text-white",
          action: "View FAQ",
          onClick: () => {
            window.location.href = "/faq";
          },
        },
      ],
      r = [
        {
          title: "Allotments",
          subtitle: "2022, 2023, 2024",
          icon: fl,
          color: "bg-purple-500",
        },
        {
          title: "Closing Ranks",
          subtitle: "2022, 2023, 2024",
          icon: _c,
          color: "bg-blue-500",
        },
        {
          title: "Seat Matrix",
          subtitle: "2022, 2023, 2024",
          icon: ao,
          color: "bg-indigo-500",
        },
        {
          title: "Fee, Stipend & Bond",
          subtitle: "2022, 2023, 2024",
          icon: It,
          color: "bg-purple-600",
        },
      ],
      l = [
        { label: "Registered", value: "6,819", year: "2024" },
        { label: "Appeared", value: "6,612", year: "2024" },
        { label: "Qualified", value: "4,681", year: "2024" },
        { label: "Registered", value: "3,49,759", year: "2023" },
        { label: "Appeared", value: "3,33,333", year: "2023" },
        { label: "Qualified", value: "2,15,768", year: "2023" },
        { label: "Registered", value: "2,82,051", year: "2022" },
        { label: "Appeared", value: "2,74,542", year: "2022" },
        { label: "Qualified", value: "1,42,829", year: "2022" },
      ],
      s = [
        {
          date: "SEP 20 2024",
          title: "Round 2 Joining",
          subtitle: "Start Date",
          status: "completed",
        },
        {
          date: "SEP 27 2024",
          title: "Round 2 Joining",
          subtitle: "End Date",
          status: "completed",
        },
        {
          date: "OCT 8 2024",
          title: "Round 3 Registration",
          subtitle: "Start Date",
          status: "current",
        },
        {
          date: "OCT 11 2024",
          title: "Round 3 Registration",
          subtitle: "End Date",
          status: "pending",
        },
      ];
    return i.jsxs("div", {
      className:
        "flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen overflow-y-auto",
      children: [
        i.jsxs("div", {
          className:
            "bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 px-4 lg:px-6 py-6 lg:py-12 relative overflow-hidden",
          children: [
            i.jsx("div", { className: "absolute inset-0 bg-black/5" }),
            i.jsxs("div", {
              className: "relative max-w-7xl mx-auto",
              children: [
                i.jsxs("div", {
                  className: "xl:hidden text-center",
                  children: [
                    i.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-2xl mb-4 backdrop-blur-sm",
                      children: i.jsx("span", {
                        className: "text-white text-2xl",
                        children: "⚡",
                      }),
                    }),
                    i.jsx("h1", {
                      className: "text-xl font-bold text-white mb-2",
                      children: "All India Counselling - UG Medical",
                    }),
                    i.jsx("p", {
                      className: "text-orange-100 mb-6 text-sm",
                      children: "Central • All India",
                    }),
                    i.jsx("div", {
                      className: "grid grid-cols-2 gap-3 mb-6",
                      children: t.map((a) =>
                        i.jsxs(
                          "button",
                          {
                            className: `flex flex-col items-center space-y-2 p-4 rounded-2xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${a.bgColor} ${a.textColor}`,
                            children: [
                              i.jsx(a.icon, { className: "w-6 h-6" }),
                              i.jsx("span", {
                                className: "text-sm font-medium",
                                children: a.label,
                              }),
                            ],
                          },
                          a.id
                        )
                      ),
                    }),
                    i.jsxs("div", {
                      className: "flex justify-center space-x-3",
                      children: [
                        i.jsx("button", {
                          className:
                            "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white hover:bg-green-600 transition-all duration-300 transform hover:scale-110 shadow-lg",
                          children: i.jsx(Zn, { className: "w-6 h-6" }),
                        }),
                        i.jsx("button", {
                          className:
                            "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 shadow-lg",
                          children: i.jsx(Js, { className: "w-6 h-6" }),
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "hidden xl:block text-center",
                  children: [
                    i.jsxs("div", {
                      className: "inline-flex items-center space-x-3 mb-6",
                      children: [
                        i.jsx("h1", {
                          className:
                            "text-3xl lg:text-4xl font-bold text-white",
                          children: "NEET UG Medical Counselling 2025",
                        }),
                        i.jsx("div", {
                          className:
                            "w-8 h-8 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm",
                          children: i.jsx("span", {
                            className: "text-white text-lg",
                            children: "⚡",
                          }),
                        }),
                      ],
                    }),
                    i.jsx("p", {
                      className: "text-orange-100 mb-8 text-lg",
                      children:
                        "Central • All India • Government Medical Colleges",
                    }),
                    i.jsxs("div", {
                      className:
                        "flex flex-wrap items-center justify-center gap-4",
                      children: [
                        t.map((a) =>
                          i.jsxs(
                            "button",
                            {
                              className: `flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-xl transform hover:scale-105 ${a.bgColor} ${a.textColor} font-medium`,
                              children: [
                                i.jsx(a.icon, { className: "w-5 h-5" }),
                                i.jsx("span", { children: a.label }),
                              ],
                            },
                            a.id
                          )
                        ),
                        i.jsx("button", {
                          className:
                            "w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white hover:bg-green-500 transition-all duration-300 transform hover:scale-110 shadow-lg",
                          children: i.jsx("span", {
                            className: "text-lg font-bold",
                            children: "W",
                          }),
                        }),
                        i.jsx("button", {
                          className:
                            "w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 shadow-lg",
                          children: i.jsx("span", {
                            className: "text-lg font-bold",
                            children: "T",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className: "px-4 lg:px-6 py-6 lg:py-8 max-w-7xl mx-auto",
          children: [
            i.jsx("div", {
              className:
                "grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-8 lg:mb-12",
              children: n.map((a, o) =>
                i.jsxs(
                  "div",
                  {
                    className: `bg-gradient-to-r ${a.bgGradient} rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105`,
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center justify-between mb-4",
                        children: [
                          i.jsx("div", {
                            className:
                              "w-12 h-12 lg:w-16 lg:h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm",
                            children: i.jsx(a.icon, {
                              className: "w-6 h-6 lg:w-8 lg:h-8",
                            }),
                          }),
                          i.jsx(Tc, { className: "w-5 h-5 opacity-70" }),
                        ],
                      }),
                      i.jsx("h3", {
                        className: "text-lg lg:text-xl font-bold mb-2",
                        children: a.title,
                      }),
                      i.jsx("p", {
                        className: "text-white/80 mb-4 text-sm lg:text-base",
                        children: a.subtitle,
                      }),
                      i.jsx("button", {
                        className:
                          "bg-white/20 backdrop-blur-sm px-4 py-2 lg:px-6 lg:py-3 rounded-lg lg:rounded-xl hover:bg-white/30 transition-all duration-200 font-medium text-sm lg:text-base",
                        onClick: a.onClick,
                        children: a.action,
                      }),
                    ],
                  },
                  o
                )
              ),
            }),
            i.jsx("div", {
              className:
                "grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 mb-8 lg:mb-12",
              children: r.map((a, o) =>
                i.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/80 backdrop-blur-xl rounded-2xl p-4 lg:p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105",
                    children: [
                      i.jsx("div", {
                        className: `w-10 h-10 lg:w-12 lg:h-12 ${a.color} rounded-xl flex items-center justify-center mb-3 lg:mb-4`,
                        children: i.jsx(a.icon, {
                          className: "w-5 h-5 lg:w-6 lg:h-6 text-white",
                        }),
                      }),
                      i.jsx("h3", {
                        className:
                          "font-bold text-slate-800 mb-1 text-sm lg:text-base",
                        children: a.title,
                      }),
                      i.jsx("p", {
                        className: "text-xs lg:text-sm text-slate-600",
                        children: a.subtitle,
                      }),
                      i.jsx(Xn, { className: "w-4 h-4 text-slate-400 mt-2" }),
                    ],
                  },
                  o
                )
              ),
            }),
            i.jsxs("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20",
              children: [
                i.jsxs("div", {
                  className: "text-center mb-6 lg:mb-8",
                  children: [
                    i.jsx("h2", {
                      className:
                        "text-2xl lg:text-3xl font-bold text-slate-800 mb-2",
                      children: "NEET UG 2024 vs 2025",
                    }),
                    i.jsx("p", {
                      className: "text-slate-600 text-sm lg:text-base",
                      children: "Comprehensive statistics comparison",
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "grid grid-cols-3 lg:grid-cols-3 gap-3 lg:gap-6",
                  children: l.map((a, o) =>
                    i.jsx(
                      "div",
                      {
                        className:
                          "bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl lg:rounded-2xl p-3 lg:p-6 border border-slate-200/50 hover:shadow-lg transition-all duration-300",
                        children: i.jsxs("div", {
                          className: "text-center",
                          children: [
                            i.jsx("div", {
                              className:
                                "text-lg lg:text-3xl font-bold text-slate-800 mb-1 lg:mb-2",
                              children: a.value,
                            }),
                            i.jsx("div", {
                              className:
                                "text-slate-600 font-medium mb-1 text-xs lg:text-sm",
                              children: a.label,
                            }),
                            i.jsx("div", {
                              className:
                                "text-xs lg:text-sm text-blue-600 font-medium",
                              children: a.year,
                            }),
                          ],
                        }),
                      },
                      o
                    )
                  ),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 mb-8 lg:mb-12 border border-white/20",
              children: [
                i.jsxs("div", {
                  className:
                    "flex items-start space-x-3 lg:space-x-4 mb-4 lg:mb-6",
                  children: [
                    i.jsx("div", {
                      className:
                        "w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0",
                      children: i.jsx(ii, {
                        className: "w-5 h-5 lg:w-6 lg:h-6 text-blue-600",
                      }),
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("h3", {
                          className:
                            "text-lg lg:text-2xl font-bold text-slate-800 mb-2",
                          children: "How to Check NEET Result 2025?",
                        }),
                        i.jsx("p", {
                          className: "text-slate-600 text-sm lg:text-base",
                          children:
                            "Candidates have to check their NEET 2025 result and download the scorecards in online mode by following the steps given below.",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className: "space-y-3 lg:space-y-4",
                  children: [
                    "Visit the official website of NEET 2025 – www.neet.nta.nic.in or directly enter the link",
                    "Click on the link indicating NEET 2025 Scorecard Download",
                    "Enter the NEET 2025 Application Number, Password and Security Pin",
                    "Click on Submit",
                    "NEET 2025 scorecard will be displayed on the screen",
                    "Download and print the NEET scorecard for future reference",
                  ].map((a, o) =>
                    i.jsxs(
                      "div",
                      {
                        className: "flex items-start space-x-3",
                        children: [
                          i.jsx("div", {
                            className:
                              "w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0",
                            children: o + 1,
                          }),
                          i.jsx("div", {
                            children: i.jsx("p", {
                              className: "text-slate-700 text-sm lg:text-base",
                              children: a,
                            }),
                          }),
                        ],
                      },
                      o
                    )
                  ),
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl shadow-xl p-6 lg:p-8 border border-white/20 mb-8 lg:mb-12",
              children: [
                i.jsx("h3", {
                  className:
                    "text-xl lg:text-2xl font-bold text-slate-800 mb-6 lg:mb-8 text-center",
                  children: "Counselling Timeline 2025",
                }),
                i.jsxs("div", {
                  className: "relative",
                  children: [
                    i.jsx("div", {
                      className: "xl:hidden space-y-6",
                      children: s.map((a, o) =>
                        i.jsxs(
                          "div",
                          {
                            className: "flex items-start space-x-4",
                            children: [
                              i.jsx("div", {
                                className: `w-6 h-6 rounded-full flex-shrink-0 ${
                                  a.status === "completed"
                                    ? "bg-green-400"
                                    : a.status === "current"
                                    ? "bg-blue-500 animate-pulse"
                                    : "bg-slate-300"
                                }`,
                              }),
                              i.jsxs("div", {
                                className: "bg-slate-50 rounded-xl p-4 flex-1",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "text-sm text-blue-600 font-medium mb-1",
                                    children: a.date,
                                  }),
                                  i.jsx("div", {
                                    className:
                                      "text-base font-bold text-slate-800 mb-1",
                                    children: a.title,
                                  }),
                                  i.jsx("div", {
                                    className: "text-sm text-slate-600",
                                    children: a.subtitle,
                                  }),
                                ],
                              }),
                            ],
                          },
                          o
                        )
                      ),
                    }),
                    i.jsx("div", {
                      className:
                        "hidden xl:flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-4",
                      children: s.map((a, o) =>
                        i.jsxs(
                          "div",
                          {
                            className:
                              "flex flex-col items-center text-center flex-1",
                            children: [
                              i.jsx("div", {
                                className: `w-6 h-6 rounded-full mb-4 ${
                                  a.status === "completed"
                                    ? "bg-green-400"
                                    : a.status === "current"
                                    ? "bg-blue-500 animate-pulse"
                                    : "bg-slate-300"
                                }`,
                              }),
                              i.jsxs("div", {
                                className:
                                  "bg-slate-50 rounded-xl p-4 w-full max-w-xs",
                                children: [
                                  i.jsx("div", {
                                    className:
                                      "text-sm text-blue-600 font-medium mb-1",
                                    children: a.date,
                                  }),
                                  i.jsx("div", {
                                    className:
                                      "text-lg font-bold text-slate-800 mb-1",
                                    children: a.title,
                                  }),
                                  i.jsx("div", {
                                    className: "text-sm text-slate-600",
                                    children: a.subtitle,
                                  }),
                                ],
                              }),
                            ],
                          },
                          o
                        )
                      ),
                    }),
                    i.jsx("div", {
                      className:
                        "hidden md:block absolute top-3 left-0 right-0 h-0.5 bg-slate-200",
                      children: i.jsx("div", {
                        className: "h-full bg-green-400 w-1/2",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            i.jsxs("div", {
              className:
                "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl lg:rounded-3xl p-6 lg:p-8 text-center text-white shadow-2xl",
              children: [
                i.jsxs("h3", {
                  className: "text-xl lg:text-3xl font-bold mb-3 lg:mb-4",
                  children: [
                    "Still ",
                    i.jsx("span", {
                      className: "text-pink-300",
                      children: "Confused?",
                    }),
                    " Get Your Career Guidance Today!!!",
                  ],
                }),
                i.jsx("p", {
                  className: "text-blue-100 mb-4 lg:mb-6 text-sm lg:text-lg",
                  children:
                    "Don't count the ranks. Count the lives you'll impact with expert medical career guidance.",
                }),
                i.jsx("a", {
                  href: "https://forms.gle/HE2RyX5CLh7j9FzX9",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className:
                    "bg-gradient-to-r from-pink-400 to-red-400 px-6 py-3 lg:px-8 lg:py-4 rounded-xl text-white font-bold text-base lg:text-lg hover:from-pink-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-xl inline-block",
                  children: "Click Here for Free Consultation",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Bf = () => {
    const [e, t] = P.useState([
        {
          id: "1",
          name: "AIQ R1 Priority List",
          count: 28,
          color: "bg-red-50 border-red-200",
          priority: "high",
        },
        {
          id: "2",
          name: "Maharashtra Govt List",
          count: 14,
          color: "bg-blue-50 border-blue-200",
          priority: "medium",
        },
        {
          id: "3",
          name: "General Medicine DNB List",
          count: 22,
          color: "bg-green-50 border-green-200",
          priority: "high",
        },
        {
          id: "4",
          name: "Private Medical Colleges",
          count: 18,
          color: "bg-purple-50 border-purple-200",
          priority: "low",
        },
      ]),
      [n, r] = P.useState(!1),
      [l, s] = P.useState(""),
      a = () => {
        if (l.trim()) {
          const c = {
            id: Date.now().toString(),
            name: l.trim(),
            count: 0,
            color: "bg-indigo-50 border-indigo-200",
            priority: "medium",
          };
          t([...e, c]), s(""), r(!1);
        }
      },
      o = (c) => {
        t(e.filter((g) => g.id !== c));
      },
      u = (c) => {
        switch (c) {
          case "high":
            return i.jsx(es, { className: "w-4 h-4 text-yellow-500" });
          case "medium":
            return i.jsx(_c, { className: "w-4 h-4 text-blue-500" });
          default:
            return i.jsx("div", {
              className: "w-4 h-4 rounded-full bg-gray-300",
            });
        }
      };
    return i.jsxs(i.Fragment, {
      children: [
        i.jsxs("div", {
          className:
            "xl:hidden px-4 py-6 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50",
          children: [
            i.jsxs("div", {
              className: "flex items-center justify-between mb-6",
              children: [
                i.jsxs("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    i.jsx("div", {
                      className:
                        "w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center",
                      children: i.jsx(Zi, { className: "w-5 h-5 text-white" }),
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("h2", {
                          className: "text-lg font-bold text-slate-800",
                          children: "My Choice lists",
                        }),
                        i.jsxs("p", {
                          className: "text-sm text-slate-500",
                          children: [e.length, " choice lists"],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("button", {
                  className:
                    "px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-sm font-medium flex items-center space-x-1",
                  children: [
                    i.jsx(wf, { className: "w-4 h-4" }),
                    i.jsx("span", { children: "View all" }),
                  ],
                }),
              ],
            }),
            i.jsx("div", {
              className: "space-y-3",
              children: e.slice(0, 3).map((c) =>
                i.jsx(
                  "div",
                  {
                    className: `p-4 rounded-xl border-2 ${c.color} hover:shadow-lg transition-all duration-300 group`,
                    children: i.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        i.jsxs("div", {
                          className: "flex items-center space-x-3",
                          children: [
                            u(c.priority),
                            i.jsxs("div", {
                              children: [
                                i.jsx("h3", {
                                  className:
                                    "font-semibold text-slate-800 text-sm",
                                  children: c.name,
                                }),
                                i.jsxs("p", {
                                  className: "text-xs text-slate-600",
                                  children: [c.count, " choices"],
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsx(Xn, { className: "w-4 h-4 text-slate-400" }),
                      ],
                    }),
                  },
                  c.id
                )
              ),
            }),
            i.jsxs("button", {
              onClick: () => r(!0),
              className:
                "w-full mt-4 flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200",
              children: [
                i.jsx(fo, { className: "w-5 h-5" }),
                i.jsx("span", {
                  className: "font-medium",
                  children: "Create new",
                }),
              ],
            }),
          ],
        }),
        i.jsxs("div", {
          className:
            "hidden xl:block w-80 bg-white/90 backdrop-blur-xl border-l border-slate-200/50 h-screen overflow-y-auto flex-shrink-0 fixed right-0 top-0 z-20",
          children: [
            i.jsxs("div", {
              className: "p-6",
              children: [
                i.jsxs("div", {
                  className: "flex items-center space-x-3 mb-6",
                  children: [
                    i.jsx("div", {
                      className:
                        "w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-xl flex items-center justify-center",
                      children: i.jsx(Zi, { className: "w-5 h-5 text-white" }),
                    }),
                    i.jsxs("div", {
                      children: [
                        i.jsx("h2", {
                          className: "text-xl font-bold text-slate-800",
                          children: "Choice Lists",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-slate-500",
                          children: "Manage your preferences",
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsx("div", {
                  className:
                    "bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6 border border-blue-200/50",
                  children: i.jsxs("div", {
                    className: "text-center",
                    children: [
                      i.jsx("div", {
                        className: "text-2xl font-bold text-blue-700",
                        children: e.reduce((c, g) => c + g.count, 0),
                      }),
                      i.jsx("div", {
                        className: "text-sm text-blue-600",
                        children: "Total Choices",
                      }),
                    ],
                  }),
                }),
                i.jsx("div", {
                  className: "space-y-4",
                  children: e.map((c) =>
                    i.jsx(
                      "div",
                      {
                        className: `p-4 rounded-xl border-2 ${c.color} hover:shadow-lg transition-all duration-300 group transform hover:scale-105`,
                        children: i.jsxs("div", {
                          className: "flex items-center justify-between",
                          children: [
                            i.jsxs("div", {
                              className: "flex items-center space-x-3",
                              children: [
                                u(c.priority),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("h3", {
                                      className: "font-semibold text-slate-800",
                                      children: c.name,
                                    }),
                                    i.jsxs("p", {
                                      className: "text-sm text-slate-600",
                                      children: [c.count, " choices"],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-200",
                              children: [
                                i.jsx("button", {
                                  className:
                                    "p-2 hover:bg-white/50 rounded-lg transition-colors",
                                  children: i.jsx(Uc, {
                                    className: "w-4 h-4 text-slate-600",
                                  }),
                                }),
                                i.jsx("button", {
                                  onClick: () => o(c.id),
                                  className:
                                    "p-2 hover:bg-red-100 rounded-lg transition-colors",
                                  children: i.jsx(Pf, {
                                    className: "w-4 h-4 text-red-600",
                                  }),
                                }),
                                i.jsx(Xn, {
                                  className: "w-4 h-4 text-slate-400",
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      c.id
                    )
                  ),
                }),
                n
                  ? i.jsxs("div", {
                      className:
                        "mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200",
                      children: [
                        i.jsx("input", {
                          type: "text",
                          placeholder: "Enter list name...",
                          value: l,
                          onChange: (c) => s(c.target.value),
                          className:
                            "w-full p-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          onKeyPress: (c) => c.key === "Enter" && a(),
                        }),
                        i.jsxs("div", {
                          className: "flex space-x-2 mt-4",
                          children: [
                            i.jsx("button", {
                              onClick: a,
                              className:
                                "flex-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-200 font-medium",
                              children: "Create",
                            }),
                            i.jsx("button", {
                              onClick: () => {
                                r(!1), s("");
                              },
                              className:
                                "flex-1 px-4 py-2 bg-slate-300 text-slate-700 rounded-xl hover:bg-slate-400 transition-colors font-medium",
                              children: "Cancel",
                            }),
                          ],
                        }),
                      ],
                    })
                  : i.jsxs("button", {
                      onClick: () => r(!0),
                      className:
                        "w-full mt-6 flex items-center justify-center space-x-2 p-4 border-2 border-dashed border-slate-300 rounded-xl text-slate-600 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200",
                      children: [
                        i.jsx(fo, { className: "w-5 h-5" }),
                        i.jsx("span", {
                          className: "font-medium",
                          children: "Create New List",
                        }),
                      ],
                    }),
              ],
            }),
            i.jsxs("div", {
              className: "p-6 border-t border-slate-200",
              children: [
                i.jsxs("div", {
                  className: "flex items-center justify-between mb-4",
                  children: [
                    i.jsx("h3", {
                      className: "text-lg font-bold text-slate-800",
                      children: "Latest Updates",
                    }),
                    i.jsx("button", {
                      className:
                        "px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 text-sm font-medium",
                      children: "View All",
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "space-y-4",
                  children: [
                    i.jsxs("div", {
                      className:
                        "p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200/50",
                      children: [
                        i.jsx("h4", {
                          className: "font-semibold text-blue-900 mb-2",
                          children: "NEET 2025 Results",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-blue-700 mb-2",
                          children:
                            "Results declared! Check your scorecard now",
                        }),
                        i.jsx("div", {
                          className: "text-xs text-blue-600",
                          children: "2 hours ago",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200/50",
                      children: [
                        i.jsx("h4", {
                          className: "font-semibold text-green-900 mb-2",
                          children: "Round 3 Registration",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-green-700 mb-2",
                          children: "Registration opens from Oct 8, 2024",
                        }),
                        i.jsx("div", {
                          className: "text-xs text-green-600",
                          children: "5 hours ago",
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200/50",
                      children: [
                        i.jsx("h4", {
                          className: "font-semibold text-purple-900 mb-2",
                          children: "Seat Matrix 2025",
                        }),
                        i.jsx("p", {
                          className: "text-sm text-purple-700 mb-2",
                          children:
                            "Updated seat matrix available for download",
                        }),
                        i.jsx("div", {
                          className: "text-xs text-purple-600",
                          children: "1 day ago",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  po = ({ activeSection: e, onSectionChange: t }) => {
    const n = [
      { id: "home", icon: Bc },
      { id: "explore", icon: Ic },
      { id: "videos", icon: jf },
      { id: "repo", icon: vf },
      { id: "profile", icon: ml },
    ];
    return i.jsx("div", {
      className:
        "lg:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-slate-200/50 px-2 py-2 z-40 shadow-lg",
      children: i.jsx("div", {
        className: "flex items-center justify-around",
        children: n.map((r) =>
          i.jsx(
            "button",
            {
              onClick: () => t(r.id),
              className: `flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                e === r.id
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`,
              children: i.jsx(r.icon, { className: "w-6 h-6" }),
            },
            r.id
          )
        ),
      }),
    });
  },
  Af = ({ onComplete: e }) => {
    const [t, n] = P.useState(0),
      [r, l] = P.useState(0),
      s = [
        "Initializing BD-Consulting Platform...",
        "Loading Medical Counselling Data...",
        "Preparing Your Dashboard...",
        "Almost Ready!",
      ];
    return (
      P.useEffect(() => {
        const a = setInterval(() => {
            n((u) =>
              u >= 100 ? (clearInterval(a), setTimeout(e, 500), 100) : u + 2
            );
          }, 50),
          o = setInterval(() => {
            l((u) => (u + 1) % s.length);
          }, 1e3);
        return () => {
          clearInterval(a), clearInterval(o);
        };
      }, [e]),
      i.jsx("div", {
        className:
          "fixed inset-0 bg-gradient-to-br from-rose-100 via-blue-100 to-indigo-200 flex items-center justify-center z-50",
        children: i.jsxs("div", {
          className: "text-center",
          children: [
            i.jsxs("div", {
              className: "relative mb-8",
              children: [
                i.jsx("div", {
                  className:
                    "w-24 h-24 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30",
                  children: i.jsx("div", {
                    className:
                      "w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse",
                    children: i.jsx(Ks, { className: "w-8 h-8 text-white" }),
                  }),
                }),
                i.jsx("div", {
                  className:
                    "absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center animate-bounce",
                  children: i.jsx(Ef, { className: "w-4 h-4 text-white" }),
                }),
                i.jsx("div", {
                  className:
                    "absolute -bottom-2 -left-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center animate-bounce delay-300",
                  children: i.jsx(Xi, { className: "w-4 h-4 text-white" }),
                }),
              ],
            }),
            i.jsx("h1", {
              className: "text-4xl font-bold text-slate-800 mb-2 tracking-wide",
              children: "BD-Consulting",
            }),
            i.jsx("p", {
              className: "text-slate-600 mb-8 text-lg",
              children: "Medical Career Guidance Platform",
            }),
            i.jsxs("div", {
              className: "w-80 mx-auto mb-6",
              children: [
                i.jsx("div", {
                  className:
                    "bg-white/30 rounded-full h-2 backdrop-blur-sm border border-white/40",
                  children: i.jsx("div", {
                    className:
                      "bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full transition-all duration-300 ease-out",
                    style: { width: `${t}%` },
                  }),
                }),
                i.jsxs("div", {
                  className: "text-slate-700 text-sm mt-2",
                  children: [t, "%"],
                }),
              ],
            }),
            i.jsx("p", {
              className: "text-slate-600 text-sm animate-pulse",
              children: s[r],
            }),
          ],
        }),
      })
    );
  },
  Uf = ({ title: e, onBack: t }) =>
    i.jsx("div", {
      className:
        "min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4",
      children: i.jsx("div", {
        className: "max-w-md w-full text-center",
        children: i.jsxs("div", {
          className:
            "bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-slate-200",
          children: [
            i.jsx("div", {
              className:
                "w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center",
              children: i.jsx(xf, {
                className: "w-10 h-10 text-white animate-bounce",
              }),
            }),
            i.jsx("h2", {
              className: "text-2xl font-bold text-slate-800 mb-4",
              children: e,
            }),
            i.jsx("p", {
              className: "text-slate-600 mb-6 leading-relaxed",
              children:
                "This section is currently under development. We're working hard to bring you the best experience.",
            }),
            i.jsxs("div", {
              className: "space-y-3 mb-6",
              children: [
                i.jsx("div", {
                  className: "h-2 bg-slate-200 rounded-full overflow-hidden",
                  children: i.jsx("div", {
                    className:
                      "h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-3/4",
                  }),
                }),
                i.jsx("p", {
                  className: "text-sm text-slate-500",
                  children: "Coming Soon...",
                }),
              ],
            }),
            i.jsxs("button", {
              onClick: t,
              className:
                "inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg",
              children: [
                i.jsx(ir, { className: "w-4 h-4" }),
                i.jsx("span", { children: "Back to Dashboard" }),
              ],
            }),
          ],
        }),
      }),
    }),
  Gf = ({ user: e, onBack: t, onLogout: n }) => {
    const [r, l] = P.useState(!1),
      [s, a] = P.useState(e),
      o = () => {
        l(!1);
      },
      u = () => {
        a(e), l(!1);
      };
    return i.jsxs("div", {
      className:
        "flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen",
      children: [
        i.jsx("div", {
          className:
            "bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4",
          children: i.jsxs("div", {
            className: "flex items-center justify-between",
            children: [
              i.jsxs("div", {
                className: "flex items-center space-x-4",
                children: [
                  i.jsx("button", {
                    onClick: t,
                    className:
                      "p-2 hover:bg-slate-100 rounded-xl transition-colors",
                    children: i.jsx(ir, {
                      className: "w-5 h-5 text-slate-600",
                    }),
                  }),
                  i.jsx("h1", {
                    className: "text-xl font-bold text-slate-800",
                    children: "Profile",
                  }),
                ],
              }),
              i.jsx("button", {
                onClick: n,
                className:
                  "px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors",
                children: "Logout",
              }),
            ],
          }),
        }),
        i.jsxs("div", {
          className: "max-w-4xl mx-auto p-6",
          children: [
            i.jsx("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl p-8 border border-white/20 mb-6",
              children: i.jsxs("div", {
                className:
                  "flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8",
                children: [
                  i.jsxs("div", {
                    className: "flex flex-col items-center",
                    children: [
                      i.jsxs("div", {
                        className: "relative",
                        children: [
                          i.jsx("div", {
                            className:
                              "w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg",
                            children: e.avatar,
                          }),
                          i.jsx("button", {
                            className:
                              "absolute bottom-2 right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-slate-50 transition-colors",
                            children: i.jsx(hf, {
                              className: "w-5 h-5 text-slate-600",
                            }),
                          }),
                        ],
                      }),
                      i.jsx("h2", {
                        className: "text-2xl font-bold text-slate-800 mt-4",
                        children: e.name,
                      }),
                      i.jsx("p", {
                        className: "text-slate-600",
                        children: "Medical Aspirant",
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex-1 w-full",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-center justify-between mb-6",
                        children: [
                          i.jsx("h3", {
                            className: "text-xl font-bold text-slate-800",
                            children: "Personal Information",
                          }),
                          r
                            ? i.jsxs("div", {
                                className: "flex space-x-2",
                                children: [
                                  i.jsxs("button", {
                                    onClick: o,
                                    className:
                                      "flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors",
                                    children: [
                                      i.jsx(kf, { className: "w-4 h-4" }),
                                      i.jsx("span", { children: "Save" }),
                                    ],
                                  }),
                                  i.jsxs("button", {
                                    onClick: u,
                                    className:
                                      "flex items-center space-x-2 px-4 py-2 bg-slate-500 text-white rounded-xl hover:bg-slate-600 transition-colors",
                                    children: [
                                      i.jsx(sr, { className: "w-4 h-4" }),
                                      i.jsx("span", { children: "Cancel" }),
                                    ],
                                  }),
                                ],
                              })
                            : i.jsxs("button", {
                                onClick: () => l(!0),
                                className:
                                  "flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors",
                                children: [
                                  i.jsx(Uc, { className: "w-4 h-4" }),
                                  i.jsx("span", { children: "Edit" }),
                                ],
                              }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: [
                          i.jsxs("div", {
                            children: [
                              i.jsxs("label", {
                                className:
                                  "block text-sm font-medium text-slate-700 mb-2",
                                children: [
                                  i.jsx(Ac, {
                                    className: "w-4 h-4 inline mr-2",
                                  }),
                                  "Email",
                                ],
                              }),
                              r
                                ? i.jsx("input", {
                                    type: "email",
                                    value: s.email,
                                    onChange: (c) =>
                                      a({ ...s, email: c.target.value }),
                                    className:
                                      "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  })
                                : i.jsx("p", {
                                    className:
                                      "p-3 bg-slate-50 rounded-xl text-slate-700",
                                    children: e.email,
                                  }),
                            ],
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsxs("label", {
                                className:
                                  "block text-sm font-medium text-slate-700 mb-2",
                                children: [
                                  i.jsx(Gc, {
                                    className: "w-4 h-4 inline mr-2",
                                  }),
                                  "Phone",
                                ],
                              }),
                              r
                                ? i.jsx("input", {
                                    type: "tel",
                                    value: s.phone,
                                    onChange: (c) =>
                                      a({ ...s, phone: c.target.value }),
                                    className:
                                      "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  })
                                : i.jsx("p", {
                                    className:
                                      "p-3 bg-slate-50 rounded-xl text-slate-700",
                                    children: e.phone,
                                  }),
                            ],
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsxs("label", {
                                className:
                                  "block text-sm font-medium text-slate-700 mb-2",
                                children: [
                                  i.jsx(It, {
                                    className: "w-4 h-4 inline mr-2",
                                  }),
                                  "NEET Rank",
                                ],
                              }),
                              r
                                ? i.jsx("input", {
                                    type: "text",
                                    value: s.neetRank,
                                    onChange: (c) =>
                                      a({ ...s, neetRank: c.target.value }),
                                    className:
                                      "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  })
                                : i.jsx("p", {
                                    className:
                                      "p-3 bg-slate-50 rounded-xl text-slate-700",
                                    children: e.neetRank,
                                  }),
                            ],
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsxs("label", {
                                className:
                                  "block text-sm font-medium text-slate-700 mb-2",
                                children: [
                                  i.jsx(ml, {
                                    className: "w-4 h-4 inline mr-2",
                                  }),
                                  "Category",
                                ],
                              }),
                              r
                                ? i.jsxs("select", {
                                    value: s.category,
                                    onChange: (c) =>
                                      a({ ...s, category: c.target.value }),
                                    className:
                                      "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                                    children: [
                                      i.jsx("option", {
                                        value: "General",
                                        children: "General",
                                      }),
                                      i.jsx("option", {
                                        value: "OBC",
                                        children: "OBC",
                                      }),
                                      i.jsx("option", {
                                        value: "SC",
                                        children: "SC",
                                      }),
                                      i.jsx("option", {
                                        value: "ST",
                                        children: "ST",
                                      }),
                                      i.jsx("option", {
                                        value: "EWS",
                                        children: "EWS",
                                      }),
                                    ],
                                  })
                                : i.jsx("p", {
                                    className:
                                      "p-3 bg-slate-50 rounded-xl text-slate-700",
                                    children: e.category,
                                  }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "md:col-span-2",
                            children: [
                              i.jsxs("label", {
                                className:
                                  "block text-sm font-medium text-slate-700 mb-2",
                                children: [
                                  i.jsx(cl, {
                                    className: "w-4 h-4 inline mr-2",
                                  }),
                                  "State",
                                ],
                              }),
                              r
                                ? i.jsx("input", {
                                    type: "text",
                                    value: s.state,
                                    onChange: (c) =>
                                      a({ ...s, state: c.target.value }),
                                    className:
                                      "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500",
                                  })
                                : i.jsx("p", {
                                    className:
                                      "p-3 bg-slate-50 rounded-xl text-slate-700",
                                    children: e.state,
                                  }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-3 gap-6",
              children: [
                i.jsx("div", {
                  className:
                    "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                  children: i.jsxs("div", {
                    className: "text-center",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: i.jsx(It, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      i.jsx("h3", {
                        className: "text-2xl font-bold text-slate-800 mb-2",
                        children: "12,345",
                      }),
                      i.jsx("p", {
                        className: "text-slate-600",
                        children: "NEET Rank",
                      }),
                    ],
                  }),
                }),
                i.jsx("div", {
                  className:
                    "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                  children: i.jsxs("div", {
                    className: "text-center",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: i.jsx(ml, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      i.jsx("h3", {
                        className: "text-2xl font-bold text-slate-800 mb-2",
                        children: "28",
                      }),
                      i.jsx("p", {
                        className: "text-slate-600",
                        children: "Choice Lists",
                      }),
                    ],
                  }),
                }),
                i.jsx("div", {
                  className:
                    "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                  children: i.jsxs("div", {
                    className: "text-center",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: i.jsx(cl, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      i.jsx("h3", {
                        className: "text-2xl font-bold text-slate-800 mb-2",
                        children: "5",
                      }),
                      i.jsx("p", {
                        className: "text-slate-600",
                        children: "States Applied",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  _f = ({ onBack: e }) => {
    const [t, n] = P.useState("general"),
      [r, l] = P.useState(""),
      s = [
        { id: "general", label: "General Inquiry", icon: "❓" },
        { id: "technical", label: "Technical Support", icon: "🔧" },
        { id: "Counselling", label: "Counselling Help", icon: "🎓" },
        { id: "billing", label: "Billing & Payments", icon: "💳" },
      ],
      a = [
        {
          question: "How do I check my NEET result?",
          answer:
            "Visit the official NEET website and enter your application number and password to download your scorecard.",
        },
        {
          question: "What is the Counselling process?",
          answer:
            "The Counselling process involves registration, choice filling, seat allotment, and document verification.",
        },
        {
          question: "How can I predict my college admission chances?",
          answer:
            "Use our College Predictor tool by entering your NEET rank and preferred states to get accurate predictions.",
        },
        {
          question: "What documents are required for Counselling?",
          answer:
            "You need NEET scorecard, class 12 marksheet, category certificate (if applicable), and identity proof.",
        },
      ],
      o = (u) => {
        u.preventDefault(),
          alert("Your message has been sent! We will get back to you soon."),
          l("");
      };
    return i.jsxs("div", {
      className:
        "flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen",
      children: [
        i.jsx("div", {
          className:
            "bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4",
          children: i.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              i.jsx("button", {
                onClick: e,
                className:
                  "p-2 hover:bg-slate-100 rounded-xl transition-colors",
                children: i.jsx(ir, { className: "w-5 h-5 text-slate-600" }),
              }),
              i.jsx("h1", {
                className: "text-xl font-bold text-slate-800",
                children: "Support Center",
              }),
            ],
          }),
        }),
        i.jsxs("div", {
          className: "max-w-6xl mx-auto p-6",
          children: [
            i.jsx("div", {
              className:
                "bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl",
              children: i.jsxs("div", {
                className: "text-center",
                children: [
                  i.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "How can we help you today?",
                  }),
                  i.jsx("p", {
                    className: "text-blue-100 text-lg",
                    children:
                      "Our support team is here to assist you with any questions or concerns",
                  }),
                ],
              }),
            }),
            i.jsxs("div", {
              className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
              children: [
                i.jsxs("div", {
                  className: "lg:col-span-1",
                  children: [
                    i.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-6",
                      children: [
                        i.jsx("h3", {
                          className: "text-xl font-bold text-slate-800 mb-6",
                          children: "Contact Us",
                        }),
                        i.jsxs("div", {
                          className: "space-y-4",
                          children: [
                            i.jsxs("div", {
                              className:
                                "flex items-center space-x-4 p-4 bg-green-50 rounded-xl border border-green-200",
                              children: [
                                i.jsx("div", {
                                  className:
                                    "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center",
                                  children: i.jsx(Gc, {
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("p", {
                                      className: "font-medium text-slate-800",
                                      children: "Phone Support",
                                    }),
                                    i.jsx("p", {
                                      className: "text-sm text-slate-600",
                                      children: "+91 9876543210",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-green-600",
                                      children: "Available 24/7",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "flex items-center space-x-4 p-4 bg-blue-50 rounded-xl border border-blue-200",
                              children: [
                                i.jsx("div", {
                                  className:
                                    "w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center",
                                  children: i.jsx(Ac, {
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("p", {
                                      className: "font-medium text-slate-800",
                                      children: "Email Support",
                                    }),
                                    i.jsx("p", {
                                      className: "text-sm text-slate-600",
                                      children: "support@bd-Counselling.com",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-blue-600",
                                      children: "Response within 2 hours",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "flex items-center space-x-4 p-4 bg-purple-50 rounded-xl border border-purple-200",
                              children: [
                                i.jsx("div", {
                                  className:
                                    "w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center",
                                  children: i.jsx(Zn, {
                                    className: "w-6 h-6 text-white",
                                  }),
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("p", {
                                      className: "font-medium text-slate-800",
                                      children: "Live Chat",
                                    }),
                                    i.jsx("p", {
                                      className: "text-sm text-slate-600",
                                      children: "Instant messaging",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-purple-600",
                                      children: "Available now",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                      children: [
                        i.jsxs("h3", {
                          className:
                            "text-lg font-bold text-slate-800 mb-4 flex items-center",
                          children: [
                            i.jsx(gf, { className: "w-5 h-5 mr-2" }),
                            "Office Hours",
                          ],
                        }),
                        i.jsxs("div", {
                          className: "space-y-2 text-sm",
                          children: [
                            i.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                i.jsx("span", {
                                  className: "text-slate-600",
                                  children: "Monday - Friday",
                                }),
                                i.jsx("span", {
                                  className: "font-medium",
                                  children: "9:00 AM - 8:00 PM",
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                i.jsx("span", {
                                  className: "text-slate-600",
                                  children: "Saturday",
                                }),
                                i.jsx("span", {
                                  className: "font-medium",
                                  children: "10:00 AM - 6:00 PM",
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "flex justify-between",
                              children: [
                                i.jsx("span", {
                                  className: "text-slate-600",
                                  children: "Sunday",
                                }),
                                i.jsx("span", {
                                  className: "font-medium",
                                  children: "10:00 AM - 4:00 PM",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                i.jsxs("div", {
                  className: "lg:col-span-2 space-y-8",
                  children: [
                    i.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                      children: [
                        i.jsx("h3", {
                          className: "text-xl font-bold text-slate-800 mb-6",
                          children: "Send us a message",
                        }),
                        i.jsxs("form", {
                          onSubmit: o,
                          className: "space-y-6",
                          children: [
                            i.jsxs("div", {
                              children: [
                                i.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-slate-700 mb-3",
                                  children: "Category",
                                }),
                                i.jsx("div", {
                                  className: "grid grid-cols-2 gap-3",
                                  children: s.map((u) =>
                                    i.jsx(
                                      "button",
                                      {
                                        type: "button",
                                        onClick: () => n(u.id),
                                        className: `p-3 rounded-xl border-2 transition-all duration-200 ${
                                          t === u.id
                                            ? "border-blue-500 bg-blue-50 text-blue-700"
                                            : "border-slate-200 hover:border-slate-300"
                                        }`,
                                        children: i.jsxs("div", {
                                          className: "text-center",
                                          children: [
                                            i.jsx("div", {
                                              className: "text-2xl mb-1",
                                              children: u.icon,
                                            }),
                                            i.jsx("div", {
                                              className: "text-sm font-medium",
                                              children: u.label,
                                            }),
                                          ],
                                        }),
                                      },
                                      u.id
                                    )
                                  ),
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              children: [
                                i.jsx("label", {
                                  className:
                                    "block text-sm font-medium text-slate-700 mb-2",
                                  children: "Message",
                                }),
                                i.jsx("textarea", {
                                  value: r,
                                  onChange: (u) => l(u.target.value),
                                  rows: 5,
                                  className:
                                    "w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none",
                                  placeholder:
                                    "Describe your issue or question in detail...",
                                  required: !0,
                                }),
                              ],
                            }),
                            i.jsxs("button", {
                              type: "submit",
                              className:
                                "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2",
                              children: [
                                i.jsx(Js, { className: "w-5 h-5" }),
                                i.jsx("span", { children: "Send Message" }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                      children: [
                        i.jsx("h3", {
                          className: "text-xl font-bold text-slate-800 mb-6",
                          children: "Frequently Asked Questions",
                        }),
                        i.jsx("div", {
                          className: "space-y-4",
                          children: a.map((u, c) =>
                            i.jsxs(
                              "div",
                              {
                                className:
                                  "border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow",
                                children: [
                                  i.jsx("h4", {
                                    className:
                                      "font-medium text-slate-800 mb-2",
                                    children: u.question,
                                  }),
                                  i.jsx("p", {
                                    className: "text-sm text-slate-600",
                                    children: u.answer,
                                  }),
                                ],
                              },
                              c
                            )
                          ),
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className:
                        "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg",
                      children: [
                        i.jsx("h3", {
                          className: "text-xl font-bold text-slate-800 mb-6",
                          children: "What our students say",
                        }),
                        i.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                          children: [
                            i.jsxs("div", {
                              className:
                                "p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200",
                              children: [
                                i.jsx("div", {
                                  className: "flex items-center mb-3",
                                  children: i.jsx("div", {
                                    className: "flex text-yellow-400",
                                    children: [...Array(5)].map((u, c) =>
                                      i.jsx(
                                        es,
                                        { className: "w-4 h-4 fill-current" },
                                        c
                                      )
                                    ),
                                  }),
                                }),
                                i.jsx("p", {
                                  className: "text-sm text-slate-700 mb-3",
                                  children:
                                    '"Excellent support team! They helped me throughout my Counselling process."',
                                }),
                                i.jsx("p", {
                                  className: "text-xs text-slate-500",
                                  children: "- Priya Sharma, MBBS Student",
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-200",
                              children: [
                                i.jsx("div", {
                                  className: "flex items-center mb-3",
                                  children: i.jsx("div", {
                                    className: "flex text-yellow-400",
                                    children: [...Array(5)].map((u, c) =>
                                      i.jsx(
                                        es,
                                        { className: "w-4 h-4 fill-current" },
                                        c
                                      )
                                    ),
                                  }),
                                }),
                                i.jsx("p", {
                                  className: "text-sm text-slate-700 mb-3",
                                  children:
                                    '"Quick response and very helpful guidance. Highly recommended!"',
                                }),
                                i.jsx("p", {
                                  className: "text-xs text-slate-500",
                                  children: "- Rahul Kumar, Medical Student",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  zf = ({ onBack: e }) => {
    const [t, n] = P.useState([]),
      [r, l] = P.useState(""),
      [s, a] = P.useState("all"),
      o = [
        {
          id: 1,
          question: "How do I check my NEET UG 2025 result?",
          answer:
            "To check your NEET UG 2025 result: 1) Visit the official website www.neet.nta.nic.in 2) Click on 'NEET UG Result 2025' link 3) Enter your application number and password 4) Download your scorecard for future reference. Keep multiple copies of your scorecard as it's required for Counselling.",
          category: "neet-ug",
        },
        {
          id: 2,
          question: "What is the NEET UG Counselling process?",
          answer:
            "The NEET UG Counselling process involves: 1) Registration on the official Counselling website 2) Choice filling of colleges and courses 3) Seat allotment based on rank and preferences 4) Document verification at designated centers 5) Fee payment and admission confirmation. The process is conducted in multiple rounds.",
          category: "Counselling",
        },
        {
          id: 3,
          question: "How can I predict my college admission chances?",
          answer:
            "Use our College Predictor tool by entering your NEET rank, category, and preferred states. The tool analyzes previous year cutoffs and provides accurate predictions for government and private medical colleges. It considers factors like state quota, management quota, and category-wise reservations.",
          category: "tools",
        },
        {
          id: 4,
          question: "What documents are required for NEET Counselling?",
          answer:
            "Required documents include: 1) NEET scorecard 2) Class 10th and 12th marksheets 3) Category certificate (if applicable) 4) Domicile certificate 5) Aadhar card 6) Passport size photographs 7) Medical fitness certificate 8) Character certificate. Ensure all documents are original with photocopies.",
          category: "Counselling",
        },
        {
          id: 5,
          question: "What is NEET PG and how is it different from NEET UG?",
          answer:
            "NEET PG is for admission to postgraduate medical courses (MD/MS/Diploma) while NEET UG is for undergraduate courses (MBBS/BDS). NEET PG requires an MBBS degree for eligibility, has different exam pattern, and separate Counselling process. The competition is generally higher in NEET PG.",
          category: "neet-pg",
        },
        {
          id: 6,
          question: "What is INICET and who can appear for it?",
          answer:
            "INICET (Institute of National Importance Combined Entrance Test) is for admission to PG medical courses in AIIMS, JIPMER, PGIMER, and NIMHANS. Only MBBS graduates are eligible. It's conducted separately from NEET PG and has its own Counselling process.",
          category: "inicet",
        },
        {
          id: 7,
          question: "How do I use the Rank Predictor tool?",
          answer:
            "Enter your expected NEET score or percentile in our Rank Predictor tool. It analyzes previous year trends and provides an estimated rank range. The tool considers factors like exam difficulty, number of candidates, and normalization process to give accurate predictions.",
          category: "tools",
        },
        {
          id: 8,
          question: "What are the eligibility criteria for NEET UG 2025?",
          answer:
            "Eligibility criteria: 1) Age: Minimum 17 years, maximum 25 years (30 for reserved categories) 2) Qualification: 12th with Physics, Chemistry, Biology/Biotechnology 3) Minimum marks: 50% for General, 45% for reserved categories 4) Nationality: Indian citizens, NRIs, OCIs eligible.",
          category: "neet-ug",
        },
        {
          id: 9,
          question: "How many attempts are allowed for NEET?",
          answer:
            "There is no limit on the number of NEET attempts as per current NTA guidelines. However, candidates must meet the age criteria (maximum 25 years for General category, 30 years for reserved categories) at the time of admission.",
          category: "neet-ug",
        },
        {
          id: 10,
          question: "What is the difference between AIQ and State quota?",
          answer:
            "AIQ (All India Quota) reserves 15% seats for all India merit, open to candidates from any state. State quota reserves 85% seats for state domicile candidates. AIQ has higher cutoffs but more college options across India.",
          category: "Counselling",
        },
        {
          id: 11,
          question: "How do I apply for NEET PG 2025?",
          answer:
            "NEET PG application process: 1) Visit official NBE website 2) Register with basic details 3) Fill application form with academic details 4) Upload required documents 5) Pay application fee 6) Submit and take printout. Ensure all details are correct before submission.",
          category: "neet-pg",
        },
        {
          id: 12,
          question: "What is the exam pattern for INICET?",
          answer:
            "INICET exam pattern: 1) 200 multiple choice questions 2) 3 hours duration 3) Computer-based test 4) Negative marking: -1 for wrong answers 5) Subjects: Pre-clinical, Para-clinical, and Clinical subjects from MBBS curriculum.",
          category: "inicet",
        },
        {
          id: 13,
          question: "How to choose the right medical college?",
          answer:
            "Consider factors: 1) NIRF ranking and accreditation 2) Faculty quality and infrastructure 3) Hospital facilities and patient load 4) Fee structure and scholarships 5) Location and hostel facilities 6) Placement and PG entrance success rate.",
          category: "Counselling",
        },
        {
          id: 14,
          question:
            "What is the fee structure for government medical colleges?",
          answer:
            "Government medical college fees vary by state: 1) Central government colleges: ₹5,000-50,000 per year 2) State government colleges: ₹10,000-1,00,000 per year 3) Deemed universities: ₹5,00,000-25,00,000 per year 4) Private colleges: ₹10,00,000-50,00,000 per year.",
          category: "Counselling",
        },
        {
          id: 15,
          question: "How to prepare for NEET PG effectively?",
          answer:
            "NEET PG preparation strategy: 1) Complete MBBS syllabus revision 2) Focus on high-yield topics 3) Solve previous year questions 4) Take regular mock tests 5) Join test series 6) Study from standard textbooks 7) Regular revision and practice.",
          category: "neet-pg",
        },
        {
          id: 16,
          question: "What are the career options after MBBS?",
          answer:
            "Career options: 1) Postgraduate medical courses (MD/MS) 2) Diploma courses 3) Clinical practice 4) Medical research 5) Public health 6) Medical writing 7) Healthcare administration 8) Medical education 9) Pharmaceutical industry.",
          category: "career",
        },
        {
          id: 17,
          question: "How to get admission in AIIMS through INICET?",
          answer:
            "AIIMS admission through INICET: 1) Qualify INICET exam 2) Participate in INICET Counselling 3) Choice filling for AIIMS centers 4) Seat allotment based on rank 5) Document verification 6) Fee payment and admission confirmation.",
          category: "inicet",
        },
        {
          id: 18,
          question: "What is the validity of NEET scorecard?",
          answer:
            "NEET scorecard is valid for the admission year only. For NEET UG, it's valid for the current academic session. For NEET PG, it's valid for the specific admission cycle. You need to reappear for subsequent years.",
          category: "neet-ug",
        },
        {
          id: 19,
          question: "How to apply for state quota Counselling?",
          answer:
            "State quota Counselling process: 1) Check state Counselling authority website 2) Register with required documents 3) Pay Counselling fee 4) Fill choices of colleges 5) Attend Counselling rounds 6) Document verification 7) Seat confirmation and fee payment.",
          category: "Counselling",
        },
        {
          id: 20,
          question: "What is the difference between MD and MS degrees?",
          answer:
            "MD (Doctor of Medicine) is for non-surgical specialties like Internal Medicine, Pediatrics, Psychiatry. MS (Master of Surgery) is for surgical specialties like General Surgery, Orthopedics, ENT. Both are 3-year postgraduate courses with different clinical focus.",
          category: "neet-pg",
        },
        {
          id: 21,
          question: "How to calculate NEET percentile?",
          answer:
            "NEET percentile is calculated using the formula: (Number of candidates with score less than you / Total number of candidates) × 100. NTA provides percentile scores along with raw scores. Percentile indicates your relative performance among all candidates.",
          category: "neet-ug",
        },
        {
          id: 22,
          question: "What is the NEET UG exam pattern for 2025?",
          answer:
            "NEET UG 2025 pattern: 1) 200 questions (180 to be attempted) 2) Physics: 50 questions 3) Chemistry: 50 questions 4) Biology: 100 questions 5) Duration: 3 hours 20 minutes 6) Marking: +4 for correct, -1 for incorrect answers.",
          category: "neet-ug",
        },
        {
          id: 23,
          question: "How to prepare for INICET exam?",
          answer:
            "INICET preparation: 1) Thorough revision of MBBS subjects 2) Focus on clinical subjects 3) Practice MCQs regularly 4) Join test series 5) Study recent advances 6) Time management practice 7) Regular mock tests and analysis.",
          category: "inicet",
        },
        {
          id: 24,
          question: "What is the Counselling fee for NEET UG?",
          answer:
            "NEET UG Counselling fees vary: 1) AIQ Counselling: ₹1,000 for registration 2) State Counselling: ₹500-2,000 depending on state 3) Security deposit: ₹2,00,000 for government colleges 4) Additional fees for choice modification and upgradation.",
          category: "Counselling",
        },
        {
          id: 25,
          question: "How to get NEET UG admit card?",
          answer:
            "NEET admit card download: 1) Visit official NTA NEET website 2) Click on 'Download Admit Card' 3) Enter application number and password 4) Download and print admit card 5) Check all details carefully 6) Carry original admit card to exam center.",
          category: "neet-ug",
        },
        {
          id: 26,
          question: "What is the NEET PG exam pattern?",
          answer:
            "NEET PG pattern: 1) 200 MCQs 2) Duration: 3.5 hours 3) Computer-based test 4) Subjects: Pre-clinical, Para-clinical, Clinical 5) Marking: +4 for correct, -1 for incorrect 6) No choice between questions.",
          category: "neet-pg",
        },
        {
          id: 27,
          question: "How to check NEET PG result?",
          answer:
            "NEET PG result checking: 1) Visit NBE official website 2) Click on NEET PG result link 3) Enter roll number and password 4) Download scorecard 5) Check rank and percentile 6) Save multiple copies for Counselling.",
          category: "neet-pg",
        },
        {
          id: 28,
          question: "What is the bond policy for medical colleges?",
          answer:
            "Bond policies vary by state: 1) Service bond: 1-7 years in government service 2) Bond amount: ₹10 lakhs to ₹1 crore 3) Rural service mandatory in some states 4) Private colleges may have different terms 5) Check specific state policies before admission.",
          category: "Counselling",
        },
        {
          id: 29,
          question: "How to apply for management quota seats?",
          answer:
            "Management quota application: 1) Contact college directly 2) Submit required documents 3) Appear for college interview 4) Pay higher fees as per college norms 5) No Counselling required 6) Direct admission based on NEET score and college criteria.",
          category: "Counselling",
        },
        {
          id: 30,
          question:
            "What is the difference between government and private medical colleges?",
          answer:
            "Key differences: 1) Fee: Government colleges have lower fees 2) Infrastructure: Both can have good facilities 3) Faculty: Government colleges often have experienced faculty 4) Admission: Government through Counselling, private through management quota 5) Bond: Government colleges may have service bonds.",
          category: "Counselling",
        },
        {
          id: 31,
          question: "How to prepare for NEET UG in 6 months?",
          answer:
            "6-month preparation plan: 1) Complete syllabus in 4 months 2) Revision and practice in 2 months 3) Daily 8-10 hours study 4) Focus on NCERT books 5) Regular mock tests 6) Analyze weak areas 7) Time management practice.",
          category: "neet-ug",
        },
        {
          id: 32,
          question: "What is the INICET Counselling process?",
          answer:
            "INICET Counselling: 1) Registration on official website 2) Choice filling for institutes 3) Seat allotment based on rank 4) Document verification 5) Fee payment 6) Admission confirmation 7) Multiple rounds conducted.",
          category: "inicet",
        },
        {
          id: 33,
          question: "How to get domicile certificate for medical Counselling?",
          answer:
            "Domicile certificate process: 1) Apply to district collector office 2) Submit required documents (birth certificate, school certificates) 3) Pay prescribed fees 4) Verification process 5) Certificate issuance 6) Valid for Counselling in respective state.",
          category: "Counselling",
        },
        {
          id: 34,
          question: "What is the NEET UG cutoff for 2025?",
          answer:
            "NEET UG cutoff varies by category: 1) General: 50th percentile 2) OBC/SC/ST: 40th percentile 3) PWD: 45th percentile 4) Actual scores depend on exam difficulty 5) Previous year cutoffs can be used as reference 6) Official cutoff announced with results.",
          category: "neet-ug",
        },
        {
          id: 35,
          question: "How to choose between MBBS and BDS?",
          answer:
            "MBBS vs BDS comparison: 1) MBBS: General medicine, broader scope 2) BDS: Dental specialization, focused practice 3) Duration: Both 5 years including internship 4) Career prospects: MBBS has wider options 5) Competition: MBBS generally more competitive 6) Choose based on interest and aptitude.",
          category: "career",
        },
        {
          id: 36,
          question: "What is the NEET PG Counselling schedule?",
          answer:
            "NEET PG Counselling timeline: 1) Registration: Usually starts 2-3 weeks after result 2) Choice filling: 3-4 days 3) Seat allotment: Multiple rounds 4) Document verification: 2-3 days per round 5) Classes start: As per academic calendar 6) Check official notifications for exact dates.",
          category: "neet-pg",
        },
        {
          id: 37,
          question: "How to get category certificate for NEET?",
          answer:
            "Category certificate process: 1) Apply to competent authority (Tehsildar/SDM) 2) Submit required documents 3) Income certificate for EWS 4) Caste certificate for SC/ST/OBC 5) Validity: Usually 1-3 years 6) Required for Counselling and admission.",
          category: "Counselling",
        },
        {
          id: 38,
          question: "What is the INICET exam syllabus?",
          answer:
            "INICET syllabus covers: 1) Pre-clinical subjects: Anatomy, Physiology, Biochemistry 2) Para-clinical: Pathology, Microbiology, Pharmacology 3) Clinical subjects: Medicine, Surgery, Pediatrics, Obstetrics & Gynecology 4) Community Medicine 5) Recent advances in medical science.",
          category: "inicet",
        },
        {
          id: 39,
          question: "How to calculate NEET UG rank?",
          answer:
            "NEET rank calculation: 1) Based on total score obtained 2) Tie-breaking criteria: Biology marks, Chemistry marks, Physics marks, Age 3) Separate ranks for different categories 4) All India rank and state rank provided 5) Rank determines college allotment eligibility.",
          category: "neet-ug",
        },
        {
          id: 40,
          question: "What is the medical fitness requirement for MBBS?",
          answer:
            "Medical fitness criteria: 1) Physical and mental fitness 2) Vision: 6/6 in one eye, 6/60 in other 3) Hearing: Normal hearing ability 4) No communicable diseases 5) Medical examination by authorized doctor 6) Fitness certificate required for admission.",
          category: "Counselling",
        },
        {
          id: 41,
          question: "How to prepare for NEET PG while doing internship?",
          answer:
            "Preparation during internship: 1) Utilize clinical exposure for practical knowledge 2) Study during free time and night shifts 3) Focus on high-yield topics 4) Join online test series 5) Group study with fellow interns 6) Balance clinical duties and preparation.",
          category: "neet-pg",
        },
        {
          id: 42,
          question:
            "What is the difference between deemed and private universities?",
          answer:
            "Deemed vs Private: 1) Deemed: Government recognition, autonomous status 2) Private: Privately funded, affiliated to state universities 3) Fee structure: Both generally expensive 4) Quality: Varies by institution 5) Recognition: Both recognized for practice 6) Admission: Through NEET Counselling or management quota.",
          category: "Counselling",
        },
        {
          id: 43,
          question: "How to get NEET UG application form?",
          answer:
            "NEET application process: 1) Visit official NTA website 2) Register with basic details 3) Fill application form online 4) Upload required documents 5) Pay application fee 6) Submit and take printout 7) Keep application number safe.",
          category: "neet-ug",
        },
        {
          id: 44,
          question: "What is the INICET result declaration process?",
          answer:
            "INICET result process: 1) Results declared on official website 2) Scorecard download available 3) Rank and percentile provided 4) Category-wise results 5) Counselling schedule announced 6) Merit list preparation for Counselling.",
          category: "inicet",
        },
        {
          id: 45,
          question: "How to choose medical specialization after MBBS?",
          answer:
            "Specialization selection: 1) Assess personal interests and aptitude 2) Consider clinical vs non-clinical branches 3) Research career prospects and scope 4) Evaluate work-life balance 5) Consider duration and difficulty 6) Seek guidance from seniors and mentors.",
          category: "career",
        },
        {
          id: 46,
          question: "What is the NEET PG application fee?",
          answer:
            "NEET PG fees: 1) General/OBC: ₹4,750 2) SC/ST/PWD: ₹2,500 3) Additional fees for late application 4) Payment through online mode 5) No refund of application fee 6) Keep payment receipt for future reference.",
          category: "neet-pg",
        },
        {
          id: 47,
          question: "How to verify NEET result authenticity?",
          answer:
            "Result verification: 1) Check on official NTA website only 2) Verify application number and personal details 3) Cross-check with SMS received 4) Download from official portal 5) Avoid fake websites 6) Contact NTA helpline for queries.",
          category: "neet-ug",
        },
        {
          id: 48,
          question: "What is the INICET Counselling fee structure?",
          answer:
            "INICET Counselling fees: 1) Registration fee varies by institute 2) Security deposit required 3) Counselling participation fee 4) Document verification charges 5) Seat acceptance fee 6) Check individual institute notifications for exact amounts.",
          category: "inicet",
        },
        {
          id: 49,
          question: "How to handle NEET Counselling stress?",
          answer:
            "Managing Counselling stress: 1) Stay informed about process 2) Prepare documents in advance 3) Have backup options ready 4) Seek family and peer support 5) Practice relaxation techniques 6) Stay positive and focused 7) Consult counselors if needed.",
          category: "Counselling",
        },
        {
          id: 50,
          question: "What are the future prospects in medical field?",
          answer:
            "Medical career prospects: 1) Clinical practice in various specialties 2) Research and academics 3) Healthcare administration 4) Public health and policy 5) Medical technology and innovation 6) Global opportunities 7) Entrepreneurship in healthcare 8) Telemedicine and digital health.",
          category: "career",
        },
      ],
      u = [
        { id: "all", label: "All Questions", icon: jn },
        { id: "neet-ug", label: "NEET UG", icon: Xi },
        { id: "neet-pg", label: "NEET PG", icon: It },
        { id: "inicet", label: "INICET", icon: fl },
        { id: "Counselling", label: "Counselling", icon: jn },
        { id: "tools", label: "Tools", icon: Xi },
        { id: "career", label: "Career", icon: It },
      ],
      c = (p) => {
        n((m) => (m.includes(p) ? m.filter((x) => x !== p) : [...m, p]));
      },
      g = o.filter((p) => {
        const m =
            p.question.toLowerCase().includes(r.toLowerCase()) ||
            p.answer.toLowerCase().includes(r.toLowerCase()),
          x = s === "all" || p.category === s;
        return m && x;
      });
    return i.jsxs("div", {
      className:
        "flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen",
      children: [
        i.jsx("div", {
          className:
            "bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4",
          children: i.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              i.jsx("button", {
                onClick: e,
                className:
                  "p-2 hover:bg-slate-100 rounded-xl transition-colors",
                children: i.jsx(ir, { className: "w-5 h-5 text-slate-600" }),
              }),
              i.jsx("h1", {
                className: "text-xl font-bold text-slate-800",
                children: "Frequently Asked Questions",
              }),
            ],
          }),
        }),
        i.jsxs("div", {
          className: "max-w-6xl mx-auto p-6",
          children: [
            i.jsx("div", {
              className:
                "bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl",
              children: i.jsxs("div", {
                className: "text-center",
                children: [
                  i.jsx("div", {
                    className:
                      "w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: i.jsx(jn, { className: "w-8 h-8" }),
                  }),
                  i.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Get All Your Questions Answered",
                  }),
                  i.jsx("p", {
                    className: "text-blue-100 text-lg",
                    children:
                      "Find answers to common questions about NEET, Counselling, and medical admissions",
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8",
              children: i.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-4",
                children: [
                  i.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      i.jsx(dl, {
                        className:
                          "w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400",
                      }),
                      i.jsx("input", {
                        type: "text",
                        placeholder: "Search questions...",
                        value: r,
                        onChange: (p) => l(p.target.value),
                        className:
                          "w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "flex flex-wrap gap-2",
                    children: u.map((p) =>
                      i.jsxs(
                        "button",
                        {
                          onClick: () => a(p.id),
                          className: `flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-200 ${
                            s === p.id
                              ? "bg-blue-500 text-white shadow-lg"
                              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                          }`,
                          children: [
                            i.jsx(p.icon, { className: "w-4 h-4" }),
                            i.jsx("span", {
                              className: "text-sm font-medium",
                              children: p.label,
                            }),
                          ],
                        },
                        p.id
                      )
                    ),
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className: "space-y-4",
              children: g.map((p) => {
                var m;
                return i.jsxs(
                  "div",
                  {
                    className:
                      "bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",
                    children: [
                      i.jsxs("button", {
                        onClick: () => c(p.id),
                        className:
                          "w-full p-6 text-left flex items-center justify-between hover:bg-slate-50/50 transition-colors",
                        children: [
                          i.jsxs("div", {
                            className: "flex-1",
                            children: [
                              i.jsx("h3", {
                                className:
                                  "text-lg font-semibold text-slate-800 mb-2",
                                children: p.question,
                              }),
                              i.jsx("span", {
                                className:
                                  "inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium",
                                children:
                                  ((m = u.find((x) => x.id === p.category)) ==
                                  null
                                    ? void 0
                                    : m.label) || "General",
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className: "ml-4",
                            children: t.includes(p.id)
                              ? i.jsx(pf, {
                                  className: "w-6 h-6 text-slate-600",
                                })
                              : i.jsx(ul, {
                                  className: "w-6 h-6 text-slate-600",
                                }),
                          }),
                        ],
                      }),
                      t.includes(p.id) &&
                        i.jsx("div", {
                          className: "px-6 pb-6 border-t border-slate-200/50",
                          children: i.jsx("div", {
                            className: "pt-4",
                            children: i.jsx("p", {
                              className: "text-slate-700 leading-relaxed",
                              children: p.answer,
                            }),
                          }),
                        }),
                    ],
                  },
                  p.id
                );
              }),
            }),
            g.length === 0 &&
              i.jsxs("div", {
                className: "text-center py-12",
                children: [
                  i.jsx("div", {
                    className:
                      "w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: i.jsx(jn, {
                      className: "w-8 h-8 text-slate-500",
                    }),
                  }),
                  i.jsx("h3", {
                    className: "text-xl font-semibold text-slate-800 mb-2",
                    children: "No questions found",
                  }),
                  i.jsx("p", {
                    className: "text-slate-600",
                    children:
                      "Try adjusting your search terms or category filter",
                  }),
                ],
              }),
            i.jsxs("div", {
              className:
                "bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center mt-8",
              children: [
                i.jsx("h3", {
                  className: "text-xl font-bold mb-2",
                  children: "Still have questions?",
                }),
                i.jsx("p", {
                  className: "text-green-100 mb-4",
                  children:
                    "Our support team is here to help you with personalized assistance",
                }),
                i.jsx("button", {
                  className:
                    "bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl hover:bg-white/30 transition-all duration-200 font-medium",
                  children: "Contact Support",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  Rf = ({ onBack: e }) => {
    const [t, n] = P.useState(""),
      [r, l] = P.useState(null),
      [s, a] = P.useState("all"),
      o = [
        {
          id: 1,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 2,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 3,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 4,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 5,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 6,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 7,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 8,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 9,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 10,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 11,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 12,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 13,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 14,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 15,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 16,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 17,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 18,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 19,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 20,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 21,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 22,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 23,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 24,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 25,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 26,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 27,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 28,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 29,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 30,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 31,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 32,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 33,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 34,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 35,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 36,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 37,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 38,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 39,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 40,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 40,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 41,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 42,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 43,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 44,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 45,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 46,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 47,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 48,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 49,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 50,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 51,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 52,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 53,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 57,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 55,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 56,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 57,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 58,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 59,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 60,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 61,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 62,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 63,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 64,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 65,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 66,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 67,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 68,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 69,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 70,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 71,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 72,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 73,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 74,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 75,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 76,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 77,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 78,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 79,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 80,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 81,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 82,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 83,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 84,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 85,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 86,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 87,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 88,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 89,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 90,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 91,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 92,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 93,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 94,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 95,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 96,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 97,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 98,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 99,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 100,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 101,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 102,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 103,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 104,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 105,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 106,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 107,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 108,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 109,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 110,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 111,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 112,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 113,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 114,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 115,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 116,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 117,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 118,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 119,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 120,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 121,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 122,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 123,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 124,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 125,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 126,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 127,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 128,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 129,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 130,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 131,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
        {
          id: 132,
          name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
          pgSeats: 198,
          state: "Puducherry",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1823,
          website: "https://www.jipmer.edu.in",
        },
        {
          id: 133,
          name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS)",
          pgSeats: 178,
          state: "Uttar Pradesh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1983,
          website: "https://www.sgpgi.ac.in",
        },
        {
          id: 134,
          name: "All Institute of Medical Sciences (AIIMS), New Delhi",
          pgSeats: 847,
          state: "Delhi",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh", "PhD"],
          established: 1956,
          website: "https://www.aiims.edu",
        },
        {
          id: 135,
          name: "Postgraduate Institute of Medical Education and Research (PGIMER)",
          pgSeats: 456,
          state: "Chandigarh",
          affiliation: "Autonomous",
          management: "Central Government",
          programs: ["MD", "MS", "DM", "MCh", "PhD"],
          established: 1962,
          website: "https://www.pgimer.edu.in",
        },
        {
          id: 136,
          name: "Christian Medical College (CMC), Vellore",
          pgSeats: 234,
          state: "Tamil Nadu",
          affiliation: "Deemed University",
          management: "Private",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1900,
          website: "https://www.cmch-vellore.edu",
        },
        {
          id: 137,
          name: "King George's Medical University (KGMU)",
          pgSeats: 389,
          state: "Uttar Pradesh",
          affiliation: "State University",
          management: "State Government",
          programs: ["MBBS", "MD", "MS", "DM", "MCh"],
          established: 1905,
          website: "https://www.kgmcindia.edu",
        },
        {
          id: 138,
          name: "Maulana Azad Medical College (MAMC)",
          pgSeats: 267,
          state: "Delhi",
          affiliation: "University of Delhi",
          management: "State Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1958,
          website: "https://www.mamc.ac.in",
        },
        {
          id: 139,
          name: "Armed Forces Medical College (AFMC)",
          pgSeats: 156,
          state: "Maharashtra",
          affiliation: "Deemed University",
          management: "Central Government",
          programs: ["MBBS", "MD", "MS"],
          established: 1948,
          website: "https://www.afmc.nic.in",
        },
      ],
      u = ["all", ...Array.from(new Set(o.map((m) => m.state)))],
      c = o.filter((m) => {
        const x =
            m.name.toLowerCase().includes(t.toLowerCase()) ||
            m.state.toLowerCase().includes(t.toLowerCase()),
          y = s === "all" || m.state === s;
        return x && y;
      }),
      g = (m) => {
        l(m);
      },
      p = () => {
        l(null);
      };
    return i.jsxs("div", {
      className:
        "flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen",
      children: [
        i.jsx("div", {
          className:
            "bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4",
          children: i.jsxs("div", {
            className: "flex items-center space-x-4",
            children: [
              i.jsx("button", {
                onClick: e,
                className:
                  "p-2 hover:bg-slate-100 rounded-xl transition-colors",
                children: i.jsx(ir, { className: "w-5 h-5 text-slate-600" }),
              }),
              i.jsx("h1", {
                className: "text-xl font-bold text-slate-800",
                children: "Medical Universities & Colleges",
              }),
            ],
          }),
        }),
        i.jsxs("div", {
          className: "max-w-7xl mx-auto p-6",
          children: [
            i.jsx("div", {
              className:
                "bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl",
              children: i.jsxs("div", {
                className: "text-center",
                children: [
                  i.jsx("div", {
                    className:
                      "w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: i.jsx(yn, { className: "w-8 h-8" }),
                  }),
                  i.jsx("h2", {
                    className: "text-3xl font-bold mb-4",
                    children: "Explore Medical Universities",
                  }),
                  i.jsx("p", {
                    className: "text-indigo-100 text-lg",
                    children:
                      "Discover top medical colleges and universities across India",
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className:
                "bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8",
              children: i.jsxs("div", {
                className: "flex flex-col lg:flex-row gap-4",
                children: [
                  i.jsxs("div", {
                    className: "flex-1 relative",
                    children: [
                      i.jsx(dl, {
                        className:
                          "w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400",
                      }),
                      i.jsx("input", {
                        type: "text",
                        placeholder: "Search colleges, categories, or names...",
                        value: t,
                        onChange: (m) => n(m.target.value),
                        className:
                          "w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-800",
                      }),
                    ],
                  }),
                  i.jsx("select", {
                    value: s,
                    onChange: (m) => a(m.target.value),
                    className:
                      "px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-slate-800",
                    children: u.map((m) =>
                      i.jsx(
                        "option",
                        { value: m, children: m === "all" ? "All States" : m },
                        m
                      )
                    ),
                  }),
                ],
              }),
            }),
            i.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",
              children: c.map((m) =>
                i.jsxs(
                  "div",
                  {
                    onClick: () => g(m),
                    className:
                      "bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-start justify-between mb-4",
                        children: [
                          i.jsx("div", {
                            className:
                              "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center",
                            children: i.jsx(yn, {
                              className: "w-5 h-5 text-white",
                            }),
                          }),
                          i.jsx("span", {
                            className:
                              "px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium",
                            children: m.management,
                          }),
                        ],
                      }),
                      i.jsx("h3", {
                        className:
                          "text-sm font-bold text-slate-800 mb-3 line-clamp-2 leading-tight",
                        children: m.name,
                      }),
                      i.jsxs("div", {
                        className: "space-y-1 mb-3",
                        children: [
                          i.jsxs("div", {
                            className:
                              "flex items-center text-sm text-slate-600",
                            children: [
                              i.jsx(cl, { className: "w-3 h-3 mr-1" }),
                              i.jsx("span", { children: m.state }),
                            ],
                          }),
                          i.jsxs("div", {
                            className:
                              "flex items-center text-sm text-slate-600",
                            children: [
                              i.jsx(fl, { className: "w-3 h-3 mr-1" }),
                              i.jsxs("span", {
                                children: [m.pgSeats, " PG Seats"],
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className:
                              "flex items-center text-sm text-slate-600",
                            children: [
                              i.jsx(co, { className: "w-3 h-3 mr-1" }),
                              i.jsxs("span", {
                                children: ["Est. ", m.established],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "flex flex-wrap gap-1 mb-3",
                        children: [
                          m.programs.slice(0, 3).map((x) =>
                            i.jsx(
                              "span",
                              {
                                className:
                                  "px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs",
                                children: x,
                              },
                              x
                            )
                          ),
                          m.programs.length > 3 &&
                            i.jsxs("span", {
                              className:
                                "px-1.5 py-0.5 bg-slate-100 text-slate-700 rounded text-xs",
                              children: ["+", m.programs.length - 3, " more"],
                            }),
                        ],
                      }),
                      i.jsx("button", {
                        className:
                          "w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium text-xs",
                        children: "View Details",
                      }),
                    ],
                  },
                  m.id
                )
              ),
            }),
            c.length === 0 &&
              i.jsxs("div", {
                className: "text-center py-12",
                children: [
                  i.jsx("div", {
                    className:
                      "w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4",
                    children: i.jsx(yn, {
                      className: "w-8 h-8 text-slate-500",
                    }),
                  }),
                  i.jsx("h3", {
                    className: "text-xl font-semibold text-slate-800 mb-2",
                    children: "No colleges found",
                  }),
                  i.jsx("p", {
                    className: "text-slate-600",
                    children: "Try adjusting your search terms or filters",
                  }),
                ],
              }),
          ],
        }),
        r &&
          i.jsx("div", {
            className:
              "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
            children: i.jsx("div", {
              className:
                "bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
              children: i.jsxs("div", {
                className: "p-6",
                children: [
                  i.jsxs("div", {
                    className: "flex items-start justify-between mb-6",
                    children: [
                      i.jsxs("div", {
                        className: "flex items-start space-x-4",
                        children: [
                          i.jsx("div", {
                            className:
                              "w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center",
                            children: i.jsx(yn, {
                              className: "w-8 h-8 text-white",
                            }),
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("h2", {
                                className:
                                  "text-2xl font-bold text-slate-800 mb-2",
                                children: r.name,
                              }),
                              i.jsxs("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                  i.jsx("span", {
                                    className:
                                      "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",
                                    children: r.management,
                                  }),
                                  i.jsx("span", {
                                    className:
                                      "px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium",
                                    children: r.affiliation,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("button", {
                        onClick: p,
                        className:
                          "p-2 hover:bg-slate-100 rounded-xl transition-colors",
                        children: i.jsx(sr, {
                          className: "w-6 h-6 text-slate-600",
                        }),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
                    children: [
                      i.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(fl, {
                                    className: "w-5 h-5 text-blue-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "PG Seats",
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-2xl font-bold text-blue-600",
                                children: r.pgSeats,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(cl, {
                                    className: "w-5 h-5 text-green-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "State",
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-lg text-slate-700",
                                children: r.state,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(co, {
                                    className: "w-5 h-5 text-purple-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "Established",
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-lg text-slate-700",
                                children: r.established,
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "space-y-4",
                        children: [
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(It, {
                                    className: "w-5 h-5 text-orange-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "Affiliation",
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-lg text-slate-700",
                                children: r.affiliation,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(yn, {
                                    className: "w-5 h-5 text-red-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "Management",
                                  }),
                                ],
                              }),
                              i.jsx("p", {
                                className: "text-lg text-slate-700",
                                children: r.management,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "bg-slate-50 rounded-xl p-4",
                            children: [
                              i.jsxs("div", {
                                className: "flex items-center mb-2",
                                children: [
                                  i.jsx(Tc, {
                                    className: "w-5 h-5 text-indigo-600 mr-2",
                                  }),
                                  i.jsx("span", {
                                    className: "font-semibold text-slate-800",
                                    children: "Website",
                                  }),
                                ],
                              }),
                              i.jsx("a", {
                                href: r.website,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className:
                                  "text-blue-600 hover:text-blue-800 underline",
                                children: "Visit Website",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "bg-slate-50 rounded-xl p-4 mb-6",
                    children: [
                      i.jsx("h3", {
                        className: "font-semibold text-slate-800 mb-3",
                        children: "Available Programs",
                      }),
                      i.jsx("div", {
                        className: "flex flex-wrap gap-2",
                        children: r.programs.map((m) =>
                          i.jsx(
                            "span",
                            {
                              className:
                                "px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium",
                              children: m,
                            },
                            m
                          )
                        ),
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex space-x-4",
                    children: [
                      i.jsx("button", {
                        className:
                          "flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 font-medium",
                        children: "Add to Favorites",
                      }),
                      i.jsx("a", {
                        href: r.website,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "flex-1 bg-slate-200 text-slate-800 py-3 rounded-xl hover:bg-slate-300 transition-all duration-200 font-medium text-center",
                        children: "Visit Website",
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
      ],
    });
  },
  go = () => {
    const [e, t] = P.useState(!1),
      [n, r] = P.useState(!1),
      [l, s] = P.useState([
        {
          id: 1,
          text: "Hi! I'm Kodee, your AI assistant. How can I help you with your medical career guidance today?",
          sender: "bot",
          timestamp: new Date(),
        },
      ]),
      [a, o] = P.useState(""),
      u = [
        "How to check NEET results?",
        "What is the Counselling process?",
        "College admission requirements",
        "NEET rank predictor",
        "Document verification process",
      ],
      c = () => {
        if (!a.trim()) return;
        const m = {
          id: l.length + 1,
          text: a,
          sender: "user",
          timestamp: new Date(),
        };
        s([...l, m]),
          o(""),
          setTimeout(() => {
            const x = {
              id: l.length + 2,
              text: g(a),
              sender: "bot",
              timestamp: new Date(),
            };
            s((y) => [...y, x]);
          }, 1e3);
      },
      g = (m) => {
        const x = m.toLowerCase();
        return x.includes("neet") && x.includes("result")
          ? "To check your NEET results: 1) Visit www.neet.nta.nic.in 2) Enter your application number and password 3) Download your scorecard. Need help with anything else?"
          : x.includes("Counselling")
          ? "The Counselling process includes: Registration → Choice Filling → Seat Allotment → Document Verification → Fee Payment. Which step would you like to know more about?"
          : x.includes("college") || x.includes("admission")
          ? "For college admissions, you'll need: NEET scorecard, Class 12 marksheet, category certificate (if applicable), and identity proof. Would you like help with college predictions?"
          : "I understand you're asking about medical career guidance. Could you please be more specific? You can ask about NEET results, Counselling process, college admissions, or document requirements.";
      },
      p = (m) => {
        o(m), c();
      };
    return e
      ? i.jsx("div", {
          className: `fixed bottom-6 right-6 z-50 transition-all duration-300 ${
            n ? "w-80 h-16" : "w-96 h-[600px]"
          }`,
          children: i.jsxs("div", {
            className:
              "bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 h-full flex flex-col overflow-hidden",
            children: [
              i.jsxs("div", {
                className:
                  "bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-10 h-10 bg-white/20 rounded-full flex items-center justify-center",
                        children: i.jsx(uo, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "text-white font-bold",
                            children: "Ask Kodee",
                          }),
                          i.jsx("p", {
                            className: "text-purple-100 text-sm",
                            children: "AI Assistant",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "flex items-center space-x-2",
                    children: [
                      i.jsx("button", {
                        onClick: () => r(!n),
                        className:
                          "p-2 hover:bg-white/20 rounded-lg transition-colors",
                        children: n
                          ? i.jsx(yf, { className: "w-4 h-4 text-white" })
                          : i.jsx(Sf, { className: "w-4 h-4 text-white" }),
                      }),
                      i.jsx("button", {
                        onClick: () => t(!1),
                        className:
                          "p-2 hover:bg-white/20 rounded-lg transition-colors",
                        children: i.jsx(sr, {
                          className: "w-4 h-4 text-white",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              !n &&
                i.jsxs(i.Fragment, {
                  children: [
                    i.jsx("div", {
                      className: "flex-1 p-4 overflow-y-auto space-y-4",
                      children: l.map((m) =>
                        i.jsx(
                          "div",
                          {
                            className: `flex ${
                              m.sender === "user"
                                ? "justify-end"
                                : "justify-start"
                            }`,
                            children: i.jsxs("div", {
                              className: `flex items-start space-x-2 max-w-[80%] ${
                                m.sender === "user"
                                  ? "flex-row-reverse space-x-reverse"
                                  : ""
                              }`,
                              children: [
                                i.jsx("div", {
                                  className: `w-8 h-8 rounded-full flex items-center justify-center ${
                                    m.sender === "user"
                                      ? "bg-blue-500"
                                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                                  }`,
                                  children:
                                    m.sender === "user"
                                      ? i.jsx(ml, {
                                          className: "w-4 h-4 text-white",
                                        })
                                      : i.jsx(uo, {
                                          className: "w-4 h-4 text-white",
                                        }),
                                }),
                                i.jsx("div", {
                                  className: `p-3 rounded-2xl ${
                                    m.sender === "user"
                                      ? "bg-blue-500 text-white"
                                      : "bg-slate-100 text-slate-800"
                                  }`,
                                  children: i.jsx("p", {
                                    className: "text-sm",
                                    children: m.text,
                                  }),
                                }),
                              ],
                            }),
                          },
                          m.id
                        )
                      ),
                    }),
                    i.jsxs("div", {
                      className: "p-4 border-t border-slate-200",
                      children: [
                        i.jsx("p", {
                          className: "text-xs text-slate-600 mb-2",
                          children: "Quick questions:",
                        }),
                        i.jsx("div", {
                          className: "flex flex-wrap gap-2 mb-4",
                          children: u.slice(0, 3).map((m, x) =>
                            i.jsx(
                              "button",
                              {
                                onClick: () => p(m),
                                className:
                                  "px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-full text-xs text-slate-700 transition-colors",
                                children: m,
                              },
                              x
                            )
                          ),
                        }),
                      ],
                    }),
                    i.jsx("div", {
                      className: "p-4 border-t border-slate-200",
                      children: i.jsxs("div", {
                        className: "flex space-x-2",
                        children: [
                          i.jsx("input", {
                            type: "text",
                            value: a,
                            onChange: (m) => o(m.target.value),
                            onKeyPress: (m) => m.key === "Enter" && c(),
                            placeholder:
                              "Ask me anything about medical Counselling...",
                            className:
                              "flex-1 p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm",
                          }),
                          i.jsx("button", {
                            onClick: c,
                            className:
                              "p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200",
                            children: i.jsx(Js, { className: "w-4 h-4" }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          }),
        })
      : i.jsx("button", {
          onClick: () => t(!0),
          className:
            "fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-110 z-50 animate-bounce",
          children: i.jsx(Zn, { className: "w-8 h-8" }),
        });
  },
  xo = () => {
    const [e, t] = P.useState(!0),
      n = () => {
        const r = "919876543210",
          l = encodeURIComponent(
            "Hi! I need help with medical Counselling guidance."
          ),
          s = `https://wa.me/${r}?text=${l}`;
        window.open(s, "_blank");
      };
    return e
      ? i.jsx("div", {
          className: "fixed bottom-6 left-6 z-50",
          children: i.jsxs("div", {
            className:
              "bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 p-4 max-w-sm",
            children: [
              i.jsxs("div", {
                className: "flex items-start justify-between mb-3",
                children: [
                  i.jsxs("div", {
                    className: "flex items-center space-x-3",
                    children: [
                      i.jsx("div", {
                        className:
                          "w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse",
                        children: i.jsx(Zn, {
                          className: "w-6 h-6 text-white",
                        }),
                      }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h3", {
                            className: "font-bold text-slate-800",
                            children: "WhatsApp Support",
                          }),
                          i.jsx("p", {
                            className: "text-sm text-slate-600",
                            children: "We're online now!",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("button", {
                    onClick: () => t(!1),
                    className:
                      "p-1 hover:bg-slate-100 rounded-lg transition-colors",
                    children: i.jsx(sr, {
                      className: "w-4 h-4 text-slate-600",
                    }),
                  }),
                ],
              }),
              i.jsx("p", {
                className: "text-sm text-slate-700 mb-4",
                children:
                  "Need instant help? Chat with our Counselling experts on WhatsApp for immediate assistance.",
              }),
              i.jsxs("button", {
                onClick: n,
                className:
                  "w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2",
                children: [
                  i.jsx(Zn, { className: "w-5 h-5" }),
                  i.jsx("span", { children: "Start WhatsApp Chat" }),
                ],
              }),
              i.jsx("p", {
                className: "text-xs text-slate-500 mt-2 text-center",
                children: "Available 24/7 for urgent queries",
              }),
            ],
          }),
        })
      : null;
  };
function Lf() {
  const [e, t] = P.useState("home"),
    [n, r] = P.useState("all-india"),
    [l, s] = P.useState(""),
    [a, o] = P.useState(!1),
    [u, c] = P.useState(!0),
    [g, p] = P.useState(!1),
    [m, x] = P.useState(!1);
  P.useState(!0);
  const [y] = P.useState({
      name: "Demo Student",
      email: "demo@gmail.com",
      phone: "+91 9876543210",
      neetRank: "12,345",
      category: "General",
      state: "Maharashtra",
      avatar: "DS",
    }),
    S = (M) => s(M),
    A = (M) => {
      p(
        !(
          M === "profile" ||
          M === "support" ||
          M === "faq" ||
          M === "universities" ||
          M === "home"
        )
      ),
        t(M),
        o(!1);
    },
    f = () => c(!1),
    d = () => {
      p(!1), t("home");
    },
    h = () => x(!m);
  if (u) return i.jsx(Af, { onComplete: f });
  const v = () =>
    e === "profile"
      ? i.jsx(Gf, { user: y, onBack: d, onLogout: () => {} })
      : e === "support"
      ? i.jsx(_f, { onBack: d })
      : e === "faq"
      ? i.jsx(zf, { onBack: d })
      : e === "universities"
      ? i.jsx(Rf, { onBack: d })
      : g
      ? i.jsx(Uf, {
          title: `${e.charAt(0).toUpperCase() + e.slice(1)} Section`,
          onBack: d,
        })
      : i.jsxs("div", {
          className:
            "min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50",
          children: [
            i.jsx(ho, {
              onSearchChange: S,
              onMobileMenuToggle: () => o(!a),
              isMobileMenuOpen: a,
              user: y,
              onSectionChange: A,
            }),
            i.jsxs("div", {
              className: "flex relative",
              children: [
                a &&
                  i.jsxs("div", {
                    className: "lg:hidden fixed inset-0 z-50 flex",
                    children: [
                      i.jsx("div", {
                        className: "fixed inset-0 bg-black/50",
                        onClick: () => o(!1),
                      }),
                      i.jsx(kr, {
                        activeSection: e,
                        onSectionChange: A,
                        className:
                          "relative z-10 transform transition-transform duration-300 ease-in-out",
                        isCollapsed: !1,
                        onToggleCollapse: () => {},
                      }),
                    ],
                  }),
                i.jsx("div", {
                  className: "flex-1 flex flex-col min-h-screen",
                  style: {
                    marginLeft: m ? "64px" : "256px",
                    marginRight: "320px",
                  },
                  children: i.jsx(Tf, { activeTab: n }),
                }),
              ],
            }),
            i.jsx(kr, {
              activeSection: e,
              onSectionChange: A,
              className: "hidden lg:block",
              isCollapsed: m,
              onToggleCollapse: h,
            }),
            i.jsx(Bf, {}),
            i.jsx(po, { activeSection: e, onSectionChange: A }),
            i.jsx(go, {}),
            i.jsx(xo, {}),
            i.jsx("div", { className: "lg:hidden h-20" }),
          ],
        });
  return e === "profile" ||
    e === "support" ||
    e === "faq" ||
    e === "universities" ||
    g
    ? i.jsxs("div", {
        className:
          "min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50",
        children: [
          i.jsx(ho, {
            onSearchChange: S,
            onMobileMenuToggle: () => o(!a),
            isMobileMenuOpen: a,
            user: y,
            onSectionChange: A,
          }),
          i.jsxs("div", {
            className: "flex relative",
            children: [
              a &&
                i.jsxs("div", {
                  className: "lg:hidden fixed inset-0 z-50 flex",
                  children: [
                    i.jsx("div", {
                      className: "fixed inset-0 bg-black/50",
                      onClick: () => o(!1),
                    }),
                    i.jsx(kr, {
                      activeSection: e,
                      onSectionChange: A,
                      className:
                        "relative z-10 transform transition-transform duration-300 ease-in-out",
                      isCollapsed: !1,
                      onToggleCollapse: () => {},
                    }),
                  ],
                }),
              i.jsx("div", {
                className: "flex-1",
                style: { marginLeft: m ? "64px" : "256px" },
                children: v(),
              }),
            ],
          }),
          i.jsx(kr, {
            activeSection: e,
            onSectionChange: A,
            className: "hidden lg:block",
            isCollapsed: m,
            onToggleCollapse: h,
          }),
          i.jsx(po, { activeSection: e, onSectionChange: A }),
          i.jsx(go, {}),
          i.jsx(xo, {}),
          i.jsx("div", { className: "lg:hidden h-20" }),
        ],
      })
    : v();
}
Pc(document.getElementById("root")).render(
  i.jsx(P.StrictMode, { children: i.jsx(Lf, {}) })
);
