import * as Styled from './styles';

export type HeadingProps = {
  children: React.ReactNode | string;
  colorDark?: boolean;
  uppercase?: boolean;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'small' | 'medium' | 'big' | 'huge';
};

export const Heading = ({
  children,
  colorDark = true,
  uppercase = false,
  as = 'h1',
  size = 'big',
}: HeadingProps) => {
  return (
    <Styled.Title
      colorDark={colorDark}
      uppercase={uppercase}
      as={as}
      size={size}
    >
      {children}
    </Styled.Title>
  );
};
