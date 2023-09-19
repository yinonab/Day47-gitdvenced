import { contactService } from "../services/contact.service.js"
import { showErrorMsg } from "../services/event-bus.service.js"

const { useEffect, useState } = React
const { useParams, useNavigate, Link } = ReactRouterDOM

export function ContactDetails(){
    const [contact, setContact] = useState(null)
    const {contactId} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        loadContact()
    },[contactId])

    function loadContact(){
        contactService.getById(contactId)
        .then((contact) => setContact(contact))
        .catch((err)=>{
            console.log('Had issues in contact details', err)
            showErrorMsg('Cannot load contact')
            navigate('/contact')
        })
    }

    if (!contact) return <div>Loading...</div>
    return (
        <section className="contact-details">
            <h1 className="contact-details-title">First Name: {contact.firstName}</h1>
            <h1 className="contact-details-title">Last Name: {contact.lastName}</h1>
            <h5 className="contact-details-phone">Phone: {contact.phone}</h5>
            <p className="contact-details-icon">📝</p>
            <p className="contact-details-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi voluptas cumque tempore, aperiam sed dolorum rem! Nemo quidem, placeat perferendis tempora aspernatur sit, explicabo veritatis corrupti perspiciatis repellat, enim quibusdam!</p>
            <Link to="/contact" className="contact-details-back-link">Back</Link>
        </section>
    )
}