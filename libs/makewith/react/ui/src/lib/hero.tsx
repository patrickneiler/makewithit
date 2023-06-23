'use client';


import { useSelector } from "react-redux";
import { getUserState, selectAllUser } from "@the/data-access/user";
import { ReactNode } from "react";

type HeroProps = {
  children: ReactNode,
}

export function Hero({
  children
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
        <div className="relative pt-32 md:pt-40">

          {/* Section header */}
          <div className="max-w-md md:max-w-xl mx-auto text-center pb-8 md:pb-16">
            {children}


          </div>

        </div>

      </div>
    </section>
  )
}
export default Hero;
