import { styled } from '@mui/material'

export const PhoneNumberWrapper = styled('div')`
  display: flex;
  gap: 10px;
  position: relative;

  .CountrySelectContainer {
    width: 160px;

    .MuiAutocomplete-popper {
      width: 100% !important;
      box-shadow: 0px 0px 3px #888888;
      transform: translate(0, 56px) !important;
    }
  }

  .PhoneNumberContainer {
    width: calc(100% - 160px);
  }
`
