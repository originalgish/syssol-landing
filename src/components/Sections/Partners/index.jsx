import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { partners } from '../../../data'

import { PartnersContainer, Title, SubTitle, CardsContainer, Card, Logo, Name } from './styles'

import bmstu from './img/bmstu_logo.png'
import ideal3 from './img/ideal3_logo.png'
import mecal from './img/mecal_logo.png'
import nord from './img/nord_logo.png'
import rostelecom from './img/rostelecom_logo.png'
import sit from './img/sit_logo.png'

const getLogo = name => {
  switch (name) {
    case 'bmstu':
      return bmstu
    case 'ideal3':
      return ideal3
    case 'mecal':
      return mecal
    case 'nord':
      return nord
    case 'rostelecom':
      return rostelecom
    case 'sit':
      return sit
    default:
      return null
  }
}

const Partners = () => (
  <ScrollableAnchor id="partners">
    <PartnersContainer>
      <Title>{partners.title}</Title>
      <SubTitle>{partners.subtitle}</SubTitle>
      <CardsContainer>
        {partners.cardInfo.map(card => (
          <Card key={card.id} href={card.href} target="_blank" rel="noopener noreferrer">
            <Logo src={getLogo(card.logo)} alt="logo" />
            <Name>{card.name}</Name>
          </Card>
        ))}
      </CardsContainer>
    </PartnersContainer>
  </ScrollableAnchor>
)

export default Partners
