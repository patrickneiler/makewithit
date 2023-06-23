import Link from 'next/link'
import { ReactNode } from 'react'


export function Card({ children, title, link }: { children: ReactNode, title: string, link: string }) {

  return (
    <div className="col-span-full sm:col-span-6 md:col-span-4 xl:col-span-3 bg-white dark:bg-gray-800 shadow-lg rounded-sm border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full p-5">
        <header>
          <Link className="inline-flex text-gray-100 dark:hover:text-white mb-1" href={link}>
            <h2 className="text-xl leading-snug font-semibold">{title}</h2>
          </Link>
        </header>
        <div className="grow mt-2">

          <div className="text-sm">{children}</div>
        </div>
        <footer className="mt-5">
          <div className="flex justify-between items-center">
            <div>
            </div>
            <div>
              <Link className="text-sm font-medium text-teal-500 hover:text-teal-600 dark:hover:text-teal-400" href={link}>View &gt;</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
export default Card;