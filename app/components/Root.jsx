import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import AllCampuses from "./AllCampuses";
import SingleCampus from "./SingleCampus";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        <h1>HELLOOOO</h1>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/home" component={AllCampuses} />
              <Route exact path="/campuses" component={AllCampuses} />
              <Route exact path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/students" component={AllStudents} />
              <Route exact path="/students/:studentId" component={SingleStudent} />
            </ Switch>
          </div>
        </Router>
      </div>
    )
  }
}
