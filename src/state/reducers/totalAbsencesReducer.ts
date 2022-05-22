import { ActionType } from '../action-types'
import { TotalAbsencesChangeAction } from '../actions'

const initialTotalAbsences = 0

const totalAbsencesReducer = (state: number = initialTotalAbsences, action: TotalAbsencesChangeAction) => {
  switch (action.type) {
  case ActionType.SETTOTALABSENCES:
    return action.payload
  default:
    return state
  }
}

export default totalAbsencesReducer