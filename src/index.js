import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { Segment, Menu } from "semantic-ui-react"

import View from "/src/View"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

class App extends Component {
  state = { activeItem: "Profile" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    return (
      <div style={styles}>
        <Menu inverted>
          <Menu.Item
            name="Student"
            active={this.activeItem === "Student"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/student"}
          />
          <Menu.Item
            name="High School"
            active={this.activeItem === "High School"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/hs"}
          />
          <Menu.Item
            name="College"
            active={this.activeItem === "College"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/college"}
          />
        </Menu>
        <View />
        <Switch>
          <Route
            exact
            path="/view"
            render={props => <View submit={this.onSubmit} />}
          />
          <Route path="/view" component={View} />
        </Switch>
      </div>
    )
  }
}

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
)
