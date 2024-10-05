import { Container } from '@mui/material'

import TitleHead from '../../../common/TitleHead'
import { SpecialtiesArticleWrapper } from './styles'
import SpecialtyItem from './SpecialtyItem'

const SpecialtiesArticle = () => {
  return (
    <SpecialtiesArticleWrapper>
      <Container>
        <TitleHead beforeTitle='Servicios' title='Mis especialidades' />

        <SpecialtyItem
          title='UI/UX Design'
          summary='A traves de mi experiencia en desarrollo web he desarrollado habilidades y me capacitado en experiencia de usuario y diseño de interfaces'
        />
      </Container>
    </SpecialtiesArticleWrapper>
  )
}

export default SpecialtiesArticle
