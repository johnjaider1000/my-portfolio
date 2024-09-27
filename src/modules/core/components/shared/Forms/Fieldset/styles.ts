import { styled } from '@mui/material'

export const FieldsetWrapper = styled('fieldset')`
  border: none;
  
  &.disabled {
    pointer-events: none;
    opacity: 0.6;
  }
`
