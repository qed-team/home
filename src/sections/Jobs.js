import React, { useState } from "react";

import JobIntro from "../partials/JobIntro";

import { jobs } from "../data/jobs.json";

const Jobs = () => {
  const [selected, setSelected] = useState();

  return (
    <section className="container max-w-screen-lg mx-auto pt-60">
      <div className="flex space-x-28 mb-28">
        <h3 className="mb-5 text-4xl font-semibold whitespace-nowrap">Check our open positions</h3>
        <p className="text-2xl leading-10 text-gray-400">
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
