import styled from '@emotion/styled';

export const SlimeSVG = styled.div`
    width: 40px;
    height: 40px;
    margin-right: 6px;
`;

export const CodeSharePage = styled.div`
    width: 100%;
    height: 100%;
    // margin: 0;
    display: flex;
    background-color: #151515;

    & .codeshare-content {
        // width: 91%;
        height: 1340px;
        border-radius: 30px;
        margin-top: 50px;
        margin-left: 177.5px;
        background-color: #151515;
        display:flex;

        & #codeshare {
            width: 70%;
            height: 1340px;
            display: flex;
            border-radius: 30px;

        }
    }

    & #video_container {
        // border: solid 2px white;
        height: 100%;
        // margin-top: 200px;
        margin-left: 25px;
        & #participants {
            margin-top: 65px;
            font-family: NSD-Black;
            font-size: 21px;
            font-weight: 900;
            font-stretch: normal;
            font-style: normal;
            line-height: 0.95;
            letter-spacing: 2.63px;
            color: #6c6c6c;
            margin-bottom: 27.5px;
        }
        & .user-nickname {
            width: 300px;
            margin-right: -300px;
            font-family: NS-Regular;
            font-size: 17.3px;
            color: #fff;
        }
        & button { 
            outline: none;
            font-size: 40px;
            cursor: pointer;
            overflow: hidden;
            background-color: transparent;
            border: 0;
        }
        & .exit-button {
            width: 634px;
            height: 121.5px;
            // padding: 31.5px;
            object-fit: contain;
            border-radius: 30px;
            border: solid 1.3px #6c6c6c;
            & .button-text {
                width: 600px;
                height: 122px;
                font-family: NS-Regular;
                font-size: 40px;
                font-weight: 900;
                font-stretch: normal;
                font-style: normal;
                line-height: 1;
                letter-spacing: 5px;
                text-align: center;
                line-height: 122px;
                color: #6c6c6c;
                &:hover {
                    color: #5485ff
                }
            }
            &:hover {
                border: solid 1.3px #5485ff;
                color: #5485ff
            }

        }
    }
    & .user-info {
        width: 635px;
        height: 65px;
        padding: 9px 436px 15px 17px;
        border-radius: 16px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #2d2d2d);
        position: relative;
        top: -75px;
    }
    & #user-info-remote {
        width: 635px;
        height: 65px;
        padding: 9px 436px 15px 17px;
        border-radius: 16px;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), #2d2d2d);
        position: relative;
        top: 380px;
    }
`;