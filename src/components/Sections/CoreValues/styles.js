import styled from 'styled-components'

export const CoreValuesContainer = styled.div`
  padding: 50px 90px;
`
export const Title = styled.h2`
  margin: 0;
  font-size: 2em;
  font-weight: 600;
  text-align: center;
`
export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Card = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 250px;
  line-height: 1.5;
  margin: 20px;
  position: relative;
  &:last-child {
    margin-right: 0;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 0%;
    height: 5px;
    transition: width 0.3s ease;
  }
  &::before {
    top: 0;
    left: 0;
    background-color: #0088c6;
  }
  &::after {
    bottom: 0;
    right: 0;
    background-color: #414042;
  }
  &:hover {
    &::before,
    &::after {
      width: 100%;
    }
  }
`
export const CardTitle = styled.h3`
  margin: 0;
`
export const CardText = styled.p`
  margin-bottom: 0;
`
