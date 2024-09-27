import { styled } from '@mui/material'

export const FixedControlsWrapper = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  top: 64px;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.6);
  /* filter: blur(4px); */
  z-index: 999;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 0 20px;

  .content_title {
    display: flex;
    position: fixed;
    left: 10px;
    align-items: center;
    justify-content: center;

    .title {
      font-size: 1.1em;
      color: #ffffff;
      font-weight: bold;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
`
