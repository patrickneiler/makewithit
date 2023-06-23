'use client';
import { useEffect, useRef } from "react"

import lottie, { AnimationItem, AnimationEventName, AnimationEventCallback } from "lottie-web"
export interface LottieEventListener {
    name: AnimationEventName;
    callback: AnimationEventCallback

}
interface LottieProps {
    animationData: any
    width?: number
    height?: number,
    className?: string,
    eventListeners?: LottieEventListener[],
}

export const Lottie = ({ animationData, className, eventListeners }: LottieProps) => {
    const element = useRef<HTMLDivElement>(null)
    const lottieInstance = useRef<AnimationItem | null>()

    useEffect(() => {
        if (element.current) {
            lottieInstance.current?.destroy();
            lottieInstance.current = lottie.loadAnimation({
                animationData,
                container: element.current,
            });
            eventListeners?.forEach(
                event => lottieInstance.current?.addEventListener(event.name, event.callback)
            )
        }
        return () => {
            lottieInstance.current?.destroy()
            lottieInstance.current = null;
        }
    }, [animationData, eventListeners])

    return <div className={className} ref={element}></div>
}
export default Lottie;