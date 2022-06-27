import React, { useState } from "react";

import { jobs } from "../data/jobs.json";

const JobDescription = ({ description, responsibilities, requirements, plus }) => {
  return (
    <div className="flex flex-col mt-4 space-y-4">
      <p>{description}</p>
      <strong className="text-xl">Responsibilities</strong>
      <ul className="ml-4 space-y-2 list-disc">
        {responsibilities.map((r) => {
          return (
            <li>
              <small className="text-sm">{r}</small>
            </li>
          );
        })}
      </ul>

      <strong className="text-xl">Requirements</strong>
      <ul className="ml-4 space-y-2 list-disc">
        {requirements.map((r) => {
          return (
            <li>
              <small className="text-sm">{r}</small>
            </li>
          );
        })}
      </ul>

      {plus ? (
        <>
          <strong className="text-xl">Plus</strong>
          <ul className="ml-4 space-y-2 list-disc">
            {plus.map((p) => {
              return (
                <li>
                  <small className="text-sm">{p}</small>
                </li>
              );
            })}
          </ul>
        </>
      ) : null}

      <strong className="text-large">
        > To apply send your resume at{" "}
        <a classname="text-blue-100" href="mailto:jobs@qed.team">
          jobs@qed.team
        </a>
      </strong>
    </div>
  );
};

const Jobs = () => {
  const [opened, setOpened] = useState("");

  return (
    <section className="container max-w-screen-lg mx-auto py-60">
      <div className="flex space-x-28 mb-28">
        <h3 className="mb-5 text-4xl font-semibold whitespace-nowrap">Check our open positions</h3>
        <p className="text-2xl leading-10 text-gray-400">
          We thrive on diversity and believe that our success is defined by the people in our team. We are coding experts, consultants, open source enthusiasts, and researchers at
          heart. We love a challenge.
        </p>
      </div>

      <div className="flex flex-col space-y-8">
        {jobs.map((job) => (
          <div key={job.name} className="flex flex-col space-y-1 cursor-pointer" onClick={() => setOpened(opened === job.slug ? "" : job.slug)}>
            <hr />
            <strong className="text-2xl leading-loose">{job.name}</strong>
            <div className="flex items-center space-x-4">
              <small className="text-xl text-gray-400">{job.location}</small>
              <small className="text-xl text-gray-400">{job.allocation}</small>
              <small className="text-xl text-gray-400">{job.title}</small>
            </div>
            {opened === job.slug ? <JobDescription description={job.description} requirements={job.requirements} responsibilities={job.responsibilities} plus={job.plus} /> : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
