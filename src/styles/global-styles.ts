import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
  }

  body::-webkit-scrollbar {
  width: 12px;               /* width of the entire scrollbar */
}
body::-webkit-scrollbar-track {
  background-color: #07090D;      /* color of the tracking area */
}
body::-webkit-scrollbar-thumb {
  background: white;        /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.font.family.default};
    margin: ${({ theme }) => theme.spacings.large} 0;
  }

  p {
    margin: ${({ theme }) => theme.spacings.medium} 0;
  }

  ul, ol {
    margin: ${({ theme }) => theme.spacings.medium};
    padding: ${({ theme }) => theme.spacings.medium};
  }

  a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }

  .table {
    width: 100%;
    overflow-y: auto;
  }
`;
