import React from 'react'
import dot11 from '../assets/img/dott.png'
import dot12 from '../assets/img/dott-revers.png'

import '../style/testimonial.css'


function testimonial() {
  return (
 <div className='testi'>


  <div className="first-cnt">
    <div className="flat-container1 " data-aos="zoom-in">
      <div className="cover1">
        <div className="text1">
          <img className="dott11" src={dot11} alt="" />
          <img className="dott12" src={dot12} alt="" />
          <h1>Testimonial</h1>
          <p>"Am fost foarte impresionat de caliatate prestari servicilor dumneavostra ,sunt incantat ca am terminat scoala cu brio"</p>
        </div>
      </div>
      <img className="center" src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
      <div className="star1">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star " />
        <i className="fa-solid fa-star  " />
        <i className="fa-solid fa-star  " />
      </div>
    </div>
  </div>

  
  <div className="cnt">
    <div className="flat-container" data-aos="zoom-in-up">
      <div className="cover">
        <div className="text">
          <img className="dott" src={dot11} alt="" />
          <img className="dott1"src={dot12} alt="" />
          <h1>Testimonial</h1>
          <p>"Am fost foarte impresionat de caliatate prestari servicilor"</p>
        </div>
      </div>
      <img className="center" src="https://ak.picdn.net/offset/photos/5e8cf9bfd164c0404ea4c2ef/medium/photo.jpg" alt="" />
      <div className="star">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star pasiv" />
        <i className="fa-solid fa-star pasiv " />
      </div>
    </div>
    <div className="flat-container" data-aos="zoom-in-up">
      <div className="cover">
        <div className="text">
          <img className="dott" src={dot11} alt="" />
          <img className="dott1" src={dot12} alt="" />
          <h1>Testimonial</h1>
          <p>"Am fost foarte impresionat de caliatate prestari servicilor"</p>
        </div>
      </div>
      <img className="center" src="data:image/jpeg;base64,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" alt="" />
      <div className="star">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star pasiv" />
        <i className="fa-solid fa-star pasiv " />
      </div>
    </div>
    <div className="flat-container" data-aos="zoom-in-up">
      <div className="cover">
        <div className="text">
          <img className="dott" src={dot11} alt="" />
          <img className="dott1" src={dot12}  alt="" />
          <h1>Testimonial</h1>
          <p>"Am fost foarte impresionat de caliatate prestari servicilor"</p>
        </div>
      </div>
      <img className="center" src="https://haircutinspiration.com/wp-content/uploads/Teen-Boy-Haircuts-1-1-.jpg" alt="" />
      <div className="star">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star " />
        <i className="fa-solid fa-star  " />
      </div>
    </div>
    <div className="flat-container" data-aos="zoom-in-up">
      <div className="cover">
        <div className="text">
          <img className="dott" src={dot11} alt="" />
          <img className="dott1"src={dot12} alt="" />
          <h1>Testimonial</h1>
          <p>"Am fost foarte impresionat de caliatate prestari servicilor"</p>
        </div>
      </div>
      <img className="center" src="https://thumbs.dreamstime.com/b/closeup-portrait-boy-summer-day-closeup-portrait-boy-beauty-summer-day-159372104.jpg" alt="" />
      <div className="star">
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star" />
        <i className="fa-solid fa-star " />
        <i className="fa-solid fa-star  " />
        <i className="fa-solid fa-star pasiv " />
      </div>
    </div>
    <div className="lol" />
    <img src="./img.svg" alt="" />
  </div>





 </div>
  )
}

export default testimonial;