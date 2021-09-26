import React from 'react';
import axios from 'axios';

const Skills = () => {
    axios
    .get('/api/users', {
      withCredentials: true,
    })
    .then((response) => {
        response.data;
        console.log(response.data);});
    return (
        <>

        </>
    );
}

export default Skills;