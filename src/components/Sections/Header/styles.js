import styled from 'styled-components'

import { device } from '../../../styles/device'

export const HeaderContainer = styled.header`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  @media ${device.tablet} {
    padding: 0px 50px;
  }
  z-index: 10;
`
export const Logo = styled.img`
  width: 128px;
  height: 92px;
`
export const LinksContainer = styled.div`
  display: flex;
  @media ${device.tablet} {
    display: none;
  }
`
const Link = styled.a``
export const LogoLink = styled(Link)``
export const TextLink = styled(Link)`
  margin-left: 25px;
  color: ${props => props.theme.text};
  text-decoration: none;
  white-space: nowrap;
  &:hover {
    color: #0088c6;
  }
`
