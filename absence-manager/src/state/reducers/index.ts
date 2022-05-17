import { combineReducers } from "redux"
import pageReducer from '../reducers/pageReducer'

const reducers = combineReducers({
  page: pageReducer
});

export default reducers

export type State = ReturnType<typeof reducers>