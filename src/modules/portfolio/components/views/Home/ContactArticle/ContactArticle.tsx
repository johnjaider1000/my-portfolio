import { Container, Grid, TextField } from '@mui/material'
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined'
import AttachEmailOutlinedIcon from '@mui/icons-material/AttachEmailOutlined'
import LinkedinImage from '@/modules/portfolio/assets/linkedin.webp'

import TitleHead from '../../../common/TitleHead'
import { ContactArticleWrapper } from './styles'
import ActionButton from '../../../common/ActionButton'
import IconLabel from '../../../common/IconLabel'
import Image from 'next/image'
import { useState } from 'react'
import useWords from '@/modules/core/hooks/useWords'

const ContactArticle = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const {
    CONTACT: { PRE_TITLE, TITLE, FORM_TITLE, NAME, EMAIL, MESSAGE, SEND },
  } = useWords()

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const elements = e.target.querySelectorAll('input, textarea')
    const data: any = {}
    console.log(elements)
    elements.forEach((element: any) => {
      data[element.name] = element.value
    })

    try {
      setLoading(true)
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()
      console.log(result)
    } catch (error) {
      console.error('Error al enviar el correo:', error)
    } finally {
      setLoading(false)
      elements.forEach((element: any) => {
        element.value = ''
      })
    }
  }

  return (
    <ContactArticleWrapper>
      <Container>
        <div className='contact-container'>
          <div className='info-container'>
            <TitleHead
              beforeTitle={PRE_TITLE}
              title={TITLE}
              className='header-titles'
            />

            <p className='description'>Bogotá D.C, Colombia</p>

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
            <form className='form-content' onSubmit={handleSubmit}>
              <fieldset
                style={{ border: 0, opacity: loading ? 0.5 : 1 }}
                disabled={loading}
              >
                <Grid container spacing={4}>
                  <Grid item md={12}>
                    <h1 className='title'>{FORM_TITLE}</h1>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      name='name'
                      label={NAME}
                      variant='standard'
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <TextField
                      name='email'
                      type='email'
                      label={EMAIL}
                      variant='standard'
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <TextField
                      name='message'
                      required
                      label={MESSAGE}
                      variant='standard'
                      rows={3}
                      multiline
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} md={12}>
                    <ActionButton
                      type='submit'
                      label={SEND}
                      loading={loading}
                    />
                  </Grid>
                </Grid>
              </fieldset>
            </form>
          </div>
        </div>
      </Container>
    </ContactArticleWrapper>
  )
}

export default ContactArticle
