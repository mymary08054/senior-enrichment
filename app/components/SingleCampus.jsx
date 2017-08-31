import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';
import { withRouter, NavLink } from 'react-router-dom';
import {removeCampus} from '../store';

function SingleCampus(props) {

  const { campuses, students, handleDelete } = props;
  const campusName = campuses.map((campu) => { return campu.name })[0]
  const campusId = campuses.map((campu) => { return campu.id })[0]
  return (
    <div>
      <h1> {campusName} </h1>
      <ul>
        {
          students.map((student) => {
            return (
              <li key={student.id}>{student.name}</li>
            )
          })
        }
      </ul>
      <div>
        <button
          className="btn btn-default btn-xs"
          onClick={() => handleDelete(campusId)}>
          <span className="glyphicon glyphicon-remove" />
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  const campusId = ownProps.match.params.campusId;
  return {
    campuses: state.campuses.filter(campus => {
      return campus.id == campusId
    }),
    students: state.students.filter(student => student.campusId == campusId)
  };
};

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDelete(campusId) {
      dispatch(removeCampus(campusId, ownProps.history))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleCampus));
