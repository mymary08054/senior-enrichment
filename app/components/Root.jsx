import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./Navbar";
import AllCampuses from "./AllCampuses";
import SingleCampus from "./SingleCampus";
import NewCampusEntry from "./NewCampusEntry";
import AllStudents from "./AllStudents";
import SingleStudent from "./SingleStudent";
import NewStudentEntry from "./NewStudentEntry";

import store, {fetchStudents, fetchCampuses} from "../store";

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount () {
    const studentsThunk = fetchStudents();
    const campusesThunk = fetchCampuses();
    store.dispatch(studentsThunk);
    store.dispatch(campusesThunk);
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
              <Route exact path="/new-campus" component={NewCampusEntry} />
              <Route exact path="/campuses/:campusId" component={SingleCampus} />
              <Route exact path="/students" component={AllStudents} />
              <Route exact path="/students/:studentId" component={SingleStudent} />
              <Route exact path="/new-student" component={NewStudentEntry} />
            </ Switch>
          </div>
        </Router>
      </div>
    )
  }
}
