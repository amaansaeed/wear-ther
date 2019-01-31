import React, { Component } from "react"
import { connect } from "react-redux"

//  actions
import { setWeather } from "../actions/rootActions"

//  services
import http from "../services/http"

const HeaderContainer = WrappedComponent => {
  class Wrapper extends Component {
    state = {
      showSearchBar: false,
      location: "",
      searchOptions: []
    }

    toggleSearchBar = () => {
      this.setState(prevState => {
        return { showSearchBar: !prevState.showSearchBar, location: "", searchOptions: [] }
      })
    }

    handleSearchChange = ({ target: input }) => {
      this.setState({ location: input.value })
    }

    handleKeyPress = e => {
      if (e.which === 13) {
        this.searchLocation()
      }
    }

    searchLocation = async () => {
      let { location } = this.state
      let locationPrepped = location.trim().toLowerCase()

      if (locationPrepped.length < 2) {
        return
      }
      const { data } = await http.get("/location", {
        params: { q: locationPrepped }
      })

      const output = data.map(el => {
        const nameArray = el.display_name.split(",")
        const name =
          nameArray.length >= 3
            ? `${nameArray[0]}, ${nameArray[1]}, ${nameArray[nameArray.length - 1]}`
            : el.display_name
        return { name, location: { lat: el.lat, lon: el.lon } }
      })
      this.setState({ searchOptions: output })
    }

    getWeather = async ({ target: input }) => {
      this.toggleSearchBar()
      const i = input.getAttribute("data-index")
      const { name, location } = this.state.searchOptions[i]

      const currentLocation = name.split(",")[0]

      const { data } = await http.get(`/weather`, {
        params: { location: name, ...location }
      })

      this.props.setWeather(currentLocation, data)
      console.log(data)
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          search={this.searchLocation}
          getWeather={this.getWeather}
          toggleSearchBar={this.toggleSearchBar}
          handleKeyPress={this.handleKeyPress}
          handleSearchChange={this.handleSearchChange}
        />
      )
    }
  }

  const mapDispatchToProps = dispatch => ({
    setWeather: (name, weather) => {
      dispatch(setWeather(name, weather))
    }
  })

  return connect(
    null,
    mapDispatchToProps
  )(Wrapper)
}

export default HeaderContainer
