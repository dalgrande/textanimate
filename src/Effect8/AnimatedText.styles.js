import styled from "styled-components";

export const AnimatedText = styled.div`
  h1.ml8 {
    font-weight: 900;
    font-size: 4.5em;
    color: black;
    width: 3em;
    height: 3em;
  }

  .ml8 .letters-container {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
    height: 1em;
  }

  .ml8 .letters {
    position: relative;
    z-index: 2;
    display: inline-block;
    line-height: 0.7em;
    left: 0.3em;
    top: -0.2em;
  }

  .ml8 .bang {
    position: relative;
    font-size: 1.4em;
    top: auto;
  }

  .ml8 .circle {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  .ml8 .circle-white {
    width: 3em;
    height: 3em;
    border: 2px dashed white;
    border-radius: 2em;
  }

  .ml8 .circle-dark {
    width: 2.2em;
    height: 2.2em;
    background-color: #4f7b86;
    border-radius: 3em;
    z-index: 1;
  }

  .ml8 .circle-dark-dashed {
    border-radius: 2.4em;
    background-color: transparent;
    border: 2px dashed #4f7b86;
    width: 2.3em;
    height: 2.3em;
  }
`;
