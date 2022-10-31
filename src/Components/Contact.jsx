import React, { useRef } from 'react'
import '../App.css'
import { ContactUs } from './ContactUs'


function Contact() {

  
  return (
    <div className="Contact" id='Contact'>
    <h1>Contact me</h1>
    <p>Have a project in mind? Please reach out via the form below!</p>
    <br />
    <ContactUs/>
   </div>
  )
}

export default Contact