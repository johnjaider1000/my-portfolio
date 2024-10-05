import { ThemeOptions } from '@mui/material'

/* Create a theme instance.
 * DOCS: https://mui.com/material-ui/customization/default-theme/#main-content
 */

const themeOptionsLight: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffffff',
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
      main: '#141313',
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
