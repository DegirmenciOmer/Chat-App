import React, { useContext } from 'react'
import useLocalStorage from './../hooks/useLocalStorage'

const ToggleSidebarContext = React.createContext()

export function useToggleSidebar() {
  return useContext(ToggleSidebarContext)
}

export function ToggleSidebarProvider({ children }) {
  const [show, setShow] = useLocalStorage('toggle', true)

  const toggleSidebar = () => setShow((prev) => !prev)

  return (
    <ToggleSidebarContext.Provider value={{ toggleSidebar, show, setShow }}>
      {children}
    </ToggleSidebarContext.Provider>
  )
}
