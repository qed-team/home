import React from "react";

import JobDetails from "../partials/JobDetails";

const JobIntro = ({ job, selected, onSelect }) => {
  return (
    <div key={job.name} className="flex flex-col space-y-1 border-b border-gray-100">
      <div className="cursor-pointer py-6 md:py-8" onClick={() => onSelect(selected ? undefined : job)}>
        <strong className="text-xl md:text-2xl leading-10 block sm:mb-2">{job.name}</strong>
        <div className="flex items-center space-x-4">
          <small className="text-xl text-gray-400">{job.location}</small>
          <small className="text-xl text-gray-400">{job.allocation}</small>
          <small className="text-xl text-gray-400">{job.title}</small>
        </div>
      </div>

      {selected ? <JobDetails job={job} /> : null}
    </div>
  );
};

export default JobIntro;
