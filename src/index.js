import React from "react"
import { render } from "react-dom"
import { Switch, Route, Link, Redirect } from "react-router-dom"
import { Segment, Menu } from "semantic-ui-react"

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
}

const App = () => (
  <div style={styles}>
    <Switch>
      <Route
        exact
        path="/teas"
        render={props => <Teas submit={this.onSubmit} />}
      />
      <Route path="/vision" component={Vision} />
      <Route
        exact
        path="/review"
        render={props => <Review values={this.state.submitted} />}
      />
    </Switch>
  </div>
)

render(<App />, document.getElementById("root"))
