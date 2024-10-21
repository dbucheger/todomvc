var qe = Object.defineProperty, Qe = Object.defineProperties;
var Xe = Object.getOwnPropertyDescriptors;
var Wt = Object.getOwnPropertySymbols;
var Ze = Object.prototype.hasOwnProperty, Je = Object.prototype.propertyIsEnumerable;
var Ft = (s, t, e) => t in s ? qe(s, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : s[t] = e, u = (s, t) => {
  for (var e in t || (t = {}))
    Ze.call(t, e) && Ft(s, e, t[e]);
  if (Wt)
    for (var e of Wt(t))
      Je.call(t, e) && Ft(s, e, t[e]);
  return s;
}, tt = (s, t) => Qe(s, Xe(t));
import { l as me, c as ge } from "./chunk-Co1n7oHL.js";
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const S = /* @__PURE__ */ new Map(), mt = {
  set(s, t, e) {
    S.has(s) || S.set(s, /* @__PURE__ */ new Map());
    const n = S.get(s);
    if (!n.has(t) && n.size !== 0) {
      console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
      return;
    }
    n.set(t, e);
  },
  get(s, t) {
    return S.has(s) && S.get(s).get(t) || null;
  },
  remove(s, t) {
    if (!S.has(s))
      return;
    const e = S.get(s);
    e.delete(t), e.size === 0 && S.delete(s);
  }
}, ts = 1e6, es = 1e3, It = "transitionend", Ae = (s) => (s && window.CSS && window.CSS.escape && (s = s.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)), s), ss = (s) => s == null ? `${s}` : Object.prototype.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase(), ns = (s) => {
  do
    s += Math.floor(Math.random() * ts);
  while (document.getElementById(s));
  return s;
}, is = (s) => {
  if (!s)
    return 0;
  let {
    transitionDuration: t,
    transitionDelay: e
  } = window.getComputedStyle(s);
  const n = Number.parseFloat(t), i = Number.parseFloat(e);
  return !n && !i ? 0 : (t = t.split(",")[0], e = e.split(",")[0], (Number.parseFloat(t) + Number.parseFloat(e)) * es);
}, Te = (s) => {
  s.dispatchEvent(new Event(It));
}, N = (s) => !s || typeof s != "object" ? !1 : (typeof s.jquery != "undefined" && (s = s[0]), typeof s.nodeType != "undefined"), y = (s) => N(s) ? s.jquery ? s[0] : s : typeof s == "string" && s.length > 0 ? document.querySelector(Ae(s)) : null, Y = (s) => {
  if (!N(s) || s.getClientRects().length === 0)
    return !1;
  const t = getComputedStyle(s).getPropertyValue("visibility") === "visible", e = s.closest("details:not([open])");
  if (!e)
    return t;
  if (e !== s) {
    const n = s.closest("summary");
    if (n && n.parentNode !== e || n === null)
      return !1;
  }
  return t;
}, O = (s) => !s || s.nodeType !== Node.ELEMENT_NODE || s.classList.contains("disabled") ? !0 : typeof s.disabled != "undefined" ? s.disabled : s.hasAttribute("disabled") && s.getAttribute("disabled") !== "false", be = (s) => {
  if (!document.documentElement.attachShadow)
    return null;
  if (typeof s.getRootNode == "function") {
    const t = s.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }
  return s instanceof ShadowRoot ? s : s.parentNode ? be(s.parentNode) : null;
}, ct = () => {
}, q = (s) => {
  s.offsetHeight;
}, Ne = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, gt = [], os = (s) => {
  document.readyState === "loading" ? (gt.length || document.addEventListener("DOMContentLoaded", () => {
    for (const t of gt)
      t();
  }), gt.push(s)) : s();
}, p = () => document.documentElement.dir === "rtl", m = (s) => {
  os(() => {
    const t = Ne();
    if (t) {
      const e = s.NAME, n = t.fn[e];
      t.fn[e] = s.jQueryInterface, t.fn[e].Constructor = s, t.fn[e].noConflict = () => (t.fn[e] = n, s.jQueryInterface);
    }
  });
}, d = (s, t = [], e = s) => typeof s == "function" ? s(...t) : e, Ce = (s, t, e = !0) => {
  if (!e) {
    d(s);
    return;
  }
  const i = is(t) + 5;
  let a = !1;
  const r = ({
    target: c
  }) => {
    c === t && (a = !0, t.removeEventListener(It, r), d(s));
  };
  t.addEventListener(It, r), setTimeout(() => {
    a || Te(t);
  }, i);
}, kt = (s, t, e, n) => {
  const i = s.length;
  let a = s.indexOf(t);
  return a === -1 ? !e && n ? s[i - 1] : s[0] : (a += e ? 1 : -1, n && (a = (a + i) % i), s[Math.max(0, Math.min(a, i - 1))]);
}, rs = /[^.]*(?=\..*)\.|.*/, as = /\..*/, ls = /::\d+$/, At = {};
let Yt = 1;
const ve = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, cs = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
function Se(s, t) {
  return t && `${t}::${Yt++}` || s.uidEvent || Yt++;
}
function ye(s) {
  const t = Se(s);
  return s.uidEvent = t, At[t] = At[t] || {}, At[t];
}
function hs(s, t) {
  return function e(n) {
    return Vt(n, {
      delegateTarget: s
    }), e.oneOff && o.off(s, n.type, t), t.apply(s, [n]);
  };
}
function us(s, t, e) {
  return function n(i) {
    const a = s.querySelectorAll(t);
    for (let {
      target: r
    } = i; r && r !== this; r = r.parentNode)
      for (const c of a)
        if (c === r)
          return Vt(i, {
            delegateTarget: r
          }), n.oneOff && o.off(s, i.type, t, e), e.apply(r, [i]);
  };
}
function Oe(s, t, e = null) {
  return Object.values(s).find((n) => n.callable === t && n.delegationSelector === e);
}
function De(s, t, e) {
  const n = typeof t == "string", i = n ? e : t || e;
  let a = we(s);
  return cs.has(a) || (a = s), [n, i, a];
}
function Bt(s, t, e, n, i) {
  if (typeof t != "string" || !s)
    return;
  let [a, r, c] = De(t, e, n);
  t in ve && (r = ((ze) => function(P) {
    if (!P.relatedTarget || P.relatedTarget !== P.delegateTarget && !P.delegateTarget.contains(P.relatedTarget))
      return ze.call(this, P);
  })(r));
  const _ = ye(s), f = _[c] || (_[c] = {}), h = Oe(f, r, a ? e : null);
  if (h) {
    h.oneOff = h.oneOff && i;
    return;
  }
  const T = Se(r, t.replace(rs, "")), g = a ? us(s, e, r) : hs(s, r);
  g.delegationSelector = a ? e : null, g.callable = r, g.oneOff = i, g.uidEvent = T, f[T] = g, s.addEventListener(c, g, a);
}
function Mt(s, t, e, n, i) {
  const a = Oe(t[e], n, i);
  a && (s.removeEventListener(e, a, !!i), delete t[e][a.uidEvent]);
}
function _s(s, t, e, n) {
  const i = t[e] || {};
  for (const [a, r] of Object.entries(i))
    a.includes(n) && Mt(s, t, e, r.callable, r.delegationSelector);
}
function we(s) {
  return s = s.replace(as, ""), ve[s] || s;
}
const o = {
  on(s, t, e, n) {
    Bt(s, t, e, n, !1);
  },
  one(s, t, e, n) {
    Bt(s, t, e, n, !0);
  },
  off(s, t, e, n) {
    if (typeof t != "string" || !s)
      return;
    const [i, a, r] = De(t, e, n), c = r !== t, _ = ye(s), f = _[r] || {}, h = t.startsWith(".");
    if (typeof a != "undefined") {
      if (!Object.keys(f).length)
        return;
      Mt(s, _, r, a, i ? e : null);
      return;
    }
    if (h)
      for (const T of Object.keys(_))
        _s(s, _, T, t.slice(1));
    for (const [T, g] of Object.entries(f)) {
      const J = T.replace(ls, "");
      (!c || t.includes(J)) && Mt(s, _, r, g.callable, g.delegationSelector);
    }
  },
  trigger(s, t, e) {
    if (typeof t != "string" || !s)
      return null;
    const n = Ne(), i = we(t), a = t !== i;
    let r = null, c = !0, _ = !0, f = !1;
    a && n && (r = n.Event(t, e), n(s).trigger(r), c = !r.isPropagationStopped(), _ = !r.isImmediatePropagationStopped(), f = r.isDefaultPrevented());
    const h = Vt(new Event(t, {
      bubbles: c,
      cancelable: !0
    }), e);
    return f && h.preventDefault(), _ && s.dispatchEvent(h), h.defaultPrevented && r && r.preventDefault(), h;
  }
};
function Vt(s, t = {}) {
  for (const [e, n] of Object.entries(t))
    try {
      s[e] = n;
    } catch (i) {
      Object.defineProperty(s, e, {
        configurable: !0,
        get() {
          return n;
        }
      });
    }
  return s;
}
function Ut(s) {
  if (s === "true")
    return !0;
  if (s === "false")
    return !1;
  if (s === Number(s).toString())
    return Number(s);
  if (s === "" || s === "null")
    return null;
  if (typeof s != "string")
    return s;
  try {
    return JSON.parse(decodeURIComponent(s));
  } catch (t) {
    return s;
  }
}
function Tt(s) {
  return s.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
}
const C = {
  setDataAttribute(s, t, e) {
    s.setAttribute(`data-bs-${Tt(t)}`, e);
  },
  removeDataAttribute(s, t) {
    s.removeAttribute(`data-bs-${Tt(t)}`);
  },
  getDataAttributes(s) {
    if (!s)
      return {};
    const t = {}, e = Object.keys(s.dataset).filter((n) => n.startsWith("bs") && !n.startsWith("bsConfig"));
    for (const n of e) {
      let i = n.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = Ut(s.dataset[n]);
    }
    return t;
  },
  getDataAttribute(s, t) {
    return Ut(s.getAttribute(`data-bs-${Tt(t)}`));
  }
};
class Q {
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
    const n = N(e) ? C.getDataAttribute(e, "config") : {};
    return u(u(u(u({}, this.constructor.Default), typeof n == "object" ? n : {}), N(e) ? C.getDataAttributes(e) : {}), typeof t == "object" ? t : {});
  }
  _typeCheckConfig(t, e = this.constructor.DefaultType) {
    for (const [n, i] of Object.entries(e)) {
      const a = t[n], r = N(a) ? "element" : ss(a);
      if (!new RegExp(i).test(r))
        throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${r}" but expected type "${i}".`);
    }
  }
}
const ds = "5.3.2";
class A extends Q {
  constructor(t, e) {
    super(), t = y(t), t && (this._element = t, this._config = this._getConfig(e), mt.set(this._element, this.constructor.DATA_KEY, this));
  }
  // Public
  dispose() {
    mt.remove(this._element, this.constructor.DATA_KEY), o.off(this._element, this.constructor.EVENT_KEY);
    for (const t of Object.getOwnPropertyNames(this))
      this[t] = null;
  }
  _queueCallback(t, e, n = !0) {
    Ce(t, e, n);
  }
  _getConfig(t) {
    return t = this._mergeConfigObj(t, this._element), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  // Static
  static getInstance(t) {
    return mt.get(y(t), this.DATA_KEY);
  }
  static getOrCreateInstance(t, e = {}) {
    return this.getInstance(t) || new this(t, typeof e == "object" ? e : null);
  }
  static get VERSION() {
    return ds;
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
const bt = (s) => {
  let t = s.getAttribute("data-bs-target");
  if (!t || t === "#") {
    let e = s.getAttribute("href");
    if (!e || !e.includes("#") && !e.startsWith("."))
      return null;
    e.includes("#") && !e.startsWith("#") && (e = `#${e.split("#")[1]}`), t = e && e !== "#" ? Ae(e.trim()) : null;
  }
  return t;
}, l = {
  find(s, t = document.documentElement) {
    return [].concat(...Element.prototype.querySelectorAll.call(t, s));
  },
  findOne(s, t = document.documentElement) {
    return Element.prototype.querySelector.call(t, s);
  },
  children(s, t) {
    return [].concat(...s.children).filter((e) => e.matches(t));
  },
  parents(s, t) {
    const e = [];
    let n = s.parentNode.closest(t);
    for (; n; )
      e.push(n), n = n.parentNode.closest(t);
    return e;
  },
  prev(s, t) {
    let e = s.previousElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.previousElementSibling;
    }
    return [];
  },
  // TODO: this is now unused; remove later along with prev()
  next(s, t) {
    let e = s.nextElementSibling;
    for (; e; ) {
      if (e.matches(t))
        return [e];
      e = e.nextElementSibling;
    }
    return [];
  },
  focusableChildren(s) {
    const t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((e) => `${e}:not([tabindex^="-"])`).join(",");
    return this.find(t, s).filter((e) => !O(e) && Y(e));
  },
  getSelectorFromElement(s) {
    const t = bt(s);
    return t && l.findOne(t) ? t : null;
  },
  getElementFromSelector(s) {
    const t = bt(s);
    return t ? l.findOne(t) : null;
  },
  getMultipleElementsFromSelector(s) {
    const t = bt(s);
    return t ? l.find(t) : [];
  }
}, _t = (s, t = "hide") => {
  const e = `click.dismiss${s.EVENT_KEY}`, n = s.NAME;
  o.on(document, e, `[data-bs-dismiss="${n}"]`, function(i) {
    if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), O(this))
      return;
    const a = l.getElementFromSelector(this) || this.closest(`.${n}`);
    s.getOrCreateInstance(a)[t]();
  });
}, fs = "alert", ps = "bs.alert", Le = `.${ps}`, Es = `close${Le}`, ms = `closed${Le}`, gs = "fade", As = "show";
class dt extends A {
  // Getters
  static get NAME() {
    return fs;
  }
  // Public
  close() {
    if (o.trigger(this._element, Es).defaultPrevented)
      return;
    this._element.classList.remove(As);
    const e = this._element.classList.contains(gs);
    this._queueCallback(() => this._destroyElement(), this._element, e);
  }
  // Private
  _destroyElement() {
    this._element.remove(), o.trigger(this._element, ms), this.dispose();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = dt.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
_t(dt, "close");
m(dt);
const Ts = "button", bs = "bs.button", Ns = `.${bs}`, Cs = ".data-api", vs = "active", jt = '[data-bs-toggle="button"]', Ss = `click${Ns}${Cs}`;
class ft extends A {
  // Getters
  static get NAME() {
    return Ts;
  }
  // Public
  toggle() {
    this._element.setAttribute("aria-pressed", this._element.classList.toggle(vs));
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = ft.getOrCreateInstance(this);
      t === "toggle" && e[t]();
    });
  }
}
o.on(document, Ss, jt, (s) => {
  s.preventDefault();
  const t = s.target.closest(jt);
  ft.getOrCreateInstance(t).toggle();
});
m(ft);
const ys = "swipe", B = ".bs.swipe", Os = `touchstart${B}`, Ds = `touchmove${B}`, ws = `touchend${B}`, Ls = `pointerdown${B}`, $s = `pointerup${B}`, Is = "touch", Ms = "pen", Rs = "pointer-event", Ps = 40, ks = {
  endCallback: null,
  leftCallback: null,
  rightCallback: null
}, Vs = {
  endCallback: "(function|null)",
  leftCallback: "(function|null)",
  rightCallback: "(function|null)"
};
class ht extends Q {
  constructor(t, e) {
    super(), this._element = t, !(!t || !ht.isSupported()) && (this._config = this._getConfig(e), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
  }
  // Getters
  static get Default() {
    return ks;
  }
  static get DefaultType() {
    return Vs;
  }
  static get NAME() {
    return ys;
  }
  // Public
  dispose() {
    o.off(this._element, B);
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
    this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), d(this._config.endCallback);
  }
  _move(t) {
    this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
  }
  _handleSwipe() {
    const t = Math.abs(this._deltaX);
    if (t <= Ps)
      return;
    const e = t / this._deltaX;
    this._deltaX = 0, e && d(e > 0 ? this._config.rightCallback : this._config.leftCallback);
  }
  _initEvents() {
    this._supportPointerEvents ? (o.on(this._element, Ls, (t) => this._start(t)), o.on(this._element, $s, (t) => this._end(t)), this._element.classList.add(Rs)) : (o.on(this._element, Os, (t) => this._start(t)), o.on(this._element, Ds, (t) => this._move(t)), o.on(this._element, ws, (t) => this._end(t)));
  }
  _eventIsPointerPenTouch(t) {
    return this._supportPointerEvents && (t.pointerType === Ms || t.pointerType === Is);
  }
  // Static
  static isSupported() {
    return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
  }
}
const Hs = "carousel", xs = "bs.carousel", w = `.${xs}`, $e = ".data-api", Ks = "ArrowLeft", Ws = "ArrowRight", Fs = 500, j = "next", k = "prev", H = "left", at = "right", Ys = `slide${w}`, Nt = `slid${w}`, Bs = `keydown${w}`, Us = `mouseenter${w}`, js = `mouseleave${w}`, Gs = `dragstart${w}`, zs = `load${w}${$e}`, qs = `click${w}${$e}`, Ie = "carousel", et = "active", Qs = "slide", Xs = "carousel-item-end", Zs = "carousel-item-start", Js = "carousel-item-next", tn = "carousel-item-prev", Me = ".active", Re = ".carousel-item", en = Me + Re, sn = ".carousel-item img", nn = ".carousel-indicators", on = "[data-bs-slide], [data-bs-slide-to]", rn = '[data-bs-ride="carousel"]', an = {
  [Ks]: at,
  [Ws]: H
}, ln = {
  interval: 5e3,
  keyboard: !0,
  pause: "hover",
  ride: !1,
  touch: !0,
  wrap: !0
}, cn = {
  interval: "(number|boolean)",
  // TODO:v6 remove boolean support
  keyboard: "boolean",
  pause: "(string|boolean)",
  ride: "(boolean|string)",
  touch: "boolean",
  wrap: "boolean"
};
class X extends A {
  constructor(t, e) {
    super(t, e), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = l.findOne(nn, this._element), this._addEventListeners(), this._config.ride === Ie && this.cycle();
  }
  // Getters
  static get Default() {
    return ln;
  }
  static get DefaultType() {
    return cn;
  }
  static get NAME() {
    return Hs;
  }
  // Public
  next() {
    this._slide(j);
  }
  nextWhenVisible() {
    !document.hidden && Y(this._element) && this.next();
  }
  prev() {
    this._slide(k);
  }
  pause() {
    this._isSliding && Te(this._element), this._clearInterval();
  }
  cycle() {
    this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
  }
  _maybeEnableCycle() {
    if (this._config.ride) {
      if (this._isSliding) {
        o.one(this._element, Nt, () => this.cycle());
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
      o.one(this._element, Nt, () => this.to(t));
      return;
    }
    const n = this._getItemIndex(this._getActive());
    if (n === t)
      return;
    const i = t > n ? j : k;
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
    this._config.keyboard && o.on(this._element, Bs, (t) => this._keydown(t)), this._config.pause === "hover" && (o.on(this._element, Us, () => this.pause()), o.on(this._element, js, () => this._maybeEnableCycle())), this._config.touch && ht.isSupported() && this._addTouchEventListeners();
  }
  _addTouchEventListeners() {
    for (const n of l.find(sn, this._element))
      o.on(n, Gs, (i) => i.preventDefault());
    const e = {
      leftCallback: () => this._slide(this._directionToOrder(H)),
      rightCallback: () => this._slide(this._directionToOrder(at)),
      endCallback: () => {
        this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), Fs + this._config.interval));
      }
    };
    this._swipeHelper = new ht(this._element, e);
  }
  _keydown(t) {
    if (/input|textarea/i.test(t.target.tagName))
      return;
    const e = an[t.key];
    e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
  }
  _getItemIndex(t) {
    return this._getItems().indexOf(t);
  }
  _setActiveIndicatorElement(t) {
    if (!this._indicatorsElement)
      return;
    const e = l.findOne(Me, this._indicatorsElement);
    e.classList.remove(et), e.removeAttribute("aria-current");
    const n = l.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
    n && (n.classList.add(et), n.setAttribute("aria-current", "true"));
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
    const n = this._getActive(), i = t === j, a = e || kt(this._getItems(), n, i, this._config.wrap);
    if (a === n)
      return;
    const r = this._getItemIndex(a), c = (J) => o.trigger(this._element, J, {
      relatedTarget: a,
      direction: this._orderToDirection(t),
      from: this._getItemIndex(n),
      to: r
    });
    if (c(Ys).defaultPrevented || !n || !a)
      return;
    const f = !!this._interval;
    this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(r), this._activeElement = a;
    const h = i ? Zs : Xs, T = i ? Js : tn;
    a.classList.add(T), q(a), n.classList.add(h), a.classList.add(h);
    const g = () => {
      a.classList.remove(h, T), a.classList.add(et), n.classList.remove(et, T, h), this._isSliding = !1, c(Nt);
    };
    this._queueCallback(g, n, this._isAnimated()), f && this.cycle();
  }
  _isAnimated() {
    return this._element.classList.contains(Qs);
  }
  _getActive() {
    return l.findOne(en, this._element);
  }
  _getItems() {
    return l.find(Re, this._element);
  }
  _clearInterval() {
    this._interval && (clearInterval(this._interval), this._interval = null);
  }
  _directionToOrder(t) {
    return p() ? t === H ? k : j : t === H ? j : k;
  }
  _orderToDirection(t) {
    return p() ? t === k ? H : at : t === k ? at : H;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = X.getOrCreateInstance(this, t);
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
o.on(document, qs, on, function(s) {
  const t = l.getElementFromSelector(this);
  if (!t || !t.classList.contains(Ie))
    return;
  s.preventDefault();
  const e = X.getOrCreateInstance(t), n = this.getAttribute("data-bs-slide-to");
  if (n) {
    e.to(n), e._maybeEnableCycle();
    return;
  }
  if (C.getDataAttribute(this, "slide") === "next") {
    e.next(), e._maybeEnableCycle();
    return;
  }
  e.prev(), e._maybeEnableCycle();
});
o.on(window, zs, () => {
  const s = l.find(rn);
  for (const t of s)
    X.getOrCreateInstance(t);
});
m(X);
const hn = "collapse", un = "bs.collapse", Z = `.${un}`, _n = ".data-api", dn = `show${Z}`, fn = `shown${Z}`, pn = `hide${Z}`, En = `hidden${Z}`, mn = `click${Z}${_n}`, Ct = "show", K = "collapse", st = "collapsing", gn = "collapsed", An = `:scope .${K} .${K}`, Tn = "collapse-horizontal", bn = "width", Nn = "height", Cn = ".collapse.show, .collapse.collapsing", Rt = '[data-bs-toggle="collapse"]', vn = {
  parent: null,
  toggle: !0
}, Sn = {
  parent: "(null|element)",
  toggle: "boolean"
};
class z extends A {
  constructor(t, e) {
    super(t, e), this._isTransitioning = !1, this._triggerArray = [];
    const n = l.find(Rt);
    for (const i of n) {
      const a = l.getSelectorFromElement(i), r = l.find(a).filter((c) => c === this._element);
      a !== null && r.length && this._triggerArray.push(i);
    }
    this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
  }
  // Getters
  static get Default() {
    return vn;
  }
  static get DefaultType() {
    return Sn;
  }
  static get NAME() {
    return hn;
  }
  // Public
  toggle() {
    this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (this._isTransitioning || this._isShown())
      return;
    let t = [];
    if (this._config.parent && (t = this._getFirstLevelChildren(Cn).filter((c) => c !== this._element).map((c) => z.getOrCreateInstance(c, {
      toggle: !1
    }))), t.length && t[0]._isTransitioning || o.trigger(this._element, dn).defaultPrevented)
      return;
    for (const c of t)
      c.hide();
    const n = this._getDimension();
    this._element.classList.remove(K), this._element.classList.add(st), this._element.style[n] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
    const i = () => {
      this._isTransitioning = !1, this._element.classList.remove(st), this._element.classList.add(K, Ct), this._element.style[n] = "", o.trigger(this._element, fn);
    }, r = `scroll${n[0].toUpperCase() + n.slice(1)}`;
    this._queueCallback(i, this._element, !0), this._element.style[n] = `${this._element[r]}px`;
  }
  hide() {
    if (this._isTransitioning || !this._isShown() || o.trigger(this._element, pn).defaultPrevented)
      return;
    const e = this._getDimension();
    this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, q(this._element), this._element.classList.add(st), this._element.classList.remove(K, Ct);
    for (const i of this._triggerArray) {
      const a = l.getElementFromSelector(i);
      a && !this._isShown(a) && this._addAriaAndCollapsedClass([i], !1);
    }
    this._isTransitioning = !0;
    const n = () => {
      this._isTransitioning = !1, this._element.classList.remove(st), this._element.classList.add(K), o.trigger(this._element, En);
    };
    this._element.style[e] = "", this._queueCallback(n, this._element, !0);
  }
  _isShown(t = this._element) {
    return t.classList.contains(Ct);
  }
  // Private
  _configAfterMerge(t) {
    return t.toggle = !!t.toggle, t.parent = y(t.parent), t;
  }
  _getDimension() {
    return this._element.classList.contains(Tn) ? bn : Nn;
  }
  _initializeChildren() {
    if (!this._config.parent)
      return;
    const t = this._getFirstLevelChildren(Rt);
    for (const e of t) {
      const n = l.getElementFromSelector(e);
      n && this._addAriaAndCollapsedClass([e], this._isShown(n));
    }
  }
  _getFirstLevelChildren(t) {
    const e = l.find(An, this._config.parent);
    return l.find(t, this._config.parent).filter((n) => !e.includes(n));
  }
  _addAriaAndCollapsedClass(t, e) {
    if (t.length)
      for (const n of t)
        n.classList.toggle(gn, !e), n.setAttribute("aria-expanded", e);
  }
  // Static
  static jQueryInterface(t) {
    const e = {};
    return typeof t == "string" && /show|hide/.test(t) && (e.toggle = !1), this.each(function() {
      const n = z.getOrCreateInstance(this, e);
      if (typeof t == "string") {
        if (typeof n[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        n[t]();
      }
    });
  }
}
o.on(document, mn, Rt, function(s) {
  (s.target.tagName === "A" || s.delegateTarget && s.delegateTarget.tagName === "A") && s.preventDefault();
  for (const t of l.getMultipleElementsFromSelector(this))
    z.getOrCreateInstance(t, {
      toggle: !1
    }).toggle();
});
m(z);
const Gt = "dropdown", yn = "bs.dropdown", M = `.${yn}`, Ht = ".data-api", On = "Escape", zt = "Tab", Dn = "ArrowUp", qt = "ArrowDown", wn = 2, Ln = `hide${M}`, $n = `hidden${M}`, In = `show${M}`, Mn = `shown${M}`, Pe = `click${M}${Ht}`, ke = `keydown${M}${Ht}`, Rn = `keyup${M}${Ht}`, x = "show", Pn = "dropup", kn = "dropend", Vn = "dropstart", Hn = "dropup-center", xn = "dropdown-center", $ = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Kn = `${$}.${x}`, lt = ".dropdown-menu", Wn = ".navbar", Fn = ".navbar-nav", Yn = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", Bn = p() ? "top-end" : "top-start", Un = p() ? "top-start" : "top-end", jn = p() ? "bottom-end" : "bottom-start", Gn = p() ? "bottom-start" : "bottom-end", zn = p() ? "left-start" : "right-start", qn = p() ? "right-start" : "left-start", Qn = "top", Xn = "bottom", Zn = {
  autoClose: !0,
  boundary: "clippingParents",
  display: "dynamic",
  offset: [0, 2],
  popperConfig: null,
  reference: "toggle"
}, Jn = {
  autoClose: "(boolean|string)",
  boundary: "(string|element)",
  display: "string",
  offset: "(array|string|function)",
  popperConfig: "(null|object|function)",
  reference: "(string|element|object)"
};
class b extends A {
  constructor(t, e) {
    super(t, e), this._popper = null, this._parent = this._element.parentNode, this._menu = l.next(this._element, lt)[0] || l.prev(this._element, lt)[0] || l.findOne(lt, this._parent), this._inNavbar = this._detectNavbar();
  }
  // Getters
  static get Default() {
    return Zn;
  }
  static get DefaultType() {
    return Jn;
  }
  static get NAME() {
    return Gt;
  }
  // Public
  toggle() {
    return this._isShown() ? this.hide() : this.show();
  }
  show() {
    if (O(this._element) || this._isShown())
      return;
    const t = {
      relatedTarget: this._element
    };
    if (!o.trigger(this._element, In, t).defaultPrevented) {
      if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(Fn))
        for (const n of [].concat(...document.body.children))
          o.on(n, "mouseover", ct);
      this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(x), this._element.classList.add(x), o.trigger(this._element, Mn, t);
    }
  }
  hide() {
    if (O(this._element) || !this._isShown())
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
    if (!o.trigger(this._element, Ln, t).defaultPrevented) {
      if ("ontouchstart" in document.documentElement)
        for (const n of [].concat(...document.body.children))
          o.off(n, "mouseover", ct);
      this._popper && this._popper.destroy(), this._menu.classList.remove(x), this._element.classList.remove(x), this._element.setAttribute("aria-expanded", "false"), C.removeDataAttribute(this._menu, "popper"), o.trigger(this._element, $n, t);
    }
  }
  _getConfig(t) {
    if (t = super._getConfig(t), typeof t.reference == "object" && !N(t.reference) && typeof t.reference.getBoundingClientRect != "function")
      throw new TypeError(`${Gt.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
    return t;
  }
  _createPopper() {
    if (typeof me == "undefined")
      throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
    let t = this._element;
    this._config.reference === "parent" ? t = this._parent : N(this._config.reference) ? t = y(this._config.reference) : typeof this._config.reference == "object" && (t = this._config.reference);
    const e = this._getPopperConfig();
    this._popper = ge(t, this._menu, e);
  }
  _isShown() {
    return this._menu.classList.contains(x);
  }
  _getPlacement() {
    const t = this._parent;
    if (t.classList.contains(kn))
      return zn;
    if (t.classList.contains(Vn))
      return qn;
    if (t.classList.contains(Hn))
      return Qn;
    if (t.classList.contains(xn))
      return Xn;
    const e = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
    return t.classList.contains(Pn) ? e ? Un : Bn : e ? Gn : jn;
  }
  _detectNavbar() {
    return this._element.closest(Wn) !== null;
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
    return (this._inNavbar || this._config.display === "static") && (C.setDataAttribute(this._menu, "popper", "static"), t.modifiers = [{
      name: "applyStyles",
      enabled: !1
    }]), u(u({}, t), d(this._config.popperConfig, [t]));
  }
  _selectMenuItem({
    key: t,
    target: e
  }) {
    const n = l.find(Yn, this._menu).filter((i) => Y(i));
    n.length && kt(n, e, t === qt, !n.includes(e)).focus();
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = b.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
  static clearMenus(t) {
    if (t.button === wn || t.type === "keyup" && t.key !== zt)
      return;
    const e = l.find(Kn);
    for (const n of e) {
      const i = b.getInstance(n);
      if (!i || i._config.autoClose === !1)
        continue;
      const a = t.composedPath(), r = a.includes(i._menu);
      if (a.includes(i._element) || i._config.autoClose === "inside" && !r || i._config.autoClose === "outside" && r || i._menu.contains(t.target) && (t.type === "keyup" && t.key === zt || /input|select|option|textarea|form/i.test(t.target.tagName)))
        continue;
      const c = {
        relatedTarget: i._element
      };
      t.type === "click" && (c.clickEvent = t), i._completeHide(c);
    }
  }
  static dataApiKeydownHandler(t) {
    const e = /input|textarea/i.test(t.target.tagName), n = t.key === On, i = [Dn, qt].includes(t.key);
    if (!i && !n || e && !n)
      return;
    t.preventDefault();
    const a = this.matches($) ? this : l.prev(this, $)[0] || l.next(this, $)[0] || l.findOne($, t.delegateTarget.parentNode), r = b.getOrCreateInstance(a);
    if (i) {
      t.stopPropagation(), r.show(), r._selectMenuItem(t);
      return;
    }
    r._isShown() && (t.stopPropagation(), r.hide(), a.focus());
  }
}
o.on(document, ke, $, b.dataApiKeydownHandler);
o.on(document, ke, lt, b.dataApiKeydownHandler);
o.on(document, Pe, b.clearMenus);
o.on(document, Rn, b.clearMenus);
o.on(document, Pe, $, function(s) {
  s.preventDefault(), b.getOrCreateInstance(this).toggle();
});
m(b);
const Ve = "backdrop", ti = "fade", Qt = "show", Xt = `mousedown.bs.${Ve}`, ei = {
  className: "modal-backdrop",
  clickCallback: null,
  isAnimated: !1,
  isVisible: !0,
  // if false, we use the backdrop helper without adding any element to the dom
  rootElement: "body"
  // give the choice to place backdrop under different elements
}, si = {
  className: "string",
  clickCallback: "(function|null)",
  isAnimated: "boolean",
  isVisible: "boolean",
  rootElement: "(element|string)"
};
class He extends Q {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
  }
  // Getters
  static get Default() {
    return ei;
  }
  static get DefaultType() {
    return si;
  }
  static get NAME() {
    return Ve;
  }
  // Public
  show(t) {
    if (!this._config.isVisible) {
      d(t);
      return;
    }
    this._append();
    const e = this._getElement();
    this._config.isAnimated && q(e), e.classList.add(Qt), this._emulateAnimation(() => {
      d(t);
    });
  }
  hide(t) {
    if (!this._config.isVisible) {
      d(t);
      return;
    }
    this._getElement().classList.remove(Qt), this._emulateAnimation(() => {
      this.dispose(), d(t);
    });
  }
  dispose() {
    this._isAppended && (o.off(this._element, Xt), this._element.remove(), this._isAppended = !1);
  }
  // Private
  _getElement() {
    if (!this._element) {
      const t = document.createElement("div");
      t.className = this._config.className, this._config.isAnimated && t.classList.add(ti), this._element = t;
    }
    return this._element;
  }
  _configAfterMerge(t) {
    return t.rootElement = y(t.rootElement), t;
  }
  _append() {
    if (this._isAppended)
      return;
    const t = this._getElement();
    this._config.rootElement.append(t), o.on(t, Xt, () => {
      d(this._config.clickCallback);
    }), this._isAppended = !0;
  }
  _emulateAnimation(t) {
    Ce(t, this._getElement(), this._config.isAnimated);
  }
}
const ni = "focustrap", ii = "bs.focustrap", ut = `.${ii}`, oi = `focusin${ut}`, ri = `keydown.tab${ut}`, ai = "Tab", li = "forward", Zt = "backward", ci = {
  autofocus: !0,
  trapElement: null
  // The element to trap focus inside of
}, hi = {
  autofocus: "boolean",
  trapElement: "element"
};
class xe extends Q {
  constructor(t) {
    super(), this._config = this._getConfig(t), this._isActive = !1, this._lastTabNavDirection = null;
  }
  // Getters
  static get Default() {
    return ci;
  }
  static get DefaultType() {
    return hi;
  }
  static get NAME() {
    return ni;
  }
  // Public
  activate() {
    this._isActive || (this._config.autofocus && this._config.trapElement.focus(), o.off(document, ut), o.on(document, oi, (t) => this._handleFocusin(t)), o.on(document, ri, (t) => this._handleKeydown(t)), this._isActive = !0);
  }
  deactivate() {
    this._isActive && (this._isActive = !1, o.off(document, ut));
  }
  // Private
  _handleFocusin(t) {
    const {
      trapElement: e
    } = this._config;
    if (t.target === document || t.target === e || e.contains(t.target))
      return;
    const n = l.focusableChildren(e);
    n.length === 0 ? e.focus() : this._lastTabNavDirection === Zt ? n[n.length - 1].focus() : n[0].focus();
  }
  _handleKeydown(t) {
    t.key === ai && (this._lastTabNavDirection = t.shiftKey ? Zt : li);
  }
}
const Jt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", te = ".sticky-top", nt = "padding-right", ee = "margin-right";
class Pt {
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
    this._disableOverFlow(), this._setElementAttributes(this._element, nt, (e) => e + t), this._setElementAttributes(Jt, nt, (e) => e + t), this._setElementAttributes(te, ee, (e) => e - t);
  }
  reset() {
    this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, nt), this._resetElementAttributes(Jt, nt), this._resetElementAttributes(te, ee);
  }
  isOverflowing() {
    return this.getWidth() > 0;
  }
  // Private
  _disableOverFlow() {
    this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
  }
  _setElementAttributes(t, e, n) {
    const i = this.getWidth(), a = (r) => {
      if (r !== this._element && window.innerWidth > r.clientWidth + i)
        return;
      this._saveInitialAttribute(r, e);
      const c = window.getComputedStyle(r).getPropertyValue(e);
      r.style.setProperty(e, `${n(Number.parseFloat(c))}px`);
    };
    this._applyManipulationCallback(t, a);
  }
  _saveInitialAttribute(t, e) {
    const n = t.style.getPropertyValue(e);
    n && C.setDataAttribute(t, e, n);
  }
  _resetElementAttributes(t, e) {
    const n = (i) => {
      const a = C.getDataAttribute(i, e);
      if (a === null) {
        i.style.removeProperty(e);
        return;
      }
      C.removeDataAttribute(i, e), i.style.setProperty(e, a);
    };
    this._applyManipulationCallback(t, n);
  }
  _applyManipulationCallback(t, e) {
    if (N(t)) {
      e(t);
      return;
    }
    for (const n of l.find(t, this._element))
      e(n);
  }
}
const ui = "modal", _i = "bs.modal", E = `.${_i}`, di = ".data-api", fi = "Escape", pi = `hide${E}`, Ei = `hidePrevented${E}`, Ke = `hidden${E}`, We = `show${E}`, mi = `shown${E}`, gi = `resize${E}`, Ai = `click.dismiss${E}`, Ti = `mousedown.dismiss${E}`, bi = `keydown.dismiss${E}`, Ni = `click${E}${di}`, se = "modal-open", Ci = "fade", ne = "show", vt = "modal-static", vi = ".modal.show", Si = ".modal-dialog", yi = ".modal-body", Oi = '[data-bs-toggle="modal"]', Di = {
  backdrop: !0,
  focus: !0,
  keyboard: !0
}, wi = {
  backdrop: "(boolean|string)",
  focus: "boolean",
  keyboard: "boolean"
};
class W extends A {
  constructor(t, e) {
    super(t, e), this._dialog = l.findOne(Si, this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new Pt(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Di;
  }
  static get DefaultType() {
    return wi;
  }
  static get NAME() {
    return ui;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    this._isShown || this._isTransitioning || o.trigger(this._element, We, {
      relatedTarget: t
    }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(se), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
  }
  hide() {
    !this._isShown || this._isTransitioning || o.trigger(this._element, pi).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(ne), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated()));
  }
  dispose() {
    o.off(window, E), o.off(this._dialog, E), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
  }
  handleUpdate() {
    this._adjustDialog();
  }
  // Private
  _initializeBackDrop() {
    return new He({
      isVisible: !!this._config.backdrop,
      // 'static' option will be translated to true, and booleans will keep their value,
      isAnimated: this._isAnimated()
    });
  }
  _initializeFocusTrap() {
    return new xe({
      trapElement: this._element
    });
  }
  _showElement(t) {
    document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
    const e = l.findOne(yi, this._dialog);
    e && (e.scrollTop = 0), q(this._element), this._element.classList.add(ne);
    const n = () => {
      this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, o.trigger(this._element, mi, {
        relatedTarget: t
      });
    };
    this._queueCallback(n, this._dialog, this._isAnimated());
  }
  _addEventListeners() {
    o.on(this._element, bi, (t) => {
      if (t.key === fi) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        this._triggerBackdropTransition();
      }
    }), o.on(window, gi, () => {
      this._isShown && !this._isTransitioning && this._adjustDialog();
    }), o.on(this._element, Ti, (t) => {
      o.one(this._element, Ai, (e) => {
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
      document.body.classList.remove(se), this._resetAdjustments(), this._scrollBar.reset(), o.trigger(this._element, Ke);
    });
  }
  _isAnimated() {
    return this._element.classList.contains(Ci);
  }
  _triggerBackdropTransition() {
    if (o.trigger(this._element, Ei).defaultPrevented)
      return;
    const e = this._element.scrollHeight > document.documentElement.clientHeight, n = this._element.style.overflowY;
    n === "hidden" || this._element.classList.contains(vt) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(vt), this._queueCallback(() => {
      this._element.classList.remove(vt), this._queueCallback(() => {
        this._element.style.overflowY = n;
      }, this._dialog);
    }, this._dialog), this._element.focus());
  }
  /**
   * The following methods are used to handle overflowing modals
   */
  _adjustDialog() {
    const t = this._element.scrollHeight > document.documentElement.clientHeight, e = this._scrollBar.getWidth(), n = e > 0;
    if (n && !t) {
      const i = p() ? "paddingLeft" : "paddingRight";
      this._element.style[i] = `${e}px`;
    }
    if (!n && t) {
      const i = p() ? "paddingRight" : "paddingLeft";
      this._element.style[i] = `${e}px`;
    }
  }
  _resetAdjustments() {
    this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
  }
  // Static
  static jQueryInterface(t, e) {
    return this.each(function() {
      const n = W.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof n[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        n[t](e);
      }
    });
  }
}
o.on(document, Ni, Oi, function(s) {
  const t = l.getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && s.preventDefault(), o.one(t, We, (i) => {
    i.defaultPrevented || o.one(t, Ke, () => {
      Y(this) && this.focus();
    });
  });
  const e = l.findOne(vi);
  e && W.getInstance(e).hide(), W.getOrCreateInstance(t).toggle(this);
});
_t(W);
m(W);
const Li = "offcanvas", $i = "bs.offcanvas", v = `.${$i}`, Fe = ".data-api", Ii = `load${v}${Fe}`, Mi = "Escape", ie = "show", oe = "showing", re = "hiding", Ri = "offcanvas-backdrop", Ye = ".offcanvas.show", Pi = `show${v}`, ki = `shown${v}`, Vi = `hide${v}`, ae = `hidePrevented${v}`, Be = `hidden${v}`, Hi = `resize${v}`, xi = `click${v}${Fe}`, Ki = `keydown.dismiss${v}`, Wi = '[data-bs-toggle="offcanvas"]', Fi = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
}, Yi = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  scroll: "boolean"
};
class D extends A {
  constructor(t, e) {
    super(t, e), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
  }
  // Getters
  static get Default() {
    return Fi;
  }
  static get DefaultType() {
    return Yi;
  }
  static get NAME() {
    return Li;
  }
  // Public
  toggle(t) {
    return this._isShown ? this.hide() : this.show(t);
  }
  show(t) {
    if (this._isShown || o.trigger(this._element, Pi, {
      relatedTarget: t
    }).defaultPrevented)
      return;
    this._isShown = !0, this._backdrop.show(), this._config.scroll || new Pt().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(oe);
    const n = () => {
      (!this._config.scroll || this._config.backdrop) && this._focustrap.activate(), this._element.classList.add(ie), this._element.classList.remove(oe), o.trigger(this._element, ki, {
        relatedTarget: t
      });
    };
    this._queueCallback(n, this._element, !0);
  }
  hide() {
    if (!this._isShown || o.trigger(this._element, Vi).defaultPrevented)
      return;
    this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(re), this._backdrop.hide();
    const e = () => {
      this._element.classList.remove(ie, re), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new Pt().reset(), o.trigger(this._element, Be);
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
        o.trigger(this._element, ae);
        return;
      }
      this.hide();
    }, e = !!this._config.backdrop;
    return new He({
      className: Ri,
      isVisible: e,
      isAnimated: !0,
      rootElement: this._element.parentNode,
      clickCallback: e ? t : null
    });
  }
  _initializeFocusTrap() {
    return new xe({
      trapElement: this._element
    });
  }
  _addEventListeners() {
    o.on(this._element, Ki, (t) => {
      if (t.key === Mi) {
        if (this._config.keyboard) {
          this.hide();
          return;
        }
        o.trigger(this._element, ae);
      }
    });
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = D.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
o.on(document, xi, Wi, function(s) {
  const t = l.getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && s.preventDefault(), O(this))
    return;
  o.one(t, Be, () => {
    Y(this) && this.focus();
  });
  const e = l.findOne(Ye);
  e && e !== t && D.getInstance(e).hide(), D.getOrCreateInstance(t).toggle(this);
});
o.on(window, Ii, () => {
  for (const s of l.find(Ye))
    D.getOrCreateInstance(s).show();
});
o.on(window, Hi, () => {
  for (const s of l.find("[aria-modal][class*=show][class*=offcanvas-]"))
    getComputedStyle(s).position !== "fixed" && D.getOrCreateInstance(s).hide();
});
_t(D);
m(D);
const Bi = /^aria-[\w-]*$/i, Ue = {
  // Global attributes allowed on any supplied element below.
  "*": ["class", "dir", "id", "lang", "role", Bi],
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
}, Ui = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ji = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Gi = (s, t) => {
  const e = s.nodeName.toLowerCase();
  return t.includes(e) ? Ui.has(e) ? !!ji.test(s.nodeValue) : !0 : t.filter((n) => n instanceof RegExp).some((n) => n.test(e));
};
function zi(s, t, e) {
  if (!s.length)
    return s;
  if (e && typeof e == "function")
    return e(s);
  const i = new window.DOMParser().parseFromString(s, "text/html"), a = [].concat(...i.body.querySelectorAll("*"));
  for (const r of a) {
    const c = r.nodeName.toLowerCase();
    if (!Object.keys(t).includes(c)) {
      r.remove();
      continue;
    }
    const _ = [].concat(...r.attributes), f = [].concat(t["*"] || [], t[c] || []);
    for (const h of _)
      Gi(h, f) || r.removeAttribute(h.nodeName);
  }
  return i.body.innerHTML;
}
const qi = "TemplateFactory", Qi = {
  allowList: Ue,
  content: {},
  // { selector : text ,  selector2 : text2 , }
  extraClass: "",
  html: !1,
  sanitize: !0,
  sanitizeFn: null,
  template: "<div></div>"
}, Xi = {
  allowList: "object",
  content: "object",
  extraClass: "(string|function)",
  html: "boolean",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  template: "string"
}, Zi = {
  entry: "(string|element|function|null)",
  selector: "(string|element)"
};
class Ji extends Q {
  constructor(t) {
    super(), this._config = this._getConfig(t);
  }
  // Getters
  static get Default() {
    return Qi;
  }
  static get DefaultType() {
    return Xi;
  }
  static get NAME() {
    return qi;
  }
  // Public
  getContent() {
    return Object.values(this._config.content).map((t) => this._resolvePossibleFunction(t)).filter(Boolean);
  }
  hasContent() {
    return this.getContent().length > 0;
  }
  changeContent(t) {
    return this._checkContent(t), this._config.content = u(u({}, this._config.content), t), this;
  }
  toHtml() {
    const t = document.createElement("div");
    t.innerHTML = this._maybeSanitize(this._config.template);
    for (const [i, a] of Object.entries(this._config.content))
      this._setContent(t, a, i);
    const e = t.children[0], n = this._resolvePossibleFunction(this._config.extraClass);
    return n && e.classList.add(...n.split(" ")), e;
  }
  // Private
  _typeCheckConfig(t) {
    super._typeCheckConfig(t), this._checkContent(t.content);
  }
  _checkContent(t) {
    for (const [e, n] of Object.entries(t))
      super._typeCheckConfig({
        selector: e,
        entry: n
      }, Zi);
  }
  _setContent(t, e, n) {
    const i = l.findOne(n, t);
    if (i) {
      if (e = this._resolvePossibleFunction(e), !e) {
        i.remove();
        return;
      }
      if (N(e)) {
        this._putElementInTemplate(y(e), i);
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
    return this._config.sanitize ? zi(t, this._config.allowList, this._config.sanitizeFn) : t;
  }
  _resolvePossibleFunction(t) {
    return d(t, [this]);
  }
  _putElementInTemplate(t, e) {
    if (this._config.html) {
      e.innerHTML = "", e.append(t);
      return;
    }
    e.textContent = t.textContent;
  }
}
const to = "tooltip", eo = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), St = "fade", so = "modal", it = "show", no = ".tooltip-inner", le = `.${so}`, ce = "hide.bs.modal", G = "hover", yt = "focus", io = "click", oo = "manual", ro = "hide", ao = "hidden", lo = "show", co = "shown", ho = "inserted", uo = "click", _o = "focusin", fo = "focusout", po = "mouseenter", Eo = "mouseleave", mo = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: p() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: p() ? "right" : "left"
}, go = {
  allowList: Ue,
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
}, Ao = {
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
class U extends A {
  constructor(t, e) {
    if (typeof me == "undefined")
      throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    super(t, e), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
  }
  // Getters
  static get Default() {
    return go;
  }
  static get DefaultType() {
    return Ao;
  }
  static get NAME() {
    return to;
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
    clearTimeout(this._timeout), o.off(this._element.closest(le), ce, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
  }
  show() {
    if (this._element.style.display === "none")
      throw new Error("Please use show on visible elements");
    if (!(this._isWithContent() && this._isEnabled))
      return;
    const t = o.trigger(this._element, this.constructor.eventName(lo)), n = (be(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
    if (t.defaultPrevented || !n)
      return;
    this._disposePopper();
    const i = this._getTipElement();
    this._element.setAttribute("aria-describedby", i.getAttribute("id"));
    const {
      container: a
    } = this._config;
    if (this._element.ownerDocument.documentElement.contains(this.tip) || (a.append(i), o.trigger(this._element, this.constructor.eventName(ho))), this._popper = this._createPopper(i), i.classList.add(it), "ontouchstart" in document.documentElement)
      for (const c of [].concat(...document.body.children))
        o.on(c, "mouseover", ct);
    const r = () => {
      o.trigger(this._element, this.constructor.eventName(co)), this._isHovered === !1 && this._leave(), this._isHovered = !1;
    };
    this._queueCallback(r, this.tip, this._isAnimated());
  }
  hide() {
    if (!this._isShown() || o.trigger(this._element, this.constructor.eventName(ro)).defaultPrevented)
      return;
    if (this._getTipElement().classList.remove(it), "ontouchstart" in document.documentElement)
      for (const i of [].concat(...document.body.children))
        o.off(i, "mouseover", ct);
    this._activeTrigger[io] = !1, this._activeTrigger[yt] = !1, this._activeTrigger[G] = !1, this._isHovered = null;
    const n = () => {
      this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), o.trigger(this._element, this.constructor.eventName(ao)));
    };
    this._queueCallback(n, this.tip, this._isAnimated());
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
    e.classList.remove(St, it), e.classList.add(`bs-${this.constructor.NAME}-auto`);
    const n = ns(this.constructor.NAME).toString();
    return e.setAttribute("id", n), this._isAnimated() && e.classList.add(St), e;
  }
  setContent(t) {
    this._newContent = t, this._isShown() && (this._disposePopper(), this.show());
  }
  _getTemplateFactory(t) {
    return this._templateFactory ? this._templateFactory.changeContent(t) : this._templateFactory = new Ji(tt(u({}, this._config), {
      // the `content` var has to be after `this._config`
      // to override config.content in case of popover
      content: t,
      extraClass: this._resolvePossibleFunction(this._config.customClass)
    })), this._templateFactory;
  }
  _getContentForTemplate() {
    return {
      [no]: this._getTitle()
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
    return this._config.animation || this.tip && this.tip.classList.contains(St);
  }
  _isShown() {
    return this.tip && this.tip.classList.contains(it);
  }
  _createPopper(t) {
    const e = d(this._config.placement, [this, t, this._element]), n = mo[e.toUpperCase()];
    return ge(this._element, t, this._getPopperConfig(n));
  }
  _getOffset() {
    const {
      offset: t
    } = this._config;
    return typeof t == "string" ? t.split(",").map((e) => Number.parseInt(e, 10)) : typeof t == "function" ? (e) => t(e, this._element) : t;
  }
  _resolvePossibleFunction(t) {
    return d(t, [this._element]);
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
        fn: (n) => {
          this._getTipElement().setAttribute("data-popper-placement", n.state.placement);
        }
      }]
    };
    return u(u({}, e), d(this._config.popperConfig, [e]));
  }
  _setListeners() {
    const t = this._config.trigger.split(" ");
    for (const e of t)
      if (e === "click")
        o.on(this._element, this.constructor.eventName(uo), this._config.selector, (n) => {
          this._initializeOnDelegatedTarget(n).toggle();
        });
      else if (e !== oo) {
        const n = e === G ? this.constructor.eventName(po) : this.constructor.eventName(_o), i = e === G ? this.constructor.eventName(Eo) : this.constructor.eventName(fo);
        o.on(this._element, n, this._config.selector, (a) => {
          const r = this._initializeOnDelegatedTarget(a);
          r._activeTrigger[a.type === "focusin" ? yt : G] = !0, r._enter();
        }), o.on(this._element, i, this._config.selector, (a) => {
          const r = this._initializeOnDelegatedTarget(a);
          r._activeTrigger[a.type === "focusout" ? yt : G] = r._element.contains(a.relatedTarget), r._leave();
        });
      }
    this._hideModalHandler = () => {
      this._element && this.hide();
    }, o.on(this._element.closest(le), ce, this._hideModalHandler);
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
    const e = C.getDataAttributes(this._element);
    for (const n of Object.keys(e))
      eo.has(n) && delete e[n];
    return t = u(u({}, e), typeof t == "object" && t ? t : {}), t = this._mergeConfigObj(t), t = this._configAfterMerge(t), this._typeCheckConfig(t), t;
  }
  _configAfterMerge(t) {
    return t.container = t.container === !1 ? document.body : y(t.container), typeof t.delay == "number" && (t.delay = {
      show: t.delay,
      hide: t.delay
    }), typeof t.title == "number" && (t.title = t.title.toString()), typeof t.content == "number" && (t.content = t.content.toString()), t;
  }
  _getDelegateConfig() {
    const t = {};
    for (const [e, n] of Object.entries(this._config))
      this.constructor.Default[e] !== n && (t[e] = n);
    return t.selector = !1, t.trigger = "manual", t;
  }
  _disposePopper() {
    this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = U.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
m(U);
const To = "popover", bo = ".popover-header", No = ".popover-body", Co = tt(u({}, U.Default), {
  content: "",
  offset: [0, 8],
  placement: "right",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
  trigger: "click"
}), vo = tt(u({}, U.DefaultType), {
  content: "(null|string|element|function)"
});
class xt extends U {
  // Getters
  static get Default() {
    return Co;
  }
  static get DefaultType() {
    return vo;
  }
  static get NAME() {
    return To;
  }
  // Overrides
  _isWithContent() {
    return this._getTitle() || this._getContent();
  }
  // Private
  _getContentForTemplate() {
    return {
      [bo]: this._getTitle(),
      [No]: this._getContent()
    };
  }
  _getContent() {
    return this._resolvePossibleFunction(this._config.content);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = xt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
m(xt);
const So = "scrollspy", yo = "bs.scrollspy", Kt = `.${yo}`, Oo = ".data-api", Do = `activate${Kt}`, he = `click${Kt}`, wo = `load${Kt}${Oo}`, Lo = "dropdown-item", V = "active", $o = '[data-bs-spy="scroll"]', Ot = "[href]", Io = ".nav, .list-group", ue = ".nav-link", Mo = ".nav-item", Ro = ".list-group-item", Po = `${ue}, ${Mo} > ${ue}, ${Ro}`, ko = ".dropdown", Vo = ".dropdown-toggle", Ho = {
  offset: null,
  // TODO: v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "0px 0px -25%",
  smoothScroll: !1,
  target: null,
  threshold: [0.1, 0.5, 1]
}, xo = {
  offset: "(number|null)",
  // TODO v6 @deprecated, keep it for backwards compatibility reasons
  rootMargin: "string",
  smoothScroll: "boolean",
  target: "element",
  threshold: "array"
};
class pt extends A {
  constructor(t, e) {
    super(t, e), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
      visibleEntryTop: 0,
      parentScrollTop: 0
    }, this.refresh();
  }
  // Getters
  static get Default() {
    return Ho;
  }
  static get DefaultType() {
    return xo;
  }
  static get NAME() {
    return So;
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
    return t.target = y(t.target) || document.body, t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin, typeof t.threshold == "string" && (t.threshold = t.threshold.split(",").map((e) => Number.parseFloat(e))), t;
  }
  _maybeEnableSmoothScroll() {
    this._config.smoothScroll && (o.off(this._config.target, he), o.on(this._config.target, he, Ot, (t) => {
      const e = this._observableSections.get(t.target.hash);
      if (e) {
        t.preventDefault();
        const n = this._rootElement || window, i = e.offsetTop - this._element.offsetTop;
        if (n.scrollTo) {
          n.scrollTo({
            top: i,
            behavior: "smooth"
          });
          return;
        }
        n.scrollTop = i;
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
    const e = (r) => this._targetLinks.get(`#${r.target.id}`), n = (r) => {
      this._previousScrollData.visibleEntryTop = r.target.offsetTop, this._process(e(r));
    }, i = (this._rootElement || document.documentElement).scrollTop, a = i >= this._previousScrollData.parentScrollTop;
    this._previousScrollData.parentScrollTop = i;
    for (const r of t) {
      if (!r.isIntersecting) {
        this._activeTarget = null, this._clearActiveClass(e(r));
        continue;
      }
      const c = r.target.offsetTop >= this._previousScrollData.visibleEntryTop;
      if (a && c) {
        if (n(r), !i)
          return;
        continue;
      }
      !a && !c && n(r);
    }
  }
  _initializeTargetsAndObservables() {
    this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
    const t = l.find(Ot, this._config.target);
    for (const e of t) {
      if (!e.hash || O(e))
        continue;
      const n = l.findOne(decodeURI(e.hash), this._element);
      Y(n) && (this._targetLinks.set(decodeURI(e.hash), e), this._observableSections.set(e.hash, n));
    }
  }
  _process(t) {
    this._activeTarget !== t && (this._clearActiveClass(this._config.target), this._activeTarget = t, t.classList.add(V), this._activateParents(t), o.trigger(this._element, Do, {
      relatedTarget: t
    }));
  }
  _activateParents(t) {
    if (t.classList.contains(Lo)) {
      l.findOne(Vo, t.closest(ko)).classList.add(V);
      return;
    }
    for (const e of l.parents(t, Io))
      for (const n of l.prev(e, Po))
        n.classList.add(V);
  }
  _clearActiveClass(t) {
    t.classList.remove(V);
    const e = l.find(`${Ot}.${V}`, t);
    for (const n of e)
      n.classList.remove(V);
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = pt.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
o.on(window, wo, () => {
  for (const s of l.find($o))
    pt.getOrCreateInstance(s);
});
m(pt);
const Ko = "tab", Wo = "bs.tab", R = `.${Wo}`, Fo = `hide${R}`, Yo = `hidden${R}`, Bo = `show${R}`, Uo = `shown${R}`, jo = `click${R}`, Go = `keydown${R}`, zo = `load${R}`, qo = "ArrowLeft", _e = "ArrowRight", Qo = "ArrowUp", de = "ArrowDown", Dt = "Home", fe = "End", I = "active", pe = "fade", wt = "show", Xo = "dropdown", je = ".dropdown-toggle", Zo = ".dropdown-menu", Lt = `:not(${je})`, Jo = '.list-group, .nav, [role="tablist"]', tr = ".nav-item, .list-group-item", er = `.nav-link${Lt}, .list-group-item${Lt}, [role="tab"]${Lt}`, Ge = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', $t = `${er}, ${Ge}`, sr = `.${I}[data-bs-toggle="tab"], .${I}[data-bs-toggle="pill"], .${I}[data-bs-toggle="list"]`;
class F extends A {
  constructor(t) {
    super(t), this._parent = this._element.closest(Jo), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), o.on(this._element, Go, (e) => this._keydown(e)));
  }
  // Getters
  static get NAME() {
    return Ko;
  }
  // Public
  show() {
    const t = this._element;
    if (this._elemIsActive(t))
      return;
    const e = this._getActiveElem(), n = e ? o.trigger(e, Fo, {
      relatedTarget: t
    }) : null;
    o.trigger(t, Bo, {
      relatedTarget: e
    }).defaultPrevented || n && n.defaultPrevented || (this._deactivate(e, t), this._activate(t, e));
  }
  // Private
  _activate(t, e) {
    if (!t)
      return;
    t.classList.add(I), this._activate(l.getElementFromSelector(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.add(wt);
        return;
      }
      t.removeAttribute("tabindex"), t.setAttribute("aria-selected", !0), this._toggleDropDown(t, !0), o.trigger(t, Uo, {
        relatedTarget: e
      });
    };
    this._queueCallback(n, t, t.classList.contains(pe));
  }
  _deactivate(t, e) {
    if (!t)
      return;
    t.classList.remove(I), t.blur(), this._deactivate(l.getElementFromSelector(t));
    const n = () => {
      if (t.getAttribute("role") !== "tab") {
        t.classList.remove(wt);
        return;
      }
      t.setAttribute("aria-selected", !1), t.setAttribute("tabindex", "-1"), this._toggleDropDown(t, !1), o.trigger(t, Yo, {
        relatedTarget: e
      });
    };
    this._queueCallback(n, t, t.classList.contains(pe));
  }
  _keydown(t) {
    if (![qo, _e, Qo, de, Dt, fe].includes(t.key))
      return;
    t.stopPropagation(), t.preventDefault();
    const e = this._getChildren().filter((i) => !O(i));
    let n;
    if ([Dt, fe].includes(t.key))
      n = e[t.key === Dt ? 0 : e.length - 1];
    else {
      const i = [_e, de].includes(t.key);
      n = kt(e, t.target, i, !0);
    }
    n && (n.focus({
      preventScroll: !0
    }), F.getOrCreateInstance(n).show());
  }
  _getChildren() {
    return l.find($t, this._parent);
  }
  _getActiveElem() {
    return this._getChildren().find((t) => this._elemIsActive(t)) || null;
  }
  _setInitialAttributes(t, e) {
    this._setAttributeIfNotExists(t, "role", "tablist");
    for (const n of e)
      this._setInitialAttributesOnChild(n);
  }
  _setInitialAttributesOnChild(t) {
    t = this._getInnerElement(t);
    const e = this._elemIsActive(t), n = this._getOuterElement(t);
    t.setAttribute("aria-selected", e), n !== t && this._setAttributeIfNotExists(n, "role", "presentation"), e || t.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t, "role", "tab"), this._setInitialAttributesOnTargetPanel(t);
  }
  _setInitialAttributesOnTargetPanel(t) {
    const e = l.getElementFromSelector(t);
    e && (this._setAttributeIfNotExists(e, "role", "tabpanel"), t.id && this._setAttributeIfNotExists(e, "aria-labelledby", `${t.id}`));
  }
  _toggleDropDown(t, e) {
    const n = this._getOuterElement(t);
    if (!n.classList.contains(Xo))
      return;
    const i = (a, r) => {
      const c = l.findOne(a, n);
      c && c.classList.toggle(r, e);
    };
    i(je, I), i(Zo, wt), n.setAttribute("aria-expanded", e);
  }
  _setAttributeIfNotExists(t, e, n) {
    t.hasAttribute(e) || t.setAttribute(e, n);
  }
  _elemIsActive(t) {
    return t.classList.contains(I);
  }
  // Try to get the inner element (usually the .nav-link)
  _getInnerElement(t) {
    return t.matches($t) ? t : l.findOne($t, t);
  }
  // Try to get the outer element (usually the .nav-item)
  _getOuterElement(t) {
    return t.closest(tr) || t;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = F.getOrCreateInstance(this);
      if (typeof t == "string") {
        if (e[t] === void 0 || t.startsWith("_") || t === "constructor")
          throw new TypeError(`No method named "${t}"`);
        e[t]();
      }
    });
  }
}
o.on(document, jo, Ge, function(s) {
  ["A", "AREA"].includes(this.tagName) && s.preventDefault(), !O(this) && F.getOrCreateInstance(this).show();
});
o.on(window, zo, () => {
  for (const s of l.find(sr))
    F.getOrCreateInstance(s);
});
m(F);
const nr = "toast", ir = "bs.toast", L = `.${ir}`, or = `mouseover${L}`, rr = `mouseout${L}`, ar = `focusin${L}`, lr = `focusout${L}`, cr = `hide${L}`, hr = `hidden${L}`, ur = `show${L}`, _r = `shown${L}`, dr = "fade", Ee = "hide", ot = "show", rt = "showing", fr = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
}, pr = {
  animation: !0,
  autohide: !0,
  delay: 5e3
};
class Et extends A {
  constructor(t, e) {
    super(t, e), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
  }
  // Getters
  static get Default() {
    return pr;
  }
  static get DefaultType() {
    return fr;
  }
  static get NAME() {
    return nr;
  }
  // Public
  show() {
    if (o.trigger(this._element, ur).defaultPrevented)
      return;
    this._clearTimeout(), this._config.animation && this._element.classList.add(dr);
    const e = () => {
      this._element.classList.remove(rt), o.trigger(this._element, _r), this._maybeScheduleHide();
    };
    this._element.classList.remove(Ee), q(this._element), this._element.classList.add(ot, rt), this._queueCallback(e, this._element, this._config.animation);
  }
  hide() {
    if (!this.isShown() || o.trigger(this._element, cr).defaultPrevented)
      return;
    const e = () => {
      this._element.classList.add(Ee), this._element.classList.remove(rt, ot), o.trigger(this._element, hr);
    };
    this._element.classList.add(rt), this._queueCallback(e, this._element, this._config.animation);
  }
  dispose() {
    this._clearTimeout(), this.isShown() && this._element.classList.remove(ot), super.dispose();
  }
  isShown() {
    return this._element.classList.contains(ot);
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
    const n = t.relatedTarget;
    this._element === n || this._element.contains(n) || this._maybeScheduleHide();
  }
  _setListeners() {
    o.on(this._element, or, (t) => this._onInteraction(t, !0)), o.on(this._element, rr, (t) => this._onInteraction(t, !1)), o.on(this._element, ar, (t) => this._onInteraction(t, !0)), o.on(this._element, lr, (t) => this._onInteraction(t, !1));
  }
  _clearTimeout() {
    clearTimeout(this._timeout), this._timeout = null;
  }
  // Static
  static jQueryInterface(t) {
    return this.each(function() {
      const e = Et.getOrCreateInstance(this, t);
      if (typeof t == "string") {
        if (typeof e[t] == "undefined")
          throw new TypeError(`No method named "${t}"`);
        e[t](this);
      }
    });
  }
}
_t(Et);
m(Et);
export {
  dt as Alert,
  ft as Button,
  z as Collapse,
  b as Dropdown,
  W as Modal,
  D as Offcanvas,
  xt as Popover,
  F as Tab,
  Et as Toast,
  U as Tooltip
};
