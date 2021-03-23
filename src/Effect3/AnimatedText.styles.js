import styled from "styled-components";

export const AnimatedText = styled.h1`
  .ml3 {
    font-weight: 900;
    font-size: ${(props) => props.textSize}em;
    color: ${(props) => props.color};
  }
`;
