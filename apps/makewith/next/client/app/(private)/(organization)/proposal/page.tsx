export const metadata = {
  title: 'App Development Proposal',
  description: '',
};

import { Hero, PricingTables, Zigzag } from '@the/makewith/react/ui';

export default function Proposal() {
  return (
    <>
      <Hero title={metadata.title} description={metadata.description} />
      <Zigzag />
      <PricingTables />
    </>
  );
}
