import '../Styles/Contact.scss'
import { useState } from 'react'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact(){

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t19nb54', 'contact_form', form.current, 'D9x_LiJkveSGxcffZ')
      .then((result) => {
          console.log(
          result.text === "OK" ? console.log("Email sent") : alert("Something went wrong. Try again"))
          setName("")
          setMessage("")
          setEmail("")
      }, (error) => {
          console.log(error.text);
      });
  };


  return(
    <div id='Contact' className='contact_box'>
      <form name='contact_form' ref={form} onSubmit={sendEmail}>
        <div className='input-container'>
        <label >Name</label>
          <input type="text"
                 name="user_name"
                //  placeholder='Foo'
                 value={name}
                 required
          />

        </div>
        
        <label>Email</label>
          <input type="email"
                 name="user_email"
                 placeholder='foo@email.com'
                 value={email}
                 required
                 className='imput_box'
          />
        <label>Message</label>
        <textarea name="message" />
          <input type="submit"
                 placeholder="Your message"
                 value= {message}
                 required
          />
      </form>
          
    </div>
  )
}