import styled from 'styled-components'

export const FooterContainer = styled.footer`
  box-shadow: 10px 0px 15px 0 rgba(0, 0, 0, 0.1);
  padding: 0 150px;
  padding-bottom: 10px;
`
export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  padding: 10px 0;
  border-bottom: 1px solid #414042;
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
`
export const Copyright = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  margin-top: 20px;
`
