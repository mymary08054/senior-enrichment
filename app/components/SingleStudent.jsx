import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';
import { withRouter, NavLink } from 'react-router-dom';

function SingleStudent (props) {

  const { students } = props;
  return (
    <div>
    <h1>{
      students.map((stud) => {
      return stud.name
      })}</h1>
      </div>
  );
}

const mapStateToProps = function (state, ownProps) {
  const studentId = ownProps.match.params.studentId;
  return {
    students: state.students.filter(student => {
      return student.id == studentId
    })
  };
};

export default withRouter(connect(mapStateToProps)(SingleStudent));
