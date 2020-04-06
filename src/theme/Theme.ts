import * as layoutCSS from './layout.css';
import fontsCSS from './fonts.css';

import { createGlobalStyle } from 'styled-components';

// import chromajs from 'chroma-js';

const theme = {
    backgroundColor: '#0A1B2A',
    textColor: 'white',
};

export default theme;

export const ThemeGlobalStyle = createGlobalStyle`
  ${fontsCSS}
    
  ${layoutCSS}

  html,body{
      color: ${theme.textColor};
  }
`;
