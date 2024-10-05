import { styled } from '@mui/material'

export const IconLabelWrapper = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  .icon-container {
    width: 40px;
    height: 40px;
    color: #141313;
    background-color: rgba(20, 19, 19, 5%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      font-size: 1.2em;
    }
  }

  label {
    color: #141313;
    font-weight: bold;
    font-style: italic;
  }
`
