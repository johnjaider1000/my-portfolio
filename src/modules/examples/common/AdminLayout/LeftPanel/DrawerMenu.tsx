import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import MenuListComponent from './MenuList'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

const DrawerMenu = ({ type }: any) => {
  const anchor: Anchor = 'left'
  const [show, setShow] = React.useState(true)

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }
      setShow(open)
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <MenuListComponent type={type} />
    </Box>
  )

  return (
    <div>
      <React.Fragment key={anchor}>
        <Drawer
          anchor={anchor}
          open={show}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  )
}

export default DrawerMenu
