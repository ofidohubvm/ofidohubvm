"use strict";

var _react = _interopRequireDefault(require("react"));
require("./NavBar.css");
require("@fortawesome/fontawesome-free/css/all.min.css");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const NavBar = () => {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-expand-xxl navbar-dark bg-dark p-1 text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3",
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
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Computing")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Data Science")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Artificial Intelligence")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Physics")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Another action")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "IoT")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Quantum Computing")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Hardware Computing")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Chemistry")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Web Development")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Communication")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Mathematics")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    className: "dropdown-item",
    href: "#"
  }, "Science"))))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-grow-1 justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "nav-link link-body-emphasis px-2 active",
    "aria-label": "Home"
  }, "Home")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/community",
    className: "nav-link link-body-emphasis px-2"
  }, "Community")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/research",
    className: "nav-link link-body-emphasis px-2"
  }, "Research"))), /*#__PURE__*/_react.default.createElement("form", {
    role: "search"
  }, /*#__PURE__*/_react.default.createElement("input", {
    className: "form-control",
    type: "search",
    placeholder: "Search",
    "aria-label": "Search"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "social-links d-flex"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/company/ofido-hub/",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      margin: '0 10px',
      color: '#0e76a8'
    },
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faLinkedin,
    size: "2x"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/ofidohub",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      margin: '0 5px',
      color: '#333'
    },
    "aria-label": "GitHub"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faGithub,
    size: "2x"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://x.com/ofidohub",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      margin: '0 5px',
      color: '#1DA1F2'
    },
    "aria-label": "Twitter"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faTwitter,
    size: "2x"
  })), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://gitlab.com/ofidohubvm",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      margin: '0 5px',
      color: '#FC6D26'
    },
    "aria-label": "GitLab"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faGitlab,
    size: "2x"
  }))))));
};