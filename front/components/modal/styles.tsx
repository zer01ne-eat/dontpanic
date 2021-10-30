
import styled from '@emotion/styled';

export const Rectangle = styled.div`
    // display: flex;
    background-color: #272727;
    border-radius: 30px;
    width: 2000px;
    height: 1086px;
    // text-align: center;
    margin: 177px 280px;

    & button {
      width: 350px;
      height: 100px;
      outline: none;
      font-family: 'NSD-Bold';
      font-size: 40px;
      cursor: pointer;
      overflow: hidden;
      border: 2px solid transparent;
      // padding: 15px 45px;
      border-radius: 15px;
      color: rgb(255, 255, 255) !important;
      background-color: #6c6c6c;
      // font-weight: bold;
      letter-spacing: 3px;

      &:hover {
        background-color: #5485ff;
        color: #fff;
      }
    }
`