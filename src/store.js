import { createStore, applyMiddleware } from 'redux'

const initialState = {
    navigationItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'NAVIGATION':
            return {
                ...state,
                navigationItems: action.navigationItems
            }
        default:
            return state
    }
}

export const initializeStore = (preloadedState = initialState) => {
    return createStore(reducer, preloadedState)
}