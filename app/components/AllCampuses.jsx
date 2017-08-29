import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class AllCampuses extends Component {
    constructor() {
        super()
        this.state = {
            campuses: []
        }
    }

    componentDidMount() {
        axios.get('/api/campuses')
            .then(res => res.data)
            .then(campuses => this.setState({ campuses }));
    }

    render() {
        const campuses = this.state.campuses;
        return (
            <div>
                <h3>Campuses</h3>
                <span className="input-group-btn">
                    <button className="btn btn-default" type="submit">Create New Campus</button>
                </span>
                <div className="row">
                    {
                        campuses.map(campus => (
                            <div className="col-xs-4" key={campus.id}>
                                <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                                    <img src={campus.image} />
                                    <div className="caption">
                                        <h5>
                                            <span>{campus.name}</span>
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
