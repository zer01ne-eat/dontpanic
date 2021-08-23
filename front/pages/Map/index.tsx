import React, { FC, useRef, useEffect, useState } from 'react';
import NavBar from '@layouts/navbar';
import Player from "@components/character/player";

const Map = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);
    const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
    useEffect(() => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        setCanvas(canvas);
        setCtx(canvas.getContext("2d"));
    }, []);

    return (
        <>
            <NavBar />
            <Player skin="m1" />
            {/* <canvas ref={canvasRef} width={"100%"} height={"100%"}></canvas> */}
        </>
  );
};

export default Map;
