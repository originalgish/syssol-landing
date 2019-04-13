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
  margin-top: 5em;
  text-align: center;
`

export const HomeLink = styled.a`
  display: inline-block;
  border-radius: 6px;
  background-image: linear-gradient(to bottom, #00d2ef, #0093c4);
  color: ${props => props.theme.white};
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 20px;
  margin-top: 30px;
`
