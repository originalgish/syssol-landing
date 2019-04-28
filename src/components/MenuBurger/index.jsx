import React, { useState, useRef } from 'react'

import useOnClickOutside from '../../utils/useOnClickOutside'

import { Burger, Bar, LinksWrapper, TextLink } from './styles'

const MenuBurger = ({ headerLinksData }) => {
  const [isOpen, setMenuState] = useState(false)
  const node = useRef()

  const hideMenu = () => setMenuState(false)

  const toggleMenu = () => setMenuState(!isOpen)

  useOnClickOutside(node, hideMenu)

  return (
    <Burger ref={node} onClick={toggleMenu} isOpen={isOpen} aria-label="menu">
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

export default MenuBurger
