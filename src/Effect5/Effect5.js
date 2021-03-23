import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect5({
  children,
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
          <span class="letters letters-left">Signal</span>
          <span class="letters ampersand">&amp;</span>
          <span class="letters letters-right">Noise</span>
          <span class="line line2"></span>
        </span>
      </h1>
    </AnimatedText>
  );
}

export default Effect5;
