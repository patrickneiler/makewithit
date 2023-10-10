export const metadata = {
  title: 'Home - Appy',
  description: 'Page description',
}

import Hero from '@/components/hero'
import Stats from '@/components/stats'
import Zigzag from '@/components/zigzag'
import ContactForm from '@/components/contact-form'

export default function Home() {
  return (
    <>
      <Hero Title='Unlock the Value of AI.' Subtitle='Set one policy to control all your company’s AI, whether your team built it or bought it from someone else.' Background='' />
      <Zigzag />
      <Stats />
      <ContactForm />
    </>
  )
}
