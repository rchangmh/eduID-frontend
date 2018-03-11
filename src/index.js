import React, { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

import Student from './Student'
import Provider from './Provider'
import Consumer from './Consumer'
import Satact from './Satact'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class App extends Component {
  state = {
    activeItem: '',
    menuItems: [
      { name: 'Student', link: 'student' },
      { name: 'High School', link: 'provider' },
      { name: 'College Board', link: 'satact' },
      { name: 'College', link: 'consumer' }
    ],
    students: {
      a: {
        name: 'Satoshi Nakamoto',
        address: '1600 Pennsylvania Ave. NW',
        email: 'satoshin@gmx.com',
        dob: '1/3/2009',
        image: 'https://i.ytimg.com/vi/W6g8ShHEXns/maxresdefault.jpg',
        scores: {
          GPA: {
            name: 'Bayside High School GPA',
            image:
              'https://static.hudl.com/users/temp/3901769_ca93ff3295814d0eb689ed38b754d944.bmp',
            value: '89.6'
          },
          SAT: {
            name: 'SAT Scores',
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/New_SAT_Logo_%28vector%29.svg/220px-New_SAT_Logo_%28vector%29.svg.png',
            value: '1490'
          }
        },
        status: 'Pending'
      }
    }
  }

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

  render() {
    return (
      <div style={styles}>
        <Menu inverted>
          {this.state.menuItems.map(({ name, link }) => (
            <Menu.Item
              key={name}
              name={name}
              active={this.state.activeItem === name}
              onClick={() => this.setState({ activeItem: name })}
              as={Link}
              to={`/${link}`}
            />
          ))}
        </Menu>
        <Switch>
          <Route
            path="/"
            render={props => <Student student={this.state.students.a} />}
          />
          <Route
            path="/student"
            render={props => <Student student={this.state.students.a} />}
          />
          <Route
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
  document.getElementById('root')
)
