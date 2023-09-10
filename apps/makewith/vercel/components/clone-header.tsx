'use client'
import * as React from 'react'
import { useVideoContext } from './video-provider';
import VideoPlayer, { INTRO_VIDEO, useVideoPlayer } from './video-player';
import { Button } from './ui/button';
import { IconExternalLink } from './ui/icons';
import { Badge } from './ui/badge';
import Waves from 'libs/makewith/react/feature/footer/src/lib/waves';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

interface CloneHeaderProps {
  isLoading: boolean,
  isLocked: boolean
}

export function CloneHeader({
  isLoading,
  isLocked
}: CloneHeaderProps) {
  const { nextVideo, getVideo, currentVideo, changeVideo } = useVideoContext();
  const [offline, setOffline] = React.useState(false);
  if (isLocked !== offline) setOffline(isLocked);
  const handleFetch = async (id: string) => {
    await getVideo(id);
  }
  React.useEffect(() => {
    if (nextVideo) {
      if (!nextVideo.result_url) {
        handleFetch(nextVideo.id);
      }
    }
  }, [nextVideo, currentVideo, isLocked])
  return (
    <header className="sticky xl:relative xl:p-32 top-0 z-50 flex h-[100px] md:h-[140px] xl:h-[100%] border-b xl:border-r xl:border-b-0 border-gray-800 flex-col items-center justify-between w-full xl:w-auto shrink-0 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900/0 backdrop-blur-xl">
      {/* <div className="absolute -mt-[120px] fill-teal-500 left-0 top-0 w-screen flex align-start justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div> */}
      <div className="flex relative z-20 items-center justify-end xl:justify-center w-full h-18 shrink-0 max-w-6xl mx-auto px-4 sm:px-6">
        <Button className='hidden' onClick={() =>
          signOut({
            callbackUrl: '/'
          })}>
          Sign Out
        </Button>
        <div className="flex flex-col align-center justify-center">

          <Button
            variant="outline"
            className="border-teal-700 translate-x-4 md:translate-x-0 scale-75 md:scale-100  hover:border-teal-500 text-teal-700 hover:text-teal-500 mt-4"
          >
            <Link href="mailto:patrick@makewith.it">
              <span className='flex items-center justify-center'>Book Meeting<IconExternalLink className="ml-2 hidden md:inline-flex" /></span>
            </Link>
          </Button>
          <span className="text-gray-300 hidden md:inline-flex translate-y- text-xs self-center">w/ Real Patrick
          </span>
        </div>
      </div>

      <div className='flex align-center justify-center w-full -mt-8 max-w-2xl'>
        <div className="-mt-4 relative translate-y-4">
          {
            offline && (
              <div className={`flex absolute z-50 top-0 left-0 w-full h-full items-center justify-center bg-gray-800 bg-opacity-70 rounded-full`}><span className="text-xs">OFFLINE</span></div>
            )
          }
          <VideoPlayer />

        </div>

      </div>

      <div className="flex items-center flex-row-reverse">

      </div>
    </header>
  )
}
