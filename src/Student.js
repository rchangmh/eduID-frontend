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
  Header,
  Icon
} from "semantic-ui-react"
import axios from "axios"

export default class Student extends Component {
  state = {
    activeItem: "Profile",
    created: true,
    menuItems: ["Profile", "Scores", "Colleges"],
    scores: {
      GPA: "86.6",
      SAT: "1300"
    },
    colleges: {
      UMaryland: {
        name: "University of Maryland",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png",
        status: "Not Submitted"
      },
      Cornell: {
        name: "Cornell University",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png",
        status: "Not Submitted"
      },
      CMU: {
        name: "Carnegie Mellon University",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png",
        status: "Not Submitted"
      }
    },
    fields: { Name: "", Address: "", Email: "", DOB: "" }
  }

  createId = () => {
    var myHeaders = new Headers()
    myHeaders.append("Accept", "application/json")

    fetch("http://52.170.82.100:3000/api/Student", {
      method: "GET",
      headers: myHeaders
    })
      .then(response => {
        console.log(response.status)
        return response
      })
      .catch(console.error)
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  profileStyles = {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    width: "300px"
  }

  apply = key => {
    this.props.toggleCollegeView
    this.setState(prevState => ({
      ...prevState,
      colleges: {
        ...prevState.colleges,
        UMaryland: {
          ...prevState.colleges.UMaryland,
          status: "Pending"
        }
      }
    }))
  }

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
                <Header as="h2" icon textAlign="center">
                  <Icon name="user" circular />
                  <Header.Content>{this.props.student.name}</Header.Content>
                  <Header
                    as="h4"
                    icon="address book"
                    content={this.props.student.address}
                  />
                  <Header
                    as="h4"
                    icon="at"
                    content={this.props.student.email}
                  />
                  <Header
                    as="h4"
                    icon="address book"
                    content={this.props.student.dob}
                  />
                </Header>
              </div>
            )}
            {activeItem === "Scores" && (
              <Card.Group>
                {Object.entries(this.props.student.scores).map(
                  ([key, score]) => (
                    <Card>
                      <Card.Content>
                        <Image floated="right" size="small" src={score.image} />
                        <Card.Header>{score.value}</Card.Header>
                        <Card.Meta>{score.name}</Card.Meta>
                        <Card.Description>
                          Your {score.name} has been posted.
                        </Card.Description>
                      </Card.Content>
                    </Card>
                  )
                )}
              </Card.Group>
            )}
            {activeItem === "Colleges" && (
              <Card.Group>
                {Object.entries(this.state.colleges).map(([key, college]) => (
                  <Card>
                    <Card.Content>
                      <Image floated="right" size="mini" src={college.image} />
                      <Card.Header>{college.name}</Card.Header>
                      <Card.Meta>{college.name}</Card.Meta>
                      {college.status === "Submitted" && (
                        <Card.Description>
                          <p>Your application has been submitted.</p>
                          <strong>Status: {college.status}</strong>
                        </Card.Description>
                      )}
                    </Card.Content>
                    <Card.Content extra>
                      <div>
                        {college.status === "Not Submitted" && (
                          <Button color="gray" onClick={key => this.apply()}>
                            Apply
                          </Button>
                        )}
                        {college.status === "Pending" && (
                          <Button disabled color="yellow">
                            Pending
                          </Button>
                        )}
                        {college.status === "Accepted" && (
                          <Button color="green">Accepted</Button>
                        )}
                        {college.status === "Declined" && (
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
