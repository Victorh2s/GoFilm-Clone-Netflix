import * as Styled from './styles';
import { SectionContainer, SectionContainerProps } from '../SectionContainer';

export type SectionBackgroundProps = SectionContainerProps;

export const SectionBackground = ({ children }: SectionBackgroundProps) => {
  return (
    <Styled.Wrapper>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Wrapper>
  );
};
