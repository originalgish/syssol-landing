import React from 'react'

import { coreValues } from '../../data'

import { CoreValuesContainer, Title, CardsContainer, Card, CardTitle, CardText } from './styles'

const CoreValues = () => (
  <CoreValuesContainer>
    <Title>{coreValues.title}</Title>
    <CardsContainer>
      {coreValues.cardInfo.map(card => (
        <Card key={card.id}>
          <CardTitle>{card.title}</CardTitle>
          <CardText>{card.text}</CardText>
        </Card>
      ))}
    </CardsContainer>
  </CoreValuesContainer>
)

export default CoreValues
