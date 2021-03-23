"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect15 = Effect15;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnimatedText = require("./AnimatedText.styles");

var _EffectGear = require("./EffectGear");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Effect15(_ref) {
  let {
    text1 = "1",
    text2 = "2",
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
    class: "ml15"
  }, /*#__PURE__*/_react.default.createElement("span", {
    class: "word"
  }, text1), /*#__PURE__*/_react.default.createElement("span", {
    class: "word"
  }, text2)));
}

var _default = Effect15;
exports.default = _default;