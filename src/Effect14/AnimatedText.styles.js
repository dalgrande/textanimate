import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml14 {
    font-weight: 200;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml14 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
  }

  .ml14 .line {
    opacity: 0;
    position: absolute;
    left: 0;
    height: 2px;
    width: 100%;
    transform-origin: 100% 100%;
    bottom: 0;
    background-color: black;
  }

  .ml14 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
