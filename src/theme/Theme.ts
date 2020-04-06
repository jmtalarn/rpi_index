import * as layoutCSS from './layout.css';
import fontsCSS from './fonts.css';

import { createGlobalStyle } from 'styled-components';

// import chromajs from 'chroma-js';

const theme = {
    background: {
        color: 'rgb(15,15,17)',
        gradient:
            'radial-gradient(circle at center bottom, rgba(15,15,17,0.9920343137254902) 0%, rgba(13,41,65,1) 100%)',
    },
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
