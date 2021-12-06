import React, { FC, useReducer } from 'react';
import Modal from '@components/modal';
import Intro from '@pages/Modal/Intro';
import UserCreation from '@pages/Modal/UserCreation';
import Skills from '@pages/Modal/Skills';
import { UserData } from '@store/basic';

const INTRO = 'INTRO';
const USER_CREATION = 'USER_CREATION';
const SKILL = 'SKILL';
const CLOSE = 'CLOSE';

interface Props {
  onCloseModal: () => void;
}

const ModalPage: FC<Props> = ({ onCloseModal }) => {
  const modalReducer = (_state: any, action: any) => {
    switch (action.type) {
      case INTRO:
        return {
          content: <Intro dispatchModalAction={() => dispatchModalAction(USER_CREATION, null)} />,
          show: true,
        };

      case USER_CREATION:
        return {
          content: (
            <UserCreation
              data={action.data}
              dispatchModalBack={() => dispatchModalBack(INTRO)}
              dispatchModalAction={(data) => {
                dispatchModalAction(SKILL, data);
                console.log(action.data);
              }}
            />
          ),
          show: true,
        };
      case SKILL:
        return {
          content: (
            <Skills
              userData={action.data}
              dispatchModalBack={() => dispatchModalBack(USER_CREATION)}
              dispatchModalAction={() => {
                dispatchModalAction(CLOSE, null);
                onCloseModal()
              }}
            />
          ),
          show: true,
        };
      case CLOSE:
        return {
          content: '',
          confirmButtonText: '',
          confirmButtonAction: () => console.log('Session(s) requested.'),
          show: false,
        };
    }
  };

  const [modalState, modalDispatch] = useReducer(modalReducer, {
    content: <Intro dispatchModalAction={() => dispatchModalAction(USER_CREATION, null)} />,
    show: true,
  });

  const dispatchModalAction = (action: string, data: UserData | null) => {
    modalDispatch({
      type: action,
      data: data,
    });
  };

  const dispatchModalBack = (action: string) => {
    modalDispatch({
      type: action,
    });
  };

  return (
    <>
      <Modal show={modalState!.show}>{modalState!.content}</Modal>
    </>
  );
};

export default ModalPage;
