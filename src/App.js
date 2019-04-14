import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

// Components
import Header from './components/Sections/Header'
import Intro from './components/Sections/Intro'
import Target from './components/Sections/Target'
import CoreValues from './components/Sections/CoreValues'
import Competences from './components/Sections/Competences'
import Projects from './components/Sections/Projects'
import Partners from './components/Sections/Partners'
import Footer from './components/Sections/Footer'

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
