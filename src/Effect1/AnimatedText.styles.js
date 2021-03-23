import styled from "styled-components";

export const AnimatedText = styled.h1`
  .ml1 {
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml1 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
    text-shadow: ${(props) => props.textShadow};
  }

  .ml1 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml1 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 3px;
    width: 100%;
    background-color: ${(props) => props.lineColor};
    transform-origin: 0 0;
  }

  .ml1 .line1 {
    top: 0;
  }
  .ml1 .line2 {
    bottom: 0;
  }
`;
