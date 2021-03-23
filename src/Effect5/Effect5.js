import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect5({
  text1 = "1",
  text2 = "2",
  text3 = "3",
  loop = true,
  color = "black",
  textSize = 1,
}) {
  const run = () => {
    EffectGear(loop);
  };
  React.useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatedText color={color} textSize={textSize}>
      <h1 class="ml5">
        <span class="text-wrapper">
          <span class="line line1"></span>
          <span class="letters letters-left">{text1}</span>
          <span class="letters ampersand">{text2}</span>
          <span class="letters letters-right">{text3}</span>
          <span class="line line2"></span>
        </span>
      </h1>
    </AnimatedText>
  );
}

export default Effect5;
