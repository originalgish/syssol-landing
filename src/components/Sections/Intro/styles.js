import styled from 'styled-components'
import objectFitImages from 'object-fit-images'

import { SectionContainer } from '../../../styles/SectionContainer'
import { device } from '../../../styles/device'

objectFitImages()

export const IntroContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 736px;
  position: relative;
  @media ${device.mobileL} {
    height: 512px;
  }
`
export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  font-family: 'object-fit: cover;';
  z-index: -1;
`
export const Title = styled.h1`
  margin: 0;
  font-size: 3.5em;
  font-weight: 600;
  margin-top: 2em;
  margin-left: -1px;
  text-align: left;
  @media ${device.tablet} {
    margin-top: 3.5em;
    font-size: 2em;
  }
`
export const SubTitle = styled.h2`
  font-weight: 400;
  line-height: 1.3;
  margin-top: 15px;
  text-align: left;
  @media ${device.tablet} {
    font-size: 1.5em;
  }
  @media ${device.laptop} {
    max-width: 400px;
  }
`
export const HomeLink = styled.a`
  display: inline-block;
  border-radius: 6px;
  background-color: #0088c6;
  color: ${props => props.theme.white};
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1e6687;
  }
`
