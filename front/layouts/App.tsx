import React, { useState, useCallback } from 'react';
import loadable from '@loadable/component';
import { Switch, Redirect, Route } from 'react-router-dom';

const Modal = loadable(() => import('@components/modal'));
const Map = loadable(() => import('@pages/Map'));
const CodeShare = loadable(() => import('@pages/CodeShare'));
const NavBar = loadable(() => import('@layouts/navbar'));

const App = () => {
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(true);
    const onCloseModal = useCallback(() => {
      setShowCreateWorkspaceModal(false);
    }, []);

    return (
        <div style={{"width":"100%","height":"100%","backgroundColor":"rgb(32, 37, 64)","WebkitBoxAlign":"center","alignItems":"center","WebkitBoxPack":"center","justifyContent":"center","overflowY":"auto","padding":"20px"}}>
            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal} />
            { !showCreateWorkspaceModal &&
                <>
                    <NavBar />
                        <Switch>
                            <Route path="/map" component={Map} />
                            <Route path="/codeshare" component={CodeShare} />
                        </Switch>
                </>
            }
        </div>
    );
};

export default App