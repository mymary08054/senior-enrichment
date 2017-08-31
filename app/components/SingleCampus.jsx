import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';
import { withRouter, Link } from 'react-router-dom';
import { removeCampus } from '../store';

function SingleCampus(props) {

  const { campuses, students, handleDelete } = props;

  return (
    <div>
       <h1> {campuses && campuses.name} </h1>
       <img src={campuses && campuses.image} /> 
      <ul>
        {
          students && students.map((student) => {
            return (
              <Link to={`/students/${student.id}`}>
                <li key={student.id}>{student.name}</li>
              </Link>
            )
          })
        }
      </ul>
      <div>
        <button
          className="btn btn-default btn-xs"
          onClick={() => handleDelete(campuses && campuses.id)}>
          <span className="glyphicon glyphicon-remove" />
        </button>
      </div> 
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  const campusId = ownProps.match.params.campusId;
  return {
    campuses: state.campuses.find(campus => {
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
