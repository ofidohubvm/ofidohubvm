"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("./SignIn.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// Import the CSS file

const SignIn = _ref => {
  let {
    onClose
  } = _ref;
  const [email, setEmail] = (0, _react.useState)('');
  const [password, setPassword] = (0, _react.useState)('');
  const [error, setError] = (0, _react.useState)('');
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSignIn = async e => {
    e.preventDefault();
    setError('');

    // Mock sign-in logic
    const mockApiResponse = await mockSignInApi(email, password);
    if (mockApiResponse.success) {
      // If sign-in is successful, navigate to UserProfile
      navigate('/user-profile');
    } else {
      // Handle sign-in error
      setError(mockApiResponse.message);
    }
  };
  const mockSignInApi = (email, password) => {
    // Mock API response
    return new Promise(resolve => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          resolve({
            success: true
          });
        } else {
          resolve({
            success: false,
            message: 'Invalid email or password'
          });
        }
      }, 1000);
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "signin-modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSignIn,
    className: "auth-form"
  }, /*#__PURE__*/_react.default.createElement("h2", {
    className: "card-title text-center"
  }, "SignIn"), error && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, error), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "email"
  }, "Email:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    className: "form-control",
    value: email,
    onChange: e => setEmail(e.target.value),
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "password"
  }, "Password:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "password",
    id: "password",
    name: "password",
    className: "form-control",
    value: password,
    onChange: e => setPassword(e.target.value),
    required: true
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    className: "btn btn-primary btn-block"
  }, "SignIn"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: onClose,
    className: "btn btn-secondary btn-block"
  }, "Close")), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-3 text-center"
  }, "Don't have an account? ", /*#__PURE__*/_react.default.createElement("a", {
    href: "/register"
  }, "SignUp"), ".")))))));
};
SignIn.propTypes = {
  onClose: _propTypes.default.func.isRequired
};
var _default = exports.default = SignIn;