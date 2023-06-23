import { AnimatedIconCategorySlugs, AnimatedIconCategoryNames } from '@the/feature/react/icons';
import { ReactAnimatedIconViewer } from '@the/feature/react/icons';
import { Hamburger, Sidebar } from '@the/makewith/react/ui';

export const metadata = {
  title: 'Make With: React Animated Icons',
  description: 'Over 1,000 easy to use animated icons for your React project.',
}



export async function generateStaticParams() {
  return AnimatedIconCategorySlugs
}

export default async function IconCategoryPage({ params }: {
  params: { slug: string }
}) {

  return (
    <>
      <Sidebar categories={AnimatedIconCategoryNames} />

      {/* Mobile hamburger + breadcrumbs */}
      <div className="md:hidden flex items-center mb-8 sticky top-24">
        {/* Breadcrumbs */}

        <Hamburger>
          <div className="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
            <span className="text-gray-600 dark:text-gray-400">React Animated Icons</span>
            <svg className="fill-gray-400 shrink-0 mx-2 dark:fill-gray-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
            </svg>
            <span className="text-gray-800 font-medium truncate dark:text-gray-200">{AnimatedIconCategoryNames.find(categoryNames => categoryNames.fileName === params.slug)?.name}</span>
          </div>
        </Hamburger>

      </div>

      <div className="md:grow md:pl-72 lg:pr-6 xl:pr-0">
        <div className="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">

          <ReactAnimatedIconViewer categoryName={params.slug} />
        </div>
      </div>
    </>
  )
}