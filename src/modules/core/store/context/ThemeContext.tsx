import { createContext, useMemo, useState } from 'react'
import { ContextProps } from '@/core/interfaces/context'
import { ThemeMode } from '@/core/interfaces/general'
import { ThemeProvider, createTheme, ThemeOptions } from '@mui/material/styles'
import themeOptionsDark from '@/core/theme/dark'
import themeOptionsLight from '@/core/theme/ligth'

export interface ThemeContextProps {
  mode: ThemeMode
  toggleColorMode: () => void
}

export const ThemeContext = createContext({} as ThemeContextProps)

export const ThemeContextProvider = ({ children }: ContextProps) => {
  const [mode, setMode] = useState<ThemeMode>('light')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const getPalette = useMemo(
    () =>
      (mode: ThemeMode): ThemeOptions => {
        return mode === 'dark' ? themeOptionsDark : themeOptionsLight
      },
    []
  )

  const theme = useMemo(() => createTheme(getPalette(mode)), [mode, getPalette])

  return (
    <ThemeContext.Provider
      value={{ mode, toggleColorMode: colorMode.toggleColorMode }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
