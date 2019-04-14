import React from 'react'

import logo from '../../../img/logo.png'

import { HeaderContainer, Logo, LinksContainer, LogoLink, TextLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <LogoLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
      <Logo src={logo} alt="logo" />
    </LogoLink>
    <LinksContainer>
      <TextLink href="#about">О нас</TextLink>
      <TextLink href="#competences">Компетенции</TextLink>
      <TextLink href="#projects">Проекты</TextLink>
    </LinksContainer>
  </HeaderContainer>
)

export default Header
