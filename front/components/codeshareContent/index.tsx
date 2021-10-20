import CodeShare from '@components/codeshare';
import React from 'react';
import { CodeSharePage } from './styles';
import { useSetRecoilState } from 'recoil';
import { projectIconState } from '../../store/basic';

const CodeShareContent = () => {
    const setProjectShow = useSetRecoilState(projectIconState);

    return (
        <>
        <CodeSharePage>
            <div className="codeshare-content">
               <div id="codeshare"><CodeShare id={12} /></div>
               <div id="grading">
                <button onClick={() => setProjectShow(true)}>취소</button>
               </div>
           </div>
        </CodeSharePage>
        </>
    );
};

export default CodeShareContent;