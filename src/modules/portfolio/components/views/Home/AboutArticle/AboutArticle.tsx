import Image from 'next/image'
import { Chip, Container, Divider } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined'
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

import { AboutArticleWrapper, GradientTitle } from './styles'
import AboutImage from '@/modules/portfolio/assets/hello.png'
import IconLabel from '../../../common/IconLabel'
import ExperienceArticleComponent from './ExperienceArticle'
import TitleHead from '../../../common/TitleHead'
import useWords from '@/modules/core/hooks/useWords'

const AboutArticle = () => {
  const {
    lang,
    HOME: { FULL_STACK_DEVELOPER },
    ABOUT: {
      NICE_TO_MEET_YOU,
      WELCOME,
      DOWNLOAD_MY_RESUME,
      YEARS_OF_EXPERIENCE,
      P1,
      P2,
      P3,
      TECHNOLOGIES,
      MAIN,
      OTHERS,
      YEARS,
    },
  } = useWords()
  return (
    <AboutArticleWrapper>
      <Container>
        <div className='about-container'>
          <div className='summary-container'>
            <TitleHead
              beforeTitle={NICE_TO_MEET_YOU}
              title={WELCOME}
              className='head-titles'
            />

            <Image src={AboutImage} alt='About Image' className='about-image' />

            <GradientTitle className='profile-name'>JOHN VANEGAS</GradientTitle>

            <h3 className='subtitle'>
              <b>{FULL_STACK_DEVELOPER}</b> - Bogotá D.C, Colombia
            </h3>

            <a
              href={`/static/cv-john-vanegas${lang ? '-' + lang : '-en'}.pdf`}
              target='_blank'
              className='link-cv-download cursor-pointer'
            >
              {DOWNLOAD_MY_RESUME}
              <span className='icon-container'>
                <ArrowOutwardIcon className='icon' />
              </span>
            </a>
          </div>

          <div className='info-container'>
            <div className='data-profile'>
              <IconLabel
                icon={<LocalPhoneOutlinedIcon />}
                label='+57 310-878-3015'
              />

              <IconLabel icon={<BadgeOutlinedIcon />} label={`29 ${YEARS}`} />

              <IconLabel
                icon={<AttachEmailOutlinedIcon />}
                label='contacto@starlly.com'
              />

              <IconLabel
                icon={<LocationOnOutlinedIcon />}
                label='Bogotá D.C, Colombia'
              />
            </div>

            <Divider sx={{ mt: 3 }} />

            <div className='data-profile'>
              <div className='col'>
                <div className='title-number'>
                  <GradientTitle className='number'>9+</GradientTitle>
                  <span className='text'>{YEARS_OF_EXPERIENCE}</span>
                </div>

                <p className='description'>{P1}</p>

                <p className='description'>{P2}</p>

                <p className='description'>{P3}</p>
              </div>

              <div className='col'>
                <div className='title-number'>
                  <GradientTitle className='number'>14+</GradientTitle>
                  <span className='text'>{TECHNOLOGIES}</span>
                </div>

                <h5
                  className='flex row v-center mt-1 mb-1'
                  style={{ opacity: 0.6 }}
                >
                  {MAIN}
                </h5>

                <div className='tecnologies-list'>
                  <Chip label='Javascript' size='small' />
                  <Chip label='Typescript' size='small' />
                  <Chip label='React.js' size='small' />
                  <Chip label='Next.js' size='small' />
                  <Chip label='Redux.js' size='small' />
                  <Chip label='Nest.js' size='small' />
                  <Chip label='Electron.js' size='small' />
                  <Chip label='GraphQL' size='small' />
                  <Chip label='HTML5' size='small' />
                  <Chip label='CSS3' size='small' />
                  <Chip label='Node.js' size='small' />
                  <Chip label='MongoDB' size='small' />
                  <Chip label='Postgres' size='small' />
                  <Chip label='MySQL' size='small' />
                </div>

                <h5
                  className='flex row v-center mt-2 mb-1'
                  style={{ opacity: 0.6 }}
                >
                  {OTHERS}
                </h5>

                <div className='tecnologies-list'>
                  <Chip label='Jquery' size='small' />
                  <Chip label='Bootstrap' size='small' />
                  <Chip label='PHP' size='small' />
                  <Chip label='Python' size='small' />
                  <Chip label='Java' size='small' />
                  <Chip label='Android / Java' size='small' />
                  <Chip label='SQL' size='small' />
                  <Chip label='Arduino' size='small' />
                  <Chip label='Wordpress' size='small' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <ExperienceArticleComponent />
    </AboutArticleWrapper>
  )
}

export default AboutArticle
