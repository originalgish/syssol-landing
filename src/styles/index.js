import styled from 'styled-components'

import './normalize.css'
import './fonts.css'

export const AppContainer = styled.div`
  font-family: Helvetica;
  font-weight: 400;
  font-size: 1em;
  color: ${props => props.theme.text};
`
