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
import Moulinette from '@components/moulinette';
import { ProjectContent, ProjectIcon } from './styles';
import CSSIcon from '@imgs/projects/css-default';
import HTMLIcon from '@imgs/projects/html-default';
import JSIcon from '@imgs/projects/js-default';
import NameTag from '@components/nametag';

const colorCode:any = {
  "#06c1c1": "teal",
  "#f9533b": "red",
  "#fea040": "orange",
  "#ffbf2b": "yellow",
  "#06c17a": "green",
  "#396bf6": "blue",
  "#3e579c": "darkblue",
  "#fff7f1": "white",
  "#969696": "grey",
}

// const projectIcon:any = {
//   'html': <HTMLIcon />,
//   'css': <CSSIcon />,
//   'js': <JSIcon />
// }

const Map = () => {
  const [userData, setUserData] = useRecoilState(userDataState);
  const projectShow = useRecoilValue(projectIconState);
  const [projectList, setProjectList] = useRecoilState(projectListState);
  const [others, setOthers] = useState([] as UserData[]);

  const db = firebase.firestore();
  const userRef = db.collection('user').doc(userData.nickname);

  useEffect(() => {
    const unloadCallback = (event: { preventDefault: () => void; returnValue: string }) => {
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

  const projectIcon = (projectName: string) => {
    switch(projectName) {
      case "html":   return <HTMLIcon />;
      case "css":   return <CSSIcon />;
      case "js": return <JSIcon />;
    }
  }
  const projects = [
    { name: 'project1', position: { x: 1550, y: 500 }, type: 'html' },
    { name: 'project2', position: { x: 850, y: 700 }, type: 'css' },
    { name: 'project3', position: { x: 1300, y: 1000 }, type: 'js' },
  ];
  return (
    <>
      {projectShow ? (
        <>
          <Player key={userData.nickname} skin={colorCode[userData.slimeColor]} userData={userData} isUser={true} />
          {others.map((otherUser) => {
            return <Player key={otherUser.nickname} skin={colorCode[otherUser.slimeColor]} userData={otherUser} isUser={false} />;
          })}
          {projects.map((project) => (
            <ProjectContent style={{ top: project.position.y, left: project.position.x }}>
              <div className="name-tag"><NameTag name={project.name} /></div>
            <ProjectIcon key={project.name}>
              { projectIcon(project.type)}
          </ProjectIcon>
          </ProjectContent>
          ))}
          <Moulinette />
        </>
      ) : (
        <CodeShareContent />
      )}
    </>
  );
};

export default Map;
