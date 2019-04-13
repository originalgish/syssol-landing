import React from 'react'

import logo from './img/logo.png'

import { FooterContainer, ContentWrapper, Logo, LogoLink, TextLink, Copyright } from './styles'

const Footer = () => (
  <FooterContainer>
    <ContentWrapper>
      <LogoLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
        <Logo src={logo} alt="logo" />
      </LogoLink>
      <TextLink href="http://syssol.ru/license.html" target="_blank" rel="noopener noreferrer">
        Лицензии
      </TextLink>
      <TextLink href="http://syssol.ru/requisites.html" target="_blank" rel="noopener noreferrer">
        Реквизиты
      </TextLink>
      <TextLink href="http://contacts.ru/requisites.html" target="_blank" rel="noopener noreferrer">
        Контакты
      </TextLink>
    </ContentWrapper>
    <Copyright>©2008-2019 ООО "Системные решения"</Copyright>
  </FooterContainer>
)

export default Footer
