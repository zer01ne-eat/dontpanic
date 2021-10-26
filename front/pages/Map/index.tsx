import React, { useEffect } from 'react';
import Player from '@components/character/player';
import CodeShare from '@components/codeshare';
import { useRecoilValue, useRecoilState } from 'recoil';
import { userDataState, projectListState, UserData } from '@store/basic';
import { projectIconState } from '../../store/basic';
import loadable from '@loadable/component';
import axios from 'axios';
import CodeShareContent from '@components/codeshareContent';
import firebase from 'firebase';

// import { BackGround } from './styles';

const Map = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const projectShow = useRecoilValue(projectIconState);
  const [projectList, setProjectList] = useRecoilState(projectListState);

  const db = firebase.firestore();

  useEffect(() => {
    const userRef = db.collection('user').doc(userData.nickname);

    userRef.update({
      isOnline: true,
    });
    userRef.onSnapshot((doc) => {
      const currentData = new UserData(doc.data());
      setUserData(currentData);
    });
  }, []);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://us-central1-dontpanic-zerone.cloudfunctions.net/getProjectList?name=' + userData.nickname,
    })
      .then((response) => {
        setProjectList(response.data as any[]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userData.nickname, setProjectList]);

  const projects = [
    { name: 'project1', position: { x: 1550, y: 500 }, type: 'html' },
    { name: 'project2', position: { x: 850, y: 700 }, type: 'css' },
    { name: 'project3', position: { x: 1300, y: 1000 }, type: 'js' },
  ];
  return (
    <>
      {projectShow ? (
        <>
          <Player skin="character-00" userData={userData} />
          {projects.map((project) => (
            <div
              key={project.name}
              style={{
                position: 'absolute',
                top: project.position.y,
                left: project.position.x,
                height: '100px',
                width: '100px',
                backgroundImage: `url(imgs/projects/${project.type}-default.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
          ))}
        </>
      ) : (
        <CodeShareContent />
      )}
    </>
  );
};

export default Map;
