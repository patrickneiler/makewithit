import { type Message } from 'ai'

import { Separator } from './ui/separator'
import { ChatMessage } from './chat-message'
import { handleMods } from '../lib/utils';
import { useEffect } from 'react';

export interface ChatList {
  messages: Message[],
  mods?: {
    prefix: string;
    suffix: string;
  }
  isLoading: boolean
}

export function ChatList({ messages, mods, isLoading }: ChatList) {
  if (!messages.length) {
    return null
  }
  console.log(isLoading)

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages
        .map((message, index) => (
          <div key={index}>
            <ChatMessage isLoading={messages.length > 1 && index === messages.length - 1 && isLoading} message={message} />
            {index < messages.length - 1 && (
              <Separator className="my-4 md:my-8" />
            )}
          </div>
        ))}
    </div>
  )
}
