import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

import { StartButton } from './styles'
import classNames from 'classnames'
import { CircularProgress } from '@mui/material'

interface Props {
  label?: string
  className?: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}

const ActionButton: React.FC<Props> = ({ label, className, type, loading }) => {
  return (
    <StartButton className={classNames(className)} type={type}>
      {loading && <CircularProgress size={20} />}

      {!loading && label && label}

      {loading && type === 'submit' && 'Enviando...'}

      {!loading && (
        <span className='icon-container'>
          <ArrowOutwardIcon className='icon' />
        </span>
      )}
    </StartButton>
  )
}

export default ActionButton
