import { AnimatedIconCategoryNames } from "@the/feature/react/icons";
import { Card, TopicTitle } from "@the/makewith/react/ui";

export const metadata = {
  title: 'Make With: React Animated Icons',
  description: 'Over 1,000 easy to use animated icons for your React project.',
}
export default function IconsPage() {

  // Sort posts by date
  return (
    <>

      <div className="grow">
        <div className="pt-24 md:pt-28 pb-8">
          {/* Page header */}

          <article className="flex flex-col">

            {/* Main area */}
            <div className="min-w-0">

              {/* Article content */}
              <div className="flex items-start flex-col justify-between md:flex-row md:items-center">
                <header>
                  <a href='/icons/' className='mb-4 w-full flex h4 font-inter scale-100 md:scale-125 origin-left'>
                    <div className="text-lg flex items-center mb-3 w-full">
                      <TopicTitle name={'React Animated Icons'} segment={'guides'} description={metadata.description} />

                    </div>
                  </a>

                </header>
                <div className="prose mt-4 prose-sm sm:prose lg:prose-sm xl:prose-sm mb-12 prose-primary">
                  <pre className="language-js">npm install @the/feature/react/icons</pre>
                </div>

              </div>


              {/* Feedback */}
              {/* <Feedback /> */}

              {/* Page navigation */}
              {/* <PageNavigation prevArticle={post.prev} nextArticle={post.next} /> */}

              {/* Content footer */}
              {/* <Footer /> */}

            </div>
            <div className="flex grow flex-col">
              {/* Cards */}
              <h4 className="h4 text-xl text-gray-500 mb-6 pt-6 w-full flex border-t border-gray-700">CATEGORIES</h4>

              <div className="grid grid-cols-12 gap-6 w-full">
                {AnimatedIconCategoryNames.map(categoryNames => (
                  <Card
                    key={categoryNames.fileName}
                    title={categoryNames.name}
                    link={`/icons/${categoryNames.fileName}`}>
                  </Card>
                ))}
              </div>
            </div>

            {/* Secondary navigation */}
            {/* <SecondaryNav /> */}

          </article>
        </div>
      </div>
    </>
  )
}