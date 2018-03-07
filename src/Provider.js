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
    student: "",
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
          onChange={event => this.setState({ student: event.target.value })}
        />
        <Input
          label="Grade"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <Button primary onClick={this.props.submitScore(this.state.value)}>
          Submit
        </Button>
      </div>
    )
  }
}
