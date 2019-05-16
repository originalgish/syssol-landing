import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { partners } from '../../../data'

import { PartnersContainer, Title, SubTitle, CardsContainer, Card, Logo, Name } from './styles'

import rostelecom from './img/rostelecom_logo.png'
import mgts from './img/mgts_logo.png'
import mts from './img/mts_logo.png'
import skolkovo from './img/skolkovo_logo.png'
import saturn from './img/saturn_logo.png'
import bmstu from './img/bmstu_logo.png'

const getLogo = name => {
  switch (name) {
    case 'rostelecom':
      return rostelecom
    case 'mgts':
      return mgts
    case 'mts':
      return mts
    case 'skolkovo':
      return skolkovo
    case 'saturn':
      return saturn
    case 'bmstu':
      return bmstu

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
