import React from "react";

const Cards = () => {
  return (
    <section className="container max-w-screen-lg mx-auto py-60 space-x-20 flex items-center">
      <div className="flex">
        <div className="p-5 rounded-3xl bg-blue-50 text-white w-48 h-48 mt-36 shadow-2xl relative z-10">
          <small className="font-semibold text-xl leading-6">Years of startup experience</small>
          <h4 className="font-semibold text-7xl mt-9">40</h4>
        </div>

        <div className="p-5 rounded-3xl bg-blue-50 text-white w-48 h-48 -ml-5 -mr-20 shadow-2xl relative">
          <small className="font-semibold text-xl leading-6">Years of remote working</small>
          <h4 className="font-semibold text-7xl mt-9">15</h4>
        </div>

        <div className="p-5 rounded-3xl bg-blue-50 text-white w-48 h-48 mt-44 shadow-2xl">
          <small className="font-semibold text-xl leading-6">Products shipped</small>
          <h4 className="font-semibold text-7xl mt-9">7</h4>
        </div>
      </div>

      <p className="text-2xl font-semibold leading-10">
        We are a web and product development company helping startups all over the world reach their audience. We pride with experience, knowledge and a driven desire for
        excellence.
      </p>
    </section>
  );
};

export default Cards;
