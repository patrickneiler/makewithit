'use client';
import Link from 'next/link'
import Waves from './waves';
import { Loader } from '@the/ui/react';

export function Footer(): JSX.Element {
  return (
    <footer className='relative max-w-full  overflow-hidden pt-32'>
      {/* Illustration behind hero content */}
      <div className="absolute fill-red-500 rotate-180 left-0 -bottom-32 lg:bottom-[-9em] w-[250%] sm:w-[150%] md:w-[100%] flex align-center justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div>
      <div className="bg-red-500 relative z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Bottom area */}
          <div className="flex items-center justify-between">
            {/* <Link href="/" className="inline-block scale-150 origin-top-center" aria-label="Cruip">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="2" height="2" fill="#151719" />
                <rect x="2" width="2" height="2" fill="#151719" />
                <rect x="4" width="2" height="2" fill="#151719" />
                <rect x="6" width="2" height="2" fill="#151719" />
                <rect x="8" width="2" height="2" fill="#151719" />
                <rect x="10" width="2" height="2" fill="#151719" />
                <rect x="12" width="2" height="2" fill="#151719" />
                <rect x="14" width="2" height="2" fill="#151719" />
                <rect y="2" width="2" height="2" fill="#151719" />
                <rect x="2" y="2" width="2" height="2" fill="#151719" />
                <rect x="4" y="2" width="2" height="2" fill="#151719" />
                <rect x="6" y="2" width="2" height="2" fill="#151719" />
                <rect x="8" y="2" width="2" height="2" fill="#151719" />
                <rect x="10" y="2" width="2" height="2" fill="#151719" />
                <rect x="12" y="2" width="2" height="2" fill="#151719" />
                <rect x="14" y="2" width="2" height="2" fill="#151719" />
                <rect y="4" width="2" height="2" fill="#151719" />
                <rect x="2" y="4" width="2" height="2" fill="#151719" />
                <rect x="4" y="4" width="2" height="2" fill="#151719" />
                <rect x="6" y="4" width="2" height="2" fill="#151719" />
                <rect x="8" y="4" width="2" height="2" fill="#151719" />
                <rect x="10" y="4" width="2" height="2" fill="#151719" />
                <rect x="12" y="4" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="4" width="2" height="2" fill="#FF2A6D" />
                <rect y="6" width="2" height="2" fill="#151719" />
                <rect x="2" y="6" width="2" height="2" fill="#151719" />
                <rect x="4" y="6" width="2" height="2" fill="#151719" />
                <rect x="6" y="6" width="2" height="2" fill="#151719" />
                <rect x="8" y="6" width="2" height="2" fill="#151719" />
                <rect x="10" y="6" width="2" height="2" fill="#151719" />
                <rect x="12" y="6" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="6" width="2" height="2" fill="#FF2A6D" />
                <rect y="8" width="2" height="2" fill="#151719" />
                <rect x="2" y="8" width="2" height="2" fill="#151719" />
                <rect x="4" y="8" width="2" height="2" fill="#151719" />
                <rect x="6" y="8" width="2" height="2" fill="#151719" />
                <rect x="8" y="8" width="2" height="2" fill="#151719" />
                <rect x="10" y="8" width="2" height="2" fill="#151719" />
                <rect x="12" y="8" width="2" height="2" fill="#151719" />
                <rect x="14" y="8" width="2" height="2" fill="#151719" />
                <rect y="10" width="2" height="2" fill="#151719" />
                <rect x="2" y="10" width="2" height="2" fill="#151719" />
                <rect x="4" y="10" width="2" height="2" fill="#151719" />
                <rect x="6" y="10" width="2" height="2" fill="#151719" />
                <rect x="8" y="10" width="2" height="2" fill="#151719" />
                <rect x="10" y="10" width="2" height="2" fill="#151719" />
                <rect x="12" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect y="12" width="2" height="2" fill="#151719" />
                <rect x="2" y="12" width="2" height="2" fill="#151719" />
                <rect x="4" y="12" width="2" height="2" fill="#151719" />
                <rect x="6" y="12" width="2" height="2" fill="#151719" />
                <rect x="8" y="12" width="2" height="2" fill="#151719" />
                <rect x="10" y="12" width="2" height="2" fill="#151719" />
                <rect x="12" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect y="14" width="2" height="2" fill="#151719" />
                <rect x="2" y="14" width="2" height="2" fill="#151719" />
                <rect x="4" y="14" width="2" height="2" fill="#151719" />
                <rect x="6" y="14" width="2" height="2" fill="#151719" />
                <rect x="8" y="14" width="2" height="2" fill="#151719" />
                <rect x="10" y="14" width="2" height="2" fill="#151719" />
                <rect x="12" y="14" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="14" width="2" height="2" fill="#FF2A6D" />
                <rect x="16" width="2" height="2" fill="#151719" />
                <rect x="18" width="2" height="2" fill="#151719" />
                <rect x="20" width="2" height="2" fill="#151719" />
                <rect x="22" width="2" height="2" fill="#151719" />
                <rect x="24" width="2" height="2" fill="#151719" />
                <rect x="26" width="2" height="2" fill="#151719" />
                <rect x="28" width="2" height="2" fill="#151719" />
                <rect x="30" width="2" height="2" fill="#151719" />
                <rect x="16" y="2" width="2" height="2" fill="#151719" />
                <rect x="18" y="2" width="2" height="2" fill="#151719" />
                <rect x="20" y="2" width="2" height="2" fill="#151719" />
                <rect x="22" y="2" width="2" height="2" fill="#151719" />
                <rect x="24" y="2" width="2" height="2" fill="#151719" />
                <rect x="26" y="2" width="2" height="2" fill="#151719" />
                <rect x="28" y="2" width="2" height="2" fill="#151719" />
                <rect x="30" y="2" width="2" height="2" fill="#151719" />
                <rect x="16" y="4" width="2" height="2" fill="#151719" />
                <rect x="18" y="4" width="2" height="2" fill="#151719" />
                <rect x="20" y="4" width="2" height="2" fill="#151719" />
                <rect x="22" y="4" width="2" height="2" fill="#151719" />
                <rect x="24" y="4" width="2" height="2" fill="#151719" />
                <rect x="26" y="4" width="2" height="2" fill="#151719" />
                <rect x="28" y="4" width="2" height="2" fill="#151719" />
                <rect x="30" y="4" width="2" height="2" fill="#151719" />
                <rect x="16" y="6" width="2" height="2" fill="#151719" />
                <rect x="18" y="6" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="6" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="6" width="2" height="2" fill="#151719" />
                <rect x="24" y="6" width="2" height="2" fill="#151719" />
                <rect x="26" y="6" width="2" height="2" fill="#151719" />
                <rect x="28" y="6" width="2" height="2" fill="#151719" />
                <rect x="30" y="6" width="2" height="2" fill="#151719" />
                <rect x="16" y="8" width="2" height="2" fill="#151719" />
                <rect x="18" y="8" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="8" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="8" width="2" height="2" fill="#151719" />
                <rect x="24" y="8" width="2" height="2" fill="#151719" />
                <rect x="26" y="8" width="2" height="2" fill="#151719" />
                <rect x="28" y="8" width="2" height="2" fill="#151719" />
                <rect x="30" y="8" width="2" height="2" fill="#151719" />
                <rect x="16" y="10" width="2" height="2" fill="#151719" />
                <rect x="18" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="24" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="26" y="10" width="2" height="2" fill="#FF2A6D" />
                <rect x="28" y="10" width="2" height="2" fill="#151719" />
                <rect x="30" y="10" width="2" height="2" fill="#151719" />
                <rect x="16" y="12" width="2" height="2" fill="#151719" />
                <rect x="18" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="24" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="26" y="12" width="2" height="2" fill="#FF2A6D" />
                <rect x="28" y="12" width="2" height="2" fill="#151719" />
                <rect x="30" y="12" width="2" height="2" fill="#151719" />
                <rect x="16" y="14" width="2" height="2" fill="#151719" />
                <rect x="18" y="14" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="14" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="14" width="2" height="2" fill="#151719" />
                <rect x="24" y="14" width="2" height="2" fill="#151719" />
                <rect x="26" y="14" width="2" height="2" fill="#151719" />
                <rect x="28" y="14" width="2" height="2" fill="#151719" />
                <rect x="30" y="14" width="2" height="2" fill="#151719" />
                <rect y="16" width="2" height="2" fill="#151719" />
                <rect x="2" y="16" width="2" height="2" fill="#151719" />
                <rect x="4" y="16" width="2" height="2" fill="#151719" />
                <rect x="6" y="16" width="2" height="2" fill="#151719" />
                <rect x="8" y="16" width="2" height="2" fill="#151719" />
                <rect x="10" y="16" width="2" height="2" fill="#151719" />
                <rect x="12" y="16" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="16" width="2" height="2" fill="#FF2A6D" />
                <rect y="18" width="2" height="2" fill="#151719" />
                <rect x="2" y="18" width="2" height="2" fill="#151719" />
                <rect x="4" y="18" width="2" height="2" fill="#151719" />
                <rect x="6" y="18" width="2" height="2" fill="#151719" />
                <rect x="8" y="18" width="2" height="2" fill="#151719" />
                <rect x="10" y="18" width="2" height="2" fill="#151719" />
                <rect x="12" y="18" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="18" width="2" height="2" fill="#FF2A6D" />
                <rect y="20" width="2" height="2" fill="#151719" />
                <rect x="2" y="20" width="2" height="2" fill="#151719" />
                <rect x="4" y="20" width="2" height="2" fill="#151719" />
                <rect x="6" y="20" width="2" height="2" fill="#151719" />
                <rect x="8" y="20" width="2" height="2" fill="#151719" />
                <rect x="10" y="20" width="2" height="2" fill="#151719" />
                <rect x="12" y="20" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="20" width="2" height="2" fill="#FF2A6D" />
                <rect y="22" width="2" height="2" fill="#151719" />
                <rect x="2" y="22" width="2" height="2" fill="#151719" />
                <rect x="4" y="22" width="2" height="2" fill="#151719" />
                <rect x="6" y="22" width="2" height="2" fill="#151719" />
                <rect x="8" y="22" width="2" height="2" fill="#151719" />
                <rect x="10" y="22" width="2" height="2" fill="#151719" />
                <rect x="12" y="22" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="22" width="2" height="2" fill="#FF2A6D" />
                <rect y="24" width="2" height="2" fill="#151719" />
                <rect x="2" y="24" width="2" height="2" fill="#151719" />
                <rect x="4" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="6" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="8" y="24" width="2" height="2" fill="#151719" />
                <rect x="10" y="24" width="2" height="2" fill="#151719" />
                <rect x="12" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect y="26" width="2" height="2" fill="#151719" />
                <rect x="2" y="26" width="2" height="2" fill="#151719" />
                <rect x="4" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="6" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="8" y="26" width="2" height="2" fill="#151719" />
                <rect x="10" y="26" width="2" height="2" fill="#151719" />
                <rect x="12" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="14" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect y="28" width="2" height="2" fill="#151719" />
                <rect x="2" y="28" width="2" height="2" fill="#151719" />
                <rect x="4" y="28" width="2" height="2" fill="#151719" />
                <rect x="6" y="28" width="2" height="2" fill="#151719" />
                <rect x="8" y="28" width="2" height="2" fill="#151719" />
                <rect x="10" y="28" width="2" height="2" fill="#151719" />
                <rect x="12" y="28" width="2" height="2" fill="#151719" />
                <rect x="14" y="28" width="2" height="2" fill="#151719" />
                <rect y="30" width="2" height="2" fill="#151719" />
                <rect x="2" y="30" width="2" height="2" fill="#151719" />
                <rect x="4" y="30" width="2" height="2" fill="#151719" />
                <rect x="6" y="30" width="2" height="2" fill="#151719" />
                <rect x="8" y="30" width="2" height="2" fill="#151719" />
                <rect x="10" y="30" width="2" height="2" fill="#151719" />
                <rect x="12" y="30" width="2" height="2" fill="#151719" />
                <rect x="14" y="30" width="2" height="2" fill="#151719" />
                <rect x="16" y="16" width="2" height="2" fill="#151719" />
                <rect x="18" y="16" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="16" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="16" width="2" height="2" fill="#151719" />
                <rect x="24" y="16" width="2" height="2" fill="#151719" />
                <rect x="26" y="16" width="2" height="2" fill="#151719" />
                <rect x="28" y="16" width="2" height="2" fill="#151719" />
                <rect x="30" y="16" width="2" height="2" fill="#151719" />
                <rect x="16" y="18" width="2" height="2" fill="#151719" />
                <rect x="18" y="18" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="18" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="18" width="2" height="2" fill="#151719" />
                <rect x="24" y="18" width="2" height="2" fill="#151719" />
                <rect x="26" y="18" width="2" height="2" fill="#151719" />
                <rect x="28" y="18" width="2" height="2" fill="#151719" />
                <rect x="30" y="18" width="2" height="2" fill="#151719" />
                <rect x="16" y="20" width="2" height="2" fill="#151719" />
                <rect x="18" y="20" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="20" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="20" width="2" height="2" fill="#151719" />
                <rect x="24" y="20" width="2" height="2" fill="#151719" />
                <rect x="26" y="20" width="2" height="2" fill="#151719" />
                <rect x="28" y="20" width="2" height="2" fill="#151719" />
                <rect x="30" y="20" width="2" height="2" fill="#151719" />
                <rect x="16" y="22" width="2" height="2" fill="#151719" />
                <rect x="18" y="22" width="2" height="2" fill="#FF2A6D" />
                <rect x="20" y="22" width="2" height="2" fill="#FF2A6D" />
                <rect x="22" y="22" width="2" height="2" fill="#151719" />
                <rect x="24" y="22" width="2" height="2" fill="#151719" />
                <rect x="26" y="22" width="2" height="2" fill="#151719" />
                <rect x="28" y="22" width="2" height="2" fill="#151719" />
                <rect x="30" y="22" width="2" height="2" fill="#151719" />
                <rect x="16" y="24" width="2" height="2" fill="#151719" />
                <rect x="18" y="24" width="2" height="2" fill="#151719" />
                <rect x="20" y="24" width="2" height="2" fill="#151719" />
                <rect x="22" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="24" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="26" y="24" width="2" height="2" fill="#FF2A6D" />
                <rect x="28" y="24" width="2" height="2" fill="#151719" />
                <rect x="30" y="24" width="2" height="2" fill="#151719" />
                <rect x="16" y="26" width="2" height="2" fill="#151719" />
                <rect x="18" y="26" width="2" height="2" fill="#151719" />
                <rect x="20" y="26" width="2" height="2" fill="#151719" />
                <rect x="22" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="24" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="26" y="26" width="2" height="2" fill="#FF2A6D" />
                <rect x="28" y="26" width="2" height="2" fill="#151719" />
                <rect x="30" y="26" width="2" height="2" fill="#151719" />
                <rect x="16" y="28" width="2" height="2" fill="#151719" />
                <rect x="18" y="28" width="2" height="2" fill="#151719" />
                <rect x="20" y="28" width="2" height="2" fill="#151719" />
                <rect x="22" y="28" width="2" height="2" fill="#151719" />
                <rect x="24" y="28" width="2" height="2" fill="#151719" />
                <rect x="26" y="28" width="2" height="2" fill="#151719" />
                <rect x="28" y="28" width="2" height="2" fill="#151719" />
                <rect x="30" y="28" width="2" height="2" fill="#151719" />
                <rect x="16" y="30" width="2" height="2" fill="#151719" />
                <rect x="18" y="30" width="2" height="2" fill="#151719" />
                <rect x="20" y="30" width="2" height="2" fill="#151719" />
                <rect x="22" y="30" width="2" height="2" fill="#151719" />
                <rect x="24" y="30" width="2" height="2" fill="#151719" />
                <rect x="26" y="30" width="2" height="2" fill="#151719" />
                <rect x="28" y="30" width="2" height="2" fill="#151719" />
                <rect x="30" y="30" width="2" height="2" fill="#151719" />
              </svg>
            </Link>
            <div className='relative w-12 h-12'>
              <Loader />
            </div> */}

            {/* Copyrights note */}
            {/* <div className="text-gray-900 text-sm mr-4">&copy; Make With It.</div> */}

          </div>

        </div>
      </div>
    </footer>
  )
}
export default Footer;