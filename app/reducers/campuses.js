import axios from 'axios';

/* -----------------    ACTION TYPES ------------------ */

const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';

/* ------------   ACTION CREATORS     ------------------ */

const init = campuses => ({ type: GET_CAMPUSES, campuses });
const create = campus => ({ type: CREATE_CAMPUS, campus });
const remove = id => ({ type: REMOVE_CAMPUS, id });
const update = campus => ({ type: UPDATE_CAMPUS, campus });

/* ------------       REDUCERS     ------------------ */

export default function reducer(campuses = [], action) {
  switch (action.type) {

    case GET_CAMPUSES:
      return action.campuses;

    case CREATE_CAMPUS:
      return [action.campus, ...campuses];

    case REMOVE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.id);

    case UPDATE_CAMPUS:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ));

    default:
      return campuses;
  }
}

/* ------------   THUNK CREATORS     ------------------ */

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
    .then(res => dispatch(init(res.data)))
    .catch(err => console.error('Fetching campuses unsuccessful', err));
};

export const fetchCampus = (id) => dispatch => {
  axios.get(`/api/campuses/${id}`)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error('Fetching campus unsuccessful', err));
};

// optimistic
export const removeCampus = id => dispatch => {
  dispatch(remove(id));
  axios.delete(`/api/campuses/${id}`)
    .catch(err => console.error(`Removing campus: ${id} unsuccessful`, err));
};

export const addCampus = campus => dispatch => {
  axios.post('/api/campuses', campus)
    .then(res => dispatch(create(res.data)))
    .catch(err => console.error(`Creating campus: ${campus} unsuccessful`, err));
};

export const updateCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
    .then(res => dispatch(update(res.data)))
    .catch(err => console.error(`Updating campus: ${campus} unsuccessful`, err));
};
