import React from 'react'
import NormalMenu from './NormalMenu'

export type LEFT_MENU_TYPES = 'NORMAL'

interface Props {
  type?: LEFT_MENU_TYPES
}

const LeftPanel: React.FC<Props> = ({ type = 'NORMAL' }) => {
  return <>{type === 'NORMAL' && <NormalMenu type={type} />}</>
}

export default LeftPanel
