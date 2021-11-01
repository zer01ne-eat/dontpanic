import styled from "@emotion/styled";

export const MoulinetteSVG = styled.svg `
    width: 333px;
    height: 250px;
    &:hover {
        path {
            stroke: white;
        }
    }
`;

export const MoulinetteContainer = styled.div `
        position: absolute;
        top: 1000;
        left: 2000;
        height: 100px;
        width: 100px;
        .name-tag {
            opacity: 0;
            margin-left: 108px;
            width: 120px;
        }
        &:hover .name-tag{
            opacity: 1;
        }
    `;


