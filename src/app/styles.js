import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
  }
  a {
    text-decoration: none;
  }
  body {
  background-color: ${({ theme }) => theme.color.background};
  }
`;
