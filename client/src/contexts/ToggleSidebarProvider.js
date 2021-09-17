import React, { useContext, useState } from 'react'

const ToggleSidebarContext = React.createContext()

export function useToggleSidebar() {
  return useContext(ToggleSidebarContext)
}

export function ToggleSidebarProvider({ children }) {
  const [show, setShow] = useState(false)

  const toggleSidebar = () => setShow((prev) => !prev)

  return (
    <ToggleSidebarContext.Provider value={{ toggleSidebar, show, setShow }}>
      {children}
    </ToggleSidebarContext.Provider>
  )
}
