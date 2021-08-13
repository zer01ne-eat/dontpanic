import React, { useCallback, useEffect, useState, FC } from 'react';
// import { Switch, Route } from "react-router";
import { NavLink, Switch, Route } from 'react-router-dom';
import { LeftNavBar, UserInfo, Menus, WorkSpace, ClosedNavBar } from './styles';
import Chat from '@pages/NavBar/chat';
import Goal from '@pages/NavBar/goal';
import Profile from '@pages/NavBar/profile';
import NavBarContent from '@pages/NavBar/navbarContent';

const NavBar = () => {
    const [showNavBar, setShowNavBar] = useState(true);
    const [selected, setSelected] = useState('goal');

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
                    <div className='home-btn'>
                        <button onClick={onClickNavBar}>
                            <img src='imgs/navbar/ic-home-default.svg' />
                        </button>
                    </div>
                    <div className='profile-btn'>
                        <button onClick={() => {setSelected('profile')}}>
                            <img src='imgs/navbar/ic-profile-default.svg' />
                        </button>
                    </div>
                    <div className='goal-btn'>
                        <button onClick={() => {setSelected('goal')}}>
                            <img src='imgs/navbar/ic-goal-default.svg' />
                        </button>
                    </div>
                    <div className='chat-btn'>
                        <button onClick={() => {setSelected('chat')}}>
                            <img src='imgs/navbar/ic-chat-default.svg' />
                        </button>
                    </div>
                    <div className='setting-btn'>
                        <button onClick={() => {setSelected('setting')}}>
                            <img src='imgs/navbar/ic-setting-default.svg' />
                        </button>
                    </div>
                    </Menus>
                    <WorkSpace>
                        <NavBarContent selected={selected} />
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
                        <button onClick={() => {setShowNavBar((prev) => !prev); setSelected('profile');}}>
                            <img src='imgs/navbar/ic-profile-default.svg' />
                        </button>
                    </div>
                    <div className='goal-btn'>
                        <button onClick={() => {setShowNavBar((prev) => !prev); setSelected('goal');}}>
                            <img src='imgs/navbar/ic-goal-default.svg' />
                        </button>
                    </div>
                    <div className='chat-btn'>
                        <button onClick={() => {setShowNavBar((prev) => !prev); setSelected('chat');}}>
                            <img src='imgs/navbar/ic-chat-default.svg' />
                        </button>
                    </div>
                    <div className='setting-btn'>
                        <button onClick={() => {setShowNavBar((prev) => !prev); setSelected('setting');}}>
                            <img src='imgs/navbar/ic-setting-default.svg' />
                        </button>
                    </div>
                </ClosedNavBar>)
            }
        </div>
    );
};

export default NavBar;
