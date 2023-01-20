import React from "react";
import AnimatedCursor from "react-animated-cursor";

export const AnimCursor = () => {
  return (
    <AnimatedCursor
      trailingSpeed={100}
      innerSize={12}
      outerSize={16}
      color="231, 231, 231"
      outerAlpha={0.9}
      innerScale={0.7}
      outerScale={8}
      outerStyle={{
        mixBlendMode: "exclusion",
      }}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".article-description-section",
        ".article-title-section",
      ]}
    />
  );
};
