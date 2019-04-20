import React from 'react'

import { headerLinksData } from '../../../data'
import MenuBurger from '../../MenuBurger'

import logo from '../../../img/logo.png'
import { HeaderContainer, Logo, LinksContainer, LogoLink, TextLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <LogoLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
      <Logo src={logo} alt="logo" />
    </LogoLink>
    <LinksContainer>
      {headerLinksData.links.map(link => (
        <TextLink key={link.id} href={link.href}>
          {link.text}
        </TextLink>
      ))}
    </LinksContainer>
    <MenuBurger headerLinksData={headerLinksData} />
  </HeaderContainer>
)

export default Header
