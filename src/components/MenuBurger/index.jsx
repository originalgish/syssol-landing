import React, { Component } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

import { Burger, Bar, LinksWrapper, TextLink } from './styles'

class MenuBurger extends Component {
  state = {
    isOpen: false
  }

  hideMenu = () => this.setState({ isOpen: false })

  toggleMenu = () => this.setState({ isOpen: !this.state.isOpen })

  handleClickOutside = () => {
    this.hideMenu()
  }

  render() {
    const { isOpen } = this.state
    const { headerLinksData } = this.props

    return (
      <Burger onClick={this.toggleMenu} isOpen={isOpen} aria-label="menu">
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
        <Bar isOpen={isOpen} />
        {isOpen && (
          <LinksWrapper>
            {headerLinksData.links.map(link => (
              <TextLink key={link.id} href={link.href}>
                {link.text}
              </TextLink>
            ))}
          </LinksWrapper>
        )}
      </Burger>
    )
  }
}

export default enhanceWithClickOutside(MenuBurger)
