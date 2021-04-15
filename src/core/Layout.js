import React from "react";
import { Container } from "react-grid";
import styled, { ThemeProvider } from "styled-components";

import theme from "../config/theme";

import GlobalStyles from "./GlobalStyles";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
