import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import DomainAddOutlinedIcon from '@mui/icons-material/DomainAddOutlined'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AttachFileRoundedIcon from '@mui/icons-material/AttachFileRounded'
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined'
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined'
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { Add } from '@mui/icons-material'
import HomeIcon from '@mui/icons-material/Home'
import { useState } from 'react'

export interface MenuItemProps {
  id: string
  label: string
  href?: string
  icon?: any
  active?: boolean
  menu?: Array<MenuItemProps>
}

export interface GroupItemProps {
  title?: string
  menu: Array<MenuItemProps>
}

export const useMenuList = () => {
  const NORMAL_MENU: Array<GroupItemProps> = [
    {
      menu: [
        {
          id: 'home',
          label: 'Opción 1',
          icon: <HomeIcon />,
          active: true,
          menu: [
            {
              id: 'home1_1',
              label: 'Subopción 1',
            },
            {
              id: 'home1_2',
              label: 'Subopción 2',
            },
            {
              id: 'home1_3',
              label: 'Childs',
              menu: [
                {
                  id: 'home1_1_1',
                  label: 'Child 1',
                },
                {
                  id: 'home1_1_2',
                  label: 'Child 2',
                },
                {
                  id: 'home1_1_3',
                  label: 'Child 3',
                  menu: [
                    {
                      id: 'home1_1_3_1',
                      label: 'Child 1',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'home2',
          label: 'Opción 2',
          icon: <HomeIcon />,
          active: true,
        },
        {
          id: 'home3',
          label: 'Opción 2',
          icon: <HomeIcon />,
          active: true,
        },
      ],
    },
    {
      title: 'Comunidades',
      menu: [
        {
          id: 'new',
          label: 'Crear una comunidad',
          href: '/dashboard/plans/free',
          icon: <Add />,
        },
        {
          id: 'Free',
          label: 'Free',
          href: '/dashboard/plans/free',
          icon: <AcUnitOutlinedIcon />,
        },
        {
          id: 'Bussiness',
          label: 'Personas',
          href: '/dashboard/plans/business',
          icon: <ShoppingBagOutlinedIcon />,
        },
        {
          id: 'Startup',
          label: 'Bussines text',
          href: '/dashboard/plans/startup',
          icon: <WorkspacePremiumOutlinedIcon />,
        },
      ],
    },
    {
      title: 'Géneros',
      menu: [
        // {
        //   id: 'profile',
        //   label: 'Todos',
        //   href: '/dashboard/profile',
        //   icon: <AccountCircleRoundedIcon />,
        // },
        {
          id: 'profile',
          label: 'Chicas',
          href: '/dashboard/profile',
          icon: <AccountCircleRoundedIcon />,
        },
        {
          id: 'links',
          href: '/dashboard/links',
          label: 'Chicos',
          icon: <AttachFileRoundedIcon />,
        },
        {
          id: 'facturation',
          href: '/dashboard/facturation',
          label: 'Cosplay',
          icon: <CategoryOutlinedIcon />,
        },
        {
          id: 'products',
          href: '/dashboard/products',
          label: 'LGTB',
          icon: <CategoryOutlinedIcon />,
        },
      ],
    },
    {
      title: 'Más',
      menu: [
        {
          id: 'aboutwaref',
          href: '/dashboard/about',
          label: 'Nosotros',
          icon: <InfoOutlinedIcon />,
        },
        {
          id: 'add',
          href: '/dashboard/publisher',
          label: 'Publicar',
          icon: <DomainAddOutlinedIcon />,
        },
        {
          id: 'help',
          href: '/dashboard/help',
          label: 'Soporte',
          icon: <HelpOutlineOutlinedIcon />,
        },
      ],
    },
  ]

  const [menuList, setMenuList] = useState<Array<GroupItemProps>>(NORMAL_MENU)

  const assingChanges = (
    item: MenuItemProps,
    menu: Array<MenuItemProps> = []
  ) => {
    return menu.map((itemElement) => {
      if (item.id === itemElement.id) {
        return item
      }

      itemElement.menu = assingChanges(item, itemElement.menu)
      return itemElement
    })
  }

  const onChangeMenu = (item: any) => {
    const newMenuList = menuList.map((menuItemList) => ({
      ...menuItemList,
      menu: assingChanges(item, menuItemList.menu),
    }))

    setMenuList(newMenuList)
  }

  return { menuList, setMenuList, onChangeMenu, NORMAL_MENU }
}
