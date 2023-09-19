import { contactService } from "../services/contact.service.js"
import { showErrorMsg, showSuccessMsg } from "../services/event-bus.service.js"
import { loadContact, removeContact } from "../store/actions/contact.action.js"
import { UserMsg } from "../cmps/UserMsg.jsx"

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
        const txt = prompt('New txt?')
        const contactToSave = { ...contact, txt }
        saveContact(contactToSave)
            .then((savedContact) => {
                showSuccessMsg(`Contact updated txt to: $${savedContact.txt}`)
            })
            .catch(err => {
                console.log('Cannot update contact', err)
                showErrorMsg('Cannot update contact')
            })
    }


    return (
        <div className="app-header">
            <UserMsg />
            <main>
                <ContactList
                    contacts={contacts}
                    onRemoveContact={onRemoveContact}
                    onAddContact={onAddContact}
                    onEditContact={onEditContact} />
            </main>
        </div>
    )
}