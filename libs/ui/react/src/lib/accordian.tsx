import React, { useState } from 'react';
export type AccordianProps = {
  children: {
    header: React.ReactNode
    body: React.ReactNode
  },
  onOpened: (index: number) => void,
  isOpen?: boolean;
  index?: number;
}
export function Accordian({
  children, onOpened, index = 0, isOpen = false
}: AccordianProps): JSX.Element {
  return (
    <div className="px-5 py-4 rounded-sm border border-purple-400">
      <button
        className="flex items-center justify-between w-full group mb-1"
        aria-expanded={isOpen}
        onClick={() => onOpened && (onOpened(index))}
      >
        {children.header}
        <svg className={`w-8 h-8 shrink-0 fill-current text-slate-400 group-hover:text-slate-500 ml-3 ${isOpen && 'rotate-180'}`} viewBox="0 0 32 32">
          <path d="M16 20l-5.4-5.4 1.4-1.4 4 4 4-4 1.4 1.4z" />
        </svg>
      </button>
      <div className={`text-sm ${(isOpen) && 'hidden'}`}>
        {children.body}
      </div>
    </div>
  );
}

export default Accordian;
