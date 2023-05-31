'use client'
import Link from 'next/link'

import { Tags, Date } from '@the/ui/react';
import { useSelector } from 'react-redux';
import { selectAllStudy, selectStudyEntities } from '@the/data-access/study';
import { selectOrganizationEntities } from '@the/data-access/organization';

export function FeaturedCaseStudy() {
    const studies = useSelector(selectAllStudy);
    const study = studies[0];
    const organizations = useSelector(selectOrganizationEntities);
    let organization;
    if (study && study.organizationId) {
        organization = organizations[study.organizationId];
    }
    return (
        <div className="py-12 md:py-20 border-t border-gray-800">

            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                <div className="pb-12 md:pb-20">
                    {study ? (
                        <article className="max-w-sm mx-auto md:max-w-none grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center">
                            <Link href={`/studies/${study.slug}`} className="relative block group" data-aos="fade-right" data-aos-delay="200">
                                <div className="absolute inset-0 bg-gray-800 hidden md:block transform md:translate-y-2 md:translate-x-4 xl:translate-y-4 xl:translate-x-8 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out pointer-events-none" aria-hidden="true"></div>
                                {study.image &&
                                    <figure className="relative h-0 pb-9/16 md:pb-3/4 lg:pb-9/16 overflow-hidden transform md:-translate-y-2 xl:-translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition duration-700 ease-out">
                                        <img className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition duration-700 ease-out" src={'../' + study.image} width="540" height="303" alt={study.title} />
                                    </figure>
                                }
                            </Link>
                            <div data-aos="fade-left" data-aos-delay="200">
                                <header>
                                    <div className="mb-3">
                                        {study.tags &&
                                            <div className="mb-3">
                                                <Tags tags={study.tags} />
                                            </div>
                                        }
                                    </div>
                                    <h3 className="h3 text-2xl lg:text-3xl mb-2">
                                        <Link href={`/studies/${study.slug}`} className="hover:text-gray-100 transition duration-150 ease-in-out">{study.title}</Link>
                                    </h3>
                                </header>
                                <p className="text-lg text-gray-400 grow">{study.summary}</p>
                                <footer className="flex items-center mt-4">
                                    {
                                        organization && (
                                            <>
                                                <Link href="#">
                                                    <img className="rounded-full shrink-0 mr-4" src={'../' + organization.logo} width={40} height={40} alt={organization.name} />
                                                </Link>
                                                <div>
                                                    <Link href="#" className="font-medium text-gray-200 hover:text-gray-100 transition duration-150 ease-in-out">{organization.name}</Link>
                                                    <span className="text-gray-700"> - </span>
                                                    <span className="text-gray-500"><Date dateString={study.publishedAt} /></span>
                                                </div>
                                            </>

                                        )
                                    }

                                </footer>
                            </div>
                        </article>
                    ) : (<></>)}

                </div>


            </div>
        </div>
    )
}
export default FeaturedCaseStudy;

