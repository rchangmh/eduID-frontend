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

export default class Student extends Component {
  state = {
    activeItem: "Profile",
    created: true,
    menuItems: ["Profile", "Scores", "Colleges"],
    scores: {
      GPA: "86.6",
      SAT: "1300"
    },
    colleges: [
      "University of Maryland",
      "Cornell University",
      "Carnegie Mellon University"
    ]
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  profileStyles = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    width: "300px"
  }

  scoresStyle = {}

  collegeStyle = {}

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid>
          <Grid.Column width={this.state.menuItems.length}>
            <Menu fluid vertical tabular>
              {this.state.menuItems.map(menuItem => (
                <Menu.Item
                  name={menuItem}
                  active={activeItem === menuItem}
                  onClick={this.handleItemClick}
                />
              ))}
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12}>
            {activeItem === "Profile" && (
              <div style={this.profileStyles}>
                <Button color="green">Create</Button>
                <Input label="Name" placeholder="Full Name" />
                <Input label="Address" placeholder="Address" />
                <Input label="Email" placeholder="Email Address" />
                <Input label="DOB" placeholder="Date of Birth" />
                <Button color="purple">Submit</Button>
              </div>
            )}
            {activeItem === "Scores" && (
              <Card.Group>
                {Object.entries(this.state.scores).map(([key, value]) => (
                  <Card>
                    <Card.Content>
                      {key === "SAT" && (
                        <Image
                          floated="right"
                          size="small"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_SAT_Logo_%28vector%29.svg/220px-New_SAT_Logo_%28vector%29.svg.png"
                        />
                      )}
                      {key === "GPA" && (
                        <Image
                          floated="right"
                          size="small"
                          src="https://static.hudl.com/users/temp/3901769_ca93ff3295814d0eb689ed38b754d944.bmp"
                        />
                      )}
                      <Card.Header>{value}</Card.Header>
                      <Card.Meta>{key}</Card.Meta>
                      <Card.Description>
                        <strong>Your {key} has been added.</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            )}
            {activeItem === "Colleges" && (
              <Card.Group>
                {this.state.colleges.map(collegeName => (
                  <Card>
                    <Card.Content>
                      <Image
                        floated="right"
                        size="mini"
                        src="/assets/images/avatar/large/steve.jpg"
                      />
                      <Card.Header>{collegeName}</Card.Header>
                      <Card.Meta>{collegeName}</Card.Meta>
                      <Card.Description>
                        <strong>
                          Your application has been submitted to {collegeName}.
                        </strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Approve
                        </Button>
                        <Button basic color="red">
                          Decline
                        </Button>
                      </div>
                    </Card.Content>
                  </Card>
                ))}
              </Card.Group>
            )}
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
