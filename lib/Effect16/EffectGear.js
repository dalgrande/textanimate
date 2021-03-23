"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EffectGear = EffectGear;

require("core-js/modules/es.string.replace.js");

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EffectGear(loop) {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".ml16");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  _animejs.default.timeline({
    loop: true
  }).add({
    targets: ".ml16 .letter",
    translateY: [-100, 0],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 30 * i
  }).add({
    targets: ".ml16",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

EffectGear.propTypes = {};