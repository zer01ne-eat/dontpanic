import React, { useEffect, useState } from 'react';
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
  const [others, setOthers] = useState([] as UserData[]);

  const db = firebase.firestore();
  const userRef = db.collection('user').doc(userData.nickname);

  useEffect(() => {
    const unloadCallback = (event: { preventDefault: () => void; returnValue: string }) => {
      console.log(event);
      event.preventDefault();
      event.returnValue = '';
      return userRef.update({
        isOnline: false,
      });
    };

    window.addEventListener('beforeunload', unloadCallback);
    return () => window.removeEventListener('beforeunload', unloadCallback);
  }, []);

  useEffect(() => {
    userRef.update({
      isOnline: true,
    });
    userRef.onSnapshot((doc) => {
      if (doc.data() !== undefined) {
        const currentData = new UserData(doc.data());
        setUserData(currentData);
      }
    });

    db.collection('user')
      .where('isOnline', '==', true)
      .where('nickname', '!=', userData.nickname)
      .onSnapshot((querySnapshot) => {
        let users = [] as UserData[];
        querySnapshot.forEach((doc) => {
          users.push(new UserData(doc.data()));
        });
        // console.log(users);
        setOthers(users);
      });
  }, []);

  useEffect(() => {
    if (userData !== undefined && userData.isOnline) {
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
    }
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
          <Player key={userData.nickname} skin="teal" userData={userData} />
          {others.map((otherUser) => {
            return <Player key={otherUser.nickname} skin="teal" userData={otherUser} />;
          })}
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
