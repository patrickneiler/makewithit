import Link from 'next/link'
import Logo from './logo'
import Dropdown from '@/components/utils/dropdown'
import ThemeToggle from './theme-toggle'
import MobileMenu from './mobile-menu'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Site branding */}
          <div className="shrink-0 mr-5">
            <Link href="/" className="block" aria-label="Cruip">
              <Logo />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Home
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="About Us">
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/about-us"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-sm text-gray-600 dark:text-gray-200 hover:text-teal-500 dark:hover:text-teal-500 flex py-2 px-4 leading-tight"
                  >
                    Contact Us
                  </Link>
                </li>
              </Dropdown>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-gray-100 px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Blog
                </Link>
              </li>

            </ul>

            {/* Desktop lights switch */}
            {/* <ThemeToggle className="ml-3" /> */}

            {/* Desktop CTA on the right */}
            <ul className="flex justify-end flex-wrap items-center">
              <li>
                <Link href="/contact" className="btn-sm text-white bg-teal-500 hover:bg-teal-400 ml-6">
                  Get Started
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />

        </div>
      </div>
    </header>
  )
}
