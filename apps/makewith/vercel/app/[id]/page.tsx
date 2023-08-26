import { nanoid } from '../../lib/utils'
import { Chat } from '../../components/chat'
import { auth } from '../../auth';
import { Metadata } from 'next';
import { getChat } from '../actions';
import { INTRO } from '../../components/clone-video-intro';

export const runtime = 'edge'
export const preferredRegion = 'home'

export interface ChatPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params
}: ChatPageProps): Promise<Metadata> {
  const session = await auth();

  if (!session?.user) {
    return {}
  }

  const chat = await getChat(params.id, session.user.id)
  return {
    title: chat?.title.toString().slice(0, 50) ?? 'Chat'
  }
}

export default async function ClonePage({ params }: ChatPageProps) {
  const id = nanoid()
  const session = await auth();
  return <Chat session={session} id={id} initialMessages={[{
    role: 'assistant',
    content: INTRO,
    id: id
  }]} />
}
