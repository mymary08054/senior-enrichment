import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllStudents extends Component {
    constructor() {
        super()
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('/api/students')
            .then(res => res.data)
            .then(students => this.setState({ students }));
    }

    render() {
        const students = this.state.students;
        return (
            <div>
                <h3>Students</h3>
                <button className="btn btn-default" type="submit">New Student</button>
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
}
