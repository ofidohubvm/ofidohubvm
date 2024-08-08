"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
require("./Home.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const Home = () => {
  const [visibleSection, setVisibleSection] = (0, _react.useState)(null);
  const toggleVisibility = section => {
    setVisibleSection(visibleSection === section ? null : section);
  };
  const topics = [{
    title: 'Quantum Computing',
    content: 'Dive into the mind-bending world of qubits, superposition, and quantum algorithms. Explore how quantum computers are reshaping the future of computation.'
  }, {
    title: 'Artificial Intelligence',
    content: '🤖 From neural networks to computer vision, we cover it all. Learn how AI is transforming industries and shaping our future.'
  }, {
    title: 'Hardware Computing',
    content: '🔌 From CPUs to GPUs, from Arduino to Raspberry Pi, we unravel the mysteries of hardware. Get hands-on tips, reviews, and DIY projects.'
  }, {
    title: 'Data Science',
    content: '📊 Unleash the power of data! Learn about machine learning, data visualization, and predictive analytics. Discover the stories hidden in the numbers.'
  }, {
    title: 'Web Development',
    content: '🌐 HTML, CSS, JavaScript, and beyond. Whether you’re a front-end wizard or a back-end maestro, we’ve got resources to level up your web game.'
  }, {
    title: 'Cybersecurity',
    content: '🔐 Lock down your digital fortress. Explore encryption, ethical hacking, and best practices to keep your data safe.'
  }];
  return /*#__PURE__*/_react.default.createElement("main", {
    className: "main-home-grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "topics-section bg-white rounded mb-4 shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-4",
    onClick: () => toggleVisibility('cuttingEdge')
  }, "Explore Cutting-Edge Topics", /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow ${visibleSection === 'cuttingEdge' ? 'up' : 'down'}`
  })), visibleSection === 'cuttingEdge' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null)), topics.slice(0, 3).map((topic, index) => /*#__PURE__*/_react.default.createElement("section", {
    key: index,
    className: "topics-section bg-white rounded mb-4 shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-4",
    onClick: () => toggleVisibility(topic.title)
  }, topic.title, /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow ${visibleSection === topic.title ? 'up' : 'down'}`
  })), visibleSection === topic.title && /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, topic.content)))), /*#__PURE__*/_react.default.createElement("section", {
    className: "sidebar p-5 rounded mb-4 shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("h1", null, "AtonixCorp"), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, "This is the sidebar content. You can place navigation links, ads, or any other supplementary information here.")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, /*#__PURE__*/_react.default.createElement("section", {
    className: "community-section bg-light rounded mb-4"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-4",
    onClick: () => toggleVisibility('community')
  }, "Connect with Like-Minded Techies", /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow ${visibleSection === 'community' ? 'up' : 'down'}`
  })), visibleSection === 'community' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("p", null, "\uD83D\uDC65 ", /*#__PURE__*/_react.default.createElement("strong", null, "Community Forums:"), " Engage in lively discussions, ask questions, and share your insights. Our community of tech enthusiasts is here to support you."), /*#__PURE__*/_react.default.createElement("p", null, "\uD83D\uDCDA ", /*#__PURE__*/_react.default.createElement("strong", null, "Tutorials and Guides:"), " Step-by-step tutorials, code snippets, and best practices. Learn at your own pace and conquer new skills."))), /*#__PURE__*/_react.default.createElement("section", {
    className: "topics-section bg-white rounded mb-4 shadow-sm"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "mb-4",
    onClick: () => toggleVisibility('topics')
  }, "Explore More Topics", /*#__PURE__*/_react.default.createElement("span", {
    className: `arrow ${visibleSection === 'topics' ? 'up' : 'down'}`
  })), visibleSection === 'topics' && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, topics.slice(3).map((topic, index) => /*#__PURE__*/_react.default.createElement("section", {
    key: index,
    className: "topics-grid"
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "text-primary"
  }, topic.title), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("strong", null, topic.content))))))));
};
var _default = exports.default = Home;