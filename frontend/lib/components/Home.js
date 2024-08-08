"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./Home.css");
var _Dropdown = _interopRequireDefault(require("./Dropdown"));
var _MainContent = _interopRequireDefault(require("./MainContent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Ensure you have this CSS file for custom styles

const Home = () => {
  const [isDropdownVisible, setIsDropdownVisible] = (0, _react.useState)(false);
  const [visibleSection, setVisibleSection] = (0, _react.useState)('');
  const toggleDropdownVisibility = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };
  const toggleVisibility = section => {
    setVisibleSection(visibleSection === section ? '' : section);
  };
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "main-home-grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "mb-3"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary d-flex align-items-center",
    onClick: toggleDropdownVisibility
  }, "Technologies", /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow ml-2 ${isDropdownVisible ? 'up' : 'down'}`
  })), isDropdownVisible && /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    visibleSection: visibleSection,
    toggleVisibility: toggleVisibility
  })), /*#__PURE__*/_react.default.createElement(_MainContent.default, null));
};
var _default = exports.default = Home;