import React from 'react'
import ScrollableAnchor from 'react-scrollable-anchor'

import { target } from '../../../data'

import { TargetContainer, Title, Text } from './styles'

const Target = () => (
  <ScrollableAnchor id="about">
    <TargetContainer>
      <Title>{target.title}</Title>
      <Text>{target.text}</Text>
    </TargetContainer>
  </ScrollableAnchor>
)

export default Target
