import styled from '@emotion/styled';

export const ProjectsContents = styled.div`
    color: #fff;
    & .project-name {
        padding-top: 17px;
        padding-left: 65px;
        padding-right: 0;
        padding-bottom: 18px;
        height: 68px;
        display: flex;
        font-size: 24px;
        align-items: center;
        &:hover {
            background-color: #5485ff;
            color: #fff;
          }
    }
    & .oval {
        width: 15px;
        height: 15px;
        border-radius: 15px;
        margin-left: 123px;
        background-color: #17b84c;
      }
    & .open-c {
        width: 68px;
        height: 68px;
        float: right;
        // margin-left: 7%;
    } 
    & img {
        width: 100%;
        object-fit: cover;
    }
    & .open {
        transform: rotate(180deg);
    }
    & .contents {
        // overflow: hidden;
        transition: all 0.3s ease-out;
        font-family: 'NS-Regular';
        background-color: #141414;
    }
    & .quiz-name {
        font-family: 'NS-Regular';
        padding-top: 8px;
        padding-left: 85px;
        padding-right: 0;
        padding-bottom: 9px;
        display: flex;
        font-size: 15px;
        align-items: center;
    & .oval-quiz {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        background-color: #1799b8;
        margin-left: 160px;
        } 
`;