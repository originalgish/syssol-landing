import React from 'react'

import { target } from '../../data'

import { TargetContainer, Title, Text } from './styles'

const Target = () => (
  <TargetContainer>
    <Title>{target.title}</Title>
    <Text>{target.text}</Text>
  </TargetContainer>
)

export default Target
