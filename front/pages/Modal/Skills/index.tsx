import React, { useState, useCallback, VFC } from 'react';
import { SkillsContent, Skill } from './styles';
import { UserData, userDataState } from '@store/basic';
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
import Loading from '@components/loading';
import Intro from '../Intro';
import { BackIconSVG } from '../UserCreation/styles';
import BackIcon from '@imgs/back';

interface Props {
  dispatchModalAction: () => void;
  dispatchModalBack: () => void;
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

const Skills: VFC<Props> = ({ userData, dispatchModalAction, dispatchModalBack }) => {
  // const {data, error} = useSWR('/api/users', fetcher);
  const [data, setData] = useRecoilState(userDataState);
  const skills = ['HTML', 'CSS', 'Javascript'];
  const [selectedSkills, setSelectedSkills] = useState<Array<string>>([]);
  const [loading, setLoading] = useState(false);
  const GetClick = useCallback(
    (e) => {
      e.preventDefault();

      if (e.target.className == 'selected') {
        e.target.className = 'unselected';
        e.target.style.border = 'solid 4.5px #6c6c6c';
        e.target.style.color = '#6c6c6c';
        setSelectedSkills(selectedSkills.filter((skill) => e.target.id.indexOf(skill) === -1));
      } else if (e.target.className == 'unselected') {
        e.target.className = 'selected';
        e.target.style.border = 'solid 4.5px #fff';
        e.target.style.color = '#fff';
        setSelectedSkills([...selectedSkills, e.target.id]);
      }
    },
    [selectedSkills],
  );

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        await axios({
          method: 'post',
          url: 'https://us-central1-dontpanic-zerone.cloudfunctions.net/loginUser',
          data: {
            nickname: userData?.nickname,
            slimeColor: userData?.slimeColor,
            userSkill: selectedSkills,
          },
        })
          .then((response) => {
            console.log(response);
          })
      } catch (error) {
        console.log(error);
      }
      dispatchModalAction();
      setLoading(false);
    },
    [selectedSkills],
  );

  if (loading) return <Loading slimeColor={colorCode[userData!.slimeColor]} />

  return (
    <form onSubmit={onSubmit}>
          <div style={{alignItems: "center", width: "100px", height: "100px", paddingTop: "65px", paddingBottom: '300px', marginLeft: '65px', cursor: 'pointer', position: 'absolute' }}
               onClick={dispatchModalBack}>
            <BackIconSVG><BackIcon /></BackIconSVG>
          </div>
      <SkillsContent>
        <div className="skills-slime">
          <div className="slime">
          <Lottie
                    options={{animationData: colorCode[userData!.slimeColor],loop: true,        
                    autoplay: true,
                    rendererSettings: {
                      className: 'add-class', // svg에 적용
                      preserveAspectRatio: 'xMidYMid slice'
                    } }}
                    isClickToPauseDisabled={false}
                    style={{width: '375px', height: '465px'}}
                />
            {/* <SlimeCharacter color={userData!.slimeColor} /> */}
          </div>
        </div>
        <div className="skills-content">
          <div className="skills-title">Preferred skills (optional)</div>
          <ul style={{ listStyle: 'none', display: 'flex', padding: "0", margin: "0" }}>
            {skills.map((skill) => (
              <li key={skill}>
                <Skill>
                  <div
                    className="unselected"
                    id={skill}
                    onClick={GetClick}
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
