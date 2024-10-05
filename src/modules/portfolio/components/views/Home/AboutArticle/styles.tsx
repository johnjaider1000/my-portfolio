import { styled } from '@mui/material'

export const GradientTitle = styled('h2')`
  background: linear-gradient(
    270deg,
    rgba(255, 177, 71, 1) 0%,
    rgba(255, 108, 99, 1) 55%,
    rgba(184, 106, 223, 1) 100%
  );
  -webkit-background-clip: text; /* Para navegadores WebKit */
  color: transparent; /* Hacer que el color del texto sea transparente */
`

export const AboutArticleWrapper = styled('div')`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  padding-top: 5rem;
  gap: 3rem;

  .head-titles {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;

    .title {
      text-transform: uppercase;
    }

    .subtitle {
      font-weight: 300;
    }
  }

  .about-container {
    display: flex;
    align-items: stretch;
    gap: 40px;

    .summary-container {
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .about-image {
        width: 100%;
        border-radius: 50%;
      }

      .profile-name {
        font-size: 48px;
        font-weight: bold;
        font-size: 2em;
        text-align: center;
      }
    }

    .link-cv-download {
      display: flex;
      align-items: center;
      gap: 8px;
      color: inherit;
      text-decoration: underline;
      font-weight: 500;
      margin-top: 1.6rem;

      .icon-container {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        background-color: #141414;

        .icon {
          color: #ffffff;
          font-size: 1.2em;
        }
      }
    }

    .info-container {
      width: 60%;

      .data-profile {
        display: grid;
        gap: 16px;
        grid-template-columns: repeat(2, 1fr);

        .title-number {
          display: flex;
          gap: 8px;
          align-items: center;

          .number {
            font-size: 2em;
          }

          .text {
            font-weight: bold;
          }
        }

        .description {
          margin-bottom: 1em;
        }

        .tecnologies-list {
          .MuiChip-root {
            margin-right: 4px;
            margin-bottom: 4px;
          }
        }
      }
    }
  }
`

export const Banner = styled('div')`
  background-color: #141313;
`

export const ExperienceArticle = styled('div')`
  background: rgb(255, 177, 71);
  background: linear-gradient(
    270deg,
    rgba(255, 177, 71, 1) 0%,
    rgba(255, 108, 99, 1) 55%,
    rgba(184, 106, 223, 1) 100%
  );

  padding: 3rem 0;

  .tech {
    color: #ffffff;
    margin-right: 4px;
    margin-bottom: 4px;
  }

  width: 100%;
  min-height: 100px;

  .head-titles {
    color: #ffffff;
  }

  .info-container {
    position: relative;
    .history-container {
      position: relative;

      .history-item {
        color: #ffffff;
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 8px;
        padding: 1.4rem 0;
        border-bottom: 1px solid rgba(255, 255, 255, 25%);

        .history-title {
          width: 100%;
          display: flex;
          justify-content: space-between;
          font-size: 0.9em;
          font-style: italic;

          small {
            font-size: 1.1em;
            font-weight: 500;
            font-style: normal;
          }
        }
      }
      /* top: -100px;
      min-height: 130px;
      background-color: #ffffff; */
      /* border-radius: 8px; */
      /* -webkit-box-shadow: 0px -1px 9px -1px rgba(0, 0, 0, 0.55);
      -moz-box-shadow: 0px -1px 9px -1px rgba(0, 0, 0, 0.55);
      box-shadow: 0px -1px 9px -1px rgba(0, 0, 0, 0.55); */
    }
  }
`
