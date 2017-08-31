import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    addStudent,
    writeStudentName,
    writeEmailName,
    writeEmailError
} from '../store';
import history from '../history';

function NewStudentEntry(props) {

    const {
        newStudentEntry,
        campuses,
        emailError,
        newEmailEntry,
        handleSubmit,
        handleChangeName,
        handleChangeEmail
     } = props;

    return (
        <form onSubmit={handleSubmit}>
            {/* Student Name */}
            <div className="form-group">
                <label htmlFor="name">Student Name: </label>
                <input
                    value={newStudentEntry}
                    onChange={handleChangeName}
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                />
            </div>
            {/* Email */}
            <div className="form-group">
                <label htmlFor="name">Email: </label>
                <input
                    value={newEmailEntry}
                    onChange={handleChangeEmail}
                    className="form-control"
                    type="text"
                    name="studentEmail"
                    placeholder="Enter Email"
                />
            </div>
            {emailError && <div className="alert alert-danger">Song is a duplicate</div>}
            {/* Campus */}
            <div className="form-group">
                <label htmlFor="campus" className="col-xs-2 control-label">Campus</label>
                <div className="col-xs-10">
                    <select
                        className="form-control"
                        name="campus"
                        required
                    >
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
        campuses: state.campuses,
        emailError: state.newEmailError,
        newEmailEntry: state.newEmailEntry
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleChangeName(evt) {
            console.log("WHAT HAPPENED HERE", evt.target.value)
            dispatch(writeStudentName(evt.target.value));
        },
        handleChangeEmail(evt) {
            console.log("WHAT HAPPENED HERE!!!", evt.target.value)
            dispatch(writeEmailName(evt.target.value));
            dispatch(writeEmailError(false));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const name = evt.target.studentName.value;
            const email = evt.target.studentEmail.value;
            const campusId = evt.target.campus.value;
            const addStudentDispatch = addStudent({ name: name, email: email, campusId: campusId }, ownProps.history)
            dispatch(addStudentDispatch)
                .catch(err => {
                    dispatch(writeEmailError(true))
                })
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewStudentEntry);
