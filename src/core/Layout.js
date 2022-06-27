import React from "react";
import { Helmet } from "react-helmet";

import favicon from "../static/favicon@2x.png";
import facebook from "../static/card-facebook.png";
import twitter from "../static/card-twitter.png";

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="We move startups forward" />
        <meta property="og:title" content="QED" />
        <meta property="og:description" content="We move startups forward" />
        <meta property="og:url" content="https://qed.team/" />
        <meta property="og:image" content={facebook} />
        <meta name="twitter:title" content="QED" />
        <meta name="twitter:description" content="We move startups forward" />
        <meta name="twitter:image" content={twitter} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" type="image/png" href={favicon} />
        <title>QED — We move startups forward</title>
      </Helmet>
      <main role="main">{children}</main>
    </>
  );
};

export default Layout;
