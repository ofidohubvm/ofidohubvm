"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("bootstrap/dist/css/bootstrap.min.css");
var _reactRouterDom = require("react-router-dom");
require("./Footer.css");
var _freeBrandsSvgIcons = require("@fortawesome/free-brands-svg-icons");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Footer = () => {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/_react.default.createElement("footer", {
    className: "footer py-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row justify-content-between"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-2 mb-3"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Home"), /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/about-us",
    className: "nav-link p-0 text-body-secondary"
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/contact-us",
    className: "nav-link p-0 text-body-secondary"
  }, "Contact Us")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/community",
    className: "nav-link p-0 text-body-secondary"
  }, "Community")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/faqs",
    className: "nav-link p-0 text-body-secondary"
  }, "FAQs")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/services",
    className: "nav-link p-0 text-body-secondary"
  }, "Services")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-2 mb-3"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Company"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/services",
    className: "nav-link p-0 text-body-secondary"
  }, "Services"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/solutions",
    className: "nav-link p-0 text-body-secondary"
  }, "Solutions")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/about-us",
    className: "nav-link p-0 text-body-secondary"
  }, "About Us")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/careers",
    className: "nav-link p-0 text-body-secondary"
  }, "Careers")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/contact-us",
    className: "nav-link p-0 text-body-secondary"
  }, "Contact Us")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-6 col-md-2 mb-3"
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "nav flex-column"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Blog/News"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/nvidia",
    className: "nav-link p-0 text-body-secondary"
  }, "Nvidia"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/ubuntu",
    className: "nav-link p-0 text-body-secondary"
  }, "Ubuntu")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/hackernews",
    className: "nav-link p-0 text-body-secondary"
  }, "Hackernews")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/spacex",
    className: "nav-link p-0 text-body-secondary"
  }, "SpaceX")), /*#__PURE__*/_react.default.createElement("li", {
    className: "nav-item mb-2"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/nasa",
    className: "nav-link p-0 text-body-secondary"
  }, "Nasa")))), /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6 mb-3"
  }, /*#__PURE__*/_react.default.createElement("form", {
    className: "d-flex flex-column flex-sm-row align-items-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "me-3"
  }, /*#__PURE__*/_react.default.createElement("h5", null, "Subscribe to our newsletter"), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column flex-sm-row w-100 gap-2"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "newsletter1",
    className: "visually-hidden"
  }, "Email address"), /*#__PURE__*/_react.default.createElement("input", {
    id: "newsletter1",
    type: "text",
    className: "form-control",
    placeholder: "Email address"
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-primary",
    type: "button"
  }, "Subscribe"))), /*#__PURE__*/_react.default.createElement("ul", {
    className: "list-unstyled d-flex mb-0"
  }, /*#__PURE__*/_react.default.createElement("li", {
    className: "ms-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.linkedin.com/company/ofido-hub/",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "LinkedIn"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faLinkedin,
    size: "1x",
    className: "fa-icon"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    className: "ms-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/ofidohub",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitHub"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faGithub,
    size: "1x",
    className: "fa-icon"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    className: "ms-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://x.com/ofidohub",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Twitter"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faTwitter,
    size: "1x",
    className: "fa-icon"
  }))), /*#__PURE__*/_react.default.createElement("li", {
    className: "ms-3"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://gitlab.com/ofidohubvm",
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "GitLab"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeBrandsSvgIcons.faGitlab,
    size: "1x",
    className: "fa-icon"
  })))))), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top"
  }, /*#__PURE__*/_react.default.createElement("p", null, "\xA9 2024 Company, Inc. All rights reserved."), /*#__PURE__*/_react.default.createElement("div", {
    className: "d-flex"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "me-3 text-secondary"
  }, "Privacy Policy"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "text-secondary"
  }, "Terms and Conditions"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/",
    className: "text-secondary"
  }, "Cookie Policy"))))));
};
var _default = exports.default = Footer;