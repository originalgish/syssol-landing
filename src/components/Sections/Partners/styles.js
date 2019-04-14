import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'

export const PartnersContainer = styled(SectionContainer)``
export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`
export const SubTitle = styled.h3`
  font-size: 1.2em;
  font-weight: 400;
  max-width: 850px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
`
export const Card = styled.a`
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #ffffff;
  width: 350px;
  height: 100px;
  display: flex;
  align-items: center;
  margin: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: -5px 10px 15px 0 rgba(0, 0, 0, 0.1);
  }
`
export const Logo = styled.img`
  width: 200px;
  height: 100px;
  min-width: 200px;
  object-fit: contain;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`
export const Name = styled.span`
  margin: 0 10px;
  max-width: 150px;
  color: ${props => props.theme.text};
`
