import styled from "@emotion/styled";

export const NameTagContent = styled.div `
    opacity: 0.8;
    border-radius: 67px;
    background-color: #272727;
    text-align: center;
    margin-bottom: 15px;
    position: relative;
    
    .speech-bubble:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0;
        height: 0;
        border: 5px solid transparent;
        border-top-color: #272727;
        border-bottom: 0;
        margin-left: -5px;
        margin-bottom: -5px;
    }

    & .triangle {
            width: 11px;
            height: 8px;
            bottom: 0px;
            border-top: 10px solid #272727;
            opacity: 0.8;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
    }
    & .name-text {
        // width: 277px;
        // height: 30px;
        font-family: AppleSDGothicNeo;
        // font-size: 30px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        // line-height: 1;
        // letter-spacing: 2.5px;
        color: #fff;
    }
    `;


    