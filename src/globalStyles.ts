import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyle;