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
        <>
            {showNavBar ? (
                <LeftNavBar>
                    <div id="top">
                        <div className='back-selected-btn' onClick={onClickNavBar}>
                            <img src='imgs/navbar/btn-close.svg' />
                        </div>
                        <div>
                            <UserInfo>userinfo</UserInfo>
                        </div>
                    </div>
                    <div className="middle">
                        <div id="left">
                            <ul>
                                <li onClick={() => {setSelected('home');}}><img src='imgs/navbar/ic-home-default.svg' />home</li>
                                <li onClick={() => {setSelected('profile');}}><img src='imgs/navbar/ic-profile-default.svg' />profile</li>
                                <li onClick={() => {setSelected('goal');}}><img src='imgs/navbar/ic-goal-default.svg' />goal</li>
                                <li onClick={() => {setSelected('chat');}}><img src='imgs/navbar/ic-chat-default.svg' />chat</li>
                            </ul>
                        </div>
                        <div id="right">
                            <NavBarContent selected={selected} />
                        </div>
                    </div>
                
                </LeftNavBar>
            ) :
                (<ClosedNavBar>
                    <div id="top" onClick={onClickNavBar}><img src='imgs/navbar/btn-open.svg' /></div>
                    <div onClick={() => {setShowNavBar((prev) => !prev); setSelected('home');}}><img src='imgs/navbar/ic-home-default.svg' /></div>
                    <div onClick={() => {setShowNavBar((prev) => !prev); setSelected('profile');}}><img src='imgs/navbar/ic-profile-default.svg' /></div>
                    <div onClick={() => {setShowNavBar((prev) => !prev); setSelected('goal');}}><img src='imgs/navbar/ic-goal-default.svg' /></div>
                    <div onClick={() => {setShowNavBar((prev) => !prev); setSelected('chat');}}><img src='imgs/navbar/ic-chat-default.svg' /></div>
                </ClosedNavBar>)
            }
        </>
    );
};

export default NavBar;
