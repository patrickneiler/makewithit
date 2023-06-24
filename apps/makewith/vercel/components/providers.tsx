'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

import { TooltipProvider } from './ui/tooltip'
import { ReduxProvider } from '@the/makewith/react/data-access'
import { AuthProvider } from '@the/feature/react/auth'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ReduxProvider>
        <AuthProvider>
          <TooltipProvider>{children}</TooltipProvider>

        </AuthProvider>

      </ReduxProvider>
    </NextThemesProvider>
  )
}
