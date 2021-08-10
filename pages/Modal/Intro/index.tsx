import React from 'react';
import { Title, Content, Choose } from './styles';

const Intro = () => {

    return (
        <div>
            <Title>DON'T PANIC</Title>
            <Content>You can experience peer learning in this metaverse,
                which was created with the ideas from the developers at 42 Seoul.
                Through this platform, we all can grow as software developers.
            </Content>
            <Choose>your own character</Choose>
        </div>
    );
}

export default Intro;