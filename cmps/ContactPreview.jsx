const {  Link } = ReactRouterDOM
export function ContactPreview({onRemoveContact,onEditContact,contact}){
    return (
        <article className="contact-article">
            <h1>Contact</h1>
            <p className="contact-info"><strong>{contact.firstName+' '+contact.lastName} </strong></p>
            <p className="contact-info"><strong>{contact.email} </strong></p>
            <p className="contact-info"><strong>{contact.phone} </strong></p>  
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