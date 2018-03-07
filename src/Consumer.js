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

export default class Consumer extends Component {
  state = {
    activeItem: "Applicants",
    menuItems: ["Applicants"],
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
            value: "89.4"
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

  handleAccept = () => {}
  handleDecline = () => {}

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Grid>
          <Grid.Column width={4}>
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
                      <Image floated="right" size="small" src={student.image} />
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
                      <div className="ui two buttons">
                        <Button basic color="green" onClick={this.handleAccept}>
                          Accept
                        </Button>
                        <Button basic color="red" onClick={this.handleDecline}>
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
                {this.state.colleges.map(college => (
                  <Card>
                    <Card.Content>
                      <Image floated="right" size="mini" src={college.image} />
                      <Card.Header>{college.name}</Card.Header>
                      <Card.Meta>{college.name}</Card.Meta>
                      <Card.Description>
                        <strong>
                          Your application has been submitted to {college.name}.
                        </strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green">
                          Apply
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
