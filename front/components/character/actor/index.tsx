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

      if ((position.x >= 875 && position.x <= 1040) && (position.y >= 685 && position.y <= 805) ||
      (position.x >= 1580 && position.x <= 1745) && (position.y >= 490 && position.y <= 625) ||
      (position.x >= 1325 && position.x <= 1490) && (position.y >= 1000 && position.y <= 1105))
      {
        if ((position.x >= 875 && position.x <= 1040) && (position.y >= 685 && position.y <= 805)) {
          currentProject('css')
        }
        if ((position.x >= 1580 && position.x <= 1745) && (position.y >= 490 && position.y <= 625)) {
          currentProject('html')
        }
        if ((position.x >= 1325 && position.x <= 1490) && (position.y >= 1000 && position.y <= 1105)) {
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