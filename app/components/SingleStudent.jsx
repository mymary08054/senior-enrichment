import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';
import { withRouter, Link } from 'react-router-dom';

function SingleStudent(props) {

  const { student, campuses } = props;
  const studentName = student && student.name;
  const studentEmail = student && student.email;
  const studentCampusId = student && student.campusId;
  const campus = campuses.find(campus => {
    return campus.id == studentCampusId
  })
  return (
    <div>
      <h1>{studentName}</h1>
      <h3>{studentEmail}</h3>
      <Link to={`/campuses/${campus && campus.id}`}>
      {campus && campus.name}
      </Link>
    </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  const studentId = ownProps.match.params.studentId;
  return {
    student: state.students.find(student => {
      return student.id == studentId
    }),
    campuses: state.campuses
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
