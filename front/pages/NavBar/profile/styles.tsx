import styled from '@emotion/styled';

export const Contents = styled.div`
    background-color: #1e1e1e;
    height: 100%;
`;
export const Skills = styled.div`
    padding: 12% 10%;

    & .title {
        color: #fff;
        font-size: 3em;
    }
    & .description {
        font-family: 'Noto Sans Regular';
        color: #b0b0b0;
        font-size: 1rem;
    }
    & .project-lists{
        font-family: 'Noto Sans';
        color: #b0b0b0;
        font-size: 1rem;
        list-style: none;
    }
    & li {
        display: flex;
    }
    & button {
        border: none;
        butt
    }
    & img {
        width: 10%;
    }
    & .open img {
        transform: rotate(180deg);
    }
    & .contents {
        overflow: hidden;
        transition: max-height 0.3s ease-out;
    }
`;