import React, { FC } from "react";
import Lottie from "react-lottie";
import { LoadingPage } from './styles';

interface Props {
    slimeColor: string
}

const Loading:FC<Props> = ({slimeColor}) => {
    return(
        <LoadingPage>
            <Lottie
                    options={{animationData: slimeColor,loop: true,        
                    autoplay: true }}
                    isClickToPauseDisabled={false}
                    style={{width: '300px', height: '300px', marginTop: '20px'}}
                />
                </LoadingPage>
    );
}

export default Loading;