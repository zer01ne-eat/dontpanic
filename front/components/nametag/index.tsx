import React, { VFC } from "react";
import { NameTagContent } from "./styles";

interface Props {
    name: string
}

const NameTag:VFC<Props> = ({name}) => {
    return(
        <NameTagContent>
            <div className="speech-bubble" />
            {/* <div className="triangle" /> */}
            <span className='name-text'>{name}</span>
        </NameTagContent>
    );
}

export default NameTag;