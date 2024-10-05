import React from 'react'
import { Icon } from '@mui/material'
import { IconLabelWrapper } from './styles'
import { pascalCaseToSnakeCase } from '@/modules/core/utils'

interface Props {
  icon?: string | React.ReactElement
  label?: string
}

const IconLabel: React.FC<Props> = ({ icon, label }) => {
  return (
    <IconLabelWrapper>
      <div className='icon-container'>
        {/* {typeof icon === 'string' && (
          <Icon className='icon'>{pascalCaseToSnakeCase(icon)}</Icon>
        )} */}

        {typeof icon !== 'string' &&
          React.isValidElement(icon) &&
          React.cloneElement(icon as any, { className: 'icon' })}
      </div>

      <label>{label}</label>
    </IconLabelWrapper>
  )
}
export default IconLabel
