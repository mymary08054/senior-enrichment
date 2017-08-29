import React from 'react';
import { connect } from 'react-redux';
// import { postMessage, writeMessage } from '../store';

export default function SingleCampus (props) {
  console.log("MATCH ", props.match.params)
  
  return (
    <form id="new-message-form" onSubmit={evt => handleSubmit(name, newMessageEntry, evt)}>
      <div className="input-group input-group-lg">
        <span className="input-group-btn">
          {

          }
        </span>
      </div>
    </form>
  );
}