import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';
import { withRouter, NavLink } from 'react-router-dom';

function SingleCampus(props) {

  const { campus, students } = props;

  return (
    <div>
    <h1> {campus.map((campu) => { return campu.name })} </h1>
    <ul>
      {
        students.map((student) => {
          return (
            <li key={student.id}>{student.name}</li>
          )
        })
      }
    </ul>
    </div>
    // <form id="new-message-form" onSubmit={evt => handleSubmit(name, newMessageEntry, evt)}>
    //   <div className="input-group input-group-lg">
    //     <span className="input-group-btn">
    //     </span>
    //   </div>
    // </form>
  );
}

const mapStateToProps = function (state, ownProps) {
  const campusId = ownProps.match.params.campusId;
  return {
    campus: state.campuses.filter(campus => {
      return campus.id == campusId
    }),
    students: state.students.filter(student => student.campusId == campusId)
  };
};

export default withRouter(connect(mapStateToProps)(SingleCampus));
