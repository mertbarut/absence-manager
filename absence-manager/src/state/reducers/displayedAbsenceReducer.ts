import { ActionType } from '../action-types'
import { DisplayedAbsenceChangeAction } from '../actions'

const initialDisplayedAbsence = -1

const displayedAbsenceReducer = (state: number = initialDisplayedAbsence, action: DisplayedAbsenceChangeAction) => {
  switch (action.type) {
  case ActionType.SETABSENCE:
    return action.payload
  case ActionType.SETDEFAULT:
    return initialDisplayedAbsence
  default:
    return state
  }
}

export default displayedAbsenceReducer