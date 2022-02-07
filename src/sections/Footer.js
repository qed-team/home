import React from "react";

import arrow from "../static/icon-go-up.svg";

const Footer = () => {
  return (
    <section className="container max-w-screen-lg mx-auto flex justify-between items-center py-10">
      <p className="text-gray-400 text-base">
        Copyright &copy; 2022 QED. All rights reserved. QED is on <a href="https://github.com/qed-team" target="_blank" className="border-b">GitHub</a>.
      </p>

      <button className="flex p-2 -mr-2">
        <img src={arrow} alt="Go up" />
      </button>
    </section>
  );
};

export default Footer;
