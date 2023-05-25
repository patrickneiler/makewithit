
export const metadata = {
  title: 'Make With It - Studies',
  description: 'Success stories',
}

export default function Studies() {

  // Sort posts by date
  return (
    <>
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">

            {/*  Page header */}
            <div className="max-w-3xl pb-12 md:pb-20 text-center md:text-left">
              <h1 className="h1" data-aos="fade-up">Refreshing news for developers and designers</h1>
            </div>



            {/*  Articles list */}
            <div className="max-w-sm mx-auto md:max-w-none">

              {/*  Section title */}
              <h4 className="h4 pb-6 mb-10 border-b border-gray-700" data-aos="fade-up">Latest articles</h4>

              {/*  Articles container */}
              {/* <div className="grid gap-12 md:grid-cols-3 md:gap-x-6 md:gap-y-8 items-start">
                {posts.map((post, postIndex) => (
                  <PostItem key={postIndex} {...post} />
                ))}
              </div> */}

            </div>
          </div>
        </div>
      </section>
      {/* <Newsletter /> */}
    </>
  )
}