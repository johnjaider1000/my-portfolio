import { styled } from '@mui/material'
import Select from '@mui/material/Select'

export const SelectWrapper = styled(Select)`
  .MuiSelect-select {
    display: flex;
    align-items: center;

    .ImageContent,
    .IconContent {
      margin-right: 10px;
      .image {
        width: 20px;
      }
    }
  }

  .menu-item {
    background-color: #ffffff;

    .ImageContent,
    .IconContent {
      margin-right: 10px;
      .image {
        width: 20px;
      }
    }
  }
`
