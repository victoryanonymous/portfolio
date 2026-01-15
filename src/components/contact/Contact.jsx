import React from 'react';
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

    const form = useRef();
    const [statusMessage, setStatusMessage] = useState('');
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage('');

        try {
            await emailjs.sendForm(
                'service_i3t85me',
                'template_arkyerd',
                form.current,
                'Xt0xB4_0npZRBD-qw'
            );
            setStatusMessage('Message sent successfully.');
            e.target.reset();
        } catch (error) {
            setStatusMessage('Message failed to send. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact_options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>vinaymaggidii@gmail.com</h5>
                        <a href="mailto:vinaymaggidii@gmail.com" target='_blank' rel="noopener noreferrer">
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon'/>
                        <h4>Messenger</h4>
                        <h5>vinaymaggidi</h5>
                        <a href="https://m.me/vinay.vinayrajaka.7" target='_blank' rel="noopener noreferrer">
                            Send a message
                        </a>
                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+91 9347759131</h5>
                        <a href="https://api.whatsapp.com/send?phone=+91-9347759131" target='_blank' rel="noopener noreferrer">
                            Send a message
                        </a>
                    </article>
                    {/* https://api.whatsapp.com/send?phone=+91-9347759131 */}
                </div>
                
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required/>
                    <input type="email" name='email' placeholder='Your Email' required/>
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary' disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                    {statusMessage && (
                        <p className="contact__status" aria-live="polite">{statusMessage}</p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default Contact;
