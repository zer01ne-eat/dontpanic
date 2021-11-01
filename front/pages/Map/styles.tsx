import styled from '@emotion/styled';

export const ProjectIcon = styled.svg `
`;

export const ProjectContent = styled.div `
position: absolute;
height: 100px;
width: 100px;
backgroundSize: contain;
backgroundRepeat: no-repeat;
.name-tag {
    opacity: 0;
}
&:hover .name-tag {
    opacity: 1;
}
&:hover ${ProjectIcon} {
    path {
        stroke: white;
    }
}
`;