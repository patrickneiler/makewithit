'use client'
import Link from 'next/link'

import { ICaseStudy, useCaseStudies } from './case-study-provider';
import { PostTags, PostDate } from '@the/feature/react/blog';
import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';

export function CaseStudy({ params }: {
    params: { slug: string }
}) {
    const { caseStudies } = useCaseStudies();
    const [study, setStudy] = useState<ICaseStudy>();
    useEffect(() => {
        const _study: ICaseStudy | undefined = caseStudies.find((study) => study.slug === params.slug)
        _study && setStudy(_study);
    }, [caseStudies, params])
    return (
        <section className="relative">
            {study &&
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                        <div className="max-w-3xl mx-auto">

                            <article>

                                <header className="mb-16">
                                    {/* Title and excerpt */}
                                    <div className="text-center md:text-left">
                                        <h1 className="h3 md:h1 mb-4" data-aos="fade-up">{study.title}</h1>
                                        <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200">{study.summary}</p>
                                    </div>
                                    {/* Article meta */}
                                    <div className="md:flex md:items-center md:justify-between mt-3">
                                        {/* Author meta */}
                                        <div className="flex items-center justify-center" data-aos="fade-up" data-aos-delay="400">
                                            <Link href="#">
                                                <img className="rounded-full shrink-0 mr-4" src={'../' + study.clientImg} width={40} height={40} alt={study.client} />
                                            </Link>
                                            <div>
                                                <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{study.client}</Link>
                                                <span className="text-gray-700"> - </span>
                                                <span className="text-gray-500"><PostDate dateString={study.publishedAt} /></span>
                                            </div>
                                        </div>
                                        {/* Article tags */}
                                        {study.tags &&
                                            <div className="flex justify-center mt-4 md:mt-0" data-aos="fade-up" data-aos-delay="600">
                                                <PostTags tags={study.tags} />
                                            </div>
                                        }
                                    </div>
                                </header>

                                {/* Article image */}
                                {study.image &&
                                    <figure className="mb-8 lg:-ml-32 lg:-mr-32" data-aos="fade-up" data-aos-delay="600">
                                        <img className="w-full" src={'../' + study.image} width={1024} height={576} alt={study.title} />
                                    </figure>
                                }

                            </article>

                        </div>
                        <div className='mx-auto border-t border-gray-800 my-16 md:my-24'>
                            {/* Article content */}
                            {study.body &&
                                <section>
                                    {/* Section header */}
                                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center py-16 d:py-24 pb-0 text-center">
                                        {/* Image */}
                                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                            <img className="w-full" src={'../' + study.body.problem.img} width={1024} height={576} alt={study.title} />
                                        </div>
                                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6  md:pr-16" data-aos="fade-right">
                                            <h2 className="h2 mb-4">The Problem</h2>
                                            <p className="text-xl text-gray-400"> {study.body.problem.text}</p>
                                        </div>
                                    </div>
                                    <div className="md:grid md:grid-cols-12 md:gap-6 items-center py-16 md:py-24 mb-16 md:mb-24 text-center border-b border-gray-800">
                                        {/* Image */}
                                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                            <img className="w-full" src={'../' + study.body.solution.img} width={1024} height={576} alt={study.title} />
                                        </div>
                                        <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:pl-16" data-aos="fade-right">
                                            <h2 className="h2 mb-4">The Solution</h2>
                                            <p className="text-xl text-gray-400"> {study.body.solution.text}</p>
                                        </div>
                                    </div>
                                    {study.body.images && study.body.images.map(img => (
                                        <figure className="mb-8 lg:-ml-32 lg:-mr-32" key={img} data-aos="fade-up" data-aos-delay="600">
                                            <img className="w-full" src={'../' + img} width={1024} height={576} alt={study.title} />
                                        </figure>
                                    ))}

                                </section>

                            }
                        </div>

                    </div>
                </div>

            }
        </section>

    )
}
export default CaseStudy;
