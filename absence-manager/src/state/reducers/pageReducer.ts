import { ActionType } from "../action-types"
import { Action } from "../actions";

const initialState = 1

const reducer = (state: number = initialState, action: Action) => {
  switch (action.type) {
    case ActionType.NEXT:
      return state + action.payload;
    case ActionType.PREV:
      return state - action.payload < 1 ? initialState : state - action.payload;
    case ActionType.FIRST:
      return initialState;
    default:
      return state;
  }
}

export default reducer