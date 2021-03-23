"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  .ml4 {\n    position: absolute;\n    font-weight: 900;\n    font-size: ", "em;\n  }\n  .ml4 .letters {\n    position: absolute;\n    margin: auto;\n    left: 0;\n    top: 0.3em;\n    right: 0;\n    opacity: 0;\n    color: ", ";\n  }\n"])), props => props.textSize, props => props.color);

exports.AnimatedText = AnimatedText;