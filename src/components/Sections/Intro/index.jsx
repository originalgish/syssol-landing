import React from 'react'
import LazyLoad from 'react-lazy-load'

import { intro } from '../../../data'

import { IntroContainer, Image, Title, SubTitle, HomeLink } from './styles'
import introBG1x from './img/intro-bg@1x.jpg'
import introBG2x from './img/intro-bg@2x.jpg'

const Intro = () => (
  <IntroContainer>
    <LazyLoad>
      <Image srcSet={`${introBG1x} 1x, ${introBG2x} 2x`} src={introBG1x} alt="windmill background" />
    </LazyLoad>
    <Title>{intro.title}</Title>
    <SubTitle>{intro.subtitle}</SubTitle>
    <HomeLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
      {intro.buttonText}
    </HomeLink>
  </IntroContainer>
)

export default Intro
