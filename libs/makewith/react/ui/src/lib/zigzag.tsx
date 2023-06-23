'use client';
import { getAnimationData } from "@the/feature/react/animations";
import FeatureList from "./feature-list";
import { ReactAnimatedIcon } from "@the/feature/react/icons";

export function Zigzag() {
  return (
    <section >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Reach goals that matter</div>
            <h1 className="h2 mb-4">One product, unlimited solutions</h1>
            <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div> */}

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-end">
              {/* Image */}
              <div className="w-3/4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 md:order-1" data-aos="fade-up">
                <ReactAnimatedIcon options={{ animationData: getAnimationData('foreman') }} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6  bg-gray-800 rounded-t-lg" data-aos="fade-right">
                <div className="p-8 lg:p-12 xl:p-16">
                  <div className="font-architects-daughter text-xl text-teal-400 mb-2">Introduction</div>
                  <h3 className="h3 mb-3 text-2xl md:text-3xl ">The goal of this project is to build an easy-to-use app that helps manage the job-site fulfillment lifecycle.</h3>
                  <p className="text-xl text-gray-400 mb-4">The primary objective of this project is to build a foundational system that can efficiently manage the essential aspects of the organization's project workflow. The essential features will include: </p>
                  <ul className="text-lg text-gray-400 mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Clean &amp; easy to use interface</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Accessible anywhere on any device</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Role-based dashboards with workflow automation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-end">
              {/* Image */}
              <div className="w-3/4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6  rtl" data-aos="fade-up">
                <ReactAnimatedIcon options={{ animationData: getAnimationData('builder') }} />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 bg-gray-800 rounded-t-lg" data-aos="fade-left">
                <div className="p-4 lg:p-12 xl:p-16">
                  <div className="font-architects-daughter text-xl text-teal-400 mb-2">Approach</div>
                  <h3 className="h3 mb-3 text-2xl md:text-3xl">How we reach our goal</h3>
                  <p className="text-xl text-gray-400 mb-4">Our approach will start by identifying the core requirements for the foundational system. This will involve engaging with stakeholders to understand their needs and preferences. Once we have a clear understanding of the requirements, we will begin development of the solution.</p>

                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-end">
              {/* Image */}
              <div className="w-3/4 max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-4 md:order-1" data-aos="fade-up">
                <ReactAnimatedIcon options={{ animationData: getAnimationData('project') }} />

                {/* <Image className="max-w-full mx-auto md:max-w-none h-auto" src={FeatImage03} width={540} height={405} alt="Features 03" /> */}
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-8 bg-gray-800 rounded-t-lg" data-aos="fade-right">
                <div className="p-4 lg:p-12 xl:p-16 proposal-section">
                  <div className="font-architects-daughter text-xl text-teal-400 mb-2 ">Deliverables</div>
                  <h3 className="h3 mb-3 text-2xl md:text-3xl">We will deliver an app with the following features:</h3>
                  <FeatureList />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
export default Zigzag;