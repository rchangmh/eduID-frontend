import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { Segment, Menu } from "semantic-ui-react"

import Student from "/src/Student"
import Provider from "/src/Provider"
import Consumer from "/src/Consumer"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

class App extends Component {
  state = { activeItem: "" }

  handleItemClick = (e, { name }) => {
    console.log(this.state)
    this.setState({
      activeItem: name
    })
  }

  render() {
    return (
      <div style={styles}>
        <Menu inverted>
          <Menu.Item
            name="Student"
            active={this.state.activeItem === "Student"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/"}
          />
          <Menu.Item
            name="High School"
            active={this.activeItem === "High School"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/provider"}
          />
          <Menu.Item
            name="SAT/ACT"
            active={this.activeItem === "SAT/ACT"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/provider"}
          />
          <Menu.Item
            name="College"
            active={this.activeItem === "College"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/consumer"}
          />
        </Menu>
        <Switch>
          <Route exact path="/" render={props => <Student />} />
          <Route path="/provider" component={Provider} />
          <Route path="/consumer" component={Consumer} />
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
