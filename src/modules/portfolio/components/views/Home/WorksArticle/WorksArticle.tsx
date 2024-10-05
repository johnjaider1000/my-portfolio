import React from 'react'
import { Container } from '@mui/material'
import { WorksArticleWrapper } from './styles'
import TitleHead from '../../../common/TitleHead'
import CuidocThumbnail from '@/modules/portfolio/assets/cuidoc.png'
import PlasticPlayThumbnail from '@/modules/portfolio/assets/plasticplay.png'
import IdolfyThumbnail from '@/modules/portfolio/assets/idolfy.png'
import VibbleThumbnail from '@/modules/portfolio/assets/vibble.png'
import ReparaFicherosJJThumbnail from '@/modules/portfolio/assets/reparaficherosjj.png'
import { IProjectItem } from '../../../common/ProjectItem'
import KoraThumnail from '@/modules/portfolio/assets/kora.png'
import ProjectItemComponent from '../../../common/ProjectItem/ProjectItem'

const works: Array<IProjectItem> = [
  {
    work: 'Front-End',
    title: 'Cuidoc platform',
    image: CuidocThumbnail,
    link: 'https://cuidoc.com/search?sub_filters=%7B%22procedure_id%22%3A%22120be1eb-ee4c-46c1-83e4-c1832193ddf1%22%7D&place_id=ChIJBa0PuN8oRI4RVju1x_x8E0I&address=Medell%C3%ADn%2C+Antioquia%2C+Colombia&lat=6.2476376&lng=-75.56581530000001&location_types=locality&location_types=political',
    technologies: [
      'React.js',
      'Next.js',
      'HTML5',
      'CSS3',
      'Sass',
      'Material UI',
      'GraphQL',
    ],
  },
  {
    work: 'Full Stack',
    title: 'Vibble - LPR',
    image: VibbleThumbnail,
    technologies: [
      'React.js',
      'Sass',
      '@mui',
      'Python',
      'Tensorflow',
      'FastApi',
      'MongoDB',
      'Raspberry PI 4',
    ],
  },
  {
    work: 'Full Stack',
    title: 'Repara Ficheros JJ',
    image: ReparaFicherosJJThumbnail,
    link: 'https://reparaficherosjj.starlly.com/',
    technologies: [
      'Java',
      'JFrame',
      'CSS',
      'HTML5',
      'Bootstrap',
      'PHP',
      'MySQL',
    ],
  },
  {
    work: 'Full Stack',
    title: 'Idolfy',
    image: IdolfyThumbnail,
    technologies: [
      'React.js',
      'Sass',
      '@mui',
      'Next.js',
      'Node.js',
      'Nest.js',
      'HTML5',
      'MongoDB',
    ],
  },
  {
    work: 'Full Stack',
    title: 'PlasticPlay',
    link: 'https://www.youtube.com/watch?v=NfAeLFDZ9i8',
    image: PlasticPlayThumbnail,
    technologies: [
      'Node.js',
      'JQuery',
      'Bootstrap',
      'CSS',
      'HTML5',
      'Java',
      'MySQL',
      'Android',
    ],
  },
  {
    work: 'Full Stack',
    title: 'Kora',
    image: KoraThumnail,
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Nest.js',
      'HTML5',
      'Css3',
      'Sass',
      '@mui',
      'Postgres',
      'MongoDB',
    ],
  },
]

const WorksArticle = () => {
  return (
    <WorksArticleWrapper>
      <Container>
        <TitleHead
          beforeTitle='Proyectos'
          title='Proyectos recientes'
          className='head-titles'
        />

        <div className='works-container'>
          {works.map((item, index) => (
            <ProjectItemComponent key={index} item={item} />
          ))}
        </div>
      </Container>
    </WorksArticleWrapper>
  )
}

export default WorksArticle
