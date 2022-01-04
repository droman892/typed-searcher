import { combineReducers } from 'redux'
import searchQueryReducer from './searchQueryReducer'

const rootReducer = combineReducers({
    searchQuery: searchQueryReducer,
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
