import React from "react";

const JobDetails = ({ job }) => {
  const dangerouslySetInnerHTML = {
    __html: job.description,
  };

  return (
    <div className="flex flex-col leading-10 text-lg md:text-xl pb-8">
      <p className="mb-8 leading-10" dangerouslySetInnerHTML={dangerouslySetInnerHTML} />

      <div className="flex flex-col mb-8">
        <strong className="text-xl md:text-2xl leading-loose text-black block mb-6">Responsibilities</strong>
        <ul className="list-decimal space-y-1 ml-6">
          {job.responsibilities.map((responsability) => (
            <li className="text-gray-400 leading-10" key={responsability}>
              {responsability}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col mb-8">
        <strong className="text-xl md:text-2xl leading-loose text-black block mb-6">Requirements</strong>
        <ul className="list-decimal space-y-1 ml-6">
          {job.requirements.map((requirement) => (
            <li className="text-gray-400 leading-10" key={requirement}>
              {requirement}
            </li>
          ))}
        </ul>
      </div>

      {job?.plus ? (
        <div className="flex flex-col mb-8">
          <strong className="text-xl md:text-2xl leading-loose text-black block mb-6">Plus</strong>
          <ul className="list-decimal space-y-1 ml-6">
            {job.plus.map((plus) => (
              <li className="text-gray-400" key={plus}>
                {plus}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <strong className="text-black">
        To apply send your resume at
        <a className="text-blue-50 ml-2 border-b-2 border-blue-50 font-semibold inline-block" href="mailto:jobs@qed.team">
          jobs@qed.team
        </a>
      </strong>
    </div>
  );
};

export default JobDetails;
