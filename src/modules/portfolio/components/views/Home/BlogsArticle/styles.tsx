import { styled } from '@mui/material'

export const BlogsArticleWrapper = styled('div')`
  min-height: 100vh;

  .header-titles {
    align-items: center;
    justify-content: center;
    height: 200px;
  }

  .grid-projects {
    margin-top: 2rem;
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(2, 1fr);
  }
`
