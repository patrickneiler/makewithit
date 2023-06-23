'use client'

import { ReactNode, useEffect } from 'react'
import Particles from './particles'

// Import Swiper
import Swiper, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css'
Swiper.use([Autoplay]);

interface CrawlerProps {
  children: ReactNode[]
}

export function Crawler({
  children
}: CrawlerProps) {

  useEffect(() => {
    const carousel = new Swiper('.clients-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 10000 * children.length,
      noSwiping: true,
      noSwipingClass: 'swiper-slide',
      autoplay: {
        delay: 0,
        disableOnInteraction: true,
      },
    })
  }, [])

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        { /* Particles animation */}
        {/* <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div> */}

        <div className="py-0 md:py-6">
          <div className="overflow-hidden">
            { /* Carousel built with Swiper.js [https://swiperjs.com/] */}
            { /* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                { /* Carousel items */}
                {
                  children.map((child, index) => (
                    <div key={index} className="swiper-slide !w-auto">
                      {child}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Crawler;