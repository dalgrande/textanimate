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
  var textWrapper = document.querySelector(".ml9 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  _animejs.default.timeline({
    loop: true
  }).add({
    targets: ".ml9 .letter",
    scale: [0, 1],
    duration: 1500,
    elasticity: 600,
    delay: (el, i) => 45 * (i + 1)
  }).add({
    targets: ".ml9",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
}

EffectGear.propTypes = {};