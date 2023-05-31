'use client';


import { useSelector } from "react-redux";
import { getUserState, selectAllUser } from "@the/data-access/user";

type HeroProps = {
  title: string,
  description: string,
  cta?: boolean
}

export function Hero({
  title,
  description,
  cta
}: HeroProps): JSX.Element {
  const user = useSelector(selectAllUser)[0];
  const status = useSelector(getUserState).loadingStatus;
  return (
    <section className="relative">
      {/* <div className="absolute h-full left-0 top-0 hidden lg:block pointer-events-none bottom-0" >
        <Morph />
      </div> */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Illustration behind hero content */}

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-4 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">{title}</h1>
            <p className={description ? 'text-xl text-gray-400 mb-8' : 'hidden'} data-aos="fade-up" data-aos-delay="200">{description}</p>
            {(!user && status === 'loaded') && (
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                <div data-aos="fade-up" data-aos-delay="400">
                  <a className="btn text-gray-900 bg-teal-500 hover:bg-teal-700 w-full mb-4 sm:w-auto sm:mb-0" href="/signin">Client Login</a>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
export default Hero;
