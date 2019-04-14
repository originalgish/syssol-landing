import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { projects } from '../../../data'

import { ProjectsContainer, ContentWrapper, Title, CardsContainer, Card } from './styles'

const Projects = () => (
  <ScrollableAnchor id="projects">
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
  </ScrollableAnchor>
)

export default Projects
