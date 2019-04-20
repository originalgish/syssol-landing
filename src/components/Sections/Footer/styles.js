import styled from 'styled-components'

import envelope from './img/envelope.svg'
import phone from './img/phone.svg'
import address from './img/address.svg'

import { device } from '../../../styles/device'

const getIcon = iconName => {
  switch (iconName) {
    case 'envelope':
      return envelope
    case 'phone':
      return phone
    case 'address':
      return address

    default:
      return null
  }
}

export const FooterContainer = styled.footer`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 90px;
  padding-bottom: 10px;
  @media ${device.tablet} {
    padding-left: 10px;
    padding-right: 10px;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #414042;
  @media ${device.tablet} {
    flex-direction: column;
    padding-bottom: 10px;
    justify-content: center;
  }
`
export const Logo = styled.img`
  width: 160px;
  height: 115px;
`
const Link = styled.a`
  color: ${props => props.theme.text};
  &:hover {
    color: ${props => (props.noHover ? props.theme.text : '#0088c6')};
  }
`
export const ContactsContainer = styled.address`
  margin: 10px 40px;
  display: block;
`
export const AddressLink = styled(Link)`
  display: block;
  margin-bottom: 15px;
  text-align: left;
  position: relative;
  padding-left: 35px;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    background-image: url(${props => getIcon(props.icon)});
    background-size: contain;
    background-repeat: no-repeat;
  }
`
export const Text = styled.span`
  display: block;
  margin-bottom: 5px;
  &:last-child {
    margin-bottom: 0;
  }
`
export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  @media ${device.tablet} {
    margin-right: auto;
  }
`

export const LogoLink = styled(Link)``
export const TextLink = styled(Link)`
  margin-left: 25px;
  &:first-child: {
    margin-left: 0;
  }
  @media ${device.tablet} {
    margin-top: 5px;
  }
`
export const Copyright = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 10px;
`
