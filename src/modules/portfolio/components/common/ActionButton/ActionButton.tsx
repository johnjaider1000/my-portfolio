import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

import { StartButton } from './styles'
import classNames from 'classnames'

interface Props {
  label?: string
  className?: string
}

const ActionButton: React.FC<Props> = ({ label, className }) => {
  return (
    <StartButton className={classNames(className)}>
      {label && label}

      <span className='icon-container'>
        <ArrowOutwardIcon className='icon' />
      </span>
    </StartButton>
  )
}

export default ActionButton
