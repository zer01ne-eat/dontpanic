import { useState } from 'react';

export default function useWalk(maxSteps: number, initialPosiotn: { x: number; y: number }) {
  const [position, setPos] = useState({ x: initialPosiotn.x, y: initialPosiotn.y }); //캐릭터 initial position
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const directions: any = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  };
  const stepSize = 20;
  console.log('user data : ', initialPosiotn);

  const modifier: any = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  function warp(position: { x: number; y: number }) {
    setPos(() => {
      return {
        x: position.x,
        y: position.y,
      };
    });
  }

  function walk(dir: string) {
    setDir((prev) => {
      if (directions[dir] === prev) move(dir);
      return directions[dir];
    });
    setStep((prev) => (prev < maxSteps - 1 ? prev + 1 : 0));
  }

  function move(dir: string | number) {
    setPos((prev) => {
      let tempX = prev.x + modifier[dir].x;
      let tempY = prev.y + modifier[dir].y;
      let posX = prev.x;
      let posY = prev.y;
      if (tempX >= 0 && tempX <= 2500) posX = tempX;
      if (tempY >= 0 && tempY <= 1292) posY = tempY;
      return {
        x: posX,
        y: posY,
      };
    });
  }

  return {
    walk,
    warp,
    dir,
    step,
    position,
  };
}
