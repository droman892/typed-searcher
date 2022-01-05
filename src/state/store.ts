import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'

// export const store = createStore(rootReducer, {}, applyMiddleware(thunk))

export const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
)

// const store = createStore(
//     rootReducer,
//     {},
//     composeWithDevTools(applyMiddleware(thunk))
// )

// export default store
