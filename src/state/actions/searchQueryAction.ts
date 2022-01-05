import { ActionType } from '../actionTypes/index'

export interface QueryAction {
    type: ActionType.SEARCH_QUERY
    payload: string
}

// export type Action = QueryAction

export type Action = QueryAction
