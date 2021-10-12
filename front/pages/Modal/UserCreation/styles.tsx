import styled from '@emotion/styled';

export const UserCreationContent = styled.div`
  display: flex;
  font-family: "Noto Sans";
  color: #fff;
  & .user-creation-slime {
    width: 50%;
    height: 100%;
    & .slime {
      width: 50%;
      padding: 20%;
      padding-right: 0;
      & svg {
        width: 100%;
      }
    }

  }
  & .user-creation-input-content {
    width: 50%;
    & .user-creation-title {
      font-family: "Noto Sans";
      font-size: 2rem;
      color: #fff;
    }
    & .user-creation-color-choose {
      display: flex;
      margin-top: 20px;
      margin-bottom: 20px;
      & .color-circle {
        width: 30px; 
        height: 30px;
        border-radius: 50%;
        margin: 0px 5px;
        cursor: pointer;
      }
    }
  }
  & > #buttons {
    // border: 1px solid blue;
    display: flex;
    height: 10%;
    width: 90%;
    margin-top: 55em;
    margin: 3rem;
    display: flex;
    justify-content: center;
  }
  
  & #buttons button {
    display: flex;
    position: relative;
    box-sizing: border-box;
    outline: none;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    font-family: 'Noto Sans';
    font-size: 2em;
    font-weight: 700;
    transition: background-color 200ms ease 0s, border-color 200ms ease 0s;
    cursor: pointer;
    opacity: 1;
    overflow: hidden;
    border: 2px solid transparent;
    padding: 0px 40px;
    width: auto;
    height: 48px;
    border-radius: 0.5rem;
    color: rgb(255, 255, 255) !important;
    background-color: #6c6c6c;
    font-weight: bold;
    // letter-spacing: 8px;
  
    &:hover {
      background-color: #5485ff;
      color: #fff;
    }
`;

export const Slime = styled.div`
  // width: 9.8%;
  // height: 21.5%;
  font-family: 'Noto Sans KR';
  // border: 1px solid blue;
  margin: 200px;
  color: #b0b0b0;
  border-radius: 32px 32px 0px 0px;
  -webkit-box-pack: center;
  justify-content: center;
  display: flex;
  height: 30vh;
  min-height: 200px;
  max-height: 300px;
`;

export const CharacterCreation = styled.div`
  margin-left: 80px;
  font-family: 'Noto Sans KR';
  // border: 1px solid blue;
  display: inline-block;
  & #title {
    display: flex;
    font-family: 'Noto Sans';
    // margin: 0 0 95px 0;
    font-size: 75px;
    font-weight: bold;
    color: #fff;
  }
`;
export const NicknameInput = styled.input`
  display: block;
  font-family: 'Noto Sans KR';
  width: 335px;
  fontsize: 34px;
  lineheight: 44px;
  background: transparent;
  border: none;
  borderbottom: 1px solid #6c6c6c;
  // padding: 5px 0;
  borderradius: 0;
  color: #fff;
`;
export const Error = styled.div`
  color: #e01e5a;
  margin: 8px 0 16px;
  font-weight: bold;
`;

export const Button = styled.div`
// & > #buttons {
//   // border: 1px solid blue;
//   display: flex;
//   height: 10%;
//   width: 90%;
//   margin-top: 55em;
//   margin: 3rem;
//   display: flex;
//   justify-content: center;
// }

// & #buttons button {
//   display: flex;
//   position: relative;
//   box-sizing: border-box;
//   outline: none;
//   -webkit-box-align: center;
//   align-items: center;
//   -webkit-box-pack: center;
//   justify-content: center;
//   font-family: 'Noto Sans';
//   font-size: 2em;
//   font-weight: 700;
//   transition: background-color 200ms ease 0s, border-color 200ms ease 0s;
//   cursor: pointer;
//   opacity: 1;
//   overflow: hidden;
//   border: 2px solid transparent;
//   padding: 0px 40px;
//   width: auto;
//   height: 48px;
//   border-radius: 0.5rem;
//   color: rgb(255, 255, 255) !important;
//   background-color: #6c6c6c;
//   font-weight: bold;
//   // letter-spacing: 8px;

//   &:hover {
//     background-color: #5485ff;
//     color: #fff;
//   }
`;
