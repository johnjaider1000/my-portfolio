import React, { useState } from 'react'
import { FormControl, InputLabel, MenuItem, SelectProps } from '@mui/material'
import { SelectWrapper } from './styles'
import Image from 'next/image'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface OptionItem {
  icon?: React.ReactElement
  image?: string | StaticImport
  label?: string
  value?: string
}

interface Props extends SelectProps {
  options?: Array<OptionItem>
}

const Select: React.FC<Props> = ({
  label,
  value,
  onChange,
  children,
  options,
  size = 'small',
  ...props
}) => {
  const [currentValue, setCurrentValue] = useState<any>('-1')

  const handleChange = (event: any) => {
    setCurrentValue(event.target.value as string)
  }

  return (
    <FormControl size={size} fullWidth>
      <InputLabel id="selector-label">{label}</InputLabel>
      <SelectWrapper
        {...props}
        labelId="selector-label"
        id="demo-simple-select"
        size={size}
        label={label}
        value={value || currentValue}
        onChange={onChange || handleChange}
        MenuProps={{ disablePortal: true, disableScrollLock: true }}
      >
        {children && children}
        <MenuItem value="-1">Seleccione</MenuItem>
        {options &&
          options.map((item, index) => {
            return (
              <MenuItem
                key={item.value}
                value={item.value}
                className="menu-item"
              >
                {item.icon && <div className="IconContent">item.icon</div>}
                {item.image && (
                  <div className="ImageContent">
                    <Image alt="itemImage" src={item.image} className="image" />
                  </div>
                )}
                <span>{item.label}</span>
              </MenuItem>
            )
          })}
      </SelectWrapper>
    </FormControl>
  )
}

export default Select
