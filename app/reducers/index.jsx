import { combineReducers } from 'redux'

import campuses from './campuses';
import students from './students';
import newCampusEntry from './newCampusEntry';
import newStudentEntry from './newStudentEntry';

const rootReducer = combineReducers({
campuses,
students,
newCampusEntry,
newStudentEntry
})

export default rootReducer