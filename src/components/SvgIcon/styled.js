import styled from "styled-components";

export const Root = styled.svg`
  width: ${(props) => props.theme.sizing[props.$size]};
  height: ${(props) => props.theme.sizing[props.$size]};
  fill: ${(props) => props.theme.palette[props.$color]};
`;
