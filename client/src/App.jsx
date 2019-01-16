import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import styled from "styled-components"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./App.css"

//  Containers & Components
import Header from "./components/Header"
import WeatherWidget from "./components/WeatherWidget/WeatherWidget"

//  Font Awesome Icons
import {
  faSun,
  faMoon,
  faCog,
  faSpa,
  faUmbrella,
  faCloud,
  faAllergies
} from "@fortawesome/free-solid-svg-icons"
library.add([faSun, faMoon, faCog, faSpa, faUmbrella, faCloud, faAllergies])

//  styled-components
const Wrapper = styled.div`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & > div {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Wrapper>
          <WeatherWidget />
          <div>Content</div>
        </Wrapper>
      </React.Fragment>
    )
  }
}

export default App
