import { createGlobalStyle } from 'styled-components';
import { colorPalette } from './theme';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: ${colorPalette.softWhite};
  }

  button {
    cursor: pointer;
  }
`;
