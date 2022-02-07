import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="We move startups forward" />
        <title>QED — We move startups forward</title>
      </Helmet>
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
