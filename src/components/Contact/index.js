import { useRef } from "react";
import emailjs from '@emailjs/browser';
import "./index.scss"

function Contact(){
    const refForm = useRef();
    const sendEmail= (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5z81mgq', 'template_nzbsl3g', refForm.current, 'qTlqLqVmKzqD7hAMC')
      .then((result) => {
          console.log(result.text);
          alert('Message successfully sent!')
          window.location.reload(false)
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message')
      });
    }
    return(
        
        <>
            <div className = "container contact-page">
                <div className="text-zone">
                    <h1>Contact Me</h1>
                    <p>I am interesed in freelance opportunities.
                    Feel free to contact me about it.</p>
                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name = "name" 
                                        placeholder="Name" required/>
                                </li>
                                <li className="half">
                                    <input type="email" name = "email" 
                                        placeholder="Email" required/>
                                </li>
                                <li className="half">
                                    <input type="text" name = "subject" 
                                        placeholder="Subject" required/>
                                </li>
                                <li>
                                    <textarea placeholder="Message" name ="message" required></textarea>
                                </li>
                                <li>
                                    <input type="submit" className = "flat-button" value = "SEND"/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;