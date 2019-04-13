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
  justify-content: space-around;
  margin-top: 30px;
`
export const Card = styled.p`
  border-radius: 17px;
  background-color: #f5f5f5;
  padding: 20px;
  max-width: 350px;
  line-height: 1.8;
  &:last-child {
    margin-right: 0;
  }
`
