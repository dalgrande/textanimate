import styled from "styled-components";

export const AnimatedText = styled.h1`
  .ml11 {
    font-weight: 700;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml11 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml11 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 100%;
    width: 3px;
    background-color: ${(props) => props.lineColor};
    transform-origin: 0 50%;
  }

  .ml11 .line1 {
    top: 0;
    left: 0;
  }

  .ml11 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
