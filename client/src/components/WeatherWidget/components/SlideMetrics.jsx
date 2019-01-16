import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//  Styled Components
const Container = styled.div`
  height: 100%;
  padding: 0px 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const Centered = styled.div`
  position: relative;
  top: 50%;
  transform: translate(0%, -50%);
`

const SlideMetrics = ({ weather }) => {
  return (
    <Container>
      <div>
        <Centered>
          <div>
            <FontAwesomeIcon icon="umbrella" />
            {weather.precipProbability * 100}%
          </div>
          <div>
            <FontAwesomeIcon icon="cloud" />
            {weather.cloudCover * 100}%
          </div>
        </Centered>
      </div>

      <div>
        <Centered>
          <div>
            <FontAwesomeIcon icon="sun" />
            {weather.uvIndex}
          </div>
          <div>
            <FontAwesomeIcon icon="spa" />
            Pollen
          </div>
          <div>
            <FontAwesomeIcon icon="allergies" />
            Allergies
          </div>
        </Centered>
      </div>

      <div>
        <Centered>
          <div>
            <FontAwesomeIcon icon="sun" />
            {new Date(weather.sunriseTime).getHours()}
          </div>
          <div>
            <FontAwesomeIcon icon="moon" />
            {new Date(weather.sunsetTime).getHours()}
          </div>
        </Centered>
      </div>
    </Container>
  )
}

export default SlideMetrics
