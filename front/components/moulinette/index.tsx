import MoulinetteIcon from "@imgs/projects/ai-machine";
import React from "react";
import { MoulinetteSVG, MoulinetteContainer } from "./styles";

const Moulinette = () => {
    return(
        <MoulinetteContainer>
            {/* <img src='../../imgs/ai-machine.svg' /> */}
            <MoulinetteSVG>
                <MoulinetteIcon />
            </MoulinetteSVG>
        </MoulinetteContainer>
    );
}

export default Moulinette;