import styled, { css } from 'styled-components';

export const button2 = styled.button`
  ${({ theme }) => css`

  border: none;
  background: rgba(255,255,255, 10%);
  padding: 0.5rem 2rem;
  margin-top: 3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  font-weight: bold;
  font-size:  ${theme.font.sizes.small};


  :hover{
    background: rgba(255,255,255, 20%);
  }

  `}
`;

export const link2 = styled.a`
  ${({ theme }) => css`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;

>svg{
  width: 4rem;
  color: ${theme.colors.white};
  padding: 0 0.5rem;
}


  `}
`;
