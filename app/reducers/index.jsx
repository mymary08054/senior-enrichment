import { combineReducers } from 'redux'

import campuses from './campuses';
import students from './students';
import newCampusEntry from './newCampusEntry';
import newStudentEntry from './newStudentEntry';
import newEmailEntry from './newEmailEntry';
import newEmailError from './newEmailError';

const rootReducer = combineReducers({
campuses,
students,
newCampusEntry,
newStudentEntry,
newEmailEntry,
newEmailError
})

export default rootReducer