'use client';
import Link from 'next/link'
import { Dropdown } from '@the/makewith/react/util';
import MobileMenu from './mobile-menu';
import Logo from './logo';
import { logout } from '@the/util/react/firebase';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { getUserState, selectAllUser, userActions } from '@the/data-access/user';
import { selectOrganizationEntities } from '@the/data-access/organization';
type HeaderProps = {
  hideLinks?: boolean;
}


export function Header({
  hideLinks
}: HeaderProps): JSX.Element {
  const router = useRouter();
  const user = useSelector(selectAllUser)[0];
  const organizations = useSelector(selectOrganizationEntities);
  // const organization = organizations[user.organization || ''];
  let organization;
  if (user && user.organizationId) {
    organization = organizations[user.organizationId];
  }
  const status = useSelector(getUserState).loadingStatus;
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(userActions.remove(user.id));
    router.push('/')
  };
  return (
    <header className="absolute w-full z-30" >
      {/* <div className="absolute fill-gray-900 left-0 bottom-0 w-screen flex align-center justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div> */}
      <div className="max-w-6xl  mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4" data-aos="fade-left">
            {/* Logo */}
            <Link href="/" className="block" aria-label="Make With It">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          {
            hideLinks ? (<></>) :
              (
                <>
                  <nav className="hidden md:flex md:grow" data-aos="fade-down"
                    data-aos-delay="1000">
                    {/* Desktop menu links */}
                    <ul className={'flex grow justify-end flex-wrap items-center'}>
                      {
                        (user && status === 'loaded') &&
                        (
                          <>
                            <Dropdown title={organization?.name || ''}>
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
                        )
                      }
                      {
                        (!user && status === 'loaded') && (
                          <li>
                            <Link href="/signin" className="btn-sm text-gray-900 bg-teal-500 hover:bg-teal-700 ml-3">
                              Login
                            </Link>
                          </li>
                        )

                      }
                    </ul>
                  </nav>
                  {
                    (status === 'loaded') && (
                      <MobileMenu />
                    )
                  }
                </>
              )
          }


        </div>
      </div>
    </header>
  )
}
export default Header;
