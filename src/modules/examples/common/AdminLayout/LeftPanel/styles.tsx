import { styled } from '@mui/material'
import MuiList from '@mui/material/List'
import MuiListItemButton from '@mui/material/ListItemButton'
import MuiListSubheader from '@mui/material/ListSubheader'
import MuiStack from '@mui/material/Stack'
import MuiIconButton from '@mui/material/IconButton'

export const LEFT_MENU_WIDTH = 340

export const ToolTipCustom = styled('div')`
  background-color: #ffffff;
  box-shadow: 1px 0px 2px #333333;
  color: #333333;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 14px;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -50%);
  z-index: 9999999;
  display: none;
  font-weight: 500;
  font-size: 0.8em;
  white-space: nowrap;
  border-radius: 0px 4px 4px 0px;

  .label {
    margin-left: 8px;
  }
`

export const LeftPanelWrapper = styled('div')`
  z-index: 10;
  transition: width 0.2s;
  flex: 0 0 auto;
  background-color: #202537;
  width: ${LEFT_MENU_WIDTH + 'px'};
  height: 100vh;
  position: sticky;

  .page-logo {
    padding: 10px 20px;
    gap: 10px;
    display: flex;
    align-items: center;
    height: 60px;
    color: #ffffff;
    background-color: #0000004f;

    .img-logo {
      width: 36px;
      border-radius: 50%;
    }

    .app-name {
    }

    .caret-icon {
      margin-left: auto;
      font-size: 1em;
    }
  }

  @media (max-width: 1200px) {
    width: 60px;

    .MuiListSubheader-root {
      display: none;
    }

    .MuiButtonBase-root {
      position: relative;
      padding-left: 20px;
      padding-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .MuiListItemText-root {
        white-space: nowrap;
        display: none;
      }

      .MuiListItemIcon-root {
        min-width: unset;
      }

      &:hover {
        .MuiListItemText-root {
          opacity: 1;
          margin-left: 1px;
        }

        .ToolTip {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const LeftPanelContainer = styled('div')`
  position: sticky;
  top: 64px;
  height: calc(100vh - 60px);

  @keyframes fadeOutCollapse {
    0% {
      opacity: 1;
      height: auto;
      overflow: hidden;
    }
    100% {
      opacity: 0;
      height: 0;
      overflow: hidden;
      padding: 0;
    }
  }

  @keyframes open {
    0% {
      opacity: 0;
      height: 0;
      overflow: hidden;
    }
    100% {
      opacity: 1;
      height: auto;
    }
  }

  .hidden {
    /* .filter-container { */
    /* display: none !important; */
    /* } */

    /* animation: fadeOutCollapse 0.3s ease-in-out forwards; */
  }

  .MuiList-root {
    .MuiButtonBase-root {
      .MuiListItemIcon-root {
        font-size: 0.8em;
      }

      .MuiListItemText-root .MuiTypography-root {
        font-size: 0.9em;
        line-height: normal;
      }
    }

    & > li {
      & > .submenu {
        position: relative;
        padding: 0;
        height: 0;
        overflow: hidden;
        transition: height 0.5s ease-out;
        background-color: rgba(0, 0, 0, 0.2);

        li .submenu {
          height: 0;
          overflow: hidden;
          transition: height 0.5s ease-out;
          background-color: rgba(0, 0, 0, 0.2);
        }

        &:before {
          position: absolute;
          content: '';
          display: block;
          z-index: 1;
          left: 2rem;
          top: 0px;
          bottom: 0;
          border-left: 1px dashed rgba(255, 255, 255, 0.1);
        }

        & > li > .MuiButtonBase-root {
          position: relative;
          &:before {
            content: '';
            position: absolute;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
            left: calc(2rem - 0.2rem);
            background-color: rgba(255, 255, 255, 0.6);
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
  }

  @keyframes expand {
    0% {
      height: 0;
      overflow: hidden;
    }

    100% {
      height: auto;
      opacity: 1;
    }
  }

  .MuiListSubheader-root {
    background-color: transparent;
    color: rgb(255 255 255 / 80%);
    font-size: 0.7em;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
    padding-left: 20px;
    padding-right: 20px;
  }

  .MuiButtonBase-root {
    padding-left: 20px;
    padding-right: 20px;

    .MuiListItemText-root,
    .MuiListItemIcon-root {
      color: #ffffff;
    }

    .caret-icon {
      margin-left: auto;
      color: #ffffff;
      font-size: 1em;
    }
  }
`

export const List = styled(MuiList)``

export const ListItemButton = styled(MuiListItemButton)`
  position: relative;
  padding-left: 50px;
  padding-right: 50px;
  .MuiListItemIcon-root,
  .MuiListItemText-root {
    color: #666666;
  }

  &.active {
    .MuiListItemIcon-root,
    .MuiListItemText-root {
      color: ${({ theme }) => theme.palette.primary.main};
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 4px;
      height: 100%;
      background-color: ${({ theme }) => theme.palette.primary.main};
      z-index: 9;
    }
  }

  .MuiListItemIcon-root {
    min-width: 40px;
  }
`

export const ListSubheader = styled(MuiListSubheader)`
  text-transform: uppercase;
  font-size: 0.8em;
  padding-left: 40px;
  color: #555555;
  margin-top: 6px;
`

export const RSSStack = styled(MuiStack)`
  justify-content: center;
  background-color: #f4f4f4;
  padding: 14px;
`

export const SocialIconButton = styled(MuiIconButton)`
  padding: 0;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(1.2);
  }
`
