import React, { FC } from "react";
import CodeShare from "@components/codeshare";
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

      if ((position.x >= 804 && position.x <= 932) && (position.y >= 700 && position.y <= 764) ||
      (position.x >= 1510 && position.x <= 1622) && (position.y >= 492 && position.y <= 588) ||
      (position.x >= 1254 && position.x <= 1366) && (position.y >= 988 && position.y <= 1084))
      {
        return (<CodeShare id={12} />)
      }
    
    return (
        <Sprite
        image={ sprite }
        position={position}
        data={{
          x: step,
          y: dir * h,
          w,
          h,
        }}
        />
    );
}

export default Actor;