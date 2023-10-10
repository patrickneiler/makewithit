export const metadata = {
  title: 'Contact - Appy',
  description: 'Page description',
}

import ContactForm from '@/components/contact-form'
import PageIllustration from '@/components/page-illustration'

export default function Contact() {
  return (
    <>
      {/*  Page illustration */}
      <div className="relative max-w-6xl mx-auto h-0 pointer-events-none -z-1" aria-hidden="true">
        <PageIllustration />
      </div>

      <ContactForm />
    </>
  )
}
