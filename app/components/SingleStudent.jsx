import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';

export default function SingleStudent (props) {

  return (
    <form id="new-message-form" onSubmit={evt => handleSubmit(name, newMessageEntry, evt)}>
      <div className="input-group input-group-lg">
        <span className="input-group-btn">
          <button className="btn btn-default" type="submit">Chat!</button>
        </span>
      </div>
    </form>
  );
}