import React from 'react';
import Player from '@components/character/player';
import { useRecoilValue } from 'recoil';
import { projectDataState, projectIconState } from '../../store/basic';
import { Link, Route } from 'react-router-dom';
import loadable from '@loadable/component';
import axios from 'axios';
// import { BackGround } from './styles';

// const CodeShare = loadable(() => import('@pages/CodeShare'));

const Map = () => {
    const projectShow = useRecoilValue(projectIconState);
    const projects = [
        {name: 'project1', position: {x: 1550, y: 500}, type: 'html'},
        {name: 'project2', position: {x: 850, y: 700}, type: 'css'},
        {name: 'project3', position: {x: 1300, y: 1000}, type: 'js'}]
    return (
        <>
            <Player skin="character-00" />
            {/* <button><Link style={{"textDecoration": "none"}} to='/codeshare'>dd</Link></button>
            <Route path='/codeshare' component={CodeShare} /> */}

            {projectShow ? <>             {projects.map(project =>         
            <div key={project.name}
            style={{
                position: "absolute",
                top: project.position.y,
                left: project.position.x,
                height: '100px',
                width: '100px',
                backgroundImage: `url(imgs/projects/${project.type}-default.svg)`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
            }}
            />)}</>: <></> }

        </>
  );
};

export default Map;
