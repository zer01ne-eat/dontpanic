import React, { FC, useEffect } from 'react';
import Actor from '@components/character/actor';
import useKeyPress from '@hooks/useKeyPress';
import useWalk from '@hooks/use-walk';
import { UserData, userDataState } from '@store/basic';
import firebase from 'firebase';
import { useRecoilValue } from 'recoil';

interface Props {
  skin: string;
  userData: UserData;
  isUser: boolean;
}

const Player: FC<Props> = ({ skin, userData, isUser }) => {
  const player = useRecoilValue(userDataState);
  const { dir, step, walk, position, warp } = useWalk(8, { x: userData.positionX, y: userData.positionY });
  const data = {
    h: 85,
    w: 85,
  };
  useEffect(() => {
    if (!isUser) {
      warp({ x: userData.positionX, y: userData.positionY });
    }
  }, [userData]);

  useKeyPress((e) => {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowDown') {
      if (userData.nickname === player.nickname) {
        walk(e.key.replace('Arrow', '').toLowerCase());
        firebase.firestore().collection('user').doc(userData.nickname).update({
          isOnline: true,
          positionX: position.x,
          positionY: position.y,
        });
      }
    } else {
      return;
    }
    e.preventDefault();
  });

  return <Actor sprite={`../../../imgs/slimeMotion/${skin}.png`} data={data} step={step} dir={dir} position={position} userData={userData} />;
};

export default Player;
