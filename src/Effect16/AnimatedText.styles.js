import styled from "styled-components";

export const AnimatedText = styled.div`
  .ml16 {
    padding: 40px 0;
    font-weight: 800;
    font-size: ${(props) => props.textSize}em;
    text-transform: uppercase;
    letter-spacing: 0.5em;
    overflow: hidden;
    color: ${(props) => props.color};
  }

  .ml16 .letter {
    display: inline-block;
    line-height: 1em;
    color: ${(props) => props.color};
  }
`;
