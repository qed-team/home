import React from "react";

import logo from "../static/logo.svg";
import arrow from "../static/icon-arrow.svg";

const Header = () => {
  return (
    <section id="header" className="flex flex-col w-11/12 items-center mx-auto container max-w-screen-lg pt-10 pb-10 sm:pt-10 sm:pb-12 sm:flex-row sm:justify-between">
      <a href="/" target="_self" className="block mb-3 sm:mb-0">
        <img src={logo} alt="QED Software" />
      </a>

      <a href="/jobs" className="flex items-center" data-action-contact>
        <span className="text-blue-50 text-lg font-semibold sm:text-2xl">Join us</span>

        <span className="bg-blue-50 block p-3 ml-5 rounded-full">
          <img src={arrow} alt="Join us" className="block" />
        </span>
      </a>
    </section>
  );
};

export default Header;
