import CodeShare from '@components/codeshare';
import React, { useState, useEffect } from 'react';
import { CodeSharePage } from './styles';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { projectIconState, userDataState } from '../../store/basic';
import SendBirdCall from "sendbird-calls";
import axios from 'axios';

const CodeShareContent = () => {
    const setProjectShow = useSetRecoilState(projectIconState);
    const videoContainer = document.getElementById("video_container");
    const localMediaView = document.getElementById("local_video_element_id");
    const [videoRoom, setVideoRoom] = useState(null as any);
    const userData = useRecoilValue(userDataState);
  
    window.addEventListener("beforeunload", (event) => {
      if (videoRoom) {
        videoRoom.exit();
      }
    });
  
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
              const remoteMediaView = document.createElement("video");
              remoteMediaView.setAttribute("width", "300px");
              remoteMediaView.setAttribute("height", "200px");
              remoteMediaView.setAttribute("id", remoteParticipant.participantId);
              remoteMediaView.autoplay = true;
              remoteParticipant.setMediaView(remoteMediaView);
              videoContainer?.appendChild(remoteMediaView);
            }
          );
          videoRoom.on(
            "remoteParticipantExited",
            (remoteParticipant: SendBirdCall.RemoteParticipant) => {
              document.getElementById(remoteParticipant.participantId)?.remove();
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
    ]);
    return (
        <>
        <CodeSharePage>
            <div className="codeshare-content">
               <div id="codeshare"><CodeShare projectId={"TThQ2JDeLZvlkk4OZBtG"} /></div>
               <div id="grading">
                <button onClick={() => setProjectShow(true)}>취소</button>
               </div>
               <div id="video_container">
                <video
                width="300px"
                height="200px"
                id="local_video_element_id"
                autoPlay
                />
                </div>
           </div>
        </CodeSharePage>
        </>
    );
};

export default CodeShareContent;