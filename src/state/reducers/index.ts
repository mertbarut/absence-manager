import { combineReducers } from 'redux'
import pageReducer from '../reducers/pageReducer'
import displayedAbsenceReducer from './displayedAbsenceReducer'
import totalAbsencesReducer from './totalAbsencesReducer'

const reducers = combineReducers({
  page: pageReducer,
  displayedAbsence: displayedAbsenceReducer,
  totalAbsences: totalAbsencesReducer
})

export default reducers

export type State = ReturnType<typeof reducers>