'use client';

import { useState } from 'react'
import { StripeBuyButton } from '@the/util/react/stripe';

export function PricingTables(): JSX.Element {

  const [annual, setAnnual] = useState<boolean>(false)

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 pb-12 md:pt-16 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Timeline &amp; Pricing</h2>
            <p className="text-xl text-gray-400">The service package covers the entire software development process, from initial design and development to ongoing maintenance and support.</p>
          </div>
          {/* Pricing tables */}
          <div>

            <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-2 lg:gap-6 items-start lg:max-w-none">

              {/* Pricing table 1 */}



              {/* Pricing table 3 */}
              <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-teal-600 mb-1">Initiation</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? '129' : '5k'}</span>
                  </div>
                  <div className="text-gray-400">One time fee to commence project.</div>

                </div>
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-teal-600 mb-1">Bulk Labor</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? '129' : '10k'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <ul className="text-gray-400 -mb-3 grow">
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Will be working very closely with Jeff to create an effective solution.</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Live testing/demo app will be available to track progress throughout.</span>
                    </li>
                    <li className="flex items-center mb-3">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>The goal is to go live in 2 months, with a following month of roll-out and suppot.</span>
                    </li>
                  </ul>
                </div>
                <div className="mb-4 pb-4 border-b border-gray-700">
                  <div className="h4 text-teal-600 mb-1">Support</div>
                  <div className="inline-flex items-baseline mb-2">
                    <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                    <span className="h2">{annual ? '129' : '5k'}</span>
                    <span className="font-medium text-gray-400">/mo</span>
                  </div>
                  <div className="text-gray-400">Estimated 1 month following bulk labor.</div>
                </div>
                {/* <div className="border border-gray-700 p-3 mt-6">
                  <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 w-full" href="#0">Start free trial</a>
                </div> */}
              </div>

              <div className="relative flex flex-col h-full p-4" data-aos="fade-up" data-aos-delay="700">
                {/* Section header */}
                <StripeBuyButton />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
export default PricingTables;
