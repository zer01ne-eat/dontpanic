import React, { FC } from "react";
import Sprite from "../sprite";

interface Props {
    sprite: string,
    data: any,
    position: any,
    step: any,
    dir: any,
  }
  
const Actor: FC<Props> = ({     sprite,
    data,
    position = {x: 0, y: 0},
    step = 0,
    dir = 0 }) => {
    const { h, w } = data;
    return (
        <Sprite
        image={ sprite }
        position={position}
        data={{
          x: step * w,
          y: dir * h,
          w,
          h,
        }}
        />
    );
}

export default Actor;