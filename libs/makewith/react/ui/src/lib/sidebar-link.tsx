import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSidebarProvider } from '@the/makewith/react/data-access';

interface SidebarLinkProps {
  children: React.ReactNode
  href: string
}

export default function SidebarLink({
  children,
  href,
}: SidebarLinkProps) {

  const pathname = usePathname()
  const { setSidebarOpen } = useSidebarProvider()

  return (
    <Link className={`flex items-center space-x-3 font-medium ${pathname === href ? 'text-teal-500' : 'text-gray-300'}`} href={href} onClick={() => setSidebarOpen(false)}>
      {children}
    </Link>
  )
}
