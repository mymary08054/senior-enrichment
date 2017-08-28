import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudent} />
            <Route exact path="/students/studentId" component={SingleStudent} />
          </ Switch>
        </div>
      </Router>
    )
  }
}
