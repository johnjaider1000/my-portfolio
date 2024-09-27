import { CallbackType } from '@/core/components/shared/Types/types'

export type GQLQueryName = 'user' | 'users' | 'file' | 'products' | 'links'

export type GQLResult<T extends GQLQueryName, U> = {
  [key in T]: U
}

export type ChildrenCallbackAttach = ({
  imageSrc,
  handleClick,
}: {
  imageSrc?: string
  handleClick?: CallbackType<any>
}) => React.ReactElement | React.ReactElement[]

export type ActionUpload = 'UPDATE_PROFILE' | 'UPDATE_COVER'

export interface Action {
  label: string
  icon?: React.ReactElement | React.ReactElement[]
  variant?: 'contained' | 'outlined'
  color?: 'primary' | 'secondary' | 'default'
  onClick?: () => void
  loading?: boolean
  disabled?: boolean
  className?: string
  styles?: any
  href?: string
}

export type ThemeMode = 'light' | 'dark'
