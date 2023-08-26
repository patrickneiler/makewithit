'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { TooltipProvider } from './ui/tooltip'
import VideoProvider, { Config } from './video-provider';

export interface ProviderProps extends ThemeProviderProps {
  videoConfig: Config
}

export function Providers({ children, videoConfig, ...props }: ProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <VideoProvider config={videoConfig}>
        <TooltipProvider>{children}</TooltipProvider>
      </VideoProvider>
    </NextThemesProvider>
  )
}
