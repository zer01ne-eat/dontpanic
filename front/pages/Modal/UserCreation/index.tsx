import React, { useState, useEffect, useCallback, VFC } from 'react';
import { BackIconSVG, UserCreationContent } from './styles';
import SlimeCharacter from '@imgs/slimes/red';
import SlimeCharacterDefault from '@imgs/slimes/default';
import useInput from '@hooks/useInput';
import Lottie from 'react-lottie';
import DefaultSlime from '@imgs/slimes/Slime_motion_00.json';
import Teal from '@imgs/slimes/#06c1c1.json';
import Red from '@imgs/slimes/#f9533b.json';
import Orange from '@imgs/slimes/#fea040.json';
import Yellow from '@imgs/slimes/#ffbf2b.json';
import Green from '@imgs/slimes/#06c17a.json';
import Blue from '@imgs/slimes/#396bf6.json';
import DarkBlue from '@imgs/slimes/#3e579c.json';
import White from '@imgs/slimes/#fff7f1.json';
import Grey from '@imgs/slimes/#969696.json';
import axios from 'axios';
import { useRecoilValue } from 'recoil';
import { UserData, userDataState } from '@store/basic';
import BackIcon from '@imgs/back';

interface Props {
  dispatchModalAction: (data: any) => void;
  dispatchModalBack: () => void;
  data: UserData | null;
}

const lottieOptions = {
    animationData: DefaultSlime,   
    loop: true,        
    autoplay: true,   
    rendererSettings: {
      className: 'add-class', // svg에 적용
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

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

const UserCreation: VFC<Props> = ({ dispatchModalAction, dispatchModalBack }) => {
  const [signUpError, setSignUpError] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [mismatchError, setMismatchError] = useState(false);
  const [currentClick, setCurrentClick] = useState('default');
  const [nickname, onChangeNickname] = useInput('');
  const [slimeColor, setSlimeColor] = useState('');
  const userData = useRecoilValue(userDataState);

  const GetClick = (e: any) => {
    if (currentClick !== 'default') {
      let prev = document.getElementById(currentClick!);
      prev!.style.border = '';
    }
    setCurrentClick(e.target.id);
    setSlimeColor(e.target.id);
  };
  useEffect(() => {
    if (currentClick !== 'default') {
      let current = document.getElementById(currentClick!);
      current!.style.border = '3px solid rgb(255, 255, 255)';
    }
  }, [currentClick]);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      userData.nickname = nickname;
      userData.slimeColor = slimeColor;
      console.log(userData);
      if (nickname && slimeColor) {
        dispatchModalAction(userData);
      }
    },
    [nickname, slimeColor],
  );

    return (
        <>
          <div style={{alignItems: "center", width: "100px", height: "100px", paddingTop: "65px", paddingBottom: '300px', marginLeft: '65px', cursor: 'pointer', position: 'absolute' }}
               onClick={dispatchModalBack}>
            <BackIconSVG><BackIcon /></BackIconSVG>
          </div>
            <UserCreationContent>
                <div className="user-creation-slime">
                    <div className="slime">{currentClick =='default' ? 
                    <Lottie
				options={lottieOptions}
				isClickToPauseDisabled={false}
				style={{width: '375px', height: '465px'}}
			/>
                    : 
                    <Lottie
                    options={{animationData: colorCode[slimeColor],loop: true,        
                    autoplay: true }}
                    isClickToPauseDisabled={false}
                    style={{width: '375px', height: '465px'}}
                />}
                    </div>
                </div>
                <div className="user-creation-input-content">
                    <div className="user-creation-title">NAME</div>
                    <input placeholder="Enter Name" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
                    <div className="user-creation-title" style={{paddingTop: "101px", paddingBottom: "0"}}>Choose a Color</div>
                    <div className="user-creation-color-choose">
                        <div onClick={GetClick} id="#06c1c1" className="color-circle" style={{backgroundColor: "rgb(6, 193, 193)"}} />
                        <div onClick={GetClick} id="#f9533b" className="color-circle" style={{backgroundColor: "rgb(249, 83, 59)"}} />
                        <div onClick={GetClick} id="#fea040" className="color-circle" style={{backgroundColor: "rgb(254, 160, 64)"}} />
                        <div onClick={GetClick} id="#ffbf2b" className="color-circle" style={{backgroundColor: "rgb(255, 191, 43)"}} />
                        <div onClick={GetClick} id="#06c17a" className="color-circle" style={{backgroundColor: "rgb(6, 193, 122)"}} />
                        <div onClick={GetClick} id="#396bf6" className="color-circle" style={{backgroundColor: "rgb(57, 107, 246)"}} />
                        <div onClick={GetClick} id="#3e579c" className="color-circle" style={{backgroundColor: "rgb(62, 87, 156)"}} />
                        <div onClick={GetClick} id="#fff7f1" className="color-circle" style={{backgroundColor: "rgb(255, 247, 241)"}} />
                        <div onClick={GetClick} id="#969696" className="color-circle" style={{backgroundColor: "rgb(150, 150, 150)"}} />
                    </div>
                    { (nickname && slimeColor) ? 
                    <div id="user-creation-button"><button style={{backgroundColor: '#5485ff'}} onClick={onSubmit}>NEXT</button></div>
                    : <div id="user-creation-button"><button style={{backgroundColor: '#6c6c6c'}} onClick={onSubmit}>NEXT</button></div>
                  }
                </div>
            </UserCreationContent>
        </>
    );
}

export default UserCreation;

// {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
// {!nickname && <Error>닉네임을 입력해주세요.</Error>}
// {signUpError && <Error>이미 가입된 이메일입니다.</Error>}
