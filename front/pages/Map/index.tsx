import React, { useEffect } from 'react';
import Player from '@components/character/player';
import CodeShare from '@components/codeshare';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userDataState, projectListState } from '@store/basic';
import { projectIconState } from '../../store/basic';
import loadable from '@loadable/component';
import axios from 'axios';
import CodeShareContent from '@components/codeshareContent';

// import { BackGround } from './styles';

const Map = () => {
    const userData = useRecoilValue(userDataState);
    const projectShow = useRecoilValue(projectIconState);
    const [projectList, setProjectList] = useRecoilState(projectListState);

    useEffect(() => {
        axios({
          method: "GET",
          url:
            "https://us-central1-dontpanic-zerone.cloudfunctions.net/getProjectList?name=" +
            userData.nickname,
        })
          .then((response) => {
            setProjectList(response.data as any[]);
          })
          .catch((error) => {
            console.error(error);
          });
      }, [userData.nickname, setProjectList]);
      
    const projects = [
        {name: 'project1', position: {x: 1550, y: 500}, type: 'html'},
        {name: 'project2', position: {x: 850, y: 700}, type: 'css'},
        {name: 'project3', position: {x: 1300, y: 1000}, type: 'js'}]
    return (
    <>
        { projectShow ?
            <>
                <Player skin="character-00" />
                {projects.map(project =>
                    <div key={project.name}
                        style={{
                            position: "absolute",
                            top: project.position.y,
                            left: project.position.x,
                            height: '100px',
                            width: '100px',
                            backgroundImage: `url(imgs/projects/${project.type}-default.svg)`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                        }} />)}
            </>
            : 
            <CodeShareContent />
            }
    </>
  );
};

export default Map;