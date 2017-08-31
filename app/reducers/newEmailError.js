// ACTION TYPES

const WRITE_EMAIL_ERROR = 'WRITE_EMAIL_ERROR';

// ACTION CREATORS

export function writeEmailError (emailError) {
  const action = { type: WRITE_EMAIL_ERROR, emailError };
  return action;
}

// REDUCER
export default function reducer (state = false, action) {

  switch (action.type) {

    case WRITE_EMAIL_ERROR:
      return action.emailError;

    default:
      return state;
  }

}