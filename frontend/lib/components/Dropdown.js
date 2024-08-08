"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("bootstrap/dist/css/bootstrap.min.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Dropdown = _ref => {
  let {
    visibleSection,
    toggleVisibility
  } = _ref;
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container"
  }, topics.map((topic, index) => /*#__PURE__*/_react.default.createElement("section", {
    key: index,
    className: "topic-item mb-3 p-3 border rounded",
    onClick: () => toggleVisibility(`topic${index}`)
  }, /*#__PURE__*/_react.default.createElement("h3", {
    className: "topic-title"
  }, /*#__PURE__*/_react.default.createElement("small", null, topic.title)), visibleSection === `topic${index}` && /*#__PURE__*/_react.default.createElement("p", {
    className: "topic-content small"
  }, topic.content))));
};
Dropdown.propTypes = {
  visibleSection: _propTypes.default.string,
  toggleVisibility: _propTypes.default.func.isRequired
};
var _default = exports.default = Dropdown;