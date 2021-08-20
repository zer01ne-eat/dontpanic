import styled from "@emotion/styled";

export const LeftNavBar = styled.div`
    // border: 5px solid black;
    // width: 450px;
    // height: 100vh;
    width: 23.4%;
    height: 93.1%;
    margin: 3.5% 74.6% 3.5% 2%;
    // display: flex;
    // padding: 93px 0 0;
    border-radius: 60px;
    background-color: #1e1e1e;
    & .back-selected-btn {
      width: 2.6%;
      height: 4.7%;
      margin: 6.7% auto 21.5% 88.6%;
      object-fit: contain;
      background-color: #1e1e1e;
    }
    // & button {
    //   background-color: transparent;
    //   border: 0;
    //   outline: 0;
    // }
    & img {
      background-color: #1e1e1e;
    }
`;

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

export const ClosedNavBar = styled.div `
  width: 4%;
  height: 93.1%;
  margin: 3.5% 94% 3.5% 2%;
  padding: 100px 0 0;
  object-fit: contain;
  border-radius: 20px;
  background-color: #1e1e1e;
  & .open-selected-btn {
    width: 0.7%;
    height: 0.7%;
    margin: 3.7% 17.1%;
    object-fit: contain;
  }
  & .home-btn {
    width: 135px;
    height: 135px;
    // margin: 0 0 50px;
    object-fit: contain;
  }
  & .profile-btn {
    width: 135px;
    height: 135px;
    margin: 50px 0;
    object-fit: contain;
  }
  & .goal-btn {
    width: 135px;
    height: 135px;
    margin: 50px 0;
    object-fit: contain;
  }
  & .chat-btn {
    width: 135px;
    height: 135px;
    margin: 50px 0 0;
    object-fit: contain;
  }
  & .setting-btn {
    width: 135px;
    height: 135px;
    margin: 1029px 35px 0;
    object-fit: contain;
  }
  & button {
    width: 7%;
    height: 7%
  }
  & img {
    // width: 7%;
    // height: 7%
    background-color: #1e1e1e;
  }
`