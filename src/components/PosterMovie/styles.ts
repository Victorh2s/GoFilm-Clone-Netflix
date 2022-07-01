import { Description } from '../ItensApi/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`

  background: ${theme.colors.dark};
  min-height: 100vh;
  display: flex;
  margin-top: 3rem;


  @media ${theme.media.lteSmall} {
    display: block;

    ${Image}{
      margin: 0;
    }

    ${YearAndSeason}{
      margin-top: -5rem;
    }



  }
  @media ${theme.media.lteSuperSmall} {
    display: block;

    ${Image}{
      margin: 0;
        max-width: 45rem;
    }

    ${YearAndSeason}{
      margin-top: -5rem;
    }



  }

  `}
`;

export const Poster = styled.div`
  text-align: center;
  justify-content: center;

`;

export const Image = styled.img`
  ${({ theme }) => css`


  max-width: 45rem;
  padding: ${theme.spacings.large};
  margin-left: 5rem;



  `}
`;

export const YearAndSeason = styled.section`
  ${({ theme }) => css`

    padding-top: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall};


  ${Description}{
    max-width: 100%;
  }


  `}
`;
