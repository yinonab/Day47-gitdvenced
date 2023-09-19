import { ContactPreview } from "./ContactPreview.jsx" 

export function ContactList({onRemoveContact, onEditContact,contacts }){
    return (
        <ul className="contact-list">
            {contacts.map(contact =>
                <li className="contact-item" key={contact._id}>
                    <div className="contact-card">
                    <ContactPreview contact={contact} 
                    onRemoveContact={onRemoveContact}
                    onEditContact={onEditContact}/>
                    </div>
                </li>
            )}
        </ul>
    )
}