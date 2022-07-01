import styled from 'styled-components';
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
