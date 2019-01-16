import React, { Component } from "react"
import { connect } from "react-redux"

//  actions
import { setWeather } from "../actions/rootActions"

//  services
import { darkSky, locationIQ } from "../services/http"

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

    search = async () => {
      const { data } = await locationIQ.request({
        params: { q: this.state.location }
      })
      const output = data.map(el => {
        const nameArray = el.display_name.split(",")
        const name =
          nameArray.length >= 3
            ? `${nameArray[0]}, ${nameArray[1]}, ${nameArray[nameArray.length - 1]}`
            : el.display_name
        return { name: name, location: { lat: el.lat, lon: el.lon } }
      })
      this.setState({ searchOptions: output })
    }

    getWeather = async ({ target: input }) => {
      this.toggleSearchBar()
      const i = input.getAttribute("data-index")
      const { name, location } = this.state.searchOptions[i]

      const currentLocation = name.split(",")[0]

      const { data } = await darkSky.get(`/${location.lat},${location.lon}`)
      this.props.setWeather(currentLocation, data)
    }

    render() {
      return (
        <WrappedComponent
          {...this.state}
          search={this.search}
          getWeather={this.getWeather}
          toggleSearchBar={this.toggleSearchBar}
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
