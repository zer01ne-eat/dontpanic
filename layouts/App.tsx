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
        <div style={{"width":"100%","height":"100%","backgroundColor":"rgb(32, 37, 64)","display":"flex","WebkitBoxAlign":"center","alignItems":"center","WebkitBoxPack":"center","justifyContent":"center","overflowY":"auto","padding":"20px"}}>
            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal} />
            { !showCreateWorkspaceModal && <Map />}
        </div>
    );
};

export default App