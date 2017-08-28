import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount () {
  }

  render() {
    const campuses = this.state.campuses;
    return (
      <div>
        <h1>HELLO</h1>
        {/* <Router>
          <Navbar />
          <Switch>
            <Route exact path="/home" component={AllCampuses} />
            <Route exact path="/campuses" component={AllCampuses} />
            <Route exact path="/campuses/campusId" component={SingleCampus} />
            <Route exact path="/students" component={AllStudents} />
            <Route exact path="/students/studentId" component={SingleStudent} />
          </ Switch>
        </Router> */}
      </div>
    )
  }
}
