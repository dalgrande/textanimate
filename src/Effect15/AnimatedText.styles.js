import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml15 {
    font-weight: 800;
    font-size: ${(props) => props.textSize}em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: ${(props) => props.color};
  }

  .ml15 .word {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
