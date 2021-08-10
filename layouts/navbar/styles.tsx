import styled from "@emotion/styled";

export const LeftNavBar = styled.div`
    border: 5px solid black;
    width: 450px;
    height: 100vh;
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