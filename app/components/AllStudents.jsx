import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function AllStudents(props) {
    const {students} = props;
    return (
        <div>
            <h3>Students</h3>
            <Link to='/new-student'>
            <button className="btn btn-default" type="submit">New Student</button>
            </Link>
            <div className="row">
                {
                    students.map(student => (
                        <div className="col-xs-4" key={student.id}>
                            <Link className="thumbnail" to={`/students/${student.id}`}>
                                <img src={student.imageUrl} />
                                <div className="caption">
                                    <h5>
                                        <span>{student.name}</span>
                                    </h5>
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
  return {
    students: state.students
  };
};

export default withRouter(connect(mapStateToProps)(AllStudents));