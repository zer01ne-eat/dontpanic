import React, { useCallback } from 'react';
import ChatList from '@components/chat/ChatList';
import ChatBox from '@components/chat/ChatBox';
import useInput from '@hooks/useInput';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { IDM } from '@typings/db';

const Chat = () => {
const [chat, onChangeChat, setChat] = useInput('');
const {data: chatData, mutate: mutateChat } = useSWR<IDM[]>(
    '/api/dms/chats?perPage=20&page=1', fetcher, 
);
const onSubmitForm = useCallback(
    (e) => {
        e.preventDefault();
        if (chat?.trim()) {
            axios.post('/api/dms/chats', {
                content: chat,
            })
            .then(() => {
                mutateChat;
                setChat('');
            })
            .catch(console.error);
        }
    },
    [chat]
);
    return (
        <div>
        {/* // <div style={{width:"100%", height:"100%", padding: "20px", backgroundColor: "#1e1e1e"}}>
        //     <div style={{border:"2px solid blue", height:"70%"}}> */}
                <ChatList />
            {/* </div> */}
            <ChatBox chat={chat} onChangeChat={onChangeChat} onSubmitForm={onSubmitForm} />
            {/* <div style={{height:"30%", border:"2px solid green",}}>
                <textarea placeholder="Press Enter to send message." style={{color: "#fff",width:"100%", height:"100%", "border":"none", "backgroundColor": "#141414", position:"static"}}/>
            </div> */}
        </div>
  );
};

export default Chat;
