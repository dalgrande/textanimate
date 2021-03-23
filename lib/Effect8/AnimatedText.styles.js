"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnimatedText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const AnimatedText = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  h1.ml8 {\n    font-weight: 900;\n    font-size: 4.5em;\n    color: black;\n    width: 3em;\n    height: 3em;\n  }\n\n  .ml8 .letters-container {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n    height: 1em;\n  }\n\n  .ml8 .letters {\n    position: relative;\n    z-index: 2;\n    display: inline-block;\n    line-height: 0.7em;\n    left: 0.3em;\n    top: -0.2em;\n  }\n\n  .ml8 .bang {\n    position: relative;\n    font-size: 1.4em;\n    top: auto;\n  }\n\n  .ml8 .circle {\n    position: absolute;\n    left: 0;\n    right: 0;\n    margin: auto;\n    top: 0;\n    bottom: 0;\n  }\n\n  .ml8 .circle-white {\n    width: 3em;\n    height: 3em;\n    border: 2px dashed white;\n    border-radius: 2em;\n  }\n\n  .ml8 .circle-dark {\n    width: 2.2em;\n    height: 2.2em;\n    background-color: #4f7b86;\n    border-radius: 3em;\n    z-index: 1;\n  }\n\n  .ml8 .circle-dark-dashed {\n    border-radius: 2.4em;\n    background-color: transparent;\n    border: 2px dashed #4f7b86;\n    width: 2.3em;\n    height: 2.3em;\n  }\n"])));

exports.AnimatedText = AnimatedText;