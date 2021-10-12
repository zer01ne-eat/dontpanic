import React, { useRef, useState } from 'react';
import { Contents, Skills } from './styles';
import { Radar, Chart } from 'react-chartjs-2';

const Profile = () => {
    const [closeList, setCloseList] = useState(false);
    const listRef = useRef<any>(null);

    function foldList() {
        if (!listRef || !listRef.current) {
            return;
        }
        const style = listRef.current.style!;
        console.log(style.maxHeight);

        if (closeList) {
            style.maxHeight = '0';
        }
        else if (!closeList) {
            // style.maxHeight = `${listRef.current.scrollHeight}px`;
            style.maxHeight = '10px';
        }
        setCloseList(!closeList);
    }
    

    const projects = [
        {name: 'project1', position: {x: 1550, y: 500}, type: 'html', list: 'Quiz1'},
        {name: 'project2', position: {x: 850, y: 700}, type: 'css'},
        {name: 'project3', position: {x: 1300, y: 1000}, type: 'js'}
    ]

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
                <div className="project-lists">
                    {projects.map(project => 
                    <ul key={project.name}>
                        <li>
                            <div id="project-name">{project.name}</div>
                            <div id="project-status"></div>
                            <div className={`${closeList ? 'close' : 'open'}`} style={{ cursor: "pointer" }} onClick={foldList}>
                                <img src="imgs/projects/ic-dropdwon-selected.png" />
                            <div className="contents" ref={listRef}>{project.list}</div>

                            </div>
                        </li>
                    </ul>
                        )}
                </div>
            </Skills>
        </Contents>
    );
};

export default Profile;
