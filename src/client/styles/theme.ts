import { createGlobalStyle } from 'styled-components';
import colors from './colors';
import fonts from './fonts';

const styledTheme: { colors: { [key: string]: { [key: string]: string } }; } = {
  colors
};

export const reset = `
  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const fontFamilies = `
  @font-face {
    font-family: 'Aprova';
    src:url('/static/fonts/Aprova-Regular.woff2') format('woff2'), 
    url('/static/fonts/Aprova-Regular.woff') format('woff'), 
    url('/static/fonts/Aprova-Regular.otf') format('opentype'), 
    url('/static/fonts/Aprova-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face{
    font-family: 'Aprova';
    src:url('/static/fonts/Aprova-Bold.woff2') format('woff2'), 
    url('/static/fonts/Aprova-Bold.woff') format('woff'), 
    url('/static/fonts/Aprova-Bold.otf') format('opentype'), 
    url('/static/fonts/Aprova-Bold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face{
    font-family: 'Aprova';
    src:url('/static/fonts/Aprova-Black.woff2') format('woff2'), 
    url('/static/fonts/Aprova-Black.woff') format('woff'), 
    url('/static/fonts/Aprova-Black.otf') format('opentype'), 
    url('/static/fonts/Aprova-Black.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  } 
` 

const GlobalStyle = createGlobalStyle`
  ${reset}

  ${fontFamilies}

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.4rem;
  }

  html,
  body {
    height: 100%;
    font-family: ${fonts.default};
    color: ${colors.black.normal};
  }

  h1, h2, h3, h4, h5, h6, p {
    font-family: ${fonts.default};
    font-size: 20px;
  }
`;

export { styledTheme, GlobalStyle };