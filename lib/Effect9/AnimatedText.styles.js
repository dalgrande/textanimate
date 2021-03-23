"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ml9 {\n    position: relative;\n    font-weight: 200;\n    font-size: ", "em;\n  }\n\n  .ml9 .text-wrapper {\n    position: relative;\n    display: inline-block;\n    padding-top: 0.2em;\n    padding-right: 0.05em;\n    padding-bottom: 0.1em;\n    overflow: hidden;\n  }\n\n  .ml9 .letter {\n    transform-origin: 50% 100%;\n    display: inline-block;\n    line-height: 1em;\n    color: ", ";\n  }\n"])), props => props.textSize, props => props.color);

exports.AnimatedText = AnimatedText;