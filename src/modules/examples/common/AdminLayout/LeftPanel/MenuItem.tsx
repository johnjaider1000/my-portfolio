import { List, ListItemButton, ListSubheader, ToolTipCustom } from './styles'
import classnames from 'classnames'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import classNames from 'classnames'
import { MenuItemProps } from './menuLists'

const MenuItem = ({
  item,
  comparePath,
  className,
  onChangeMenu,
}: {
  item: MenuItemProps
  comparePath: any
  className?: string
  onChangeMenu?: any
}) => {
  const getCurrentHeight = (submenu: any) => {
    if (!submenu) {
      return 0
    }

    let heightSize = 0
    const items = submenu.querySelectorAll('&> li')

    items.forEach((elementItem: any) => {
      heightSize += elementItem.offsetHeight
    })

    return heightSize
  }

  const openMenu = (event: any) => {
    const item = event.target.closest('li')
    const submenu = item.querySelector('.submenu')
    const lastHeight = getCurrentHeight(submenu)
    submenu.style.height = `${lastHeight}px`

    if (submenu) {
      let heightSize = getCurrentHeight(submenu)

      submenu.style.height = `${heightSize}px`
      submenu.style.animation = `height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;`

      setTimeout(() => {
        if (submenu.classList.contains('open')) {
          submenu.style.height = `auto`
        }
      }, 400)

      if (submenu.classList.contains('open')) {
        submenu.style.height = `${lastHeight}px`
        submenu.style.height = 0
      }

      submenu.classList.toggle('open')
    }
  }

  return (
    <>
      <ListItemButton
        onClick={item.menu ? openMenu : undefined}
        className={classnames(className, {
          active: comparePath(item.href),
        })}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>

        <ListItemText primary={item.label} />

        <ToolTipCustom className='ToolTip'>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <span className='label'>{item.label}</span>
        </ToolTipCustom>

        {item.menu && <KeyboardArrowDownIcon className='caret-icon' />}
      </ListItemButton>

      {item?.menu && (
        <ul className={classNames('submenu')}>
          {item.menu.map((menuItem, menuItemIndex) => (
            <li key={menuItemIndex}>
              <MenuItem item={menuItem} comparePath={comparePath} />
            </li>
          ))}
        </ul>
      )}
    </>
  )
}

export default MenuItem
