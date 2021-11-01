import React from 'react';
import { ChatContent } from './styles';
import { userDataState } from '@store/basic';
import { SendBirdProvider, OpenChannel } from "sendbird-uikit";
import "sendbird-uikit/dist/index.css";
import { useRecoilValue } from 'recoil';

const Chat = () => {
  const userData = useRecoilValue(userDataState);

  return (
    <ChatContent>
        <SendBirdProvider
          appId={process.env.REACT_APP_CHAT_APP_ID!}
          userId={userData.nickname}
          theme="dark"
        >
          <div className="chat-sendbird">
          <OpenChannel
              channelUrl={process.env.REACT_APP_CHAT_CHANNEL_URL!}
              disableUserProfile // to determine whether to display user profile on clicking userIcons,
              fetchingParticipants={false}
            />
          </div>
        </SendBirdProvider>

    </ChatContent>

  );
};

export default Chat;