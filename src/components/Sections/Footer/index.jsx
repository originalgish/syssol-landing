import React from 'react'

import logo from '../../../img/logo.png'

import {
  FooterContainer,
  ContentWrapper,
  Logo,
  ContactsContainer,
  AddressLink,
  LinksContainer,
  LogoLink,
  TextLink,
  Copyright
} from './styles'

const Footer = () => (
  <FooterContainer>
    <ContentWrapper>
      <LogoLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
        <Logo src={logo} alt="logo" />
      </LogoLink>

      <ContactsContainer>
        <AddressLink href="tel:info@syssol.ru" icon="envelope">
          +7(499)267-79-97
        </AddressLink>
        <AddressLink href="mailto:info@syssol.ru" icon="phone">
          info@syssol.ru
        </AddressLink>
        <AddressLink icon="address" noHover>
          105005, г. Москва, ул. Радио, д.23/9, стр.1
        </AddressLink>
      </ContactsContainer>

      <LinksContainer>
        <TextLink href="http://syssol.ru" target="_blank" rel="noopener noreferrer">
          Основной сайт
        </TextLink>
        <TextLink href="http://syssol.ru/license.html" target="_blank" rel="noopener noreferrer">
          Лицензии
        </TextLink>
        <TextLink href="http://syssol.ru/requisites.html" target="_blank" rel="noopener noreferrer">
          Реквизиты
        </TextLink>
      </LinksContainer>
    </ContentWrapper>
    <Copyright>©2008-2019 ООО "Системные решения"</Copyright>
  </FooterContainer>
)

export default Footer
