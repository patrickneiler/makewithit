'use client';
import Link from 'next/link'
import { Dropdown } from '@the/makewith/react/util'
import MobileMenu from './mobile-menu';
import Logo from './logo';
import { useContext } from 'react';
import { UserContext } from '@the/makewith/react/data-access';
import { logout } from '@the/util/react/firebase';
import { User } from 'firebase/auth';
import { useRouter } from 'next/navigation';
type HeaderProps = {
  hideLinks?: boolean;
  priv?: boolean
}


export function Header({
  hideLinks,
  priv
}: HeaderProps): JSX.Element {
  const router = useRouter();
  const { user, removeUser } = useContext(UserContext);
  const handleLogout = async () => {
    await logout();
    removeUser();
    router.push('/')
  };
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          {
            hideLinks ? (<></>) :
              (
                <>
                  <nav className="hidden md:flex md:grow">
                    {/* Desktop menu links */}
                    <ul className={'flex grow justify-end flex-wrap items-center'}>
                      {
                        user || priv ?
                          (
                            <>
                              <Dropdown title={user?.organization ? user.organization : ''}>
                                {/* 2nd level: hover */}
                                <li>
                                  <Link href="/proposal" className="font-medium text-sm text-gray-400 hover:text-teal-600 flex py-2 px-4 leading-tight">
                                    Proposal
                                  </Link>
                                </li>
                              </Dropdown>
                              <li>
                                <span className="font-medium px-4 py-3 flex items-center transition duration-150 ease-in-out text-gray-200">
                                  {user?.displayName}
                                </span>
                              </li>
                              <li>
                                <Link
                                  href="#" onClick={handleLogout}
                                  className="font-medium text-gray-600 hover:text-teal-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"
                                >
                                  Sign out
                                </Link>
                              </li>
                            </>
                          ) :
                          (
                            <li>
                              <Link href="/signin" className="btn-sm text-gray-900 bg-teal-500 hover:bg-teal-700 ml-3">
                                Login
                              </Link>
                            </li>
                          )
                      }
                    </ul>
                  </nav>

                  <MobileMenu />
                </>
              )
          }


        </div>
      </div>
    </header>
  )
}
export default Header;
