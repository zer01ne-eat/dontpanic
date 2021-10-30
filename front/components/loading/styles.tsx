import styled from "@emotion/styled";

export const LoadingPage = styled.div `
    width : 100%;
    height: 100%;
    background-color: #151515;
    border-radius: 30px;
    padding: 300 900;

    & .loading {
        width: 228px;
        height: 72px;
        padding: 21px 50px;
        opacity: 0.8;
        border-radius: 67px;
        margin-left: 40px;
        background-color: #272727;
    }

    & .loading-text {
        width: 128px;
        height: 30px;
        font-family: 'NSD-Black';
        font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1;
        letter-spacing: 2.5px;
        text-align: center;
        color: #fff;
    }
`;
