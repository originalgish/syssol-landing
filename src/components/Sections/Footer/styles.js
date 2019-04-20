import styled from 'styled-components'

import { device } from '../../../styles/device'

export const FooterContainer = styled.footer`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 90px;
  padding-bottom: 10px;
  @media ${device.tablet} {
    padding: 0px 10px;
  }
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom: 1px solid #414042;
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
export const LogoLink = styled(Link)``
export const TextLink = styled(Link)`
  margin-left: 25px;
  color: ${props => props.theme.text};
  &:hover {
    color: #0088c6;
  }
  @media ${device.tablet} {
    margin-left: 0;
    margin-top: 5px;
  }
`
export const Copyright = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`
