import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml9 {
    position: relative;
    font-weight: 200;
    font-size: ${(props) => props.textSize}em;
  }

  .ml9 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.2em;
    padding-right: 0.05em;
    padding-bottom: 0.1em;
    overflow: hidden;
  }

  .ml9 .letter {
    transform-origin: 50% 100%;
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
