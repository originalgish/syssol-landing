import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import Intro from './components/Intro'
import Target from './components/Target'

// Styles
import { AppContainer } from './styles'
import theme from './styles/theme'
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Intro />
          <Target />
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
