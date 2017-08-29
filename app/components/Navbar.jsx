import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render () {
    return (
      <nav>
        <span className="input-group-btn">
          <Link to="/campuses"><button className="btn btn-default" >Campus</button></Link>
        </span>
        <span className="input-group-btn">
          <Link to="/students"> <button className="btn btn-default" >Students</button></Link>
        </span>
      </nav>
    );
  }
}
