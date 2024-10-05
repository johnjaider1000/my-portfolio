import { styled } from '@mui/material'

export const ContactArticleWrapper = styled('div')`
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;

  .header-titles {
    height: 100px;
    justify-content: center;
  }

  .contact-container {
    display: flex;

    .info-container {
      width: 50%;
    }

    .form-container {
      .form-content {
        background: rgb(255, 177, 71);
        background: linear-gradient(
          270deg,
          rgba(255, 177, 71, 1) 0%,
          rgba(255, 108, 99, 1) 55%,
          rgba(184, 106, 223, 1) 100%
        );

        padding: 3rem;

        .title {
          color: #ffffff;
          text-transform: uppercase;
        }

        .MuiFormControl-root {
          .MuiFormLabel-root {
            color: #ffffff;
          }

          .MuiInputBase-root {
            &::before {
              border-color: rgba(255, 255, 255, 0.4);
            }
          }

          input,
          textarea {
            color: #ffffff;
          }
        }
      }
    }
  }
`
