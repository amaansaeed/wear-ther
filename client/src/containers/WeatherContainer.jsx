import React, { Component } from "react"
import { connect } from "react-redux"

//  actions
import { selectDay } from "../actions/rootActions"

const WeatherWidgetContainer = WrappedComponent => {
  class Wrapper extends Component {
    state = {}

    handleClick = ({ currentTarget: e }) => {
      const day = e.getAttribute("data-day")
      this.props.selectDay(day)
    }

    render() {
      return <WrappedComponent handleClick={this.handleClick} {...this.props} {...this.state} />
    }
  }

  const mapStateToProps = state => ({
    ...state
  })

  const mapDispatchToProps = dispatch => ({
    selectDay: day => {
      dispatch(selectDay(day))
    }
  })

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Wrapper)
}

export default WeatherWidgetContainer
