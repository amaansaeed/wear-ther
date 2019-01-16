import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//  Styled Components
const Container = styled.div`
  height: 100%;
  padding: 0px 15px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

  text-align: center;
`

const Centered = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`

const Title = styled.div`
  font-weight: 600;
`

const Icon = styled.div`
  font-size: 40px;
  margin: -10px 0px;
`

const Description = styled.div`
  font-weight: 200;
`

const SlideForecast = props => {
  return (
    <Container>
      <div>
        <Centered>
          <Title>Today</Title>
          <Icon>
            <FontAwesomeIcon icon="sun" />
          </Icon>
          <Description>Sunny</Description>
        </Centered>
      </div>

      <div>
        <Centered>
          <Title>Today</Title>
          <Icon>
            <FontAwesomeIcon icon="sun" />
          </Icon>
          <Description>Sunny</Description>
        </Centered>
      </div>

      <div>
        <Centered>
          <Title>Today</Title>
          <Icon>
            <FontAwesomeIcon icon="sun" />
          </Icon>
          <Description>Sunny</Description>
        </Centered>
      </div>

      <div>
        <Centered>
          <Title>Today</Title>
          <Icon>
            <FontAwesomeIcon icon="sun" />
          </Icon>
          <Description>Sunny</Description>
        </Centered>
      </div>

      <div>
        <Centered>
          <Title>Today</Title>
          <Icon>
            <FontAwesomeIcon icon="sun" />
          </Icon>
          <Description>Sunny</Description>
        </Centered>
      </div>
    </Container>
  )
}

export default SlideForecast
