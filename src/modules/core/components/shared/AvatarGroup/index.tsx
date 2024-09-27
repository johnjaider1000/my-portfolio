import { ListItemAvatarContainer } from './styles'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import React from 'react'
import Link from 'next/link'

interface Props {
  src?: string
  alt?: string
  href?: string
  username?: string
  description?: string
  checked?: boolean
  headComponents?: any
}

const AvatarGroupComponent: React.FC<Props> = ({
  src,
  alt,
  href = '#',
  username,
  description,
  checked,
  headComponents,
}) => {
  return (
    <>
      <ListItemAvatarContainer alignItems="flex-start">
        <Link href={href} className="linkContainer">
          <ListItemAvatar>
            <Avatar src={src} alt={alt} />
          </ListItemAvatar>
        </Link>

        <ListItemText
          primary={
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              component={'div'}
            >
              <Link href={href} className="linkContainer">
                <span>{username}</span>
              </Link>
              {checked && <CheckCircleIcon className="check-icon" />}
              {headComponents}
            </Typography>
          }
          secondary={description}
        />
      </ListItemAvatarContainer>
    </>
  )
}

export default AvatarGroupComponent
