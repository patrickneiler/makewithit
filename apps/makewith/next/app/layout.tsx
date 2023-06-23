import './global.css';
import { Inter, Architects_Daughter, Nothing_You_Could_Do } from 'next/font/google';
import Providers from './providers';
import { PropsWithChildren } from 'react';
import { SidebarProvider } from '@the/makewith/react/data-access';

const nycd = Nothing_You_Could_Do({
  subsets: ['latin'],
  variable: '--font-nycd',
  weight: '400',
  display: 'swap'
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const architects_daughter = Architects_Daughter({
  subsets: ['latin'],
  variable: '--font-architects-daughter',
  weight: '400',
  display: 'swap',
});


type Props = PropsWithChildren;

export default function RootLayout({ children }: Props) {
  return (

    <html lang="en">

      <body
        className={`${inter.variable} ${nycd.variable} ${architects_daughter.variable} font-inter antialiased bg-gray-900 text-gray-200 tracking-tight`}
      >
        <Providers>
          <SidebarProvider>
            <div className="flex flex-col min-h-screen overflow-hidden max-w-full">
              {children}
            </div>
          </SidebarProvider>

        </Providers>

      </body>
    </html>

  );
}
