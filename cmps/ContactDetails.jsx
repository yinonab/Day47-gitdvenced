export function ContactDetails(){
    return (
        <article>
            <h1>Contact</h1>
            <p><strong>{Contact.firstname+' '+Contact.lastname} </strong></p>
            <p><strong>{Contact.email} </strong></p>
            <p><strong>{Contact.phone} </strong></p>            
            {/* <p><strong>Yinon Abarjel</strong></p>
            <p><strong>yinno@gmail.com</strong></p>
            <p><strong>0523406534</strong></p>             */}
        </article>
    )
}