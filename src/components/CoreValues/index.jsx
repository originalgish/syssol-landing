import React from 'react'

import { coreValues } from '../../data'

import { CoreValuesContainer, Title, CardsContainer, Card } from './styles'

const CoreValues = () => (
  <CoreValuesContainer>
    <Title>{coreValues.title}</Title>
    <CardsContainer>
      {coreValues.cardInfo.map(card => (
        <Card key={card.id}>{card.text}</Card>
      ))}
    </CardsContainer>
  </CoreValuesContainer>
)

export default CoreValues
