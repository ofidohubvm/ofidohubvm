"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
require("./NavBar.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("bootstrap-icons/font/bootstrap-icons.css");
var _SignUp = _interopRequireDefault(require("../account/SignUp"));
var _SignIn = _interopRequireDefault(require("../account/SignIn"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavBar = () => {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-xxl navbar-dark navbar-custom text-white p-1 border border-primary-subtle rounded-3 w-100",
    "aria-label": "Seventh navbar example"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-bs-toggle": "collapse",
    "data-bs-target": "#navbarsExampleXxl",
    "aria-controls": "navbarsExampleXxl",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "navbar-toggler-icon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarsExampleXxl"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "navbar-nav me-auto mb-2 mb-xl-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-secondary dropdown-toggle",
    type: "button",
    id: "dropdownMenuButton",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fas fa-bars"
  })), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownMenuButton"
  }, ['Computing', 'Data Science', 'Artificial Intelligence', 'Physics', 'Another action', 'IoT', 'Quantum Computing', 'Hardware Computing', 'Chemistry', 'Web Development', 'Communication', 'Mathematics', 'Science'].map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item small",
    href: "#"
  }, item))))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link text-white",
    to: "/"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item dropdown"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link text-white dropdown-toggle",
    to: "/projects",
    id: "projectsDropdown",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false"
  }, "Projects"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "projectsDropdown"
  }, ['IoT Solutions', 'Agriculture Technology', 'Oil Technology Research', 'AI and Machine Learning', 'Media and Entertainment Technology'].map(item => /*#__PURE__*/_react.default.createElement("li", {
    key: item
  }, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item small",
    href: "#"
  }, item))))), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link text-white",
    to: "/community"
  }, "Community")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "nav-link text-white",
    to: "/about"
  }, "About Us"))), /*#__PURE__*/_react.default.createElement("form", {
    role: "search",
    className: "d-flex me-3"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-control form-control-sm me-2",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary btn-sm btn-signin me-2",
    "data-bs-toggle": "modal",
    "data-bs-target": "#signInModal"
  }, "Sign In"), /*#__PURE__*/_react.default.createElement("div", {
    className: "vertical-line"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary btn-sm btn-signup",
    "data-bs-toggle": "modal",
    "data-bs-target": "#signUpModal"
  }, "Sign Up")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "signInModal",
    tabIndex: "-1",
    "aria-labelledby": "signInModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title",
    id: "signInModalLabel"
  }, "Sign In"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement(_SignIn.default, null))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal fade",
    id: "signUpModal",
    tabIndex: "-1",
    "aria-labelledby": "signUpModalLabel",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-dialog"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-content"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h5", {
    className: "modal-title",
    id: "signUpModalLabel"
  }, "Sign Up"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn-close",
    "data-bs-dismiss": "modal",
    "aria-label": "Close"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, /*#__PURE__*/_react.default.createElement(_SignUp.default, null))))));
};
var _default = exports.default = NavBar;