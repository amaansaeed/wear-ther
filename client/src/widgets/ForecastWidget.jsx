import React from "react"
import styled from "styled-components"

// containers
import Container from "../containers/WeatherContainer"

//  icons
import weatherIcons from "../components/WeatherIcons"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

//  styled components
const Wrapper = styled.div`
  margin-bottom: 40px;
  height: 560px;
  width: 380px;
  padding: 25px 30px;
  border-radius: 10px;
  /* background: rgba(255, 255, 255, 0.4); */
  background: white;
  overflow: hidden;

  position: relative;

  display: grid;
  grid-template-rows: max-content 180px max-content auto;
`

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 25px;

  & hr {
    height: 1px;
    background: lightgrey;
    border: none;
    width: 70%;
    margin-left: 0%;
  }
`

const Current = styled.div`
  position: relative;
`

const Icon = styled.div`
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15;

  & img {
    width: 180px;
    height: 180px;
  }
`

const RealFeel = styled.div`
  text-align: center;
`

const Temp = styled.div`
  font-size: 40px;
  font-weight: 700;

  & > span {
    font-weight: 200;
  }
`

const Description = styled.div`
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 8px;
  margin-top: -10px;
`

const CurrentWeather = styled.div`
  width: max-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const SectionHeading = styled.div`
  margin-top: 25px;
  font-size: 16px;
  font-weight: 300;

  & hr {
    height: 1px;
    background: lightgrey;
    border: none;
    width: 70%;
    margin-left: 0px;
    margin-top: 0px;
  }
`

const Content = styled.div`
  font-size: 13px;
  font-weight: 300;
  /* height: fit-content; */

  overflow: scroll;

  /* display: grid;
  grid-template-rows: 1fr; */
`

const Day = styled.div`
  display: grid;
  grid-template-columns: auto max-content max-content;
  margin-bottom: 7px;
  padding: 4px 20px;
  border-radius: 2px;
  cursor: pointer;

  & img {
    width: 22px;
    height: 22px;
  }

  &:hover {
    background: rgba(24, 154, 205, 0.3);
  }
`

const HiLo = styled.div`
  display: grid;
  grid-template-columns: 50px max-content 50px;
  text-align: center;
  margin-right: 15px;
`

const ForecastWidget = ({ currentLocation, weather, handleClick }) => {
  return (
    <Wrapper>
      <Title>
        {!weather ? null : currentLocation}
        <hr />
      </Title>

      <Current>
        <Icon>
          <img
            src={!weather ? weatherIcons["clear-day"] : weatherIcons[weather.currently.icon]}
            alt="weather-icon"
          />
        </Icon>
        <CurrentWeather>
          <RealFeel>
            <Temp>
              &nbsp;{!weather ? -73 : Math.round(weather.currently.apparentTemperature)}
              <span>°</span>
            </Temp>
            <Description>{!weather ? "Martian Storm" : weather.currently.summary}</Description>
          </RealFeel>
        </CurrentWeather>
      </Current>

      <SectionHeading>
        Forecast
        <hr />
      </SectionHeading>
      <Content>
        {!weather
          ? null
          : weather.daily.data.map((day, i) => (
              <Day key={i} data-day={i} onClick={handleClick}>
                <div>
                  {i === 0 ? "Today" : null}
                  {i === 1 ? "Tomorrow" : null}
                  {i > 1 ? days[new Date(day.time * 1000).getDay()] : null}
                </div>
                {/* <div>{day.time}</div> */}
                <div>
                  <HiLo>
                    <div>{day.temperatureHigh.toFixed(0)}°</div>
                    <div>|</div>
                    <div>{day.temperatureLow.toFixed(0)}°</div>
                  </HiLo>
                </div>
                <div>
                  <img src={weatherIcons[day.icon]} alt="weather-icon" />
                </div>
              </Day>
            ))}
      </Content>
    </Wrapper>
  )
}

export default Container(ForecastWidget)
