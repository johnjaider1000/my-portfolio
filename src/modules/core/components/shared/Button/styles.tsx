import { styled } from '@mui/material'
import Button from '@mui/material/Button'

export const ButtonWrapper = styled(Button)`
  text-transform: none;
  
  &.black {
    background-color: #000000;
    color: #ffffff;
  }

  &.circular {
    border-radius: 30px;
  }
`
