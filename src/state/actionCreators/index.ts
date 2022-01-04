import { ActionType } from '../actionTypes/index'
import { Dispatch } from 'redux'
import { Action } from '../actions/searchQueryAction'

export const createQuery = (text: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SEARCH_QUERY,
            payload: text,
        })
    }
}
