'use client';
import Link from 'next/link'
import Waves from './waves';
import { Loader } from '@the/ui/react';

export function Footer(): JSX.Element {
  return (
    <footer className='relative max-w-full overflow-hidden pt-32'>
      {/* Illustration behind hero content */}
      <div className="absolute fill-red-500 rotate-180 left-0 bottom-0 w-screen flex align-center justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div>
      <div className="bg-red-500 relative z-20 pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="flex items-center justify-between">
            <div className='relative h-24 w-24'>
              <Loader />
            </div>

          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer;