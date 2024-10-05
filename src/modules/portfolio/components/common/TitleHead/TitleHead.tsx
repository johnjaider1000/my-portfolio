import classNames from 'classnames'

import { TitleHeadWrapper } from './styles'

interface Props {
  title: string
  beforeTitle?: string
  className?: string
}
const TitleHead: React.FC<Props> = ({ beforeTitle, title, className }) => {
  return (
    <TitleHeadWrapper className={classNames(className)}>
      <b className='before-title'>
        <i>{beforeTitle}</i>
      </b>

      <h1 className='title'>{title}</h1>
    </TitleHeadWrapper>
  )
}

export default TitleHead
