import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './contact.scss'

const { REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, REACT_APP_EMAIL_USERID } = process.env;

export const Contact = () => {

    const formContact = { userEmail: '', category: 'Contacto - Portfolio', emailDetails: '' };
    const [contact, setContact] = useState(formContact);
    const [showMessage, setShowMessage] = useState(false);


    const handleChange = e => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();

        emailjs.send(REACT_APP_EMAIL_SERVICE, REACT_APP_EMAIL_TEMPLATE, contact, REACT_APP_EMAIL_USERID)
            .then((response) => {
                console.log('SUCCESS', response.status, response.text);
                setContact(formContact);
                setShowMessage(true);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="contacto" />
            </div>
            <div className="right">
                <h2>Contacto.</h2>
                <form onSubmit={handleSubmit}>
                    <input required type="text" placeholder="Email" value={contact.userEmail} name="userEmail" onChange={handleChange} />
                    <textarea required placeholder="Mensaje" name="emailDetails" onChange={handleChange} value={contact.emailDetails}></textarea>
                    <button type="submit">Enviar</button>
                    {showMessage && <span>Gracias, su mensaje ha sido enviado.</span>}
                </form>
            </div>
        </div >
    )
}
