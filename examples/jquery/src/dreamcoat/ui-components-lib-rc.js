import { DcButton as N, DcIcon as E, DcTooltip as g } from "./ui-components-lib-wc.js";
import f from "react";
import "./chunk-N06kCzeu.js";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), D = /* @__PURE__ */ new WeakMap(), h = (t, l, a, i, u) => {
  const m = u == null ? void 0 : u[l];
  m === void 0 || a === i ? (t[l] = a, a == null && l in HTMLElement.prototype && t.removeAttribute(l)) : ((s, o, c) => {
    let r = D.get(s);
    r === void 0 && D.set(s, r = /* @__PURE__ */ new Map());
    let n = r.get(o);
    c !== void 0 ? n === void 0 ? (r.set(o, n = { handleEvent: c }), s.addEventListener(o, n)) : n.handleEvent = c : n !== void 0 && (r.delete(o), s.removeEventListener(o, n));
  })(t, m, a);
}, v = ({ react: t, tagName: l, elementClass: a, events: i, displayName: u }) => {
  const m = new Set(Object.keys(i ?? {})), s = t.forwardRef((o, c) => {
    const r = t.useRef(null), n = t.useRef(null), d = {}, y = {};
    for (const [e, p] of Object.entries(o))
      b.has(e) ? d[e === "className" ? "class" : e] = p : m.has(e) || e in a.prototype ? y[e] = p : d[e] = p;
    return t.useLayoutEffect(() => {
      if (n.current !== null) {
        for (const e in y)
          h(n.current, e, o[e], r.current ? r.current[e] : void 0, i);
        r.current = o;
      }
    }), t.useLayoutEffect(() => {
      var e;
      (e = n.current) == null || e.removeAttribute("defer-hydration");
    }, []), d.suppressHydrationWarning = !0, t.createElement(l, { ...d, ref: t.useCallback((e) => {
      n.current = e, typeof c == "function" ? c(e) : c !== null && (c.current = e);
    }, [c]) });
  });
  return s.displayName = u ?? a.name, s;
}, T = v({
  react: f,
  tagName: "dc-button",
  elementClass: N,
  displayName: "DcButton"
}), B = v({
  react: f,
  tagName: "dc-icon",
  elementClass: E,
  displayName: "DcIcon"
}), I = v({
  react: f,
  tagName: "dc-tooltip",
  elementClass: g,
  displayName: "DcTooltip"
});
export {
  T as DcButton,
  B as DcIcon,
  I as DcTooltip
};
