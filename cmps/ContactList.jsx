import { ContactPreview } from "./ContactPreview.jsx" 

export function ContactList({onRemoveContact, onEditContact }){
    return (
        <ul className="contact-list">
            {contacts.map(contact =>
                <li className="contact-preview" key={contact._id}>
                    <ContactPreview contact={contact} />
                    <div>
                        <button onClick={() => onRemoveContact(contact._id)}>x</button>
                        <button onClick={() => onEditContact(contact)}>Edit</button>
                    </div>
                </li>
            )}
        </ul>
    )
}