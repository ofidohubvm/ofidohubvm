"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("./CustomHeader.css");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("bootstrap-icons/font/bootstrap-icons.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Header = () => {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("header", {
    className: "header"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container d-flex flex-column flex-md-row justify-content-between align-items-center"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "atonixcorp-text"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "color1"
  }, "o"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color2"
  }, "f"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color3"
  }, "i"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color4"
  }, "d"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color5"
  }, "o"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color6"
  }, "h"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color7"
  }, "u"), /*#__PURE__*/_react.default.createElement("span", {
    className: "color8"
  }, "b")))));
};
var _default = exports.default = Header;