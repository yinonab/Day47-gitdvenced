import { ContactPreview } from "./ContactPreview.jsx" 

export function ContactList({onRemoveContact, onEditContact,contacts }){
    return (
        <ul className="contact-list">
            {contacts.map(contact =>
                <li className="contact-preview" key={contact._id}>
                    <ContactPreview contact={contact} 
                    onRemoveContact={onRemoveContact}
                    onEditContact={onEditContact}/>
                </li>
            )}
        </ul>
    )
}