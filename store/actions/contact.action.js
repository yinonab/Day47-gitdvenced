import { contactService } from "../../services/contact.service.js"
import { SET_CONTACT, store } from "../store.js"


export function loadContact(){
    contactService.query()
            .then(contacts => {
                store.dispatch({ type: SET_CONTACT, contacts })
                console.log('contacts',contacts);
            })
}