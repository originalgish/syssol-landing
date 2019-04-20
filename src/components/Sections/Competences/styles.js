import styled from 'styled-components'

import analytics from './img/analytics.svg'
import architecture from './img/architecture.svg'
import consulting from './img/consulting.svg'
import integrations from './img/integrations.svg'
import migration from './img/migration.svg'
import support from './img/support.svg'

import { SectionContainer } from '../../../styles/SectionContainer'

const getIcon = iconName => {
  switch (iconName) {
    case 'analytics':
      return analytics
    case 'architecture':
      return architecture
    case 'consulting':
      return consulting
    case 'integrations':
      return integrations
    case 'migration':
      return migration
    case 'support':
      return support

    default:
      return null
  }
}

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
  padding: 30px 30px 30px 30px;
  margin: 1em;
  max-width: 300px;
  position: relative;
  background-image: url(${props => getIcon(props.iconName)});
  background-size: 50px;
  background-position-x: calc(100% - 15px);
  background-position-y: 15px;
  background-repeat: no-repeat;
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
export const ListTitle = styled.h3`
  margin: 0;
  margin-right: 40px;
`
export const ListItem = styled.li`
  font-weight: 400;
  margin-left: 1em;
  margin-top: 10px;
`
