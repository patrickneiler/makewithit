'use client'
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

export interface LineDrawingProps {
    pathData: string;
    duration?: number;
    height?: string;
    width?: string;
    classes?: string;
}

export const LineDrawing: React.FC<LineDrawingProps> = ({
    pathData,
    duration = 10000,
    height = '200',
    width = '200',
    classes
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const svgElement = svgRef.current;

        if (svgElement) {
            const pathElement = svgElement.querySelector('path');

            if (pathElement) {
                const length = pathElement.getTotalLength();

                anime({
                    targets: pathElement,
                    strokeDashoffset: [anime.setDashoffset, 0],
                    easing: 'easeInOutSine',
                    duration,
                    delay: 200,
                    direction: 'alternate',
                    loop: true,
                });
            }
        }
    }, [pathData, duration]);

    return (
        <svg className={classes} ref={svgRef} width={width} height={height}>
            <path
                d={pathData}
                fill='none'
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default LineDrawing;
