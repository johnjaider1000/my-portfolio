import { ThemeOptions } from '@mui/material'

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */

const themeOptionsLight: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#8338EC',
    },
    secondary: {
      main: '#6405EB',
    },
    blue: {
      main: '#0E1C36',
      contrastText: '#FFFFFF',
    },
    white: {
      main: '#FFFFFC',
      contrastText: '#FFFFFF',
    },
    night: {
      main: '#090A0D',
      contrastText: '#FFFFFF',
    },
  },
  components: {
    MuiPagination: {
      styleOverrides: {
        root: {},
      },
    },
  },
}

export default themeOptionsLight
