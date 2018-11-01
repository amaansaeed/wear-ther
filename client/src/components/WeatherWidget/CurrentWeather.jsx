import React from "react"
import styled from "styled-components"

//  Styled Components
const Container = styled.div`
  padding: 20px 0px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(min-content, 4);
`

const HiLow = styled.div`
  font-weight: 200;
`

const RealFeel = styled.div`
  font-size: 35px;
  text-align: center;
`

const Temp = styled.div`
  font-size: 80px;
  font-weight: 800;
  line-height: 90px;
`

const Description = styled.div`
  font-size: 30px;
  font-weight: 200;
  letter-spacing: 8px;
  margin-top: -10px;
`

const CurlyBrace = styled.div`
  writing-mode: vertical-rl;
  font-size: 300px;
  height: 130px;
`

const Metrics = styled.div`
  text-align: center;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const CurrentMetrics = props => {
  return (
    <Container>
      <HiLow>H25° / L20°</HiLow>

      <RealFeel>
        <Temp>&nbsp;25°</Temp>
        <Description>SUNNY</Description>
      </RealFeel>

      <CurlyBrace>{/* &#123; */}</CurlyBrace>

      <Metrics>
        <div>
          24° <br />
          Temperature
        </div>
        <div>
          78% <br />
          Humidity
        </div>
        <div>
          31km/h <br />
          Windspeed
        </div>
      </Metrics>
    </Container>
  )
}

export default CurrentMetrics
