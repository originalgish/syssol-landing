import styled, { keyframes } from 'styled-components'

import { device } from '../../styles/device'

const fadeInTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

export const Burger = styled.div`
  display: none;
  cursor: pointer;
  position: relative;
  @media ${device.tablet} {
    display: inline-block;
  }
`
export const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${props => props.theme.dark};
  border-radius: 5px;
  margin: 6px 0;
  transition: all 0.4s ease;

  &:nth-child(1) {
    transform: ${props => (props.isOpen ? 'rotate(-45deg) translate(-8px, 6px)' : 'none')};
  }
  &:nth-child(2) {
    opacity: ${props => (props.isOpen ? '0' : '1')};
  }
  &:nth-child(3) {
    transform: ${props => (props.isOpen ? 'rotate(45deg) translate(-9px, -8px)' : 'none')};
  }
`
export const LinksWrapper = styled.div`
  box-shadow: 0px 5px 15px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  padding: 1rem;
  position: absolute;
  top: 120%;
  right: 0;
  background-color: #ffffff;
  animation: ${fadeInTop} 0.3s ease;
`
export const TextLink = styled.a`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-size: 1.1em;
  display: block;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
`
