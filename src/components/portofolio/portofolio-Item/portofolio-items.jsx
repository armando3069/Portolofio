import React from 'react'
import './portofoliu-items.scss'


function Items({title,icon,text,gitHub,live}) {
  return (
    <div className='items1' data-aos="zoom-in">
        <div className="wrapper">

        <img src={icon} alt="" />
      
        </div>
        <div className="cover">
            <div className="profile">
            <h3>{title}</h3>
           <h5>{text}</h5>
            </div>
      

        <div className="link">
        <a href={gitHub}target="_blank" ><i id='git' class="fa-brands fa-github"></i></a>
        <a href={live} target="_blank" > <i id='git' class="fa-solid fa-share"></i></a>
        </div>


        </div>
    </div>
    
  )
}

export default Items;