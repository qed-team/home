import React from "react";
import PropTypes from "prop-types";

import { Root, Title, Subtitle } from "./styled";

const Card = ({ primary, secondary }) => {
  return (
    <Root>
      <Subtitle>{primary}</Subtitle>
      <Title>{secondary}</Title>
    </Root>
  );
};

Card.propTypes = {
  primary: PropTypes.string.isRequired,
  secondary: PropTypes.string.isRequired,
};

export default Card;
