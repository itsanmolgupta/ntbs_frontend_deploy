import {React, useState} from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
// import { BsWhatsapp } from 'react-icons/bs'
import { BsArrowRightShort } from 'react-icons/bs'
import { MdOutlineLocationOn } from 'react-icons/md'

const Contact = () => {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value});
  }
  const [message, setMessage] = useState('');
  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);}
  return (
    <>
      <div className='container' id='contact_us'>
        <div className="title-container">
          <h1 className="section-heading center">Contact Us</h1>
          <div className="line"></div>
        </div>
        <div className="contact__wrapper">
          <div className="contact__container grid">
            <div className="contact__information">
              <span className='contact__icon'><MdOutlineMail /></span>
              <div>
                <div>
                  <h3 className="contact__title">Email</h3>
                  <a href="mailto:ntbs@tcioe.edu.np" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button-small button--link">
                      ntbs@tcioe.edu.np</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact__information">
              <span className='contact__icon'><RiMessengerLine /></span>
              <div>
                <div>
                  <h3 className="contact__title">Messenger</h3>
                  <a href="https://m.me/ntbsthapathali" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button--flex button--link">
                      Write a message <span className='button__icon'><BsArrowRightShort /></span></span>
                  </a>
                </div>
              </div>
            </div>


            <div className="contact__information">
              <span className='contact__icon'><MdOutlineLocationOn /></span>
              <div>
                <div>
                  <h3 className="contact__title">Location</h3>
                  <a href="/#" target="_blank" rel="noopener noreferrer">
                    <span
                      className="contact__subtitle button--link">
                      NTBS, Thapathali Campus, Kathmandu</span>
                  </a>
                </div>
              </div>
            </div>

            {/* END OF CONTACT OPTIONS */}
          </div>
          <div >

          </div>
          <form action='https://formspree.io/f/mgejgldo' className="form__container" method="POST">
            <div className="input_wrapper">
              <input className="form_input" onChange={changeHandler} required type="text" id="name" name="Name" placeholder='' value={formState.Name || ''}/>
              <label className='form_label' htmlFor="name">Name</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" onChange={changeHandler} type="text" id="number" name="Number" autoComplete="none" placeholder='' value={formState.Number || ''}/>
              <label className='form_label' htmlFor="number">Contact Number</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" onChange={changeHandler} required type="email" id="email" name="Email" placeholder='' value={formState.Email || ''}/>
              <label className='form_label' htmlFor="email">Email</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" onChange={changeHandler} type="text" id="address" name="Address" placeholder='' value={formState.Address || ''}/>
              <label className='form_label' htmlFor="address">Address</label>
            </div>
            <div className="input_wrapper">
              <input className="form_input" onChange={changeHandler} type="text" id="subject" name="Subject" placeholder='' value={formState.Subject || ''}/>
              <label className='form_label' htmlFor="subject">Subject</label>
            </div>
            <div className="input_wrapper">
              <textarea className="form_input form_textarea" required id="message" name="Message" placeholder='' value={message || ''}
        onChange={handleMessageChange}/>
              <label className='form_label' htmlFor="message">Message</label>
            </div>
            <div className="input_wrapper">
              <button type="submit" id='submit_btn'>Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
export default Contact
