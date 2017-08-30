// ACTION TYPES

const WRITE_STUDENT_NAME = 'WRITE_STUDENT_NAME';

// ACTION CREATORS

export function writeStudentName (studentName) {
  const action = { type: WRITE_STUDENT_NAME, studentName };
  return action;
}

// REDUCER
export default function reducer (state = '', action) {

  switch (action.type) {

    case WRITE_STUDENT_NAME:
      return action.studentName;

    default:
      return state;
  }

}
