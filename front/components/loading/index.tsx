import React, { FC } from "react";
import Lottie from "react-lottie";
import { LoadingPage } from './styles';
import loadable from '@loadable/component';

const Map = loadable(() => import('@pages/Map'));

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
            <div className="loading">
                <div className="loading-text">loading...</div>
            </div>
        </LoadingPage>
    );
}

export default Loading;