var b = Object.defineProperty, w = Object.defineProperties;
var I = Object.getOwnPropertyDescriptors;
var g = Object.getOwnPropertySymbols;
var $ = Object.prototype.hasOwnProperty, M = Object.prototype.propertyIsEnumerable;
var S = (a, c, n) => c in a ? b(a, c, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[c] = n, v = (a, c) => {
  for (var n in c || (c = {}))
    $.call(c, n) && S(a, n, c[n]);
  if (g)
    for (var n of g(c))
      M.call(c, n) && S(a, n, c[n]);
  return a;
}, h = (a, c) => w(a, I(c));
import { DCDropdown as f, DCDropdownButton as B, DCMenu as P, DCMenuItem as T, DCMenuItemAdd as L, DcNavbar as A, DcNavSidebar as k, DcNavItem as E, DcNavSubmenu as G, DcSubmenuSection as H, DcSubmenuItem as F, DCAvatar as R, DCBanner as j, DcButton as O, DcChip as W, DCHalfDonutLoader as x, DcIcon as q, DCInputField as z, DCListGroup as J, DCListGroupItem as K, DcModal as Q, DCPill as U, DcSearchBar as V, DCTable as X, DCToast as Y, DCToggleSwitch as Z, DcTooltip as _, DCProductSwitcher as ee, DCProductSwitcherButton as te, DCProductSwitcherMenu as ae, DCProductSwitcherMenuItem as ce } from "./ui-components-lib-wc.js";
import e from "react";
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne = /* @__PURE__ */ new Set(["children", "localName", "ref", "style", "className"]), y = /* @__PURE__ */ new WeakMap(), se = (a, c, n, D, d) => {
  const i = d == null ? void 0 : d[c];
  i === void 0 || n === D ? (a[c] = n, n == null && c in HTMLElement.prototype && a.removeAttribute(c)) : ((u, r, l) => {
    let m = y.get(u);
    m === void 0 && y.set(u, m = /* @__PURE__ */ new Map());
    let o = m.get(r);
    l !== void 0 ? o === void 0 ? (m.set(r, o = { handleEvent: l }), u.addEventListener(r, o)) : o.handleEvent = l : o !== void 0 && (m.delete(r), u.removeEventListener(r, o));
  })(a, i, n);
}, t = ({ react: a, tagName: c, elementClass: n, events: D, displayName: d }) => {
  const i = new Set(Object.keys(D != null ? D : {})), u = a.forwardRef((r, l) => {
    const m = a.useRef(null), o = a.useRef(null), C = {}, N = {};
    for (const [s, p] of Object.entries(r)) ne.has(s) ? C[s === "className" ? "class" : s] = p : i.has(s) || s in n.prototype ? N[s] = p : C[s] = p;
    return a.useLayoutEffect(() => {
      if (o.current !== null) {
        for (const s in N) se(o.current, s, r[s], m.current ? m.current[s] : void 0, D);
        m.current = r;
      }
    }), a.useLayoutEffect(() => {
      var s;
      (s = o.current) == null || s.removeAttribute("defer-hydration");
    }, []), C.suppressHydrationWarning = !0, a.createElement(c, h(v({}, C), { ref: a.useCallback((s) => {
      o.current = s, typeof l == "function" ? l(s) : l !== null && (l.current = s);
    }, [l]) }));
  });
  return u.displayName = d != null ? d : n.name, u;
}, me = t({
  react: e,
  tagName: "dc-dropdown",
  elementClass: f,
  displayName: "DCDropdown"
}), de = t({
  react: e,
  tagName: "dc-dropdown-button",
  elementClass: B,
  displayName: "DCDropdownButton"
}), ue = t({
  react: e,
  tagName: "dc-menu",
  elementClass: P,
  displayName: "DCMenu"
}), De = t({
  react: e,
  tagName: "dc-menu-item",
  elementClass: T,
  displayName: "DCMenuItem",
  events: {
    onMenuItemClick: "menuitemclick",
    onFavoriteClick: "favoriteclick",
    onPinClick: "pinclick"
  }
}), ie = t({
  react: e,
  tagName: "dc-menu-item-add",
  elementClass: L,
  displayName: "DCMenuItemAdd"
}), Ce = t({
  react: e,
  tagName: "dc-navbar",
  elementClass: A,
  displayName: "DcNavbar"
}), pe = t({
  react: e,
  tagName: "dc-nav-sidebar",
  elementClass: k,
  displayName: "DcNavSidebar"
}), Ne = t({
  react: e,
  tagName: "dc-nav-item",
  elementClass: E,
  displayName: "DcNavItem"
}), ge = t({
  react: e,
  tagName: "dc-nav-submenu",
  elementClass: G,
  displayName: "DcNavSubmenu"
}), Se = t({
  react: e,
  tagName: "dc-submenu-section",
  elementClass: H,
  displayName: "DcSubmenuSection"
}), ve = t({
  react: e,
  tagName: "dc-submenu-item",
  elementClass: F,
  displayName: "DcSubmenuItem"
}), he = t({
  react: e,
  tagName: "dc-avatar",
  elementClass: R,
  displayName: "DCAvatar"
}), ye = t({
  react: e,
  tagName: "dc-banner",
  elementClass: j,
  displayName: "DCBanner"
}), be = t({
  react: e,
  tagName: "dc-button",
  elementClass: O,
  displayName: "DcButton"
}), we = t({
  react: e,
  tagName: "dc-chip",
  elementClass: W,
  displayName: "DcChip"
}), Ie = t({
  react: e,
  tagName: "dc-half-donut-loader",
  elementClass: x,
  displayName: "DCHalfDonutLoader"
}), $e = t({
  react: e,
  tagName: "dc-icon",
  elementClass: q,
  displayName: "DcIcon"
}), Me = t({
  react: e,
  tagName: "dc-input-field",
  elementClass: z,
  displayName: "DCInputField"
}), fe = t({
  react: e,
  tagName: "dc-list-group",
  elementClass: J,
  displayName: "DCListGroup"
}), Be = t({
  react: e,
  tagName: "dc-list-group-item",
  elementClass: K,
  displayName: "DCListGroupItem"
}), Pe = t({
  react: e,
  tagName: "dc-modal",
  elementClass: Q,
  displayName: "DcModal"
}), Te = t({
  react: e,
  tagName: "dc-pill",
  elementClass: U,
  displayName: "DCPill",
  events: {
    onMenuToggle: "menu-toggled"
  }
}), Le = t({
  react: e,
  tagName: "dc-search-bar",
  elementClass: V,
  displayName: "DcSearchBar"
}), Ae = t({
  react: e,
  tagName: "dc-table",
  elementClass: X,
  displayName: "DCTable"
}), ke = t({
  react: e,
  tagName: "dc-toast",
  elementClass: Y,
  displayName: "DCToast"
}), Ee = t({
  react: e,
  tagName: "dc-toggle-switch",
  elementClass: Z,
  displayName: "DCToggleSwitch"
}), Ge = t({
  react: e,
  tagName: "dc-tooltip",
  elementClass: _,
  displayName: "DcTooltip"
}), He = t({
  react: e,
  tagName: "dc-product-switcher",
  elementClass: ee,
  displayName: "DCProductSwitcher"
}), Fe = t({
  react: e,
  tagName: "dc-product-switcher-button",
  elementClass: te,
  displayName: "DCProductSwitcherButton"
}), Re = t({
  react: e,
  tagName: "dc-product-switcher-menu",
  elementClass: ae,
  displayName: "DCProductSwitcherMenu"
}), je = t({
  react: e,
  tagName: "dc-product-switcher-menu-item",
  elementClass: ce,
  displayName: "DCProductSwitcherMenuItem"
});
export {
  he as DCAvatar,
  me as DCDropdown,
  de as DCDropdownButton,
  Ie as DCHalfDonutLoader,
  Me as DCInputField,
  fe as DCListGroup,
  Be as DCListGroupItem,
  ue as DCMenu,
  De as DCMenuItem,
  ie as DCMenuItemAdd,
  Te as DCPill,
  He as DCProductSwitcher,
  Fe as DCProductSwitcherButton,
  Re as DCProductSwitcherMenu,
  je as DCProductSwitcherMenuItem,
  Ae as DCTable,
  ke as DCToast,
  Ee as DCToggleSwitch,
  ye as DcBanner,
  be as DcButton,
  we as DcChip,
  $e as DcIcon,
  Pe as DcModal,
  Ne as DcNavItem,
  pe as DcNavSidebar,
  ge as DcNavSubmenu,
  Ce as DcNavbar,
  Le as DcSearchBar,
  ve as DcSubmenuItem,
  Se as DcSubmenuSection,
  Ge as DcTooltip
};
