import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'

export const ProjectsContainer = styled(SectionContainer)`
  background-color: #ffffff;
`
export const ContentWrapper = styled.div`
  max-width: 850px;
  margin: 0 auto;
`
export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`
export const Card = styled.div`
  border-radius: 7px;
  box-shadow: -10px 10px 34px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  margin: 20px;
  padding: 20px;
  width: 300px;
  min-height: 130px;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    box-shadow: -5px 5px 15px 10px rgba(0, 0, 0, 0.1);
  }
`
