import styled from "styled-components";

export const Root = styled.div`
  display: ${(props) => props.$display};
  align-items: ${(props) => props.$align};
  justify-content: ${(props) => props.$justify};
  margin-left: ${(props) => props.$ml * props.theme.spacing.factor};
  margin-right: ${(props) => props.$mr * props.theme.spacing.factor};
  margin-top: ${(props) => props.$mt * props.theme.spacing.factor};
  margin-bottom: ${(props) => props.$mb * props.theme.spacing.factor};
`;
