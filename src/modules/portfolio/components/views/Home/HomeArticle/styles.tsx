import { ButtonBase, styled } from '@mui/material'

export const HomeArticleWrapper = styled('article')`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.white?.main};
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-content: center;
  align-items: center;

  .home-article {
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 900px) {
      flex-direction: column;
    }

    .col {
      width: 100%;
      gap: 10px;

      &.details-container {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media (max-width: 900px) {
          padding: 2rem 1rem;
        }

        .title-container {
          position: relative;
          .moon-image-decoration {
            position: absolute;
            z-index: 1;
            left: -10%;
            top: -14%;
          }

          .title {
            position: relative;
            z-index: 2;
            display: flex;
            flex-direction: column;
            font-weight: bold;
            text-transform: uppercase;
            font-weight: 300;
            font-size: 4em;
            line-height: 1.1em;
          }
        }

        .subtitle {
          font-weight: 300;
          display: flex;
          flex-direction: column;
          line-height: 1.4em;
        }

        .description {
          opacity: 0.9;
        }
      }

      &.profile-image-container {
        @media (max-width: 1150px) {
          display: none;
        }

        @media (max-width: 900px) {
          display: none;
        }

        .profile-image {
          width: 100%;
          height: auto;
        }
      }
    }

    .technologies-experience {
      .language {
        margin-right: 8px;

        abbr {
          background-color: #ffc139;
          display: inline-flex;
          justify-content: end;
          align-items: end;
          width: 28px;
          height: 28px;
          font-size: 0.6em;
          font-weight: bold;
          padding-right: 4px;
          padding-bottom: 2px;
          line-height: 1em;
          text-decoration: none;
        }

        &.typescript {
          abbr {
            background-color: #0c7fc7;
            color: #ffffff;
          }
        }
      }

      .technologies {
        font-size: 0.8em;
        opacity: 0.7;
      }
    }
  }
`

export const ContactInfo = styled('div')`
  display: flex;
  margin-top: 2rem;
  gap: 8px;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 16px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon-container {
      width: 40px;
      height: 40px;
      background-color: #1413131b;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    label {
      font-weight: bold;
      font-size: 1.2em;
    }
  }
`
