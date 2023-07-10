'use client'

import * as React from 'react'
import { signIn } from 'next-auth/react'

import { cn } from '../lib/utils'
import { Button, type ButtonProps } from './ui/button'
import { IconGitHub, IconGoogle, IconSpinner } from './ui/icons'

interface LoginButtonProps extends ButtonProps {
  provider: 'github' | 'google'
  text?: string
}

export function LoginButton({
  text = 'Login with GitHub',
  provider = 'github',
  className,
  ...props
}: LoginButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  return (
    <Button
      variant="outline"
      onClick={() => {
        setIsLoading(true)
        // next-auth signIn() function doesn't work yet at Edge Runtime due to usage of BroadcastChannel
        signIn(provider, { callbackUrl: `/` })
      }}
      disabled={isLoading}
      className={cn(className)}
      {...props}
    >
      {isLoading ? (
        <IconSpinner className="mr-2 animate-spin" />
      ) : getIcon(provider)}
      {text}
    </Button>
  )
}

function getIcon(provider: 'google' | 'github') {
  switch (provider) {
    case 'github':
      return <IconGitHub className="mr-2" />
    case 'google':
      return <IconGoogle className="mr-2" />
    default:
      break;
  }
}