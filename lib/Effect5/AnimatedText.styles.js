"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ml5 {\n    position: relative;\n    font-weight: 300;\n    font-size: ", "em;\n    color: ", ";\n  }\n\n  .ml5 .text-wrapper {\n    position: relative;\n    display: inline-block;\n    padding-top: 0.1em;\n    padding-right: 0.05em;\n    padding-bottom: 0.15em;\n    line-height: 1em;\n  }\n\n  .ml5 .line {\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    height: 3px;\n    width: 100%;\n    background-color: ", ";\n    transform-origin: 0.5 0;\n  }\n\n  .ml5 .ampersand {\n    font-family: Baskerville, serif;\n    font-style: italic;\n    font-weight: 400;\n    width: 1em;\n    margin-right: -0.1em;\n    margin-left: -0.1em;\n  }\n\n  .ml5 .letters {\n    display: inline-block;\n    opacity: 0;\n  }\n"])), props => props.textSize, props => props.color, props => props.lineColor);

exports.AnimatedText = AnimatedText;