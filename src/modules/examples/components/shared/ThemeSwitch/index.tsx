import { FormControlLabel } from '@mui/material'
import { MaterialUISwitch } from './styles'
import { useContext } from 'react'
import { ThemeContext } from '@/modules/core/store/context/ThemeContext'

const ThemeSwitch = () => {
  const { mode, toggleColorMode } = useContext(ThemeContext)

  return (
    <FormControlLabel
      control={<MaterialUISwitch sx={{ m: 1 }} checked={mode == 'dark'} />}
      label={
        <>
          Theme Switch (<b>{mode}</b>)
        </>
      }
      onChange={toggleColorMode}
    />
  )
}

export default ThemeSwitch
