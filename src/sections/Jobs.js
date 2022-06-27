import React, { useState } from "react";

import JobIntro from "../partials/JobIntro";

import { jobs } from "../data/jobs.json";

const Jobs = () => {
  const [selected, setSelected] = useState();

  return (
    <section className="container w-11/12 max-w-screen-lg mx-auto pt-20 md:pt-40 lg:pt-60">
      <div className="flex flex-col mb-10 md:mb-28 lg:flex-row lg:space-x-28">
        <h3 className="text-2xl md:text-4xl font-semibold whitespace-nowrap mb-5">Check our open positions</h3>
        <p className="text-lg text-gray-400 leading-8 md:leading-10 md:text-2xl">
          We thrive on diversity and believe that our success is defined by the people in our team. We are coding experts, consultants, open source enthusiasts, and researchers at
          heart. We love a challenge.
        </p>
      </div>

      <div className="flex flex-col">
        {jobs.map((job) => (
          <JobIntro key={job.name} job={job} selected={job.slug === selected?.slug} onSelect={setSelected} />
        ))}
      </div>
    </section>
  );
};

export default Jobs;
