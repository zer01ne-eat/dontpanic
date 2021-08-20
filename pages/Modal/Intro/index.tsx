import React from 'react';
import { Title, Content, Choose } from './styles';

const rect_div = {
    border: "2px solid red",
    width: "90vw",
    margin: "11.6%",
    display: "flex"
}

const title = {
    border: "2px solid black",
    display: "flex",
    height: "100px",
}

const Intro = () => {


    return (
        <>
            {/* <div style={title}>
                DON'T PANIC
            </div> */}
            <Title>DON'T PANIC</Title>
            <Content>You can experience peer learning in this metaverse,<br />
                which was created with the ideas from the developers at 42 Seoul.<br />
                Through this platform, we all can grow as software developers.
            </Content>
            <Choose>your own character</Choose>
        </>
    );
}

export default Intro;