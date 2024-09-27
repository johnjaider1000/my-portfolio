import { styled } from '@mui/material'

export const TopMenuWrapper = styled('div')`
  .appbar {
    position: relative;
    background-color: #ffffff;
    padding-top: 4px;
    padding-bottom: 4px;
    box-shadow: 0 0 1px #333333;

    .app-name {
      font-weight: 700;
      letter-spacing: '.3rem';
      color: 'inherit';
      text-decoration: 'none';
      text-transform: uppercase;
      color: #333333;
    }

    .logo-img {
      height: 50px;
      margin-right: 10px;
    }

    .toolbar {
      padding: 0 20px;
    }

    .button-menu-control {
      width: 10px;
      box-shadow: none;
      border: 1px solid #ebebeb;
      color: #333333;
      padding: 0;
      width: 40px;
      height: 40px;
      min-width: unset;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

export const BreadcrumbWrapper = styled('div')`
  background-color: #f0f0f0;
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`
