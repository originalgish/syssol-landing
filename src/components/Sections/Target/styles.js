import styled from 'styled-components'

import { SectionContainer } from '../../../styles/SectionContainer'

import delighter1 from './img/delighter-1.svg'
import delighter2 from './img/delighter-2.svg'

export const TargetContainer = styled(SectionContainer)`
  background-color: #00d2ef20;
  background-image: url(${delighter1}), url(${delighter2});
  background-size: 88px 88px, 230px 230px;
  background-position: 0% 0%, 100% 0%;
  background-repeat: no-repeat, no-repeat;
`

export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`

export const Text = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
  text-align: center;
  max-width: 850px;
  margin: 0 auto;
  margin-top: 30px;
`
