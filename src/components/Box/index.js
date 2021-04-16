import React from "react";
import PropTypes from "prop-types";

import { Root } from "./styled";

const Box = ({
  children,
  mb = 0,
  mt = 0,
  ml = 0,
  mr = 0,
  align = "center",
  display = "flex",
  justify = "flex-start",
}) => {
  return (
    <Root $mb={mb} $mt={mt} $ml={ml} $mr={mr} $display={display} $align={align} $justify={justify}>
      {children}
    </Root>
  );
};

Box.propTypes = {
  mb: PropTypes.number,
  mt: PropTypes.number,
  mr: PropTypes.number,
  ml: PropTypes.number,
  display: PropTypes.oneOf(["flex", "block", "inline"]),
  align: PropTypes.oneOf(["center", "flex-start", "flex-end"]),
  justify: PropTypes.oneOf(["center", "flex-start", "flex-end"]),
};

export default Box;
