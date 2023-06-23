import { Header } from '@the/makewith/react/ui';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header hideLinks={true} />
      <main className="grow">{children}</main>
    </>
  );
}
