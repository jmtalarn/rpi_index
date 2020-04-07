import * as layoutCSS from './layout.css';
import fontsCSS from './fonts.css';

import { createGlobalStyle } from 'styled-components';

import chroma from 'chroma-js';

const mainColor = chroma(15, 15, 17);
const backgroundDarkSpotColor = chroma(13, 41, 65);

const theme = {
    background: {
        color: mainColor,
        gradient: `radial-gradient(circle at center bottom, ${mainColor} 0%, ${backgroundDarkSpotColor} 100%)`,
    },
    fileBox: {
        backgroundColor: chroma('white').alpha(0.2),
    },
    boxShadow: {
        intense: '10px 10px 5px 0px rgba(0,0,0,0.75);',
        light: '5px 5px 5px 0px rgba(0,0,0,0.25);',
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
