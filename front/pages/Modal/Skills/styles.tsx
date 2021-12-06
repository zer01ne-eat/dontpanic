import styled from '@emotion/styled';

export const SkillsContent = styled.div`
  display: flex;
  color: #fff;
  // margin: 10%;

  & .skills-slime  {
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

  & .skills-content {
    width: 90%;
    padding-top: 432.5px;
    padding-left: 387px;
    & .skills-title {
      font-family: "NSD-Bold";
      font-size: 37.5px;
      color: #fff;
    }
    
    & #skills-button {
      float: right;
      padding-right: 100px;
    }
  }
`;
export const Skill = styled.div`
  padding-top: 47.5px;
  padding-bottom: 279px;
  padding-right: 30px;
  font-family: 'NSD-Bold';
  font-size: 30px;
  & .unselected {
    width: auto;
    padding: 5px 30px 5px 30px;
    cursor: pointer;
    border-radius: 50px;
    border: solid 4.5px #6c6c6c;
    color: #6c6c6c;
    font-size: 32px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
    &:hover {
      border: solid 4.5px #5485ff;
      color: #5485ff;
    }
  }
  & .selected {
    width: auto;
    padding: 5px 30px 5px 30px;
    cursor: pointer;
    border-radius: 50px;
    border: solid 4.5px #6c6c6c;
    color: #6c6c6c;
    font-size: 32px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
    letter-spacing: normal;
`;
