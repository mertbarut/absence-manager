import { ActionType } from '../action-types'
import { PageChangeAction } from '../actions'

const initialPage = 1

const pageReducer = (state: number = initialPage, action: PageChangeAction) => {
  switch (action.type) {
  case ActionType.NEXT:
    return state + action.payload
  case ActionType.PREV:
    return state - action.payload < 1 ? initialPage : state - action.payload
  case ActionType.FIRST:
    return initialPage
  default:
    return state
  }
}

export default pageReducer