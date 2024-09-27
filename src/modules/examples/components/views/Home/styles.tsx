import { Container, styled } from '@mui/material'

export const HomeContainer = styled('div')`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.palette.night?.main};
  color: ${({ theme }) => theme.palette.night?.contrastText};

  .header-container {
    padding: 20px;
    display: flex;
    flex-direction: row;

    .options-container {
      margin-left: auto;
      display: flex;
      flex-direction: row;
      gap: 20px;
      align-items: center;
    }
  }
`
