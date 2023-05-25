import { Header } from '@the/makewith/react/ui';
import { UserState } from '@the/feature/react/auth';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <UserState>
      <Header hideLinks={true} />
      <main className="grow">{children}</main>
    </UserState>
  );
}
