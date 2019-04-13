import React from 'react'

import { intro } from '../../data'

import { IntroContainer, Title, HomeLink } from './styles'

const Intro = () => (
  <IntroContainer>
    <Title>{intro.title}</Title>
    <HomeLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
      {intro.buttonText}
    </HomeLink>
  </IntroContainer>
)

export default Intro
