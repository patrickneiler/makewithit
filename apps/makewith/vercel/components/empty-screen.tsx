import { UseChatHelpers } from 'ai/react'

import { Button } from './ui/button'
import { IconArrowRight } from './ui/icons';
import React from 'react';
export interface EmptyScreenProps
  extends Pick<
    UseChatHelpers,
    | 'setInput'
  > {
  id?: string,
}

const exampleMessages = [
  {
    heading: 'What was your biggest challenge?',
    message: `What was your biggest challenge?`
  },
  {
    heading: 'What was your biggest achievement?',
    message: 'What was your biggest achievement?'
  },
  {
    heading: 'What is your biggest strength?',
    message: `What is your biggest strength?`
  }
]

export function EmptyScreen({ id, setInput }: EmptyScreenProps) {
  return (
    <div className="rounded-lg  flex flex-grow-0 p-4 md:p-2">
      <div className="flex flex-col items-start justify-start space-y-2">
        {exampleMessages.map((message, index) => (
          <Button
            key={index}
            variant="link"
            className="h-auto p-0 text-base w-auto flex-grow-0 text-teal-400 justify-start"
            onClick={() => setInput(message.message)}
          >
            <IconArrowRight className="mr-2 text-muted-foreground" />
            <span className="inline-flex justify-start align-start text-start">{message.heading}</span>
          </Button>
        ))}
      </div>
    </div>

  )
}
