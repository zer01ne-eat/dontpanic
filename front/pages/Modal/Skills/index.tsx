import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Slime, CharacterCreation, Skill } from './styles';

const Skills = () => {
    // const {data, error} = useSWR('/api/users', fetcher);
    const datas = [{nickname: 'ddd', slimeColor: 'red'}]
    const skills = ['html', 'css', 'javascript']
    const [currentClick, setCurrentClick] = useState("");

    const GetClick = (e: any) => {
        // if (currentClick !== "" ) {
        //     let prev = document.getElementById(currentClick!)
        //     // prev!.style.border = "";
        // }
        let prev = document.getElementById(currentClick!)
        setCurrentClick(e.target.id);
        };

    useEffect(() => {
            if (currentClick !== "") {
                let current = document.getElementById(currentClick!);
                console.log(current)
                current!.id = "selected";
                current!.style.border = "solid 9px #fff";
                current!.style.color = "#fff";
            }
        }, [currentClick]);
    // axios
    // .get('/api/users', {
    //   withCredentials: true,
    // })
    // .then((response) => {
    //     response.data;
    //     console.log(response.data);});
    return (
        <>

                <div style={{"display":"inline-block"}}>
                    <Slime><img src={`imgs/slimes/${datas[0].slimeColor}.svg`} /></Slime>
                </div>
                <CharacterCreation>
                    <label id="nickname">
                        <div id="title">Preferred skills (select)</div>
                        <ul style={{listStyle: "none", "display": "flex"}}>
                            {skills.map(skill => (
                            <li style={{"paddingRight": "10px"}}>
                                <Skill id={skill} onClick={GetClick}><div className='name'>{skill}</div></Skill>
                            </li>
                            ))}
                        </ul>
                    </label>
                </CharacterCreation>
        </>
    );
}

export default Skills;