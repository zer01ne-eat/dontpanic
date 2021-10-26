import React, { FC, useEffect } from 'react';
import Actor from '@components/character/actor';
import useKeyPress from '@hooks/useKeyPress';
import useWalk from '@hooks/use-walk';
import { UserData } from '@store/basic';
import firebase from 'firebase';

interface Props {
  skin: string;
  userData: UserData;
}

const Player: FC<Props> = ({ skin, userData }) => {
  const { dir, step, walk, position, warp } = useWalk(3, { x: userData.positionX, y: userData.positionY });
  const data = {
    h: 50,
    w: 50,
  };

  useEffect(() => {
    warp({ x: userData.positionX, y: userData.positionY });
  }, [userData]);

  useKeyPress((e) => {
    if (e.key == 'ArrowRight' || e.key == 'ArrowLeft' || e.key == 'ArrowUp' || e.key == 'ArrowDown') {
      walk(e.key.replace('Arrow', '').toLowerCase());
      firebase.firestore().collection('user').doc(userData.nickname).update({
        positionX: position.x,
        positionY: position.y,
      });
      console.log(position);
    } else {
      return;
    }
    e.preventDefault();
  });

  return <Actor sprite={`../../../imgs/${skin}.png`} data={data} step={step} dir={dir} position={position} />;
};

export default Player;
