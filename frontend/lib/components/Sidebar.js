"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Sidebar.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Sidebar = _ref => {
  let {
    topics
  } = _ref;
  const [activeTopic, setActiveTopic] = (0, _react.useState)(null);
  const toggleTopic = index => {
    setActiveTopic(activeTopic === index ? null : index);
  };
  return /*#__PURE__*/_react.default.createElement("aside", {
    className: "sidebar"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "sidebar-title"
  }, "Explore Cutting-Edge Topics"), topics.map((topic, index) => /*#__PURE__*/_react.default.createElement("section", {
    key: index,
    className: "topic-section"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "topic-title",
    onClick: () => toggleTopic(index)
  }, topic.title), activeTopic === index && /*#__PURE__*/_react.default.createElement("div", {
    className: "topic-content"
  }, /*#__PURE__*/_react.default.createElement("p", null, topic.content)))));
};
Sidebar.propTypes = {
  topics: _propTypes.default.arrayOf(_propTypes.default.shape({
    title: _propTypes.default.string.isRequired,
    content: _propTypes.default.string.isRequired
  })).isRequired
};
var _default = exports.default = Sidebar;