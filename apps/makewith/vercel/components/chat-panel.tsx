import { type UseChatHelpers } from 'ai/react'

import { Button } from './ui/button'
import { PromptForm } from './prompt-form'
import { ButtonScrollToBottom } from './button-scroll-to-bottom'
import { IconExternalLink, IconRefresh, IconStop } from './ui/icons'
import { FooterText } from './footer'
import { Session } from 'next-auth'
import { ExternalLink } from './external-link'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import { useVideoContext } from './video-provider'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | 'append'
    | 'isLoading'
    | 'reload'
    | 'messages'
    | 'stop'
    | 'input'
    | 'setInput'
  > {
  id?: string,
  session?: Session
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
  session
}: ChatPanelProps) {
  const { prepareNextVideo } = useVideoContext();
  const [isLocked, setIsLocked] = useState<boolean>(false);
  useEffect(() => {
    const assistantMessageCount = messages?.filter(message => message.role === 'assistant').length;
    if (assistantMessageCount >= 4) {
      setIsLocked(true);
    }
  }, [messages])
  return (
    <div className="fixed z-30 inset-x-0 bottom-0 xl:left-[520px]  pt-4">
      <ButtonScrollToBottom />
      <div className="mx-auto sm:max-w-2xl px-4 ">
        {isLoading && (
          <div className=" flex mb-2 w-full items-center justify-center">
            <Button
              variant="outline"
              onClick={() => stop()}
              className="border-teal-800 bg-teal-500 bg-opacity-20"
            >
              <IconStop className="mr-2" />
              Thinking. Might take a little while.
            </Button>
          </div>

        )}
        <div className="space-y-4 border-t border-gray-800 bg-gray-900 px-4 py-2 shadow-lg sm:rounded-t-xl  md:py-4">
          {/* @ts-ignore */}
          <PromptForm
            onSubmit={async value => {
              await append({
                id,
                content: value,
                role: 'user'
              })
            }}
            input={input}
            setInput={setInput}
            isLoading={isLoading}
            session={session}
            messages={messages}
          />

          {/* <FooterText className="hidden sm:block" /> */}
          <div className="flex align-center justify-between">
            <h1 className="text-md ml-4 flex">
              <strong className="text-gray-100 mr-1">PATRICK</strong>
              {/* <strong className="text-gray-300">NEILER</strong> */}
              <Badge className="grow-0 scale-[.65] -translate-x-3 ml-1 inline-flex w-auto bg-red-500 hover:bg-teal-500 text-gray-100 hover:text-gray-900" variant={"secondary"}>CLONED</Badge>
            </h1>
            <span className="flex justify-end items-center">
              <Badge className="grow-0 text-xs  inline-flex w-auto text-gray-500 border-gray-500  sm:mr-2" variant={"outline"}>BETA</Badge>
            </span>
          </div>

        </div>
      </div>

    </div>
  )
}
