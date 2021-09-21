import React, { useContext, useState } from 'react'

const ToggleSidebarContext = React.createContext()

export function useToggleSidebar() {
  return useContext(ToggleSidebarContext)
}

export function ToggleSidebarProvider({ children }) {
  const [showSidebar, setShowSidebar] = useState(false)

  const toggleSidebar = () => setShowSidebar((prev) => !prev)

  return (
    <ToggleSidebarContext.Provider
      value={{ toggleSidebar, showSidebar, setShowSidebar }}
    >
      {children}
    </ToggleSidebarContext.Provider>
  )
}
