'use client'

import { AnimatedIconCategoryNames, ReactAnimatedIconViewer } from '@the/feature/react/icons';
import { Crawler } from '@the/ui/react';


export function IconCrawler() {
    return (
        <section>
            <div className="max-w-7xl mx-auto text-center px-4 border-t border-gray-800">
                <div className="py-12 md:py-20 pb-6 md:pb-6">
                    <h2 className="h2 mb-4">React Animated Icons</h2>
                    <p className={'text-xl text-gray-400'} data-aos="fade-up" data-aos-delay="200">Over 1,000 animated SVG icons packaged for React projects</p>
                </div>

            </div>
            <div className="relative">
                <Crawler>
                    {
                        AnimatedIconCategoryNames.map(
                            (categoryNames, index) => (
                                <div key={index} className='flex flex-col mr-16 p-6 border-solid border-teal-800 border-1'>
                                    <h4 className='h4 mb-4'>{categoryNames.name}</h4>
                                    <ReactAnimatedIconViewer showUsage={false} categoryName={categoryNames.fileName} wrap="nowrap" direction='row' />
                                </div>
                            )
                        )
                    }
                </Crawler>
                <div className="sm:max-w-none flex justify-end text-right absolute w-auto top-0 right-0 h-full items-center z-30">
                    <div data-aos="fade-up" data-aos-delay="400">
                        <a className="btn btn-lg text-gray-900 bg-teal-500 hover:bg-teal-600 mt-4 mr-8 w-auto sm:mb-0" href="/icons"> <span className="tracking-normal text-2xl text-gray-900 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span></a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default IconCrawler;