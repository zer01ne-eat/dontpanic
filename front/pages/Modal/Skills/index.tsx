import React, { useState, useEffect, useCallback, VFC } from 'react';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { Slime, CharacterCreation, Skill } from './styles';
import SlimeCharacter from '../../../imgs/slimes/red';

interface Props {
    dispatchModalAction: () => void;
    userData: { nickname: string, slimeColor: string } | null;
}

const Skills: VFC<Props> = ({ userData, dispatchModalAction }) => {
    // const Skills = () => {
    // const {data, error} = useSWR('/api/users', fetcher);
    const skills = ['html', 'css', 'javascript']
    const selectedSkills: any[] = []
    const GetClick = useCallback(
        (e) => {
            e.preventDefault();

            if (e.target.className == 'selected') {
                e.target.className = 'unselected';
                e.target.style.border = "solid 9px #6c6c6c";
                e.target.style.color = "#6c6c6c";
            }
            else if (e.target.className == 'unselected') {
                e.target.className = 'selected'
                e.target.style.border = "solid 9px #fff";
                e.target.style.color = "#fff";
            }
        },
        [],
    )

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
            // axios
            //   .post('/api/users', { nickname, slimeColor }, {withCredentials: true})
            //   .then(() => {
            //     console.log("axios post");
            //     setSignUpSuccess(true);
            //     dispatchModalAction();
            //   })
            //   .catch((error) => {
            //     console.log(error.response?.data);
            //     setSignUpError(error.response?.data?.code === 403);
            //   });
            //   }
            dispatchModalAction();
        },
        [],
    );
    return (
        <>
            <form onSubmit={onSubmit}>
                {/* <div style={{"display":"inline-block"}}> */}
                <Slime><SlimeCharacter color={userData!.slimeColor} /></Slime>
                {/* </div> */}
                <CharacterCreation>
                    <div id="title">Preferred skills (select)</div>
                    <ul style={{ listStyle: "none", "display": "flex" }}>
                        {skills.map(skill => (
                            <li key={skill} style={{ "paddingRight": "10px" }}>
                                <Skill>
                                    <div className="unselected" id={skill} onClick={GetClick} style={{ padding: "15px 55px", "borderRadius": "60.8px", "cursor": "pointer", border: "solid 9px #6c6c6c", color: "#6c6c6c" }}>{skill}</div>
                                </Skill>
                            </li>
                        ))}
                    </ul>
                    <div id="buttons"><button className="ModalButton" onClick={onSubmit}>CONTINUE</button></div>
                </CharacterCreation>
            </form>

        </>
    );
}

export default Skills;