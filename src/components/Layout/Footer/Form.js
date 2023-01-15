import React from 'react'

export default function Form() {
  return (
    <div className='form-container'>
        <form
          id='contact-form'
          action="https://formspree.io/f/xlevkwzy"
          method="POST"
        >
          <h3 style={{color: '#01aade'}}>Contact Us</h3>
          <br />
          <input id="input-name" name="name" type="text" placeholder="Your Name" autoComplete='off'/>
          <input id="input-email" name="email" type="email" required placeholder="Your Email" autoComplete='off'/>
          <textarea id="input-message" name="message" rows="2" placeholder="Message"  required autoComplete='off'></textarea>
          <button className="sub-btn" type="submit">SEND MESSAGE</button>
        </form>
    </div>
  )
}
