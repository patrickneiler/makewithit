'use client'
import * as React from 'react'
import { useVideoContext } from './video-provider';
import VideoPlayer, { INTRO_VIDEO, useVideoPlayer } from './video-player';
import { Button } from './ui/button';
import { IconExternalLink } from './ui/icons';
import { Badge } from './ui/badge';
import Waves from 'libs/makewith/react/feature/footer/src/lib/waves';

interface CloneHeaderProps {
  isLoading: boolean
}

export function CloneHeader({
  isLoading
}: CloneHeaderProps) {
  const { video, fetchVideoStatus, currentVideo, nextVideo, completedVideo } = useVideoContext();
  const handleFetch = async (id: string) => {
    await fetchVideoStatus(id);
  }
  React.useEffect(() => {
    if (nextVideo) {
      if (!nextVideo.result_url) {
        handleFetch(nextVideo.id);
      } else {
        completedVideo(nextVideo)
      }
    }
  }, [nextVideo])
  return (
    <header className="sticky top-0 z-50 flex h-[140px] border-b border-gray-800 flex-col items-center justify-between w-full shrink-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900/0 backdrop-blur-xl">
      {/* <div className="absolute -mt-[120px] fill-teal-500 left-0 top-0 w-screen flex align-start justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div> */}
      <div className="flex relative z-20 items-center justify-end w-full h-18 shrink-0 max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col align-center justify-center">

          <Button
            variant="outline"
            className="border-teal-700 hover:border-teal-500 text-teal-700 hover:text-teal-500 mt-4"
          >
            Book Meeting
            <IconExternalLink className="ml-2" />
          </Button>
          <span className="text-gray-300 translate-y-2 text-xs self-center">w/ Real Patrick
          </span>
        </div>
      </div>

      <div className='flex align-center justify-center w-full mt-4 md:-mt-8 max-w-2xl'>
        <div className="-mt-4 translate-y-4">
          <VideoPlayer source={currentVideo?.result_url || INTRO_VIDEO} />
        </div>

      </div>

      <div className="flex items-center flex-row-reverse">

      </div>
    </header>
  )
}
