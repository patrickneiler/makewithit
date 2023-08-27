'use client'

import { createContext, Dispatch, SetStateAction, useContext, useState } from 'react'

type ContextProps = {
  sidebarOpen: boolean,
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

const SidebarContext = createContext<ContextProps>({
  sidebarOpen: false,
  setSidebarOpen: (): boolean => false
})

export function SidebarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarProvider = () => useContext(SidebarContext);
export default SidebarProvider;