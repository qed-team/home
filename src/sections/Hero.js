import React from "react";

import shapes from "../data/shapes.json";

import { theme } from "../../tailwind.config";

const Hero = () => {
  return (
    <section className="container max-w-screen-xl mx-auto relative">
      <h1 className="text-6xl whitespace-nowrap font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        We <em>move</em> startups forward.
      </h1>

      <svg viewBox="0 0 1500 620">
        {shapes.paths.map((d, index) => (
          <path key={index} d={d} fill={theme.extend.colors.gray["100"]} fillRule="evenodd" clipRule="evenodd" />
        ))}
      </svg>
    </section>
  );
};

export default Hero;
