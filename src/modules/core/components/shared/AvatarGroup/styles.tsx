import { styled } from '@mui/material'
import MuiListItem from '@mui/material/ListItem'

export const ListItemAvatarContainer = styled(MuiListItem)`
  display: flex;
  align-items: center;

  .linkContainer {
    text-decoration: none;
    color: inherit;
  }

  .MuiListItemAvatar-root {
    margin-top: 0;
    min-width: 50px;
  }

  .MuiTypography-root {
    &.MuiTypography-body1 {
      font-weight: bold;
    }
    &.MuiTypography-body2 {
      margin-top: -6px;
    }
  }

  & .check-icon {
    color: #0a85f5;
    font-size: 14px;
    margin-left: 4px;
  }
`
