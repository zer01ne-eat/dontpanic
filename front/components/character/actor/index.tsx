import React, { FC } from "react";
import CodeShare from "@components/codeshare";
import Sprite from "@components/character/sprite";
import { useSetRecoilState } from 'recoil';
import { projectIconState, currentProjectState } from '@store/basic';
import { UserData } from '@store/basic';


interface Props {
    sprite: string,
    data: any,
    position: any,
    step: any,
    dir: any,
    userData: UserData;
  }
  
const Actor: FC<Props> = ({     sprite,
    data,
    userData,
    position = {x: 0, y: 0},
    step = 0,
    dir = 0 }) => {
    const { h, w } = data;
    const projectShow = useSetRecoilState(projectIconState);
    const currentProject = useSetRecoilState(currentProjectState);

      if ((position.x >= 804 && position.x <= 932) && (position.y >= 700 && position.y <= 764) ||
      (position.x >= 1510 && position.x <= 1622) && (position.y >= 492 && position.y <= 588) ||
      (position.x >= 1254 && position.x <= 1366) && (position.y >= 988 && position.y <= 1084))
      {
        // return (<CodeShare projectId={"TThQ2JDeLZvlkk4OZBtG"} />)
        if ((position.x >= 804 && position.x <= 932) && (position.y >= 700 && position.y <= 764)) {
          currentProject('css')
        }
        if ((position.x >= 1510 && position.x <= 1622) && (position.y >= 492 && position.y <= 588)) {
          currentProject('html')
        }
        if ((position.x >= 1254 && position.x <= 1366) && (position.y >= 988 && position.y <= 1084)) {
          currentProject('js')
        }
        projectShow(false);
      }
    
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
        userData={userData}
        />
    );
}

export default Actor;