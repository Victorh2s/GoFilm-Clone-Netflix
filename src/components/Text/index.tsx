import * as Styled from './styles';

export type TextProps = {
  children: React.ReactNode | string;
};

export const Text = ({ children }: TextProps) => {
  return <Styled.Wrapper>{children}</Styled.Wrapper>;
};
