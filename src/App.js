import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import Header from './components/Header'
import Intro from './components/Intro'
import Target from './components/Target'
import CoreValues from './components/CoreValues'
import Competences from './components/Competences'
import Projects from './components/Projects'
import Partners from './components/Partners'
import Footer from './components/Footer'

// Styles
import { AppContainer } from './styles'
import theme from './styles/theme'
class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Header />
          <Intro />
          <Target />
          <CoreValues />
          <Competences />
          <Projects />
          <Partners />
          <Footer />
        </AppContainer>
      </ThemeProvider>
    )
  }
}

export default App
