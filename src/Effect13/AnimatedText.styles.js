import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml13 {
    font-size: ${(props) => props.textSize}em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    font-weight: 600;
    color: ${(props) => props.color};
  }

  .ml13 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
