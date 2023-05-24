'use client';
import { StripeBuyButton } from '@the/util/react/stripe';
export function Timeline() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20">

                    {/* Items */}
                    <div className="max-w-3xl mx-auto -my-4 md:-my-6" data-aos-id-timeline>

                        {/* 1st item */}
                        <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-anchor="[data-aos-id-timeline]">
                            <div className="pl-2">
                                <div className="flex items-center mb-3">
                                    <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">Today</div>
                                    <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                                    <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                                    <div className="relative flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="800">
                                        <div className="mb-4 pb-4 border-b border-gray-700">
                                            <div className="h4 text-purple-600 mb-1">Initiation</div>
                                            <div className="inline-flex items-baseline mb-2">
                                                <span className="text-2xl md:text-3xl font-medium text-gray-400">$</span>
                                                <span className="h2">{'5k'}</span>
                                            </div>
                                            <StripeBuyButton />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2nd item */}
                            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-timeline]">
                                <div className="pl-2">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">New features</div>
                                    <div className="flex items-center mb-3">
                                        <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2017</div>
                                        <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                                        <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                                        <h4 className="h4">Launched the first Open PRO Advanced plan</h4>
                                    </div>
                                    <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
                                </div>
                            </div>

                            {/* 3rd item */}
                            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-timeline]">
                                <div className="pl-2">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Pivoting</div>
                                    <div className="flex items-center mb-3">
                                        <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2018</div>
                                        <div className="absolute left-0 h-full px-px bg-gray-800 ml-20 self-start transform -translate-x-1/2 translate-y-3" aria-hidden="true"></div>
                                        <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                                        <h4 className="h4">Transitioned to a SaaS business model</h4>
                                    </div>
                                    <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
                                </div>
                            </div>

                            {/* 4th item */}
                            <div className="relative py-4 md:py-6 pl-24" data-aos="fade-up" data-aos-delay="600" data-aos-anchor="[data-aos-id-timeline]">
                                <div className="pl-2">
                                    <div className="font-architects-daughter text-xl text-purple-600 mb-2">Huge milestone</div>
                                    <div className="flex items-center mb-3">
                                        <div className="absolute left-0 inline-flex text-sm font-semibold py-1 px-3 text-green-600 bg-green-200 rounded-full">2019</div>
                                        <div className="absolute left-0 w-2 h-2 bg-purple-600 border-4 box-content border-gray-900 rounded-full ml-20 transform -translate-x-1/2" aria-hidden="true"></div>
                                        <h4 className="h4">1 million happy customers</h4>
                                    </div>
                                    <p className="text-lg text-gray-400">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
export default Timeline;