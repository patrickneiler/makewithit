'use client'

import { useChat, type Message } from 'ai/react'
import { Session } from "@auth/core/types"

import { cn } from '../lib/utils'
import { ChatList } from './chat-list'
import { ChatPanel } from './chat-panel'
import { ChatScrollAnchor } from './chat-scroll-anchor'
import { useLocalStorage } from '../lib/hooks/use-local-storage'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from './ui/dialog'
import { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { toast } from 'react-hot-toast'
import { CloneHeader } from './clone-header'
import { useVideoContext } from './video-provider'
import { EmptyScreen } from './empty-screen'

const IS_PREVIEW = process.env.VERCEL_ENV === 'preview'

export interface ChatProps extends React.ComponentProps<'div'> {
  initialMessages?: Message[]
  id?: string;
  session?: Session;
}

export function Chat({ id, initialMessages, className, session }: ChatProps) {
  console.log(session)
  const [previewToken, setPreviewToken] = useLocalStorage<string | null>(
    'ai-token',
    null
  )
  const { requestVideo, nextVideo, setLoading, isLoading } = useVideoContext();
  const handleVideoRequest = async (script: string) => {
    await requestVideo(script);
  };
  const [previewTokenDialog, setPreviewTokenDialog] = useState(IS_PREVIEW)
  const [previewTokenInput, setPreviewTokenInput] = useState(previewToken ?? '')
  const { messages, append, reload, stop, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
        previewToken
      },
      onResponse(response) {
        setLoading(true);
        if (response.status === 401) {
          toast.error(response.statusText)
        }
      },
      onFinish(message) {
        handleVideoRequest(message.content)
      },
    });
  const name = session?.user?.name;
  const mods = {
    prefix: `You are the most powerful sorceror in the universe, and quite a generous one as well. You have decided to share your infinite knowledge with ${name}, who is asking the following question:`,
    suffix: `Please answer ${name}, oh wise and powerful overlord. Don't be afraid to remind us of your great power.`
  }
  return (
    <>
      <CloneHeader isLoading={isLoading} />
      <div className={cn('pb-[160px] md:pb-[200px] pt-24 md:pt-32', className)}>
        {messages.length && (
          <>
            <ChatList isLoading={isLoading} mods={mods} messages={messages} />
            {
              messages.length <= 1 && (
                <div className="relative  ml-8 md:mx-auto max-w-2xl px-4">
                  <EmptyScreen setInput={setInput} id={id} />
                </div>
              )
            }
            <ChatScrollAnchor trackVisibility={isLoading} />
          </>
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />


      <Dialog open={previewTokenDialog} onOpenChange={setPreviewTokenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter your OpenAI Key</DialogTitle>
            <DialogDescription>
              If you have not obtained your OpenAI API key, you can do so by{' '}
              <a
                href="https://platform.openai.com/signup/"
                className="underline"
              >
                signing up
              </a>{' '}
              on the OpenAI website. This is only necessary for preview
              environments so that the open source community can test the app.
              The token will be saved to your browser&apos;s local storage under
              the name <code className="font-mono">ai-token</code>.
            </DialogDescription>
          </DialogHeader>
          <Input
            value={previewTokenInput}
            placeholder="OpenAI API key"
            onChange={e => setPreviewTokenInput(e.target.value)}
          />
          <DialogFooter className="items-center">
            <Button
              onClick={() => {
                setPreviewToken(previewTokenInput)
                setPreviewTokenDialog(false)
              }}
            >
              Save Token
            </Button>
          </DialogFooter>
        </DialogContent>

      </Dialog>

    </>
  )
}
