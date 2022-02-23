import React from 'react'
import '../style/menu.scss'

function menu({openMenu, setOpenMenu}) {
  return (
    <div className="div">
    <div className={(openMenu ? 'menu' : 'pasiv')}>
     <div className="wrapper">
       <ul>
         <li><a href="#intro">Home</a></li>
         <li><a href="#io">About</a></li>
         <li><a href="#projects">Projects</a></li>
         <li><a href="#contacts">Contacts</a></li>
       </ul>
     </div>
    </div>
    </div>
  )
}

export default menu