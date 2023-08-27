'use client'
import * as React from 'react'
import { useVideoContext } from './video-provider';
import VideoPlayer, { INTRO_VIDEO, useVideoPlayer } from './video-player';
import { Button } from './ui/button';
import { IconExternalLink } from './ui/icons';
import { Badge } from './ui/badge';
import Waves from 'libs/makewith/react/feature/footer/src/lib/waves';
import Link from 'next/link';

interface CloneHeaderProps {
  isLoading: boolean
}

export function CloneHeader({
  isLoading
}: CloneHeaderProps) {
  const { nextVideo, getVideo } = useVideoContext();
  const handleFetch = async (id: string) => {
    await getVideo(id);
  }
  React.useEffect(() => {
    if (nextVideo) {
      if (!nextVideo.result_url) {
        handleFetch(nextVideo.id);
      }
    }
  }, [nextVideo])
  return (
    <header className="sticky top-0 z-50 flex h-[100px] md:h-[140px] border-b border-gray-800 flex-col items-center justify-between w-full shrink-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900/0 backdrop-blur-xl">
      {/* <div className="absolute -mt-[120px] fill-teal-500 left-0 top-0 w-screen flex align-start justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div> */}
      <div className="hidden md:flex relative z-20 items-center justify-end w-full h-18 shrink-0 max-w-6xl mx-auto px-4 sm:px-6">

        <div className="flex flex-col align-center justify-center">

          <Button
            variant="outline"
            className="border-teal-700  hover:border-teal-500 text-teal-700 hover:text-teal-500 mt-4"
          >
            <Link href="https://calendly.com/patrickneiler/30min">
              <span className='flex items-center justify-center'>Book Meeting<IconExternalLink className="ml-2" /></span>
            </Link>
          </Button>
          <span className="text-gray-300 translate-y-1 text-xs self-center">w/ Real Patrick
          </span>
        </div>
      </div>

      <div className='flex align-center justify-center w-full mt-4 md:-mt-8 max-w-2xl'>
        <div className="-mt-4 translate-y-4">
          <VideoPlayer />
        </div>

      </div>

      <div className="flex items-center flex-row-reverse">

      </div>
    </header>
  )
}
