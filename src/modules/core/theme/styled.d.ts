import {
  PaletteColor,
  SimplePaletteColorOptions,
  Theme,
  ThemeOptions,
} from '@mui/material'

import { ColorScale } from './types'

declare module '@mui/material/styles' {
  interface Palette {
    customColor: ColorScale
    custonButtonColor: SimplePaletteColorOptions
    blue?: SimplePaletteColorOptions
    white?: SimplePaletteColorOptions
    night: SimplePaletteColorOptions
  }

  interface PaletteOptions {
    customColor?: ColorScale
    custonButtonColor?: SimplePaletteColorOptions
    blue?: SimplePaletteColorOptions
    white?: SimplePaletteColorOptions
    night: SimplePaletteColorOptions
  }

  export function createTheme(options?: ThemeOptions, ...args: object[]): Theme
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    custonButtonColor: true
    blue: true
    white: true
    night: true
  }
}

export default createTheme({ palette })
