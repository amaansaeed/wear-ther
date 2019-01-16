import React, { Component } from "react"
import { connect } from "react-redux"

const WeatherWidgetContainer = WrappedComponent => {
  class Wrapper extends Component {
    state = {}
    render() {
      return <WrappedComponent {...this.props} {...this.state} />
    }
  }

  const mapStateToProps = state => ({
    currentLocation: state.currentLocation,
    weather: state.weather
  })

  return connect(mapStateToProps)(Wrapper)
}

export default WeatherWidgetContainer
