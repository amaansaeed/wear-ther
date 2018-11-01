import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { library } from "@fortawesome/fontawesome-svg-core"
import "./App.css"

//  Containers & Components
import Header from "./containers/Header"
import Widgets from "./containers/Widgets"

//  Font Awesome Icons
import { faSun, faCog } from "@fortawesome/free-solid-svg-icons"
library.add([faSun, faCog])

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Widgets />
      </React.Fragment>
    )
  }
}

export default App
