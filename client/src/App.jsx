import React, { Component } from "react"
import styled from "styled-components"
import "./App.css"

//  Containers & Components
import Header from "./components/Header"
import WeatherWidget from "./widgets/WeatherWidget"
import ForecastWidget from "./widgets/ForecastWidget"
import BitmojiWidget from "./widgets/BitmojiWidget"

//  styled-components
const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr max-content 1fr;

  & > div {
    position: relative;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          <ForecastWidget />
          <WeatherWidget />
          <BitmojiWidget />
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
