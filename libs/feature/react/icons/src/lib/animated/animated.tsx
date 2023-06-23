/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './animated.module.scss';
import Lottie from './lottie';
import { LottieOptions } from './types';
import { AnimatedIcon } from './categories';
import { VisibilityComponent } from '@the/util/react/visibility';
export type ReactAnimatedIconProps = {
    classList?: string[];
    loop?: boolean;
    options?: LottieOptions;
    iconName?: string;
    categoryName?: string;
    size?: string;
}

export function ReactAnimatedIcon({ options, categoryName, iconName, size }: ReactAnimatedIconProps) {
    const [lottieOptions, setLottieOptions] = useState<LottieOptions>();
    const [isVisible, setIsVisible] = useState<boolean>();
    const height = useRef<number>();
    const handleEnterViewport = (_height?: number) => {
        if (isVisible) {
            height.current = _height;
        }
        setIsVisible(true);
    };

    const handleExitViewport = () => {
        setIsVisible(false);

    };

    useEffect(() => {

        const defaultOptions: LottieOptions = {
            loop: true,
            autoplay: true,
            animationData: undefined,
            rendererSettings: {
                progressiveLoad: true
            },
        };
        const _icon = categoryName && iconName && AnimatedIcon(categoryName, iconName)?.icon;
        const _lottieOptions: LottieOptions =
            options ?
                {
                    ...defaultOptions,
                    animationData: options.animationData
                } :
                _icon ? {
                    ...defaultOptions,
                    animationData: JSON.parse(_icon.icon)
                } : {
                    ...defaultOptions
                }
        setLottieOptions(_lottieOptions);
        return () => {
            setLottieOptions(undefined)
        }
    }, [categoryName, iconName, options])
    return (


        <VisibilityComponent
            onEnterViewport={handleEnterViewport}
            onExitViewport={handleExitViewport}
        >
            <div style={{ height: height.current }} className={`${styles['icon']} ${size && styles[size]} ${isVisible ? `opacity-100` : 'opacity-0'} duration-500 transition-all`}>
                {
                    isVisible && lottieOptions?.animationData ? (
                        <Lottie
                            className={size || 'default'}
                            animationData={lottieOptions?.animationData}
                            height={128}
                            width={128}
                        />
                    ) : (
                        <svg></svg>
                    )
                }
            </div>
        </VisibilityComponent>
    )
}
export default ReactAnimatedIcon;

