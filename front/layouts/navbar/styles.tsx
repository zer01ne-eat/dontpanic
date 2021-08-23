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
      border: 1px solid red;
    }
    & .middle #left {
      width: 50%;
      height: 100%;
      // background-color: #00D8FF;
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
      background-color: #1e1e1e;
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
`;

export const Menus = styled.nav`
width: 260px;
height: 100vh;
border: 5px solid blue;
display: inline-flex;
flex-direction: column;
// background: #3f0e40;
// color: rgb(188, 171, 188);
vertical-align: top;
& a {
  padding-left: 36px;
  color: inherit;
  text-decoration: none;
  height: 28px;
  line-height: 28px;
  display: flex;
  align-items: center;
  &.selected {
    color: white;
  }
}
& .bold {
  color: white;
  font-weight: bold;
}
& .count {
  margin-left: auto;
  background: #cd2553;
  border-radius: 16px;
  display: inline-block;
  font-size: 12px;
  font-weight: 700;
  height: 18px;
  line-height: 18px;
  padding: 0 9px;
  color: white;
  margin-right: 16px;
}
& h2 {
  height: 36px;
  line-height: 36px;
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
}
`;

export const WorkSpace = styled.div`
width: 180px;
height: 100vh;
border: 5px solid green;
display: inline-flex;
flex-direction: column;
align-items: center;
// background: #3f0e40;
// border-top: 1px solid rgb(82, 38, 83);
// border-right: 1px solid rgb(82, 38, 83);
// vertical-align: top;
text-align: center;
padding: 15px 0 0;
`;

