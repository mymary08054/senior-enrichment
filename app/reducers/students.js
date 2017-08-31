import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

/* ------------   ACTION CREATORS     ------------------ */

const init = students => ({ type: GET_STUDENTS, students });
const create = student => ({ type: CREATE_STUDENT, student });
const remove = id => ({ type: REMOVE_STUDENT, id });
const update = student => ({ type: UPDATE_STUDENT, student });

/* ------------       REDUCERS     ------------------ */

export default function reducer(students = [], action) {
  switch (action.type) {

    case GET_STUDENTS:
      return action.students;

    case CREATE_STUDENT:
      return [action.student, ...students];

    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.id);

    case UPDATE_STUDENT:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ));

    default:
      return students;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching students unsuccessful', err));
};

export const fetchStudent = (id) => dispatch => {
  axios.get(`/api/students/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching student unsuccessful', err));
};

// optimistic
export const removeStudent = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/students/${id}`)
    .catch(err => console.error(`Removing student: ${id} unsuccessful`, err));
};

export const addStudent = (student, history) => dispatch => {
  return axios.post('/api/students', student)
    .then(res => {
      dispatch(create(res.data))
      history.push(`/students/${res.data.id}`);
    })
    // .catch(err => console.error(`Creating student: ${student} unsuccessful`, err));
};

export const updateStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
};
