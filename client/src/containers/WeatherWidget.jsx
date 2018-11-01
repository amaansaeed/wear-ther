import React from "react"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

//  Components
import CurrentMetrics from "../components/WeatherWidget/CurrentWeather"
import WeatherCarousel from "../components/WeatherWidget/WeatherCarousel"

//  Styled Components
const Container = styled.div`
  height: min-content;
  width: 500px;
  padding: 25px 40px;
  border-radius: 10px;
  background: white;

  position: relative;

  display: grid;
  grid-template-rows: repeat(min-content, 3);
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
  z-index: 99;
  transition: all 0.5s ease-in;
`

//  SECTION: Title
const Title = styled.div`
  width: 100%;
`
const Location = styled.h1`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 0px;
`

const Hr = styled.hr`
  height: 1px;
  background: lightgrey;
  border: none;
  width: 50%;
  margin-left: 0px;
  margin-top: 25px;
`

const WeatherWidget = props => {
  return (
    <Container>
      <Settings>
        <FontAwesomeIcon icon="cog" />
      </Settings>

      <Title>
        <Location>Karachi</Location>
        <Hr />
      </Title>

      <CurrentMetrics />

      <WeatherCarousel />
    </Container>
  )
}

export default WeatherWidget
