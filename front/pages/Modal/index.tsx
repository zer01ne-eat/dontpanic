import React, { useState, FC, useReducer } from 'react';
import Modal from '@components/modal';
import Intro from '@pages/Modal/Intro';
import UserCreation from '@pages/Modal/UserCreation';
import Skills from '@pages/Modal/Skills';

const INTRO = 'INTRO';
const USER_CREATION = 'USER_CREATION';
const SKILL = 'SKILL';
const CLOSE = 'CLOSE';

interface Props {
    onCloseModal: () => void;
}

const ModalPage: FC<Props> = ({ onCloseModal }) => {
    const modalReducer = (state: any, action: any) => {
  
        switch (action.type) {
              case INTRO:
                    return {
                      content: <Intro />,
                      confirmButtonText: 'CONTINUE',
                      confirmButtonAction: () => dispatchModalAction(USER_CREATION),
                      show: true
                    }
                    
              case USER_CREATION:
                    return { 
                      content: <UserCreation />,
                      confirmButtonText: 'NEXT',
                      confirmButtonAction: () => dispatchModalAction(SKILL),
                      show: true
                    }
              case SKILL:
                    return { 
                      content: <Skills />,
                      confirmButtonText: 'START',
                      confirmButtonAction: () => {dispatchModalAction(CLOSE); onCloseModal();},
                      show: true
                    }
              case CLOSE:
                  return { 
                      content: '',
                      confirmButtonText: '',
                      confirmButtonAction: () => console.log('Session(s) requested.'),
                      show: false
                  }
  
        }
  }
    const [showConfirmCallToAction, setshowConfirmCallToAction] = useState(true);

    const [modalState, modalDispatch] = useReducer(modalReducer, {
        content: <Intro />,
        confirmButtonText: 'CONTINUE',
        confirmButtonAction: () => dispatchModalAction(USER_CREATION),
        show: true
    }
    )

    
    const dispatchModalAction = (action: string) => {
        modalDispatch({
          type: action,
          user: {
              username: 'ddd'
          }
        })
    }

    const closeModalHandler = () => {
        modalDispatch({
            type: CLOSE
        })
    }
    
    return (
        <>
            <Modal
                showConfirmCallToAction={showConfirmCallToAction}
                show={modalState!.show}
                close={closeModalHandler}
                confirmButtonText={modalState!.confirmButtonText}
                confirmButtonAction={modalState!.confirmButtonAction}>
                {modalState!.content}
             </Modal>
        </>
    );
}

export default ModalPage;