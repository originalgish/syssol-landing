import React from 'react'

import { competences } from '../../data'

import { CompetencesContainer, Title, CardsContainer, ContentWrapper, List, ListItem } from './styles'

const Competences = () => (
  <CompetencesContainer>
    <ContentWrapper>
      <Title>{competences.title}</Title>
      <CardsContainer>
        {competences.cardInfo.map(card => (
          <List key={card.id}>
            {card.listTitle}
            {card.listItems.map(item => (
              <ListItem key={item.id}>{item.text}</ListItem>
            ))}
          </List>
        ))}
      </CardsContainer>
    </ContentWrapper>
  </CompetencesContainer>
)

export default Competences
