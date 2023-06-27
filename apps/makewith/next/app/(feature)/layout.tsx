'use client'
import { useEffect } from 'react';


import AOS from 'aos';
import 'aos/dist/aos.css';

// import PageIllustration from '@/components/page-illustration'
import { Header } from '@the/makewith/react/feature/header';
import { Footer } from '@the/makewith/react/feature/footer';

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
      <Header hideFeatureLinks={true}></Header>
      <main className="grow">

        {children}
      </main>

      <Footer />

    </>
  );
}
