import React from 'react';
import { UserModalContent } from './styles';

const Intro = () => {
    return (
        <UserModalContent>
            <div className="user-modal-title">
                Don't Panic
            </div>
            <div className="user-modal-content">
            You can experience peer learning in this metaverse,<br />
                which was created with the ideas from the developers at 42 Seoul.<br />
                Through this platform, we all can grow as software developers.
            </div>
            <div className="user-modal-footer">
                Choose your own character
            </div>
        </UserModalContent>
    );
}

export default Intro;