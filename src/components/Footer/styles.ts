import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dark};
    height: 10rem;

  `}
`;
export const Container = styled.section`
  ${({ theme }) => css`

    display: flex;
    text-align: center;
    justify-content: center;
    padding: ${theme.spacings.small};


  `}
`;

export const link = styled.a`
  ${({ theme }) => css`

  padding:${theme.spacings.small};

  >svg{
    width: 3rem;
    height: 4rem;
    color: ${theme.colors.white};
  }

  `}
`;
