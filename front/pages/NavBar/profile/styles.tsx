import styled from '@emotion/styled';

export const Contents = styled.div`
    background-color: #1e1e1e;
    height: 80%;
    & .project-lists{
        margin-top: 11px;
        font-family: 'NSD-Bold';
        color: #b0b0b0;
        // font-size: 1rem;
    }
`;
export const Skills = styled.div`
    padding-bottom: 0;
    & .title {
        color: #fff;
        font-family: 'NSD-Black';
        font-size: 40px;
    }
    & .description {
        font-family: 'NSD-Regular';
        color: #b0b0b0;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
    }
`;

export const Oval = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    float: right;
    margin: 22px 0 11px 0;
    padding-right: 29px;
    & .oval-descp {
        width: 8px;
        height: 8px;
        border-radius: 8px;
        margin-right: 3px;
    }
    & .oval-name {
        font-family: 'NSD-Regular';
        font-size: 10px;
        color: #fff;
        margin-right: 10px;
    }
`;