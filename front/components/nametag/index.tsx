import React, { VFC } from "react";
import { NameTagContent } from "./styles";

interface Props {
    name: string
}

const NameTag:VFC<Props> = ({name}) => {
    return(
        <NameTagContent>
            <span className='name-text'>{name}</span>
        </NameTagContent>
    );
}

export default NameTag;