import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';

export type VideoStatus = 'ready' | 'playing' | 'ended';

export const IDLE_VIDEO = `https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/1692610172142.mp4?alt=media&token=bf8a6c58-19e3-4fa2-b95b-e93f9cec1b0f`
export const INTRO_VIDEO = `https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/intro.mp4?alt=media&token=ac5d4c3c-1b5b-4711-99cf-83e4d607369a`
export const THINKING_VIDEO = 'https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/1692508963424.mp4?alt=media&token=a09b87fd-8480-48d6-87cd-c5ac64e8c6ca'


export const useVideoPlayer = (source?: string) => {
    const [src, setSrc] = useState<string>(INTRO_VIDEO);
    const [muted, setMuted] = useState<boolean | null>(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const idleRef = useRef<HTMLVideoElement | null>(null);
    const [videoStatus, setVideoStatus] = useState<VideoStatus | null>('playing');
    const [idleStatus, setIdleStatus] = useState<VideoStatus | null>('ended');

    useEffect(() => {
        const videoElement = videoRef.current;
        const idleElement = idleRef.current;
        if (source && source !== src && videoElement) {
            setSrc(source);
            videoElement.src = source;
        }
        const handleVideoEnd = () => {
            if (videoElement && idleElement) {
                videoElement.autoplay = false;
                idleElement.play();
                setVideoStatus('ended');
                setIdleStatus('playing');
            }
        };
        const handleIdleEnd = () => {
            if (idleElement) {
                idleElement.autoplay = false;
            }
            if (videoStatus === 'ready') {
                videoElement?.play();
                setVideoStatus('playing');
                setIdleStatus('ended');
            } else {
                idleElement?.play();
                setIdleStatus('playing');
            }
        };

        const handleCanPlay = () => {
            console.log(videoElement)
            setVideoStatus('ready');
        };

        const handleVideoChange = () => {
            console.log(videoElement?.src)
            if (videoElement) {
                if (!videoElement?.paused) {
                    videoElement.pause();
                    videoElement.currentTime = 0;
                }
                videoElement?.removeEventListener('ended', handleVideoEnd);
                videoElement?.removeEventListener('loadedmetadata', handleVideoChange);

                videoElement.load();

                videoElement.addEventListener('ended', handleVideoEnd);

            }
        };


        videoElement?.addEventListener('ended', handleVideoEnd);
        videoElement?.addEventListener('canplay', handleCanPlay);

        videoElement?.addEventListener('loadedmetadata', handleVideoChange);

        idleElement?.addEventListener('ended', handleIdleEnd);
        return () => {
            videoElement?.removeEventListener('ended', handleVideoEnd);
            videoElement?.removeEventListener('canplay', handleCanPlay);
            videoElement?.removeEventListener('loadedmetadata', handleVideoChange);
            idleElement?.removeEventListener('ended', handleIdleEnd);
        };
    }, [src, videoStatus, idleStatus, videoRef, source]);

    const changeVideo = (newSrc: string) => {
        console.log(newSrc, videoRef)
        if (videoRef.current) {
            videoRef.current.src = newSrc;
        }
    };

    const changeMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setMuted(videoRef.current.muted);
        }
    };

    return { videoRef, idleRef, changeVideo, changeMute, muted, videoStatus, idleStatus };
};

export interface VideoPlayerProps {
    source: string
}

const VideoPlayer = ({ source }: VideoPlayerProps) => {
    const { videoRef, idleRef, changeMute, changeVideo, muted, videoStatus, idleStatus } = useVideoPlayer(source);
    return (
        <div>
            <div className='flex align-center items-start -ml-16'>
                <Button className={`h-16 w-16 p-0 rounded-full scale-75 md:scale-100 ${muted ? 'text-teal-800' : 'text-teal-500'}`} onClick={() => changeMute()} variant="ghost" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" /></svg>

                </Button>
                <div className="relative rounded-full overflow-hidden -ml-2 h-36 w-36 md:h-48 md:w-48 shadow-inner drop-shadow-lg" >
                    <video
                        muted
                        autoPlay
                        src={INTRO_VIDEO}
                        className={`${videoStatus === 'playing' ? 'z-20' : 'z-10'} max-w-full absolute top-0 left-0 h-full`}
                        ref={videoRef}
                    />
                    <video
                        muted
                        src={IDLE_VIDEO}
                        className={`${idleStatus === 'playing' ? 'z-20' : 'z-10'} max-w-full absolute top-0 left-0 h-ful`}
                        ref={idleRef}
                    />
                </div>

            </div>
        </div >
    );
};

export default VideoPlayer;
