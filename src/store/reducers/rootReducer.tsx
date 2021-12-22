import { combineReducers } from 'redux'
import searchQueryReducer from './searchQueryReducer'

const reducers = combineReducers({
    searchQuery: searchQueryReducer,
})

export default reducers
