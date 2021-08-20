import React, { FC, useCallback, useState } from 'react';
import { Rectangle } from './styles';
import { Link, Route } from 'react-router-dom';
import UserCreation from '@pages/Modal/UserCreation';
import Intro from '@pages/Modal/Intro';
import Map from '@pages/Map';

interface Props {
    show: boolean;
    onCloseModal: () => void;
}

const Modal: FC<Props> = ({ show, children, onCloseModal }) => {
    const [viewUserCreation, setUserCreation] = useState(true)

    if (!show) {
        return null;
    }

    return (
    <Rectangle>
        {/* <div> */}
            {/* {children} */}
                {viewUserCreation ? <div id="intro"><Intro /></div> : <UserCreation /> }
            {/* {viewUserCreation ? <button onClick={() => setUserCreation(false)}>NEXT</button> : <Link to='/map'><button onClick={onCloseModal}>OK</button></Link>} */}
        {/* </div> */}
        <Route path='/map' component={Map} />
    </Rectangle>
  );
};

export default Modal;
