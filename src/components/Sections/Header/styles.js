import styled from 'styled-components'

export const HeaderContainer = styled.footer`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 90px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`
export const Logo = styled.img`
  width: 160px;
  height: 115px;
`
const Link = styled.a``
export const LogoLink = styled(Link)`
  margin-right: auto;
`
export const TextLink = styled(Link)`
  margin-left: 50px;
  color: ${props => props.theme.text};
  text-decoration: none;
`
