import styled from "styled-components";

export const Root = styled.span`
  display: inline-block;
  color: ${(props) => props.theme.palette[props.$color]};
  font-family: ${(props) => props.theme.fontFamily.main};
  font-size: ${(props) => props.theme.fontSize[props.$variant]};
  font-weight: ${(props) => props.theme.fontWeight[props.$weight]};
  line-height: ${(props) => props.theme.fontWeight[props.$line]};
`;
