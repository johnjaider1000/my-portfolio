import { styled } from '@mui/material'

export const ProjectItemWrapper = styled('div')`
  display: flex;
  gap: 10px;
  transition: all 0.1s ease-in;
  padding: 10px;

  &:hover {
    -webkit-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 19px -10px rgba(0, 0, 0, 0.75);
    border-radius: 8px;
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.1s ease-in;
  }

  .titles {
    color: #222222;
  }

  .titles-container {
    width: 40%;
    display: flex;
    flex-direction: column;
    gap: 8px;

    .technologies {
      .MuiChip-root {
        margin-right: 4px;
        margin-top: 4px;
      }
    }

    .btn-action {
      width: 60px;
      height: 60px;
      padding: 0;
      background-color: #ffffff;
      .icon-container {
        width: 100%;
        height: 100%;
        background: unset;
        .icon {
          color: #222222;
          font-size: 4rem;
        }
      }
    }
  }

  .image-container {
    width: 60%;
    .image-wrapper {
      background-color: gray;
      display: block;
      width: 100%;
      aspect-ratio: 1;

      figure {
        width: 100%;
        height: 100%;

        .thumnail-image {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
`
