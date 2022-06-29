import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  background: ${theme.colors.dark};
  color:{${theme.colors.white}};
  padding:0;
  min-height: 100vh;
  display:flex;
  align-items:center;
  overflow-x: hidden;

  `}
`;
