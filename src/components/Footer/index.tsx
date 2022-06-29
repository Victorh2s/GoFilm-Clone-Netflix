import * as Styled from './styles';
import { Github } from '@styled-icons/bootstrap';
import { Linkedin } from '@styled-icons/bootstrap';

export const Footer = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.link
          href="https://github.com/Victorh2s"
          target={'_blank'}
          role="img"
          aria-label="github"
        >
          <Github />
        </Styled.link>

        <Styled.link
          href="https://www.linkedin.com/in/victorhdss/"
          target={'_blank'}
          role="img"
          aria-label="linkedin"
        >
          <Linkedin />
        </Styled.link>
      </Styled.Container>
    </Styled.Wrapper>
  );
};
