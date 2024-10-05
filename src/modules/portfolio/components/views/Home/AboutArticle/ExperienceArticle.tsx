import { Chip, Container } from '@mui/material'
import { ExperienceArticle } from './styles'
import ActionButton from '../../../common/ActionButton'
import MoreDescription from './MoreDescription'
import TitleHead from '../../../common/TitleHead'

const ExperienceArticleComponent = () => {
  return (
    <ExperienceArticle>
      <Container>
        <div className='about-container'>
          <div className='summary-container'>
            <div className='head-titles'>
              <TitleHead beforeTitle='Experiencia' title='Mi experiencia' />

              <p className='description mt-1'>
                He tenido el privilegio de colaborar con diversas empresas, lo
                que me ha brindado la oportunidad de explorar una variedad de
                tecnologías. Esta experiencia me ha permitido desarrollar
                habilidades como Full Stack, dándome acceso a un amplio espectro
                de herramientas y lenguajes de programación.
              </p>

              <ActionButton label='Descarga mi CV' className='mt-3' />
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

                <h2 className='title'>Desarrollador Full Stack</h2>

                <div className='technologies'>
                  <Chip size='small' label='React.js' className='tech' />
                  <Chip size='small' label='Sass' className='tech' />
                  <Chip size='small' label='Redux' className='tech' />
                  <Chip size='small' label='Typescript' className='tech' />
                  <Chip size='small' label='PHP' className='tech' />
                  <Chip size='small' label='Wordpress' className='tech' />
                </div>

                <MoreDescription>
                  Contribuí como desarrollador Front-End en la aplicación de
                  gestión de pagos de la plataforma Veem utilizando React.js y
                  TypeScript. Además, colaboré con el equipo de diseño web en
                  proyectos basados en PHP y WordPress, donde desarrollé nuevos
                  widgets, plugins personalizados e implementaciones que
                  integraban y extendían las funcionalidades de WordPress.
                </MoreDescription>
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

                <h2 className='title'>Desarrollador Full Stack</h2>

                <div className='technologies'>
                  <Chip size='small' label='Android' className='tech' />
                  <Chip size='small' label='Java' className='tech' />
                  <Chip size='small' label='Vue.js' className='tech' />
                  <Chip size='small' label='Boostrap' className='tech' />
                  <Chip size='small' label='Postgres' className='tech' />
                  <Chip size='small' label='MiFare' className='tech' />
                </div>

                <MoreDescription>
                  Como Full Stack Developer (usando React, Vue, Java y Android),
                  puse en práctica todas mis habilidades y adquirí nuevos
                  conocimientos. Contribuí al desarrollo del dashboard de la
                  compañía y lideré el desarrollo de una aplicación Android para
                  dispositivos electrónicos con lectores MiFare e impresoras.
                  Implementé de manera integral la funcionalidad de lectura y
                  escritura de tarjetas, así como la impresión de recibos a
                  través del hardware de los dispositivos, lo que me permitió
                  profundizar en la programación de bajo nivel, trabajando con
                  hexadecimales y binarios para interactuar con los lectores
                  MiFare.
                </MoreDescription>
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

                <h2 className='title'>Desarrollador Front-End</h2>

                <div className='technologies'>
                  <Chip size='small' label='React.js' className='tech' />
                  <Chip size='small' label='Next.js' className='tech' />
                  <Chip size='small' label='HTML5' className='tech' />
                  <Chip size='small' label='CSS3' className='tech' />
                  <Chip size='small' label='Sass' className='tech' />
                  <Chip size='small' label='Material UI' className='tech' />
                  <Chip size='small' label='GraphQL' className='tech' />
                </div>

                <MoreDescription>
                  Colaboré en el desarrollo completo del frontend de la
                  aplicación, utilizando tecnologías como React.js, Redux.js,
                  Next.js, HTML5, CSS3, SASS, GraphQL y Material UI para crear
                  una interfaz de usuario moderna, eficiente y altamente
                  interactiva.
                </MoreDescription>
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

                <h2 className='title'>Desarrollador Full Stack</h2>

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

                <MoreDescription>
                  Colaboré en el desarrollo integral de la aplicación, desde su
                  fase inicial hasta su implementación final. Desarrollé la
                  página web, el dashboard web, la aplicación móvil, y el
                  Kiosko, una plataforma que permitía a los usuarios obtener
                  dinero a cambio de reciclar botellas. Utilicé tecnologías como
                  React.js, Node.js, Electron.js, PHP y Android.
                </MoreDescription>
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

                <h2 className='title'>Desarrollador Full Stack</h2>

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

                <MoreDescription>
                  AppFuture fue mi primera experiencia en el ámbito laboral, un
                  lugar donde tuve la oportunidad de conocer personas increíbles
                  que me enseñaron los fundamentos y muchos de los principios
                  clave de la programación. Allí trabajé con diversas
                  tecnologías y di mis primeros pasos como Full Stack Developer,
                  utilizando herramientas como Java, Spring Boot, SQL, MySQL,
                  Postgres, PHP, HTML, CSS, JQuery, JavaScript puro y Android.
                </MoreDescription>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </ExperienceArticle>
  )
}
export default ExperienceArticleComponent
