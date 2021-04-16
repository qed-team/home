import reset from "styled-reset-advanced";
import { createGlobalStyle } from "styled-components";

import theme from "../config/theme";

const GlobalStyles = createGlobalStyle`
  ${reset}

  body {
    font-size: ${theme.fontSize.body};
    font-family: ${theme.fontFamily.main};
  }
`;

export default GlobalStyles;
