import React from "react";
import PropTypes from "prop-types";

import { Root } from "./styled";

const SvgIcon = ({ children, size = "xs", color = "black" }) => {
  return (
    <Root $size={size} $color={color} viewBox="0 0 24 24">
      {children}
    </Root>
  );
};

SvgIcon.propTypes = {
  size: PropTypes.oneOf(["xs", "s", "m"]),
  color: PropTypes.oneOf(["black", "white", "blue"]),
};

export default SvgIcon;
