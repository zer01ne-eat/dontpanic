import React, { useCallback, useEffect, useState } from 'react';
// import { Switch, Route } from "react-router";
import { NavLink, Switch, Route } from 'react-router-dom';
import { LeftNavBar, UserInfo, Menus, WorkSpace } from './styles';
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
            <button onClick={onClickNavBar}>X</button>
            {showNavBar && (
                <LeftNavBar>
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
            )}
        </div>
    );
};

export default NavBar;
