import { styled } from '@mui/material'

export const WorksArticleWrapper = styled('article')`
  min-height: 100vh;
  padding-top: 5rem;
  padding-bottom: 5rem;

  .head-titles {
    height: 120px;
    display: flex;
  }

  .works-container {
    display: grid;
    gap: 4rem;
    grid-template-columns: repeat(2, 1fr);
  }
`
