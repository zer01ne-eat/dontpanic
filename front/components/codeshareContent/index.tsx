import CodeShare from '@components/codeshare';
import React, { useState, useEffect } from 'react';
import { CodeSharePage,SlimeSVG } from './styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { projectIconState, userDataState } from '../../store/basic';
import SendBirdCall from "sendbird-calls";
import axios from 'axios';
import { BackGround } from '@layouts/styles';
import SlimeCharacter from '@imgs/slimes/red';
import ReactDOM from 'react-dom';

const CodeShareContent = () => {
  const setProjectShow = useSetRecoilState(projectIconState);
  const videoContainer = document.getElementById("video_container");
  const localMediaView = document.getElementById("local_video_element_id");
  const [videoRoom, setVideoRoom] = useState(null as any);
  const [remoteUser, setRemoteUser] = useState('');
  const userData = useRecoilValue(userDataState);

  window.addEventListener("beforeunload", (event) => {
    if (videoRoom) {
      videoRoom.exit();
    }
  });

  const userSlime = (slimeColor:string) => {
    return (            <div style={{ width: "41px", height: "40px", borderRadius: "50px", backgroundColor: "white", display: "flex", alignItems: "center"}}>
    <SlimeSVG><SlimeCharacter color={slimeColor} /></SlimeSVG>
    {/* <div style={{ width: "300px",marginRight: "-36px"}} >{userData.nickname}</div> */}
  </div>)
  }
  // Calls
  useEffect(() => {
    SendBirdCall.init(process.env.REACT_APP_CHAT_APP_ID!);

    const authOption = {
      userId: userData.nickname,
      accessToken: userData.sendbirdAccessToken,
    };

    SendBirdCall.authenticate(authOption, async (result, error) => {
      await SendBirdCall.connectWebSocket();
      const room = await SendBirdCall.fetchRoomById(
        "000088b5-fe00-47ed-a721-782cc1e92e75"
      );

      setVideoRoom(room);
      if (videoRoom) {
        await videoRoom.enter({ videoEnabled: true, audioEnabled: false });
        videoRoom.localParticipant.setMediaView(
          localMediaView as HTMLMediaElement
        );
        videoRoom.on(
          "remoteParticipantStreamStarted",
          (remoteParticipant: SendBirdCall.RemoteParticipant) => {
            console.log(remoteParticipant.user);
              axios({        method: 'GET',
              url: 'https://us-central1-dontpanic-zerone.cloudfunctions.net/getProjectList?name=' + userData.nickname,
            })
              .then((response) => {
                setRemoteUser(response.data.slimeColor);
              })
              .catch((error) => {
                console.error(error);})
            const remoteMediaView = document.createElement("video");
            remoteMediaView.setAttribute("width", "635px");
            remoteMediaView.setAttribute("height", "378px");
            remoteMediaView.setAttribute("border-radius", "50px");
            remoteMediaView.setAttribute("id", remoteParticipant.participantId);
            remoteMediaView.autoplay = true;
            remoteParticipant.setMediaView(remoteMediaView);
            const userInfo = document.createElement('div');
            userInfo.setAttribute('id', 'user-info-remote');
            const styleElement = document.createElement('div');
            styleElement.setAttribute(
              'style',
              'display: flex; align-items: center; width: 41px; height: 40px; border-radius: 50px; backgroundColor: white;',
            );
          const nicknameElement = document.createElement('div');
          nicknameElement.setAttribute('id', 'user-nickname-remote');
          nicknameElement.setAttribute(
            'style',
            '  width: 300px; margin-right: -300px; font-family: NS-Regular; font-size: 17.3px; color: #fff;',
          );
          nicknameElement.appendChild(document.createTextNode(remoteParticipant.user.userId));
          ReactDOM.render(userSlime(remoteUser), styleElement);
          styleElement.appendChild(nicknameElement);

          userInfo.appendChild(styleElement);
          videoContainer?.appendChild(remoteMediaView);
          videoContainer?.appendChild(userInfo);
            videoContainer?.appendChild(remoteMediaView);
          }
        );
        videoRoom.on(
          "remoteParticipantExited",
          (remoteParticipant: SendBirdCall.RemoteParticipant) => {
            document.getElementById(remoteParticipant.participantId)?.remove();
            document.getElementById('user-info-remote')?.remove();
            document.getElementById('user-nickname-remote')?.remove();
          }
        );
      }
    });
    return () => {
      if (videoRoom) {
        videoRoom.exit();
      }
    };
  }, [
    userData.nickname,
    userData.sendbirdAccessToken,
    videoRoom,
    localMediaView,
    videoContainer,
    setRemoteUser,
    // remoteUser
  ]);
  return (
    <>
      <CodeSharePage>
        <div className="codeshare-content">
          <div id="codeshare">
            <CodeShare projectId={"TThQ2JDeLZvlkk4OZBtG"} />
          </div>
          <div id="grading">
          </div>
          <div id="video_container">
            <div id="participants">participants</div>
            <video
              width="635px"
              height="378px"
              style={{ borderRadius: "30px" }}
              id="local_video_element_id"
              autoPlay
            />
            <div className="user-info">
            <div style={{ width: "41px", height: "40px", borderRadius: "50px", backgroundColor: "white", display: "flex", alignItems: "center"}}>
              <SlimeSVG><SlimeCharacter color={userData!.slimeColor} /></SlimeSVG>
              <div className="user-nickname" >{userData.nickname}</div>
            </div>
            </div>
            <div style={{ position: "absolute", bottom: "50px", cursor: "pointer" }}>
              <div className="exit-button">
                <button onClick={() => setProjectShow(true)}>
                  <div className="button-text">EXIT</div></button>
              </div>
            </div>
          </div>
        </div>
      </CodeSharePage>
    </>
  );
};

export default CodeShareContent;