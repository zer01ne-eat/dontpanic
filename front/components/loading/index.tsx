import React, { FC } from "react";
import Lottie from "react-lottie";
import { LoadingPage } from './styles';
import LoadingMotion from '@imgs/slimes/loading02.json';

interface Props {
    slimeColor: string
}

const Loading:FC<Props> = ({slimeColor}) => {
    return(
        <LoadingPage>
            {/* <Lottie
                    options={{
                        animationData: LoadingMotion,
                        loop: true,        
                        autoplay: true }}
                    isClickToPauseDisabled={false}
                    style={{width: '300px', height: '300px', marginTop: '20px'}}
                /> */}
                <img src="../../imgs/slimes/loading.gif" />
            <div className="loading">
                <div className="loading-text">loading...</div>
            </div>
        </LoadingPage>
    );
}

export default Loading;