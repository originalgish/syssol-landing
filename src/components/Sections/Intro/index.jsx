import React from 'react'
import LazyLoad from 'react-lazy-load'

import { intro } from '../../../data'

import { IntroContainer, Image, Title, SubTitle, HomeLink } from './styles'
import introBG from './img/intro-bg.jpg'

const Intro = () => (
  <IntroContainer>
    <LazyLoad>
      <Image src={introBG} alt="content image" />
    </LazyLoad>
    <Title>{intro.title}</Title>
    <SubTitle>{intro.subtitle}</SubTitle>
    <HomeLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
      {intro.buttonText}
    </HomeLink>
  </IntroContainer>
)

export default Intro
