import React, { Component } from "react"
import { render } from "react-dom"
import { Switch, Route, Link, Redirect } from "react-router-dom"
import { Input, Menu, Grid, Segment, Button } from "semantic-ui-react"

export default class Student extends Component {
  state = { activeItem: "Profile" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  test = () => {
    return <Input placeholder="Search..." />
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
            <Menu fluid vertical tabular>
              <Menu.Item
                name="Profile"
                active={activeItem === "Profile"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Scores"
                active={activeItem === "Scores"}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name="Colleges"
                active={activeItem === "Colleges"}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            <Segment>
              {activeItem === "Profile" && (
                <div>
                  <Button 
                  <Input placeholder="Search..." />
                </div>
              )}
              {activeItem === "Scores"}
              {activeItem === "Colleges"}
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
