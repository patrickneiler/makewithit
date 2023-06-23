import React, { ReactNode, useEffect, useRef } from 'react';

type Props = {
    onEnterViewport: (height?: number) => void;
    onExitViewport: (height?: number) => void;
    children: ReactNode
};

export const VisibilityComponent: React.FC<Props> = ({ onEnterViewport, onExitViewport, children }) => {
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5, // Adjust the threshold as needed
        };

        const handleIntersection: IntersectionObserverCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    onEnterViewport(entry.boundingClientRect.height);
                } else {
                    onExitViewport(entry.target.clientHeight);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            if (componentRef.current) {
                observer.unobserve(componentRef.current);
            }
        };
    });

    return <div ref={componentRef}>{children}</div>;
};

export default VisibilityComponent;
