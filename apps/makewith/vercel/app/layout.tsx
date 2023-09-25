import { Metadata } from 'next'

import { Toaster } from 'react-hot-toast'

import './globals.css'
import { fontMono, fontSans } from '../lib/fonts'
import { cn } from '../lib/utils'
import { TailwindIndicator } from '../components/tailwind-indicator'
import { Providers } from '../components/providers'
import { Header } from '../components/header'
import { Footer } from '@the/makewith/react/feature/footer'
import { CloneHeader } from '../components/clone-header'
import VideoProvider, { Config } from '../components/video-provider'

export const metadata: Metadata = {
  title: {
    default: 'Patrick: Cloned',
    template: `%s - Patrick: Cloned`
  },
  description: 'An AI-Powered clone of Patrick Neiler',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

const config: Config = {
  url: 'https://api.d-id.com/talks',
  key: process.env.DID_API
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'font-sans antialiased bg-gray-900',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <Toaster />
        <Providers videoConfig={config} attribute="class" defaultTheme="dark">
          <div className="flex z-20 min-h-screen">
            {/* @ts-ignore */}
            <main className="flex flex-col xl:flex-row flex-1 bg-gray-900">{children}</main>
            <div className="fixed w-full bottom-0">
              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  )
}
