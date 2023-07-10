import { type Message } from 'ai'

import { Separator } from './ui/separator'
import { ChatMessage } from './chat-message'
import { handleMods } from '../lib/utils';

export interface ChatList {
  messages: Message[],
  mods?: {
    prefix: string;
    suffix: string;
  }
}

export function ChatList({ messages, mods }: ChatList) {
  if (!messages.length) {
    return null
  }

  return (
    <div className="relative mx-auto max-w-2xl px-4">
      {messages
        .map(message => message.role === 'user' && mods ? (
          {
            ...message,
            content: handleMods(mods?.prefix, mods?.suffix, message.content)
          }
        ) : message)
        .map((message, index) => (
          <div key={index}>
            <ChatMessage message={message} />
            {index < messages.length - 1 && (
              <Separator className="my-4 md:my-8" />
            )}
          </div>
        ))}
    </div>
  )
}
