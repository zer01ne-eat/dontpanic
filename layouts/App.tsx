import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';
import data from '../d.json'
import Lottie from 'react-lottie';

const NavBar = loadable(() => import('@layouts/navbar'));
const Modal = loadable(() => import('@components/modal'));

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
            <NavBar />
        	{/* <Lottie options={lottieOptions} /> */}
            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
                캐릭터 선택
                blahsdf
                sdlkfjsd
            </Modal>
        </div>
    );
};

export default App