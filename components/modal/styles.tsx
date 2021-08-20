
import styled from '@emotion/styled';

export const Rectangle = styled.div `
    display: flex;
    background-color: #272727;
    border-radius: 3rem;
    width: 80vw;
    height: 80vh;
    text-align: center;
    margin: 10vh 10vw;
    & > #intro {
      display: flex;
      // flex-direction: column;
      // flex-grow: 1;
      border: 1px solid red;
      margin: 3rem;
    }
`