import React from 'react'
import { LeftPanelContainer, LeftPanelWrapper } from './styles'
import MenuListComponent from './MenuList'
import Scrollbar from '@/modules/core/components/shared/Scrollbar'
import Img from '@/modules/core/components/shared/Img'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import ToolsHeader from './ToolsHeader'

const NormalMenu = ({ type }: any) => {
  return (
    <LeftPanelWrapper className='LeftPanel'>
      <div className='page-logo'>
        <Img src='/logo-react.webp' className='img-logo' />
        <span className='app-name truncate'>Admin WebApp</span>
        <KeyboardArrowDownIcon className='caret-icon' />
      </div>

      <LeftPanelContainer>
        <Scrollbar autoHide className='divscroll'>
          <ToolsHeader />

          <MenuListComponent type={type} />
        </Scrollbar>
      </LeftPanelContainer>
    </LeftPanelWrapper>
  )
}

export default NormalMenu
