import React, { FC, useCallback } from 'react';
import { Rectangle, Title, CreateModal, CloseModalButton } from './styles';

interface Props {
    show: boolean;
    onCloseModal: () => void;
}

const Modal: FC<Props> = ({ show, children, onCloseModal }) => {
    const stopPropagation = useCallback(
        (e) => {
            e.stopPropagation();
        },
        []
    );

    if (!show) {
        return null;
    }

    return (
    // <CreateModal onClick={onCloseModal}>
    <Rectangle onClick={onCloseModal}>
      <div onClick={stopPropagation}>
          <Title>DON'T PANIC</Title>
          <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>{children}</div>
    {/* </CreateModal> */}
    </Rectangle>
  );
};

export default Modal;
