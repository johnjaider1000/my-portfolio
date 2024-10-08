import { Box, Chip } from '@mui/material'
import { ProjectItemWrapper } from './styles'
import TitleHead from '../TitleHead'
import Link from 'next/link'
import ActionButton from '../ActionButton'
import Image from 'next/image'
import useWords from '@/modules/core/hooks/useWords'

export interface IProjectItem {
  work: string
  title: string
  technologies: Array<string>
  link?: string
  image: any
}

interface Props {
  item: IProjectItem
}

const ProjectItemComponent: React.FC<Props> = ({ item }) => {
  const {
    WORKS: { AVAILABLE_SOON },
  } = useWords()

  return (
    <Box component={item?.link ? Link : 'div'} href={item.link} target='_blank'>
      <ProjectItemWrapper>
        <div className='titles-container'>
          <TitleHead
            beforeTitle={item.work}
            title={item.title}
            className='titles'
          />

          <div className='technologies'>
            {item.technologies.map((techItem, techIndex) => (
              <Chip label={techItem} size='small' key={techIndex} />
            ))}
          </div>

          {item.link && <ActionButton className='btn-action' />}
          {!item.link && (
            <Chip
              color='info'
              label={AVAILABLE_SOON}
              className='mt-2'
              size='small'
            />
          )}
        </div>

        <div className='image-container'>
          <div className='image-wrapper'>
            <figure>
              <Image
                src={item.image}
                alt={`${item.title} Thumbnail`}
                className='thumnail-image'
                width={380}
                height={380}
              />
            </figure>
          </div>
        </div>
      </ProjectItemWrapper>
    </Box>
  )
}

export default ProjectItemComponent
