"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ml13 {\n    font-size: ", "em;\n    text-transform: uppercase;\n    letter-spacing: 0.5em;\n    font-weight: 600;\n    color: ", ";\n  }\n\n  .ml13 .letter {\n    display: inline-block;\n    line-height: 1em;\n    color: ", ";\n  }\n"])), props => props.textSize, props => props.color, props => props.color);

exports.AnimatedText = AnimatedText;