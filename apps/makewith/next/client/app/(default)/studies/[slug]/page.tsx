import { CaseStudy } from '@the/makewith/react/ui';

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