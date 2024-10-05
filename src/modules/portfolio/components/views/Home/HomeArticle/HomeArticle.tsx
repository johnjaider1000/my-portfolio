import Image from 'next/image'
import { Container } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

import { ContactInfo, HomeArticleWrapper } from './styles'
import MoonImage from '@/core/assets/vector-1.svg'
import ProfileImage from '@/modules/portfolio/assets/me.png'
import ActionButton from '../../../common/ActionButton'
import { WHATSAPP_LINK } from '@/modules/portfolio/constants/urls'

const HomeArticle = () => {
  return (
    <HomeArticleWrapper>
      <Container>
        <div className='home-article'>
          <div className='col details-container'>
            <div className='title-container'>
              <Image
                src={MoonImage}
                alt='moon-image'
                className='moon-image-decoration'
              />

              <h1 className='title'>
                <span className='name'>Mi nombre</span>
                <span className='introduction'>
                  es <strong className='first-name'>JOHN</strong>
                </span>
                <span className='last-name'>
                  <strong>Vanegas...</strong>
                </span>
              </h1>
            </div>

            <h2 className='subtitle'>
              <span className='info'>
                <b>
                  <i>Desarrollador FullStack</i>
                </b>{' '}
                especializado en
              </span>

              <span className='technologies-experience'>
                <span className='language javascript'>
                  <abbr title='JavaScript'>JS</abbr> JavaScript,
                </span>
                <span className='language typescript'>
                  <abbr title='TypeScript'>TS</abbr> TypeScript:
                </span>
                <span className='technologies'>
                  (React.js, Node.js, React Native, Electron.js, MongoDB y{' '}
                  <a
                    href='#'
                    style={{ color: 'inherit', textDecoration: 'underline' }}
                  >
                    más...
                  </a>
                  )
                </span>
              </span>
            </h2>

            <p className='description'>
              Soy un desarrollador apasionado y curioso, siempre en la búsqueda
              de lo extraordinario. Mis herramientas preferidas son JavaScript y
              TypeScript, pero mi curiosidad me ha llevado a explorar un vasto
              universo tecnológico. Creo firmemente que al romper las barreras
              de lo habitual, podemos crear cosas verdaderamente increíbles. Si
              deseas descubrir cómo juntos podemos revolucionar el mundo
              digital, sigue bajando para saber más. ¡La innovación nos espera!
            </p>

            <a href={WHATSAPP_LINK} target='_blank'>
              <ActionButton label='Hablemos' />
            </a>

            <ContactInfo className='contact-info'>
              <div className='contact-item'>
                <div className='icon-container'>
                  <LocalPhoneOutlinedIcon className='icon' />
                </div>

                <label>+57 310-878-3015</label>
              </div>

              <div className='contact-item'>
                <div className='icon-container'>
                  <EmailOutlinedIcon className='icon' />
                </div>

                <label>contacto@starlly.com</label>
              </div>
            </ContactInfo>
          </div>

          <div className='col profile-image-container'>
            <Image
              src={ProfileImage}
              alt='profile-image'
              className='profile-image'
            />
          </div>
        </div>
      </Container>
    </HomeArticleWrapper>
  )
}

export default HomeArticle
