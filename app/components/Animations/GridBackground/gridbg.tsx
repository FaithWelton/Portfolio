"use client";

import React, { useEffect, useState } from 'react';
import styles from "./gridbg.module.css";

function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
};

type Animated = {
    x: number;
    y: number;
    speed: number;
    height: number;
};

type Dots = { x: number; y: number; };
  
const GridBackground = () => {    
    const [animatedLines, setAnimatedLines] = useState<Animated[]>([]);
    const [gridDots, setGridDots] = useState<Dots[]>([]);
    const gridCellSize = 20;

    const createAnimatedLines = () => {
        const lines: Animated[] = [];
        let height: number = window.innerHeight;
        let width: number = window.innerWidth;

        for (let x = gridCellSize; x <= width; x += gridCellSize) {
            let y = randomRange(height * 2, height * 4);
            lines.push({ x, y, speed: randomRange(1, 5), height: randomRange(25, 150) });
        };

        setAnimatedLines(lines);
    };

    useEffect(() => {
        const animateLines = () => {
            setAnimatedLines(prevLines =>
                prevLines.map(line => {
                    let newY = line.y - line.speed;

                    if (newY < -window.innerHeight) {
                        newY = window.innerHeight;
                        line.height = randomRange(25, 150);
                        line.speed = randomRange(1, 5);
                    };

                    return { ...line, y: newY };
                })
            );

            requestAnimationFrame(animateLines);
        };

        animateLines();
    }, []);

    useEffect(() => { createAnimatedLines(); }, []);

    useEffect(() => {
        const dots: Dots[] = [];
        for (let x = gridCellSize; x < window.innerWidth; x += gridCellSize) {
            for (let y = gridCellSize; y < window.innerHeight; y += gridCellSize) {
                dots.push({ x, y });
            };
        };

        setGridDots(dots);
    }, []);

    return <div className={ styles.background }>
        <div className={ styles.grid }>
            { gridDots.map((dot, index) =>
                <div key={index} className={ styles.gridDot } style={{ left: dot.x, top: dot.y }} />
            )}

            { animatedLines.map((line, index) =>
                <div key={index} className={ styles.animatedLine }
                    style={{ left: line.x, top: line.y, height: line.height, animationDuration: `${ line.speed }s` }}
                />
            )}

            <div style={{ border: "1px solid red", height: "100%", width: "100%" }}> hello </div>
        </div>
    </div>
};

export default GridBackground;