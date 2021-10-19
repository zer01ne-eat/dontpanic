import React, { FC } from 'react';
import { Rectangle } from './styles';

interface Props {
    show: boolean;
}

const Modal: FC<Props> = ({ show, children }) => {
    if (!show) {
        return null;
    }

    return (
        <Rectangle>
            {children}
        </Rectangle>
        );
};

export default Modal;