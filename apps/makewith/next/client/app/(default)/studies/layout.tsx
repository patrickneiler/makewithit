
'use client'
import { ICaseStudy, useCaseStudies } from '@the/makewith/react/ui';
import { useEffect } from 'react';

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
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
    return (
        <>
            {children}
        </>
    );
}
