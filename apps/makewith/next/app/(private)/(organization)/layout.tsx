// import PageIllustration from '@/components/page-illustration'
import { Footer, Header } from '@the/makewith/react/ui';

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      <Header />
      <main className="grow">{children}</main>

      <Footer />
    </>
  );
}
