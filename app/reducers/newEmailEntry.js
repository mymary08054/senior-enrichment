// ACTION TYPES

const WRITE_EMAIL_NAME = 'WRITE_EMAIL_NAME';

// ACTION CREATORS

export function writeEmailName (emailName) {
  const action = { type: WRITE_EMAIL_NAME, emailName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_EMAIL_NAME:
      return action.emailName;

    default:
      return state;
  }

}