"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./Dashboard.css");
var _NavItem = _interopRequireDefault(require("./NavItem"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Dashboard = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dashboard"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/_react.default.createElement(_NavItem.default, {
    title: "Customers",
    iconHref: "#people-circle"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown border-top"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "#",
    className: "d-flex align-items-center justify-content-center p-3 link-body-emphasis text-decoration-none dropdown-toggle",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "",
    alt: "User Avatar",
    width: "24",
    height: "24",
    className: "rounded-circle"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu text-small shadow"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "New project...")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Settings")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Profile")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("hr", {
    className: "dropdown-divider"
  })), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Sign out")))));
};
var _default = exports.default = Dashboard;