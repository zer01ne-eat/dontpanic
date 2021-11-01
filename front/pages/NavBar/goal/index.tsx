import React from 'react';
import { GoalContent } from './styles';

const Goal = () => {
    return (
        <GoalContent>
            <div className="title" style={{padding: "42px 177px 1px 35px"}}>Goal</div>
                <div className="description" style={{paddingLeft: "35px", paddingRight: "21px"}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
        </GoalContent>
  );
};

export default Goal;
