var fi = Object.defineProperty, pi = Object.defineProperties;
var _i = Object.getOwnPropertyDescriptors;
var yn = Object.getOwnPropertySymbols;
var mi = Object.prototype.hasOwnProperty, gi = Object.prototype.propertyIsEnumerable;
var wn = (n, t, e) => t in n ? fi(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e, $ = (n, t) => {
  for (var e in t || (t = {}))
    mi.call(t, e) && wn(n, e, t[e]);
  if (yn)
    for (var e of yn(t))
      gi.call(t, e) && wn(n, e, t[e]);
  return n;
}, te = (n, t) => pi(n, _i(t));
var I = "top", R = "bottom", k = "right", P = "left", _e = "auto", Pt = [I, R, k, P], _t = "start", Ct = "end", as = "clippingParents", qe = "viewport", Tt = "popper", cs = "reference", je = /* @__PURE__ */ Pt.reduce(function(n, t) {
  return n.concat([t + "-" + _t, t + "-" + Ct]);
}, []), Xe = /* @__PURE__ */ [].concat(Pt, [_e]).reduce(function(n, t) {
  return n.concat([t, t + "-" + _t, t + "-" + Ct]);
}, []), ls = "beforeRead", us = "read", hs = "afterRead", ds = "beforeMain", fs = "main", ps = "afterMain", _s = "beforeWrite", ms = "write", gs = "afterWrite", Es = [ls, us, hs, ds, fs, ps, _s, ms, gs];
function G(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function V(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var t = n.ownerDocument;
    return t && t.defaultView || window;
  }
  return n;
}
function mt(n) {
  var t = V(n).Element;
  return n instanceof t || n instanceof Element;
}
function H(n) {
  var t = V(n).HTMLElement;
  return n instanceof t || n instanceof HTMLElement;
}
function Qe(n) {
  if (typeof ShadowRoot == "undefined")
    return !1;
  var t = V(n).ShadowRoot;
  return n instanceof t || n instanceof ShadowRoot;
}
function Ei(n) {
  var t = n.state;
  Object.keys(t.elements).forEach(function(e) {
    var s = t.styles[e] || {}, i = t.attributes[e] || {}, r = t.elements[e];
    !H(r) || !G(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function(o) {
      var a = i[o];
      a === !1 ? r.removeAttribute(o) : r.setAttribute(o, a === !0 ? "" : a);
    }));
  });
}
function vi(n) {
  var t = n.state, e = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, e.popper), t.styles = e, t.elements.arrow && Object.assign(t.elements.arrow.style, e.arrow), function() {
    Object.keys(t.elements).forEach(function(s) {
      var i = t.elements[s], r = t.attributes[s] || {}, o = Object.keys(t.styles.hasOwnProperty(s) ? t.styles[s] : e[s]), a = o.reduce(function(l, h) {
        return l[h] = "", l;
      }, {});
      !H(i) || !G(i) || (Object.assign(i.style, a), Object.keys(r).forEach(function(l) {
        i.removeAttribute(l);
      }));
    });
  };
}
const Ze = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: Ei,
  effect: vi,
  requires: ["computeStyles"]
};
function U(n) {
  return n.split("-")[0];
}
var pt = Math.max, he = Math.min, Nt = Math.round;
function Fe() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function vs() {
  return !/^((?!chrome|android).)*safari/i.test(Fe());
}
function St(n, t, e) {
  t === void 0 && (t = !1), e === void 0 && (e = !1);
  var s = n.getBoundingClientRect(), i = 1, r = 1;
  t && H(n) && (i = n.offsetWidth > 0 && Nt(s.width) / n.offsetWidth || 1, r = n.offsetHeight > 0 && Nt(s.height) / n.offsetHeight || 1);
  var o = mt(n) ? V(n) : window, a = o.visualViewport, l = !vs() && e, h = (s.left + (l && a ? a.offsetLeft : 0)) / i, u = (s.top + (l && a ? a.offsetTop : 0)) / r, p = s.width / i, _ = s.height / r;
  return {
    width: p,
    height: _,
    top: u,
    right: h + p,
    bottom: u + _,
    left: h,
    x: h,
    y: u
  };
}
function Je(n) {
  var t = St(n), e = n.offsetWidth, s = n.offsetHeight;
  return Math.abs(t.width - e) <= 1 && (e = t.width), Math.abs(t.height - s) <= 1 && (s = t.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: e,
    height: s
  };
}
function bs(n, t) {
  var e = t.getRootNode && t.getRootNode();
  if (n.contains(t))
    return !0;
  if (e && Qe(e)) {
    var s = t;
    do {
      if (s && n.isSameNode(s))
        return !0;
      s = s.parentNode || s.host;
    } while (s);
  }
  return !1;
}
function Q(n) {
  return V(n).getComputedStyle(n);
}
function bi(n) {
  return ["table", "td", "th"].indexOf(G(n)) >= 0;
}
function it(n) {
  return ((mt(n) ? n.ownerDocument : (
    // $FlowFixMe[prop-missing]
    n.document
  )) || window.document).documentElement;
}
function me(n) {
  return G(n) === "html" ? n : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    n.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    n.parentNode || // DOM Element detected
    (Qe(n) ? n.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    it(n)
  );
}
function On(n) {
  return !H(n) || // https://github.com/popperjs/popper-core/issues/837
  Q(n).position === "fixed" ? null : n.offsetParent;
}
function Ai(n) {
  var t = /firefox/i.test(Fe()), e = /Trident/i.test(Fe());
  if (e && H(n)) {
    var s = Q(n);
    if (s.position === "fixed")
      return null;
  }
  var i = me(n);
  for (Qe(i) && (i = i.host); H(i) && ["html", "body"].indexOf(G(i)) < 0; ) {
    var r = Q(i);
    if (r.transform !== "none" || r.perspective !== "none" || r.contain === "paint" || ["transform", "perspective"].indexOf(r.willChange) !== -1 || t && r.willChange === "filter" || t && r.filter && r.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function Kt(n) {
  for (var t = V(n), e = On(n); e && bi(e) && Q(e).position === "static"; )
    e = On(e);
  return e && (G(e) === "html" || G(e) === "body" && Q(e).position === "static") ? t : e || Ai(n) || t;
}
function tn(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function Bt(n, t, e) {
  return pt(n, he(t, e));
}
function Ti(n, t, e) {
  var s = Bt(n, t, e);
  return s > e ? e : s;
}
function As() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Ts(n) {
  return Object.assign({}, As(), n);
}
function ys(n, t) {
  return t.reduce(function(e, s) {
    return e[s] = n, e;
  }, {});
}
var yi = function(t, e) {
  return t = typeof t == "function" ? t(Object.assign({}, e.rects, {
    placement: e.placement
  })) : t, Ts(typeof t != "number" ? t : ys(t, Pt));
};
function wi(n) {
  var t, e = n.state, s = n.name, i = n.options, r = e.elements.arrow, o = e.modifiersData.popperOffsets, a = U(e.placement), l = tn(a), h = [P, k].indexOf(a) >= 0, u = h ? "height" : "width";
  if (!(!r || !o)) {
    var p = yi(i.padding, e), _ = Je(r), f = l === "y" ? I : P, A = l === "y" ? R : k, m = e.rects.reference[u] + e.rects.reference[l] - o[l] - e.rects.popper[u], E = o[l] - e.rects.reference[l], T = Kt(r), w = T ? l === "y" ? T.clientHeight || 0 : T.clientWidth || 0 : 0, O = m / 2 - E / 2, g = p[f], v = w - _[u] - p[A], b = w / 2 - _[u] / 2 + O, y = Bt(g, b, v), S = l;
    e.modifiersData[s] = (t = {}, t[S] = y, t.centerOffset = y - b, t);
  }
}
function Oi(n) {
  var t = n.state, e = n.options, s = e.element, i = s === void 0 ? "[data-popper-arrow]" : s;
  i != null && (typeof i == "string" && (i = t.elements.popper.querySelector(i), !i) || bs(t.elements.popper, i) && (t.elements.arrow = i));
}
const ws = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: wi,
  effect: Oi,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Dt(n) {
  return n.split("-")[1];
}
var Ci = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function Ni(n, t) {
  var e = n.x, s = n.y, i = t.devicePixelRatio || 1;
  return {
    x: Nt(e * i) / i || 0,
    y: Nt(s * i) / i || 0
  };
}
function Cn(n) {
  var t, e = n.popper, s = n.popperRect, i = n.placement, r = n.variation, o = n.offsets, a = n.position, l = n.gpuAcceleration, h = n.adaptive, u = n.roundOffsets, p = n.isFixed, _ = o.x, f = _ === void 0 ? 0 : _, A = o.y, m = A === void 0 ? 0 : A, E = typeof u == "function" ? u({
    x: f,
    y: m
  }) : {
    x: f,
    y: m
  };
  f = E.x, m = E.y;
  var T = o.hasOwnProperty("x"), w = o.hasOwnProperty("y"), O = P, g = I, v = window;
  if (h) {
    var b = Kt(e), y = "clientHeight", S = "clientWidth";
    if (b === V(e) && (b = it(e), Q(b).position !== "static" && a === "absolute" && (y = "scrollHeight", S = "scrollWidth")), b = b, i === I || (i === P || i === k) && r === Ct) {
      g = R;
      var N = p && b === v && v.visualViewport ? v.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        b[y]
      );
      m -= N - s.height, m *= l ? 1 : -1;
    }
    if (i === P || (i === I || i === R) && r === Ct) {
      O = k;
      var C = p && b === v && v.visualViewport ? v.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        b[S]
      );
      f -= C - s.width, f *= l ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: a
  }, h && Ci), F = u === !0 ? Ni({
    x: f,
    y: m
  }, V(e)) : {
    x: f,
    y: m
  };
  if (f = F.x, m = F.y, l) {
    var L;
    return Object.assign({}, D, (L = {}, L[g] = w ? "0" : "", L[O] = T ? "0" : "", L.transform = (v.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + m + "px)" : "translate3d(" + f + "px, " + m + "px, 0)", L));
  }
  return Object.assign({}, D, (t = {}, t[g] = w ? m + "px" : "", t[O] = T ? f + "px" : "", t.transform = "", t));
}
function Si(n) {
  var t = n.state, e = n.options, s = e.gpuAcceleration, i = s === void 0 ? !0 : s, r = e.adaptive, o = r === void 0 ? !0 : r, a = e.roundOffsets, l = a === void 0 ? !0 : a, h = {
    placement: U(t.placement),
    variation: Dt(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: i,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Cn(Object.assign({}, h, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: o,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Cn(Object.assign({}, h, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const en = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: Si,
  data: {}
};
var ee = {
  passive: !0
};
function Di(n) {
  var t = n.state, e = n.instance, s = n.options, i = s.scroll, r = i === void 0 ? !0 : i, o = s.resize, a = o === void 0 ? !0 : o, l = V(t.elements.popper), h = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return r && h.forEach(function(u) {
    u.addEventListener("scroll", e.update, ee);
  }), a && l.addEventListener("resize", e.update, ee), function() {
    r && h.forEach(function(u) {
      u.removeEventListener("scroll", e.update, ee);
    }), a && l.removeEventListener("resize", e.update, ee);
  };
}
const nn = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: Di,
  data: {}
};
var $i = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function ce(n) {
  return n.replace(/left|right|bottom|top/g, function(t) {
    return $i[t];
  });
}
var Li = {
  start: "end",
  end: "start"
};
function Nn(n) {
  return n.replace(/start|end/g, function(t) {
    return Li[t];
  });
}
function sn(n) {
  var t = V(n), e = t.pageXOffset, s = t.pageYOffset;
  return {
    scrollLeft: e,
    scrollTop: s
  };
}
function rn(n) {
  return St(it(n)).left + sn(n).scrollLeft;
}
function Ii(n, t) {
  var e = V(n), s = it(n), i = e.visualViewport, r = s.clientWidth, o = s.clientHeight, a = 0, l = 0;
  if (i) {
    r = i.width, o = i.height;
    var h = vs();
    (h || !h && t === "fixed") && (a = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: r,
    height: o,
    x: a + rn(n),
    y: l
  };
}
function Pi(n) {
  var t, e = it(n), s = sn(n), i = (t = n.ownerDocument) == null ? void 0 : t.body, r = pt(e.scrollWidth, e.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), o = pt(e.scrollHeight, e.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), a = -s.scrollLeft + rn(n), l = -s.scrollTop;
  return Q(i || e).direction === "rtl" && (a += pt(e.clientWidth, i ? i.clientWidth : 0) - r), {
    width: r,
    height: o,
    x: a,
    y: l
  };
}
function on(n) {
  var t = Q(n), e = t.overflow, s = t.overflowX, i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(e + i + s);
}
function Os(n) {
  return ["html", "body", "#document"].indexOf(G(n)) >= 0 ? n.ownerDocument.body : H(n) && on(n) ? n : Os(me(n));
}
function jt(n, t) {
  var e;
  t === void 0 && (t = []);
  var s = Os(n), i = s === ((e = n.ownerDocument) == null ? void 0 : e.body), r = V(s), o = i ? [r].concat(r.visualViewport || [], on(s) ? s : []) : s, a = t.concat(o);
  return i ? a : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    a.concat(jt(me(o)))
  );
}
function Ke(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function Mi(n, t) {
  var e = St(n, !1, t === "fixed");
  return e.top = e.top + n.clientTop, e.left = e.left + n.clientLeft, e.bottom = e.top + n.clientHeight, e.right = e.left + n.clientWidth, e.width = n.clientWidth, e.height = n.clientHeight, e.x = e.left, e.y = e.top, e;
}
function Sn(n, t, e) {
  return t === qe ? Ke(Ii(n, e)) : mt(t) ? Mi(t, e) : Ke(Pi(it(n)));
}
function xi(n) {
  var t = jt(me(n)), e = ["absolute", "fixed"].indexOf(Q(n).position) >= 0, s = e && H(n) ? Kt(n) : n;
  return mt(s) ? t.filter(function(i) {
    return mt(i) && bs(i, s) && G(i) !== "body";
  }) : [];
}
function Ri(n, t, e, s) {
  var i = t === "clippingParents" ? xi(n) : [].concat(t), r = [].concat(i, [e]), o = r[0], a = r.reduce(function(l, h) {
    var u = Sn(n, h, s);
    return l.top = pt(u.top, l.top), l.right = he(u.right, l.right), l.bottom = he(u.bottom, l.bottom), l.left = pt(u.left, l.left), l;
  }, Sn(n, o, s));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Cs(n) {
  var t = n.reference, e = n.element, s = n.placement, i = s ? U(s) : null, r = s ? Dt(s) : null, o = t.x + t.width / 2 - e.width / 2, a = t.y + t.height / 2 - e.height / 2, l;
  switch (i) {
    case I:
      l = {
        x: o,
        y: t.y - e.height
      };
      break;
    case R:
      l = {
        x: o,
        y: t.y + t.height
      };
      break;
    case k:
      l = {
        x: t.x + t.width,
        y: a
      };
      break;
    case P:
      l = {
        x: t.x - e.width,
        y: a
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var h = i ? tn(i) : null;
  if (h != null) {
    var u = h === "y" ? "height" : "width";
    switch (r) {
      case _t:
        l[h] = l[h] - (t[u] / 2 - e[u] / 2);
        break;
      case Ct:
        l[h] = l[h] + (t[u] / 2 - e[u] / 2);
        break;
    }
  }
  return l;
}
function $t(n, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, i = s === void 0 ? n.placement : s, r = e.strategy, o = r === void 0 ? n.strategy : r, a = e.boundary, l = a === void 0 ? as : a, h = e.rootBoundary, u = h === void 0 ? qe : h, p = e.elementContext, _ = p === void 0 ? Tt : p, f = e.altBoundary, A = f === void 0 ? !1 : f, m = e.padding, E = m === void 0 ? 0 : m, T = Ts(typeof E != "number" ? E : ys(E, Pt)), w = _ === Tt ? cs : Tt, O = n.rects.popper, g = n.elements[A ? w : _], v = Ri(mt(g) ? g : g.contextElement || it(n.elements.popper), l, u, o), b = St(n.elements.reference), y = Cs({
    reference: b,
    element: O,
    strategy: "absolute",
    placement: i
  }), S = Ke(Object.assign({}, O, y)), N = _ === Tt ? S : b, C = {
    top: v.top - N.top + T.top,
    bottom: N.bottom - v.bottom + T.bottom,
    left: v.left - N.left + T.left,
    right: N.right - v.right + T.right
  }, D = n.modifiersData.offset;
  if (_ === Tt && D) {
    var F = D[i];
    Object.keys(C).forEach(function(L) {
      var at = [k, R].indexOf(L) >= 0 ? 1 : -1, ct = [I, R].indexOf(L) >= 0 ? "y" : "x";
      C[L] += F[ct] * at;
    });
  }
  return C;
}
function ki(n, t) {
  t === void 0 && (t = {});
  var e = t, s = e.placement, i = e.boundary, r = e.rootBoundary, o = e.padding, a = e.flipVariations, l = e.allowedAutoPlacements, h = l === void 0 ? Xe : l, u = Dt(s), p = u ? a ? je : je.filter(function(A) {
    return Dt(A) === u;
  }) : Pt, _ = p.filter(function(A) {
    return h.indexOf(A) >= 0;
  });
  _.length === 0 && (_ = p);
  var f = _.reduce(function(A, m) {
    return A[m] = $t(n, {
      placement: m,
      boundary: i,
      rootBoundary: r,
      padding: o
    })[U(m)], A;
  }, {});
  return Object.keys(f).sort(function(A, m) {
    return f[A] - f[m];
  });
}
function Vi(n) {
  if (U(n) === _e)
    return [];
  var t = ce(n);
  return [Nn(n), t, Nn(t)];
}
function Hi(n) {
  var t = n.state, e = n.options, s = n.name;
  if (!t.modifiersData[s]._skip) {
    for (var i = e.mainAxis, r = i === void 0 ? !0 : i, o = e.altAxis, a = o === void 0 ? !0 : o, l = e.fallbackPlacements, h = e.padding, u = e.boundary, p = e.rootBoundary, _ = e.altBoundary, f = e.flipVariations, A = f === void 0 ? !0 : f, m = e.allowedAutoPlacements, E = t.options.placement, T = U(E), w = T === E, O = l || (w || !A ? [ce(E)] : Vi(E)), g = [E].concat(O).reduce(function(vt, J) {
      return vt.concat(U(J) === _e ? ki(t, {
        placement: J,
        boundary: u,
        rootBoundary: p,
        padding: h,
        flipVariations: A,
        allowedAutoPlacements: m
      }) : J);
    }, []), v = t.rects.reference, b = t.rects.popper, y = /* @__PURE__ */ new Map(), S = !0, N = g[0], C = 0; C < g.length; C++) {
      var D = g[C], F = U(D), L = Dt(D) === _t, at = [I, R].indexOf(F) >= 0, ct = at ? "width" : "height", x = $t(t, {
        placement: D,
        boundary: u,
        rootBoundary: p,
        altBoundary: _,
        padding: h
      }), K = at ? L ? k : P : L ? R : I;
      v[ct] > b[ct] && (K = ce(K));
      var qt = ce(K), lt = [];
      if (r && lt.push(x[F] <= 0), a && lt.push(x[K] <= 0, x[qt] <= 0), lt.every(function(vt) {
        return vt;
      })) {
        N = D, S = !1;
        break;
      }
      y.set(D, lt);
    }
    if (S)
      for (var Xt = A ? 3 : 1, ye = function(J) {
        var Vt = g.find(function(Zt) {
          var ut = y.get(Zt);
          if (ut)
            return ut.slice(0, J).every(function(we) {
              return we;
            });
        });
        if (Vt)
          return N = Vt, "break";
      }, kt = Xt; kt > 0; kt--) {
        var Qt = ye(kt);
        if (Qt === "break")
          break;
      }
    t.placement !== N && (t.modifiersData[s]._skip = !0, t.placement = N, t.reset = !0);
  }
}
const Ns = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Hi,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Dn(n, t, e) {
  return e === void 0 && (e = {
    x: 0,
    y: 0
  }), {
    top: n.top - t.height - e.y,
    right: n.right - t.width + e.x,
    bottom: n.bottom - t.height + e.y,
    left: n.left - t.width - e.x
  };
}
function $n(n) {
  return [I, k, R, P].some(function(t) {
    return n[t] >= 0;
  });
}
function Wi(n) {
  var t = n.state, e = n.name, s = t.rects.reference, i = t.rects.popper, r = t.modifiersData.preventOverflow, o = $t(t, {
    elementContext: "reference"
  }), a = $t(t, {
    altBoundary: !0
  }), l = Dn(o, s), h = Dn(a, i, r), u = $n(l), p = $n(h);
  t.modifiersData[e] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: h,
    isReferenceHidden: u,
    hasPopperEscaped: p
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": p
  });
}
const Ss = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Wi
};
function Bi(n, t, e) {
  var s = U(n), i = [P, I].indexOf(s) >= 0 ? -1 : 1, r = typeof e == "function" ? e(Object.assign({}, t, {
    placement: n
  })) : e, o = r[0], a = r[1];
  return o = o || 0, a = (a || 0) * i, [P, k].indexOf(s) >= 0 ? {
    x: a,
    y: o
  } : {
    x: o,
    y: a
  };
}
function ji(n) {
  var t = n.state, e = n.options, s = n.name, i = e.offset, r = i === void 0 ? [0, 0] : i, o = Xe.reduce(function(u, p) {
    return u[p] = Bi(p, t.rects, r), u;
  }, {}), a = o[t.placement], l = a.x, h = a.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += h), t.modifiersData[s] = o;
}
const Ds = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: ji
};
function Fi(n) {
  var t = n.state, e = n.name;
  t.modifiersData[e] = Cs({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const an = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: Fi,
  data: {}
};
function Ki(n) {
  return n === "x" ? "y" : "x";
}
function Yi(n) {
  var t = n.state, e = n.options, s = n.name, i = e.mainAxis, r = i === void 0 ? !0 : i, o = e.altAxis, a = o === void 0 ? !1 : o, l = e.boundary, h = e.rootBoundary, u = e.altBoundary, p = e.padding, _ = e.tether, f = _ === void 0 ? !0 : _, A = e.tetherOffset, m = A === void 0 ? 0 : A, E = $t(t, {
    boundary: l,
    rootBoundary: h,
    padding: p,
    altBoundary: u
  }), T = U(t.placement), w = Dt(t.placement), O = !w, g = tn(T), v = Ki(g), b = t.modifiersData.popperOffsets, y = t.rects.reference, S = t.rects.popper, N = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, C = typeof N == "number" ? {
    mainAxis: N,
    altAxis: N
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, N), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, F = {
    x: 0,
    y: 0
  };
  if (b) {
    if (r) {
      var L, at = g === "y" ? I : P, ct = g === "y" ? R : k, x = g === "y" ? "height" : "width", K = b[g], qt = K + E[at], lt = K - E[ct], Xt = f ? -S[x] / 2 : 0, ye = w === _t ? y[x] : S[x], kt = w === _t ? -S[x] : -y[x], Qt = t.elements.arrow, vt = f && Qt ? Je(Qt) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : As(), Vt = J[at], Zt = J[ct], ut = Bt(0, y[x], vt[x]), we = O ? y[x] / 2 - Xt - ut - Vt - C.mainAxis : ye - ut - Vt - C.mainAxis, ai = O ? -y[x] / 2 + Xt + ut + Zt + C.mainAxis : kt + ut + Zt + C.mainAxis, Oe = t.elements.arrow && Kt(t.elements.arrow), ci = Oe ? g === "y" ? Oe.clientTop || 0 : Oe.clientLeft || 0 : 0, pn = (L = D == null ? void 0 : D[g]) != null ? L : 0, li = K + we - pn - ci, ui = K + ai - pn, _n = Bt(f ? he(qt, li) : qt, K, f ? pt(lt, ui) : lt);
      b[g] = _n, F[g] = _n - K;
    }
    if (a) {
      var mn, hi = g === "x" ? I : P, di = g === "x" ? R : k, ht = b[v], Jt = v === "y" ? "height" : "width", gn = ht + E[hi], En = ht - E[di], Ce = [I, P].indexOf(T) !== -1, vn = (mn = D == null ? void 0 : D[v]) != null ? mn : 0, bn = Ce ? gn : ht - y[Jt] - S[Jt] - vn + C.altAxis, An = Ce ? ht + y[Jt] + S[Jt] - vn - C.altAxis : En, Tn = f && Ce ? Ti(bn, ht, An) : Bt(f ? bn : gn, ht, f ? An : En);
      b[v] = Tn, F[v] = Tn - ht;
    }
    t.modifiersData[s] = F;
  }
}
const $s = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Yi,
  requiresIfExists: ["offset"]
};
function Ui(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function zi(n) {
  return n === V(n) || !H(n) ? sn(n) : Ui(n);
}
function Gi(n) {
  var t = n.getBoundingClientRect(), e = Nt(t.width) / n.offsetWidth || 1, s = Nt(t.height) / n.offsetHeight || 1;
  return e !== 1 || s !== 1;
}
function qi(n, t, e) {
  e === void 0 && (e = !1);
  var s = H(t), i = H(t) && Gi(t), r = it(t), o = St(n, i, e), a = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (s || !s && !e) && ((G(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  on(r)) && (a = zi(t)), H(t) ? (l = St(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : r && (l.x = rn(r))), {
    x: o.left + a.scrollLeft - l.x,
    y: o.top + a.scrollTop - l.y,
    width: o.width,
    height: o.height
  };
}
function Xi(n) {
  var t = /* @__PURE__ */ new Map(), e = /* @__PURE__ */ new Set(), s = [];
  n.forEach(function(r) {
    t.set(r.name, r);
  });
  function i(r) {
    e.add(r.name);
    var o = [].concat(r.requires || [], r.requiresIfExists || []);
    o.forEach(function(a) {
      if (!e.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }), s.push(r);
  }
  return n.forEach(function(r) {
    e.has(r.name) || i(r);
  }), s;
}
function Qi(n) {
  var t = Xi(n);
  return Es.reduce(function(e, s) {
    return e.concat(t.filter(function(i) {
      return i.phase === s;
    }));
  }, []);
}
function Zi(n) {
  var t;
  return function() {
    return t || (t = new Promise(function(e) {
      Promise.resolve().then(function() {
        t = void 0, e(n());
      });
    })), t;
  };
}
function Ji(n) {
  var t = n.reduce(function(e, s) {
    var i = e[s.name];
    return e[s.name] = i ? Object.assign({}, i, s, {
      options: Object.assign({}, i.options, s.options),
      data: Object.assign({}, i.data, s.data)
    }) : s, e;
  }, {});
  return Object.keys(t).map(function(e) {
    return t[e];
  });
}
var Ln = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function In() {
  for (var n = arguments.length, t = new Array(n), e = 0; e < n; e++)
    t[e] = arguments[e];
  return !t.some(function(s) {
    return !(s && typeof s.getBoundingClientRect == "function");
  });
}
function ge(n) {
  n === void 0 && (n = {});
  var t = n, e = t.defaultModifiers, s = e === void 0 ? [] : e, i = t.defaultOptions, r = i === void 0 ? Ln : i;
  return function(a, l, h) {
    h === void 0 && (h = r);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Ln, r),
      modifiersData: {},
      elements: {
        reference: a,
        popper: l
      },
      attributes: {},
      styles: {}
    }, p = [], _ = !1, f = {
      state: u,
      setOptions: function(T) {
        var w = typeof T == "function" ? T(u.options) : T;
        m(), u.options = Object.assign({}, r, u.options, w), u.scrollParents = {
          reference: mt(a) ? jt(a) : a.contextElement ? jt(a.contextElement) : [],
          popper: jt(l)
        };
        var O = Qi(Ji([].concat(s, u.options.modifiers)));
        return u.orderedModifiers = O.filter(function(g) {
          return g.enabled;
        }), A(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!_) {
          var T = u.elements, w = T.reference, O = T.popper;
          if (In(w, O)) {
            u.rects = {
              reference: qi(w, Kt(O), u.options.strategy === "fixed"),
              popper: Je(O)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(C) {
              return u.modifiersData[C.name] = Object.assign({}, C.data);
            });
            for (var g = 0; g < u.orderedModifiers.length; g++) {
              if (u.reset === !0) {
                u.reset = !1, g = -1;
                continue;
              }
              var v = u.orderedModifiers[g], b = v.fn, y = v.options, S = y === void 0 ? {} : y, N = v.name;
              typeof b == "function" && (u = b({
                state: u,
                options: S,
                name: N,
                instance: f
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Zi(function() {
        return new Promise(function(E) {
          f.forceUpdate(), E(u);
        });
      }),
      destroy: function() {
        m(), _ = !0;
      }
    };
    if (!In(a, l))
      return f;
    f.setOptions(h).then(function(E) {
      !_ && h.onFirstUpdate && h.onFirstUpdate(E);
    });
    function A() {
      u.orderedModifiers.forEach(function(E) {
        var T = E.name, w = E.options, O = w === void 0 ? {} : w, g = E.effect;
        if (typeof g == "function") {
          var v = g({
            state: u,
            name: T,
            instance: f,
            options: O
          }), b = function() {
          };
          p.push(v || b);
        }
      });
    }
    function m() {
      p.forEach(function(E) {
        return E();
      }), p = [];
    }
    return f;
  };
}
var tr = /* @__PURE__ */ ge(), er = [nn, an, en, Ze], nr = /* @__PURE__ */ ge({
  defaultModifiers: er
}), sr = [nn, an, en, Ze, Ds, Ns, $s, ws, Ss], cn = /* @__PURE__ */ ge({
  defaultModifiers: sr
});
const Ls = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  afterMain: ps,
  afterRead: hs,
  afterWrite: gs,
  applyStyles: Ze,
  arrow: ws,
  auto: _e,
  basePlacements: Pt,
  beforeMain: ds,
  beforeRead: ls,
  beforeWrite: _s,
  bottom: R,
  clippingParents: as,
  computeStyles: en,
  createPopper: cn,
  createPopperBase: tr,
  createPopperLite: nr,
  detectOverflow: $t,
  end: Ct,
  eventListeners: nn,
  flip: Ns,
  hide: Ss,
  left: P,
  main: fs,
  modifierPhases: Es,
  offset: Ds,
  placements: Xe,
  popper: Tt,
  popperGenerator: ge,
  popperOffsets: an,
  preventOverflow: $s,
  read: us,
  reference: cs,
  right: k,
  start: _t,
  top: I,
  variationPlacements: je,
  viewport: qe,
  write: ms
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const tt = /* @__PURE__ */ new Map(), Ne = {
  set(n, t, e) {
    tt.has(n) || tt.set(n, /* @__PURE__ */ new Map());
    const s = tt.get(n);
    if (!s.has(t) && s.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);
      return;
    }
    s.set(t, e);
  },
  get(n, t) {
    return tt.has(n) && tt.get(n).get(t) || null;
  },
  remove(n, t) {
    if (!tt.has(n))
      return;
    const e = tt.get(n);
    e.delete(t), e.size === 0 && tt.delete(n);
  }
}, ir = 1e6, rr = 1e3, Ye = "transitionend", Is = (n) => (n && window.CSS && window.CSS.escape && (n = n.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), n), or = (n) => n == null ? `${n}` : Object.prototype.toString.call(n).match(/\s([a-z]+)/i)[1].toLowerCase(), ar = (n) => {
  do
    n += Math.floor(Math.random() * ir);
  while (document.getElementById(n));
  return n;
}, cr = (n) => {
  if (!n)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: e
  } = window.getComputedStyle(n);
  const s = Number.parseFloat(t), i = Number.parseFloat(e);
  return !s && !i ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * rr);
}, Ps = (n) => {
  n.dispatchEvent(new Event(Ye));
}, q = (n) => !n || typeof n != "object" ? !1 : (typeof n.jquery != "undefined" && (n = n[0]), typeof n.nodeType != "undefined"), et = (n) => q(n) ? n.jquery ? n[0] : n : typeof n == "string" && n.length > 0 ? document.querySelector(Is(n)) : null, Mt = (n) => {
  if (!q(n) || n.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(n).getPropertyValue("visibility") === "visible", e = n.closest("details:not([open])");
  if (!e)
    return t;
  if (e !== n) {
    const s = n.closest("summary");
    if (s && s.parentNode !== e || s === null)
      return !1;
  }
  return t;
}, nt = (n) => !n || n.nodeType !== Node.ELEMENT_NODE || n.classList.contains("disabled") ? !0 : typeof n.disabled != "undefined" ? n.disabled : n.hasAttribute("disabled") && n.getAttribute("disabled") !== "false", Ms = (n) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof n.getRootNode == "function") {
    const t = n.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return n instanceof ShadowRoot ? n : n.parentNode ? Ms(n.parentNode) : null;
}, de = () => {
}, Yt = (n) => {
  n.offsetHeight;
}, xs = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, Se = [], lr = (n) => {
  document.readyState === "loading" ? (Se.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of Se)
      t();
  }), Se.push(n)) : n();
}, W = () => document.documentElement.dir === "rtl", j = (n) => {
  lr(() => {
    const t = xs();
    if (t) {
      const e = n.NAME, s = t.fn[e];
      t.fn[e] = n.jQueryInterface, t.fn[e].Constructor = n, t.fn[e].noConflict = () => (t.fn[e] = s, n.jQueryInterface);
    }
  });
}, M = (n, t = [], e = n) => typeof n == "function" ? n(...t) : e, Rs = (n, t, e = !0) => {
  if (!e) {
    M(n);
    return;
  }
  const i = cr(t) + 5;
  let r = !1;
  const o = ({
    target: a
  }) => {
    a === t && (r = !0, t.removeEventListener(Ye, o), M(n));
  };
  t.addEventListener(Ye, o), setTimeout(() => {
    r || Ps(t);
  }, i);
}, ln = (n, t, e, s) => {
  const i = n.length;
  let r = n.indexOf(t);
  return r === -1 ? !e && s ? n[i - 1] : n[0] : (r += e ? 1 : -1, s && (r = (r + i) % i), n[Math.max(0, Math.min(r, i - 1))]);
}, ur = /[^.]*(?=\..*)\.|.*/, hr = /\..*/, dr = /::\d+$/, De = {};
let Pn = 1;
const ks = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, fr = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Vs(n, t) {
  return t && `${t}::${Pn++}` || n.uidEvent || Pn++;
}
function Hs(n) {
  const t = Vs(n);
  return n.uidEvent = t, De[t] = De[t] || {}, De[t];
}
function pr(n, t) {
  return function e(s) {
    return un(s, {
      delegateTarget: n
    }), e.oneOff && c.off(n, s.type, t), t.apply(n, [s]);
  };
}
function _r(n, t, e) {
  return function s(i) {
    const r = n.querySelectorAll(t);
    for (let {
      target: o
    } = i; o && o !== this; o = o.parentNode)
      for (const a of r)
        if (a === o)
          return un(i, {
            delegateTarget: o
          }), s.oneOff && c.off(n, i.type, t, e), e.apply(o, [i]);
  };
}
function Ws(n, t, e = null) {
  return Object.values(n).find((s) => s.callable === t && s.delegationSelector === e);
}
function Bs(n, t, e) {
  const s = typeof t == "string", i = s ? e : t || e;
  let r = js(n);
  return fr.has(r) || (r = n), [s, i, r];
}
function Mn(n, t, e, s, i) {
  if (typeof t != "string" || !n)
    return;
  let [r, o, a] = Bs(t, e, s);
  t in ks && (o = ((A) => function(m) {
    if (!m.relatedTarget || m.relatedTarget !== m.delegateTarget && !m.delegateTarget.contains(m.relatedTarget))
      return A.call(this, m);
  })(o));
  const l = Hs(n), h = l[a] || (l[a] = {}), u = Ws(h, o, r ? e : null);
  if (u) {
    u.oneOff = u.oneOff && i;
    return;
  }
  const p = Vs(o, t.replace(ur, "")), _ = r ? _r(n, e, o) : pr(n, o);
  _.delegationSelector = r ? e : null, _.callable = o, _.oneOff = i, _.uidEvent = p, h[p] = _, n.addEventListener(a, _, r);
}
function Ue(n, t, e, s, i) {
  const r = Ws(t[e], s, i);
  r && (n.removeEventListener(e, r, !!i), delete t[e][r.uidEvent]);
}
function mr(n, t, e, s) {
  const i = t[e] || {};
  for (const [r, o] of Object.entries(i))
    r.includes(s) && Ue(n, t, e, o.callable, o.delegationSelector);
}
function js(n) {
  return n = n.replace(hr, ""), ks[n] || n;
}
const c = {
  on(n, t, e, s) {
    Mn(n, t, e, s, !1);
  },
  one(n, t, e, s) {
    Mn(n, t, e, s, !0);
  },
  off(n, t, e, s) {
    if (typeof t != "string" || !n)
      return;
    const [i, r, o] = Bs(t, e, s), a = o !== t, l = Hs(n), h = l[o] || {}, u = t.startsWith(".");
    if (typeof r != "undefined") {
      if (!Object.keys(h).length)
        return;
      Ue(n, l, o, r, i ? e : null);
      return;
    }
    if (u)
      for (const p of Object.keys(l))
        mr(n, l, p, t.slice(1));
    for (const [p, _] of Object.entries(h)) {
      const f = p.replace(dr, "");
      (!a || t.includes(f)) && Ue(n, l, o, _.callable, _.delegationSelector);
    }
  },
  trigger(n, t, e) {
    if (typeof t != "string" || !n)
      return null;
    const s = xs(), i = js(t), r = t !== i;
    let o = null, a = !0, l = !0, h = !1;
    r && s && (o = s.Event(t, e), s(n).trigger(o), a = !o.isPropagationStopped(), l = !o.isImmediatePropagationStopped(), h = o.isDefaultPrevented());
    const u = un(new Event(t, {
      bubbles: a,
      cancelable: !0
    }), e);
    return h && u.preventDefault(), l && n.dispatchEvent(u), u.defaultPrevented && o && o.preventDefault(), u;
  }
};
function un(n, t = {}) {
  for (const [e, s] of Object.entries(t))
    try {
      n[e] = s;
    } catch (i) {
      Object.defineProperty(n, e, {
        configurable: !0,
        get() {
          return s;
        }
      });
    }
  return n;
}
function xn(n) {
  if (n === "true")
    return !0;
  if (n === "false")
    return !1;
  if (n === Number(n).toString())
    return Number(n);
  if (n === "" || n === "null")
    return null;
  if (typeof n != "string")
    return n;
  try {
    return JSON.parse(decodeURIComponent(n));
  } catch (t) {
    return n;
  }
}
function $e(n) {
  return n.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const X = {
  setDataAttribute(n, t, e) {
    n.setAttribute(`data-bs-${$e(t)}`, e);
  },
  removeDataAttribute(n, t) {
    n.removeAttribute(`data-bs-${$e(t)}`);
  },
  getDataAttributes(n) {
    if (!n)
      return {};
    const t = {}, e = Object.keys(n.dataset).filter((s) => s.startsWith("bs") && !s.startsWith("bsConfig"));
    for (const s of e) {
      let i = s.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = xn(n.dataset[s]);
    }
    return t;
  },
  getDataAttribute(n, t) {
    return xn(n.getAttribute(`data-bs-${$e(t)}`));
  }
};
class Ut {
  // Getters
  static get Default() {
    return {};
  }
  static get DefaultType() {
    return {};
  }
  static get NAME() {
    throw new Error('You have to implement the static method "NAME", for each component!');
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t;
  }
  _mergeConfigObj(t, e) {
    const s = q(e) ? X.getDataAttribute(e, "config") : {};
    return $($($($({}, this.constructor.Default), typeof s == "object" ? s : {}), q(e) ? X.getDataAttributes(e) : {}), typeof t == "object" ? t : {});
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const [s, i] of Object.entries(e)) {
      const r = t[s], o = q(r) ? "element" : or(r);
      if (!new RegExp(i).test(o))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${o}" but expected type "${i}".`);
    }
  }
}
const gr = "5.3.2";
class Y extends Ut {
  constructor(t, e) {
    super(), t = et(t), t && (this._element = t, this._config = this._getConfig(e), Ne.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    Ne.remove(this._element, this.constructor.DATA_KEY), c.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, e, s = !0) {
    Rs(t, e, s);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return Ne.get(et(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return gr;
  }
  static get DATA_KEY() {
    return `bs.${this.NAME}`;
  }
  static get EVENT_KEY() {
    return `.${this.DATA_KEY}`;
  }
  static eventName(t) {
    return `${t}${this.EVENT_KEY}`;
  }
}
const Le = (n) => {
  let t = n.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let e = n.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? Is(e.trim()) : null;
  }
  return t;
}, d = {
  find(n, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, n));
  },
  findOne(n, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, n);
  },
  children(n, t) {
    return [].concat(...n.children).filter((e) => e.matches(t));
  },
  parents(n, t) {
    const e = [];
    let s = n.parentNode.closest(t);
    for (; s; )
      e.push(s), s = s.parentNode.closest(t);
    return e;
  },
  prev(n, t) {
    let e = n.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(n, t) {
    let e = n.nextElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(n) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
    return this.find(t, n).filter((e) => !nt(e) && Mt(e));
  },
  getSelectorFromElement(n) {
    const t = Le(n);
    return t && d.findOne(t) ? t : null;
  },
  getElementFromSelector(n) {
    const t = Le(n);
    return t ? d.findOne(t) : null;
  },
  getMultipleElementsFromSelector(n) {
    const t = Le(n);
    return t ? d.find(t) : [];
  }
}, Ee = (n, t = "hide") => {
  const e = `click.dismiss${n.EVENT_KEY}`, s = n.NAME;
  c.on(document, e, `[data-bs-dismiss="${s}"]`, function(i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), nt(this))
      return;
    const r = d.getElementFromSelector(this) || this.closest(`.${s}`);
    n.getOrCreateInstance(r)[t]();
  });
}, Er = "alert", vr = "bs.alert", Fs = `.${vr}`, br = `close${Fs}`, Ar = `closed${Fs}`, Tr = "fade", yr = "show";
class ve extends Y {
  // Getters
  static get NAME() {
    return Er;
  }
  // Public
  close() {
    if (c.trigger(this._element, br).defaultPrevented)
      return;
    this._element.classList.remove(yr);
    const e = this._element.classList.contains(Tr);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  // Private
  _destroyElement() {
    this._element.remove(), c.trigger(this._element, Ar), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ve.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Ee(ve, "close");
j(ve);
const wr = "button", Or = "bs.button", Cr = `.${Or}`, Nr = ".data-api", Sr = "active", Rn = '[data-bs-toggle="button"]', Dr = `click${Cr}${Nr}`;
class be extends Y {
  // Getters
  static get NAME() {
    return wr;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(Sr));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = be.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
c.on(document, Dr, Rn, (n) => {
  n.preventDefault();
  const t = n.target.closest(Rn);
  be.getOrCreateInstance(t).toggle();
});
j(be);
const $r = "swipe", xt = ".bs.swipe", Lr = `touchstart${xt}`, Ir = `touchmove${xt}`, Pr = `touchend${xt}`, Mr = `pointerdown${xt}`, xr = `pointerup${xt}`, Rr = "touch", kr = "pen", Vr = "pointer-event", Hr = 40, Wr = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Br = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class fe extends Ut {
  constructor(t, e) {
    super(), this._element = t, !(!t || !fe.isSupported()) && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return Wr;
  }
  static get DefaultType() {
    return Br;
  }
  static get NAME() {
    return $r;
  }
  // Public
  dispose() {
    c.off(this._element, xt);
  }
  // Private
  _start(t) {
    if (!this._supportPointerEvents) {
      this._deltaX = t.touches[0].clientX;
      return;
    }
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX);
  }
  _end(t) {
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), M(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Hr)
      return;
    const e = t / this._deltaX;
    this._deltaX = 0, e && M(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (c.on(this._element, Mr, (t) => this._start(t)), c.on(this._element, xr, (t) => this._end(t)), this._element.classList.add(Vr)) : (c.on(this._element, Lr, (t) => this._start(t)), c.on(this._element, Ir, (t) => this._move(t)), c.on(this._element, Pr, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === kr || t.pointerType === Rr);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const jr = "carousel", Fr = "bs.carousel", rt = `.${Fr}`, Ks = ".data-api", Kr = "ArrowLeft", Yr = "ArrowRight", Ur = 500, Ht = "next", bt = "prev", yt = "left", le = "right", zr = `slide${rt}`, Ie = `slid${rt}`, Gr = `keydown${rt}`, qr = `mouseenter${rt}`, Xr = `mouseleave${rt}`, Qr = `dragstart${rt}`, Zr = `load${rt}${Ks}`, Jr = `click${rt}${Ks}`, Ys = "carousel", ne = "active", to = "slide", eo = "carousel-item-end", no = "carousel-item-start", so = "carousel-item-next", io = "carousel-item-prev", Us = ".active", zs = ".carousel-item", ro = Us + zs, oo = ".carousel-item img", ao = ".carousel-indicators", co = "[data-bs-slide], [data-bs-slide-to]", lo = '[data-bs-ride="carousel"]', uo = {
  [Kr]: le,
  [Yr]: yt
}, ho = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, fo = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class zt extends Y {
  constructor(t, e) {
    super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = d.findOne(ao, this._element), this._addEventListeners(), this._config.ride === Ys && this.cycle();
  }
  // Getters
  static get Default() {
    return ho;
  }
  static get DefaultType() {
    return fo;
  }
  static get NAME() {
    return jr;
  }
  // Public
  next() {
    this._slide(Ht);
  }
  nextWhenVisible() {
    !document.hidden && Mt(this._element) && this.next();
  }
  prev() {
    this._slide(bt);
  }
  pause() {
    this._isSliding && Ps(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        c.one(this._element, Ie, () => this.cycle());
        return;
      }
      this.cycle();
    }
  }
  to(t) {
    const e = this._getItems();
    if (t > e.length - 1 || t < 0)
      return;
    if (this._isSliding) {
      c.one(this._element, Ie, () => this.to(t));
      return;
    }
    const s = this._getItemIndex(this._getActive());
    if (s === t)
      return;
    const i = t > s ? Ht : bt;
    this._slide(i, e[t]);
  }
  dispose() {
    this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.defaultInterval = t.interval, t;
  }
  _addEventListeners() {
    this._config.keyboard && c.on(this._element, Gr, (t) => this._keydown(t)), this._config.pause === "hover" && (c.on(this._element, qr, () => this.pause()), c.on(this._element, Xr, () => this._maybeEnableCycle())), this._config.touch && fe.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const s of d.find(oo, this._element))
      c.on(s, Qr, (i) => i.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(yt)),
      rightCallback: () => this._slide(this._directionToOrder(le)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Ur + this._config.interval));
      }
    };
    this._swipeHelper = new fe(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = uo[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const e = d.findOne(Us, this._indicatorsElement);
    e.classList.remove(ne), e.removeAttribute("aria-current");
    const s = d.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    s && (s.classList.add(ne), s.setAttribute("aria-current", "true"));
  }
  _updateInterval() {
    const t = this._activeElement || this._getActive();
    if (!t)
      return;
    const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
    this._config.interval = e || this._config.defaultInterval;
  }
  _slide(t, e = null) {
    if (this._isSliding)
      return;
    const s = this._getActive(), i = t === Ht, r = e || ln(this._getItems(), s, i, this._config.wrap);
    if (r === s)
      return;
    const o = this._getItemIndex(r), a = (f) => c.trigger(this._element, f, {
      relatedTarget: r,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(s),
      to: o
    });
    if (a(zr).defaultPrevented || !s || !r)
      return;
    const h = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(o), this._activeElement = r;
    const u = i ? no : eo, p = i ? so : io;
    r.classList.add(p), Yt(r), s.classList.add(u), r.classList.add(u);
    const _ = () => {
      r.classList.remove(u, p), r.classList.add(ne), s.classList.remove(ne, p, u), this._isSliding = !1, a(Ie);
    };
    this._queueCallback(_, s, this._isAnimated()), h && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(to);
  }
  _getActive() {
    return d.findOne(ro, this._element);
  }
  _getItems() {
    return d.find(zs, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return W() ? t === yt ? bt : Ht : t === yt ? Ht : bt;
  }
  _orderToDirection(t) {
    return W() ? t === bt ? yt : le : t === bt ? le : yt;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = zt.getOrCreateInstance(this, t);
      if (typeof t == "number") {
        e.to(t);
        return;
      }
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(document, Jr, co, function(n) {
  const t = d.getElementFromSelector(this);
  if (!t || !t.classList.contains(Ys))
    return;
  n.preventDefault();
  const e = zt.getOrCreateInstance(t), s = this.getAttribute("data-bs-slide-to");
  if (s) {
    e.to(s), e._maybeEnableCycle();
    return;
  }
  if (X.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
c.on(window, Zr, () => {
  const n = d.find(lo);
  for (const t of n)
    zt.getOrCreateInstance(t);
});
j(zt);
const po = "collapse", _o = "bs.collapse", Gt = `.${_o}`, mo = ".data-api", go = `show${Gt}`, Eo = `shown${Gt}`, vo = `hide${Gt}`, bo = `hidden${Gt}`, Ao = `click${Gt}${mo}`, Pe = "show", Ot = "collapse", se = "collapsing", To = "collapsed", yo = `:scope .${Ot} .${Ot}`, wo = "collapse-horizontal", Oo = "width", Co = "height", No = ".collapse.show, .collapse.collapsing", ze = '[data-bs-toggle="collapse"]', So = {
  parent: null,
  toggle: !0
}, Do = {
  parent: "(null|element)",
  toggle: "boolean"
};
class Ft extends Y {
  constructor(t, e) {
    super(t, e), this._isTransitioning = !1, this._triggerArray = [];
    const s = d.find(ze);
    for (const i of s) {
      const r = d.getSelectorFromElement(i), o = d.find(r).filter((a) => a === this._element);
      r !== null && o.length && this._triggerArray.push(i);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return So;
  }
  static get DefaultType() {
    return Do;
  }
  static get NAME() {
    return po;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(No).filter((a) => a !== this._element).map((a) => Ft.getOrCreateInstance(a, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || c.trigger(this._element, go).defaultPrevented)
      return;
    for (const a of t)
      a.hide();
    const s = this._getDimension();
    this._element.classList.remove(Ot), this._element.classList.add(se), this._element.style[s] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(se), this._element.classList.add(Ot, Pe), this._element.style[s] = "", c.trigger(this._element, Eo);
    }, o = `scroll${s[0].toUpperCase() + s.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[s] = `${this._element[o]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || c.trigger(this._element, vo).defaultPrevented)
      return;
    const e = this._getDimension();
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, Yt(this._element), this._element.classList.add(se), this._element.classList.remove(Ot, Pe);
    for (const i of this._triggerArray) {
      const r = d.getElementFromSelector(i);
      r && !this._isShown(r) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const s = () => {
      this._isTransitioning = !1, this._element.classList.remove(se), this._element.classList.add(Ot), c.trigger(this._element, bo);
    };
    this._element.style[e] = "", this._queueCallback(s, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Pe);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = et(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(wo) ? Oo : Co;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(ze);
    for (const e of t) {
      const s = d.getElementFromSelector(e);
      s && this._addAriaAndCollapsedClass([e], this._isShown(s));
    }
  }
  _getFirstLevelChildren(t) {
    const e = d.find(yo, this._config.parent);
    return d.find(t, this._config.parent).filter((s) => !e.includes(s));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (t.length)
      for (const s of t)
        s.classList.toggle(To, !e), s.setAttribute("aria-expanded", e);
  }
  // Static
  static jQueryInterface(t) {
    const e = {};
    return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
      const s = Ft.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof s[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        s[t]();
      }
    });
  }
}
c.on(document, Ao, ze, function(n) {
  (n.target.tagName === "A" || n.delegateTarget && n.delegateTarget.tagName === "A") && n.preventDefault();
  for (const t of d.getMultipleElementsFromSelector(this))
    Ft.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
j(Ft);
const kn = "dropdown", $o = "bs.dropdown", gt = `.${$o}`, hn = ".data-api", Lo = "Escape", Vn = "Tab", Io = "ArrowUp", Hn = "ArrowDown", Po = 2, Mo = `hide${gt}`, xo = `hidden${gt}`, Ro = `show${gt}`, ko = `shown${gt}`, Gs = `click${gt}${hn}`, qs = `keydown${gt}${hn}`, Vo = `keyup${gt}${hn}`, wt = "show", Ho = "dropup", Wo = "dropend", Bo = "dropstart", jo = "dropup-center", Fo = "dropdown-center", dt = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ko = `${dt}.${wt}`, ue = ".dropdown-menu", Yo = ".navbar", Uo = ".navbar-nav", zo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Go = W() ? "top-end" : "top-start", qo = W() ? "top-start" : "top-end", Xo = W() ? "bottom-end" : "bottom-start", Qo = W() ? "bottom-start" : "bottom-end", Zo = W() ? "left-start" : "right-start", Jo = W() ? "right-start" : "left-start", ta = "top", ea = "bottom", na = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, sa = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class z extends Y {
  constructor(t, e) {
    super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = d.next(this._element, ue)[0] || d.prev(this._element, ue)[0] || d.findOne(ue, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return na;
  }
  static get DefaultType() {
    return sa;
  }
  static get NAME() {
    return kn;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (nt(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!c.trigger(this._element, Ro, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Uo))
        for (const s of [].concat(...document.body.children))
          c.on(s, "mouseover", de);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(wt), this._element.classList.add(wt), c.trigger(this._element, ko, t);
    }
  }
  hide() {
    if (nt(this._element) || !this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    this._completeHide(t);
  }
  dispose() {
    this._popper && this._popper.destroy(), super.dispose();
  }
  update() {
    this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
  }
  // Private
  _completeHide(t) {
    if (!c.trigger(this._element, Mo, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const s of [].concat(...document.body.children))
          c.off(s, "mouseover", de);
      this._popper && this._popper.destroy(), this._menu.classList.remove(wt), this._element.classList.remove(wt), this._element.setAttribute("aria-expanded", "false"), X.removeDataAttribute(this._menu, "popper"), c.trigger(this._element, xo, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !q(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${kn.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof Ls == "undefined")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : q(this._config.reference) ? t = et(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = cn(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains(wt);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(Wo))
      return Zo;
    if (t.classList.contains(Bo))
      return Jo;
    if (t.classList.contains(jo))
      return ta;
    if (t.classList.contains(Fo))
      return ea;
    const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(Ho) ? e ? qo : Go : e ? Qo : Xo;
  }
  _detectNavbar() {
    return this._element.closest(Yo) !== null;
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _getPopperConfig() {
    const t = {
      placement: this._getPlacement(),
      modifiers: [{
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }]
    };
    return (this._inNavbar || this._config.display === "static") && (X.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), $($({}, t), M(this._config.popperConfig, [t]));
  }
  _selectMenuItem({
    key: t,
    target: e
  }) {
    const s = d.find(zo, this._menu).filter((i) => Mt(i));
    s.length && ln(s, e, t === Hn, !s.includes(e)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = z.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === Po || t.type === "keyup" && t.key !== Vn)
      return;
    const e = d.find(Ko);
    for (const s of e) {
      const i = z.getInstance(s);
      if (!i || i._config.autoClose === !1)
        continue;
      const r = t.composedPath(), o = r.includes(i._menu);
      if (r.includes(i._element) || i._config.autoClose === "inside" && !o || i._config.autoClose === "outside" && o || i._menu.contains(t.target) && (t.type === "keyup" && t.key === Vn || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const a = {
        relatedTarget: i._element
      };
      t.type === "click" && (a.clickEvent = t), i._completeHide(a);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName), s = t.key === Lo, i = [Io, Hn].includes(t.key);
    if (!i && !s || e && !s)
      return;
    t.preventDefault();
    const r = this.matches(dt) ? this : d.prev(this, dt)[0] || d.next(this, dt)[0] || d.findOne(dt, t.delegateTarget.parentNode), o = z.getOrCreateInstance(r);
    if (i) {
      t.stopPropagation(), o.show(), o._selectMenuItem(t);
      return;
    }
    o._isShown() && (t.stopPropagation(), o.hide(), r.focus());
  }
}
c.on(document, qs, dt, z.dataApiKeydownHandler);
c.on(document, qs, ue, z.dataApiKeydownHandler);
c.on(document, Gs, z.clearMenus);
c.on(document, Vo, z.clearMenus);
c.on(document, Gs, dt, function(n) {
  n.preventDefault(), z.getOrCreateInstance(this).toggle();
});
j(z);
const Xs = "backdrop", ia = "fade", Wn = "show", Bn = `mousedown.bs.${Xs}`, ra = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, oa = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class Qs extends Ut {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return ra;
  }
  static get DefaultType() {
    return oa;
  }
  static get NAME() {
    return Xs;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      M(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && Yt(e), e.classList.add(Wn), this._emulateAnimation(() => {
      M(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      M(t);
      return;
    }
    this._getElement().classList.remove(Wn), this._emulateAnimation(() => {
      this.dispose(), M(t);
    });
  }
  dispose() {
    this._isAppended && (c.off(this._element, Bn), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(ia), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = et(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), c.on(t, Bn, () => {
      M(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Rs(t, this._getElement(), this._config.isAnimated);
  }
}
const aa = "focustrap", ca = "bs.focustrap", pe = `.${ca}`, la = `focusin${pe}`, ua = `keydown.tab${pe}`, ha = "Tab", da = "forward", jn = "backward", fa = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, pa = {
  autofocus: "boolean",
  trapElement: "element"
};
class Zs extends Ut {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return fa;
  }
  static get DefaultType() {
    return pa;
  }
  static get NAME() {
    return aa;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), c.off(document, pe), c.on(document, la, (t) => this._handleFocusin(t)), c.on(document, ua, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, c.off(document, pe));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: e
    } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target))
      return;
    const s = d.focusableChildren(e);
    s.length === 0 ? e.focus() : this._lastTabNavDirection === jn ? s[s.length - 1].focus() : s[0].focus();
  }
  _handleKeydown(t) {
    t.key === ha && (this._lastTabNavDirection = t.shiftKey ? jn : da);
  }
}
const Fn = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", Kn = ".sticky-top", ie = "padding-right", Yn = "margin-right";
class Ge {
  constructor() {
    this._element = document.body;
  }
  // Public
  getWidth() {
    const t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  }
  hide() {
    const t = this.getWidth();
    this._disableOverFlow(), this._setElementAttributes(this._element, ie, (e) => e + t), this._setElementAttributes(Fn, ie, (e) => e + t), this._setElementAttributes(Kn, Yn, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, ie), this._resetElementAttributes(Fn, ie), this._resetElementAttributes(Kn, Yn);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, s) {
    const i = this.getWidth(), r = (o) => {
      if (o !== this._element && window.innerWidth > o.clientWidth + i)
        return;
      this._saveInitialAttribute(o, e);
      const a = window.getComputedStyle(o).getPropertyValue(e);
      o.style.setProperty(e, `${s(Number.parseFloat(a))}px`);
    };
    this._applyManipulationCallback(t, r);
  }
  _saveInitialAttribute(t, e) {
    const s = t.style.getPropertyValue(e);
    s && X.setDataAttribute(t, e, s);
  }
  _resetElementAttributes(t, e) {
    const s = (i) => {
      const r = X.getDataAttribute(i, e);
      if (r === null) {
        i.style.removeProperty(e);
        return;
      }
      X.removeDataAttribute(i, e), i.style.setProperty(e, r);
    };
    this._applyManipulationCallback(t, s);
  }
  _applyManipulationCallback(t, e) {
    if (q(t)) {
      e(t);
      return;
    }
    for (const s of d.find(t, this._element))
      e(s);
  }
}
const _a = "modal", ma = "bs.modal", B = `.${ma}`, ga = ".data-api", Ea = "Escape", va = `hide${B}`, ba = `hidePrevented${B}`, Js = `hidden${B}`, ti = `show${B}`, Aa = `shown${B}`, Ta = `resize${B}`, ya = `click.dismiss${B}`, wa = `mousedown.dismiss${B}`, Oa = `keydown.dismiss${B}`, Ca = `click${B}${ga}`, Un = "modal-open", Na = "fade", zn = "show", Me = "modal-static", Sa = ".modal.show", Da = ".modal-dialog", $a = ".modal-body", La = '[data-bs-toggle="modal"]', Ia = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, Pa = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class Lt extends Y {
  constructor(t, e) {
    super(t, e), this._dialog = d.findOne(Da, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Ge(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Ia;
  }
  static get DefaultType() {
    return Pa;
  }
  static get NAME() {
    return _a;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || c.trigger(this._element, ti, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Un), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || c.trigger(this._element, va).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(zn), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    c.off(window, B), c.off(this._dialog, B), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new Qs({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new Zs({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const e = d.findOne($a, this._dialog);
    e && (e.scrollTop = 0), Yt(this._element), this._element.classList.add(zn);
    const s = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, c.trigger(this._element, Aa, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    c.on(this._element, Oa, (t) => {
      if (t.key === Ea) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), c.on(window, Ta, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), c.on(this._element, wa, (t) => {
      c.one(this._element, ya, (e) => {
        if (!(this._element !== t.target || this._element !== e.target)) {
          if (this._config.backdrop === "static") {
            this._triggerBackdropTransition();
            return;
          }
          this._config.backdrop && this.hide();
        }
      });
    });
  }
  _hideModal() {
    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
      document.body.classList.remove(Un), this._resetAdjustments(), this._scrollBar.reset(), c.trigger(this._element, Js);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Na);
  }
  _triggerBackdropTransition() {
    if (c.trigger(this._element, ba).defaultPrevented)
      return;
    const e = this._element.scrollHeight > document.documentElement.clientHeight, s = this._element.style.overflowY;
    s === "hidden" || this._element.classList.contains(Me) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(Me), this._queueCallback(() => {
      this._element.classList.remove(Me), this._queueCallback(() => {
        this._element.style.overflowY = s;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), s = e > 0;
    if (s && !t) {
      const i = W() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${e}px`;
    }
    if (!s && t) {
      const i = W() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${e}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const s = Lt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof s[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        s[t](e);
      }
    });
  }
}
c.on(document, Ca, La, function(n) {
  const t = d.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), c.one(t, ti, (i) => {
    i.defaultPrevented || c.one(t, Js, () => {
      Mt(this) && this.focus();
    });
  });
  const e = d.findOne(Sa);
  e && Lt.getInstance(e).hide(), Lt.getOrCreateInstance(t).toggle(this);
});
Ee(Lt);
j(Lt);
const Ma = "offcanvas", xa = "bs.offcanvas", Z = `.${xa}`, ei = ".data-api", Ra = `load${Z}${ei}`, ka = "Escape", Gn = "show", qn = "showing", Xn = "hiding", Va = "offcanvas-backdrop", ni = ".offcanvas.show", Ha = `show${Z}`, Wa = `shown${Z}`, Ba = `hide${Z}`, Qn = `hidePrevented${Z}`, si = `hidden${Z}`, ja = `resize${Z}`, Fa = `click${Z}${ei}`, Ka = `keydown.dismiss${Z}`, Ya = '[data-bs-toggle="offcanvas"]', Ua = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, za = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class st extends Y {
  constructor(t, e) {
    super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Ua;
  }
  static get DefaultType() {
    return za;
  }
  static get NAME() {
    return Ma;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || c.trigger(this._element, Ha, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Ge().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(qn);
    const s = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(Gn), this._element.classList.remove(qn), c.trigger(this._element, Wa, {
        relatedTarget: t
      });
    };
    this._queueCallback(s, this._element, !0);
  }
  hide() {
    if (!this._isShown || c.trigger(this._element, Ba).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Xn), this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(Gn, Xn), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Ge().reset(), c.trigger(this._element, si);
    };
    this._queueCallback(e, this._element, !0);
  }
  dispose() {
    this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  // Private
  _initializeBackDrop() {
    const t = () => {
      if (this._config.backdrop === "static") {
        c.trigger(this._element, Qn);
        return;
      }
      this.hide();
    }, e = !!this._config.backdrop;
    return new Qs({
      className: Va,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null
    });
  }
  _initializeFocusTrap() {
    return new Zs({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    c.on(this._element, Ka, (t) => {
      if (t.key === ka) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        c.trigger(this._element, Qn);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = st.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
c.on(document, Fa, Ya, function(n) {
  const t = d.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && n.preventDefault(), nt(this))
    return;
  c.one(t, si, () => {
    Mt(this) && this.focus();
  });
  const e = d.findOne(ni);
  e && e !== t && st.getInstance(e).hide(), st.getOrCreateInstance(t).toggle(this);
});
c.on(window, Ra, () => {
  for (const n of d.find(ni))
    st.getOrCreateInstance(n).show();
});
c.on(window, ja, () => {
  for (const n of d.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(n).position !== "fixed" && st.getOrCreateInstance(n).hide();
});
Ee(st);
j(st);
const Ga = /^aria-[\w-]*$/i, ii = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Ga],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
}, qa = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Xa = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Qa = (n, t) => {
  const e = n.nodeName.toLowerCase();
  return t.includes(e) ? qa.has(e) ? !!Xa.test(n.nodeValue) : !0 : t.filter((s) => s instanceof RegExp).some((s) => s.test(e));
};
function Za(n, t, e) {
  if (!n.length)
    return n;
  if (e && typeof e == "function")
    return e(n);
  const i = new window.DOMParser().parseFromString(n, "text/html"), r = [].concat(...i.body.querySelectorAll("*"));
  for (const o of r) {
    const a = o.nodeName.toLowerCase();
    if (!Object.keys(t).includes(a)) {
      o.remove();
      continue;
    }
    const l = [].concat(...o.attributes), h = [].concat(t["*"] || [], t[a] || []);
    for (const u of l)
      Qa(u, h) || o.removeAttribute(u.nodeName);
  }
  return i.body.innerHTML;
}
const Ja = "TemplateFactory", tc = {
  allowList: ii,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, ec = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, nc = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class sc extends Ut {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return tc;
  }
  static get DefaultType() {
    return ec;
  }
  static get NAME() {
    return Ja;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = $($({}, this._config.content), t), this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, r] of Object.entries(this._config.content))
      this._setContent(t, r, i);
    const e = t.children[0], s = this._resolvePossibleFunction(this._config.extraClass);
    return s && e.classList.add(...s.split(" ")), e;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, s] of Object.entries(t))
      super._typeCheckConfig({
        selector: e,
        entry: s
      }, nc);
  }
  _setContent(t, e, s) {
    const i = d.findOne(s, t);
    if (i) {
      if (e = this._resolvePossibleFunction(e), !e) {
        i.remove();
        return;
      }
      if (q(e)) {
        this._putElementInTemplate(et(e), i);
        return;
      }
      if (this._config.html) {
        i.innerHTML = this._maybeSanitize(e);
        return;
      }
      i.textContent = e;
    }
  }
  _maybeSanitize(t) {
    return this._config.sanitize ? Za(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return M(t, [this]);
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      e.innerHTML = "", e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const ic = "tooltip", rc = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), xe = "fade", oc = "modal", re = "show", ac = ".tooltip-inner", Zn = `.${oc}`, Jn = "hide.bs.modal", Wt = "hover", Re = "focus", cc = "click", lc = "manual", uc = "hide", hc = "hidden", dc = "show", fc = "shown", pc = "inserted", _c = "click", mc = "focusin", gc = "focusout", Ec = "mouseenter", vc = "mouseleave", bc = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: W() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: W() ? "right" : "left"
}, Ac = {
  allowList: ii,
  animation: !0,
  boundary: "clippingParents",
  container: !1,
  customClass: "",
  delay: 0,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  html: !1,
  offset: [0, 6],
  placement: "top",
  popperConfig: null,
  sanitize: !0,
  sanitizeFn: null,
  selector: !1,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  title: "",
  trigger: "hover focus"
}, Tc = {
  allowList: "object",
  animation: "boolean",
  boundary: "(string|element)",
  container: "(string|element|boolean)",
  customClass: "(string|function)",
  delay: "(number|object)",
  fallbackPlacements: "array",
  html: "boolean",
  offset: "(array|string|function)",
  placement: "(string|function)",
  popperConfig: "(null|object|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  selector: "(string|boolean)",
  template: "string",
  title: "(string|element|function)",
  trigger: "string"
};
class Rt extends Y {
  constructor(t, e) {
    if (typeof Ls == "undefined")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return Ac;
  }
  static get DefaultType() {
    return Tc;
  }
  static get NAME() {
    return ic;
  }
  // Public
  enable() {
    this._isEnabled = !0;
  }
  disable() {
    this._isEnabled = !1;
  }
  toggleEnabled() {
    this._isEnabled = !this._isEnabled;
  }
  toggle() {
    if (this._isEnabled) {
      if (this._activeTrigger.click = !this._activeTrigger.click, this._isShown()) {
        this._leave();
        return;
      }
      this._enter();
    }
  }
  dispose() {
    clearTimeout(this._timeout), c.off(this._element.closest(Zn), Jn, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = c.trigger(this._element, this.constructor.eventName(dc)), s = (Ms(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !s)
      return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const {
      container: r
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (r.append(i), c.trigger(this._element, this.constructor.eventName(pc))), this._popper = this._createPopper(i), i.classList.add(re), "ontouchstart" in document.documentElement)
      for (const a of [].concat(...document.body.children))
        c.on(a, "mouseover", de);
    const o = () => {
      c.trigger(this._element, this.constructor.eventName(fc)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(o, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || c.trigger(this._element, this.constructor.eventName(uc)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(re), "ontouchstart" in document.documentElement)
      for (const i of [].concat(...document.body.children))
        c.off(i, "mouseover", de);
    this._activeTrigger[cc] = !1, this._activeTrigger[Re] = !1, this._activeTrigger[Wt] = !1, this._isHovered = null;
    const s = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), c.trigger(this._element, this.constructor.eventName(hc)));
    };
    this._queueCallback(s, this.tip, this._isAnimated());
  }
  update() {
    this._popper && this._popper.update();
  }
  // Protected
  _isWithContent() {
    return !!this._getTitle();
  }
  _getTipElement() {
    return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
  }
  _createTipElement(t) {
    const e = this._getTemplateFactory(t).toHtml();
    if (!e)
      return null;
    e.classList.remove(xe, re), e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const s = ar(this.constructor.NAME).toString();
    return e.setAttribute("id", s), this._isAnimated() && e.classList.add(xe), e;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new sc(te($({}, this._config), {
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    })), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [ac]: this._getTitle()
    };
  }
  _getTitle() {
    return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
  }
  // Private
  _initializeOnDelegatedTarget(t) {
    return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
  }
  _isAnimated() {
    return this._config.animation || this.tip && this.tip.classList.contains(xe);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(re);
  }
  _createPopper(t) {
    const e = M(this._config.placement, [this, t, this._element]), s = bc[e.toUpperCase()];
    return cn(this._element, t, this._getPopperConfig(s));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return M(t, [this._element]);
  }
  _getPopperConfig(t) {
    const e = {
      placement: t,
      modifiers: [{
        name: "flip",
        options: {
          fallbackPlacements: this._config.fallbackPlacements
        }
      }, {
        name: "offset",
        options: {
          offset: this._getOffset()
        }
      }, {
        name: "preventOverflow",
        options: {
          boundary: this._config.boundary
        }
      }, {
        name: "arrow",
        options: {
          element: `.${this.constructor.NAME}-arrow`
        }
      }, {
        name: "preSetPlacement",
        enabled: !0,
        phase: "beforeMain",
        fn: (s) => {
          this._getTipElement().setAttribute("data-popper-placement", s.state.placement);
        }
      }]
    };
    return $($({}, e), M(this._config.popperConfig, [e]));
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        c.on(this._element, this.constructor.eventName(_c), this._config.selector, (s) => {
          this._initializeOnDelegatedTarget(s).toggle();
        });
      else if (e !== lc) {
        const s = e === Wt ? this.constructor.eventName(Ec) : this.constructor.eventName(mc), i = e === Wt ? this.constructor.eventName(vc) : this.constructor.eventName(gc);
        c.on(this._element, s, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          o._activeTrigger[r.type === "focusin" ? Re : Wt] = !0, o._enter();
        }), c.on(this._element, i, this._config.selector, (r) => {
          const o = this._initializeOnDelegatedTarget(r);
          o._activeTrigger[r.type === "focusout" ? Re : Wt] = o._element.contains(r.relatedTarget), o._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, c.on(this._element.closest(Zn), Jn, this._hideModalHandler);
  }
  _fixTitle() {
    const t = this._element.getAttribute("title");
    t && (!this._element.getAttribute("aria-label") && !this._element.textContent.trim() && this._element.setAttribute("aria-label", t), this._element.setAttribute("data-bs-original-title", t), this._element.removeAttribute("title"));
  }
  _enter() {
    if (this._isShown() || this._isHovered) {
      this._isHovered = !0;
      return;
    }
    this._isHovered = !0, this._setTimeout(() => {
      this._isHovered && this.show();
    }, this._config.delay.show);
  }
  _leave() {
    this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
      this._isHovered || this.hide();
    }, this._config.delay.hide));
  }
  _setTimeout(t, e) {
    clearTimeout(this._timeout), this._timeout = setTimeout(t, e);
  }
  _isWithActiveTrigger() {
    return Object.values(this._activeTrigger).includes(!0);
  }
  _getConfig(t) {
    const e = X.getDataAttributes(this._element);
    for (const s of Object.keys(e))
      rc.has(s) && delete e[s];
    return t = $($({}, e), typeof t == "object" && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : et(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [e, s] of Object.entries(this._config))
      this.constructor.Default[e] !== s && (t[e] = s);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Rt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
j(Rt);
const yc = "popover", wc = ".popover-header", Oc = ".popover-body", Cc = te($({}, Rt.Default), {
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}), Nc = te($({}, Rt.DefaultType), {
  content: "(null|string|element|function)"
});
class dn extends Rt {
  // Getters
  static get Default() {
    return Cc;
  }
  static get DefaultType() {
    return Nc;
  }
  static get NAME() {
    return yc;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [wc]: this._getTitle(),
      [Oc]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = dn.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
j(dn);
const Sc = "scrollspy", Dc = "bs.scrollspy", fn = `.${Dc}`, $c = ".data-api", Lc = `activate${fn}`, ts = `click${fn}`, Ic = `load${fn}${$c}`, Pc = "dropdown-item", At = "active", Mc = '[data-bs-spy="scroll"]', ke = "[href]", xc = ".nav, .list-group", es = ".nav-link", Rc = ".nav-item", kc = ".list-group-item", Vc = `${es}, ${Rc} > ${es}, ${kc}`, Hc = ".dropdown", Wc = ".dropdown-toggle", Bc = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, jc = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class Ae extends Y {
  constructor(t, e) {
    super(t, e), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return Bc;
  }
  static get DefaultType() {
    return jc;
  }
  static get NAME() {
    return Sc;
  }
  // Public
  refresh() {
    this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
    for (const t of this._observableSections.values())
      this._observer.observe(t);
  }
  dispose() {
    this._observer.disconnect(), super.dispose();
  }
  // Private
  _configAfterMerge(t) {
    return t.target = et(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (c.off(this._config.target, ts), c.on(this._config.target, ts, ke, (t) => {
      const e = this._observableSections.get(t.target.hash);
      if (e) {
        t.preventDefault();
        const s = this._rootElement || window, i = e.offsetTop - this._element.offsetTop;
        if (s.scrollTo) {
          s.scrollTo({
            top: i,
            behavior: "smooth"
          });
          return;
        }
        s.scrollTop = i;
      }
    }));
  }
  _getNewObserver() {
    const t = {
      root: this._rootElement,
      threshold: this._config.threshold,
      rootMargin: this._config.rootMargin
    };
    return new IntersectionObserver((e) => this._observerCallback(e), t);
  }
  // The logic of selection
  _observerCallback(t) {
    const e = (o) => this._targetLinks.get(`#${o.target.id}`), s = (o) => {
      this._previousScrollData.visibleEntryTop = o.target.offsetTop, this._process(e(o));
    }, i = (this._rootElement || document.documentElement).scrollTop, r = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const o of t) {
      if (!o.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(e(o));
        continue;
      }
      const a = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (r && a) {
        if (s(o), !i)
          return;
        continue;
      }
      !r && !a && s(o);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = d.find(ke, this._config.target);
    for (const e of t) {
      if (!e.hash || nt(e))
        continue;
      const s = d.findOne(decodeURI(e.hash), this._element);
      Mt(s) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, s));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(At), this._activateParents(t), c.trigger(this._element, Lc, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(Pc)) {
      d.findOne(Wc, t.closest(Hc)).classList.add(At);
      return;
    }
    for (const e of d.parents(t, xc))
      for (const s of d.prev(e, Vc))
        s.classList.add(At);
  }
  _clearActiveClass(t) {
    t.classList.remove(At);
    const e = d.find(`${ke}.${At}`, t);
    for (const s of e)
      s.classList.remove(At);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Ae.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(window, Ic, () => {
  for (const n of d.find(Mc))
    Ae.getOrCreateInstance(n);
});
j(Ae);
const Fc = "tab", Kc = "bs.tab", Et = `.${Kc}`, Yc = `hide${Et}`, Uc = `hidden${Et}`, zc = `show${Et}`, Gc = `shown${Et}`, qc = `click${Et}`, Xc = `keydown${Et}`, Qc = `load${Et}`, Zc = "ArrowLeft", ns = "ArrowRight", Jc = "ArrowUp", ss = "ArrowDown", Ve = "Home", is = "End", ft = "active", rs = "fade", He = "show", tl = "dropdown", ri = ".dropdown-toggle", el = ".dropdown-menu", We = `:not(${ri})`, nl = '.list-group, .nav, [role="tablist"]', sl = ".nav-item, .list-group-item", il = `.nav-link${We}, .list-group-item${We}, [role="tab"]${We}`, oi = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', Be = `${il}, ${oi}`, rl = `.${ft}[data-bs-toggle="tab"], .${ft}[data-bs-toggle="pill"], .${ft}[data-bs-toggle="list"]`;
class It extends Y {
  constructor(t) {
    super(t), this._parent = this._element.closest(nl), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), c.on(this._element, Xc, (e) => this._keydown(e)));
  }
  // Getters
  static get NAME() {
    return Fc;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const e = this._getActiveElem(), s = e ? c.trigger(e, Yc, {
      relatedTarget: t
    }) : null;
    c.trigger(t, zc, {
      relatedTarget: e
    }).defaultPrevented || s && s.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
  }
  // Private
  _activate(t, e) {
    if (!t)
      return;
    t.classList.add(ft), this._activate(d.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(He);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), c.trigger(t, Gc, {
        relatedTarget: e
      });
    };
    this._queueCallback(s, t, t.classList.contains(rs));
  }
  _deactivate(t, e) {
    if (!t)
      return;
    t.classList.remove(ft), t.blur(), this._deactivate(d.getElementFromSelector(t));
    const s = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(He);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), c.trigger(t, Uc, {
        relatedTarget: e
      });
    };
    this._queueCallback(s, t, t.classList.contains(rs));
  }
  _keydown(t) {
    if (![Zc, ns, Jc, ss, Ve, is].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this._getChildren().filter((i) => !nt(i));
    let s;
    if ([Ve, is].includes(t.key))
      s = e[t.key === Ve ? 0 : e.length - 1];
    else {
      const i = [ns, ss].includes(t.key);
      s = ln(e, t.target, i, !0);
    }
    s && (s.focus({
      preventScroll: !0
    }), It.getOrCreateInstance(s).show());
  }
  _getChildren() {
    return d.find(Be, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const s of e)
      this._setInitialAttributesOnChild(s);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t), s = this._getOuterElement(t);
    t.setAttribute("aria-selected", e), s !== t && this._setAttributeIfNotExists(s, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = d.getElementFromSelector(t);
    e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, e) {
    const s = this._getOuterElement(t);
    if (!s.classList.contains(tl))
      return;
    const i = (r, o) => {
      const a = d.findOne(r, s);
      a && a.classList.toggle(o, e);
    };
    i(ri, ft), i(el, He), s.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, s) {
    t.hasAttribute(e) || t.setAttribute(e, s);
  }
  _elemIsActive(t) {
    return t.classList.contains(ft);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches(Be) ? t : d.findOne(Be, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(sl) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = It.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
c.on(document, qc, oi, function(n) {
  ["A", "AREA"].includes(this.tagName) && n.preventDefault(), !nt(this) && It.getOrCreateInstance(this).show();
});
c.on(window, Qc, () => {
  for (const n of d.find(rl))
    It.getOrCreateInstance(n);
});
j(It);
const ol = "toast", al = "bs.toast", ot = `.${al}`, cl = `mouseover${ot}`, ll = `mouseout${ot}`, ul = `focusin${ot}`, hl = `focusout${ot}`, dl = `hide${ot}`, fl = `hidden${ot}`, pl = `show${ot}`, _l = `shown${ot}`, ml = "fade", os = "hide", oe = "show", ae = "showing", gl = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, El = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Te extends Y {
  constructor(t, e) {
    super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return El;
  }
  static get DefaultType() {
    return gl;
  }
  static get NAME() {
    return ol;
  }
  // Public
  show() {
    if (c.trigger(this._element, pl).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(ml);
    const e = () => {
      this._element.classList.remove(ae), c.trigger(this._element, _l), this._maybeScheduleHide();
    };
    this._element.classList.remove(os), Yt(this._element), this._element.classList.add(oe, ae), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || c.trigger(this._element, dl).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(os), this._element.classList.remove(ae, oe), c.trigger(this._element, fl);
    };
    this._element.classList.add(ae), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(oe), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(oe);
  }
  // Private
  _maybeScheduleHide() {
    this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
      this.hide();
    }, this._config.delay)));
  }
  _onInteraction(t, e) {
    switch (t.type) {
      case "mouseover":
      case "mouseout": {
        this._hasMouseInteraction = e;
        break;
      }
      case "focusin":
      case "focusout": {
        this._hasKeyboardInteraction = e;
        break;
      }
    }
    if (e) {
      this._clearTimeout();
      return;
    }
    const s = t.relatedTarget;
    this._element === s || this._element.contains(s) || this._maybeScheduleHide();
  }
  _setListeners() {
    c.on(this._element, cl, (t) => this._onInteraction(t, !0)), c.on(this._element, ll, (t) => this._onInteraction(t, !1)), c.on(this._element, ul, (t) => this._onInteraction(t, !0)), c.on(this._element, hl, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Te.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
Ee(Te);
j(Te);
export {
  ve as Alert,
  be as Button,
  Ft as Collapse,
  z as Dropdown,
  Lt as Modal,
  st as Offcanvas,
  dn as Popover,
  It as Tab,
  Te as Toast,
  Rt as Tooltip
};
