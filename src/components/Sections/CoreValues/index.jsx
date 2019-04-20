import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { coreValues } from '../../../data'

import { CoreValuesContainer, Title, CardsContainer, Card, CardTitle, CardText } from './styles'

const CoreValues = () => (
  <ScrollableAnchor id="corevalues">
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
  </ScrollableAnchor>
)

export default CoreValues
