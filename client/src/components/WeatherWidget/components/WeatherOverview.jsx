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
  font-size: 20px;
  letter-spacing: 2px;
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
  font-weight: 200;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

const WeatherOverview = ({ weather }) => {
  return (
    <Container>
      <HiLow>
        H{Math.round(weather.daily.data[0].temperatureHigh)}° / L
        {Math.round(weather.daily.data[0].temperatureLow)}°
      </HiLow>

      <RealFeel>
        <Temp>&nbsp;{Math.round(weather.currently.apparentTemperature)}°</Temp>
        <Description>{weather.currently.summary}</Description>
      </RealFeel>

      <CurlyBrace>{/* &#123; */}</CurlyBrace>

      <Metrics>
        <div>
          {Math.round(weather.currently.temperature)}° <br />
          Temperature
        </div>
        <div>
          {weather.currently.humidity * 100}% <br />
          Humidity
        </div>
        <div>
          {weather.currently.windSpeed}km/h <br />
          Windspeed
        </div>
      </Metrics>
    </Container>
  )
}

export default WeatherOverview
