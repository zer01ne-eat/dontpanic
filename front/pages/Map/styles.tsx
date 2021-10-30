import styled from '@emotion/styled';

export const ProjectContent = styled.div `
position: absolute;
height: 100px;
width: 100px;
backgroundSize: contain;
backgroundRepeat: no-repeat;
`;

export const ProjectIcon = styled.svg `

    &:hover {
        path {
            stroke: white;
        }
    }
`;