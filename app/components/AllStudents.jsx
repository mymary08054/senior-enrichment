import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import {removeStudent} from '../store';

function AllStudents(props) {
    const { students, campuses, removeStudent } = props;

    function getThatCampusById(id) {
        for (let i = 0; i < campuses.length; i++) {
            if (campuses[i].id == id) return campuses[i].name;
        }
    }

    return (
        <div>
            <h3>Students</h3>
            <Link to='/new-student'>
                <button className="btn btn-default" type="submit">New Student</button>
            </Link>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Campus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students.map(student => (
                                <tr key={student.id}>
                                    <td>
                                        <div>
                                            <span>{student.id}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <Link to={`/students/${student.id}`}>
                                            <div >
                                                <span>{student.name}</span>
                                            </div>
                                        </Link>
                                    </td>
                                    <td>
                                        <div>
                                            <span> {getThatCampusById(student.campusId)}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <button
                                                className="btn btn-default btn-xs"
                                                onClick={() => removeStudent(student.id)}>
                                                x
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    )
}

const mapStateToProps = function (state) {
    return {
        students: state.students,
        campuses: state.campuses
    };
};

const mapDispatch = { removeStudent };

export default withRouter(connect(mapStateToProps, mapDispatch)(AllStudents));