import CodeShare from "@components/codeshare";
import React, { FC, useState } from "react";
// import { useRecoilValue } from "recoil";
// import { projectDataState } from "../../../store/basic";
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
    const [currentProject, setCurrentProject] = useState('')
    // const projectData = useRecoilValue(projectDataState);

    if ((position.x >= 804 && position.x <= 932) && (position.y >= 700 && position.y <= 764)) {
      console.log('project 들오와따!!');
      return (<div><CodeShare id={12}></CodeShare></div>)
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