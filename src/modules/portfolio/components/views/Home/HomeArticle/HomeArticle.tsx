import Image from 'next/image'
import { Container } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'

import { ContactInfo, HomeArticleWrapper } from './styles'
import MoonImage from '@/core/assets/vector-1.svg'
import ProfileImage from '@/modules/portfolio/assets/me.png'
import ActionButton from '../../../common/ActionButton'
import { WHATSAPP_LINK } from '@/modules/portfolio/constants/urls'
import useWords from '@/modules/core/hooks/useWords'

const HomeArticle = () => {
  const {
    HOME: {
      MY_NAME,
      IS,
      FULL_STACK_DEVELOPER,
      SPECIALIZED_IN,
      INIT_DESCRIPTION,
      LETS_TALK,
    },
  } = useWords()
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
                <span className='name'>{MY_NAME}</span>
                <span className='introduction'>
                  {IS} <strong className='first-name'>JOHN</strong>
                </span>
                <span className='last-name'>
                  <strong>Vanegas...</strong>
                </span>
              </h1>
            </div>

            <h2 className='subtitle'>
              <span className='info'>
                <b>
                  <i>{FULL_STACK_DEVELOPER}</i>
                </b>{' '}
                {SPECIALIZED_IN}
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

            <p className='description'>{INIT_DESCRIPTION}</p>

            <a href={WHATSAPP_LINK} target='_blank'>
              <ActionButton label={LETS_TALK} />
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
