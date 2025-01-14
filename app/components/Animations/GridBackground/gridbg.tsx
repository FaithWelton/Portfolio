"use client";

import React, { useEffect, useState } from 'react';
import styles from "./gridbg.module.css";

function randomRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
};
  
const GridBackground = () => {    
    const [animatedLines, setAnimatedLines] = useState<{ x: number; y: number; speed: number; height: number; }[]>([]);
    const [gridDots, setGridDots] = useState<{ x: number; y: number; }[]>([]);
    const gridCellSize = 20;

    const createAnimatedLines = () => {
        const lines = [];
        let height = window.innerHeight;
        let width = window.innerWidth;

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
        const dots = [];
        for (let x = gridCellSize; x < window.innerWidth; x += gridCellSize) {
            for (let y = gridCellSize; y < window.innerHeight; y += gridCellSize) {
                dots.push({ x, y });
            };
        };

        setGridDots(dots);
    }, [])

    return <div className={ styles.background }>
        <div className={ styles.grid }>
        { gridDots.map((dot, index) => (
            <div key={index} className={ styles.gridDot }
                style={{ left: dot.x, top: dot.y }}
            />
        ))}

        { animatedLines.map((line, index) => (
            <div key={index} className={ styles.animatedLine }
                style={{ left: line.x, top: line.y, height: line.height, animationDuration: `${ line.speed }s` }}
            />
        ))}
        </div>
    </div>
};

export default GridBackground;