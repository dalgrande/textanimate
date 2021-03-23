"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Effect16 = Effect16;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AnimatedText = require("./AnimatedText.styles");

var _EffectGear = require("./EffectGear");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Effect16(_ref) {
  let {
    children,
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
    class: "ml16"
  }, children));
}

var _default = Effect16;
exports.default = _default;