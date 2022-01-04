import { ActionType } from '../actionTypes/index'

interface QueryAction {
    type: ActionType.SEARCH_QUERY
    payload: string
}

export type Action = QueryAction
