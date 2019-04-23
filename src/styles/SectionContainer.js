import styled from 'styled-components'

import { device } from './device'

export const SectionContainer = styled.div`
  padding: 50px 90px;
  @media ${device.mobileL} {
    padding: 20px 30px;
  }
`
