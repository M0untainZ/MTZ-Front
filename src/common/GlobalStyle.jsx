import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


//color pick
html{
        --color-point:#F5F5F5;
        --color-midtone:#96be8c;
        --color-background: #434a40;
        --color-darktone : #629460;
        --color-bright: #edffec;
        --color-border:#757575;
        --color-button : #185b6e;
        --color-mypage: #4A5568;

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
        text-decoration:none;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1.5;
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
    body {
font-family:  'Pretendard';
        max-width: 100%;
    }
    * {
font-family:  'Pretendard';
    }
   
`;

export default GlobalStyle;
