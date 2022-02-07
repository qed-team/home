import React from "react";

const Contact = () => {
  return (
    <section className="container max-w-screen-lg mx-auto py-60">
      <div className="max-w-sm">
        <h3 className="text-4xl font-semibold mb-5">Get in touch</h3>
        <p className="text-2xl text-gray-400 mb-10 leading-10">We’re located in Timisoara, Romania and help startups around the world.</p>
        <a href="/" target="_self" className="text-blue-50 text-2xl leading-10 border-b-2 border-blue-50 font-semibold inline-block">
          hello@qed.com
        </a>
      </div>
    </section>
  );
};

export default Contact;
