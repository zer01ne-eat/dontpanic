import React, { useState, useEffect, useCallback, VFC } from 'react';
import useInput from '@hooks/useInput';
import { Slime, CharacterCreation, Error, Button } from './styles';
import axios from 'axios';

interface Props {
    dispatchModalAction: () => void;
}

const UserCreation: VFC<Props> = ({ dispatchModalAction }) => {
    const [signUpError, setSignUpError] = useState(false);
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [mismatchError, setMismatchError] = useState(false);
    const [currentClick, setCurrentClick] = useState("default");
    const [nickname, onChangeNickname] = useInput("");
    const [slimeColor, setSlimeColor] = useState("");

    const GetClick = (e: any) => {
        if (currentClick !== "default" ) {
            let prev = document.getElementById(currentClick!)
            prev!.style.border = "";
        }
        setCurrentClick(e.target.id);
        setSlimeColor(e.target.id);
        };
        
    useEffect(() => {
        if (currentClick !== "default") {
            let current = document.getElementById(currentClick!);
            current!.style.border = "3px solid rgb(255, 255, 255)";
        }
    }, [currentClick]);

    const onSubmit = useCallback(
        (e) => {
          e.preventDefault();
          if (!nickname || !nickname.trim()) {
            return;
          }
        //   if (!mismatchError) {
        //     setSignUpError(false);
        //     setSignUpSuccess(false);
        //     axios
        //       .post('/api/users', { nickname, slimeColor }, {withCredentials: true})
        //       .then(() => {
        //         console.log("axios post");
        //         setSignUpSuccess(true);
        //         // dispatchModalAction();
        //       })
        //       .catch((error) => {
        //         console.log(error.response?.data);
        //         setSignUpError(error.response?.data?.code === 403);
        //       });
        //   }
          dispatchModalAction();
        },
        [nickname, slimeColor, mismatchError],
      );

    return (
        <>
            <form onSubmit={onSubmit}>
                <div style={{"display":"inline-block"}}>
                    <Slime><img src={`imgs/slimes/${currentClick}.svg`} /></Slime>
                </div>
                <CharacterCreation>
                    <label id="nickname">
                        <div id="title">NAME</div>
                        <div>
                            <input placeholder="Enter Name" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} style={{"display":"block","width":"335px","fontSize":"34px","lineHeight":"44px","background":"transparent","border":"none","borderBottom":"1px solid #6c6c6c","padding":"5px 0","borderRadius":"0", "color": "#fff"}} />
                        </div>
                    </label>
                    <div id="title">Choose a Color</div>
                    <div style={{"display":"flex","marginTop":"20px","marginBottom":"20px"}}>
                        <div onClick={GetClick} id="1" color="#06c1c1" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(6, 193, 193)"}}></div>
                        <div onClick={GetClick} id="red" color="#f9533b" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(249, 83, 59)"}}></div>
                        <div onClick={GetClick} id="3" color="#fea040" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(254, 160, 64)"}}></div>
                        <div onClick={GetClick} id="4" color="#ffbf2b" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(255, 191, 43)"}}></div>
                        <div onClick={GetClick} id="5" color="#06c17a" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(6, 193, 122)"}}></div>
                        <div onClick={GetClick} id="6" color="#396bf6" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(57, 107, 246)"}}></div>
                        <div onClick={GetClick} id="7" color="#3e579c" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(62, 87, 156)"}}></div>
                        <div onClick={GetClick} id="8" color="#fff7f1" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(255, 247, 241)"}}></div>
                        <div onClick={GetClick} id="9" color="#969696" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(150, 150, 150)"}}></div>
                    </div>
                </CharacterCreation>
                {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
                {!nickname && <Error>닉네임을 입력해주세요.</Error>}
                {signUpError && <Error>이미 가입된 이메일입니다.</Error>}
                <Button>
                    <div id="buttons"><button type="submit">next</button></div>
                </Button>
            </form>
        </>
    );
}

export default UserCreation;