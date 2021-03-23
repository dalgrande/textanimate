import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml5 {
    position: relative;
    font-weight: 300;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml5 .text-wrapper {
    position: relative;
    display: inline-block;
    padding-top: 0.1em;
    padding-right: 0.05em;
    padding-bottom: 0.15em;
    line-height: 1em;
  }

  .ml5 .line {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 3px;
    width: 100%;
    background-color: ${(props) => props.lineColor};
    transform-origin: 0.5 0;
  }

  .ml5 .ampersand {
    font-family: Baskerville, serif;
    font-style: italic;
    font-weight: 400;
    width: 1em;
    margin-right: -0.1em;
    margin-left: -0.1em;
  }

  .ml5 .letters {
    display: inline-block;
    opacity: 0;
  }
`;
