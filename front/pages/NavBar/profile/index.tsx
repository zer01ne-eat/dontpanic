import React, { useRef, useState, useCallback } from 'react';
import { Contents, Skills, Oval } from './styles';
import Chart from 'chart.js/auto';
import Projects from '@pages/NavBar/profile/projects';
import { Scrollbars } from 'react-custom-scrollbars';

const Profile = () => {
    const [closeList, setCloseList] = useState(false);
    const [display, setDisplay] = useState('');
    const scrollbarRef = useRef(null);
    const onScroll = useCallback(() => {}, []);
    const ref = useRef<Chart | null>(null);
    const skillChart = (canvas:HTMLCanvasElement | null) => {
        const ctx = canvas?.getContext('2d');
        let gradient = ctx?.createLinearGradient(0.000, 0, 0, 150.000);
        gradient?.addColorStop(0.035, 'rgba(234, 25, 78, 1.000)');
        gradient?.addColorStop(0.225, 'rgba(0, 8, 249, 1.000)');
        gradient?.addColorStop(0.983, 'rgba(42, 255, 0, 1.000)');
        if (ctx) {
            ref.current = new Chart(ctx, {
                type: "radar",
                data: {
                    labels: [
                        'HTML',
                        'CSS',
                        'Javascript',
                    ],
                    datasets: [{
                        data: [78, 87, 100],
                        backgroundColor: gradient,
                    }]
                },
                options: { 
                    
                        plugins: {
                            legend: {
                                display: false,
                            }
                        },
                        scales: {
                            r: {
                                angleLines: {
                                    display: false,
                                },
                                pointLabels: {
                                    color: "white",
                                    font: {
                                        size: 14,
                                    }
                                },
                                suggestedMin: 0,
                                suggestedMax: 100,
                                ticks: {
                                    display: false,
                                    count: 5,
                                },
                                grid: {
                                    circular: true,
                                    color: "black",
                                    z: 5,
                                }
                            }
                        }
                    },
            })
        }
    }

    const projects = [
        {name: 'project1', position: {x: 1550, y: 500}, type: 'html', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
        {name: 'project2', position: {x: 850, y: 700}, type: 'css', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]},
        {name: 'project3', position: {x: 1300, y: 1000}, type: 'js', list: [{name: 'Quiz1', marked: 100}, {name: 'Quiz2', marked: 10}]}
    ]

    return (
        <Contents>
            <Skills>
                <div className="title">SKILLS</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
                <div>
            <canvas ref={skillChart}></canvas>
        </div>
            </Skills>
            <hr style={{ width: "100%", padding: '0', margin: '0', border: 'none', height: '1px', backgroundColor: 'black' }} />
            <Skills>
                <div className="title">Marks</div>
                <div className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum turpis sed pretium sodales.
                </div>
            </Skills>
            <div style={{"height": "24%"}}>
                <Oval>
                    <div className="oval-descp" style={{backgroundColor: "#1799b8"}} />
                    <div className="oval-name">Great</div>
                    <div className="oval-descp" style={{backgroundColor: "#17b84c"}} />
                    <div className="oval-name">Good</div>
                    <div className="oval-descp" style={{backgroundColor: "#f4cc1b"}} />
                    <div className="oval-name">Normal</div>
                    <div className="oval-descp" style={{backgroundColor: "#e64715"}} />
                    <div className="oval-name">Bad</div>
                </Oval>
            <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onScroll}>
                <div className="project-lists">
                {projects.map((project, index) =>{
                    return <Projects project={project} key={index}/>;}
                )}
                </div>
                </Scrollbars>
                </div>

        </Contents>
    );
};

export default Profile;