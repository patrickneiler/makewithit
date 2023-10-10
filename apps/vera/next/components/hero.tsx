import Link from 'next/link'
import Illustration from '@/public/images/hero-illustration.svg'
import { Hero } from '@/types'


export default function Hero(props: Hero['content']) {
  return (
    <section className="relative overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0 bg-blue-600 pointer-events-none -z-10" aria-hidden="true" />

      {/* Illustration */}
      <div className="absolute left-1/2 -translate-x-1/3 md:-translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
        <object type="image/svg+xml" data={Illustration.src} width="1440" height="1214" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-28 pb-16 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="h1 font-cabinet-grotesk text-white mb-2" data-aos="fade-up">
              {props.Title}
            </h1>
            <p className="subtitle text-lg md:text-xl text-white text-opacity-80 mb-8" data-aos="fade-up" data-aos-delay="100">
              {props.Subtitle}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}