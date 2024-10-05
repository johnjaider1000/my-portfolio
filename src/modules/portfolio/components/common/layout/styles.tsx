import { styled } from '@mui/material'

const WIDTH_LEFT_PANEL = 300

export const LayoutComponentWrapper = styled('div')``

export const LayoutContainer = styled('div')`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`

export const LeftLayout = styled('div')`
  background-color: ${({ theme }) => theme.palette.night.main};
  width: ${WIDTH_LEFT_PANEL}px;
  min-height: 100vh;
  height: 100%;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 900px) {
    display: none;
  }

  .container {
    display: flex;
    flex-direction: column;
    padding: 30px;

    .header-content {
    }
  }
`

export const RightLayout = styled('div')`
  background-color: ${({ theme }) => theme.palette.white?.main};
  flex: 1;
  min-width: 0;
`

export const TitleH1 = styled('h1')`
  color: #ffffff;
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 1.2em;
`

export const LinksListContent = styled('ul')`
  display: flex;
  flex-direction: column;
  padding: 30px;
  list-style: none;
  gap: 20px;
`

export const LiItem = styled('li')`
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.palette.night?.contrastText};
    text-transform: uppercase;
    cursor: pointer;

    &.active {
      font-weight: bold;
    }
  }

  &.active {
    font-weight: 600;
  }
`

export const RssContainer = styled('div')`
  margin-top: auto;
  margin-left: 30px;
`

export const LeftFooter = styled('div')`
  padding: 30px;
  color: ${({ theme }) => theme.palette.night?.contrastText};
  font-size: 0.8em;
`
