import styled from "@emotion/styled";

export const IconSVG = styled.svg`
  width: 68px;
  height: 68px;
  float: right;
  &:hover {
    path {
      fill: #5485ff;
    }
  }
`;

export const FullNavbar = styled.div `
  width: 600px;
  height: 1340px;
  border-radius: 30px;
  margin: 50px 1920px 50px 50px;
  display: inline-block;
  background-color: #1e1e1e;
  overflow: hidden;
  font-family: 'NSD-Black';
  position: absolute;
  z-index: 100;
  & .back-selected-btn {
    cursor: pointer;
    width: 100%;
    height: 134px;
    padding-top: 47px;
    padding-right: 32px;
  }
  & .content {
    background-image: url(../imgs/navbar/bg.svg);
    overflow: hidden;
    & ul {
      padding: 0;
      list-style: none;
    }
    
    & .user-info {
      height: 197px;

      & .slime {
        // width: 104px;
        float: left;
        height: 100%;
        // padding-top: 24px;
        padding-left: 87px;
        & #slime-img {
          display: flex;
          position: relative;
          height: 100%;
          align-items: center;
          flex-direction: column;
          & svg {
            height: 100%;
          }
        }
      }

      & .user-data {
        width: 63%;
        height: 100%;
        float: right;
        padding-top : 23px;

        & #level {
          color: #5b5b5b;
          font-size: 16px;
          font-family: 'NSD-Bold';
          padding-bottom: 2px;
        }

        & #nickname {
          color: #fff;
          font-size: 26.5px;
          font-family: 'NSD-Black';
          padding-bottom: 13px;
        }

        & ul {
          display: flex;
          // padding-bottom: 72px;
          margin: 0 0 72px 0;
        }

        & li {
          margin-right: 10px;
        }
        
        & #skills {
          padding: 0.5px 17px ;
          border-radius: 30px;
          border: solid 2px #6c6c6c;
          color: #6c6c6c;
          font-size: 17.5px;
          display: flex;
          font-family: 'NSD-Bold';
        }
      }
    }

    & .slime img {
      width: 70%;
    }

    & .left-content {
      width: 225px;
      height: 100%;
      float: left;
      font-family: 'NSD-Bold';

      & li {
        height: 68px;
        color: #fff;
        cursor: pointer;
        display: flex;
        align-content: center;
        align-items: center;
        padding-left: 33px;
        margin-top: 25px;
        margin-bottom: 25px;
        &:hover{
          background-color: #5485ff;
        }
        &:active {
          background-color #1e1e1e: 
        }
      }
      & img {
        width: 68px;
        height: 68px;
      }
      & #menu-title {
        padding: 17px;
        font-size: 24px;
      }
    }

    & .right-content {
      width: 375px;
      height: 100%;
      float: right;
      background-color: white;
    }
  }
`;

export const ShrinkNavbar = styled.div `
  width: 103px;
  height: 1340px;
  border-radius: 30px;
  margin: 50px 2407px 50px 50px;
  display: inline-block;
  background-color: #1e1e1e;
  overflow: hidden;
  position: absolute;
  & img {
    width: 68px;
    height: 68px;
  }

  & .open-selected-btn {
    padding-top: 50px;
    padding-bottom: 16px;
    display: flex;
    justify-content: center;
    cursor: pointer;

  }
  
  & .content {
    background-image: url(../imgs/navbar/bg.svg);
    height: 100%;
    padding-top: 197px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    & #icons {
      margin-top: 25px;
      // align-items: center;
      // border-radius: 16px;
      cursor: pointer;
      display: flex;
      // flex-direction: column;
      width: 80px;
      justify-content: center;
    }
  }
`;
