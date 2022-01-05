import { Action } from '../actions/searchQueryAction'
import { ActionType } from '../actionTypes/index'

const initialState = ''

const searchQueryReducer = (state: string = initialState, action: Action) => {
    switch (action.type) {
        case ActionType.SEARCH_QUERY:
            return action.payload
        default:
            return state
    }
}

export default searchQueryReducer
