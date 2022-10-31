import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_91q39kc', 'template_789tu6f', form.current, 'qQOWufgda1RopvsA-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" className='contact-input' />
      <label>Email</label>
      <input type="email" name="user_email" className='contact-input'/>
      <label>Message</label>
      <textarea name="message" className='contact-text'/>
      <input type="submit" value="Send" className='button' id='button-form'/>
    </form>
  );
};