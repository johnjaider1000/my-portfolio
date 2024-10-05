import React from 'react'
import Head from 'next/head'
import {
  LayoutComponentWrapper,
  LayoutContainer,
  LeftFooter,
  LeftLayout,
  LiItem,
  LinksListContent,
  RightLayout,
  TitleH1,
} from './styles'
import useWords from '@/modules/core/hooks/useWords'
import { Link } from 'react-scroll'

interface Props {
  title?: string
  children?: React.ReactElement | React.ReactElement[]
}

const LayoutComponent: React.FC<Props> = ({
  children,
  title = 'John Vanegas',
}) => {
  const {
    HOME: { ALL_RIGHT_RESERVED },
  } = useWords()

  return (
    <LayoutComponentWrapper>
      <Head>
        <title>{title}</title>
      </Head>

      <LayoutContainer>
        <LeftLayout>
          <div className='container'>
            <div className='header-content'>
              <TitleH1>John Vanegas</TitleH1>
            </div>
          </div>

          <LinksListContent>
            <LiItem>
              <Link
                to='home'
                smooth={true}
                spy={true}
                duration={500}
                activeClass='active'
              >
                HOME
              </Link>
            </LiItem>

            <LiItem>
              <Link
                to='about'
                smooth={true}
                spy={true}
                duration={500}
                activeClass='active'
              >
                ABOUT
              </Link>
            </LiItem>

            <LiItem>
              <Link
                to='projects'
                smooth={true}
                spy={true}
                duration={500}
                activeClass='active'
              >
                Projects
              </Link>
            </LiItem>

            <LiItem>
              <Link
                to='blogs'
                smooth={true}
                spy={true}
                duration={500}
                activeClass='active'
              >
                BLOGS & VLOGS
              </Link>
            </LiItem>

            <LiItem>
              <Link
                to='contact'
                smooth={true}
                spy={true}
                duration={500}
                activeClass='active'
              >
                CONTACT
              </Link>
            </LiItem>
          </LinksListContent>

          <LeftFooter>
            <p>Copyright ©2024 John Vanegas. {ALL_RIGHT_RESERVED}.</p>
          </LeftFooter>
        </LeftLayout>

        <RightLayout>{children}</RightLayout>
      </LayoutContainer>
    </LayoutComponentWrapper>
  )
}

export default LayoutComponent
