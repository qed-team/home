import React from "react";
import PropTypes from "prop-types";

import { Root } from "./styled";

const Typography = ({ children, variant = "body", line = "s", weight = "regular", color = "black" }) => {
  return (
    <Root $variant={variant} $line={line} $weight={weight} $color={color}>
      {children}
    </Root>
  );
};

Typography.propTypes = {
  line: PropTypes.oneOf(["xs", "s", "m", "l", "xl"]),
  color: PropTypes.oneOf(["black", "gray", "blue"]),
  weight: PropTypes.oneOf(["light", "regular", "bold"]),
  variant: PropTypes.oneOf(["caption", "body", "h5", "h4", "h3", "h2", "h1"]),
};

export default Typography;
