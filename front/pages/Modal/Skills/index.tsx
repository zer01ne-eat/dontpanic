import React, { useState, useCallback, VFC } from 'react';
import { SkillsContent, Skill } from './styles';
import { UserData, userDataState } from '@store/basic';
import SlimeCharacter from '@imgs/slimes/red';
import fetcher from '@utils/fetcher';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import Lottie from 'react-lottie';
import Teal from '@imgs/slimes/#06c1c1.json';
import Red from '@imgs/slimes/#f9533b.json';
import Orange from '@imgs/slimes/#fea040.json';
import Yellow from '@imgs/slimes/#ffbf2b.json';
import Green from '@imgs/slimes/#06c17a.json';
import Blue from '@imgs/slimes/#396bf6.json';
import DarkBlue from '@imgs/slimes/#3e579c.json';
import White from '@imgs/slimes/#fff7f1.json';
import Grey from '@imgs/slimes/#969696.json';

interface Props {
  dispatchModalAction: () => void;
  userData: UserData | null;
}

const colorCode:any = {
    "#06c1c1": Teal,
    "#f9533b": Red,
    "#fea040": Orange,
    "#ffbf2b": Yellow,
    "#06c17a": Green,
    "#396bf6": Blue,
    "#3e579c": DarkBlue,
    "#fff7f1": White,
    "#969696": Grey,
}

const Skills: VFC<Props> = ({ userData, dispatchModalAction }) => {
  // const {data, error} = useSWR('/api/users', fetcher);
  const [data, setData] = useRecoilState(userDataState);
  const skills = ['html', 'css', 'javascript'];
  const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]);
  const GetClick = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.className == 'selected') {
        e.target.className = 'unselected';
        e.target.style.border = 'solid 9px #6c6c6c';
        e.target.style.color = '#6c6c6c';
        setSelectedSkills(selectedSkills.filter((skill) => e.target.id.indexOf(skill) === -1));
      } else if (e.target.className == 'unselected') {
        e.target.className = 'selected';
        e.target.style.border = 'solid 9px #fff';
        e.target.style.color = '#fff';
        setSelectedSkills([...selectedSkills, e.target.id]);
      }
    },
    [selectedSkills],
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const d = {
        nickname: userData!.nickname,
        slimeColor: userData!.slimeColor,
        level: 0,
        skills: selectedSkills,
      };
      // axios({
      //   method: "POST",
      //   url: "https://us-central1-dontpanic-zerone.cloudfunctions.net/loginUser",
      //   data: {
      //     nickname: userData!.nickname,
      //     slimeColor: userData!.slimeColor,
      //     userSkill: selectedSkills,
      //   },
      //   headers: {
      //     'Access-Control-Allow-Credentials': true,
      //     'Access-Control-Allow-Origin': 'http://localhost:4200',
      //     'content-type': 'application/json', 
      //   },
      //   withCredentials: true
      // })
      //   .then(() => {
      //     console.log("axios post");
      //     setData(userData!);
      //     dispatchModalAction();
      //   })
      //   .catch((error) => {
      //     console.log(error.response?.data);
      //   });

      setData(userData!);
      dispatchModalAction();
    },
    [selectedSkills],
  );
  return (
    <form onSubmit={onSubmit}>
      <SkillsContent>
        <div className="skills-slime">
          <div className="slime">
          <Lottie
                    options={{animationData: colorCode[userData!.slimeColor],loop: true,        
                    autoplay: true }}
                    isClickToPauseDisabled={false}
                    style={{width: '300px', height: '300px'}}
                />
            {/* <SlimeCharacter color={userData!.slimeColor} /> */}
          </div>
        </div>
        <div className="skills-content">
          <div className="skills-title">Preferred skills (select)</div>
          <ul style={{ listStyle: 'none', display: 'flex' }}>
            {skills.map((skill) => (
              <li key={skill} style={{ paddingRight: '10px' }}>
                <Skill>
                  <div
                    className="unselected"
                    id={skill}
                    onClick={GetClick}
                    style={{
                      padding: '15px 55px',
                      borderRadius: '60.8px',
                      cursor: 'pointer',
                      border: 'solid 9px #6c6c6c',
                      color: '#6c6c6c',
                    }}
                  >
                    {skill}
                  </div>
                </Skill>
              </li>
            ))}
          </ul>
          <div id="skills-button">
            <button onClick={onSubmit}>START</button>
          </div>
        </div>
      </SkillsContent>
    </form>
  );
};

export default Skills;
