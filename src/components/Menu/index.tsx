import { useEffect, useState } from 'react';
import * as Styled from './styles';

export const Menu = () => {
  const [background, setBackground] = useState(false);

  useEffect(() => {
    const scroll = () => {
      window.scrollY > 10 ? setBackground(true) : setBackground(false);
    };
    window.addEventListener('scroll', scroll);
    return () => {
      window.removeEventListener('scroll', scroll);
    };
  });
  return (
    <Styled.Menu
      aria-label="menu"
      className="menu"
      style={
        background ? { background: '#0d0c0c' } : { background: 'transparent' }
      }
    >
      <Styled.Logo href="/" target="_self" aria-label="Netflix">
        <Styled.Netflix src="/assets/image/netflix.svg" />
      </Styled.Logo>

      <Styled.Avatar href="#" aria-label="Icone">
        <Styled.icon src="/assets/image/avatar.png" />
      </Styled.Avatar>
    </Styled.Menu>
  );
};
