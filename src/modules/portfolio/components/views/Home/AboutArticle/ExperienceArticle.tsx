import { Chip, Container } from '@mui/material'
import { ExperienceArticle } from './styles'
import ActionButton from '../../../common/ActionButton'
import MoreDescription from './MoreDescription'
import TitleHead from '../../../common/TitleHead'
import useWords from '@/modules/core/hooks/useWords'

const ExperienceArticleComponent = () => {
  const {
    lang,
    HOME: { FULL_STACK_DEVELOPER },
    ABOUT: { DOWNLOAD_MY_RESUME },
    EXPERIENCE: {
      EXPERIENCE,
      MY_EXPERIENCE,
      DESCRIPTION,
      FRONT_END_DEVELOPER,
      EXP_P1,
      EXP_P2,
      EXP_P3,
      EXP_P4,
      EXP_P5,
    },
  } = useWords()

  return (
    <ExperienceArticle>
      <Container>
        <div className='about-container'>
          <div className='summary-container'>
            <div className='head-titles'>
              <TitleHead beforeTitle={EXPERIENCE} title={MY_EXPERIENCE} />

              <p className='description mt-1'>{DESCRIPTION}</p>

              <a
                href={`/static/cv-john-vanegas${lang ? '-' + lang : '-en'}.pdf`}
                target='_blank'
              >
                <ActionButton label={DOWNLOAD_MY_RESUME} className='mt-3 cursor-pointer' />
              </a>
            </div>
          </div>

          <div className='info-container'>
            <div className='history-container'>
              <div className='history-item'>
                <h3 className='history-title'>
                  <span>-2022 - 2024</span>
                  <small>
                    <a
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                      }}
                      href='https://veem.com'
                      target='_blank'
                    >
                      veem.com
                    </a>
                  </small>
                </h3>

                <h2 className='title'>{FULL_STACK_DEVELOPER}</h2>

                <div className='technologies'>
                  <Chip size='small' label='React.js' className='tech' />
                  <Chip size='small' label='Sass' className='tech' />
                  <Chip size='small' label='Redux' className='tech' />
                  <Chip size='small' label='Typescript' className='tech' />
                  <Chip size='small' label='PHP' className='tech' />
                  <Chip size='small' label='Wordpress' className='tech' />
                </div>

                <MoreDescription>{EXP_P1}</MoreDescription>
              </div>

              <div className='history-item'>
                <h3 className='history-title'>
                  <span>-2020 - 2022</span>
                  <small>
                    <a
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                      }}
                      href='veem.com'
                    >
                      accesspark.co
                    </a>
                  </small>
                </h3>

                <h2 className='title'>{FULL_STACK_DEVELOPER}</h2>

                <div className='technologies'>
                  <Chip size='small' label='Android' className='tech' />
                  <Chip size='small' label='Java' className='tech' />
                  <Chip size='small' label='Vue.js' className='tech' />
                  <Chip size='small' label='Boostrap' className='tech' />
                  <Chip size='small' label='Postgres' className='tech' />
                  <Chip size='small' label='MiFare' className='tech' />
                </div>

                <MoreDescription>{EXP_P2}</MoreDescription>
              </div>

              <div className='history-item'>
                <h3 className='history-title'>
                  <span>-2019 - 2021</span>
                  <small>
                    <a
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                      }}
                      href='https://cuidoc.com/'
                      target='_blank'
                    >
                      cuidoc.com
                    </a>
                  </small>
                </h3>

                <h2 className='title'>{FRONT_END_DEVELOPER}</h2>

                <div className='technologies'>
                  <Chip size='small' label='React.js' className='tech' />
                  <Chip size='small' label='Next.js' className='tech' />
                  <Chip size='small' label='HTML5' className='tech' />
                  <Chip size='small' label='CSS3' className='tech' />
                  <Chip size='small' label='Sass' className='tech' />
                  <Chip size='small' label='Material UI' className='tech' />
                  <Chip size='small' label='GraphQL' className='tech' />
                </div>

                <MoreDescription>{EXP_P3}</MoreDescription>
              </div>
              <div className='history-item'>
                <h3 className='history-title'>
                  <span>-2017 - 2020</span>
                  <small>
                    <a
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                      }}
                      href='https://www.youtube.com/watch?v=NfAeLFDZ9i8'
                      target='_blank'
                    >
                      plasticplay.co
                    </a>
                  </small>
                </h3>

                <h2 className='title'>{FULL_STACK_DEVELOPER}</h2>

                <div className='technologies'>
                  <Chip size='small' label='Node.js' className='tech' />
                  <Chip size='small' label='JQuery' className='tech' />
                  <Chip size='small' label='Bootstrap' className='tech' />
                  <Chip size='small' label='CSS' className='tech' />
                  <Chip size='small' label='HTML5' className='tech' />
                  <Chip size='small' label='Java' className='tech' />
                  <Chip size='small' label='MySQL' className='tech' />
                  <Chip size='small' label='Android' className='tech' />
                </div>

                <MoreDescription>{EXP_P4}</MoreDescription>
              </div>
              <div className='history-item'>
                <h3 className='history-title'>
                  <span>-2014 - 2017</span>
                  <small>
                    <a
                      style={{
                        color: 'inherit',
                        textDecoration: 'underline',
                      }}
                      href='https://www.appfuture.net/'
                      target='_blank'
                    >
                      appfuture.net
                    </a>
                  </small>
                </h3>

                <h2 className='title'>{FULL_STACK_DEVELOPER}</h2>

                <div className='technologies'>
                  <Chip size='small' label='HTML5' className='tech' />
                  <Chip size='small' label='CSS' className='tech' />
                  <Chip size='small' label='JQuery' className='tech' />
                  <Chip size='small' label='Bootstrap' className='tech' />
                  <Chip size='small' label='Java' className='tech' />
                  <Chip size='small' label='Spring Boot' className='tech' />
                  <Chip size='small' label='Postgres' className='tech' />
                  <Chip size='small' label='Android' className='tech' />
                  <Chip size='small' label='Php' className='tech' />
                </div>

                <MoreDescription>{EXP_P5}</MoreDescription>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ExperienceArticle>
  )
}
export default ExperienceArticleComponent
