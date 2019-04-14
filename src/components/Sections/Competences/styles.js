import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'

export const CompetencesContainer = styled(SectionContainer)`
  background-color: #aaaaaa25;
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
  margin-top: 30px;
  max-width: 850px;
`
export const List = styled.ul`
  box-shadow: 0 25px 34px 0 rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  font-weight: 600;
  padding: 30px;
  margin: 1em;
  max-width: 250px;
  position: relative;
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 5%;
    height: 5%;
    border-style: solid;
    transition: all 0.5s ease;
  }
  &::before {
    bottom: 0;
    left: 0;
    border-color: transparent transparent #414042 #414042;
    border-bottom-width: 3px;
    border-left-width: 3px;
  }
  &::after {
    top: 0;
    right: 0;
    border-color: #0088c6 #0088c6 transparent transparent;
    border-top-width: 3px;
    border-right-width: 3px;
  }

  &:hover {
    &::before,
    &::after {
      width: 90%;
      height: 90%;
      border-width: 2px;
    }
  }
`
export const ListItem = styled.li`
  font-weight: 400;
  margin-left: 1em;
  margin-top: 10px;
`
