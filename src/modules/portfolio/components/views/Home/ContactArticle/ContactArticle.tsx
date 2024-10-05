import { Box, Container, Grid, TextField } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined'
import LinkedinImage from '@/modules/portfolio/assets/linkedin.webp'

import TitleHead from '../../../common/TitleHead'
import { ContactArticleWrapper } from './styles'
import ActionButton from '../../../common/ActionButton'
import IconLabel from '../../../common/IconLabel'
import Image from 'next/image'

const ContactArticle = () => {
  return (
    <ContactArticleWrapper>
      <Container>
        <div className='contact-container'>
          <div className='info-container'>
            <TitleHead
              beforeTitle='Contacto'
              title='Contáctame'
              className='header-titles'
            />

            <p className='description'>Ubicado en Bogotá D.C, Colombia</p>

            <div className='contact-list-items flex column gap-2 mt-3'>
              <IconLabel
                href='tel:+573108783015'
                icon={<LocalPhoneOutlinedIcon />}
                label='+57 310-878-3015'
              />

              <IconLabel
                href='mailto:contacto@starlly.com'
                icon={<AttachEmailOutlinedIcon />}
                label='contacto@starlly.com'
              />

              <IconLabel
                href='https://www.linkedin.com/in/johnjaider1000/'
                icon={
                  <Image
                    src={LinkedinImage}
                    alt='IconLinkedin'
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                    }}
                  />
                }
                label='Linkedin'
              />
            </div>
          </div>

          <div className='form-container'>
            <div className='form-content'>
              <Grid container spacing={4}>
                <Grid item md={12}>
                  <h1 className='title'>Algún proyecto en mente?</h1>
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    id='name'
                    label='Nombres'
                    variant='standard'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    id='email'
                    label='Correo electrónico'
                    variant='standard'
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    id='message'
                    label='Mensaje'
                    variant='standard'
                    rows={3}
                    multiline
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <ActionButton label='Enviar ahora' />
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </Container>
    </ContactArticleWrapper>
  )
}

export default ContactArticle
