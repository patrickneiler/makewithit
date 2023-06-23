export const metadata = {
  title: 'Make With: App Development Proposal',
  description: '',
};

import { Hero, PricingTables, Zigzag } from '@the/makewith/react/ui';

export default function Proposal() {
  return (
    <>
      <Hero>
        <h1 className="h1 mb-6 px-8 text-3xl md:text-5xl">
          <span data-aos-delay="800" data-aos="fade-down">App Development Proposal</span>
        </h1>
      </Hero>
      <Zigzag />
      <PricingTables />
    </>
  );
}
