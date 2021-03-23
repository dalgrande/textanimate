"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.h1(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ml1 {\n    font-weight: 900;\n    font-size: ", "em;\n    color: ", ";\n  }\n\n  .ml1 .letter {\n    display: inline-block;\n    line-height: 1em;\n    color: ", ";\n    text-shadow: ", ";\n  }\n\n  .ml1 .text-wrapper {\n    position: relative;\n    display: inline-block;\n    padding-top: 0.1em;\n    padding-right: 0.05em;\n    padding-bottom: 0.15em;\n  }\n\n  .ml1 .line {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    height: 3px;\n    width: 100%;\n    background-color: ", ";\n    transform-origin: 0 0;\n  }\n\n  .ml1 .line1 {\n    top: 0;\n  }\n  .ml1 .line2 {\n    bottom: 0;\n  }\n"])), props => props.textSize, props => props.color, props => props.color, props => props.textShadow, props => props.lineColor);

exports.AnimatedText = AnimatedText;