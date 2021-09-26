import React from 'react';
import Player from '@components/character/player';
import { Link, Route } from 'react-router-dom';
import loadable from '@loadable/component';

const NavBar = loadable(() => import('@layouts/navbar'));
const CodeShare = loadable(() => import('@pages/CodeShare'));

const Map = () => {

    return (
        <>
            {/* <Player skin="character-00" /> */}
            <button><Link style={{"textDecoration": "none"}} to='/codeshare'>dd</Link></button>
            <Route path='/codeshare' component={CodeShare} />
        </>
  );
};

export default Map;
