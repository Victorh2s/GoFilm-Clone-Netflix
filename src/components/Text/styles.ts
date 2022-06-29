import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  font-size: ${theme.font.sizes.small};
  color:${theme.colors.white};
  font-family: ${theme.font.family.default};

  a, a:visited, a:link{
      color: ${theme.colors.white};
      text-decoration: none;
      transition: all 300ms ease-in-out;
      }
    a:hover{
      filter: brightness(50%);
    }

  @media ${theme.media.lteMedium}{
      font-size: 1.6rem;
  }

  `}
`;
