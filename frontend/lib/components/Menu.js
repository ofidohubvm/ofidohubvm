"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./Menu.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Menu = () => {
  const [isOpen, setIsOpen] = (0, _react.useState)(false); // State to manage menu visibility

  const pages = ['Data Science', 'Artificial Intelligence', 'Machine Learning', 'IoT Solutions', 'Quantum Computing', 'Hardware Computing', 'Software Development', 'Cybersecurity', 'Networking', 'DevOps'];
  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close state
  };
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "menu"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "menu-toggle",
    onClick: toggleMenu
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: `bar ${isOpen ? 'open' : ''}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `bar ${isOpen ? 'open' : ''}`
  }), /*#__PURE__*/_react.default.createElement("span", {
    className: `bar ${isOpen ? 'open' : ''}`
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: `menu-list ${isOpen ? 'open' : ''}`
  }, pages.map((page, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index,
    className: "menu-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: `#${page.replace(' ', '-').toLowerCase()}`,
    className: "menu-link"
  }, page)))));
};
var _default = exports.default = Menu;