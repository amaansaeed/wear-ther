import React, { Component } from "react"
import styled from "styled-components"

//  Widget components
import WeatherWidget from "./WeatherWidget"

const Container = styled.div`
  width: 100vw;

  padding: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

class Widgets extends Component {
  state = {}
  render() {
    return (
      <Container>
        <WeatherWidget />
        <div />
      </Container>
    )
  }
}

export default Widgets
