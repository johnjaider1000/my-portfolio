import React from 'react'
import { FixedControlsWrapper } from './styles'
import ButtonComponent from '../Button'
import classNames from 'classnames'
import { CircularProgress } from '@mui/material'
import { Action } from '@/modules/core/interfaces/general'

interface FixedControlsProps {
  title?: string | React.ReactElement | React.ReactElement[]
  actions?: Array<Action>
  show: boolean
}

const FixedControls: React.FC<FixedControlsProps> = ({
  actions,
  show,
  title,
}) => {
  return (
    <>
      {show && (
        <FixedControlsWrapper>
          <div className="content_title">
            <h1 className='title'>{title}</h1>
          </div>

          {actions?.map((item, index) => (
            <ButtonComponent
              key={index}
              color={item.color as any}
              variant={item.variant || 'contained'}
              disabled={item.disabled || item.loading}
              onClick={item.onClick}
            >
              {item?.icon && !item.loading ? (
                item.icon
              ) : item.loading ? (
                <CircularProgress size="1rem" color="warning" />
              ) : (
                ''
              )}
              <span
                className={classNames({ 'ml-1': item.icon || item?.loading })}
              >
                {item.label}
              </span>
            </ButtonComponent>
          ))}
        </FixedControlsWrapper>
      )}
    </>
  )
}

export default FixedControls
