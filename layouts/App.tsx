import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';

const NavBar = loadable(() => import('@layouts/navbar'));
const Modal = loadable(() => import('@components/modal'));
const Map = loadable(() => import('@pages/Map'));


const App = () => {
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(true);
    const onCloseModal = useCallback(() => {
      setShowCreateWorkspaceModal(false);
    }, []);

    return (
        <div>
            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
                intro 멘트
                캐릭터 선택
            </Modal>
            { !showCreateWorkspaceModal && <Map />}
        </div>
    );
};

export default App