import React from 'react'
import { HomeViewWrapper } from './styles'
import LayoutComponent from '@/modules/portfolio/components/common/layout'
import HomeArticle from './HomeArticle'
import AboutArticle from './AboutArticle'
import { Divider } from '@mui/material'
import WorksArticle from './WorksArticle'
import { Element } from 'react-scroll'
import BlogsArticle from './BlogsArticle'
import ContactArticle from './ContactArticle'

const HomeViewComponent = () => {
  return (
    <LayoutComponent>
      <HomeViewWrapper>
        <Element name='home'>
          <HomeArticle />
          <Divider />
        </Element>

        <Element name='about'>
          <AboutArticle />
        </Element>

        <Element name='projects'>
          <WorksArticle />
          <Divider />
        </Element>

        <Element name='blogs'>
          <BlogsArticle />
          <Divider />
        </Element>

        <Element name='contact'>
          <ContactArticle />
        </Element>
      </HomeViewWrapper>
    </LayoutComponent>
  )
}

export default HomeViewComponent
