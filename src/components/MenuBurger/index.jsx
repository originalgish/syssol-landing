import React, { useState, useEffect, useRef } from 'react'

import { Burger, Bar, LinksWrapper, TextLink } from './styles'

const MenuBurger = ({ headerLinksData }) => {
  const [isOpen, setMenuState] = useState(false)
  const node = useRef()

  const hideMenu = () => setMenuState(false)

  const toggleMenu = () => setMenuState(!isOpen)

  const handleClickOutside = e => {
    if (node.current.contains(e.target)) {
      return
    }
    hideMenu()
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <Burger onClick={toggleMenu} isOpen={isOpen} aria-label="menu">
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      {isOpen && (
        <LinksWrapper ref={node}>
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
