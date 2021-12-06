import styled from '@emotion/styled';

export const BackIconSVG = styled.svg`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  &:hover {
    path {
      fill: #5485ff;
    }
  }
`;


export const UserCreationContent = styled.div`
  display: flex;
  color: #fff;
  // margin: 10%;
  & .user-creation-slime {
    width: 250px;
    height: 310px;
    padding-top: 313px;
    padding-left: 280px;
    padding-right: 250px;
    & .slime {
      // width: 50%;
      // margin-top: 115px;
      // padding: 20%;
      & svg {
        width: 100%;
      }
    }
  }
  & .user-creation-input-content {
    width: 90%;
    padding-top: 370px;
    padding-left: 387px;
    & .user-creation-title {
      font-family: "NSD-Bold";
      font-size: 37.5px;
      color: #fff;
      padding-bottom: 20px;
    }
    & input {
      width: 335px;
      font-size: 37.5px;
      line-height: 44px;
      background: transparent;
      border: none;
      border-bottom: 5px solid #6c6c6c;
      border-radius : 0;
      color: #fff;
      font-family: "NS-Medium";
    }
    & input:focus {
      outline: none;
      border-bottom: 5px solid #fff;
    }
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill: {
      border: 3px solid transparent !important;
    }

    & .user-creation-color-choose {
      display: inline-flex;
      margin-top: 40px;
      margin-bottom: 132px;

      & .color-circle {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 50px;
        cursor: pointer;

        &:hover {
          border: 3px solid #5485ff;
        }
      }
    }
    & #user-creation-button {
      float: right;
      padding-right: 100px;
    }
  }
`;