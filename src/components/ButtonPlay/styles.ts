import { Wrapper as Text } from '../Text/styles';
import styled, { css } from 'styled-components';

export const button = styled.button`
  ${({ theme }) => css`

  border: none;
  background: rgba(255,255,255, 70%);
  padding: 0.5rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size:  ${theme.font.sizes.small};

  :hover{
    background: rgba(255,255,255, 80%);
  }

  `}
`;

export const link = styled.a`
  ${({ theme }) => css`
  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;

  ${Text}{
    color: ${theme.colors.dark};
  }

>svg{
  width: 4rem;
  color: black;
  padding: 0 0.5rem;
}
text-decoration: none;
color: ${theme.colors.dark};

  `}
`;
