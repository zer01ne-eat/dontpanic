import React from 'react';
import { HomeContent } from './styles';

const Home = () => {
    return (
        <HomeContent>
            <div className="title" style={{padding: "42px 177px 1px 35px"}}>HOME</div>
                <div className="description" style={{paddingLeft: "35px", paddingRight: "21px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
        </HomeContent>
  );
};

export default Home;
