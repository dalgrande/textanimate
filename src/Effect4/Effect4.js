import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect4({
  text1 = "ready",
  text2 = "set",
  text3 = "go!",
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
      <h1 class="ml4">
        <span class="letters letters-1">{text1}</span>
        <span class="letters letters-2">{text2}</span>
        <span class="letters letters-3">{text3}</span>
      </h1>
    </AnimatedText>
  );
}

export default Effect4;
