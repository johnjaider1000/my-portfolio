import { Box, Chip } from '@mui/material'
import { ProjectItemWrapper } from './styles'
import TitleHead from '../TitleHead'
import Link from 'next/link'
import ActionButton from '../ActionButton'
import Image from 'next/image'

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
              label='Pronto disponible'
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
              />
            </figure>
          </div>
        </div>
      </ProjectItemWrapper>
    </Box>
  )
}

export default ProjectItemComponent
