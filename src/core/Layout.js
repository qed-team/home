import React from "react";
import styled, { ThemeProvider } from "styled-components";

import GlobalStyles from "./GlobalStyles";

const Layout = ({ children }) => {
  const theme = {
    fontFamily: {},
    fontSize: {},
    lineHeight: {},
    palette: {},
    spacing: {},
    mediaQueries: {},
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
