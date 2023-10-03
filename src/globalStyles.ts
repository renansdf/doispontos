import { createGlobalStyle } from "styled-components";

import CarbonaLight from './fonts/Carbona-Light.otf';
import CarbonaRegular from './fonts/Carbona-Regular.otf';
import CarbonaBold from './fonts/Carbona-Bold.otf';
import CarbonaBlack from './fonts/Carbona-Black.otf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Carbona';
    src: url(${CarbonaLight}) format('opentype');
    font-weight: light;
    font-style: normal;
  }

  @font-face {
    font-family: 'Carbona';
    src: url(${CarbonaRegular}) format('opentype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Carbona';
    src: url(${CarbonaBold}) format('opentype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Carbona';
    src: url(${CarbonaBlack}) format('opentype');
    font-weight: black;
    font-style: normal;
  }

  html, body, *{
    margin: 0;
    box-sizing: border-box;
    padding: 0;
    list-style: none;
    text-decoration: none;
    font-family: 'Carbona', sans-serif;
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
  padding: '60px'
}

export default GlobalStyle;