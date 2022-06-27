import React from "react";

import shapes from "../data/shapes.json";

import { theme } from "../../tailwind.config";

const Hero = ({ jobs }) => {
  return (
    <section className="container w-11/12 max-w-screen-xl mx-auto relative">
      <h1 className="whitespace-nowrap font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-4xl md:text-6xl">
        {jobs ? (
          <>
            Find your <em>dream</em> job.
          </>
        ) : (
          <>
            We <em>move</em> startups forward.
          </>
        )}
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
