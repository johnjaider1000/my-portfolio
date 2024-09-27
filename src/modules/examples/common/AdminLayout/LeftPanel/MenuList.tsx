import React, { Fragment, useState } from 'react'
import { List, ListSubheader } from './styles'
import Link from 'next/link'
import Divider from '@mui/material/Divider'

import { GroupItemProps, MenuItemProps, useMenuList } from './menuLists'
import useRouterPath from '@/modules/core/hooks/useRouterPath'
import MenuItem from './MenuItem'

const MenuListComponent = ({ type }: any) => {
  const { comparePath } = useRouterPath()
  const { menuList, onChangeMenu } = useMenuList()
  const isNormal = type === 'NORMAL'

  return (
    <>
      {menuList.map((group: any, index: any) => (
        <Fragment key={index}>
          <List
            subheader={
              group.title ? (
                <ListSubheader>{group.title}</ListSubheader>
              ) : undefined
            }
          >
            {group.menu.map((item: MenuItemProps, menuIndex: any) => (
              <Fragment key={menuIndex}>
                <li className='menu-parent'>
                  {item?.href && (
                    <Link href={item.href || '/'} className='text-undecorated'>
                      <MenuItem
                        item={item}
                        comparePath={comparePath}
                        onChangeMenu={onChangeMenu}
                      />
                    </Link>
                  )}

                  {!item?.href && (
                    <MenuItem
                      item={item}
                      comparePath={comparePath}
                      onChangeMenu={onChangeMenu}
                    />
                  )}
                </li>

                {!isNormal && group.menu.length - 1 !== menuIndex && (
                  <Divider />
                )}
              </Fragment>
            ))}
          </List>

          {index !== menuList.length - 1 && <Divider />}
        </Fragment>
      ))}
    </>
  )
}

export default MenuListComponent
