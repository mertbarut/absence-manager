import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions"

export const goToNextPage = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.NEXT,
      payload: amount
    })
  }
}

export const goToPrevPage = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.PREV,
      payload: amount
    })
  }
}

export const goToFirstPage = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.FIRST,
    })
  }
}