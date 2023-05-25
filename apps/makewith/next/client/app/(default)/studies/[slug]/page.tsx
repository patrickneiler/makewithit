import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PostDate, PostTags } from '@the/feature/react/blog';
import { CaseStudy, useCaseStudies } from '@the/makewith/react/ui';

const slugs = [
  {
    slug: 'nbcsports'
  }
]

export const metadata = {
  title: 'Make With It - Case Study',
  description: '',
};

export async function generateStaticParams() {
  return slugs;
}

export default async function SinglePost({ params }: {
  params: { slug: string }
}) {
  return (
    <CaseStudy params={params} />
  )
}