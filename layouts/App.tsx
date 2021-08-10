import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';
import data from '../d.json'
import Lottie from 'react-lottie';

const NavBar = loadable(() => import('@layouts/navbar'));
const Modal = loadable(() => import('@components/modal'));
const Map = loadable(() => import('@pages/Map'));

const lottieOptions = {
    animationData: data,   
    loop: true,        
    autoplay: true,   
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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