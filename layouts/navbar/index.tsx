import React, { useCallback, useEffect, useState } from 'react';
// import { Switch, Route } from "react-router";
import { NavLink, Switch, Route } from 'react-router-dom';
import { LeftNavBar, UserInfo, Menus, WorkSpace, ClosedNavBar } from './styles';
import Chat from '@pages/NavBar/chat';
import Goal from '@pages/NavBar/goal';
import Profile from '@pages/NavBar/profile';

const NavBar = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    const onClickNavBar = useCallback(() => {
        setShowNavBar((prev) => !prev);
    }, []);

    return (
        <div>
            {showNavBar ? (
                <LeftNavBar>
                    <div className='back-selected-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/btn-close.svg' />
                        </button>
                    </div>
                    <UserInfo>userinfo</UserInfo>
                    <Menus>
                        <NavLink exact to="/">
                            home
                        </NavLink>
                        <NavLink exact to="/map/profile">
                            profile
                        </NavLink>
                        <NavLink exact to="/map/goal">
                            goal
                        </NavLink>
                        <NavLink exact to="/map/chat">
                            chat
                        </NavLink>
                    </Menus>
                    <WorkSpace>
                        <Switch>
                            <Route path="/map/profile" component={Profile} />
                            <Route path="/map/goal" component={Goal} />
                            <Route path="/map/chat" component={Chat} />
                        </Switch>
                    </WorkSpace>
                </LeftNavBar>
            ) :
                (<ClosedNavBar>
                    <div className='open-selected-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/btn-open.svg' />
                        </button>
                    </div>
                    <div className='home-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-home-default.svg' />
                        </button>
                    </div>
                    <div className='profile-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-profile-default.svg' />
                        </button>
                    </div>
                    <div className='goal-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-goal-default.svg' />
                        </button>
                    </div>
                    <div className='chat-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-chat-default.svg' />
                        </button>
                    </div>
                    <div className='setting-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-setting-default.svg' />
                        </button>
                    </div>

                </ClosedNavBar>)
            }
        </div>
    );
};

export default NavBar;
