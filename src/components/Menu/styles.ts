import styled, { css } from 'styled-components';

export const Menu = styled.menu`
  ${({ theme }) => css`

  display: flex;
  height: 6rem;
  top: 0;
  left:0;
  right: 0;
  background: transparent;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: fixed;
  transition: all 200ms ease-in-out;
  z-index: 4;



    `}
`;

export const Logo = styled.a`
  padding: 5rem;
`;

export const Netflix = styled.img`
  ${({ theme }) => css`
  width: 12rem;
  height: 12rem;
  `}
`;

export const Avatar = styled.a`
  padding: 5rem;
`;

export const icon = styled.img`
  ${({ theme }) => css`
  width: 3rem;
  height: 3rem;
  `}
`;
