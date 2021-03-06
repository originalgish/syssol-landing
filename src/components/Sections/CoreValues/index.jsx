import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { coreValues } from '../../../data'

import { CoreValuesContainer, Title, CardsContainer, Card, CardTitle, CardText, Description } from './styles'

const CoreValues = () => (
  <ScrollableAnchor id="corevalues">
    <CoreValuesContainer>
      <Title>{coreValues.title}</Title>
      <CardsContainer>
        {coreValues.cardInfo.map(card => (
          <Card key={card.id}>
            <CardTitle>{card.title}</CardTitle>
            {card.texts.map((text, index) => (
              <CardText key={index}>{text}</CardText>
            ))}
          </Card>
        ))}
      </CardsContainer>
      <Description>{coreValues.description}</Description>
    </CoreValuesContainer>
  </ScrollableAnchor>
)

export default CoreValues
