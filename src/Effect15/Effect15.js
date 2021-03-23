import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect15({
  text1 = "1",
  text2 = "2",
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
      <h1 class="ml15">
        <span class="word">{text1}</span>
        <span class="word">{text2}</span>
      </h1>
    </AnimatedText>
  );
}

export default Effect15;
