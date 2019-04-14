import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'
import { device } from '../../../styles/device'

import introBG from './img/intro-bg.jpg'

export const IntroContainer = styled(SectionContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 736px;
  background-image: url(${introBG});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media ${device.mobileL} {
    /* background-image: none; */
    height: 512px;
  }
`
export const Title = styled.h1`
  margin: 0;
  font-size: 3.5em;
  font-weight: 600;
  line-height: 1;
  margin-top: 0.5em;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 2em;
  }
`
export const SubTitle = styled.h2`
  font-weight: 400;
  line-height: 1;
  margin-top: 10px;
  text-align: center;
  @media ${device.mobileL} {
    font-size: 1.5em;
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
  margin-top: 15px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1e6687;
  }
`
