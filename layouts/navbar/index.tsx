import React, { useCallback, useEffect, useState } from 'react';
// import { Switch, Route } from "react-router";
import { NavLink, Switch, Route } from "react-router-dom";
import { LeftNavBar } from "./styles";

const NavBar = () => {
    const [showNavBar, setShowNavBar] = useState(false);
    const onClickNavBar = useCallback(() => {
        setShowNavBar((prev) => !prev);
    }, []);

    return (
        <div>
            <button onClick={onClickNavBar}>X</button>
            {showNavBar && <LeftNavBar />}
        </div>
    );
}

export default NavBar;