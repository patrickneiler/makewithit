import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { useVideoContext } from './video-provider';

export type VideoStatus = 'ready' | 'playing' | 'ended';

export const IDLE_VIDEO = `https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/1692610172142.mp4?alt=media&token=bf8a6c58-19e3-4fa2-b95b-e93f9cec1b0f`
export const INTRO_VIDEO = `https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/intro.mp4?alt=media&token=ac5d4c3c-1b5b-4711-99cf-83e4d607369a`
export const THINKING_VIDEO = 'https://firebasestorage.googleapis.com/v0/b/make-with-it-firebase.appspot.com/o/1692508963424.mp4?alt=media&token=a09b87fd-8480-48d6-87cd-c5ac64e8c6ca'


export const useVideoPlayer = () => {
    const [src, setSrc] = useState<string>(INTRO_VIDEO);
    const [muted, setMuted] = useState<boolean | null>(true);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const idleRef = useRef<HTMLVideoElement | null>(null);
    const [videoStatus, setVideoStatus] = useState<VideoStatus | null>('playing');
    const [idleStatus, setIdleStatus] = useState<VideoStatus | null>('ended');
    const { currentVideo, nextVideo, isLoading } = useVideoContext();

    useEffect(() => {
        const videoElement = videoRef.current;
        const idleElement = idleRef.current;
        if (videoElement) {
            if (currentVideo && (currentVideo?.result_url !== src)) {
                if (currentVideo.result_url) {
                    setSrc(currentVideo.result_url);
                    videoElement.src = currentVideo.result_url;
                }
            }
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
            setVideoStatus('ready');
        };

        const handleVideoChange = () => {
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
    }, [src, videoStatus, idleStatus, videoRef, currentVideo, isLoading]);

    const changeVideo = (newSrc: string) => {
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

    return { videoRef, idleRef, changeVideo, changeMute, muted, videoStatus, idleStatus, isLoading };
};

export interface VideoPlayerProps {
    source: string
}

const VideoPlayer = () => {
    const { videoRef, idleRef, changeMute, muted, videoStatus, idleStatus, isLoading } = useVideoPlayer();
    return (
        <div>
            <div className='flex align-center items-start -ml-16'>
                <Button className={`h-16 w-16 flex align-center justify-center p-0 rounded-full scale-75 md:scale-100 ${muted ? 'text-teal-800' : 'text-teal-500'}`} onClick={() => changeMute()} variant="ghost" >
                    <svg width="32px" height="32px" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>sound-loud</title> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="icon" fill="currentColor" transform="translate(42.666667, 85.333333)"> <path d="M361.299413,341.610667 L328.014293,314.98176 C402.206933,233.906133 402.206933,109.96608 328.013013,28.8906667 L361.298133,2.26304 C447.910187,98.97536 447.908907,244.898347 361.299413,341.610667 Z M276.912853,69.77216 L243.588693,96.4309333 C283.38432,138.998613 283.38304,204.87488 243.589973,247.44256 L276.914133,274.101333 C329.118507,215.880107 329.118507,127.992107 276.912853,69.77216 Z M191.749973,1.42108547e-14 L80.8957867,87.2292267 L7.10542736e-15,87.2292267 L7.10542736e-15,257.895893 L81.0208,257.895893 L191.749973,343.35424 L191.749973,1.42108547e-14 L191.749973,1.42108547e-14 Z M42.6666667,129.895893 L95.6874667,129.895893 L149.083307,87.8749867 L149.083307,256.520747 L95.5624533,215.229227 L42.6666667,215.229227 L42.6666667,129.895893 Z" id="Shape"> </path> </g> </g> </g></svg>
                </Button>
                <div className={`${isLoading && 'video-loading'} clone-video rounded-full relative p-1 drop-shadow`}>
                    <div className={`relative rounded-full overflow-hidden  h-36 w-36 md:h-48 md:w-48 shadow-inner `}>
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


            </div>
        </div >
    );
};

export default VideoPlayer;
