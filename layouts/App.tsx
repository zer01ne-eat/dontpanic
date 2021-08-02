import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';

const NavBar = loadable(() => import('@layouts/navbar'));
const SignUp = loadable(() => import('@components/signup'));

const App = () => {
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(true);

    const onCloseModal = useCallback(() => {
        setShowCreateWorkspaceModal(false);
      }, []);

    return (
        <div><NavBar />
    <SignUp show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>sdfsdf</SignUp>
    </div>
    );
};

export default App