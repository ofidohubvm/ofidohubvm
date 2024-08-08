"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./scss/styles.scss");
require("bootstrap/dist/css/bootstrap.min.css");
require("./analytics");
require("./App.css");
var _reactRouterDom = require("react-router-dom");
var _Footer = _interopRequireDefault(require("./components/Footer"));
var _Home = _interopRequireDefault(require("./components/Home"));
var _NavBar = _interopRequireDefault(require("./components/NavBar"));
var _CustomHeader = _interopRequireDefault(require("./components/Custom/CustomHeader"));
var _AboutUs = _interopRequireDefault(require("./components/AboutUs"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function App() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(AppContent, null));
}
function AppContent() {
  const [data, setData] = (0, _react.useState)(null);
  (0, _react.useEffect)(() => {
    // Fetch or set your data here
    setData({
      message: 'Hello, world!'
    });
  }, []);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App"
  }, /*#__PURE__*/_react.default.createElement(_NavBar.default, null), /*#__PURE__*/_react.default.createElement(_CustomHeader.default, null), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement(_react.Suspense, {
    fallback: /*#__PURE__*/_react.default.createElement("div", null, "Loading...")
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_Home.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/about",
    element: /*#__PURE__*/_react.default.createElement(_AboutUs.default, null)
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: '2px',
      backgroundColor: 'black'
    }
  }), /*#__PURE__*/_react.default.createElement(_Footer.default, null)), data && /*#__PURE__*/_react.default.createElement("div", null, data.message)));
}
var _default = exports.default = App;