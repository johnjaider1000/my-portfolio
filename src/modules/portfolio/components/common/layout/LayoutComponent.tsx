import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from 'react-scroll'

import useWords from '@/modules/core/hooks/useWords'
import IconLabel from '../IconLabel'
import LinkedinImage from '@/modules/portfolio/assets/linkedin.webp'

import {
  LayoutComponentWrapper,
  LayoutContainer,
  LeftFooter,
  LeftLayout,
  LiItem,
  LinksListContent,
  RightLayout,
  RssContainer,
  TitleH1,
} from './styles'

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
    LEFT_PANEL: { HOME, ABOUT, PROJECTS, BLOGS, CONTACT },
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
                {HOME}
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
                {ABOUT}
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
                {PROJECTS}
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
                {BLOGS}
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
                {CONTACT}
              </Link>
            </LiItem>
          </LinksListContent>

          <RssContainer>
            <IconLabel
              href='https://www.linkedin.com/in/johnjaider1000/'
              icon={
                <Image
                  src={LinkedinImage}
                  alt='IconLinkedin'
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                  }}
                />
              }
            />
          </RssContainer>

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
