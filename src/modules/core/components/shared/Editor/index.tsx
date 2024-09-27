import React from 'react'
import classNames from 'classnames'
import { Box, NoSsr } from '@mui/material'
import { Editor } from '@tinymce/tinymce-react'
import { useRef } from 'react'

interface Props {
  className?: string
}

const EditorComponent: React.FC<Props> = ({ className }) => {
  const editorRef = useRef<any>(null)

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent())
    }
  }

  return (
    <NoSsr>
      <Box
        className={classNames('flex', 'column', 'gap-1', className)}
        sx={{ width: '100%' }}
      >
        <Editor
          apiKey="dx6arrprj86znaxx9kv10mx5ura5c6wzp4jalaeo8amv6bys"
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>Write a new post.</p>"
          init={{
            height: 500,
            menubar: false,
            plugins: [
              'advlist',
              'autolink',
              'lists',
              'link',
              'image',
              'charmap',
              'preview',
              'anchor',
              'searchreplace',
              'visualblocks',
              'code',
              'fullscreen',
              'insertdatetime',
              'media',
              'table',
              'code',
              'help',
              'wordcount',
            ],
            toolbar:
              'undo redo | blocks | ' +
              'bold italic forecolor | alignleft aligncenter ' +
              'alignright alignjustify | bullist numlist outdent indent | ' +
              'removeformat | help',
            content_style:
              'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
          }}
        />
        {/* <button onClick={log}>Log editor content</button> */}
      </Box>
    </NoSsr>
  )
}

export default EditorComponent
