export function ContactPreview({onRemoveContact,onEditContact,contact}){
    return (
        <article>

            <h1>Contact</h1>
            <p><strong>{contact.firstName+' '+contact.lastName} </strong></p>
            <p><strong>{contact.email} </strong></p>
            <p><strong>{contact.phone} </strong></p>  
            <div className="contact-buttons">
                <button className="remove-button" onClick={() => onRemoveContact(contact._id)}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                <button className="edit-button" onClick={() => onEditContact(contact)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <Link to={`/contact/${contact._id}`}>Contact Details</Link>
            </div>     
        </article>
    )
}