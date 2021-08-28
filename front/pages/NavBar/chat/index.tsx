import React from 'react';

const Chat = () => {
    return (
        <div style={{width:"100%", height:"100%", padding: "20px", backgroundColor: "#1e1e1e"}}>
            <div style={{border:"2px solid blue", height:"70%"}}>
                
            </div>
            <div style={{height:"30%", border:"2px solid green",}}>
                <textarea placeholder="Press Enter to send message." style={{color: "#fff",width:"100%", height:"100%", "border":"none", "backgroundColor": "#141414", position:"static"}}/>
            </div>
        </div>
  );
};

export default Chat;
