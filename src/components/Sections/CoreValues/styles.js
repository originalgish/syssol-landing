import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'

export const CoreValuesContainer = styled(SectionContainer)``
export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`
export const Description = styled.h3`
  font-weight: 400;
  max-width: 900px;
  margin: 20px auto 0 auto;
  line-height: 1.3;
  text-align: center;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Card = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 250px;
  line-height: 1.5;
  margin: 20px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 5px;
    transition: width 0.3s ease;
  }
  &::before {
    top: 0;
    left: 0;
    background-color: #0088c6;
  }
  &::after {
    bottom: 0;
    right: 0;
    background-color: #414042;
  }
  &:hover {
    &::before,
    &::after {
      width: 100%;
    }
  }
`
export const CardTitle = styled.h4`
  margin: 0;
  line-height: 1.3;
`
export const CardText = styled.p`
  margin-bottom: 0;
`
