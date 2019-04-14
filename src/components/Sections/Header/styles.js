import styled from 'styled-components'

import { device } from '../../../styles/device'

export const HeaderContainer = styled.header`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 90px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  @media ${device.tablet} {
    padding: 0px 10px;
  }
`
export const Logo = styled.img`
  width: 160px;
  height: 115px;
`
export const LinksContainer = styled.div`
  display: flex;
  @media ${device.tablet} {
    flex-direction: column;
  }
`
const Link = styled.a``
export const LogoLink = styled(Link)`
  margin-right: auto;
`
export const TextLink = styled(Link)`
  margin-left: 50px;
  color: ${props => props.theme.text};
  text-decoration: none;
  @media ${device.tablet} {
    margin-left: 0;
    margin-top: 5px;
  }
`
