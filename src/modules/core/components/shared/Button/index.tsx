import React from 'react'
import { ButtonProps } from '@mui/material'
import { ButtonWrapper } from './styles'
import classNames from 'classnames'
import CameraAltIcon from '@mui/icons-material/CameraAlt'

export type variantOptions = 'text' | 'outlined' | 'contained' | undefined

interface Props extends Omit<ButtonProps, 'variant'> {
  label?: string
  variant?: 'text' | 'outlined' | 'contained' | 'black-camera'
  circular?: boolean
}

const parseVariantOption = (value: string): variantOptions => {
  switch (value) {
    case 'text':
    case 'outlined':
    case 'contained':
      return value
    case 'black-camera':
      return 'contained'
    default:
      return 'contained'
  }
}

const ButtonComponent: React.FC<Props> = ({
  label,
  color,
  variant,
  circular,
  className,
  children,
  ...props
}) => {
  const adjustedVariant = parseVariantOption(variant as string)

  return (
    <ButtonWrapper
      className={classNames(className, {
        black: variant === 'black-camera',
        circular,
      })}
      variant={adjustedVariant}
      color={color}
      {...props}
    >
      {variant === 'black-camera' && (
        <CameraAltIcon className={classNames({ 'mr-1': label || children })} />
      )}
      {label && <span>{label}</span>}
      {!label && children}
    </ButtonWrapper>
  )
}

export default ButtonComponent
