import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

function AllCampuses(props) {
    console.log("ALLAAMADSDASASDA")
    const  {campuses} = props;
    return (
        <div>
            <h3>Campuses</h3>
            <span className="input-group-btn">
                <Link to={`/new-campus`}>
                <button className="btn btn-default" type="submit">Create New Campus</button>
                </Link>
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

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(AllCampuses));
