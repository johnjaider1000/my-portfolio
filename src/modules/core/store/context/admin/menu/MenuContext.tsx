import { createContext, useState } from 'react'

export interface MenuState {
  showNormal: boolean
  showDrawer: boolean
}

export const menuInitialState: MenuState = {
  showNormal: false,
  showDrawer: false,
}

export interface MenuContextProps {
  menuState: MenuState
  setShowNormal: (show: boolean) => void
  setShowDragger: (show: boolean) => void
}

export const MenuContext = createContext({} as MenuContextProps)

export const MenuContextProvider = ({ children }: any) => {
  const [showNormal, setShowNormal] = useState<boolean>(true)
  const [showDrawer, setShowDragger] = useState<boolean>(false)

  return (
    <MenuContext.Provider
      value={{
        menuState: {
          showNormal,
          showDrawer,
        },
        setShowNormal,
        setShowDragger,
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
