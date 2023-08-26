import * as React from 'react'
import Link from 'next/link'
import Textarea from 'react-textarea-autosize'
import { UseChatHelpers } from 'ai/react'

import { useEnterSubmit } from '../lib/hooks/use-enter-submit'
import { cn } from '../lib/utils'
import { Button, buttonVariants } from './ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from './ui/tooltip'
import { IconArrowElbow, IconPlus } from './ui/icons'
import { Session } from 'next-auth'

export interface PromptProps
  extends Pick<UseChatHelpers, 'input' | 'setInput'> {
  onSubmit: (value: string) => Promise<void>
  isLoading: boolean,
  session?: Session
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
  session
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit()
  const inputRef = React.useRef<HTMLTextAreaElement>(null)
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [])

  return (
    <form
      onSubmit={async e => {
        e.preventDefault()
        if (!input?.trim()) {
          return
        }
        let _input = input;
        // const name = session?.user.name;
        // const prefix = `You are the most powerful sorceror in the universe, and quite a generous one as well. You have decided to share your infinite knowledge with ${name}, who is asking the following question:`
        // const suffix = `Please answer ${name}, oh wise and powerful overlord. Don't be afraid to remind us of your great power.`
        // _input = `${prefix} ${input} ${suffix}`
        setInput('')
        await onSubmit(_input)
      }}
      ref={formRef}
    >
      <div className="relative border-0 flex max-h-60 w-full grow flex-col overflow-hidden bg-background px-8 sm:rounded-md sm:x-12">
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: 'sm', variant: 'outline' }),
                'absolute left-0 top-4 h-8 w-8 rounded-full bg-background p-0 sm:left-0'
              )}
            >
              <IconPlus />
              <span className="sr-only">New Chat</span>
            </Link>
          </TooltipTrigger>
          <TooltipContent>New Chat</TooltipContent>
        </Tooltip>
        <Textarea
          ref={inputRef}
          tabIndex={0}
          onKeyDown={onKeyDown}
          rows={1}
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Send a message."
          spellCheck={false}
          className="min-h-[60px] w-full resize-none bg-transparent px-4 py-[1.3rem] focus-within:outline-none sm:text-sm"
        />
        <div className="absolute right-0 top-4 sm:right-4">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                type="submit"
                size="icon"
                disabled={isLoading || input === ''}
              >
                <IconArrowElbow />
                <span className="sr-only">Send message</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>Send message</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </form>
  )
}
