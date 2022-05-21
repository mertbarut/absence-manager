import { ActionType } from '../action-types'
import { Dispatch } from 'redux'
import { PageChangeAction, DisplayedAbsenceChangeAction, TotalAbsencesChangeAction } from '../actions'

export const goToNextPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.NEXT,
      payload: amount
    })
  }
}

export const goToPrevPage = (amount: number) => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.PREV,
      payload: amount
    })
  }
}

export const goToFirstPage = () => {
  return (dispatch: Dispatch<PageChangeAction>) => {
    dispatch({
      type: ActionType.FIRST,
    })
  }
}

export const setDisplayedAbsence = (id: number) => {
  return (dispatch: Dispatch<DisplayedAbsenceChangeAction>) => {
    dispatch({
      type: ActionType.SETABSENCE,
      payload: id
    })
  }
}

export const setTotalAbsences = (total: number) => {
  return (dispatch: Dispatch<TotalAbsencesChangeAction>) => {
    dispatch({
      type: ActionType.SETTOTALABSENCES,
      payload: total
    })
  }
}