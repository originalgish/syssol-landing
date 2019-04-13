import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import Intro from './components/Intro'
import Target from './components/Target'
import CoreValues from './components/CoreValues'
import Competences from './components/Competences'
import Projects from './components/Projects'
import Partners from './components/Partners'

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
          <CoreValues />
          <Competences />
          <Projects />
          <Partners />
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
