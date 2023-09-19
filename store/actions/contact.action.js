import { contactService } from "../../services/contact.service.js"
import { ADD_CONTACT, REMOVE_CONTACT, SET_CONTACT, UPDATE_CONTACT, store } from "../store.js"


export function loadContact() {
    contactService.query()
        .then(contacts => {
            store.dispatch({ type: SET_CONTACT, contacts })
            console.log('contacts', contacts);
        })
}

export function removeContact(contactId) {
    return contactService.remove(contactId)
        .then(() => {
            store.dispatch({ type: REMOVE_CONTACT, contactId })
        })
        .catch(err => {
            console.log('contact action -> Cannot remove contact', err)
            throw err
        })
}

export function saveContact(contact) {
    const type = contact._id ? UPDATE_CONTACT : ADD_CONTACT
    return contactService.save(contact)
        .then(contactToSave => {
            store.dispatch({ type, contact: contactToSave })
            return contactToSave
        })
        .catch(err => {
            console.log('contact action -> Cannot save contact', err)
            throw err
        })
}
