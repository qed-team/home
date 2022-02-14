import React from "react";

import team from "../data/team.json";

const About = () => {
  return (
    <section className="container max-w-screen-lg mx-auto py-60">
      <div className="flex space-x-28 mb-28">
        <h3 className="text-4xl font-semibold whitespace-nowrap mb-5">A team to be proud of</h3>
        <p className="text-2xl text-gray-400 leading-10">
          We thrive on diversity and believe that our success is defined by the people in our team. We are coding
          experts, consultants, open source enthusiasts, and researchers at heart. We love a challenge.
        </p>
      </div>

      <div className="grid gap-8 grid-cols-3 grid-rows-3">
        {team.peoples.map((person) => (
          <div key={person.name} className="flex flex-col">
            <strong className="text-2xl leading-loose">{person.name}</strong>
            <small className="text-xl text-gray-400">{person.role}</small>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
