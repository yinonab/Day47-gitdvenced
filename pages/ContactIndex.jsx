import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { loadContact, removeContact, saveContact } from "../store/actions/contact.action.js"
import { UserMsg } from "../cmps/UserMsg.jsx"
import { ContactList } from "../cmps/ContactList.jsx"

const { useEffect } = React
const { useSelector } = ReactRedux

export function ContactIndex() {
    const { contacts } = useSelector(storeState => storeState)

    useEffect(() => {
        loadContact()
    }, [])

    function onRemoveContact(contactId) {
        removeContact(contactId)
            .then(() => {
                showSuccessMsg('Contact removed')
            })
            .catch(err => {
                console.log('Cannot remove contact', err)
                showErrorMsg('Cannot remove contact')
            })
    }


    function onAddContact() {
        const contactToSave = contactService.getEmptyContact()
        saveContact(contactToSave)
            .then((savedContact) => {
                showSuccessMsg(`Contact added (id: ${savedContact._id})`)
            })
            .catch(err => {
                console.log('Cannot add contact', err)
                showErrorMsg('Cannot add contact')
            })
    }

    function onEditContact(contact) {
        const firstName = prompt('New  First Name?')
        const lastName = prompt('New Last Name?')
        const phone = +prompt('New Phone?')
        const contactToSave = { ...contact, firstName, phone, lastName }
        saveContact(contactToSave)
            .then((savedContact) => {
                showSuccessMsg(`Contact updated txt to: $${savedContact.firstName}`)
            })
            .catch(err => {
                console.log('Cannot update contact', err)
                showErrorMsg('Cannot update contact')
            })
    }


    return (
        <div className="app-container">
            <div className="main-app">
                <UserMsg />
                <main>
                    <button className="add" onClick={onAddContact}>Add Contact</button>
                    <ContactList
                        contacts={contacts}
                        onRemoveContact={onRemoveContact}
                        onAddContact={onAddContact}
                        onEditContact={onEditContact} />
                </main>
            </div>
        </div>
    )
}