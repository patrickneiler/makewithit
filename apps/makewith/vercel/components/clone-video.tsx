'use client'

import { useEffect, useRef, useState } from 'react'
import { Button } from './ui/button'
import { IDLE_VIDEO, THINKING_VIDEO } from './clone-video-intro'


interface CloneVideoProps {
  loop?: boolean
  source_url: string | null
  videoWidth: number
  videoHeight: number,
  isLoading: boolean
}

export function CloneVideo({
  loop,
  source_url,
  isLoading,
  videoWidth,
  videoHeight
}: CloneVideoProps) {
  const [currentSource, setCurrentSource] = useState<string | null>(null);
  const [muted, setMuted] = useState<boolean | null>(true);
  const [thinking, setThinking] = useState<boolean | null>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (isLoading) {
      setThinking(true)
      if (videoRef.current) {
        videoRef.current.src = THINKING_VIDEO;
        videoRef.current.loop = false;
        videoRef.current.play();
      }
    } else {
      setThinking(false)
    }
    if (source_url && source_url !== currentSource) {
      setCurrentSource(source_url);
      if (videoRef.current) {
        videoRef.current.src = source_url;
        videoRef.current.loop = false;
        videoRef.current.play();
      }
    }
  }, [source_url, isLoading]);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.src = IDLE_VIDEO;
      videoRef.current.loop = true;
      videoRef.current.play();
    }
  };
  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };
  return (
    <div>

      {/* Video */}
      <div className='flex align-center items-center'>

        <div className="rounded-full overflow-hidden h-48 w-48 shadow-inner drop-shadow-lg" >
          {currentSource && (
            <video
              ref={videoRef}
              autoPlay
              muted
              onEnded={handleVideoEnd}
              style={{ maxWidth: '100%' }}
            >
              <source src={currentSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <Button className="h-16 w-16 p-0 ml-2 rounded-full" onClick={() => handleMute()} variant="ghost" >
          <svg className={muted ? 'opacity-75' : 'opacity-10'} xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 5L6 9H2v6h4l5 4zM22 9l-6 6M16 9l6 6" /></svg>

        </Button>
      </div>
      {/* End: Video */}

    </div>
  )
}
export default CloneVideo