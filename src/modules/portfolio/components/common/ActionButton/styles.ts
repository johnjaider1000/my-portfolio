import { ButtonBase, styled } from '@mui/material'

export const StartButton = styled(ButtonBase)`
  background-color: ${({ theme }) => theme.palette.night.main};
  width: max-content;
  padding: 14px 40px;
  color: ${({ theme }) => theme.palette.night.contrastText};
  font-size: 1.2em;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 0.8rem;

  .icon-container {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(255, 177, 71);
    background: linear-gradient(
      270deg,
      rgba(255, 177, 71, 1) 0%,
      rgba(255, 108, 99, 1) 55%,
      rgba(184, 106, 223, 1) 100%
    );

    .icon {
      font-size: 1em;
    }
  }
`
