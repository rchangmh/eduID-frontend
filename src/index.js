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
      a: {
        name: "Satoshi Nakamoto",
        address: "1600 Pennsylvania Ave. NW",
        email: "satoshin@gmx.com",
        dob: "1/3/2009",
        image: "https://i.ytimg.com/vi/W6g8ShHEXns/maxresdefault.jpg",
        scores: {
          GPA: {
            name: "Bayside High School GPA",
            image:
              "https://static.hudl.com/users/temp/3901769_ca93ff3295814d0eb689ed38b754d944.bmp",
            value: "89.6"
          },
          SAT: {
            name: "SAT Scores",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_SAT_Logo_%28vector%29.svg/220px-New_SAT_Logo_%28vector%29.svg.png",
            value: "1490"
          }
        },
        status: "Pending"
      }
    }
  }

  submitHSScore = () => {}

  // submitHSScore = newValue => {
  //   this.setState(prevState => ({
  //     ...prevState,
  //     students: {
  //       ...prevState.students,
  //       a: {
  //         ...prevState.students.a,
  //         scores: {
  //           ...prevState.students.a.scores,
  //           GPA: {
  //             ...prevState.students.a.scores.GPA,
  //             value: newValue
  //           }
  //         }
  //       }
  //     }
  //   }))
  // }

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
                student={this.state.students.a}
              />
            )}
          />
          <Route
            exact
            path="/provider"
            render={props => <Provider submitScore={this.submitHSScore} />}
          />
          <Route
            path="/consumer"
            render={props => <Consumer students={this.state.students.a} />}
          />
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
