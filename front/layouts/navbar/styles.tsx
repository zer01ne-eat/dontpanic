import styled from "@emotion/styled";

export const LeftNavBar = styled.div`
    border-radius: 2rem;
    width: 20vw;
    height: 80vh;
    text-align: center;
    margin: 1vh 1vw;
    display: inline-block;
    background-color: #1e1e1e;
    & #top {
      text-align: center;
      margin-top: 20px;
      width: 100%;
      height: 30%;
    }
    & .middle {
      display: flex;
      width: 100%;
      height: 70%;
      // border: 1px solid red;
    }
    & .middle #left {
      width: 50%;
      height: 100%;
      background-color: #272727;
    }
    & li {
      list-style: none;
      font-size: 1em;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
    }
    & li img {
      right: 12px;
      top: 12px;
      width: 48px;
      height: 48px;
      margin-top: 20px;
      border-radius: 16px;
      background-color: #272727;
      padding: 4px;
      cursor: pointer;
    }
    & #right {
      // position: absolute;
      top: 0px;
      left: 620px;
      width: 50%;
      height: 100%;
      background-color: #fff;
    }
    & .back-selected-btn {
      display: inline-block;
      margin-left: 88%;
    }
    & .back-selected-btn img {
      right: 12px;
      top: 12px;
      width: 48px;
      height: 48px;
      margin-top: 20px;
      border-radius: 16px;
      background-color: #1e1e1e;
      padding: 4px;
      cursor: pointer;
    }
    // & button {
    //   background-color: transparent;
    //   border: 0;
    //   outline: 0;
    // }
`;

export const ClosedNavBar = styled.div `
  width: 4%;
  height: 80vh;
  margin: 5vh 5vw;
  display: inline-block;
  // padding: 100px 25px 0;
  object-fit: contain;
  border-radius: 2rem;
  background-color: #1e1e1e;
  
  & #top {
    text-align: center;
    margin-top: 20px;
    width: 100%;
    height: 30%;
  }

  & img {
    right: 12px;
    top: 12px;
    width: 48px;
    height: 48px;
    margin-top: 20px;
    border-radius: 16px;
    background-color: #1e1e1e;
    padding: 4px;
    cursor: pointer;
  }
`
export const UserInfo = styled.div`
    height: calc(100vh - 900px);
    overflow-y: auto;
    border: 5px solid red;
    background-image: url(../imgs/navbar/bg.svg)
`;
