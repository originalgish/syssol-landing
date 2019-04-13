import styled from 'styled-components'

import introBG from './img/intro-bg.jpg'

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 736px;
  background-image: url(${introBG});
  background-size: cover;
  background-repeat: no-repeat;
`

export const Title = styled.h1`
  margin: 0;
  font-size: 2.25em;
  font-weight: 600;
  margin-top: 4em;
  text-align: center;
`

export const HomeLink = styled.a`
  display: inline-block;
  border-radius: 6px;
  background-color: #0088c6;
  color: ${props => props.theme.white};
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1e6687;
  }
`