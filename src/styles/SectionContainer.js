import styled from 'styled-components'

import { device } from './device'

export const SectionContainer = styled.div`
  padding: 50px 90px;
  @media ${device.tablet} {
    padding: 20px 10px;
  }
`
