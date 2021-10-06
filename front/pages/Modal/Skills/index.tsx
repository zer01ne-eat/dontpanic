import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Slime, CharacterCreation, Skill } from './styles';

const Skills = () => {
    const {data, error} = useSWR('/api/users', fetcher);
    const datas = [{nickname: 'ddd', slimeColor: 'red'}]
    const skills = ['html', 'css', 'javascript']
    const [currentClick, setCurrentClick] = useState("");
    const GetClick = (e: any) => {
        setCurrentClick(e.target.id);
        if (currentClick !== "") {
            console.log(currentClick)
            let current = document.getElementById(currentClick!);
            if (current?.className == "unselected") {
                current!.className = "selected"
            }
            else {
                current!.className = "unselected"
            }
        }
        };
    useEffect(() => {
            if (currentClick !== "") {
                let current = document.getElementById(currentClick!);

                if (current?.className == "unselected") {
                    current!.style.border = "solid 9px #fff";
                    current!.style.color = "#fff";
                    // current.className = "selected"
                }
                else {
                    current!.style.border = "solid 9px #6c6c6c";
                    current!.style.color = "#6c6c6c";
                    // current!.className = "unselected";
                }

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

                {/* <div style={{"display":"inline-block"}}> */}
                    <Slime><img src={`imgs/slimes/${datas[0].slimeColor}.svg`} /></Slime>
                {/* </div> */}
                <CharacterCreation>
                        <div id="title">Preferred skills (select)</div>
                        <ul style={{listStyle: "none", "display": "flex"}}>
                            {skills.map(skill => (
                            <li key={skill} style={{"paddingRight": "10px"}}>
                                <Skill>
                                    <div className="unselected" id={skill} onClick={GetClick} style={{padding: "15px 55px", "borderRadius": "60.8px", "cursor": "pointer", border: "solid 9px #6c6c6c", color: "#6c6c6c"}}>{skill}</div>
                                </Skill>
                            </li>
                            ))}
                        </ul>
                </CharacterCreation>
        </>
    );
}

export default Skills;