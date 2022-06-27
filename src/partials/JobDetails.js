import React from "react";

const JobDetails = ({ job }) => {
  return (
    <div className="flex flex-col pt-8">
      <p className="text-xl mb-8 leading-10">{job.description}</p>

      <div className="flex flex-col mb-8">
        <strong className="text-xl text-black block mb-6">Responsibilities</strong>
        <ul className="space-y-2 list-decimal ml-6">
          {job.responsibilities.map((responsability) => (
            <li className="text-xl text-gray-400 leading-10" key={responsability}>
              {responsability}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-8">
        <strong className="text-xl text-black block mb-6">Requirements</strong>
        <ul className="space-y-2 list-decimal ml-6">
          {job.requirements.map((requirement) => (
            <li className="text-xl text-gray-400 leading-10" key={requirement}>
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-8">
        <strong className="text-xl text-black block mb-6">Plus</strong>
        <ul className="space-y-2 list-decimal ml-6">
          {job.plus.map((plus) => (
            <li className="text-xl text-gray-400 leading-10" key={plus}>
              {plus}
            </li>
          ))}
        </ul>
      </div>

      <strong className="text-lg text-black">
        To apply send your resume at
        <a className="text-blue-50 ml-2 leading-10 border-b-2 border-blue-50 font-semibold inline-block" href="mailto:jobs@qed.team">
          jobs@qed.team
        </a>
      </strong>
    </div>
  );
};

export default JobDetails;
