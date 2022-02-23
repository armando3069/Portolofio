import React from 'react'
import '../style/contacts.scss'
import people from '../assets/img/people.png'

function contacts() {
  return (
    <div className='contacts' id='contacts'>
      <div className="caseBox">
      <div className="right">
        <img src={people} alt="" />
        <i class="fa-solid fa-paper-plane-top"></i>
        </div>
        <div className="left">
        <div className="forms">
          <h1>Contact Me </h1>
        <input className='name' type="text" placeholder='Name...' />
              <div >
              <input className='email' type="email" placeholder='Email'/>
               </div>
                <div>
                <textarea placeholder='message' className= "message" name="message" rows="4" cols="39"/>
                </div>
              <button className='buton' type="submit">Send<i class="fas fa-paper-plane"></i> </button>
       </div>
        </div>

  
      </div>
    </div>
  )
}

export default contacts