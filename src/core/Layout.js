import React from "react";
import { Container } from "react-grid";
import { Helmet } from "react-helmet";
import styled, { ThemeProvider } from "styled-components";

import theme from "../config/theme";

import GlobalStyles from "./GlobalStyles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="We move startups forward" />
        <title>QED — We move startups forward</title>
      </Helmet>
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
