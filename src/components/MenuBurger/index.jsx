import React, { useState } from 'react'
import enhanceWithClickOutside from 'react-click-outside'

import { Burger, Bar, LinksWrapper, TextLink } from './styles'

const MenuBurger = ({ headerLinksData }) => {
  const [isOpen, setMenuState] = useState(false)

  const hideMenu = () => setMenuState(false)

  const toggleMenu = () => setMenuState(!isOpen)

  const handleClickOutside = () => {
    hideMenu()
  }

  return (
    <Burger onClick={toggleMenu} isOpen={isOpen} aria-label="menu">
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

export default enhanceWithClickOutside(MenuBurger)
