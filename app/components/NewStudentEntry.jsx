import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudent, writeStudentName } from '../store';
import history from '../history';

function NewStudentEntry(props) {

    const { newStudentEntry, campuses, handleSubmit, handleChange } = props;

    return (
        <form onSubmit={handleSubmit}>
            {/* Student Name */}
            <div className="form-group">
                <label htmlFor="name">Create a Student</label>
                <input
                    value={newStudentEntry}
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                />
            </div>
            {/* Campus */}
            <div className="form-group">
                <label htmlFor="campus" className="col-xs-2 control-label">Campus</label>
                <div className="col-xs-10">
                    <select
                        className="form-control"
                        name="campus"
                        required
                        onChange={handleChange}>
                        {
                            campuses && campuses.map(campus => (
                                <option key={campus.id} value={campus.id}>{campus.name}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            {/* Warning msg about empty fields */}
            <div className="form-group">
                <button type="submit" className="btn btn-default">Create Student</button>
            </div>
        </form>
    );
}

const mapStateToProps = function (state) {
    return {
        newStudentEntry: state.newStudentEntry,
        campuses: state.campuses
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleChange(evt) {
            dispatch(writeStudentName(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const name = evt.target.studentName.value;
            const campusId = evt.target.campus.value;
            dispatch(addStudent({ name: name, campusId: campusId }, ownProps.history));
            dispatch(writeStudentName(''));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewStudentEntry);
