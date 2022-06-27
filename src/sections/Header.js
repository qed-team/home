import React from "react";

import logo from "../static/logo.svg";
import arrow from "../static/icon-arrow.svg";

const Header = () => {
  return (
    <section className="container container-xl mx-auto max-w-screen-lg flex justify-between items-center pt-10 pb-12">
      <a href="/" target="_self" className="block">
        <img src={logo} alt="QED Software" />
      </a>

      <button className="flex items-center" data-action-contact>
        <span className="text-blue-50 text-2xl font-semibold"><a href="mailto:ioana@qed.team">Get in touch</a></span>
        <span className="bg-blue-50 block p-3 ml-5 rounded-full">
          <img src={arrow} alt="Get in touch" className="block" />
        </span>
      </button>
    </section>
  );
};

export default Header;
