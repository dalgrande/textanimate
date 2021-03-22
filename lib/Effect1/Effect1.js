"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect1 = Effect1;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnimatedText = require("./AnimatedText.styles");

var _EffectGear = require("./EffectGear");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Effect1(_ref) {
  let {
    children,
    loop = true,
    lineColor = "black",
    color = "black",
    textSize = 1,
    textShadow = "2px 2px 4px #000000"
  } = _ref;

  const run = () => {
    (0, _EffectGear.EffectGear)(loop);
  };

  _react.default.useEffect(() => {
    run(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return /*#__PURE__*/_react.default.createElement(_AnimatedText.AnimatedText, {
    color: color,
    lineColor: lineColor,
    textSize: textSize,
    textShadow: textShadow
  }, /*#__PURE__*/_react.default.createElement("h1", {
    class: "ml1"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "text-wrapper"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "line line1"
  }), /*#__PURE__*/_react.default.createElement("span", {
    class: "letters"
  }, children), /*#__PURE__*/_react.default.createElement("span", {
    class: "line line2"
  }))));
}

var _default = Effect1;
exports.default = _default;