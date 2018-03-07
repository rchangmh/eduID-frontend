import React, { Component } from "react"
import { render } from "react-dom"
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom"
import { Segment, Menu } from "semantic-ui-react"

import Student from "/src/Student"
import Provider from "/src/Provider"
import Consumer from "/src/Consumer"
import Satact from "/src/Satact"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

class App extends Component {
  state = {
    activeItem: "",
    collegeView: true,
    students: {
      "0001": {
        name: "Ronald Chang",
        address: "1600 Pennsylvania Ave. NW",
        email: "rchangmh@gmail.com",
        dob: "10/13/1990",
        image: "https://i.ytimg.com/vi/W6g8ShHEXns/maxresdefault.jpg",
        scores: [
          {
            name: "High School GPA",
            value: "74"
          },
          {
            name: "SAT Scores",
            value: 1400
          }
        ],
        status: "Pending"
      }
    }
  }

  handleItemClick = (e, { name }) => {
    console.log(this.state)
    this.setState({
      activeItem: name
    })
  }

  toggleCollegeView = () => {
    this.setState({ collegeView: !this.state.collegeView })
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
            to={"/satact"}
          />
          <Menu.Item
            name="University of Maryland"
            active={this.activeItem === "College"}
            onClick={this.handleItemClick}
            as={Link}
            to={"/consumer"}
          />
        </Menu>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Student
                collegeView={this.state.collegeView}
                toggleCollegeView={this.toggleCollegeView}
              />
            )}
          />
          <Route
            exact
            path="/provider"
            render={props => <Provider submitScore={this.submitScore} />}
          />
          <Route path="/consumer" component={Consumer} />
          <Route path="/satact" component={Satact} />
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
