import React from 'react'
import { SpecialtyWrapper } from './styles'
import AddIcon from '@mui/icons-material/Add'

interface Props {
  title?: string
  summary?: string
  description?: React.ReactElement | React.ReactElement[] | string
  active?: boolean
}
const SpecialtyItem: React.FC<Props> = ({
  title,
  summary,
  description,
  active,
}) => {
  return (
    <SpecialtyWrapper>
      <div className='header'>
        <h2 className='title'>{title}</h2>
        <p className='description'>{summary}</p>

        <AddIcon className='icon' />
      </div>
    </SpecialtyWrapper>
  )
}

export default SpecialtyItem
