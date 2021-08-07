import React, { useRef } from 'react';
import { Radar } from 'react-chartjs-2'
import Ch from 'chart.js';
const Chart = () => {
    const reff = useRef<Ch | null>(null);
    const cc = (canvas:HTMLCanvasElement | null) => {
        const ctx = canvas?.getContext('2d');
        let gradient = ctx?.createLinearGradient(0.000, 0, 0, 150.000);
// Add colors
        gradient?.addColorStop(0.035, 'rgba(234, 25, 78, 1.000)');
        gradient?.addColorStop(0.225, 'rgba(0, 8, 249, 1.000)');
        gradient?.addColorStop(0.983, 'rgba(42, 255, 0, 1.000)');
        if (ctx) {
            reff.current = new Ch(ctx, {
                type: "radar",
                data: {
                    labels: ['C', 'Linux', 'Network'],
                    datasets: [{
                        // label: 'My First Dataset',
                        data: [300, 500, 45],
                        fill: true,
                        borderColor: 'rgb(75, 192, 192)',
                        // tension: 0.1,
                        backgroundColor: gradient,
                    }]
                },
                options: { maintainAspectRatio: false,
                        scale: {
                            angleLines: {
                                display: false
                            },
                            ticks: {
                                display: false
                                // suggestedMin: 50,
                                // suggestedMax: 100
                            },
                            gridLines: {
                                circular: true
                            },
                        } },
            })
        }
    }
    return (
        <div>
            <canvas ref={cc}></canvas>
        </div>
        // <Radar
        //     data={{
        //         labels: ['C', 'Linux', 'Network'],
        //         datasets: [{
        //             // label: 'My First Dataset',
        //             data: [65, 59, 80],
        //             fill: 'start',
        //             borderColor: 'rgb(75, 192, 192)',
        //             // tension: 0.1,
        //             backgroundColor: 'rgba(255, 255, 153, 0.2)',
        //         }]
        //     }}
        // options={{ maintainAspectRatio: false,
        //     scale: {
        //         angleLines: {
        //             display: false
        //         },
        //         ticks: {
        //             display: false
        //             // suggestedMin: 50,
        //             // suggestedMax: 100
        //         },
        //         gridLines: {
        //             circular: true
        //         },
        //     } }}
        // height={300}
        // />
      );
}

export default Chart;