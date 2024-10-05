import React from 'react'
import Link from 'next/link'

import { IconLabelWrapper } from './styles'

interface Props {
  icon?: string | React.ReactElement
  label?: string
  href?: string
  target?: string
}

const IconLabel: React.FC<Props> = ({
  icon,
  label,
  href,
  target = '_blank',
}) => {
  const getProps = () => {
    if (!href) {
      return {}
    }

    return {
      href,
      target: target,
    }
  }

  return (
    <IconLabelWrapper
      component={href ? Link : 'div'}
      {...getProps()}
      style={{ cursor: href ? 'pointer' : 'inherit' }}
    >
      <div className='icon-container'>
        {typeof icon !== 'string' &&
          React.isValidElement(icon) &&
          React.cloneElement(icon as any, { className: 'icon' })}
      </div>

      <label style={{ cursor: href ? 'pointer' : 'inherit' }}>{label}</label>
    </IconLabelWrapper>
  )
}

export default IconLabel
