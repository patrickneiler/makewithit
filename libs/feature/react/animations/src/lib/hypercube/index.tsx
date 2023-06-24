'use client';
import styles from './hypercube.module.scss';
import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface HypercubeProps {
    size: number;
    duration: number;
}

export const Hypercube: React.FC<HypercubeProps> = ({ size, duration }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const vertices: HTMLElement[] = [];

        // Create the vertices of the hypercube
        for (let i = 0; i < 16; i++) {
            const vertex = document.createElement('div');
            vertex.className = styles['vertex'];
            vertex.classList.add('bg-red-500');
            vertex.classList.add('bg-opacity-20');
            vertices.push(vertex);
            container.classList.add(styles['hypercube'])
            container.appendChild(vertex);
        }

        // Set up the animation timeline
        const timeline = anime.timeline({
            duration,
            easing: 'linear',
            loop: true,
        });

        // Define the keyframes for the rotation animation
        const keyframes = [
            { rotateX: '0deg', rotateY: '0deg' },
            { rotateX: '180deg', rotateY: '0deg' },
            { rotateX: '180deg', rotateY: '180deg' },
            { rotateX: '0deg', rotateY: '180deg' },
        ];

        // Animate each vertex individually
        vertices.forEach((vertex, index) => {
            timeline.add({
                targets: vertex,
                keyframes,
                delay: index * (duration / 16),
                update: (anim) => {
                    const { rotateX, rotateY } = anim.progress === 0 ? keyframes[0] : (anim.animations[0].currentValue as unknown as { rotateX: string, rotateY: string });
                    vertex.style.transform = `rotateX(${rotateX}) rotateY(${rotateY}) translateZ(${size}px)`;
                },
            });
        });

        return () => {
            // Cleanup: remove vertices from the container
            vertices.forEach((vertex) => {
                container.removeChild(vertex);
            });
        };
    }, [size, duration]);

    return <div ref={containerRef} className="hypercube-container" />;
};

export default Hypercube;
