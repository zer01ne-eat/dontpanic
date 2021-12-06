import styled from '@emotion/styled';

export const ProjectIcon = styled.svg `
`;

export const ProjectContent = styled.div `
position: absolute;
height: 100px;
width: 100px;
backgroundSize: contain;
backgroundRepeat: no-repeat;
animation: motion 1.5s linear 0s infinite alternate;
margin-top: 0;
@keyframes motion {
	0% {margin-top: 0px;}
	100% {margin-top: 10px;}
}

.name-tag {
    opacity: 0;
    width: 100px;
    margin-left: 99px;
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