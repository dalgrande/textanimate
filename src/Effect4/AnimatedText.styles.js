import styled from "styled-components";

export const AnimatedText = styled.h1`
  .ml4 {
    position: absolute;
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }
  .ml4 .letters {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0.3em;
    right: 0;
    opacity: 0;
  }
`;
