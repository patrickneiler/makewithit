import Image from 'next/image';

import LogoImage01 from '@/public/images/icologo.png';
import LogoImage02 from '@/public/images/Beamery_Logo_RGB_Full+Color.png';
import LogoImage03 from '@/public/images/pandologic.png';
import LogoImage04 from '@/public/images/mobius.png';

export default function Stats() {
  return (
    <section className="relative">
      {/* Background gradient (light version only) */}
      <div
        className="absolute bottom-0 left-0 right-0 h-128 bg-gradient-to-t from-gray-100 to-white pointer-events-none -z-10 dark:hidden"
        aria-hidden="true"
      ></div>
      {/* End background gradient (light version only) */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          <div
            className="grid grid-cols-2 gap-4 lg:gap-6 md:grid-cols-4 text-center"
            data-aos-id-stats
          >
            {/* 1st item */}
            <div
              className="bg-white dark:bg-gray-100 py-8 px-8 shadow-2xl flex items-center justify-center"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
            >
              <Image
                className="max-w-full w-full mx-auto md:max-w-none h-auto mix-blend-darken"
                src={LogoImage01}
                alt="Features 01"
              />
            </div>
            {/* 2nd item */}
            <div
              className="bg-white dark:bg-gray-100 py-8 px-8 shadow-2xl flex items-center justify-center"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="100"
            >
              <Image
                className="max-w-full w-full mx-auto md:max-w-none h-auto mix-blend-darken"
                src={LogoImage02}
                alt="Features 01"
              />
            </div>
            {/* 3rd item */}
            <div
              className="bg-white dark:bg-gray-100 py-8 px-8 shadow-2xl flex items-center justify-center"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="200"
            >
              <Image
                className="max-w-full w-full mx-auto md:max-w-none h-auto mix-blend-darken"
                src={LogoImage03}
                alt="Features 01"
              />
            </div>
            {/* 4th item */}
            <div
              className="bg-white dark:bg-gray-100 py-8 px-8 shadow-2xl flex items-center justify-center"
              data-aos="fade-down"
              data-aos-anchor="[data-aos-id-stats]"
              data-aos-delay="300"
            >
              <Image
                className="max-w-full w-full mx-auto md:max-w-none h-auto mix-blend-darken"
                src={LogoImage04}
                alt="Features 01"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
