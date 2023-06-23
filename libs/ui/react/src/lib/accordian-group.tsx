import React, { Fragment, useState } from 'react';
import { AccordianProps, Accordian } from './accordian';
export type AccordianGroupProps = {
  accordians: AccordianProps[]
}
export function AccordianGroup({
  accordians
}: AccordianGroupProps): JSX.Element {

  const [open, setOpen] = useState(0);

  return (
    <div>
      {accordians.map(
        (accordian, i) => (
          <Fragment key={i}>
            <Accordian
              index={i}
              isOpen={(accordian.isOpen)}
              children={
                {
                  header: (accordian.children.header),
                  body: (accordian.children.body)
                }
              }
              onOpened={(index) => setOpen(index)}
            />
          </Fragment>

        ))}
    </div>

  );
}

export default AccordianGroup;
