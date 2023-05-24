'use client'
import styles from './logo.module.scss';
import { useEffect, useRef } from "react";
import anime, { AnimeTimelineInstance } from "animejs";
export function Logo() {
    const played = useRef(false);
    const timeline = useRef<AnimeTimelineInstance>();
    const createGrid = (grid: number[]) => {
        const col = grid[0];
        const row = grid[1];
        return col * row;
    }
    const ticks = createGrid([16, 16]);
    const grid = [];
    for (let i = 0; i < ticks; i++) {
        grid.push(i);
    }
    useEffect(() => {

        timeline.current = anime.timeline({
            targets: '.logo-anime div',
            easing: 'easeInOutSine',
            loop: false,
            autoplay: false,
        })
            .add({
                translateX: () => anime.random(50, -50),
                delay: anime.stagger(1, { from: 'last' }),
                easing: 'easeOutElastic(10, .6)',
                opacity: 1,
            })
            .add({
                duration: 1000,
                translateX: 0,
                translateY: 0,
                translateZ: -150,
                easing: 'easeInBack',
                delay: anime.stagger(5, { grid: [16, 16], from: 'center' })
            }, '-=500');
        if (!played.current) {
            timeline.current.play();
            played.current = true;
        }
    }, [played]);
    const activated = [
        36, 37,
        52, 53, 55, 56,
        71, 72,
        84, 85, 87, 88, 89, 90, 91,
        100, 101, 103, 104, 105, 106, 107,
        116, 117, 119, 120,
        132, 133, 135, 136,
        148, 149, 151, 152,
        164, 165, 167, 168,
        176, 177, 180, 181, 185, 186, 187,
        192, 193, 196, 197, 201, 202, 203
    ];
    return (
        <div className={'logo-anime ' + styles['logo']}>
            {grid.map((_, i) => (
                <div className={activated.find(active => active === i - 2) ? 'bg-gray-900' : 'bg-red-500'} key={i} />
            ))}
        </div>
    );
}
export default Logo;
