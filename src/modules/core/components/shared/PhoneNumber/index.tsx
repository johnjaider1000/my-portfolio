import React from 'react'
import CountrySelect from '../CountrySelect'
import { PhoneNumberWrapper } from './styles'
import useDataMonitor from './useDataMonitor'
import NumberMask from '../masks/NumberMask'
import useWords from '@/hooks/useWords'
import TextField from '@mui/material/TextField'

interface Props {
  value?: string
  onChange?: (event: any, value: string) => void
}

const PhoneNumberComponent: React.FC<Props> = ({ value, onChange }) => {
  const {
    PHONE_COMPONENT: { CODE, PHONE },
  } = useWords()

  const { code, phoneNumber, setCode, setPhoneNumber, errors } = useDataMonitor(
    {
      value,
    })

  return (
    <PhoneNumberWrapper>
      <div className="CountrySelectContainer">
        <CountrySelect
          label={CODE}
          value={code}
          error={!!errors['code']}
          helperText={errors['code']}
          onChange={(_, value) => setCode(value?.phone)}
        />
      </div>

      <div className="PhoneNumberContainer">
        <TextField
          label={PHONE}
          size="medium"
          value={phoneNumber}
          onChange={({ target: { value } }: any) => setPhoneNumber(value)}
          InputProps={{
            inputComponent: NumberMask as any,
          }}
          error={!!errors['phone']}
          helperText={errors['phone']}
        />
      </div>
    </PhoneNumberWrapper>
  )
}

export default PhoneNumberComponent
