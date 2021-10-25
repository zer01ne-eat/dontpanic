import React, { useState, useCallback, useEffect } from 'react';
import loadable from '@loadable/component';
import { Switch, Route } from 'react-router-dom';
import { BackGround  } from './styles';
const ModalPage = loadable(() => import('@pages/Modal'));
const Map = loadable(() => import('@pages/Map'));
const CodeShare = loadable(() => import('@pages/CodeShare'));
const NavBar = loadable(() => import('@layouts/navbar'));
import firebase from 'firebase/app';
import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

const App = () => {
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(true);
    const onCloseModal = useCallback(() => {
      setShowCreateWorkspaceModal(false);
    }, []);

    useEffect(() => {
        const firebaseConfig = {
          apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
          authDomain: "dontpanic-zerone.firebaseapp.com",
          projectId: "dontpanic-zerone",
          storageBucket: "dontpanic-zerone.appspot.com",
          messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
          appId: process.env.REACT_APP_FIREBASE_APP_ID,
          measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        };
        if (!firebase.apps.length) {
          // Make sure initialization happens only once
          firebase.initializeApp(firebaseConfig);
        } else {
          firebase.app();
        }
      }, []);

    return (
        <RecoilRoot>
            <div style={{"width":"100%","height":"100%","backgroundColor":"rgb(32, 37, 64)","WebkitBoxAlign":"center","alignItems":"center","WebkitBoxPack":"center","justifyContent":"center","overflowY":"auto","padding":"0px"}}>
            <ModalPage onCloseModal={onCloseModal} />
            { !showCreateWorkspaceModal &&
                <BackGround>
                    <NavBar />
                    <Map />
                </BackGround>
            }
            </div>
        </RecoilRoot>
    );
};

export default App