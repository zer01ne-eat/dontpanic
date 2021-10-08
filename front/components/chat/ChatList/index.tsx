import { ChatZone, Section, StickyHeader } from './styles';
import { IChat, IDM } from '@typings/db';
import React, { FC, RefObject, useCallback } from 'react';

// interface Props {

//   chatSections: { [key: string]: (IDM | IChat)[] };
// }
// const ChatList: FC<Props> = ({ chatSections }) => {
const ChatList = () => {

    return (
        <ChatZone>
             {/* {Object.entries(chatSections).map(([date, chats]) => {
          return (
            <Section className={`section-${date}`} key={date}>
              <StickyHeader>
                <button>{date}</button>
              </StickyHeader>
              {chats.map((chat) => (
                // <Chat key={chat.id} data={chat} />
                <>
                <div>{chat.content}</div>
                </>
              ))}
            </Section>
          );
        })} */}
        </ChatZone>
  );
};

export default ChatList;
