"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
require("bootstrap/dist/css/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min");
require("./SignUp.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SignUp = () => {
  const [username, setUsername] = (0, _react.useState)('');
  const [email, setEmail] = (0, _react.useState)('');
  const [password, setPassword] = (0, _react.useState)('');
  const [error, setError] = (0, _react.useState)('');
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleSignUp = async e => {
    e.preventDefault();
    setError('');

    // Mock sign-up logic
    const mockApiResponse = await mockSignUpApi(username, email, password);
    if (mockApiResponse.success) {
      navigate('/login'); // Navigate to Login if successful
    } else {
      setError(mockApiResponse.message); // Set error message
    }
  };
  const mockSignUpApi = (username, email, password) => {
    return new Promise(resolve => {
      setTimeout(() => {
        if (username && email && password) {
          resolve({
            success: true
          });
        } else {
          resolve({
            success: false,
            message: 'Invalid input'
          });
        }
      }, 1000);
    });
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "container mt-5"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "row justify-content-center"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card shadow-lg"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "card-title text-center"
  }, "Sign Up"), error && /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-danger"
  }, error), /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSignUp,
    className: "auth-form"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "form-group"
  }, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: "username"
  }, "Username:"), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: "username",
    name: "username",
    className: "form-control",
    value: username,
    onChange: e => setUsername(e.target.value),
    required: true
  })), /*#__PURE__*/_react.default.createElement("div", {
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
  }, "Sign Up")), /*#__PURE__*/_react.default.createElement("p", {
    className: "mt-3 text-center"
  }, "Already have an account? ", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/login"
  }, "Login here"), "."))))));
};
var _default = exports.default = SignUp;