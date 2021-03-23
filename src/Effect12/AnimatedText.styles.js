import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml12 {
    font-weight: 200;
    font-size: ${(props) => props.textSize}em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    color: ${(props) => props.color};
  }

  .ml12 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
