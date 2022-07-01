import styled, { css } from 'styled-components';

export const itens = styled.div`
  ${({ theme }) => css`

  font-size: 1.8rem;
  font-weight: bold;
  margin-top: 1.5rem;
  color: ${theme.colors.white};

  `}
`;

export const Vote = styled.div`
  ${({ theme }) => css`
  display: inline-block;
  color: ${theme.colors.green};
  margin-right: 1.5rem;


  `}
`;

export const Year = styled.div`
  display: inline-block;
  margin-right: 1.5rem;
`;

export const Season = styled.div`
  display: inline-block;
`;

export const Description = styled.div`
  ${({ theme }) => css`

  margin-top: 1.5rem;
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.mediumGray};
  max-width: 35%;


  `}
`;

export const Genres = styled.div`
  ${({ theme }) => css`

  margin-top: 1.3rem;
  color: ${theme.colors.mediumGray};
  font-size: ${theme.font.sizes.small};
  font-style: italic;

  `}
`;
