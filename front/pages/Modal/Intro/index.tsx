import React from 'react';
import { Title, Content, Choose } from './styles';

const Intro = () => {
    return (
        <>
            <Title>DON'T PANIC</Title>
            <Content>
                You can experience peer learning in this metaverse,<br />
                which was created with the ideas from the developers at 42 Seoul.<br />
                Through this platform, we all can grow as software developers.
            </Content>
            <Choose>Choose your own character</Choose>
        </>
    );
}

export default Intro;