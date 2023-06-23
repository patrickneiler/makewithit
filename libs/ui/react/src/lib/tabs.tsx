'use client'

import { ReactNode } from 'react';

type TabsProps = {
  children: {
    buttons: ReactNode
    items: ReactNode
  }
}

export function Tabs({ children }:
  TabsProps
) {
  return (
    <div>

      {/* Tabs buttons */}
      <div className="flex flex-wrap justify-start p-4 bg-purple-700" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">

        {children.buttons}

      </div>

      {/* Tabs items */}
      <div className="transition-all">
        <div className="relative flex flex-col children-items" data-aos="fade-up">

          {children.items}

        </div>
      </div>

    </div>
  )
}
export default Tabs;
