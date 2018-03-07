import React, { Component } from "react"
import { render } from "react-dom"
import { Switch, Route, Link, Redirect } from "react-router-dom"
import {
  Input,
  Menu,
  Grid,
  Segment,
  Button,
  Card,
  Image
} from "semantic-ui-react"

export default class Provider extends Component {
  state = {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_SAT_Logo_%28vector%29.svg/220px-New_SAT_Logo_%28vector%29.svg.png",
    name: "High School GPA",
    value: ""
  }

  style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    width: "300px",
    margin: "50px"
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div style={this.style}>
        <Input
          label="Student"
          placeholder="student_key"
          onChange={this.handleChange}
        />
        <Input
          label="Grade"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button primary onClick={this.props.submitScore}>
          Submit
        </Button>
      </div>
    )
  }
}
