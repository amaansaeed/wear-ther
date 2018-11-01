import React, { Component } from "react"
import styled from "styled-components"

//  Components
import HeaderBar from "../components/Header/HeaderBar"
import SearchBar from "../components/Header/SearchBar"

//  Styled Components
const Container = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
`

class Header extends Component {
  state = {
    showSearchBar: false,
    location: ""
  }

  toggleSearchBar = () => {
    this.setState(prevState => {
      return { showSearchBar: !prevState.showSearchBar }
    })
  }

  handleSearchChange = evt => {
    this.setState({ location: evt.target.value })
  }

  render() {
    return (
      <Container>
        <HeaderBar handleClick={this.toggleSearchBar} />
        <SearchBar
          location={this.state.location}
          showSearchBar={this.state.showSearchBar}
          handleChange={this.handleSearchChange}
        />
      </Container>
    )
  }
}

export default Header
