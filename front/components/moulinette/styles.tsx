import styled from "@emotion/styled";

export const MoulinetteContainer = styled.div `
        position: absolute;
        top: 1000;
        left: 2000;
        height: 100px;
        width: 100px;
    `;


export const MoulinetteSVG = styled.svg `
    &:hover {
        path {
            stroke: white;
        }
    }
`;