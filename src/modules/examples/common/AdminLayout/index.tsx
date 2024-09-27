import React from 'react'
import { AdminLayoutWrapper, Body, ChildrenContainer } from './styles'
import Head from 'next/head'
import LeftPanel from './LeftPanel'
import TopMenu from './LeftPanel/TopMenu'

interface Props {
  title?: string
  children?: React.ReactElement | React.ReactElement[]
}
const AdminLayout: React.FC<Props> = ({
  title = process.env.APP_NAME,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <AdminLayoutWrapper>
        <LeftPanel />

        <Body>
          <TopMenu />
          <ChildrenContainer>{children}</ChildrenContainer>
        </Body>
      </AdminLayoutWrapper>
    </>
  )
}

export default AdminLayout
