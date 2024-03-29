import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Space Grotesk', sans-serif;
  }
  
  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 900,
    'GRAD' 0,
    'opsz' 48
  }
`;

export const defaultValues = {
  padding: '10%'
}

export default GlobalStyle;