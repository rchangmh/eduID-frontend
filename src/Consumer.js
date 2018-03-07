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
  Image,
  Icon
} from "semantic-ui-react"

export default class Consumer extends Component {
  state = {
    activeItem: "Applicants",
    menuItems: ["Applicants"],
    status: "pending",
    students: [
      {
        name: "Satoshi Nakamoto",
        address: "1600 Pennsylvania Ave. NW",
        email: "satoshin@gmx.com",
        dob: "1/3/2009",
        image: "https://i.ytimg.com/vi/W6g8ShHEXns/maxresdefault.jpg",
        scores: [
          {
            name: "High School GPA",
            value: "89.6"
          },
          {
            name: "SAT Scores",
            value: 1490
          }
        ],
        status: "Pending"
      }
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

  createId = () => {
    this.setState({})
  }

  handleAccept = () => {
    this.setState({ status: "accepted" })
  }
  handleDecline = () => {
    this.setState({ status: "declined" })
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid>
          <Grid.Column width={3}>
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
            {true && (
              <Card.Group>
                {this.state.students.map(student => (
                  <Card>
                    <Card.Content>
                      <Icon
                        name="user"
                        size="large"
                        circular
                        style={{ margin: "10px" }}
                      />

                      <Card.Header>{student.name}</Card.Header>
                      <Card.Meta>{student.id}</Card.Meta>
                      <Card.Description>
                        <p>
                          <strong>Address:</strong> {student.address}
                        </p>
                        <p>
                          <strong>Email:</strong> {student.email}
                        </p>
                        <p>
                          <strong>DOB:</strong> {student.dob}
                        </p>
                        {student.scores.map(score => (
                          <p>
                            <strong>{score.name}: </strong>
                            {score.value}
                          </p>
                        ))}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div>
                        {this.state.status === "pending" && (
                          <div>
                            <Button color="green" onClick={this.handleAccept}>
                              Accept
                            </Button>
                            <Button color="red" onClick={this.handleDecline}>
                              Decline
                            </Button>
                          </div>
                        )}
                        {this.state.status === "accepted" && (
                          <Button disabled color="green">
                            Accepted
                          </Button>
                        )}
                        {this.state.status === "declined" && (
                          <Button disabled color="red">
                            Declined
                          </Button>
                        )}
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
