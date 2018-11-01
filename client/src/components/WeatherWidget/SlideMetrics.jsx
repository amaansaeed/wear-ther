import React from "react"
import styled from "styled-components"

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

const SlideMetrics = props => {
  return (
    <Container>
      <div>
        <Centered>
          <div>Rain</div>
          <div>Cloud Cover</div>
        </Centered>
      </div>

      <div>
        <Centered>
          <div>UV</div>
          <div>Pollen</div>
          <div>Allergies</div>
        </Centered>
      </div>

      <div>
        <Centered>
          <div>Sunrise</div>
          <div>Sunset</div>
        </Centered>
      </div>
    </Container>
  )
}

export default SlideMetrics
