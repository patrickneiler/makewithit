'use client'
import Link from 'next/link'

import { ICaseStudy, useCaseStudies } from './case-study-provider';
import { Tags, Date } from '@the/ui/react';
import { useEffect } from 'react';

export function FeaturedCaseStudy() {
    const { caseStudies, addCaseStudy } = useCaseStudies();
    useEffect(() => {
        if (!caseStudies.length) {
            const newCaseStudy: ICaseStudy = {
                title: 'SCORE - Event Management System for NBCSports',
                publishedAt: '2012-01-01',
                summary: 'NBCSports approached us with a problem. They had a complex and disjointed infrastructure for event planning that was causing inefficiencies and errors. They needed a custom event management system that could handle the entirety of their event planning process.',
                client: 'NBCSports',
                clientImg: 'assets/images/portfolio/nbcsports_logo.png',
                image: 'assets/images/portfolio/nbcsports_1.jpg',
                tags: ['Enterprise'],
                slug: 'nbcsports',
                body: {
                    problem: {
                        text: "The existing infrastructure for NBCSports' event planning was causing inefficiencies and errors. The process was disjointed, with different teams using different tools to manage events. This led to miscommunications, missed deadlines, and other issues that impacted the success of events.",
                        img: 'assets/images/portfolio/nbcsports_2.jpg'
                    },
                    solution: {
                        text: 'We designed and developed a custom event management system for NBCSports. Our team gained a comprehensive understanding of their existing infrastructure and transitioned it into an application that handled the entirety of NBC’s event planning process. The new system streamlined communication between teams, automated many tasks, and provided real-time updates on the status of events.',
                        img: 'assets/images/portfolio/nbcsports_hero.png'
                    },
                    images: ['assets/images/portfolio/nbcsports_3.jpg']
                }
            };
            addCaseStudy(newCaseStudy);
        }
    })
    const featured = caseStudies[0];
    return (
        <section>
            <div className="py-12 md:py-20 border-t border-gray-800">
                <div className="max-w-3xl mx-auto text-center px-4 pb-4 md:pb-20">
                    <h2 className="h2 mb-4">Project Success Stories</h2>
                    {/* <p className="text-xl text-gray-400">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit laborum — semper quis lectus nulla.</p> */}
                </div>
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    <div className="pb-12 md:pb-20">
                        {featured ? (
                            <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                                <Link href={`/studies/${featured.slug}`} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                                    <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                                    {featured.image &&
                                        <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                            <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={'../' + featured.image} width="540" height="303" alt={featured.title} />
                                        </figure>
                                    }
                                </Link>
                                <div data-aos="fade-left" data-aos-delay="200">
                                    <header>
                                        <div className="mb-3">
                                            {featured.tags &&
                                                <div className="mb-3">
                                                    <Tags tags={featured.tags} />
                                                </div>
                                            }
                                        </div>
                                        <h3 className="h3 text-2xl lg:text-3xl mb-2">
                                            <Link href={`/studies/${featured.slug}`} className="hover:text-gray-100 transition duration-150 ease-in-out">{featured.title}</Link>
                                        </h3>
                                    </header>
                                    <p className="text-lg text-gray-400 grow">{featured.summary}</p>
                                    <footer className="flex items-center mt-4">
                                        <Link href="#">
                                            <img className="rounded-full shrink-0 mr-4" src={'../' + featured.clientImg} width={40} height={40} alt={featured.client} />
                                        </Link>
                                        <div>
                                            <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{featured.client}</Link>
                                            <span className="text-gray-700"> - </span>
                                            <span className="text-gray-500"><Date dateString={featured.publishedAt} /></span>
                                        </div>
                                    </footer>
                                </div>
                            </article>
                        ) : (<></>)}

                    </div>


                </div>
            </div>

        </section>
    )
}
export default FeaturedCaseStudy;

