const { createStore, compose } = Redux

export const SET_CONTACT = 'SET_CONTACT'
export const REMOVE_CONTACT = 'REMOVE_CONTACT'
export const ADD_CONTACT = 'ADD_CONTACT'
export const UPDATE_CONTACT = 'UPDATE_CONTACT'

const initialState = {
    contacts: [],
}

function appReducer(state = initialState, action) {
    let contacts
    switch (action.type) {
        case SET_CONTACT:
            return { ...state, contacts: action.contacts }

        case REMOVE_CONTACT:
            contacts = state.contacts.filter(contact => contact._id !== action.contactId)
            return { ...state, contacts }

        case ADD_CONTACT:
            contacts = [action.contact, ...state.contacts]
            return { ...state, contacts }

        case UPDATE_CONTACT:
            contacts = state.contacts.map(contact => contact._id === action.contact._id ? action.contact : contact)
            return { ...state, contacts }

        default:
            return state
    }

}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store