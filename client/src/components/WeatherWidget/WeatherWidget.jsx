import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// containers
import WeatherWidgetContainer from "../../containers/WeatherWidgetContainer"

//  sub components
import WeatherOverview from "./components/WeatherOverview"
import WeatherCarousel from "./components/WeatherCarousel"

//  styled components
const Wrapper = styled.div`
  width: 500px;
  padding: 25px 40px;
  border-radius: 10px;
  background: white;

  position: relative;

  display: grid;
  grid-template-rows: repeat(3, min-content);
`

const Settings = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  background: #525252;
  color: white;
  font-size: 35px;
  text-align: right;
  padding-right: 13px;
  padding-top: 3px;
  width: 65px;
  height: 65px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 7px;
  /* z-index: 99; */
  transition: all 0.5s ease-in;
`
const Title = styled.div`
  font-size: 2em;
  font-weight: 700;
`
const Hr = styled.hr`
  height: 1px;
  background: lightgrey;
  border: none;
  width: 50%;
  margin-left: 0px;
  margin-top: 25px;
`

const WeatherWidget = ({ currentLocation, weather }) => {
  return (
    <Wrapper>
      <Settings>
        <FontAwesomeIcon icon="cog" />
      </Settings>

      <Title>
        {currentLocation}
        <Hr />
      </Title>

      <WeatherOverview weather={weather} />

      <WeatherCarousel weather={weather.daily.data[0]} />
    </Wrapper>
  )
}

export default WeatherWidgetContainer(WeatherWidget)
