const { createStore, compose } = Redux

const initialState = {
    contacts: [],
}

function appReducer(state = initialState, action) {}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store