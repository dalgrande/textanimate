import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function Effect12({
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
      <h1 class="ml12">{children}</h1>
    </AnimatedText>
  );
}

export default Effect12;
