'use client'

import { ReactNode } from 'react';

type TabButtonProps = {
  children: ReactNode,
  onSelect: (on: boolean) => void,
  isSelected: boolean
}

export function TabButton({ children, onSelect, isSelected }: TabButtonProps) {

  return (
    <button
      className={`flex items-center font-medium py-2 px-4 m-2 bg-purple-100 text-purple-900 rounded-full group transition duration-500 ${!isSelected && 'opacity-50'}`}
      onClick={() => onSelect(true)}
    >
      {children}
    </button>
  )
}
export default TabButton;
