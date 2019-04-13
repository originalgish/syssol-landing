import React from 'react'

import { projects } from '../../data'

import { ProjectsContainer, ContentWrapper, Title, CardsContainer, Card } from './styles'

const Projects = () => (
  <ProjectsContainer>
    <ContentWrapper>
      <Title>{projects.title}</Title>
      <CardsContainer>
        {projects.cardInfo.map(card => (
          <Card key={card.id}>{card.text}</Card>
        ))}
      </CardsContainer>
    </ContentWrapper>
  </ProjectsContainer>
)

export default Projects
