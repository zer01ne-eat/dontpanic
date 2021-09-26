import React, { FC } from 'react';
import { Rectangle } from './styles';
import { Link } from 'react-router-dom';

interface Props {
    show: boolean;
    showConfirmCallToAction: boolean;
    close: () => void;
    confirmButtonText: string | JSX.Element;
    confirmButtonAction: () => void;
}

const Modal: FC<Props> = ({ show, children, showConfirmCallToAction, close, confirmButtonText, confirmButtonAction}) => {

    if (!show) {
        return null;
    }

    return (
    <Rectangle>
        {children}
        { confirmButtonText == 'START' ? 
        <Link style={{"textDecoration": "none"}} to='/map'>
            <div id="buttons"><button className="ModalButton" onClick={confirmButtonAction}>{confirmButtonText}</button></div>
        </Link> :
        <div id="buttons"><button className="ModalButton" onClick={confirmButtonAction}>{confirmButtonText}</button></div>}
    </Rectangle>
    
  );
};

export default Modal;
