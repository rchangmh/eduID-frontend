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
    created: false,
    menuItems: ["Profile", "Scores", "Colleges"],
    scores: {
      GPA: "86.6",
      SAT: "1300"
    },
    colleges: [
      {
        name: "University of Maryland",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/University_of_Maryland_seal.svg/1200px-University_of_Maryland_seal.svg.png",
        status: "Not Submitted"
      },
      {
        name: "Cornell University",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/1200px-Cornell_University_seal.svg.png",
        status: "Not Submitted"
      },
      {
        name: "Carnegie Mellon University",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/b/bb/Carnegie_Mellon_University_seal.svg/1200px-Carnegie_Mellon_University_seal.svg.png",
        status: "Not Submitted"
      }
    ],
    fields: { Name: "", Address: "", Email: "", DOB: "" }
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

  createId = () => {}

  apply = e => {
    console.log(e.target)
    this.setState(prevState => ({
      ...prevState,
      colleges: {
        ...prevState.colleges
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
                {this.state.created ? (
                  <div>
                    <div>
                      {Object.keys(this.state.fields).map(field => (
                        <Input
                          size="medium"
                          label={[field]}
                          style={{ padding: "10px" }}
                          placeholder={field}
                          addonBefore={field}
                          onChange={event =>
                            this.setState({
                              fields: {
                                ...this.state.fields,
                                [field]: event.target.value
                              }
                            })
                          }
                        />
                      ))}
                    </div>
                    <Button color="purple">Submit</Button>
                  </div>
                ) : (
                  <div>
                    <Button onClick={this.createId} color="green">
                      Create
                    </Button>
                  </div>
                )}
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
                {this.state.colleges.map(college => (
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
                          <Button basic color="gray" onClick={this.apply}>
                            Apply
                          </Button>
                        )}
                        {college.status === "Pending" && (
                          <Button basic color="yellow">
                            Apply
                          </Button>
                        )}
                        {college.status === "Accepted" && (
                          <Button basic color="green">
                            Apply
                          </Button>
                        )}
                        {college.status === "Declined" && (
                          <Button basic color="red">
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
