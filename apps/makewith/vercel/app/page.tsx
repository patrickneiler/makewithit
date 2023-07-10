import { nanoid } from '../lib/utils'
import { Chat } from '../components/chat'
import { auth } from '../auth';

export const runtime = 'edge'

export default async function IndexPage() {
  const id = nanoid()
  const session = await auth();
  return <Chat session={session} id={id} />
}
