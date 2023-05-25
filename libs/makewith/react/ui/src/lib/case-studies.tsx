import Link from 'next/link'
import Image from 'next/image'
import { ModalVideo } from './modal-video';

import SonarVideoThumb from '@/apps/makewith/next/client/public/assets/videos/sonar_thumb.jpg';

import NBCSports1 from '@/apps/makewith/next/client/public/assets/images/portfolio/nbcsports_1.png'
import TR3E from '@/apps/makewith/next/client/public/assets/images/portfolio/Live-3E-final.gif'

export function CaseStudies() {
  const SonarVideo = '/assets/videos/sonar.mp4';
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Project Success Stories</h2>
            {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit laborum — semper quis lectus nulla.</p> */}
          </div>

          {/* Articles */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-6 items-start md:max-w-none">

            {/* 1st article */}
            <article className="flex flex-col h-full" data-aos="fade-up">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={NBCSports1} width={352} height={198} alt="News 10" />

                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Case study</figcaption>
                </figure>
              </a>

              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">NBCSports</a>
                </h3>
                <p className="text-lg text-gray-400 grow">NBCSports approached us with a problem. They had a complex and disjointed infrastructure for event planning that was causing inefficiencies and errors. They needed a custom event management system that could handle the entirety of their event planning process.</p>
                <div>
                  <a className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="#0">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 2nd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <ModalVideo
                thumb={SonarVideoThumb}
                thumbWidth={352}
                thumbHeight={198}
                thumbAlt="Sonar video thumbnail"
                video={SonarVideo}
                videoWidth={1920}
                videoHeight={1080} />
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Sonar</a>
                </h3>
                <p className="text-lg text-gray-400 grow">Our team was tasked with creating a white-labeled, multi-tenancy version of the existing Simplist mortgage-loan apps. The goal was to create a platform that could be used by multiple brokerages and lenders, while still maintaining the same level of quality and user experience as the original Simplist app.</p>
                <div>
                  <a className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="#0">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

            {/* 3rd article */}
            <article className="flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <a className="block" href="#0">
                <figure className="relative h-0 pb-9/16 overflow-hidden">
                  <Image className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={TR3E} width={352} height={198} alt="News 12" />
                  <figcaption className="absolute top-0 right-0 mt-4 mr-4 text-xs font-medium inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-gray-900 bg-opacity-75 pointer-events-none">Case study</figcaption>
                </figure>
              </a>
              <div className="grow flex flex-col h-full p-6 bg-gray-800">
                <h3 className="h4 mb-2">
                  <a className="hover:text-gray-100 transition duration-150 ease-in-out" href="#0">Thomson Reuters 3E</a>
                </h3>
                <p className="text-lg text-gray-400 grow">Thomson Reuters is a leading provider of business information services. One of their most popular products is their enterprise legal billing software, which is used by law firms and legal departments around the world. However, the software was built on outdated technology and was becoming increasingly difficult to maintain and update.</p>
                <div>
                  <a className="btn-sm text-white bg-teal-600 hover:bg-teal-700 mt-6" href="#0">
                    <span className="text-sm">Learn more</span>
                    <svg className="w-3 h-3 fill-current text-teal-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 5H0v2h6v4l6-5-6-5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>

          </div>

        </div>
      </div>
    </section>
  )
}
export default CaseStudies;