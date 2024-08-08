"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavItem = _ref => {
  let {
    title,
    iconHref
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "nav-link py-3 border-bottom rounded-0",
    title: title,
    "data-bs-toggle": "tooltip",
    "data-bs-placement": "right"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi pe-none",
    width: "24",
    height: "24",
    role: "img",
    "aria-label": title
  }, /*#__PURE__*/_react.default.createElement("use", {
    xlinkHref: iconHref
  }))));
};
var _default = exports.default = NavItem;