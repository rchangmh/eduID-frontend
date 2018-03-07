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

export default class Satact extends Component {
  style = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    width: "300px",
    margin: "50px"
  }

  render() {
    return (
      <div style={this.style}>
        <Input label="Student" placeholder="student_key" />
        <Input label="Grade" placeholder="" />
        <Button primary>Submit</Button>
      </div>
    )
  }
}
