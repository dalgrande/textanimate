"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect5 = Effect5;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnimatedText = require("./AnimatedText.styles");

var _EffectGear = require("./EffectGear");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Effect5(_ref) {
  let {
    text1 = "1",
    text2 = "2",
    text3 = "3",
    loop = true,
    color = "black",
    textSize = 1
  } = _ref;

  const run = () => {
    (0, _EffectGear.EffectGear)(loop);
  };

  _react.default.useEffect(() => {
    run(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return /*#__PURE__*/_react.default.createElement(_AnimatedText.AnimatedText, {
    color: color,
    textSize: textSize
  }, /*#__PURE__*/_react.default.createElement("h1", {
    class: "ml5"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "line line1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    class: "letters letters-left"
  }, text1), /*#__PURE__*/_react.default.createElement("span", {
    class: "letters ampersand"
  }, text2), /*#__PURE__*/_react.default.createElement("span", {
    class: "letters letters-right"
  }, text3), /*#__PURE__*/_react.default.createElement("span", {
    class: "line line2"
  }))));
}

var _default = Effect5;
exports.default = _default;