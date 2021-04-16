import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import charsReducer from './charsDuck'

let rootReducer = combineReducers({
    characters: charsReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    
    return store
}
