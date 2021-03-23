"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EffectGear = EffectGear;

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EffectGear(loop) {
  _animejs.default.timeline({
    loop: true
  }).add({
    targets: ".ml15 .word",
    scale: [14, 1],
    opacity: [0, 1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el, i) => 800 * i
  }).add({
    targets: ".ml15",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

EffectGear.propTypes = {};