import '../Styles/Contact.css'
import { useState } from 'react'
import {send} from 'emailjs-com'


export default function Contact(){

    const [toSend, setToSend] = useState()
    //({
    //     from_name,
    //     e_mail,
    //     message,
    // })

    const handleOnSubmit = (e) =>{
        e.preventDefault()
        send(
            'service_t19nb54',
            'template_ik0uwk8',
            toSend,
            'User ID'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
    };
    

    const handleChange = (e) => {
        setToSend({... toSend, [e.target.name]: e.target.value})
    }


    return(
        <></>
        // <div className='container'>
        //     <div className='row'>
        //         <h2>Contact me</h2>
        //     </div>
        //     <form onSubmit={handleOnSubmit}>
        //         <input
        //             type='text'
        //             name='from_name'
        //             placeholder='Name'
        //             value={toSend.from_name}
        //             onChange={handleChange}
        //         />
        //         <input
        //             type='text'
        //             name='e_mail'
        //             placeholder='email'
        //             value={toSend.e_mail}
        //             onChange={handleChange}
        //         />
        //         <input
        //             type='text'
        //             name='message'
        //             placeholder='Your message'
        //             value={toSend.message}
        //             onChange={handleChange}
        //         />
        //         <button type='submit'>Submit</button>
        //     </form>
            
        // </div>
       
    )
}