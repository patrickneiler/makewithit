import * as React from 'react'
import Link from 'next/link'

import { cn } from '../lib/utils'
import { auth } from '../auth'
import { clearChats } from '../app/actions'
import { Button, buttonVariants } from './ui/button'
import { Sidebar } from './sidebar'
import { SidebarList } from './sidebar-list'
import {
  IconGitHub,
  IconNextChat,
  IconSeparator,
  IconVercel
} from './ui/icons'
import { SidebarFooter } from './sidebar-footer'
import { ThemeToggle } from './theme-toggle'
import { ClearHistory } from './clear-history'
import { UserMenu } from './user-menu'
import { LoginButton } from './login-button'
import { Logo } from '@the/makewith/react/ui'

export async function Header() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-18 px-4 border-b shrink-0 bg-gradient-to-b from-black-900 via-black-500 to-black-500 backdrop-blur-xl">
      <Logo />
      <div className="flex items-center flex-row-reverse">
        {session?.user ? (
          <Sidebar>
            <React.Suspense fallback={<div className="flex-1 overflow-auto" />}>
              {/* @ts-ignore */}
              <SidebarList userId={session?.user?.id} />
            </React.Suspense>
            <SidebarFooter>
              <ThemeToggle />
              <ClearHistory clearChats={clearChats} />
            </SidebarFooter>
          </Sidebar>
        ) : (
          <Link href="/" target="_blank" rel="nofollow">
            <IconNextChat className="w-6 h-6 mr-2 dark:hidden" inverted />
            <IconNextChat className="hidden w-6 h-6 mr-2 dark:block" />
          </Link>
        )}
        <div className="flex items-center">
          {session?.user ? (
            <UserMenu user={session.user} />
          ) : (
            <Button variant="link" asChild >
              <Link href="/sign-in?callbackUrl=/">Login</Link>
            </Button>
          )}
          <IconSeparator className="w-6 h-6 text-muted-foreground/50 ml-3 mr-6" />

        </div>
      </div>
    </header>
  )
}
