import React from 'react'
import { SIZES } from '../../Types/types'
import { Props as InputProps } from '../Input/types'
import { TextField } from '@mui/material'

interface Props extends InputProps {
  className?: string
  size?: SIZES
  label?: string
  value?: string
  onChange?: any
  helperText?: string
  placeholder?: string
  error?: boolean
  rows?: number
}

const Textarea: React.FC<Props> = ({
  variant,
  type = 'text',
  rows = 3,
  ...props
}) => {
  return <TextField rows={rows} multiline {...props} />
}

export default Textarea
