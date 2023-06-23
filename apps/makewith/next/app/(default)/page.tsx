import { Hero, IconCrawler } from "@the/makewith/react/ui";
import { FeaturedCaseStudy } from '@the/feature/react/study';
import { getAnimationData } from "@the/feature/react/animations";
import { ReactAnimatedIcon } from "@the/feature/react/icons";

export const metadata = {
  title: 'Make With: Hand-crafted Software',
  description: "Let's build some powerful apps.",
};

export default function Home() {
  return (
    <>
      <Hero>
        <h1 className="h1 mb-6 px-8 text-3xl sm:text-4xl md:text-5xl">
          <span data-aos-delay="800" data-aos="fade-down">Let&apos;s build some</span><span data-aos-delay="1600" data-aos="fade-down" className="font-nycd text-4xl sm:text-5xl md:text-6xl hero-signature tracking-tighter -rotate-2 text-red-500 inline-flex px-2 -mt-1">powerful</span><span data-aos-delay="2400" data-aos="fade-down">apps.</span>
        </h1>
      </Hero>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="pb-12 md:pb-20">

            {/* Items */}
            <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 lg:gap-16 items-start md:max-w-none">
              {/* 1st item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* <div
                  aria-hidden="true"
                  className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                  style={{
                    width: 'calc(100% - 200px)',
                    left: 'calc(50% + 200px)',
                    top: '100px',
                  }}
                ></div> */}
                <ReactAnimatedIcon options={{ animationData: getAnimationData('tasks') }} />
                <h4 className="h4 mb-2 text-center">App Development</h4>
                <p className="text-lg px-6 md:px-2 text-gray-400 text-center">
                  Built to scale using the latest frameworks and technologies.
                </p>
              </div>

              {/* 2nd item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* <div
                  aria-hidden="true"
                  className="absolute h-1 border-t border-dashed border-gray-700 hidden md:block"
                  style={{
                    width: 'calc(100% - 32px)',
                    left: 'calc(50% + 48px)',
                    top: '32px',
                  }}
                  data-aos="fade-in"
                  data-aos-delay="400"
                ></div> */}
                <ReactAnimatedIcon options={{ animationData: getAnimationData('communication') }} />
                <h4 className="h4 mb-2 text-center">Intimate Comprehension</h4>
                <p className="text-lg px-6 md:px-2 text-gray-400 text-center">
                  We work closely with you to gain an intimate understanding of your day-to-day operations.
                </p>
              </div>

              {/* 3rd item */}
              <div
                className="relative flex flex-col items-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <ReactAnimatedIcon options={{ animationData: getAnimationData('ux') }} />

                <h4 className="h4 mb-2 text-center">User Friendly UX</h4>
                <p className="text-lg px-6 md:px-2 text-gray-400 text-center">
                  Hand-crafted to feel intuitive and easy to use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-3xl mx-auto text-center px-4 border-t border-gray-800">
          <div className="py-12 md:py-20">
            <h2 className="h2 mb-4">Project Success Stories</h2>
          </div>
        </div>
        <FeaturedCaseStudy />
      </section>
      <IconCrawler></IconCrawler>
    </>
  );
}
