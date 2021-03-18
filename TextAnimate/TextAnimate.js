import React from "react";

import { AnimatedText } from "./AnimatedText.styles";

import { EffectGear } from "./EffectGear";

export function TextAnimate({
  children,
  loop = true,
  lineColor = "black",
  color = "black",
  textSize = 1,
  textShadow = "2px 2px 4px #000000",
}) {
  const run = () => {
    EffectGear(loop);
  };
  React.useEffect(() => {
    run();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AnimatedText
      color={color}
      lineColor={lineColor}
      textSize={textSize}
      textShadow={textShadow}
    >
      <h1 class="ml1">
        <span class="text-wrapper">
          <span class="line line1" />
          <span class="letters">{children}</span>
          <span class="line line2" />
        </span>
      </h1>
    </AnimatedText>
  );
}
