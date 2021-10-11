import React from 'react';
import { Contents, Skills } from './styles';
import { Radar, Chart } from 'react-chartjs-2';

const Profile = () => {
    
    const data = {
        labels: [
            'HTML',
            'CSS',
            'Javascript',
        ],
        datasets: [{
            data: [80, 70, 80],
        }]
    };
    return (
        <Contents>
            <Skills>
                <div className="title">SKILLS</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
                <Radar
                    data={data}
                    width={10}
                    height={5}
                    options={{ 
                        // maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                        scales: {
                            r: {
                                suggestedMin: 0,
                                suggestedMax: 100,
                                ticks: {
                                    display: false,
                                    count: 5,
                                },
                                grid: {
                                    circular: true,
                                    z: 5,
                                }
                            }
                        }
                    }}
                />
            </Skills>
            <hr style={{ width: "100%", padding: '0', margin: '0', border: 'none', height: '1px', backgroundColor: 'black' }} />
            <Skills>
                <div className="title">Marks</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
            </Skills>
        </Contents>
    );
};

export default Profile;
