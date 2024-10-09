import React, { useState } from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined'
import useWords from '@/modules/core/hooks/useWords'

interface Props {
  children: React.ReactElement | React.ReactElement[] | string
}
const MoreDescription: React.FC<Props> = ({ children }) => {
  const [showMore, setShowMore] = useState<boolean>(false)
  const {
    EXPERIENCE: { SEE, MORE, LESS },
  } = useWords()

  const toggleShowMore = () => {
    setShowMore((flag) => !flag)
  }

  return (
    <>
      {showMore && <p className='description'>{children}</p>}
      <p className='description'>
        <a
          style={{
            color: 'inherit',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
          onClick={toggleShowMore}
          className='flex row v-center'
        >
          {showMore ? <ExpandLessOutlinedIcon /> : <ExpandMoreOutlinedIcon />}{' '}
          {SEE} {showMore ? LESS : MORE}...
        </a>
      </p>
    </>
  )
}

export default MoreDescription
