import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Fuzzy+Bubbles&family=Source+Sans+Pro:wght@300&display=swap');

//글꼴

@font-face {
	font-family: 'Pretendard';
	font-weight: 800;
	font-display: swap;
	src: local('Pretendard ExtraBold'), url('./font/Pretendard-ExtraBold.woff2') format('woff2')
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 700;
	font-display: swap;
	src: local('Pretendard Bold'), url('./font/Pretendard-Bold.woff2') format('woff2')
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 600;
	font-display: swap;
	src: local('Pretendard SemiBold'), url('./font/Pretendard-SemiBold.woff2') format('woff2')
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 500;
	font-display: swap;
	src: local('Pretendard Medium'), url('./font/Pretendard-Medium.woff2') format('woff2')
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 400;
	font-display: swap;
	src: local('Pretendard Regular'), url('./font/Pretendard-Regular.woff2') format('woff2')
}

@font-face {
	font-family: 'Pretendard';
	font-weight: 300;
	font-display: swap;
	src: local('Pretendard Light'), url('./font/Pretendard-Light.woff2') format('woff2')
}


//color pick
html{
        --color-point:#F5F5F5;
        --color-midtone:#96be8c;
        --color-background: #434a40;
        --color-darktone : #629460;
        --color-bright: #edffec;

        --color-border:#757575;

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
