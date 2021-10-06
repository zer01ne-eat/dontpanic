import React, { FC } from "react";

interface Props {
    image: string;
    data: any;
    position: any;
}

const Sprite: FC<Props> = ({ image, data, position }) => {
    const { y, x, h, w } = data;
    return(
        <div
            style={{
                position: "absolute",
                top: position.y,
                left: position.x,
                height: `${h}px`,
                width: `${w}px`,
                backgroundImage: `url(${image})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: `-${x}px -${y}px`,
            }}
        />
    );
}

export default Sprite;