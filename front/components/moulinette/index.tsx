import NameTag from "@components/nametag";
import MoulinetteIcon from "@imgs/projects/ai-machine";
import React from "react";
import { MoulinetteSVG, MoulinetteContainer } from "./styles";

const Moulinette = () => {
    return(
        <MoulinetteContainer>
            <div className="name-tag"><NameTag name="준비중입니다."></NameTag></div>
            <MoulinetteSVG>

                <MoulinetteIcon />
            </MoulinetteSVG>
        </MoulinetteContainer>
    );
}

export default Moulinette;