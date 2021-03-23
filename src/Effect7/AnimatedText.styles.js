import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml7 {
    position: relative;
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }
  .ml7 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
  }
  .ml7 .letter {
    transform-origin: 0 100%;
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
