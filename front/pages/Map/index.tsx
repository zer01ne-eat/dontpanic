import React, { FC, useState } from 'react';
import NavBar from '@layouts/navbar';
import { Link, Route } from 'react-router-dom';
import CodeShare from '@pages/CodeShare';

const Map = () => {

    return (
        <>
            <button><Link style={{"textDecoration": "none"}} to='/codeshare'>dd</Link></button>
            <Route path='/codeshare' component={CodeShare} />
        </>
  );
};

export default Map;
