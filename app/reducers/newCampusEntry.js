// ACTION TYPES

const WRITE_CAMPUS_NAME = 'WRITE_CAMPUS_NAME';

// ACTION CREATORS

export function writeCampusName (campusName) {
  const action = { type: WRITE_CAMPUS_NAME, campusName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_CAMPUS_NAME:
      return action.campusName;

    default:
      return state;
  }

}
