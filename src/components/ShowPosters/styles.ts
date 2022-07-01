import { Title as Heading } from '../Heading/styles';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  ${Heading}{
    text-align: center;
    margin: 0 0 0.5rem 0;
  }
  padding:  0 0 5.5rem 0 ;
  background: ${theme.colors.dark};


  `}
`;

export const ButtonLeft = styled.button`
  ${({ theme }) => css`
  position: absolute;
  height: 27.1rem;
  z-index: 1;
  left: 0;
  background: linear-gradient(to right , black 15%, transparent);
  border: none;
  opacity: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  >svg{
    width: 6rem;
    color: ${theme.colors.white};
  }

  `}
`;
export const ButtonRight = styled.button`
  ${({ theme }) => css`
  position: absolute;
  height: 27.1rem;
  display: flex;
  z-index: 1;
  right: 0;
  background: linear-gradient(to left , black 15%, transparent);
  border: none;
  opacity: 0;
  cursor: pointer;
  transition: all 200ms ease-in-out;
  >svg{
    width: 6rem;
    color: ${theme.colors.white};
  }

  `}
`;

export const Container = styled.div`
  display: flex;
  transition: all 250ms ease-in-out;
  overflow:hidden;

  :hover{

    ${ButtonLeft}{
      opacity:1;
    }

    ${ButtonRight}{
      opacity:1;
    }
  }

`;
