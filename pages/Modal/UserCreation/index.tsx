import React from 'react';
import { Slime, CharacterCreation } from './styles';

const UserCreation = () => {

    return (
        <>
            <div style={{"display":"flex"}}>
                <Slime><img src="imgs/000.svg" /></Slime>
            </div>
            <CharacterCreation>
                <div id="title">NAME</div>
                <input placeholder="Enter Name" style={{"display":"block","width":"335px","fontSize":"34px","lineHeight":"44px","background":"transparent","border":"none","borderBottom":"1px solid #6c6c6c","padding":"5px 0","borderRadius":"0", "color": "#fff"}}/>
                <div id="title">Choose a Color</div>
                <div style={{"display":"flex","marginTop":"20px","marginBottom":"20px","justifyContent":"center"}}>
                    <div color="#06c1c1" style={{"width":"30px","height":"30px","borderRadius":"50%","border":"3px solid rgb(255, 255, 255)","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(6, 193, 193)"}}></div>
                    <div color="#f9533b" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(249, 83, 59)"}}></div>
                    <div color="#fea040" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(254, 160, 64)"}}></div>
                    <div color="#ffbf2b" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(255, 191, 43)"}}></div>
                    <div color="#06c17a" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(6, 193, 122)"}}></div>
                    <div color="#396bf6" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(57, 107, 246)"}}></div>
                    <div color="#3e579c" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(62, 87, 156)"}}></div>
                    <div color="#fff7f1" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(255, 247, 241)"}}></div>
                    <div color="#969696" style={{"width":"30px","height":"30px","borderRadius":"50%","margin":"0px 5px","cursor":"pointer","backgroundColor":"rgb(150, 150, 150)"}}></div>
                </div>
            </CharacterCreation>
        </>
    );
}

export default UserCreation;