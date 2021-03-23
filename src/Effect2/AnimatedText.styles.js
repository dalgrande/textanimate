import styled from "styled-components";

export const AnimatedText = styled.h1`
  .ml2 {
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }

  .ml2 .letter {
    display: inline-block;
    line-height: 1em;
  }
`;
