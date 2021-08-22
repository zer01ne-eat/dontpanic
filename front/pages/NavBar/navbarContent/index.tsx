import React, { FC, useCallback, useState } from 'react';
import Goal from '@pages/NavBar/goal';
import Profile from '@pages/NavBar/profile';
import Chat from '@pages/NavBar/chat';

interface Props {
    selected: string;
}

const NavBarContent: FC<Props> = ({ selected }) => {

    return (
        <div>
            {(selected === 'profile' && <Profile />) ||
            (selected === 'goal' && <Goal />) ||
            (selected === 'chat' && <Chat />)}
        </div>
  );
};

export default NavBarContent;