// import React from 'react';
import { Radar } from 'react-chartjs-2'
import React, { useRef, useEffect } from 'react'


const Chart = () => {
    // const canvasRef = useRef(null)
    // const canvas: any = canvasRef.current
    // const ctx = canvas.getContext("2d");
    // const gradient = ctx.createLinearGradient(0, 90, 100, 0);
    // gradient.addColorStop(0, '#ff9a9e');
    // gradient.addColorStop(0.5, '#fad0c4');
    // gradient.addColorStop(1, '#fad0c4');

    return (
        <Radar
            data={{
                labels: ['C', 'Linux', 'Network'],
                datasets: [{
                    // label: 'My First Dataset',
                    data: [65, 59, 80],
                    fill: 'start',
                    borderColor: 'rgb(75, 192, 192)',
                    // tension: 0.1,
                    backgroundColor: 'rgba(255, 255, 153, 0.2)',
                }]
            }}
        options={{ maintainAspectRatio: false,
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
            } }}
        height={300}
        />
      );
}

export default Chart;