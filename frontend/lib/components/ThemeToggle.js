"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ThemeToggle = () => {
  const handleThemeChange = theme => {
    document.documentElement.setAttribute('data-bs-theme', theme);
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center",
    id: "bd-theme",
    type: "button",
    "aria-expanded": "false",
    "data-bs-toggle": "dropdown",
    "aria-label": "Toggle theme (auto)"
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi my-1 theme-icon-active",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#circle-half"
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "visually-hidden",
    id: "bd-theme-text"
  }, "Toggle theme")), /*#__PURE__*/_react.default.createElement("ul", {
    className: "dropdown-menu dropdown-menu-end shadow",
    "aria-labelledby": "bd-theme-text"
  }, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "dropdown-item d-flex align-items-center",
    "data-bs-theme-value": "light",
    "aria-pressed": "false",
    onClick: () => handleThemeChange('light')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi me-2 opacity-50",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#sun-fill"
  })), "Light", /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi ms-auto d-none",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#check2"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "dropdown-item d-flex align-items-center",
    "data-bs-theme-value": "dark",
    "aria-pressed": "false",
    onClick: () => handleThemeChange('dark')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi me-2 opacity-50",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#moon-stars-fill"
  })), "Dark", /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi ms-auto d-none",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#check2"
  })))), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "dropdown-item d-flex align-items-center active",
    "data-bs-theme-value": "auto",
    "aria-pressed": "true",
    onClick: () => handleThemeChange('auto')
  }, /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi me-2 opacity-50",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#circle-half"
  })), "Auto", /*#__PURE__*/_react.default.createElement("svg", {
    className: "bi ms-auto d-none",
    width: "1em",
    height: "1em"
  }, /*#__PURE__*/_react.default.createElement("use", {
    href: "#check2"
  }))))));
};
var _default = exports.default = ThemeToggle;