import styled from '@emotion/styled';
import { injectGlobal } from '@emotion/css';

injectGlobal`
    @font-face {
        font-family: 'Noto Sans';
        // font-style: normal;
        font-weight: 400;
        src:
        url('../fonts/NotoSansDisplay-Black.woff') format('woff')
    }

    @font-face {
        font-family: 'Noto Sans Regular';
        // font-style: normal;
        font-weight: 400;
        src:
        url('../fonts/NotoSans-Regular.woff') format('woff')
    }
    
    @font-face {
        font-family: 'Noto Sans KR';
        // font-style: normal;
        font-weight: 400;
        src:
        url('../fonts/NotoSansKR-Regular.woff2') format('woff2')
    }
`

export const BackGround = styled.div `
  background-image: url(../imgs/background.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 100%;
`