import { Container } from '@mui/material'
import TitleHead from '../../../common/TitleHead'
import { BlogsArticleWrapper } from './styles'
import ProjectItemComponent from '../../../common/ProjectItem/ProjectItem'
import YouTubeImage from '@/modules/portfolio/assets/youtube.png'
import ScratchImage from '@/modules/portfolio/assets/scratch-coding.jpg'

const BlogsArticle = () => {
  return (
    <BlogsArticleWrapper>
      <Container>
        <TitleHead
          beforeTitle='Blogs & Vlogs'
          title='Mis Blogs & Vlogs'
          className='header-titles'
        />

        <p>
          Disfruto compartiendo conocimiento. Aunque mi tiempo es limitado,
          cuando la inspiración llega, me encanta enseñar cómo mejorar la
          programación y compartir tips en mis redes sociales. Actualmente,
          gestiono un canal en YouTube donde comparto herramientas útiles como
          Repara ficheros JJ, junto con otros conocimientos.
        </p>

        <div className='grid-projects'>
          <ProjectItemComponent
            item={{
              work: 'Video Vlog',
              title: 'Canal de YouTube',
              image: YouTubeImage,
              link: 'https://www.youtube.com/deplyn',
              technologies: [
                'Curso PHP',
                'Repara Ficheros JJ',
                'Scratch',
                'Software',
              ],
            }}
          />

          <ProjectItemComponent
            item={{
              work: 'Blog',
              title: 'Scratch Projects',
              image: ScratchImage,
              link: 'https://scratch.mit.edu/search/projects?q=jhonjaider1000',
              technologies: [
                'Para niños',
                'Flappy Bird',
                'Tres en raya',
                'Snake',
                'Guitar Hero',
              ],
            }}
          />
        </div>
      </Container>
    </BlogsArticleWrapper>
  )
}

export default BlogsArticle
