import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect8({
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
      <h1 class="ml8">
        <span class="circle circle-white"></span>
        <span class="circle circle-dark">
          <span class="letters-container">
            <span class="letters letters-left">Hi</span>
            <span class="letters bang">!</span>
          </span>
        </span>
        <span class="circle circle-container">
          <span class="circle circle-dark-dashed"></span>
        </span>
      </h1>
    </AnimatedText>
  );
}

export default Effect8;
