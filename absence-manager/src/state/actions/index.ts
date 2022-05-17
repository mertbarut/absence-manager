import { ActionType } from "../action-types"

interface NextPageAction {
  type: ActionType.NEXT
  payload: number
}

interface PreviousPageAction {
  type: ActionType.PREV
  payload: number
}

interface FirstPageAction {
  type: ActionType.FIRST
}

export type Action = NextPageAction | PreviousPageAction | FirstPageAction