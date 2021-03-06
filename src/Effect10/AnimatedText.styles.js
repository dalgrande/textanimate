import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml10 {
    position: relative;
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml10 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
  }

  .ml10 .letter {
    display: inline-block;
    line-height: 1em;
    transform-origin: 0 0;
    color: ${(props) => props.color};
  }
`;
