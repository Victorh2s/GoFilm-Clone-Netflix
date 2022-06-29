import { Wrapper as Text } from '../Text/styles';
import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Wrapper = styled.section`
    height: 97vh;
`;

export const GladientVertical = styled.div`
width: inherit;
height:inherit;
background: linear-gradient(to top, #0d0c0c 5%, transparent 100%);

`;

export const GladientHorizontal = styled.div`

width: inherit;
height:inherit;
background: linear-gradient(to right , #0d0c0c 18%, transparent 95%);
display: flex;
flex-direction: column;
justify-content: center;
padding-left: 3rem;
padding-top: 4rem;

${Heading}{
  max-width: 50%;
}

`;

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

export const buttons = styled.button`
  ${({ theme }) => css`

  border: none;
  background: rgba(255,255,255, 70%);
  padding: 1rem 2rem;
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

export const buttons2 = styled.button`
  ${({ theme }) => css`

  border: none;
  background: rgba(255,255,255, 10%);
  padding: 1rem 2rem;
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
