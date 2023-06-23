'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { logout } from '@the/util/react/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllUser, userActions } from '@the/data-access/user';
import { OrganizationEntity, selectOrganizationEntities } from '@the/data-access/organization';
type MobileMenuProps = {
  hideLinks?: boolean;
}
export function MobileMenu({
  hideLinks
}: MobileMenuProps): JSX.Element {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const user = useSelector(selectAllUser)[0];
  const [organization, setOrganization] = useState<OrganizationEntity>();
  const organizations = useSelector(selectOrganizationEntities);
  useEffect(() => {
    if (user && user.organizationId) {
      setOrganization(organizations[user.organizationId]);
    }
  }, [organizations, user, organization])
  const dispatch = useDispatch();
  const handleLogout = async () => {
    await logout();
    dispatch(userActions.remove(user.id));
    setMobileNavOpen(false);
  };
  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-300 hover:text-gray-200 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      {/* Desktop navigation */}
      {
        hideLinks ? (<></>) :
          (
            <nav
              id="mobile-nav"
              ref={mobileNav}
              className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
              style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
            >
              <ul className="bg-gray-800 px-4 py-4">
                {
                  user ?
                    (
                      <>
                        <li className="py-2 my-2 border-b border-gray-700">
                          <span className="flex text-gray-100 py-2">{organization?.name}</span>
                          <ul >
                            <li>
                              <Link href="/proposal" className="text-sm flex font-medium text-teal-400 hover:text-gray-200 py-2" onClick={() => setMobileNavOpen(false)}>
                                Proposal
                              </Link>
                            </li>
                          </ul>
                        </li>
                        <li className="py-2 my-2">
                          <Link href="#" onClick={handleLogout} className="text-sm flex font-medium text-gray-400 hover:text-gray-200 py-2">
                            Logout
                          </Link>
                        </li>
                      </>
                    ) :
                    (
                      <>
                        <li className="my-2">
                          <Link className="btn-lg text-gray-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.gray.900),_theme(colors.gray.900))_padding-box,_conic-gradient(theme(colors.gray.400),_theme(colors.gray.700)_25%,_theme(colors.gray.700)_75%,_theme(colors.gray.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-gray-800/30 before:rounded-full before:pointer-events-none" href="/icons">
                            <span className="relative inline-flex items-center">
                              React Animated Icons
                              {/* <span className="tracking-normal text-teal-500 group-hover:trangray-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span> */}
                            </span>
                          </Link>
                        </li>
                        <li className="py-2 my-2">
                          <Link href="/signin" className="flex font-medium w-full bg-teal-500 text-gray-900 hover:bg-teal-600 py-2 justify-center">
                            Sign in
                          </Link>
                        </li>
                      </>

                    )
                }
              </ul>
            </nav>
          )
      }
    </div>
  )
}
export default MobileMenu;
