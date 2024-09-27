import { gql } from '@apollo/client'

export const FILE_UPLOAD = gql`
  mutation UploadFile($file: Upload!, $action: String) {
    file: uploadFile(file: $file, action: $action) {
      _id
      name
      mimetype
      size
      src
      status
      createdAt
    }
  }
`
