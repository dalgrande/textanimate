import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml4 {
    position: absolute;
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
  }
  .ml4 .letters {
    position: absolute;
    margin: auto;
    left: 0;
    top: 0.3em;
    right: 0;
    opacity: 0;
    color: ${(props) => props.color};
  }
`;
