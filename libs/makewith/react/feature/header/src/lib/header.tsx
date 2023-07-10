'use client';
import Link from 'next/link'
import { Dropdown } from '@the/makewith/react/util';
import MobileMenu from '../../../../ui/src/lib/mobile-menu';
import { Logo } from '@the/makewith/react/feature/logo';
import { logout } from '@the/util/react/firebase';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { UserEntity, getUserState, selectAllUser, userActions } from '@the/data-access/user';
import { OrganizationEntity, selectOrganizationEntities } from '@the/data-access/organization';
import { ReactNode, useEffect, useState } from 'react';
type HeaderProps = {
  hideLinks?: boolean;
  hideFeatureLinks?: boolean
}


export function Header({
  hideLinks,
  hideFeatureLinks
}: HeaderProps): JSX.Element {
  const router = useRouter();
  const users = useSelector(selectAllUser);
  const status = useSelector(getUserState).loadingStatus;
  const [organization, setOrganization] = useState<OrganizationEntity>();
  const [user, setUser] = useState<UserEntity>();
  const [error, setError] = useState<any>();


  const organizations = useSelector(selectOrganizationEntities);
  useEffect(() => {
    if (users) {
      setUser(users[0]);
      if (user && user.organizationId) {
        setOrganization(organizations[user.organizationId]);
      }
    }

  }, [organizations, user, organization, users])
  const dispatch = useDispatch();
  const handleLogout = async () => {
    if (user) {
      try {
        await logout();
        dispatch(userActions.remove(user.id));
        router.push('/');
      } catch (error: any) {
        setError(error)
      }
    }

  };
  return (
    <header className="absolute w-full z-30" >
      {/* <div className="absolute fill-gray-900 left-0 bottom-0 w-screen flex align-center justify-start pointer-events-none z-10 overflow-visible">
        <Waves />
      </div> */}
      <div className="max-w-7xl  mx-auto px-4 sm:px-6">
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
            !hideLinks &&
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
                        <>
                          {
                            !hideFeatureLinks && (
                              <li>
                                <Link className="btn-sm text-gray-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-gray-800/30 before:rounded-full before:pointer-events-none" href="/icons">
                                  <span className="relative inline-flex items-center">
                                    React Animated Icons
                                    {/* <span className="tracking-normal text-teal-500 group-hover:trangray-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span> */}
                                  </span>
                                </Link>
                              </li>
                            )
                          }


                          <li>
                            <Link href="/signin" className="btn-sm  border-teal-200 hover:border-teal-300 text-teal-500 ml-3">
                              Login
                            </Link>
                          </li>
                        </>

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
