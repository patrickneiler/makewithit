'use client';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

// import PageIllustration from '@/components/page-illustration'
import { Footer, Header } from '@the/makewith/react/ui';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {

    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    });
  });

  return (
    <>
      <Header priv={true} />
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
