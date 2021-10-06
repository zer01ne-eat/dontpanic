import React, { useState} from 'react';
import axios from 'axios';

const Info = () => {
    const [nickname, setNickname] = useState('');
    axios
    .get('/api/users', {
      withCredentials: true,
    })
    .then((response) => {
        response.data;
        setNickname(response.data.nickname);
        console.log(response.data);});

    return (
        <div>
            <img style={{"display":"flex","width": "90px"}} src='imgs/slimes/red.svg' />
            {nickname} <br />
            level<br />
            skill
        </div>
  );
};

export default Info;