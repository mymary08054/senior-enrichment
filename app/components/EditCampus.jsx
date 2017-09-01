import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCampus, writeCampusName } from '../store';

function EditCampus(props) {

    const { newCampusEntry, handleSubmit, handleChange } = props;

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Update Campus</label>
                <input
                    value={newCampusEntry}
                    onChange={handleChange}
                    className="form-control"
                    type="text"
                    name="campusName"
                    placeholder="Enter campus name"
                />
            </div>
            <div className="form-group">
                <label htmlFor="name">Image Campus</label>
                <input
                    className="form-control"
                    type="text"
                    name="imageURL"
                    placeholder="Enter campus img url"
                />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-default">Update Campus</button>
            </div>
        </form >
    );
}

const mapStateToProps = function (state, ownProps) {
    const campusId = ownProps.match.params.campusId;
    const campusToBeEdit = state.campuses.find(function (campus) {
        return campus.id == campusId
    })
    return {
        newCampusEntry: state.newCampusEntry || (campusToBeEdit && campusToBeEdit.name),
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    const campusId = ownProps.match.params.campusId;
    return {
        handleChange(evt) {
            dispatch(writeCampusName(evt.target.value));
        },
        handleSubmit(evt) {
            evt.preventDefault();
            const name = evt.target.campusName.value;
            const img = evt.target.imageURL.value;
            dispatch(updateCampus(campusId, { name: name, image: img }, ownProps.history));
            dispatch(writeCampusName(''));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditCampus);
