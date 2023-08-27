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
    heading: 'Experience',
    message: `What was your biggest challenge?`
  },
  {
    heading: 'Achievments',
    message: 'What would you say is your biggest achievement?'
  },
  {
    heading: 'Skills',
    message: `What would you say is your biggest strength?`
  }
]

export function EmptyScreen({ id, setInput }: EmptyScreenProps) {
  return (
    <div className="rounded-lg border bg-background bg-opacity-75 p-4 md:p-8">
      <div className="flex flex-col items-start space-y-2">
        {exampleMessages.map((message, index) => (
          <Button
            key={index}
            variant="link"
            className="h-auto p-0 text-base"
            onClick={() => setInput(message.message)}
          >
            <IconArrowRight className="mr-2 text-muted-foreground" />
            {message.heading}
          </Button>
        ))}
      </div>
    </div>

  )
}
