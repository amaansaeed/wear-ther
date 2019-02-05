import React from "react";
import styled from "styled-components";

// containers
import Container from "../containers/WeatherContainer";

//  funtions
import { getTime } from "../services/date";

//  icons
import weatherIcons from "../components/WeatherIcons";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

//  styled components
const Wrapper = styled.div`
  margin-bottom: 40px;
  height: 560px;
  width: 380px;
  padding: 25px 30px;
  border-radius: 10px;
  /* background: rgba(255, 255, 255, 0.4); */
  background: white;

  position: relative;

  display: grid;
  grid-template-rows: max-content auto max-content;
`;

const TitleGrid = styled.div`
  padding: 0 10px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: auto max-content;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 600;
`;

const Icon = styled.div`
  text-align: right;

  & img {
    width: 80px;
    height: 80px;
  }
`;

const Hr = styled.hr`
  height: 1px;
  background: lightgrey;
  border: none;
  width: 80%;
  margin-left: 0px;
  margin-top: 10px;
`;

const HiLow = styled.div`
  font-weight: 200;
  font-size: 15px;
  letter-spacing: 3px;

  & span {
    font-weight: 400;
    padding-left: 10px;
    letter-spacing: 0px;
  }
`;

const Description = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 200;
  letter-spacing: 2px;
  margin: 50px 20px;
`;

const MetricsGrid = styled.div`
  padding: 0px 15px;
  margin-bottom: 25px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 35px;

  font-size: 13px;
`;
const HrLeft = styled.hr`
  width: 80%;
  margin-left: 0;
  margin-top: 0;

  border: none;
  height: 1px;
  background: lightgrey;
`;

const HrRight = styled.hr`
  width: 80%;
  margin-top: 0;
  margin-right: 0;

  border: none;
  height: 1px;
  background: lightgrey;
`;

const Metric = styled.div`
  /* font-size: 12px; */
  display: grid;
  grid-template-columns: auto max-content;
  margin-bottom: 4px;

  font-weight: 300;

  & > div:nth-child(1) {
    text-transform: capitalize;
  }
`;

const MetricTitle = styled.div`
  font-weight: 400px;
`;

const MetricTitleRight = styled(MetricTitle)`
  text-align: right;
`;

const Content = styled.div``;

const WeatherWidget = ({ selected, weather }) => {
  const forecast = !weather ? null : weather.daily.data[selected];
  return (
    <Wrapper>
      <TitleGrid>
        <Title>
          {parseInt(selected) === 0
            ? "Today"
            : parseInt(selected) === 1
            ? "Tomorrow"
            : days[new Date(forecast.time * 1000).getDay()]}
          <Hr />
          <HiLow>
            Hi
            <span>
              {!forecast ? null : Math.round(forecast.temperatureHigh)}
            </span>
            ° | Low
            <span>
              {!forecast ? null : Math.round(forecast.temperatureLow)}
            </span>
            °
          </HiLow>
        </Title>

        <Icon>
          <img
            src={
              !forecast
                ? weatherIcons["clear-day"]
                : weatherIcons[forecast.icon]
            }
            alt="weather-icon"
          />
        </Icon>
      </TitleGrid>

      <Description>{!weather ? "Martian Storm" : forecast.summary}</Description>

      <Content>
        <MetricsGrid>
          <div>
            <MetricTitle>Wind</MetricTitle>
            <HrLeft />
            <Metric>
              <div>Speed:</div>
              <div>{!weather ? null : Math.round(forecast.windSpeed)}km/h</div>
            </Metric>
            <Metric>
              <div>Gusts:</div>
              <div>{!weather ? null : Math.round(forecast.windGust)}km/h</div>
            </Metric>
          </div>

          <div>
            <MetricTitleRight>Day/Night</MetricTitleRight>
            <HrRight />
            <Metric>
              <div>Sunrise:</div>
              <div>{!weather ? null : getTime(forecast.sunriseTime)}</div>
            </Metric>
            <Metric>
              <div>Sunset:</div>
              <div>{!weather ? null : getTime(forecast.sunsetTime)}</div>
            </Metric>
          </div>
        </MetricsGrid>

        <MetricsGrid>
          <div>
            <MetricTitle>Air quality</MetricTitle>
            <HrLeft />
            <Metric>
              <div>Humidity:</div>
              <div>
                {!weather ? null : Math.round(forecast.humidity * 100)}%
              </div>
            </Metric>
            <Metric>
              <div>Cloud cover:</div>
              <div>
                {!weather ? null : Math.round(forecast.cloudCover * 100)}%
              </div>
            </Metric>
            <Metric>
              <div>UV Index:</div>
              <div>{!weather ? null : forecast.uvIndex}</div>
            </Metric>
          </div>

          <div>
            <MetricTitleRight>Precipitation</MetricTitleRight>
            <HrRight />
            <Metric>
              <div>{!weather ? null : forecast.precipType}:</div>
              <div>
                {!weather ? null : Math.round(forecast.precipProbability * 100)}
                %
              </div>
            </Metric>
            <Metric>
              <div>Time:</div>
              <div>
                {!weather ? null : getTime(forecast.precipIntensityMaxTime)}
              </div>
            </Metric>
          </div>
        </MetricsGrid>
      </Content>
    </Wrapper>
  );
};

export default Container(WeatherWidget);
