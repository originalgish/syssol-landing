import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { competences } from '../../../data'

import { CompetencesContainer, Title, CardsContainer, ContentWrapper, List, ListTitle, ListItem } from './styles'

const Competences = () => (
  <ScrollableAnchor id="competences">
    <CompetencesContainer>
      <ContentWrapper>
        <Title>{competences.title}</Title>
        <CardsContainer>
          {competences.cardInfo.map(card => (
            <List key={card.id} iconName={card.icon}>
              <ListTitle> {card.listTitle}</ListTitle>
              {card.listItems.map(item => (
                <ListItem key={item.id}>{item.text}</ListItem>
              ))}
            </List>
          ))}
        </CardsContainer>
      </ContentWrapper>
    </CompetencesContainer>
  </ScrollableAnchor>
)

export default Competences
