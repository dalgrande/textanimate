"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EffectGear = EffectGear;

require("core-js/modules/es.string.replace.js");

var _animejs = _interopRequireDefault(require("animejs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function EffectGear(loop) {
  let textWrapper = document.querySelector(".ml8 .letters");
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "$&");

  _animejs.default.timeline({
    loop: true
  }).add({
    targets: ".ml8 .circle-white",
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1100
  }).add({
    targets: ".ml8 .circle-container",
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: "-=1000"
  }).add({
    targets: ".ml8 .circle-dark",
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: "-=600"
  }).add({
    targets: ".ml8 .letters-left",
    scale: [0, 1],
    duration: 1200,
    offset: "-=550"
  }).add({
    targets: ".ml8 .bang",
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: "-=1000"
  }).add({
    targets: ".ml8",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

  (0, _animejs.default)({
    targets: ".ml8 .circle-dark-dashed",
    rotateZ: 360,
    duration: 8000,
    easing: "linear",
    loop: true
  });
}

EffectGear.propTypes = {};